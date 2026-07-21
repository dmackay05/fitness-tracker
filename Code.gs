// ═══════════════════════════════════════════════════════════════════════════
// DAVID'S HEALTH SUITE — Google Apps Script
// Paste into Extensions → Apps Script in your Google Sheet.
// Deploy as Web App: Execute as "Me", Access "Anyone".
// No SS_ID needed — automatically uses the sheet this script is attached to.
//
// FIRST TIME SETUP:
//   1. Paste this code, Save, Deploy as Web App.
//   2. Tap Backup Now in the app.
//
// IF YOU HAVE DUPLICATE ROWS from a previous version:
//   Select repairAll from the function dropdown and click Run once.
//
// v2 CHANGES (USDA integration):
//   • Foods column now carries fiber when present: Name (240 kcal|3p|13c|22f|10.1fb)
//     Old-format entries are unaffected; the app parses both.
//   • New "Food Detail" sheet: one row per logged food (Date, Food, Grams,
//     FDC ID, Calories, Protein, Carbs, Fat, Fiber, Net Carbs) — flat and
//     typed for Tableau / pandas. Rows are replaced per-date on each push,
//     matching the upsert philosophy of the other sheets.
//
// v3 CHANGES (Biceps measurement):
//   • Added "Biceps (in)" to Daily Log and Measurements headers, appended
//     at the end so existing columns never shift. ensureHeaders_ backfills
//     the label on sheets created before this change.
//   • processDailyData / hasMeasurementData now read & write meas.biceps.
//
// v4 CHANGES (Resting HR + Blood Pressure backup):
//   • Added "Resting HR (bpm)", "BP Systolic (mmHg)", "BP Diastolic (mmHg)"
//     to Daily Log headers, appended at the end (existing columns unshifted).
//   • processDailyData now averages the day's rhrLog/bpLog readings (or the
//     legacy single-value fields) and writes that average to the sheet, so
//     these readings survive a local cache clear / reinstall the same way
//     Weight and Waist already do. The app's own local history (individual
//     timestamped readings, per-entry delete) still lives in local storage
//     only — the sheet stores one average per day for trend-graph recovery.
// ═══════════════════════════════════════════════════════════════════════════




var SHEET_DAILY    = "Daily Log";
var SHEET_MEASURE  = "Measurements";
var SHEET_RIDES    = "Rides";
var SHEET_WORKOUTS = "Workout Log";
var SHEET_OVERLOAD = "Progressive Overload";
var SHEET_LABS     = "Lab Results";
var SHEET_FOOD_DETAIL = "Food Detail";




var DAILY_HEADERS = [
  "Date","Weight (lbs)","Calories Eaten","Protein (g)","Carbs (g)","Fat (g)",
  "Calories Burned","Water (oz)","Sleep Hours","Sleep Quality (1-5)","Energy (1-5)",
  "Mood (1-5)","Steps","Meditation (min)","Meditation Types","Meditation Clarity (avg)",
  "Waist (in)","Chest (in)","Hips (in)","Thighs (in)","Neck (in)",
  "Fish Oil","Simvastatin","Foods","Exercises",
  "Fiber (g)","Net Carbs (g)",   // v2: appended at the end so existing columns never shift
  "Biceps (in)",                 // v3: appended at the end, same reasoning
  "Resting HR (bpm)","BP Systolic (mmHg)","BP Diastolic (mmHg)"  // v4: appended at the end, same reasoning
];




var MEASURE_HEADERS  = ["Date","Waist (in)","Chest (in)","Hips (in)","Thighs (in)","Neck (in)","Biceps (in)"];
var RIDE_HEADERS     = ["Date","Miles","Duration (min)","Effort","With Daughter","Notes","Avg HR (bpm)"];
var WORKOUT_HEADERS  = ["Date","Exercises Completed","Exercise Count"];
var OVERLOAD_HEADERS = ["Row Key","Exercise ID","Exercise","Date","Band / Weight","Reps","Sets","RIR"];
var LAB_HEADERS      = ["Date","A1c (%)","HDL (mg/dL)","LDL (mg/dL)","Triglycerides (mg/dL)","Notes"];
var FOOD_DETAIL_HEADERS = ["Date","Food","Grams","FDC ID","Calories",
                          "Protein (g)","Carbs (g)","Fat (g)","Fiber (g)","Net Carbs (g)"];




