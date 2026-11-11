// data-yoga.js — Yoga pose library, pose figure drawings and preset flows.
// Data only: loaded by index.html before app.js. Functions in here are called later by app.js,
// so they may use app.js helpers, but nothing in this file may run app.js code at load time.

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
    '</svg>';},
  "banana":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<path d="M50,120 Q100,90 150,110" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M50,120 Q100,90 150,110;M50,116 Q100,80 150,116;M50,120 Q100,90 150,110" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="155" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "barrelroll":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="50" y1="100" x2="150" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="100" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 118;22 100 118;0 100 118;-22 100 118;0 100 118" keyTimes="0;0.25;0.5;0.75;1" dur="4.2s" repeatCount="indefinite"/><line x1="100" y1="118" x2="80" y2="132" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="118" x2="120" y2="132" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</g>'+
    '</svg>';},
  "chaturanga":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="118" x2="150" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="118" x2="72" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="148" y1="112" x2="140" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="48" cy="120" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "cobraroll":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<path d="M50,124 Q90,124 130,124" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M50,124 Q90,124 130,124;M50,124 Q90,90 140,70;M50,124 Q90,124 130,124" keyTimes="0;0.5;1" dur="3.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="140" cy="106" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"><animate attributeName="cy" values="120;70;120" keyTimes="0;0.5;1" dur="3.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/><animate attributeName="cx" values="130;140;130" keyTimes="0;0.5;1" dur="3.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>'+
    '<line x1="60" y1="120" x2="50" y2="105" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "downdogpedal":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="124" x2="105" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="124" x2="105" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="80" x2="60" y2="124" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="105" y1="80" x2="60" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="56" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<circle cx="140" cy="124" r="6" fill="none" stroke="#4ec98a" stroke-width="2"><animate attributeName="cy" values="124;114;124" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>'+
    '</g>'+
    '</svg>';},
  "figure8":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="110" x2="100" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="80" x2="80" y2="95" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="80" x2="120" y2="95" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="110" x2="85" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="110" x2="115" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="112" r="4" fill="none" stroke="#4ec98a" stroke-width="2" opacity="0.8"><animateMotion dur="3.2s" repeatCount="indefinite" path="M0,0 C-8,-3 -8,3 0,0 C8,-3 8,3 0,0"/></circle>'+
    '</g>'+
    '</svg>';},
  "headcircle":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="110" x2="100" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"><animateMotion dur="4s" repeatCount="indefinite" path="M0,0 C6,4 6,10 0,12 C-6,10 -6,4 0,0"/></circle>'+
    '<line x1="100" y1="85" x2="80" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="85" x2="120" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="110" x2="85" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="110" x2="115" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "highplank":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="110" x2="150" y2="105" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="110" x2="60" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="148" y1="105" x2="148" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="48" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "kneeling-sugarcane":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="128" x2="90" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="90" cy="80" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<path d="M90,95 Q110,80 100,50" fill="none" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="105" x2="130" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="y2" values="80;70;80" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "knees-chest":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="110" x2="60" y2="105" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="50" cy="102" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<path d="M90,110 Q100,90 90,70" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M90,110 Q100,90 90,70;M90,110 Q95,85 80,68;M90,110 Q100,90 90,70" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '</g>'+
    '</svg>';},
  "lizardlunge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="128" x2="110" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="90" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="90" x2="110" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="110" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="110" y1="60" x2="70" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="110" y1="60" x2="150" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "lizardtwist":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="128" x2="110" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="90" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="90" x2="110" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="110" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="110" y1="60" x2="70" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="110" y1="60" x2="150" y2="20" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="y2" values="20;14;20" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "low-lunge-side":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="128" x2="105" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="95" x2="145" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M105,95 Q95,70 115,45" fill="none" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="d" values="M105,95 Q95,70 115,45;M105,95 Q90,68 108,40;M105,95 Q95,70 115,45" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="115" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="115" y1="50" x2="90" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "neck-shoulder-release":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="110" x2="100" y2="72" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="60" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"><animateTransform attributeName="transform" type="rotate" values="0 100 72;18 100 72;0 100 72" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></circle>'+
    '<line x1="100" y1="85" x2="80" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="85" x2="120" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "prone-pec":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="120" x2="140" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="150" cy="116" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="120" x2="90" y2="90" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="transform" values="rotate(0 90 120);rotate(25 90 120);rotate(0 90 120)" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "rev-half-moon":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="100" x2="90" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="90" cy="50" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="68" x2="60" y2="55" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="68" x2="120" y2="30" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="y2" values="30;22;30" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '<line x1="90" y1="100" x2="90" y2="124" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="100" x2="140" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="y2" values="90;96;90" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "rev-high-lunge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="75" y1="128" x2="105" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="110" x2="105" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="105" y1="95" x2="105" y2="55" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="105" cy="47" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="105" y1="65" x2="80" y2="110" stroke="#9a9d8c" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="105" y1="65" x2="130" y2="30" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="y2" values="30;24;30" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "revtable":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="124" x2="60" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="100" x2="120" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="100" x2="140" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="100" x2="80" y2="124" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="130" cy="92" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "side-leg-ext":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="118" x2="130" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="45" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="130" y1="118" x2="165" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="y2" values="118;90;118" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "side-plank-mod":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="95" x2="150" y2="105" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="95" x2="60" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="150" y1="105" x2="150" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"><animate attributeName="y1" values="105;98;105" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '<circle cx="48" cy="90" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "sidelunge":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="90" x2="60" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="x1" values="100;130;100" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '<line x1="100" y1="90" x2="140" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="100" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="60" x2="80" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="120" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "spinalrot":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="128" x2="130" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 100;-18 100 100;0 100 100;18 100 100;0 100 100" keyTimes="0;0.25;0.5;0.75;1" dur="4.4s" repeatCount="indefinite"/><line x1="100" y1="100" x2="100" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+'<line x1="100" y1="72" x2="75" y2="85" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="72" x2="125" y2="85" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</g>'+
    '</svg>';},
  "standing-fold-bound":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="124" x2="100" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<path d="M100,90 Q100,60 100,55" fill="none" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="50" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="70" x2="110" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="124" x2="85" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="124" x2="115" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '</g>'+
    '</svg>';},
  "windshield-wipers":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="105" x2="140" y2="105" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 105;28 100 105;0 100 105;-28 100 105;0 100 105" keyTimes="0;0.25;0.5;0.75;1" dur="4.4s" repeatCount="indefinite"/><line x1="100" y1="105" x2="90" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="105" x2="110" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</g>'+
    '</svg>';},
  "wrist-figure8":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="128" x2="100" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="128" x2="100" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="95" x2="100" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<circle cx="60" cy="128" r="5" fill="none" stroke="#4ec98a" stroke-width="2">'+
    '<animateMotion dur="2.8s" repeatCount="indefinite" path="M0,0 C6,-5 6,5 0,0 C-6,-5 -6,5 0,0"/></circle>'+
    '</svg>';},
  "wrist-rolls":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="110" x2="100" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="85" x2="80" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="80" cy="100" r="6" fill="none" stroke="#4ec98a" stroke-width="2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M0,0 C4,-4 4,4 0,0 C-4,-4 -4,4 0,0"/></circle>'+
    '<line x1="100" y1="85" x2="120" y2="100" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
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
ben:["Full Spine Flexibility","Chest","Shoulders","Hip Flexors","Back Strength"]},

