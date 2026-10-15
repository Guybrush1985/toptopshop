// MyShotCoach – Vorschau-Version.
// Läuft komplett im Browser: keine Cookies, kein Local Storage, keine Uploads an einen Server.
// Logins, Videos und Bestellungen leben nur im Arbeitsspeicher und sind nach dem Neuladen weg.
(function () {
'use strict';
const {useState, useEffect, useRef} = React;
const html = htm.bind(React.createElement);
const CONTACT = 'info@tanmeon.de';

/* ---------- Daten ---------- */
const SPORTS = [
  {id:'tennis',name:'Tennis',dot:'#FFC93C',strokes:[
    ['vh','Vorhand','fh'],['rh','Rückhand','bh'],['vhv','Vorhand-Volley','volley'],['rhv','Rückhand-Volley','volleyb'],
    ['sm','Schmetterball','smash'],['rsm','Rückhand-Schmetterball','smashb'],['auf','Aufschlag','serve'],['kick','Spin-Aufschlag','spin'],
    ['sla','Slice-Aufschlag','slice'],['vhs','Vorhand-Slice','slice'],['rhs','Rückhand-Slice','sliceb'],['ret','Return','return']]},
  {id:'padel',name:'Padel',dot:'#14C995',strokes:[
    ['vh','Vorhand','fh'],['rh','Rückhand','bh'],['vol','Volley','volley'],['ban','Bandeja','slice'],['vib','Víbora','sliceb'],
    ['por3','Smash','smash'],['baj','Bajada','wall'],['auf','Aufschlag','serve'],['lob','Lob','lob'],['chi','Chiquita','drop']]},
  {id:'tt',name:'Tischtennis',dot:'#FF4D8D',strokes:[
    ['vht','VH-Topspin','spin'],['rht','RH-Topspin','bh'],['sch','Schupf','slice'],['blo','Block','block'],
    ['flip','Flip','fh'],['kon','Konter','return'],['auf','Aufschlag','serve']]},
  {id:'pickle',name:'Pickleball',dot:'#7FD1FF',strokes:[
    ['dink','Dink','drop'],['drv','Drive','fh'],['tsd','Third Shot Drop','lob'],['vol','Volley','volley'],
    ['auf','Aufschlag','serve'],['ret','Return','return'],['ovh','Overhead','smash']]},
];
const sportById = id => SPORTS.find(s => s.id === id) || SPORTS[0];
const strokeOf = (sid, kid) => {
  const k = sportById(sid).strokes.find(x => x[0] === kid);
  return k ? {id:k[0], name:k[1], icon:k[2]} : {id:kid, name:kid, icon:'fh'};
};

const TIERS = [
  {id:'C',name:'C-Lizenz',sub:'Lizenzierte Trainer:innen für Einstieg und Breitensport',w:19,v:29,cut:.25},
  {id:'B',name:'B-Lizenz',sub:'Erfahrene Trainer:innen für ambitionierte Spieler:innen',w:29,v:39,cut:.25},
  {id:'A',name:'A-Lizenz',sub:'Leistungstrainer:innen mit der höchsten Verbandslizenz',w:39,v:59,cut:.25},
  {id:'P',name:'Ex-Profi',sub:'Ehemalige Tour-Profis schauen auf deine Technik',w:149,v:199,cut:.20},
];
const tierById = id => TIERS.find(t => t.id === id) || TIERS[0];

// Fiktive Beispielprofile. Auf der Seite überall als „Beispiel“ gekennzeichnet.
const COACHES = [
  {id:'lena',name:'Lena Hartmann',sports:['tennis'],tier:'A',license:'DTB A-Lizenz',club:'TC Möwenkante',city:'Hamburg',rating:4.9,reviews:128,resp:18,since:2019,hue:['#3B2DFF','#FFC93C'],
   prices:{w:39,v:59},langs:['Deutsch','Englisch'],focus:['Aufschlag','Rückhand','Matchplan'],
   bio:'Ich arbeite seit 14 Jahren mit Erwachsenen und Jugendlichen im Leistungsbereich. Mein Spezialgebiet ist der Aufschlag: Ich zeige dir mit Standbildern genau, wo Energie verloren geht.',
   certs:['DTB A-Trainer-Lizenz','DTB Athletiktrainer','Mentaltraining im Tennis'],
   awards:['Landesmeisterin Damen 30, 2023']},
  {id:'marco',name:'Marco Ruiz',sports:['padel'],tier:'B',license:'Padel-Trainer Level 2',club:'Padelwerk Spreebogen',city:'Berlin',rating:4.8,reviews:64,resp:12,since:2022,hue:['#14C995','#16133F'],
   prices:{w:29,v:39},langs:['Deutsch','Spanisch','Englisch'],focus:['Bandeja','Víbora','Spiel an der Wand'],
   bio:'Aufgewachsen in Valencia, seit vier Jahren Coach in Berlin. Ich erkläre dir, warum deine Bandeja zu lang wird, und gebe dir drei Übungen für die nächste Session.',
   certs:['Padel-Trainer Level 2','Padel-Trainer Level 1'],awards:['Vize-Stadtmeister Berlin 2025']},
  {id:'jonas',name:'Jonas Weber',sports:['tennis'],tier:'C',license:'DTB C-Lizenz Breitensport',club:'TSV Isarbogen',city:'München',rating:4.6,reviews:41,resp:24,since:2023,hue:['#FF4D8D','#FFC93C'],
   prices:{w:19,v:29},langs:['Deutsch'],focus:['Vorhand','Einsteiger:innen','Jugend'],
   bio:'Ich trainiere vor allem Hobbyspieler:innen und Kids. Mein Feedback ist kurz, klar und mit Übungen, die du auch alleine an der Ballwand machen kannst.',
   certs:['DTB C-Trainer-Lizenz Breitensport','Kindertennis-Zertifikat'],awards:[]},
  {id:'aylin',name:'Aylin Demir',sports:['tt'],tier:'B',license:'DTTB B-Lizenz',club:'TTV Förde-Nord',city:'Kiel',rating:4.9,reviews:87,resp:10,since:2020,hue:['#FF4D8D','#3B2DFF'],
   prices:{w:29,v:39},langs:['Deutsch','Türkisch'],focus:['Topspin','Aufschlag','Rückhand'],
   bio:'Ehemalige Oberliga-Spielerin. Ich analysiere Schlagbewegungen Bild für Bild und achte besonders auf Handgelenk und Beinarbeit.',
   certs:['DTTB B-Trainer-Lizenz'],awards:['Oberliga-Meisterin 2018']},
  {id:'tom',name:'Tom Brenner',sports:['tennis'],tier:'P',license:'Ex-Tour-Profi · Bestes ATP-Ranking 212',club:'TC Rheinterrasse',city:'Köln',rating:5.0,reviews:23,resp:36,since:2025,hue:['#16133F','#FFC93C'],
   prices:{w:149,v:199},langs:['Deutsch','Englisch','Französisch'],focus:['Aufschlag','Return','Turnierspieler:innen'],
   bio:'Neun Jahre auf der Tour, Challenger-Titel in Europa und Südamerika. Ich schaue mir deine Technik so an, wie ich sie mir selbst früher angeschaut habe.',
   certs:['DTB B-Trainer-Lizenz','Tour-Profi 2012 bis 2021'],awards:['2 Challenger-Titel']},
  {id:'sofia',name:'Sofia Lindqvist',sports:['padel','tennis'],tier:'A',license:'Padel-Trainer Level 3 · DTB B-Lizenz',club:'Padel Arena Mainufer',city:'Frankfurt',rating:4.8,reviews:59,resp:16,since:2021,hue:['#7FD1FF','#3B2DFF'],
   prices:{w:39,v:59},langs:['Englisch','Deutsch','Schwedisch'],focus:['Umstieg von Tennis','Volley','Smash'],
   bio:'Ich helfe vor allem Tennisspieler:innen beim Umstieg auf Padel. Viele Gewohnheiten aus dem Tennis kosten auf dem Padel-Court Punkte, und genau die finde ich.',
   certs:['Padel-Trainer Level 3','DTB B-Trainer-Lizenz'],awards:[]},
  {id:'ben',name:'Ben Okafor',sports:['pickle'],tier:'C',license:'Zertifizierter Pickleball-Coach',club:'Pickleball Club Pleiße',city:'Leipzig',rating:4.7,reviews:19,resp:20,since:2024,hue:['#FFC93C','#14C995'],
   prices:{w:19,v:29},langs:['Deutsch','Englisch'],focus:['Dink','Third Shot Drop','Einsteiger:innen'],
   bio:'Pickleball ist schnell gelernt und schwer gemeistert. Ich helfe dir beim Schritt vom Hobby zum Turnier.',
   certs:['Pickleball-Coach-Zertifikat Level 1'],awards:[]},
  {id:'mia',name:'Mia Schröder',sports:['tt','pickle'],tier:'A',license:'DTTB A-Lizenz',club:'TTC Weserkante',city:'Bremen',rating:4.8,reviews:47,resp:14,since:2021,hue:['#C9B8FF','#FF4D8D'],
   prices:{w:39,v:59},langs:['Deutsch'],focus:['Aufschlag','Beinarbeit','Pickleball-Umstieg'],
   bio:'Tischtennis und Pickleball leben von schnellen Füßen. In meinem Feedback bekommst du Standbilder mit Laufwegen und eine Übungsroutine für zehn Minuten am Tag.',
   certs:['DTTB A-Trainer-Lizenz'],awards:['Landesmeisterin Damen 2017']},
];
const coachById = id => COACHES.find(c => c.id === id);
const REVIEWS = [
  {n:'Paul',s:5,d:'vor 3 Tagen',st:'Aufschlag',t:'Super konkret. Nach zwei Wochen mit den Übungen kommt mein erster Aufschlag deutlich öfter rein.'},
  {n:'Nele',s:5,d:'vor 1 Woche',st:'Rückhand',t:'Die Standbilder mit Markierungen haben mir mehr gebracht als fünf Trainerstunden.'},
  {n:'Chris',s:4,d:'vor 3 Wochen',st:'Volley',t:'Sehr gutes Feedback, ich hätte mir noch eine Übung mehr gewünscht.'},
];

const SEED_REQ = [
  {id:'r1',sport:'tennis',stroke:'kick',coach:'lena',tier:'A',format:'v',price:59,status:'done',date:'12.10.2026',note:'Mein Kick springt kaum hoch.',
   feedback:{summary:'Dein Ballwurf liegt zu weit vorne, deshalb kommst du nicht unter den Ball. Die Schulterrotation ist schon richtig gut.',
     points:[['0:03','Ballwurf etwa einen Ball weiter nach links und über den Kopf werfen.'],['0:04','Knie früher beugen, du startest die Beinstreckung zu spät.'],['0:05','Der Schlägerkopf fällt gut hinter den Rücken. Weiter so.'],['0:06','Treffpunkt: Bürste den Ball von 7 nach 1 Uhr.']],
     drills:['Ballwurf-Übung: 20 Würfe, der Ball soll auf den Schläger am Boden fallen','Kick aus dem Knien heraus, 3 × 10 Bälle','Schattenaufschläge mit Handtuch, 2 × 15']},rated:false},
  {id:'r2',sport:'padel',stroke:'ban',coach:'marco',tier:'B',format:'w',price:29,status:'progress',date:'14.10.2026',note:'Meine Bandeja landet oft im Netz.'},
];
const SEED_BOARD = [
  {id:'b1',sport:'tennis',stroke:'rh',tier:'B',format:'v',player:'Jana, 34',ago:'vor 12 Min.',note:'Einhändige Rückhand, der Ball fliegt oft zu hoch.'},
  {id:'b2',sport:'tennis',stroke:'auf',tier:'C',format:'w',player:'Malte, 41',ago:'vor 40 Min.',note:'Der erste Aufschlag kommt selten rein.'},
  {id:'b3',sport:'tennis',stroke:'vhv',tier:'B',format:'w',player:'Leonie, 17',ago:'vor 1 Std.',note:'Am Netz bin ich mit dem Volley zu spät.'},
  {id:'b4',sport:'tennis',stroke:'sla',tier:'C',format:'v',player:'Ömer, 28',ago:'vor 2 Std.',note:''},
  {id:'b5',sport:'padel',stroke:'vib',tier:'B',format:'v',player:'Sarah, 39',ago:'vor 3 Std.',note:'Víbora oder Bandeja? Ich weiß nie, welche.'},
];
const SEED_JOBS = [
  {id:'j1',sport:'tennis',stroke:'vh',tier:'B',format:'v',player:'Felix, 23',ago:'gestern',note:'Die Vorhand longline geht immer ins Aus.',status:'progress'},
  {id:'j0',sport:'tennis',stroke:'kick',tier:'B',format:'w',player:'Hanna, 30',ago:'vor 4 Tagen',note:'',status:'done',earned:21.75},
];
const SEED_ME = {name:'Alex Becker',club:'TC Grünblick',city:'Hannover',tier:'B',license:'DTB B-Lizenz',sports:['tennis','padel'],
  bio:'Ich trainiere seit acht Jahren Mannschaftsspieler:innen bis zur Verbandsliga. Mein Feedback kommt als Video mit Zeitlupe und Markierungen.',
  langs:['Deutsch','Englisch'],awards:['Vereinstrainer des Jahres 2024'],
  certs:[{n:'DTB B-Trainer-Lizenz',st:'ok'},{n:'Padel-Trainer Level 1',st:'ok'}],
  prices:{w:29,v:39},active:true,photo:null,hue:['#FF4D8D','#3B2DFF']};

/* ---------- Icons ---------- */
const I = {
  upload:'M12 16V4m0 0-5 5m5-5 5 5M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2',
  home:'M3 11 12 4l9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  users:'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 19v-1a4 4 0 0 0-3-3.87M15.5 3.13a3.5 3.5 0 0 1 0 6.74',
  film:'M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4',
  close:'M6 6l12 12M18 6 6 18',
  check:'M5 12.5 10 17 19 7',
  arrow:'M5 12h14m-6-6 6 6-6 6',
  back:'M19 12H5m6 6-6-6 6-6',
  clock:'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
  pin:'M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
  shield:'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM8.5 12l2.5 2.5 4.5-5',
  award:'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12M8.5 13.5 7 21l5-3 5 3-1.5-7.5',
  cam:'M4 7h3l2-3h6l2 3h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  side:'M3 20h18M7 20V9l5-5 5 5v11M10 20v-5h4v5',
  body:'M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 22l1-8-3-2 2-5h6l2 5-3 2 1 8',
  repeat:'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3',
  sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  inbox:'M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6z',
  edit:'M4 20h4L19 9l-4-4L4 16zM14 6l4 4',
  plus:'M12 5v14M5 12h14',
  logout:'M15 4h4v16h-4M10 17l5-5-5-5M15 12H3',
  star:'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
  doc:'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
  video:'M3 6h12v12H3zM15 10l6-3v10l-6-3',
  lock:'M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3',
  mail:'M3 5h18v14H3zM3 6l9 7 9-7',
  search:'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14M21 21l-5-5',
  copy:'M8 8h12v12H8zM4 16V4h12',
};
function Ic({n, size = 20, sw = 2, style}) {
  return html`<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=${sw} strokeLinecap="round" strokeLinejoin="round" style=${style} aria-hidden="true"><path d=${I[n]}/></svg>`;
}
function Stars({v, size = 15}) {
  const out = [];
  for (let i = 1; i <= 5; i++) {
    out.push(html`<svg key=${i} viewBox="0 0 24 24" style=${{width:size,height:size}} fill=${v >= i - .25 ? 'var(--sun)' : 'none'} stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round"><path d=${I.star}/></svg>`);
  }
  return html`<span className="stars" aria-label=${String(v).replace('.', ',') + ' von 5 Sternen'}>${out}</span>`;
}

/* Schlag-Icons: Schläger, Ball und Schwungbahn auf einem 64er-Raster */
function Racket({x, y, a}) {
  return html`<g transform=${`translate(${x} ${y}) rotate(${a})`}>
    <ellipse cx="0" cy="-13" rx="8.5" ry="11.5" fill="none" stroke="currentColor" strokeWidth="3"/>
    <path d="M-4 -20v14M0 -24v22M4 -20v14M-7 -15h14M-7 -9h14" stroke="currentColor" strokeWidth="1.2" opacity=".55"/>
    <path d="M0 -1.5v14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
  </g>`;
}
function Ball({x, y, r = 4.6}) {
  return html`<g><circle cx=${x} cy=${y} r=${r} fill="#FFC93C" stroke="#16133F" strokeWidth="2"/><path d=${`M${x - r + 1.2} ${y - 1.6}q${r - 1.2} 3 ${2 * r - 2.4} 0`} fill="none" stroke="#16133F" strokeWidth="1.2"/></g>`;
}
const Trail = ({d, dash}) => html`<path d=${d} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray=${dash || '1 6'} opacity=".9"/>`;
function StrokeIcon({k}) {
  const flip = /b$/.test(k);
  const base = flip ? k.slice(0, -1) : k;
  let body;
  switch (base) {
    case 'fh': body = html`<${Trail} d="M8 48 Q 26 60 50 24"/><${Racket} x=${46} y=${36} a=${38}/><${Ball} x=${18} y=${22}/>`; break;
    case 'bh': body = html`<${Trail} d="M8 48 Q 26 60 50 24"/><${Racket} x=${46} y=${36} a=${38}/><${Ball} x=${18} y=${22}/>`; break;
    case 'volley': body = html`<path d="M6 8v50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" opacity=".5"/><${Trail} d="M12 30 L 30 30" dash="2 5"/><${Racket} x=${42} y=${38} a=${-12}/><${Ball} x=${14} y=${30}/>`; break;
    case 'smash': body = html`<${Trail} d="M46 6 Q 54 30 20 56"/><${Racket} x=${40} y=${28} a=${24}/><${Ball} x=${22} y=${10}/>`; break;
    case 'serve': body = html`<path d="M18 58 V 18" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 5" strokeLinecap="round"/><${Ball} x=${18} y=${12}/><${Trail} d="M54 54 Q 62 22 40 8"/><${Racket} x=${44} y=${30} a=${22}/>`; break;
    case 'spin': body = html`<${Trail} d="M8 56 Q 22 52 30 36 T 54 10"/><${Racket} x=${42} y=${42} a=${30}/><${Ball} x=${16} y=${20}/><path d="M9 14a9 9 0 0 1 9-4M25 26a9 9 0 0 1-9 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>`; break;
    case 'slice': body = html`<${Trail} d="M8 12 Q 36 18 56 52"/><${Racket} x=${42} y=${38} a=${-58}/><${Ball} x=${16} y=${40}/>`; break;
    case 'return': body = html`<path d="M8 22h30m-7-7 7 7-7 7M56 44H26m7-7-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><${Ball} x=${48} y=${22}/>`; break;
    case 'drop': body = html`<path d="M36 34v24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M28 34h16" stroke="currentColor" strokeWidth="2" opacity=".6"/><${Trail} d="M8 44 Q 30 8 46 54"/><${Ball} x=${46} y=${54}/>`; break;
    case 'lob': body = html`<${Trail} d="M6 56 Q 32 -16 58 56"/><path d="M32 40v18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><${Ball} x=${32} y=${10}/>`; break;
    case 'block': body = html`<path d="M48 8v48" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/><${Trail} d="M8 20 L 40 32 L 12 46" dash="2 5"/><${Ball} x=${40} y=${32}/>`; break;
    case 'wall': body = html`<rect x="48" y="6" width="9" height="52" rx="2" fill="currentColor" opacity=".25" stroke="currentColor" strokeWidth="2.5"/><${Trail} d="M10 50 Q 40 46 48 24 Q 30 18 12 30"/><${Ball} x=${12} y=${30}/>`; break;
    default: body = html`<${Ball} x=${32} y=${32} r=${10}/>`;
  }
  return html`<svg viewBox="0 0 64 64" aria-hidden="true"><g transform=${flip ? 'translate(64 0) scale(-1 1)' : undefined}>${body}</g></svg>`;
}

/* Gezeichnetes Platzhalter-Porträt, bis ein Coach ein Foto hochlädt */
function Portrait({c}) {
  if (c.photo) return html`<img src=${c.photo} alt=${'Foto von ' + c.name}/>`;
  const [a, b] = c.hue || ['#3B2DFF', '#FFC93C'];
  const ini = c.name.split(' ').map(x => x[0]).join('').slice(0, 2);
  const seed = c.name.length;
  return html`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label=${'Illustration für ' + c.name}>
    <rect width="400" height="300" fill=${a}/>
    <circle cx=${300 - seed * 4} cy="70" r="70" fill=${b} stroke="#16133F" strokeWidth="4"/>
    <path d=${`M0 ${220 + seed} L400 ${150 + seed * 2} L400 300 L0 300Z`} fill="#16133F" opacity=".18"/>
    <path d="M40 40 L360 40 M40 40 V260" stroke="#fff" strokeWidth="3" opacity=".35"/>
    <circle cx="200" cy="140" r="52" fill="#F4F2FF" stroke="#16133F" strokeWidth="5"/>
    <path d="M96 300c6-62 50-96 104-96s98 34 104 96z" fill="#F4F2FF" stroke="#16133F" strokeWidth="5"/>
    <text x="200" y="158" textAnchor="middle" fontFamily="Unbounded, Arial Black, sans-serif" fontWeight="900" fontSize="46" fill="#16133F">${ini}</text>
  </svg>`;
}

const Logo = () => html`<svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
  <rect x="2" y="2" width="36" height="36" rx="11" fill="#3B2DFF" stroke="#16133F" strokeWidth="2.5"/>
  <path d="M15 12.5v15l12-7.5z" fill="#fff" stroke="#16133F" strokeWidth="2" strokeLinejoin="round"/>
  <circle cx="30" cy="10" r="6" fill="#FFC93C" stroke="#16133F" strokeWidth="2.2"/>
</svg>`;
const BigBall = () => html`<svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
  <circle cx="60" cy="60" r="55" fill="#FFC93C" stroke="#16133F" strokeWidth="5"/>
  <path d="M14 34c26 8 34 34 22 74M106 86c-26-8-34-34-22-74" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
  <path d="M14 34c26 8 34 34 22 74M106 86c-26-8-34-34-22-74" fill="none" stroke="#16133F" strokeWidth="2" strokeLinecap="round" opacity=".35"/>
</svg>`;

const fmtEUR = v => v.toLocaleString('de-DE', {style:'currency', currency:'EUR', minimumFractionDigits: v % 1 ? 2 : 0});
const fmtLabel = f => f === 'v' ? 'Video-Feedback' : 'Schriftliches Feedback';
const ExBadge = () => html`<span className="ex" title="Fiktives Beispielprofil">Beispiel</span>`;

/* ---------- Routing über den Hash (#/coaches, #/coach/lena …) ---------- */
function parseHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  const [a, b, c] = parts;
  switch (a) {
    case 'coaches': return {view:'coaches'};
    case 'coach': return coachById(b) ? {view:'coach', param:b} : {view:'coaches'};
    case 'upload': return b === 'coach' && coachById(c) ? {view:'submit', param:{coach:c}} : {view:'submit', param: SPORTS.some(s => s.id === b) ? {sport:b} : {}};
    case 'meine-videos': return {view:'mine'};
    case 'coach-bereich': return {view:'area', param: b === 'profil' ? 'profile' : b === 'auftraege' ? 'jobs' : 'board'};
    case 'preise': case 'so-gehts': case 'coach-werden': return {view:'home', param:'#' + a};
    default: return {view:'home'};
  }
}
function toHash(v, p) {
  if (v === 'coaches') return '#/coaches';
  if (v === 'coach') return '#/coach/' + p;
  if (v === 'submit') return p && p.coach ? '#/upload/coach/' + p.coach : p && p.sport ? '#/upload/' + p.sport : '#/upload';
  if (v === 'mine') return '#/meine-videos';
  if (v === 'area') return p === 'profile' ? '#/coach-bereich/profil' : p === 'jobs' ? '#/coach-bereich/auftraege' : '#/coach-bereich';
  if (v === 'home' && typeof p === 'string') return '#/' + p.slice(1);
  return '#/';
}

/* ---------- Kopfzeile und Navigation ---------- */
function Header({view, go, user, openLogin, logout, openApply}) {
  const isCoach = user && user.role === 'coach';
  return html`<header className="hdr"><div className="wrap">
    <a className="logo" href="#/" aria-label="MyShotCoach Startseite" style=${{color:'inherit',textDecoration:'none'}}><${Logo}/><span>My<b>Shot</b>Coach</span></a>
    <nav className="nav" aria-label="Hauptnavigation">
      <button className=${view === 'coaches' || view === 'coach' ? 'on' : ''} onClick=${() => go('coaches')}>Coaches</button>
      <button onClick=${() => go('home', '#preise')}>Preise</button>
      <button onClick=${openApply}>Coach werden</button>
      ${!isCoach && html`<button className=${view === 'mine' ? 'on' : ''} onClick=${() => go('mine')}>Meine Videos</button>`}
      ${isCoach && html`<button className=${view === 'area' ? 'on' : ''} onClick=${() => go('area')}>Coach-Bereich</button>`}
    </nav>
    <div className="sp"></div>
    <div className="who">
      ${!isCoach && html`<button className="btn hot sm hide-m" onClick=${() => go('submit')}><${Ic} n="upload" size=${18}/>Video hochladen</button>`}
      ${user
        ? html`<button className="chip-user" onClick=${logout} title="Abmelden" aria-label=${'Abmelden (' + user.name + ')'}>
            <span style=${{width:30,height:30,borderRadius:'50%',background:isCoach ? 'var(--punch)' : 'var(--cobalt)',color:'#fff',display:'grid',placeItems:'center',border:'2px solid var(--ink)',fontSize:13}}>${user.name[0].toUpperCase()}</span>
            <span className="hide-m">${user.name}</span><${Ic} n="logout" size=${16}/></button>`
        : html`<button className="btn sm" onClick=${() => openLogin('player')}>Login</button>`}
    </div>
  </div></header>`;
}
function TabBar({view, go, user, openApply}) {
  const isCoach = user && user.role === 'coach';
  return html`<nav className="tabbar" aria-label="Navigation unten">
    <button className=${view === 'home' ? 'on' : ''} onClick=${() => go('home')}><${Ic} n="home"/>Start</button>
    <button className=${view === 'coaches' || view === 'coach' ? 'on' : ''} onClick=${() => go('coaches')}><${Ic} n="users"/>Coaches</button>
    ${isCoach
      ? html`<button onClick=${() => go('area')}><span className="up"><${Ic} n="inbox" size=${26}/></span>Anfragen</button>`
      : html`<button onClick=${() => go('submit')}><span className="up"><${Ic} n="upload" size=${26}/></span>Upload</button>`}
    ${isCoach
      ? html`<button className=${view === 'area' ? 'on' : ''} onClick=${() => go('area', 'profile')}><${Ic} n="edit"/>Profil</button>`
      : html`<button className=${view === 'mine' ? 'on' : ''} onClick=${() => go('mine')}><${Ic} n="film"/>Videos</button>`}
    <button onClick=${openApply}><${Ic} n="award"/>Coach werden</button>
  </nav>`;
}

function Footer({openApply}) {
  return html`<footer><div className="wrap" style=${{display:'block'}}>
    <div className="cols">
      <div><b style=${{fontFamily:'var(--display)'}}>MyShotCoach</b><p className="muted" style=${{marginTop:6}}>Video-Feedback von lizenzierten Coaches für Tennis, Padel, Tischtennis und Pickleball.</p></div>
      <div><b>Plattform</b><ul>
        <li><a href="#/coaches">Coaches</a></li><li><a href="#/preise">Preise</a></li>
        <li><button onClick=${openApply}>Als Coach bewerben</button></li></ul></div>
      <div><b>Rechtliches</b><ul>
        <li><a href="impressum/">Impressum</a></li><li><a href="datenschutz/">Datenschutz</a></li><li><a href="hinweise/">Hinweise zur Vorschau</a></li></ul></div>
    </div>
    <p className="fine">Vorschau-Version: Es werden noch keine Verträge geschlossen und keine Zahlungen abgewickelt. Alle Coach-Profile, Bewertungen und Zahlen auf dieser Seite sind fiktive Beispiele. MyShotCoach ist ein unabhängiges Angebot der TanMeOn GmbH und steht in keiner Verbindung zum Deutschen Tennis Bund (DTB), zum Deutschen Tischtennis-Bund (DTTB) oder anderen Verbänden. Lizenzbezeichnungen beschreiben die Qualifikation einzelner Coaches. Alle Preise inkl. MwSt.</p>
  </div></footer>`;
}

/* ---------- Startseite ---------- */
function Home({go, openApply, scrollTo}) {
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current; if (!el) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => el.style.setProperty('--sy', Math.min(window.scrollY, 1200))); };
    const onMove = e => { const r = el.getBoundingClientRect(); el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); el.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3)); };
    window.addEventListener('scroll', onScroll, {passive:true}); el.addEventListener('pointermove', onMove);
    return () => { window.removeEventListener('scroll', onScroll); el.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => {
    if (!scrollTo) return;
    const t = document.querySelector(scrollTo);
    if (t) setTimeout(() => t.scrollIntoView({behavior:'smooth'}), 60);
  }, [scrollTo]);
  const words = ['Vorhand','Bandeja','Topspin','Spin-Aufschlag','Dink','Smash','Rückhand-Slice','Víbora','Schupf','Third Shot Drop'];
  const mq = [...words, ...words].map((w, i) => html`<${React.Fragment} key=${i}><span>${i % 2 ? html`<em>${w}</em>` : w}</span><span>✦</span><//>`);
  return html`<div>
    <section className="hero" ref=${heroRef}>
      <svg className="layer l-court" viewBox="0 0 900 520" aria-hidden="true">
        <g fill="none" stroke="#3B2DFF" strokeWidth="4" opacity=".22">
          <rect x="20" y="20" width="860" height="480"/><path d="M20 80h860M20 440h860M240 80v360M660 80v360M240 260h420M450 20v480"/>
        </g>
      </svg>
      <div className="layer l-band" aria-hidden="true"></div>
      <div className="layer l-ball"><${BigBall}/></div>
      <div className="layer l-ball2"><${BigBall}/></div>
      <svg className="layer l-star" viewBox="0 0 70 70" aria-hidden="true"><path d="M35 2l7 24 26 9-26 9-7 24-7-24-26-9 26-9z" fill="#FF4D8D" stroke="#16133F" strokeWidth="3" strokeLinejoin="round"/></svg>
      <div className="wrap">
        <div>
          <p className="eyebrow" style=${{color:'var(--cobalt)'}}>Tennis · Padel · Tischtennis · Pickleball</p>
          <h1 style=${{marginTop:14}}>Dein Schlag.<br/><span className="hl"><span>Echte</span></span> <span className="pk">Coaches.</span></h1>
          <p className="lead">Film deinen Schlag mit dem Handy, wähl einen lizenzierten Coach und bekomm in 72 Stunden ein Feedback mit Zeitmarken und Übungen.</p>
          <div className="ctas">
            <button className="btn hot lg" onClick=${() => go('submit')}><${Ic} n="upload"/>Video hochladen</button>
            <button className="btn lg" onClick=${() => go('coaches')}>Coaches ansehen<${Ic} n="arrow"/></button>
          </div>
          <div className="sport-row">
            ${SPORTS.map(s => html`<button key=${s.id} className="sport-chip" onClick=${() => go('submit', {sport:s.id})}><i style=${{background:s.dot}}></i>${s.name}</button>`)}
          </div>
        </div>
        <div className="phone" role="img" aria-label="Beispiel eines Feedbacks in der App">
          <div className="scr">
            <div className="top"><span>Spin-Aufschlag</span><span className="pill sun" style=${{fontSize:11}}>Feedback da</span></div>
            <div className="vid"><${StrokeIcon} k="serve"/></div>
            <div className="tl"><i style=${{left:'22%'}}></i><i style=${{left:'48%'}}></i><i style=${{left:'71%'}}></i></div>
            <div className="bubs">
              <div className="bub"><b>0:03</b><span>Ballwurf einen Ball weiter nach links.</span></div>
              <div className="bub"><b>0:04</b><span>Knie früher beugen, dann kommt der Kick.</span></div>
              <div className="bub" style=${{background:'var(--sun)'}}><b style=${{background:'#fff'}}>Coach</b><span>A-Lizenz · 3 Übungen für dich</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="marq" aria-hidden="true"><div>${mq}</div></div>

    <section className="sec" id="so-gehts"><div className="wrap">
      <div className="sec-h"><h2>So einfach<br/>geht's</h2><p className="muted">Kein Abo, kein Termin, keine Anfahrt. Du brauchst nur dein Handy und ein paar Sekunden Video.</p></div>
      <div className="steps">
        <div className="step"><span className="n">1</span><h3>Schlag antippen</h3><p className="muted">Sportart wählen und per Icon den Schlag auswählen: Vorhand, Bandeja, Topspin, Dink und mehr.</p></div>
        <div className="step"><span className="n">2</span><h3>Video hochladen</h3><p className="muted">Seitlich filmen, ganzer Körper im Bild, fünf bis zehn Wiederholungen. Fertig.</p></div>
        <div className="step"><span className="n">3</span><h3>Feedback bekommen</h3><p className="muted">Dein Coach antwortet per Video oder schriftlich, mit Zeitmarken und Übungen für dein nächstes Training.</p></div>
      </div>
    </div></section>

    <section className="sec band" id="preise"><div className="wrap">
      <div className="sec-h"><h2>Wähl dein<br/>Level</h2><p>Preis pro Schlag, inklusive MwSt. Kommt nach 72 Stunden kein Feedback, bekommst du dein Geld zurück.</p></div>
      <div className="tiers">
        ${TIERS.map(t => html`<div key=${t.id} className=${'tier' + (t.id === 'P' ? ' pro' : '')}>
          ${t.id === 'B' && html`<span className="tag">Beliebt</span>`}
          <span className="lvl">${t.name}</span>
          <p style=${{fontSize:14,opacity:.85}}>${t.sub}</p>
          <div className="px"><div><small>Schriftlich${t.id === 'P' ? ' ab' : ''}</small><b>${t.w} €</b></div><div><small>Video${t.id === 'P' ? ' ab' : ''}</small><b>${t.v} €</b></div></div>
        </div>`)}
      </div>
    </div></section>

    <section className="sec"><div className="wrap">
      <div className="sec-h"><h2>So sehen<br/>Coach-Profile aus</h2><button className="btn" onClick=${() => go('coaches')}>Alle Beispiele<${Ic} n="arrow"/></button></div>
      <p className="ex-banner">Die Profile unten sind fiktive Beispiele. Die echten Coaches stellen sich zum Start hier vor.</p>
      <div className="cgrid">${COACHES.slice(0, 4).map(c => html`<${CoachCard} key=${c.id} c=${c} onOpen=${() => go('coach', c.id)}/>`)}</div>
    </div></section>

    <section className="sec" id="coach-werden" style=${{background:'var(--sun)',borderBlock:'2px solid var(--ink)'}}><div className="wrap coach-band">
      <div>
        <p className="eyebrow">Für Trainer:innen</p>
        <p className="big-quote" style=${{marginTop:12}}>Verdien Geld mit deinem Auge für Technik. Von zu Hause, zwischen zwei Trainingsstunden.</p>
        <div className="facts">
          <div className="fact"><b>75 %</b><span className="muted">vom Preis gehen an dich</span></div>
          <div className="fact"><b>~15 Min.</b><span className="muted">pro Feedback</span></div>
          <div className="fact"><b>Du</b><span className="muted">entscheidest, welche Anfragen du nimmst</span></div>
        </div>
      </div>
      <div className="card" style=${{padding:28,boxShadow:'8px 8px 0 var(--ink)',display:'grid',gap:14}}>
        <h3 style=${{fontSize:24,textTransform:'uppercase'}}>Coach werden</h3>
        <p className="muted">Wir suchen lizenzierte Trainer:innen für Tennis, Padel, Tischtennis und Pickleball. Bewirb dich jetzt, wir prüfen deine Lizenz und melden uns vor dem Start bei dir.</p>
        <button className="btn pri lg" onClick=${openApply}>Jetzt als Coach bewerben<${Ic} n="arrow"/></button>
        <button className="btn ghost sm" style=${{justifySelf:'start'}} onClick=${() => go('area')}>Coach-Bereich in der Vorschau ansehen</button>
      </div>
    </div></section>
  </div>`;
}

