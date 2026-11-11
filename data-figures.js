// data-figures.js — Exercise figure drawings (animated SVG demos), captions and setup pictures.
// Data only: loaded by index.html before app.js. Functions in here are called later by app.js,
// so they may use app.js helpers, but nothing in this file may run app.js code at load time.

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
    '<line x1="90" y1="96" x2="92" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="92" y1="112" x2="72" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
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
  pendlayrow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="50" y1="126" x2="150" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="96" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="122" y2="62" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="128" cy="54" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<polyline points="122,62 124,86 128,124" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+
    '<animate attributeName="points" values="122,62 124,86 128,124;122,62 124,86 128,124;122,62 140,72 122,60;122,62 124,86 128,124" keyTimes="0;0.35;0.65;1" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '</polyline>'+
    '<line x1="128" y1="124" x2="128" y2="124" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+
    '<animate attributeName="y2" values="124;124;60;124" keyTimes="0;0.35;0.65;1" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '</line>'+
    '</svg>';},
  singlearmrow:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="10" y1="126" x2="190" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<rect x="20" y="88" width="70" height="10" rx="2" fill="#5F5E5A"/>'+
    '<line x1="70" y1="88" x2="70" y2="58" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="76" cy="48" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="70" y1="66" x2="40" y2="88" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="70" y1="74" x2="118" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="118,106 120,90 96,70" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','118,106 120,90 96,70; 118,106 138,116 150,126; 118,106 120,90 96,70')+'</polyline>'+
    '<line x1="150" y1="126" x2="96" y2="70" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.4,'x2','96;150;96')+dsS(2.4,'y2','70;126;70')+'</line>'+
    '</svg>';},
  preachercurl:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="20" y1="126" x2="180" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<rect x="80" y="70" width="14" height="56" rx="4" fill="#5F5E5A" transform="rotate(20 87 98)"/>'+
    '<circle cx="100" cy="46" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="55" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="90" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="70" x2="88" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="88,98 82,116 70,132" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','88,98 82,116 70,132; 88,98 78,90 66,72; 88,98 82,116 70,132')+'</polyline>'+
    '<line x1="88" y1="98" x2="70" y2="132" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.4,'x2','70;66;70')+dsS(2.4,'y2','132;72;132')+'</line>'+
    '</svg>';},
  crossbodyhammercurl:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="60" y1="126" x2="140" y2="126" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="100" cy="38" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="47" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="88" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="94" x2="112" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="88" y1="56" x2="86" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="56" x2="114" y2="86" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<polyline points="86,86 82,108 78,122" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">'+dsS(2.4,'points','86,86 82,108 78,122; 86,86 100,66 122,50; 86,86 82,108 78,122')+'</polyline>'+
    '<line x1="114" y1="86" x2="120" y2="110" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="78" y1="124" x2="78" y2="122" stroke="#4ec98a" stroke-width="3" stroke-linecap="round">'+dsS(2.4,'x2','78;122;78')+dsS(2.4,'y2','122;50;122')+'</line>'+
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
  pullover:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="124" x2="175" y2="124" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="96" y1="124" x2="150" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="124" x2="168" y2="106" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="90" cy="120" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="-55 96 118;35 96 118;-55 96 118" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>'+
    '<line x1="96" y1="118" x2="96" y2="66" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="96" cy="58" r="9" fill="none" stroke="#4ec98a" stroke-width="4"/></g>'+
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
    '<line x1="155" y1="14" x2="155" y2="140" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="25" y1="138" x2="100" y2="138" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g>'+dsS(2.4,'transform','translate(0,0); translate(12,0); translate(0,0)')+
    '<line x1="45" y1="130" x2="132" y2="72" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="141" cy="64" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="132" y1="72" x2="153" y2="57" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '</g>'+
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
  "spinalrot":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-1;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="128" x2="130" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 100;-18 100 100;0 100 100;18 100 100;0 100 100" keyTimes="0;0.25;0.5;0.75;1" dur="4.4s" repeatCount="indefinite"/><line x1="100" y1="100" x2="100" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+'<line x1="100" y1="72" x2="75" y2="85" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="72" x2="125" y2="85" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
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
  "barrelroll":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="50" y1="100" x2="150" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="100" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 118;22 100 118;0 100 118;-22 100 118;0 100 118" keyTimes="0;0.25;0.5;0.75;1" dur="4.2s" repeatCount="indefinite"/><line x1="100" y1="118" x2="80" y2="132" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="118" x2="120" y2="132" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
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
  "highplank":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="110" x2="150" y2="105" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="110" x2="60" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="148" y1="105" x2="148" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="48" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
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
  "chaturanga":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="55" y1="118" x2="150" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="60" y1="118" x2="72" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="148" y1="112" x2="140" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="48" cy="120" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
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
  "kneeling-sugarcane":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="128" x2="90" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="90" cy="80" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<path d="M90,95 Q110,80 100,50" fill="none" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="105" x2="130" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="y2" values="80;70;80" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></line>'+
    '</g>'+
    '</svg>';},
  "banana":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<path d="M50,120 Q100,90 150,110" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M50,120 Q100,90 150,110;M50,116 Q100,80 150,116;M50,120 Q100,90 150,110" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '<circle cx="155" cy="112" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '</g>'+
    '</svg>';},
  "windshield-wipers":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="60" y1="105" x2="140" y2="105" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 105;28 100 105;0 100 105;-28 100 105;0 100 105" keyTimes="0;0.25;0.5;0.75;1" dur="4.4s" repeatCount="indefinite"/><line x1="100" y1="105" x2="90" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+'<line x1="100" y1="105" x2="110" y2="128" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
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
  "knees-chest":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="110" x2="60" y2="105" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="50" cy="102" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<path d="M90,110 Q100,90 90,70" fill="none" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"><animate attributeName="d" values="M90,110 Q100,90 90,70;M90,110 Q95,85 80,68;M90,110 Q100,90 90,70" keyTimes="0;0.5;1" dur="3.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/></path>'+
    '</g>'+
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
  "wrist-figure8":function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="28" y1="128" x2="172" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="128" x2="100" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="128" x2="100" y2="95" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="95" x2="100" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="100" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<circle cx="60" cy="128" r="5" fill="none" stroke="#4ec98a" stroke-width="2">'+
    '<animateMotion dur="2.8s" repeatCount="indefinite" path="M0,0 C6,-5 6,5 0,0 C-6,-5 -6,5 0,0"/></circle>'+
    '</svg>';},
  quadpull:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="58" y1="26" x2="58" y2="128" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="104" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="104" y1="52" x2="104" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="60" x2="66" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="104" y1="98" x2="94" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 104 98;140 104 98;0 104 98" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="104" y1="98" x2="104" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '<line x1="104" y1="60" x2="80" y2="118" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(2.6,'x2','80;96;80')+dsS(2.6,'y2','118;122;118')+'</line>'+
    '</svg>';},
  anklecircle:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="128" x2="166" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="70" cy="70" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="70" y1="80" x2="70" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="112" x2="60" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="112" x2="120" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="120" y1="118" x2="140" y2="120" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="146" cy="120" r="5" fill="none" stroke="#4ec98a" stroke-width="2">'+
    '<animateMotion dur="2.2s" repeatCount="indefinite" path="M0,0 C6,-8 -6,-8 0,0 C6,8 -6,8 0,0"/></circle>'+
    '</svg>';},
  frogpose:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="60" y1="128" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="140" y1="128" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,10;0,0" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="82" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="92" x2="100" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="86" x2="70" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="86" x2="130" y2="70" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  butterflyfold:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="118" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="130" y1="118" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 118;22 100 118;0 100 118" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="118" x2="100" y2="78" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="66" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="90" x2="80" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="120" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  wallsit:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="132" x2="160" y2="132" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="20" x2="70" y2="132" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animate attributeName="opacity" values="0.65;1;0.65" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite"/>'+
    '<circle cx="70" cy="52" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="70" y1="62" x2="70" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="70" y1="94" x2="112" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="112" y1="94" x2="112" y2="132" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '</svg>';},
  tke:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="90" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="52" x2="90" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="60" x2="66" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="90" y1="60" x2="114" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 90 90;18 90 90;0 90 90" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="90" x2="106" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '<path d="M106 128 Q100 108 90 90" fill="none" stroke="#4ec98a" stroke-width="3">'+dsS(2.4,'d','M106 128 Q100 108 90 90; M96 128 Q94 108 90 90; M106 128 Q100 108 90 90')+'</path>'+
    '</svg>';},
  slbridge:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="160" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="56" cy="106" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="64" y1="108" x2="100" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-12;0,0" keyTimes="0;0.5;1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="100" y1="108" x2="128" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="128" y1="108" x2="128" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '<line x1="100" y1="108" x2="118" y2="66" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.6,'y1','108;96;108')+dsS(2.6,'x2','118;108;118')+dsS(2.6,'y2','66;60;66')+'</line>'+
    '</svg>';},
  clamshell:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="60" cy="72" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="68" y1="78" x2="118" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="118" y1="100" x2="112" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 118 100;-34 118 100;0 118 100" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="118" y1="100" x2="150" y2="112" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="150" y1="112" x2="142" y2="124" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '</svg>';},
  treepose:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 128;2 100 128;-2 100 128;0 100 128" keyTimes="0;0.33;0.66;1" dur="3.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="36" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="46" x2="100" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="94" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="98" x2="122" y2="86" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="122" y1="86" x2="108" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="54" x2="80" y2="24" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="54" x2="120" y2="24" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  standfigure4:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="94" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 100 90;-10 100 90;0 100 90" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="34" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="44" x2="100" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="76" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="60" x2="124" y2="52" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="132" y2="88" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="132" y1="88" x2="110" y2="102" stroke="#4ec98a" stroke-width="5" stroke-linecap="round"/></g>'+
    '</svg>';},
  pigeonpose:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="118" x2="110" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="122" x2="150" y2="126" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 90 108;16 90 108;0 90 108" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="108" x2="88" y2="70" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="86" cy="60" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="90" y1="82" x2="64" y2="98" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  happybaby:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="34" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="70" cy="120" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="78" y1="118" x2="112" y2="118" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="-3 112 118;3 112 118;-3 112 118" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="112" y1="118" x2="100" y2="76" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="76" x2="90" y2="60" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="112" y1="118" x2="136" y2="80" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="136" y1="80" x2="150" y2="62" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="88" y1="66" x2="90" y2="60" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="148" y1="68" x2="150" y2="62" stroke="#4ec98a" stroke-width="3" stroke-linecap="round"/></g>'+
    '</svg>';},
  firehydrant:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="150" cy="76" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="142" y1="84" x2="90" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="100" x2="90" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="142" y1="90" x2="130" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 90 100;-30 90 100;0 90 100" keyTimes="0;0.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="100" x2="64" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="64" y1="90" x2="58" y2="102" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  restsquat:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="66" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="76" x2="100" y2="100" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="78" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="78" y1="116" x2="76" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="100" x2="122" y2="116" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="122" y1="116" x2="124" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="84" x2="80" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="84" x2="120" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  dancerbridge:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="120" x2="160" y2="120" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="52" cy="106" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="60" y1="108" x2="96" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="44" y1="112" x2="60" y2="108" stroke="#4ec98a" stroke-width="4" stroke-linecap="round">'+dsS(2.8,'y1','112;104;112')+'</line>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" keyTimes="0;0.5;1" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="96" y1="108" x2="124" y2="108" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="124" y1="108" x2="124" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '<line x1="96" y1="108" x2="118" y2="60" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(2.8,'y1','108;98;108')+dsS(2.8,'x2','118;104;118')+dsS(2.8,'y2','60;54;60')+'</line>'+
    '</svg>';},
  tspinetwist:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="70" y1="118" x2="110" y2="120" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="110" y1="120" x2="150" y2="122" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="90" y1="112" x2="90" y2="94" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="88" cy="86" r="8" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 90 100;-42 90 100;0 90 100" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="90" y1="100" x2="118" y2="70" stroke="#4ec98a" stroke-width="4" stroke-linecap="round"/></g>'+
    '</svg>';},
  tailorpose:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="128" x2="100" y2="76" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<circle cx="100" cy="64" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="90" x2="82" y2="110" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="100" y1="90" x2="118" y2="110" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 70 118;-8 70 118;0 70 118" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="70" y1="118" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '<g><animateTransform attributeName="transform" type="rotate" values="0 130 118;8 130 118;0 130 118" keyTimes="0;0.5;1" dur="3.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<line x1="130" y1="118" x2="100" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/></g>'+
    '</svg>';},
  legswing:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="40" y1="128" x2="160" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="58" y1="26" x2="58" y2="128" stroke="#5F5E5A" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="104" cy="40" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="104" y1="50" x2="104" y2="98" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="58" x2="66" y2="50" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="104" y1="98" x2="98" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="104" y1="98" x2="128" y2="112" stroke="#4ec98a" stroke-width="5" stroke-linecap="round">'+dsS(1.8,'x2','128;76;128')+dsS(1.8,'y2','112;118;112')+'</line>'+
    '</svg>';},
  ride:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="130" x2="170" y2="130" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="120" cy="112" r="18" fill="none" stroke="#4ec98a" stroke-width="3" stroke-dasharray="2 4"/>'+
    '<circle cx="70" cy="112" r="10" fill="none" stroke="#4ec98a" stroke-width="3" stroke-dasharray="2 4"/>'+
    '<line x1="70" y1="112" x2="100" y2="80" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<line x1="100" y1="80" x2="120" y2="112" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<circle cx="102" cy="58" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="102" y1="68" x2="96" y2="90" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="102" y1="70" x2="122" y2="80" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<line x1="96" y1="90" x2="120" y2="112" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="120" cy="112" r="6" fill="none" stroke="#9a9d8c" stroke-width="4">'+
    '<animateMotion dur="1.6s" repeatCount="indefinite" path="M0,0 C10,-10 10,10 0,0 C-10,-10 -10,10 0,0"/></circle>'+
    '</svg>';},
  ruck:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;18,0;0,0" keyTimes="0;0.5;1" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<rect x="88" y="52" width="20" height="26" rx="4" fill="#4ec98a22" stroke="#4ec98a" stroke-width="3"/>'+
    '<line x1="100" y1="78" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="96" x2="84" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.1,'x2','84;114;84')+'</line>'+
    '<line x1="100" y1="96" x2="118" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.1,'x2','118;88;118')+'</line></g>'+
    '</svg>';},
  walk:function(){return '<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'+
    '<line x1="30" y1="128" x2="170" y2="128" stroke="#5F5E5A" stroke-width="3" stroke-linecap="round"/>'+
    '<g><animateTransform attributeName="transform" type="translate" values="0,0;18,0;0,0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>'+
    '<circle cx="100" cy="42" r="9" fill="none" stroke="#9a9d8c" stroke-width="4"/>'+
    '<line x1="100" y1="52" x2="100" y2="96" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round"/>'+
    '<line x1="100" y1="64" x2="80" y2="76" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(1,'x2','80;120;80')+'</line>'+
    '<line x1="100" y1="64" x2="120" y2="78" stroke="#9a9d8c" stroke-width="4" stroke-linecap="round">'+dsS(1,'x2','120;80;120')+'</line>'+
    '<line x1="100" y1="96" x2="84" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.1,'x2','84;114;84')+'</line>'+
    '<line x1="100" y1="96" x2="118" y2="128" stroke="#9a9d8c" stroke-width="5" stroke-linecap="round">'+dsS(1.1,'x2','118;88;118')+'</line></g>'+
    '</svg>';}
};