// ═══════════════════════════════════════════════════
// MOBILITY FLOWS (added 2026-08-11)
// ═══════════════════════════════════════════════════
{id:"figure8",e:"➰",n:"Hip Figure 8s",s:"Ashtanga Chalanasana",l:"beginner",c:"seated",cpm:2.4,dur:60,
desc:"A fluid hip-mobility drill tracing a figure-8 pattern through the pelvis. Loosens the hips and lower back and warms up the SI joint.",
steps:["Stand with feet a bit wider than hips, soft knees, hands on hips.","Shift weight into the right hip, then trace the pelvis forward, across, and back in a figure-8 path.","Let the motion flow continuously — don't stop at the corners.","Keep the upper body relatively still; the movement stays in the hips and pelvis.","Reverse the direction of the 8 halfway through.","Continue 45-60 seconds, moving slow and controlled."],
cue:"Trace a lazy figure-8 with your hips — smooth and continuous, not choppy.",
ben:["Hip Mobility","SI Joint","Lower Back","Pelvic Control","Warm-Up"]},

{id:"spinalrot",e:"🔄",n:"Seated Spinal Rotations",s:"Parivrtta Sukhasana Flow",l:"beginner",c:"twist",cpm:2.2,dur:60,
desc:"A gentle, repeated rotational drill through the thoracic spine. Improves rotational mobility and eases tension along the back.",
steps:["Sit cross-legged or in a chair, spine tall.","Place right hand on left knee, left hand behind you on the floor/chair back.","Inhale to lengthen the spine, exhale to rotate left from the ribcage.","Lead the twist with the breath, not force — go a little further each exhale.","Return to center with control, then repeat to the other side.","Alternate sides continuously for 45-60 seconds."],
cue:"Lengthen up out of the hips first, then twist — don't collapse into the rotation.",
ben:["Thoracic Mobility","Spinal Health","Digestion","Posture","Back Tension"]},