function CoachCard({c, onOpen, example = true}) {
  const t = tierById(c.tier);
  return html`<button className="ccard" onClick=${onOpen}>
    <div className="ph"><${Portrait} c=${c}/><span className=${'pill ' + (c.tier === 'P' ? 'ink' : 'sun')}>${t.name}</span>${example && html`<${ExBadge}/>`}</div>
    <div className="bd">
      <h3>${c.name}</h3>
      <div className="meta"><${Ic} n="pin" size=${15}/>${c.club}${c.city ? ', ' + c.city : ''}</div>
      <div className="meta"><${Stars} v=${c.rating}/> <b style=${{color:'var(--ink)'}}>${c.rating.toFixed(1).replace('.', ',')}</b> (${c.reviews})</div>
      <div style=${{display:'flex',gap:6,flexWrap:'wrap'}}>${c.sports.map(s => html`<span key=${s} className="pill">${sportById(s).name}</span>`)}</div>
    </div>
    <div className="ft"><span className="muted">ab <b className="num" style=${{color:'var(--ink)'}}>${c.prices.w} €</b></span><span style=${{display:'inline-flex',gap:6,alignItems:'center',fontWeight:700}}><${Ic} n="clock" size=${16}/>~${c.resp} Std.</span></div>
  </button>`;
}