// ── doGet — returns all daily rows as JSON (supports JSONP for CORS fallback)
function doGet(e) {
  var ss       = SpreadsheetApp.getActiveSpreadsheet();
  var callback = e && e.parameter && e.parameter.callback;
  var json;
  if (e && e.parameter && e.parameter.config) {
    json = JSON.stringify(getConfig_(ss));
  } else if (e && e.parameter && e.parameter.overload) {
    json = JSON.stringify(getOverloadRows_(ss));
  } else {
    json = JSON.stringify(getDailyRows(ss));
  }
  if (callback) {
    return ContentService.createTextOutput(callback + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}




// ── doPost — receives full appData blob and writes to sheets
function doPost(e) {
  try {
    var raw     = (e && e.parameter && e.parameter.data) || "{}";
    var payload = JSON.parse(raw);
    if (!payload || typeof payload !== "object") return okResponse("invalid");
    var ss = SpreadsheetApp.getActiveSpreadsheet();




    // Config payload (settings sync): { config: {...} }
    if (payload.config) {
      saveConfig_(ss, payload.config);
      return okResponse("config-saved");
    }




    // Rides payload is a separate push: { rides: [...] }
    if (payload.rides || payload.workouts || payload.overload || payload.labs) {
      processSupplementalData(ss, payload);
    } else {
      processDailyData(ss, payload);
      writeFoodDetail_(ss, payload);   // v2: per-food analysis sheet
    }
    return okResponse("saved");
  } catch(err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}




// ═══════════════════════════════════════════════════════════════════════════
// PROCESS — Daily health data (food, water, weight, wellness, supplements)
// ═══════════════════════════════════════════════════════════════════════════
function processDailyData(ss, data) {
  var sheet   = getOrCreate(ss, SHEET_DAILY,   DAILY_HEADERS);
  ensureHeaders_(sheet, DAILY_HEADERS);  // v2/v3: adds trailing new labels to existing sheets
  var msSheet = getOrCreate(ss, SHEET_MEASURE, MEASURE_HEADERS);
  ensureHeaders_(msSheet, MEASURE_HEADERS);  // v3: backfill Biceps label on existing Measurements sheets




  var dailyIdx = buildIndex(sheet);
  var msIdx    = buildIndex(msSheet);




  Object.keys(data).sort().forEach(function(dateKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return;
    var d = data[dateKey];
    if (!d) return;




    // Filter out placeholder/restored foods
    var realFoods = realFoods_(d);
    var realExs = (d.exercises || []).filter(function(e) {
      return e.type !== "restored";
    });




    // Skip completely empty days
    var hasData = realFoods.length > 0
      || (d.weight  && parseFloat(d.weight)  > 0)
      || (d.waterOz && parseFloat(d.waterOz) > 0)
      || realExs.length > 0
      || hasWellnessData(d.wellness)
      || hasMeasurementData(d.measurements);
    if (!hasData) return;




    var w    = d.wellness     || {};
    var sup  = d.supplements  || {};
    var meas = d.measurements || {};




    var foodsStr = realFoods.map(foodToStr_).join(", ");




    var exStr = realExs.map(function(e) {
      var nm = ((e.name||"")+"").replace(/,/g, " ").replace(/[|@]/g, "");
      var base = nm + " (" + (e.calories || 0) + " cal";
      if (e.sets && e.reps) {
        var l = ((e.load||"")+"").replace(/[)\|,@]/g, "");
        var r = ((e.reps||"")+"").replace(/,/g, "/").replace(/[)\|@]/g, "");
        base += "|" + e.sets + "x" + r + (l ? ("@"+l) : "");
      }
      return base + ")";
    }).join(", ");




    var med        = d.meditation || [];
    var medMins    = med.reduce(function(a, s) { return a + (s.mins || 0); }, 0);
    var medTypes   = med.length ? uniqueArr(med.map(function(s) { return s.type || ""; })).join(", ") : "";
    var medCArr    = med.filter(function(s) { return s.clarity; }).map(function(s) { return s.clarity; });
    var medClarity = medCArr.length
      ? (medCArr.reduce(function(a, v) { return a + v; }, 0) / medCArr.length).toFixed(1) : "";




    // v4: Resting HR / BP — average of the day's logged readings (or legacy single value)
    var rhrReadings = (w.rhrLog && w.rhrLog.length) ? w.rhrLog
      : (w.restingHR != null ? [{ v: w.restingHR }] : []);
    var rhrAvg = rhrReadings.length
      ? Math.round(rhrReadings.reduce(function(a, r) { return a + (r.v || 0); }, 0) / rhrReadings.length) : "";
    var bpReadings = (w.bpLog && w.bpLog.length) ? w.bpLog
      : ((w.bp && w.bp.sys != null) ? [{ sys: w.bp.sys, dia: w.bp.dia }] : []);
    var bpSysAvg = bpReadings.length
      ? Math.round(bpReadings.reduce(function(a, r) { return a + (r.sys || 0); }, 0) / bpReadings.length) : "";
    var bpDiaAvg = bpReadings.length
      ? Math.round(bpReadings.reduce(function(a, r) { return a + (r.dia || 0); }, 0) / bpReadings.length) : "";




    var row = [
      dateKey,
      d.weight  || "",
      sumField(realFoods, "cal"),
      sumField(realFoods, "protein"),
      sumField(realFoods, "carbs"),
      sumField(realFoods, "fat"),
      sumField(realExs,   "calories"),
      (typeof d.waterOz === "number") ? d.waterOz : (parseFloat(d.waterOz) || ""),
      w.sleepHours || "", w.sleepQ || "", w.energy || "", w.mood || "", w.steps || "",
      medMins || "", medTypes, medClarity,
      meas.waist || "", meas.chest || "", meas.hips || "", meas.thighs || "", meas.neck || "",
      sup["fish-oil"]    ? "Yes" : "",
      sup["simvastatin"] ? "Yes" : "",
      foodsStr, exStr
    ];


    // v2: Fiber + Net Carbs (carbs − fiber), appended at the end
    var fiberSum = realFoods.reduce(function(a, f) { return a + (parseFloat(f.fiber) || 0); }, 0);
    var carbsSum = realFoods.reduce(function(a, f) { return a + (parseFloat(f.carbs) || 0); }, 0);
    row.push(fiberSum > 0 ? round1_(fiberSum) : "");
    row.push((realFoods.length && fiberSum > 0) ? round1_(Math.max(0, carbsSum - fiberSum)) : "");


    // v3: Biceps, appended at the end (same reasoning as Fiber / Net Carbs above)
    row.push(meas.biceps || "");

    // v4: Resting HR / BP, appended at the end (same reasoning)
    row.push(rhrAvg);
    row.push(bpSysAvg);
    row.push(bpDiaAvg);




    upsertRow(sheet, dateKey, row, dailyIdx);




    // Measurements on separate sheet too
    if (meas.waist || meas.chest || meas.hips || meas.thighs || meas.neck || meas.biceps) {
      upsertRow(msSheet, dateKey,
        [dateKey, meas.waist||"", meas.chest||"", meas.hips||"", meas.thighs||"", meas.neck||"", meas.biceps||""],
        msIdx);
    }
  });
}




// ═══════════════════════════════════════════════════════════════════════════
// v2 — FOOD HELPERS
// ═══════════════════════════════════════════════════════════════════════════


// Same placeholder filter used everywhere foods are written
function realFoods_(d) {
  return (d.foods || []).filter(function(f) {
    return f.name !== "Restored from backup" && (f.cal || 0) > 0;
  });
}


// Foods column formatter. Appends a fiber segment only when fiber > 0,
// and a timestamp segment when the food's id carries one, so entries
// without them are byte-identical to the old format.
//   Old: Name (240 kcal|3p|13c|22f)
//   New: Name (240 kcal|3p|13c|22f|10.1fb|t1737400000000)
// The timestamp lets the app restore which meal window (breakfast/lunch/
// dinner/etc) a food belonged to even after a full sync round-trip —
// without it, every synced food defaults to a midday guess.
function foodToStr_(f) {
  var s = f.name + " (" + (f.cal || 0) + " kcal|"
        + Math.round(f.protein || 0) + "p|"
        + Math.round(f.carbs   || 0) + "c|"
        + Math.round(f.fat     || 0) + "f";
  var fb = parseFloat(f.fiber) || 0;
  if (fb > 0) s += "|" + (Math.round(fb * 10) / 10) + "fb";
  var tsMatch = String(f.id || "").match(/^(\d{13})/);
  if (tsMatch) s += "|t" + tsMatch[1];
  return s + ")";
}


// "Food Detail" — one row per logged food, replaced per-date on each push.
// Dates NOT present in this push keep their existing rows, so history is
// preserved even if a device pushes with partial local data.
function writeFoodDetail_(ss, data) {
  var sheet = getOrCreate(ss, SHEET_FOOD_DETAIL, FOOD_DETAIL_HEADERS);
  var tz    = ss.getSpreadsheetTimeZone();


  // Dates this push is authoritative for
  var pushDates = {};
  Object.keys(data).forEach(function(k) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(k)) pushDates[k] = true;
  });


  // Keep existing rows whose date is not in this push
  var existing = sheet.getDataRange().getValues();
  var kept = [];
  for (var i = 1; i < existing.length; i++) {
    var dk = normDate(existing[i][0], tz);
    if (dk && !pushDates[dk]) kept.push(existing[i].slice(0, FOOD_DETAIL_HEADERS.length));
  }


  // Fresh rows from the payload
  var fresh = [];
  Object.keys(data).forEach(function(dateKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return;
    var d = data[dateKey];
    if (!d) return;
    realFoods_(d).forEach(function(f) {
      // grams: structured field on USDA-logged entries, else parse "(170g)" from the name
      var grams = parseFloat(f.grams) || 0;
      if (!grams && f.name) {
        var m = String(f.name).match(/\((\d+(?:\.\d+)?)g\)/);
        if (m) grams = parseFloat(m[1]);
      }
      var carbs = parseFloat(f.carbs) || 0;
      var fiber = parseFloat(f.fiber) || 0;
      fresh.push([
        dateKey, f.name || "", grams || "", f.fdcId || "",
        Math.round(parseFloat(f.cal) || 0),
        round1_(f.protein), round1_(carbs), round1_(f.fat),
        fiber ? round1_(fiber) : "",
        fiber ? round1_(Math.max(0, carbs - fiber)) : ""
      ]);
    });
  });


  // Rewrite below the header, sorted by date for a tidy sheet
  var all = kept.concat(fresh).sort(function(a, b) {
    return String(a[0]) < String(b[0]) ? -1 : (String(a[0]) > String(b[0]) ? 1 : 0);
  });
  var maxRows = sheet.getMaxRows();
  if (maxRows > 1) sheet.getRange(2, 1, maxRows - 1, FOOD_DETAIL_HEADERS.length).clearContent();
  if (all.length) {
    sheet.getRange(2, 1, all.length, FOOD_DETAIL_HEADERS.length).setValues(all);
    sheet.getRange(2, 1, all.length, 1).setNumberFormat("@"); // keep dates as text
  }
}