{id:"cobraroll",e:"🐍",n:"Cobra Rolls",s:"Bhujangasana Chalanasana",l:"beginner",c:"backbend",cpm:2.6,dur:60,
desc:"A wave-like flow from Chaturanga through Cobra and back, rolling through the spine one segment at a time. Builds spinal articulation and back extensor strength.",
steps:["Lie face down, hands under shoulders, elbows hugging the ribs.","Inhale, roll up through the spine one vertebra at a time — tailbone, low back, mid back, chest, then head last.","Keep the pelvis and lower ribs light on the mat as you rise, avoiding a hard crunch into the low back.","Exhale, reverse the roll — head lowers first, then chest, then unstack down to the tailbone.","Keep the motion slow and wave-like the entire time.","Repeat for 45-60 seconds."],
cue:"Roll through the spine like a wave — one vertebra at a time, not a single hinge.",
ben:["Spinal Articulation","Back Extensors","Core Control","Posture","Mobility"]},

{id:"barrelroll",e:"🛢️",n:"Barrel Rolls",s:"Vasisthasana Chalanasana",l:"intermediate",c:"core",cpm:3.4,dur:45,
desc:"A rolling side-to-side drill through the torso, transitioning between side plank-like positions. Builds rotational core control and shoulder stability.",
steps:["Lie on your back, arms out in a T, knees bent and stacked.","Keeping shoulders grounded, let the knees roll to one side toward the floor.","Roll the knees back through center and continue to the opposite side, like a barrel rolling.","Keep the motion slow and controlled — this is mobility, not momentum.","Let the head gently counter-rotate opposite the knees for a full spinal wring.","Continue rolling side to side for 30-45 seconds."],
cue:"Move like a barrel rolling smoothly — slow, controlled, no momentum flinging you side to side.",
ben:["Rotational Core","Obliques","Spinal Mobility","Shoulder Stability","SI Joint"]},

{id:"downdogpedal",e:"🐕",n:"Downward Dog Pedals",s:"Adho Mukha Svanasana Chalanasana",l:"beginner",c:"standing",cpm:3.6,dur:60,
desc:"Downward Dog with alternating heel presses, 'pedaling' one leg at a time. Warms up calves and hamstrings and adds gentle movement to the classic hold.",
steps:["Start in Downward Dog — hips high, hands pressing firmly, spine long.","Bend the right knee and press the left heel toward the floor.","Switch, bending the left knee and pressing the right heel down.","Keep alternating in a smooth pedaling rhythm, like walking out the hamstrings.","Keep hips lifted and even the whole time — avoid rocking side to side.","Continue pedaling for 45-60 seconds."],
cue:"Pedal the feet like you're walking out your hamstrings — steady rhythm, hips stay tall.",
ben:["Hamstrings","Calves","Shoulders","Ankle Mobility","Warm-Up"]},

{id:"lizardlunge",e:"🦎",n:"Lizard Lunge",s:"Utthan Pristhasana",l:"intermediate",c:"standing",cpm:2.8,dur:60,
desc:"A deep hip-opening lunge with the front foot planted outside the hand. Targets hip flexors, groin, and hamstrings simultaneously.",
steps:["From Downward Dog, step the right foot forward outside the right hand.","Lower onto the left knee (or keep back leg lifted for more challenge).","Let the front knee track out over the pinky toe, hips sinking low and forward.","Keep the chest lifted or lower to forearms for a deeper stretch.","Breathe into the front hip and groin, letting it release with each exhale.","Hold 30-60 seconds, then switch sides."],
cue:"Sink the hips low and forward — let gravity open the front hip, don't force it.",
ben:["Hip Flexors","Groin","Hamstrings","Hip Opening","Deep Squat Prep"]},