/* ---------- Upload in vier Schritten ---------- */
function Submit({param, go, requireLogin, addRequest}) {
  const pre = param || {};
  const preCoach = pre.coach ? coachById(pre.coach) : null;
  const [step, setStep] = useState(1);
  const [sport, setSport] = useState(pre.sport || (preCoach ? preCoach.sports[0] : 'tennis'));
  const [stroke, setStroke] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [fileErr, setFileErr] = useState('');
  const [over, setOver] = useState(false);
  const [note, setNote] = useState('');
  const [mode, setMode] = useState(preCoach ? 'coach' : 'tier');
  const [tier, setTier] = useState('B');
  const [format, setFormat] = useState('v');
  const [minStars, setMinStars] = useState(0);
  const [coachId, setCoachId] = useState(preCoach ? preCoach.id : null);
  const [done, setDone] = useState(null);
  const s = sportById(sport);
  const coach = coachId ? coachById(coachId) : null;
  const price = mode === 'coach' && coach ? coach.prices[format] : tierById(tier)[format];
  const fitCoaches = COACHES.filter(c => c.sports.includes(sport) && c.rating >= minStars);
  useEffect(() => { window.scrollTo(0, 0); }, [step]);
  const takeFile = f => {
    if (!f) return;
    if (!/^video\//.test(f.type)) { setFileErr('Das ist kein Video. Bitte wähl eine Videodatei, zum Beispiel MP4 oder MOV.'); return; }
    if (f.size > 500 * 1024 * 1024) { setFileErr('Das Video ist größer als 500 MB. Bitte kürz es auf höchstens 60 Sekunden.'); return; }
    setFileErr(''); if (url) URL.revokeObjectURL(url); setFile(f); setUrl(URL.createObjectURL(f));
  };
  const canNext = step === 1 ? !!stroke : step === 2 ? !!file : step === 3 ? (mode === 'tier' || !!coach) : true;
  const order = () => requireLogin('player', () => {
    const r = {id:'r' + Date.now(), sport, stroke, coach: mode === 'coach' ? coachId : null, tier: mode === 'coach' ? coach.tier : tier, format, price, minStars, status:'open', date:new Date().toLocaleDateString('de-DE'), note, url};
    addRequest(r); setDone(r);
  });
  if (done) return html`<div className="wrap page"><div className="success">
    <div className="ball"><${BigBall}/></div>
    <h1 style=${{fontSize:'clamp(28px,5vw,52px)',textTransform:'uppercase',fontWeight:900}}>Video ist raus!</h1>
    <p className="muted" style=${{maxWidth:'46ch'}}>${done.coach ? `${coachById(done.coach).name} hat deine Anfrage bekommen.` : `Coaches mit ${tierById(done.tier).name}${minStars ? ` und mindestens ${String(minStars).replace('.', ',')} Sternen` : ''} sehen jetzt deine Anfrage.`} Sobald dein Feedback da ist, bekommst du eine Mail.</p>
    <p className="ex-banner" style=${{maxWidth:'52ch'}}>Vorschau: Diese Bestellung ist eine Demo. Es wurde nichts berechnet und dein Video hat dein Gerät nicht verlassen.</p>
    <div style=${{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center'}}><button className="btn pri" onClick=${() => go('mine')}>Zu meinen Videos</button><button className="btn" onClick=${() => { setDone(null); setStep(1); setStroke(null); setFile(null); setUrl(null); }}>Noch einen Schlag senden</button></div>
  </div></div>`;
  return html`<div className="wrap page">
    <div className="page-h"><div><p className="eyebrow muted">Schritt ${step} von 4</p><h1>${['', 'Welcher Schlag?', 'Dein Video', 'Wer coacht dich?', 'Check und los'][step]}</h1></div>
      ${preCoach && html`<span className="pill sun">Coach: ${preCoach.name}</span>`}</div>
    <div className="prog" aria-hidden="true">${[1, 2, 3, 4].map(i => html`<div key=${i} className=${i < step ? 'on' : i === step ? 'cur' : ''}></div>`)}</div>

    ${step === 1 && html`<div>
      <div className="sports">${SPORTS.filter(x => !preCoach || preCoach.sports.includes(x.id)).map(x => html`<button key=${x.id} className=${'sport-chip' + (x.id === sport ? ' on' : '')} aria-pressed=${x.id === sport} onClick=${() => { setSport(x.id); setStroke(null); }}><i style=${{background:x.dot}}></i>${x.name}</button>`)}</div>
      <div className="strokes" role="radiogroup" aria-label="Schlag auswählen">
        ${s.strokes.map(([id, name, icon]) => html`<button key=${id} role="radio" aria-checked=${stroke === id} className=${'stroke' + (stroke === id ? ' on' : '')} onClick=${() => setStroke(id)}><${StrokeIcon} k=${icon}/>${name}</button>`)}
      </div>
    </div>`}

    ${step === 2 && html`<div>
      ${!url ? html`<label className=${'drop' + (over ? ' over' : '')} onDragOver=${e => { e.preventDefault(); setOver(true); }} onDragLeave=${() => setOver(false)} onDrop=${e => { e.preventDefault(); setOver(false); takeFile(e.dataTransfer.files[0]); }}>
          <input id="video-in" type="file" accept="video/*" onChange=${e => takeFile(e.target.files[0])} aria-label="Video auswählen"/>
          <div style=${{display:'grid',gap:12,justifyItems:'center'}}>
            <span className="icon-btn" style=${{width:72,height:72,background:'var(--punch)',color:'#fff'}}><${Ic} n="upload" size=${34}/></span>
            <span className="big">Video hier reinziehen</span>
            <span className="muted">oder tippen, um ein Video aus der Galerie zu wählen oder direkt zu filmen · max. 60 Sek.</span>
          </div>
        </label>`
      : html`<div style=${{display:'grid',gap:14}}>
          <div className="vprev"><video src=${url} controls playsInline></video></div>
          <div style=${{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap',alignItems:'center'}}>
            <span style=${{fontWeight:700,display:'inline-flex',gap:8,alignItems:'center',minWidth:0,overflowWrap:'anywhere'}}><span className="pill mi"><${Ic} n="check" size=${14}/>Bereit</span>${file.name}</span>
            <button className="btn sm" onClick=${() => { URL.revokeObjectURL(url); setUrl(null); setFile(null); }}>Anderes Video</button>
          </div>
        </div>`}
      ${fileErr && html`<p className="err" role="alert" style=${{marginTop:10}}>${fileErr}</p>`}
      <p className="note" style=${{marginTop:10,display:'flex',gap:6,alignItems:'center'}}><${Ic} n="lock" size=${14}/>Vorschau: Dein Video bleibt auf deinem Gerät und wird nicht hochgeladen.</p>
      <div className="tips">
        <div className="tip"><${Ic} n="side"/><span><b>Seitlich filmen</b><br/>Handy auf Hüfthöhe, quer.</span></div>
        <div className="tip"><${Ic} n="body"/><span><b>Ganzer Körper</b><br/>Von Kopf bis Fuß im Bild.</span></div>
        <div className="tip"><${Ic} n="repeat"/><span><b>5 bis 10 Schläge</b><br/>Mehrere Wiederholungen.</span></div>
        <div className="tip"><${Ic} n="sun"/><span><b>Gutes Licht</b><br/>Nicht gegen die Sonne.</span></div>
      </div>
      <div className="field" style=${{marginTop:20}}><label htmlFor="note-in">Worauf soll der Coach achten? (optional)</label><textarea id="note-in" className="inp" maxLength="500" value=${note} onChange=${e => setNote(e.target.value)} placeholder="Zum Beispiel: Mein Ball fliegt oft ins Netz, wenn ich Druck mache."></textarea></div>
    </div>`}

    ${step === 3 && html`<div style=${{display:'grid',gap:22}}>
      <div style=${{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
        <div className="seg" role="group" aria-label="Auswahl"><button className=${mode === 'tier' ? 'on' : ''} aria-pressed=${mode === 'tier'} onClick=${() => setMode('tier')}>Nach Level</button><button className=${mode === 'coach' ? 'on' : ''} aria-pressed=${mode === 'coach'} onClick=${() => setMode('coach')}>Coach selbst wählen</button></div>
        <div className="seg" role="group" aria-label="Format"><button className=${format === 'v' ? 'on' : ''} aria-pressed=${format === 'v'} onClick=${() => setFormat('v')}><${Ic} n="video" size=${16} style=${{verticalAlign:'-3px',marginRight:6}}/>Video</button><button className=${format === 'w' ? 'on' : ''} aria-pressed=${format === 'w'} onClick=${() => setFormat('w')}><${Ic} n="doc" size=${16} style=${{verticalAlign:'-3px',marginRight:6}}/>Schriftlich</button></div>
      </div>
      ${mode === 'tier' ? html`<div style=${{display:'grid',gap:18}}>
        <div className="pick-tiers">${TIERS.map(t => html`<button key=${t.id} className=${'pt' + (tier === t.id ? ' on' : '')} aria-pressed=${tier === t.id} onClick=${() => setTier(t.id)}>
          <span className="eyebrow">${t.name}</span><b>${t.id === 'P' ? 'ab ' : ''}${t[format]} €</b><span style=${{fontSize:13.5}} className="muted">${t.sub}</span></button>`)}</div>
        <div style=${{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
          <span style=${{fontWeight:800}}>Nur Coaches mit</span>
          <div className="seg">${[[0, 'Alle'], [4, '4+ ★'], [4.5, '4,5+ ★'], [4.8, '4,8+ ★']].map(([v, l]) => html`<button key=${v} className=${minStars === v ? 'on' : ''} aria-pressed=${minStars === v} onClick=${() => setMinStars(v)}>${l}</button>`)}</div>
        </div>
        <p className="muted" style=${{fontSize:14}}>Der erste passende Coach übernimmt deine Anfrage.</p>
      </div>` : html`<div style=${{display:'grid',gap:14}}>
        <div className="seg">${[[0, 'Alle'], [4.5, '4,5+ ★'], [4.8, '4,8+ ★']].map(([v, l]) => html`<button key=${v} className=${minStars === v ? 'on' : ''} aria-pressed=${minStars === v} onClick=${() => setMinStars(v)}>${l}</button>`)}</div>
        <p className="note">Beispielprofile: Die echten Coaches folgen zum Start.</p>
        <div className="mc-list">${fitCoaches.length ? fitCoaches.map(c => html`<button key=${c.id} className=${'mini-coach' + (coachId === c.id ? ' on' : '')} aria-pressed=${coachId === c.id} onClick=${() => setCoachId(c.id)}>
          <span className="av"><${Portrait} c=${c}/></span>
          <span style=${{display:'grid',gap:2,minWidth:0}}><b>${c.name}</b><span style=${{fontSize:13}} className="muted">${c.license}</span><span style=${{fontSize:13,display:'flex',gap:6,alignItems:'center'}}><${Stars} v=${c.rating} size=${12}/>${c.rating.toFixed(1).replace('.', ',')} · ${c.prices[format]} €</span></span>
        </button>`) : html`<div className="empty">Für diese Auswahl gibt es keinen Coach. Probier einen niedrigeren Sternefilter.</div>`}</div>
        ${coach && html`<button className="btn sm" style=${{justifySelf:'start'}} onClick=${() => go('coach', coach.id)}>Profil von ${coach.name} ansehen</button>`}
      </div>`}
    </div>`}

    ${step === 4 && html`<div className="sum">
      <div className="card" style=${{padding:22}}>
        <div style=${{display:'flex',gap:14,alignItems:'center',marginBottom:8}}>
          <span style=${{width:64,height:64,borderRadius:14,border:'2px solid var(--ink)',display:'grid',placeItems:'center',background:'var(--cobalt)',color:'#fff',flex:'none'}}><span style=${{width:42,height:42,display:'block'}}><${StrokeIcon} k=${strokeOf(sport, stroke).icon}/></span></span>
          <div><b style=${{fontSize:20,fontFamily:'var(--display)'}}>${strokeOf(sport, stroke).name}</b><div className="muted">${s.name}</div></div>
        </div>
        <div className="row"><span className="muted">Video</span><b style=${{overflowWrap:'anywhere',textAlign:'right'}}>${file ? file.name : '-'}</b></div>
        <div className="row"><span className="muted">Coach</span><b>${mode === 'coach' && coach ? coach.name : tierById(tier).name + (minStars ? ` · ab ${String(minStars).replace('.', ',')} ★` : '')}</b></div>
        <div className="row"><span className="muted">Format</span><b>${fmtLabel(format)}</b></div>
        <div className="row"><span className="muted">Lieferzeit</span><b>höchstens 72 Std.</b></div>
        ${note && html`<div className="row"><span className="muted">Hinweis</span><span style=${{textAlign:'right',overflowWrap:'anywhere'}}>${note}</span></div>`}
        <div className="row" style=${{borderBottom:0,fontSize:22,fontFamily:'var(--display)',fontWeight:900}}><span>Gesamt</span><span>${fmtEUR(price)}</span></div>
        <p className="note">inkl. MwSt.</p>
      </div>
      <div className="card" style=${{padding:22,display:'grid',gap:14,alignContent:'start',background:'var(--sun)'}}>
        <h3 style=${{fontSize:18,textTransform:'uppercase'}}>Bestellen</h3>
        <p style=${{fontSize:14,fontWeight:600}}>Vorschau: Bezahlung ist noch nicht aktiv. Mit dem Button probierst du den Ablauf aus, ohne dass etwas berechnet wird.</p>
        <button className="btn ink lg" onClick=${order}>Demo-Bestellung abschicken</button>
        <p style=${{fontSize:13,display:'flex',gap:8}}><${Ic} n="lock" size=${16}/>Kommt nach 72 Stunden kein Feedback, gibt es dein Geld zurück.</p>
      </div>
    </div>`}

    <div className="wiz-foot">
      <button className="btn ghost" onClick=${() => step > 1 ? setStep(step - 1) : go('home')}><${Ic} n="back"/>${step > 1 ? 'Zurück' : 'Abbrechen'}</button>
      ${step < 4 && html`<div style=${{display:'flex',gap:14,alignItems:'center'}}>
        ${step >= 3 && html`<span className="num" style=${{fontWeight:700,fontSize:18}}>${fmtEUR(price)}</span>`}
        <button className="btn pri lg" disabled=${!canNext} onClick=${() => setStep(step + 1)}>Weiter<${Ic} n="arrow"/></button></div>`}
    </div>
  </div>`;
}

/* ---------- Coach-Verzeichnis und Profil ---------- */
function Coaches({go}) {
  const [q, setQ] = useState(''); const [sp, setSp] = useState(''); const [tr, setTr] = useState(''); const [ms, setMs] = useState(0);
  const list = COACHES.filter(c => (!sp || c.sports.includes(sp)) && (!tr || c.tier === tr) && c.rating >= ms && (!q || (c.name + c.club + c.city).toLowerCase().includes(q.toLowerCase())));
  return html`<div className="wrap page">
    <div className="page-h"><h1>Finde deinen<br/>Coach</h1><p className="muted">${list.length} ${list.length === 1 ? 'Profil' : 'Profile'}</p></div>
    <p className="ex-banner">Vorschau: Alle Profile auf dieser Seite sind fiktive Beispiele. Zum Start findest du hier echte, von uns geprüfte Coaches.</p>
    <div className="filters">
      <div style=${{position:'relative',flex:'1 1 220px',minWidth:0}}><input id="q-in" className="inp" style=${{paddingLeft:40,width:'100%'}} placeholder="Name, Verein oder Stadt" aria-label="Suche" value=${q} onChange=${e => setQ(e.target.value)}/><span style=${{position:'absolute',left:13,top:12}}><${Ic} n="search" size=${18}/></span></div>
      <select id="sp-sel" className="inp" value=${sp} onChange=${e => setSp(e.target.value)} aria-label="Sportart"><option value="">Alle Sportarten</option>${SPORTS.map(s => html`<option key=${s.id} value=${s.id}>${s.name}</option>`)}</select>
      <select id="tr-sel" className="inp" value=${tr} onChange=${e => setTr(e.target.value)} aria-label="Level"><option value="">Alle Level</option>${TIERS.map(t => html`<option key=${t.id} value=${t.id}>${t.name}</option>`)}</select>
      <select id="ms-sel" className="inp" value=${ms} onChange=${e => setMs(+e.target.value)} aria-label="Bewertung"><option value="0">Alle Bewertungen</option><option value="4.5">ab 4,5 ★</option><option value="4.8">ab 4,8 ★</option></select>
    </div>
    ${list.length ? html`<div className="cgrid">${list.map(c => html`<${CoachCard} key=${c.id} c=${c} onOpen=${() => go('coach', c.id)}/>`)}</div>`
      : html`<div className="empty"><b>Kein Profil passt auf diese Filter.</b><button className="btn sm" onClick=${() => { setQ(''); setSp(''); setTr(''); setMs(0); }}>Filter zurücksetzen</button></div>`}
  </div>`;
}

function CoachProfile({id, go}) {
  const c = coachById(id); if (!c) return null;
  const t = tierById(c.tier);
  const first = c.name.split(' ')[0];
  return html`<div className="wrap page">
    <button className="btn ghost sm" onClick=${() => go('coaches')} style=${{marginBottom:18}}><${Ic} n="back" size=${16}/>Alle Coaches</button>
    <p className="ex-banner">Beispielprofil: ${c.name} ist eine fiktive Person. So wird ein Coach-Profil zum Start aussehen.</p>
    <div className="prof-top">
      <div className="prof-ph"><${Portrait} c=${c}/></div>
      <div>
        <div style=${{display:'flex',gap:8,flexWrap:'wrap'}}><span className=${'pill ' + (c.tier === 'P' ? 'ink' : 'sun')}>${t.name}</span><span className="pill mi"><${Ic} n="shield" size=${14}/>Lizenz geprüft</span>${c.sports.map(s => html`<span key=${s} className="pill">${sportById(s).name}</span>`)}</div>
        <h1 className="prof-name" style=${{marginTop:14}}>${c.name}</h1>
        <p style=${{fontWeight:700,marginTop:8}}>${c.license}</p>
        <p className="muted" style=${{display:'flex',gap:6,alignItems:'center',marginTop:4}}><${Ic} n="pin" size=${16}/>Heimverein: ${c.club}, ${c.city}</p>
        <div className="kpis">
          <div className="kpi"><b>${c.rating.toFixed(1).replace('.', ',')}</b><small>${c.reviews} Bewertungen</small></div>
          <div className="kpi"><b>~${c.resp} h</b><small>Antwortzeit</small></div>
          <div className="kpi"><b>${c.reviews * 3 + 12}</b><small>Feedbacks</small></div>
          <div className="kpi"><b>${c.since}</b><small>Coach seit</small></div>
        </div>
        <p style=${{marginTop:20,maxWidth:'60ch'}}>${c.bio}</p>
        <div style=${{display:'flex',gap:8,flexWrap:'wrap',marginTop:14}}>${c.focus.map(f => html`<span key=${f} className="pill co">${f}</span>`)}</div>
      </div>
    </div>
    <div className="prof-grid">
      <div style=${{display:'grid',gap:24,alignContent:'start'}}>
        <div className="blk"><h3>Zertifikate und Lizenzen</h3>${c.certs.map(x => html`<div key=${x} className="cert"><${Ic} n="doc" size=${28}/><span style=${{fontWeight:700}}>${x}</span><span className="pill mi ok"><${Ic} n="check" size=${13}/>geprüft</span></div>`)}</div>
        ${c.awards.length > 0 && html`<div className="blk"><h3>Auszeichnungen</h3>${c.awards.map(a => html`<div key=${a} className="cert" style=${{background:'#FFF4D6'}}><${Ic} n="award" size=${28}/><span style=${{fontWeight:700}}>${a}</span></div>`)}</div>`}
        <div className="blk"><div style=${{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,flexWrap:'wrap'}}><h3>Bewertungen (Beispiele)</h3><span style=${{display:'flex',gap:8,alignItems:'center'}}><${Stars} v=${c.rating}/><b>${c.rating.toFixed(1).replace('.', ',')}</b></span></div>
          <p className="note">Bewerten können nur Spieler:innen, die bei diesem Coach ein Feedback gekauft haben.</p>
          ${REVIEWS.map((r, i) => html`<div key=${i} className="rev"><div className="h"><span>${r.n} · <span className="muted">${r.st}</span></span><span style=${{display:'flex',gap:8,alignItems:'center'}}><${Stars} v=${r.s} size=${13}/><span className="muted" style=${{fontWeight:500}}>${r.d}</span></span></div><p>${r.t}</p></div>`)}
        </div>
      </div>
      <div style=${{display:'grid',gap:24,alignContent:'start'}}>
        <div className="blk" style=${{background:'var(--sun)'}}><h3>Preise pro Schlag</h3><div className="ptable">
          <div className="row"><span>Schriftlich</span><span className="num">${fmtEUR(c.prices.w)}</span></div>
          <div className="row"><span>Video-Feedback</span><span className="num">${fmtEUR(c.prices.v)}</span></div></div>
          <p className="note" style=${{color:'var(--ink)'}}>inkl. MwSt.</p>
          <button className="btn pri" onClick=${() => go('submit', {coach:c.id})}><${Ic} n="upload" size=${18}/>Video an ${first} senden</button></div>
        <div className="blk"><h3>Sprachen</h3><div style=${{display:'flex',gap:8,flexWrap:'wrap'}}>${c.langs.map(l => html`<span key=${l} className="pill">${l}</span>`)}</div></div>
      </div>
    </div>
    <div className="sticky-cta"><button className="btn hot lg" onClick=${() => go('submit', {coach:c.id})}><${Ic} n="upload"/>Video an ${first} senden · ab ${c.prices.w} €</button></div>
  </div>`;
}

/* ---------- Spieler-Bereich ---------- */
function StatusPill({s}) {
  if (s === 'done') return html`<span className="pill mi"><${Ic} n="check" size=${13}/>Feedback da</span>`;
  if (s === 'progress') return html`<span className="pill sun"><${Ic} n="clock" size=${13}/>Coach arbeitet</span>`;
  return html`<span className="pill">Wartet auf Coach</span>`;
}
function LoginGate({role, openLogin}) {
  return html`<div className="wrap page"><div className="empty" style=${{marginTop:20}}>
    <span className="icon-btn" style=${{width:64,height:64,background:'var(--sun)'}}><${Ic} n="lock" size=${28}/></span>
    <b style=${{fontSize:20}}>${role === 'coach' ? 'Bitte als Coach einloggen' : 'Bitte einloggen'}</b>
    <p className="muted">${role === 'coach' ? 'Im Coach-Bereich siehst du offene Anfragen, deine Aufträge und dein Profil.' : 'Hier findest du alle Videos, die du eingeschickt hast, und das Feedback deiner Coaches.'}</p>
    <button className="btn pri" onClick=${() => openLogin(role)}>Login</button>
  </div></div>`;
}
function Mine({requests, go, openReq}) {
  return html`<div className="wrap page">
    <div className="page-h"><h1>Meine Videos</h1><button className="btn hot" onClick=${() => go('submit')}><${Ic} n="plus"/>Neuer Schlag</button></div>
    <p className="ex-banner">Vorschau: Die ersten beiden Einträge sind Beispiele, damit du siehst, wie ein fertiges Feedback aussieht.</p>
    ${requests.length ? html`<div className="rlist">${requests.map(r => {
      const st = strokeOf(r.sport, r.stroke); const c = r.coach && coachById(r.coach);
      return html`<button key=${r.id} className="ritem" onClick=${() => openReq(r)}>
        <span className="th" style=${{background:r.status === 'done' ? 'var(--cobalt)' : 'var(--ink)'}}><${StrokeIcon} k=${st.icon}/></span>
        <span style=${{display:'grid',gap:4,minWidth:0}}><h4>${st.name}</h4><span className="sub"><span>${sportById(r.sport).name}</span>·<span>${c ? c.name : tierById(r.tier).name}</span>·<span>${fmtLabel(r.format)}</span>·<span>${r.date}</span></span></span>
        <span className="rt"><${StatusPill} s=${r.status}/><span className="num" style=${{fontWeight:700}}>${fmtEUR(r.price)}</span></span>
      </button>`; })}</div>`
    : html`<div className="empty"><b>Noch keine Videos.</b><p className="muted">Lade deinen ersten Schlag hoch und bekomm Feedback von einem echten Coach.</p><button className="btn hot" onClick=${() => go('submit')}>Ersten Schlag hochladen</button></div>`}
  </div>`;
}
function Modal({label, wide, close, children}) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, []);
  return html`<div className="ovl" onClick=${e => e.target === e.currentTarget && close()}><div className=${'modal' + (wide ? ' wide' : '')} role="dialog" aria-modal="true" aria-label=${label}>
    <button className="icon-btn x" onClick=${close} aria-label="Schließen"><${Ic} n="close"/></button>
    ${children}
  </div></div>`;
}
function ReqDetail({r, close, rate, go}) {
  const st = strokeOf(r.sport, r.stroke); const c = r.coach && coachById(r.coach);
  const [stars, setStars] = useState(0); const [txt, setTxt] = useState('');
  return html`<${Modal} label=${st.name} wide close=${close}>
    <p className="eyebrow muted">${sportById(r.sport).name} · ${r.date}</p>
    <h2 style=${{fontSize:28,textTransform:'uppercase',margin:'6px 0 16px'}}>${st.name}</h2>
    <div className="vframe">${r.url ? html`<video src=${r.url} controls playsInline></video>` : html`<${StrokeIcon} k=${st.icon}/><div className="play"><i></i></div>`}</div>
    <div style=${{display:'flex',gap:10,alignItems:'center',margin:'16px 0',flexWrap:'wrap'}}><${StatusPill} s=${r.status}/>${c && html`<button className="pill" style=${{cursor:'pointer'}} onClick=${() => { close(); go('coach', c.id); }}>${c.name} · ${c.license}</button>`}</div>
    ${r.status !== 'done' ? html`<p className="muted">${r.status === 'progress' ? 'Dein Coach schaut sich das Video gerade an. Du bekommst eine Mail, sobald das Feedback da ist.' : 'Deine Anfrage ist für passende Coaches sichtbar. Sobald jemand sie übernimmt, siehst du hier, wer es ist.'}</p>`
    : html`<div style=${{display:'grid',gap:14}}>
        <div className="card" style=${{padding:16,background:'var(--sun)'}}><b>Zusammenfassung</b><p style=${{marginTop:6}}>${r.feedback.summary}</p></div>
        ${r.feedback.points.map(([t, x], i) => html`<div key=${i} className="fb-pt"><b>${t}</b><span>${x}</span></div>`)}
        <div className="card" style=${{padding:16}}><b>Deine Übungen</b><ul style=${{margin:'8px 0 0',paddingLeft:20,display:'grid',gap:6}}>${r.feedback.drills.map(d => html`<li key=${d}>${d}</li>`)}</ul></div>
        ${r.rated ? html`<div className="pill mi" style=${{justifySelf:'start'}}><${Ic} n="check" size=${14}/>Danke für deine Bewertung</div>`
        : html`<div className="card" style=${{padding:16,display:'grid',gap:10}}><b>Wie hilfreich war das Feedback?</b>
            <div className="rate" role="radiogroup" aria-label="Sterne vergeben">${[1, 2, 3, 4, 5].map(i => html`<button key=${i} role="radio" aria-checked=${stars === i} onClick=${() => setStars(i)} aria-label=${i + (i === 1 ? ' Stern' : ' Sterne')}><svg viewBox="0 0 24 24" fill=${i <= stars ? 'var(--sun)' : 'none'} stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round"><path d=${I.star}/></svg></button>`)}</div>
            <textarea id="rev-in" className="inp" maxLength="600" placeholder="Was hat dir geholfen? (optional)" value=${txt} onChange=${e => setTxt(e.target.value)}></textarea>
            <button className="btn pri" disabled=${!stars} style=${{justifySelf:'start'}} onClick=${() => rate(r.id)}>Bewertung abschicken</button></div>`}
      </div>`}
  <//>`;
}

/* ---------- Coach-Bereich ---------- */
function CoachArea({tab, go, board, jobs, claim, openJob, me, setMe, earn, toast}) {
  const myBoard = board.filter(b => me.sports.includes(b.sport));
  const open = jobs.filter(j => j.status !== 'done'); const done = jobs.filter(j => j.status === 'done');
  return html`<div className="wrap page">
    <div className="page-h"><div><p className="eyebrow muted">Coach-Bereich</p><h1>Hey ${me.name.split(' ')[0]}!</h1></div>
      <div className="switch"><button className=${me.active ? 'on' : ''} onClick=${() => setMe({...me, active:!me.active})} aria-pressed=${me.active} aria-label="Neue Anfragen annehmen"></button>${me.active ? 'Nimmt Anfragen an' : 'Pausiert'}</div></div>
    <p className="ex-banner">Vorschau: Anfragen, Aufträge und Verdienst sind Beispieldaten. So sieht der Bereich für Coaches zum Start aus.</p>
    <div className="dash-k">
      <div className="dk"><small style=${{fontWeight:700}}>Verdienst im Monat</small><b className="num">${fmtEUR(earn)}</b></div>
      <div className="dk"><small style=${{fontWeight:700}}>Offene Anfragen</small><b>${myBoard.length}</b></div>
      <div className="dk"><small style=${{fontWeight:700}} className="muted">In Arbeit</small><b>${open.length}</b></div>
      <div className="dk"><small style=${{fontWeight:700}} className="muted">Bewertung</small><b style=${{display:'flex',gap:8,alignItems:'center'}}>4,8 <${Stars} v=${4.8} size=${14}/></b></div>
    </div>
    <div className="tabs" role="tablist">
      <button role="tab" aria-selected=${tab === 'board'} className=${tab === 'board' ? 'on' : ''} onClick=${() => go('area', 'board')}>Offene Anfragen${myBoard.length > 0 && html`<i>${myBoard.length}</i>`}</button>
      <button role="tab" aria-selected=${tab === 'jobs'} className=${tab === 'jobs' ? 'on' : ''} onClick=${() => go('area', 'jobs')}>Meine Aufträge${open.length > 0 && html`<i>${open.length}</i>`}</button>
      <button role="tab" aria-selected=${tab === 'profile'} className=${tab === 'profile' ? 'on' : ''} onClick=${() => go('area', 'profile')}>Mein Profil</button>
    </div>
    ${tab === 'board' && (myBoard.length ? html`<div className="rlist">${myBoard.map(b => {
      const st = strokeOf(b.sport, b.stroke); const t = tierById(b.tier); const pay = t[b.format] * (1 - t.cut);
      return html`<div key=${b.id} className="ritem">
        <span className="th"><${StrokeIcon} k=${st.icon}/></span>
        <span style=${{display:'grid',gap:4,minWidth:0}}><h4>${st.name} <span className="muted" style=${{fontWeight:600,fontSize:14}}>· ${sportById(b.sport).name}</span></h4>
          <span className="sub"><span>${b.player}</span>·<span>${t.name}</span>·<span>${fmtLabel(b.format)}</span>·<span>${b.ago}</span></span>
          ${b.note && html`<span style=${{fontSize:14}}>„${b.note}“</span>`}</span>
        <span className="rt"><span className="num" style=${{fontWeight:800,fontSize:18}}>+${fmtEUR(pay)}</span><button className="btn pri sm" disabled=${!me.active} onClick=${() => claim(b)}>Übernehmen</button></span>
      </div>`; })}</div>`
      : html`<div className="empty"><b>Gerade keine offenen Anfragen in deinen Sportarten.</b><p className="muted">Sobald etwas reinkommt, bekommst du eine Nachricht.</p></div>`)}
    ${tab === 'jobs' && html`<div style=${{display:'grid',gap:20}}>
      ${open.length ? html`<div className="rlist">${open.map(j => {
        const st = strokeOf(j.sport, j.stroke);
        return html`<button key=${j.id} className="ritem" onClick=${() => openJob(j)}>
          <span className="th" style=${{background:'var(--punch)'}}><${StrokeIcon} k=${st.icon}/></span>
          <span style=${{display:'grid',gap:4,minWidth:0}}><h4>${st.name}</h4><span className="sub"><span>${j.player}</span>·<span>${fmtLabel(j.format)}</span>·<span>übernommen ${j.ago}</span></span></span>
          <span className="rt"><span className="pill sun"><${Ic} n="clock" size=${13}/>noch ${j.ago === 'gerade eben' ? 72 : 51} Std.</span><span className="btn ink sm">Feedback geben</span></span></button>`; })}</div>`
        : html`<div className="empty"><b>Keine offenen Aufträge.</b><p className="muted">Übernimm eine Anfrage aus „Offene Anfragen“.</p></div>`}
      ${done.length > 0 && html`<div><p className="eyebrow muted" style=${{marginBottom:10}}>Erledigt</p><div className="rlist">${done.map(j => {
        const st = strokeOf(j.sport, j.stroke);
        return html`<div key=${j.id} className="ritem" style=${{opacity:.85}}><span className="th" style=${{background:'var(--mint)',color:'var(--ink)'}}><${StrokeIcon} k=${st.icon}/></span>
          <span style=${{display:'grid',gap:4}}><h4>${st.name}</h4><span className="sub"><span>${j.player}</span>·<span>${fmtLabel(j.format)}</span></span></span>
          <span className="rt"><span className="pill mi"><${Ic} n="check" size=${13}/>Gesendet</span><span className="num" style=${{fontWeight:700}}>+${fmtEUR(j.earned || 0)}</span></span></div>`; })}</div></div>`}
    </div>`}
    ${tab === 'profile' && html`<${ProfileEditor} me=${me} setMe=${setMe} toast=${toast}/>`}
  </div>`;
}

function JobEditor({j, close, submit}) {
  const st = strokeOf(j.sport, j.stroke); const t = tierById(j.tier);
  const [pts, setPts] = useState([['0:02', '']]); const [sum, setSum] = useState(''); const [drills, setDrills] = useState('');
  const [vurl, setVurl] = useState(null); const [vname, setVname] = useState('');
  const ok = j.format === 'v' ? !!vurl && sum.trim() : sum.trim() && pts.some(p => p[1].trim());
  return html`<${Modal} label="Feedback geben" wide close=${close}>
    <p className="eyebrow muted">${j.player} · ${sportById(j.sport).name} · ${t.name}</p>
    <h2 style=${{fontSize:26,textTransform:'uppercase',margin:'6px 0 14px'}}>${st.name}</h2>
    <div className="vframe"><${StrokeIcon} k=${st.icon}/><div className="play"><i></i></div></div>
    ${j.note && html`<p style=${{margin:'12px 0 0'}}><b>Hinweis:</b> „${j.note}“</p>`}
    <div className="form" style=${{marginTop:20}}>
      ${j.format === 'v' && html`<div className="field"><span style=${{fontWeight:800,fontSize:14}}>Dein Antwort-Video</span>
        ${vurl ? html`<div style=${{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}><span className="pill mi"><${Ic} n="check" size=${13}/>${vname}</span><button className="btn sm" onClick=${() => { URL.revokeObjectURL(vurl); setVurl(null); }}>Ersetzen</button></div>`
        : html`<label className="drop" style=${{minHeight:130}}><input id="ans-video" type="file" accept="video/*" aria-label="Antwort-Video auswählen" onChange=${e => { const f = e.target.files[0]; if (f) { setVurl(URL.createObjectURL(f)); setVname(f.name); } }}/><span style=${{fontWeight:800,display:'inline-flex',gap:8}}><${Ic} n="video"/>Bildschirmaufnahme oder Video hochladen</span></label>`}
      </div>`}
      <div className="field"><label htmlFor="sum-in">Zusammenfassung</label><textarea id="sum-in" className="inp" value=${sum} onChange=${e => setSum(e.target.value)} placeholder="Was ist das Wichtigste, woran gearbeitet werden sollte?"></textarea></div>
      <div className="field"><span style=${{fontWeight:800,fontSize:14}}>Zeitmarken</span>
        ${pts.map((p, i) => html`<div key=${i} style=${{display:'grid',gridTemplateColumns:'80px minmax(0,1fr) auto',gap:8}}>
          <input id=${'pt-t-' + i} className="inp num" value=${p[0]} onChange=${e => setPts(pts.map((x, k) => k === i ? [e.target.value, x[1]] : x))} aria-label="Zeit im Video"/>
          <input id=${'pt-x-' + i} className="inp" value=${p[1]} placeholder="Was passiert hier?" aria-label="Hinweis zur Zeitmarke" onChange=${e => setPts(pts.map((x, k) => k === i ? [x[0], e.target.value] : x))}/>
          <button className="icon-btn" onClick=${() => setPts(pts.filter((_, k) => k !== i))} aria-label="Zeitmarke entfernen" disabled=${pts.length < 2}><${Ic} n="close" size=${16}/></button></div>`)}
        <button className="btn sm" style=${{justifySelf:'start'}} onClick=${() => setPts([...pts, ['0:0' + Math.min(9, pts.length + 2), '']])}><${Ic} n="plus" size=${16}/>Zeitmarke</button>
      </div>
      <div className="field"><label htmlFor="dr-in">Übungen (eine pro Zeile)</label><textarea id="dr-in" className="inp" value=${drills} onChange=${e => setDrills(e.target.value)} placeholder="Schattenschläge, 3 × 15"></textarea></div>
      <div style=${{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center',flexWrap:'wrap'}}>
        <span className="muted">Du erhältst <b className="num" style=${{color:'var(--ink)'}}>${fmtEUR(t[j.format] * (1 - t.cut))}</b></span>
        <button className="btn hot lg" disabled=${!ok} onClick=${() => submit(j)}>Feedback senden<${Ic} n="arrow"/></button>
      </div>
    </div>
  <//>`;
}

function ProfileEditor({me, setMe, toast}) {
  const [d, setD] = useState(me); const [award, setAward] = useState(''); const [lang, setLang] = useState('');
  const set = (k, v) => setD({...d, [k]:v});
  const t = tierById(d.tier);
  const onPhoto = e => { const f = e.target.files[0]; if (!f) return; if (d.photo && d.photo.startsWith('blob:')) URL.revokeObjectURL(d.photo); set('photo', URL.createObjectURL(f)); };
  const onCert = e => { const f = e.target.files[0]; if (!f) return; set('certs', [...d.certs, {n:f.name.replace(/\.[^.]+$/, ''), st:'review'}]); };
  const preview = {...d, id:'me', rating:4.8, reviews:12, resp:14, focus:[]};
  return html`<div className="edit-grid">
    <div className="form card" style=${{padding:24}}>
      <div className="ph-up"><span className="av"><${Portrait} c=${d}/></span>
        <div style=${{display:'grid',gap:8}}><b>Profilfoto</b><label className="btn sm" style=${{position:'relative',overflow:'hidden'}}><${Ic} n="cam" size=${16}/>Foto auswählen<input id="photo-in" type="file" accept="image/*" onChange=${onPhoto} style=${{position:'absolute',inset:0,opacity:0,cursor:'pointer'}}/></label><span className="muted" style=${{fontSize:13}}>Am besten ein Bild auf dem Court. In der Vorschau bleibt es auf deinem Gerät.</span></div></div>
      <div className="two">
        <div className="field"><label htmlFor="n-in">Name</label><input id="n-in" className="inp" value=${d.name} onChange=${e => set('name', e.target.value)}/></div>
        <div className="field"><label htmlFor="c-in">Heimverein</label><input id="c-in" className="inp" value=${d.club} onChange=${e => set('club', e.target.value)}/></div>
        <div className="field"><label htmlFor="ci-in">Stadt</label><input id="ci-in" className="inp" value=${d.city} onChange=${e => set('city', e.target.value)}/></div>
        <div className="field"><label htmlFor="t-sel">Level</label><select id="t-sel" className="inp" style=${{width:'100%'}} value=${d.tier} onChange=${e => { const nt = tierById(e.target.value); setD({...d, tier:nt.id, prices:{w:nt.w, v:nt.v}}); }}>${TIERS.map(x => html`<option key=${x.id} value=${x.id}>${x.name}</option>`)}</select></div>
      </div>
      <div className="field"><label htmlFor="l-in">Lizenz, wie sie im Profil steht</label><input id="l-in" className="inp" value=${d.license} onChange=${e => set('license', e.target.value)}/></div>
      <div className="field"><span style=${{fontWeight:800,fontSize:14}}>Sportarten</span><div className="chipsel">${SPORTS.map(s => html`<button key=${s.id} aria-pressed=${d.sports.includes(s.id)} className=${d.sports.includes(s.id) ? 'on' : ''} onClick=${() => set('sports', d.sports.includes(s.id) ? d.sports.filter(x => x !== s.id) : [...d.sports, s.id])}>${s.name}</button>`)}</div></div>
      <div className="field"><label htmlFor="b-in">Über mich</label><textarea id="b-in" className="inp" maxLength="700" value=${d.bio} onChange=${e => set('bio', e.target.value)}></textarea></div>
      <div className="field"><span style=${{fontWeight:800,fontSize:14}}>Zertifikate und Lizenzen</span>
        ${d.certs.map((c, i) => html`<div key=${i} className="cert"><${Ic} n="doc" size=${24}/><span style=${{fontWeight:700,minWidth:0,overflowWrap:'anywhere'}}>${c.n}</span>${c.st === 'ok' ? html`<span className="pill mi ok"><${Ic} n="check" size=${13}/>geprüft</span>` : html`<span className="pill sun ok">wird geprüft</span>`}</div>`)}
        <label className="btn sm" style=${{position:'relative',overflow:'hidden',justifySelf:'start'}}><${Ic} n="plus" size=${16}/>Zertifikat hinzufügen (PDF oder Foto)<input id="cert-in" type="file" accept="image/*,application/pdf" onChange=${onCert} style=${{position:'absolute',inset:0,opacity:0,cursor:'pointer'}}/></label>
      </div>
      <div className="field"><label htmlFor="aw-in">Auszeichnungen</label>
        <div className="tagrow">${d.awards.map(a => html`<span key=${a} className="pill sun">${a}<button aria-label=${a + ' entfernen'} onClick=${() => set('awards', d.awards.filter(x => x !== a))}>×</button></span>`)}</div>
        <div style=${{display:'flex',gap:8}}><input id="aw-in" className="inp" value=${award} onChange=${e => setAward(e.target.value)} placeholder="z.B. Vereinsmeister 2025"/><button className="btn sm" onClick=${() => { if (award.trim()) { set('awards', [...d.awards, award.trim()]); setAward(''); } }}>Hinzufügen</button></div>
      </div>
      <div className="field"><label htmlFor="la-in">Sprachen</label>
        <div className="tagrow">${d.langs.map(a => html`<span key=${a} className="pill">${a}<button aria-label=${a + ' entfernen'} onClick=${() => set('langs', d.langs.filter(x => x !== a))}>×</button></span>`)}</div>
        <div style=${{display:'flex',gap:8}}><input id="la-in" className="inp" value=${lang} onChange=${e => setLang(e.target.value)} placeholder="z.B. Spanisch"/><button className="btn sm" onClick=${() => { if (lang.trim()) { set('langs', [...d.langs, lang.trim()]); setLang(''); } }}>Hinzufügen</button></div>
      </div>
      <div className="field"><span style=${{fontWeight:800,fontSize:14}}>Deine Preise pro Schlag (inkl. MwSt.)</span>
        <div className="price-ed">
          ${[['w', 'Schriftlich'], ['v', 'Video']].map(([k, l]) => html`<div key=${k} className="card"><label htmlFor=${'pr-' + k} style=${{fontWeight:700}}>${l}</label>
            <input id=${'pr-' + k} className="inp num" type="number" min="9" step="1" value=${d.prices[k]} onChange=${e => set('prices', {...d.prices, [k]:Math.max(0, +e.target.value)})}/>
            <span className="muted" style=${{fontSize:13}}>Du erhältst ${fmtEUR(d.prices[k] * (1 - t.cut))} (${Math.round((1 - t.cut) * 100)} %)</span></div>`)}
        </div>
        <span className="muted" style=${{fontSize:13}}>Empfohlen für ${t.name}: ${t.w} € schriftlich, ${t.v} € Video.</span>
      </div>
      <button className="btn pri lg" style=${{justifySelf:'start'}} onClick=${() => { setMe(d); toast('Profil gespeichert'); }}>Profil speichern</button>
    </div>
    <div className="preview"><p className="eyebrow muted" style=${{marginBottom:10}}>So sehen Spieler:innen dich</p><${CoachCard} c=${preview} example=${false} onOpen=${() => {}}/></div>
  </div>`;
}

/* ---------- Login (Vorschau: nur im Browser) ---------- */
function Login({role:initRole, close, done}) {
  const [role, setRole] = useState(initRole || 'player'); const [email, setEmail] = useState(''); const [err, setErr] = useState('');
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Bitte gib eine gültige E-Mail-Adresse ein.'); return; }
    done({role, name: role === 'coach' ? 'Alex' : email.split('@')[0]});
  };
  return html`<${Modal} label="Login" close=${close}>
    <div style=${{display:'flex',justifyContent:'center',marginBottom:14}}><${Logo}/></div>
    <h2 style=${{fontSize:26,textAlign:'center',textTransform:'uppercase'}}>${role === 'coach' ? 'Coach-Login' : 'Los geht’s'}</h2>
    <p className="muted" style=${{textAlign:'center',marginTop:6}}>${role === 'coach' ? 'Anfragen annehmen und dein Profil verwalten.' : 'Ohne Passwort: Wir schicken dir einen Login-Link.'}</p>
    <div style=${{display:'flex',justifyContent:'center',marginTop:16}}><div className="seg" role="group" aria-label="Ich bin"><button className=${role === 'player' ? 'on' : ''} aria-pressed=${role === 'player'} onClick=${() => setRole('player')}>Spieler:in</button><button className=${role === 'coach' ? 'on' : ''} aria-pressed=${role === 'coach'} onClick=${() => setRole('coach')}>Coach</button></div></div>
    <form onSubmit=${submit} noValidate style=${{display:'grid',gap:10,marginTop:20}}>
      <label htmlFor="mail-in" style=${{fontWeight:800,fontSize:14}}>E-Mail-Adresse</label>
      <input id="mail-in" className="inp" type="email" autoComplete="email" placeholder="du@beispiel.de" value=${email} onChange=${e => { setEmail(e.target.value); setErr(''); }}/>
      ${err && html`<p className="err" role="alert">${err}</p>`}
      <button className="btn pri lg" type="submit">Weiter</button>
    </form>
    <p className="ex-banner" style=${{marginTop:16,marginBottom:0}}>Vorschau: Es wird keine E-Mail verschickt und nichts gespeichert. Du bist sofort eingeloggt, bis du die Seite neu lädst.</p>
  <//>`;
}