var DS_DEMOCAP={
  "backwalk": "short steps backward, land on the ball of the foot",
  "tibraise": "heels elevated, weight back, lift the toes",
  "kneeraise": "lying flat, drive one knee to the chest, slow return",
  "dip": "comfortable depth only — nowhere near shoulder-below-elbow",
  "extrot": "elbow pinned to the side — only the forearm rotates",
  "trap3": "arm at a 30° angle from the body — raise along that line",
  "nordic": "ankles locked, lower slowly, catch yourself early",
  "pulldown": "band anchored high — kneel facing it, pull down",
  "row": "no anchor — hinge forward, pull the elbow back",
  "press": "press straight overhead",
  "fly": "arms wide, then squeeze together in front",
  "pallof": "band from your side — press straight out, resist the twist",
  "latwalk": "band above the knees — step out, stay in the half-squat",
  "triceps": "elbows pinned — only the forearms extend down",
  "curl": "upper arms still — only the forearms move",
  "nine90": "half-kneeling, both knees at 90 — shift the hips forward",
  "ninetytransition": "seated, both knees at 90 — rotate hip to hip, stay tall",
  "kneehug": "on your back — knees hugged to the chest",
  "dragon": "deep low lunge, back knee down",
  "goblet": "weight at chest as counterbalance — sink deep, elbows brush the knees",
  "squat": "sit back and down, drive through the whole foot",
  "splitsquat": "rear foot elevated behind you — front leg does the work",
  "facepull": "pull to your face, elbows high and wide — not a row",
  "wallpushup": "hands on the wall or desk edge — lean in, press away",
  "standcatcow": "hands on the desk, hinge forward — round and arch through the spine",
  "slrdl": "one leg plants, the other extends back as you hinge — hips stay square",
  "stand": "feet rooted, tailbone tucked, crown of the head lifts",
  "standsqueeze": "squeeze both glutes hard, hold, release",
  "figure4": "ankle crossed over the knee, hinge forward until the hip opens",
  "hipcircle": "biggest slow circle the hip can make, ribs stay down",
  "chestopen": "forearm on the frame, rotate away — open across the chest",
  "lowlunge": "long stance, hands forward, sink the hips gently",
  "shouldercar": "biggest slow circle the shoulder can make, ribs down",
  "deadhang": "full grip, arms straight, shoulder blades pulled down and back",
  "scappull": "arms stay straight — only the shoulder blades pull down",
  "pullneg": "chin over the bar, then lower as slowly as you can",
  "pullband": "band looped under the foot, pull the chest to the bar",
  "tgu": "weight locked overhead the whole way — roll to elbow, to hand, to standing",
  "birddog": "opposite arm and leg extend — flat back, no rocking",
  "sideplank": "hips stacked and lifted — reach the top arm under, then back to vertical",
  "pullover": "arms stay straight \u2014 sweep the ball from overhead to over the chest, ribs down",
  "wristecc": "forearm supported — lower the weight slowly, use the other hand to lift it back",
  "hipthrust": "shoulders on the couch — hips sink low, then drive up to a flat tabletop",
  "ballrow": "chest on the ball — row the handle up, lower back stays out of it",
  "seated": "sit tall, eyes soft — breathe low into the belly",
  "downdog": "hips to the sky, long spine — pedal the heels",
  "fold": "hinge and hang heavy — soft knees, let the head go",
  "cobra": "press the chest forward and up — hips stay grounded",
  "savasana": "flat on your back, everything releases — just breathe"
};