{id:"lizardtwist",e:"🦎",n:"Lizard Twist",s:"Parivrtta Utthan Pristhasana",l:"intermediate",c:"twist",cpm:3.0,dur:45,
desc:"Lizard Lunge with an added rotation and reach, combining a deep hip opener with thoracic rotation. Great for the hips and mid-back together.",
steps:["Set up in Lizard Lunge, front foot outside the same-side hand.","Shift weight onto the outside hand, freeing the inside arm.","Rotate the chest open and reach the inside arm toward the ceiling.","Follow the reaching hand with your gaze if balance allows.","Hold the rotation for a few breaths, feeling the twist through the upper back.","Return to center, then switch sides."],
cue:"Rotate from the chest, not the low back — let the reaching arm lead the twist.",
ben:["Hip Opening","Thoracic Rotation","Balance","Groin","Obliques"]},

{id:"sidelunge",e:"🤸",n:"Side Lunge",s:"Skandasana",l:"beginner",c:"standing",cpm:3.0,dur:45,
desc:"A lateral lunge that stretches the inner thigh of the extended leg while strengthening the bent-knee side. Builds frontal-plane hip mobility often missing from forward-only training.",
steps:["Stand with feet wide, toes forward.","Shift weight into the right leg, bending the right knee and sitting the hips back.","Keep the left leg straight, foot flat, toes forward — feel the inner thigh stretch.","Keep the chest lifted and both feet grounded through the whole range.","Push through the right heel to return to center.","Repeat on the other side, alternating for 30-45 seconds."],
cue:"Sit back and down into the bent knee like a sideways squat — keep the straight leg's foot flat.",
ben:["Inner Thighs","Hip Mobility","Adductors","Groin","Frontal-Plane Strength"]},

{id:"revtable",e:"🪑",n:"Reverse Table Top",s:"Ardha Purvottanasana",l:"intermediate",c:"backbend",cpm:2.8,dur:45,
desc:"A backward-facing bridge-like pose that opens the chest and shoulders while strengthening the posterior chain and wrists.",
steps:["Sit with knees bent, feet flat, hands behind hips with fingers pointing toward feet.","Press through hands and feet to lift the hips until the torso is parallel to the floor.","Knees stack over ankles, shoulders stack over wrists — tabletop shape.","Let the head relax back gently, or keep it neutral if the neck is sensitive.","Squeeze the glutes and press the chest open.","Hold 20-45 seconds, then lower with control."],
cue:"Press the hips up like leveling a tabletop — knees and shoulders stacked over ankles and wrists.",
ben:["Shoulders","Chest","Glutes","Wrists","Posterior Chain"]},

{id:"headcircle",e:"⭕",n:"Head Circles",s:"Griva Chalanasana",l:"beginner",c:"seated",cpm:1.6,dur:60,
desc:"Slow, controlled circles of the head and neck. Releases tension in the cervical spine and upper traps — a gentle way to start or end a flow.",
steps:["Sit or stand tall, shoulders relaxed away from the ears.","Slowly drop the chin toward the chest.","Roll the head gently toward one shoulder, then back, then toward the other shoulder in a smooth circle.","Keep the movement slow and small — this is not a full aggressive neck roll.","Complete 4-5 circles one direction, then reverse.","Breathe steadily throughout, 45-60 seconds total."],
cue:"Keep it slow and small — let gravity do the work, don't force the range.",
ben:["Neck Tension","Cervical Mobility","Upper Traps","Stress Relief","Warm-Up"]},