/* ---------- Bewerbung als Coach (echte Anfrage per E-Mail) ---------- */
function Apply({close, go}) {
  const [f, setF] = useState({name:'', email:'', sports:[], license:'', club:'', city:'', msg:''});
  const [err, setErr] = useState(''); const [sent, setSent] = useState(false); const [copied, setCopied] = useState(false);
  const set = (k, v) => { setF({...f, [k]:v}); setErr(''); };
  const body = () => [
    'Bewerbung als Coach bei MyShotCoach', '',
    'Name: ' + f.name, 'E-Mail: ' + f.email,
    'Sportarten: ' + f.sports.map(s => sportById(s).name).join(', '),
    'Lizenz: ' + f.license, 'Verein / Stadt: ' + [f.club, f.city].filter(Boolean).join(', '),
    f.msg ? '\nNachricht:\n' + f.msg : '', '',
    'Meine Lizenz schicke ich als Foto oder PDF im Anhang mit.',
  ].join('\n');
  const submit = e => {
    e.preventDefault();
    if (!f.name.trim()) return setErr('Bitte gib deinen Namen an.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) return setErr('Bitte gib eine gültige E-Mail-Adresse an.');
    if (!f.sports.length) return setErr('Bitte wähl mindestens eine Sportart.');
    if (!f.license.trim()) return setErr('Bitte gib deine Trainerlizenz an.');
    const href = 'mailto:' + CONTACT + '?subject=' + encodeURIComponent('Coach-Bewerbung: ' + f.name) + '&body=' + encodeURIComponent(body());
    window.location.href = href;
    setSent(true);
  };
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(CONTACT).then(done, () => {});
  };
  return html`<${Modal} label="Als Coach bewerben" close=${close}>
    <p className="eyebrow muted">Für Trainer:innen</p>
    <h2 style=${{fontSize:26,textTransform:'uppercase',margin:'6px 0 8px'}}>Als Coach bewerben</h2>
    ${sent ? html`<div style=${{display:'grid',gap:14,marginTop:10}}>
        <p>Dein E-Mail-Programm öffnet sich mit einer fertigen Nachricht. <b>Häng bitte ein Foto oder PDF deiner Trainerlizenz an</b> und schick die Mail ab.</p>
        <p className="muted">Falls sich nichts öffnet, schreib uns einfach direkt an diese Adresse:</p>
        <div className="mailbox"><code>${CONTACT}</code><button className="btn sm" onClick=${copy}><${Ic} n="copy" size=${16}/>${copied ? 'Kopiert' : 'Kopieren'}</button></div>
        <div style=${{display:'flex',gap:10,flexWrap:'wrap'}}><button className="btn pri" onClick=${close}>Fertig</button><button className="btn" onClick=${() => { close(); go('area'); }}>Coach-Bereich ansehen</button></div>
      </div>`
    : html`<form onSubmit=${submit} noValidate className="form" style=${{marginTop:12}}>
      <p className="muted">Wir suchen lizenzierte Trainer:innen für Tennis, Padel, Tischtennis und Pickleball. Du entscheidest selbst, welche Anfragen du übernimmst, und bekommst 75 % vom Preis.</p>
      <div className="two">
        <div className="field"><label htmlFor="ap-name">Name</label><input id="ap-name" className="inp" autoComplete="name" value=${f.name} onChange=${e => set('name', e.target.value)}/></div>
        <div className="field"><label htmlFor="ap-mail">E-Mail</label><input id="ap-mail" className="inp" type="email" autoComplete="email" value=${f.email} onChange=${e => set('email', e.target.value)}/></div>
      </div>
      <div className="field"><span style=${{fontWeight:800,fontSize:14}}>Sportarten</span><div className="chipsel">${SPORTS.map(s => html`<button type="button" key=${s.id} aria-pressed=${f.sports.includes(s.id)} className=${f.sports.includes(s.id) ? 'on' : ''} onClick=${() => set('sports', f.sports.includes(s.id) ? f.sports.filter(x => x !== s.id) : [...f.sports, s.id])}>${s.name}</button>`)}</div></div>
      <div className="field"><label htmlFor="ap-lic">Trainerlizenz</label><input id="ap-lic" className="inp" placeholder="z.B. DTB B-Lizenz, DTTB C-Lizenz, Padel Level 2" value=${f.license} onChange=${e => set('license', e.target.value)}/></div>
      <div className="two">
        <div className="field"><label htmlFor="ap-club">Heimverein</label><input id="ap-club" className="inp" value=${f.club} onChange=${e => set('club', e.target.value)}/></div>
        <div className="field"><label htmlFor="ap-city">Stadt</label><input id="ap-city" className="inp" autoComplete="address-level2" value=${f.city} onChange=${e => set('city', e.target.value)}/></div>
      </div>
      <div className="field"><label htmlFor="ap-msg">Nachricht (optional)</label><textarea id="ap-msg" className="inp" maxLength="1500" value=${f.msg} onChange=${e => set('msg', e.target.value)} placeholder="Erfahrung, Schwerpunkte, Erfolge"></textarea></div>
      ${err && html`<p className="err" role="alert">${err}</p>`}
      <button className="btn pri lg" type="submit" style=${{justifySelf:'start'}}>Bewerbung per E-Mail senden<${Ic} n="arrow"/></button>
      <p className="note">Der Button öffnet dein E-Mail-Programm mit einer fertigen Nachricht an ${CONTACT}. Wir nutzen deine Angaben nur, um deine Bewerbung zu bearbeiten. Mehr dazu in der <a href="datenschutz/#bewerbung">Datenschutzerklärung</a>.</p>
    </form>`}
  <//>`;
}