function round1_(n) { return Math.round((parseFloat(n) || 0) * 10) / 10; }


// Writes any header labels the existing sheet is missing (new columns are
// only ever appended at the end, so this never shifts existing data).
function ensureHeaders_(sheet, headers) {
  var lastCol = sheet.getLastColumn();
  if (lastCol >= headers.length) return;
  var tail = headers.slice(lastCol);
  var rng = sheet.getRange(1, lastCol + 1, 1, tail.length);
  rng.setValues([tail]);
  rng.setFontWeight("bold").setBackground("#1a1a2e").setFontColor("#ffffff");
}




// ═══════════════════════════════════════════════════════════════════════════
// PROCESS — Rides, Workouts, Overload, Labs
// ═══════════════════════════════════════════════════════════════════════════
function processSupplementalData(ss, D) {
  if (D.rides && D.rides.length) {
    var rSheet = getOrCreate(ss, SHEET_RIDES, RIDE_HEADERS);
    var rIdx   = buildIndex(rSheet);
    D.rides.forEach(function(r) {
      if (!r.date) return;
      upsertRow(rSheet, r.date,
        [r.date, r.miles||"", r.duration||"", r.effort||"", r.daughter?"Yes":"No", r.notes||"", r.avgHr||""],
        rIdx);
    });
  }




  if (D.labs && D.labs.length) {
    var lSheet = getOrCreate(ss, SHEET_LABS, LAB_HEADERS);
    var lIdx   = buildIndex(lSheet);
    D.labs.forEach(function(lab) {
      if (!lab.date) return;
      upsertRow(lSheet, lab.date,
        [lab.date, lab.a1c||"", lab.hdl||"", lab.ldl||"", lab.trig||"", lab.notes||""],
        lIdx);
    });
  }




  if (D.overload && Object.keys(D.overload).length) {
    var oSheet = getOrCreate(ss, SHEET_OVERLOAD, OVERLOAD_HEADERS);
    var oIdx   = buildIndex(oSheet);
    Object.keys(D.overload).forEach(function(exId) {
      (D.overload[exId] || []).forEach(function(entry) {
        if (!entry.date) return;
        var rowKey = exId + "|" + entry.date;
        upsertRow(oSheet, rowKey,
          [rowKey, exId, exId.replace(/-/g," "), entry.date,
           entry.band||"", entry.reps||"", entry.sets||"", (entry.rir==null?"":entry.rir)],
          oIdx);
      });
    });
  }




  if (D.workouts && Object.keys(D.workouts).length) {
    var wSheet = getOrCreate(ss, SHEET_WORKOUTS, WORKOUT_HEADERS);
    var wIdx   = buildIndex(wSheet);
    Object.keys(D.workouts).sort().forEach(function(dateKey) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return;
      var completed = Object.keys(D.workouts[dateKey] || {});
      if (!completed.length) return;
      upsertRow(wSheet, dateKey,
        [dateKey, completed.map(function(id){ return id.replace(/-/g," "); }).join(", "), completed.length],
        wIdx);
    });
  }
}