// ═══════════════════════════════════════════════════
// CHARLIE FOLLOWS SET (added 2026-08-11)
// ═══════════════════════════════════════════════════
{id:"rev-high-lunge",e:"🤸",n:"Revolved High Lunge",s:"Parivrtta Ashta Chandrasana",l:"intermediate",c:"twist",cpm:3.2,dur:45,
desc:"High Lunge with a torso twist toward the front leg, arms extended in a T. Builds rotational control while under a hip-flexor stretch.",
steps:["Start in High Lunge, right foot forward, back heel lifted.","Square the hips forward and press the back heel toward the wall behind you.","Rotate the torso toward the front leg, sweeping arms out into a T.","Keep the front knee tracking over the ankle, back leg strong and straight.","Hold the twist for a few breaths, feeling length through the spine before rotating.","Untwist with control, then repeat on the other side."],
cue:"Lengthen the spine first, then rotate from the ribcage — the twist follows the length.",
ben:["Rotational Core","Hip Flexors","Balance","Thoracic Mobility","Leg Strength"]},

{id:"low-lunge-side",e:"🙆",n:"Low Lunge with Side Bend",s:"Anjaneyasana Variation",l:"beginner",c:"standing",cpm:2.6,dur:45,
desc:"Low Lunge with a lateral reach over the side body. Combines a hip-flexor stretch with a side-body opener.",
steps:["From Low Lunge, back knee down, front knee stacked over ankle.","Sink the hips forward and down to deepen the hip flexor stretch.","Reach the same-side arm as the back leg up and over into a side bend.","Let the opposite hand rest on the front thigh for support.","Breathe into the stretch along the ribs and hip together.","Hold 30-45 seconds, then switch sides."],
cue:"Sink the hips forward first, then reach up and over — don't shortcut the hip stretch for the side bend.",
ben:["Hip Flexors","Side Body","Obliques","Hip Opening","Posture"]},

{id:"rev-half-moon",e:"🌗",n:"Revolved Half Moon",s:"Parivrtta Ardha Chandrasana",l:"advanced",c:"balance",cpm:4.0,dur:30,
desc:"A standing balance pose combining a forward hinge, a twist, and a lifted back leg. Demands hip, hamstring, and core coordination together.",
steps:["From a forward fold, shift weight onto the right foot.","Lift the left leg straight back to hip height as the torso hinges forward.","Lower the right hand (or a block) to the floor under the shoulder.","Rotate the torso open, reaching the left arm toward the ceiling.","Keep the standing knee soft, not locked, and the lifted leg active.","Hold a few breaths, then release with control and switch sides."],
cue:"Root through the standing foot first — the twist and lift both come from a stable base, not the reverse.",
ben:["Balance","Hamstrings","Rotational Core","Hip Stability","Focus"]},

{id:"standing-fold-bound",e:"🙇",n:"Standing Forward Fold, Bound Arms",s:"Uttanasana Variation",l:"intermediate",c:"standing",cpm:2.4,dur:45,
desc:"Standing Forward Fold with the arms clasped behind the back and lifted overhead. Adds a shoulder and chest opener to the hamstring stretch.",
steps:["Stand with feet hip-width, then hinge forward from the hips into a fold.","Clasp the hands behind your back, arms straight.","Let the fold deepen as you lift the clasped arms up and over, away from your back.","Keep a slight bend in the knees if the hamstrings are tight.","Let the head hang heavy, breathing into the stretch.","Hold 30-45 seconds, then release the hands before rolling up."],
cue:"Lift the clasped hands up and away from your back — that's what opens the shoulders here.",
ben:["Hamstrings","Shoulders","Chest","Spinal Decompression","Stress Relief"]},

{id:"highplank",e:"🧍",n:"High Plank",s:"Phalakasana",l:"beginner",c:"core",cpm:3.4,dur:45,
desc:"A full-body isometric hold from hands to toes. Builds core, shoulder, and full-body stability that underlies most other poses.",
steps:["Start on hands and knees, wrists stacked under shoulders.","Step feet back one at a time into a straight line from head to heels.","Press the floor away, spreading fingers wide, engaging the shoulders.","Draw the belly in and squeeze the glutes to keep the hips level — no sagging or piking.","Keep the neck long, gaze slightly forward of the hands.","Hold 20-45 seconds, breathing steadily throughout."],
cue:"Push the floor away and zip the ribs down — a straight line from head to heels, nothing sagging.",
ben:["Core Strength","Shoulder Stability","Full-Body Strength","Posture","Wrist Strength"]},