/* ---------- App ---------- */
function App() {
  const [route, setRoute] = useState(parseHash());
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [apply, setApply] = useState(false);
  const [requests, setRequests] = useState(SEED_REQ);
  const [board, setBoard] = useState(SEED_BOARD);
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [me, setMe] = useState(SEED_ME);
  const [earn, setEarn] = useState(842.5);
  const [openR, setOpenR] = useState(null);
  const [openJ, setOpenJ] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  const tRef = useRef(0);
  const toast = m => { setToastMsg(m); clearTimeout(tRef.current); tRef.current = setTimeout(() => setToastMsg(null), 2800); };

  useEffect(() => {
    const onHash = () => {
      const r = parseHash(); setRoute(r);
      if (!(r.view === 'home' && r.param)) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const {view, param} = route;
  const go = (v, p) => {
    const h = toHash(v, p);
    if (location.hash === h) {
      if (v === 'home' && p) { const t = document.querySelector(p); if (t) t.scrollIntoView({behavior:'smooth'}); }
      else window.scrollTo(0, 0);
    }
    else location.hash = h;
  };
  const requireLogin = (role, cb) => { if (user && user.role === role) cb(); else setLogin({role, after:cb}); };
  const logout = () => { setUser(null); toast('Abgemeldet'); go('home'); };
  const afterLogin = u => {
    const after = login && login.after;
    setUser(u); setLogin(null);
    toast(u.role === 'coach' ? 'Willkommen im Coach-Bereich' : 'Eingeloggt als ' + u.name);
    if (after) setTimeout(after, 0);
    else if (u.role === 'coach' && view !== 'area') go('area');
  };
  const claim = b => { setBoard(board.filter(x => x.id !== b.id)); setJobs([{...b, ago:'gerade eben', status:'progress'}, ...jobs]); toast('Anfrage übernommen. Du hast 72 Stunden Zeit.'); go('area', 'jobs'); };
  const submitJob = j => { const t = tierById(j.tier); const e = t[j.format] * (1 - t.cut); setJobs(jobs.map(x => x.id === j.id ? {...x, status:'done', earned:e} : x)); setEarn(earn + e); setOpenJ(null); toast('Feedback gesendet · +' + fmtEUR(e)); };
  const rate = id => { setRequests(requests.map(r => r.id === id ? {...r, rated:true} : r)); setOpenR(o => o && {...o, rated:true}); toast('Danke für deine Bewertung!'); };
  const openLogin = r => setLogin({role:r});
  const openApply = () => setApply(true);

  let page;
  if (view === 'home') page = html`<${Home} go=${go} openApply=${openApply} scrollTo=${typeof param === 'string' ? param : null}/>`;
  else if (view === 'submit') page = html`<${Submit} key=${toHash('submit', param)} param=${param} go=${go} requireLogin=${requireLogin} addRequest=${r => setRequests(rs => [r, ...rs])}/>`;
  else if (view === 'coaches') page = html`<${Coaches} go=${go}/>`;
  else if (view === 'coach') page = html`<${CoachProfile} id=${param} go=${go}/>`;
  else if (view === 'mine') page = user && user.role === 'player' ? html`<${Mine} requests=${requests} go=${go} openReq=${setOpenR}/>` : html`<${LoginGate} role="player" openLogin=${openLogin}/>`;
  else if (view === 'area') page = user && user.role === 'coach' ? html`<${CoachArea} tab=${param || 'board'} go=${go} board=${board} jobs=${jobs} claim=${claim} openJob=${setOpenJ} me=${me} setMe=${setMe} earn=${earn} toast=${toast}/>` : html`<${LoginGate} role="coach" openLogin=${openLogin}/>`;

  return html`<div>
    <div className="demo">Vorschau: Noch keine echten Buchungen oder Zahlungen. Coach-Profile und Bewertungen sind Beispiele. <a href="hinweise/">Mehr erfahren</a></div>
    <${Header} view=${view} go=${go} user=${user} openLogin=${openLogin} logout=${logout} openApply=${openApply}/>
    <main id="main">${page}</main>
    <${Footer} openApply=${openApply}/>
    <${TabBar} view=${view} go=${go} user=${user} openApply=${openApply}/>
    ${login && html`<${Login} role=${login.role} close=${() => setLogin(null)} done=${afterLogin}/>`}
    ${apply && html`<${Apply} close=${() => setApply(false)} go=${go}/>`}
    ${openR && html`<${ReqDetail} r=${openR} close=${() => setOpenR(null)} rate=${rate} go=${go}/>`}
    ${openJ && html`<${JobEditor} j=${openJ} close=${() => setOpenJ(null)} submit=${submitJob}/>`}
    ${toastMsg && html`<div className="toast" role="status"><${Ic} n="check" size=${18}/>${toastMsg}</div>`}
  </div>`;
}

const root = document.getElementById('root');
root.innerHTML = '';
ReactDOM.createRoot(root).render(html`<${App}/>`);
})();
