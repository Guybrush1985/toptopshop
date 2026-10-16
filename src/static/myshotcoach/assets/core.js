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
// Start nur mit Tennis (Entscheidung 16.10.2026). Padel, Tischtennis und Pickleball folgen später.
const SPORTS = [
  {id:'tennis', name:'Tennis', color:'#C8643B', strokes:[
    ['vh','Vorhand','fh'],['rh','Rückhand','bh'],['vhv','Vorhand-Volley','volley'],['rhv','Rückhand-Volley','volleyb'],
    ['sm','Schmetterball','smash'],['rsm','Rückhand-Schmetterball','smashb'],['auf','Aufschlag','serve'],['ret','Return','return']]},
];
const sportById = id => SPORTS.find(s => s.id === id) || SPORTS[0];
const strokeOf = (sid, kid) => {
  const k = sportById(sid).strokes.find(x => x[0] === kid);
  return k ? {id:k[0], name:k[1], icon:k[2]} : {id:kid, name:kid, icon:'fh'};
};

// Preis pro Video-Antwort inkl. MwSt.; die Plattform behält 25 % Provision.
// Ex-Profis (P) sind nur über „Coach selbst wählen“ buchbar; der Preis ist ein vorläufiger Platzhalter.
const TIERS = [
  {id:'C', name:'C-Trainer / Übungsleiter', short:'C-Trainer', ex:'z. B. DTB-C-Lizenz oder Übungsleiter-Lizenz', price:9},
  {id:'B', name:'B-Trainer', short:'B-Trainer', ex:'z. B. DTB-B-Lizenz', price:19},
  {id:'A', name:'A-Trainer', short:'A-Trainer', ex:'z. B. DTB-A-Lizenz', price:29},
  {id:'P', name:'Ex-Profi', short:'Ex-Profi', ex:'ehemalige Tour-Spieler:innen', price:49, pro:true},
];
const LEVELS = TIERS.filter(t => !t.pro);
const TIER_ORDER = 'CBAP';
const tierById = id => TIERS.find(t => t.id === id) || TIERS[0];
const CUT = 0.25;
const payout = p => Math.floor(p * (1 - CUT) * 100) / 100;