{id:"side-plank-mod",e:"🤸",n:"Modified Side Plank (Kneeling)",s:"Supported Vasisthasana",l:"beginner",c:"core",cpm:2.6,dur:30,
desc:"A kneeling version of Side Plank that stacks a lateral side-body and neck stretch on top of the core and shoulder work.",
steps:["Kneel, then lower onto the right forearm or hand, knees stacked and bent behind you.","Lift the hips so the body forms a diagonal line from knee to shoulder.","Extend the left arm overhead, reaching long through the side body.","Optionally tilt the head away from the lifted arm for a gentle neck stretch.","Keep the hips lifted and square, not sagging toward the floor.","Hold 20-30 seconds, then switch sides."],
cue:"Lift the hips up and reach long through the top arm — think one long line from knee to fingertips.",
ben:["Obliques","Shoulder Stability","Side Body","Neck Release","Core"]},

{id:"chaturanga",e:"💪",n:"Chaturanga",s:"Chaturanga Dandasana",l:"intermediate",c:"core",cpm:4.0,dur:15,
desc:"A low push-up hold with elbows hugging the ribs. Builds the pressing strength that links plank to upward-facing dog in a vinyasa flow.",
steps:["Start in High Plank, shoulders slightly ahead of the wrists.","Shift weight forward, then bend the elbows straight back, hugging the ribs.","Lower until the upper arms are roughly parallel to the floor — no lower.","Keep the body in one straight line the entire way down, no sagging hips.","Hold briefly at the bottom or flow directly into Upward Dog or Cobra.","For a modified version, lower the knees to the floor first."],
cue:"Elbows hug the ribs like closing a door — don't let them wing out to the sides.",
ben:["Triceps","Shoulders","Core Strength","Chest","Full-Body Control"]},

{id:"prone-pec",e:"🦅",n:"Prone Pec Stretch",s:"Broken Wing Pose",l:"intermediate",c:"backbend",cpm:2.0,dur:45,
desc:"A deep chest and shoulder stretch performed lying prone with one arm extended to a T, rolling weight onto the side and hip.",
steps:["Lie face down, right arm extended straight out to the side in a T, palm down.","Bend the left knee and plant the left foot near the right knee.","Use the left foot to push, rolling the hips and chest up and over the right arm.","Let the right shoulder and chest sink toward the floor, feeling the stretch through the chest and front shoulder.","Rest the head on the mat or turn it away from the extended arm.","Hold 30-45 seconds, then roll back and switch sides."],
cue:"Let gravity roll the chest open over the extended arm — don't force the roll, sink into it.",
ben:["Chest","Front Shoulder","Rotator Cuff","Thoracic Mobility","Posture"]},

{id:"kneeling-sugarcane",e:"🏹",n:"Kneeling Sugarcane",s:"Supported Vasisthasana Variation",l:"advanced",c:"backbend",cpm:3.2,dur:30,
desc:"Modified Side Plank with a reach back to catch the top foot, adding a quad and hip-flexor stretch to the side-body and shoulder work of Side Plank.",
steps:["Set up in Modified Side Plank (Kneeling), hips lifted, top arm reaching overhead.","Bend the top knee, reaching the top hand back to catch the top foot.","Draw the heel toward the glute, feeling the stretch through the quad and hip flexor.","Keep the hips lifted and square — don't let them sag as you reach back.","Press the foot into the hand slightly to deepen the bow shape.","Hold 20-30 seconds, then release and switch sides."],
cue:"Keep the hips lifted first, then reach back for the foot — the bow shape comes after the hips are set.",
ben:["Quads","Hip Flexors","Obliques","Shoulder Stability","Balance"]},

{id:"banana",e:"🍌",n:"Banana Pose",s:"Bananasana",l:"beginner",c:"restorative",cpm:1.6,dur:60,
desc:"A reclined crescent-shaped side stretch with the ankles crossed. A gentle, passive way to lengthen the entire side body.",
steps:["Lie on your back, then walk both feet and hips a few inches to the right.","Cross the right ankle over the left, staying in that shifted crescent shape.","Reach both arms overhead and shift them slightly to the right as well, creating a full-body banana curve.","Relax completely into the stretch along the left side body.","Breathe slowly, letting the stretch deepen with each exhale.","Hold 45-60 seconds, then switch to curve the other direction."],
cue:"Let the whole body curve like a banana — hips, ribs, and arms all shift the same direction.",
ben:["Side Body","Obliques","Lats","Relaxation","Spinal Decompression"]},

