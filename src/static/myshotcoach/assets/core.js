// MyShotCoach – gemeinsame Bausteine für die Spieler-Seite und den Coach-Bereich (Vorschau-Version).
// Läuft komplett im Browser: keine Cookies, kein Local Storage, keine Uploads an einen Server.
// Logins, Videos und Bestellungen leben nur im Arbeitsspeicher und sind nach dem Neuladen weg.
(function () {
'use strict';
const {useState, useEffect, useRef} = React;
const html = htm.bind(React.createElement);
const ROOT = document.body.dataset.root || '';            // '' auf der Spieler-Seite, '../' im Coach-Bereich
const CONTACT = 'info@tanmeon.de';

/* ---------- Daten ---------- */
const SPORTS = [
  {id:'tennis', name:'Tennis', color:'#C8643B', strokes:[
    ['vh','Vorhand','fh'],['rh','Rückhand','bh'],['vhv','Vorhand-Volley','volley'],['rhv','Rückhand-Volley','volleyb'],
    ['sm','Schmetterball','smash'],['rsm','Rückhand-Schmetterball','smashb'],['auf','Aufschlag','serve'],['kick','Spin-Aufschlag','spin'],
    ['sla','Slice-Aufschlag','slice'],['vhs','Vorhand-Slice','slice'],['rhs','Rückhand-Slice','sliceb'],['ret','Return','return']]},
  {id:'padel', name:'Padel', color:'#2C7DA0', strokes:[
    ['vh','Vorhand','fh'],['rh','Rückhand','bh'],['vol','Volley','volley'],['ban','Bandeja','slice'],['vib','Víbora','sliceb'],
    ['smash','Smash','smash'],['baj','Bajada','wall'],['auf','Aufschlag','serve'],['lob','Lob','lob'],['chi','Chiquita','drop']]},
  {id:'tt', name:'Tischtennis', color:'#C93A3A', strokes:[
    ['vht','VH-Topspin','spin'],['rht','RH-Topspin','bh'],['sch','Schupf','slice'],['blo','Block','block'],
    ['flip','Flip','fh'],['kon','Konter','return'],['auf','Aufschlag','serve']]},
  {id:'pickle', name:'Pickleball', color:'#3E9C5B', strokes:[
    ['dink','Dink','drop'],['drv','Drive','fh'],['tsd','Third Shot Drop','lob'],['vol','Volley','volley'],
    ['auf','Aufschlag','serve'],['ret','Return','return'],['ovh','Overhead','smash']]},
];
const sportById = id => SPORTS.find(s => s.id === id) || SPORTS[0];
const strokeOf = (sid, kid) => {
  const k = sportById(sid).strokes.find(x => x[0] === kid);
  return k ? {id:k[0], name:k[1], icon:k[2]} : {id:kid, name:kid, icon:'fh'};
};

// Preis pro Video-Antwort inkl. MwSt.; die Plattform behält 25 % Provision.
const TIERS = [
  {id:'C', name:'C-Trainer / Übungsleiter', short:'C-Trainer', ex:'z. B. DTB-C-Lizenz oder Übungsleiter-Lizenz', price:9.99},
  {id:'B', name:'B-Trainer', short:'B-Trainer', ex:'z. B. DTB-B-Lizenz', price:19},
  {id:'A', name:'A-Trainer', short:'A-Trainer', ex:'z. B. DTB-A-Lizenz', price:29},
];
const tierById = id => TIERS.find(t => t.id === id) || TIERS[0];
const CUT = 0.25;
const payout = p => Math.floor(p * (1 - CUT) * 100) / 100;

// Fiktive Beispielprofile. Auf der Seite überall als „Beispiel“ gekennzeichnet.
const COACHES = [
  {id:'lena', name:'Lena Hartmann', sports:['tennis'], tier:'A', license:'DTB A-Lizenz', club:'TC Möwenkante', city:'Hamburg', rating:4.9, reviews:128, resp:18, since:2019,
   langs:['Deutsch','Englisch'], focus:['Aufschlag','Rückhand','Matchplan'],
   bio:'Ich arbeite seit 14 Jahren mit Erwachsenen und Jugendlichen im Leistungsbereich. Mein Spezialgebiet ist der Aufschlag: In meiner Video-Antwort gehe ich deinen Schlag in Zeitlupe durch und zeige dir, wo Energie verloren geht.',
   certs:['DTB A-Trainer-Lizenz','DTB Athletiktrainer','Mentaltraining im Tennis'], awards:['Landesmeisterin Damen 30, 2023']},
  {id:'marco', name:'Marco Ruiz', sports:['padel'], tier:'B', license:'Padel-Trainer Level 2', club:'Padelwerk Spreebogen', city:'Berlin', rating:4.8, reviews:64, resp:12, since:2022,
   langs:['Deutsch','Spanisch','Englisch'], focus:['Bandeja','Víbora','Spiel an der Wand'],
   bio:'Aufgewachsen in Valencia, seit vier Jahren Coach in Berlin. Im Video erkläre ich dir, warum deine Bandeja zu lang wird, und zeige dir drei Übungen für die nächste Session.',
   certs:['Padel-Trainer Level 2','Padel-Trainer Level 1'], awards:['Vize-Stadtmeister Berlin 2025']},
  {id:'jonas', name:'Jonas Weber', sports:['tennis'], tier:'C', license:'DTB C-Lizenz Breitensport', club:'TSV Isarbogen', city:'München', rating:4.6, reviews:41, resp:24, since:2023,
   langs:['Deutsch'], focus:['Vorhand','Einsteiger:innen','Jugend'],
   bio:'Ich trainiere vor allem Hobbyspieler:innen und Kids. Meine Video-Antworten sind kurz und klar, mit Übungen, die du auch alleine an der Ballwand machen kannst.',
   certs:['DTB C-Trainer-Lizenz Breitensport','Kindertennis-Zertifikat'], awards:[]},
  {id:'aylin', name:'Aylin Demir', sports:['tt'], tier:'B', license:'DTTB B-Lizenz', club:'TTV Förde-Nord', city:'Kiel', rating:4.9, reviews:87, resp:10, since:2020,
   langs:['Deutsch','Türkisch'], focus:['Topspin','Aufschlag','Rückhand'],
   bio:'Ehemalige Oberliga-Spielerin. Ich gehe deine Schlagbewegung im Video Bild für Bild durch und achte besonders auf Handgelenk und Beinarbeit.',
   certs:['DTTB B-Trainer-Lizenz'], awards:['Oberliga-Meisterin 2018']},
  {id:'sofia', name:'Sofia Lindqvist', sports:['padel','tennis'], tier:'A', license:'Padel-Trainer Level 3 · DTB B-Lizenz', club:'Padel Arena Mainufer', city:'Frankfurt', rating:4.8, reviews:59, resp:16, since:2021,
   langs:['Englisch','Deutsch','Schwedisch'], focus:['Umstieg von Tennis','Volley','Smash'],
   bio:'Ich helfe vor allem Tennisspieler:innen beim Umstieg auf Padel. Viele Gewohnheiten aus dem Tennis kosten auf dem Padel-Court Punkte, und genau die finde ich.',
   certs:['Padel-Trainer Level 3','DTB B-Trainer-Lizenz'], awards:[]},
  {id:'ben', name:'Ben Okafor', sports:['pickle'], tier:'C', license:'Zertifizierter Pickleball-Coach', club:'Pickleball Club Pleiße', city:'Leipzig', rating:4.7, reviews:19, resp:20, since:2024,
   langs:['Deutsch','Englisch'], focus:['Dink','Third Shot Drop','Einsteiger:innen'],
   bio:'Pickleball ist schnell gelernt und schwer gemeistert. Ich helfe dir beim Schritt vom Hobby zum Turnier.',
   certs:['Pickleball-Coach-Zertifikat Level 1'], awards:[]},
  {id:'mia', name:'Mia Schröder', sports:['tt','pickle'], tier:'A', license:'DTTB A-Lizenz', club:'TTC Weserkante', city:'Bremen', rating:4.8, reviews:47, resp:14, since:2021,
   langs:['Deutsch'], focus:['Aufschlag','Beinarbeit','Pickleball-Umstieg'],
   bio:'Tischtennis und Pickleball leben von schnellen Füßen. In meiner Video-Antwort zeige ich dir Laufwege und eine Übungsroutine für zehn Minuten am Tag.',
   certs:['DTTB A-Trainer-Lizenz'], awards:['Landesmeisterin Damen 2017']},
];
const coachById = id => COACHES.find(c => c.id === id);
const REVIEWS = [
  {n:'Paul', s:5, d:'vor 3 Tagen', st:'Aufschlag', t:'Super konkret. Nach zwei Wochen mit den Übungen aus dem Video kommt mein erster Aufschlag deutlich öfter rein.'},
  {n:'Nele', s:5, d:'vor 1 Woche', st:'Rückhand', t:'Sie zeigt in Zeitlupe genau, wo mein Treffpunkt liegt. Das hätte ich alleine nie gesehen.'},
  {n:'Chris', s:4, d:'vor 3 Wochen', st:'Volley', t:'Sehr gute Video-Antwort, ich hätte mir noch eine Übung mehr gewünscht.'},
];

/* ---------- Formatierung ---------- */
const fmtEUR = v => v.toLocaleString('de-DE', {style:'currency', currency:'EUR', minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits:2});
const fmtNum = (v, d = 1) => v.toFixed(d).replace('.', ',');
const initials = name => (name || '?').split(/\s+/).filter(Boolean).map(x => x[0]).join('').slice(0, 2).toUpperCase();

/* ---------- Icons (24er-Raster, Linienstil) ---------- */
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
  play:'M8 5v14l11-7z',
  mic:'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3M5 11a7 7 0 0 0 14 0M12 18v3',
  euro:'M17 6.5A7 7 0 1 0 17 17.5M4 10h9M4 14h9',
  chev:'M9 6l6 6-6 6',
  menu:'M4 7h16M4 12h16M4 17h16',
  user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1',
};
function Ic({n, size = 20, sw = 1.8, style, className}) {
  return html`<svg className=${className} width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=${sw} strokeLinecap="round" strokeLinejoin="round" style=${style} aria-hidden="true"><path d=${I[n]}/></svg>`;
}
function Stars({v, size = 14}) {
  const out = [];
  for (let i = 1; i <= 5; i++) {
    out.push(html`<svg key=${i} viewBox="0 0 24 24" style=${{width:size, height:size}} fill=${v >= i - .25 ? 'var(--star)' : 'var(--line)'} aria-hidden="true"><path d=${I.star}/></svg>`);
  }
  return html`<span className="stars" role="img" aria-label=${fmtNum(v) + ' von 5 Sternen'}>${out}</span>`;
}

/* Schlag-Icons: Schläger, Ball und Schwungbahn auf einem 64er-Raster, als ruhige Linien */
function Racket({x, y, a}) {
  return html`<g transform=${`translate(${x} ${y}) rotate(${a})`}>
    <ellipse cx="0" cy="-13" rx="8.5" ry="11.5" fill="none" stroke="currentColor" strokeWidth="2.4"/>
    <path d="M-4 -21v15M0 -24v21M4 -21v15M-7.5 -16h15M-7.5 -10h15" stroke="currentColor" strokeWidth="1" opacity=".45"/>
    <path d="M0 -1.5v13" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round"/>
  </g>`;
}
const Ball = ({x, y, r = 4}) => html`<circle className="si-ball" cx=${x} cy=${y} r=${r}/>`;
const Trail = ({d, dash}) => html`<path d=${d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray=${dash || '0.5 5'} opacity=".7"/>`;
function StrokeIcon({k}) {
  const flip = /b$/.test(k);
  const base = flip ? k.slice(0, -1) : k;
  let body;
  switch (base) {
    case 'fh': case 'bh': body = html`<${Trail} d="M8 48 Q 26 60 50 24"/><${Racket} x=${46} y=${36} a=${38}/><${Ball} x=${18} y=${22}/>`; break;
    case 'volley': body = html`<path d="M6 8v50" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" opacity=".4"/><${Trail} d="M12 30 L 30 30"/><${Racket} x=${42} y=${38} a=${-12}/><${Ball} x=${14} y=${30}/>`; break;
    case 'smash': body = html`<${Trail} d="M46 6 Q 54 30 20 56"/><${Racket} x=${40} y=${28} a=${24}/><${Ball} x=${22} y=${10}/>`; break;
    case 'serve': body = html`<path d="M18 58 V 18" stroke="currentColor" strokeWidth="2" strokeDasharray="0.5 5" strokeLinecap="round" opacity=".7"/><${Ball} x=${18} y=${12}/><${Trail} d="M54 54 Q 62 22 40 8"/><${Racket} x=${44} y=${30} a=${22}/>`; break;
    case 'spin': body = html`<${Trail} d="M8 56 Q 22 52 30 36 T 54 10"/><${Racket} x=${42} y=${42} a=${30}/><${Ball} x=${16} y=${20}/><path d="M9 14a9 9 0 0 1 9-4M25 26a9 9 0 0 1-9 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>`; break;
    case 'slice': body = html`<${Trail} d="M8 12 Q 36 18 56 52"/><${Racket} x=${42} y=${38} a=${-58}/><${Ball} x=${16} y=${40}/>`; break;
    case 'return': body = html`<path d="M8 22h30m-7-7 7 7-7 7M56 44H26m7-7-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><${Ball} x=${48} y=${22}/>`; break;
    case 'drop': body = html`<path d="M36 34v24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><path d="M28 34h16" stroke="currentColor" strokeWidth="1.6" opacity=".5"/><${Trail} d="M8 44 Q 30 8 46 54"/><${Ball} x=${46} y=${54}/>`; break;
    case 'lob': body = html`<${Trail} d="M6 56 Q 32 -16 58 56"/><path d="M32 40v18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/><${Ball} x=${32} y=${10}/>`; break;
    case 'block': body = html`<path d="M48 8v48" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/><${Trail} d="M8 20 L 40 32 L 12 46"/><${Ball} x=${40} y=${32}/>`; break;
    case 'wall': body = html`<rect x="48" y="6" width="9" height="52" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M48 18h9M48 30h9M48 42h9" stroke="currentColor" strokeWidth="1" opacity=".45"/><${Trail} d="M10 50 Q 40 46 48 24 Q 30 18 12 30"/><${Ball} x=${12} y=${30}/>`; break;
    default: body = html`<${Ball} x=${32} y=${32} r=${8}/>`;
  }
  return html`<svg className="si" viewBox="0 0 64 64" aria-hidden="true"><g transform=${flip ? 'translate(64 0) scale(-1 1)' : undefined}>${body}</g></svg>`;
}

/* Profilbild: hochgeladenes Foto oder ruhiger Platzhalter mit Initialen */
function Portrait({c, round}) {
  if (c.photo) return html`<img className="portrait" src=${c.photo} alt=${'Foto von ' + c.name}/>`;
  const col = c.sports && c.sports.length ? sportById(c.sports[0]).color : '#4A535F';
  return html`<div className=${'portrait ph' + (round ? ' round' : '')} style=${{background:`radial-gradient(120% 90% at 85% 0%, ${col}66, transparent 60%), linear-gradient(160deg, #1B232D, #0B0F14)`}} role="img" aria-label=${'Platzhalter für das Foto von ' + c.name}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-10 80 L110 56 M28 -10 L50 110 M-10 96 L110 72" stroke="#fff" strokeOpacity=".07" strokeWidth="1.5" fill="none"/></svg>
    <span>${initials(c.name)}</span>
  </div>`;
}

const Logo = ({light}) => html`<span className=${'logo' + (light ? ' light' : '')}>
  <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill=${light ? '#fff' : '#0B0F14'}/><path d="M12.5 10v12l9.5-6z" fill=${light ? '#0B0F14' : '#fff'}/><circle cx="25" cy="7" r="4" fill="#D4F53C"/></svg>
  <span className="wm">MyShotCoach</span>
</span>`;

/* ---------- Court-Szene: Standbild aus Broadcast-Perspektive, mit Markierungen des Coaches ---------- */
const P = (u, v) => { const s = 1 / (1 + .9 * v); return [320 + u * 380 * s, -245 + 675 * s, s]; };
const pt = (u, v) => P(u, v).slice(0, 2).map(n => n.toFixed(1)).join(' ');
const poly = list => list.map(([u, v]) => pt(u, v)).join(' ');
const line = (u1, v1, u2, v2) => 'M' + pt(u1, v1) + 'L' + pt(u2, v2);
const SCENES = {
  tennis: {floor:'#22503D', court:'#2C5D8B', lines:[[-1,0,1,0],[-1,1,1,1],[-1,0,-1,1],[1,0,1,1],[-.75,0,-.75,1],[.75,0,.75,1],[-.75,.2308,.75,.2308],[-.75,.7692,.75,.7692],[0,.2308,0,.7692],[0,0,0,.02],[0,1,0,.98]], net:.5, w:1},
  padel: {floor:'#173247', court:'#2A6A99', lines:[[-1,0,1,0],[-1,1,1,1],[-1,0,-1,1],[1,0,1,1],[-1,.1525,1,.1525],[-1,.8475,1,.8475],[0,.1525,0,.8475]], net:.5, w:1, walls:true},
  pickle: {floor:'#24503F', court:'#3A7A5C', kitchen:'#2F6B8E', lines:[[-1,0,1,0],[-1,1,1,1],[-1,0,-1,1],[1,0,1,1],[-1,.3409,1,.3409],[-1,.6591,1,.6591],[0,0,0,.3409],[0,.6591,0,1]], net:.5, w:1},
  tt: {floor:'#5A2E2A', court:'#1F4E8C', lines:[[-.42,.14,.42,.14],[-.42,.78,.42,.78],[-.42,.14,-.42,.78],[.42,.14,.42,.78],[0,.14,0,.78]], net:.46, w:.42, table:[.14,.78]},
};
function CourtScene({sport = 'tennis', marks}) {
  const sc = SCENES[sport] || SCENES.tennis;
  const v0 = sc.table ? sc.table[0] : 0, v1 = sc.table ? sc.table[1] : 1, w = sc.w;
  const [nx1, ny] = P(-w * 1.08, sc.net), [nx2] = P(w * 1.08, sc.net), ns = P(0, sc.net)[2];
  const netH = (sc.table ? 30 : 40) * ns;
  const bounce = sc.table ? [-.18, .62] : [-.32, .62];
  const target = sc.table ? [[-.36, .66], [0, .66], [0, .76], [-.36, .76]] : [[-.7, .82], [-.05, .82], [-.05, .97], [-.7, .97]];
  const [bx, by, bs] = P(...bounce);
  const [sx, sy] = P(sc.table ? .2 : .5, sc.table ? .1 : .12);
  const [tx, ty] = P((target[0][0] + target[1][0]) / 2, (target[0][1] + target[2][1]) / 2);
  return html`<svg className="scene" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id=${'sh-' + sport} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#05080C" stopOpacity=".72"/><stop offset=".45" stopColor="#05080C" stopOpacity=".08"/><stop offset="1" stopColor="#05080C" stopOpacity=".42"/></linearGradient>
      <radialGradient id=${'vg-' + sport} cx=".5" cy=".55" r=".75"><stop offset=".55" stopColor="#000" stopOpacity="0"/><stop offset="1" stopColor="#000" stopOpacity=".5"/></radialGradient>
    </defs>
    <rect width="640" height="360" fill=${sc.floor}/>
    ${!sc.table && html`<polygon points=${poly([[-1.5, -.3], [1.5, -.3], [1.5, 1.6], [-1.5, 1.6]])} fill=${sc.floor}/>`}
    <polygon points=${poly([[-w, v0], [w, v0], [w, v1], [-w, v1]])} fill=${sc.court}/>
    ${sc.kitchen && html`<polygon points=${poly([[-1, .3409], [1, .3409], [1, .6591], [-1, .6591]])} fill=${sc.kitchen}/>`}
    ${sc.table && html`<polygon points=${poly([[-w, v0], [w, v0], [w, v0 - .03], [-w, v0 - .03]])} fill="#14335C"/>`}
    <g stroke="#fff" strokeOpacity=".85" strokeWidth="2" fill="none">${sc.lines.map((l, i) => html`<path key=${i} d=${line(...l)}/>`)}</g>
    ${sc.walls && html`<g stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" fill="#fff" fillOpacity=".04">
      <polygon points=${(() => { const a = P(-1, 1), b = P(1, 1); return `${a[0]},${a[1]} ${b[0]},${b[1]} ${b[0]},${b[1] - 170 * b[2]} ${a[0]},${a[1] - 170 * a[2]}`; })()}/>
      <path d=${(() => { const a = P(-1, 1), c = P(-1, -.05); return `M${a[0]} ${a[1] - 130 * a[2]}L${c[0]} ${c[1] - 130 * c[2]}`; })()}/>
      <path d=${(() => { const a = P(1, 1), c = P(1, -.05); return `M${a[0]} ${a[1] - 130 * a[2]}L${c[0]} ${c[1] - 130 * c[2]}`; })()}/>
    </g>`}
    <g>
      <path d=${`M${nx1} ${ny}L${nx2} ${ny}L${nx2} ${ny - netH}L${nx1} ${ny - netH}Z`} fill="#0B0F14" fillOpacity=".35" stroke="#fff" strokeOpacity=".7" strokeWidth="1.2"/>
      <path d=${`M${nx1} ${ny - netH}L${nx2} ${ny - netH}`} stroke="#fff" strokeWidth="2.2"/>
    </g>
    <rect width="640" height="360" fill=${`url(#sh-${sport})`}/>
    <rect width="640" height="360" fill=${`url(#vg-${sport})`}/>
    ${marks && html`<g className="marks">
      <path d=${`M${sx} ${sy - 70}Q${(sx + bx) / 2} ${Math.min(sy, by) - 150} ${bx} ${by}`} fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round"/>
      <circle cx=${bx} cy=${by} r=${5 * bs + 1.5} fill=${sport === 'tt' ? '#FFFFFF' : '#E9F35A'}/>
      <ellipse className="draw" pathLength="100" cx=${bx} cy=${by} rx=${34 * bs + 8} ry=${12 * bs + 4} fill="none" stroke="#D4F53C" strokeWidth="3.2"/>
      <polygon className="zone" points=${poly(target)} fill="#D4F53C" fillOpacity=".18" stroke="#D4F53C" strokeWidth="2.4" strokeDasharray="7 6"/>
      <path className="draw" pathLength="100" d=${`M${bx + 18} ${by - 8}Q${(bx + tx) / 2 + 30} ${by - 40} ${tx} ${ty + 6}`} fill="none" stroke="#D4F53C" strokeWidth="3.2" strokeLinecap="round"/>
      <path className="tip" d=${`M${tx - 9} ${ty + 4}L${tx} ${ty + 6}L${tx - 3} ${ty + 15}`} fill="none" stroke="#D4F53C" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
      <g fontFamily="Archivo, Arial, sans-serif" fontWeight="700" fontSize="13">
        <rect x=${bx - 92} y=${by - 13} width="64" height="24" rx="5" fill="#0B0F14" fillOpacity=".82"/><text x=${bx - 60} y=${by + 4} textAnchor="middle" fill="#fff">zu kurz</text>
        <rect x=${tx + 18} y=${ty - 30} width="96" height="24" rx="5" fill="#D4F53C"/><text x=${tx + 66} y=${ty - 13} textAnchor="middle" fill="#0B0F14">Ziel: tief</text>
      </g>
    </g>`}
  </svg>`;
}

/* Videorahmen mit Player-Bedienelementen. Kein echtes Video: zeigt ein Standbild der Court-Szene. */
function VideoFrame({sport = 'tennis', marks, coach, dur = '4:12', at = '1:52', progress = .44, chapters, active, onChapter, label, compact, src}) {
  const [sel, setSel] = useState(null);
  const cur = active != null ? active : sel;
  return html`<div className=${'vf' + (compact ? ' compact' : '')}>
    <div className="vf-screen">
      ${src ? html`<video src=${src} controls playsInline></video>` : html`<${CourtScene} sport=${sport} marks=${marks}/>`}
      ${!src && label && html`<span className="vf-tag">${label}</span>`}
      ${!src && coach && html`<span className="vf-pip"><span className="pip-av"><${Portrait} c=${coach} round/></span><span className="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></span>`}
      ${!src && !marks && html`<span className="vf-play" aria-hidden="true"><${Ic} n="play" size=${compact ? 22 : 28} sw=${0} style=${{fill:'currentColor'}}/></span>`}
    </div>
    ${!src && html`<div className="vf-bar">
      <span className="vf-time num">${at}</span>
      <span className="vf-track"><span className="vf-prog" style=${{width:(progress * 100) + '%'}}></span>
        ${(chapters || []).map((c, i) => html`<i key=${i} className=${cur === i ? 'on' : ''} style=${{left:(c[2] * 100) + '%'}}></i>`)}</span>
      <span className="vf-time num">${dur}</span>
    </div>`}
    ${chapters && !compact && html`<ol className="chapters" style=${{'--n':chapters.length}}>${chapters.map((c, i) => html`<li key=${i}><button className=${cur === i ? 'on' : ''} onClick=${() => { setSel(i); onChapter && onChapter(i); }}><span className="num">${c[0]}</span>${c[1]}</button></li>`)}</ol>`}
  </div>`;
}

/* ---------- Kleine Bausteine ---------- */
const ExBadge = () => html`<span className="ex" title="Fiktives Beispielprofil">Beispiel</span>`;
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
function useToast() {
  const [msg, setMsg] = useState(null);
  const t = useRef(0);
  const show = m => { setMsg(m); clearTimeout(t.current); t.current = setTimeout(() => setMsg(null), 2800); };
  const el = msg && html`<div className="toast" role="status"><${Ic} n="check" size=${18}/>${msg}</div>`;
  return [show, el];
}
function useHashRoute(parse) {
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const onHash = () => { const r = parse(); setRoute(r); if (!r.anchor) window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}
const hashParts = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
function navigate(h, anchor) {
  if (location.hash === h || (h === '#/' && !location.hash)) {
    const t = anchor && document.getElementById(anchor);
    if (t) t.scrollIntoView({behavior:'smooth'}); else window.scrollTo(0, 0);
  } else location.hash = h;
}
function useScrollTo(anchor) {
  useEffect(() => {
    if (!anchor) return;
    const t = document.getElementById(anchor);
    if (t) setTimeout(() => t.scrollIntoView({behavior:'smooth'}), 60);
  }, [anchor]);
}
// Sanftes Einblenden beim Scrollen und Parallax über CSS-Variable --sy
function useMotion(ref) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = el.querySelectorAll('.rv');
    if (reduce || !('IntersectionObserver' in window)) { items.forEach(x => x.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
    items.forEach(x => io.observe(x));
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => el.style.setProperty('--sy', Math.min(window.scrollY, 1400))); };
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
}

function Footer({area, links}) {
  return html`<footer className="foot"><div className="wrap">
    <div className="cols">
      <div className="brand"><${Logo} light/><p>Video-Antworten von lizenzierten Trainer:innen für Tennis, Padel, Tischtennis und Pickleball.</p></div>
      <div><b>${area === 'coach' ? 'Für Coaches' : 'Plattform'}</b><ul>${links.map(([href, label]) => html`<li key=${href}><a href=${href}>${label}</a></li>`)}</ul></div>
      <div><b>Rechtliches</b><ul>
        <li><a href=${ROOT + 'impressum/'}>Impressum</a></li><li><a href=${ROOT + 'datenschutz/'}>Datenschutz</a></li><li><a href=${ROOT + 'hinweise/'}>Hinweise zur Vorschau</a></li></ul></div>
    </div>
    <p className="fine">Vorschau-Version: Es werden noch keine Verträge geschlossen und keine Zahlungen abgewickelt. Alle Coach-Profile, Bewertungen und Zahlen auf dieser Seite sind fiktive Beispiele. MyShotCoach ist ein unabhängiges Angebot der TanMeOn GmbH und steht in keiner Verbindung zum Deutschen Tennis Bund (DTB), zum Deutschen Tischtennis-Bund (DTTB) oder anderen Verbänden. Lizenzbezeichnungen beschreiben die Qualifikation einzelner Coaches. Alle Preise inkl. MwSt.</p>
  </div></footer>`;
}
const DemoBar = () => html`<div className="demo">Vorschau: noch keine echten Buchungen oder Zahlungen. Profile und Bewertungen sind Beispiele. <a href=${ROOT + 'hinweise/'}>Mehr erfahren</a></div>`;

function mount(App) {
  const root = document.getElementById('root');
  root.innerHTML = '';
  ReactDOM.createRoot(root).render(html`<${App}/>`);
}

window.MSC = {html, ROOT, CONTACT, SPORTS, sportById, strokeOf, TIERS, tierById, CUT, payout, COACHES, coachById, REVIEWS,
  fmtEUR, fmtNum, initials, I, Ic, Stars, StrokeIcon, Portrait, Logo, CourtScene, VideoFrame, ExBadge, Modal, useToast,
  useHashRoute, hashParts, navigate, useScrollTo, useMotion, Footer, DemoBar, mount};
})();