// Fiktive Beispielprofile. Auf der Seite überall als „Beispiel“ gekennzeichnet.
const COACHES = [
  {id:'lena', name:'Lena Hartmann', sports:['tennis'], tier:'A', license:'DTB A-Lizenz', club:'TC Möwenkante', city:'Hamburg', rating:4.9, reviews:128, resp:18, since:2019,
   langs:['Deutsch','Englisch'], focus:['Aufschlag','Rückhand','Matchplan'],
   bio:'Ich arbeite seit 14 Jahren mit Erwachsenen und Jugendlichen im Leistungsbereich. Mein Spezialgebiet ist der Aufschlag: In meiner Video-Antwort gehe ich deinen Schlag in Zeitlupe durch und zeige dir, wo Energie verloren geht.',
   certs:['DTB A-Trainer-Lizenz','DTB Athletiktrainer','Mentaltraining im Tennis'], awards:['Landesmeisterin Damen 30, 2023']},
  {id:'marco', name:'Marco Ruiz', sports:['tennis'], tier:'B', license:'DTB B-Lizenz', club:'TC Spreebogen', city:'Berlin', rating:4.8, reviews:64, resp:12, since:2022,
   langs:['Deutsch','Spanisch','Englisch'], focus:['Topspin-Vorhand','Beinarbeit','Sandplatz'],
   bio:'Aufgewachsen auf den Sandplätzen von Valencia, seit vier Jahren Trainer in Berlin. Im Video zeige ich dir, wie du mit den Beinen mehr Spin erzeugst, und gebe dir drei Übungen für die nächste Einheit.',
   certs:['DTB B-Trainer-Lizenz','DTB C-Trainer-Lizenz Leistungssport'], awards:['Vize-Stadtmeister Berlin 2025']},
  {id:'jonas', name:'Jonas Weber', sports:['tennis'], tier:'C', license:'DTB C-Lizenz Breitensport', club:'TSV Isarbogen', city:'München', rating:4.6, reviews:41, resp:24, since:2023,
   langs:['Deutsch'], focus:['Vorhand','Einsteiger:innen','Jugend'],
   bio:'Ich trainiere vor allem Hobbyspieler:innen und Kids. Meine Video-Antworten sind kurz und klar, mit Übungen, die du auch alleine an der Ballwand machen kannst.',
   certs:['DTB C-Trainer-Lizenz Breitensport','Kindertennis-Zertifikat'], awards:[]},
  {id:'aylin', name:'Aylin Demir', sports:['tennis'], tier:'B', license:'DTB B-Lizenz', club:'TV Förde-Nord', city:'Kiel', rating:4.9, reviews:87, resp:10, since:2020,
   langs:['Deutsch','Türkisch'], focus:['Volley','Doppel','Rückhand-Slice'],
   bio:'Ehemalige Regionalliga-Spielerin und Doppel-Spezialistin. Ich gehe deine Schlagbewegung im Video Bild für Bild durch und achte besonders auf Schlägerhaltung und Beinarbeit am Netz.',
   certs:['DTB B-Trainer-Lizenz'], awards:['Regionalliga-Meisterin Damen 2018']},
  {id:'sofia', name:'Sofia Lindqvist', sports:['tennis'], tier:'A', license:'DTB A-Lizenz', club:'TC Mainufer', city:'Frankfurt', rating:4.8, reviews:59, resp:16, since:2021,
   langs:['Englisch','Deutsch','Schwedisch'], focus:['Return','Taktik','Leistungssport Jugend'],
   bio:'Ich betreue Jugendliche auf dem Weg in den Leistungssport. Im Video zeige ich dir, wie du den Return früher nimmst und damit sofort Druck machst.',
   certs:['DTB A-Trainer-Lizenz','Schwedische Trainerlizenz Nivå 3'], awards:[]},
  {id:'ben', name:'Ben Okafor', sports:['tennis'], tier:'C', license:'Übungsleiter-Lizenz Tennis', club:'TC Pleiße', city:'Leipzig', rating:4.7, reviews:19, resp:20, since:2024,
   langs:['Deutsch','Englisch'], focus:['Einsteiger:innen','Aufschlag','Wiedereinstieg'],
   bio:'Ich helfe vor allem Erwachsenen, die (wieder) mit Tennis anfangen. Kein Fachchinesisch, sondern ein, zwei Dinge, die sofort etwas bringen.',
   certs:['Übungsleiter-Lizenz C Tennis'], awards:[]},
  {id:'mia', name:'Mia Schröder', sports:['tennis'], tier:'A', license:'DTB A-Lizenz', club:'TC Weserkante', city:'Bremen', rating:4.8, reviews:47, resp:14, since:2021,
   langs:['Deutsch'], focus:['Beinarbeit','Vorhand','Athletik'],
   bio:'Tennis wird mit den Füßen gespielt. In meiner Video-Antwort zeige ich dir Laufwege und eine Übungsroutine für zehn Minuten am Tag.',
   certs:['DTB A-Trainer-Lizenz','Athletiktrainer-Zertifikat'], awards:['Landesmeisterin Damen 2017']},
  {id:'tom', name:'Tom Berger', sports:['tennis'], tier:'P', license:'Ehemaliger ATP-Profi', club:'TC Alsterblick', city:'Hamburg', rating:5.0, reviews:22, resp:30, since:2025,
   langs:['Deutsch','Englisch','Französisch'], focus:['Aufschlag','Matchplan','Turnierspieler:innen'],
   bio:'Zehn Jahre auf der ATP-Tour, Challenger- und ATP-500-Turniere. Heute schaue ich auf die Technik ambitionierter Spieler:innen und erkläre dir, was auf der Tour den Unterschied macht.',
   certs:['Beste ATP-Platzierung im Doppel: 112','DTB B-Trainer-Lizenz'], awards:['Zwei Challenger-Titel im Doppel']},
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

/* Schlag-Icons: Person mit Schläger in der Schlagposition, dazu Ball und Schwungbahn (Raster 64 × 64) */
function Racket({x, y, a, s = .72}) {
  // Ursprung = Griffende in der Hand, a = Richtung des Schlägerkopfs (0 = oben, 90 = rechts)
  return html`<g transform=${`translate(${x} ${y}) rotate(${a}) scale(${s})`}>
    <path d="M0 0v-15" stroke="currentColor" strokeWidth="4.6" strokeLinecap="round"/>
    <ellipse cx="0" cy="-28" rx="9.5" ry="13" fill="none" stroke="currentColor" strokeWidth="3.4"/>
    <path d="M-4.5 -38v20M0 -41v26M4.5 -38v20M-8.5 -32h17M-8.5 -24h17" stroke="currentColor" strokeWidth="1.3" opacity=".45"/>
  </g>`;
}
const Ball = ({x, y, r = 3.6}) => html`<circle className="si-ball" cx=${x} cy=${y} r=${r}/>`;
const Trail = ({d, dash}) => html`<path d=${d} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray=${dash || '0.5 4.5'} opacity=".55"/>`;
// Gelenkpunkte: h Kopf, n Hals/Schulter, p Hüfte, ke/fe Knie/Fuß hinten, kv/fv Knie/Fuß vorn, e1/w1 Schlagarm, e2/w2 freier Arm
const POSES = {
  fh:     {h:[25,13], n:[26,20], p:[25,36], ke:[18,46], fe:[12,58], kv:[33,46], fv:[38,58], e1:[34,26], w1:[42,29], e2:[18,24], w2:[13,20], r:82, ball:[55,27], trail:'M10 44 Q 22 54 40 33'},
  bh:     {h:[27,13], n:[27,20], p:[26,36], ke:[19,46], fe:[13,58], kv:[34,46], fv:[39,58], e1:[34,27], w1:[40,31], e2:[32,30], w2:[39,32], r:72, ball:[55,24], trail:'M12 46 Q 20 56 38 35'},
  volley: {h:[27,15], n:[27,22], p:[25,38], ke:[17,47], fe:[11,58], kv:[34,47], fv:[41,58], e1:[35,26], w1:[40,21], e2:[20,28], w2:[25,33], r:28, ball:[49,12], trail:'M60 12 H 52', net:true},
  smash:  {h:[26,15], n:[27,22], p:[27,38], ke:[22,48], fe:[18,58], kv:[33,48], fv:[37,58], e1:[33,13], w1:[37,7], e2:[20,14], w2:[16,7], r:52, ball:[51,2], trail:'M18 4 Q 28 -2 44 8'},
  serve:  {h:[28,15], n:[28,22], p:[27,38], ke:[22,48], fe:[17,58], kv:[34,48], fv:[38,58], e1:[19,22], w1:[15,14], e2:[32,13], w2:[35,6], r:-25, ball:[37,-4], trail:'M35 4 V -1'},
  spin:   {h:[29,13], n:[28,20], p:[24,37], ke:[20,48], fe:[16,58], kv:[30,48], fv:[34,58], e1:[30,11], w1:[31,4], e2:[22,28], w2:[25,34], r:-8, ball:[22,-4], trail:'M6 40 Q 6 10 30 -6', spin:true},
  sserve: {h:[27,14], n:[27,21], p:[26,38], ke:[21,48], fe:[16,58], kv:[33,48], fv:[37,58], e1:[33,12], w1:[37,6], e2:[22,28], w2:[25,34], r:40, ball:[48,-2], trail:'M48 -2 Q 62 14 56 30'},
  slice:  {h:[25,14], n:[26,21], p:[25,37], ke:[18,47], fe:[12,58], kv:[33,47], fv:[39,58], e1:[33,25], w1:[40,27], e2:[17,25], w2:[12,22], r:70, ball:[56,30], trail:'M14 8 Q 30 12 44 34'},
  return: {h:[30,17], n:[30,24], p:[30,39], ke:[21,47], fe:[16,58], kv:[39,47], fv:[44,58], e1:[36,29], w1:[40,33], e2:[32,32], w2:[39,34], r:55, ball:[60,12], trail:'M68 6 L 58 13', ready:true},
};
function Figure({pose}) {
  const q = pose;
  const seg = (...pts) => 'M' + pts.map(x => x.join(' ')).join('L');
  return html`<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d=${seg(q.fe, q.ke, q.p, q.kv, q.fv)} strokeWidth="4"/>
    <path d=${seg(q.p, q.n)} strokeWidth="5"/>
    <path d=${seg(q.n, q.e2, q.w2)} strokeWidth="3.4"/>
    <path d=${seg(q.n, q.e1, q.w1)} strokeWidth="3.4"/>
    <circle cx=${q.h[0]} cy=${q.h[1]} r="4.6" fill="currentColor" stroke="none"/>
  </g>`;
}
function StrokeIcon({k}) {
  const flip = /b$/.test(k) && k !== 'bh';
  const base = flip ? k.slice(0, -1) : k;
  const q = POSES[base] || POSES.fh;
  return html`<svg className="si" viewBox="-6 -22 76 86" aria-hidden="true"><g transform=${flip ? 'translate(64 0) scale(-1 1)' : undefined}>
    <path d="M0 60.5h64" stroke="currentColor" strokeWidth="1.4" opacity=".3"/>
    ${q.net && html`<path d="M58 34v26" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 3" opacity=".5"/>`}
    <${Trail} d=${q.trail}/>
    <${Figure} pose=${q}/>
    <${Racket} x=${q.w1[0]} y=${q.w1[1]} a=${q.r}/>
    ${q.spin && html`<path d="M14 -4a8 8 0 0 1 8-4M30 0a8 8 0 0 1-8 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>`}
    <${Ball} x=${q.ball[0]} y=${q.ball[1]}/>
  </g></svg>`;
}

/* Filmen: Handy mit Spieler komplett im Bild, und Positionen rund um den Spieler (Draufsicht) */
function PhoneFrameIcon() {
  return html`<svg className="fi" viewBox="0 0 64 44" aria-hidden="true">
    <rect x="2" y="4" width="60" height="36" rx="6" fill="none" stroke="currentColor" strokeWidth="2.2"/>
    <circle cx="57" cy="22" r="1.6" fill="currentColor"/>
    <path d="M9 11v-3h4M51 8h-4M9 33v3h4M47 36h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".55"/>
    <g transform="translate(15 6) scale(.48)"><${Figure} pose=${POSES.fh}/><${Racket} x=${42} y=${29} a=${82}/></g>
    <circle className="si-ball" cx="42" cy="19" r="1.8"/>
  </svg>`;
}
const SPOTS = {front:[10, 30], back:[32, 54], other:[54, 30]};
function TopDown({spots = ['front', 'back', 'other'], active, ring}) {
  return html`<svg className="fi" viewBox="0 0 64 64" aria-hidden="true">
    <path d="M4 14h56" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 3" opacity=".45"/>
    ${ring && html`<path d="M14 44 A 22 22 0 0 0 50 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".6"/>`}
    ${ring && html`<path d="M46 47l4-3 1 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>`}
    <circle cx="32" cy="30" r="5" fill="currentColor"/>
    <path d="M36 27l7-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><ellipse cx="45.5" cy="18.5" rx="3" ry="4" transform="rotate(48 45.5 18.5)" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    ${spots.map(s => { const [x, y] = SPOTS[s]; const on = !active || active === s; return html`<g key=${s} opacity=${on ? 1 : .3}>
      <path d=${`M${x} ${y}L32 30`} stroke="currentColor" strokeWidth="1.3" strokeDasharray="1 3" strokeLinecap="round"/>
      <rect x=${x - 4} y=${y - 6} width="8" height="12" rx="2" fill=${on ? 'var(--volt)' : 'none'} stroke="currentColor" strokeWidth="1.8"/>
    </g>`; })}
  </svg>`;
}
const FILM_STEPS = [
  {k:'front', t:'5 Schläge von der Seite', d:'Handy seitlich, du schaust beim Schlag zur Kamera.'},
  {k:'back', t:'5 Schläge von hinten', d:'Handy hinter dir, Blick Richtung Netz.'},
  {k:'other', t:'5 Schläge von der anderen Seite', d:'Handy auf die andere Seite stellen.'},
];
function FilmGuide({compact}) {
  return html`<ol className=${'film-guide' + (compact ? ' compact' : '')}>${FILM_STEPS.map((s, i) => html`<li key=${s.k}>
    <span className="fg-ic"><${TopDown} active=${s.k}/></span>
    <span><b><span className="num">${i + 1}</span>${s.t}</b>${!compact && html`<span className="muted">${s.d}</span>`}</span>
  </li>`)}</ol>`;
}

/* Seitenansicht auf dem Handy-Display: Spieler:in mit Vorhand, Platz und Netz */
function SideScene({pose = 'fh', blur}) {
  const q = POSES[pose];
  return html`<svg className="side-scene" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id=${'sky' + (blur ? 'b' : '')} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8FB6C9"/><stop offset="1" stopColor="#CFE0E3"/></linearGradient></defs>
    <rect width="640" height="360" fill=${`url(#sky${blur ? 'b' : ''})`}/>
    <path d="M0 120 Q 120 96 220 112 T 430 104 T 640 116 V 190 H 0 Z" fill="#4F7A5A"/>
    <rect y="150" width="640" height="62" fill="#1F4A3A"/>
    <g stroke="#2B5E4A" strokeWidth="2">${Array.from({length:17}, (_, i) => html`<path key=${i} d=${`M${i * 40} 150v62`}/>`)}</g>
    <path d="M0 212 H640 V360 H0Z" fill="#2E6A94"/>
    <path d="M0 212 H640 L640 232 H0Z" fill="#B3502C"/>
    <path d="M0 300 L640 270" stroke="#fff" strokeOpacity=".9" strokeWidth="4"/>
    <g><path d="M560 196v92" stroke="#E6E9EC" strokeWidth="6"/><path d="M560 210 L 640 206 V 268 L 560 276Z" fill="#0B0F14" fillOpacity=".35"/>
      <path d="M560 210 L640 206" stroke="#fff" strokeWidth="5"/></g>
    <ellipse cx="200" cy="318" rx="90" ry="10" fill="#000" fillOpacity=".22"/>
    <g transform="translate(70 34) scale(4.9)" style=${{color:'#F7F8F9'}}>
      <${Trail} d=${q.trail}/>
      <${Figure} pose=${q}/>
      <${Racket} x=${q.w1[0]} y=${q.w1[1]} a=${q.r}/>
    </g>
    <circle cx=${70 + q.ball[0] * 4.9} cy=${34 + q.ball[1] * 4.9} r="9" fill="#E9F35A"/>
  </svg>`;
}
/* Bühne im Hero: Handy auf einem Stativ filmt; rund um das Display ist alles unscharf */
function PhoneStage({children}) {
  return html`<div className="stage">
    <div className="stage-bg"><${SideScene} blur/></div>
    <div className="stage-rig">
      <div className="stage-phone">
        <div className="ph-screen">
          <${SideScene}/>
          <span className="ph-rec"><i></i>REC <span className="num">00:14</span></span>
          <span className="ph-count num">Vorhand · 7/15</span>
          <span className="ph-corners" aria-hidden="true"></span>
          <span className="ph-shutter" aria-hidden="true"></span>
        </div>
      </div>
      <svg className="stage-tripod" viewBox="0 0 200 240" aria-hidden="true">
        <rect x="88" y="0" width="24" height="16" rx="3" fill="#15191F"/>
        <rect x="95" y="14" width="10" height="70" fill="#1F252D"/>
        <rect x="86" y="80" width="28" height="14" rx="4" fill="#15191F"/>
        <path d="M94 92 L28 240 M100 94 L100 240 M106 92 L172 240" stroke="#1F252D" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    </div>
    ${children}
  </div>`;
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
      <div className="brand"><${Logo} light/><p>Video-Antworten von lizenzierten Tennistrainer:innen und Ex-Profis.</p></div>
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

window.MSC = {html, ROOT, CONTACT, SPORTS, sportById, strokeOf, TIERS, LEVELS, TIER_ORDER, tierById, CUT, payout, COACHES, coachById, REVIEWS,
  fmtEUR, fmtNum, initials, I, Ic, Stars, StrokeIcon, PhoneFrameIcon, TopDown, FilmGuide, FILM_STEPS, SideScene, PhoneStage, Portrait, Logo, CourtScene, VideoFrame, ExBadge, Modal, useToast,
  useHashRoute, hashParts, navigate, useScrollTo, useMotion, Footer, DemoBar, mount};
})();