{id:"windshield-wipers",e:"🚗",n:"Reclined Windshield Wipers",s:"Jathara Parivartanasana Variation",l:"beginner",c:"twist",cpm:2.2,dur:45,
desc:"Bent knees sweeping side to side while lying on the back (or belly), gently massaging and mobilizing the lower spine.",
steps:["Lie on your back, knees bent and stacked, feet flat, arms out in a T.","Keeping the knees together, let them fall slowly to the right toward the floor.","Keep both shoulders grounded as the knees lower.","Sweep the knees back through center and continue to the left side.","Keep the movement slow and controlled, breathing with each sweep.","Continue side to side for 30-45 seconds."],
cue:"Keep both shoulders glued to the floor — the twist happens below the ribs, not through the upper back.",
ben:["Lower Back","SI Joint","Spinal Mobility","Obliques","Relaxation"]},

{id:"side-leg-ext",e:"🦵",n:"Side-Lying Leg Extensions",s:"Anantasana Variation",l:"beginner",c:"core",cpm:2.4,dur:45,
desc:"Lying on the side, drawing the top knee to the chest and then extending the leg skyward. Builds hip flexibility and hamstring control together.",
steps:["Lie on your right side, head resting on the right arm or a block.","Draw the left knee in toward the chest, hugging it with the left hand.","Straighten the left leg up toward the ceiling, holding the foot, calf, or a strap.","Keep the leg as straight as comfortable without rounding the low back.","Lower back to the bent-knee hug, then extend again.","Repeat 6-8 times, then switch sides."],
cue:"Hug the knee in fully before you extend — don't rush straight to the straight-leg reach.",
ben:["Hamstrings","Hip Flexibility","Core Control","Balance","Leg Strength"]},

{id:"knees-chest",e:"🤰",n:"Knees-to-Chest",s:"Apanasana",l:"beginner",c:"restorative",cpm:1.6,dur:60,
desc:"A simple reclined pose hugging both knees to the chest. Gently massages the lower back and relieves tension after backbend or twist-heavy work.",
steps:["Lie on your back, then draw both knees in toward the chest.","Wrap the arms around the shins or behind the thighs.","Gently rock side to side or in small circles if it feels good on the low back.","Keep the head and shoulders relaxed on the mat.","Breathe slowly, letting the low back release with each exhale.","Hold 45-60 seconds, or longer as a resting pose."],
cue:"Let the knees pull gently toward the chest with each exhale — don't grip, just breathe into it.",
ben:["Lower Back","SI Joint","Digestion","Relaxation","Recovery"]},

{id:"wrist-rolls",e:"🤲",n:"Wrist Rolls",s:"Standing/Seated Wrist Mobility",l:"beginner",c:"seated",cpm:1.4,dur:45,
desc:"Simple circular wrist mobilization, done standing or seated. A quick warm-up before any weight-bearing hand work like Plank or Downward Dog.",
steps:["Extend both arms forward or clasp the hands together at chest height.","Slowly circle both wrists in one direction, going through the full range of motion.","Complete 8-10 slow circles, then reverse direction for another 8-10.","Keep the shoulders relaxed and the motion isolated to the wrists.","If seated, you can also press palms together and circle at the wrist joint.","Finish by gently shaking out the hands."],
cue:"Keep the circles slow and full — this is about range, not speed.",
ben:["Wrist Mobility","Forearms","Injury Prevention","Warm-Up","Circulation"]},

{id:"wrist-figure8",e:"➰",n:"Tabletop Wrist Figure 8s",s:"Tabletop Wrist Chalanasana",l:"beginner",c:"core",cpm:2.0,dur:45,
desc:"Weighted figure-8 circles through the wrist while in tabletop position. Builds wrist resilience and stability for load-bearing poses.",
steps:["Come to tabletop, hands under shoulders, knees under hips.","Keeping the palm planted, rock the weight in a figure-8 pattern through the wrist — forward-diagonal, back-diagonal, repeat.","Move slowly, exploring the full range without pain.","Complete 30 seconds on one hand, then switch.","Keep the shoulder stacked over the wrist as you rock, avoiding collapsing into the joint.","Breathe steadily throughout."],
cue:"Trace a slow figure-8 through the palm and wrist — small range, full control.",
ben:["Wrist Resilience","Forearm Strength","Injury Prevention","Grip Stability","Warm-Up"]},

