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
// ═══════════════════════════════════════════════════════════════════════════

var SHEET_DAILY    = "Daily Log";
var SHEET_MEASURE  = "Measurements";
var SHEET_RIDES    = "Rides";
var SHEET_WORKOUTS = "Workout Log";
var SHEET_OVERLOAD = "Progressive Overload";
var SHEET_LABS     = "Lab Results";

var DAILY_HEADERS = [
  "Date","Weight (lbs)","Calories Eaten","Protein (g)","Carbs (g)","Fat (g)",
  "Calories Burned","Water (oz)","Sleep Hours","Sleep Quality (1-5)","Energy (1-5)",
  "Mood (1-5)","Steps","Meditation (min)","Meditation Types","Meditation Clarity (avg)",
  "Waist (in)","Chest (in)","Hips (in)","Thighs (in)","Neck (in)",
  "Fish Oil","Simvastatin","Foods","Exercises"
];

var MEASURE_HEADERS  = ["Date","Waist (in)","Chest (in)","Hips (in)","Thighs (in)","Neck (in)"];
var RIDE_HEADERS     = ["Date","Miles","Duration (min)","Effort","With Daughter","Notes"];
var WORKOUT_HEADERS  = ["Date","Exercises Completed","Exercise Count"];
var OVERLOAD_HEADERS = ["Row Key","Exercise ID","Exercise","Date","Band / Weight","Reps","Sets"];
var LAB_HEADERS      = ["Date","A1c (%)","HDL (mg/dL)","LDL (mg/dL)","Triglycerides (mg/dL)","Notes"];

// ── doGet — returns all daily rows as JSON (supports JSONP for CORS fallback)
function doGet(e) {
  var ss       = SpreadsheetApp.getActiveSpreadsheet();
  var callback = e && e.parameter && e.parameter.callback;
  var rows     = getDailyRows(ss);
  var json     = JSON.stringify(rows);
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

    // Rides payload is a separate push: { rides: [...] }
    if (payload.rides || payload.workouts || payload.overload || payload.labs) {
      processSupplementalData(ss, payload);
    } else {
      processDailyData(ss, payload);
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
  var msSheet = getOrCreate(ss, SHEET_MEASURE, MEASURE_HEADERS);

  var dailyIdx = buildIndex(sheet);
  var msIdx    = buildIndex(msSheet);

  Object.keys(data).sort().forEach(function(dateKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return;
    var d = data[dateKey];
    if (!d) return;

    // Filter out placeholder/restored foods
    var realFoods = (d.foods || []).filter(function(f) {
      return f.name !== "Restored from backup" && (f.cal || 0) > 0;
    });
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

    var foodsStr = realFoods.map(function(f) {
      return f.name + " (" + (f.cal || 0) + " kcal|" + Math.round(f.protein||0) + "p|" + Math.round(f.carbs||0) + "c|" + Math.round(f.fat||0) + "f)";
    }).join(", ");

    var exStr = realExs.map(function(e) {
      return e.name + " (" + (e.calories || 0) + " cal)";
    }).join(", ");

    var med        = d.meditation || [];
    var medMins    = med.reduce(function(a, s) { return a + (s.mins || 0); }, 0);
    var medTypes   = med.length ? uniqueArr(med.map(function(s) { return s.type || ""; })).join(", ") : "";
    var medCArr    = med.filter(function(s) { return s.clarity; }).map(function(s) { return s.clarity; });
    var medClarity = medCArr.length
      ? (medCArr.reduce(function(a, v) { return a + v; }, 0) / medCArr.length).toFixed(1) : "";

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

    upsertRow(sheet, dateKey, row, dailyIdx);

    // Measurements on separate sheet too
    if (meas.waist || meas.chest || meas.hips || meas.thighs || meas.neck) {
      upsertRow(msSheet, dateKey,
        [dateKey, meas.waist||"", meas.chest||"", meas.hips||"", meas.thighs||"", meas.neck||""],
        msIdx);
    }
  });
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
        [r.date, r.miles||"", r.duration||"", r.effort||"", r.daughter?"Yes":"No", r.notes||""],
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
           entry.band||"", entry.reps||"", entry.sets||""],
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
    sheet.getRange(index[key], 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
    index[key] = sheet.getLastRow();
    // Keep date column as plain text to prevent Sheets auto-coercion
    sheet.getRange(index[key], 1).setNumberFormat("@");
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
  return w.sleepHours || w.sleepQ || w.energy || w.mood || w.steps;
}

function hasMeasurementData(m) {
  if (!m) return false;
  return m.waist || m.chest || m.hips || m.thighs || m.neck;
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