var DS_SETUPPICS={
  'Heavy Band Front Squat':function(){ return dsPic([
    {cx:95,title:'Top (standing)',head:[95,60],torso:[[95,76],[95,138]],legs:[[95,138],[95,190],[95,246],[112,246]],arm:[[95,86],[120,98],[102,80]],band:[[96,248],[102,82]],tags:[[4,120,'Band taut'],[4,134,'at the start']]},
    {cx:285,title:'Bottom',head:[290,82],torso:[[289,98],[272,178]],legs:[[272,178],[322,196],[285,246],[302,246]],arm:[[287,108],[316,120],[296,102]],band:[[286,248],[296,104]],bw:4,tags:[[196,224,'Knees forward']]}
  ],['Feet on the band, elbows up, chest tall, heels flat','3 sec down · 1 sec pause · drive up']); },
  'Banded Leg Extension':function(){ return dsPic([
    {cx:95,title:'Start (knee bent)',head:[72,90],torso:[[72,106],[72,190]],legs:[[72,190],[122,190],[126,244],[144,244]],arm:[[72,118],[84,160],[92,196]],lines:[[40,197,112,197],[46,197,46,252],[106,197,106,252]],band:[[8,250],[126,246]],tags:[[8,268,'Low anchor']]},
    {cx:285,title:'Top (leg level)',head:[262,90],torso:[[262,106],[262,190]],legs:[[262,190],[312,190],[358,190],[366,190]],arm:[[262,118],[274,160],[282,196]],lines:[[230,197,302,197],[236,197,236,252],[296,197,296,252]],band:[[198,250],[358,192]],bw:4,tags:[[292,172,'Squeeze 1 sec'],[198,268,'Low anchor']]}
  ],['Band around both feet, thighs stay planted','1 sec up · 1 sec squeeze · 3 sec down']); },
  'Lying Band Leg Curl':function(){ return dsPic([
    {cx:95,title:'Start (legs straight)',head:[30,182],torso:[[44,188],[110,190]],legs:[[110,190],[146,190],[176,192]],arm:[[56,190],[50,212],[50,224]],lines:[[24,200,124,200],[30,200,30,252],[118,200,118,252]],band:[[176,194],[186,250]],tags:[[118,268,'Low anchor']]},
    {cx:285,title:'Top (heels up)',head:[220,182],torso:[[234,188],[300,190]],legs:[[300,190],[336,190],[326,140]],arm:[[246,190],[240,212],[240,224]],lines:[[214,200,314,200],[220,200,220,252],[308,200,308,252]],band:[[326,142],[376,250]],bw:4,tags:[[290,128,'Squeeze 1 sec'],[308,268,'Low anchor']]}
  ],['Face down, band around both feet, hips pinned to the bench','1 sec up · 1 sec squeeze · 3 sec down']); },
  'Seated Band Leg Curl':function(){ return dsPic([
    {cx:95,title:'Start (legs out)',head:[40,90],torso:[[40,106],[40,190]],legs:[[40,190],[90,190],[140,196]],arm:[[40,118],[52,160],[60,196]],lines:[[10,197,80,197],[14,197,14,252],[76,197,76,252]],band:[[140,196],[184,196]],tags:[[120,180,'Mid anchor']]},
    {cx:285,title:'Pulled in (heels under)',head:[230,90],torso:[[230,106],[230,190]],legs:[[230,190],[280,190],[266,244]],arm:[[230,118],[242,160],[250,196]],lines:[[200,197,270,197],[204,197,204,252],[266,197,266,252]],band:[[266,242],[374,196]],bw:4,tags:[[284,236,'Squeeze 1 sec'],[310,180,'Mid anchor']]}
  ],['Face the door, band taut, grip the bench, knees together','Pull heels under · 1 sec squeeze · 3 sec back out']); },
  'Kneeling Banded Hip Thrust':function(){ return dsPic([
    {cx:95,title:'Hips back',head:[112,72],torso:[[108,86],[82,150]],legs:[[82,150],[112,212],[70,212]],arm:[[104,98],[122,130],[126,150]],band:[[10,206],[82,150]],tags:[[10,230,'Low anchor']]},
    {cx:285,title:'Lockout (squeeze)',head:[290,64],torso:[[290,78],[290,150]],legs:[[290,150],[292,212],[250,212]],arm:[[290,92],[300,128],[302,148]],band:[[200,206],[290,150]],bw:4,tags:[[300,166,'Squeeze 1 sec'],[200,230,'Low anchor']]}
  ],['Kneel facing away from a low anchor, band at your hips','Drive hips forward · 1 sec squeeze · shuffle back to exit']); },
  'Bayesian Curl (low anchor)':function(){ return dsBayesianPic(); }
};

var DS_DEMOMAP={"thu-ballpullover": "pullover", "pu-warm-thread": "tspinetwist", "pu-warm-scappush": "highplank", "pu-warm-pullapart": "fly", "pu-scaprow": "row", "bwl-legadd": "side-leg-ext", "mon-curl": "curl", "mon-tri": "triceps", "mon-bike": "bicycle", "mon-legraise": "legraise", "tue-lat": "latwalk", "tue-pallof": "pallof", "tue-step": "stepup", "wed-bike": "bicycle", "wed-legraise": "legraise", "wed-slam": "slam", "wed-rotslam": "woodchop", "thu-lateral": "lateralraise", "thu-hammer": "Anchor the tube at the bottom of a door (close and lock it). Face AWAY from the door in a staggered stance and step forward until the band is taut with your arms hanging straight — mark the spot. Elbows pinned to your sides, slightly behind your body. Palms facing each other, thumbs up; curl up with the upper arms still, squeeze, then lower slowly into the full stretch behind you. Stepping forward adds load, stepping back reduces it.", "thu-tri": "triceps", "thu-bike": "bicycle", "thu-legraise": "legraise", "fri-calf": "calf", "fri-obliques": "woodchop", "fri-deadbug": "deadbug"};
