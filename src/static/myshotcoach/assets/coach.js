// MyShotCoach – Coach-Bereich (Vorschau-Version). Registrierung, Login, Anfragen, Aufträge und Profil.
// Echt ist nur die Registrierung: Sie öffnet eine vorausgefüllte E-Mail an uns. Alles andere läuft im Browser.
(function () {
'use strict';
const {useState, useEffect, useRef} = React;
const {html, ROOT, CONTACT, SPORTS, sportById, strokeOf, TIERS, TIER_ORDER, tierById, PhoneFrameIcon, CUT, payout, fmtEUR, fmtNum,
  Ic, Stars, StrokeIcon, Portrait, Logo, VideoFrame, Modal, useToast, useHashRoute, hashParts, navigate,
  useScrollTo, useMotion, Footer, DemoBar, mount} = window.MSC;
const PCT = Math.round((1 - CUT) * 100) + ' %';

const SEED_BOARD = [
  {id:'b1', sport:'tennis', stroke:'rh', tier:'B', player:'Jana, 34', ago:'vor 12 Min.', note:'Einhändige Rückhand, der Ball fliegt oft zu hoch.'},
  {id:'b2', sport:'tennis', stroke:'auf', tier:'B', player:'Malte, 41', ago:'vor 40 Min.', note:'Der erste Aufschlag kommt selten rein.'},
  {id:'b3', sport:'tennis', stroke:'vhv', tier:'C', player:'Leonie, 17', ago:'vor 1 Std.', note:'Am Netz bin ich mit dem Volley zu spät.'},
  {id:'b4', sport:'tennis', stroke:'rsm', tier:'B', player:'Sarah, 39', ago:'vor 3 Std.', note:'Hohe Bälle auf der Rückhand kann ich nicht angreifen.'},
  {id:'b5', sport:'tennis', stroke:'ret', tier:'C', player:'Ömer, 28', ago:'vor 4 Std.', note:''},
];
const SEED_JOBS = [
  {id:'j1', sport:'tennis', stroke:'vh', tier:'B', player:'Felix, 23', ago:'gestern', note:'Die Vorhand longline geht immer ins Aus.', status:'progress', left:51},
  {id:'j0', sport:'tennis', stroke:'auf', tier:'B', player:'Hanna, 30', ago:'vor 4 Tagen', note:'', status:'done', earned:payout(19)},
];
const SEED_ME = {name:'Alex Becker', email:'', club:'TC Grünblick', city:'Hannover', tier:'B', license:'DTB B-Lizenz', sports:['tennis'],
  bio:'Ich trainiere seit acht Jahren Mannschaftsspieler:innen bis zur Verbandsliga. In meinen Video-Antworten sage ich klar, was mir auffällt, und gebe dir eine Übung mit.',
  langs:['Deutsch', 'Englisch'], awards:['Vereinstrainer des Jahres 2024'], certs:[{n:'DTB B-Trainer-Lizenz', st:'ok'}],
  active:true, photo:null, demo:true};

/* ---------- Routing ---------- */
const TABS = {anfragen:'board', auftraege:'jobs', profil:'profile'};
function parseHash() {
  const [a] = hashParts();
  if (a === 'registrieren') return {view:'register'};
  if (a === 'login') return {view:'login'};
  if (TABS[a]) return {view:'dash', param:TABS[a]};
  if (a === 'so-gehts' || a === 'ratgeber' || a === 'verdienst' || a === 'faq') return {view:'home', anchor:a};
  return {view:'home'};
}
function toHash(v, p) {
  if (v === 'register') return '#/registrieren';
  if (v === 'login') return '#/login';
  if (v === 'dash') return '#/' + (Object.keys(TABS).find(k => TABS[k] === p) || 'anfragen');
  if (v === 'home' && p) return '#/' + p;
  return '#/';
}

/* ---------- Kopfzeile ---------- */
function Header({view, go, me, logout}) {
  return html`<header className="hdr dark"><div className="wrap">
    <a href="#/" aria-label="MyShotCoach für Coaches, Startseite" className="brand-coach"><${Logo} light/><span className="pill volt">Coach</span></a>
    <nav className="nav" aria-label="Navigation Coach-Bereich">
      ${me ? html`
        <button className=${view === 'dash' && me.tab === 'board' ? 'on' : ''} onClick=${() => go('dash', 'board')}>Anfragen</button>
        <button className=${view === 'dash' && me.tab === 'jobs' ? 'on' : ''} onClick=${() => go('dash', 'jobs')}>Aufträge</button>
        <button className=${view === 'dash' && me.tab === 'profile' ? 'on' : ''} onClick=${() => go('dash', 'profile')}>Profil</button>`
      : html`
        <button onClick=${() => go('home', 'so-gehts')}>So funktioniert's</button>
        <button onClick=${() => go('home', 'ratgeber')}>Ratgeber</button>
        <button onClick=${() => go('home', 'verdienst')}>Verdienst</button>
        <button onClick=${() => go('home', 'faq')}>Fragen</button>`}
    </nav>
    <div className="sp"></div>
    <a className="lnk hide-m" href=${ROOT}>Zur Spieler-Seite</a>
    ${me
      ? html`<button className="chip-user" onClick=${logout} aria-label=${'Abmelden (' + me.name + ')'} title="Abmelden"><span className="av">${me.name[0].toUpperCase()}</span><span className="hide-m">${me.name.split(' ')[0]}</span><${Ic} n="logout" size=${16}/></button>`
      : html`<button className=${'btn ghost sm ondark' + (view === 'login' ? ' on' : '')} onClick=${() => go('login')}>Login</button>
             <button className="btn volt sm hide-m" onClick=${() => go('register')}>Registrieren</button>`}
  </div></header>`;
}
function TabBar({view, go, me}) {
  if (me) return html`<nav className="tabbar" aria-label="Navigation unten">
    <button className=${me.tab === 'board' && view === 'dash' ? 'on' : ''} onClick=${() => go('dash', 'board')}><${Ic} n="inbox"/>Anfragen</button>
    <button className=${me.tab === 'jobs' && view === 'dash' ? 'on' : ''} onClick=${() => go('dash', 'jobs')}><${Ic} n="video"/>Aufträge</button>
    <button className=${me.tab === 'profile' && view === 'dash' ? 'on' : ''} onClick=${() => go('dash', 'profile')}><${Ic} n="user"/>Profil</button>
    <a href=${ROOT}><${Ic} n="home"/>Spieler-Seite</a>
  </nav>`;
  return html`<nav className="tabbar" aria-label="Navigation unten">
    <button className=${view === 'home' ? 'on' : ''} onClick=${() => go('home')}><${Ic} n="home"/>Start</button>
    <button onClick=${() => go('home', 'verdienst')}><${Ic} n="euro"/>Verdienst</button>
    <button className="up" onClick=${() => go('register')}><span><${Ic} n="plus" size=${24}/></span>Registrieren</button>
    <button className=${view === 'login' ? 'on' : ''} onClick=${() => go('login')}><${Ic} n="user"/>Login</button>
    <a href=${ROOT}><${Ic} n="film"/>Spieler</a>
  </nav>`;
}

/* ---------- Startseite für Coaches ---------- */
const FAQ = [
  ['Muss ich jede Anfrage annehmen?', 'Nein. Du siehst offene Anfragen zu deinem Level und übernimmst nur, was zu dir passt. Du kannst dich jederzeit pausieren.'],
  ['Wie lange habe ich Zeit?', '72 Stunden ab Übernahme. Die meisten Video-Antworten dauern 10 bis 15 Minuten.'],
  ['Wie nehme ich eine Video-Antwort auf?', 'Am besten auf dem Tennisplatz, mit Schläger in der Hand: Geh auf das ein, was dir im Video aufgefallen ist, und mach den Schlag richtig vor, am liebsten mit Ball. Alle Tipps stehen oben im Ratgeber.'],
  ['Wie werde ich bezahlt?', `Du bekommst ${PCT} vom Preis jeder Video-Antwort. Zum Start zahlen wir deinen Anteil einmal im Monat per Überweisung aus, mit einer Gutschrift über alle Antworten.`],
  ['Was ist mit Steuern?', 'Du arbeitest selbstständig und versteuerst deine Einnahmen selbst. Als Plattform sind wir gesetzlich verpflichtet, die Einnahmen unserer Anbieter:innen einmal im Jahr an das Bundeszentralamt für Steuern zu melden (Plattformen-Steuertransparenzgesetz). Die nötigen Angaben fragen wir vor der ersten Auszahlung ab.'],
  ['Welche Lizenzen werden anerkannt?', 'Trainerlizenzen der Stufen C, B und A sowie Übungsleiter-Lizenzen im Tennis. Ehemalige Profis schicken uns ihre beste Weltranglisten-Platzierung. Schick uns deinen Nachweis bei der Registrierung mit, wir prüfen ihn vor der Freischaltung.'],
];

function GuideIcon({k}) {
  if (k === 'racket') return html`<${StrokeIcon} k="fh"/>`;
  if (k === 'ball') return html`<${StrokeIcon} k="serve"/>`;
  if (k === 'eye') return html`<${PhoneFrameIcon}/>`;
  return html`<${Ic} n=${k === 'pin' ? 'pin' : 'check'} size=${34} sw=${1.6}/>`;
}
const GUIDE = [
  ['eye', 'Erst das ganze Video ansehen', 'Schau dir alle 15 Schläge an: von der Seite, von hinten und von der anderen Seite. Erst dann entscheidest du, was das Wichtigste ist.'],
  ['pin', 'Ab auf den Platz', 'Nimm deine Antwort am besten auf dem Tennisplatz auf, nicht am Schreibtisch. Handy aufs Stativ, du komplett im Bild.'],
  ['racket', 'Schläger in die Hand', 'Sprich die Spielerin oder den Spieler direkt an und geh auf das ein, was dir im Video aufgefallen ist. Zeig mit dem Schläger, was du meinst.'],
  ['ball', 'Richtig vormachen, mit Ball', 'Mach den Schlag so vor, wie er sein sollte, am liebsten mit Ball. Sag beim Schlagen, worauf es ankommt.'],
  ['check', 'Ein bis drei Punkte, eine Übung', 'Lieber wenige Hinweise, die sitzen, als zehn auf einmal. Gib zum Schluss eine Übung mit, die man allein machen kann.'],
];
const GUIDE_DONT = ['Keine reine Bildschirmaufnahme vom Schreibtisch', 'Nicht das ganze Video nacherzählen', 'Keine Liste mit zehn Fehlern'];
function Home({go, anchor}) {
  const ref = useRef(null);
  useMotion(ref); useScrollTo(anchor);
  return html`<div ref=${ref}>
    <section className="hero">
      <svg className="hero-bg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="3"><rect x="140" y="60" width="920" height="580"/><path d="M140 132h920M140 568h920M370 132v436M830 132v436M370 350h460M600 60v580"/></g>
      </svg>
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="label dark-label">MyShotCoach für Trainer:innen</p>
          <h1>Coache per Video.<br/><span className="hl">Wann und wo du willst.</span></h1>
          <p className="lead">Spieler:innen schicken dir ein kurzes Video von einem Schlag. Du schaust es dir an, nimmst eine persönliche Video-Antwort auf und bekommst ${PCT} vom Preis.</p>
          <div className="ctas">
            <button className="btn volt lg" onClick=${() => go('register')}>Jetzt registrieren<${Ic} n="arrow"/></button>
            <button className="btn ondark lg" onClick=${() => go('login')}>Login</button>
          </div>
          <ul className="trust">
            <li><${Ic} n="check" size=${16}/>Kostenlos registrieren</li>
            <li><${Ic} n="check" size=${16}/>Keine Mindestanzahl</li>
            <li><${Ic} n="check" size=${16}/>Du wählst deine Anfragen</li>
          </ul>
        </div>
        <div className="hero-media dash-mock" role="img" aria-label="Beispiel des Coach-Dashboards mit offenen Anfragen und Verdienst">
          <div className="dm-card">
            <div className="dm-h"><b>Offene Anfragen</b><span className="pill">Beispiel</span></div>
            ${SEED_BOARD.slice(0, 3).map(b => { const st = strokeOf(b.sport, b.stroke); return html`<div key=${b.id} className="dm-row">
              <span className="tile sm"><${StrokeIcon} k=${st.icon}/></span>
              <span className="dm-t"><b>${st.name}</b><span className="muted">${b.player} · ${b.ago}</span></span>
              <b className="num plus">+${fmtEUR(payout(tierById(b.tier).price))}</b></div>`; })}
          </div>
          <div className="dm-earn"><span className="label">Beispiel · Verdienst Oktober</span><b className="num">${fmtEUR(842.5)}</b><span className="muted">58 Video-Antworten</span></div>
        </div>
      </div>
    </section>

    <section className="sec" id="so-gehts"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">So funktioniert's</p><h2>Von der Registrierung zur ersten Auszahlung</h2></div><p className="muted">Du brauchst eine Trainerlizenz, ein Smartphone oder einen Laptop und ein paar Minuten pro Antwort.</p></div>
      <ol className="steps four">
        <li className="step rv"><span className="n num">01</span><span className="st-ic"><${Ic} n="user" size=${28} sw=${1.6}/></span><h3>Registrieren</h3><p className="muted">Profil anlegen, Level wählen, Lizenznachweis mitschicken.</p></li>
        <li className="step rv"><span className="n num">02</span><span className="st-ic"><${Ic} n="shield" size=${28} sw=${1.6}/></span><h3>Freischaltung</h3><p className="muted">Wir prüfen deine Lizenz und schalten dein Profil frei.</p></li>
        <li className="step rv"><span className="n num">03</span><span className="st-ic"><${Ic} n="inbox" size=${28} sw=${1.6}/></span><h3>Anfrage übernehmen</h3><p className="muted">Du siehst Anfragen zu deinem Level und nimmst, was zu dir passt.</p></li>
        <li className="step rv"><span className="n num">04</span><span className="st-ic"><${Ic} n="video" size=${28} sw=${1.6}/></span><h3>Video-Antwort aufnehmen</h3><p className="muted">Video abspielen, stoppen, erklären. Hochladen, fertig.</p></li>
      </ol>
    </div></section>

    <section className="sec guide-sec" id="ratgeber"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">Ratgeber</p><h2>So sieht eine gute Video-Antwort aus</h2></div><p className="muted">Spieler:innen wollen einen echten Trainer auf dem Platz sehen, der ihnen den Schlag zeigt. Fünf Regeln, an die sich jede Antwort hält.</p></div>
      <ol className="guide rv">${GUIDE.map(([ic, t, d], i) => html`<li key=${t}><span className="g-n num">${i + 1}</span><span className="g-ic"><${GuideIcon} k=${ic}/></span><h3>${t}</h3><p className="muted">${d}</p></li>`)}</ol>
      <div className="guide-dont rv"><b>Bitte nicht</b>${GUIDE_DONT.map(x => html`<span key=${x}><${Ic} n="close" size=${16}/>${x}</span>`)}</div>
    </div></section>

    <section className="sec alt" id="verdienst"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">Verdienst</p><h2>${PCT} vom Preis gehen an dich</h2></div><p className="muted">Der Preis richtet sich nach deinem Level. Die Plattform behält ${Math.round(CUT * 100)} % für Zahlungsabwicklung, Technik und Marketing.</p></div>
      <div className="earn-table rv" role="table" aria-label="Verdienst pro Video-Antwort">
        <div className="et-row head" role="row"><span role="columnheader">Level</span><span role="columnheader">Spieler:in zahlt</span><span role="columnheader">Du erhältst</span></div>
        ${TIERS.map(t => html`<div key=${t.id} className="et-row" role="row"><span role="cell"><b>${t.name}</b><small className="muted">${t.ex}</small></span><span role="cell" className="num">${fmtEUR(t.price)}</span><span role="cell" className="num strong">${fmtEUR(payout(t.price))}</span></div>`)}
      </div>
      <p className="calc rv"><${Ic} n="euro" size=${18}/>Rechenbeispiel: 10 Video-Antworten pro Woche als B-Trainer sind rund ${fmtEUR(Math.round(payout(19) * 10 * 4.33))} im Monat.</p>
    </div></section>

    <section className="sec" id="faq"><div className="wrap faq-wrap">
      <div className="rv"><p className="label">Fragen</p><h2>Gut zu wissen</h2></div>
      <div className="faq rv">${FAQ.map(([q, a]) => html`<details key=${q}><summary>${q}<${Ic} n="plus" size=${18}/></summary><p>${a}</p></details>`)}</div>
    </div></section>

    <section className="coach-band"><div className="wrap">
      <div><p className="label dark-label">Registrierung</p><h2>Bereit für deine erste Video-Antwort?</h2><p>Die Registrierung dauert drei Minuten. Wir melden uns vor dem Start bei dir.</p></div>
      <button className="btn volt lg" onClick=${() => go('register')}>Jetzt registrieren<${Ic} n="arrow"/></button>
    </div></section>
  </div>`;
}

/* ---------- Registrierung (echt: per E-Mail) ---------- */
// Die Lizenzbezeichnung im Profil ergibt sich aus dem Level.
const licenseOf = f => f.tier === 'P'
  ? `Ex-Profi · beste ${f.proTour}-Platzierung ${f.proRank || '?'}` + (f.proLic ? ` · DTB ${f.proLic}-Lizenz` : '')
  : {C:'DTB C-Lizenz / Übungsleiter', B:'DTB B-Lizenz', A:'DTB A-Lizenz'}[f.tier] || '';
// Profil aus der Datenbank in das Format des Coach-Bereichs übersetzen
const fromDb = (r, session, extra = {}) => {
  const f = {tier:r.tier, proTour:r.pro_tour || 'ATP', proRank:r.pro_rank || '', proLic:r.pro_license || ''};
  const lic = licenseOf(f);
  return {...SEED_ME, name:[r.first_name, r.last_name].filter(Boolean).join(' ') || r.email, email:r.email, club:r.club || '', city:r.city || '',
    tier:r.tier, license:lic, sports:['tennis'], bio:r.bio || '', langs:r.langs && r.langs.length ? r.langs : ['Deutsch'], awards:[], photo:extra.photo || null,
    certs:[{n:lic, st:r.status === 'live' ? 'ok' : r.proof_path ? 'review' : 'missing'}], status:r.status, missingProof:r.status === 'missing_proof',
    demo:false, real:true, session, db:r};
};
const API = window.MSC_API;
const EMPTY = {password:'', proofFile:null, photoFile:null, first:'', last:'', email:'', phone:'', sports:['tennis'], tier:'', proTour:'ATP', proRank:'', proLic:'', proof:null, club:'', city:'', photo:null, bio:'', langs:['Deutsch']};
function Register({go, onDone}) {
  const [step, setStep] = useState(1);
  const [f, setF] = useState(EMPTY);
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState('');
  const set = (k, v) => { setF(x => ({...x, [k]:v})); setErr(''); };
  useEffect(() => { window.scrollTo(0, 0); }, [step, sent]);
  const name = [f.first.trim(), f.last.trim()].filter(Boolean).join(' ');
  const check = () => {
    if (step === 1) {
      if (!f.first.trim() || !f.last.trim()) return 'Bitte gib deinen Vor- und Nachnamen an.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) return 'Bitte gib eine gültige E-Mail-Adresse an.';
      if (f.password.length < 8) return 'Bitte wähl ein Passwort mit mindestens 8 Zeichen.';
    }
    if (step === 2) {
      if (!f.sports.length) return 'Bitte wähl mindestens eine Sportart.';
      if (!f.tier) return 'Bitte wähl dein Level.';
      if (f.tier === 'P' && !(+f.proRank >= 1 && +f.proRank <= 1000)) return 'Für Ex-Profis gilt: beste Weltranglisten-Platzierung zwischen 1 und 1000.';
    }
    return '';
  };
  const next = () => { const e = check(); if (e) setErr(e); else setStep(step + 1); };
  const [busy, setBusy] = useState(false);
  const submit = async () => {
    setBusy(true); setErr('');
    try {
      const meta = {first_name:f.first.trim(), last_name:f.last.trim(), phone:f.phone.trim(), tier:f.tier, club:f.club.trim(), city:f.city.trim(), bio:f.bio.trim(), langs:f.langs,
        ...(f.tier === 'P' ? {pro_tour:f.proTour, pro_rank:String(f.proRank), pro_license:f.proLic} : {})};
      const r = await API.signUp(f.email.trim(), f.password, meta);
      if (r.session) {
        const patch = {};
        if (f.proofFile) patch.proof_path = await API.upload(r.session, 'nachweis', f.proofFile);
        if (f.photoFile) patch.photo_path = await API.upload(r.session, 'foto', f.photoFile);
        const row = Object.keys(patch).length ? await API.update(r.session, patch) : await API.profile(r.session);
        setSent({session:r.session, row});
      } else setSent({confirm:true});
    } catch (e) { setErr(e.message); }
    setBusy(false);
  };
  const onPhoto = e => { const x = e.target.files[0]; if (!x) return; if (f.photo) URL.revokeObjectURL(f.photo); setF(v => ({...v, photo:URL.createObjectURL(x), photoFile:x})); };
  const preview = {name: name || 'Dein Name', photo:f.photo};

  if (sent && sent.confirm) return html`<div className="wrap page narrow"><div className="success">
    <span className="ok-ring"><${Ic} n="mail" size=${30} sw=${2}/></span>
    <h1>Bitte bestätige deine E-Mail</h1>
    <p>Dein Profil ist angelegt. Wir haben dir einen Link an <b>${f.email}</b> geschickt. Klick ihn an, dann bist du direkt in deinem Coach-Bereich.</p>
    ${f.proofFile ? html`<p className="muted">Deinen Nachweis lädst du nach der Bestätigung unter „Profil“ hoch.</p>` : html`<p className="muted">Ohne Nachweis ist dein Profil noch nicht live. Du kannst ihn nach der Bestätigung unter „Profil“ hochladen.</p>`}
  </div></div>`;
  if (sent) return html`<div className="wrap page narrow"><div className="success">
    <span className="ok-ring"><${Ic} n="check" size=${34} sw=${2.4}/></span>
    <h1>Dein Profil ist angelegt</h1>
    <p>${sent.row && sent.row.status === 'missing_proof' ? 'Es fehlt noch dein Nachweis. Ohne ihn schalten wir dein Profil nicht live. Du kannst ihn jederzeit unter „Profil“ hochladen.' : 'Wir prüfen jetzt deinen Nachweis und schalten dein Profil frei. Du bekommst eine E-Mail, sobald es live ist.'}</p>
    <div className="row-btns"><button className="btn pri" onClick=${() => onDone(fromDb(sent.row, sent.session, {photo:f.photo}))}>Zu meinem Coach-Bereich</button></div>
  </div></div>`;

  const titles = ['', 'Über dich', 'Deine Qualifikation', 'Dein Profil', 'Prüfen und absenden'];
  return html`<div className="wrap page narrow">
    <div className="wiz-h">
      <p className="label">Registrierung · Schritt ${step} von 4</p>
      <h1>${titles[step]}</h1>
      <div className="prog" aria-hidden="true">${[1, 2, 3, 4].map(i => html`<i key=${i} className=${i < step ? 'on' : i === step ? 'cur' : ''}></i>`)}</div>
    </div>

    ${step === 1 && html`<div className="form">
      <div className="two">
        <div className="field"><label htmlFor="rg-first">Vorname</label><input id="rg-first" className="inp" autoComplete="given-name" value=${f.first} onChange=${e => set('first', e.target.value)}/></div>
        <div className="field"><label htmlFor="rg-last">Nachname</label><input id="rg-last" className="inp" autoComplete="family-name" value=${f.last} onChange=${e => set('last', e.target.value)}/></div>
      </div>
      <div className="field"><label htmlFor="rg-mail">E-Mail-Adresse</label><input id="rg-mail" className="inp" type="email" autoComplete="email" value=${f.email} onChange=${e => set('email', e.target.value)}/></div>
      <div className="field"><label htmlFor="rg-pw">Passwort (mindestens 8 Zeichen)</label><input id="rg-pw" className="inp" type="password" autoComplete="new-password" value=${f.password} onChange=${e => set('password', e.target.value)}/></div>
      <div className="field"><label htmlFor="rg-tel">Telefon (optional)</label><input id="rg-tel" className="inp" type="tel" autoComplete="tel" value=${f.phone} onChange=${e => set('phone', e.target.value)}/></div>
    </div>`}

    ${step === 2 && html`<div className="form">
      ${SPORTS.length > 1 && html`<div className="field"><span className="flabel">Sportarten</span><div className="chipsel">${SPORTS.map(s => html`<button type="button" key=${s.id} aria-pressed=${f.sports.includes(s.id)} className=${f.sports.includes(s.id) ? 'on' : ''} onClick=${() => set('sports', f.sports.includes(s.id) ? f.sports.filter(x => x !== s.id) : [...f.sports, s.id])}><i style=${{background:s.color}}></i>${s.name}</button>`)}</div></div>`}
      <div className="field"><span className="flabel">Dein Level</span>
        <div className="pick-tiers">${TIERS.map(t => html`<button type="button" key=${t.id} className=${'pt' + (f.tier === t.id ? ' on' : '')} aria-pressed=${f.tier === t.id} onClick=${() => set('tier', t.id)}>
          <span className="radio" aria-hidden="true"></span>
          <span className="pt-t"><b>${t.name}</b><span className="muted">${t.ex}</span></span>
          <span className="pt-p"><b className="num">${fmtEUR(payout(t.price))}</b><small className="muted">pro Antwort für dich</small></span></button>`)}</div></div>
      ${f.tier === 'P' && html`<div className="card pad stack sm-gap">
        <b>Angaben für Ex-Profis</b><span className="muted small">Voraussetzung: mindestens Top 1000 der ATP- oder WTA-Weltrangliste (Einzel oder Doppel). Eine Trainerlizenz ist nicht nötig.</span>
        <div className="two">
          <div className="field"><span className="flabel">Tour</span><div className="seg sm">${['ATP', 'WTA'].map(t => html`<button type="button" key=${t} className=${f.proTour === t ? 'on' : ''} aria-pressed=${f.proTour === t} onClick=${() => set('proTour', t)}>${t}</button>`)}</div></div>
          <div className="field"><label htmlFor="rg-rank">Beste Platzierung</label><input id="rg-rank" className="inp" inputMode="numeric" placeholder="z. B. 412" value=${f.proRank} onChange=${e => set('proRank', e.target.value.replace(/\D/g, '').slice(0, 4))}/></div>
        </div>
        <div className="field"><span className="flabel">Trainerlizenz (optional)</span><div className="seg sm">${[['', 'Keine'], ['C', 'DTB C'], ['B', 'DTB B'], ['A', 'DTB A']].map(([v, l]) => html`<button type="button" key=${v} className=${f.proLic === v ? 'on' : ''} aria-pressed=${f.proLic === v} onClick=${() => set('proLic', v)}>${l}</button>`)}</div></div>
      </div>`}
      <div className="field"><span className="flabel">${f.tier === 'P' ? 'Nachweis (z. B. Screenshot deines Spielerprofils)' : 'Lizenznachweis'} (optional, für die Freischaltung nötig)</span>
        <label className="filebtn"><${Ic} n="doc" size=${18}/>${f.proof ? f.proof : 'Foto oder PDF auswählen'}<input id="rg-proof" type="file" accept="image/*,application/pdf" onChange=${e => { const x = e.target.files[0]; if (!x) return; if (x.size > 10 * 1024 * 1024) { setErr('Die Datei ist größer als 10 MB.'); return; } setF(v => ({...v, proof:x.name, proofFile:x})); setErr(''); }}/></label>
        <span className="note">Ohne Nachweis legen wir dein Profil trotzdem an, schalten es aber erst live, wenn der Nachweis da ist. Du kannst ihn jederzeit nachreichen.</span></div>
      <div className="two">
        <div className="field"><label htmlFor="rg-club">Heimverein (optional)</label><input id="rg-club" className="inp" value=${f.club} onChange=${e => set('club', e.target.value)}/></div>
        <div className="field"><label htmlFor="rg-city">Stadt (optional)</label><input id="rg-city" className="inp" autoComplete="address-level2" value=${f.city} onChange=${e => set('city', e.target.value)}/></div>
      </div>
    </div>`}

    ${step === 3 && html`<div className="form">
      <div className="ph-up"><span className="av lg"><${Portrait} c=${preview} round/></span>
        <div className="stack sm-gap"><b>Profilfoto (optional)</b><label className="filebtn"><${Ic} n="cam" size=${18}/>Foto auswählen<input id="rg-photo" type="file" accept="image/*" onChange=${onPhoto}/></label><span className="note">Am besten ein Bild auf dem Court.</span></div></div>
      <div className="field"><label htmlFor="rg-bio">Über mich (optional)</label><textarea id="rg-bio" className="inp" maxLength="700" value=${f.bio} onChange=${e => set('bio', e.target.value)} placeholder="Erfahrung, Schwerpunkte, mit wem du am liebsten arbeitest"></textarea></div>
      <div className="field"><label htmlFor="rg-lang">Sprachen</label>
        <div className="tagrow">${f.langs.map(a => html`<span key=${a} className="pill">${a}<button type="button" aria-label=${a + ' entfernen'} onClick=${() => set('langs', f.langs.filter(x => x !== a))}>×</button></span>`)}</div>
        <div className="inline"><input id="rg-lang" className="inp" value=${lang} onChange=${e => setLang(e.target.value)} placeholder="z. B. Englisch"/><button type="button" className="btn sm" onClick=${() => { if (lang.trim() && !f.langs.includes(lang.trim())) set('langs', [...f.langs, lang.trim()]); setLang(''); }}>Hinzufügen</button></div></div>
    </div>`}

    ${step === 4 && html`<div className="sum">
      <div className="card pad">
        <div className="sum-h"><span className="av"><${Portrait} c=${preview} round/></span><div><b>${name}</b><span className="muted">${f.email}</span></div></div>
        <dl className="rows">
          <div><dt>Sportarten</dt><dd>${f.sports.map(s => sportById(s).name).join(', ')}</dd></div>
          <div><dt>Level</dt><dd>${tierById(f.tier).name}</dd></div>
          <div><dt>Lizenz</dt><dd className="wrapany">${licenseOf(f)}</dd></div>
          <div><dt>Nachweis</dt><dd>${f.proof ? f.proof : html`<span className="pill warn">fehlt · Profil noch nicht live</span>`}</dd></div>
          <div><dt>Heimverein</dt><dd>${[f.club, f.city].filter(Boolean).join(', ') || '-'}</dd></div>
          <div><dt>Sprachen</dt><dd>${f.langs.join(', ') || '-'}</dd></div>
          <div className="total"><dt>Dein Anteil pro Antwort</dt><dd className="num">${fmtEUR(payout(tierById(f.tier).price))}</dd></div>
        </dl>
      </div>
      <div className="card pad order">
        <h3>So geht es weiter</h3>
        <ol className="mini-steps"><li>Wir legen dein Coach-Konto und dein Profil an.</li><li>${f.proofFile ? 'Wir prüfen deinen Nachweis.' : 'Ohne Nachweis bleibt dein Profil offline, bis du ihn hochlädst.'}</li><li>Nach der Prüfung schalten wir dein Profil live.</li></ol>
        <button className="btn volt lg" disabled=${busy} onClick=${submit}><${Ic} n="check" size=${18}/>${busy ? 'Profil wird angelegt …' : 'Profil anlegen'}</button>
        <p className="small">Wir nutzen deine Angaben für dein Coach-Konto und die Prüfung deiner Qualifikation. Mehr dazu in der <a href=${ROOT + 'datenschutz/#registrierung'}>Datenschutzerklärung</a>.</p>
      </div>
    </div>`}

    ${err && html`<p className="err" role="alert">${err}</p>`}
    <div className="wiz-foot">
      <button className="btn ghost" onClick=${() => step > 1 ? setStep(step - 1) : go('home')}><${Ic} n="back" size=${18}/>${step > 1 ? 'Zurück' : 'Abbrechen'}</button>
      ${step < 4 && html`<button className="btn pri lg" onClick=${next}>Weiter<${Ic} n="arrow" size=${18}/></button>`}
    </div>
  </div>`;
}

/* ---------- Login (Vorschau: nur im Browser) ---------- */
function Login({go, done, gate}) {
  const [email, setEmail] = useState(''); const [pw, setPw] = useState(''); const [err, setErr] = useState(''); const [info, setInfo] = useState(''); const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault(); setErr(''); setInfo('');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Bitte gib eine gültige E-Mail-Adresse ein.'); return; }
    if (!pw) { setErr('Bitte gib dein Passwort ein.'); return; }
    setBusy(true);
    try { const s = await API.signIn(email.trim(), pw); const row = await API.profile(s); if (!row) throw new Error('Zu diesem Konto gibt es kein Coach-Profil.'); done(fromDb(row, s)); }
    catch (x) { setErr(x.message); }
    setBusy(false);
  };
  const reset = async () => {
    setErr(''); if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Gib oben deine E-Mail-Adresse ein, dann schicken wir dir einen Link.'); return; }
    try { await API.resetPassword(email.trim()); setInfo('Wir haben dir einen Link geschickt, mit dem du dich einloggen kannst.'); } catch (x) { setErr(x.message); }
  };
  return html`<div className="wrap page"><div className="auth card pad">
    <p className="label center">Coach-Bereich</p>
    <h1 className="center">Login für Coaches</h1>
    ${gate && html`<p className="muted center">Bitte logg dich ein, um Anfragen, Aufträge und dein Profil zu sehen.</p>`}
    <form onSubmit=${submit} noValidate className="form">
      <div className="field"><label htmlFor="cl-mail">E-Mail-Adresse</label><input id="cl-mail" className="inp" type="email" autoComplete="email" placeholder="du@beispiel.de" value=${email} onChange=${e => { setEmail(e.target.value); setErr(''); }}/></div>
      <div className="field"><label htmlFor="cl-pw">Passwort</label><input id="cl-pw" className="inp" type="password" autoComplete="current-password" value=${pw} onChange=${e => { setPw(e.target.value); setErr(''); }}/></div>
      ${err && html`<p className="err" role="alert">${err}</p>`}
      ${info && html`<p className="note" role="status">${info}</p>`}
      <button className="btn pri lg" type="submit" disabled=${busy}>${busy ? 'Einen Moment …' : 'Einloggen'}</button>
      <button className="lnk-btn small" type="button" onClick=${reset}>Passwort vergessen?</button>
    </form>
    <p className="center small">Noch nicht registriert? <a href="#/registrieren">Jetzt registrieren</a></p>
    <p className="center small"><button className="lnk-btn" onClick=${() => done({...SEED_ME})}>Demo mit Beispieldaten ansehen</button></p>
  </div></div>`;
}
function Dash({tab, go, me, setMe, board, jobs, claim, openJob, earn, toast}) {
  const myBoard = board.filter(b => me.sports.includes(b.sport) && TIER_ORDER.indexOf(b.tier) <= TIER_ORDER.indexOf(me.tier));
  const open = jobs.filter(j => j.status !== 'done'); const done = jobs.filter(j => j.status === 'done');
  return html`<div className="wrap page">
    <div className="page-h"><div><p className="label">Coach-Bereich</p><h1>Hallo ${me.name.split(' ')[0]}</h1></div>
      <button className=${'switch' + (me.active ? ' on' : '')} onClick=${() => setMe({...me, active:!me.active})} aria-pressed=${me.active}><span className="knob" aria-hidden="true"></span>${me.active ? 'Nimmt Anfragen an' : 'Pausiert'}</button></div>
    ${me.status === 'in_review' && html`<div className="missing-box ok" role="status"><${Ic} n="shield" size=${22}/><span><b>Dein Nachweis wird geprüft.</b> Sobald wir ihn bestätigt haben, schalten wir dein Profil live.</span></div>`}
    ${me.missingProof && html`<div className="missing-box" role="status"><${Ic} n="doc" size=${22}/><span><b>Dein Profil ist noch nicht live.</b> Es fehlt dein ${me.tier === 'P' ? 'Nachweis zur Weltranglisten-Platzierung' : 'Lizenznachweis'}. Lade ihn unter „Profil“ hoch, dann prüfen wir ihn und schalten dich frei.</span></div>`}
    <p className="ex-banner">${me.real ? 'Dein Konto ist echt. Anfragen, Aufträge und Verdienst sind bis zum Start noch Beispieldaten.' : 'Vorschau: Anfragen, Aufträge und Verdienst sind Beispieldaten. So sieht der Bereich für Coaches zum Start aus.'}</p>
    <div className="dash-k">
      <div><small>Verdienst Oktober</small><b className="num">${fmtEUR(earn)}</b></div>
      <div><small>Offene Anfragen</small><b className="num">${myBoard.length}</b></div>
      <div><small>In Arbeit</small><b className="num">${open.length}</b></div>
      <div><small>Bewertung</small><b className="num rt">4,8 <${Stars} v=${4.8} size=${13}/></b></div>
    </div>
    <div className="tabs" role="tablist">
      <button role="tab" aria-selected=${tab === 'board'} className=${tab === 'board' ? 'on' : ''} onClick=${() => go('dash', 'board')}>Offene Anfragen${myBoard.length > 0 && html`<i>${myBoard.length}</i>`}</button>
      <button role="tab" aria-selected=${tab === 'jobs'} className=${tab === 'jobs' ? 'on' : ''} onClick=${() => go('dash', 'jobs')}>Meine Aufträge${open.length > 0 && html`<i>${open.length}</i>`}</button>
      <button role="tab" aria-selected=${tab === 'profile'} className=${tab === 'profile' ? 'on' : ''} onClick=${() => go('dash', 'profile')}>Mein Profil</button>
    </div>
    ${tab === 'board' && (myBoard.length ? html`<div className="rlist">${myBoard.map(b => {
      const st = strokeOf(b.sport, b.stroke); const t = tierById(b.tier);
      return html`<div key=${b.id} className="ritem">
        <span className="tile"><${StrokeIcon} k=${st.icon}/></span>
        <span className="ri-t"><b>${st.name} <span className="muted">· ${sportById(b.sport).name}</span></b>
          <span className="sub">${b.player} · ${t.short} · ${b.ago}</span>
          ${b.note && html`<span className="quote">„${b.note}“</span>`}</span>
        <span className="ri-r"><b className="num plus">+${fmtEUR(payout(t.price))}</b><button className="btn pri sm" disabled=${!me.active} onClick=${() => claim(b)}>Übernehmen</button></span>
      </div>`; })}</div>`
      : html`<div className="empty"><b>Gerade keine offenen Anfragen für dein Level.</b><p className="muted">Sobald etwas reinkommt, bekommst du eine Nachricht.</p></div>`)}
    ${tab === 'jobs' && html`<div className="stack lg-gap">
      ${open.length ? html`<div className="rlist">${open.map(j => {
        const st = strokeOf(j.sport, j.stroke);
        return html`<button key=${j.id} className="ritem" onClick=${() => openJob(j)}>
          <span className="tile warm"><${StrokeIcon} k=${st.icon}/></span>
          <span className="ri-t"><b>${st.name}</b><span className="sub">${j.player} · übernommen ${j.ago}</span></span>
          <span className="ri-r"><span className="pill warn"><${Ic} n="clock" size=${13}/>noch ${j.left} Std.</span><span className="btn pri sm">Antwort aufnehmen</span></span></button>`; })}</div>`
        : html`<div className="empty"><b>Keine offenen Aufträge.</b><p className="muted">Übernimm eine Anfrage aus „Offene Anfragen“.</p></div>`}
      ${done.length > 0 && html`<div><p className="label" style=${{marginBottom:10}}>Erledigt</p><div className="rlist">${done.map(j => {
        const st = strokeOf(j.sport, j.stroke);
        return html`<div key=${j.id} className="ritem muted-item"><span className="tile done"><${StrokeIcon} k=${st.icon}/></span>
          <span className="ri-t"><b>${st.name}</b><span className="sub">${j.player} · Video-Antwort gesendet</span></span>
          <span className="ri-r"><span className="pill ok"><${Ic} n="check" size=${13}/>Gesendet</span><b className="num">+${fmtEUR(j.earned || 0)}</b></span></div>`; })}</div></div>`}
    </div>`}
    ${tab === 'profile' && html`<${ProfileEditor} me=${me} setMe=${setMe} toast=${toast}/>`}
  </div>`;
}

function JobEditor({j, close, submit}) {
  const st = strokeOf(j.sport, j.stroke); const t = tierById(j.tier);
  const [vurl, setVurl] = useState(null); const [vname, setVname] = useState('');
  const [chs, setChs] = useState([['0:00', 'Erster Eindruck']]);
  useEffect(() => () => { if (vurl) URL.revokeObjectURL(vurl); }, [vurl]);
  return html`<${Modal} label="Video-Antwort aufnehmen" wide close=${close}>
    <p className="label">${j.player} · ${sportById(j.sport).name} · ${t.short}</p>
    <h2 className="m-title">${st.name}</h2>
    <${VideoFrame} sport=${j.sport} label=${'Video von ' + j.player.split(',')[0]} at="0:00" dur="0:24" progress=${0}/>
    ${j.note && html`<p className="quote-blk"><b>Hinweis:</b> „${j.note}“</p>`}
    <div className="form" style=${{marginTop:20}}>
      <div className="howto"><b>So nimmst du deine Antwort auf</b><ol><li>Das ganze Video ansehen, alle drei Perspektiven.</li><li>Auf den Platz, Handy aufs Stativ, Schläger in die Hand.</li><li>Sagen, was dir auffällt, und den Schlag richtig vormachen, am besten mit Ball.</li><li>Ein bis drei Punkte und eine Übung zum Schluss.</li></ol></div>
      <div className="field"><span className="flabel">Deine Video-Antwort</span>
        ${vurl ? html`<div className="stack sm-gap"><div className="vprev"><video src=${vurl} controls playsInline></video></div>
            <div className="vprev-ft"><span className="file"><span className="pill ok"><${Ic} n="check" size=${13}/>Bereit</span>${vname}</span><button className="btn sm" onClick=${() => { setVurl(null); setVname(''); }}>Ersetzen</button></div></div>`
        : html`<label className="drop sm"><input id="ans-video" type="file" accept="video/*" aria-label="Antwort-Video auswählen" onChange=${e => { const x = e.target.files[0]; if (x) { setVurl(URL.createObjectURL(x)); setVname(x.name); } }}/><span className="drop-ic"><${Ic} n="video" size=${24}/></span><b>Video-Antwort auswählen</b><span className="muted">Bildschirmaufnahme oder Handyvideo · bleibt in der Vorschau auf deinem Gerät</span></label>`}
      </div>
      <div className="field"><span className="flabel">Kapitel im Video (optional)</span>
        ${chs.map((p, i) => html`<div key=${i} className="ch-row">
          <input id=${'ch-t-' + i} className="inp num" value=${p[0]} onChange=${e => setChs(chs.map((x, k) => k === i ? [e.target.value, x[1]] : x))} aria-label="Zeit im Video"/>
          <input id=${'ch-x-' + i} className="inp" value=${p[1]} placeholder="z. B. Treffpunkt" aria-label="Titel des Kapitels" onChange=${e => setChs(chs.map((x, k) => k === i ? [x[0], e.target.value] : x))}/>
          <button className="icon-btn" onClick=${() => setChs(chs.filter((_, k) => k !== i))} aria-label="Kapitel entfernen" disabled=${chs.length < 2}><${Ic} n="close" size=${16}/></button></div>`)}
        <button className="btn sm" style=${{justifySelf:'start'}} onClick=${() => setChs([...chs, ['', '']])}><${Ic} n="plus" size=${16}/>Kapitel</button>
        <span className="note">Kapitel helfen Spieler:innen, im Video direkt zur richtigen Stelle zu springen.</span>
      </div>
      <div className="ed-foot">
        <span className="muted">Du erhältst <b className="num ink">${fmtEUR(payout(t.price))}</b></span>
        <button className="btn volt lg" disabled=${!vurl} onClick=${() => submit(j)}>Video-Antwort senden<${Ic} n="arrow" size=${18}/></button>
      </div>
    </div>
  <//>`;
}

function ProfileEditor({me, setMe, toast}) {
  const [d, setD] = useState(me); const [busy, setBusy] = useState(false); const [perr, setPerr] = useState('');
  const save = async () => {
    if (!me.real) { setMe({...d, tab:me.tab}); toast('Profil gespeichert'); return; }
    setBusy(true); setPerr('');
    try {
      const [first, ...rest] = d.name.trim().split(/\s+/);
      const row = await API.update(me.session, {first_name:first || '', last_name:rest.join(' '), club:d.club.trim() || null, city:d.city.trim() || null, bio:d.bio.trim() || null, langs:d.langs});
      setMe({...fromDb(row, me.session, {photo:d.photo}), awards:d.awards}); toast('Profil gespeichert');
    } catch (x) { setPerr(x.message); }
    setBusy(false);
  };
  const onProof = async e => {
    const f = e.target.files[0]; if (!f) return;
    if (!me.real) { set('certs', [...d.certs, {n:f.name.replace(/\.[^.]+$/, ''), st:'review'}]); return; }
    if (f.size > 10 * 1024 * 1024) { setPerr('Die Datei ist größer als 10 MB.'); return; }
    setBusy(true); setPerr('');
    try { const path = await API.upload(me.session, 'nachweis', f); const row = await API.update(me.session, {proof_path:path}); const m = fromDb(row, me.session, {photo:d.photo}); setMe(m); setD(m); toast('Nachweis hochgeladen. Wir prüfen ihn.'); }
    catch (x) { setPerr(x.message); }
    setBusy(false);
  }; const [award, setAward] = useState(''); const [lang, setLang] = useState('');
  const set = (k, v) => setD(x => ({...x, [k]:v}));
  const t = tierById(d.tier);
  const onPhoto = e => { const f = e.target.files[0]; if (!f) return; if (d.photo && d.photo.startsWith('blob:')) URL.revokeObjectURL(d.photo); set('photo', URL.createObjectURL(f)); };
  return html`<div className="edit-grid">
    <div className="form card pad">
      <div className="ph-up"><span className="av lg"><${Portrait} c=${d} round/></span>
        <div className="stack sm-gap"><b>Profilfoto</b><label className="filebtn"><${Ic} n="cam" size=${18}/>Foto auswählen<input id="photo-in" type="file" accept="image/*" onChange=${onPhoto}/></label><span className="note">Am besten ein Bild auf dem Court. In der Vorschau bleibt es auf deinem Gerät.</span></div></div>
      <div className="two">
        <div className="field"><label htmlFor="n-in">Name</label><input id="n-in" className="inp" value=${d.name} onChange=${e => set('name', e.target.value)}/></div>
        <div className="field"><label htmlFor="c-in">Heimverein</label><input id="c-in" className="inp" value=${d.club} onChange=${e => set('club', e.target.value)}/></div>
        <div className="field"><label htmlFor="ci-in">Stadt</label><input id="ci-in" className="inp" value=${d.city} onChange=${e => set('city', e.target.value)}/></div>
        <div className="field"><label htmlFor="t-sel">Level</label><select id="t-sel" className="inp" value=${d.tier} disabled=${me.real} onChange=${e => set('tier', e.target.value)}>${TIERS.map(x => html`<option key=${x.id} value=${x.id}>${x.name}</option>`)}</select></div>
      </div>
      <div className="price-info"><span>Dein Preis pro Video-Antwort</span><b className="num">${fmtEUR(t.price)}</b><span className="muted">Du erhältst ${fmtEUR(payout(t.price))} (${PCT}). Ein höheres Level schalten wir nach Prüfung der Lizenz frei.</span></div>
      ${SPORTS.length > 1 && html`<div className="field"><span className="flabel">Sportarten</span><div className="chipsel">${SPORTS.map(s => html`<button key=${s.id} aria-pressed=${d.sports.includes(s.id)} className=${d.sports.includes(s.id) ? 'on' : ''} onClick=${() => set('sports', d.sports.includes(s.id) ? d.sports.filter(x => x !== s.id) : [...d.sports, s.id])}><i style=${{background:s.color}}></i>${s.name}</button>`)}</div></div>`}
      <div className="field"><label htmlFor="b-in">Über mich</label><textarea id="b-in" className="inp" maxLength="700" value=${d.bio} onChange=${e => set('bio', e.target.value)}></textarea></div>
      <div className="field"><span className="flabel">Zertifikate und Lizenzen</span>
        ${d.certs.map((c, i) => html`<div key=${i} className="cert"><${Ic} n="doc" size=${22}/><span className="wrapany">${c.n}</span>${c.st === 'ok' ? html`<span className="pill ok"><${Ic} n="check" size=${13}/>geprüft</span>` : c.st === 'missing' ? html`<span className="pill err">Nachweis fehlt</span>` : html`<span className="pill warn">wird geprüft</span>`}</div>`)}
        <label className="filebtn"><${Ic} n="plus" size=${18}/>${me.missingProof ? 'Nachweis hochladen (PDF oder Foto)' : 'Weiteren Nachweis hochladen'}<input id="cert-in" type="file" accept="image/*,application/pdf" disabled=${busy} onChange=${onProof}/></label>
      </div>
      <div className="field"><label htmlFor="aw-in">Auszeichnungen</label>
        <div className="tagrow">${d.awards.map(a => html`<span key=${a} className="pill">${a}<button aria-label=${a + ' entfernen'} onClick=${() => set('awards', d.awards.filter(x => x !== a))}>×</button></span>`)}</div>
        <div className="inline"><input id="aw-in" className="inp" value=${award} onChange=${e => setAward(e.target.value)} placeholder="z. B. Vereinsmeister 2025"/><button className="btn sm" onClick=${() => { if (award.trim()) { set('awards', [...d.awards, award.trim()]); setAward(''); } }}>Hinzufügen</button></div>
      </div>
      <div className="field"><label htmlFor="la-in">Sprachen</label>
        <div className="tagrow">${d.langs.map(a => html`<span key=${a} className="pill">${a}<button aria-label=${a + ' entfernen'} onClick=${() => set('langs', d.langs.filter(x => x !== a))}>×</button></span>`)}</div>
        <div className="inline"><input id="la-in" className="inp" value=${lang} onChange=${e => setLang(e.target.value)} placeholder="z. B. Spanisch"/><button className="btn sm" onClick=${() => { if (lang.trim()) { set('langs', [...d.langs, lang.trim()]); setLang(''); } }}>Hinzufügen</button></div>
      </div>
      ${perr && html`<p className="err" role="alert">${perr}</p>`}
      <button className="btn pri lg" style=${{justifySelf:'start'}} disabled=${busy} onClick=${save}>${busy ? 'Speichert …' : 'Profil speichern'}</button>
    </div>
    <div className="preview"><p className="label">So sehen Spieler:innen dich</p>
      <div className="ccard static">
        <span className="ph"><${Portrait} c=${d}/></span>
        <span className="bd"><span className="pill">${t.short}</span><b className="nm">${d.name}</b><span className="meta">${d.license}</span>
          <span className="meta"><${Ic} n="pin" size=${14}/>${[d.club, d.city].filter(Boolean).join(', ')}</span>
          <span className="meta"><${Stars} v=${4.8}/><b>4,8</b><span>(12)</span></span></span>
        <span className="ft"><span><span className="muted">Video-Antwort </span><b className="num">${fmtEUR(t.price)}</b></span><span className="muted"><${Ic} n="clock" size=${14}/> ~14 Std.</span></span>
      </div>
    </div>
  </div>`;
}

/* ---------- App ---------- */
function App() {
  const route = useHashRoute(parseHash);
  const [me, setMeRaw] = useState(null);
  const [board, setBoard] = useState(SEED_BOARD);
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [earn, setEarn] = useState(842.5);
  const [openJ, setOpenJ] = useState(null);
  const [toast, toastEl] = useToast();
  const {view, param, anchor} = route;
  const go = (v, p) => navigate(toHash(v, p), v === 'home' ? p : null);
  const setMe = m => setMeRaw(m);
  const login = m => { setMeRaw(m); toast('Willkommen im Coach-Bereich'); go('dash', 'board'); };
  const logout = () => { setMeRaw(null); toast('Abgemeldet'); go('home'); };
  const claim = b => { setBoard(board.filter(x => x.id !== b.id)); setJobs([{...b, ago:'gerade eben', status:'progress', left:72}, ...jobs]); toast('Anfrage übernommen. Du hast 72 Stunden Zeit.'); go('dash', 'jobs'); };
  const submitJob = j => { const e = payout(tierById(j.tier).price); setJobs(jobs.map(x => x.id === j.id ? {...x, status:'done', earned:e} : x)); setEarn(earn + e); setOpenJ(null); toast('Video-Antwort gesendet · +' + fmtEUR(e)); };
  const meTab = me && {...me, tab: view === 'dash' ? param : null};
  useEffect(() => {
    API.fromHash().then(async s => { if (!s) return; const row = await API.profile(s); if (row) { setMeRaw(fromDb(row, s)); toast('E-Mail bestätigt. Willkommen!'); go('dash', 'profile'); } }).catch(() => toast('Der Link ist abgelaufen. Bitte logg dich ein.'));
  }, []);

  let page;
  if (view === 'register') page = html`<${Register} go=${go} onDone=${login}/>`;
  else if (view === 'login') page = me ? html`<${Dash} tab="board" go=${go} me=${me} setMe=${setMe} board=${board} jobs=${jobs} claim=${claim} openJob=${setOpenJ} earn=${earn} toast=${toast}/>` : html`<${Login} go=${go} done=${login}/>`;
  else if (view === 'dash') page = me ? html`<${Dash} tab=${param} go=${go} me=${me} setMe=${setMe} board=${board} jobs=${jobs} claim=${claim} openJob=${setOpenJ} earn=${earn} toast=${toast}/>` : html`<${Login} go=${go} done=${login} gate/>`;
  else page = html`<${Home} go=${go} anchor=${anchor}/>`;

  return html`<div className="app coach-app">
    <${DemoBar}/>
    <${Header} view=${view} go=${go} me=${meTab} logout=${logout}/>
    <main id="main">${page}</main>
    <${Footer} area="coach" links=${[['#/so-gehts', "So funktioniert's"], ['#/verdienst', 'Verdienst'], ['#/faq', 'Fragen'], ['#/registrieren', 'Registrieren'], [ROOT, 'Zur Spieler-Seite']]}/>
    <${TabBar} view=${view} go=${go} me=${meTab}/>
    ${openJ && html`<${JobEditor} j=${openJ} close=${() => setOpenJ(null)} submit=${submitJob}/>`}
    ${toastEl}
  </div>`;
}

mount(App);
})();