{id:"neck-shoulder-release",e:"🙆",n:"Seated Neck & Shoulder Release",s:"Kneeling Griva Chalanasana",l:"beginner",c:"seated",cpm:1.6,dur:60,
desc:"A lateral ear-to-shoulder stretch with the hands clasped behind the lower back or gently guiding the head. Releases the upper traps and side of the neck.",
steps:["Sit or kneel tall, clasp the hands behind the lower back (or let one arm hang if that's more accessible).","Gently tilt the right ear toward the right shoulder, feeling the stretch along the left side of the neck.","Optionally use the right hand to add slight, gentle overpressure — never pull hard.","Keep the shoulders down and away from the ears throughout.","Hold 20-30 seconds, breathing slowly, then return to center.","Switch sides and repeat."],
cue:"Let the ear drift toward the shoulder — any hand pressure should be a whisper, not a pull.",
ben:["Neck Tension","Upper Traps","Stress Relief","Posture","Shoulder Release"]}

]; // end POSES

// ═══════════════════════════════════════════════════
// PRESET ROUTINES
// ═══════════════════════════════════════════════════
var PRESETS = [
  {
    id:"hamstring-length",
    icon:"🦵",
    name:"Hamstring Length & Strength",
    desc:"Builds real, retained hamstring range — not just temporary looseness. Standing work first while you're warm, then long loaded holds. Best on Wednesday or a rest day, NOT before a lower session.",
    level:"intermediate",
    duration:"~25 min",
    focus:"Hamstring Extensibility",
    poses:[
      {id:"easy-pose",       dur:60},
      {id:"catcow",          dur:60},
      {id:"downdog",         dur:60},
      {id:"standing-forward",dur:75},
      {id:"pyramid",         dur:75},
      {id:"pyramid",         dur:75},
      {id:"wide-fold",       dur:90},
      {id:"triangle",        dur:60},
      {id:"triangle",        dur:60},
      {id:"standing-split",  dur:60},
      {id:"standing-split",  dur:60},
      {id:"staff",           dur:45},
      {id:"seated-forward",  dur:150},
      {id:"half-lord",       dur:60},
      {id:"half-lord",       dur:60},
      {id:"bridge",          dur:60},
      {id:"supine-twist",    dur:60},
      {id:"supine-twist",    dur:60},
      {id:"legs-up",         dur:180},
      {id:"corpse",          dur:120}
    ]
  },
  {
    id:"post-ride-hamstring",
    icon:"🚴",
    name:"Post-Ride Hamstring Reset",
    desc:"Short option for straight after a bike ride. Hamstrings are warm and shortened from the saddle — this is passive, no forcing. Pairs with or replaces Post-Ride Recovery.",
    level:"beginner",
    duration:"~15 min",
    focus:"Post-Ride Hamstrings",
    poses:[
      {id:"childs",          dur:60},
      {id:"downdog",         dur:60},
      {id:"standing-forward",dur:75},
      {id:"pyramid",         dur:60},
      {id:"pyramid",         dur:60},
      {id:"low-lunge",       dur:60},
      {id:"low-lunge",       dur:60},
      {id:"staff",           dur:45},
      {id:"seated-forward",  dur:120},
      {id:"happy-baby",      dur:60},
      {id:"supine-twist",    dur:45},
      {id:"supine-twist",    dur:45},
      {id:"legs-up",         dur:180}
    ]
  },
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
      {id:"downdog",      dur:30},
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
    desc:"Built for after a mountain bike ride. Targets quads, hamstrings, IT band, and lower back.",
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
      {id:"thread-needle",    dur:60},
      {id:"thread-needle",    dur:60},
      {id:"puppy",            dur:90},
      {id:"childs",           dur:120},
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
      {id:"locust",        dur:30},
      {id:"bow",           dur:30},
      {id:"wheel",         dur:20},
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
      {id:"bow",         dur:30},
      {id:"camel",       dur:30},
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