// ═══════════════════════════════════════════════════════════════════════════
// READ — return array of row objects for doGet
// ═══════════════════════════════════════════════════════════════════════════
function getDailyRows(ss) {
  var sheet = ss.getSheetByName(SHEET_DAILY);
  if (!sheet) return [];
  var tz   = ss.getSpreadsheetTimeZone();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  return data.slice(1).map(function(row) {
    var obj = {};
    headers.forEach(function(h, i) {
      obj[String(h)] = (h === "Date")
        ? normDate(row[i], tz)
        : (row[i] !== undefined ? String(row[i]) : "");
    });
    return obj;
  });
}




// ═══════════════════════════════════════════════════════════════════════════
// ONE-TIME REPAIR — run repairAll() from the function dropdown if you have
// duplicate rows from a previous version. Safe to run multiple times.
// ═══════════════════════════════════════════════════════════════════════════
function repairAll() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = [SHEET_DAILY, SHEET_MEASURE, SHEET_RIDES, SHEET_WORKOUTS, SHEET_LABS];
  var report = [];
  sheets.forEach(function(name) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) return;
    var removed = dedupeSheet(sheet);
    textifyDateColumn(sheet);
    report.push(name + ": removed " + removed + " duplicate(s)");
  });
  Logger.log(report.join("\n"));
}




// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════




// Normalize any date value to "YYYY-MM-DD" string
function normDate(v, tz) {
  if (v === null || v === undefined || v === "") return "";
  if (Object.prototype.toString.call(v) === "[object Date]") {
    return Utilities.formatDate(v, tz || "UTC", "yyyy-MM-dd");
  }
  var s = String(v).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.substring(0, 10);
  var d = new Date(s);
  if (!isNaN(d.getTime())) {
    return Utilities.formatDate(d, tz || "UTC", "yyyy-MM-dd");
  }
  return s;
}




// Build { key -> sheetRowNumber } map, normalizing date keys
function buildIndex(sheet) {
  var tz    = sheet.getParent().getSpreadsheetTimeZone();
  var index = {};
  var data  = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    var k = normDate(data[i][0], tz) || String(data[i][0]).trim();
    if (k) index[k] = i + 1; // last occurrence wins (dedup on next write)
  }
  return index;
}




// Update existing row or append new one
function upsertRow(sheet, key, row, index) {
  key = String(key).trim();
  if (index[key]) {
    var r = sheet.getRange(index[key], 1, 1, row.length);
    r.setNumberFormat("@");
    r.setValues([row]);
  } else {
    sheet.appendRow(row);
    index[key] = sheet.getLastRow();
    // Force the whole row to plain text so Sheets never auto-converts
    // slash-separated values (reps like "10/12", band like "30/40") into dates.
    sheet.getRange(index[key], 1, 1, row.length).setNumberFormat("@");
  }
}




