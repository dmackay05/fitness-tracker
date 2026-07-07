var EXERCISES = [
  {name:"Mountain Bike Ride (60 min)",calories:550,type:"cardio"},
  {name:"Mountain Bike Ride (45 min)",calories:420,type:"cardio"},
  {name:"Mountain Bike Ride (30 min)",calories:275,type:"cardio"},
  {name:"Jump Rope (15 min)",calories:180,type:"cardio"},
  {name:"Walk (30 min)",calories:130,type:"cardio"},
  {name:"Day 1 - Upper Push/Pull (bands)",calories:220,type:"strength"},
  {name:"Day 2 - Lower + Core (bands)",calories:240,type:"strength"},
  {name:"Day 3 - Upper Hypertrophy (bands)",calories:210,type:"strength"},
  {name:"Day 4 - Lower + Core Strength (bands)",calories:250,type:"strength"},
  {name:"Warm-Up - Balance Board + Jump Rope + KB Halos (9 min)",calories:70,type:"cardio"},
  {name:"Jump Squats (3 sets)",calories:45,type:"cardio"},
  {name:"Ball Slams (3 sets)",calories:40,type:"cardio"},
  {name:"Turkish Get-Up (KB)",calories:50,type:"strength"},
  {name:"Step-Ups (3 sets)",calories:40,type:"strength"},
  {name:"Stability Ball Leg Curl (3 sets)",calories:30,type:"strength"},
  {name:"Squat to Press (3 sets)",calories:50,type:"strength"},
  {name:"Goblet Squat (3-4 sets)",calories:40,type:"strength"},
  {name:"Iso-Hold Bicep Curls (3 sets)",calories:25,type:"strength"},
  {name:"Forward Fold Curls (3 sets)",calories:25,type:"strength"},
  {name:"Tricep Kickbacks (3 sets)",calories:25,type:"strength"},
  {name:"Narrow Rows (3 sets)",calories:30,type:"strength"},
  {name:"Curl to Shoulder Press (3 sets)",calories:35,type:"strength"},
  {name:"Front to Lateral Raise (3 sets)",calories:25,type:"strength"},
  {name:"Curl to Cross Press (3 sets)",calories:30,type:"strength"},
  {name:"Shoulder Press to Tricep Ext (3 sets)",calories:30,type:"strength"},
  {name:"Deadlift to Alt Row (3 sets)",calories:40,type:"strength"},
  {name:"Overhead Press (3 sets)",calories:35,type:"strength"},
  {name:"Core Finisher - Hollow / Bicycle / Leg Raise",calories:35,type:"strength"},
  {name:"Russian Twists (3 sets)",calories:25,type:"strength"},
  {name:"Dead Hangs + Playground",calories:90,type:"mobility"},
  {name:"Morning Mobility Routine",calories:40,type:"mobility"},
  {name:"Evening Restorative Sequence",calories:30,type:"mobility"},
  {name:"Yoga (10 min)",calories:25,type:"yoga"},
  {name:"Yoga (20 min)",calories:50,type:"yoga"},
  {name:"Yoga (30 min)",calories:75,type:"yoga"},
  {name:"Yoga (45 min)",calories:110,type:"yoga"},
  {name:"Yoga (60 min)",calories:145,type:"yoga"}
];

var PRESET_FOODS = [
  {name:"3 Boiled Eggs",cal:210,protein:18,carbs:0,fat:15},
  {name:"Greek Yogurt (1 cup)",cal:130,protein:18,carbs:9,fat:0},
  {name:"Whey Protein Shake",cal:160,protein:27,carbs:6,fat:3},
  {name:"Cottage Cheese (1 cup)",cal:200,protein:25,carbs:8,fat:4},
  {name:"Chicken Breast (6 oz)",cal:275,protein:52,carbs:0,fat:6},
  {name:"Salmon Fillet (6 oz)",cal:350,protein:40,carbs:0,fat:20},
  {name:"Ground Turkey 93% (6 oz)",cal:220,protein:42,carbs:0,fat:6},
  {name:"Quinoa (1 cup cooked)",cal:220,protein:8,carbs:40,fat:4},
  {name:"Brown Rice (1 cup cooked)",cal:215,protein:5,carbs:45,fat:2},
  {name:"Black Beans (1 cup)",cal:225,protein:15,carbs:40,fat:1},
  {name:"Almonds (1 oz)",cal:165,protein:6,carbs:6,fat:14},
  {name:"Walnuts (1 oz)",cal:185,protein:4,carbs:4,fat:18},
  {name:"Whole Grain Toast (1 slice)",cal:80,protein:4,carbs:15,fat:1},
  {name:"Avocado (half)",cal:120,protein:1,carbs:6,fat:11},
  {name:"Super Smoothie (Clovis Farms)",cal:180,protein:6,carbs:34,fat:3},
  {name:"Olive Oil (1 tbsp)",cal:120,protein:0,carbs:0,fat:14},
  {name:"Feta Cheese (1 oz)",cal:75,protein:4,carbs:1,fat:6},
  {name:"Shrimp (6 oz)",cal:165,protein:36,carbs:0,fat:2},
  {name:"Lentils cooked (1 cup)",cal:230,protein:18,carbs:40,fat:1},
  {name:"Pork Tenderloin (6 oz)",cal:200,protein:40,carbs:0,fat:4},
  {name:"ON Gold Standard Whey (1 scoop)",cal:120,protein:24,carbs:3,fat:1}
];

var SUPPS = []; // loaded from store after the storage layer is defined (see config block)
// ═══════════════════════════════════════════════════════════════════════
// DAVID'S HEALTH SUITE — TRACKER CORE  (single source of truth, no dupes)
// ═══════════════════════════════════════════════════════════════════════

// ── SAFE STORAGE (works on file://, content://, and https://) ───────────
var _memStore = {};
var store = (function() {
  try {
    localStorage.setItem('__test__', '1');
    localStorage.removeItem('__test__');
    return {
      get: function(k) { try { return localStorage.getItem(k); } catch(e) { return _memStore[k]||null; } },
      set: function(k,v) { try { localStorage.setItem(k,v); } catch(e) { _memStore[k]=v; } },
      remove: function(k) { try { localStorage.removeItem(k); } catch(e) { delete _memStore[k]; } }
    };
  } catch(e) {
    return {
      get: function(k) { return _memStore[k]||null; },
      set: function(k,v) { _memStore[k]=v; },
      remove: function(k) { delete _memStore[k]; }
    };
  }
})();

// ── SECRETS — stored in localStorage, entered via Settings UI ───────────
var APP_BUILD = "v8 — 2026-07-03";
try{ console.log("Fitness Tracker build:", APP_BUILD); }catch(e){}
var SHEETS_URL   = store.get('ft_sheets_url')  || "";
var APP_PIN = (function(){ var p=store.get('ft_pin'); p=(p==null?"":String(p)).trim(); return /^\d{4}$/.test(p)?p:""; })();
var START_WEIGHT = parseFloat(store.get('ft_start_weight')) || 200;
var USER_NAME = store.get('ft_name') || "";
var GOAL_WEIGHT = parseFloat(store.get('ft_goal_weight')) || 0;
var GOALS = {
  cal:     parseInt(store.get('ft_cal'))     || 2000,
  calRest:     parseInt(store.get('ft_cal_rest'))     || 2050,
  calActive:   parseInt(store.get('ft_cal_active'))   || 2250,
  calRide:     parseInt(store.get('ft_cal_ride'))      || 2350,
  calRecovery: parseInt(store.get('ft_cal_recovery'))  || 2200,
  protein: parseInt(store.get('ft_protein')) || 170,
  carbs:   parseInt(store.get('ft_carbs'))   || 200,
  fat:     parseInt(store.get('ft_fat'))     || 65,
  fiber:   parseInt(store.get('ft_fiber'))   || 30,
  burned:  parseInt(store.get('ft_burned'))  || 400
};

// Day-of-week -> day-type map for calorie targeting.
// 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
// Mon/Tue/Thu/Fri = lift days ("active"), Sat = ride day, Wed = active recovery (yoga + walk/ride), Sun = true rest
var DAY_TYPE_MAP = {0:"rest", 1:"active", 2:"active", 3:"recovery", 4:"active", 5:"active", 6:"ride"};
function dayTypeForKey(dateKey){
  var d = keyToDate(dateKey);
  return DAY_TYPE_MAP[d.getDay()] || "active";
}
function calGoalForKey(dateKey){
  var t = dayTypeForKey(dateKey);
  if(t==="rest") return GOALS.calRest;
  if(t==="ride") return GOALS.calRide;
  if(t==="recovery") return GOALS.calRecovery;
  return GOALS.calActive;
}
function calGoalLabelForKey(dateKey){
  var t = dayTypeForKey(dateKey);
  if(t==="rest") return "Rest day";
  if(t==="ride") return "Ride day";
  if(t==="recovery") return "Active recovery";
  return "Active/lift day";
}
var WATER_GOAL = parseInt(store.get('ft_water')) || 64;
try { var _sv = JSON.parse(store.get('ft_supps')||'null'); if(Array.isArray(_sv)) SUPPS = _sv; } catch(e){}
var TREND_METRICS=[
  {key:"weight",  label:"Weight",   unit:"lbs", dir:"lower",   color:"#a78bfa", goal:function(){return GOAL_WEIGHT||0;}, get:function(d){return (d.weight!=null&&d.weight!=="")?d.weight:null;}},
  {key:"waist",   label:"Waist",    unit:"in",  dir:"lower",   color:"#38bdf8", get:function(d){return _meas(d,"waist");}},
  {key:"chest",   label:"Chest",    unit:"in",  dir:"lower",   color:"#22d3ee", get:function(d){return _meas(d,"chest");}},
  {key:"hips",    label:"Hips",     unit:"in",  dir:"lower",   color:"#2dd4bf", get:function(d){return _meas(d,"hips");}},
  {key:"thighs",  label:"Thighs",   unit:"in",  dir:"lower",   color:"#34d399", get:function(d){return _meas(d,"thighs");}},
  {key:"neck",    label:"Neck",     unit:"in",  dir:"lower",   color:"#60a5fa", get:function(d){return _meas(d,"neck");}},
  {key:"cal",     label:"Calories", unit:"kcal",dir:"neutral", color:"#5eead4", goal:function(){return GOALS.calActive||GOALS.cal||0;}, get:function(d){return (d.foods&&d.foods.length)?d.foods.reduce(function(a,x){return a+(+x.cal||0);},0):null;}},
  {key:"protein", label:"Protein",  unit:"g",   dir:"higher",  color:"#fbbf24", goal:function(){return GOALS.protein||0;}, get:function(d){return (d.foods&&d.foods.length)?d.foods.reduce(function(a,x){return a+(+x.protein||0);},0):null;}},
  {key:"fiber",   label:"Fiber",    unit:"g",   dir:"higher",  color:"#4ade80", goal:function(){return GOALS.fiber||0;}, get:function(d){if(!d.foods||!d.foods.length)return null;var s=d.foods.reduce(function(a,x){return a+(+x.fiber||0);},0);return s>0?Math.round(s*10)/10:null;}},
  {key:"burned",  label:"Burned",   unit:"kcal",dir:"higher",  color:"#fb923c", goal:function(){return GOALS.burned||0;}, get:function(d){return (d.exercises&&d.exercises.length)?d.exercises.reduce(function(a,x){return a+(+x.calories||0);},0):null;}},
  {key:"water",   label:"Water",    unit:"oz",  dir:"higher",  color:"#38bdf8", goal:function(){return WATER_GOAL||0;}, get:function(d){return (d.waterOz>0)?d.waterOz:null;}},
  {key:"traintime", label:"Time Trained", unit:"min", dir:"neutral", color:"#cfe84f", get:function(d){return (d.exercises&&d.exercises.length)?Math.round(d.exercises.reduce(function(a,ex){return a+dsEstimateSeconds(ex);},0)/60):null;}},
  {key:"bodyfat", label:"Body Fat",  unit:"%",  dir:"lower",  color:"#f472b6", get:function(d){return (d.bodyComp&&d.bodyComp.bodyFat!=null)?d.bodyComp.bodyFat:null;}},
  {key:"muscle",  label:"Muscle",    unit:"lbs",dir:"higher", color:"#facc15", get:function(d){return (d.bodyComp&&d.bodyComp.muscle!=null)?d.bodyComp.muscle:null;}},
  {key:"bcWater", label:"Body Water",unit:"%",  dir:"neutral",color:"#22d3ee", get:function(d){return (d.bodyComp&&d.bodyComp.water!=null)?d.bodyComp.water:null;}},
  {key:"bone",    label:"Bone Mass", unit:"lbs",dir:"neutral",color:"#c4b5fd", get:function(d){return (d.bodyComp&&d.bodyComp.bone!=null)?d.bodyComp.bone:null;}},
  {key:"squathold", label:"Squat Hold", unit:"sec", dir:"higher", color:"#fb7185", get:function(d){
    var e=d.exercises&&d.exercises.filter(function(x){return x.id==="sess_mob-squathold";})[0];
    if(!e||e.reps==null) return null;
    var v=parseInt(e.reps,10); return isNaN(v)?null:v;
  }}
];

// EXERCISES, PRESET_FOODS, SUPPS injected just above this block (data.js)

// ── DATE (local time only) ──────────────────────────────────────────────
function localDateKey(d){ d=d||new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function todayKey(){ return localDateKey(new Date()); }
function keyToDate(k){ var p=k.split("-"); return new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2])); }
function prettyDate(k){ return keyToDate(k).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}); }

// ── STATE ───────────────────────────────────────────────────────────────
var appData = {};
try { appData = JSON.parse(store.get("ft_data")||"{}"); } catch(e){ appData={}; }
var activeDate = todayKey();
var wellnessRatings = {sleepQ:0, energy:0, mood:0, medClarity:0};
var medType = "";
var rideEffort = "", rideDaughter = false;

function getDay(key){
  key = key || activeDate;
  if(!appData[key]) appData[key] = {foods:[],exercises:[],weight:null,waterOz:0,wellness:{},supplements:{},measurements:{},meditation:[],rides:[]};
  var d = appData[key];
  if(!d.foods) d.foods=[]; if(!d.exercises) d.exercises=[];
  if(!d.waterOz) d.waterOz=0; if(!d.wellness) d.wellness={};
  if(!d.supplements) d.supplements={}; if(!d.measurements) d.measurements={};
  if(!d.meditation) d.meditation=[]; if(!d.rides) d.rides=[];
  return d;
}
function getTotals(){
  return getDay().foods.reduce(function(a,x){
    return {cal:a.cal+(+x.cal||0),protein:a.protein+(+x.protein||0),carbs:a.carbs+(+x.carbs||0),fat:a.fat+(+x.fat||0),fiber:a.fiber+(+x.fiber||0)};
  },{cal:0,protein:0,carbs:0,fat:0,fiber:0});
}
function getBurned(){ return getDay().exercises.reduce(function(a,e){return a+(+e.calories||0);},0); }
function getLatestWeight(){
  var keys = Object.keys(appData).filter(function(k){return appData[k]&&appData[k].weight;}).sort();
  return keys.length ? appData[keys[keys.length-1]].weight : START_WEIGHT;
}
function getWeekKeys(){ var a=[]; for(var i=6;i>=0;i--){var d=new Date();d.setDate(d.getDate()-i);a.push(localDateKey(d));} return a; }
function isToday(){ return activeDate===todayKey(); }

// ── SAVE + AUTO-SYNC ────────────────────────────────────────────────────
var _syncTimer=null, _lastHash=null;
function saveAll(){
  try { store.set("ft_data", JSON.stringify(appData)); } catch(e){}
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(function(){
    var hash = JSON.stringify(appData).length+"_"+(appData[todayKey()]?JSON.stringify(appData[todayKey()]).length:0);
    if(hash!==_lastHash){ _lastHash=hash; pushToSheets(); }
  }, 8000); // debounce: push 8s after last edit
}
function saveDay(day,key){ key=key||activeDate; appData[key]=day; saveAll(); }

function buildFtPayload(){ return appData; }
function buildWkPayload(){
  var rides=[];
  Object.keys(appData).forEach(function(k){
    (appData[k].rides||[]).forEach(function(r){
      rides.push({date:k,miles:r.miles||"",duration:r.duration||"",effort:r.effort||"",daughter:!!r.daughter,notes:r.notes||""});
    });
  });
  return rides.length ? {rides:rides} : null;
}
function buildOverloadPayload(){
  var ov={};
  Object.keys(appData).forEach(function(k){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(k)) return;
    (appData[k].exercises||[]).forEach(function(e){
      if(!e || !e.id || String(e.id).indexOf("sess_")!==0) return;
      if(!e.sets && !e.reps && !e.load) return;
      var exId=String(e.id).slice(5);
      if(!ov[exId]) ov[exId]=[];
      ov[exId].push({date:k, band:e.load||"", reps:(e.reps!=null?String(e.reps):""), sets:(e.sets!=null?String(e.sets):""), rir:(e.rir!=null?e.rir:"")});
    });
  });
  return Object.keys(ov).length ? {overload:ov} : null;
}
function postPayload(payload){
  return fetch(SHEETS_URL,{method:"POST",mode:"no-cors",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:"data="+encodeURIComponent(JSON.stringify(payload))});
}
function pushToSheets(){
  if(!SHEETS_URL) return Promise.resolve();
  var chain = postPayload(buildFtPayload());
  var wk = buildWkPayload();
  if(wk){ chain = chain.then(function(){return new Promise(function(r){setTimeout(r,700);});}).then(function(){return postPayload(wk);}); }
  var ov = buildOverloadPayload();
  if(ov){ chain = chain.then(function(){return new Promise(function(r){setTimeout(r,700);});}).then(function(){return postPayload(ov);}); }
  return chain.catch(function(){});
}

// ── PROGRESSIVE OVERLOAD CLOUD CACHE (cross-device last-time history) ───
var DS_CLOUD_LAST = {};
function fetchOverloadCache(){
  if(!SHEETS_URL) return;
  function ingest(rows){
    if(!rows || !rows.length) return;
    rows.forEach(function(r){
      var exId=r["Exercise ID"]||""; var date=r["Date"]||"";
      if(!exId||!date) return;
      var prev=DS_CLOUD_LAST[exId];
      if(!prev || date>prev.date){
        DS_CLOUD_LAST[exId]={date:date, reps:r["Reps"]||"", load:r["Band / Weight"]||"", sets:r["Sets"]||"", rir:r["RIR"]||""};
      }
    });
  }
  fetch(SHEETS_URL+"?overload=1&nocache="+Date.now())
    .then(function(r){return r.json();}).then(ingest).catch(function(){
      var cb="ovCb_"+Date.now();
      window[cb]=function(rows){ delete window[cb]; ingest(rows); };
      var s=document.createElement("script");
      s.onerror=function(){ delete window[cb]; };
      s.src=SHEETS_URL+"?overload=1&callback="+cb+"&nocache="+Date.now();
      document.head.appendChild(s);
    });
}
// ── LOAD + MERGE FROM SHEET (sheet is source of truth on open/refresh) ───
function fetchSheet(onRows){
  if(!SHEETS_URL){ onRows(null,false); return; }
  var done = false;
  function finish(rows, ok){ if(done) return; done=true; onRows(rows,ok); }

  // Timeout after 8 seconds regardless
  var timeout = setTimeout(function(){ finish(null,false); }, 8000);

  fetch(SHEETS_URL+"?nocache="+Date.now())
    .then(function(r){return r.json();})
    .then(function(rows){ clearTimeout(timeout); finish(rows,true); })
    .catch(function(){
      // JSONP fallback
      var cb="ftCb_"+Date.now();
      window[cb]=function(rows){ clearTimeout(timeout); delete window[cb]; finish(rows,true); };
      var s=document.createElement("script");
      s.onerror=function(){ delete window[cb]; finish(null,false); };
      s.src=SHEETS_URL+"?callback="+cb+"&nocache="+Date.now();
      document.head.appendChild(s);
    });
}
function rowToDay(row){
  var remote={
    weight: row["Weight (lbs)"]?parseFloat(row["Weight (lbs)"]):null,
    waterOz: row["Water (oz)"]?parseFloat(row["Water (oz)"]):0,
    foods:[], exercises:[],
    wellness:{
      sleepHours:row["Sleep Hours"]?parseFloat(row["Sleep Hours"]):0,
      sleepQ:row["Sleep Quality (1-5)"]?parseFloat(row["Sleep Quality (1-5)"]):0,
      energy:row["Energy (1-5)"]?parseFloat(row["Energy (1-5)"]):0,
      mood:row["Mood (1-5)"]?parseFloat(row["Mood (1-5)"]):0,
      steps:row["Steps"]?parseFloat(row["Steps"]):0
    },
    supplements:{"fish-oil":row["Fish Oil"]==="Yes","simvastatin":row["Simvastatin"]==="Yes"},
    measurements:{waist:row["Waist (in)"]||"",chest:row["Chest (in)"]||"",hips:row["Hips (in)"]||"",thighs:row["Thighs (in)"]||"",neck:row["Neck (in)"]||"",biceps:row["Biceps (in)"]||""}
  };
  if(row["Foods"]) row["Foods"].split(",").forEach(function(f){ f=f.trim(); if(!f) return;
    var m=f.match(/^(.+)\((\d+(?:\.\d+)?)\s*kcal(?:\|(\d+(?:\.\d+)?)p\|(\d+(?:\.\d+)?)c\|(\d+(?:\.\d+)?)f(?:\|(\d+(?:\.\d+)?)fb)?)?\)$/);
    if(m){ var _pf={name:m[1].trim(),cal:parseFloat(m[2]),protein:m[3]?parseFloat(m[3]):0,carbs:m[4]?parseFloat(m[4]):0,fat:m[5]?parseFloat(m[5]):0,id:"sheet_"+f}; if(m[6]) _pf.fiber=parseFloat(m[6]); remote.foods.push(_pf); }
    else remote.foods.push({name:f,cal:0,protein:0,carbs:0,fat:0,id:"sheet_"+f}); });
  if(row["Exercises"]) row["Exercises"].split(",").forEach(function(e){ e=e.trim(); if(!e) return;
    var m=e.match(/^(.+)\((\d+)\s*cal(?:\|([^)]+))?\)$/);
    if(m){ var ex={name:m[1].trim(),calories:parseInt(m[2]),type:"logged",id:"sheet_"+e};
      if(m[3]){ var dm=m[3].match(/^(\d+)x([^@]+)(?:@(.+))?$/); if(dm){ ex.sets=parseInt(dm[1]); ex.reps=dm[2].trim(); ex.load=(dm[3]||"").trim(); } }
      remote.exercises.push(ex);
    } else remote.exercises.push({name:e,calories:0,type:"logged",id:"sheet_"+e}); });
  return remote;
}
function mergeDay(key,remote){
  var local=appData[key];
  if(!local){ appData[key]=remote; return; }
  // Local kept if it has equal/more food detail; remote fills missing scalars.
  if((remote.foods||[]).length > (local.foods||[]).length){ appData[key]=remote; return; }
  if(!local.weight && remote.weight) local.weight=remote.weight;
  if(!local.waterOz && remote.waterOz) local.waterOz=remote.waterOz;
  ["wellness","supplements","measurements"].forEach(function(grp){
    if(remote[grp]){ local[grp]=local[grp]||{};
      Object.keys(remote[grp]).forEach(function(k){ if(!local[grp][k] && remote[grp][k]) local[grp][k]=remote[grp][k]; }); }
  });
  if((!local.exercises||!local.exercises.length) && remote.exercises && remote.exercises.length) local.exercises=remote.exercises;
  appData[key]=local;
}
function mergeRows(rows){
  if(!Array.isArray(rows)) return;
  rows.forEach(function(r){ var k=(r["Date"]||"").trim(); if(/^\d{4}-\d{2}-\d{2}$/.test(k)) mergeDay(k,rowToDay(r)); });
  try { store.set("ft_data",JSON.stringify(appData)); } catch(e){}
}

// ── DASHBOARD ───────────────────────────────────────────────────────────
function renderAll(){ renderHeader(); renderDash(); renderLog(); renderCheckin(); renderLabs(); renderWeightTargets(); if(typeof renderToday==="function"){try{renderToday();}catch(e){}} }

function renderHeader(){
  document.getElementById("date-str").textContent = isToday() ? "Today" : prettyDate(activeDate);
  var lw=getLatestWeight(), lost=START_WEIGHT-lw;
  document.getElementById("lost-lbl").textContent = lost>0 ? "-"+lost.toFixed(1)+" lbs" : "";
  document.getElementById("btn-next").disabled = (activeDate>=todayKey());
  document.getElementById("past-badge").style.display = isToday()?"none":"inline-block";
  document.getElementById("btn-today").style.display = isToday()?"none":"inline-block";
  var h=new Date().getHours();
  document.getElementById("greeting").textContent = h<12?"Good Morning":h<18?"Good Afternoon":"Good Evening";
  var hn=document.getElementById("hname"); if(hn) hn.textContent=(USER_NAME?USER_NAME:"Athlete")+" 💪";
}

function statAverages(){
  var days = Object.keys(appData).filter(function(k){
    var d=appData[k]; return d&&d.foods&&d.foods.reduce(function(a,f){return a+(+f.cal||0);},0)>0;
  }).sort();
  var n=days.length;
  var avgCal=0, avgProt=0;
  if(n){
    avgCal = Math.round(days.reduce(function(a,k){return a+appData[k].foods.reduce(function(s,f){return s+(+f.cal||0);},0);},0)/n);
    avgProt= Math.round(days.reduce(function(a,k){return a+appData[k].foods.reduce(function(s,f){return s+(+f.protein||0);},0);},0)/n);
  }
  var wk = Object.keys(appData).filter(function(k){return appData[k]&&appData[k].weight;}).sort();
  var lost = wk.length>=1 ? (appData[wk[0]].weight - appData[wk[wk.length-1]].weight) : 0;
  if(wk.length && (START_WEIGHT - appData[wk[wk.length-1]].weight) > lost) lost = START_WEIGHT - appData[wk[wk.length-1]].weight;
  return {n:n, avgCal:avgCal, avgProt:avgProt, lost:lost};
}

function renderDash(){
  GOALS.cal = calGoalForKey(activeDate);
  var t=getTotals(), burned=getBurned(), net=t.cal-burned, netRem=GOALS.cal-t.cal;
  var netEl=document.getElementById("net-cal"); netEl.textContent=t.cal;
  netEl.style.color = t.cal>GOALS.cal?"#ff6b6b":"#5eead4";
  document.getElementById("eaten-lbl").textContent="🍽 "+t.cal+" eaten";
  document.getElementById("burned-lbl").textContent="🔥 "+burned+" burned";
  var timeSecs=dsDailyTrainingSeconds(activeDate);
  var timeLbl=document.getElementById("time-lbl");
  if(timeLbl) timeLbl.textContent="🕐 "+dsFormatTrainingTime(timeSecs)+" trained";
  var rem=document.getElementById("rem-lbl");
  rem.textContent = netRem>0?netRem+" left":Math.abs(netRem)+" over";
  rem.style.color = netRem>0?"#5eead4":"#ff6b6b";
  var bar=document.getElementById("cal-bar");
  bar.style.width=Math.min((t.cal/GOALS.cal)*100,100)+"%";
  bar.style.background = t.cal>GOALS.cal?"#ff6b6b":"linear-gradient(90deg,#5eead4,#a78bfa)";
  document.getElementById("cal-title").textContent = isToday()?"Today's Calories":prettyDate(activeDate)+" Calories";

  renderRadials([
    {value:Math.round(t.protein),max:GOALS.protein,color:"#5eead4",label:"Protein",unit:"g"},
    {value:Math.round(t.carbs),max:GOALS.carbs,color:"#a78bfa",label:"Carbs",unit:"g"},
    {value:Math.round(t.fat),max:GOALS.fat,color:"#fbbf24",label:"Fat",unit:"g"},
    {value:burned,max:GOALS.burned,color:"#fb923c",label:"Burned",unit:""}
  ]);
  var pr=GOALS.protein-Math.round(t.protein), hint=document.getElementById("protein-hint");
  if(pr>0 && isToday()){ hint.style.display="block"; hint.textContent="💡 "+pr+"g protein to go — try a shake + cottage cheese"; }
  else hint.style.display="none";

  // Averages strip (the simplified history)
  var s=statAverages();
  document.getElementById("dash-averages").innerHTML =
    '<div class="hsum-stat"><div class="hsum-val" style="color:#5eead4">'+s.n+'</div><div class="hsum-lbl">Days Logged</div></div>'+
    '<div class="hsum-stat"><div class="hsum-val" style="color:#a78bfa">'+(s.lost>0?"-"+s.lost.toFixed(1):"0")+'</div><div class="hsum-lbl">Lbs Lost</div></div>'+
    '<div class="hsum-stat"><div class="hsum-val" style="color:#fbbf24">'+s.avgCal+'</div><div class="hsum-lbl">Avg Cal</div></div>'+
    '<div class="hsum-stat"><div class="hsum-val" style="color:#5eead4">'+s.avgProt+'g</div><div class="hsum-lbl">Avg Protein</div></div>';

  // Water compact
  var oz=getDay().waterOz||0;
  document.getElementById("dash-water-oz").textContent=oz;
  document.getElementById("dash-water-bar").style.width=Math.min((oz/WATER_GOAL)*100,100)+"%";
  var _wg=document.getElementById("dash-water-goal"); if(_wg) _wg.textContent="oz · goal "+WATER_GOAL;
  var _cg=document.getElementById("dash-cal-goal"); if(_cg) _cg.textContent="Goal: "+GOALS.cal+" ("+calGoalLabelForKey(activeDate)+")";

  // Weight
  var day=getDay();
  var lw=getLatestWeight(), lost=START_WEIGHT-lw;
  document.getElementById("dash-wt").textContent=day.weight||lw;
  document.getElementById("dash-lost").textContent=lost>0?"-"+lost.toFixed(1)+" from start":"";

  // Supplements status
  var sup=day.supplements||{};
  document.getElementById("dash-supps").innerHTML = SUPPS.map(function(s){
    var on=!!sup[s.id];
    return '<span class="tag" style="background:'+(on?"#5eead422":"#88888816")+';color:'+(on?"#5eead4":"#777")+';border:1px solid '+(on?"#5eead444":"#88888830")+'">'+s.emoji+' '+s.name+(on?" ✓":"")+'</span>';
  }).join(" ");

  renderWeekSummary();
  renderTrends();
  renderTrackSummary();
  renderTopFoods();
}
function renderRadials(items){
  var SIZE=72;
  document.getElementById("radials").innerHTML=items.map(function(it){
    var r=(SIZE-10)/2, circ=2*Math.PI*r, dash=Math.min(it.value/it.max,1)*circ, over=it.value>it.max, color=over?"#ff6b6b":it.color;
    return '<div class="radial-wrap"><svg width="'+SIZE+'" height="'+SIZE+'" style="transform:rotate(-90deg)">'+
      '<circle cx="'+(SIZE/2)+'" cy="'+(SIZE/2)+'" r="'+r+'" fill="none" stroke="#1a1a2e" stroke-width="7"/>'+
      '<circle cx="'+(SIZE/2)+'" cy="'+(SIZE/2)+'" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="7" stroke-dasharray="'+dash+' '+circ+'" stroke-linecap="round"/></svg>'+
      '<div style="text-align:center;margin-top:'+(-(SIZE*0.85))+'px;margin-bottom:'+(SIZE*0.7)+'px">'+
      '<div style="font-size:13px;font-weight:800;color:'+(over?"#ff6b6b":"#f0f0f0")+';font-family:DM Mono,monospace">'+it.value+'<span style="font-size:9px;opacity:.7">'+it.unit+'</span></div>'+
      '<div style="font-size:8px;color:#888;letter-spacing:1px;text-transform:uppercase;font-family:DM Mono,monospace">/'+it.max+it.unit+'</div></div>'+
      '<div class="radial-lbl">'+it.label+'</div></div>';
  }).join("");
}

// ── NAV / DATE ──────────────────────────────────────────────────────────
function switchTab(id){
  document.querySelectorAll(".tab-btn").forEach(function(b){b.classList.remove("active");});
  document.querySelectorAll(".panel").forEach(function(p){p.classList.remove("active");});
  var btn=document.querySelector("[data-tab="+id+"]"), panel=document.getElementById("panel-"+id);
  if(btn) btn.classList.add("active"); if(panel) panel.classList.add("active");
  if(id==="yoga" && typeof renderPoses==="function") renderPoses();
  if(id==="today" && typeof renderToday==="function") renderToday();
  if(id==="log" && typeof ldInit==="function") ldInit();
  document.querySelector(".content").scrollTop=0;
}
var _lastSheetPull = 0;
function bgRefresh(){
  if(!SHEETS_URL) return;
  var now=Date.now();
  if(now-_lastSheetPull < 10000) return;  // throttle: at most once per 10s
  _lastSheetPull=now;
  fetchSheet(function(rows,ok){ if(ok&&rows){ mergeRows(rows); renderAll(); } });
}
function shiftDay(delta){
  var d=keyToDate(activeDate); d.setDate(d.getDate()+delta);
  var nk=localDateKey(d); if(nk>todayKey()) return;
  activeDate=nk; wellnessRatings={sleepQ:0,energy:0,mood:0,medClarity:0}; renderAll(); bgRefresh();
}
function goToToday(){ activeDate=todayKey(); DS_DAY_OVERRIDE=null; wellnessRatings={sleepQ:0,energy:0,mood:0,medClarity:0}; renderAll(); bgRefresh(); }
function doRefresh(which){
  fetchOverloadCache();
  _lastSheetPull=Date.now();
  var icon=document.getElementById("refresh-icon-"+which);
  if(icon){ icon.style.transition="transform .6s ease"; icon.style.transform="rotate(360deg)";
    setTimeout(function(){icon.style.transition="none";icon.style.transform="rotate(0)";},650); }
  fetchSheet(function(rows,ok){ if(ok&&rows) mergeRows(rows); renderAll(); });
}

// ── LOG: FOOD ───────────────────────────────────────────────────────────
function populateFoodDropdown(){
  var dd=document.getElementById("food-dropdown"); if(!dd) return;
  dd.innerHTML='<option value="">— Select a food —</option>'+
    PRESET_FOODS.map(function(f,i){return '<option value="'+i+'">'+f.name+' · '+f.cal+' kcal · '+f.protein+'g P</option>';}).join("");
  dd.onchange=function(){ var f=PRESET_FOODS[dd.value];
    document.getElementById("dropdown-preview").textContent=f?(f.cal+" kcal · "+f.protein+"g protein · "+f.carbs+"g carbs · "+f.fat+"g fat"):""; };
}
function addDropdownFood(){
  var dd=document.getElementById("food-dropdown"); if(dd.value==="") return;
  var f=PRESET_FOODS[dd.value], day=getDay();
  day.foods.push({name:f.name,cal:f.cal,protein:f.protein,carbs:f.carbs,fat:f.fat,id:Date.now().toString()});
  saveDay(day); dd.value=""; document.getElementById("dropdown-preview").textContent=""; renderAll();
}
function addCustomFood(){
  var n=document.getElementById("cf-name").value.trim(), c=+document.getElementById("cf-cal").value||0;
  if(!n||!c) return;
  var day=getDay();
  var _cfb=+document.getElementById("cf-fiber").value||0;
  var _cfo={name:n,cal:c,protein:+document.getElementById("cf-protein").value||0,
    carbs:+document.getElementById("cf-carbs").value||0,fat:+document.getElementById("cf-fat").value||0,id:Date.now().toString()};
  if(_cfb) _cfo.fiber=_cfb;
  day.foods.push(_cfo);
  saveDay(day);
  ["cf-name","cf-cal","cf-protein","cf-carbs","cf-fat","cf-fiber"].forEach(function(i){document.getElementById(i).value="";});
  renderAll();
}
function removeFood(id){ var day=getDay(); day.foods=day.foods.filter(function(f){return f.id!=id;}); saveDay(day); renderAll(); }
var editingFoodId=null;
function editFood(id){
  var f=getDay().foods.filter(function(x){return x.id==id;})[0]; if(!f) return;
  editingFoodId=id;
  document.getElementById("ef-name").value=f.name||"";
  document.getElementById("ef-cal").value=(f.cal||0);
  document.getElementById("ef-protein").value=(f.protein||0);
  document.getElementById("ef-carbs").value=(f.carbs||0);
  document.getElementById("ef-fat").value=(f.fat||0);
  document.getElementById("ef-fiber").value=(f.fiber||"");
  document.getElementById("food-edit-modal").style.display="flex";
}
function closeFoodEdit(){ editingFoodId=null; document.getElementById("food-edit-modal").style.display="none"; }
function saveFoodEdit(){
  if(editingFoodId==null) return;
  var day=getDay(), f=day.foods.filter(function(x){return x.id==editingFoodId;})[0];
  if(!f){ closeFoodEdit(); return; }
  var n=document.getElementById("ef-name").value.trim();
  f.name=n||f.name;
  f.cal=+document.getElementById("ef-cal").value||0;
  f.protein=+document.getElementById("ef-protein").value||0;
  f.carbs=+document.getElementById("ef-carbs").value||0;
  f.fat=+document.getElementById("ef-fat").value||0;
  var _fb=+document.getElementById("ef-fiber").value||0; if(_fb) f.fiber=_fb; else delete f.fiber;
  saveDay(day); closeFoodEdit(); renderAll();
}
function renderFoodLog(){
  var day=getDay(), el=document.getElementById("food-log");
  document.getElementById("log-title").textContent=isToday()?"Today's Food Log":prettyDate(activeDate)+" Food";
  el.innerHTML = (!day.foods.length)?'<div class="empty">Nothing logged yet</div>':
    day.foods.map(function(f){return '<div class="row"><div style="flex:1;min-width:0"><div class="row-name">'+f.name+'</div>'+
      '<div class="row-sub">'+f.cal+' kcal · '+(f.protein||0)+'g P · '+(f.carbs||0)+'g C · '+(f.fat||0)+'g F'+(+f.fiber?' · '+f.fiber+'g Fb':'')+'</div></div>'+
      '<div style="display:flex;gap:6px;flex-shrink:0;align-items:stretch"><button onclick="toggleFavById(\''+f.id+'\')" title="Favorite" style="font-size:20px;line-height:1;padding:4px 12px;border-radius:8px;background:'+(isFavObj(f)?"#fbbf2422":"transparent")+';border:1px solid '+(isFavObj(f)?"#fbbf24":"#3a3a58")+';color:'+(isFavObj(f)?"#fbbf24":"#6b6b80")+'">'+(isFavObj(f)?"★":"☆")+'</button><button class="bs" onclick="editFood(\''+f.id+'\')">Edit</button>'+
      '<button class="bd" onclick="removeFood(\''+f.id+'\')">Remove</button></div></div>';}).join("");
  var t=getTotals();
  document.getElementById("macro-bars").innerHTML=[
    {l:"Calories",v:t.cal,g:GOALS.cal,c:"#5eead4",u:""},{l:"Protein",v:Math.round(t.protein),g:GOALS.protein,c:"#a78bfa",u:"g"},
    {l:"Carbs",v:Math.round(t.carbs),g:GOALS.carbs,c:"#fbbf24",u:"g"},{l:"Fat",v:Math.round(t.fat),g:GOALS.fat,c:"#fb923c",u:"g"},
    {l:"Fiber",v:Math.round(t.fiber*10)/10,g:GOALS.fiber,c:"#4ade80",u:"g",hi:true}
  ].map(function(m){return '<div class="mrow"><div class="mlrow"><span>'+m.l+'</span><span>'+m.v+m.u+' / '+m.g+m.u+'</span></div>'+
    '<div class="mbar-wrap"><div class="mbar" style="width:'+Math.min((m.v/m.g)*100,100)+'%;background:'+(m.v>m.g&&!m.hi?"#ff6b6b":m.c)+'"></div></div></div>';}).join("")+
    '<div style="font-size:10px;color:#888;font-family:\'DM Mono\',monospace;margin-top:10px;text-align:center">Net carbs '+(Math.round(Math.max(0,t.carbs-t.fiber)*10)/10)+'g (carbs − fiber)</div>';
}

// ── LOG: EXERCISE ───────────────────────────────────────────────────────
function populateExDropdown(){
  var dd=document.getElementById("ex-dropdown"); if(!dd) return;
  var groups={cardio:"Cardio",strength:"Strength",mobility:"Mobility",yoga:"Yoga"};
  var html='<option value="">— Select exercise —</option>';
  Object.keys(groups).forEach(function(g){
    html+='<optgroup label="'+groups[g]+'">';
    EXERCISES.forEach(function(e,i){ if(e.type===g) html+='<option value="'+i+'">'+e.name+' · '+e.calories+' kcal</option>'; });
    html+='</optgroup>';
  });
  dd.innerHTML=html;
  dd.onchange=function(){ var e=EXERCISES[dd.value];
    document.getElementById("ex-dropdown-preview").textContent=e?("🔥 "+e.calories+" kcal"):"";
    showLastHint(e?e.name:"","ex-last-hint"); };
}
function addDropdownEx(){
  var dd=document.getElementById("ex-dropdown"); if(dd.value===""){ toast("Pick an exercise from the list first"); return; }
  var e=EXERCISES[dd.value], day=getDay();
  var ex={name:e.name,calories:e.calories,type:e.type,id:Date.now().toString()};
  _attachExDetail(ex,"ex-sets","ex-reps","ex-load");
  day.exercises.push(ex);
  saveDay(day); dd.value=""; document.getElementById("ex-dropdown-preview").textContent=""; document.getElementById("ex-last-hint").textContent=""; _clearExDetail("ex-sets","ex-reps","ex-load"); renderAll();
}
function addCustomEx(){
  var n=document.getElementById("ce-name").value.trim(), c=+document.getElementById("ce-cal").value||0;
  if(!n) return;
  var day=getDay(); var ex={name:n,calories:c,type:"custom",id:Date.now().toString()};
  _attachExDetail(ex,"ce-sets","ce-reps","ce-load");
  day.exercises.push(ex);
  saveDay(day); document.getElementById("ce-name").value=""; document.getElementById("ce-cal").value=""; document.getElementById("ce-last-hint").textContent=""; _clearExDetail("ce-sets","ce-reps","ce-load"); renderAll();
}
function loadCeFavs(){ try{ var a=JSON.parse(store.get("ce_fav_ex")||"[]"); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function saveCeFavs(a){ store.set("ce_fav_ex", JSON.stringify(a)); }
function renderCeFavSelect(){
  var sel=document.getElementById("ce-fav-select"); if(!sel) return;
  var favs=loadCeFavs();
  sel.innerHTML='<option value="">\u2605 Favorites \u2014 pick one to reuse\u2026</option>'+favs.map(function(f,i){
    return '<option value="'+i+'">'+escH(f.name)+' \u00b7 '+f.cal+' cal'+(f.reps?(' \u00b7 '+escH(f.reps)):'')+'</option>';
  }).join("");
}
function saveCeFav(){
  var n=(document.getElementById("ce-name").value||"").trim();
  var c=+document.getElementById("ce-cal").value||0;
  if(!n){ toast("Enter an exercise name first"); return; }
  var sets=(document.getElementById("ce-sets").value||"").trim();
  var reps=(document.getElementById("ce-reps").value||"").trim();
  var load=(document.getElementById("ce-load").value||"").trim();
  var favs=loadCeFavs();
  var key=n.toLowerCase();
  favs=favs.filter(function(f){return f.name.toLowerCase()!==key;});
  favs.unshift({name:n,cal:c,sets:sets,reps:reps,load:load});
  if(favs.length>20) favs=favs.slice(0,20);
  saveCeFavs(favs); renderCeFavSelect(); toast("\u2605 Saved \""+n+"\" as a favorite");
}
function loadCeFav(idx){
  if(idx==="") return;
  var f=loadCeFavs()[+idx]; if(!f) return;
  document.getElementById("ce-name").value=f.name||"";
  document.getElementById("ce-cal").value=f.cal||"";
  document.getElementById("ce-sets").value=f.sets||"";
  document.getElementById("ce-reps").value=f.reps||"";
  document.getElementById("ce-load").value=f.load||"";
  showLastHint(f.name,"ce-last-hint");
}
var LD_DEFAULTS={food:"qa",ex:"dropdown",track:"water"};
function ldSwitch(group,tab){
  store.set("ld_tab_"+group, tab);
  var tabsWrap=document.getElementById("ld-"+group+"-tabs"); if(!tabsWrap) return;
  var card=tabsWrap.parentElement;
  tabsWrap.querySelectorAll(".ld-tab").forEach(function(b){ b.classList.toggle("on", b.getAttribute("data-ldtab")===tab); });
  card.querySelectorAll(".ld-pane").forEach(function(p){ p.classList.toggle("on", p.getAttribute("data-ldpane")===tab); });
}
function ldInit(){
  ["food","ex","track"].forEach(function(group){
    var saved=store.get("ld_tab_"+group)||LD_DEFAULTS[group];
    var tabsWrap=document.getElementById("ld-"+group+"-tabs"); if(!tabsWrap) return;
    var valid=Array.prototype.some.call(tabsWrap.querySelectorAll(".ld-tab"), function(b){return b.getAttribute("data-ldtab")===saved;});
    ldSwitch(group, valid?saved:LD_DEFAULTS[group]);
  });
}
function removeEx(id){ var day=getDay(); day.exercises=day.exercises.filter(function(e){return e.id!=id;}); saveDay(day); renderAll(); }
var editingExId=null;
function editEx(id){
  var e=getDay().exercises.filter(function(x){return x.id==id;})[0]; if(!e) return;
  editingExId=id;
  document.getElementById("ee-name").value=e.name||"";
  document.getElementById("ee-cal").value=(e.calories||0);
  document.getElementById("ex-edit-modal").style.display="flex";
}
function closeExEdit(){ editingExId=null; document.getElementById("ex-edit-modal").style.display="none"; }
function saveExEdit(){
  if(editingExId==null) return;
  var day=getDay(), e=day.exercises.filter(function(x){return x.id==editingExId;})[0];
  if(!e){ closeExEdit(); return; }
  var n=document.getElementById("ee-name").value.trim();
  e.name=n||e.name;
  e.calories=+document.getElementById("ee-cal").value||0;
  saveDay(day); closeExEdit(); renderAll();
}
function renderExLog(){
  var day=getDay(), el=document.getElementById("ex-log");
  document.getElementById("burned-lbl2").textContent="🔥 "+getBurned()+" kcal";
  el.innerHTML=(!day.exercises.length)?'<div class="empty">No workouts logged yet</div>':
    day.exercises.map(function(e){var det=exDetailStr(e);return '<div class="row"><div style="flex:1;min-width:0"><div class="row-name">'+e.name+'</div><div class="row-sub">🔥 '+e.calories+' kcal'+(det?' · '+det:'')+'</div></div>'+
      '<div style="display:flex;gap:6px;flex-shrink:0"><button class="bs" onclick="editEx(\''+e.id+'\')">Edit</button>'+
      '<button class="bd" onclick="removeEx(\''+e.id+'\')">Remove</button></div></div>';}).join("");
}

// ── LOG: WATER ──────────────────────────────────────────────────────────
function addWater(oz){ var d=getDay(); d.waterOz=Math.min((d.waterOz||0)+oz,WATER_GOAL*1.5); saveDay(d); renderWater(); renderDash(); }
function removeWater(oz){ var d=getDay(); d.waterOz=Math.max((d.waterOz||0)-oz,0); saveDay(d); renderWater(); renderDash(); }
function addCustomWater(){ var i=document.getElementById("water-custom"); var oz=parseFloat(i.value); if(!oz||oz<=0) return; addWater(oz); i.value=""; }
function renderWater(){
  var oz=getDay().waterOz||0, totCups=Math.max(1,Math.ceil(WATER_GOAL/8)), cups=Math.min(Math.floor(oz/8),totCups);
  document.getElementById("water-oz").textContent=oz;
  document.getElementById("water-cups-lbl").textContent=cups+" of "+totCups+" cups";
  document.getElementById("water-bar").style.width=Math.min((oz/WATER_GOAL)*100,100)+"%";
  var html=""; for(var i=0;i<totCups;i++) html+='<div class="wcup '+(i<cups?"full":"empty")+'" onclick="addWater(8)">💧</div>';
  document.getElementById("water-cups").innerHTML=html;
  var hint=document.getElementById("water-hint"), rem=WATER_GOAL-oz;
  if(oz===0){hint.textContent="Tap a cup or button to log water";hint.style.color="#38bdf877";}
  else if(oz>=WATER_GOAL){hint.textContent="✓ Daily water goal reached!";hint.style.color="#5eead4";}
  else{hint.textContent=rem+" oz ("+Math.ceil(rem/8)+" cups) to goal";hint.style.color="#38bdf877";}
}

// ── LOG: WEIGHT ─────────────────────────────────────────────────────────
function logWeight(){ var v=parseFloat(document.getElementById("wt-input").value); if(!v) return;
  var d=getDay(); d.weight=v; saveDay(d); document.getElementById("wt-input").value=""; renderAll(); }
function openWtModal(){ document.getElementById("wt-modal").style.display="flex"; }
function closeWtModal(){ document.getElementById("wt-modal").style.display="none"; }
function logWeightModal(){ var v=parseFloat(document.getElementById("wt-modal-in").value); if(!v) return;
  var d=getDay(); d.weight=v; saveDay(d); document.getElementById("wt-modal-in").value=""; closeWtModal(); renderAll(); }

// ── LOG: BODY COMP (body fat / muscle / water / bone from smart scale) ──
function logBodyComp(){
  var d=getDay(); d.bodyComp=d.bodyComp||{};
  var fields={bodyFat:"bc-bodyfat",muscle:"bc-muscle",water:"bc-water",bone:"bc-bone"};
  var any=false;
  Object.keys(fields).forEach(function(k){
    var v=document.getElementById(fields[k]).value;
    if(v!==""){ d.bodyComp[k]=parseFloat(v); any=true; }
  });
  if(!any) return;
  saveDay(d);
  Object.keys(fields).forEach(function(k){ document.getElementById(fields[k]).value=""; });
  var m=document.getElementById("bc-msg"); m.textContent="✓ Body comp saved"; setTimeout(function(){m.textContent="";},2500);
  renderBodyCompHistory();
}
function renderBodyComp(){
  var bc=getDay().bodyComp||{};
  document.getElementById("bc-bodyfat").value=(bc.bodyFat!==undefined)?bc.bodyFat:"";
  document.getElementById("bc-muscle").value=(bc.muscle!==undefined)?bc.muscle:"";
  document.getElementById("bc-water").value=(bc.water!==undefined)?bc.water:"";
  document.getElementById("bc-bone").value=(bc.bone!==undefined)?bc.bone:"";
  renderBodyCompHistory();
}
function renderBodyCompHistory(){
  var keys=Object.keys(appData).filter(function(k){return appData[k].bodyComp&&Object.keys(appData[k].bodyComp).length;}).sort().slice(-8).reverse();
  var el=document.getElementById("bc-history");
  if(!el) return;
  el.innerHTML = (!keys.length)?'':'<div class="row-sub" style="margin-bottom:6px">Recent body comp</div>'+keys.map(function(k){
    var b=appData[k].bodyComp, w=appData[k].weight;
    var parts=[];
    if(w) parts.push(w+" lb");
    if(b.bodyFat!==undefined) parts.push(b.bodyFat+"% BF");
    if(b.muscle!==undefined) parts.push(b.muscle+" lb muscle");
    if(b.water!==undefined) parts.push(b.water+"% water");
    return '<div class="row"><div class="row-name" style="font-size:11px">'+prettyDate(k)+'</div><div class="row-sub">'+parts.join(" · ")+'</div></div>';
  }).join("");
}

// ── LOG: WELLNESS ───────────────────────────────────────────────────────
function setMedType(el){ medType=el.dataset.type;
  document.querySelectorAll(".med-type-btn").forEach(function(b){b.classList.toggle("sel",b===el);}); }
function saveWellness(){
  var d=getDay(); d.wellness=d.wellness||{};
  d.wellness.sleepHours=parseFloat(document.getElementById("sleep-hrs").value)||0;
  d.wellness.steps=parseInt(document.getElementById("steps-in").value)||0;
  if(wellnessRatings.sleepQ) d.wellness.sleepQ=wellnessRatings.sleepQ;
  if(wellnessRatings.energy) d.wellness.energy=wellnessRatings.energy;
  if(wellnessRatings.mood) d.wellness.mood=wellnessRatings.mood;
  saveDay(d);
  var m=document.getElementById("well-msg"); m.textContent="✓ Wellness saved"; setTimeout(function(){m.textContent="";},2500);
  renderDash();
}
function saveMeditation(){
  var mins=parseInt(document.getElementById("med-mins").value)||0; if(!mins) return;
  var d=getDay(); d.meditation=d.meditation||[];
  d.meditation.push({mins:mins,type:medType||"Silent",clarity:wellnessRatings.medClarity||0});
  saveDay(d);
  document.getElementById("med-mins").value=""; medType=""; wellnessRatings.medClarity=0;
  document.querySelectorAll(".med-type-btn").forEach(function(b){b.classList.remove("sel");});
  document.querySelectorAll(".rbtn[data-field=medClarity]").forEach(function(b){b.classList.remove("sel");});
  var m=document.getElementById("med-msg"); m.textContent="✓ Session logged"; setTimeout(function(){m.textContent="";},2500);
  renderMedHistory();
}
function renderMedHistory(){
  var med=getDay().meditation||[], el=document.getElementById("med-history");
  el.innerHTML = (!med.length)?'':med.map(function(s){return '<div class="row"><div><div class="row-name">'+s.type+'</div>'+
    '<div class="row-sub">'+s.mins+' min'+(s.clarity?' · clarity '+s.clarity+'/5':'')+'</div></div></div>';}).join("");
}
function renderWellness(){
  var w=getDay().wellness||{};
  document.getElementById("sleep-hrs").value=w.sleepHours||"";
  document.getElementById("steps-in").value=w.steps||"";
  var sb=document.getElementById("steps-bar"); if(sb) sb.style.width=Math.min(((w.steps||0)/10000)*100,100)+"%";
  ["sleepQ","energy","mood"].forEach(function(f){
    var v=w[f]||wellnessRatings[f]||0; wellnessRatings[f]=v;
    document.querySelectorAll(".rbtn[data-field="+f+"]").forEach(function(b){b.classList.toggle("sel",parseInt(b.dataset.val)===v);});
  });
}

// ── LOG: MEASUREMENTS ───────────────────────────────────────────────────
function logMeasurements(){
  var d=getDay(); d.measurements=d.measurements||{};
  ["waist","chest","hips","thighs","neck","biceps"].forEach(function(k){
    var v=document.getElementById("m-"+k).value; if(v!=="") d.measurements[k]=v;
  });
  saveDay(d);
  var m=document.getElementById("measure-msg"); m.textContent="✓ Measurements saved"; setTimeout(function(){m.textContent="";},2500);
  renderMeasurements();
}
function renderMeasurements(){
  var ms=getDay().measurements||{};
  ["waist","chest","hips","thighs","neck","biceps"].forEach(function(k){ var el=document.getElementById("m-"+k); if(el) el.value=ms[k]||""; });
  // recent waist trend
  var keys=Object.keys(appData).filter(function(k){return appData[k].measurements&&appData[k].measurements.waist;}).sort().slice(-5);
  var el=document.getElementById("measurements-history");
  el.innerHTML = (!keys.length)?'':'<div class="row-sub" style="margin-bottom:6px">Recent waist</div>'+keys.map(function(k){
    return '<div class="row"><div class="row-name" style="font-size:11px">'+prettyDate(k)+'</div><div class="row-sub">'+appData[k].measurements.waist+'"</div></div>';
  }).join("");
}

// ── LOG: SUPPLEMENTS ────────────────────────────────────────────────────
function toggleSupp(id){ var d=getDay(); d.supplements=d.supplements||{}; d.supplements[id]=!d.supplements[id]; saveDay(d); renderSupps(); renderDash(); }
function renderSupps(){
  var sup=getDay().supplements||{};
  if(!SUPPS.length){ document.getElementById("supp-list").innerHTML='<div style="text-align:center;color:#555;font-size:11px;font-family:\'DM Mono\',monospace;padding:10px 0">Add supplements in Settings below ↓</div>'; return; }
  document.getElementById("supp-list").innerHTML=SUPPS.map(function(s){
    var on=!!sup[s.id];
    return '<div class="row" onclick="toggleSupp(\''+s.id+'\')" style="cursor:pointer">'+
      '<div><div class="row-name">'+s.emoji+' '+s.name+'</div><div class="row-sub">'+s.desc+'</div></div>'+
      '<div style="width:26px;height:26px;border-radius:7px;border:1px solid '+(on?"#5eead4":"#2a2a45")+';background:'+(on?"#5eead4":"transparent")+';color:#0d0d1a;display:flex;align-items:center;justify-content:center;font-weight:900">'+(on?"✓":"")+'</div></div>';
  }).join("");
}

// ── LOG: RIDES ──────────────────────────────────────────────────────────
function toggleRideForm(){ var f=document.getElementById("ride-form"); f.style.display=f.style.display==="none"?"block":"none"; }
function setEffort(e,el){ rideEffort=e; document.querySelectorAll("#ride-form .eff-btn").forEach(function(b){ if(b.id!=="d-yes"&&b.id!=="d-no") b.classList.toggle("sel",b===el); }); }
function setDaughter(v){ rideDaughter=v;
  document.getElementById("d-yes").classList.toggle("sel",v); document.getElementById("d-no").classList.toggle("sel",!v); }
function saveRide(){
  var miles=parseFloat(document.getElementById("ride-miles").value)||0;
  var dur=parseInt(document.getElementById("ride-dur").value)||0;
  if(!miles && !dur) return;
  var d=getDay(); d.rides=d.rides||[];
  d.rides.push({miles:miles,duration:dur,effort:rideEffort,daughter:rideDaughter,notes:document.getElementById("ride-notes").value.trim()});
  // auto-log calories as an exercise entry if duration given and not already
  if(dur){ var cals=Math.round(dur*9.2); d.exercises.push({name:"Mountain Bike Ride ("+dur+" min)",calories:cals,type:"cardio",id:Date.now().toString()}); }
  saveDay(d);
  document.getElementById("ride-miles").value=""; document.getElementById("ride-dur").value=""; document.getElementById("ride-notes").value="";
  rideEffort=""; rideDaughter=false;
  document.querySelectorAll("#ride-form .eff-btn").forEach(function(b){b.classList.remove("sel");});
  toggleRideForm(); renderRides(); renderAll();
}
function renderRides(){
  var rides=[];
  Object.keys(appData).forEach(function(k){ (appData[k].rides||[]).forEach(function(r){ rides.push(Object.assign({date:k},r)); }); });
  rides.sort(function(a,b){return b.date.localeCompare(a.date);});
  var totMiles=rides.reduce(function(a,r){return a+(+r.miles||0);},0);
  var totMin=rides.reduce(function(a,r){return a+(+r.duration||0);},0);
  document.getElementById("rides-list").innerHTML=(!rides.length)?'<div class="empty">No rides logged yet</div>':
    rides.map(function(r){return '<div class="row"><div><div class="row-name">'+prettyDate(r.date)+(r.daughter?" 👧":"")+'</div>'+
      '<div class="row-sub">'+(r.miles?r.miles+" mi · ":"")+(r.duration?r.duration+" min · ":"")+(r.effort||"")+(r.notes?" · "+r.notes:"")+'</div></div></div>';}).join("");
}

// ── LOG: DISTANCE TRACKER (GPS + manual) ────────────────────────────────
var trk = {active:false, paused:false, activity:"ride", watchId:null,
           startTs:0, elapsedMs:0, lastPt:null, distM:0, wakeLock:null, ticker:null};

function setTrackActivity(a){
  if(trk.active) return; // don't switch mid-session
  trk.activity=a;
  document.getElementById("trk-ride").classList.toggle("sel",a==="ride");
  document.getElementById("trk-walk").classList.toggle("sel",a==="walk");
  document.getElementById("trk-dist").style.color = a==="ride" ? "#fb923c" : "#5eead4";
}
function trkStatus(msg,color){ var s=document.getElementById("trk-status"); s.textContent=msg; s.style.color=color||"#666"; }
function _hav(a,b){
  var R=6371000, toR=Math.PI/180;
  var dLa=(b.lat-a.lat)*toR, dLo=(b.lng-a.lng)*toR, la1=a.lat*toR, la2=b.lat*toR;
  var h=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(la1)*Math.cos(la2)*Math.sin(dLo/2)*Math.sin(dLo/2);
  return 2*R*Math.asin(Math.sqrt(h));
}
function trkReqWake(){ try{ if("wakeLock" in navigator) navigator.wakeLock.request("screen").then(function(w){trk.wakeLock=w;}).catch(function(){}); }catch(e){} }
function trkRelWake(){ try{ if(trk.wakeLock){ trk.wakeLock.release(); trk.wakeLock=null; } }catch(e){} }

function trkStart(){
  if(!navigator.geolocation){ trkStatus("GPS not available — use manual entry below","#f87171"); return; }
  trk.active=true; trk.paused=false; trk.startTs=Date.now(); trk.elapsedMs=0; trk.distM=0; trk.lastPt=null;
  document.getElementById("trk-start").style.display="none";
  document.getElementById("trk-pause").style.display="block";
  document.getElementById("trk-finish").style.display="block";
  document.getElementById("trk-pause").textContent="Pause";
  trkStatus("Acquiring GPS…","#fbbf24");
  trkReqWake();
  trk.watchId=navigator.geolocation.watchPosition(trkOnPos, trkOnErr, {enableHighAccuracy:true, maximumAge:1000, timeout:20000});
  trk.ticker=setInterval(trkTick,1000); trkTick();
}
function trkOnErr(e){
  if(e && e.code===1) trkStatus("Location permission denied — use manual entry","#f87171");
  else trkStatus("GPS signal weak — keep moving outdoors","#fbbf24");
}
function trkOnPos(p){
  if(!trk.active||trk.paused) return;
  var acc=p.coords.accuracy;
  var pt={lat:p.coords.latitude, lng:p.coords.longitude, t:p.timestamp||Date.now()};
  if(acc>35){ trkStatus("Weak GPS (±"+Math.round(acc)+"m) — waiting for better fix","#fbbf24"); return; }
  if(trk.lastPt){
    var d=_hav(trk.lastPt,pt);
    var dt=Math.max((pt.t-trk.lastPt.t)/1000,0.5);
    var spd=d/dt; // m/s
    var cap   = trk.activity==="ride" ? 25 : 6;   // ~56mph ride / ~13mph walk-jog ceiling
    var floor = trk.activity==="ride" ? 3 : 1;    // min meters per fix to count as real movement
    if(d>=floor && spd<=cap){ trk.distM+=d; trk.lastPt=pt; }   // real movement
    else if(spd>cap){ /* implausible jump — drop point, keep anchor */ }
    else { /* below floor = standing jitter — advance anchor, add no distance */ trk.lastPt=pt; }
  } else { trk.lastPt=pt; }
  trkStatus("Tracking · GPS ±"+Math.round(acc)+"m","#5eead4");
  trkUpdate();
}
function trkTick(){
  if(trk.active && !trk.paused){ /* elapsed advances live via startTs */ }
  trkUpdate();
}
function trkElapsedMs(){ return trk.elapsedMs + ((trk.active && !trk.paused) ? (Date.now()-trk.startTs) : 0); }
function trkUpdate(){
  var miles=trk.distM/1609.344;
  document.getElementById("trk-dist").textContent=miles.toFixed(2);
  var ms=trkElapsedMs(), sec=Math.floor(ms/1000), m=Math.floor(sec/60), s=sec%60;
  document.getElementById("trk-time").textContent=m+":"+String(s).padStart(2,"0");
  var pace=document.getElementById("trk-pace");
  if(miles>0.02){
    if(trk.activity==="ride"){ var mph=miles/(ms/3600000); pace.textContent=mph.toFixed(1)+" mph"; }
    else { var pm=(ms/60000)/miles; var pmM=Math.floor(pm), pmS=Math.round((pm-pmM)*60); pace.textContent=pmM+":"+String(pmS).padStart(2,"0")+" /mi"; }
  } else pace.textContent = trk.activity==="ride" ? "— mph" : "— /mi";
}
function trkTogglePause(){
  if(!trk.active) return;
  if(trk.paused){ trk.paused=false; trk.startTs=Date.now(); document.getElementById("trk-pause").textContent="Pause"; trkReqWake(); trkStatus("Resumed","#5eead4"); }
  else { trk.paused=true; trk.elapsedMs+=Date.now()-trk.startTs; document.getElementById("trk-pause").textContent="Resume"; trkStatus("Paused","#888"); }
  trkUpdate();
}
function trkStop(){
  if(trk.watchId!=null){ navigator.geolocation.clearWatch(trk.watchId); trk.watchId=null; }
  if(trk.ticker){ clearInterval(trk.ticker); trk.ticker=null; }
  trkRelWake();
  trk.active=false; trk.paused=false;
  document.getElementById("trk-start").style.display="block";
  document.getElementById("trk-pause").style.display="none";
  document.getElementById("trk-finish").style.display="none";
}
function trkFinish(){
  var miles=+(trk.distM/1609.344).toFixed(2);
  var dur=Math.round(trkElapsedMs()/60000);
  trkStop();
  if(miles<=0 && dur<=0){ trkStatus("Nothing to save",""); trkReset(); return; }
  trkCommit(miles,dur,"GPS tracked");
  trkReset();
  trkStatus("✓ Saved "+miles.toFixed(2)+" mi "+(trk.activity==="ride"?"ride":"walk"),"#5eead4");
}
function trkReset(){ trk.distM=0; trk.elapsedMs=0; trk.lastPt=null; trkUpdate(); }
function trkSaveManual(){
  var miles=parseFloat(document.getElementById("trk-m-miles").value)||0;
  var dur=parseInt(document.getElementById("trk-m-min").value)||0;
  if(miles<=0 && dur<=0){ trkStatus("Enter miles or minutes first","#fbbf24"); return; }
  trkCommit(+miles.toFixed(2),dur,"manual");
  document.getElementById("trk-m-miles").value=""; document.getElementById("trk-m-min").value="";
  trkStatus("✓ Saved "+miles.toFixed(2)+" mi "+(trk.activity==="ride"?"ride":"walk")+" (manual)","#5eead4");
}
function trkCommit(miles,dur,source){
  var day=getDay();
  if(trk.activity==="ride"){
    day.rides=day.rides||[];
    day.rides.push({miles:miles,duration:dur,effort:"",daughter:false,notes:source});
    if(dur) day.exercises.push({name:"Mountain Bike Ride ("+dur+" min)",calories:Math.round(dur*9.2),type:"cardio",id:Date.now().toString()});
  } else {
    var cals = dur ? Math.round(dur*6.5) : Math.round(miles*100);
    day.exercises.push({name:"Walk — "+miles.toFixed(2)+" mi"+(dur?" ("+dur+" min)":""),calories:cals,type:"cardio",id:Date.now().toString()});
  }
  saveDay(day); renderAll();
}
function renderTrackSummary(){
  // week-to-date distance from rides + walk exercise entries
  var wk=getWeekKeys(), rideMi=0, walkMi=0, sessions=0;
  wk.forEach(function(k){
    var d=appData[k]; if(!d) return;
    (d.rides||[]).forEach(function(r){ rideMi+=(+r.miles||0); if(+r.miles>0) sessions++; });
    (d.exercises||[]).forEach(function(e){
      var m=(e.name||"").match(/^Walk — ([\d.]+) mi/);
      if(m){ walkMi+=parseFloat(m[1])||0; sessions++; }
    });
  });
  var _dd=document.getElementById("dash-distance"); if(!_dd) return;
  _dd.innerHTML=
    '<div class="hsum-stat"><div class="hsum-val" style="color:#fb923c">'+rideMi.toFixed(1)+'</div><div class="hsum-lbl">Ride mi (7d)</div></div>'+
    '<div class="hsum-stat"><div class="hsum-val" style="color:#5eead4">'+walkMi.toFixed(1)+'</div><div class="hsum-lbl">Walk mi (7d)</div></div>'+
    '<div class="hsum-stat"><div class="hsum-val" style="color:#a78bfa">'+(rideMi+walkMi).toFixed(1)+'</div><div class="hsum-lbl">Total mi (7d)</div></div>';
}
function renderTopFoods(){
  var el=document.getElementById("topfoods-bars"); if(!el) return;
  var counts={}; // normalized name -> {name, count, cal}
  Object.keys(appData).forEach(function(k){
    var fs=(appData[k]&&appData[k].foods)||[];
    fs.forEach(function(f){
      if(!f.name) return;
      var key=f.name.toLowerCase().trim();
      if(!counts[key]) counts[key]={name:f.name,count:0,cal:f.cal||0};
      counts[key].count++;
    });
  });
  var list=Object.keys(counts).map(function(k){return counts[k];}).sort(function(a,b){return b.count-a.count;}).slice(0,5);
  var sub=document.getElementById("topfoods-sub");
  if(!list.length){
    if(sub) sub.textContent="Your most-logged foods";
    el.innerHTML='<div style="font-size:11px;color:#555;font-family:\'DM Mono\',monospace;text-align:center;padding:10px 0">Log a few foods and this fills in automatically.</div>';
    return;
  }
  if(sub) sub.textContent="Across "+Object.keys(appData).length+" logged day"+(Object.keys(appData).length===1?"":"s");
  var max=list[0].count;
  var colors=["#5eead4","#a78bfa","#fbbf24","#fb923c","#4ade80"];
  el.innerHTML=list.map(function(f,i){
    return '<div class="mrow"><div class="mlrow"><span>'+escH(f.name)+'</span><span>'+f.count+'x \u00b7 '+f.cal+' kcal</span></div>'+
      '<div class="mbar-wrap"><div class="mbar" style="width:'+Math.max((f.count/max)*100,4)+'%;background:'+colors[i]+'"></div></div></div>';
  }).join("");
}

// keep wake lock alive if iOS drops it on tab refocus
document.addEventListener("visibilitychange",function(){ if(document.visibilityState==="visible" && trk.active && !trk.paused) trkReqWake(); });
document.addEventListener("visibilitychange",function(){
  if(document.visibilityState==="visible" && qtInterval && !qtPaused && qtEndTs!=null){
    try{ qtTick(); }catch(e){}
    qtReqWake();
  }
});

// ── LOG render (everything entry-side) ──────────────────────────────────
function renderLog(){
  var banner=document.getElementById("banner-log");
  if(isToday()){ banner.style.display="none"; } else { banner.style.display="flex"; document.getElementById("banner-log-lbl").textContent=prettyDate(activeDate); }
  renderQuickAdd(); renderFoodLog(); renderHabits(); renderExLog(); renderWater(); renderWellness(); renderMedHistory(); renderMeasurements(); renderBodyComp(); renderSupps(); renderRides();
  document.getElementById("wt-input").value="";
}

// ── SETTINGS ────────────────────────────────────────────────────────────
function saveHealthSettings(){
  var g=function(id){var e=document.getElementById(id);return e?(e.value||""):"";};
  var nm=g("ft-name-input").trim(); store.set("ft_name",nm); USER_NAME=nm;
  var hn=document.getElementById("hname"); if(hn) hn.textContent=(nm?nm:"Athlete")+" 💪";
  var url=g("ft-sheets-url").trim(); store.set("ft_sheets_url",url); SHEETS_URL=url;
  var planUrl=g("ft-plan-url").trim(); store.set("ft_plan_url",planUrl); PLAN_URL=planUrl;
  var uk=g("ft-usda-key").trim(); store.set("ft_usda_key",uk); USDA_KEY=uk||"DEMO_KEY";
  var pin=g("ft-pin-input").trim(); if(/^\d{4}$/.test(pin)){ store.set("ft_pin",pin); APP_PIN=pin; } else { store.set("ft_pin",""); APP_PIN=""; }
  var sw=parseFloat(g("ft-start-weight"))||0; if(sw>0){ store.set("ft_start_weight",sw); START_WEIGHT=sw; }
  var gw=parseFloat(g("ft-goal-weight"))||0; store.set("ft_goal_weight",gw||""); GOAL_WEIGHT=gw;
  [["cal-rest","calRest"],["cal-recovery","calRecovery"],["cal-active","calActive"],["cal-ride","calRide"]].forEach(function(pair){ var v=parseInt(g("ft-"+pair[0]))||0; if(v>0){ store.set("ft_"+pair[0].replace("-","_"),v); GOALS[pair[1]]=v; } });
  ["protein","carbs","fat","fiber","burned"].forEach(function(k){ var v=parseInt(g("ft-"+k))||0; if(v>0){ store.set("ft_"+k,v); GOALS[k]=v; } });
  var w=parseInt(g("ft-water"))||0; if(w>0){ store.set("ft_water",w); WATER_GOAL=w; }
  var supps=[]; document.querySelectorAll(".ft-sup-inp").forEach(function(el,i){ if(el.value.trim()) supps.push({id:"s"+i,name:el.value.trim(),desc:"",emoji:"💊"}); });
  SUPPS=supps; store.set("ft_supps",JSON.stringify(supps));
  var labs=[]; document.querySelectorAll("#ft-labs .ft-lab-row").forEach(function(r){
    var n=r.querySelector(".ft-lab-name").value.trim();
    if(n) labs.push({name:n,target:r.querySelector(".ft-lab-tgt").value.trim(),current:r.querySelector(".ft-lab-val").value.trim()});
  });
  store.set("ft_labs",JSON.stringify(labs));
  store.set("ft_habits", JSON.stringify(collectHabitsFromEditor()));
  var msg=document.getElementById("ft-settings-msg"); if(msg){ msg.textContent="✓ Saved"; setTimeout(function(){msg.textContent="";},2500); }
  var b=document.getElementById("ft-open-sheet-btn"); if(b) b.style.display=url?"block":"none";
  pushConfig();
  renderAll();
}

function openHealthSheet(){
  var url = store.get("ft_sheets_url") || "";
  // Derive spreadsheet URL from Apps Script URL if possible, else open sheets home
  window.open("https://docs.google.com/spreadsheets/", "_blank");
}

function initHealthSettings(){
  var setv=function(id,val){var e=document.getElementById(id); if(e) e.value=val;};
  setv("ft-name-input", store.get("ft_name")||"");
  setv("ft-sheets-url", store.get("ft_sheets_url")||"");
  setv("ft-plan-url", store.get("ft_plan_url")||"");
  setv("ft-usda-key", store.get("ft_usda_key")||"");
  setv("ft-pin-input", store.get("ft_pin")||"");
  setv("ft-start-weight", store.get("ft_start_weight")||"");
  setv("ft-goal-weight", store.get("ft_goal_weight")||"");
  setv("ft-cal-rest", GOALS.calRest); setv("ft-cal-recovery", GOALS.calRecovery); setv("ft-cal-active", GOALS.calActive); setv("ft-cal-ride", GOALS.calRide); setv("ft-protein", GOALS.protein); setv("ft-carbs", GOALS.carbs);
  setv("ft-fat", GOALS.fat); setv("ft-fiber", GOALS.fiber); setv("ft-burned", GOALS.burned); setv("ft-water", WATER_GOAL);
  var sups=document.querySelectorAll(".ft-sup-inp");
  for(var i=0;i<sups.length;i++) sups[i].value=(SUPPS[i]&&SUPPS[i].name)||"";
  renderLabEditor();
  renderHabitEditor();
  if (store.get("ft_sheets_url")) { var b=document.getElementById("ft-open-sheet-btn"); if(b) b.style.display="block"; }
  var ts = store.get("ft_last_backup");
  var lbl = document.getElementById("bk-last");
  if (lbl) lbl.textContent = ts ? "Last backup: "+new Date(ts).toLocaleString() : "";
}

// ── BACKUP (push, then pull TODAY's row and show it) ────────────────────
function doBackup(){
  var btn=document.getElementById("bk-btn"), status=document.getElementById("bk-status");
  btn.disabled=true; btn.textContent="Backing up...";
  status.innerHTML='<span style="color:#5eead4">Sending to Google Sheets…</span>';
  clearTimeout(_syncTimer);
  pushToSheets().then(function(){ return new Promise(function(r){setTimeout(r,1500);}); }).then(function(){
    store.set("ft_last_backup", new Date().toISOString());
    document.getElementById("bk-last").textContent="Last backup: "+new Date().toLocaleString();
    // Pull back and confirm today's row from the sheet
    fetchSheet(function(rows,ok){
      btn.disabled=false; btn.textContent="Backup Now";
      if(!ok||!Array.isArray(rows)){ status.innerHTML='<span style="color:#fbbf24">Saved. Could not read back to confirm.</span>'; return; }
      mergeRows(rows); 
      var tk=todayKey(), row=rows.filter(function(r){return (r["Date"]||"").trim()===tk;})[0];
      if(row){
        status.innerHTML='<span style="color:#5eead4">✓ Backed up &amp; confirmed in the sheet.</span>';
        showTodayRow(row);
      } else {
        status.innerHTML='<span style="color:#5eead4">✓ Backup sent.</span> <span style="color:#888">No row for today yet — log something first.</span>';
        document.getElementById("bk-today-row").innerHTML="";
      }
      renderAll();
      setTimeout(function(){status.innerHTML="";},6000);
    });
  }).catch(function(){
    btn.disabled=false; btn.textContent="Backup Now";
    status.innerHTML='<span style="color:#f87171">✗ Backup failed. Check connection.</span>';
  });
}
function showTodayRow(r){
  var cal=+r["Calories Eaten"]||0, prot=+r["Protein (g)"]||0, burn=+r["Calories Burned"]||0,
      water=+r["Water (oz)"]||0, wt=+r["Weight (lbs)"]||0, waist=r["Waist (in)"]||"";
  document.getElementById("bk-today-row").innerHTML=
    '<div class="hcard" style="margin-top:10px">'+
    '<div class="hdate">Today in the sheet — '+prettyDate(todayKey())+'</div>'+
    '<div class="hstats">'+
      '<div class="hstat"><div class="hstat-lbl">Calories</div><div class="hstat-val" style="color:#5eead4">'+cal+'</div></div>'+
      '<div class="hstat"><div class="hstat-lbl">Protein</div><div class="hstat-val" style="color:#fbbf24">'+prot+'g</div></div>'+
      '<div class="hstat"><div class="hstat-lbl">Water</div><div class="hstat-val" style="color:#38bdf8">'+water+'oz</div></div>'+
    '</div>'+
    '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">'+
      (burn>0?'<span class="tag tc">🔥 '+burn+' burned</span>':'')+
      (wt>0?'<span class="tag ts">⚖️ '+wt+' lbs</span>':'')+
      (waist?'<span class="tag tm">📏 '+waist+'"</span>':'')+
    '</div>'+
    (r["Foods"]?'<div class="hlbl">Foods</div><div class="hfoods">'+r["Foods"]+'</div>':'')+
    (r["Exercises"]?'<div class="hlbl">Workouts</div><div class="hfoods">'+r["Exercises"]+'</div>':'')+
    '</div>';
}
function clearLocalData(){
  if(!confirm("Clear all locally stored data on this device? Your Google Sheet backup is NOT affected.")) return;
  store.remove("ft_data"); appData={}; renderAll();
}

// ── WEEKLY CHECK-IN ─────────────────────────────────────────────────────
var CI_QUESTIONS=[
  {id:"workouts",q:"How many resistance sessions did you hit this week?"},
  {id:"rides",q:"Did you get your Saturday ride in?"},
  {id:"protein",q:"How consistent was your protein (170g+)?"},
  {id:"sleep",q:"How was your sleep overall?"},
  {id:"energy",q:"Energy / recovery this week?"}
];
var ciAnswers={};
function renderCheckin(){
  var saved={};
  try{ saved=JSON.parse(store.get("ci_"+ciWeekKey())||"{}"); }catch(e){}
  ciAnswers=saved.answers||{};
  document.getElementById("ci-form").innerHTML=CI_QUESTIONS.map(function(q){
    return '<div style="margin-bottom:14px"><div class="row-name" style="margin-bottom:8px">'+q.q+'</div>'+
      '<div class="rating-row">'+[1,2,3,4,5].map(function(v){
        return '<button class="rbtn'+(ciAnswers[q.id]===v?" sel":"")+'" onclick="setCIAnswer(\''+q.id+'\','+v+',this)">'+v+'</button>';
      }).join("")+'</div></div>';
  }).join("")+'<button class="bp bfull" onclick="saveCheckin()">Save Check-In</button>';
  renderCIHistory();
}
function setCIAnswer(id,v,el){ ciAnswers[id]=v;
  el.parentNode.querySelectorAll(".rbtn").forEach(function(b){b.classList.remove("sel");}); el.classList.add("sel"); }
function ciWeekKey(){ var d=new Date(); var day=d.getDay(); d.setDate(d.getDate()-day); return "wk_"+localDateKey(d); }
function saveCheckin(){
  store.set("ci_"+ciWeekKey(), JSON.stringify({date:todayKey(),answers:ciAnswers}));
  var m=document.getElementById("ci-msg"); m.textContent="✓ Check-in saved for this week"; setTimeout(function(){m.textContent="";},2500);
  renderCIHistory();
}
function renderCIHistory(){
  var keys=Object.keys(localStorage).filter(function(k){return k.indexOf("ci_wk_")===0;}).sort().reverse().slice(0,6);
  var el=document.getElementById("ci-history");
  if(!keys.length){ el.innerHTML=""; return; }
  el.innerHTML='<div class="row-sub" style="margin:10px 0 6px">Recent check-ins</div>'+keys.map(function(k){
    var o={}; try{o=JSON.parse(store.get(k));}catch(e){}
    var avg=0,a=o.answers||{},vals=Object.keys(a).map(function(x){return a[x];});
    if(vals.length) avg=(vals.reduce(function(s,v){return s+v;},0)/vals.length).toFixed(1);
    return '<div class="row"><div class="row-name" style="font-size:11px">Week of '+prettyDate(k.replace("ci_wk_",""))+'</div><div class="row-sub">avg '+avg+'/5</div></div>';
  }).join("");
}

// ── PIN ─────────────────────────────────────────────────────────────────
var pinEntry="";
function pinKey(d){ if(pinEntry.length>=4) return; pinEntry+=d; pinDots(); if(pinEntry.length===4) setTimeout(checkPin,150); }
function pinDel(){ pinEntry=pinEntry.slice(0,-1); pinDots(); document.getElementById("pin-error").textContent=""; }
function pinDots(){ for(var i=0;i<4;i++) document.getElementById("d"+i).classList.toggle("filled",i<pinEntry.length); }
function checkPin(){
  if(!APP_PIN || pinEntry===APP_PIN){ document.getElementById("pin-screen").style.display="none"; sessionStorage.setItem("unlocked","1"); }
  else { document.getElementById("pin-error").textContent="Incorrect PIN"; pinEntry=""; pinDots();
    var dots=document.querySelector(".pin-dots"); dots.style.transform="translateX(-8px)";
    setTimeout(function(){dots.style.transform="translateX(8px)";},80);
    setTimeout(function(){dots.style.transform="translateX(0)";},200); }
}

// ── INIT ────────────────────────────────────────────────────────────────
(function(){ var need = APP_PIN && sessionStorage.getItem("unlocked")!=="1"; document.getElementById("pin-screen").style.display = need ? "flex" : "none"; })();

document.querySelectorAll(".tab-btn").forEach(function(btn){ btn.addEventListener("click",function(){ switchTab(btn.dataset.tab); }); });
document.querySelectorAll(".rbtn[data-field]").forEach(function(btn){
  btn.addEventListener("click",function(){
    var f=btn.dataset.field, v=parseInt(btn.dataset.val); wellnessRatings[f]=v;
    document.querySelectorAll(".rbtn[data-field="+f+"]").forEach(function(b){b.classList.toggle("sel",parseInt(b.dataset.val)===v);});
  });
});

populateFoodDropdown();
populateExDropdown();
setTimeout(renderAll, 0);
if(typeof ldInit==="function"){ try{ldInit();}catch(e){} }

// ── CUSTOMIZATION RENDERS (config-driven) ───────────────────────────────
function escH(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function renderWeightTargets(){
  var el=document.getElementById("weight-targets"); if(!el) return;
  el.textContent="Start: "+START_WEIGHT+" lbs"+(GOAL_WEIGHT?" \u00b7 Goal: "+GOAL_WEIGHT+" lbs":"");
}
function renderLabs(){
  var card=document.getElementById("labs-card"); if(!card) return;
  var labs=[]; try{labs=JSON.parse(store.get("ft_labs")||"[]");}catch(e){}
  labs=labs.filter(function(l){return l&&l.name;});
  if(!labs.length){ card.style.display="none"; return; }
  card.style.display="block";
  var el=document.getElementById("labs-list"); if(!el) return;
  el.innerHTML=labs.map(function(l){
    return '<div class="lab-row"><div><div style="font-size:12px;font-weight:700">'+escH(l.name)+'</div>'+
      '<div style="font-size:10px;color:#888;font-family:\'DM Mono\',monospace">Target: '+escH(l.target||"\u2014")+'</div></div>'+
      '<span class="tag" style="background:#5eead422;color:#5eead4;border:1px solid #5eead444">'+escH(l.current||"\u2014")+'</span></div>';
  }).join("");
}
// settings editors
function _labRowHtml(l){ l=l||{};
  return '<div class="ft-lab-row" style="display:grid;grid-template-columns:2fr 1fr 1fr auto;gap:6px;margin-bottom:8px;align-items:center">'+
    '<input class="ft-lab-name" placeholder="Lab (e.g. A1c)" value="'+escH(l.name||"")+'" style="margin-bottom:0"/>'+
    '<input class="ft-lab-tgt" placeholder="Target" value="'+escH(l.target||"")+'" style="margin-bottom:0"/>'+
    '<input class="ft-lab-val" placeholder="Current" value="'+escH(l.current||"")+'" style="margin-bottom:0"/>'+
    '<button class="bd" onclick="removeLabRow(this)" style="padding:8px 10px">\u2715</button></div>';
}
function renderLabEditor(){
  var el=document.getElementById("ft-labs"); if(!el) return;
  var labs=[]; try{labs=JSON.parse(store.get("ft_labs")||"[]");}catch(e){}
  if(!labs.length) labs=[{name:"",target:"",current:""}];
  el.innerHTML=labs.map(function(l){return _labRowHtml(l);}).join("");
}
function addLabRow(){ var el=document.getElementById("ft-labs"); if(!el) return; var d=document.createElement("div"); d.innerHTML=_labRowHtml({}); el.appendChild(d.firstChild); }
function removeLabRow(btn){ var r=btn.closest(".ft-lab-row"); if(r) r.remove(); }


function openSettings(){ initHealthSettings(); document.getElementById("settings-overlay").style.display="flex"; document.getElementById("settings-overlay").scrollTop=0; }
function closeSettings(){ document.getElementById("settings-overlay").style.display="none"; }
function saveAndClose(){ saveHealthSettings(); closeSettings(); }


// ── BATCH A: WEEKLY SUMMARY + TREND CHARTS ──────────────────────────────
function _weekStartMon(){ var d=new Date(); var wd=d.getDay(); var diff=(wd===0?6:wd-1); d.setDate(d.getDate()-diff); d.setHours(0,0,0,0); return d; }
function renderWeekSummary(){
  var el=document.getElementById("week-summary"); if(!el) return;
  var start=_weekStartMon(), now=new Date(), keys=[];
  for(var i=0;i<7;i++){ var d=new Date(start); d.setDate(start.getDate()+i); if(d>now) break; keys.push(localDateKey(d)); }
  var logged=0,calSum=0,calDays=0,protSum=0,protDays=0,fibSum=0,fibDays=0,waterSum=0,waterDays=0,strength=0,rides=0;
  keys.forEach(function(k){
    var dd=appData[k]; if(!dd) return;
    var hasFood=dd.foods&&dd.foods.length, hasEx=dd.exercises&&dd.exercises.length, hasW=!!dd.weight;
    if(hasFood||hasEx||hasW||(dd.waterOz>0)) logged++;
    if(hasFood){ var t=dd.foods.reduce(function(a,x){return {c:a.c+(+x.cal||0),p:a.p+(+x.protein||0),fb:a.fb+(+x.fiber||0)};},{c:0,p:0,fb:0}); calSum+=t.c; calDays++; protSum+=t.p; protDays++; if(t.fb>0){fibSum+=t.fb; fibDays++;} }
    if(dd.waterOz>0){ waterSum+=dd.waterOz; waterDays++; }
    if(hasEx && dd.exercises.some(function(e){return e.type==="strength";})) strength++;
    rides += (dd.rides?dd.rides.length:0);
  });
  if(!logged){ el.innerHTML='<div style="text-align:center;color:#555;font-size:12px;font-family:\'DM Mono\',monospace;padding:12px 0">Nothing logged this week yet.</div>'; return; }
  function tile(val,label,color){ return '<div style="text-align:center;padding:8px 4px"><div style="font-size:20px;font-weight:800;color:'+color+'">'+val+'</div><div style="font-size:9px;color:#888;font-family:\'DM Mono\',monospace;text-transform:uppercase;letter-spacing:1px;margin-top:3px">'+label+'</div></div>'; }
  el.innerHTML='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">'+
    tile(logged+"/"+keys.length,"Days","#5eead4")+
    tile(calDays?Math.round(calSum/calDays):"\u2014","Avg Cal","#5eead4")+
    tile(protDays?Math.round(protSum/protDays)+"g":"\u2014","Avg Protein","#fbbf24")+
    tile(fibDays?Math.round(fibSum/fibDays)+"g":"\u2014","Avg Fiber","#4ade80")+
    tile(strength,"Workouts","#a78bfa")+
    tile(rides,"Rides","#fb923c")+
    tile(waterDays?Math.round(waterSum/waterDays)+"oz":"\u2014","Avg Water","#38bdf8")+
  '</div>';
}
function _series(getter){
  return Object.keys(appData).filter(function(k){return appData[k];}).sort().map(function(k){
    var v=getter(appData[k]); if(v==null||v===""||isNaN(+v)) return null; return {t:keyToDate(k).getTime(),v:+v};
  }).filter(Boolean);
}
function sparkSVG(series,opt){
  opt=opt||{}; var W=320,H=opt.h||130,padL=34,padR=12,padT=12,padB=20;
  if(series.length<2) return '';
  var ts=series.map(function(p){return p.t;}), vs=series.map(function(p){return p.v;});
  var tMin=Math.min.apply(null,ts),tMax=Math.max.apply(null,ts);
  var vMin=Math.min.apply(null,vs),vMax=Math.max.apply(null,vs);
  if(opt.goal){ vMin=Math.min(vMin,opt.goal); vMax=Math.max(vMax,opt.goal); }
  var pad=(vMax-vMin)*0.12||1; vMin-=pad; vMax+=pad;
  function sx(t){ return tMax===tMin?(padL):padL+(t-tMin)/(tMax-tMin)*(W-padL-padR); }
  function sy(v){ return padT+(vMax-v)/(vMax-vMin)*(H-padT-padB); }
  var color=opt.color||"#a78bfa";
  var pts=series.map(function(p){return sx(p.t).toFixed(1)+","+sy(p.v).toFixed(1);}).join(" ");
  var svg='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto;display:block">';
  if(opt.goal){ var gy=sy(opt.goal).toFixed(1);
    svg+='<line x1="'+padL+'" y1="'+gy+'" x2="'+(W-padR)+'" y2="'+gy+'" stroke="#5eead4" stroke-width="1" stroke-dasharray="4 3" opacity="0.7"/>';
    svg+='<text x="'+(W-padR)+'" y="'+(gy-3)+'" text-anchor="end" font-size="9" fill="#5eead4" font-family="monospace">goal '+opt.goal+'</text>';
  }
  svg+='<polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
  series.forEach(function(p,i){ var r=(i===series.length-1)?3.2:2; svg+='<circle cx="'+sx(p.t).toFixed(1)+'" cy="'+sy(p.v).toFixed(1)+'" r="'+r+'" fill="'+color+'"/>'; });
  svg+='<text x="2" y="'+(padT+4)+'" font-size="9" fill="#888" font-family="monospace">'+(Math.round(vMax*10)/10)+'</text>';
  svg+='<text x="2" y="'+(H-padB+4)+'" font-size="9" fill="#888" font-family="monospace">'+(Math.round(vMin*10)/10)+'</text>';
  function md(t){ var d=new Date(t); return (d.getMonth()+1)+"/"+d.getDate(); }
  svg+='<text x="'+padL+'" y="'+(H-4)+'" font-size="9" fill="#666" font-family="monospace">'+md(tMin)+'</text>';
  svg+='<text x="'+(W-padR)+'" y="'+(H-4)+'" text-anchor="end" font-size="9" fill="#666" font-family="monospace">'+md(tMax)+'</text>';
  return svg+'</svg>';
}
function _trendHdr(label,series,unit,dir){
  var f=series[0].v,l=series[series.length-1].v,c=l-f;
  var col,arr=(c<0?"\u25bc ":(c>0?"\u25b2 ":"\u2192 "));
  if(dir==="higher") col=(c>=0?"#5eead4":"#fb923c");
  else if(dir==="neutral") col="#5eead4";
  else col=(c<=0?"#5eead4":"#fb923c"); // lower-is-better (default)
  return '<div style="display:flex;justify-content:space-between;align-items:baseline;margin:0 0 4px"><span style="font-size:11px;color:#aaa;font-family:\'DM Mono\',monospace;letter-spacing:1px">'+label+'</span><span style="font-size:11px;color:'+col+';font-family:\'DM Mono\',monospace">'+arr+Math.abs(Math.round(c*10)/10)+" "+unit+'</span></div>';
}
function _meas(d,k){ return (d.measurements&&d.measurements[k]!=null&&d.measurements[k]!=="")?parseFloat(d.measurements[k]):null; }
function setTrendMetric(k){ store.set("ft_trend_metric",k); renderTrends(); }
function renderTrends(){
  var chartEl=document.getElementById("trend-chart"); if(!chartEl) return;
  var chips=document.getElementById("trend-chips");
  var avail=[];
  TREND_METRICS.forEach(function(m){ m._s=_series(m.get); if(m._s.length>=2) avail.push(m); });
  if(!avail.length){ if(chips) chips.innerHTML=""; chartEl.innerHTML='<div style="font-size:11px;color:#555;font-family:\'DM Mono\',monospace;padding:8px 0">Log a metric at least twice (weight, waist, food, water\u2026) and your trend appears here.</div>'; return; }
  var sel=store.get("ft_trend_metric")||"weight";
  if(!avail.some(function(m){return m.key===sel;})) sel=avail[0].key;
  if(chips) chips.innerHTML=avail.map(function(m){ var on=m.key===sel;
    return '<span onclick="setTrendMetric(\''+m.key+'\')" style="cursor:pointer;font-size:11px;padding:5px 10px;border-radius:14px;font-family:\'DM Mono\',monospace;border:1px solid '+(on?m.color:"#2a2a45")+';background:'+(on?(m.color+"22"):"transparent")+';color:'+(on?m.color:"#888")+'">'+m.label+'</span>';
  }).join("");
  var m=avail.filter(function(x){return x.key===sel;})[0];
  chartEl.innerHTML=_trendHdr(m.label.toUpperCase(), m._s, m.unit, m.dir)+sparkSVG(m._s,{color:m.color, goal:(m.goal?m.goal():0)});
}


// ── BATCH B: FAST FOOD LOGGING (copy / recent / favorites / meals) ──────
var _recentCache=[];
function loadFav(){ try{ var a=JSON.parse(store.get("ft_fav_foods")||"[]"); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function saveFav(a){ store.set("ft_fav_foods", JSON.stringify(a)); }
function loadMeals(){ try{ var a=JSON.parse(store.get("ft_meals")||"[]"); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function saveMeals(a){ store.set("ft_meals", JSON.stringify(a)); }
function _foodKey(f){ return (f.name||"").toLowerCase().trim()+"|"+(+f.cal||0); }
function _foodCopy(f){ var o={name:f.name,cal:+f.cal||0,protein:+f.protein||0,carbs:+f.carbs||0,fat:+f.fat||0}; if(+f.fiber) o.fiber=+f.fiber; if(f.fdcId) o.fdcId=f.fdcId; if(+f.grams) o.grams=+f.grams; return o; }
function isFavObj(f){ var k=_foodKey(f); return loadFav().some(function(x){return _foodKey(x)===k;}); }
function addFoodObj(f){ var day=getDay(); var o=_foodCopy(f); o.id=Date.now().toString()+Math.floor(Math.random()*1000); day.foods.push(o); saveDay(day); renderAll(); }
function toggleFavById(id){
  var f=getDay().foods.filter(function(x){return x.id==id;})[0]; if(!f) return;
  var fav=loadFav(), k=_foodKey(f), i=fav.map(_foodKey).indexOf(k);
  if(i>=0){ fav.splice(i,1); toast("Removed from favorites"); } else { fav.push(_foodCopy(f)); toast("\u2605 Favorited"); }
  saveFav(fav); renderAll();
}
function addFav(i){ var f=loadFav()[i]; if(f){ addFoodObj(f); toast("Added "+f.name); } }
function delFav(i){ var fav=loadFav(); fav.splice(i,1); saveFav(fav); renderQuickAdd(); }
function addRecentIdx(i){ var f=_recentCache[i]; if(f){ addFoodObj(f); toast("Added "+f.name); } }
function copyYesterday(){
  var d=keyToDate(activeDate); d.setDate(d.getDate()-1); var yk=localDateKey(d);
  var src=appData[yk]; if(!src||!src.foods||!src.foods.length){ toast("No food logged the day before"); return; }
  var day=getDay(); src.foods.forEach(function(f){ var o=_foodCopy(f); o.id=Date.now().toString()+Math.floor(Math.random()*1000); day.foods.push(o); });
  saveDay(day); renderAll(); toast("Copied "+src.foods.length+" item"+(src.foods.length>1?"s":""));
}
function recentFoods(){
  var keys=Object.keys(appData).sort().reverse(), seen={}, out=[], favKeys=loadFav().map(_foodKey);
  for(var i=0;i<keys.length && out.length<10;i++){
    var fs=(appData[keys[i]]&&appData[keys[i]].foods)||[];
    for(var j=fs.length-1;j>=0;j--){ var fo=fs[j], k=_foodKey(fo); if(!fo.name||seen[k]||favKeys.indexOf(k)>=0) continue; seen[k]=1; out.push(_foodCopy(fo)); if(out.length>=10) break; }
  }
  return out;
}
// ── Food History Search: searches every logged day, not just the last 10 ──
var _fhDebounce=null;
var _fhCache={};
function fhSearch(q){
  clearTimeout(_fhDebounce);
  _fhDebounce=setTimeout(function(){ fhRunSearch(q); }, 180);
}
function fhRunSearch(q){
  q=(q||"").trim().toLowerCase();
  var statusEl=document.getElementById("fh-status"), resEl=document.getElementById("fh-results");
  if(!statusEl||!resEl) return;
  _fhCache={};
  if(q.length<2){ statusEl.textContent=""; resEl.innerHTML=""; return; }

  var keys=Object.keys(appData).sort().reverse();
  var grouped={}; // key -> {food, count, lastDate}
  for(var i=0;i<keys.length;i++){
    var dk=keys[i], fs=(appData[dk]&&appData[dk].foods)||[];
    for(var j=0;j<fs.length;j++){
      var fo=fs[j];
      if(!fo.name || fo.name.toLowerCase().indexOf(q)===-1) continue;
      var k=_foodKey(fo);
      if(!grouped[k]){ grouped[k]={food:_foodCopy(fo), count:0, lastDate:dk}; }
      grouped[k].count++;
      if(dk>grouped[k].lastDate) grouped[k].lastDate=dk;
    }
  }
  var results=Object.keys(grouped).map(function(k){ return grouped[k]; });
  results.sort(function(a,b){ return a.lastDate<b.lastDate?1:-1; }); // most recently eaten first

  if(!results.length){ statusEl.textContent="No matches in your food history"; resEl.innerHTML=""; return; }
  statusEl.textContent=results.length+" match"+(results.length===1?"":"es");
  resEl.innerHTML=results.slice(0,40).map(function(r,i){
    var f=r.food;
    var when = r.lastDate===todayKey() ? "today" : (r.lastDate===localDateKey(new Date(Date.now()-86400000)) ? "yesterday" : "last "+prettyDate(r.lastDate));
    var countLbl = r.count>1 ? r.count+"\u00d7 logged \u00b7 " : "";
    _fhCache[i]=f;
    return '<div class="fh-row">'+
      '<div class="fh-info"><div class="fh-name">'+escH(f.name)+'</div>'+
      '<div class="fh-meta">'+f.cal+' cal \u00b7 '+f.protein+'g P \u00b7 '+countLbl+'eaten '+when+'</div></div>'+
      '<button class="fh-add" onclick="fhAdd('+i+')">+ Log</button>'+
      '</div>';
  }).join("");
}
function fhAdd(i){
  var f=_fhCache[i]; if(!f) return;
  addFoodObj(f);
  toast("Added "+f.name);
}
/* ── Protein staples: one-tap logging for the standardized day ──────────── */
var FT_STAPLES=[
  {emoji:"\ud83e\udd5a",name:"3 boiled eggs",cal:210,protein:18,carbs:1,fat:15},
  {emoji:"\ud83e\udd64",name:"Protein shake (whey + whole milk)",cal:330,protein:38,carbs:20,fat:11},
  {emoji:"\ud83e\udd63",name:"Oikos Triple Zero",cal:90,protein:15,carbs:6,fat:0},
  {emoji:"\ud83e\uddc0",name:"Cottage cheese (1 cup)",cal:180,protein:24,carbs:8,fat:5},
  {emoji:"\ud83d\udc14",name:"Chicken breast (6 oz cooked)",cal:280,protein:52,carbs:0,fat:6},
  {emoji:"\ud83d\udc1f",name:"Canned tuna (1 can, drained)",cal:120,protein:26,carbs:0,fat:1},
  {emoji:"\ud83e\udd69",name:"Ground beef 90% (6 oz cooked)",cal:310,protein:44,carbs:0,fat:15},
  {emoji:"\ud83c\udf5a",name:"Dinner sides (estimate)",cal:400,protein:8,carbs:50,fat:15}
];
function addStaple(i){ var f=FT_STAPLES[i]; if(f){ addFoodObj({name:f.name,cal:f.cal,protein:f.protein,carbs:f.carbs,fat:f.fat}); } }
function addUsualDay(){
  var day=getDay();
  [0,1,2,3].forEach(function(i){ var f=FT_STAPLES[i]; var o=_foodCopy(f); o.id=Date.now().toString()+Math.floor(Math.random()*10000)+i; day.foods.push(o); });
  saveDay(day); renderAll(); toast("Usual day logged \u2014 95g protein banked. Just add lunch + dinner protein.");
}
function saveMealFromToday(){
  var el=document.getElementById("qa-meal-name"), name=(el.value||"").trim();
  var foods=getDay().foods; if(!foods.length){ toast("Log some food first"); return; }
  if(!name){ toast("Name the meal first"); return; }
  var meals=loadMeals(); meals.push({name:name,foods:foods.map(_foodCopy)}); saveMeals(meals);
  el.value=""; renderQuickAdd(); toast("Saved meal: "+name);
}
function addMeal(i){
  var m=loadMeals()[i]; if(!m) return; var day=getDay();
  m.foods.forEach(function(f){ var o=_foodCopy(f); o.id=Date.now().toString()+Math.floor(Math.random()*1000); day.foods.push(o); });
  saveDay(day); renderAll(); toast("Added "+m.name);
}
function delMeal(i){ var meals=loadMeals(); meals.splice(i,1); saveMeals(meals); renderQuickAdd(); }
function _chip(label,onclick,delClick){
  var x=delClick?'<b onclick="event.stopPropagation();'+delClick+'" style="margin-left:7px;color:#ff6b6b;font-weight:700">\u2715</b>':'';
  return '<span class="tag" style="cursor:pointer;background:#5eead416;color:#cfeee9;border:1px solid #5eead430;padding:6px 10px" onclick="'+onclick+'">'+label+x+'</span>';
}
function renderQuickAdd(){
  var stWrap=document.getElementById("qa-staples");
  if(stWrap)stWrap.innerHTML=FT_STAPLES.map(function(f,i){return _chip(f.emoji+" "+escH(f.name)+" \u00b7 "+f.protein+"g P","addStaple("+i+")");}).join("");
  if(typeof renderCeFavSelect==="function") renderCeFavSelect();
  var favWrap=document.getElementById("qa-fav-wrap"); if(!favWrap) return;
  var recWrap=document.getElementById("qa-recent-wrap");
  var fav=loadFav();
  if(fav.length){ favWrap.style.display="block";
    var favSel=document.getElementById("qa-fav-select");
    if(favSel) favSel.innerHTML='<option value="">\u2605 Favorites \u2014 pick one to add\u2026</option>'+fav.map(function(f,i){return '<option value="'+i+'">'+escH(f.name)+' \u00b7 '+f.cal+' cal</option>';}).join(""); }
  else favWrap.style.display="none";
  _recentCache=recentFoods();
  if(_recentCache.length){ recWrap.style.display="block";
    var recSel=document.getElementById("qa-recent-select");
    if(recSel) recSel.innerHTML='<option value="">\ud83d\udd58 Recent \u2014 pick one to add\u2026</option>'+_recentCache.map(function(f,i){return '<option value="'+i+'">'+escH(f.name)+' \u00b7 '+f.cal+' cal</option>';}).join(""); }
  else recWrap.style.display="none";
  var meals=loadMeals();
  document.getElementById("qa-meals").innerHTML = meals.length? meals.map(function(m,i){ var cal=m.foods.reduce(function(a,x){return a+(+x.cal||0);},0); return _chip("\ud83c\udf71 "+escH(m.name)+" \u00b7 "+cal,"addMeal("+i+")","delMeal("+i+")"); }).join("")
    : '<span style="font-size:11px;color:#555;font-family:\'DM Mono\',monospace">No saved meals yet \u2014 log foods, name them below, and Save.</span>';
}
function qaFavSelectChange(sel){
  if(sel.value!==""){ addFav(+sel.value); sel.value=""; }
}
function qaManageFavs(){
  var fav=loadFav();
  if(!fav.length){ toast("No favorites yet"); return; }
  var names=fav.map(function(f,i){return (i+1)+". "+f.name;}).join("\n");
  var pick=prompt("Remove which favorite? Enter a number:\n\n"+names);
  if(pick===null) return;
  var idx=parseInt(pick)-1;
  if(idx>=0 && idx<fav.length){ delFav(idx); toast("Removed "+fav[idx].name); }
}
function toast(msg){
  var t=document.getElementById("ft-toast");
  if(!t){ t=document.createElement("div"); t.id="ft-toast"; t.style.cssText="position:fixed;left:50%;bottom:88px;transform:translateX(-50%);background:#1f2937;color:#e6fffb;border:1px solid #5eead455;padding:10px 16px;border-radius:20px;font-size:13px;z-index:99999;opacity:0;transition:opacity .2s;pointer-events:none;max-width:80%;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,.4)"; document.body.appendChild(t); }
  t.textContent=msg; t.style.opacity="1"; clearTimeout(t._tm); t._tm=setTimeout(function(){ t.style.opacity="0"; }, 1500);
}


// ── BATCH C: SETTINGS SYNC TO SHEET ─────────────────────────────────────
function buildConfig(){
  var keys=["ft_name","ft_start_weight","ft_goal_weight","ft_cal","ft_cal_rest","ft_cal_recovery","ft_cal_active","ft_cal_ride","ft_protein","ft_carbs","ft_fat","ft_burned","ft_water","ft_supps","ft_labs","ft_habits"];
  var cfg={}; keys.forEach(function(k){ var v=store.get(k); if(v!=null&&v!=="") cfg[k]=v; }); return cfg;
}
function pushConfig(){ if(!SHEETS_URL) return Promise.resolve(); return postPayload({config:buildConfig()}).catch(function(){}); }
function applyConfig(cfg){
  if(!cfg||typeof cfg!=="object") return false;
  var allow={ft_name:1,ft_start_weight:1,ft_goal_weight:1,ft_cal:1,ft_cal_rest:1,ft_cal_recovery:1,ft_cal_active:1,ft_cal_ride:1,ft_protein:1,ft_carbs:1,ft_fat:1,ft_burned:1,ft_water:1,ft_supps:1,ft_labs:1,ft_habits:1};
  var any=false;
  Object.keys(cfg).forEach(function(k){ if(allow[k]&&cfg[k]!=null){ store.set(k, typeof cfg[k]==="string"?cfg[k]:JSON.stringify(cfg[k])); any=true; } });
  if(!any) return false;
  USER_NAME=store.get('ft_name')||"";
  START_WEIGHT=parseFloat(store.get('ft_start_weight'))||START_WEIGHT;
  GOAL_WEIGHT=parseFloat(store.get('ft_goal_weight'))||0;
  GOALS.cal=parseInt(store.get('ft_cal'))||GOALS.cal;
  GOALS.calRest=parseInt(store.get('ft_cal_rest'))||GOALS.calRest;
  GOALS.calRecovery=parseInt(store.get('ft_cal_recovery'))||GOALS.calRecovery;
  GOALS.calActive=parseInt(store.get('ft_cal_active'))||GOALS.calActive;
  GOALS.calRide=parseInt(store.get('ft_cal_ride'))||GOALS.calRide;
  GOALS.protein=parseInt(store.get('ft_protein'))||GOALS.protein;
  GOALS.carbs=parseInt(store.get('ft_carbs'))||GOALS.carbs; GOALS.fat=parseInt(store.get('ft_fat'))||GOALS.fat; GOALS.burned=parseInt(store.get('ft_burned'))||GOALS.burned;
  WATER_GOAL=parseInt(store.get('ft_water'))||WATER_GOAL;
  try{ var sv=JSON.parse(store.get('ft_supps')||'null'); if(Array.isArray(sv)) SUPPS=sv; }catch(e){}
  if(typeof initHealthSettings==="function") initHealthSettings();
  renderAll();
  return true;
}
function pullConfig(apply,cb){
  if(!SHEETS_URL){ if(cb)cb(false); return; }
  var done=false; function fin(ok,cfg){ if(done)return; done=true; var applied=false; if(ok&&apply&&cfg) applied=applyConfig(cfg); if(cb)cb(ok,cfg,applied); }
  var to=setTimeout(function(){fin(false);},8000);
  fetch(SHEETS_URL+"?config=1&nocache="+Date.now()).then(function(r){return r.json();}).then(function(c){clearTimeout(to);fin(true,c);}).catch(function(){
    var nm="cfgCb_"+Date.now(); window[nm]=function(c){clearTimeout(to);delete window[nm];fin(true,c);};
    var s=document.createElement("script"); s.onerror=function(){delete window[nm];fin(false);}; s.src=SHEETS_URL+"?config=1&callback="+nm+"&nocache="+Date.now(); document.head.appendChild(s);
  });
}
function pullConfigManual(){
  if(!SHEETS_URL){ toast("Add your Apps Script URL first"); return; }
  toast("Loading settings\u2026");
  pullConfig(true,function(ok,cfg,applied){ toast(ok?(applied?"\u2713 Settings loaded from Sheet":"No saved settings in the Sheet yet"):"Couldn\u2019t reach the Sheet"); });
}


// ── BATCH D: PROGRESSIVE OVERLOAD HELPERS ──────────────────────────────
function _attachExDetail(ex,si,ri,li){
  var s=parseInt((document.getElementById(si)||{}).value)||0;
  var r=(((document.getElementById(ri)||{}).value)||"").trim();
  var l=(((document.getElementById(li)||{}).value)||"").trim();
  if(s) ex.sets=s; if(r) ex.reps=r; if(l) ex.load=l;
}
function _clearExDetail(si,ri,li){ [si,ri,li].forEach(function(id){ var el=document.getElementById(id); if(el) el.value=""; }); }
function exDetailStr(e){ if(!e||(!e.sets&&!e.reps&&!e.load)) return ""; var sr=(e.sets||e.reps)?((e.sets||"?")+"\u00d7"+(e.reps||"?")):""; return (sr+(e.load?(" @ "+e.load):"")).trim(); }
function lastExercise(name){
  if(!name) return null; name=String(name).toLowerCase().trim();
  var keys=Object.keys(appData).filter(function(k){return k!==activeDate;}).sort().reverse();
  for(var i=0;i<keys.length;i++){ var exs=(appData[keys[i]].exercises||[]); for(var j=exs.length-1;j>=0;j--){ var e=exs[j]; if((e.name||"").toLowerCase().trim()===name && (e.sets||e.reps||e.load)) return {e:e,date:keys[i]}; } }
  return null;
}
function showLastHint(name,elId){
  var el=document.getElementById(elId); if(!el) return;
  var l=lastExercise(name);
  el.innerHTML = l ? ("Last: "+escH(exDetailStr(l.e))+' <span style="color:#5eead4">\u2014 beat it \ud83d\udcaa</span>') : "";
}
// ── BATCH D: DAILY HABITS + STREAKS ─────────────────────────────────────
function loadHabits(){ try{ var a=JSON.parse(store.get("ft_habits")||"[]"); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
function toggleHabit(id){ var d=getDay(); d.habits=d.habits||{}; d.habits[id]=!d.habits[id]; saveDay(d); renderHabits(); }
function habitStreak(id){
  var streak=0, d=new Date(), todK=todayKey();
  if(!(appData[todK]&&appData[todK].habits&&appData[todK].habits[id])) d.setDate(d.getDate()-1);
  for(var guard=0; guard<400; guard++){ var k=localDateKey(d); if(appData[k]&&appData[k].habits&&appData[k].habits[id]){ streak++; d.setDate(d.getDate()-1); } else break; }
  return streak;
}
function renderHabits(){
  var el=document.getElementById("habits-list"); if(!el) return;
  var habits=loadHabits();
  if(!habits.length){ el.innerHTML='<div class="empty" style="padding:8px 0">Add daily habits in Settings \u2699 (e.g. Yoga, glute activation, wrist eccentrics).</div>'; return; }
  var hb=getDay().habits||{};
  el.innerHTML=habits.map(function(h){
    var on=!!hb[h.id], st=habitStreak(h.id);
    return '<div class="row" style="cursor:pointer" onclick="toggleHabit(\''+h.id+'\')"><div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">'+
      '<span style="font-size:18px">'+(on?"\u2705":"\u2b1c")+'</span>'+
      '<span class="row-name" style="'+(on?"":"color:#aaa")+'">'+escH(h.name)+'</span></div>'+
      (st>0?'<span class="tag" style="background:#fb923c22;color:#fb923c;border:1px solid #fb923c44">\ud83d\udd25 '+st+'</span>':'')+'</div>';
  }).join("");
}
function _habitRow(h){ h=h||{}; return '<div class="ft-habit-row" style="display:flex;gap:6px;margin-bottom:8px;align-items:center"><input class="ft-habit-name" placeholder="Habit (e.g. Yoga 20 min)" value="'+escH(h.name||"")+'" style="margin-bottom:0;flex:1"/><button class="bd" onclick="removeHabitRow(this)" style="padding:8px 10px">\u2715</button></div>'; }
function renderHabitEditor(){ var el=document.getElementById("ft-habits"); if(!el) return; var hs=loadHabits(); if(!hs.length) hs=[{name:""}]; el.innerHTML=hs.map(_habitRow).join(""); }
function addHabitRow(){ var el=document.getElementById("ft-habits"); if(!el) return; var d=document.createElement("div"); d.innerHTML=_habitRow({}); el.appendChild(d.firstChild); }
function removeHabitRow(btn){ var r=btn.closest(".ft-habit-row"); if(r) r.remove(); }
function collectHabitsFromEditor(){
  var existing=loadHabits(), out=[];
  document.querySelectorAll("#ft-habits .ft-habit-row").forEach(function(r){
    var nm=r.querySelector(".ft-habit-name").value.trim(); if(!nm) return;
    var prev=existing.filter(function(x){return (x.name||"").toLowerCase()===nm.toLowerCase();})[0];
    out.push({ id: prev?prev.id : ("h"+Date.now().toString(36)+Math.floor(Math.random()*1000)), name:nm });
  });
  return out;
}


// ── MEDITATION POP-OUT TIMER ────────────────────────────────────────────
var medTimer={dur:600,remaining:600,running:false,endTime:0,iv:null,wl:null,done:false};
var MED_PRESETS=[3,5,10,15,20];
function _fmtMMSS(s){ s=Math.max(0,s|0); var m=Math.floor(s/60),x=s%60; return (m<10?"0":"")+m+":"+(x<10?"0":"")+x; }
function medRenderTime(){ var el=document.getElementById("med-time"); if(el) el.textContent=_fmtMMSS(medTimer.remaining); }
function medUpdateChips(){
  var el=document.getElementById("med-chips"); if(!el) return;
  el.innerHTML=MED_PRESETS.map(function(m){ var on=medTimer.dur===m*60;
    return '<span onclick="medSetDur('+m+')" style="cursor:'+(medTimer.running?"default":"pointer")+';opacity:'+(medTimer.running?".35":"1")+';font-size:12px;padding:7px 13px;border-radius:16px;font-family:\'DM Mono\',monospace;border:1px solid '+(on?"#a78bfa":"#2a2a45")+';background:'+(on?"#a78bfa22":"transparent")+';color:'+(on?"#a78bfa":"#8b8ba0")+'">'+m+'m</span>';
  }).join("");
}
function medUpdateBtns(){
  var main=document.getElementById("med-btn-main"),fin=document.getElementById("med-btn-finish"),rst=document.getElementById("med-btn-reset");
  if(!main) return;
  if(medTimer.done){ main.textContent="Log session"; fin.style.display="none"; rst.style.display="inline-block"; }
  else if(medTimer.running){ main.textContent="Pause"; fin.style.display="inline-block"; rst.style.display="none"; }
  else if(medTimer.remaining<medTimer.dur){ main.textContent="Resume"; fin.style.display="inline-block"; rst.style.display="inline-block"; }
  else { main.textContent="Start"; fin.style.display="none"; rst.style.display="none"; }
}
function openMedTimer(){
  var pre=parseInt(document.getElementById("med-mins").value)||0;
  medTimer.dur=(pre>0?Math.min(pre,120):10)*60; medTimer.remaining=medTimer.dur; medTimer.running=false; medTimer.done=false;
  var st=document.getElementById("med-status"); if(st) st.textContent="";
  var c=document.getElementById("med-circle"); if(c) c.classList.remove("breathing");
  document.getElementById("med-timer-overlay").style.display="flex";
  medRenderTime(); medUpdateChips(); medUpdateBtns();
}
function closeMedTimer(){ medStop(); document.getElementById("med-timer-overlay").style.display="none"; }
function medSetDur(m){ if(medTimer.running) return; medTimer.dur=m*60; medTimer.remaining=m*60; medTimer.done=false; var st=document.getElementById("med-status"); if(st) st.textContent=""; medRenderTime(); medUpdateChips(); medUpdateBtns(); }
function medMain(){ if(medTimer.done) return medFinishLog(); if(medTimer.running) medPause(); else medStart(); }
function medStart(){
  if(medTimer.remaining<=0) medTimer.remaining=medTimer.dur;
  medTimer.running=true; medTimer.done=false; medTimer.endTime=Date.now()+medTimer.remaining*1000;
  clearInterval(medTimer.iv); medTimer.iv=setInterval(medTick,250);
  var c=document.getElementById("med-circle"); if(c) c.classList.add("breathing");
  document.getElementById("med-status").textContent="Breathe\u2026"; medWakeOn(); medUpdateChips(); medUpdateBtns();
}
function medPause(){
  medTimer.running=false; clearInterval(medTimer.iv); medTimer.iv=null;
  medTimer.remaining=Math.max(0,Math.round((medTimer.endTime-Date.now())/1000));
  var c=document.getElementById("med-circle"); if(c) c.classList.remove("breathing");
  document.getElementById("med-status").textContent="Paused"; medWakeOff(); medRenderTime(); medUpdateChips(); medUpdateBtns();
}
function medStop(){ medTimer.running=false; clearInterval(medTimer.iv); medTimer.iv=null; var c=document.getElementById("med-circle"); if(c) c.classList.remove("breathing"); medWakeOff(); }
function medReset(){ medStop(); medTimer.remaining=medTimer.dur; medTimer.done=false; var st=document.getElementById("med-status"); if(st) st.textContent=""; medRenderTime(); medUpdateChips(); medUpdateBtns(); }
function medTick(){ medTimer.remaining=Math.max(0,Math.round((medTimer.endTime-Date.now())/1000)); medRenderTime(); if(medTimer.remaining<=0) medComplete(); }
function medComplete(){
  medTimer.running=false; clearInterval(medTimer.iv); medTimer.iv=null; medTimer.done=true; medTimer.remaining=0;
  var c=document.getElementById("med-circle"); if(c) c.classList.remove("breathing");
  document.getElementById("med-status").textContent="\u2713 Session complete"; medRenderTime(); medUpdateBtns(); medWakeOff(); medBell();
}
function medFinishLog(){
  var elapsed = medTimer.done ? Math.round(medTimer.dur/60) : Math.max(1, Math.ceil((medTimer.dur-medTimer.remaining)/60));
  var mm=document.getElementById("med-mins"); if(mm) mm.value=elapsed;
  closeMedTimer();
  if(typeof toast==="function") toast("Meditation: "+elapsed+" min \u2014 pick type/clarity, then Log Session");
  if(mm&&mm.scrollIntoView) mm.scrollIntoView({behavior:"smooth",block:"center"});
}
function medWakeOn(){ try{ if("wakeLock" in navigator){ navigator.wakeLock.request("screen").then(function(w){medTimer.wl=w;}).catch(function(){}); } }catch(e){} }
function medWakeOff(){ try{ if(medTimer.wl){ medTimer.wl.release(); medTimer.wl=null; } }catch(e){} }
function medBell(){
  try{ var Ctx=window.AudioContext||window.webkitAudioContext; if(!Ctx) return; var ctx=new Ctx(); var notes=[528,660,792];
    [0,0.5,1.0].forEach(function(t,i){ var o=ctx.createOscillator(),g=ctx.createGain(); o.type="sine"; o.frequency.value=notes[i]; o.connect(g); g.connect(ctx.destination);
      var stt=ctx.currentTime+t; g.gain.setValueAtTime(0,stt); g.gain.linearRampToValueAtTime(0.25,stt+0.04); g.gain.exponentialRampToValueAtTime(0.0001,stt+1.6); o.start(stt); o.stop(stt+1.7); });
  }catch(e){}
}

initHealthSettings();

// Sheet is source of truth: pull + merge on open, then re-render
var _bn=document.getElementById("sync-banner");
if(!SHEETS_URL && _bn){ _bn.textContent="\u26A0 Not connected \u2014 Sheets URL missing. Open \u2699 Settings and re-enter your Apps Script URL."; _bn.style.color="#fbbf24"; _bn.style.display="block"; }
if(SHEETS_URL && !store.get("ft_name") && !store.get("ft_cal")){ pullConfig(true); }
fetchOverloadCache();
_lastSheetPull=Date.now();
fetchSheet(function(rows,ok){
  if(ok&&rows){ mergeRows(rows); renderAll(); if(_bn){_bn.textContent="✓ Synced with Google Sheets \u00b7 "+APP_BUILD;_bn.style.color="#4ade80";} }
  else { renderAll(); if(_bn && SHEETS_URL){ _bn.textContent="Offline — using local data \u00b7 "+APP_BUILD; _bn.style.color="#f87171"; } }
  if(_bn && SHEETS_URL) setTimeout(function(){ _bn.style.display="none"; },2200);
});

// ── PERIODIC BACKGROUND SYNC (every 3 minutes) ──────────────────────────
setInterval(function(){
  if(!SHEETS_URL) return;
  fetchSheet(function(rows,ok){
    if(ok&&rows){ mergeRows(rows); renderAll(); }
  });
}, 3 * 60 * 1000);

// ══════════════════════════════════════════════════════════════════════
// USDA FOOD SEARCH (FoodData Central) — ported from food_nutrition_info.py
// Searches USDA, scales per-100g nutrients to a logged weight, and pushes
// the result through addFoodObj() so it lands in the normal food log,
// macro totals, and Google Sheets sync like any other entry.
// ══════════════════════════════════════════════════════════════════════
var USDA_KEY = store.get("ft_usda_key") || "DEMO_KEY";
var USDA_SEARCH_URL = "https://api.nal.usda.gov/fdc/v1/foods/search";
var USDA_DETAILS_URL = "https://api.nal.usda.gov/fdc/v1/food/";
var _usdaResults = [], _usdaSel = null;

// ── MY USDA FOODS — per-100g cache + portion memory ─────────────────────
// { key: {name, fdcId, per100:{cal,protein,fat,carbs,fiber}|null, lastGrams, t} }
var USDA_CACHE = {};
try { USDA_CACHE = JSON.parse(store.get("ft_usda_cache")||"{}")||{}; } catch(e){ USDA_CACHE={}; }
// Seed with the original food_nutrition_info.py registry (per-100g fetched once on first use)
(function(){
  var seeds = {
    "fdc_1102652":{name:"Avocado raw",                    fdcId:1102652},
    "fdc_1103859":{name:"Yogurt Greek plain nonfat",      fdcId:1103859},
    "fdc_1104523":{name:"Chicken breast meat only raw",   fdcId:1104523},
    "fdc_1098179":{name:"Ground beef 93% lean raw",       fdcId:1098179},
    "fdc_1102702":{name:"Blueberries raw",                fdcId:1102702}
  };
  Object.keys(seeds).forEach(function(k){ if(!USDA_CACHE[k]) USDA_CACHE[k]={name:seeds[k].name,fdcId:seeds[k].fdcId,per100:null,lastGrams:0,t:0}; });
})();
function saveUsdaCache(){ try{ store.set("ft_usda_cache", JSON.stringify(USDA_CACHE)); }catch(e){} }
function usdaCacheKey(fdcId,name){ return fdcId ? "fdc_"+fdcId : "nm_"+String(name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").slice(0,40); }
function renderUsdaMyFoods(){
  var wrap=document.getElementById("usda-myfoods-wrap"), el=document.getElementById("usda-myfoods");
  if(!wrap||!el) return;
  var keys=Object.keys(USDA_CACHE).sort(function(a,b){ return (USDA_CACHE[b].t||0)-(USDA_CACHE[a].t||0); });
  if(!keys.length){ wrap.style.display="none"; return; }
  wrap.style.display="block";
  el.innerHTML=keys.map(function(k){
    var c=USDA_CACHE[k];
    var short=c.name.length>26?c.name.slice(0,24)+"…":c.name;
    return '<button class="bs" style="font-size:10px;text-transform:none;letter-spacing:0;padding:7px 11px;border-radius:16px" onclick="usdaOpenCached(\''+k+'\')">'+_uEsc(short)+(c.lastGrams?' <span style="color:#5eead4">'+_uR1(c.lastGrams)+'g</span>':'')+'</button>';
  }).join("");
}
function usdaOpenCached(key){
  var c=USDA_CACHE[key]; if(!c) return;
  _usdaSel={ name:c.name, per100:c.per100, fdcId:c.fdcId, dataType:"cached", cacheKey:key };
  document.getElementById("usda-m-name").textContent=c.name;
  document.getElementById("usda-m-sub").textContent=(c.fdcId?"FDC "+c.fdcId+" · ":"")+"cached · per-100g baseline";
  document.getElementById("usda-m-remove").style.display="block";
  document.getElementById("usda-grams").value=c.lastGrams||"";
  usdaPreview();
  document.getElementById("usda-modal").style.display="flex";
  if(!c.per100){ // seed entry — fetch details once, cache forever
    document.getElementById("usda-m-sub").textContent="Fetching nutrients from USDA…";
    fetch(USDA_DETAILS_URL+c.fdcId+"?api_key="+encodeURIComponent(USDA_KEY))
      .then(function(r){ if(!r.ok) throw new Error("USDA "+r.status); return r.json(); })
      .then(function(raw){
        c.per100=usdaExtract(raw.foodNutrients); _usdaSel.per100=c.per100; saveUsdaCache();
        document.getElementById("usda-m-sub").textContent="FDC "+c.fdcId+" · cached · per-100g baseline";
        usdaPreview();
      }).catch(function(e){ document.getElementById("usda-m-sub").textContent="⚠ "+e.message+" — check API key in Settings"; });
  }
  var inp=document.getElementById("usda-grams");
  setTimeout(function(){ inp.focus(); if(inp.value) inp.select(); },150);
}
function usdaRemoveCached(){
  if(_usdaSel&&_usdaSel.cacheKey){ delete USDA_CACHE[_usdaSel.cacheKey]; saveUsdaCache(); renderUsdaMyFoods(); }
  usdaClose();
}

// Same nutrient mapping as the Python target_nutrients; handles both the
// Search schema (nutrientName/value) and Details schema (nutrient.name/amount)
function usdaExtract(foodNutrients){
  var p={cal:0,protein:0,fat:0,carbs:0,fiber:0}, gotKcal=false, atwater=0;
  var map={"Protein":"protein","Total lipid (fat)":"fat","Carbohydrate, by difference":"carbs","Fiber, total dietary":"fiber"};
  (foodNutrients||[]).forEach(function(item){
    var ni=item.nutrient||{};
    var name=ni.name||item.nutrientName||"";
    var unit=(ni.unitName||item.unitName||"").toUpperCase();
    var amt=(item.amount!=null)?item.amount:(item.value!=null?item.value:0);
    if(name==="Energy"){ if(unit==="KCAL"){p.cal=amt;gotKcal=true;} }
    else if(name==="Energy (Atwater General Factors)"&&unit==="KCAL"){ atwater=amt; }
    else if(map[name]){ p[map[name]]=amt; }
  });
  if(!gotKcal&&atwater) p.cal=atwater;
  return p;
}
function usdaScale(per100,grams){
  var s=grams/100.0, r=function(n){return Math.round(n*10)/10;};
  return {cal:r(per100.cal*s),protein:r(per100.protein*s),fat:r(per100.fat*s),carbs:r(per100.carbs*s),fiber:r(per100.fiber*s)};
}
function _uEsc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function _uR1(n){ return (Math.round((+n||0)*10)/10).toString().replace(/\.0$/,""); }

function usdaSearch(){
  var q=document.getElementById("usda-q").value.trim(); if(!q) return;
  var st=document.getElementById("usda-status"), res=document.getElementById("usda-results");
  st.textContent="Searching USDA…"; res.innerHTML="";
  var url=USDA_SEARCH_URL+"?api_key="+encodeURIComponent(USDA_KEY)+"&query="+encodeURIComponent(q)+"&pageSize=12";
  fetch(url).then(function(r){ if(!r.ok) throw new Error("USDA "+r.status); return r.json(); }).then(function(data){
    var foods=data.foods||[];
    // Foundation / SR Legacy first — canonical per-100g profiles; Branded after
    var rank={"Foundation":0,"SR Legacy":1,"Survey (FNDDS)":2,"Branded":3};
    foods.sort(function(a,b){ return (rank[a.dataType]!=null?rank[a.dataType]:9)-(rank[b.dataType]!=null?rank[b.dataType]:9); });
    _usdaResults=foods;
    st.textContent=foods.length?foods.length+" results — tap to log":"No results. Try a simpler term.";
    res.innerHTML=foods.map(function(f,i){
      var p=usdaExtract(f.foodNutrients);
      return '<div class="row" onclick="usdaPick('+i+')" style="cursor:pointer">'
        +'<div style="flex:1;min-width:0"><div class="row-name">'+_uEsc(f.description)+(f.brandOwner?' <span style="color:#888;font-weight:400">· '+_uEsc(f.brandOwner)+'</span>':'')+'</div>'
        +'<div class="row-sub">per 100g · '+Math.round(p.cal)+' kcal · P '+_uR1(p.protein)+' · C '+_uR1(p.carbs)+' · F '+_uR1(p.fat)+'</div></div>'
        +'<span class="tag" style="background:'+(f.dataType==="Branded"?"#a78bfa22;color:#a78bfa":"#5eead422;color:#5eead4")+'">'+_uEsc(f.dataType||"")+'</span></div>';
    }).join("");
  }).catch(function(e){
    st.textContent="⚠ "+e.message+(USDA_KEY==="DEMO_KEY"?" — DEMO_KEY allows 30 req/hr; add a free key in Settings.":" — check your API key in Settings.");
  });
}
function usdaPick(i){
  var f=_usdaResults[i]; if(!f) return;
  var key=usdaCacheKey(f.fdcId,f.description);
  _usdaSel={ name:f.description, per100:usdaExtract(f.foodNutrients), fdcId:f.fdcId, dataType:f.dataType, cacheKey:key };
  document.getElementById("usda-m-name").textContent=f.description+(f.brandOwner?" · "+f.brandOwner:"");
  document.getElementById("usda-m-sub").textContent="FDC "+f.fdcId+" · "+(f.dataType||"")+" · per-100g baseline";
  document.getElementById("usda-m-remove").style.display="none";
  // Portion memory: prefill last-used grams if we've logged this food before
  var prev=USDA_CACHE[key];
  document.getElementById("usda-grams").value=(prev&&prev.lastGrams)?prev.lastGrams:"";
  usdaPreview();
  document.getElementById("usda-modal").style.display="flex";
  var inp=document.getElementById("usda-grams");
  setTimeout(function(){ inp.focus(); if(inp.value) inp.select(); },150);
}
function usdaSetG(g){ document.getElementById("usda-grams").value=g; usdaPreview(); }
function usdaPreview(){
  var g=parseFloat(document.getElementById("usda-grams").value)||0;
  var p=_usdaSel?usdaScale(_usdaSel.per100,g):{cal:0,protein:0,fat:0,carbs:0,fiber:0};
  document.getElementById("usda-pv-cal").textContent=Math.round(p.cal)+" kcal";
  document.getElementById("usda-pv-macros").textContent="P "+_uR1(p.protein)+"g · C "+_uR1(p.carbs)+"g · F "+_uR1(p.fat)+"g";
  document.getElementById("usda-pv-fiber").textContent=p.fiber?("Fiber "+_uR1(p.fiber)+"g · Net carbs "+_uR1(Math.max(0,p.carbs-p.fiber))+"g"):"";
}
function usdaClose(){ document.getElementById("usda-modal").style.display="none"; _usdaSel=null; }
function usdaLog(){
  var g=parseFloat(document.getElementById("usda-grams").value)||0;
  if(!_usdaSel||!g){ toast("Enter a weight in grams"); return; }
  if(!_usdaSel.per100){ toast("Still fetching nutrients — one sec"); return; }
  var p=usdaScale(_usdaSel.per100,g);
  // Strip commas/pipes from USDA names — the sheet's Foods column is
  // comma-joined and pipe-delimited, so they'd corrupt the round-trip.
  var clean=_usdaSel.name.replace(/\s*,\s*/g," ").replace(/\|/g," ").trim();
  addFoodObj({ name:clean+" ("+_uR1(g)+"g)", cal:p.cal, protein:p.protein, carbs:p.carbs, fat:p.fat, fiber:p.fiber, grams:g, fdcId:_usdaSel.fdcId });
  // Cache for My USDA Foods + remember this portion
  var key=_usdaSel.cacheKey||usdaCacheKey(_usdaSel.fdcId,clean);
  USDA_CACHE[key]={ name:clean, fdcId:_usdaSel.fdcId||"", per100:_usdaSel.per100, lastGrams:g, t:Date.now() };
  saveUsdaCache(); renderUsdaMyFoods();
  usdaClose();
  toast("✓ Logged "+_uR1(g)+"g — "+Math.round(p.cal)+" kcal");
}

// ── BARCODE SCANNER — native BarcodeDetector (Android Chrome), ZXing fallback ──
var _scanStream=null, _scanTimer=null, _zxReader=null;
function usdaScanOpen(){
  var ov=document.getElementById("usda-scan-overlay");
  ov.style.display="flex";
  document.getElementById("usda-scan-status").textContent="Starting camera…";
  navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:false})
    .then(function(stream){
      _scanStream=stream;
      var v=document.getElementById("usda-scan-video");
      v.srcObject=stream; v.play();
      if("BarcodeDetector" in window){ _scanNative(v); }
      else { _scanZxing(v); }
    })
    .catch(function(){
      document.getElementById("usda-scan-status").textContent="Camera unavailable — type the UPC below instead.";
    });
}
function _scanNative(video){
  document.getElementById("usda-scan-status").textContent="Point at the barcode…";
  var det=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e"]});
  _scanTimer=setInterval(function(){
    if(video.readyState<2) return;
    det.detect(video).then(function(codes){
      if(codes&&codes.length){ usdaScanHit(codes[0].rawValue); }
    }).catch(function(){});
  },350);
}
function _scanZxing(video){
  document.getElementById("usda-scan-status").textContent="Loading scanner…";
  function start(){
    try{
      _zxReader=new ZXing.BrowserMultiFormatReader();
      document.getElementById("usda-scan-status").textContent="Point at the barcode…";
      _zxReader.decodeFromVideoElement(video,function(result){ if(result) usdaScanHit(result.getText()); });
    }catch(e){ document.getElementById("usda-scan-status").textContent="Scanner failed — type the UPC below instead."; }
  }
  if(window.ZXing){ start(); return; }
  var s=document.createElement("script");
  s.src="https://cdnjs.cloudflare.com/ajax/libs/zxing-library/0.21.3/umd/index.min.js";
  s.onload=start;
  s.onerror=function(){ document.getElementById("usda-scan-status").textContent="Scanner library unavailable — type the UPC below instead."; };
  document.head.appendChild(s);
}
function usdaScanClose(){
  clearInterval(_scanTimer); _scanTimer=null;
  if(_zxReader){ try{_zxReader.reset();}catch(e){} _zxReader=null; }
  if(_scanStream){ _scanStream.getTracks().forEach(function(t){t.stop();}); _scanStream=null; }
  document.getElementById("usda-scan-overlay").style.display="none";
}
function usdaScanManual(){
  var code=document.getElementById("usda-scan-manual").value.trim();
  if(code) usdaScanHit(code);
}
function usdaScanHit(code){
  code=String(code).replace(/\D/g,""); if(!code) return;
  usdaScanClose();
  if(navigator.vibrate) navigator.vibrate(60);
  var st=document.getElementById("usda-status");
  st.textContent="Looking up UPC "+code+"…";
  document.getElementById("usda-q").value=code;
  var url=USDA_SEARCH_URL+"?api_key="+encodeURIComponent(USDA_KEY)+"&query="+encodeURIComponent(code)+"&dataType=Branded&pageSize=6";
  fetch(url).then(function(r){ if(!r.ok) throw new Error("USDA "+r.status); return r.json(); }).then(function(data){
    var foods=data.foods||[];
    // Exact gtinUpc match first (UPC-A is the EAN-13 minus its leading zero)
    var exact=foods.filter(function(f){ var g=String(f.gtinUpc||"").replace(/\D/g,""); return g===code||g==="0"+code||code==="0"+g; });
    _usdaResults=exact.length?exact:foods;
    if(!_usdaResults.length){ st.textContent="UPC not in USDA's branded database — try a name search."; return; }
    st.textContent=_usdaResults.length+" match"+(_usdaResults.length>1?"es":"");
    if(_usdaResults.length===1){ document.getElementById("usda-results").innerHTML=""; usdaPick(0); return; }
    document.getElementById("usda-results").innerHTML=_usdaResults.map(function(f,i){
      var p=usdaExtract(f.foodNutrients);
      return '<div class="row" onclick="usdaPick('+i+')" style="cursor:pointer">'
        +'<div style="flex:1;min-width:0"><div class="row-name">'+_uEsc(f.description)+(f.brandOwner?' <span style="color:#888;font-weight:400">· '+_uEsc(f.brandOwner)+'</span>':'')+'</div>'
        +'<div class="row-sub">per 100g · '+Math.round(p.cal)+' kcal · P '+_uR1(p.protein)+' · C '+_uR1(p.carbs)+' · F '+_uR1(p.fat)+'</div></div>'
        +'<span class="tag" style="background:#a78bfa22;color:#a78bfa">Branded</span></div>';
    }).join("");
  }).catch(function(e){ st.textContent="⚠ "+e.message; });
}

renderUsdaMyFoods();

// ── WEDNESDAY YOGA ↔ TRACKER BRIDGE ─────────────────────────────────────
// One tap in the Guide marks the yoga flow complete in eg_done (streak,
// week view, auto-push to Workout Log) AND logs a 130 cal exercise entry
// to TODAY's tracker day (Calories Burned, dashboards, Exercises column).
var TG_YOGA_ID="wednesday-yoga-flow", TG_YOGA_CAL=130, TG_YOGA_NAME="Wednesday Yoga Flow (20-25 min)";
function tgYogaRefresh(){
  var b=document.getElementById("yoga-complete-btn"); if(!b) return;
  var on=(typeof egIsDone==="function")&&egIsDone(TG_YOGA_ID);
  b.textContent=on?"\u2713 Yoga Complete \u2014 tap to undo":"Mark Wednesday Yoga Complete";
  b.style.background=on?"var(--accent)":"transparent";
  b.style.color=on?"#0f0f0f":"var(--accent)";
}
function tgYogaToggle(){
  var on=!((typeof egIsDone==="function")&&egIsDone(TG_YOGA_ID));
  if(typeof egSetDone==="function") egSetDone(TG_YOGA_ID,on);
  var tk=todayKey(), day=getDay(tk), exId="tg-yoga-"+tk;
  if(on){
    if(!day.exercises.some(function(e){return e.id===exId;})){
      day.exercises.push({name:TG_YOGA_NAME,calories:TG_YOGA_CAL,type:"yoga",id:exId});
    }
  } else {
    day.exercises=day.exercises.filter(function(e){return e.id!==exId;});
  }
  saveDay(day,tk); renderAll(); tgYogaRefresh();
  try { ygRenderStatsBar(); } catch(e) {}
  toast(on?("\u2713 Yoga logged \u2014 "+TG_YOGA_CAL+" cal"):"Yoga unmarked");
}


/* ===== DAILY SESSION MODULE (injected) ===== */
var DS_FIG='#9a9d8c', DS_BAND='#4ec98a', DS_ARR='#f5b14c';
function dsS(dur,attr,vals){return '<animate attributeName="'+attr+'" values="'+vals+'" keyTimes="0;0.5;1" dur="'+dur+'s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>';}
var DS_DEMOS={
  backwalk:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="126" x2="170" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;-10,0;0,0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="62" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="70" x2="84" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(2.2,'x2','84;116;84')+'</line>'+
    '<line x1="100" y1="96" x2="80" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','80;120;80')+'</line>'+
    '<line x1="100" y1="96" x2="120" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','120;80;120')+'</line>'+
    '</g></svg>';},
  tibraise:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<rect x="60" y="118" width="80" height="10" rx="2" fill="#5F5E5A"/>'+
    '<line x1="70" y1="118" x2="70" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="130" y1="118" x2="130" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="49" x2="100" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="70,90 70,72 90,66" fill="none" stroke="#4ec98a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.2,'points','70,90 70,72 90,66; 70,90 70,72 60,80; 70,90 70,72 90,66')+'</polyline>'+
    '<polyline points="130,90 130,72 110,66" fill="none" stroke="#4ec98a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.2,'points','130,90 130,72 110,66; 130,90 130,72 140,80; 130,90 130,72 110,66')+'</polyline>'+
    '</svg>';},
  kneeraise:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="112" x2="170" y2="112" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="60" cy="102" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="106" x2="110" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="106" x2="150" y2="106" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="110" y1="106" x2="120" y2="70" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'x2','120;96;120')+dsS(2.4,'y2','70;80;70')+'</line>'+
    '<line x1="120" y1="70" x2="120" y2="100" stroke="#4ec98a" stroke-width="4" stroke-linecap="round">'+dsS(2.4,'x1','120;96;120')+dsS(2.4,'y1','70;80;70')+dsS(2.4,'x2','120;100;120')+dsS(2.4,'y2','100;106;100')+'</line>'+
    '</svg>';},
  dip:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="70" y1="40" x2="70" y2="120" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="130" y1="40" x2="130" y2="120" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="60" y1="50" x2="80" y2="50" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="120" y1="50" x2="140" y2="50" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,20;0,0" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="55" x2="100" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="70" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="130" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="86" x2="90" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="86" x2="110" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g></svg>';},
  extrot:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="122" x2="160" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="70" cy="60" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="70" y1="70" x2="70" y2="110" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="110" x2="60" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="110" x2="82" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="80" x2="98" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="98" y1="90" x2="110" y2="72" stroke="#4ec98a" stroke-width="4" stroke-linecap="round">'+dsS(2.2,'x2','110;96;110')+dsS(2.2,'y2','72;104;72')+'</line>'+
    '</svg>';},
  trap3:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="126" x2="160" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="90" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="18 90 55;18 90 55" dur="0.1s"/></g>'+
    '<line x1="90" y1="55" x2="105" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="104" x2="94" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="104" x2="118" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="98" y1="70" x2="130" y2="98" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'x2','130;100;130')+dsS(2.4,'y2','98;80;98')+'</line>'+
    '</svg>';},
  nordic:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="126" x2="90" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="55" cy="118" r="8" fill="none" stroke="#5F5E5A" stroke-width="4"/>'+
    '<line x1="90" y1="126" x2="90" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 90 96;-46 90 96;0 90 96" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="96" x2="90" y2="56" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="90" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="66" x2="120" y2="70" stroke="#4ec98a" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  pulldown:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="172" y1="16" x2="172" y2="122" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="156" y1="30" x2="172" y2="30" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="156" cy="30" r="3" fill="#5F5E5A"/>'+
    '<line x1="30" y1="122" x2="172" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="90" y1="96" x2="90" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="120" x2="70" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="96" x2="86" y2="56" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="84" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<polyline points="86,58 108,50 132,40" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.6,'points','86,58 108,50 132,40; 86,58 104,84 94,64; 86,58 108,50 132,40')+'</polyline>'+
    '<line x1="156" y1="30" x2="132" y2="40" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.6,'x2','132;94;132')+dsS(2.6,'y2','40;64;40')+'</line>'+
    '</svg>';},
  row:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="126" x2="150" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="96" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="122" y2="62" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="128" cy="54" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<polyline points="122,62 124,86 128,104" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','122,62 124,86 128,104; 122,62 140,72 120,80; 122,62 124,86 128,104')+'</polyline>'+
    '<line x1="128" y1="124" x2="128" y2="104" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.4,'y2','104;80;104')+'</line>'+
    '</svg>';},
  press:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="100" y1="74" x2="100" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="64" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="108" x2="88" y2="130" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="108" x2="112" y2="130" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="86,76 80,58 84,40" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','86,76 80,90 90,80; 86,76 80,58 84,30; 86,76 80,90 90,80')+'</polyline>'+
    '<polyline points="114,76 120,58 116,40" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','114,76 120,90 110,80; 114,76 120,58 116,30; 114,76 120,90 110,80')+'</polyline>'+
    '<rect x="78" y="34" width="12" height="8" rx="2" fill="#4ec98a"><animateTransform attributeName="transform" type="translate" values="0,46;0,0;0,46" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></rect>'+
    '<rect x="110" y="34" width="12" height="8" rx="2" fill="#4ec98a"><animateTransform attributeName="transform" type="translate" values="0,46;0,0;0,46" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></rect>'+
    '</svg>';},
  pushup:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="126" x2="170" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<polyline points="156,118 110,110 74,102" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','156,118 110,110 74,102; 156,120 110,116 74,114; 156,118 110,110 74,102')+'</polyline>'+
    '<circle cx="62" cy="100" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"><animate attributeName="cy" values="100;112;100" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>'+
    '<line x1="74" y1="102" x2="70" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'y1','102;114;102')+'</line>'+
    '<line x1="120" y1="124" x2="126" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</svg>';},
  squat:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,26;0,0" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="52" x2="100" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="78" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="122" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '<polyline points="100,86 84,104 86,130" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','100,86 84,104 86,130; 100,112 74,116 86,130; 100,86 84,104 86,130')+'</polyline>'+
    '<polyline points="100,86 116,104 114,130" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','100,86 116,104 114,130; 100,112 126,116 114,130; 100,86 116,104 114,130')+'</polyline>'+
    '<line x1="60" y1="132" x2="140" y2="132" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  goblet:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+'<g><animateTransform attributeName="transform" type="translate" values="0,0;0,26;0,0" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+'<circle cx="100" cy="36" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+'<line x1="100" y1="46" x2="100" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+'<rect x="82" y="52" width="36" height="18" rx="4" fill="#5eead433" stroke="#5eead4" stroke-width="3"/>'+'<line x1="82" y1="61" x2="70" y2="61" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="118" y1="61" x2="130" y2="61" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'</g>'+'<polyline points="100,80 84,100 86,128" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','100,80 84,100 86,128; 100,108 72,114 86,128; 100,80 84,100 86,128')+'</polyline>'+'<polyline points="100,80 116,100 114,128" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','100,80 116,100 114,128; 100,108 128,114 114,128; 100,80 116,100 114,128')+'</polyline>'+'<line x1="58" y1="130" x2="142" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+'</svg>';},
  hinge:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="100" y1="92" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g transform="rotate(0 100 92)"><animateTransform attributeName="transform" type="rotate" values="0 100 92; -62 100 92; 0 100 92" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="92" x2="100" y2="40" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="30" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="54" x2="100" y2="86" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/></g>'+
    '<line x1="64" y1="130" x2="136" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  ballcurl:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="122" x2="160" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="50" cy="110" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="58" y1="113" x2="92" y2="113" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="113" x2="100" y2="84" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="100,84 134,98 162,110" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.6,'points','100,84 134,98 162,110; 100,84 120,92 116,106; 100,84 134,98 162,110')+'</polyline>'+
    '<circle cx="162" cy="110" r="10" fill="none" stroke="#c9a44a" stroke-width="3">'+dsS(2.6,'cx','162;116;162')+dsS(2.6,'cy','110;106;110')+'</circle>'+
    '</svg>';},
  bridge:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="160" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="56" cy="106" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<polyline points="64,108 96,108 128,108" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','64,108 100,108 128,108; 64,108 100,70 128,108; 64,108 100,108 128,108')+'</polyline>'+
    '<line x1="128" y1="108" x2="128" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'y1','108;72;108')+'</line>'+
    '</svg>';},
  fly:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="100" y1="66" x2="100" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="56" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="104" x2="88" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="112" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="88,72 64,76 44,72" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','88,72 64,76 44,72; 88,72 80,74 72,72; 88,72 64,76 44,72')+'</polyline>'+
    '<polyline points="112,72 136,76 156,72" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','112,72 136,76 156,72; 112,72 120,74 128,72; 112,72 136,76 156,72')+'</polyline>'+
    '</svg>';},
  catcow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<path d="M55 70 Q100 60 145 70" fill="none" stroke="#9a9d8c" stroke-width="6" stroke-linecap="round">'+
    '<animate attributeName="d" values="M55 70 Q100 60 145 70; M55 64 Q100 96 145 64; M55 70 Q100 60 145 70" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="48" cy="64" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="58" y1="72" x2="58" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="142" y1="72" x2="142" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="40" y1="118" x2="160" y2="118" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  kneehug:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="122" x2="170" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="52" cy="114" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="60" y1="116" x2="98" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="-3 98 116;3 98 116;-3 98 116" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<line x1="98" y1="116" x2="82" y2="82" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="82" y1="82" x2="98" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="66" y1="116" x2="86" y2="88" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  nine90:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="126" x2="162" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;5,0;0,0" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="124" x2="60" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="124" x2="88" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="120" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="98" x2="120" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="88" y2="54" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="88" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="88" y1="64" x2="116" y2="96" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  ninetytransition:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<g><animateTransform attributeName="transform" type="translate" values="-12,0;12,0;-12,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<path d="M60 118 Q86 124 112 110" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M112 110 Q128 108 140 122" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M60 118 Q48 112 38 124" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="108" x2="100" y2="66" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="56" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="76" x2="78" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="76" x2="122" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  child:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="162" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<line x1="124" y1="104" x2="120" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="116" x2="148" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M124 104 Q104 100 80 113" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="98" y1="110" x2="58" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="72" cy="112" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/></g>'+
    '</svg>';},
  dragon:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="126" x2="162" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,4;0,0" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="94" y1="104" x2="70" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="124" x2="52" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="94" y1="104" x2="122" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="108" x2="122" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="94" y1="104" x2="90" y2="62" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="89" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="91" y1="74" x2="118" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  caterpillar:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="162" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<line x1="72" y1="114" x2="142" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M72 112 Q92 102 112 110" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="108" x2="134" y2="114" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="112" cy="110" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/></g>'+
    '</svg>';},
  twist:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="122" x2="170" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"/>'+
    '<circle cx="60" cy="110" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="112" x2="112" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="112" x2="150" y2="114" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="110" x2="100" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="120" x2="118" y2="121" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="76" y1="110" x2="50" y2="106" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  legsup:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="150" y1="28" x2="150" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="34" y1="120" x2="150" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.8s" repeatCount="indefinite"/>'+
    '<circle cx="56" cy="112" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="64" y1="114" x2="120" y2="114" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="114" x2="144" y2="40" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="114" x2="66" y2="120" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  swan:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="162" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite"/>'+
    '<line x1="102" y1="104" x2="52" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="102" y1="104" x2="124" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="124" y1="112" x2="98" y2="117" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M102 104 Q120 104 134 106" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="140" cy="106" r="7" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="126" y1="106" x2="150" y2="113" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  hollow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="124" x2="170" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<path d="M58 100 Q100 120 146 96" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="54" cy="98" r="7" fill="none" stroke="#9a9d8c" stroke-width="4"/></g>'+
    '</svg>';},
  plank:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="124" x2="170" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.6;1;0.6" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<line x1="78" y1="124" x2="100" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="124" x2="82" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="82" y1="100" x2="152" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="72" cy="96" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/></g>'+
    '</svg>';},
  curl:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="126" x2="140" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="47" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="56" x2="86" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="56" x2="114" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="86" x2="80" y2="110" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','80;90;80')+dsS(2.2,'y2','110;64;110')+'</line>'+
    '<line x1="114" y1="86" x2="120" y2="110" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','120;110;120')+dsS(2.2,'y2','110;64;110')+'</line>'+
    '</svg>';},
  triceps:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="84" y1="14" x2="116" y2="14" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="60" y1="126" x2="140" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="51" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="60" x2="90" y2="88" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="108" y1="60" x2="110" y2="88" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="88" x2="94" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','94;88;94')+dsS(2.2,'y2','72;114;72')+'</line>'+
    '<line x1="110" y1="88" x2="106" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','106;112;106')+dsS(2.2,'y2','72;114;72')+'</line>'+
    '<line x1="100" y1="18" x2="94" y2="72" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.2,'x2','94;88;94')+dsS(2.2,'y2','72;114;72')+'</line>'+
    '</svg>';},
  lateralraise:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="126" x2="140" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="51" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="58" x2="78" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'x2','78;52;78')+dsS(2.4,'y2','92;58;92')+'</line>'+
    '<line x1="110" y1="58" x2="122" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'x2','122;148;122')+dsS(2.4,'y2','92;58;92')+'</line>'+
    '</svg>';},
  calf:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="126" x2="130" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="130" y1="126" x2="130" y2="138" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="130" y1="138" x2="170" y2="138" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-12;0,0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="53" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="64" x2="86" y2="92" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="108" y1="64" x2="114" y2="92" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="118" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="120" x2="130" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="92" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/></g>'+
    '</svg>';},
  legraise:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="120" x2="170" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="52" cy="108" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="60" y1="112" x2="104" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="112" x2="150" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.6,'x2','150;108;150')+dsS(2.6,'y2','112;62;112')+'</line>'+
    '</svg>';},
  pallof:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="22" y1="34" x2="22" y2="122" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="22" y1="72" x2="36" y2="72" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="60" y1="124" x2="150" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="53" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="90" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="110" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="68" x2="120" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'x2','120;142;120')+'</line>'+
    '<line x1="36" y1="72" x2="120" y2="72" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.4,'x2','120;142;120')+'</line>'+
    '</svg>';},
  slam:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="124" x2="140" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="48" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="57" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="60" x2="96" y2="30" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.8,'x2','96;94;96')+dsS(1.8,'y2','30;108;30')+'</line>'+
    '<line x1="108" y1="60" x2="104" y2="30" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.8,'x2','104;106;104')+dsS(1.8,'y2','30;108;30')+'</line>'+
    '<circle cx="100" cy="22" r="7" fill="#4ec98a">'+dsS(1.8,'cy','22;112;22')+'</circle>'+
    '</svg>';},
  latwalk:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="124" x2="160" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="48" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="57" x2="100" y2="88" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="62" x2="80" y2="84" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="108" y1="62" x2="120" y2="84" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="88" x2="84" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="84" y1="104" x2="84" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="88" x2="118" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x2','118;134;118')+'</line>'+
    '<line x1="118" y1="104" x2="118" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.2,'x1','118;134;118')+dsS(2.2,'x2','118;134;118')+'</line>'+
    '<line x1="84" y1="100" x2="118" y2="100" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.2,'x2','118;134;118')+'</line>'+
    '</svg>';},
  stepup:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="20" y1="124" x2="180" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<rect x="122" y="100" width="48" height="24" rx="2" fill="none" stroke="#5F5E5A" stroke-width="3"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;-6,-22;0,0" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="96" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="96" y1="53" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="134" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="90" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '</svg>';},
  russiantwist:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="124" x2="160" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="80" cy="74" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="84" y1="82" x2="100" y2="114" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="114" x2="132" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="132" y1="100" x2="124" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="98" x2="108" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(1.8,'x1','92;104;92')+dsS(1.8,'x2','108;120;108')+'</line>'+
    '<circle cx="100" cy="98" r="5" fill="#4ec98a">'+dsS(1.8,'cx','100;112;100')+'</circle>'+
    '</svg>';},
  woodchop:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="124" x2="140" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="55" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="100,64 84,52 70,44" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.2,'points','100,64 84,52 70,44; 100,64 116,84 130,98; 100,64 84,52 70,44')+'</polyline>'+
    '<circle cx="70" cy="42" r="5" fill="#4ec98a">'+dsS(2.2,'cx','70;130;70')+dsS(2.2,'cy','42;100;42')+'</circle>'+
    '</svg>';},
  deadbug:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="120" x2="172" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="56" cy="108" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="64" y1="112" x2="110" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="98" y1="112" x2="98" y2="82" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="78" y1="112" x2="60" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(2.6,'x2','60;42;60')+dsS(2.6,'y2','98;110;98')+'</line>'+
    '<polyline points="110,112 118,86 110,82" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<line x1="110" y1="112" x2="138" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.6,'x2','138;158;138')+dsS(2.6,'y2','98;112;98')+'</line>'+
    '</svg>';},
  bicycle:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="122" x2="172" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="56" cy="110" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="64" y1="112" x2="104" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="110" x2="58" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<polyline points="104,112 112,92 96,86" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2,'points','104,112 112,92 96,86; 104,112 130,98 152,96; 104,112 112,92 96,86')+'</polyline>'+
    '<polyline points="104,112 130,98 152,96" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2,'points','104,112 130,98 152,96; 104,112 112,92 96,86; 104,112 130,98 152,96')+'</polyline>'+
    '</svg>';},
  splitsquat:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="118" y1="118" x2="160" y2="100" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,20;0,0" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="82" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="82" y1="50" x2="82" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="82" y1="58" x2="64" y2="68" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="82" y1="58" x2="100" y2="68" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<polyline points="82,80 66,98 64,124" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','82,80 66,98 64,124; 82,104 56,108 64,124; 82,80 66,98 64,124')+'</polyline>'+
    '<polyline points="82,80 100,94 118,100" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','82,80 100,94 118,100; 82,80 110,88 118,100; 82,80 100,94 118,100')+'</polyline>'+
    '</g>'+
    '<line x1="44" y1="126" x2="100" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  facepull:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="52" x2="100" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="100,60 130,70 138,46" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.2,'points','100,60 130,70 138,46; 100,60 124,52 112,40; 100,60 130,70 138,46')+'</polyline>'+
    '<polyline points="100,60 70,70 62,46" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.2,'points','100,60 70,70 62,46; 100,60 76,52 88,40; 100,60 70,70 62,46')+'</polyline>'+
    '<line x1="86" y1="100" x2="80" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="114" y1="100" x2="120" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="64" y1="130" x2="136" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  wallpushup:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="150" y1="20" x2="150" y2="132" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g>'+dsS(2.2,'transform','translate(0,0); translate(14,0); translate(0,0)')+
    '<circle cx="60" cy="68" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="74" x2="128" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="80" x2="146" y2="56" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="128" y1="86" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="128" y1="86" x2="156" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="80" y1="130" x2="170" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  standcatcow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="140" y1="70" x2="172" y2="70" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="140" y1="70" x2="140" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<path d="M60 100 Q100 90 140 70" fill="none" stroke="#9a9d8c" stroke-width="6" stroke-linecap="round">'+
    '<animate attributeName="d" values="M60 100 Q100 90 140 70; M60 96 Q100 118 140 70; M60 100 Q100 90 140 70" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="52" cy="98" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="62" y1="104" x2="62" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="62" y1="104" x2="58" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="40" y1="130" x2="80" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  slrdl:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<g transform="rotate(0 70 92)"><animateTransform attributeName="transform" type="rotate" values="0 70 92; -55 70 92; 0 70 92" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="70" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="70" y1="50" x2="70" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="60" x2="40" y2="56" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="60" x2="100" y2="56" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="70" y1="92" x2="66" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g transform="rotate(0 70 92)"><animateTransform attributeName="transform" type="rotate" values="0 70 92; 32 70 92; 0 70 92" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="92" x2="116" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="44" y1="130" x2="92" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  stand:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="100" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4">'+dsS(2.4,'cy','40;36;40')+'</circle>'+
    '<line x1="100" y1="50" x2="100" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(2.4,'y1','50;46;50')+'</line>'+
    '<line x1="100" y1="62" x2="76" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(2.4,'y1','62;58;62')+'</line>'+
    '<line x1="100" y1="62" x2="124" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(2.4,'y1','62;58;62')+'</line>'+
    '<line x1="100" y1="104" x2="86" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="114" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="62" y1="134" x2="138" y2="134" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  standsqueeze:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="100" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="48" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="58" x2="80" y2="74" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="58" x2="120" y2="74" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<ellipse cx="100" cy="98" rx="20" ry="9" fill="none" stroke="#4ec98a" stroke-width="3">'+dsS(1.2,'rx','20;14;20')+'</ellipse>'+
    '<line x1="92" y1="106" x2="88" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="108" y1="106" x2="112" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="64" y1="134" x2="136" y2="134" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  figure4:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="128" y1="68" x2="160" y2="68" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="160" y1="68" x2="160" y2="100" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 90; -8 100 90; 0 100 90" keyTimes="0;0.5;1" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="48" x2="100" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="58" x2="128" y2="68" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="86" y2="78" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="110" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="112" x2="98" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="132" y2="98" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="132" y1="98" x2="110" y2="112" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="64" y1="134" x2="120" y2="134" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  hipcircle:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="100" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="48" x2="96" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="96" y1="92" x2="92" y2="130" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 96 92; 360 96 92" dur="2.6s" repeatCount="indefinite"/>'+
    '<line x1="96" y1="92" x2="96" y2="124" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="64" y1="132" x2="128" y2="132" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  chestopen:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="20" x2="60" y2="132" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 80; -28 100 80; 0 100 80" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="54" x2="100" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="62" x2="64" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="62" x2="124" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="90" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="112" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="70" y1="134" x2="140" y2="134" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  lowlunge:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="118" y1="100" x2="150" y2="100" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,8;0,0" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="90" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="52" x2="92" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="68" x2="118" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="92" y1="86" x2="74" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="74" y1="100" x2="68" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="86" x2="122" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="92" x2="148" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="50" y1="130" x2="160" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  shouldercar:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<circle cx="100" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="50" x2="100" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="86" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="114" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="58" x2="86" y2="74" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 58; 360 100 58" dur="2.8s" repeatCount="indefinite"/>'+
    '<line x1="100" y1="58" x2="100" y2="20" stroke="#4ec98a" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="70" y1="134" x2="130" y2="134" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '</svg>';},
  deadhang:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="14" x2="150" y2="14" stroke="#5F5E5A" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="14" x2="100" y2="32" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="114" y1="14" x2="100" y2="32" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g>'+dsS(2.4,'transform','translate(0,0); translate(0,6); translate(0,0)')+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="56" x2="100" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="92" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="108" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  scappull:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="14" x2="150" y2="14" stroke="#5F5E5A" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="14" x2="100" y2="36" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="114" y1="14" x2="100" y2="36" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g>'+dsS(1.6,'transform','translate(0,0); translate(0,10); translate(0,0)')+
    '<circle cx="100" cy="48" r="9" fill="none" stroke="#4ec98a" stroke-width="4"/>'+
    '<line x1="100" y1="58" x2="100" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="92" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="108" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  pullneg:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="14" x2="150" y2="14" stroke="#5F5E5A" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="14" x2="100" y2="22" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="114" y1="14" x2="100" y2="22" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g>'+dsS(3,'transform','translate(0,0); translate(0,68); translate(0,0)')+
    '<circle cx="100" cy="22" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="32" x2="100" y2="70" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="70" x2="92" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="70" x2="108" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  pullband:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="14" x2="150" y2="14" stroke="#5F5E5A" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="14" x2="100" y2="30" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="114" y1="14" x2="100" y2="30" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g>'+dsS(2,'transform','translate(0,0); translate(0,40); translate(0,0)')+
    '<circle cx="100" cy="30" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="40" x2="100" y2="78" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="78" x2="92" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="78" x2="108" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M92 106 Q88 124 100 134 Q112 124 108 106" fill="none" stroke="#4ec98a" stroke-width="3.5"/>'+
    '</g>'+
    '</svg>';},
  tgu:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="130" x2="170" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 70 120; -40 70 120; -70 70 120; -40 70 120; 0 70 120" keyTimes="0;0.3;0.5;0.7;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="120" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="112" y1="116" x2="70" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="116" x2="112" y2="76" stroke="#4ec98a" stroke-width="4" stroke-linecap="round"/>'+
    '<rect x="104" y="64" width="16" height="12" rx="2" fill="#4ec98a33" stroke="#4ec98a" stroke-width="2.5"/>'+
    '</g>'+
    '<line x1="70" y1="120" x2="46" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</svg>';},
  birddog:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="126" x2="170" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="66" cy="70" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="74" y1="74" x2="128" y2="78" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="86" y1="76" x2="84" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="78" x2="126" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="74" y1="74" x2="36" y2="66" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.6,'y2','66;60;66')+'</line>'+
    '<line x1="128" y1="78" x2="166" y2="70" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.6,'y2','70;64;70')+'</line>'+
    '</svg>';},
  sideplank:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="60" cy="72" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="78" x2="150" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="74" y1="82" x2="72" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="112" x2="166" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="76" y1="82" x2="82" y2="40" stroke="#4ec98a" stroke-width="4" stroke-linecap="round">'+dsS(2.6,'x2','82;62;82')+dsS(2.6,'y2','40;96;40')+'</line>'+
    '</svg>';},
  wristecc:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="96" x2="130" y2="96" stroke="#5F5E5A" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="96" x2="140" y2="70" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 140 70; -45 140 70; 0 140 70" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="140" y1="70" x2="156" y2="58" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/>'+
    '<rect x="150" y="42" width="12" height="20" rx="2" fill="#4ec98a33" stroke="#4ec98a" stroke-width="2.5"/>'+
    '</g>'+
    '</svg>';},
  hipthrust:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<rect x="30" y="76" width="34" height="50" rx="4" fill="none" stroke="#5F5E5A" stroke-width="3"/>'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="52" cy="62" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="14 64 78; 0 64 78; 14 64 78" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="64" y1="78" x2="116" y2="88" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="106" y1="86" x2="94" y2="66" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/>'+
    '</g>'+
    '<line x1="116" y1="88" x2="122" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="106" x2="124" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</svg>';},
  ballrow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="86" cy="104" r="22" fill="none" stroke="#5F5E5A" stroke-width="3"/>'+
    '<circle cx="60" cy="66" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="72" x2="118" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="90" x2="148" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="78" x2="76" y2="104" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2,'y2','104;84;104')+'</line>'+
    '</svg>';},
  seated:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="122" x2="160" y2="122" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4">'+dsS(4,'cy','52;49;52')+'</circle>'+
    '<line x1="100" y1="62" x2="100" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(4,'y1','62;59;62')+'</line>'+
    '<path d="M100 100 Q74 104 66 116 Q82 122 100 114 Q118 122 134 116 Q126 104 100 100" fill="none" stroke="#9a9d8c" stroke-width="4" stroke-linejoin="round"/>'+
    '<line x1="100" y1="72" x2="80" y2="96" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="72" x2="120" y2="96" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</svg>';},
  downdog:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="24" y1="128" x2="176" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="66" cy="92" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="60" y1="100" x2="46" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="72" y1="86" x2="112" y2="52" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="52" x2="150" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(3,'x2','150;146;150')+'</line>'+
    '</svg>';},
  fold:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="128" x2="150" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="104" y1="126" x2="104" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M104 72 Q100 46 76 52" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+
    '<animate attributeName="d" values="M104 72 Q100 46 76 52; M104 72 Q94 42 70 62; M104 72 Q100 46 76 52" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="72" cy="60" r="9" fill="none" stroke="#9a9d8c" stroke-width="4">'+dsS(3.4,'cy','60;70;60')+'</circle>'+
    '<line x1="82" y1="58" x2="80" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(3.4,'y2','112;120;112')+'</line>'+
    '</svg>';},
  cobra:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="24" y1="120" x2="176" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="90" y1="112" x2="170" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M90 112 Q70 100 62 76" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+
    '<animate attributeName="d" values="M90 112 Q70 100 62 76; M90 112 Q66 94 56 66; M90 112 Q70 100 62 76" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="58" cy="66" r="9" fill="none" stroke="#9a9d8c" stroke-width="4">'+dsS(3.4,'cy','66;58;66')+'</circle>'+
    '<line x1="70" y1="94" x2="66" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</svg>';},
  savasana:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="24" y1="112" x2="176" y2="112" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="52" cy="100" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="62" y1="102" x2="150" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="103" x2="92" y2="110" stroke="#9a9d8c" stroke-width="3.5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="86" r="5" fill="none" stroke="#4ec98a" stroke-width="2" opacity="0.7">'+dsS(5,'r','5;12;5')+dsS(5,'opacity','0.7;0.1;0.7')+'</circle>'+
    '</svg>';}
};

var DS_DEMOMAP={"mon-curl": "curl", "mon-tri": "triceps", "mon-bike": "bicycle", "mon-legraise": "legraise", "tue-lat": "latwalk", "tue-pallof": "pallof", "tue-step": "stepup", "wed-bike": "bicycle", "wed-legraise": "legraise", "wed-slam": "slam", "wed-rotslam": "woodchop", "thu-lateral": "lateralraise", "thu-hammer": "curl", "thu-tri": "triceps", "thu-bike": "bicycle", "thu-legraise": "legraise", "thu-russian": "russiantwist", "fri-calf": "calf", "fri-obliques": "woodchop", "fri-deadbug": "deadbug"};
var DS_DEMOCAP={"backwalk": "short steps backward, land on the ball of the foot", "tibraise": "heels elevated, weight back, lift the toes", "kneeraise": "lying flat, drive one knee to the chest, slow return", "dip": "comfortable depth only — nowhere near shoulder-below-elbow", "extrot": "elbow pinned to the side — only the forearm rotates", "trap3": "arm at a 30° angle from the body — raise along that line", "nordic": "ankles locked, lower slowly, catch yourself early", "pulldown": "band anchored high — kneel facing it, pull down", "row": "no anchor — hinge forward, pull the elbow back", "press": "press straight overhead", "fly": "arms wide, then squeeze together in front", "pallof": "band from your side — press straight out, resist the twist", "latwalk": "band above the knees — step out, stay in the half-squat", "triceps": "elbows pinned — only the forearms extend down", "curl": "upper arms still — only the forearms move", "nine90": "half-kneeling, both knees at 90 — shift the hips forward", "ninetytransition": "seated, both knees at 90 — rotate hip to hip, stay tall", "kneehug": "on your back — knees hugged to the chest", "dragon": "deep low lunge, back knee down", "goblet": "weight at chest as counterbalance — sink deep, elbows brush the knees", "squat": "sit back and down, drive through the whole foot", "splitsquat": "rear foot elevated behind you — front leg does the work", "facepull": "pull to your face, elbows high and wide — not a row", "wallpushup": "hands on the wall or desk edge — lean in, press away", "standcatcow": "hands on the desk, hinge forward — round and arch through the spine", "slrdl": "one leg plants, the other extends back as you hinge — hips stay square", "stand": "feet rooted, tailbone tucked, crown of the head lifts", "standsqueeze": "squeeze both glutes hard, hold, release", "figure4": "ankle crossed over the knee, hinge forward until the hip opens", "hipcircle": "biggest slow circle the hip can make, ribs stay down", "chestopen": "forearm on the frame, rotate away — open across the chest", "lowlunge": "long stance, hands forward, sink the hips gently", "shouldercar": "biggest slow circle the shoulder can make, ribs down", "deadhang": "full grip, arms straight, shoulder blades pulled down and back", "scappull": "arms stay straight — only the shoulder blades pull down", "pullneg": "chin over the bar, then lower as slowly as you can", "pullband": "band looped under the foot, pull the chest to the bar", "tgu": "weight locked overhead the whole way — roll to elbow, to hand, to standing", "birddog": "opposite arm and leg extend — flat back, no rocking", "sideplank": "hips stacked and lifted — reach the top arm under, then back to vertical", "wristecc": "forearm supported — lower the weight slowly, use the other hand to lift it back", "hipthrust": "shoulders on the couch — hips sink low, then drive up to a flat tabletop", "ballrow": "chest on the ball — row the handle up, lower back stays out of it", "seated": "sit tall, eyes soft — breathe low into the belly", "downdog": "hips to the sky, long spine — pedal the heels", "fold": "hinge and hang heavy — soft knees, let the head go", "cobra": "press the chest forward and up — hips stay grounded", "savasana": "flat on your back, everything releases — just breathe"};
var DS_VARIANT_SETUPS={
  "mon-pushup::1": "On the floor or a bench, DB in each hand at chest level, elbows bent; press up until arms are straight, lower with control until elbows hit about 90 degrees.",
  "mon-pushup::2": "Anchor the tube high on a door, face away, handles at chest height; press both handles forward until arms are straight, squeeze, return slow.",
  "mon-row::1": "Stand on the tube without the handles, hinge forward about 45 degrees, flat back; pull both ends wide to your ribs, squeezing the mid-back at the top.",
  "thu-chest::1": "On the floor or a bench, DB in each hand at chest level, elbows bent; press up until arms are straight, lower with control until elbows hit about 90 degrees.",
  "thu-chest::2": "Lie on a bench or the floor, DB in each hand straight above your chest; lower out to the sides with a slight elbow bend, squeeze back together at the top.",
  "thu-lat::1": "Stand on the tube without the handles, hinge forward about 45 degrees, flat back; pull both ends wide to your ribs, squeezing the mid-back at the top.",
  "tue-squat::1": "Hold the 10 lb dumbbell vertically at chest height, both hands cupping the top end. Feet shoulder-width or slightly wider, toes slightly out.",
  "tue-rdl::1": "Stand on one foot, 10 lb dumbbell in the opposite hand (start with the 2 lb to learn the balance first). Slight bend in the standing knee.",
  "mon-ohp::1": "Sit on a chair or stand, feet shoulder-width. 10 lb dumbbells at shoulder height, palms forward, elbows at 90°. Seated version is more stable — start there.",
  "mon-curl::1": "Stand feet hip-width. 10 lb dumbbells at sides, palms facing forward.",
  "thu-hammer::1": "Stand tall. 10 lb dumbbells at sides, palms facing each other — neutral grip like holding hammers throughout."
};
var DS_SETUPS={"warmup-board": "Stand centered on the board, feet shoulder-width. Rock front-to-back 30s, side-to-side 30s, then slow circles 60s. Knees soft — don't lock them. Eyes forward, not down.", "warmup-rope-9": "Easy, light bounce — this is circulation and ankle prep, not conditioning work. Stop a few seconds early if the wrists or shoulders start to feel it.", "warmup-rope-7": "Easy, light bounce to get the heart rate up before the legs load. Land soft, stay relaxed in the shoulders.", "warmup-kbhalo": "Halo: hold the KB by the horns at chest height, circle slowly around your head, close to the skull, core braced, hips still. Around-the-World: hold by the handle, pass hand to hand in a wide circle around your waist, reverse direction halfway.", "mon-pushup": "Hands a bit wider than the shoulders. With a band, loop it across your upper back, ends under your palms.", "mon-ohp": "Stand on the tube, handles at the shoulders; press straight to the ceiling, ribs down, no low-back arch.", "mon-pullapart": "Hold the tube straight out at chest height, hands shoulder-width, arms straight; pull apart to your chest.", "mon-row": "Stand on the tube, hinge forward about 45 degrees with a flat back; row the handles to your waist, elbows back.", "mon-curl": "Stand on the tube, palms forward, elbows pinned to your sides; curl the handles up.", "mon-tri": "Anchor the tube high on a door, face it, elbows pinned; press the handles straight down.", "mon-hollow": "On your back, arms overhead, legs straight and a few inches up; press the low back flat into the floor.", "mon-bike": "On your back, hands behind your head; opposite elbow toward opposite knee, extending the other leg.", "mon-legraise": "On your back, hands under your glutes, legs straight; raise to vertical, lower slowly without arching.", "walkride": "After the session: a brisk 30-min walk, then an easy 20-min spin. Compression sleeve on the ride.", "tue-squat": "Loop the Clench mini loop band just above your knees. Feet shoulder-width, bodyweight squat. Sit back and down, actively pushing your knees out against the band throughout. Hands can hold a doorframe or be out in front for balance.", "tue-rdl": "Stand on the tube, soft knees; push the hips straight back, handles tracing down the thighs, flat back.", "tue-lat": "Loop the mini band above the knees; drop into a quarter-squat and step sideways without standing up.", "tue-bridge": "On your back, knees bent, tube across the hips held down; drive through the heels, squeeze at the top.", "tue-pallof": "Anchor the tube at chest height to one side; hold at your chest and press straight out, resisting the pull.", "tue-jump": "Quarter-squat and explode up; land soft on the toes, knees bending to absorb.", "tue-step": "Step one foot fully onto a sturdy chair or box; drive through that heel to stand tall, lower under control.", "wed-hollow": "On your back, arms overhead, legs lifted; exhale hard, ribs down, low back pressed flat.", "wed-bike": "On your back, hands behind your head; slow opposite elbow to knee, 2 seconds each side.", "wed-legraise": "On your back, legs straight; raise to vertical, then lower over a slow 3-count, low back flat.", "wed-tgu": "KB in one hand, arm locked overhead; rise from lying to standing one step at a time, eyes on the bell.", "wed-slam": "Reach the ball fully overhead, then drive it down through the floor with the whole body; catch the bounce.", "wed-rotslam": "Lift the ball to one shoulder, then slam diagonally to the opposite side; the hips lead the rotation.", "thu-chest": "Hold the tube at chest height (or anchor it and face away); open the arms wide, then squeeze together in front.", "thu-facepull": "Anchor the tube high (or hold it up at eye level); pull toward your temples, elbows high, thumbs back.", "thu-lat": "Anchor the tube high on a door, kneel 2–3 ft away facing it, arms overhead; pull the handles down to the shoulders, elbows back. No anchor? Do the wide row instead.", "thu-lateral": "Stand on the tube, arms at your sides; raise out to the sides to shoulder height, leading with the elbows.", "thu-hammer": "Stand on the tube, palms facing each other, thumbs up; curl up with the upper arms still.", "thu-tri": "Anchor the tube high, face it, elbows pinned; press the handles straight down to lockout.", "thu-hollow": "On your back, arms overhead, legs a few inches up; press the low back flat and hold the dish shape.", "thu-bike": "On your back, hands behind your head; opposite elbow to opposite knee, slow and deliberate.", "thu-legraise": "On your back, hands under the glutes; raise straight legs to vertical, lower slowly without the back lifting.", "thu-russian": "Sit, lean back about 45 degrees, feet up; hold the KB at your chest and rotate it side to side from the ribcage.", "fri-bulg": "Back foot up on a chair, tube under the front foot; drop straight down, front heel driving, torso tall.", "fri-sumo": "Wide stance, toes out, standing on the tube; sit straight down between the heels, knees pushing out.", "fri-nordic": "Lie on your back, heels on the ball, hips bridged up to a straight line; dig the heels in and curl the ball toward your glutes, then roll out slowly over 3 seconds. Keep the hips high the whole set.", "fri-calf": "Stand on one foot on a step edge, heel hanging off; drop the heel for a full stretch, rise as high onto the toes as you can, 2-sec squeeze, slow descent. Switch legs between sets.", "fri-obliques": "Anchor or hold the tube to one side; chop diagonally across the body, power from the hips.", "fri-deadbug": "On your back, arms up, knees stacked over the hips; lower opposite arm and leg, low back glued to the floor.", "fri-sqpress": "Hold dumbbells or the ball at the shoulders; squat, then drive up and press overhead in one motion.", "fri-plank": "Forearms down, body in a straight line head to heels; squeeze the glutes, brace, breathe.", "sat-ride": "Mostly easy aerobic riding with a few honest climbs; keep it conversational. Wear the compression sleeve.", "sat-walk": "Optional easy walk afterward — loose and unhurried, just keeping the joints moving.", "sun-walk": "Easy 30–45 min walk, nose breathing; this is circulation and recovery, not training.", "sun-flow": "Move slowly through whatever feels stiff — cat-cow, gentle twists, hip openers — breath-led, no intensity."};

/* ============================ ROUTINES (every day) ============================ */
var DS_MORNING={key:'morning',title:'Morning Activation',accent:'var(--amber)',meta:'10 min · every day',
  blurb:'Before anything else. Resets the spine, wakes the hips, clears the hip flexors that compressed your low back overnight.',
  moves:[
    {id:'m-kneehug',name:'Supine Knee Hugs',rx:'90s',cal:10,demo:'kneehug',log:'time',secs:90,target:'Lower Back · Sacrum',
      setup:'On your back, both knees to chest, arms around shins. Rock gently side to side, one rock per breath. Let the low back soften on each exhale.'},
    {id:'m-catcow',name:'Cat-Cow (breath-led)',rx:'10 slow reps',cal:10,demo:'catcow',log:'done',target:'Full Spine',
      setup:'Hands and knees. Inhale to arch (belly drops, chest lifts), exhale to round (back up, chin tucks). 4–6 sec per rep. Let it ripple through the whole spine.'},
    {id:'m-9090',name:'Half-Kneeling Hip Flexor Stretch',rx:'60s/side',cal:10,demo:'nine90',log:'time',secs:120,target:'Hip Flexors · Psoas',
      setup:'Half-kneel, back knee is the side stretched, front shin vertical, hips square. Shift hips forward; lightly squeeze the back glute to deepen it. 60 sec per side.'},
    {id:'m-child',name:"Child's Pose",rx:'90s',cal:10,demo:'child',log:'time',secs:90,target:'Lower Back · Hips · Lats',
      setup:'From kneeling, sit back toward heels, arms forward, forehead down. Wide knees for more hip space. Breathe into the back body. Do this before checking your phone.'}
  ]};
var DS_PRE={key:'pre',title:'Pre-Workout Activation',accent:'var(--accent)',meta:'5 min · before band days',
  blurb:'Before every band session. If the glutes are asleep, your low back does their job. Clear the hip flexors, fire the glutes. Non-negotiable while the SI joint is touchy.',
  moves:[
    {id:'p-9090',name:'Half-Kneeling Hip Flexor Stretch',rx:'60s/side',cal:12,demo:'nine90',log:'time',secs:120,target:'Hip Flexors · Psoas',
      setup:'Same as morning. Favor the tighter side. Squeeze the back glute while holding — fires the glute and releases the hip flexor at once. Clear this before any loading.'},
    {id:'p-bridge',name:'Glute Bridge Activation',rx:'2×10',cal:13,demo:'bridge',log:'done',target:'Glutes · SI Stabilizers',
      setup:'On your back, knees bent, feet flat. Drive through heels, squeeze glutes hard 2 sec at the top, lower slow. 2×10, no weight — activation, not a workout. Ball version (upper back on the stability ball) is recommended for the SI joint.'}
  ]};
var DS_YIN={key:'yin',title:'Evening Yin',accent:'var(--purple)',meta:'30 min · every evening',
  blurb:'Before bed. Yin holds run 3–5 min because fascia takes that long to release. Exhale twice as long as you inhale. This is your recovery engine.',
  moves:[
    {id:'y-kneehug',name:'Supine Knee Hugs',rx:'2 min',cal:7,demo:'kneehug',log:'time',secs:120,target:'Arrive',
      setup:'On your back, knees to chest, rock gently. Transition in from the day. No agenda yet.'},
    {id:'y-swan',name:'Sleeping Swan (Yin Pigeon)',rx:'5 min/side',cal:10,demo:'swan',log:'time',secs:300,target:'SI Joint · Outer Hip · Glute',
      setup:'From all fours, one knee forward behind the wrist, back leg straight. Fold forward passively, forehead down. Pillow under the front hip if needed. Gravity does it over 3–5 min. Deep dull ache in the outer glute is right; sharp knee pain means add support. Switch sides.'},
    {id:'y-dragon',name:'Dragon (Low Lunge)',rx:'5 min/side',cal:8,demo:'dragon',log:'time',secs:300,target:'Hip Flexors · Psoas',
      setup:'Front foot forward, back knee down on a blanket. Sink the hips low and hold passively, hands on the front knee or blocks. Let gravity pull the hips down with each exhale. First 90 sec can feel intense; the release comes after.'},
    {id:'y-cat',name:'Caterpillar',rx:'5 min',cal:8,demo:'caterpillar',log:'time',secs:300,target:'Back Body · Hamstrings',
      setup:'Seated, legs straight. Let the spine round forward — don\'t straighten it. Reach toward the feet, completely passive. The rounding is the release. Blanket under the knees if hamstrings are tight.'},
    {id:'y-twist',name:'Supine Twist',rx:'3 min/side',cal:7,demo:'twist',log:'time',secs:180,target:'SI Joint · Lower Back',
      setup:'On your back, bring one knee across the body toward the floor. Arms wide, palms up. Don\'t push the knee — let it rest. Gaze away from the bent knee. Switch sides.'},
    {id:'y-legsup',name:'Legs Up the Wall',rx:'5–10 min',cal:10,demo:'legsup',log:'time',secs:600,target:'Full Decompression',
      setup:'Hips near the wall, legs straight up, arms out, palms up. Total surrender. Decompresses the spine, drains the legs, flips on the parasympathetic system. There is nothing else to do tonight.'}
  ]};

var DS_DESK={key:'desk',title:'Desk Mobility',accent:'var(--blue)',meta:'office days · standing desk',
  blurb:'Snack-sized resets between meetings. Stack 3–5 across the day rather than doing them all at once. Skip any elbow-loaded wrist stretch if it\'s flaring — go straight to the band rows instead.',
  moves:[
    {id:'desk-posture',name:'Standing Posture Reset',rx:'30s · hourly',cal:3,demo:'stand',log:'done',target:'Posture',equip:'None',
      setup:'Feet rooted, tuck the tailbone slightly, roll shoulders back and down, lengthen through the crown of the head. Reset before the next call.'},
    {id:'desk-glutebridge',name:'Standing Glute Squeeze',rx:'10 reps',cal:5,demo:'standsqueeze',log:'done',target:'Glutes',equip:'None',
      setup:'Standing, squeeze both glutes hard for 5 sec, release. 10 reps. Direct activation for the SI joint pattern — no setup needed.'},
    {id:'desk-figure4',name:'Standing Figure-4 Hip Opener',rx:'30s/side',cal:5,demo:'figure4',log:'done',target:'Hips · Piriformis',equip:'Desk for balance',
      setup:'Cross one ankle over the opposite knee, hold the desk for balance, hinge forward slightly until you feel the outer hip open. 30 sec per side.'},
    {id:'desk-hipcircles',name:'Standing Hip Circles (CARs)',rx:'8/direction',cal:5,demo:'hipcircle',log:'done',target:'Hip Joint',equip:'None',
      setup:'Hands on hips, trace the biggest slow circle each hip can make, 8 per direction per side. Ribs stay down — nothing else moves.'},
    {id:'desk-deskcatcow',name:'Standing Cat-Cow (hands on desk)',rx:'10 reps',cal:5,demo:'standcatcow',log:'done',target:'Spine',equip:'Desk edge',
      setup:'Hands on the desk edge, hips back. Round and arch the spine slowly with the breath, 10 reps. Same pattern as the floor version, just standing.'},
    {id:'desk-chestopen',name:'Doorway / Desk Chest Opener',rx:'30s/side',cal:3,demo:'chestopen',log:'done',target:'Chest · Posture',equip:'Door frame or wall',
      setup:'Forearm on the door frame or wall at shoulder height, rotate your body away from it. 30 sec per side. Direct counter to hunched screen posture.'},
    {id:'desk-lowlunge',name:'Standing Low Lunge (hands on desk)',rx:'30s/side',cal:5,demo:'lowlunge',log:'done',target:'Hip Flexors',equip:'Desk for balance',
      setup:'Step one foot back into a long stance, hands on the desk, sink the hips gently forward. 30 sec per side — counters hours of hip flexion from sitting/cycling.'},
    {id:'desk-wallpushup',name:'Wall or Desk-Edge Push-ups',rx:'12 reps',cal:8,demo:'wallpushup',log:'setsreps',sets:1,target:'Chest · Triceps',equip:'Wall or sturdy desk edge',
      setup:'Hands on the wall or desk edge, walk feet back to set the angle, lower chest toward your hands and push back. Keep wrists neutral — skip this one entirely if the elbow is flaring and do band rows instead.'},
    {id:'desk-calfraise',name:'Standing Calf Raises',rx:'15 reps',cal:5,demo:'calf',log:'done',target:'Calves',equip:'None',
      setup:'Rise onto the toes, 2-sec hold at the top, slow descent. 15 reps. Easy blood-flow break between calls.'}
  ]};

var DS_ATG={key:"atg",title:"ATG Bulletproofing (adapted)",accent:"#f472b6",meta:"~20 min · optional add-on",
  blurb:"Adapted from Ben Patrick's Athletic Truth Group system (via Will Tennyson's video). Depth and eccentric intensity are capped for your SI joint and elbow. The three ⚠ moves (ATG split squat, full ROM squat, Nordic curl) are included but flagged — they're the highest SI-joint/eccentric demand in the original standard, so treat them as optional per session rather than a default.",
  moves:[
    {id:"atg-backwalk",name:"Backward Walking",rx:"3–4 min",cal:20,demo:"backwalk",log:"time",secs:210,target:"VMO · Knee Health",equip:"Hallway / driveway / treadmill off",
      setup:"Walk backward slowly for 3–4 minutes — hallway, driveway, or on a turned-off treadmill. Short steps, land on the ball of the foot. Pumps blood into the VMO without joint impact."},
    {id:"atg-tibraise",name:"Elevated Tibialis Raise",rx:"3×15–20",cal:12,demo:"tibraise",log:"setsreps",sets:3,target:"Shin (Tibialis Anterior)",equip:"Book or plate edge",
      setup:"Heels on a book/plate edge, weight shifted back onto the heels. Lift the toes as high as possible, slow lower. No tib bar needed — bodyweight is plenty to start."},
    {id:"atg-hipflexor",name:"Lying Knee Raise",rx:"3×10/side",cal:12,demo:"kneeraise",log:"setsreps",sets:3,target:"Hip Flexors · Lower Abs",equip:"Bodyweight",
      setup:"Home sub for the cable reverse squat. Lying on your back, one leg extended, drive the opposite knee toward your chest and back down slowly. Keep it light and controlled — stop short of any pinch near the SI joint."},
    {id:"atg-dip",name:"Playground Bar Dips",rx:"3×6–10",cal:25,demo:"dip",log:"setsreps",sets:3,target:"Chest · Triceps · Shoulders",equip:"Playground dip bars",
      setup:"Comfortable depth only — do NOT chase the ATG standard of shoulder-below-elbow, that bottom range is the highest-risk spot for both the shoulder and the elbow. Slow 3–4 sec negatives while you're new to these. Stop immediately if you feel any pull on the inside (medial) elbow and sub Banded Push-ups that day instead."},
    {id:"atg-extrot",name:"Shoulder External Rotation",rx:"3×12/side",cal:10,demo:"extrot",log:"setsreps",sets:3,target:"Rotator Cuff",equip:"2 lb dumbbell",
      setup:"Elbow pinned to your side (or resting on your knee if seated), forearm starts across your stomach. Rotate the dumbbell outward and up, keeping the elbow glued in place. Slow and light — this is a small stabilizer, not a strength move."},
    {id:"atg-trap3",name:"Trap 3 Raise",rx:"3×12–15",cal:10,demo:"trap3",log:"setsreps",sets:3,target:"Lower Traps",equip:"2 lb dumbbell",
      setup:"Hinge forward slightly, arm hanging straight down at about a 30° angle from your side (thumb-up line). Raise the arm straight out along that same angle, leading with the thumb. Light weight — this is a posture/structural exercise, not a lift."},
    {id:"atg-splitsquat",name:"ATG Split Squat (optional — high SI-joint demand)",rx:"2×5/side, shallow",cal:20,demo:"splitsquat",log:"setsreps",sets:2,target:"Quads · Ankle/Hip Mobility",equip:"Bodyweight",
      setup:"⚠ Your call — this is the deep split squat where the front hamstring covers the calf and the back leg stays straight. It loads the hip into a deep flexed/rotated position, which is exactly the pattern your SI joint protocol says to go easy on. If you do it: start shallow (nowhere near full ATG depth), 2 sets of 5 slow reps per side, and stop the moment you feel anything in the low back or SI joint rather than pushing through."},
    {id:"atg-fullsquat",name:"Full ROM Bodyweight Squat (optional — high SI-joint demand)",rx:"2×8, shallow",cal:15,demo:"squat",log:"setsreps",sets:2,target:"Quads · Glutes · Hip Mobility",equip:"Bodyweight",
      setup:"⚠ Your call — the \"ass-to-grass\" deep squat. You already train squat patterns with bands at a controlled depth; this pushes further into hip flexion than that. If you do it: no added weight, go only as deep as you can keep your low back neutral, and treat any pinching sensation as a hard stop, not something to breathe through."},
    {id:"atg-nordic",name:"Nordic Hamstring Curl (optional — highest risk on this list)",rx:"2×3–5, assisted",cal:18,demo:"nordic",log:"setsreps",sets:2,target:"Hamstrings (eccentric)",equip:"Partner/anchor for ankles + couch",
      setup:"⚠ Your call — of everything in this routine, this is the one I'd actually push back on hardest. It's a maximal eccentric hamstring load with your torso hinging forward from a kneeling lock — real potential to pull the pelvis into exactly the position that's aggravated your SI joint before. If you do it: use your hands to catch yourself early (don't fight it all the way down), very few reps, and stop for the day at the first sign of anything in the low back or SI joint — not just the second or third rep."}
  ]};

/* ── Day-specific HIIT Finishers ─────────────────────────────────────────── */
var DS_HIIT_MON={key:'hiit-mon',title:'HIIT Finisher \u2014 Upper',accent:'#fb923c',meta:'6 min \xb7 30s on / 30s off \xb7 2 rounds',
  blurb:'Back-to-back upper body intervals. Push to 80\u201390% effort on each work block. No overhead loading, no ballistic elbow movement \u2014 elbow-safe by design.',
  moves:[
    {id:'hiit-mon-row',name:'Bent-Over Row \u2014 intervals',rx:'30s hard / 30s rest',cal:20,demo:'row',log:'time',secs:30,sets:1,target:'Back \xb7 Biceps',equip:'Tube 30\u201350 lb',
      setup:'Same form as your main sets \u2014 drive elbows to your back pockets. 30 seconds as hard as you can maintain good form, then rest 30 seconds. Repeat the full circuit twice.'},
    {id:'hiit-mon-pullapart',name:'Band Pull-Apart \u2014 intervals',rx:'30s hard / 30s rest',cal:15,demo:'fly',log:'time',secs:30,sets:1,target:'Rear Delts',equip:'Tube 10\u201320 lb',
      setup:'Arms straight, pull the band to your chest and squeeze. Continuous reps for 30 seconds \u2014 fast but controlled. Rest 30 seconds.'},
    {id:'hiit-mon-fly',name:'Banded Chest Fly \u2014 intervals',rx:'30s hard / 30s rest',cal:15,demo:'fly',log:'time',secs:30,sets:1,target:'Chest',equip:'Tube 10\u201320 lb \xb7 mid anchor',
      setup:'Mid anchor, face away from the door. Hug motion for 30 seconds at tempo. Rest 30 seconds.'},
    {id:'hiit-mon-curl',name:'Bicep Curl \u2014 intervals',rx:'30s hard / 30s rest',cal:12,demo:'curl',log:'time',secs:30,sets:1,target:'Biceps',equip:'Tube 10\u201320 lb',
      setup:'Upper arms pinned, continuous curls for 30 seconds. Rest 30 seconds. Repeat all 4 exercises for round 2.'}
  ]};

var DS_HIIT_TUE={key:'hiit-tue',title:'HIIT Finisher \u2014 Lower EMOM',accent:'#4ade80',meta:'8 min EMOM \xb7 2 rounds of 4 exercises',
  blurb:'Lower body and core EMOM. Each minute: hit the target reps, rest the remainder of the minute. Big muscle groups, high demand \u2014 this is where the EPOC happens.',
  moves:[
    {id:'hiit-tue-squat',name:'Banded Squat \u2014 EMOM',rx:'12 reps \xb7 min 1 & 5',cal:22,demo:'squat',log:'setsreps',sets:1,target:'Quads \xb7 Glutes',equip:'Tube 40\u201350 lb',
      setup:'12 reps at the top of min 1. Rest the remainder of the minute. Repeat at min 5. Push the pace \u2014 these should feel hard.'},
    {id:'hiit-tue-bridge',name:'Banded Glute Bridge \u2014 EMOM',rx:'15 explosive \xb7 min 2 & 6',cal:18,demo:'bridge',log:'setsreps',sets:1,target:'Glutes',equip:'Tube 30\u201340 lb',
      setup:'15 reps, drive through heels explosively, squeeze hard at the top. Rest remainder of the minute. Repeat at min 6.'},
    {id:'hiit-tue-pallof-l',name:'Pallof Press \u2014 Left \xb7 EMOM',rx:'10 reps \xb7 min 3 & 7',cal:12,demo:'pallof',log:'setsreps',sets:1,target:'Core Anti-Rotation',equip:'Tube 10\u201320 lb \xb7 mid anchor',
      setup:'Left side to anchor. 10 presses, hold 2 sec each at full extension. Rest the remainder. Repeat at min 7.'},
    {id:'hiit-tue-pallof-r',name:'Pallof Press \u2014 Right \xb7 EMOM',rx:'10 reps \xb7 min 4 & 8',cal:12,demo:'pallof',log:'setsreps',sets:1,target:'Core Anti-Rotation',equip:'Tube 10\u201320 lb \xb7 mid anchor',
      setup:'Right side to anchor. 10 presses. Rest the remainder. That completes round 1 \u2014 start round 2 at min 5.'}
  ]};

var DS_HIIT_THU={key:'hiit-thu',title:'HIIT Finisher \u2014 Upper Pull',accent:'#a78bfa',meta:'6 min \xb7 30s on / 30s off \xb7 2 rounds',
  blurb:'Upper back and shoulder emphasis. Rear delts, lats, side delts, arms \u2014 the pulling muscles that drive posture and shoulder health. Keep elbows safe, intensity high.',
  moves:[
    {id:'hiit-thu-pulldown',name:'Banded Lat Pulldown \u2014 intervals',rx:'30s hard / 30s rest',cal:20,demo:'pulldown',log:'time',secs:30,sets:1,target:'Lats',equip:'Tube 20\u201340 lb \xb7 high anchor',
      setup:'Kneeling, high anchor. Drive elbows down into your back pockets \u2014 continuous reps for 30 seconds. Rest 30 seconds.'},
    {id:'hiit-thu-facepull',name:'Banded Face Pull \u2014 intervals',rx:'30s hard / 30s rest',cal:15,demo:'facepull',log:'time',secs:30,sets:1,target:'Rear Delts \xb7 Rotator Cuff',equip:'Tube 10\u201320 lb \xb7 high anchor',
      setup:'Pull to temples, thumbs back \u2014 30 seconds continuous. Elbows stay high. Rest 30 seconds.'},
    {id:'hiit-thu-lateral',name:'Banded Lateral Raise \u2014 intervals',rx:'30s hard / 30s rest',cal:12,demo:'lateralraise',log:'time',secs:30,sets:1,target:'Side Delts',equip:'Tube 10 lb',
      setup:'Lead with the elbows, stop at shoulder height \u2014 30 seconds. Lighter band here; this is a small muscle. Rest 30 seconds.'},
    {id:'hiit-thu-hammer',name:'Hammer Curl \u2014 intervals',rx:'30s hard / 30s rest',cal:12,demo:'curl',log:'time',secs:30,sets:1,target:'Biceps \xb7 Brachialis',equip:'Tube 10\u201320 lb',
      setup:'Neutral grip (palms face each other) \u2014 30 seconds continuous curls. Upper arms pinned. Rest 30 seconds. Repeat all 4 for round 2.'}
  ]};

var DS_HIIT_FRI={key:'hiit-fri',title:'HIIT Finisher \u2014 Lower EMOM',accent:'#38bdf8',meta:'8 min EMOM \xb7 2 rounds of 4 exercises',
  blurb:'Hamstring, hip, and core EMOM. Eccentric-friendly movements \u2014 RDL, lateral walk, dead bug. High demand on the posterior chain without SI joint torque.',
  moves:[
    {id:'hiit-fri-rdl',name:'Romanian Deadlift \u2014 EMOM',rx:'12 reps \xb7 min 1 & 5',cal:22,demo:'hinge',log:'setsreps',sets:1,target:'Hamstrings \xb7 Glutes',equip:'Tube 40\u201350 lb',
      setup:'12 reps, hips back to the wall, handles glued to legs. Rest remainder. Repeat at min 5.'},
    {id:'hiit-fri-latwalk',name:'Banded Lateral Walk \u2014 EMOM',rx:'continuous \xb7 min 2 & 6',cal:18,demo:'latwalk',log:'time',secs:45,sets:1,target:'Hip Abductors \xb7 Glutes',equip:'Mini loop above knees',
      setup:'Quarter-squat, step sideways for 45 seconds switching direction every 4 steps. Rest the remainder of the minute. Repeat at min 6.'},
    {id:'hiit-fri-deadbug',name:'Dead Bug \u2014 EMOM',rx:'8/side \xb7 min 3 & 7',cal:12,demo:'deadbug',log:'setsreps',sets:1,target:'Core \xb7 Anti-Extension',equip:'Bodyweight',
      setup:'Slow tempo \u2014 3 sec extend, 3 sec return. Low back pinned the entire time. 8 reps per side. Rest the remainder. Repeat at min 7.'},
    {id:'hiit-fri-bridge',name:'Banded Glute Bridge \u2014 EMOM',rx:'15 explosive \xb7 min 4 & 8',cal:18,demo:'bridge',log:'setsreps',sets:1,target:'Glutes \xb7 Hamstrings',equip:'Tube 30\u201340 lb',
      setup:'Drive through heels, full squeeze at the top \u2014 15 reps. Rest remainder. That ends round 1 \u2014 start round 2 at min 5.'}
  ]};

var DS_HIIT_MAP={mon:DS_HIIT_MON,tue:DS_HIIT_TUE,thu:DS_HIIT_THU,fri:DS_HIIT_FRI};


/* ============================ DS_SESSIONS (Mon–Sun) ============================ */
function dsCore(id,name,rx,cal,cue,demo){return {id:id,name:name,slot:'Core',target:'Core',equip:'Bodyweight',rx:rx,cal:cal,cue:cue,demo:demo||null,log:'setsreps',sets:3};}
var DS_WARMUP_BOARD={id:'warmup-board',name:'Balance Board',slot:'Warm-up',target:'Ankles · Proprioception',equip:'Balance board',rx:'2 min',cal:10,cue:'Rock front-to-back 30s, side-to-side 30s, then slow circles 60s — knees soft, eyes forward',demo:null,log:'time',secs:120};
var DS_WARMUP_ROPE9={id:'warmup-rope-9',name:'Jump Rope',slot:'Warm-up',target:'Cardio · Calves',equip:'Jump rope',rx:'3–4 min easy',cal:40,cue:'Easy pace, light bounce — this is a warm-up, not a workout',demo:null,log:'time',secs:210};
var DS_WARMUP_ROPE7={id:'warmup-rope-7',name:'Jump Rope',slot:'Warm-up',target:'Cardio · Calves',equip:'Jump rope',rx:'5 min easy',cal:50,cue:'Easy pace, light bounce — get the heart rate up before squats and deadlifts load the legs',demo:null,log:'time',secs:300};
var DS_WARMUP_KBHALO={id:'warmup-kbhalo',name:'KB Halo + Around-the-World',slot:'Warm-up',target:'Shoulders · Core',equip:'8 lb kettlebell',rx:'10/dir + 8/dir',cal:15,cue:'Halo: circle the KB close around your head, core braced. Around-the-World: pass hand to hand around your waist, reverse halfway.',demo:null,log:'setsreps',sets:1};
var DS_WALKRIDE={id:'walkride',name:'Post-session Walk + Easy Ride',slot:'Cardio',target:'Close the calorie gap',equip:'Compression sleeve on the ride',rx:'~50 min',cal:290,cue:'Easy pace on both — this is volume, not intensity',demo:null,log:'done'};

var DS_SESSIONS={
  mon:{title:'Upper Body Push + Pull',sub:'Chest · Shoulders · Back · Arms',accent:'var(--accent)',
    moves:[DS_WARMUP_BOARD,DS_WARMUP_ROPE9,DS_WARMUP_KBHALO,
      {id:'mon-pushup',name:'Banded Push-ups',slot:'Horizontal Push',target:'Chest · Triceps',equip:'Tube band or bodyweight',rx:'3–4×10–15',cal:35,cue:'Chest to floor, elbows 45° back — push the floor away explosively',demo:'pushup',log:'setsreps',sets:4,
        variants:[{name:'Floor DB Press',equip:'10 lb dumbbells',rx:'3×12',cue:'Lower under control, press to the ceiling',demo:'press'},
                  {name:'Banded Chest Press (anchor)',equip:'Tube 20–30 lb',rx:'3×12–15',cue:'Drive the handles together in front of your chest',demo:'press'},
                  {name:'Super Band Push-up',equip:'Ultra Heavy band across upper back',rx:'3×8–12',cue:'Band under both palms, draped across the upper back — explode off the floor against the tension',demo:'pushup'},
                  {name:'Deficit Push-up',equip:'Yoga blocks under hands + mini loop band',rx:'3×8–12',cue:'Hands elevated on blocks — chest drops below hand level for a deeper stretch before the band resists at the top',demo:'pushup'}]},
      {id:'mon-ohp',name:'Overhead Press',slot:'Vertical Push',target:'Shoulders',equip:'Tube 20–30 → 40–50 lb',rx:'3×10–12',cal:35,cue:"Press straight to the ceiling — don't let your low back arch",demo:'press',log:'setsreps',sets:3,
        variants:[{name:'DB Overhead Press',equip:'2× 10 lb dumbbells',rx:'3×12–15',cue:'Press both DBs straight up, brief squeeze at the top — control the descent',demo:'press'}]},
      {id:'mon-pullapart',name:'Band Pull-Apart',slot:'Rear Delts',target:'Rear Delts',equip:'Tube 10–20 lb',rx:'3×15–20',cal:25,cue:'Crack a walnut between your shoulder blades — arms stay straight',demo:'fly',log:'setsreps',sets:3},
      {id:'mon-row',name:'Bent-Over Row',slot:'Horizontal Pull',target:'Back · Biceps',equip:'Tube 30–40 → 50–70 lb',rx:'3–4×10–12',cal:35,cue:'Drive elbows into your back pockets — not hands to your chest',demo:'row',log:'setsreps',sets:4,
        variants:[{name:'Wide Row (free)',equip:'Tube 20–30 lb',rx:'3×12',cue:'Pull wide to the ribs, squeeze the mid-back',demo:'row'},
                  {name:'Chest-Supported Row (ball)',equip:'Chest on stability ball + tube band',rx:'3×12',cue:'Chest stays glued to the ball — zero lower back, all upper back',demo:'ballrow'},
                  {name:'Narrow Row',equip:'Tube 30–40 lb',rx:'3×12',cue:'Hands close, pull to the belt line — elbows brush the ribs, hits lats more than mid-back',demo:'row'}]},
      {id:'mon-curl',name:'Bicep Curl',slot:'Biceps',target:'Biceps',equip:'Tube 10–20 → 30 lb',rx:'3×12–15',cal:25,cue:'Upper arms glued to your sides — only forearms move',demo:null,log:'setsreps',sets:3,
        variants:[{name:'DB Curl',equip:'2× 10 lb dumbbells',rx:'3×12–15',cue:'Palms forward, curl to the shoulders — slow on the way down',demo:'curl'},
                  {name:'Iso-Hold Curl',equip:'2× 10 lb dumbbells or tube',rx:'3×10 + 5s holds',cue:'Curl up, stop and hold 5 sec at 90° halfway, then finish the rep — the hold is the exercise',demo:'curl'},
                  {name:'Forward Fold Curl',equip:'2× 10 lb dumbbells',rx:'3×10–12',cue:'Hinge forward like an RDL and hold it — curl from the hang, arms perpendicular to the floor. No swing possible',demo:'curl'},
                  {name:'Wall-Braced Curl (short head)',equip:'Tube 10–20 lb',rx:'3×10–12',cue:'⚠️ Elbow flag — start light. Brace your upper arm against a wall or chair back to lock the elbow in place. Curl slowly, turn pinkies up at the top. Stop if you feel medial elbow ache.',demo:'curl'}]},
      {id:'mon-tri',name:'Triceps Pushdown',slot:'Triceps',target:'Triceps',equip:'Tube 10–20 → 30 lb',rx:'3×12–15',cal:25,cue:'Elbows pinned to ribs — only forearms move',demo:null,log:'setsreps',sets:3,
        variants:[{name:'DB Kickbacks',equip:'2× 10 lb dumbbells',rx:'3×12/arm',cue:'Hinge forward, upper arm locked parallel to the floor — extend back and squeeze 1 sec at lockout',demo:'triceps'}]},
      {id:'mon-hollow',name:'Hollow Body Hold',slot:'Core',target:'Core',equip:'Bodyweight',rx:'2×30s holds',cal:20,cue:'Press low back into floor, ribs down — one rigid curved line',demo:'hollow',log:'time',secs:30,sets:2},
      dsCore('mon-bike','Bicycle Crunch','1×12 total (alternating)',20,'Rotate from the ribcage — slow, 2 sec each side'),
      dsCore('mon-legraise','Leg Raise','1×10–12',20,'Low back stays flat — lower only as far as it stays down'),
      DS_WALKRIDE]},

  tue:{title:'Lower Body + Core',sub:'Quads · Hamstrings · Glutes · Core',accent:'var(--accent)',
    moves:[DS_WARMUP_BOARD,DS_WARMUP_ROPE7,
      {id:'tue-squat',name:'Banded Squat',slot:'Squat',target:'Quads · Glutes',equip:'Clench mini loop above knees',rx:'4×12–15',cal:40,cue:'Mini loop above the knees — sit back and down, knees push out against the band',demo:'squat',log:'setsreps',sets:4,
        variants:[{name:'Goblet Squat',equip:'10 lb dumbbell',rx:'4×15–20',cue:'Hold the DB at your chest — sit back, elbows brush inside the knees',demo:'goblet'}]},
      {id:'tue-rdl',name:'Romanian Deadlift',slot:'Hinge',target:'Hamstrings',equip:'Tube 40–50 → 90+ lb',rx:'3–4×10–12',cal:35,cue:'Push hips back to the wall — handles glued to your legs',demo:'hinge',log:'setsreps',sets:4,
        variants:[{name:'Single-Leg DB RDL',equip:'10 lb dumbbell (opposite hand)',rx:'3×10–12/leg',cue:'Hinge forward, DB toward the floor as the free leg extends behind you — hips stay square',demo:'slrdl'},
                  {name:'Super Band RDL',equip:'Ultra Heavy band underfoot',rx:'3–4×8–10',cue:'Stand on the band, hinge back — tension peaks at lockout, squeeze the glutes hard at the top',demo:'hinge'}]},
      {id:'tue-lat',name:'Banded Lateral Walk',slot:'Abductors',target:'Hip Abductors',equip:'Mini loop above knees',rx:'3×12/side',cal:25,cue:"Stay in the quarter squat — don't stand up between steps",demo:null,log:'setsreps',sets:3},
      {id:'tue-bridge',name:'Banded Glute Bridge',slot:'Glutes',target:'Glutes',equip:'Tube 30–40 → 50+ lb',rx:'3×15–20',cal:30,cue:'Drive through heels, squeeze hard at the top — hold 2 sec',demo:'bridge',log:'setsreps',sets:3,
        variants:[{name:'Banded Hip Thrust',equip:'Shoulders on couch + tube band over hips',rx:'3×12–15',cue:'Upper back on the couch edge — hips sink below the seat, then drive to a flat tabletop and squeeze 2 sec',demo:'hipthrust'}]},
      {id:'tue-ballcurl',name:'Stability Ball Leg Curl',slot:'Knee Flexion',target:'Hamstrings',equip:'Stability ball',rx:'3×10–12',cal:30,cue:'Bridge up, curl the ball to your glutes — hips stay high the whole set',demo:'ballcurl',log:'setsreps',sets:3},
      {id:'tue-pallof',name:'Banded Pallof Press',slot:'Anti-Rotation',target:'Core',equip:'Tube 10–20 → 30 lb',rx:'3×10/side',cal:25,cue:'Press out and resist the rotation — hips and shoulders square',demo:null,log:'setsreps',sets:3},
      {id:'tue-jump',name:'Jump Squat',slot:'Power',target:'Quads · Glutes',equip:'Bodyweight',rx:'3×10',cal:30,cue:'Land softly — toes first, knees bend to absorb',demo:'squat',log:'setsreps',sets:3},
      {id:'tue-step',name:'Step-Up',slot:'Unilateral',target:'Quads · Balance',equip:'Chair or step',rx:'3×10/side',cal:30,cue:"Drive through the front heel only — don't push off the back foot",demo:null,log:'setsreps',sets:3},
      DS_WALKRIDE]},

  wed:{title:'Wednesday Yoga Flow',sub:'Full-body mobility · no bands · Charlie Follows + Moves',accent:'var(--purple)',
    moves:[
      {id:'wed-flow-center',name:'Seated Centering Breath',slot:'Flow · 1',target:'Breath · Nervous System',equip:'Mat',rx:'2 min',cal:5,cue:'Sit tall, eyes closed — inhale 4 counts, exhale 6. Let the exhale set the pace for the whole flow',demo:'seated',log:'time',secs:120},
      {id:'wed-flow-catcow',name:'Cat-Cow — breath-led',slot:'Flow · 2',target:'Spine',equip:'Mat',rx:'2 min',cal:8,cue:'Inhale arch, exhale round — the breath moves you, not the other way around',demo:'catcow',log:'time',secs:120},
      {id:'wed-flow-child',name:'Child\'s Pose — side reaches',slot:'Flow · 3',target:'Lats · Low Back',equip:'Mat',rx:'90s',cal:5,cue:'Hips to heels, walk the hands right and hold 3 breaths, then left',demo:'child',log:'time',secs:90},
      {id:'wed-flow-downdog',name:'Downward Dog — pedal out',slot:'Flow · 4',target:'Posterior Chain · Shoulders',equip:'Mat',rx:'2 min',cal:10,cue:'Hips high, spine long — bend one knee then the other, pedaling the heels',demo:'downdog',log:'time',secs:120},
      {id:'wed-flow-fold',name:'Standing Forward Fold',slot:'Flow · 5',target:'Hamstrings · Spine',equip:'Mat',rx:'90s',cal:5,cue:'Soft knees, hang heavy — grab opposite elbows and sway gently',demo:'fold',log:'time',secs:90},
      {id:'wed-flow-dragon',name:'Dragon — Low Lunge',slot:'Flow · 6',target:'Hip Flexors',equip:'Mat · yoga blocks',rx:'90s/side',cal:10,cue:'Back knee down, sink the hips forward — blocks under hands if the floor is far',demo:'dragon',log:'time',secs:180},
      {id:'wed-flow-cobra',name:'Cobra — gentle backbend',slot:'Flow · 7',target:'Spine · Chest',equip:'Mat',rx:'90s',cal:6,cue:'Press the chest forward and up, hips glued to the mat — low back stays comfortable',demo:'cobra',log:'time',secs:90},
      {id:'wed-flow-birddog',name:'Bird Dog — slow flow',slot:'Flow · 8',target:'Core · SI Stability',equip:'Mat',rx:'6/side',cal:10,cue:'Exhale extend, inhale return — flat back, zero rocking. Your SI joint\'s best friend',demo:'birddog',log:'setsreps',sets:1},
      {id:'wed-flow-swan',name:'Sleeping Swan',slot:'Flow · 9',target:'Glutes · Deep Hip',equip:'Mat · block under hip',rx:'2 min/side',cal:10,cue:'Front shin angled, fold over it — block under the hip keeps the pelvis square',demo:'swan',log:'time',secs:240},
      {id:'wed-flow-cat',name:'Caterpillar — seated fold',slot:'Flow · 10',target:'Hamstrings · Spine',equip:'Mat',rx:'2 min',cal:6,cue:'Round forward and hang — this is yin, let gravity do the work',demo:'caterpillar',log:'time',secs:120},
      {id:'wed-flow-twist',name:'Supine Twist',slot:'Flow · 11',target:'Spine · Obliques',equip:'Mat',rx:'90s/side',cal:6,cue:'Knees drop gently to one side, both shoulders stay down — easy does it with the SI',demo:'twist',log:'time',secs:180},
      {id:'wed-flow-bridge',name:'Slow Bridge Rolls',slot:'Flow · 12',target:'Spine · Glutes',equip:'Mat',rx:'90s',cal:8,cue:'Roll up one vertebra at a time on the inhale, melt down on the exhale',demo:'bridge',log:'time',secs:90},
      {id:'wed-flow-legsup',name:'Legs Up the Wall',slot:'Flow · 13',target:'Recovery · Circulation',equip:'Wall',rx:'3 min',cal:5,cue:'Hips close to the wall, arms wide — total surrender',demo:'legsup',log:'time',secs:180},
      {id:'wed-flow-sav',name:'Savasana',slot:'Flow · 14',target:'Integration',equip:'Mat',rx:'3 min',cal:3,cue:'Flat on your back, let everything go — the pose where the practice lands',demo:'savasana',log:'time',secs:180},
      {id:'wed-hollow',name:'Hollow Hold — breath focus',slot:'Core',target:'Full Core',equip:'Bodyweight',rx:'2×30s',cal:20,cue:'Exhale everything out, ribs down — hold the compression',demo:'hollow',log:'time',secs:30},
      {id:'wed-bike',name:'Slow Bicycle Crunch',slot:'Core',target:'Obliques',equip:'Bodyweight',rx:'2×8/side',cal:18,cue:'Rotate from the ribcage — 2 full seconds each way',demo:null,log:'setsreps',sets:2},
      {id:'wed-legraise',name:'Leg Raise — slow descent',slot:'Core',target:'Lower Abs',equip:'Bodyweight',rx:'2×8',cal:18,cue:'3 seconds down — low back stays flat the whole time',demo:null,log:'setsreps',sets:2},
      {id:'wed-tgu',name:'Turkish Get-Up',slot:'Full Body',target:'Core · Shoulder Stability',equip:'8 lb kettlebell',rx:'2×3/side',cal:30,cue:'Eye stays on the weight the whole time — slow, one step at a time',demo:'tgu',log:'setsreps',sets:2},
      {id:'wed-slam',name:'Ball Slam',slot:'Power',target:'Full Body',equip:'10 lb slam ball',rx:'3×10',cal:35,cue:'Full reach overhead first — drive the ball through the floor',demo:null,log:'setsreps',sets:3},
      {id:'wed-rotslam',name:'Rotational Slam',slot:'Power',target:'Obliques',equip:'10 lb slam ball',rx:'3×8/side',cal:30,cue:'Hips lead the rotation — arms just guide it',demo:null,log:'setsreps',sets:3}]},

  thu:{title:'Upper Body Hypertrophy',sub:'Chest · Back · Shoulders · Arms',accent:'var(--accent)',
    moves:[DS_WARMUP_BOARD,DS_WARMUP_ROPE9,DS_WARMUP_KBHALO,
      {id:'thu-chest',name:'Chest — Pull-Apart / Fly',slot:'Horizontal Push',target:'Chest · Rear Delts',equip:'Tube 10–20 → 30 lb',rx:'3×12–15',cal:35,cue:'Hug a big tree — slight elbow bend, feel the stretch open across your chest',demo:'fly',log:'setsreps',sets:3,
        variants:[{name:'Banded Push-up',equip:'Bodyweight / tube',rx:'3×12',cue:'Chest to floor, push the floor away',demo:'pushup'},
                  {name:'Floor DB Press',equip:'10 lb dumbbells',rx:'3×12',cue:'Press to the ceiling, control the lower',demo:'press'},
                  {name:'Low-Anchor Stretch Fly',equip:'Tube 10–20 lb · low anchor',rx:'3×12–15',cue:'Anchor low instead of mid-chest. Face away, step forward for a deep starting stretch, then fly bottom-to-top across your body',demo:'fly'}]},
      {id:'thu-facepull',name:'Rear Delts / Face Pull',slot:'Rear Delts',target:'Rear Delts · Traps',equip:'Tube 10–20 → 30 lb',rx:'3–4×15–20',cal:30,cue:'Pull to your temples, elbows high — thumbs point behind you at the finish',demo:'facepull',log:'setsreps',sets:4},
      {id:'thu-lat',name:'Lats / Pulldown',slot:'Vertical Pull',target:'Lats · Back',equip:'Tube 20–30 → 50 lb',rx:'3–4×10–12',cal:35,cue:'Drive elbows into your back pockets — chest up, slight lean back',demo:'pulldown',log:'setsreps',sets:4,
        variants:[{name:'Wide Row (free)',equip:'Tube 20–30 lb',rx:'3×12',cue:'Pull wide to the ribs, squeeze the mid-back',demo:'row'},
                  {name:'Deep-Stretch Pulldown',equip:'Tube 20–30 lb · high anchor',rx:'3×10–12',cue:'Kneel farther back from the anchor than usual for a longer overhead starting stretch before pulling down',demo:'pulldown'}]},
      {id:'thu-lateral',name:'Lateral Raise',slot:'Side Delts',target:'Side Delts',equip:'Tube 10 → 20 lb',rx:'3×12–15',cal:25,cue:'Lead with elbows, not hands — pour water from a pitcher',demo:null,log:'setsreps',sets:3},
      {id:'thu-hammer',name:'Hammer Curl',slot:'Biceps',target:'Biceps · Forearms',equip:'Tube 10–20 → 30 lb',rx:'3×12–15',cal:25,cue:'Thumbs up the whole time — slow and controlled on the way down. Neutral grip is easier on the medial elbow than supinated curls, so this is the one to progress heaviest — go up one band step at a time.',demo:null,log:'setsreps',sets:3,
        variants:[{name:'DB Hammer Curl',equip:'2× 10 lb dumbbells',rx:'3×12–15',cue:'Neutral grip, thumbs up — curl both DBs together or alternate',demo:'curl'}]},
      {id:'thu-inclinecurl',name:'Stability Ball Incline Curl (long head)',slot:'Biceps',target:'Biceps — Long Head',equip:'Stability ball tilted + tube band, low anchor',rx:'3×6–10',cal:20,cue:'⚠️ Highest elbow caution — lie back on the ball at an incline, arms hanging behind your torso line, curl from a deep stretch. Start with a light band or no band at all the first session. Stop immediately if elbow soreness lingers past 24h. Trial on a separate week from wall-braced curls so you know which one caused any flare-up.',demo:'curl',log:'setsreps',sets:3},
      {id:'thu-tri',name:'Triceps Pushdown',slot:'Triceps',target:'Triceps',equip:'Tube 10–20 → 30 lb',rx:'3×12–15',cal:25,cue:'Elbows pinned to ribs — only forearms move',demo:null,log:'setsreps',sets:3},
      {id:'thu-hollow',name:'Hollow Body Hold',slot:'Core',target:'Core',equip:'Bodyweight',rx:'2×30s holds',cal:20,cue:'Press low back into floor, ribs down — one rigid curved line',demo:'hollow',log:'time',secs:30,sets:2},
      dsCore('thu-bike','Bicycle Crunch','1×12 total (alternating)',20,'Rotate from the ribcage — slow, 2 sec each side'),
      dsCore('thu-legraise','Leg Raise','1×10–12',20,'Low back stays flat — lower only as far as it stays down'),
      dsCore('thu-russian','Russian Twist','1×10/side',20,'Rotate the ribcage — slow and controlled, not a swing'),
      DS_WALKRIDE]},

  fri:{title:'Lower Body + Core Strength',sub:'Quads · Hamstrings · Glutes · Core',accent:'var(--accent)',
    moves:[DS_WARMUP_BOARD,DS_WARMUP_ROPE7,
      {id:'fri-bulg',name:'Banded Bulgarian Split Squat',slot:'Unilateral Squat',target:'Quads · Balance',equip:'Tube 20–30 → 40–50 lb',rx:'3×10/leg',cal:40,cue:'Front heel drives through the floor — torso stays tall',demo:'splitsquat',log:'setsreps',sets:3},
      {id:'fri-sumo',name:'Banded Sumo Squat',slot:'Squat',target:'Inner Thigh · Glutes',equip:'Tube 40–50 lb stacked',rx:'3×12–15',cal:35,cue:'Wide stance, toes out, knees push out — sit straight down',demo:'squat',log:'setsreps',sets:3},
      {id:'fri-nordic',name:'Stability Ball Leg Curl',slot:'Knee Flexion',target:'Hamstrings',equip:'Stability ball',rx:'3×10–12',cal:30,cue:'Hips stay up the whole set — curl the ball in, roll out over a slow 3-count',demo:'ballcurl',log:'setsreps',sets:3},
      {id:'fri-calf',name:'Single-Leg Calf Raise',slot:'Calves',target:'Calves',equip:'Step edge, bodyweight',rx:'3×12–15/leg',cal:25,cue:'Heel hangs off the step, full stretch at the bottom, 2-sec squeeze at the top',demo:null,log:'setsreps',sets:3},
      {id:'fri-obliques',name:'Obliques / Rotation',slot:'Rotation',target:'Obliques',equip:'Tube 10–20 → 30 lb',rx:'3×10/side',cal:25,cue:'Power from the hips rotating — arms guide, core drives',demo:null,log:'setsreps',sets:3},
      {id:'fri-deadbug',name:'Dead Bug',slot:'Anti-Extension',target:'Core · SI Joint',equip:'Bodyweight or ball',rx:'3×8/side',cal:20,cue:'Low back glued to the floor — if it lifts, you\'ve gone too far',demo:null,log:'setsreps',sets:3},
      {id:'fri-sqpress',name:'Squat to Press',slot:'Power',target:'Full Body',equip:'10 lb DBs or slam ball',rx:'3×10',cal:35,cue:'Legs drive up first, then press — one fluid motion',demo:'press',log:'setsreps',sets:3},
      {id:'fri-plank',name:'Plank',slot:'Anti-Extension',target:'Core',equip:'Bodyweight',rx:'3×30–45s',cal:20,cue:'Squeeze glutes, brace core — straight line head to heels, breathe',demo:'plank',log:'time',secs:40},
      DS_WALKRIDE]},

  sat:{title:'Mountain Bike Ride',sub:'Cardio · Fat Loss · HDL Boost',accent:'var(--blue)',
    moves:[
      {id:'sat-ride',name:'Mountain Bike Ride',slot:'Cardio',target:'Aerobic base',equip:'Roadmaster · compression sleeve',rx:'30–60 min',cal:0,cue:'Mostly easy with a few honest climbs — keep it conversational',demo:null,log:'cardio',perMin:9.2,defMin:45},
      {id:'sat-walk',name:'Optional Recovery Walk',slot:'Cardio',target:'NEAT',equip:'Outdoors',rx:'20–30 min',cal:0,cue:'Loose and easy — protect the joints, keep moving',demo:null,log:'cardio',perMin:4.3,defMin:30}]},

  sun:{title:'Sunday Recovery',sub:'Active recovery · Walk + Gentle Flow',accent:'var(--green)',
    moves:[
      {id:'sun-walk',name:'Recovery Walk',slot:'Cardio',target:'NEAT · circulation',equip:'Outdoors',rx:'30–45 min',cal:0,cue:'Easy pace, nose breathing — let the body recover, not work',demo:null,log:'cardio',perMin:4.3,defMin:35},
      {id:'sun-flow',name:'Gentle Mobility Flow',slot:'Mobility',target:'Whole body',equip:'Mat',rx:'15–20 min',cal:50,cue:'Move where you feel stuck — slow, breath-led, no intensity',demo:'catcow',log:'done'}]}
};

var DS_WEEKMAP=['sun','mon','tue','wed','thu','fri','sat'];
var DS_DAYLABEL={mon:'Mon',tue:'Tue',wed:'Wed',thu:'Thu',fri:'Fri',sat:'Sat',sun:'Sun'};
var DS_ORDER=['mon','tue','wed','thu','fri','sat','sun'];
var DS_DAY_OVERRIDE=null; // when set, the Today tab shows this day's session instead of the real calendar day
function dsRealSessionKey(dk){var d=new Date(dk+'T12:00:00');return DS_WEEKMAP[d.getDay()];}
function dsSessionKey(dk){ if(DS_DAY_OVERRIDE && dk===activeDate) return DS_DAY_OVERRIDE; return dsRealSessionKey(dk); }
function dsPickDay(d){ DS_DAY_OVERRIDE=(d===dsRealSessionKey(activeDate))?null:d; dsRender(); }
function dsBackToRealDay(){ DS_DAY_OVERRIDE=null; dsRender(); }
function dsRenderDayPicker(){
  var pickHost=document.getElementById('ds-daypick'); var bannerHost=document.getElementById('ds-dayswitched-wrap');
  if(!pickHost)return;
  var realKey=dsRealSessionKey(activeDate);
  var activeKey=DS_DAY_OVERRIDE||realKey;
  pickHost.innerHTML=DS_ORDER.map(function(d){
    var cls='ds-daypill'+(d===realKey?' is-real':'')+(d===activeKey?' is-active':'');
    return '<button class="'+cls+'" onclick="dsPickDay(\''+d+'\')">'+DS_DAYLABEL[d]+(d===realKey?'<span class="ds-daydot"></span>':'')+'</button>';
  }).join('');
  if(bannerHost){
    if(DS_DAY_OVERRIDE && DS_DAY_OVERRIDE!==realKey){
      bannerHost.innerHTML='<div class="ds-dayswitched"><span>Viewing '+DS_DAYLABEL[DS_DAY_OVERRIDE]+'\u2019s session \u2014 today is really '+DS_DAYLABEL[realKey]+'</span><button onclick="dsBackToRealDay()">Back to today</button></div>';
    } else {
      bannerHost.innerHTML='';
    }
  }
}
var DS_MOBILITY={"key": "mobility", "title": "Joint Mobility", "accent": "#a78bfa", "meta": "CARs + PAILs/RAILs · daily", "blurb": "Controlled circles to own each joint, then PAILs/RAILs to build strength at end range. Keep contractions to ~60–70%, symmetric and braced — back off anything sharp, especially around the SI joint.", "moves": [{"id": "mob-hip", "name": "Hips — CARs + PAILs/RAILs", "rx": "~4 min", "cal": 20, "demo": "hipcircle", "log": "done", "target": "Hip joint", "equip": "Floor / wall", "setup": "CARs first: on all fours or standing tall, lift one knee and trace the biggest slow circle the hip can make — 2–3 each direction, ribs down, nothing else moving. Then run the PAILs/RAILs below in a deep hip end range (90/90 fold or pigeon)."}, {"id": "mob-9090", "name": "Seated 90/90 Hip Transitions", "rx": "8 transitions/side", "cal": 15, "demo": "ninetytransition", "log": "setsreps", "sets": 1, "target": "Hip Rotation", "equip": "Floor", "setup": "Sit with the front leg bent 90 at the hip and knee, shin angled away (external rotation), back leg bent 90 behind you, shin angled back (internal rotation). Stay tall through the spine — don’t lean back to cheat range. Lift the hips slightly and rotate the whole base to switch sides, swapping which hip is in and which is out. 8 slow transitions per side. Keep it controlled and pain-free — this is rotational range, not a deep static hold, so back off anything sharp near the SI joint."}, {"id": "mob-shoulder", "name": "Shoulders — CARs + PAILs/RAILs", "rx": "~4 min", "cal": 18, "demo": "shouldercar", "log": "done", "target": "Shoulder joint", "equip": "Wall / doorway", "setup": "CARs first: stand tall, one arm draws the largest slow circle it can — reach overhead, rotate, sweep behind — ribs down, 2–3 each way. Then run PAILs/RAILs at an end-range reach (overhead, or a doorway chest opener)."}, {"id": "mob-spine", "name": "Spine — CARs + PAILs/RAILs", "rx": "~4 min", "cal": 18, "demo": "catcow", "log": "done", "target": "Full spine", "equip": "Floor", "setup": "CARs first: slow segmental cat-cow moving one vertebra at a time, then gentle rotations and side-bends through the whole spine. Then run PAILs/RAILs gently — low intensity here, this is near your SI joint."}]};
var DS_PR={"y-swan": {"settle": "Fold over the front shin to your honest end range — weight even, hips square, breathe.", "pail": "Press the front shin and outer hip down into the floor — contract the glute and outer hip you feel stretching. Ramp to ~60–70% over 10s and hold.", "rail": "Switch the effort: gently draw the front knee down and fold a touch deeper using your hip — pull yourself into more range."}, "y-dragon": {"settle": "Sink the hips low and forward to your end range, back knee grounded, torso tall.", "pail": "Drag the back knee forward into the floor isometrically (it won't move) — contract the front-of-hip that's stretching. Ramp to ~60–70%.", "rail": "Switch: squeeze the back glute and press the hips further forward into extension — pull yourself deeper."}, "y-cat": {"settle": "Round forward over the legs to your end range, let the spine drape, breathe.", "pail": "Press the backs of the legs and heels down into the floor — contract the hamstrings that are stretching. Ramp to ~60–70%.", "rail": "Switch: engage the quads and hip flexors to actively fold yourself deeper over the legs."}, "m-9090": {"settle": "Half-kneel, hips square, shift forward to your honest end range.", "pail": "Drag the back knee forward into the floor isometrically — contract the front-of-hip that's stretching. Ramp to ~60–70%.", "rail": "Switch: squeeze the back glute and push the hips further forward into extension."}, "p-9090": {"settle": "Half-kneel, hips square, shift forward to your honest end range.", "pail": "Drag the back knee forward into the floor isometrically — contract the front-of-hip that's stretching. Ramp to ~60–70%.", "rail": "Switch: squeeze the back glute and push the hips further forward into extension."}, "mob-hip": {"settle": "Settle into a deep hip end range — a 90/90 front-leg fold or a pigeon. Breathe to your honest limit.", "pail": "Press the stretching hip down and into the floor — contract the tissue at length, ramp to ~60–70%.", "rail": "Switch: use the opposite hip muscles to pull yourself deeper into the range."}, "mob-shoulder": {"settle": "Take the shoulder to an end-range reach — overhead, or a doorway chest opener. Find your honest limit.", "pail": "Press the arm into the wall or doorway — contract the front-of-shoulder that's stretching, ramp to ~60–70%.", "rail": "Switch: use the back-of-shoulder muscles to pull the arm further into range."}, "mob-spine": {"settle": "Take the spine to a gentle end range of rotation or flexion — easy, never forced.", "pail": "Lightly contract into the stretch — ~50–60% only, keep it gentle near the SI joint.", "rail": "Switch: gently use the opposing muscles to ease a touch deeper. Stop at anything sharp.", "settleSecs": 60}};



/* ===================== DAILY SESSION — render + logging (integrated) ===================== */

DS_MOBILITY.moves.push({id:"mob-elbow",name:"Elbow \u2014 Eccentric Wrist Rehab",rx:"3\u00d715",cal:12,demo:"wristecc",log:"setsreps",sets:3,target:"Medial epicondyle (golfer's elbow)",equip:"2 lb dumbbell or light band",cue:"Slow on the lower \u2014 this is the rehab that actually works",setup:"Forearm resting on your thigh, palm up, light weight in hand. Help it up with the other hand, then lower the wrist slowly over 3\u20134 seconds using only the working side. 3\u00d715, most days. A mild ache through the forearm is fine; sharp pain means lighten it. This loaded eccentric is the evidence-based fix for golfer's elbow."});
DS_MOBILITY.moves.push({id:"mob-squathold",name:"Deep Squat Hold \u2014 log seconds",rx:"1 \u00d7 max hold, daily",cal:15,demo:"squat",log:"setsreps",sets:1,target:"Quads \u00b7 Ankles \u00b7 Hip mobility \u00b7 Endurance",equip:"Bodyweight",cue:"Breathe steadily throughout \u2014 don't brace or hold your breath. Put the seconds you held into the Reps box and beat last time.",setup:"Feet about shoulder-width, heels flat, sink into the deepest comfortable squat \u2014 hips below knees if mobility allows. Rest elbows inside the knees or arms forward for balance. Time how long you hold before standing up or losing form, then log that number of seconds in the Reps box. Progress slowly \u2014 add 15\u201330 seconds every few sessions rather than chasing big jumps. Building from ~5 minutes toward a 30-minute hold is a months-long endurance goal; consistency daily matters more than any single session."});
var DS_PULLUP={key:"pullup",title:"Pull-Up Progression",accent:"#7dd3fc",meta:"toward your first rep \u00b7 alternating days",blurb:"Your road to the first unassisted pull-up. Log each drill so the numbers climb \u2014 that climb is the progress. Take the hardest drill close to failure; ease off if the elbow flares.",moves:[
 {id:"pu-hang",name:"Dead Hang \u2014 log seconds",rx:"3 \u00d7 max hold",cal:10,demo:"deadhang",log:"setsreps",sets:3,target:"Grip \u00b7 Shoulders \u00b7 Lats",equip:"Monkey bars",cue:"Shoulders active, pulled down away from your ears \u2014 don't just dangle",setup:"Hang from the bar, full grip, arms straight, shoulder blades pulled down and back. Put the seconds you held into the Reps box and beat last time."},
 {id:"pu-scap",name:"Scapular Pulls",rx:"3\u00d78",cal:10,demo:"scappull",log:"setsreps",sets:3,target:"Lower Traps \u00b7 Lats",equip:"Monkey bars",cue:"Arms stay straight \u2014 the shoulder blades do all the work",setup:"Hang with straight arms. Without bending the elbows, pull the shoulder blades down to lift your chest a couple inches, then lower with control. This is the very start of the pull."},
 {id:"pu-neg",name:"Negatives \u2014 log slow seconds",rx:"3\u00d73",cal:15,demo:"pullneg",log:"setsreps",sets:3,target:"Full pulling chain",equip:"Monkey bars",cue:"Fight gravity the whole way \u2014 slower is the whole point",setup:"Jump or step to the top with your chin over the bar, then lower as slowly as you can. Log the seconds the slow part lasted in Reps \u2014 longer negatives over the weeks means you're nearly strong enough to pull up."},
 {id:"pu-band",name:"Band-Assisted Pull-ups",rx:"3\u00d75",cal:15,demo:"pullband",log:"setsreps",sets:3,target:"Full pulling chain",equip:"Tube band over the bar",cue:"Elbows drive down and back, chest toward the bar",setup:"Loop a band over the bar, foot or knee in it. Do full pull-ups, logging reps and which band in the weight box. The progression: same reps on a lighter band over time, until you need none."}
]};
function dsSetRir(id,v){ var st=dsItemState(id); st._rir=(st._rir===v?null:v); dsSaveUI(); dsRender(); }
function dsBlockWeek(){ try{ var s=store.get("ds_start"); if(!s){ s=todayKey(); store.set("ds_start",s); } var a=new Date(s+"T12:00:00"), b=new Date(activeDate+"T12:00:00"); var w=Math.floor((b-a)/(7*86400000)); return w<0?0:w; }catch(e){ return 0; } }

var DS_UI={}; try{DS_UI=JSON.parse(store.get("ds_ui")||"{}");}catch(e){DS_UI={};}
var DS_SWAPS={}; try{DS_SWAPS=JSON.parse(store.get("ds_swaps")||"{}");}catch(e){DS_SWAPS={};}
function dsSaveUI(){ try{store.set("ds_ui",JSON.stringify(DS_UI));}catch(e){} }
function dsSaveSwaps(){ try{store.set("ds_swaps",JSON.stringify(DS_SWAPS));}catch(e){} }
function dsDayState(){ if(!DS_UI[activeDate])DS_UI[activeDate]={}; return DS_UI[activeDate]; }
function dsItemState(id){ var d=dsDayState(); if(!d[id])d[id]={sets:[]}; if(!d[id].sets)d[id].sets=[]; return d[id]; }
var ds_timers={}; // {id: {interval, left, done}} — interval is null while paused, left persists across pause/resume, done survives re-renders until marked/restarted
function dsTimerLabel(id,secs){
  var t=ds_timers[id];
  if(!t) return {cls:'', txt:'\u23F1 Start '+dsMMSS(secs)};
  if(t.done) return {cls:'', txt:'\u2713 done \u2014 mark it'};
  if(t.interval) return {cls:'ds-run', txt:'\u23F8 '+dsMMSS(t.left)};
  return {cls:'', txt:'\u25B6 Resume '+dsMMSS(t.left)};
}
function dsTimerPaint(id,secs){
  var btn=document.getElementById('ds-t-'+id); if(!btn)return;
  var s=dsTimerLabel(id,secs);
  btn.classList.toggle('ds-run', s.cls==='ds-run');
  btn.textContent=s.txt;
}
function dsStartTimer(id,secs){
  var t=ds_timers[id];
  if(t && t.done){ delete ds_timers[id]; t=null; } // restart after a completed hold
  if(t && t.interval){
    // Currently running → pause, keep remaining time
    clearInterval(t.interval); t.interval=null;
    dsTimerPaint(id,secs);
    return;
  }
  if(!t){ t=ds_timers[id]={interval:null,left:secs,done:false}; }
  // Currently paused or fresh → start/resume counting down from t.left
  t.interval=setInterval(function(){
    t.left--;
    if(t.left<=0){
      clearInterval(t.interval); t.interval=null; t.done=true;
      dsTimerPaint(id,secs);
      dsToast('Hold complete');
      return;
    }
    dsTimerPaint(id,secs);
  },1000);
  dsTimerPaint(id,secs);
}

function dsAllItems(){ var sk=dsSessionKey(activeDate); var items=DS_SESSIONS[sk].moves.concat(DS_MORNING.moves,DS_PRE.moves,DS_YIN.moves,DS_MOBILITY.moves,DS_PULLUP.moves,DS_ATG.moves); if(sk==='wed'||sk==='thu')items=items.concat(DS_DESK.moves); if(DS_FINISHER_DAYS[sk]&&DS_HIIT_MAP[sk])items=items.concat(DS_HIIT_MAP[sk].moves); items=items.concat(dsCustomMoves(sk)); return items; }
/* Items that count toward the daily done/total bar: the session, custom set, and the day's Focus block only. Optional extras log normally but don't inflate the target. */
function dsVisibleItems(){ var sk=dsSessionKey(activeDate); var items=DS_SESSIONS[sk].moves.slice(); items=items.concat(dsCustomMoves(sk)); var f=dsFocusBlock(sk); if(f)items=items.concat(f.moves); var seen={},out=[]; items.forEach(function(m){ if(!seen[m.id]){seen[m.id]=1;out.push(m);} }); return out; }
function dsRawItem(id){ var a=dsAllItems(); for(var i=0;i<a.length;i++){ if(a[i].id===id)return a[i]; } return null; }

// ── CUSTOM SET (user-built, day-assigned) ───────────────────────────────
function dsMasterPool(){
  var pool=[]; var seen={};
  var groups=[];
  DS_ORDER.forEach(function(d){ groups.push(DS_SESSIONS[d].moves); });
  groups.push(DS_MORNING.moves,DS_PRE.moves,DS_YIN.moves,DS_MOBILITY.moves,DS_PULLUP.moves,DS_DESK.moves,DS_ATG.moves,DS_HIIT_MON.moves,DS_HIIT_TUE.moves,DS_HIIT_THU.moves,DS_HIIT_FRI.moves);
  groups.forEach(function(arr){
    arr.forEach(function(m){ if(m && m.id && !seen[m.id]){ seen[m.id]=1; pool.push(m); } });
  });
  return pool;
}
function dsMasterLookup(id){ var p=dsMasterPool(); for(var i=0;i<p.length;i++){ if(p[i].id===id) return p[i]; } return null; }
var DS_CUSTOM={}; try{ DS_CUSTOM=JSON.parse(store.get("ds_custom")||"{}"); }catch(e){ DS_CUSTOM={}; }
function dsCustomSave(){ try{ store.set("ds_custom", JSON.stringify(DS_CUSTOM)); }catch(e){} }
function dsCustomMoves(dayKey){
  var ids=DS_CUSTOM[dayKey]||[];
  return ids.map(function(id){ return dsMasterLookup(id); }).filter(Boolean);
}

// ── CUSTOM SET BUILDER ───────────────────────────────────────────────────
var DS_CUSTOM_DAYS={}; // working selection of days while builder is open: {mon:true, wed:true, ...}
var DS_CUSTOM_PICK=[]; // working ordered list of move ids while builder is open

function dsCustomOpen(){
  var sk=dsSessionKey(activeDate);
  DS_CUSTOM_PICK=(DS_CUSTOM[sk]||[]).slice();
  DS_CUSTOM_PICK_ORIGINAL=DS_CUSTOM_PICK.slice();
  DS_CUSTOM_DAYS={};
  if(DS_CUSTOM_PICK.length){
    // Pre-check every day that currently holds this exact same set, not just the day we opened from.
    DS_ORDER.forEach(function(d){
      if(DS_CUSTOM[d] && arraysEqualDS(DS_CUSTOM[d], DS_CUSTOM_PICK)) DS_CUSTOM_DAYS[d]=true;
    });
  }
  document.getElementById("ds-custom-search").value="";
  dsCustomRenderDayPicker();
  dsCustomRenderSelected();
  dsCustomRenderLibrary();
  document.getElementById("ds-custom-overlay").style.display="flex";
  document.getElementById("ds-custom-overlay").scrollTop=0;
}
function dsCustomClose(){
  dsCustomCommit();
  document.getElementById("ds-custom-overlay").style.display="none";
  dsRender();
}

// ── MEAL IDEAS ────────────────────────────────────────────────────────
var MEAL_IDEAS = [
  {id:"m1",  meal:"lunch",  name:"Build-a-Bowl (your everyday lunch)", protein:"~40g", tags:["fish-free","quick","family"],
    desc:"Greens or grain base + 6oz batch-cooked chicken + olive oil &amp; avocado + whatever veg is in the fridge. Same formula every day — only the veg changes."},
  {id:"m1b", meal:"lunch",  name:"Tuna &amp; white bean salad", protein:"~36g", tags:["fish-free","quick","solo"],
    desc:"Canned tuna, white beans, olive oil, lemon, red onion, over greens. A second lunch option for when chicken feels repetitive — counts toward your omega-3s too."},
  {id:"m1c", meal:"lunch",  name:"Tuna avocado lettuce wraps", protein:"~32g", tags:["fish-free","quick","solo"],
    desc:"Canned tuna mixed with mashed avocado instead of mayo, scooped into large lettuce leaves with diced tomato and cucumber. Light, no cooking required."},
  {id:"m1d", meal:"lunch",  name:"Mediterranean tuna pasta salad", protein:"~34g", tags:["fish-free","family"],
    desc:"Whole wheat pasta, canned tuna, cherry tomatoes, cucumber, olives, feta, olive oil and lemon dressing. Served cold — easy to make ahead for a few lunches at once and mild enough for the family."},
  {id:"m1e", meal:"lunch",  name:"Tuna-stuffed bell peppers", protein:"~32g", tags:["fish-free","produce","solo"],
    desc:"Canned tuna mixed with quinoa or rice, olive oil, herbs, stuffed into halved bell peppers and baked until the pepper softens. Built-in extra vegetable serving."},
  {id:"m2",  meal:"dinner", name:"Lemon-herb chicken, white beans &amp; spinach", protein:"~42g", tags:["fish-free","family"],
    desc:"Grilled or pan-seared chicken breast, white beans and tomatoes simmered in olive oil, spinach wilted in at the end. Lemon and herbs to finish."},
  {id:"m3",  meal:"dinner", name:"Turkey taco bowls", protein:"~42g", tags:["fish-free","solo","kid-friendly"],
    desc:"Ground turkey, black beans, rice, salsa, avocado. Good solo dinner — swap in ground beef instead if turkey isn't landing with the family."},
  {id:"m4",  meal:"dinner", name:"Chicken stir-fry, peppers &amp; brown rice", protein:"~40g", tags:["fish-free","family","quick"],
    desc:"Chicken, peppers, snap peas, brown rice, cooked in olive oil. Fast weeknight option, easily doubled for the family."},
  {id:"m5",  meal:"dinner", name:"Lean beef &amp; vegetable stew with chickpeas", protein:"~40g", tags:["fish-free","family"],
    desc:"90%+ lean ground beef or stew meat, root vegetables, chickpeas. One pot, makes great leftovers."},
  {id:"m6",  meal:"dinner", name:"Sheet pan chicken thighs, olives &amp; roasted veg", protein:"~40g", tags:["fish-free","family","quick"],
    desc:"Chicken thighs, olives, tomatoes, and whatever roasting veg you have, all on one tray in olive oil. Minimal cleanup."},
  {id:"m7",  meal:"dinner", name:"Turkey chili with beans", protein:"~40g", tags:["fish-free","solo","quick"],
    desc:"Ground turkey, mixed beans, peppers, a dollop of Greek yogurt on top instead of sour cream. Good freezer-backup solo meal — try ground beef if making it for the whole family."},
  {id:"m8",  meal:"dinner", name:"Pork tenderloin, sweet potato &amp; broccoli", protein:"~36g", tags:["fish-free","family"],
    desc:"Roasted pork tenderloin, roasted sweet potatoes, steamed broccoli. Simple, mild flavors that work for the whole table."},
  {id:"m9",  meal:"dinner", name:"Lentil &amp; chicken soup", protein:"~36g", tags:["fish-free","family","quick"],
    desc:"Chicken, lentils, vegetables, whole grain bread on the side. Good cold-weather rotation option, easy to stretch for leftovers."},
  {id:"m10", meal:"dinner", name:"Baked salmon, quinoa &amp; asparagus", protein:"~44g", tags:["fish","solo"],
    desc:"For when you're up for fish on your own plate: salmon, quinoa, roasted asparagus, lemon-olive oil drizzle. Not a family favorite — make a fish-free side dish for everyone else, or save this one for a night you're eating solo."},
  {id:"m11", meal:"dinner", name:"Shrimp &amp; white bean skillet", protein:"~38g", tags:["fish","solo","quick"],
    desc:"Shrimp cooks fast and tastes milder than most fish — garlic, tomatoes, white beans, crusty bread. Good low-commitment omega-3 dinner, but treat it as a solo or just-the-two-of-you option rather than a family meal."},
  {id:"m12", meal:"dinner", name:"Seared tuna steak, white beans &amp; greens", protein:"~40g", tags:["fish","solo","quick"],
    desc:"Fresh tuna steak (not canned) seared a few minutes per side, white beans and greens on the side in olive oil. Milder and meatier than salmon if you're more tolerant of tuna than other fish — worth testing as a solo dinner."},
  {id:"m13", meal:"snack",  name:"Greek yogurt &amp; berry bowl", protein:"~18g", tags:["fish-free","quick","produce","family"],
    desc:"Greek yogurt, mixed berries, a drizzle of honey, walnuts on top. Doubles as breakfast or an afternoon snack — easy to scale for the whole family."},
  {id:"m14", meal:"snack",  name:"Cottage cheese &amp; pineapple", protein:"~25g", tags:["fish-free","quick","produce","solo"],
    desc:"Cottage cheese with fresh or canned (in juice, not syrup) pineapple chunks. Sweet enough to feel like a treat, still protein-forward."},
  {id:"m15", meal:"snack",  name:"Hummus &amp; veggie plate", protein:"~8g", tags:["fish-free","quick","produce","family"],
    desc:"Hummus with carrots, bell peppers, cucumber, cherry tomatoes for dipping. Good side dish at dinner or a standalone snack — easy to put out for everyone at once."},
  {id:"m16", meal:"snack",  name:"Apple slices with almond butter", protein:"~7g", tags:["fish-free","quick","produce","kid-friendly"],
    desc:"Sliced apple with a tablespoon of almond butter. Simple, kid-friendly, and an easy way to work fruit in without much effort."},
  {id:"m17", meal:"snack",  name:"Roasted vegetable medley (side dish)", protein:"~4g", tags:["fish-free","produce","family"],
    desc:"Broccoli, bell peppers, zucchini, or whatever's in the fridge, tossed in olive oil and roasted. A standing side to pair with any of the dinner options above when you want more vegetables on the plate."},
  {id:"m18", meal:"snack",  name:"Mixed citrus &amp; walnut snack", protein:"~5g", tags:["fish-free","quick","produce","solo"],
    desc:"An orange or grapefruit with a small handful of walnuts. Good mid-afternoon option that leans into fruit and the omega-3s walnuts provide as a fish-free alternative."},
  {id:"m19", meal:"lunch",  name:"Chicken quesadillas", protein:"~35g", tags:["fish-free","quick","family","kid-friendly"],
    desc:"Shredded chicken and cheese in a whole wheat tortilla, pan-crisped until golden. Cheese-forward and no sauce needed, so it's an easy yes for picky eaters."},
  {id:"m20", meal:"lunch",  name:"Turkey &amp; cheese roll-ups", protein:"~28g", tags:["fish-free","quick","solo"],
    desc:"Deli turkey and cheese rolled in a whole wheat tortilla and sliced into pinwheels. Treat as a solo lunch or swap in chicken if making it for the table."},
  {id:"m21", meal:"lunch",  name:"Egg salad sandwiches", protein:"~22g", tags:["fish-free","quick","family","kid-friendly"],
    desc:"Hard-boiled eggs mashed with Greek yogurt and mustard instead of mayo, on whole grain bread. Eggs are a safe bet across the board."},
  {id:"m22", meal:"lunch",  name:"Chicken Caesar pasta salad", protein:"~32g", tags:["fish-free","family","kid-friendly"],
    desc:"Bowtie pasta, chicken breast, parmesan, a light Caesar dressing, with romaine served on the side so picky eaters can skip the greens."},
  {id:"m23", meal:"dinner", name:"Baked tilapia with lemon rice", protein:"~36g", tags:["fish","family","kid-friendly"],
    desc:"Tilapia baked in olive oil with lemon, served over rice with steamed broccoli. A milder fish that's already tested well with the family."},
  {id:"m24", meal:"dinner", name:"Chicken &amp; veggie skewers", protein:"~38g", tags:["fish-free","family","kid-friendly"],
    desc:"Cubed chicken, peppers, and zucchini on skewers, grilled or oven-roasted, served with rice. Pull a few pieces off plain for picky eaters."},
  {id:"m25", meal:"dinner", name:"One-pot chicken &amp; rice", protein:"~34g", tags:["fish-free","family","kid-friendly"],
    desc:"Chicken thighs simmered with rice, carrots, and peas in broth. Mild, comfort-food flavor that's easy to serve plain."},
  {id:"m26", meal:"dinner", name:"Turkey meatballs with whole wheat pasta", protein:"~36g", tags:["fish-free","solo"],
    desc:"Ground turkey meatballs (egg and oats as the binder, no breadcrumbs) over marinara and whole wheat pasta. Turkey isn't a family favorite — swap in beef for the table, or keep this one solo."},
  {id:"m27", meal:"dinner", name:"Tuna noodle bake", protein:"~32g", tags:["fish","family","kid-friendly"],
    desc:"Canned tuna and whole wheat egg noodles in a Greek yogurt-based sauce instead of canned soup, with peas and a light cheese topping. Built around two foods that already work for the family."},
  {id:"m28", meal:"dinner", name:"Chicken fajita bowls", protein:"~38g", tags:["fish-free","family","kid-friendly"],
    desc:"Sliced chicken, peppers, and onions sautéed in olive oil over rice with a toppings bar — cheese, avocado, salsa. Deconstructed so everyone builds their own."},
  {id:"m29", meal:"snack",  name:"Cheese &amp; whole grain crackers", protein:"~7g", tags:["fish-free","quick","family","kid-friendly"],
    desc:"String cheese or cheese cubes with whole grain crackers. About as easy a grab-and-go as it gets."},
  {id:"m30", meal:"snack",  name:"Yogurt parfait cups", protein:"~15g", tags:["fish-free","produce","family","kid-friendly"],
    desc:"Layered Greek yogurt, fruit, and granola in small cups, prepped Sunday for the week. Kids like the layered look as much as the taste."},
  {id:"m31", meal:"snack",  name:"Banana with nut butter", protein:"~5g", tags:["fish-free","quick","produce","family","kid-friendly"],
    desc:"Banana slices with peanut or almond butter, a few oats on top if you like. A reliable kid favorite that needs no prep."},
  {id:"m32", meal:"snack",  name:"Homemade trail mix", protein:"~6g", tags:["fish-free","quick","produce","family"],
    desc:"Walnuts or almonds, dried fruit, a few whole grain cereal pieces. Portable, and the walnuts add an omega-3 boost."},
  {id:"m33", meal:"snack",  name:"Mini egg muffins", protein:"~12g/2", tags:["fish-free","produce","family","kid-friendly"],
    desc:"Eggs baked in a muffin tin with cheese and diced veggies, batch-prepped Sunday. Kid-sized, grab-and-go protein."},
  {id:"m34", meal:"snack",  name:"Boiled eggs", protein:"~6g/egg", tags:["fish-free","quick","family","kid-friendly"],
    desc:"Hard-boiled eggs, batch-prepped Sunday alongside the egg muffins. The fastest grab-and-go protein in the house."},
];

function miFavs(){ try{ return JSON.parse(store.get("mi_favs")||"[]"); }catch(e){ return []; } }
function miToggleFav(id){
  var f=miFavs(); var i=f.indexOf(id);
  if(i>=0) f.splice(i,1); else f.push(id);
  store.set("mi_favs", JSON.stringify(f));
  miRender();
}
var MI_FILTERS=["fish-free","fish","quick","family","solo","kid-friendly","produce"];
var MI_ACTIVE_FILTERS=[];
function miToggleFilter(tag){
  var i=MI_ACTIVE_FILTERS.indexOf(tag);
  if(i>=0) MI_ACTIVE_FILTERS.splice(i,1); else MI_ACTIVE_FILTERS.push(tag);
  miRender();
}
function miRenderFilters(){
  document.getElementById("mi-filters").innerHTML = MI_FILTERS.map(function(t){
    var on=MI_ACTIVE_FILTERS.indexOf(t)>=0;
    return '<span class="tag" style="cursor:pointer;background:'+(on?"#4ade8022":"#88888816")+';color:'+(on?"#4ade80":"#aaa")+';border:1px solid '+(on?"#4ade8055":"#88888830")+'" onclick="miToggleFilter(\''+t+'\')">'+t+(on?" ✓":"")+'</span>';
  }).join(" ");
}
function miRender(){
  miRenderFilters();
  var favs=miFavs();
  var list=MEAL_IDEAS.filter(function(m){
    if(!MI_ACTIVE_FILTERS.length) return true;
    return MI_ACTIVE_FILTERS.every(function(t){ return m.tags.indexOf(t)>=0; });
  });
  var lunches=list.filter(function(m){return m.meal==="lunch";});
  var snacks=list.filter(function(m){return m.meal==="snack";});
  var dinners=list.filter(function(m){return m.meal==="dinner";});
  function card(m){
    var on=favs.indexOf(m.id)>=0;
    return '<div class="card" style="margin-bottom:10px">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">'+
        '<div class="card-title" style="margin-bottom:4px">'+m.name+'</div>'+
        '<button onclick="miToggleFav(\''+m.id+'\')" style="font-size:18px;line-height:1;background:transparent;border:none;color:'+(on?"#fbbf24":"#555")+';cursor:pointer;flex-shrink:0">'+(on?"★":"☆")+'</button>'+
      '</div>'+
      '<div style="font-size:12px;color:#9a9d8c;line-height:1.5;margin-bottom:6px">'+m.desc+'</div>'+
      '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'+
        '<span class="tag" style="background:#5eead416;color:#5eead4;border:1px solid #5eead430">'+m.protein+' protein</span>'+
        m.tags.map(function(t){return '<span class="tag" style="background:#88888816;color:#999;border:1px solid #88888830">'+t+'</span>';}).join("")+
      '</div></div>';
  }
  var html="";
  if(lunches.length) html += '<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#9a9d8c;margin:4px 0 8px">Lunch</div>'+lunches.map(card).join("");
  if(snacks.length) html += '<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#9a9d8c;margin:16px 0 8px">Snacks &amp; Sides</div>'+snacks.map(card).join("");
  if(dinners.length) html += '<div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#9a9d8c;margin:16px 0 8px">Dinner</div>'+dinners.map(card).join("");
  if(!list.length) html = '<div style="text-align:center;color:#555;font-size:12px;font-family:\'DM Mono\',monospace;padding:30px 0">No meals match those filters — try removing one.</div>';
  document.getElementById("mi-list").innerHTML = html;
}
function miOpen(){
  document.getElementById("mi-overlay").style.display="flex";
  document.getElementById("mi-overlay").scrollTop=0;
  miRender();
}
function miClose(){
  document.getElementById("mi-overlay").style.display="none";
}

// ── MY PLAN ───────────────────────────────────────────────────────────
// The plan is loaded from an external JSON file at runtime, not hardcoded
// here. Default source is plan.json sitting next to this index.html file
// (works automatically on GitHub Pages with zero setup). To use a
// different plan, set a custom URL in Settings > Plan Source, or replace
// plan.json itself. The file just needs a `sections` array; each section
// has a `type` of "stats", "text", "list", "rows", or "timeline" — see
// plan.json for the exact shape of each type.
var PLAN_URL = store.get('ft_plan_url') || "";
var PLAN_LOADED = false;
// Minimal fallback shown only if plan.json can't be fetched at all
// (e.g. first load while offline, or the file is missing/misnamed).
var PLAN_CONFIG = {
  title: "My Plan",
  subtitle: "",
  sections: [
    {type:"text", heading:"Plan not loaded", body:"Couldn't load plan.json. Check that the file exists next to index.html, or set a custom Plan JSON URL in Settings, then tap Reload Plan."}
  ]
};
function planSourceUrl(){
  return (PLAN_URL && PLAN_URL.trim()) ? PLAN_URL.trim() : "plan.json";
}
function planLoad(cb){
  fetch(planSourceUrl(), {cache:"no-store"})
    .then(function(r){ if(!r.ok) throw new Error("HTTP "+r.status); return r.json(); })
    .then(function(data){
      if(data && Array.isArray(data.sections)){ PLAN_CONFIG = data; PLAN_LOADED = true; }
      if(cb) cb(true);
    })
    .catch(function(err){
      console.warn("Plan load failed:", err);
      if(cb) cb(false);
    });
}
function planReload(){
  PLAN_URL = (document.getElementById("ft-plan-url")||{}).value || PLAN_URL;
  toast("Reloading plan\u2026");
  planLoad(function(ok){
    toast(ok ? "Plan reloaded" : "Couldn't load plan \u2014 check the URL/file");
    if(document.getElementById("plan-overlay").style.display==="flex") planRender();
  });
}
function planRenderSection(s){
  var h='<div class="card" style="margin-bottom:10px"><div class="card-title" style="margin-bottom:8px">'+escH(s.heading)+'</div>';
  if(s.type==="stats"){
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'+s.stats.map(function(st){
      return '<div style="background:#ffffff08;border-radius:8px;padding:8px 10px"><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.05em;margin-bottom:3px">'+escH(st.label)+'</div><div style="font-size:14px;font-weight:700;color:#cfe84f">'+escH(st.value)+'</div></div>';
    }).join("")+'</div>';
  } else if(s.type==="text"){
    h+='<div style="font-size:12px;color:#9a9d8c;line-height:1.6">'+escH(s.body)+'</div>';
  } else if(s.type==="list"){
    h+='<ul style="margin:0;padding-left:18px;font-size:12px;color:#9a9d8c;line-height:1.7">'+s.items.map(function(it){return '<li style="margin-bottom:6px">'+escH(it)+'</li>';}).join("")+'</ul>';
  } else if(s.type==="rows"){
    h+=s.rows.map(function(r){
      return '<div style="display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid #ffffff0d"><span style="font-size:11px;color:#888;flex-shrink:0">'+escH(r.a)+'</span><span style="font-size:12px;color:#ddd;text-align:right">'+escH(r.b)+'</span></div>';
    }).join("");
  } else if(s.type==="timeline"){
    h+=s.items.map(function(it){
      return '<div style="margin-bottom:10px"><div style="font-size:10px;color:#cfe84f;font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px">'+escH(it.when)+'</div><div style="font-size:12px;color:#9a9d8c;line-height:1.5">'+escH(it.what)+'</div></div>';
    }).join("");
  }
  h+='</div>';
  return h;
}
function planRender(){
  var html='<div style="text-align:center;margin-bottom:16px"><div style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.08em">'+escH(PLAN_CONFIG.subtitle||"")+'</div><div style="font-size:19px;font-weight:800;color:#f0f0f0;margin-top:4px">'+escH(PLAN_CONFIG.title||"My Plan")+'</div></div>';
  html += (PLAN_CONFIG.sections||[]).map(planRenderSection).join("");
  document.getElementById("plan-content").innerHTML = html;
}
function planOpen(){
  document.getElementById("plan-overlay").style.display="flex";
  document.getElementById("plan-overlay").scrollTop=0;
  if(PLAN_LOADED){ planRender(); return; }
  document.getElementById("plan-content").innerHTML = '<div style="text-align:center;color:#555;font-size:12px;font-family:\'DM Mono\',monospace;padding:30px 0">Loading plan\u2026</div>';
  planLoad(function(){ planRender(); });
}
function planClose(){
  document.getElementById("plan-overlay").style.display="none";
}
var DS_CUSTOM_PICK_ORIGINAL=null;
function dsCustomCommit(){
  // Any day that previously held this exact working set but got unchecked: clear it.
  DS_ORDER.forEach(function(d){
    var wasHome = DS_CUSTOM_PICK_ORIGINAL && DS_CUSTOM_PICK_ORIGINAL.length && DS_CUSTOM[d] && arraysEqualDS(DS_CUSTOM[d], DS_CUSTOM_PICK_ORIGINAL);
    if(wasHome && !DS_CUSTOM_DAYS[d]) delete DS_CUSTOM[d];
  });
  // Assign the current pick to every checked day; clear a checked day if the pick is now empty.
  DS_ORDER.forEach(function(d){
    if(DS_CUSTOM_DAYS[d]){
      if(DS_CUSTOM_PICK.length) DS_CUSTOM[d]=DS_CUSTOM_PICK.slice();
      else delete DS_CUSTOM[d];
    }
  });
  dsCustomSave();
}
function arraysEqualDS(a,b){ if(a.length!==b.length) return false; for(var i=0;i<a.length;i++){ if(a[i]!==b[i]) return false; } return true; }
function dsCustomRenderDayPicker(){
  var el=document.getElementById("ds-custom-daypicker"); if(!el) return;
  el.innerHTML=DS_ORDER.map(function(d){
    var on=!!DS_CUSTOM_DAYS[d];
    return '<button class="bs" style="padding:8px 14px;'+(on?'background:#5eead422;border-color:#5eead4;color:#5eead4':'')+'" onclick="dsCustomToggleDay(\''+d+'\')">'+DS_DAYLABEL[d]+'</button>';
  }).join("");
}
function dsCustomToggleDay(d){
  if(DS_CUSTOM_DAYS[d]) delete DS_CUSTOM_DAYS[d]; else DS_CUSTOM_DAYS[d]=true;
  dsCustomRenderDayPicker();
}
function dsCustomRenderSelected(){
  var el=document.getElementById("ds-custom-selected"), cnt=document.getElementById("ds-custom-count");
  if(cnt) cnt.textContent=DS_CUSTOM_PICK.length?("("+DS_CUSTOM_PICK.length+")"):"";
  if(!DS_CUSTOM_PICK.length){ el.innerHTML='<div style="text-align:center;color:#555;font-size:12px;font-family:\'DM Mono\',monospace;padding:14px 0">No exercises picked yet — add from the library below.</div>'; return; }
  el.innerHTML=DS_CUSTOM_PICK.map(function(id,i){
    var m=dsMasterLookup(id); if(!m) return "";
    return '<div class="row"><div style="flex:1;min-width:0"><div class="row-name">'+m.name+'</div><div class="row-sub">'+(m.target||"")+(m.equip?(" · "+m.equip):"")+'</div></div>'+
      '<div style="display:flex;gap:6px;flex-shrink:0">'+
      (i>0?'<button class="bs" onclick="dsCustomMove('+i+',-1)" style="padding:6px 10px">↑</button>':'')+
      (i<DS_CUSTOM_PICK.length-1?'<button class="bs" onclick="dsCustomMove('+i+',1)" style="padding:6px 10px">↓</button>':'')+
      '<button class="bd" onclick="dsCustomRemove(\''+id+'\')" style="padding:6px 10px">✕</button></div></div>';
  }).join("");
}
function dsCustomMove(i,dir){
  var j=i+dir; if(j<0||j>=DS_CUSTOM_PICK.length) return;
  var tmp=DS_CUSTOM_PICK[i]; DS_CUSTOM_PICK[i]=DS_CUSTOM_PICK[j]; DS_CUSTOM_PICK[j]=tmp;
  dsCustomRenderSelected();
}
function dsCustomRemove(id){
  DS_CUSTOM_PICK=DS_CUSTOM_PICK.filter(function(x){return x!==id;});
  dsCustomRenderSelected(); dsCustomRenderLibrary();
}
function dsCustomAdd(id){
  if(DS_CUSTOM_PICK.indexOf(id)===-1) DS_CUSTOM_PICK.push(id);
  dsCustomRenderSelected(); dsCustomRenderLibrary();
}
function dsCustomRenderLibrary(){
  var el=document.getElementById("ds-custom-library"); if(!el) return;
  var q=(document.getElementById("ds-custom-search").value||"").toLowerCase().trim();
  var pool=dsMasterPool();
  if(q) pool=pool.filter(function(m){ return (m.name+" "+(m.target||"")+" "+(m.slot||"")).toLowerCase().indexOf(q)!==-1; });
  if(!pool.length){ el.innerHTML='<div style="text-align:center;color:#555;font-size:12px;font-family:\'DM Mono\',monospace;padding:14px 0">No matches.</div>'; return; }
  el.innerHTML=pool.map(function(m){
    var picked=DS_CUSTOM_PICK.indexOf(m.id)!==-1;
    return '<div class="row" style="cursor:pointer" onclick="'+(picked?'dsCustomRemove':'dsCustomAdd')+'(\''+m.id+'\')">'+
      '<div style="flex:1;min-width:0"><div class="row-name">'+m.name+'</div><div class="row-sub">'+(m.target||"")+(m.equip?(" · "+m.equip):"")+'</div></div>'+
      '<div style="flex-shrink:0;font-size:18px;color:'+(picked?"#5eead4":"#555")+'">'+(picked?"✓":"+")+'</div></div>';
  }).join("");
}
function dsComputeActualSecs(item, st){
  if(item.log==="time"){ return (st.sets?st.sets.length:1) * (item.secs||30); }
  if(item.log==="setsreps" && st.sets && st.sets.length){
    var repsPerSet = parseInt(st.sets[st.sets.length-1].reps,10) || 8;
    if(st.sets.length>=2 && st.sets[0].ts && st.sets[st.sets.length-1].ts){
      var elapsed = (st.sets[st.sets.length-1].ts - st.sets[0].ts)/1000;
      return Math.round(elapsed + repsPerSet*DS_SEC_PER_REP);
    }
    return Math.round(st.sets.length*repsPerSet*DS_SEC_PER_REP + Math.max(0,st.sets.length-1)*DS_REST_SECS);
  }
  return null;
}
function dsActiveVariant(item){ if(!item.variants)return null; var idx=DS_SWAPS[item.id]; if(idx==null||idx===0)return null; return item.variants[idx-1]; }
function dsViewOf(item){ var v=dsActiveVariant(item); if(!v)return item;
  return {id:item.id,name:v.name,slot:item.slot,target:item.target,equip:v.equip||item.equip,rx:v.rx||item.rx,cal:item.cal,cue:v.cue||item.cue,demo:(v.demo!==undefined?v.demo:item.demo),log:item.log,sets:item.sets,secs:item.secs,perMin:item.perMin,defMin:item.defMin,variants:item.variants}; }

function dsComplete(id){ var item=dsRawItem(id);
  if(item && item.log==='setsreps'){ var target=item.sets||3; var st=dsItemState(id);
    if(st.sets.length>=target) return true;
    var d=getDay(); return d.exercises.some(function(e){return e.id==="sess_"+id && (e.sets==null || e.sets>=target);}); }
  var d=getDay(); return d.exercises.some(function(e){return e.id==="sess_"+id;}); }
function dsSyncPartialLog(item){ var day=getDay(), sid="sess_"+item.id, st=dsItemState(item.id);
  day.exercises=day.exercises.filter(function(e){return e.id!==sid;});
  if(!st.sets||!st.sets.length){ saveDay(day); return; }
  var target=item.sets||3; var frac=Math.min(st.sets.length/target,1);
  var ex={name:item.name,calories:Math.round((item.cal||0)*frac),type:"session",id:sid,sets:st.sets.length};
  var l=st.sets[st.sets.length-1]; ex.reps=String(l.reps); ex.load=l.load||""; if(l.rir!=null)ex.rir=l.rir;
  var actualSecs=dsComputeActualSecs(item, st); if(actualSecs!=null) ex.actualSecs=actualSecs;
  day.exercises.push(ex); saveDay(day); }
function dsLogComplete(item){ var day=getDay(), sid="sess_"+item.id, st=dsItemState(item.id);
  day.exercises=day.exercises.filter(function(e){return e.id!==sid;});
  var ex={name:item.name,calories:(item.log==="cardio"&&st._cal!=null?st._cal:item.cal),type:"session",id:sid};
  if(st.sets&&st.sets.length){ ex.sets=st.sets.length; var l=st.sets[st.sets.length-1]; ex.reps=String(l.reps); ex.load=l.load||""; if(l.rir!=null)ex.rir=l.rir; }
  else if(st.mins){ ex.reps=st.mins+" min"; }
  var actualSecs=dsComputeActualSecs(item, st); if(actualSecs!=null) ex.actualSecs=actualSecs;
  else if(item.log==="cardio" && st.mins){ ex.actualSecs=st.mins*60; }
  day.exercises.push(ex); saveDay(day);
}
function dsUnlog(id){ var day=getDay(), sid="sess_"+id; day.exercises=day.exercises.filter(function(e){return e.id!==sid;}); saveDay(day); }

function dsLastTime(id){ var sid="sess_"+id; var local=null;
  var keys=Object.keys(appData).filter(function(k){return k<activeDate&&appData[k]&&appData[k].exercises&&appData[k].exercises.some(function(e){return e.id===sid;});}).sort();
  if(keys.length){ var lk=keys[keys.length-1], arr=appData[lk].exercises;
    for(var i=arr.length-1;i>=0;i--){ if(arr[i].id===sid){ local={date:lk,reps:arr[i].reps,load:arr[i].load,rir:arr[i].rir}; break; } } }
  var cloud=(typeof DS_CLOUD_LAST!=="undefined")?DS_CLOUD_LAST[id]:null;
  if(cloud && cloud.date<activeDate && (!local || cloud.date>local.date)){
    return {reps:cloud.reps,load:cloud.load,rir:(cloud.rir!==""&&cloud.rir!=null?cloud.rir:null)};
  }
  return local ? {reps:local.reps,load:local.load,rir:local.rir} : null;
}
function dsMMSS(s){var m=Math.floor(s/60),x=s%60;return m+':'+String(x).padStart(2,'0');}
function dsDots(id,target){var st=dsItemState(id);var done=st.sets.length;var h='';for(var i=0;i<target;i++){h+='<span class="ds-dot '+(i<done?'on':'')+'"></span>';}return h;}

function dsRenderItem(rawItem,idx){
  var item=dsViewOf(rawItem); var st=dsItemState(item.id); var done=dsComplete(item.id);
  var cls='ds-move'+(st._open?' ds-open':'')+(done?' ds-done':'');
  var idxLabel=done?'\u2713':(idx==null?'\u2022':idx);
  var h='<div class="'+cls+'"><div class="ds-mhead" onclick="dsToggleCard(\''+item.id+'\')">';
  h+='<div class="ds-midx">'+idxLabel+'</div><div class="ds-minfo"><div class="ds-mname">'+item.name+'</div>';
  if(item.cue)h+='<div class="ds-mcue">'+item.cue+'</div>';
  var _target=item.target||'';
  var _equip=item.equip||'';
  var _rx=item.rx||'';
  h+='<div class="ds-mtags">'+(_target?'<span>'+_target+'</span>':'')+(_equip?'<span>'+_equip+'</span>':'')+'</div></div>';
  h+='<div style="text-align:right">'+(_rx?'<div class="ds-mrx">'+_rx+'</div>':'')+'<div class="ds-chev">\u25BC</div></div></div>';
  h+='<div class="ds-mbody">';
  var demoKey=item.demo||(DS_DEMOMAP[item.id]||null);
  if(demoKey&&DS_DEMOS[demoKey])h+='<div class="ds-demo">'+DS_DEMOS[demoKey]()+'<div class="ds-demo-cap">'+(DS_DEMOCAP[demoKey]||'looped demo of the motion')+'</div></div>';
  var varIdx=DS_SWAPS[item.id]||0;
  var setupTxt=(varIdx>0&&DS_VARIANT_SETUPS[item.id+"::"+varIdx])||rawItem.setup||DS_SETUPS[item.id];
  if(setupTxt)h+='<div class="ds-setup">'+setupTxt+'</div>';
  if(typeof DS_PR!=="undefined"&&DS_PR[item.id]){ h+='<button class="ds-prbtn" onclick="dsPRStart(\''+item.id+'\')">\u25B6 Guided PAILs/RAILs</button><div class="ds-prpanel" id="ds-prpanel-'+item.id+'"><div class="ds-prphase" id="ds-prphase-'+item.id+'"></div><div class="ds-prtime" id="ds-prtime-'+item.id+'"></div><div class="ds-prcue" id="ds-prcue-'+item.id+'"></div><button class="ds-prstop" onclick="dsPRStop(\''+item.id+'\')">stop</button></div>'; }
  if(rawItem.variants&&rawItem.variants.length){
    h+='<div class="ds-swap" onclick="dsToggleSwap(\''+item.id+'\')">\u21C4 Swap this exercise</div>';
    if(st._swapOpen){
      var sel=DS_SWAPS[item.id]||0;
      h+='<div class="ds-variants"><div class="ds-vh">Same slot: '+rawItem.slot+'</div>';
      h+='<div class="ds-vopt '+(sel===0?'ds-sel':'')+'" onclick="dsPickVariant(\''+item.id+'\',0)"><div class="ds-vn">'+rawItem.name+'</div><div class="ds-vc">'+rawItem.cue+'</div></div>';
      rawItem.variants.forEach(function(v,i){h+='<div class="ds-vopt '+(sel===i+1?'ds-sel':'')+'" onclick="dsPickVariant(\''+item.id+'\','+(i+1)+')"><div class="ds-vn">'+v.name+'</div><div class="ds-vc">'+(v.cue||'')+'</div></div>';});
      h+='</div>';
    }
  }
  if(item.log==='setsreps'){
    var target=item.sets||3; var lt=dsLastTime(item.id);
    if(lt)h+='<div class="ds-lastline">Last time: <b>'+lt.reps+' reps'+((lt.rir!=null)?(' \u00b7 '+(lt.rir>=4?'4+':lt.rir)+' RIR'):'')+(lt.load?(' \u00b7 '+lt.load):'')+'</b></div>';
    h+='<div class="ds-logrow"><span class="ds-lbl">Reps</span><div class="ds-stepper"><button class="ds-stepbtn" onclick="dsBump(\''+item.id+'\',-1)">\u2212</button><span class="ds-stepval" id="ds-reps-'+item.id+'">'+(st._reps||10)+'</span><button class="ds-stepbtn" onclick="dsBump(\''+item.id+'\',1)">+</button></div><input class="ds-wt" id="ds-load-'+item.id+'" placeholder="band / lb" value="'+(st._load||'')+'" oninput="dsRememberLoad(\''+item.id+'\')"><div class="ds-dots" id="ds-dots-'+item.id+'">'+dsDots(item.id,target)+'</div></div>';
    h+='<div class="ds-rirrow"><span class="ds-lbl">RIR</span>';for(var _r=0;_r<=4;_r++){h+='<span class="ds-rirchip'+(st._rir===_r?' on':'')+'" onclick="dsSetRir(\''+item.id+'\','+_r+')">'+(_r===4?'4+':_r)+'</span>';}h+='</div>';
    h+='<button class="ds-btn '+(done?'ds-lit':'')+'" onclick="dsLogSet(\''+item.id+'\','+target+')">'+(done?'\u2713 Logged \u2014 tap to clear':'Log set ('+st.sets.length+'/'+target+')')+'</button>';
  } else if(item.log==='time'){
    var _ts=dsTimerLabel(item.id,item.secs);
    h+='<div class="ds-timerwrap"><button class="ds-tbtn '+_ts.cls+'" id="ds-t-'+item.id+'" onclick="dsStartTimer(\''+item.id+'\','+item.secs+')">'+_ts.txt+'</button></div>';
    h+='<button class="ds-btn '+(done?'ds-lit':'')+'" onclick="dsMarkDone(\''+item.id+'\')">'+(done?'\u2713 Done':'Mark done')+'</button>';
  } else if(item.log==='cardio'){
    var mins=st.mins||item.defMin;
    h+='<div class="ds-logrow"><span class="ds-lbl">Min</span><div class="ds-stepper"><button class="ds-stepbtn" onclick="dsBumpMin(\''+item.id+'\',-5,'+item.perMin+')">\u2212</button><span class="ds-stepval" id="ds-min-'+item.id+'">'+mins+'</span><button class="ds-stepbtn" onclick="dsBumpMin(\''+item.id+'\',5,'+item.perMin+')">+</button></div><span class="ds-calprev" id="ds-calprev-'+item.id+'">\u2248'+Math.round(mins*item.perMin)+' kcal</span></div>';
    h+='<button class="ds-btn '+(done?'ds-lit':'')+'" onclick="dsLogCardio(\''+item.id+'\','+item.perMin+')">'+(done?'\u2713 Logged':'Log it')+'</button>';
  } else {
    h+='<button class="ds-btn '+(done?'ds-lit':'')+'" onclick="dsMarkDone(\''+item.id+'\')">'+(done?'\u2713 Done':'Mark done')+'</button>';
  }
  h+='</div></div>'; return h;
}
var DS_COLLAPSE={}; try{ DS_COLLAPSE=JSON.parse(store.get("ds_collapse")||"{}"); }catch(e){ DS_COLLAPSE={}; }
function dsSaveCollapse(){ try{ store.set("ds_collapse", JSON.stringify(DS_COLLAPSE)); }catch(e){} }
function dsSecKey(label){ return String(label).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,''); }
function dsToggleSection(key,evt){ if(evt)evt.stopPropagation(); DS_COLLAPSE[key]=!DS_COLLAPSE[key]; dsSaveCollapse(); dsRender(); }
function dsRenderSection(label,meta,accent,items,blurb){
  var key=dsSecKey(label);
  var collapsed=!!DS_COLLAPSE[key];
  var doneCount=0; items.forEach(function(it){ var v=dsViewOf(it); if(dsComplete(v.id))doneCount++; });
  var countLbl=items.length?(doneCount+'/'+items.length+' done'):'';
  var h='<div class="ds-seclabel'+(collapsed?' ds-collapsed':'')+'" onclick="dsToggleSection(\''+key+'\',event)">';
  h+='<div class="ds-t" style="color:'+accent+'">'+label+'</div><div class="ds-ln"></div>';
  h+='<div class="ds-meta">'+(collapsed?countLbl:meta)+'</div>';
  h+='<div class="ds-secchev">'+(collapsed?'\u25B6':'\u25BC')+'</div></div>';
  if(!collapsed){
    if(blurb)h+='<div class="ds-setup" style="margin:-2px 0 12px">'+blurb+'</div>';
    items.forEach(function(it,i){h+=dsRenderItem(it,i+1);});
  }
  return h;
}
var DS_REST_SECS = 60;
var DS_SEC_PER_REP = 3.5; // average concentric+eccentric time per controlled rep, used to estimate exercise duration

function dsEstimateSeconds(ex){
  if(ex.actualSecs!=null) return ex.actualSecs;
  var rawId = ex.id && ex.id.indexOf("sess_")===0 ? ex.id.slice(5) : ex.id;
  var item = rawId ? dsRawItem(rawId) : null;
  var minMatch = ex.reps && String(ex.reps).match(/(\d+(?:\.\d+)?)\s*min/i);

  if(item && item.log==="time"){
    var sets = ex.sets || 1;
    return sets * (item.secs || 30);
  }
  if(minMatch){
    return Math.round(parseFloat(minMatch[1]) * 60);
  }
  if(item && item.log==="setsreps" && ex.sets){
    var repsPerSet = parseInt(ex.reps, 10) || 8;
    return ex.sets * repsPerSet * DS_SEC_PER_REP + Math.max(0, ex.sets-1) * DS_REST_SECS;
  }
  if(ex.sets){ // custom/dropdown-logged, no matching item definition
    var reps2 = parseInt(ex.reps, 10) || 10;
    return ex.sets * reps2 * DS_SEC_PER_REP + Math.max(0, ex.sets-1) * DS_REST_SECS;
  }
  return 90; // flat fallback for anything unparseable (e.g. simple dropdown log with no set/rep detail)
}

function dsDailyTrainingSeconds(key){
  var day = getDay(key);
  return (day.exercises||[]).reduce(function(sum, ex){ return sum + dsEstimateSeconds(ex); }, 0);
}

function dsFormatTrainingTime(totalSecs){
  var mins = Math.round(totalSecs/60);
  if(mins < 60) return mins + " min";
  var h = Math.floor(mins/60), m = mins % 60;
  return h + "h " + m + "m";
}
var DS_TIME_CRUNCH = (function(){ try{ return store.get("ds_tc")==="1"; }catch(e){ return false; } })();
var DS_TC_KEEP_SLOTS = {"Warm-up":1,"Horizontal Push":1,"Vertical Push":1,"Horizontal Pull":1,"Vertical Pull":1,"Squat":1,"Hinge":1};
var DS_TC_KEEP_IDS = {"tue-bridge":1,"tue-lat":1};  // glute activation kept on crunch days (SI-joint priority)
function dsTcKeep(m){ return !!(DS_TC_KEEP_SLOTS[m.slot] || DS_TC_KEEP_IDS[m.id]); }
function dsToggleTimeCrunch(){ DS_TIME_CRUNCH=!DS_TIME_CRUNCH; try{ store.set("ds_tc", DS_TIME_CRUNCH?"1":"0"); }catch(e){} dsRender(); }
var DS_FINISHER_DAYS={mon:1,tue:1,thu:1,fri:1};
var DS_FINISHER_ON={}; try{ DS_FINISHER_ON=JSON.parse(store.get("ds_fin_on")||"{}"); }catch(e){ DS_FINISHER_ON={}; }
function dsToggleFinisher(){ var sk=dsSessionKey(activeDate); DS_FINISHER_ON[sk]=!DS_FINISHER_ON[sk]; try{ store.set("ds_fin_on", JSON.stringify(DS_FINISHER_ON)); }catch(e){} dsRender(); }
var DS_ATG_ON={}; try{ DS_ATG_ON=JSON.parse(store.get("ds_atg_on")||"{}"); }catch(e){ DS_ATG_ON={}; }
function dsToggleATG(){ var sk=dsSessionKey(activeDate); DS_ATG_ON[sk]=!DS_ATG_ON[sk]; try{ store.set("ds_atg_on", JSON.stringify(DS_ATG_ON)); }catch(e){} dsRender(); }
/* ── Focus rotation (Tier 2): one small accessory block per day ─────────── */
function dsFocusBlock(sk){
  function pick(list,ids){ return list.filter(function(m){return ids.indexOf(m.id)>=0;}); }
  var atgTrio=pick(DS_ATG.moves,["atg-tibraise","atg-extrot","atg-trap3"]);
  var map={
    mon:{title:"Focus: Pull-Up Progression",accent:DS_PULLUP.accent,moves:DS_PULLUP.moves,blurb:"Today's one accessory block. Pull-ups are your active goal and the biggest muscle-builder in the accessory pile — this plus the session is a complete day."},
    tue:{title:"Focus: ATG Strength Trio",accent:DS_ATG.accent,moves:atgTrio,blurb:"Today's one accessory block: tibialis, rotator cuff, lower traps. Ten minutes of structural work — this plus the session is a complete day."},
    wed:{title:"Focus: Squat Hold + Hips",accent:"#a78bfa",moves:pick(DS_MOBILITY.moves,["mob-squathold","mob-hip","mob-9090"]),blurb:"Low-load day, so the focus is your squat hold progression and hip work. This plus your walk/yoga is a complete day."},
    thu:{title:"Focus: Pull-Up Progression",accent:DS_PULLUP.accent,moves:DS_PULLUP.moves,blurb:"Second pull-up day of the week. This plus the session is a complete day."},
    fri:{title:"Focus: ATG Strength Trio",accent:DS_ATG.accent,moves:atgTrio,blurb:"Second structural day: tibialis, rotator cuff, lower traps. This plus the session is a complete day."},
    sat:null,
    sun:{title:"Focus: Squat Hold",accent:"#a78bfa",moves:pick(DS_MOBILITY.moves,["mob-squathold"]),blurb:"Rest day — just the squat hold to keep the streak alive. Nothing else required."}
  };
  return map[sk]||null;
}
var DS_MORE_OPEN=false;
function dsToggleMore(){ DS_MORE_OPEN=!DS_MORE_OPEN; dsRender(); }
function dsEstMin(moves){ var t=0; moves.forEach(function(m){ if(m.log==="setsreps"){ t+=(m.sets||3)*2; } else if(m.log==="time"){ t+=Math.ceil((m.secs||30)/60)*(m.sets||1)+1; } else if(m.log==="cardio"){ t+=(m.defMin||20); } else { t+=2; } }); return t; }
function dsRender(){
  var host=document.getElementById('ds-session'); if(!host)return;
  dsRenderDayPicker();
  var sk=dsSessionKey(activeDate); var SS=DS_SESSIONS[sk];
  var eb=document.getElementById('ds-eyebrow'); if(eb)eb.textContent=(activeDate===todayKey()?'Today':'Selected day')+' \u00b7 '+DS_DAYLABEL[sk];
  var tt=document.getElementById('ds-title'); if(tt)tt.textContent=SS.title;
  var sb=document.getElementById('ds-sub'); if(sb)sb.textContent=SS.sub;
  var dl=document.getElementById('ds-deload'); if(dl){var wk=dsBlockWeek()%6; if(wk===5){dl.textContent='Deload week \u2014 cut volume ~40%, keep it easy';dl.className='ds-deload warn';}else{dl.textContent='Training block \u00b7 week '+(wk+1)+' of 6';dl.className='ds-deload';}}
  var _allMoves=SS.moves;
  var _moves=DS_TIME_CRUNCH?_allMoves.filter(dsTcKeep):_allMoves;
  if(!_moves.length)_moves=_allMoves;  // no compounds to isolate (e.g. core/yoga day) -> show full
  var _estFull=dsEstMin(_allMoves), _estNow=dsEstMin(_moves), _tcOn=DS_TIME_CRUNCH;
  var _tcBtn='<div style="margin:0 0 14px;"><button onclick="dsToggleTimeCrunch()" style="width:100%;padding:11px 14px;border-radius:12px;font-family:\'DM Mono\',monospace;font-size:12px;letter-spacing:.04em;cursor:pointer;border:1px solid '+(_tcOn?'#e8c98a':'#ffffff1a')+';background:'+(_tcOn?'#e8c98a18':'transparent')+';color:'+(_tcOn?'#e8c98a':'#888')+';">'+(_tcOn?'\u26A1 Time Crunch ON \u2014 compounds only \u00b7 ~'+_estNow+' min  (tap for full)':'\u26A1 Time Crunch \u2014 full session ~'+_estFull+' min  (tap to trim)')+'</button></div>';
  var html=_tcBtn+dsRenderSection('The Session','',SS.accent,_moves,'');
  var _customMoves=dsCustomMoves(sk);
  if(_customMoves.length){
    html+=dsRenderSection('Custom Set',_customMoves.length+' move'+(_customMoves.length===1?'':'s')+' \u00b7 '+DS_DAYLABEL[sk],'#fbbf24',_customMoves,'Your own picks for '+DS_DAYLABEL[sk]+'. <span style="text-decoration:underline;cursor:pointer" onclick="dsCustomOpen()">Edit set</span>');
  }
  var _focus=dsFocusBlock(sk);
  if(_focus)html+=dsRenderSection(_focus.title,'',_focus.accent,_focus.moves,_focus.blurb);
  html+='<div style="margin:18px 0 0;"><button onclick="dsToggleMore()" style="width:100%;padding:11px 14px;border-radius:12px;font-family:\'DM Mono\',monospace;font-size:12px;letter-spacing:.04em;cursor:pointer;border:1px solid '+(DS_MORE_OPEN?'#ffffff40':'#ffffff1a')+';background:transparent;color:#888;">'+(DS_MORE_OPEN?'\u2212 Hide optional extras':'+ More (optional: morning, yin, mobility, HIIT, full ATG\u2026)')+'</button></div>';
  if(DS_MORE_OPEN){
    html+=dsRenderSection('Morning Activation',DS_MORNING.meta,DS_MORNING.accent,DS_MORNING.moves,DS_MORNING.blurb);
    if(sk==='wed'||sk==='thu')html+=dsRenderSection(DS_DESK.title,DS_DESK.meta,DS_DESK.accent,DS_DESK.moves,DS_DESK.blurb);
    if(DS_FINISHER_DAYS[sk]){
      var _finOn=!!DS_FINISHER_ON[sk];
      html+='<div style="margin:14px 0 0;"><button onclick="dsToggleFinisher()" style="width:100%;padding:11px 14px;border-radius:12px;font-family:\'DM Mono\',monospace;font-size:12px;letter-spacing:.04em;cursor:pointer;border:1px solid '+(_finOn?(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].accent:'#fb923c'):'#ffffff1a')+';background:'+(_finOn?(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].accent+'18':'#fb923c18'):'transparent')+';color:'+(_finOn?(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].accent:'#fb923c'):'#888')+';">'+(_finOn?'\u26A1 '+(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].title:'HIIT Finisher')+' ON \u2014 '+(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].meta:'')+' (tap to hide)':'\u26A1 + '+(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].title:'HIIT Finisher')+' \u2014 '+(DS_HIIT_MAP[sk]?DS_HIIT_MAP[sk].meta:'')+'')+'</button></div>';
      if(_finOn&&DS_HIIT_MAP[sk]){var _hiit=DS_HIIT_MAP[sk];html+=dsRenderSection(_hiit.title,_hiit.meta,_hiit.accent,_hiit.moves,_hiit.blurb);}
    }
    html+=dsRenderSection('Pre-Workout',DS_PRE.meta,DS_PRE.accent,DS_PRE.moves,DS_PRE.blurb);
    html+=dsRenderSection('Evening Yin',DS_YIN.meta,DS_YIN.accent,DS_YIN.moves,DS_YIN.blurb);
    html+=dsRenderSection('Joint Mobility',DS_MOBILITY.meta,DS_MOBILITY.accent,DS_MOBILITY.moves,DS_MOBILITY.blurb);
    html+=dsRenderSection('Pull-Up Progression',DS_PULLUP.meta,DS_PULLUP.accent,DS_PULLUP.moves,DS_PULLUP.blurb);
    var _atgOn=!!DS_ATG_ON[sk];
    html+='<div style="margin:14px 0 0;"><button onclick="dsToggleATG()" style="width:100%;padding:11px 14px;border-radius:12px;font-family:\'DM Mono\',monospace;font-size:12px;letter-spacing:.04em;cursor:pointer;border:1px solid '+(_atgOn?DS_ATG.accent:'#ffffff1a')+';background:'+(_atgOn?DS_ATG.accent+'18':'transparent')+';color:'+(_atgOn?DS_ATG.accent:'#888')+';">'+(_atgOn?'\u26A1 '+DS_ATG.title+' ON \u2014 '+DS_ATG.meta+' (tap to hide)':'\u26A1 + '+DS_ATG.title+' \u2014 '+DS_ATG.meta)+'</button></div>';
    if(_atgOn)html+=dsRenderSection(DS_ATG.title,DS_ATG.meta,DS_ATG.accent,DS_ATG.moves,DS_ATG.blurb);
  }
  host.innerHTML=html; dsUpdateStats();
}
function renderToday(){ try{dsRender();}catch(e){} }
function dsUpdateStats(){
  var vis=dsVisibleItems(), all=dsAllItems(), total=vis.length, done=0, burned=0, d=getDay();
  vis.forEach(function(it){ var e=d.exercises.filter(function(x){return x.id==="sess_"+it.id;})[0]; if(e)done++; });
  all.forEach(function(it){ var e=d.exercises.filter(function(x){return x.id==="sess_"+it.id;})[0]; if(e)burned+=(+e.calories||0); });
  var dn=document.getElementById('ds-done'); if(dn)dn.textContent=done+' / '+total;
  var bu=document.getElementById('ds-burned'); if(bu)bu.textContent=burned;
  var bar=document.getElementById('ds-bar'); if(bar)bar.style.width=(total?Math.round(done/total*100):0)+'%';
}

function dsToggleCard(id){ var st=dsItemState(id); st._open=!st._open; dsSaveUI(); dsRender(); }
function dsToggleSwap(id){ var st=dsItemState(id); st._swapOpen=!st._swapOpen; dsSaveUI(); dsRender(); }
function dsPickVariant(id,i){ DS_SWAPS[id]=i; dsSaveSwaps(); var st=dsItemState(id); st._swapOpen=false; dsSaveUI(); dsRender(); }
function dsBump(id,delta){ var st=dsItemState(id); st._reps=Math.max(1,(st._reps||10)+delta); var el=document.getElementById('ds-reps-'+id); if(el)el.textContent=st._reps; dsSaveUI(); }
function dsRememberLoad(id){ var st=dsItemState(id); var el=document.getElementById('ds-load-'+id); if(el){st._load=el.value;dsSaveUI();} }
function dsLogSet(id,target){
  var st=dsItemState(id);
  if(dsComplete(id)){ dsUnlog(id); st.sets=[]; dsSaveUI(); dsRender(); renderAll(); return; }
  if(st.sets.length>=target)return;
  var reps=st._reps||10; var le=document.getElementById('ds-load-'+id); var load=(le?le.value:'')||st._load||'';
  st.sets.push({reps:reps,load:load,rir:(st._rir!=null?st._rir:null),ts:Date.now()});
  var nowDone=st.sets.length>=target;
  dsSyncPartialLog(dsViewOf(dsRawItem(id)));
  if(typeof tgStartTimer==="function" && typeof DS_REST_SECS!=="undefined"){ try{ var _rm=dsViewOf(dsRawItem(id)); tgStartTimer(DS_REST_SECS, (_rm&&_rm.name)||"", "REST"); }catch(e){} }
  dsSaveUI(); dsRender(); renderAll();
}
function dsMarkDone(id){ if(ds_timers[id]){ if(ds_timers[id].interval)clearInterval(ds_timers[id].interval); delete ds_timers[id]; } if(dsComplete(id)){dsUnlog(id);} else {dsLogComplete(dsViewOf(dsRawItem(id)));} dsRender(); renderAll(); }
function dsBumpMin(id,delta,perMin){ var raw=dsRawItem(id); var st=dsItemState(id); var cur=st.mins||raw.defMin||30; cur=Math.max(5,cur+delta); st.mins=cur; dsSaveUI();
  var m=document.getElementById('ds-min-'+id); if(m)m.textContent=cur;
  var c=document.getElementById('ds-calprev-'+id); if(c)c.textContent='\u2248'+Math.round(cur*perMin)+' kcal'; }
function dsLogCardio(id,perMin){ var raw=dsRawItem(id); var st=dsItemState(id);
  if(dsComplete(id)){ dsUnlog(id); st._cal=null; dsSaveUI(); dsRender(); renderAll(); return; }
  var mins=st.mins||raw.defMin||30; st.mins=mins; st._cal=Math.round(mins*perMin);
  dsLogComplete(dsViewOf(raw)); dsSaveUI(); dsRender(); renderAll(); }
function dsResetDay(){ if(!confirm("Clear this day's session log (sets, completions, calories)?"))return;
  DS_UI[activeDate]={}; var day=getDay(); day.exercises=day.exercises.filter(function(e){return !(e.id&&String(e.id).indexOf("sess_")===0);}); saveDay(day);
  dsSaveUI(); dsRender(); renderAll(); }
function dsToast(msg){ var t=document.getElementById('ds-toast'); if(!t)return; t.textContent=msg; t.style.display='block'; clearTimeout(t._h); t._h=setTimeout(function(){t.style.display='none';},2200); }
var ds_pr={};
function dsPRSeq(id){ var p=DS_PR[id]; if(!p)return null;
  return [ {k:"Settle in",s:(p.settleSecs||90),c:p.settle||"Sink to your honest end range. Breathe slow and let the tissue soften."},
           {k:"PAIL \u2014 push into the stretch",s:20,c:p.pail},
           {k:"RAIL \u2014 pull deeper",s:20,c:p.rail},
           {k:"Relax \u2014 own the new range",s:15,c:"Release the contraction and breathe into the new space."} ]; }
function dsPRStart(id){ var seq=dsPRSeq(id); if(!seq)return; var panel=document.getElementById("ds-prpanel-"+id); if(!panel)return; panel.classList.add("on");
  if(ds_pr[id])clearInterval(ds_pr[id]); var st={i:0,left:seq[0].s};
  function paint(){ var a=document.getElementById("ds-prphase-"+id),b=document.getElementById("ds-prtime-"+id),c=document.getElementById("ds-prcue-"+id); if(!a||!b||!c){dsPRStop(id);return;} a.textContent=seq[st.i].k; b.textContent=dsMMSS(st.left); c.textContent=seq[st.i].c; }
  paint();
  ds_pr[id]=setInterval(function(){ st.left--; if(st.left<=0){ st.i++; if(st.i>=seq.length){ dsPRStop(id); var a=document.getElementById("ds-prphase-"+id),b=document.getElementById("ds-prtime-"+id),c=document.getElementById("ds-prcue-"+id); if(a)a.textContent="Done"; if(b)b.textContent="\u2713"; if(c)c.textContent="Nice \u2014 mark it done below."; dsToast("PAILs/RAILs complete"); return; } st.left=seq[st.i].s; dsToast(seq[st.i].k); } paint(); },1000); }
function dsPRStop(id){ if(ds_pr[id]){clearInterval(ds_pr[id]); delete ds_pr[id];} };

/* ═══════ block boundary ═══════ */

var WEIGHT = 231;
var YOGA_DEMOS={
  "mountain":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="52" x2="100" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="88" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="112" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="52" x2="90" y2="98" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="52" x2="110" y2="98" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "childs":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="140" y1="108" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="108" x2="105" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="98" x2="80" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="80" y1="108" x2="55" y2="116" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="80" cy="108" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "catcow":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="62" y1="122" x2="62" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="122" x2="140" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M62 98 Q100 90 140 98" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M62 98 Q100 84 140 98;M62 98 Q100 108 140 98;M62 98 Q100 84 140 98" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/></path>'+
    '<line x1="140" y1="98" x2="152" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="160" cy="86" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</svg>';},
  "downdog":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="108" y1="82" x2="70" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="108" y1="82" x2="150" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="108" cy="72" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "cobra":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="150" y1="122" x2="80" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="108" x2="95" y2="122" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="70" cy="96" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "sphinx":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="150" y1="122" x2="85" y2="114" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="85" y1="114" x2="85" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="72" cy="100" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "seated-forward":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="58" y1="122" x2="150" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="58" y1="122" x2="90" y2="102" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="102" x2="122" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="122" y1="116" x2="142" y2="120" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="122" cy="116" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "bridge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="58" y1="122" x2="85" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="85" y1="98" x2="130" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="130" y1="98" x2="150" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="50" cy="124" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "butterfly":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="122" x2="80" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="120" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="100" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="86" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "happy-baby":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="45" y1="124" x2="60" y2="124" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="124" x2="100" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="124" x2="95" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="90" x2="122" y2="86" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="95" y1="90" x2="108" y2="98" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="45" cy="124" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "reclined-butterfly":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="40" y1="118" x2="55" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="55" y1="118" x2="115" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="115" y1="118" x2="95" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="100" x2="112" y2="112" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="40" cy="118" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "corpse":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="35" y1="122" x2="58" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="58" y1="122" x2="150" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="58" y1="122" x2="48" y2="112" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<line x1="140" y1="114" x2="168" y2="106" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="35" cy="122" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "legs-up":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="4.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="50" y1="124" x2="60" y2="124" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="124" x2="150" y2="124" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="150" y1="124" x2="156" y2="40" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="158" y1="12" x2="158" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="50" cy="124" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "supine-twist":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="45" y1="118" x2="58" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="58" y1="118" x2="95" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="118" x2="125" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="125" y1="100" x2="140" y2="82" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="118" x2="78" y2="104" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="45" cy="118" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "staff":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="122" x2="150" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="122" x2="60" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="60" cy="70" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "puppy":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="135" y1="124" x2="135" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="135" y1="100" x2="95" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="108" x2="70" y2="120" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="120" x2="55" y2="124" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="70" cy="120" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "easy-pose":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="122" x2="78" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="122" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="100" y2="72" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="72" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "standing-forward":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="100" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="100" y2="92" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="92" x2="100" y2="126" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="92" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "low-lunge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="96" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="60" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="118" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="98" x2="118" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="88" y2="44" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="88" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "warrior1":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="96" x2="60" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="120" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="98" x2="120" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="88" y2="44" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="44" x2="70" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="88" y1="44" x2="106" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="88" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "warrior2":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="124" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="124" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="100" y2="46" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="68" y1="66" x2="132" y2="66" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "reverse-warrior":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="124" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="124" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="100" y2="46" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="128" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="46" x2="80" y2="40" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "ext-side-angle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="124" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="135" y1="118" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="132" y2="76" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="132" y1="76" x2="150" y2="58" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="132" cy="76" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "triangle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="124" x2="120" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="124" x2="120" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="98" x2="132" y2="58" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="120" y1="98" x2="95" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="132" y1="58" x2="140" y2="46" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="132" cy="58" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "warrior3":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="124" x2="95" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="98" x2="55" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="98" x2="135" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="55" y1="90" x2="38" y2="86" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="55" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "half-moon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="124" x2="90" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="92" x2="68" y2="80" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="90" y1="92" x2="130" y2="82" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="92" x2="108" y2="50" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="98" cy="84" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "chair":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="124" x2="88" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="100" x2="112" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="100" x2="100" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="52" x2="82" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="52" x2="118" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "eagle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="124" x2="96" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="96" y1="100" x2="108" y2="96" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="96" y1="100" x2="100" y2="48" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="48" x2="96" y2="52" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="48" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "tree":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="124" x2="100" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="80" x2="82" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="80" x2="100" y2="58" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="94" y1="68" x2="106" y2="68" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "pigeon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="72" y1="124" x2="110" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="118" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="118" x2="110" y2="62" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="110" cy="62" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "boat":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="105" y1="122" x2="150" y2="82" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="122" x2="70" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="86" x2="45" y2="92" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="70" cy="86" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "camel":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="124" x2="95" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="100" x2="118" y2="84" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="84" x2="128" y2="72" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="95" y1="100" x2="112" y2="118" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="128" cy="72" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "bow":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="125" y1="118" x2="100" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="116" x2="85" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="85" y1="100" x2="90" y2="90" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="125" y1="118" x2="118" y2="96" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="85" y1="100" x2="118" y2="96" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="90" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "locust":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="118" x2="60" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="118" x2="48" y2="112" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="118" x2="35" y2="106" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="118" x2="168" y2="104" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="48" cy="112" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "seated-twist":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="122" x2="95" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="116" x2="100" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="116" x2="108" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="82" x2="124" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="124" y1="76" x2="132" y2="88" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="92" y1="82" x2="80" y2="100" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="108" cy="72" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "rev-warrior":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="72" y1="124" x2="115" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="148" y1="124" x2="115" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="115" y1="100" x2="95" y2="64" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="64" x2="80" y2="112" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="95" y1="64" x2="116" y2="40" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="95" cy="64" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "thread-needle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="122" x2="60" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="122" x2="150" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="98" x2="150" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="60" y1="98" x2="130" y2="112" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="140" cy="114" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "pyramid":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="76" y1="124" x2="135" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="76" y1="124" x2="95" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="95" y1="104" x2="112" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="112" cy="98" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "wide-fold":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="58" y1="124" x2="100" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="142" y1="124" x2="100" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="108" x2="100" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="118" x2="88" y2="124" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<line x1="100" y1="118" x2="112" y2="124" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="100" cy="118" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "crescent-lunge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="124" x2="88" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="60" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="96" x2="88" y2="44" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="44" x2="72" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="88" y1="44" x2="104" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="88" cy="44" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "upward-dog":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="150" y1="124" x2="90" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="108" x2="60" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="108" x2="82" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="82" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "half-pigeon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="122" x2="108" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="108" y1="118" x2="148" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="108" y1="118" x2="88" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="88" y1="108" x2="72" y2="100" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="72" cy="100" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "dolphin":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="90" x2="70" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="118" x2="70" y2="128" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="150" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="95" cy="80" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "fish":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="122" x2="90" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="118" x2="118" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="98" x2="132" y2="116" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="118" y1="98" x2="145" y2="120" stroke="#9a9d8c" stroke-width="2" stroke-linecap="round"/>'+
    '<circle cx="132" cy="116" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "hero":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="122" x2="105" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="122" x2="100" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="76" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "cow-face":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="122" x2="85" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="115" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="100" y2="74" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="74" x2="80" y2="70" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="74" x2="122" y2="80" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="74" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "half-lord":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="72" y1="122" x2="98" y2="114" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="98" y1="114" x2="102" y2="116" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="98" y1="114" x2="118" y2="108" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="102" y1="116" x2="110" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="94" y1="82" x2="126" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="126" y1="76" x2="134" y2="90" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="94" y1="82" x2="82" y2="98" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="110" cy="72" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "crow":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="92" y1="120" x2="100" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="108" y1="120" x2="100" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="108" x2="100" y2="96" stroke="#9a9d8c" stroke-width="6" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="100" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="94" y1="96" x2="108" y2="90" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="106" y1="96" x2="112" y2="90" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="86" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "side-crow":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="120" x2="102" y2="106" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="110" y1="120" x2="102" y2="106" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="102" y1="106" x2="102" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="102" y1="98" x2="70" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="104" x2="48" y2="98" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="102" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "headstand":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="18" x2="100" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="85" y1="80" x2="115" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="18" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "forearm-stand":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="20" x2="100" y2="78" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="80" y1="98" x2="120" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="80" y1="98" x2="100" y2="78" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="120" y1="98" x2="100" y2="78" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="20" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "shoulder-stand":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="124" x2="80" y2="124" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="80" y1="124" x2="95" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="90" x2="95" y2="36" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="55" cy="124" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "plow":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="122" x2="95" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="104" x2="140" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="55" cy="124" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "wheel":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="124" x2="90" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="90" x2="130" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="130" y1="90" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="78" cy="98" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "king-pigeon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="68" y1="122" x2="105" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="116" x2="112" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="86" x2="118" y2="72" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="105" y1="116" x2="140" y2="78" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="140" y1="78" x2="124" y2="58" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="118" cy="72" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "side-plank":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="118" x2="95" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="108" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="108" x2="85" y2="80" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="102" cy="98" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "king-dancer":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="92" y1="124" x2="92" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="92" x2="105" y2="76" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="76" x2="112" y2="64" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="112" y1="64" x2="130" y2="52" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="105" y1="76" x2="108" y2="38" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="112" cy="64" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "firefly":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="88" y1="120" x2="100" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="112" y1="120" x2="100" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="100" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="158" y2="92" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "eight-angle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="120" x2="98" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="106" y1="120" x2="98" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="98" y1="108" x2="98" y2="92" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="98" y1="104" x2="130" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="130" y1="96" x2="140" y2="108" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="98" cy="92" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "peacock":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="120" x2="90" y2="108" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="108" x2="160" y2="104" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="172" cy="104" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "flying-pigeon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="118" x2="100" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="112" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="104" x2="100" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="140" y2="96" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "scale":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="86" y1="120" x2="100" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="114" y1="120" x2="100" y2="104" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="94" y1="104" x2="100" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="106" y1="104" x2="100" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="92" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "handstand":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="18" x2="100" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="85" y1="80" x2="115" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="18" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "wild-thing":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="62" y1="122" x2="88" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="106" x2="112" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="94" x2="126" y2="102" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="112" y1="94" x2="146" y2="68" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="126" cy="102" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "lotus":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="118" x2="85" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="118" x2="115" y2="122" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="118" x2="100" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="86" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "standing-split":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="95" y1="124" x2="95" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="95" y1="98" x2="90" y2="90" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="90" y1="90" x2="76" y2="128" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="95" y1="98" x2="120" y2="48" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="90" cy="90" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "splits":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="40" y1="122" x2="100" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="160" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="122" x2="100" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="86" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "chin-stand":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    ''+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="80" y1="124" x2="98" y2="106" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="98" y1="106" x2="122" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="100" x2="140" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="140" y1="86" x2="132" y2="112" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';}
};

var POSES = [

// ═══════════════════════════════════════════════════
// BEGINNER
// ═══════════════════════════════════════════════════
{id:"mountain",e:"🧍",n:"Mountain Pose",s:"Tadasana",l:"beginner",c:"standing",cpm:2.2,dur:60,
desc:"The foundation of all standing poses. Develops body awareness, alignment, and intentional standing.",
steps:["Stand feet together or hip-width, toes forward.","Distribute weight evenly across all four corners of both feet.","Engage thighs, lift kneecaps, tuck tailbone slightly.","Roll shoulders back and down, arms at sides, palms forward.","Lengthen through crown of head as if a string pulls you upward.","Breathe deeply and hold 30-60 seconds."],
cue:"Press all four corners into the earth. Feel tall and rooted.",
ben:["Posture","Body Awareness","Grounding","Focus","Balance"]},

{id:"childs",e:"🙇",n:"Child's Pose",s:"Balasana",l:"beginner",c:"restorative",cpm:1.8,dur:90,
desc:"A resting pose that gently stretches the hips, thighs, and lower back. Perfect between harder poses.",
steps:["Kneel with big toes touching, knees wide apart.","Sit hips back toward heels.","Walk hands forward, lower forehead to mat.","Extend arms forward or rest alongside body.","Let belly fall between thighs and breathe into your back.","Hold 30 seconds to 3 minutes."],
cue:"With each exhale, let hips sink heavier toward your heels.",
ben:["Hip Flexors","Lower Back","Stress Relief","Recovery","Breath"]},

{id:"catcow",e:"🐄",n:"Cat-Cow",s:"Marjaryasana-Bitilasana",l:"beginner",c:"seated",cpm:2.5,dur:60,
desc:"A gentle flow between two poses that warms up the spine. Excellent for back pain and as a morning warm-up.",
steps:["Start on hands and knees, wrists under shoulders, knees under hips.","COW: Inhale, drop belly, lift chest and tailbone, gaze forward.","CAT: Exhale, round spine to ceiling, tuck chin and tailbone.","Flow smoothly, matching each movement to your breath.","Move slowly — this is about spinal mobility, not speed.","Complete 8-12 rounds."],
cue:"Let your breath lead. Inhale to open, exhale to round.",
ben:["Spinal Mobility","Back Pain","Core Warm-Up","Breath","Hip Mobility"]},

{id:"downdog",e:"🐕",n:"Downward Dog",s:"Adho Mukha Svanasana",l:"beginner",c:"standing",cpm:3.2,dur:60,
desc:"One of yoga's most iconic poses. Strengthens arms while stretching the entire back of the body.",
steps:["Start in tabletop. Curl toes under, push hips up and back.","Straighten legs (slight bend OK if hamstrings are tight).","Press hands firmly, spread fingers wide.","Rotate inner elbows toward each other to protect shoulders.","Let head hang between arms — no neck strain.","Press heels toward floor and hold 30-60 seconds."],
cue:"Push the floor away with your hands. Keep a long spine.",
ben:["Hamstrings","Calves","Shoulders","Upper Back","Inversion"]},

{id:"cobra",e:"🐍",n:"Cobra Pose",s:"Bhujangasana",l:"beginner",c:"backbend",cpm:2.8,dur:45,
desc:"A gentle backbend that strengthens the spine and opens the chest. Counter-movement for forward-bent postures.",
steps:["Lie face down, hands under shoulders, elbows close to body.","Press tops of feet and pelvis into the mat.","Inhale and lift chest off the floor using back muscles first.","Use hands for light support — don't push yourself up.","Keep elbows slightly bent, shoulders away from ears.","Hold 15-30 seconds, lower slowly."],
cue:"Lift from your back, not from your arms. Slide forward and up.",
ben:["Lower Back","Chest","Shoulders","Posture","Energy"]},

{id:"sphinx",e:"🦁",n:"Sphinx Pose",s:"Salamba Bhujangasana",l:"beginner",c:"backbend",cpm:2.0,dur:60,
desc:"A gentler backbend than Cobra. Great for those with sensitive lower backs or as a warm-up to deeper backbends.",
steps:["Lie face down with legs extended, feet hip-width.","Bring elbows under shoulders, forearms on the mat parallel.","Press forearms down and lift chest and head.","Keep lower back relaxed — no squeezing the glutes.","Gaze forward or slightly up.","Hold 30-60 seconds."],
cue:"Press forearms into mat like you're pushing the floor away from you.",
ben:["Lower Back","Chest Opening","Spine","Posture","Gentle Backbend"]},

{id:"seated-forward",e:"🙏",n:"Seated Forward Fold",s:"Paschimottanasana",l:"beginner",c:"seated",cpm:2.0,dur:60,
desc:"A deep stretch for the entire back of the body. Calming for the nervous system and excellent for tight hamstrings.",
steps:["Sit with legs extended, feet flexed.","Inhale and sit tall, lengthening spine.","Exhale and hinge forward from hips — keep back flat as long as possible.","Reach for feet, ankles, or shins without rounding.","With each inhale lengthen, with each exhale fold deeper.","Hold 30-90 seconds. Never force or bounce."],
cue:"Lead with your chest forward, not just fold down.",
ben:["Hamstrings","Lower Back","Calves","Spine","Calming"]},

{id:"bridge",e:"🌉",n:"Bridge Pose",s:"Setu Bandha Sarvangasana",l:"beginner",c:"backbend",cpm:3.5,dur:45,
desc:"Strengthens the glutes, hamstrings, and lower back while opening the chest. Perfect antidote to sitting.",
steps:["Lie on back, knees bent, feet flat hip-width apart.","Arms flat at sides, palms down.","Press feet firmly and lift hips toward ceiling.","Squeeze glutes and press arms into mat.","Keep knees over heels — don't let them splay.","Hold 30-60 seconds, lower slowly. Repeat 2-3x."],
cue:"Drive through your heels, not your toes. Squeeze glutes hard.",
ben:["Glutes","Hamstrings","Lower Back","Hip Flexors","Chest"]},

{id:"butterfly",e:"🦋",n:"Butterfly Pose",s:"Baddha Konasana",l:"beginner",c:"seated",cpm:1.8,dur:90,
desc:"A gentle hip opener that stretches the inner thighs and groin. Works well for cyclists and desk workers.",
steps:["Sit with soles of feet together, knees out to sides.","Hold ankles or feet with both hands.","Sit tall and breathe into the inner groin.","Gently press knees toward the floor — don't force.","Option to hinge forward for a deeper stretch.","Hold 60-120 seconds."],
cue:"Breathe into your hips. Let gravity open them rather than forcing.",
ben:["Inner Thighs","Groin","Hip Opening","Lower Back","Circulation"]},

{id:"happy-baby",e:"👶",n:"Happy Baby",s:"Ananda Balasana",l:"beginner",c:"restorative",cpm:1.8,dur:90,
desc:"A deeply relaxing hip opener that releases tension in the lower back and inner thighs. Hard to do without smiling.",
steps:["Lie on your back. Exhale and bend knees to chest.","Grip outside edges of feet (or shins).","Open knees wider than torso, bringing toward armpits.","Flex feet, stacking ankles over knees.","Gently pull feet down as if pushing knees toward the floor.","Rock gently side to side. Hold 60-90 seconds."],
cue:"Let your spine melt into the mat. Rock gently like a content baby.",
ben:["Hips","Inner Thighs","Lower Back","Stress Relief","Recovery"]},

{id:"reclined-butterfly",e:"🌸",n:"Reclined Butterfly",s:"Supta Baddha Konasana",l:"beginner",c:"restorative",cpm:1.5,dur:180,
desc:"A fully passive hip opener. Place pillows under knees for support if needed. Perfect for end of practice.",
steps:["Lie on your back with soles of feet together.","Let knees fall out to the sides.","Place hands on belly or extend arms out to sides.","Close eyes and breathe deeply.","Option: place pillows or blocks under each knee for support.","Hold 2-5 minutes."],
cue:"There is nothing to do here. Simply breathe and release.",
ben:["Hips","Groin","Inner Thighs","Nervous System","Recovery"]},

{id:"corpse",e:"😴",n:"Corpse Pose",s:"Savasana",l:"beginner",c:"restorative",cpm:1.2,dur:300,
desc:"The most important pose in yoga. Deep rest that allows your body to absorb the benefits of practice. Never skip it.",
steps:["Lie flat on back, feet mat-width apart, toes falling out.","Arms slightly away from body, palms facing up.","Close eyes and let body become completely heavy.","Consciously relax each part from feet to face.","Breathe naturally. Return to breath when mind wanders.","Stay 3-10 minutes."],
cue:"Nowhere to go. Nothing to do. Just be here.",
ben:["Recovery","Stress Relief","Nervous System","Absorption","Rest"]},

{id:"legs-up",e:"🦵",n:"Legs Up the Wall",s:"Viparita Karani",l:"beginner",c:"restorative",cpm:1.5,dur:300,
desc:"A gentle inversion with massive recovery benefits. Reduces leg swelling and calms the nervous system.",
steps:["Sit sideways with one hip against the wall.","Swing legs up wall as you lie back.","Scoot hips as close to wall as comfortable.","Arms at sides or on belly, palms up.","Close eyes and fully relax.","Hold 5-15 minutes."],
cue:"Let gravity do all the work. Breathe and release.",
ben:["Leg Recovery","Circulation","Stress Relief","Lower Back","Blood Pressure"]},

{id:"supine-twist",e:"🌀",n:"Supine Spinal Twist",s:"Supta Matsyendrasana",l:"beginner",c:"twist",cpm:2.0,dur:60,
desc:"A passive twist that releases the spine and outer hips. Perfect way to end a practice or release after cycling.",
steps:["Lie on back. Draw right knee to chest.","Cross right knee over body to the left, letting it fall toward the floor.","Extend right arm out to the right, gaze right.","Keep both shoulders grounded — the twist happens in the spine.","Place left hand on right knee for a gentle assist.","Hold 30-60 seconds each side."],
cue:"Let shoulder blades melt into the floor. Don't force the twist.",
ben:["Spine","IT Band","Outer Hip","Lower Back","Digestion"]},

{id:"staff",e:"📏",n:"Staff Pose",s:"Dandasana",l:"beginner",c:"seated",cpm:2.0,dur:30,
desc:"The seated equivalent of Mountain Pose. Establishes proper alignment for all seated poses.",
steps:["Sit with legs extended straight in front of you.","Place hands on floor beside hips, fingers forward.","Flex feet toward you.","Sit tall — press sitting bones into floor and lengthen spine.","Press palms down to help lift the chest.","Hold 30-60 seconds."],
cue:"Sitting up straight is harder than it looks. Use your core.",
ben:["Posture","Core","Hamstrings","Body Awareness","Alignment"]},

{id:"puppy",e:"🐶",n:"Puppy Pose",s:"Uttana Shishosana",l:"beginner",c:"restorative",cpm:2.0,dur:60,
desc:"A heart-melting pose halfway between Child's and Downward Dog. Opens the chest and shoulders beautifully.",
steps:["Start in tabletop on hands and knees.","Walk hands forward while keeping hips over knees.","Lower chest and chin (or forehead) toward the mat.","Keep arms active — press into palms.","Let chest melt toward the floor.","Hold 30-60 seconds."],
cue:"Hips stay high over knees. Let your heart sink toward the earth.",
ben:["Chest","Shoulders","Spine","Upper Back","Hip Flexors"]},

{id:"easy-pose",e:"🧘",n:"Easy Pose",s:"Sukhasana",l:"beginner",c:"seated",cpm:1.5,dur:120,
desc:"A comfortable cross-legged seated position for meditation and breathing exercises. The starting point of many practices.",
steps:["Sit on floor or folded blanket for added height.","Cross legs comfortably at shins (not lotus).","Place hands on knees, palms up or down.","Sit tall — spine long, shoulders relaxed.","Close eyes or soften your gaze.","Hold as long as comfortable."],
cue:"Sit tall as if a thread lifts the crown of your head.",
ben:["Posture","Calming","Hip Flexibility","Focus","Meditation"]},

{id:"standing-forward",e:"🌊",n:"Standing Forward Fold",s:"Uttanasana",l:"beginner",c:"standing",cpm:2.5,dur:60,
desc:"A full-body forward fold that releases the hamstrings, calves, and spine. Calming and grounding.",
steps:["Stand with feet hip-width apart.","Exhale and hinge forward from hips, folding over legs.","Bend knees generously if hamstrings are tight.","Let head hang heavy — release neck completely.","Hold elbows and sway gently, or reach for the floor.","Hold 30-60 seconds."],
cue:"Let your head be the heaviest thing. Release everything downward.",
ben:["Hamstrings","Calves","Spine","Inversion Benefits","Calming"]},

{id:"low-lunge",e:"🏃",n:"Low Lunge",s:"Anjaneyasana",l:"beginner",c:"standing",cpm:3.2,dur:45,
desc:"A deep hip flexor opener that's essential for cyclists and runners. Also opens the chest and builds leg strength.",
steps:["From standing, step right foot forward into a lunge.","Lower left knee to the mat, untuck toes.","Adjust front knee to be directly over ankle.","Lift torso upright and raise arms overhead.","Sink hips down and forward — feel the hip flexor stretch.","Hold 30-60 seconds, repeat left side."],
cue:"Sink hips toward the floor. The more your hip drops, the deeper the stretch.",
ben:["Hip Flexors","Quads","Groin","Chest","Balance"]},

// ═══════════════════════════════════════════════════
// INTERMEDIATE
// ═══════════════════════════════════════════════════
{id:"warrior1",e:"⚔️",n:"Warrior I",s:"Virabhadrasana I",l:"intermediate",c:"standing",cpm:4.0,dur:45,
desc:"A powerful standing pose that builds leg and core strength while opening the hips and chest.",
steps:["Step left foot back 3-4 feet into a lunge.","Turn left foot out 45 degrees, press outer edge down.","Bend right knee over right ankle (aim for 90 degrees).","Square hips forward toward the front of the mat.","Raise arms overhead, palms facing each other.","Hold 30-45 seconds, repeat other side."],
cue:"Ground through the back foot. Feel warrior strength rising up.",
ben:["Quads","Glutes","Hip Flexors","Core","Shoulders"]},

{id:"warrior2",e:"🏹",n:"Warrior II",s:"Virabhadrasana II",l:"intermediate",c:"standing",cpm:4.2,dur:45,
desc:"The quintessential warrior pose. Opens hips, builds leg strength, challenges focus and steadiness.",
steps:["Feet wide (about 4 feet), right foot pointing right, left in slightly.","Bend right knee to 90 degrees over ankle.","Extend arms parallel to floor, reaching actively both ways.","Gaze over right middle finger — steady and focused.","Keep torso upright, not leaning forward or back.","Hold 30-45 seconds, repeat left side."],
cue:"Sink deep into the bent knee. Extend through both fingertips.",
ben:["Inner Thighs","Quads","Glutes","Shoulders","Stamina"]},

{id:"reverse-warrior",e:"🌈",n:"Reverse Warrior",s:"Viparita Virabhadrasana",l:"intermediate",c:"standing",cpm:3.8,dur:30,
desc:"A beautiful side stretch from Warrior II that opens the entire side body and builds lateral flexibility.",
steps:["From Warrior II with right knee bent.","Flip front palm up and reach right arm up and back.","Slide left hand down the back left leg.","Let the torso arc back and to the side in a long curve.","Keep the front knee bent at 90 degrees.","Hold 20-30 seconds, repeat other side."],
cue:"Create a long arc from your back heel to your fingertips.",
ben:["Side Body","Obliques","Hip Flexors","Chest","Shoulder Opening"]},

{id:"ext-side-angle",e:"📐",n:"Extended Side Angle",s:"Utthita Parsvakonasana",l:"intermediate",c:"standing",cpm:4.0,dur:30,
desc:"A lateral strengthening pose that opens the side body, strengthens the legs, and builds endurance.",
steps:["From Warrior II, lower right forearm to right thigh (or hand to floor outside foot).","Extend left arm over left ear, palm down — one long diagonal line.","Press outer edge of back foot firmly into mat.","Rotate top shoulder open toward the ceiling.","Gaze up at top hand or forward.","Hold 30 seconds, repeat other side."],
cue:"One long line from back foot to top fingertips. Open the chest to the ceiling.",
ben:["Side Body","Legs","Core","Chest","Stamina"]},

{id:"triangle",e:"📐",n:"Triangle Pose",s:"Trikonasana",l:"intermediate",c:"standing",cpm:3.5,dur:45,
desc:"A deep lateral stretch that opens the sides of the body, strengthens the legs, and improves balance.",
steps:["Feet wide, right foot right, left foot slightly in.","Extend arms parallel to floor.","Shift right hip back as you reach right hand to shin, ankle, or floor.","Extend left arm straight up toward ceiling.","Keep both legs straight. Gaze up at left hand.","Hold 30-45 seconds each side."],
cue:"Stack top hip over bottom. Open your chest to the ceiling.",
ben:["Hamstrings","IT Band","Side Body","Balance","Hip Opening"]},

{id:"warrior3",e:"🦅",n:"Warrior III",s:"Virabhadrasana III",l:"intermediate",c:"balance",cpm:4.5,dur:30,
desc:"A challenging balance pose that builds leg strength, core stability, and full-body coordination.",
steps:["Shift weight onto right foot from standing.","Lean torso forward as you lift left leg behind.","Aim for a T-shape — torso and lifted leg parallel to floor.","Arms extend forward, out to sides, or back alongside body.","Engage core and standing leg. Flex raised foot.","Hold 15-30 seconds each side."],
cue:"Reach through your raised heel as much as your extended arms.",
ben:["Balance","Core","Glutes","Hamstrings","Focus"]},

{id:"half-moon",e:"🌙",n:"Half Moon Pose",s:"Ardha Chandrasana",l:"intermediate",c:"balance",cpm:4.2,dur:30,
desc:"Combines strength, flexibility, and focus. Opens the hips and side body while challenging balance.",
steps:["From Triangle, bend right knee and place right hand on floor 12 inches in front of right foot.","Shift weight to right hand and foot.","Lift left leg parallel to floor, open left hip to ceiling.","Extend left arm toward ceiling.","Gaze at floor for stability or look up at top hand.","Hold 15-30 seconds each side."],
cue:"Stack hips and shoulders. Let the top side be free and open.",
ben:["Balance","Core","Hip Opening","Hamstrings","Focus"]},

{id:"chair",e:"💺",n:"Chair Pose",s:"Utkatasana",l:"intermediate",c:"standing",cpm:4.5,dur:30,
desc:"One of the most demanding standing poses. Burns calories, builds leg strength, and challenges mental fortitude.",
steps:["Stand with feet together or hip-width.","Inhale and raise arms overhead.","Exhale and bend knees deeply as if sitting into a chair.","Aim for thighs parallel to floor — or as low as you can go.","Keep chest lifted, weight in heels.","Hold 30-60 seconds. Feel the burn."],
cue:"Sit lower. Chest up. Arms active. Breathe through the discomfort.",
ben:["Quads","Glutes","Core","Ankles","Endurance"]},

{id:"eagle",e:"🦆",n:"Eagle Pose",s:"Garudasana",l:"intermediate",c:"balance",cpm:3.8,dur:30,
desc:"A complex balance pose that requires wrapping the limbs. Excellent for improving focus and coordination.",
steps:["Stand and shift weight to right foot.","Bend right knee slightly and cross left thigh over right.","Wrap left foot around right calf if possible.","Cross right arm under left at elbows, then wrap forearms, palms together.","Lift elbows to shoulder height and sink deeper.","Hold 20-30 seconds, repeat other side."],
cue:"Every wrap squeezes the midline. Breathe wide into your back.",
ben:["Balance","Hip Flexibility","Shoulder Mobility","Focus","Ankles"]},

{id:"tree",e:"🌳",n:"Tree Pose",s:"Vrksasana",l:"intermediate",c:"balance",cpm:3.2,dur:45,
desc:"The classic balance pose. Builds ankle stability, leg strength, and concentration. Great for developing focus.",
steps:["Stand on right foot. Bend left knee.","Place left foot on inner right thigh or calf (never on the knee).","Press foot into leg and leg back into foot.","Bring hands to heart center or raise overhead.","Fix gaze on a still point in front of you.","Hold 30-60 seconds, repeat other side."],
cue:"Find stillness in the ground. Your standing leg is the trunk — rooted.",
ben:["Balance","Leg Strength","Hip Flexibility","Focus","Posture"]},

{id:"pigeon",e:"🕊️",n:"Pigeon Pose",s:"Eka Pada Rajakapotasana",l:"intermediate",c:"seated",cpm:2.8,dur:90,
desc:"One of the deepest hip openers in yoga. Targets the piriformis and hip flexors — crucial for cyclists.",
steps:["From downward dog, bring right knee forward toward right wrist.","Lower right shin to floor at an angle.","Extend left leg straight back, knee and top of foot on floor.","Square hips forward as much as possible.","Stay upright on hands or fold forward over front shin.","Hold 60-120 seconds, repeat left side."],
cue:"Breathe into the tension. This is the hip opening cyclists need.",
ben:["Hip Flexors","Piriformis","IT Band","Lower Back","Psoas"]},

{id:"boat",e:"⛵",n:"Boat Pose",s:"Navasana",l:"intermediate",c:"core",cpm:5.0,dur:30,
desc:"An intense core strengthener targeting the abs, hip flexors, and lower back simultaneously.",
steps:["Sit with knees bent, feet flat.","Lean back slightly and lift feet off floor, balance on sitting bones.","Extend legs to 45 degrees (or straighten fully).","Extend arms forward parallel to floor, palms facing.","Keep chest lifted, spine long — do NOT round.","Hold 20-30 seconds. Rest and repeat 3-5 times."],
cue:"Lift through your chest, not just your legs. Core works as a unit.",
ben:["Core","Hip Flexors","Lower Back","Balance","Digestion"]},

{id:"camel",e:"🐪",n:"Camel Pose",s:"Ustrasana",l:"intermediate",c:"backbend",cpm:3.8,dur:30,
desc:"A deep chest and hip flexor opener. One of the best antidotes to phone and desk posture.",
steps:["Kneel with knees hip-width, tops of feet flat.","Hands on lower back, fingers pointing down.","Engage core, slowly arch back, opening chest to ceiling.","Reach back for heels one at a time if comfortable.","Keep hips over knees.","Hold 20-30 seconds. Come out slowly."],
cue:"Open your chest to the sky. Let your heart lead the way back.",
ben:["Chest","Hip Flexors","Spine","Posture","Energy"]},

{id:"bow",e:"🏹",n:"Bow Pose",s:"Dhanurasana",l:"intermediate",c:"backbend",cpm:4.5,dur:30,
desc:"A full backbend that simultaneously strengthens the back and stretches the front of the body.",
steps:["Lie face down, arms at sides.","Bend knees and reach back to grab ankles.","Inhale and lift chest and thighs simultaneously off the floor.","Rock on your belly if you can.","Keep knees hip-width — don't let them splay.","Hold 20-30 seconds, release, repeat 2-3 times."],
cue:"Kick feet into hands and hands away from feet — the tension creates the lift.",
ben:["Back Strength","Chest","Hip Flexors","Hamstrings","Posture"]},

{id:"locust",e:"🦗",n:"Locust Pose",s:"Salabhasana",l:"intermediate",c:"backbend",cpm:4.0,dur:30,
desc:"A prone backbend that directly strengthens the lower back — often neglected and very important.",
steps:["Lie face down, arms alongside body, palms facing up.","Forehead or chin on mat.","Inhale and simultaneously lift head, chest, arms, and legs.","Keep legs straight and together.","Reach actively through arms behind you.","Hold 20-30 seconds, lower, rest, repeat."],
cue:"Squeeze your inner thighs toward each other. Reach your fingertips toward your feet.",
ben:["Lower Back","Glutes","Hamstrings","Core","Posture"]},

{id:"seated-twist",e:"🌀",n:"Seated Spinal Twist",s:"Ardha Matsyendrasana",l:"intermediate",c:"twist",cpm:2.5,dur:60,
desc:"One of the most important twists. Detoxifying for the organs, releases the spine, and stretches the outer hips.",
steps:["Sit with legs extended. Bend right knee and cross foot over left leg, planting outside left knee.","Place right hand on the floor behind you.","Wrap left arm around right knee or hook elbow to knee.","Inhale to lengthen spine, exhale to twist right.","Hold 30-60 seconds, then switch sides."],
cue:"Inhale to grow tall, exhale to twist deeper. The spine must lengthen before it rotates.",
ben:["Spine","Outer Hip","Digestion","IT Band","Lower Back"]},

{id:"rev-warrior",e:"🌈",n:"Revolved Triangle",s:"Parivrtta Trikonasana",l:"intermediate",c:"twist",cpm:3.8,dur:30,
desc:"A challenging twist that combines balance, hamstring flexibility, and spinal rotation.",
steps:["Stand feet wide, right foot forward.","Bring left hand to outside of right foot or block.","Open right arm toward ceiling, twisting torso right.","Keep hips level and square as possible.","Keep both legs straight (slight bend in front knee is fine).","Hold 20-30 seconds each side."],
cue:"Lengthen your spine before you rotate. Roots before the branch can twist.",
ben:["Hamstrings","Spine","Balance","Detox","Hip Stability"]},

{id:"thread-needle",e:"🧵",n:"Thread the Needle",s:"Parsva Balasana",l:"intermediate",c:"twist",cpm:2.2,dur:60,
desc:"A gentle shoulder and upper back twist done from hands and knees. Excellent for tight shoulders.",
steps:["Start in tabletop on hands and knees.","Slide right arm under left arm along the floor, shoulder coming down.","Rest right cheek or temple on the mat.","Left arm stays extended or presses into floor for leverage.","Breathe into the right shoulder and upper back.","Hold 30-60 seconds, repeat other side."],
cue:"Let your shoulder melt into the mat. Breathe into the tight spots.",
ben:["Upper Back","Shoulders","Neck","Thoracic Spine","Stress Relief"]},

{id:"pyramid",e:"🏛️",n:"Pyramid Pose",s:"Parsvottanasana",l:"intermediate",c:"standing",cpm:3.2,dur:45,
desc:"An intense hamstring stretch combined with hip balance. Develops focus and lengthens the entire back of the body.",
steps:["Stand with right foot forward, left foot back at 45 degrees, feet hip-width.","Square hips as much as possible toward front.","Inhale and lengthen spine, exhale and fold over front leg.","Keep both legs straight (slight bend if needed).","Hands on floor, shins, or in prayer behind back.","Hold 30-45 seconds each side."],
cue:"Fold over your front leg like a pyramid. Keep the back hip from lifting.",
ben:["Hamstrings","Hip Alignment","Balance","Lower Back","Calves"]},

{id:"wide-fold",e:"🦁",n:"Wide-Legged Forward Fold",s:"Prasarita Padottanasana",l:"intermediate",c:"standing",cpm:2.8,dur:60,
desc:"A wide-stance forward fold that opens the inner thighs and hamstrings while providing mild inversion benefits.",
steps:["Stand with feet wide apart (4-5 feet).","Place hands on hips.","Inhale and lengthen spine.","Exhale and hinge forward from hips, placing hands on floor.","Walk hands back between feet, lowering crown of head toward floor.","Hold 30-60 seconds."],
cue:"Press outer edges of feet down. Let gravity lengthen your spine.",
ben:["Inner Thighs","Hamstrings","Inversion","Lower Back","Calming"]},

{id:"crescent-lunge",e:"🌙",n:"Crescent Lunge",s:"Ashta Chandrasana",l:"intermediate",c:"standing",cpm:4.0,dur:45,
desc:"A powerful variation of Low Lunge with the back knee lifted. Builds serious leg and core strength.",
steps:["From standing, step right foot forward into a deep lunge.","Lift back knee off the floor, pressing back heel high.","Both legs are active and engaged.","Raise arms overhead and lift chest.","Stack front knee over ankle.","Hold 30-45 seconds, repeat other side."],
cue:"Back heel pushes high, front knee drives forward. Create opposing forces.",
ben:["Hip Flexors","Quads","Core","Balance","Upper Body"]},

{id:"upward-dog",e:"🐕",n:"Upward Dog",s:"Urdhva Mukha Svanasana",l:"intermediate",c:"backbend",cpm:3.0,dur:20,
desc:"A deeper backbend than Cobra that also strengthens the arms and wrists. Key pose in sun salutations.",
steps:["Lie face down, hands under shoulders.","Press tops of feet into mat (not tucked under).","Press hands firmly and fully straighten arms, lifting entire torso and thighs off floor.","Only hands and tops of feet touch the mat.","Lift chest high, gaze forward or slightly up.","Hold 15-30 seconds."],
cue:"Press the floor away fully — hips and thighs completely off the mat.",
ben:["Chest","Wrists","Arms","Back Strength","Hip Flexors"]},

{id:"half-pigeon",e:"🕊️",n:"Half Pigeon Forward Fold",s:"Ardha Kapotasana",l:"intermediate",c:"seated",cpm:2.2,dur:120,
desc:"Pigeon with a forward fold. A deeper, more restorative version that targets the hip rotators intensely.",
steps:["Set up pigeon with right shin forward.","Walk hands forward and lower forehead to mat or stacked fists.","Keep hips as square as possible.","Breathe into the right outer hip and glute.","With each exhale, allow the hip to soften.","Hold 90-120 seconds, repeat left side."],
cue:"The deeper you breathe, the deeper you'll go. Don't rush this one.",
ben:["Piriformis","Hip Rotators","IT Band","Lower Back","Stress Relief"]},

{id:"dolphin",e:"🐬",n:"Dolphin Pose",s:"Ardha Pincha Mayurasana",l:"intermediate",c:"inversion",cpm:4.2,dur:30,
desc:"A forearm-supported inversion preparation that builds shoulder strength for headstand and forearm stand.",
steps:["Start in forearm plank — elbows under shoulders, forearms on mat.","Curl toes under and press hips up as in downward dog.","Walk feet toward elbows as far as possible.","Press forearms firmly into mat, lift hips high.","Keep neck relaxed, gaze between hands or at feet.","Hold 20-30 seconds."],
cue:"Press your forearms into the earth like you're trying to push it away.",
ben:["Shoulders","Core","Hamstrings","Inversion Prep","Upper Back"]},

{id:"fish",e:"🐟",n:"Fish Pose",s:"Matsyasana",l:"intermediate",c:"backbend",cpm:2.8,dur:30,
desc:"A chest-opening backbend that counters shoulder rounding. Often used as a counter-pose after shoulder stand.",
steps:["Lie on back with arms alongside body, palms down.","Press elbows into floor and lift chest high.","Tilt head back and rest crown or top of head lightly on mat.","The weight should be on elbows and forearms — not the neck.","Legs can be straight or crossed in lotus.","Hold 20-30 seconds."],
cue:"Most of the weight is on your elbows, not your head. Lift your chest high.",
ben:["Chest","Throat","Shoulders","Hip Flexors","Energy"]},

{id:"hero",e:"🦸",n:"Hero Pose",s:"Virasana",l:"intermediate",c:"seated",cpm:1.8,dur:120,
desc:"A kneeling pose that stretches the knees, ankles, and quads deeply. Sit on a block if knees are sensitive.",
steps:["Kneel with knees together, feet wider than hips.","Sit your hips between your heels (use a block if needed).","Place hands on thighs, palms down.","Sit tall, lengthening the spine.","Keep toes pointing straight back.","Hold 1-3 minutes."],
cue:"Sit in this pose with the same dignity as a hero at rest.",
ben:["Quads","Knees","Ankles","Posture","Digestion"]},

{id:"cow-face",e:"🐮",n:"Cow Face Pose",s:"Gomukhasana",l:"intermediate",c:"seated",cpm:2.2,dur:60,
desc:"Deeply opens the hips and shoulders simultaneously. One of the most thorough stretches in yoga.",
steps:["Sit with left knee on top of right — knees stacked, feet out to sides.","Reach right arm up and bend elbow, hand behind head.","Reach left arm behind back from below.","Clasp hands behind back (use a strap if they don't reach).","Sit tall and breathe.","Hold 30-60 seconds, repeat other side."],
cue:"Stack the knees directly on top of each other for full effect.",
ben:["Hips","Shoulders","Chest","IT Band","Thoracic Spine"]},

{id:"half-lord",e:"🌀",n:"Half Lord of Fishes",s:"Ardha Matsyendrasana",l:"intermediate",c:"twist",cpm:2.5,dur:60,
desc:"A deep seated twist that massages the abdominal organs, releases the spine, and opens the outer hip.",
steps:["Sit with both legs extended. Bend right knee, foot flat on floor outside left thigh.","Option to bend left leg and tuck foot near right hip.","Left elbow hooks outside right knee.","Right hand on floor behind you.","Inhale to grow tall, exhale to twist right.","Hold 30-60 seconds, switch sides."],
cue:"Grow taller with every inhale, twist deeper with every exhale.",
ben:["Spine","Outer Hip","Organs","IT Band","Shoulder"]},

// ═══════════════════════════════════════════════════
// ADVANCED
// ═══════════════════════════════════════════════════
{id:"crow",e:"🐦",n:"Crow Pose",s:"Bakasana",l:"advanced",c:"balance",cpm:5.5,dur:20,
desc:"The gateway arm balance. Requires core strength, arm strength, and courage to lean forward and fly.",
steps:["Squat with feet together. Place hands flat, shoulder-width.","Bend elbows and rest knees on backs of upper arms.","Lean weight forward — this is the key step.","Lift one foot, then the other. Squeeze knees into arms.","Gaze forward, not down.","Hold as long as possible."],
cue:"Lean forward more than feels safe. That's the only way to fly.",
ben:["Upper Body","Core","Wrist Strength","Focus","Confidence"]},

{id:"side-crow",e:"🦅",n:"Side Crow",s:"Parsva Bakasana",l:"advanced",c:"balance",cpm:6.0,dur:15,
desc:"A rotational arm balance that takes crow to the next level. Requires core strength and hip flexibility.",
steps:["Squat and twist torso to the right.","Place both hands on the floor to the right of your feet.","Stack knees on right upper arm (both knees).","Lean forward and lift feet off the floor.","Keep legs together and active.","Hold 5-15 seconds, repeat other side."],
cue:"Both knees on ONE arm. Commit to the lean. Breathe.",
ben:["Core","Obliques","Arm Strength","Balance","Hip Flexibility"]},

{id:"headstand",e:"🙃",n:"Headstand",s:"Sirsasana",l:"advanced",c:"inversion",cpm:5.0,dur:60,
desc:"The king of yoga poses. Full-body strength, improved circulation, remarkable balance and focus.",
steps:["Kneel and interlace fingers on mat, forming a triangle base with forearms.","Place crown of head on mat, cradled by hands.","Straighten legs and walk feet toward face.","Engage core and lift one knee then the other to chest.","Extend legs straight up toward ceiling.","Hold 15-60 seconds. Counter with child's pose."],
cue:"Arms do most of the work — not your neck. Press forearms firmly.",
ben:["Full Body","Inversion","Balance","Focus","Circulation"]},

{id:"forearm-stand",e:"🤸",n:"Forearm Stand",s:"Pincha Mayurasana",l:"advanced",c:"inversion",cpm:5.5,dur:30,
desc:"A full inversion on the forearms requiring shoulder strength, core control, and significant balance.",
steps:["Set up like Dolphin Pose with forearms on mat.","Walk feet in close to your torso.","Kick one leg up and follow with the other.","Stack hips over shoulders over elbows.","Press forearms firmly into floor, engage core.","Hold 10-30 seconds. Use a wall when learning."],
cue:"The forearms are your foundation. Press them into the earth with intention.",
ben:["Shoulder Strength","Core","Balance","Full Inversion","Focus"]},

{id:"shoulder-stand",e:"🕯️",n:"Shoulder Stand",s:"Salamba Sarvangasana",l:"advanced",c:"inversion",cpm:4.0,dur:60,
desc:"The queen of yoga poses. Full inversion with thyroid stimulation, calming effects, and leg recovery benefits.",
steps:["Lie on back. Swing legs over head with momentum.","Support lower back with hands, elbows on mat.","Extend legs straight up toward ceiling.","Keep weight on shoulders and upper arms — not neck.","Gaze at chest, not to the side.","Hold 30-120 seconds. Counter with fish pose."],
cue:"Walk your hands down your back toward shoulders. The straighter the body, the easier.",
ben:["Full Inversion","Thyroid","Leg Recovery","Calming","Core"]},

{id:"plow",e:"🚜",n:"Plow Pose",s:"Halasana",l:"advanced",c:"inversion",cpm:3.5,dur:60,
desc:"An inversion that stretches the back of the neck and upper spine intensely. Often done after shoulder stand.",
steps:["From shoulder stand, lower straight legs over head to the floor.","Toes may or may not touch the floor.","Keep hands on lower back for support.","Keep legs as straight as possible.","Breathe slowly — this position compresses the chest.","Hold 30-60 seconds."],
cue:"Never turn your head in Plow. Breathe carefully into your upper back.",
ben:["Upper Back","Neck","Hamstrings","Inversion","Calming"]},

{id:"wheel",e:"🎡",n:"Wheel Pose",s:"Urdhva Dhanurasana",l:"advanced",c:"backbend",cpm:5.8,dur:20,
desc:"A full backbend that opens the entire front of the body. Energizing and powerful.",
steps:["Lie on back. Bend knees, feet flat hip-width.","Place hands by ears, fingers toward feet.","Press hands and feet simultaneously, lift hips.","Straighten arms (work toward it) and let head hang.","Press chest toward the wall behind you.","Hold 10-20 seconds. Rest knees to chest after."],
cue:"Press the floor away with your hands. Chest forward, hips high.",
ben:["Spine Flexibility","Chest","Shoulders","Hip Flexors","Energy"]},

{id:"king-pigeon",e:"👑",n:"King Pigeon Pose",s:"Raja Kapotasana",l:"advanced",c:"backbend",cpm:4.5,dur:30,
desc:"The full expression of pigeon — a deep backbend combined with a hip opener. Takes years to develop.",
steps:["From pigeon with right shin forward, prop up on hands.","Bend left knee and reach back with left hand to catch foot.","Arch back deeply and try to bring foot toward head.","Use both hands if possible.","Keep front hip pressing toward the floor.","Hold 15-30 seconds, repeat other side."],
cue:"Open through your entire front body. This is a pose of full surrender.",
ben:["Full Spine","Hip Flexors","Chest","Shoulders","Quadriceps"]},

{id:"side-plank",e:"💪",n:"Side Plank",s:"Vasisthasana",l:"advanced",c:"core",cpm:6.0,dur:30,
desc:"Powerful lateral core strengthener that builds shoulder stability and balance. Best oblique exercise in yoga.",
steps:["Start in plank on hands.","Shift weight to right hand and foot, stacking left foot on top.","Lift left arm to ceiling.","Keep body in one straight line — don't let hips sag.","Gaze at top hand or forward.","Hold 15-30 seconds each side."],
cue:"Push the floor away with your supporting hand. One plank of wood.",
ben:["Obliques","Core","Shoulder Stability","Balance","Wrist Strength"]},

{id:"king-dancer",e:"💃",n:"King Dancer",s:"Natarajasana",l:"advanced",c:"balance",cpm:4.8,dur:30,
desc:"A graceful and challenging balance pose that opens the chest and requires hip flexor flexibility.",
steps:["Stand on right foot. Bend left knee and reach back with left hand to grab ankle.","Extend right arm forward for balance.","Kick left foot back and up as high as you can.","Lean torso forward as leg rises — counterbalancing.","Find a fixed point to gaze at.","Hold 15-30 seconds, repeat other side."],
cue:"It's a backbend disguised as balance. Let your heart open forward.",
ben:["Balance","Hip Flexors","Chest","Shoulder","Core"]},

{id:"firefly",e:"✨",n:"Firefly Pose",s:"Tittibhasana",l:"advanced",c:"balance",cpm:6.5,dur:15,
desc:"An advanced arm balance demanding core strength, hip flexibility, and total body control.",
steps:["Squat with feet slightly wider than hips.","Thread arms under legs, placing hands behind heels.","Bend elbows slightly and shift weight back into hands.","Lift hips and extend legs straight out to sides.","Flex feet and keep legs as parallel to floor as possible.","Hold as long as possible."],
cue:"Squeeze arms with thighs. Your core is everything here.",
ben:["Core","Upper Body","Hip Flexibility","Arm Strength","Focus"]},

{id:"eight-angle",e:"🔢",n:"Eight-Angle Pose",s:"Astavakrasana",l:"advanced",c:"balance",cpm:6.5,dur:15,
desc:"A complex arm balance requiring the body to hook one leg over the upper arm while extending both legs.",
steps:["From seated, lift right leg and hook right thigh over right upper arm.","Place both hands on floor.","Hook left foot behind right foot.","Lean forward onto arms and lift hips, extending legs to the right.","Keep chest lifted, gaze forward.","Hold 5-15 seconds, repeat other side."],
cue:"The hooking is the key. Once the leg is hooked, the lean makes it fly.",
ben:["Core","Arms","Hip Flexibility","Balance","Coordination"]},

{id:"peacock",e:"🦚",n:"Peacock Pose",s:"Mayurasana",l:"advanced",c:"balance",cpm:7.0,dur:10,
desc:"One of the most demanding arm balances. Requires exceptional core and arm strength to balance horizontally.",
steps:["Kneel and place hands on floor, fingers pointing toward feet.","Bend elbows and press upper arms into belly.","Lean forward until belly rests on elbows.","Extend legs back and lean forward until feet lift off.","Body should be horizontal, parallel to floor.","Hold 5-10 seconds."],
cue:"Squeeze elbows together. The balance point is smaller than you think.",
ben:["Core","Arms","Wrists","Balance","Digestion Stimulation"]},

{id:"flying-pigeon",e:"🦅",n:"Flying Pigeon",s:"Eka Pada Galavasana",l:"advanced",c:"balance",cpm:6.0,dur:15,
desc:"Combines the hip opening of pigeon with the demands of arm balancing. A pose of grace and strength.",
steps:["Stand and cross right ankle over left thigh in figure four.","Bend standing leg and bring hands to floor.","Hook right foot around right upper arm.","Lean forward and slowly shift weight to hands.","Extend left leg back and up as you balance.","Hold 5-15 seconds, repeat other side."],
cue:"The hip opening from the figure four makes the balance achievable. Commit to the lean.",
ben:["Hip Opening","Core","Arms","Balance","Coordination"]},

{id:"scale",e:"⚖️",n:"Scale Pose",s:"Tolasana",l:"advanced",c:"balance",cpm:5.5,dur:15,
desc:"An arm balance done from a seated position, lifting the entire body off the floor. Builds serious core and arm strength.",
steps:["Sit in lotus or cross-legged position.","Place hands on floor beside hips.","Press palms down and engage core strongly.","Lift your entire lower body off the floor.","Keep legs tucked and body compact.","Hold 5-15 seconds."],
cue:"Round your lower back like a C and compress. That's the lift.",
ben:["Core","Arms","Wrists","Hip Flexors","Focus"]},

{id:"handstand",e:"🙌",n:"Handstand",s:"Adho Mukha Vrksasana",l:"advanced",c:"inversion",cpm:6.0,dur:20,
desc:"The ultimate inversion. Full body upside down on the hands requires total body strength and fearlessness.",
steps:["Face the wall. Place hands 6 inches from wall, shoulder-width.","Walk feet in close and look between your hands.","Kick one leg up strongly and follow with the other.","Engage core and press legs toward the wall.","Press floor away with your hands — active arms.","Hold 5-30 seconds."],
cue:"Press the floor away like you're trying to push the earth down. Spread your fingers.",
ben:["Full Body Strength","Balance","Wrists","Core","Confidence"]},

{id:"wild-thing",e:"🌟",n:"Wild Thing",s:"Camatkarasana",l:"advanced",c:"backbend",cpm:4.5,dur:20,
desc:"A joyful, expressive backbend that opens the chest and hip flexors from a side plank base.",
steps:["From side plank on right hand.","Flip your body open — lift hips high.","Step left foot back and down behind right leg.","Let right hip drop and back arch.","Reach left arm up and over in a backbend.","Hold 15-20 seconds, repeat other side."],
cue:"This pose is meant to feel like throwing yourself open to the world.",
ben:["Chest","Hip Flexors","Shoulder","Core","Backbend"]},

{id:"lotus",e:"💮",n:"Lotus Pose",s:"Padmasana",l:"advanced",c:"seated",cpm:1.5,dur:120,
desc:"The iconic meditation seat. Takes years of hip opening to do without strain. Never force this pose.",
steps:["Sit in easy pose. Take right foot and place on top of left thigh, sole facing up.","Take left foot and place on top of right thigh, sole facing up.","Both knees ideally touch the floor.","Hands on knees in mudra.","Spine long and tall.","Hold as long as comfortable."],
cue:"Only enter lotus if your hips allow it fully. Never force the knees.",
ben:["Hip Opening","Meditation","Posture","Ankle Flexibility","Focus"]},

{id:"standing-split",e:"🤸",n:"Standing Split",s:"Urdhva Prasarita Eka Padasana",l:"advanced",c:"balance",cpm:4.0,dur:30,
desc:"A challenging single-leg balance with a forward fold. Opens the hamstrings and hip flexors deeply.",
steps:["From standing forward fold, shift weight to right foot.","Lift left leg as high as possible toward the ceiling.","Keep both hips squared toward the floor.","Hands can be on the floor, ankle, or shin.","Flex the raised foot.","Hold 20-30 seconds, repeat other side."],
cue:"Square your hips — don't let the lifting hip rotate open.",
ben:["Hamstrings","Balance","Hip Flexors","Core","Focus"]},

{id:"splits",e:"🙆",n:"Full Splits",s:"Hanumanasana",l:"advanced",c:"seated",cpm:3.0,dur:60,
desc:"The full front split. One of yoga's most demanding flexibility poses. Takes months or years to achieve safely.",
steps:["From low lunge with right foot forward, start to slide feet apart.","Keep hips squared forward.","Lower hips toward the floor using blocks for support.","Front leg is straight, back leg extends behind, top of foot on floor.","Hands at hips or extended overhead.","Hold 30-60 seconds, repeat other side."],
cue:"Use blocks. This pose cannot be forced. Let the hip flexor surrender over time.",
ben:["Hip Flexors","Hamstrings","Hip Opening","Groin","Patience"]},

{id:"chin-stand",e:"😶",n:"Chin Stand",s:"Gandha Bherundasana",l:"advanced",c:"backbend",cpm:5.0,dur:10,
desc:"An extreme backbend where the chin rests on the floor while the legs extend overhead. Requires exceptional spine flexibility.",
steps:["Start lying face down, hands under shoulders.","Press up into a deep Cobra.","Continue arching back as far as possible.","Walk feet toward head.","Lower chin to mat if your spine allows.","This is a pose for very flexible practitioners only."],
cue:"Never force this. It is years of backbend work expressing itself.",
ben:["Full Spine Flexibility","Chest","Shoulders","Hip Flexors","Back Strength"]}

]; // end POSES

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
var filter = "all";
var routine = [];
var sessIdx = 0;
var timerInt = null;
var timerSecs = 0;
var CIRC = 301.6;
var collapsed = {beginner:false, intermediate:false, advanced:false};

// ═══════════════════════════════════════════════════
// CALORIE CALC
// ═══════════════════════════════════════════════════
function cal(cpm, secs) {
  var w = (typeof getLatestWeight==="function" && getLatestWeight()) ||
          (typeof START_WEIGHT!=="undefined" && START_WEIGHT) || WEIGHT || 200;
  return Math.round(cpm * (secs/60) * (w/150));
}

// ═══════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════
function yogaSwitchTab(id) {
  document.querySelectorAll(".yg-tab-btn").forEach(function(b){ b.classList.remove("active"); });
  document.querySelectorAll(".yg-panel").forEach(function(p){ p.classList.remove("active"); });
  var btn = document.querySelector(".yg-tab-btn[data-ytab=\""+id+"\"]");
  if (btn) btn.classList.add("active");
  var panel = document.getElementById("yg-panel-"+id);
  if (panel) panel.classList.add("active");
  if (id==="routine") renderRoutine();
  if (id==="presets") renderPresets();
  if (id==="saved") renderSaved();
}
document.querySelectorAll(".yg-tab-btn").forEach(function(btn){
  btn.addEventListener("click", function(){ yogaSwitchTab(btn.dataset.ytab); });
});

// ── Yoga stats bar: minutes this month, sessions this month, current daily streak ──
function ygYogaDays() {
  // Returns sorted array of date keys (ascending) that have at least one type:"yoga" exercise logged
  var days = [];
  Object.keys(appData).forEach(function(k){
    var d = appData[k];
    if (d && d.exercises && d.exercises.some(function(e){ return e.type==="yoga"; })) days.push(k);
  });
  return days.sort();
}
function ygComputeStats() {
  var todayK = todayKey();
  var monthPrefix = todayK.slice(0,7); // "YYYY-MM"
  var totalMin = 0, sessions = 0;
  Object.keys(appData).forEach(function(k){
    if (k.slice(0,7)!==monthPrefix) return;
    var d = appData[k]; if (!d || !d.exercises) return;
    d.exercises.forEach(function(e){
      if (e.type!=="yoga") return;
      sessions++;
      var m = /\((\d+)(?:-(\d+))?\s*min/.exec(e.name||"");
      if (m) totalMin += m[2] ? Math.round((parseInt(m[1],10)+parseInt(m[2],10))/2) : parseInt(m[1],10);
    });
  });
  // Streak: consecutive days up to and including today (or yesterday, if today not logged yet)
  var days = ygYogaDays();
  var daySet = {}; days.forEach(function(k){ daySet[k]=true; });
  var streak = 0;
  var cursor = new Date(keyToDate(todayK));
  if (!daySet[todayK]) cursor.setDate(cursor.getDate()-1); // allow streak to still show if today just hasn't happened yet
  while (true) {
    var k = localDateKey(cursor);
    if (daySet[k]) { streak++; cursor.setDate(cursor.getDate()-1); }
    else break;
  }
  return {totalMin:totalMin, sessions:sessions, streak:streak};
}
function ygRenderStatsBar() {
  var el = document.getElementById("yoga-stats-bar"); if (!el) return;
  var s = ygComputeStats();
  el.innerHTML =
    '<div class="yoga-stat"><div class="yoga-stat-val">'+s.streak+'</div><div class="yoga-stat-lbl">Day streak</div></div>'+
    '<div class="yoga-stat"><div class="yoga-stat-val">'+s.totalMin+'</div><div class="yoga-stat-lbl">Min this month</div></div>'+
    '<div class="yoga-stat"><div class="yoga-stat-val">'+s.sessions+'</div><div class="yoga-stat-lbl">Sessions this month</div></div>';
}
try { ygRenderStatsBar(); } catch(e) {}

// ═══════════════════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════════════════
function setFilter(f, el) {
  filter = f;
  document.querySelectorAll(".fbtn").forEach(function(b){ b.classList.remove("active"); });
  el.classList.add("active");
  renderPoses();
}

// ═══════════════════════════════════════════════════
// RENDER POSES
// ═══════════════════════════════════════════════════
function renderPoses() {
  var q = document.getElementById("pose-search").value.toLowerCase();
  var levels = ["beginner","intermediate","advanced"];
  var html = "";

  levels.forEach(function(level) {
    var poses = POSES.filter(function(p){
      var mSearch = !q || p.n.toLowerCase().indexOf(q)>=0 || p.s.toLowerCase().indexOf(q)>=0 || p.ben.join(" ").toLowerCase().indexOf(q)>=0 || p.c.indexOf(q)>=0;
      var mFilter = filter==="all" || filter===level || filter===p.c;
      return p.l===level && mSearch && mFilter;
    });
    if (!poses.length) return;

    var lcolor = level==="beginner"?"var(--sage)":level==="intermediate"?"var(--gold)":"var(--rose)";
    var isCollapsed = collapsed[level] && !q;

    html += '<div class="diff-section">';
    html += '<div class="diff-header" onclick="toggleSection(\''+level+'\')">';
    html += '<div class="diff-title" style="color:'+lcolor+'">'+level.charAt(0).toUpperCase()+level.slice(1)+'</div>';
    html += '<div class="diff-count">'+poses.length+' poses</div>';
    html += '<div class="diff-toggle'+(isCollapsed?" collapsed":"")+'">&#9660;</div>';
    html += '</div>';
    html += '<div class="diff-poses'+(isCollapsed?" collapsed":"") +'" id="sec-'+level+'">';

    poses.forEach(function(p){
      var inR = routine.some(function(r){ return r.pose.id===p.id; });
      var c = cal(p.cpm, p.dur);
      var tagCls = p.l==="beginner"?"tag-b":p.l==="intermediate"?"tag-i":"tag-a";
      var demoHtml = (typeof YOGA_DEMOS!=="undefined" && YOGA_DEMOS[p.id]) ? YOGA_DEMOS[p.id]() : p.e;
      html += '<div class="pose-card'+(inR?" selected":"") +'" id="card-'+p.id+'">';
      html += '<div class="pose-header" onclick="toggleDetail(\''+p.id+'\')">';
      html += '<div class="pose-emoji">'+demoHtml+'</div>';
      html += '<div class="pose-info">';
      html += '<div class="pose-name">'+p.n+'</div>';
      html += '<span class="pose-sanskrit">'+p.s+'</span>';
      html += '<div class="pose-tags"><span class="tag '+tagCls+'">'+p.l+'</span><span class="tag tag-c">'+p.c+'</span></div>';
      html += '</div>';
      html += '<div class="pose-right">';
      html += '<button class="add-btn'+(inR?" added":"") +'" onclick="event.stopPropagation();toggleRoutine(\''+p.id+'\')">'+(inR?"✓":"+")+'</button>';
      html += '<div class="cal-badge">~'+c+' cal</div>';
      html += '</div></div>';
      // Detail panel
      html += '<div class="pose-detail" id="det-'+p.id+'">';
      html += '<div class="pose-demo-large">'+demoHtml+'</div>';
      html += '<div class="det-sec"><div class="det-lbl">About</div><div class="det-txt">'+p.desc+'</div></div>';
      html += '<div class="det-sec"><div class="det-lbl">How To</div><ol class="steps-list">';
      p.steps.forEach(function(step,i){
        html += '<li><span class="snum">'+(i+1)+'</span><span>'+step+'</span></li>';
      });
      html += '</ol></div>';
      html += '<div class="det-sec"><div class="det-lbl">Coaching Cue</div><div class="det-txt" style="color:var(--gold);font-style:italic">'+p.cue+'</div></div>';
      html += '<div class="det-sec"><div class="det-lbl">Benefits</div><div class="benefits">';
      p.ben.forEach(function(b){ html += '<span class="bchip">'+b+'</span>'; });
      html += '</div></div>';
      html += '<div class="det-sec"><div class="det-lbl">Duration for Routine</div><div class="dur-row">';
      [30,45,60,90,120,180].forEach(function(s){
        var lbl = s<60?s+"s":(s===60?"1m":(s===90?"90s":(s===120?"2m":"3m")));
        html += '<div class="dur-opt'+(p.dur===s?" sel":"") +'" onclick="setDur(\''+p.id+'\','+s+',this)">';
        html += '<div class="dur-val">'+lbl+'</div></div>';
      });
      html += '</div></div></div>';
      html += '</div>'; // pose-card
    });

    html += '</div></div>'; // diff-poses + diff-section
  });

  document.getElementById("poses-container").innerHTML = html;
}

function toggleSection(level) {
  collapsed[level] = !collapsed[level];
  renderPoses();
}

function toggleDetail(id) {
  var el = document.getElementById("det-"+id);
  if (el) el.classList.toggle("open");
}

function setDur(poseId, secs, el) {
  var pose = POSES.find(function(p){ return p.id===poseId; });
  if (!pose) return;
  pose.dur = secs;
  el.closest(".dur-row").querySelectorAll(".dur-opt").forEach(function(d){ d.classList.remove("sel"); });
  el.classList.add("sel");
  var badge = document.querySelector("#card-"+poseId+" .cal-badge");
  if (badge) badge.textContent = "~"+cal(pose.cpm,secs)+" cal";
  var ri = routine.findIndex(function(r){ return r.pose.id===poseId; });
  if (ri>=0) { routine[ri].dur = secs; }
}

// ═══════════════════════════════════════════════════
// ROUTINE
// ═══════════════════════════════════════════════════
function toggleRoutine(poseId) {
  var pose = POSES.find(function(p){ return p.id===poseId; });
  if (!pose) return;
  var idx = routine.findIndex(function(r){ return r.pose.id===poseId; });
  if (idx>=0) { routine.splice(idx,1); } else { routine.push({pose:pose,dur:pose.dur}); }
  updateCount();
  var btn = document.querySelector("#card-"+poseId+" .add-btn");
  var card = document.getElementById("card-"+poseId);
  var inR = routine.some(function(r){ return r.pose.id===poseId; });
  if (btn){ btn.className="add-btn"+(inR?" added":""); btn.textContent=inR?"✓":"+"; }
  if (card){ inR?card.classList.add("selected"):card.classList.remove("selected"); }
}

function updateCount() {
  document.getElementById("rp-count").textContent = routine.length;
}

function clearRoutine() {
  routine = [];
  updateCount();
  renderRoutine();
  renderPoses();
}

function removeFromRoutine(idx) {
  var poseId = routine[idx].pose.id;
  routine.splice(idx,1);
  updateCount();
  renderRoutine();
  var btn = document.querySelector("#card-"+poseId+" .add-btn");
  var card = document.getElementById("card-"+poseId);
  if (btn){ btn.className="add-btn"; btn.textContent="+"; }
  if (card) card.classList.remove("selected");
}

function setRoutineDur(idx, secs) {
  if (!routine[idx]) return;
  routine[idx].dur = secs;
  renderRoutine();
}

function renderRoutine() {
  var empty = document.getElementById("r-empty");
  var content = document.getElementById("r-content");
  if (!routine.length) { empty.style.display="block"; content.style.display="none"; return; }
  empty.style.display="none"; content.style.display="block";

  var totCal=0, totSecs=0;
  routine.forEach(function(r){ totCal+=cal(r.pose.cpm,r.dur); totSecs+=r.dur; });
  var totMins = Math.round(totSecs/60);
  var cpm = totMins>0?(totCal/totMins).toFixed(1):0;

  document.getElementById("tot-cal").textContent=totCal;
  document.getElementById("tot-poses").textContent=routine.length;
  document.getElementById("tot-mins").textContent=totMins;
  document.getElementById("tot-cpm").textContent=cpm;

  document.getElementById("r-list").innerHTML = routine.map(function(r,i){
    var c=cal(r.pose.cpm,r.dur);
    return '<div class="r-item">'+
      '<div class="r-emoji">'+r.pose.e+'</div>'+
      '<div style="flex:1;min-width:0">'+
        '<div class="r-name">'+r.pose.n+'</div>'+
        '<div class="r-durs">'+
          [30,45,60,90,120].map(function(s){
            var lbl=s<60?s+"s":(s===60?"1m":(s===90?"90s":"2m"));
            return '<button class="rdb'+(r.dur===s?" sel":"") +'" onclick="setRoutineDur('+i+','+s+')">'+lbl+'</button>';
          }).join("")+
        '</div>'+
      '</div>'+
      '<div style="text-align:right;flex-shrink:0">'+
        '<div class="r-cal">~'+c+' cal</div>'+
        '<div class="r-meta">'+(r.dur<60?r.dur+"s":(r.dur/60).toFixed(r.dur%60===0?0:1)+"m")+'</div>'+
      '</div>'+
      '<button class="r-del" onclick="removeFromRoutine('+i+')">✕</button>'+
    '</div>';
  }).join("");
}

// ═══════════════════════════════════════════════════
// SESSION
// ═══════════════════════════════════════════════════
function ygStartSession() {
  if (!routine.length) return;
  ygPaused = false;
  sessIdx=0;
  // Create + unlock AudioContext HERE — directly inside the button tap gesture
  // This is the ONLY reliable way to unlock audio on iOS Safari
  try {
    if (!_audioCtx) {
      _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (_audioCtx.state === "suspended") {
      _audioCtx.resume();
    }
    // Play a silent buffer to fully unlock audio on iOS
    var buf = _audioCtx.createBuffer(1, 1, 22050);
    var src = _audioCtx.createBufferSource();
    src.buffer = buf;
    src.connect(_audioCtx.destination);
    src.start(0);
  } catch(e) {}
  document.getElementById("sess-ov").classList.add("open");
  ygBreathStart();
  ygLoadPose();
}

// ── Breath-sync ring: 4s inhale, 6s exhale, matches the breathPulse CSS keyframe ──
var ygBreathInt=null;
function ygBreathStart(){
  var ring=document.getElementById("breath-ring"); if(ring)ring.classList.add("on");
  ygBreathTick(); clearInterval(ygBreathInt);
  ygBreathInt=setInterval(ygBreathTick, 100);
}
function ygBreathTick(){
  if(ygPaused)return;
  var lbl=document.getElementById("breath-lbl"); if(!lbl)return;
  var t=(Date.now()/1000)%10;
  var phase=t<4?"Inhale":"Exhale";
  if(lbl.textContent!==phase){ lbl.textContent=phase; lbl.style.opacity=0; setTimeout(function(){lbl.style.opacity=1;},50); }
}
function ygBreathPause(on){
  var ring=document.getElementById("breath-ring"); if(!ring)return;
  if(on) ring.classList.remove("on"); else ring.classList.add("on");
}
function ygBreathStop(){
  clearInterval(ygBreathInt); ygBreathInt=null;
  var ring=document.getElementById("breath-ring"); if(ring)ring.classList.remove("on");
}

function ygLoadPose() {
  var item=routine[sessIdx];
  if (!item) return;
  var p=item.pose;
  document.getElementById("sess-prog").textContent="Pose "+(sessIdx+1)+" of "+routine.length;
  var demoEl=document.getElementById("sess-demo");
  if (demoEl) demoEl.innerHTML = (typeof YOGA_DEMOS!=="undefined" && YOGA_DEMOS[p.id]) ? YOGA_DEMOS[p.id]() : "";
  var badge=document.getElementById("sess-emoji-badge"); if(badge) badge.textContent=p.e;
  document.getElementById("sess-name").textContent=p.n;
  document.getElementById("sess-sans").textContent=p.s;
  document.getElementById("sess-cue").textContent=p.cue;
  document.getElementById("sess-nxt").textContent=sessIdx===routine.length-1?"Finish ✓":"Next ›";
  startTimer(item.dur);
}

// ── Audio cues using Web Audio API (no files needed) ──────────────
var _audioCtx = null;

function getAudioCtx() {
  if (!_audioCtx) {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // iOS requires resume() if context was suspended
  if (_audioCtx.state === "suspended") {
    _audioCtx.resume();
  }
  return _audioCtx;
}

function yogaBeep(freq, dur, vol) {
  try {
    var ctx = getAudioCtx();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(vol || 0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (dur || 0.3));
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + (dur || 0.3));
  } catch(e) {}
}

function yogaBeepWarning() {
  // 5-second warning: two soft mid beeps
  yogaBeep(660, 0.15, 0.3);
  setTimeout(function(){ yogaBeep(660, 0.15, 0.3); }, 200);
}

function yogaBeepEnd() {
  // Pose ends: three descending tones
  yogaBeep(880, 0.2, 0.5);
  setTimeout(function(){ yogaBeep(660, 0.2, 0.5); }, 250);
  setTimeout(function(){ yogaBeep(440, 0.3, 0.5); }, 500);
}

function yogaBeepStart() {
  // New pose starts: two ascending tones
  yogaBeep(440, 0.15, 0.4);
  setTimeout(function(){ yogaBeep(660, 0.25, 0.5); }, 200);
}

var ygPaused = false;
function ygTogglePause() {
  ygPaused = !ygPaused;
  var btn = document.getElementById("yg-pause-btn");
  if (btn) btn.innerHTML = ygPaused ? "&#9654; Resume" : "&#9646;&#9646; Pause";
  ygBreathPause(ygPaused);
}
function startTimer(secs) {
  clearInterval(timerInt);
  timerSecs=secs;
  var total=secs;
  ygHideUpNext();
  tick(secs,total);
  if (secs<=5) ygShowUpNext(); // short pose — preview immediately, there's no later 5s mark to catch
  timerInt=setInterval(function(){
    if (ygPaused) return;
    timerSecs--;
    tick(timerSecs,total);
    if (timerSecs===5) {
      yogaBeepWarning(); // warn at 5 seconds left
      ygShowUpNext(); // preview the next pose so there's time to get ready
    }
    if (timerSecs<=0){
      clearInterval(timerInt);
      yogaBeepEnd(); // end of pose
      if (sessIdx<routine.length-1) {
        // Show rest countdown for 5 seconds
        var restCount = 5;
        document.getElementById("sess-cue").textContent = "Rest... next pose in " + restCount + "s";
        document.getElementById("t-num").textContent = restCount + "s";
        var restInt = setInterval(function(){
          restCount--;
          document.getElementById("sess-cue").textContent = restCount > 0
            ? "Rest... next pose in " + restCount + "s"
            : "Get ready...";
          document.getElementById("t-num").textContent = restCount > 0 ? restCount + "s" : "Go!";
          if (restCount <= 0) {
            clearInterval(restInt);
            sessIdx++;
            ygLoadPoseWithStartBeep();
          }
        }, 1000);
      }
    }
  },1000);
}

function ygShowUpNext() {
  if (sessIdx>=routine.length-1) return; // last pose, nothing to preview
  var next=routine[sessIdx+1]; if(!next) return;
  var p=next.pose;
  var demoEl=document.getElementById("sess-upnext-demo");
  if (demoEl) demoEl.innerHTML = (typeof YOGA_DEMOS!=="undefined" && YOGA_DEMOS[p.id]) ? YOGA_DEMOS[p.id]() : p.e;
  var nameEl=document.getElementById("sess-upnext-name"); if(nameEl) nameEl.textContent=p.n;
  var strip=document.getElementById("sess-upnext"); if(strip) strip.classList.add("show");
}
function ygHideUpNext() {
  var strip=document.getElementById("sess-upnext"); if(strip) strip.classList.remove("show");
}

function ygLoadPoseWithStartBeep() {
  ygLoadPose();
  setTimeout(function(){ yogaBeepStart(); }, 300); // slight delay so display updates first
}

function tick(rem,total) {
  var m=Math.floor(rem/60), s=rem%60;
  document.getElementById("t-num").textContent=m+":"+(s<10?"0":"")+s;
  var offset=CIRC*(1-(rem/total));
  document.getElementById("t-arc").style.strokeDashoffset=offset;
}

function ygNextPose() {
  clearInterval(timerInt);
  if (sessIdx>=routine.length-1){ ygEndSession(); ygShowDone(); return; }
  // Manual next - no rest period, go immediately with start beep
  sessIdx++;
  ygLoadPoseWithStartBeep();
}

function ygPrevPose() {
  clearInterval(timerInt);
  if (sessIdx<=0) return;
  sessIdx--;
  ygLoadPose();
}

function ygEndSession() {
  clearInterval(timerInt);
  ygBreathStop();
  document.getElementById("sess-ov").classList.remove("open");
}

function ygShowDone() {
  var totCal=0;
  var totMins=0;
  routine.forEach(function(r){ totCal+=cal(r.pose.cpm,r.dur); totMins+=Math.round(r.dur/60); });
  document.getElementById("done-cal").textContent=totCal;
  document.getElementById("done-ov").classList.add("open");
  // Cross-log to fitness tracker
  try {
    var d=new Date();
    var dk=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
    var ftData = JSON.parse(store.get("ft_data")||"{}");
    if (!ftData[dk]) ftData[dk]={foods:[],exercises:[],weight:null,waterOz:0,wellness:{},supplements:{}};
    if (!ftData[dk].exercises) ftData[dk].exercises=[];
    var label="Yoga ("+totMins+" min)";
    var already=ftData[dk].exercises.some(function(x){return x.name===label;});
    if (!already) {
      ftData[dk].exercises.push({name:label,calories:totCal,type:"yoga",id:Date.now().toString()});
      store.set("ft_data",JSON.stringify(ftData));
      if(typeof appData!=="undefined") appData=ftData;
      if(typeof renderAll==="function") renderAll();
      if(typeof pushToSheets==="function") pushToSheets();
    }
  } catch(e){}
  try { ygRenderStatsBar(); } catch(e) {}
}

function ygCloseDone() {
  document.getElementById("done-ov").classList.remove("open");
}


// ═══════════════════════════════════════════════════
// PRESET ROUTINES
// ═══════════════════════════════════════════════════
var PRESETS = [
  {
    id:"morning-wake",
    icon:"🌅",
    name:"Morning Wake-Up",
    desc:"A gentle 15-minute flow to ease into the day. Opens the spine, hips, and chest. Perfect before coffee.",
    level:"beginner",
    duration:"~15 min",
    focus:"Energizing",
    poses:[
      {id:"easy-pose",    dur:60},
      {id:"catcow",       dur:60},
      {id:"puppy",        dur:45},
      {id:"downdog",      dur:45},
      {id:"low-lunge",    dur:45},
      {id:"low-lunge",    dur:45},
      {id:"standing-forward",dur:45},
      {id:"mountain",     dur:30},
      {id:"cobra",        dur:30},
      {id:"childs",       dur:60},
      {id:"supine-twist", dur:45},
      {id:"supine-twist", dur:45},
      {id:"corpse",       dur:120}
    ]
  },
  {
    id:"hip-opener",
    icon:"🦋",
    name:"Deep Hip Release",
    desc:"Targets the hips, hip flexors, and glutes. Essential after long bike rides or sitting all day. Go slow.",
    level:"beginner",
    duration:"~25 min",
    focus:"Hip Flexibility",
    poses:[
      {id:"easy-pose",       dur:60},
      {id:"butterfly",       dur:90},
      {id:"low-lunge",       dur:60},
      {id:"low-lunge",       dur:60},
      {id:"pigeon",          dur:120},
      {id:"pigeon",          dur:120},
      {id:"half-pigeon",     dur:90},
      {id:"half-pigeon",     dur:90},
      {id:"supine-twist",    dur:60},
      {id:"supine-twist",    dur:60},
      {id:"happy-baby",      dur:90},
      {id:"reclined-butterfly",dur:180},
      {id:"legs-up",         dur:180}
    ]
  },
  {
    id:"post-ride",
    icon:"🚵",
    name:"Post-Ride Recovery",
    desc:"Built specifically for after your Saturday mountain bike rides. Targets quads, hamstrings, IT band, and lower back.",
    level:"beginner",
    duration:"~20 min",
    focus:"Recovery",
    poses:[
      {id:"standing-forward",dur:60},
      {id:"low-lunge",       dur:60},
      {id:"low-lunge",       dur:60},
      {id:"pyramid",         dur:45},
      {id:"pyramid",         dur:45},
      {id:"pigeon",          dur:120},
      {id:"pigeon",          dur:120},
      {id:"supine-twist",    dur:60},
      {id:"supine-twist",    dur:60},
      {id:"legs-up",         dur:300}
    ]
  },
  {
    id:"core-strength",
    icon:"💪",
    name:"Core & Strength",
    desc:"A challenging core-focused flow. Burns serious calories and builds the functional strength that carries over to everything else.",
    level:"intermediate",
    duration:"~25 min",
    focus:"Strength & Calorie Burn",
    poses:[
      {id:"mountain",       dur:30},
      {id:"chair",          dur:45},
      {id:"warrior1",       dur:45},
      {id:"warrior1",       dur:45},
      {id:"warrior2",       dur:45},
      {id:"warrior2",       dur:45},
      {id:"warrior3",       dur:30},
      {id:"warrior3",       dur:30},
      {id:"boat",           dur:30},
      {id:"boat",           dur:30},
      {id:"side-plank",     dur:30},
      {id:"side-plank",     dur:30},
      {id:"locust",         dur:30},
      {id:"bridge",         dur:45},
      {id:"childs",         dur:60}
    ]
  },
  {
    id:"stress-relief",
    icon:"🧘",
    name:"Stress & Anxiety Relief",
    desc:"A slow, restorative practice focused on calming the nervous system. Ideal for evenings or high-stress days.",
    level:"beginner",
    duration:"~30 min",
    focus:"Calming",
    poses:[
      {id:"easy-pose",        dur:120},
      {id:"catcow",           dur:90},
      {id:"childs",           dur:120},
      {id:"thread-needle",    dur:60},
      {id:"thread-needle",    dur:60},
      {id:"puppy",            dur:90},
      {id:"seated-forward",   dur:90},
      {id:"butterfly",        dur:90},
      {id:"supine-twist",     dur:60},
      {id:"supine-twist",     dur:60},
      {id:"happy-baby",       dur:90},
      {id:"reclined-butterfly",dur:180},
      {id:"legs-up",          dur:300},
      {id:"corpse",           dur:300}
    ]
  },
  {
    id:"sun-salutation",
    icon:"☀️",
    name:"Sun Salutation Flow",
    desc:"The classic yoga sequence done as a flowing practice. Each breath links to a movement. Energizing and complete.",
    level:"intermediate",
    duration:"~20 min",
    focus:"Flow & Energy",
    poses:[
      {id:"mountain",         dur:20},
      {id:"standing-forward", dur:20},
      {id:"low-lunge",        dur:30},
      {id:"downdog",          dur:30},
      {id:"cobra",            dur:20},
      {id:"downdog",          dur:30},
      {id:"low-lunge",        dur:30},
      {id:"standing-forward", dur:20},
      {id:"mountain",         dur:20},
      {id:"chair",            dur:30},
      {id:"warrior1",         dur:30},
      {id:"warrior2",         dur:30},
      {id:"reverse-warrior",  dur:20},
      {id:"ext-side-angle",   dur:30},
      {id:"triangle",         dur:30},
      {id:"childs",           dur:60},
      {id:"corpse",           dur:120}
    ]
  },
  {
    id:"balance-focus",
    icon:"🌿",
    name:"Balance & Focus",
    desc:"A balance-heavy sequence that builds single-leg strength, ankle stability, and laser focus. Great before a big day.",
    level:"intermediate",
    duration:"~20 min",
    focus:"Balance & Mental Clarity",
    poses:[
      {id:"mountain",    dur:45},
      {id:"tree",        dur:45},
      {id:"tree",        dur:45},
      {id:"warrior3",    dur:30},
      {id:"warrior3",    dur:30},
      {id:"half-moon",   dur:30},
      {id:"half-moon",   dur:30},
      {id:"eagle",       dur:30},
      {id:"eagle",       dur:30},
      {id:"king-dancer", dur:20},
      {id:"king-dancer", dur:20},
      {id:"standing-split",dur:30},
      {id:"standing-split",dur:30},
      {id:"childs",      dur:60},
      {id:"corpse",      dur:120}
    ]
  },
  {
    id:"back-pain",
    icon:"🔙",
    name:"Lower Back Relief",
    desc:"Specifically designed to relieve lower back tension. A combination of gentle stretches and strengthening moves.",
    level:"beginner",
    duration:"~20 min",
    focus:"Back Pain Relief",
    poses:[
      {id:"catcow",        dur:90},
      {id:"childs",        dur:90},
      {id:"sphinx",        dur:60},
      {id:"cobra",         dur:30},
      {id:"bridge",        dur:45},
      {id:"bridge",        dur:45},
      {id:"supine-twist",  dur:60},
      {id:"supine-twist",  dur:60},
      {id:"happy-baby",    dur:90},
      {id:"knee-to-chest", dur:60},
      {id:"legs-up",       dur:180},
      {id:"corpse",        dur:120}
    ]
  },
  {
    id:"power-yoga",
    icon:"🔥",
    name:"Power Yoga Burn",
    desc:"A high-intensity, calorie-torching sequence for those days when you want your yoga to feel like a real workout.",
    level:"advanced",
    duration:"~30 min",
    focus:"Maximum Calorie Burn",
    poses:[
      {id:"chair",         dur:45},
      {id:"warrior1",      dur:45},
      {id:"warrior2",      dur:45},
      {id:"warrior3",      dur:30},
      {id:"half-moon",     dur:30},
      {id:"crescent-lunge",dur:45},
      {id:"boat",          dur:30},
      {id:"boat",          dur:30},
      {id:"side-plank",    dur:30},
      {id:"side-plank",    dur:30},
      {id:"crow",          dur:20},
      {id:"wheel",         dur:20},
      {id:"locust",        dur:30},
      {id:"bow",           dur:30},
      {id:"camel",         dur:30},
      {id:"childs",        dur:60},
      {id:"corpse",        dur:120}
    ]
  },
  {
    id:"evening-unwind",
    icon:"🌙",
    name:"Evening Unwind",
    desc:"A 20-minute pre-bed sequence to decompress the body and calm the mind. Better sleep guaranteed.",
    level:"beginner",
    duration:"~20 min",
    focus:"Sleep & Recovery",
    poses:[
      {id:"easy-pose",        dur:90},
      {id:"seated-twist",     dur:60},
      {id:"seated-twist",     dur:60},
      {id:"butterfly",        dur:90},
      {id:"seated-forward",   dur:90},
      {id:"supine-twist",     dur:60},
      {id:"supine-twist",     dur:60},
      {id:"happy-baby",       dur:90},
      {id:"reclined-butterfly",dur:120},
      {id:"legs-up",          dur:300},
      {id:"corpse",           dur:300}
    ]
  },
  {
    id:"chest-shoulders",
    icon:"🏋️",
    name:"Chest & Shoulder Opener",
    desc:"Counteracts the forward hunch from cycling and screen time. Opens the chest and releases tight shoulders.",
    level:"intermediate",
    duration:"~20 min",
    focus:"Posture",
    poses:[
      {id:"puppy",       dur:60},
      {id:"thread-needle",dur:60},
      {id:"thread-needle",dur:60},
      {id:"cobra",       dur:30},
      {id:"sphinx",      dur:60},
      {id:"upward-dog",  dur:20},
      {id:"camel",       dur:30},
      {id:"bow",         dur:30},
      {id:"fish",        dur:30},
      {id:"bridge",      dur:45},
      {id:"wheel",       dur:20},
      {id:"childs",      dur:90},
      {id:"corpse",      dur:120}
    ]
  },
  {
    id:"arm-balance-intro",
    icon:"✈️",
    name:"Arm Balance Introduction",
    desc:"A progressive sequence building toward your first arm balance. Develops wrist strength, core, and confidence.",
    level:"advanced",
    duration:"~25 min",
    focus:"Arm Balances",
    poses:[
      {id:"downdog",      dur:45},
      {id:"dolphin",      dur:30},
      {id:"dolphin",      dur:30},
      {id:"boat",         dur:30},
      {id:"boat",         dur:30},
      {id:"side-plank",   dur:30},
      {id:"side-plank",   dur:30},
      {id:"crow",         dur:20},
      {id:"crow",         dur:20},
      {id:"side-crow",    dur:15},
      {id:"side-crow",    dur:15},
      {id:"scale",        dur:15},
      {id:"childs",       dur:90},
      {id:"corpse",       dur:120}
    ]
  }
];

var loadedPresetId = null;

function renderPresets() {
  var html = "";
  var log = ygPresetLog();
  var today = new Date().toISOString().slice(0,10);
  var ordered = PRESETS.slice().sort(function(a,b){
    var la=log[a.id], lb=log[b.id];
    var ta=la&&la.last?la.last:"", tb=lb&&lb.last?lb.last:"";
    if(ta!==tb) return ta<tb?1:-1; // most recent last-used first
    var ca=la&&la.count||0, cb=lb&&lb.count||0;
    if(ca!==cb) return cb-ca; // then most used
    return 0; // stable, preserves original order otherwise
  });
  ordered.forEach(function(pr) {
    // Calculate total cal and duration
    var totSecs = 0, totCal = 0, poseCount = 0;
    var validPoses = [];
    pr.poses.forEach(function(pp){
      var pose = POSES.find(function(p){ return p.id===pp.id; });
      if (pose) { totSecs+=pp.dur; totCal+=cal(pose.cpm,pp.dur); poseCount++; validPoses.push({pose:pose,dur:pp.dur}); }
    });
    var mins = Math.round(totSecs/60);
    var lvlCls = pr.level==="beginner"?"tag-b":pr.level==="intermediate"?"tag-i":"tag-a";
    var isLoaded = loadedPresetId===pr.id;
    var usage = log[pr.id];
    var usageBadge = "";
    if (usage && usage.last) {
      var daysAgo = Math.round((new Date(today)-new Date(usage.last))/86400000);
      var whenLbl = daysAgo<=0?"Today":daysAgo===1?"Yesterday":daysAgo+"d ago";
      usageBadge = '<span class="tag tag-usage">'+(usage.count>1?usage.count+'x \u00b7 ':'')+whenLbl+'</span>';
    }

    html += '<div class="preset-card" id="pc-'+pr.id+'">';
    html += '<div class="preset-top">';
    html += '<div class="preset-icon">'+pr.icon+'</div>';
    html += '<div class="preset-info">';
    html += '<div class="preset-name">'+pr.name+'</div>';
    html += '<div class="preset-meta">'+pr.duration+' &nbsp;\u00b7&nbsp; '+poseCount+' poses</div>';
    html += '<div class="preset-desc">'+pr.desc+'</div>';
    html += '<div class="preset-tags"><span class="tag '+lvlCls+'">'+pr.level+'</span><span class="tag tag-c">'+pr.focus+'</span>'+usageBadge+'</div>';
    html += '</div></div>';
    html += '<div class="preset-stats">';
    html += '<div class="pstat"><div class="pstat-val">'+poseCount+'</div><div class="pstat-lbl">Poses</div></div>';
    html += '<div class="pstat"><div class="pstat-val">'+mins+'</div><div class="pstat-lbl">Minutes</div></div>';
    html += '<div class="pstat"><div class="pstat-val">~'+totCal+'</div><div class="pstat-lbl">Calories</div></div>';
    html += '</div>';
    html += '<button class="preset-load-btn" data-pid="'+pr.id+'" onclick="loadPreset(this.dataset.pid)">'+
      (isLoaded ? '\u2713 Loaded \u2014 Go to My Routine' : '\u25B6 Load This Routine')+'</button>';
    html += '<div class="loaded-badge" id="lb-'+pr.id+'" style="'+(isLoaded?'display:block':'')+'">\u2713 Currently loaded in My Routine</div>';
    html += '<button class="toggle-poses-btn" data-pid="'+pr.id+'" onclick="togglePresetPoses(this.dataset.pid)">See poses \u25BE</button>';
    html += '<div class="preset-pose-list" id="ppl-'+pr.id+'">';
    validPoses.forEach(function(vp,i){
      var durLbl = vp.dur<60?vp.dur+"s":(vp.dur/60).toFixed(vp.dur%60===0?0:1)+"m";
      html += '<div class="ppl-item">';
      html += '<span class="ppl-num">'+(i+1)+'</span>';
      html += '<span class="ppl-emoji">'+vp.pose.e+'</span>';
      html += '<span class="ppl-name">'+vp.pose.n+'</span>';
      html += '<span class="ppl-dur">'+durLbl+'</span>';
      html += '</div>';
    });
    html += '</div></div>';
  });
  document.getElementById("presets-grid").innerHTML = html;
}

function togglePresetPoses(id) {
  var el = document.getElementById("ppl-"+id);
  if (el) el.classList.toggle("open");
}

// ── Preset usage tracking: powers "Last practiced" / "Most used" badges ──
function ygPresetLog() { try{ return JSON.parse(store.get("yoga_preset_log")||"{}"); }catch(e){ return {}; } }
function ygPresetLogSave(log) { try{ store.set("yoga_preset_log", JSON.stringify(log)); }catch(e){} }
function ygPresetMarkUsed(presetId) {
  var log = ygPresetLog();
  var entry = log[presetId] || {count:0, last:null};
  entry.count = (entry.count||0)+1;
  entry.last = new Date().toISOString().slice(0,10);
  log[presetId] = entry;
  ygPresetLogSave(log);
}

function loadPreset(presetId) {
  if (loadedPresetId === presetId) {
    // Already loaded — navigate to routine tab
    yogaSwitchTab("routine");
    return;
  }
  var pr = PRESETS.find(function(p){ return p.id===presetId; });
  if (!pr) return;

  var newRoutine = [];
  pr.poses.forEach(function(pp){
    var pose = POSES.find(function(p){ return p.id===pp.id; });
    if (pose) newRoutine.push({pose:pose, dur:pp.dur});
  });

  routine = newRoutine;
  loadedPresetId = presetId;
  ygPresetMarkUsed(presetId);
  updateCount();
  renderPresets();
  renderPoses(); // update + buttons

  // Brief confirmation then switch to routine
  setTimeout(function(){
    yogaSwitchTab("routine");
    renderRoutine();
  }, 400);
}


// ═══════════════════════════════════════════════════
// SAVED ROUTINES
// ═══════════════════════════════════════════════════
function getSaved() {
  try { return JSON.parse(store.get("yoga_saved") || "[]"); } catch(e) { return []; }
}
function putSaved(arr) {
  try { store.set("yoga_saved", JSON.stringify(arr)); } catch(e) {}
}

function saveRoutine() {
  if (!routine.length) return;
  var name = document.getElementById("routine-name").value.trim();
  if (!name) { name = "My Routine " + new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}); }
  var saved = getSaved();
  var entry = {
    id: Date.now().toString(),
    name: name,
    date: new Date().toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),
    poses: routine.map(function(r){ return {id:r.pose.id, dur:r.dur}; })
  };
  saved.unshift(entry);
  putSaved(saved);
  document.getElementById("routine-name").value = "";
  var msg = document.getElementById("save-msg");
  msg.textContent = 'Saved: ' + entry.name;
  setTimeout(function(){ msg.textContent=""; }, 3000);
  renderSaved();
}

function renderSaved() {
  var saved = getSaved();
  var el = document.getElementById("saved-list");
  var emptyEl = document.getElementById("saved-empty");
  if (!saved.length) {
    el.innerHTML = '<div style="text-align:center;padding:40px 0;color:var(--dim);font-size:12px;font-family:var(--font-mono)">No saved routines yet.<br><br>Build a routine and tap Save.</div>';
    return;
  }
  el.innerHTML = saved.map(function(entry) {
    // Resolve poses
    var resolved = [];
    var totSecs=0, totCal=0;
    entry.poses.forEach(function(pp){
      var pose = POSES.find(function(p){ return p.id===pp.id; });
      if (pose){ resolved.push({pose:pose,dur:pp.dur}); totSecs+=pp.dur; totCal+=cal(pose.cpm,pp.dur); }
    });
    var mins = Math.round(totSecs/60);
    var preview = resolved.slice(0,6).map(function(r){ return r.pose.e; }).join(" ") + (resolved.length>6?" ...":"");

    return '<div class="saved-item">' +
      '<div class="saved-item-top">' +
        '<div class="saved-item-name">'+entry.name+'</div>' +
        '<div class="saved-item-date">'+entry.date+'</div>' +
      '</div>' +
      '<div class="saved-poses-preview">'+preview+'</div>' +
      '<div class="saved-item-meta">'+resolved.length+' poses &nbsp;·&nbsp; '+mins+' min &nbsp;·&nbsp; ~'+totCal+' cal</div>' +
      '<div class="saved-item-btns">' +
        '<button class="sib-load" data-id="'+entry.id+'" onclick="loadSaved(this.dataset.id)">▶ Load</button>' +
        '<button class="sib-del" data-id="'+entry.id+'" onclick="deleteSaved(this.dataset.id)">Delete</button>' +
      '</div>' +
    '</div>';
  }).join("");
}

function loadSaved(id) {
  var saved = getSaved();
  var entry = saved.find(function(e){ return e.id===id; });
  if (!entry) return;
  var newRoutine = [];
  entry.poses.forEach(function(pp){
    var pose = POSES.find(function(p){ return p.id===pp.id; });
    if (pose) newRoutine.push({pose:pose,dur:pp.dur});
  });
  routine = newRoutine;
  loadedPresetId = null;
  updateCount();
  renderPoses();
  yogaSwitchTab("routine");
  renderRoutine();
}

function deleteSaved(id) {
  var saved = getSaved().filter(function(e){ return e.id!==id; });
  putSaved(saved);
  renderSaved();
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
renderPoses();;

/* ═══════ block boundary ═══════ */

if('serviceWorker' in navigator){ window.addEventListener('load',function(){ navigator.serviceWorker.register('service-worker.js').catch(function(){}); }); };

/* ═══════ block boundary ═══════ */

// ── WALK TIMER ──
  var walkTotal = 1200;
  var walkRunning = false;
  var walkPaused = false;
  var walkStartedAt = null;       // real timestamp when started
  var walkPausedAt = null;        // real timestamp when paused
  var walkElapsedBefore = 0;      // seconds elapsed before latest pause
  var walkIntervalId = null;
  var WALK_CAL_PER_SEC = 175 / 1800;

  function setWalkDuration(btn, secs) {
    walkTotal = secs;
    document.querySelectorAll('.walk-dur-btn').forEach(b => {
      b.style.background = '#2a2a2a'; b.style.borderColor = '#666'; b.style.color = '#ccc';
    });
    btn.style.background = '#86efac'; btn.style.borderColor = '#86efac'; btn.style.color = '#0f0f0f';
    walkReset();
  }

  function walkElapsed() {
    if (!walkStartedAt) return walkElapsedBefore;
    return walkElapsedBefore + Math.floor((Date.now() - walkStartedAt) / 1000);
  }

  function walkStart() {
    if (walkRunning && !walkPaused) return;
    if (!walkRunning) { walkElapsedBefore = 0; }
    walkRunning = true;
    walkPaused = false;
    walkStartedAt = Date.now();
    document.getElementById('walk-start-btn').textContent = 'WALKING...';
    document.getElementById('walk-start-btn').style.opacity = '0.5';
    document.getElementById('walk-pause-btn').disabled = false;
    clearInterval(walkIntervalId);
    walkIntervalId = setInterval(walkTick, 500);
  }

  function walkTick() {
    var elapsed = walkElapsed();
    var remaining = Math.max(0, walkTotal - elapsed);
    var mins = Math.floor(remaining / 60);
    var secs = remaining % 60;
    var display = document.getElementById('walk-display');
    display.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
    document.getElementById('walk-bar').style.width = (remaining / walkTotal * 100) + '%';
    var urgent = remaining <= 60;
    display.style.color = urgent ? '#e05555' : '#86efac';
    document.getElementById('walk-bar').style.background = urgent ? '#e05555' : '#86efac';
    var cals = Math.round(elapsed * WALK_CAL_PER_SEC);
    if (cals > 0) document.getElementById('walk-cal-display').textContent = '🔥 ~' + cals + ' calories burned';
    if (remaining <= 0) {
      clearInterval(walkIntervalId); walkRunning = false;
      display.textContent = 'DONE!'; display.style.color = '#86efac';
      document.getElementById('walk-cal-display').textContent = '🎉 Great walk! ~' + Math.round(walkTotal * WALK_CAL_PER_SEC) + ' cal burned';
      document.getElementById('walk-start-btn').textContent = 'START WALK';
      document.getElementById('walk-start-btn').style.opacity = '1';
      beepDone();
    }
  }

  function walkPause() {
    if (!walkRunning) return;
    walkPaused = !walkPaused;
    if (walkPaused) {
      walkElapsedBefore = walkElapsed();
      walkStartedAt = null;
      clearInterval(walkIntervalId);
    } else {
      walkStartedAt = Date.now();
      walkIntervalId = setInterval(walkTick, 500);
    }
    document.getElementById('walk-pause-btn').textContent = walkPaused ? '▶' : '⏸';
  }

  function walkReset() {
    clearInterval(walkIntervalId);
    walkRunning = false; walkPaused = false;
    walkStartedAt = null; walkElapsedBefore = 0;
    var mins = Math.floor(walkTotal / 60);
    document.getElementById('walk-display').textContent = mins + ':00';
    document.getElementById('walk-display').style.color = '#86efac';
    document.getElementById('walk-bar').style.width = '100%';
    document.getElementById('walk-bar').style.background = '#86efac';
    document.getElementById('walk-cal-display').textContent = '';
    document.getElementById('walk-start-btn').textContent = 'START WALK';
    document.getElementById('walk-start-btn').style.opacity = '1';
    document.getElementById('walk-pause-btn').textContent = '⏸';
    document.getElementById('walk-pause-btn').disabled = true;
  }

  // ── RIDE TIMER ──
  var rideTotal = 1200;
  var rideRunning = false;
  var ridePaused = false;
  var rideStartedAt = null;
  var ridePausedElapsed = 0;
  var rideIntervalId = null;
  var intervalsOn = false;
  var intervalPhase = 'push';
  var PUSH_SECS = 120;
  var REST_SECS = 180;
  var intervalPhaseStart = null;  // real timestamp when current interval phase started

  function setRideDuration(btn, secs) {
    rideTotal = secs;
    document.querySelectorAll('.ride-dur-btn').forEach(b => {
      b.style.background = '#2a2a2a'; b.style.borderColor = '#666'; b.style.color = '#ccc';
    });
    btn.style.background = 'var(--accent)'; btn.style.borderColor = 'var(--accent)'; btn.style.color = '#0f0f0f';
    rideReset();
  }

  function rideElapsed() {
    if (!rideStartedAt) return ridePausedElapsed;
    return ridePausedElapsed + Math.floor((Date.now() - rideStartedAt) / 1000);
  }

  function rideStart() {
    if (rideRunning && !ridePaused) return;
    if (!rideRunning) { ridePausedElapsed = 0; }
    rideRunning = true; ridePaused = false;
    rideStartedAt = Date.now();
    if (intervalsOn && !intervalPhaseStart) {
      intervalPhase = 'push';
      intervalPhaseStart = Date.now();
    }
    document.getElementById('ride-start-btn').textContent = 'RIDING...';
    document.getElementById('ride-start-btn').style.opacity = '0.5';
    document.getElementById('ride-pause-btn').disabled = false;
    clearInterval(rideIntervalId);
    rideIntervalId = setInterval(rideTick, 500);
  }

  function rideTick() {
    var elapsed = rideElapsed();
    var remaining = Math.max(0, rideTotal - elapsed);
    updateRideDisplay(remaining);

    if (intervalsOn && intervalPhaseStart) {
      var phaseElapsed = Math.floor((Date.now() - intervalPhaseStart) / 1000);
      var phaseDur = intervalPhase === 'push' ? PUSH_SECS : REST_SECS;
      var phaseRemaining = Math.max(0, phaseDur - phaseElapsed);
      if (phaseRemaining <= 0) {
        intervalPhase = intervalPhase === 'push' ? 'rest' : 'push';
        intervalPhaseStart = Date.now();
        phaseRemaining = intervalPhase === 'push' ? PUSH_SECS : REST_SECS;
        beepOnce();
      }
      var pm = Math.floor(phaseRemaining / 60);
      var ps = phaseRemaining % 60;
      var label = intervalPhase === 'push' ? '🔥 PUSH HARD' : '😮‍💨 RECOVER';
      document.getElementById('ride-phase-label').textContent = label + ' — ' + pm + ':' + (ps < 10 ? '0' : '') + ps;
      document.getElementById('ride-phase-label').style.color = intervalPhase === 'push' ? 'var(--accent)' : '#7dd3fc';
    }

    if (remaining <= 0) {
      clearInterval(rideIntervalId); rideRunning = false;
      document.getElementById('ride-display').textContent = 'DONE!';
      document.getElementById('ride-display').style.color = 'var(--accent)';
      document.getElementById('ride-phase-label').textContent = '🎉 Great ride!';
      document.getElementById('ride-phase-label').style.color = 'var(--accent)';
      document.getElementById('ride-start-btn').textContent = 'START RIDE';
      document.getElementById('ride-start-btn').style.opacity = '1';
      beepDone();
    }
  }

  function updateRideDisplay(remaining) {
    var mins = Math.floor(remaining / 60);
    var secs = remaining % 60;
    var display = document.getElementById('ride-display');
    display.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
    document.getElementById('ride-bar').style.width = (remaining / rideTotal * 100) + '%';
    var urgent = remaining <= 60;
    display.style.color = urgent ? '#e05555' : 'var(--accent)';
    document.getElementById('ride-bar').style.background = urgent ? '#e05555' : 'var(--accent)';
  }

  function ridePause() {
    if (!rideRunning) return;
    ridePaused = !ridePaused;
    if (ridePaused) {
      ridePausedElapsed = rideElapsed();
      rideStartedAt = null;
      clearInterval(rideIntervalId);
    } else {
      rideStartedAt = Date.now();
      if (intervalsOn) intervalPhaseStart = Date.now();
      rideIntervalId = setInterval(rideTick, 500);
    }
    document.getElementById('ride-pause-btn').textContent = ridePaused ? '▶' : '⏸';
  }

  function rideReset() {
    clearInterval(rideIntervalId);
    rideRunning = false; ridePaused = false;
    rideStartedAt = null; ridePausedElapsed = 0;
    intervalPhase = 'push'; intervalPhaseStart = null;
    var mins = Math.floor(rideTotal / 60);
    document.getElementById('ride-display').textContent = mins + ':00';
    document.getElementById('ride-display').style.color = 'var(--accent)';
    document.getElementById('ride-bar').style.width = '100%';
    document.getElementById('ride-bar').style.background = 'var(--accent)';
    document.getElementById('ride-phase-label').textContent = '';
    document.getElementById('ride-start-btn').textContent = 'START RIDE';
    document.getElementById('ride-start-btn').style.opacity = '1';
    document.getElementById('ride-pause-btn').textContent = '⏸';
    document.getElementById('ride-pause-btn').disabled = true;
  }

  function toggleIntervals() {
    intervalsOn = !intervalsOn;
    var toggle = document.getElementById('interval-toggle');
    var knob = document.getElementById('interval-knob');
    if (intervalsOn) {
      toggle.style.background = 'var(--accent)'; toggle.style.borderColor = 'var(--accent)';
      knob.style.left = '23px'; knob.style.background = '#0f0f0f';
    } else {
      toggle.style.background = '#2a2a2a'; toggle.style.borderColor = '#666';
      knob.style.left = '3px'; knob.style.background = '#666';
      document.getElementById('ride-phase-label').textContent = '';
    }
    if (rideRunning) rideReset();
  }

  function beepOnce() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 660;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch(e) {}
  }
  function showDay(index) {
    document.querySelectorAll('.day-panel').forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.day-nav .day-tab').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function toggle(card) {
    card.classList.toggle('open');
  }

  function switchVar(btn, panelId) {
    event.stopPropagation();
    var cardBody = btn.closest('.card-body');
    cardBody.querySelectorAll('.var-tab').forEach(t => t.classList.remove('active'));
    cardBody.querySelectorAll('.var-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    cardBody.querySelector('#' + panelId).classList.add('active');
  }

  // ── SET TRACKER ──
  function dotClick(dot) {
    event.stopPropagation();
    dot.classList.toggle('done');
    var tracker = dot.closest('.set-tracker');
    var dots = tracker.querySelectorAll('.set-dot');
    var done = tracker.querySelectorAll('.set-dot.done').length;
    var msg = tracker.querySelector('.set-complete-msg');
    if (done === dots.length) {
      msg.classList.add('show');
    } else {
      msg.classList.remove('show');
    }
    if (window.egOnDotChange) egOnDotChange(tracker);
  }

  function resetDots(btn) {
    event.stopPropagation();
    var tracker = btn.closest('.set-tracker');
    tracker.querySelectorAll('.set-dot').forEach(d => d.classList.remove('done'));
    tracker.querySelector('.set-complete-msg').classList.remove('show');
    if (window.egOnDotChange) egOnDotChange(tracker);
  }

  // ── TIMER ──
  var timerInterval = null;
  var timerTotal = 0;
  var timerRemaining = 0;
  var timerPaused = false;

  function tgStartTimer(seconds, name, label) {
    event.stopPropagation();
    clearInterval(timerInterval);
    timerTotal = seconds;
    timerRemaining = seconds;
    timerPaused = false;

    var widget = document.getElementById('timer-widget');
    var display = document.getElementById('timer-display');
    var bar = document.getElementById('timer-bar');
    var lbl = document.getElementById('timer-label');
    var nameEl = document.getElementById('timer-name');
    var pauseBtn = document.getElementById('t-pause');

    lbl.textContent = label || 'TIMER';
    nameEl.textContent = name || '';
    widget.classList.add('active');
    pauseBtn.textContent = '⏸';
    display.classList.remove('urgent');
    bar.classList.remove('urgent');

    updateTimerDisplay();

    timerInterval = setInterval(function() {
      if (!timerPaused) {
        timerRemaining--;
        updateTimerDisplay();
        if (timerRemaining <= 0) {
          clearInterval(timerInterval);
          display.textContent = 'GO!';
          display.classList.remove('urgent');
          bar.style.width = '0%';
          beepDone();
          setTimeout(function() {
            if (timerRemaining <= 0) closeTimer();
          }, 2000);
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    var display = document.getElementById('timer-display');
    var bar = document.getElementById('timer-bar');
    var mins = Math.floor(timerRemaining / 60);
    var secs = timerRemaining % 60;
    display.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
    var pct = (timerRemaining / timerTotal) * 100;
    bar.style.width = pct + '%';
    var urgent = timerRemaining <= 10;
    display.classList.toggle('urgent', urgent);
    bar.classList.toggle('urgent', urgent);
  }

  function pauseTimer() {
    timerPaused = !timerPaused;
    document.getElementById('t-pause').textContent = timerPaused ? '▶' : '⏸';
  }

  function restartTimer() {
    timerRemaining = timerTotal;
    timerPaused = false;
    document.getElementById('t-pause').textContent = '⏸';
    document.getElementById('timer-display').classList.remove('urgent');
    document.getElementById('timer-bar').classList.remove('urgent');
    updateTimerDisplay();
  }

  function closeTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-widget').classList.remove('active');
  }

  function beepDone() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.15, 0.3].forEach(function(delay) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.4, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.25);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.25);
      });
    } catch(e) {}
  };

/* ═══════ block boundary ═══════ */

(function(){
  function slug(s){return (s||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");}
  function pad(n){return String(n).padStart(2,"0");}
  function dkey(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());}
  function today(){return dkey(new Date());}
  function loadDone(){try{return JSON.parse(localStorage.getItem("eg_done")||"{}")||{};}catch(e){return {};}}
  function saveDone(o){try{localStorage.setItem("eg_done",JSON.stringify(o));}catch(e){}}
  function url(){return localStorage.getItem("ft_sheets_url")||"";}
  window.egSlug=slug; window.egToday=today;
  // Bridge hooks for the tracker's yoga completion card (dash + streak + auto-push)
  window.egIsDone=function(exid){ return !!((loadDone()[today()]||{})[exid]); };
  window.egSetDone=function(exid,on){ var d=loadDone(),t=today(); d[t]=d[t]||{}; if(on)d[t][exid]=true; else delete d[t][exid]; if(!Object.keys(d[t]).length)delete d[t]; saveDone(d); renderDash(); scheduleSync(); };
  document.addEventListener("DOMContentLoaded",function(){ if(typeof tgYogaRefresh==="function") tgYogaRefresh(); });

  function tagCards(){
    document.querySelectorAll(".exercise-card").forEach(function(card){
      var nm=card.querySelector(".exercise-name"); if(nm) card.dataset.exid=slug(nm.textContent);
    });
  }
  window.egOnDotChange=function(tracker){
    var card=tracker.closest(".exercise-card"); if(!card) return;
    var exid=card.dataset.exid||slug((card.querySelector(".exercise-name")||{}).textContent||"");
    if(!exid) return;
    var dots=tracker.querySelectorAll(".set-dot"), done=tracker.querySelectorAll(".set-dot.done").length;
    var all=dots.length>0 && done===dots.length;
    var d=loadDone(), t=today(); d[t]=d[t]||{};
    if(all) d[t][exid]=true; else delete d[t][exid];
    if(!Object.keys(d[t]).length) delete d[t];
    saveDone(d); egCrossLog(); renderDash(); scheduleSync();
  };

  // Log estimated calories from completed strength exercises into TODAY's tracker day.
  // Excludes the Wednesday yoga flow (logged separately) so it isn't double-counted.
  function egCrossLog(){
    try{
      if(typeof getDay!=="function"||typeof saveDay!=="function"||typeof todayKey!=="function") return;
      var tk=todayKey(), day=getDay(tk), id="eg-strength-"+tk;
      day.exercises=(day.exercises||[]).filter(function(e){return e.id!==id;});
      saveDay(day,tk);
      if(typeof renderAll==="function") renderAll();
    }catch(e){}
  }

  function restoreToday(){
    var set=(loadDone()[today()])||{};
    document.querySelectorAll(".exercise-card").forEach(function(card){
      if(!set[card.dataset.exid]) return;
      var tr=card.querySelector(".set-tracker"); if(!tr) return;
      tr.querySelectorAll(".set-dot").forEach(function(dot){dot.classList.add("done");});
      var msg=tr.querySelector(".set-complete-msg"); if(msg) msg.classList.add("show");
    });
  }

  var syncTimer=null;
  function scheduleSync(){ if(!url())return; clearTimeout(syncTimer); syncTimer=setTimeout(function(){pushSync();},4000); }
  function pushSync(cb){
    var u=url(); if(!u){ if(cb)cb(false); return; }
    setStatus("Saving\u2026");
    fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:"data="+encodeURIComponent(JSON.stringify({workouts:loadDone()}))})
      .then(function(){ localStorage.setItem("eg_last_sync",Date.now()); setStatus("\u2713 Saved "+new Date().toLocaleTimeString()); if(cb)cb(true); })
      .catch(function(){ setStatus("Offline \u2014 will retry next time"); if(cb)cb(false); });
  }
  function setStatus(s){ var el=document.getElementById("eg-sync-status"); if(el) el.textContent=s; }

  window.egSaveUrl=function(){
    var v=((document.getElementById("eg-url")||{}).value||"").trim();
    localStorage.setItem("ft_sheets_url",v);
    setStatus(v?"URL saved":"URL cleared");
    if(v) pushSync();
  };
  window.egPushNow=function(){ if(!url()){setStatus("Enter your Apps Script URL first");return;} pushSync(); };
  window.egOpenSettings=function(){ var o=document.getElementById("eg-settings"); if(!o)return; var ue=document.getElementById("eg-url"); if(ue)ue.value=url(); o.style.display="block"; };
  window.egCloseSettings=function(){ var o=document.getElementById("eg-settings"); if(o)o.style.display="none"; };

  function streak(d){
    var s=0, day=new Date();
    if(!(d[today()]&&Object.keys(d[today()]).length)) day.setDate(day.getDate()-1);
    for(var g=0;g<400;g++){ var k=dkey(day); if(d[k]&&Object.keys(d[k]).length){s++;day.setDate(day.getDate()-1);}else break; }
    return s;
  }
  function pretty(id){ return id.replace(/-/g," ").replace(/\b\w/g,function(c){return c.toUpperCase();}); }
  function bestStreak(d){
    var ks=Object.keys(d).filter(function(k){return Object.keys(d[k]).length;}).sort(), best=0,cur=0,prev=null;
    ks.forEach(function(k){
      if(prev){var diff=Math.round((new Date(k+"T00:00")-new Date(prev+"T00:00"))/86400000);cur=(diff===1)?cur+1:1;}else{cur=1;}
      if(cur>best)best=cur; prev=k;
    });
    return best;
  }
  function renderDash(){
    var el=document.getElementById("eg-dash"); if(!el) return;
    var d=loadDone();
    var allK=Object.keys(d).filter(function(k){return Object.keys(d[k]).length;}).sort();
    var totalW=allK.length, totalEx=allK.reduce(function(a,k){return a+Object.keys(d[k]).length;},0);
    var st=streak(d), best=bestStreak(d);
    var now=new Date(), wd=(now.getDay()+6)%7, monday=new Date(now); monday.setDate(now.getDate()-wd);
    var dl=["M","T","W","T","F","S","S"], wkTrained=0, wkCells=[];
    for(var i=0;i<7;i++){var dt=new Date(monday);dt.setDate(monday.getDate()+i);var k=dkey(dt);var n=d[k]?Object.keys(d[k]).length:0;if(n)wkTrained++;var isT=k===today();
      wkCells.push('<div style="flex:1;text-align:center"><div style="font-size:10px;color:#777;margin-bottom:4px">'+dl[i]+'</div><div style="height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;'+(n?"background:var(--accent);color:#0f0f0f":"background:rgba(255,255,255,.05);color:#555")+(isT?";outline:2px solid #7dd3fc;outline-offset:1px":"")+'">'+(n||"\u00b7")+'</div></div>');}
    var heat="";
    for(var j=34;j>=0;j--){var d2=new Date();d2.setDate(d2.getDate()-j);var k2=dkey(d2);var c2=d[k2]?Object.keys(d[k2]).length:0;
      var bg=c2===0?"rgba(255,255,255,.05)":c2<3?"rgba(232,255,71,.35)":c2<5?"rgba(232,255,71,.65)":"var(--accent)";
      heat+='<div title="'+k2+": "+c2+'" style="width:100%;padding-bottom:100%;border-radius:3px;background:'+bg+'"></div>';}
    var weeks=[],labels=[];
    for(var w=5;w>=0;w--){var ws=new Date(monday);ws.setDate(monday.getDate()-7*w);var c=0;for(var x=0;x<7;x++){var wk=new Date(ws);wk.setDate(ws.getDate()+x);var kk=dkey(wk);if(d[kk]&&Object.keys(d[kk]).length)c++;}weeks.push(c);labels.push((ws.getMonth()+1)+"/"+ws.getDate());}
    var maxW=Math.max(1,Math.max.apply(null,weeks));
    var bars=weeks.map(function(c,i){var hh=Math.round((c/maxW)*70);return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="font-size:10px;color:#aaa">'+c+'</div><div style="width:58%;height:'+hh+'px;min-height:3px;background:'+(c?"var(--accent)":"rgba(255,255,255,.12)")+';border-radius:4px 4px 0 0"></div><div style="font-size:9px;color:#666">'+labels[i]+'</div></div>';}).join("");
    var tally={}; allK.forEach(function(k){Object.keys(d[k]).forEach(function(ex){tally[ex]=(tally[ex]||0)+1;});});
    var top=Object.keys(tally).sort(function(a,b){return tally[b]-tally[a];}).slice(0,5), maxT=top.length?tally[top[0]]:1;
    var topHtml=top.length?top.map(function(ex){var pct=Math.round((tally[ex]/maxT)*100);return '<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span style="color:#ccc">'+pretty(ex)+'</span><span style="color:#5eead4">'+tally[ex]+'\u00d7</span></div><div style="height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:var(--accent)"></div></div></div>';}).join(""):'<div style="color:#666">No data yet.</div>';
    var recent=allK.slice().reverse().slice(0,8);
    var recentHtml=recent.length?recent.map(function(k){var n=Object.keys(d[k]).length;return '<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span style="color:#ccc">'+k+'</span><span style="color:#5eead4;font-weight:600">'+n+' ex</span></div>';}).join(""):'<div style="color:#666;padding:8px 0">No workouts logged yet \u2014 tap the set dots as you train.</div>';
    function stat(v,l,c){return '<div style="flex:1;text-align:center;background:rgba(255,255,255,.03);border-radius:12px;padding:14px 4px"><div style="font-size:23px;font-weight:800;color:'+c+'">'+v+'</div><div style="font-size:9px;color:#888;text-transform:uppercase;letter-spacing:.5px;margin-top:3px">'+l+'</div></div>';}
    function lbl(t){return '<div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;margin:22px 0 10px">'+t+'</div>';}
    var h='<div style="display:flex;gap:8px">'+stat(st,"Streak","#86efac")+stat(best,"Best","#fbbf24")+stat(wkTrained+"/7","Week","#5eead4")+stat(totalW,"Workouts","#7dd3fc")+'</div>';
    h+=lbl("This week")+'<div style="display:flex;gap:6px">'+wkCells.join("")+'</div>';
    h+=lbl("Last 5 weeks")+'<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px">'+heat+'</div>';
    h+=lbl("Workouts per week")+'<div style="display:flex;align-items:flex-end;gap:6px;height:104px;padding-top:6px">'+bars+'</div>';
    h+=lbl("Most-trained exercises")+topHtml;
    h+=lbl("Recent workouts")+recentHtml;
    h+='<div style="font-size:11px;color:#5a5a5a;margin-top:16px;text-align:center">'+totalEx+' exercises completed all-time</div>';
    el.innerHTML=h;
  }

  function weekdayIdx(){ return (new Date().getDay()+6)%7; }  // Mon=0 … Sun=6
  window.showMode=function(mode){
    var panels=document.querySelectorAll('.day-panel'), ti=weekdayIdx();
    panels.forEach(function(p,i){
      p.classList.remove('week-collapsed','week-open');
      if(mode==='progress'){ p.style.display=(p.id==='day-10')?'block':'none'; }
      else if(mode==='week'){ if(p.id==='day-10'){p.style.display='none';} else {p.style.display='block';p.classList.add('week-collapsed');} }
      else { p.style.display=(i===ti)?'block':'none'; }
    });
    var tabs=document.querySelectorAll('.mode-nav .day-tab'), order={today:0,week:1,progress:2};
    tabs.forEach(function(t,i){ t.classList.toggle('active', i===order[mode]); });
    if(mode==='progress' && window.egRenderDash) egRenderDash();
    try{window.scrollTo(0,0);}catch(e){}
  };
  document.addEventListener('click',function(e){
    var hdr=e.target.closest && e.target.closest('.day-header'); if(!hdr) return;
    var panel=hdr.closest('.day-panel'); if(!panel||!panel.classList.contains('week-collapsed')) return;
    panel.classList.toggle('week-open');
  });
  function init(){
    tagCards(); restoreToday(); renderDash(); showMode('today');
    var ue=document.getElementById("eg-url"); if(ue) ue.value=url();
    var ls=localStorage.getItem("eg_last_sync"); if(ls) setStatus("Last saved "+new Date(+ls).toLocaleString());
  }
  if(document.readyState!=="loading") init(); else document.addEventListener("DOMContentLoaded",init);
})();;

/* ═══════ block boundary ═══════ */

(function(){
  var KH="eg_hidden_v1", KC="eg_custom_v1", KM="eg_moved_v1";
  function jget(k,f){try{return JSON.parse(localStorage.getItem(k))||f;}catch(e){return f;}}
  function hidden(){return jget(KH,[]);}
  function saveHidden(a){localStorage.setItem(KH,JSON.stringify(a));}
  function custom(){return jget(KC,{});}
  function saveCustom(o){localStorage.setItem(KC,JSON.stringify(o));}
  function moved(){return jget(KM,{});}
  function saveMoved(o){localStorage.setItem(KM,JSON.stringify(o));}
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  function escA(s){return esc(s).replace(/'/g,"&#39;");}
  function slug(s){return (window.egSlug?egSlug(s):String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""));}
  function today(){return window.egToday?egToday():new Date().toISOString().slice(0,10);}
  function uid(){return "c"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
  function fmt(sec){sec=+sec||0;var m=Math.floor(sec/60),s=sec%60;return m+":"+(s<10?"0":"")+s;}
  function lines(t){return String(t||"").split("\n").map(function(x){return x.trim();}).filter(Boolean);}
  function dotsHtml(n){var s="";for(var i=1;i<=n;i++)s+='<div class="set-dot" onclick="dotClick(this)" title="Set '+i+'"></div>';return s;}
  function cardExid(card){return card.dataset.exid||slug((card.querySelector(".exercise-name")||{}).textContent||"");}
  function cardName(card){return (card.querySelector(".exercise-name")||{}).textContent||"";}
  function dayTitle(pid){var p=document.getElementById(pid);return p?((p.querySelector(".day-title")||{}).textContent||pid):pid;}
  function daySub(pid){var p=document.getElementById(pid);if(!p)return"";var s=(p.querySelector(".day-subtitle")||{}).textContent||"";return s.split("\u00b7")[0].trim();}
  function panelsList(){var a=[];document.querySelectorAll("#tg-app .day-panel").forEach(function(p){if(p.id==="day-10")return;a.push({id:p.id,title:dayTitle(p.id),sub:daySub(p.id)});});return a;}
  function anchorOf(panel){return panel.querySelector(".eg-add-btn");}

  // ── TOAST ──
  var toastT=null;
  function toast(msg){var el=document.getElementById("eg-toast");if(!el){el=document.createElement("div");el.id="eg-toast";document.body.appendChild(el);}el.textContent=msg;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("show");},1800);}

  // ── CUSTOM CARDS ──
  function buildCard(c){
    var d=document.createElement("div");
    d.className="exercise-card eg-custom";
    d.setAttribute("onclick","toggle(this)");
    d.dataset.custom=c.id;
    d.dataset.exid=slug(c.name);
    var h='<div class="card-header"><div class="exercise-num" style="color:#e8ff47">+</div>'
      +'<div class="card-info"><div class="exercise-name">'+esc(c.name)+'</div><div class="exercise-meta">'
      +(c.target?'<span class="tag tag-target">'+esc(c.target)+'</span>':'')
      +(c.band?'<span class="tag tag-band">'+esc(c.band)+'</span>':'')
      +'</div></div>'
      +(c.setsReps?'<div class="sets-reps">'+esc(c.setsReps)+'<span>sets &times; reps</span></div>':'')
      +'<div class="chevron">&#9660;</div></div>';
    var b="";
    if(c.cue) b+='<div class="mirror-cue">'+esc(c.cue)+'</div>';
    if(c.setup) b+='<div class="section-label">Setup</div><div class="setup-box">'+esc(c.setup)+'</div>';
    if(c.cues&&c.cues.length) b+='<div class="section-label">Form Cues</div><ul class="cues-list">'+c.cues.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>';
    if(c.mistakes&&c.mistakes.length) b+='<div class="section-label">Common Mistakes</div><ul class="mistakes-list">'+c.mistakes.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>';
    if(c.note) b+='<div class="note-box">&#128161; '+esc(c.note)+'</div>';
    var dn=Math.max(1,+c.dots||3);
    b+='<div class="set-tracker"><span class="set-tracker-label">Sets</span><div class="set-dots">'+dotsHtml(dn)+'</div><button class="set-reset" onclick="resetDots(this)" title="Reset">&#8634;</button><span class="set-complete-msg">Done! &#10003;</span></div>';
    if(c.rest) b+='<div class="timer-row"><button class="timer-btn" onclick="tgStartTimer('+(+c.rest)+", 'Rest &mdash; "+escA(c.name)+"', 'REST')"+'"><span class="timer-icon">&#9201;</span>'+fmt(c.rest)+' rest</button></div>';
    var tools='<div class="eg-tools"><button class="eg-t-btn move" data-act="move">Move</button><button class="eg-t-btn" data-act="edit">Edit</button><button class="eg-t-btn danger" data-act="del">Delete</button></div>';
    d.innerHTML=h+'<div class="card-body">'+b+'</div>'+tools;
    d.querySelector(".eg-tools").addEventListener("click",function(e){
      e.stopPropagation();
      var act=e.target.getAttribute("data-act");
      if(act==="move") openMove({type:"custom",pid:d.dataset.panel,id:c.id,name:c.name,current:d.dataset.panel});
      else if(act==="edit") openModal(d.dataset.panel,c.id);
      else if(act==="del"){ if(confirm('Delete "'+c.name+'"? Your completion history is kept.')) delCustom(d.dataset.panel,c.id); }
    });
    return d;
  }

  function renderCustom(){
    document.querySelectorAll("#tg-app .exercise-card.eg-custom").forEach(function(n){n.remove();});
    var store=custom();
    Object.keys(store).forEach(function(pid){
      var panel=document.getElementById(pid); if(!panel) return;
      var addBtn=anchorOf(panel);
      (store[pid]||[]).forEach(function(c){
        var card=buildCard(c); card.dataset.panel=pid;
        if(addBtn) panel.insertBefore(card,addBtn); else panel.appendChild(card);
      });
    });
    restoreCustomToday();
  }

  function restoreCustomToday(){
    var set=(jget("eg_done",{})[today()])||{};
    document.querySelectorAll("#tg-app .exercise-card.eg-custom").forEach(function(card){
      if(!set[card.dataset.exid]) return;
      var tr=card.querySelector(".set-tracker"); if(!tr) return;
      tr.querySelectorAll(".set-dot").forEach(function(x){x.classList.add("done");});
      var m=tr.querySelector(".set-complete-msg"); if(m) m.classList.add("show");
    });
  }

  function delCustom(pid,id){
    var s=custom(); if(s[pid]){ s[pid]=s[pid].filter(function(c){return c.id!==id;}); if(!s[pid].length) delete s[pid]; saveCustom(s); }
    renderCustom();
  }

  function moveCustom(pid,id,target){
    var s=custom(); if(!s[pid]) return;
    var c=null;
    s[pid]=s[pid].filter(function(x){ if(x.id===id){c=x;return false;} return true; });
    if(!s[pid].length) delete s[pid];
    if(c){ (s[target]=s[target]||[]).push(c); }
    saveCustom(s); renderCustom();
  }

  // ── PREBUILT CARDS: tools + hide + move ──
  function injectPrebuilt(){
    document.querySelectorAll("#tg-app .exercise-card:not(.eg-custom)").forEach(function(card){
      if(card.querySelector(".eg-tools")) return;
      card.dataset.home=(card.closest(".day-panel")||{}).id||"";
      var exid=cardExid(card);
      if(hidden().indexOf(exid)>=0) card.classList.add("eg-hidden");
      var t=document.createElement("div"); t.className="eg-tools";
      t.innerHTML='<button class="eg-t-btn move" data-act="move">Move</button><button class="eg-t-btn" data-act="hide"></button>';
      card.appendChild(t);
      syncBtn(card);
      t.addEventListener("click",function(e){
        e.stopPropagation();
        var act=e.target.getAttribute("data-act");
        if(act==="move"){ openMove({type:"pre",card:card,name:cardName(card),current:(card.closest(".day-panel")||{}).id}); return; }
        var h=hidden(),i=h.indexOf(exid);
        if(i>=0){h.splice(i,1);card.classList.remove("eg-hidden");}
        else{h.push(exid);card.classList.add("eg-hidden");}
        saveHidden(h); syncBtn(card); updateCount();
      });
    });
  }
  function syncBtn(card){var b=card.querySelector('.eg-tools [data-act="hide"]'); if(b) b.textContent=card.classList.contains("eg-hidden")?"Restore":"Hide";}

  function findPrebuilt(exid){
    var found=null;
    document.querySelectorAll("#tg-app .exercise-card:not(.eg-custom)").forEach(function(c){ if(!found && cardExid(c)===exid) found=c; });
    return found;
  }
  function applyMoves(){
    var mv=moved();
    Object.keys(mv).forEach(function(exid){
      var pid=mv[exid], panel=document.getElementById(pid); if(!panel) return;
      var card=findPrebuilt(exid); if(!card) return;
      var anchor=anchorOf(panel);
      if(anchor) panel.insertBefore(card,anchor); else panel.appendChild(card);
      if(card.dataset.home!==pid) card.classList.add("eg-moved-from-home");
    });
  }
  function movePrebuilt(card,target){
    var exid=cardExid(card), home=card.dataset.home||(card.closest(".day-panel")||{}).id||"", mv=moved();
    if(target===home){ delete mv[exid]; card.classList.remove("eg-moved-from-home"); }
    else { mv[exid]=target; card.classList.add("eg-moved-from-home"); }
    saveMoved(mv);
    var panel=document.getElementById(target), anchor=anchorOf(panel);
    if(anchor) panel.insertBefore(card,anchor); else panel.appendChild(card);
  }

  // ── ADD BUTTONS + EDIT BAR ──
  function injectAddButtons(){
    document.querySelectorAll("#tg-app .day-panel").forEach(function(p){
      if(p.id==="day-10"||p.querySelector(".eg-add-btn")) return;
      var b=document.createElement("button"); b.className="eg-add-btn"; b.type="button"; b.textContent="+ Add exercise";
      b.addEventListener("click",function(){openModal(p.id,null);});
      p.appendChild(b);
    });
  }
  function updateCount(){var el=document.querySelector("#tg-app .eg-hidden-count"); if(el){var n=hidden().length; el.textContent=n?(n+" hidden"):"";}}
  function injectBar(){
    var nav=document.querySelector("#tg-app .mode-nav"); if(!nav||document.querySelector("#tg-app .eg-editbar")) return;
    var bar=document.createElement("div"); bar.className="eg-editbar";
    bar.innerHTML='<button type="button" class="eg-edit-toggle">&#9999; Edit exercises</button><span class="eg-hidden-count"></span>';
    nav.insertAdjacentElement("afterend",bar);
    bar.querySelector(".eg-edit-toggle").addEventListener("click",function(){
      var app=document.getElementById("tg-app"); app.classList.toggle("eg-edit");
      this.innerHTML=app.classList.contains("eg-edit")?"&#10003; Done editing":"&#9999; Edit exercises";
    });
  }

  // ── MOVE PICKER ──
  function buildMoveModal(){
    if(document.getElementById("eg-move")) return;
    var m=document.createElement("div"); m.id="eg-move";
    m.innerHTML='<div class="eg-move-sheet"><div class="eg-move-title">Move to\u2026</div><div class="eg-move-name" id="eg-move-name"></div><div class="eg-move-days" id="eg-move-days"></div><button type="button" class="eg-move-cancel" id="eg-move-cancel">Cancel</button></div>';
    document.body.appendChild(m);
    document.getElementById("eg-move-cancel").addEventListener("click",closeMove);
    m.addEventListener("click",function(e){if(e.target===m)closeMove();});
  }
  function openMove(ctx){
    buildMoveModal();
    document.getElementById("eg-move-name").textContent=ctx.name||"";
    var wrap=document.getElementById("eg-move-days"); wrap.innerHTML="";
    panelsList().forEach(function(p){
      var b=document.createElement("button"); b.type="button"; b.className="eg-day-opt";
      b.innerHTML=esc(p.title)+(p.id===ctx.current?'<span class="eg-cur-tag">CURRENT</span>':'')+(p.sub?'<small>'+esc(p.sub)+'</small>':'');
      if(p.id===ctx.current){ b.classList.add("cur"); b.disabled=true; }
      else b.addEventListener("click",function(){ doMove(ctx,p.id); closeMove(); });
      wrap.appendChild(b);
    });
    document.getElementById("eg-move").classList.add("open");
  }
  function closeMove(){var m=document.getElementById("eg-move"); if(m)m.classList.remove("open");}
  function doMove(ctx,target){
    if(ctx.type==="custom") moveCustom(ctx.pid,ctx.id,target);
    else movePrebuilt(ctx.card,target);
    toast("Moved to "+dayTitle(target));
  }

  // ── ADD / EDIT MODAL ──
  function buildModal(){
    if(document.getElementById("eg-modal")) return;
    var dayOpts="";
    panelsList().forEach(function(p){ dayOpts+='<option value="'+p.id+'">'+esc(p.title)+'</option>'; });
    var m=document.createElement("div"); m.id="eg-modal";
    m.innerHTML='<div class="eg-sheet">'
      +'<h2 id="eg-m-title">Add exercise</h2><div class="eg-sub">Custom exercises live on this device and track sets just like the built-in ones.</div>'
      +'<label>Name *</label><input id="eg-f-name" placeholder="e.g. Cable Face Pull"/>'
      +'<label>Day</label><select id="eg-f-day">'+dayOpts+'</select>'
      +'<div class="eg-row"><div><label>Target</label><input id="eg-f-target" placeholder="Rear Delts &middot; Traps"/></div><div><label>Band / Equipment</label><input id="eg-f-band" placeholder="Tube 20&ndash;30 lb"/></div></div>'
      +'<div class="eg-row"><div><label>Sets &times; Reps</label><input id="eg-f-sr" placeholder="3&times;12&ndash;15"/></div><div><label>Set dots</label><input id="eg-f-dots" type="number" min="1" max="8" value="3"/></div></div>'
      +'<label>One-line cue</label><input id="eg-f-cue" placeholder="Pull to your forehead, elbows high"/>'
      +'<label>Setup</label><textarea id="eg-f-setup" placeholder="How to get into position\u2026"></textarea>'
      +'<label>Form cues <span class="eg-hint">one per line</span></label><textarea id="eg-f-cues" placeholder="Squeeze shoulder blades\nElbows stay high\nSlow return"></textarea>'
      +'<label>Common mistakes <span class="eg-hint">one per line</span></label><textarea id="eg-f-miss" placeholder="Using momentum\nShrugging"></textarea>'
      +'<label>Note (tip box)</label><textarea id="eg-f-note" placeholder="Optional coaching note\u2026"></textarea>'
      +'<label>Rest timer (seconds) <span class="eg-hint">blank = no timer</span></label><input id="eg-f-rest" type="number" min="0" max="600" placeholder="60"/>'
      +'<div class="eg-actions"><button type="button" class="eg-cancel" id="eg-cancel">Cancel</button><button type="button" class="eg-save" id="eg-save">Save</button></div>'
      +'</div>';
    document.body.appendChild(m);
    document.getElementById("eg-cancel").addEventListener("click",closeModal);
    m.addEventListener("click",function(e){if(e.target===m)closeModal();});
    document.getElementById("eg-save").addEventListener("click",saveModal);
  }
  var editing=null;
  function setV(id,v){document.getElementById(id).value=v==null?"":v;}
  function getV(id){return document.getElementById(id).value;}
  function openModal(pid,id){
    buildModal();
    editing=null;
    document.getElementById("eg-m-title").textContent=id?"Edit exercise":"Add exercise";
    setV("eg-f-name","");setV("eg-f-target","");setV("eg-f-band","");setV("eg-f-sr","");setV("eg-f-dots",3);
    setV("eg-f-cue","");setV("eg-f-setup","");setV("eg-f-cues","");setV("eg-f-miss","");setV("eg-f-note","");setV("eg-f-rest","");
    setV("eg-f-day",pid||"day-0");
    if(id){
      var arr=custom()[pid]||[],c=null;
      arr.forEach(function(x){if(x.id===id)c=x;});
      if(c){
        editing={pid:pid,id:id};
        setV("eg-f-name",c.name);setV("eg-f-target",c.target);setV("eg-f-band",c.band);setV("eg-f-sr",c.setsReps);
        setV("eg-f-dots",c.dots||3);setV("eg-f-cue",c.cue);setV("eg-f-setup",c.setup);
        setV("eg-f-cues",(c.cues||[]).join("\n"));setV("eg-f-miss",(c.mistakes||[]).join("\n"));
        setV("eg-f-note",c.note);setV("eg-f-rest",c.rest||"");
      }
    }
    document.getElementById("eg-modal").classList.add("open");
  }
  function closeModal(){var m=document.getElementById("eg-modal"); if(m)m.classList.remove("open");}
  function saveModal(){
    var name=getV("eg-f-name").trim();
    if(!name){alert("Give the exercise a name.");return;}
    var rest=getV("eg-f-rest").trim();
    var c={
      name:name,target:getV("eg-f-target").trim(),band:getV("eg-f-band").trim(),
      setsReps:getV("eg-f-sr").trim(),dots:Math.max(1,Math.min(8,+getV("eg-f-dots")||3)),
      cue:getV("eg-f-cue").trim(),setup:getV("eg-f-setup").trim(),
      cues:lines(getV("eg-f-cues")),mistakes:lines(getV("eg-f-miss")),
      note:getV("eg-f-note").trim(),rest:rest?Math.max(0,+rest):0
    };
    var day=getV("eg-f-day"),s=custom();
    if(editing){
      c.id=editing.id;
      if(s[editing.pid]) s[editing.pid]=s[editing.pid].filter(function(x){return x.id!==editing.id;});
      if(s[editing.pid] && !s[editing.pid].length) delete s[editing.pid];
      (s[day]=s[day]||[]).push(c);
    } else {
      c.id=uid();
      (s[day]=s[day]||[]).push(c);
    }
    saveCustom(s); renderCustom(); closeModal();
  }

  function init(){
    if(!document.getElementById("tg-app")) return;
    injectBar();
    injectAddButtons();   // anchors must exist before moves/custom inserts
    injectPrebuilt();     // tools + stamp home + apply hidden
    applyMoves();         // relocate moved built-in cards
    renderCustom();       // render custom cards into their day
    updateCount();
  }
  if(document.readyState!=="loading") setTimeout(init,0);
  else document.addEventListener("DOMContentLoaded",function(){setTimeout(init,0);});
})();;

/* ═══════ block boundary ═══════ */

// ── Quick Timer: standalone countdown, reachable from any tab ──────────────
var QT_CIRC = 2*Math.PI*78;
var qtTotalSecs = 60, qtRemaining = 60, qtPaused = false, qtInterval = null, qtEndTs = null;
var qtMinVal = 1, qtSecVal = 0;

function qtBuildWheel(id, max, current, cb) {
  var el = document.getElementById(id);
  var html = '';
  for (var i = 0; i <= max; i++) html += '<div class="qt-wheel-item" data-val="'+i+'">'+(i<10?'0'+i:i)+'</div>';
  el.innerHTML = html;
  el.onscroll = function(){
    clearTimeout(el._qtSnapTimer);
    el._qtSnapTimer = setTimeout(function(){ qtReadWheel(el, cb); }, 120);
  };
  // scroll to current value after layout settles
  setTimeout(function(){ el.scrollTop = current*50; qtReadWheel(el, cb, true); }, 0);
}
function qtReadWheel(el, cb, skipHighlightOnly) {
  var idx = Math.round(el.scrollTop/50);
  idx = Math.max(0, Math.min(el.children.length-1, idx));
  if (el.scrollTop !== idx*50) el.scrollTo({top:idx*50, behavior:'smooth'});
  Array.from(el.children).forEach(function(c,i){ c.classList.toggle('qt-center', i===idx); });
  cb(idx);
}
function qtOpen() {
  document.getElementById('qt-modal').classList.add('open');
  var hasActiveTimer = !!qtInterval || qtPaused || (qtRemaining>0 && qtRemaining<qtTotalSecs);
  if (hasActiveTimer) {
    qtShowRunningView();
  } else {
    document.getElementById('qt-setup').style.display='block';
    document.getElementById('qt-running').style.display='none';
    document.getElementById('qt-done').style.display='none';
    qtBuildWheel('qt-wheel-min', 60, qtMinVal, function(v){ qtMinVal=v; });
    qtBuildWheel('qt-wheel-sec', 59, qtSecVal, function(v){ qtSecVal=v; });
  }
}
function qtCloseSetup() {
  document.getElementById('qt-modal').classList.remove('open');
}
function qtSetPreset(m,s) {
  qtMinVal=m; qtSecVal=s;
  document.getElementById('qt-wheel-min').scrollTo({top:m*50, behavior:'smooth'});
  document.getElementById('qt-wheel-sec').scrollTo({top:s*50, behavior:'smooth'});
}
var qtWakeLock = null;
function qtReqWake(){ try{ if("wakeLock" in navigator) navigator.wakeLock.request("screen").then(function(w){qtWakeLock=w;}).catch(function(){}); }catch(e){} }
function qtRelWake(){ try{ if(qtWakeLock){ qtWakeLock.release(); qtWakeLock=null; } }catch(e){} }
function qtStart() {
  qtTotalSecs = Math.max(1, qtMinVal*60 + qtSecVal);
  qtRemaining = qtTotalSecs;
  qtPaused = false;
  qtEndTs = Date.now() + qtTotalSecs*1000;
  qtShowRunningView();
  clearInterval(qtInterval);
  qtInterval = setInterval(qtTick, 250);
  qtReqWake();
  try{ qtTick(); }catch(e){}
}
function qtShowRunningView() {
  document.getElementById('qt-setup').style.display='none';
  document.getElementById('qt-done').style.display='none';
  document.getElementById('qt-running').style.display='block';
  qtRenderRunning();
}
function qtTick() {
  if (qtPaused || qtEndTs==null) return;
  qtRemaining = Math.max(0, Math.ceil((qtEndTs - Date.now())/1000));
  qtRenderRunning();
  qtUpdateFab();
  if (qtRemaining<=0) { qtFinish(); }
}
function qtRenderRunning() {
  var m=Math.floor(Math.max(0,qtRemaining)/60), s=Math.max(0,qtRemaining)%60;
  var numEl=document.getElementById('qt-running-num'); if(numEl) numEl.textContent=m+':'+(s<10?'0':'')+s;
  var arc=document.getElementById('qt-arc'); if(arc) arc.style.strokeDashoffset = QT_CIRC*(1-(Math.max(0,qtRemaining)/qtTotalSecs));
  var lbl=document.getElementById('qt-running-lbl'); if(lbl) lbl.textContent = qtPaused?'Paused':'Running';
  var pb=document.getElementById('qt-pause-btn'); if(pb) pb.textContent = qtPaused?'Resume':'Pause';
}
function qtUpdateFab() {
  var fabTime=document.getElementById('qt-fab-time'); var fabIcon=document.getElementById('qt-fab-icon'); var fabInline=document.getElementById('qt-fab-inline');
  if(!fabTime||!fabIcon) return;
  if (qtInterval && !qtPaused && qtRemaining>0) {
    var m=Math.floor(qtRemaining/60), s=qtRemaining%60;
    fabTime.textContent = m+':'+(s<10?'0':'')+s;
    fabIcon.textContent='';
    if(fabInline){fabInline.style.color='#cfe84f';}
  } else {
    fabTime.textContent='';
    fabIcon.textContent='⏱';
    if(fabInline){fabInline.style.color='#5eead4';}
  }
}
function qtTogglePause() {
  qtPaused = !qtPaused;
  if (!qtPaused) { qtEndTs = Date.now() + qtRemaining*1000; }
  qtRenderRunning();
  qtUpdateFab();
}
function qtAdjust(delta) {
  qtRemaining = Math.max(1, qtRemaining+delta);
  if (qtRemaining>qtTotalSecs) qtTotalSecs=qtRemaining;
  qtEndTs = Date.now() + qtRemaining*1000;
  qtRenderRunning();
  qtUpdateFab();
}
function qtReset() {
  clearInterval(qtInterval); qtInterval=null; qtPaused=false; qtRemaining=qtTotalSecs; qtEndTs=null; qtRelWake();
  document.getElementById('qt-running').style.display='none';
  document.getElementById('qt-done').style.display='none';
  document.getElementById('qt-setup').style.display='block';
  qtBuildWheel('qt-wheel-min', 60, qtMinVal, function(v){ qtMinVal=v; });
  qtBuildWheel('qt-wheel-sec', 59, qtSecVal, function(v){ qtSecVal=v; });
  qtUpdateFab();
}
function qtFinish() {
  clearInterval(qtInterval); qtInterval=null; qtPaused=false; qtRemaining=0; qtEndTs=null; qtRelWake();
  qtUpdateFab();
  qtChime();
  document.getElementById('qt-running').style.display='none';
  document.getElementById('qt-done').style.display='block';
  document.getElementById('qt-modal').classList.add('open');
  if (navigator.vibrate) { try{ navigator.vibrate([200,100,200,100,200]); }catch(e){} }
}
function qtCloseDone() {
  document.getElementById('qt-modal').classList.remove('open');
  document.getElementById('qt-done').style.display='none';
  qtRemaining = qtTotalSecs;
}
function qtChime() {
  try {
    var fn = (typeof yogaBeep === 'function') ? yogaBeep : null;
    if (fn) {
      fn(880, 0.18, 0.5);
      setTimeout(function(){ fn(880, 0.18, 0.5); }, 280);
      setTimeout(function(){ fn(1100, 0.3, 0.55); }, 560);
    }
  } catch(e) {}
}