function getOrCreate(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    var hdrRange = sheet.getRange(1, 1, 1, headers.length);
    hdrRange.setValues([headers]);
    hdrRange.setFontWeight("bold")
            .setBackground("#1a1a2e")
            .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    // Set date column (col A) as plain text throughout
    sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1).setNumberFormat("@");
  }
  return sheet;
}




function dedupeSheet(sheet) {
  var tz   = sheet.getParent().getSpreadsheetTimeZone();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return 0;
  var lastForKey = {};
  for (var i = 1; i < data.length; i++) {
    var k = normDate(data[i][0], tz) || String(data[i][0]).trim();
    if (k) lastForKey[k] = i;
  }
  var keep = {};
  Object.keys(lastForKey).forEach(function(k) { keep[lastForKey[k]] = true; });
  var toDelete = [];
  for (var i = 1; i < data.length; i++) {
    var k = normDate(data[i][0], tz) || String(data[i][0]).trim();
    if (k && !keep[i]) toDelete.push(i + 1);
  }
  toDelete.sort(function(a, b) { return b - a; });
  toDelete.forEach(function(r) { sheet.deleteRow(r); });
  return toDelete.length;
}




function textifyDateColumn(sheet) {
  var tz   = sheet.getParent().getSpreadsheetTimeZone();
  var last = sheet.getLastRow();
  if (last < 2) return;
  var rng  = sheet.getRange(2, 1, last - 1, 1);
  var vals = rng.getValues().map(function(r) { return [normDate(r[0], tz) || r[0]]; });
  rng.setNumberFormat("@");
  rng.setValues(vals);
}




function sumField(arr, field) {
  if (!arr || !arr.length) return "";
  var total = arr.reduce(function(a, x) { return a + (parseFloat(x[field]) || 0); }, 0);
  return total ? Math.round(total) : "";
}




function hasWellnessData(w) {
  if (!w) return false;
  return w.sleepHours || w.sleepQ || w.energy || w.mood || w.steps
    || (w.rhrLog && w.rhrLog.length) || (w.bpLog && w.bpLog.length)
    || (w.restingHR != null) || (w.bp && w.bp.sys != null);
}




function hasMeasurementData(m) {
  if (!m) return false;
  return m.waist || m.chest || m.hips || m.thighs || m.neck || m.biceps;
}




function uniqueArr(arr) {
  var seen = {};
  return arr.filter(function(v) {
    if (seen[v]) return false;
    seen[v] = true;
    return true;
  });
}




function okResponse(msg) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", msg: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}




// ── SETTINGS SYNC (config stored as JSON in a "Config" tab) ──────────────
function getOverloadRows_(ss) {
  var sheet = ss.getSheetByName(SHEET_OVERLOAD);
  if (!sheet) return [];
  var tz   = ss.getSpreadsheetTimeZone();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  return data.slice(1).map(function(row) {
    var obj = {};
    headers.forEach(function(h, i) {
      obj[String(h)] = (String(h) === "Date")
        ? normDate(row[i], tz)
        : (row[i] !== undefined ? String(row[i]) : "");
    });
    return obj;
  });
}
function getConfig_(ss){
  var sh = ss.getSheetByName("Config");
  if (!sh) return {};
  var v = sh.getRange("A1").getValue();
  if (!v) return {};
  try { return JSON.parse(v); } catch(e){ return {}; }
}
function saveConfig_(ss, cfg){
  var sh = ss.getSheetByName("Config");
  if (!sh) sh = ss.insertSheet("Config");
  sh.getRange("A1").setValue(JSON.stringify(cfg));
  sh.getRange("C1").setValue(new Date());
}


