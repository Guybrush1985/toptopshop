// tennistrainer.app – Spieler-Seite (Vorschau-Version). Bausteine und Daten kommen aus core.js.
(function () {
'use strict';
const {useState, useEffect, useRef} = React;
const {html, ROOT, SPORTS, sportById, strokeOf, TIERS, LEVELS, TIER_ORDER, tierById, COACHES, coachById, REVIEWS, fmtEUR, fmtNum,
  Ic, Stars, StrokeIcon, PhoneFrameIcon, TopDown, FilmGuide, PhoneStage, Portrait, Logo, CourtScene, VideoFrame, ExBadge, Modal, useToast, useHashRoute, hashParts,
  navigate, useScrollTo, useMotion, Footer, DemoBar, LAUNCH, mount} = window.MSC;

const SEED_REQ = [
  {id:'r1', sport:'tennis', stroke:'auf', coach:'lena', tier:'A', price:29, status:'done', date:'12.10.2026', note:'Mein Kick springt kaum hoch.', rated:false,
   answer:{dur:'4:12', chapters:[['0:00', 'Erster Eindruck', 0], ['0:48', 'Ballwurf', .19], ['1:52', 'Knie und Absprung', .44], ['2:57', 'Treffpunkt', .7], ['3:41', 'Deine Übungen', .88]]}},
  {id:'r2', sport:'tennis', stroke:'vh', coach:'marco', tier:'B', price:19, status:'progress', date:'14.10.2026', note:'Meine Vorhand landet oft im Netz.'},
];

/* ---------- Routing: #/coaches, #/coaches/lena, #/upload/tennis … ---------- */
function parseHash() {
  const [a, b, c] = hashParts();
  switch (a) {
    case 'coaches': return coachById(b) ? {view:'coach', param:b} : {view:'coaches'};
    case 'upload':
      if (b === 'coach' && coachById(c)) return {view:'submit', param:{coach:c}};
      if (b === 'level' && LEVELS.some(t => t.id === c)) return {view:'submit', param:{tier:c}};
      if (b === 'schlag' && SPORTS[0].strokes.some(x => x[0] === c)) return {view:'submit', param:{stroke:c}};
      return {view:'submit', param: SPORTS.some(s => s.id === b) ? {sport:b} : {}};
    case 'meine-videos': return {view:'mine'};
    case 'so-gehts': case 'preise': case 'faq': return {view:'home', anchor:a};
    default: return {view:'home'};
  }
}
function toHash(v, p) {
  if (v === 'coaches') return '#/coaches';
  if (v === 'coach') return '#/coaches/' + p;
  if (v === 'submit') return p && p.coach ? '#/upload/coach/' + p.coach : p && p.tier ? '#/upload/level/' + p.tier : p && p.stroke ? '#/upload/schlag/' + p.stroke : p && p.sport ? '#/upload/' + p.sport : '#/upload';
  if (v === 'mine') return '#/meine-videos';
  if (v === 'home' && p) return '#/' + p;
  return '#/';
}

/* ---------- Kopfzeile und Navigation ---------- */
function Header({view, go, user, openLogin, logout}) {
  return html`<header className="hdr"><div className="wrap">
    <a href="#/" aria-label="tennistrainer.app Startseite"><${Logo}/></a>
    <nav className="nav" aria-label="Hauptnavigation">
      <button onClick=${() => go('home', 'so-gehts')}>So funktioniert's</button>
      <button className=${view === 'coaches' || view === 'coach' ? 'on' : ''} onClick=${() => go('coaches')}>Coaches</button>
      <button onClick=${() => go('home', 'preise')}>Preise</button>
    </nav>
    <div className="sp"></div>
    <a className="lnk hide-m" href="coach/">Für Coaches</a>
    <button className="btn volt sm hide-m" onClick=${() => go('submit')}><${Ic} n="bell" size=${17}/>Vormerken</button>
  </div></header>`;
}
function TabBar({view, go}) {
  return html`<nav className="tabbar" aria-label="Navigation unten">
    <button className=${view === 'home' ? 'on' : ''} onClick=${() => go('home')}><${Ic} n="home"/>Start</button>
    <button className=${view === 'coaches' || view === 'coach' ? 'on' : ''} onClick=${() => go('coaches')}><${Ic} n="users"/>Coaches</button>
    <button className="up" onClick=${() => go('submit')}><span><${Ic} n="bell" size=${24}/></span>Vormerken</button>
    <a href="coach/"><${Ic} n="award"/>Für Coaches</a>
  </nav>`;
}

/* ---------- Startseite ---------- */
const HERO_CHAPTERS = [['0:00', 'Erster Eindruck', 0], ['0:41', 'Ausholbewegung', .16], ['1:52', 'Treffpunkt', .44], ['3:05', 'Deine Übungen', .74]];
const FAQ = [
  ['Wie filme ich meinen Schlag richtig?', 'guide'],
  ['Wie bekomme ich die Antwort?', 'Als Video unter „Meine Videos“. Dein Trainer spricht dich direkt an, sagt dir, was ihm auffällt, zeigt dir, was schon gut ist und was du ändern solltest, und gibt dir Übungen mit. Sobald die Antwort da ist, bekommst du eine E-Mail.'],
  ['Wie bezahle ich?', 'Direkt beim Abschicken mit PayPal, Apple Pay, Google Pay oder Kreditkarte. Oder du lädst dein Guthaben auf und zahlst jede Einschätzung mit einem Klick davon. Kein Abo, keine Grundgebühr.'],
  ['Was passiert, wenn kein Trainer antwortet?', 'Übernimmt innerhalb von 72 Stunden kein Coach deine Anfrage oder kommt die Video-Antwort nicht rechtzeitig, bekommst du den vollen Betrag automatisch zurück: auf dein Zahlungsmittel oder, wenn du mit Guthaben bezahlt hast, auf dein Guthaben.'],
  ['Wer sieht mein Video?', 'Nur Trainer der Stufe, die du gewählt hast, solange deine Anfrage offen ist, und danach nur der Trainer, der sie übernommen hat. Dein Video wird nicht öffentlich gezeigt. In der Vorschau verlässt dein Video dein Gerät überhaupt nicht.'],
  ['Wie werden die Trainer geprüft?', 'Jeder Coach schickt uns vor der Freischaltung seinen Lizenznachweis. Im Profil siehst du Lizenz, Heimverein und die Bewertungen anderer Spieler:innen, die bei diesem Coach gebucht haben.'],
];
function FilmAnswer() {
  return html`<div className="film-ans">
    <p>Stell dein Handy auf ein Stativ (oder lehn es an die Tasche) auf Hüfthöhe und film im Querformat. Du solltest mit Schläger komplett im Bild sein. Dann filmst du rundherum: 15 Schläge, je 5 aus drei Richtungen. Insgesamt reichen 2 Minuten.</p>
    <${FilmGuide}/>
  </div>`;
}
function Home({go, anchor}) {
  const ref = useRef(null);
  useMotion(ref); useScrollTo(anchor);
  const lena = coachById('lena');
  return html`<div ref=${ref}>
    <section className="hero">
      <svg className="hero-bg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="3"><rect x="140" y="60" width="920" height="580"/><path d="M140 132h920M140 568h920M370 132v436M830 132v436M370 350h460M600 60v580"/></g>
      </svg>
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="label dark-label">Dein Online Tennistrainer</p>
          <h1>Kurs zu teuer?<br/>Kein Trainer zur Hand?<br/><span className="hl">Nur eine konkrete Frage?</span></h1>
          <p className="lead">Dann ist tennistrainer.app das Richtige für dich. Film deinen Schlag mit dem Handy, lade das Video hoch und bekomm eine persönliche Video-Antwort von einem echten Trainer. Ab 9 € für ein Feedback zu deiner Technik.</p>
          <div className="ctas">
            <button className="btn volt lg" onClick=${() => go('submit')}><${Ic} n="bell"/>Jetzt vormerken</button>
            <button className="btn ondark lg" onClick=${() => go('home', 'so-gehts')}>So funktioniert's</button>
          </div>
          <ul className="trust">
            <li><${Ic} n="check" size=${16}/>Ab 9 € pro Einschätzung</li>
            <li><${Ic} n="check" size=${16}/>Antwort in 72 Std. oder Geld zurück</li>
            <li><${Ic} n="check" size=${16}/>Kein Abo</li>
          </ul>
        </div>
        <div className="hero-media" role="img" aria-label="Ein Handy auf einem Stativ filmt einen Tennisspieler bei der Vorhand. Auf dem Display ist er komplett im Bild, die Umgebung ist unscharf.">
          <${PhoneStage}>
            <div className="hm-card">
              <span className="pip-av"><${Portrait} c=${lena} round/></span>
              <div><b>Video-Antwort von Lena</b><span>A-Trainerin · 4:12</span><span className="ok"><${Ic} n="check" size=${14}/>Antwort ist da</span></div>
            </div>
          <//>
        </div>
      </div>
    </section>

    <section className="sec" id="schlaege"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">Schläge</p><h2>Welcher Schlag soll besser werden?</h2></div><p className="muted">Tipp den Schlag an, zu dem du eine Einschätzung willst. Von der Vorhand bis zum Return.</p></div>
      <div className="strokes home-strokes rv">
        ${SPORTS[0].strokes.map(([id, name, icon]) => html`<button key=${id} className="stroke" onClick=${() => go('submit', {stroke:id})}><${StrokeIcon} k=${icon}/><span>${name}</span></button>`)}
      </div>
    </div></section>

    <section className="sec alt" id="so-gehts"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">So funktioniert's</p><h2>Drei Schritte zu deiner Video-Antwort</h2></div><p className="muted">Kein Abo, kein Termin, keine Anfahrt. Du brauchst nur dein Handy und ein paar Sekunden Video.</p></div>
      <ol className="steps">
        <li className="step rv"><span className="n num">01</span><span className="st-ic"><${StrokeIcon} k="fh"/></span><h3>Schlag auswählen</h3><p className="muted">Per Icon antippen, welchen Schlag du verbessern willst.</p></li>
        <li className="step rv"><span className="n num">02</span><span className="st-ic"><${TopDown}/></span><h3>Rundherum filmen</h3><p className="muted">Handy aufs Stativ, ganzer Körper im Bild. Je 5 Schläge von der Seite, von hinten und von der anderen Seite.</p></li>
        <li className="step rv"><span className="n num">03</span><span className="st-ic"><${Ic} n="video" size=${30} sw=${1.6}/></span><h3>Video-Antwort bekommen</h3><p className="muted">Dein Trainer nimmt ein Video auf und sagt dir, was ihm auffällt: was schon gut ist, was du ändern solltest und wie du es übst.</p></li>
      </ol>
    </div></section>

    <section className="sec" id="preise"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">Preise</p><h2>Ein Schlag, eine Video-Antwort</h2></div><p className="muted">Du zahlst pro Einschätzung, mit PayPal, Apple Pay, Google Pay, Kreditkarte oder Guthaben. Nimmt kein Coach an, bekommst du dein Geld zurück.</p></div>
      <div className="tiers">
        ${LEVELS.map(t => html`<div key=${t.id} className=${'tier rv' + (t.id === 'B' ? ' feat' : '')}>
          ${t.id === 'B' && html`<span className="tag">Beliebt</span>`}
          <p className="label">Einschätzung vom</p>
          <h3>${t.name}</h3>
          <p className="tier-ex">${t.ex}</p>
          <p className="price"><b className="num">${fmtEUR(t.price)}</b><span>pro Einschätzung</span></p>
          <ul>
            <li><${Ic} n="check" size=${16}/>Persönliche Video-Antwort</li>
            <li><${Ic} n="check" size=${16}/>Antwort in höchstens 72 Stunden</li>
            <li><${Ic} n="check" size=${16}/>Übungen für dein Training</li>
          </ul>
          <button className=${'btn ' + (t.id === 'B' ? 'volt' : 'pri')} onClick=${() => go('submit', {tier:t.id})}>Vormerken</button>
        </div>`)}
      </div>
      <div className="premium rv"><span className="pill dark">Premium</span><b>Ex-Profis</b><span className="muted">Ehemalige Tour-Spieler:innen schauen auf deine Technik. Ab ${fmtEUR(tierById('P').price)}, buchbar über „Coach selbst wählen“.</span></div>
      <p className="note">Alle Preise inkl. MwSt.</p>
    </div></section>

    <section className="sec alt"><div className="wrap">
      <div className="sec-h rv"><div><p className="label">Coaches</p><h2>So sehen Coach-Profile aus</h2></div><button className="btn" onClick=${() => go('coaches')}>Alle Profile<${Ic} n="arrow" size=${18}/></button></div>
      <p className="ex-banner rv">Die Profile unten sind fiktive Beispiele. Die echten Coaches stellen sich zum Start hier vor.</p>
      <div className="cgrid">${COACHES.slice(0, 4).map(c => html`<${CoachCard} key=${c.id} c=${c} reveal onOpen=${() => go('coach', c.id)}/>`)}</div>
    </div></section>

    <section className="sec" id="faq"><div className="wrap faq-wrap">
      <div className="rv"><p className="label">Fragen</p><h2>Gut zu wissen</h2></div>
      <div className="faq rv">${FAQ.map(([q, a]) => html`<details key=${q} open=${a === 'guide' || undefined}><summary>${q}<${Ic} n="plus" size=${18}/></summary>${a === 'guide' ? html`<${FilmAnswer}/>` : html`<p>${a}</p>`}</details>`)}</div>
    </div></section>

    <section className="coach-band"><div className="wrap">
      <div><p className="label dark-label">Für Trainer:innen</p><h2>Du bist Tennistrainer:in?</h2><p>Nimm Video-Antworten auf, wann und wo du willst, und verdien pro Antwort bis zu ${fmtEUR(window.MSC.payout(29))}.</p></div>
      <a className="btn volt lg" href="coach/">Zum Coach-Bereich<${Ic} n="arrow"/></a>
    </div></section>
  </div>`;
}

function CoachCard({c, onOpen, example = true, reveal}) {
  const t = tierById(c.tier);
  return html`<button className=${'ccard' + (reveal ? ' rv' : '')} onClick=${onOpen}>
    <span className="ph"><${Portrait} c=${c}/>${example && html`<${ExBadge}/>`}</span>
    <span className="bd">
      <span className="pill">${t.short}</span>
      <b className="nm">${c.name}</b>
      <span className="meta">${c.license}</span>
      <span className="meta"><${Ic} n="pin" size=${14}/>${c.club}${c.city ? ', ' + c.city : ''}</span>
      <span className="meta"><${Stars} v=${c.rating}/><b>${fmtNum(c.rating)}</b><span>(${c.reviews})</span></span>
    </span>
    <span className="ft"><span><span className="muted">Video-Antwort </span><b className="num">${fmtEUR(t.price)}</b></span><span className="muted"><${Ic} n="clock" size=${14}/> ~${c.resp} Std.</span></span>
  </button>`;
}

/* ---------- Upload in vier Schritten ---------- */
const PAY = [['paypal', 'PayPal'], ['apple', 'Apple Pay'], ['google', 'Google Pay'], ['card', 'Kreditkarte']];
const PAYMARK = {paypal:'PayPal', apple:'Apple Pay', google:'G Pay', card:'Visa · MC', balance:'€'};
const PayMark = ({k}) => html`<span className=${'paymark pm-' + k} aria-hidden="true">${PAYMARK[k]}</span>`;
function Submit({param, go, requireLogin, addRequest, balance, pay, openTopUp}) {
  const pre = param || {};
  const preCoach = pre.coach ? coachById(pre.coach) : null;
  const [step, setStep] = useState(1);
  const [sport, setSport] = useState(pre.sport || (preCoach ? preCoach.sports[0] : 'tennis'));
  const [stroke, setStroke] = useState(pre.stroke || null);
  const [tierF, setTierF] = useState('');
  const [method, setMethod] = useState('paypal');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [fileErr, setFileErr] = useState('');
  const [over, setOver] = useState(false);
  const [note, setNote] = useState('');
  const [mode, setMode] = useState(preCoach ? 'coach' : 'tier');
  const [tier, setTier] = useState(pre.tier || 'B');
  const [minStars, setMinStars] = useState(0);
  const [coachId, setCoachId] = useState(preCoach ? preCoach.id : null);
  const [done, setDone] = useState(null);
  const s = sportById(sport);
  const coach = coachId ? coachById(coachId) : null;
  const price = mode === 'coach' && coach ? tierById(coach.tier).price : tierById(tier).price;
  const fitCoaches = COACHES.filter(c => c.sports.includes(sport) && c.rating >= minStars && (!tierF || c.tier === tierF))
    .sort((x, y) => TIER_ORDER.indexOf(x.tier) - TIER_ORDER.indexOf(y.tier) || y.rating - x.rating);
  const lowBalance = method === 'balance' && balance < price;
  useEffect(() => { window.scrollTo(0, 0); }, [step]);
  useEffect(() => { if (coach && !coach.sports.includes(sport)) setCoachId(null); }, [sport]);
  const takeFile = f => {
    if (!f) return;
    if (!/^video\//.test(f.type)) { setFileErr('Das ist kein Video. Bitte wähl eine Videodatei, zum Beispiel MP4 oder MOV.'); return; }
    if (f.size > 1024 * 1024 * 1024) { setFileErr('Das Video ist größer als 1 GB. Bitte kürz es auf höchstens 2 Minuten.'); return; }
    setFileErr(''); if (url) URL.revokeObjectURL(url); setFile(f); setUrl(URL.createObjectURL(f));
  };
  const canNext = step === 1 ? !!stroke : step === 2 ? !!file : step === 3 ? (mode === 'tier' || !!coach) : true;
  const order = () => requireLogin(() => {
    if (lowBalance) return;
    pay(method, price);
    const r = {method, id:'r' + Date.now(), sport, stroke, coach: mode === 'coach' ? coachId : null, tier: mode === 'coach' ? coach.tier : tier, price, minStars, status:'open', date:new Date().toLocaleDateString('de-DE'), note, url};
    addRequest(r); setDone(r);
  });
  const restart = () => { setDone(null); setStep(1); setStroke(null); setFile(null); setUrl(null); setNote(''); };
  if (done) return html`<div className="wrap page"><div className="success">
    <span className="ok-ring"><${Ic} n="check" size=${34} sw=${2.4}/></span>
    <h1>Dein Video ist raus</h1>
    <p className="muted">${done.coach ? `${coachById(done.coach).name} hat deine Anfrage bekommen.` : `Coaches der Stufe ${tierById(done.tier).name}${done.minStars ? ` mit mindestens ${fmtNum(done.minStars)} Sternen` : ''} sehen jetzt deine Anfrage.`} Sobald deine Video-Antwort da ist, bekommst du eine E-Mail.</p>
    <p className="muted small">${done.method === 'balance' ? `${fmtEUR(done.price)} wurden von deinem Guthaben abgebucht.` : `Bezahlt mit ${PAY.find(x => x[0] === done.method)[1]}.`} Nimmt innerhalb von 72 Stunden kein Coach an, bekommst du den Betrag automatisch zurück.</p>
    <p className="ex-banner">Vorschau: Diese Bestellung ist eine Demo. Es wurde nichts berechnet und dein Video hat dein Gerät nicht verlassen.</p>
    <div className="row-btns"><button className="btn pri" onClick=${() => go('mine')}>Zu meinen Videos</button><button className="btn" onClick=${restart}>Noch einen Schlag senden</button></div>
  </div></div>`;
  const titles = ['', 'Welcher Schlag?', 'Dein Video', 'Wer schaut sich deinen Schlag an?', 'Prüfen und abschicken'];
  return html`<div className="wrap page narrow">
    <div className="wiz-h">
      <p className="label">Schritt ${step} von 4${preCoach ? ' · Coach: ' + preCoach.name : ''}</p>
      <h1>${titles[step]}</h1>
      <div className="prog" aria-hidden="true">${[1, 2, 3, 4].map(i => html`<i key=${i} className=${i < step ? 'on' : i === step ? 'cur' : ''}></i>`)}</div>
    </div>

    ${step === 1 && html`<div>
      ${SPORTS.length > 1 && html`<div className="seg sports" role="group" aria-label="Sportart">${SPORTS.filter(x => !preCoach || preCoach.sports.includes(x.id)).map(x => html`<button key=${x.id} className=${x.id === sport ? 'on' : ''} aria-pressed=${x.id === sport} onClick=${() => { setSport(x.id); setStroke(null); }}><i style=${{background:x.color}}></i>${x.name}</button>`)}</div>`}
      <div className="strokes" role="radiogroup" aria-label="Schlag auswählen">
        ${s.strokes.map(([id, name, icon]) => html`<button key=${id} role="radio" aria-checked=${stroke === id} className=${'stroke' + (stroke === id ? ' on' : '')} onClick=${() => setStroke(id)}><${StrokeIcon} k=${icon}/><span>${name}</span></button>`)}
      </div>
    </div>`}

    ${step === 2 && html`<div>
      ${!url ? html`<label className=${'drop' + (over ? ' over' : '')} onDragOver=${e => { e.preventDefault(); setOver(true); }} onDragLeave=${() => setOver(false)} onDrop=${e => { e.preventDefault(); setOver(false); takeFile(e.dataTransfer.files[0]); }}>
          <input id="video-in" type="file" accept="video/*" onChange=${e => takeFile(e.target.files[0])} aria-label="Video auswählen"/>
          <span className="drop-ic"><${Ic} n="upload" size=${28}/></span>
          <b>Video auswählen oder hierher ziehen</b>
          <span className="muted">Aus der Galerie wählen oder direkt filmen · höchstens 2 Minuten</span>
        </label>`
      : html`<div className="vprev-wrap">
          <div className="vprev"><video src=${url} controls playsInline></video></div>
          <div className="vprev-ft"><span className="file"><span className="pill ok"><${Ic} n="check" size=${14}/>Bereit</span>${file.name}</span>
            <button className="btn sm" onClick=${() => { URL.revokeObjectURL(url); setUrl(null); setFile(null); }}>Anderes Video</button></div>
        </div>`}
      ${fileErr && html`<p className="err" role="alert">${fileErr}</p>`}
      <p className="note"><${Ic} n="lock" size=${14}/>Vorschau: Dein Video bleibt auf deinem Gerät und wird nicht hochgeladen.</p>
      <div className="tips">
        <div className="tip"><span className="tip-ic"><${PhoneFrameIcon}/></span><span><b>Komplett im Bild</b>Handy quer aufs Stativ, du mit Schläger von Kopf bis Fuß im Display.</span></div>
        <div className="tip"><span className="tip-ic"><${TopDown}/></span><span><b>Rundherum filmen</b>15 Schläge: 5 von der Seite, 5 von hinten, 5 von der anderen Seite.</span></div>
      </div>
      <${FilmGuide} compact/>
      <div className="field"><label htmlFor="note-in">Worauf soll der Coach achten? (optional)</label><textarea id="note-in" className="inp" maxLength="500" value=${note} onChange=${e => setNote(e.target.value)} placeholder="Zum Beispiel: Mein Ball fliegt oft ins Netz, wenn ich Druck mache."></textarea></div>
    </div>`}

    ${step === 3 && html`<div className="stack">
      <div className="seg" role="group" aria-label="Auswahl"><button className=${mode === 'tier' ? 'on' : ''} aria-pressed=${mode === 'tier'} onClick=${() => setMode('tier')}>Nach Level</button><button className=${mode === 'coach' ? 'on' : ''} aria-pressed=${mode === 'coach'} onClick=${() => setMode('coach')}>Coach selbst wählen</button></div>
      ${mode === 'tier' ? html`<div className="stack">
        <div className="pick-tiers">${LEVELS.map(t => html`<button key=${t.id} className=${'pt' + (tier === t.id ? ' on' : '')} aria-pressed=${tier === t.id} onClick=${() => setTier(t.id)}>
          <span className="radio" aria-hidden="true"></span>
          <span className="pt-t"><b>${t.name}</b><span className="muted">${t.ex}</span></span>
          <b className="num pt-p">${fmtEUR(t.price)}</b></button>`)}</div>
        <div className="filter-row"><span>Nur Coaches mit</span>
          <div className="seg sm">${[[0, 'Alle'], [4, '4+ ★'], [4.5, '4,5+ ★'], [4.8, '4,8+ ★']].map(([v, l]) => html`<button key=${v} className=${minStars === v ? 'on' : ''} aria-pressed=${minStars === v} onClick=${() => setMinStars(v)}>${l}</button>`)}</div></div>
        <p className="muted small">Der erste passende Coach übernimmt deine Anfrage und schickt dir seine Video-Antwort.</p>
      </div>` : html`<div className="stack">
        <div className="filter-row"><span>Level</span><div className="seg sm" role="group" aria-label="Level filtern">${[['', 'Alle'], ['C', 'DTB C'], ['B', 'DTB B'], ['A', 'DTB A'], ['P', 'Ex-Profi']].map(([v, l]) => html`<button key=${v} className=${tierF === v ? 'on' : ''} aria-pressed=${tierF === v} onClick=${() => setTierF(v)}>${l}</button>`)}</div></div>
        <div className="filter-row"><span>Bewertung</span><div className="seg sm">${[[0, 'Alle'], [4.5, '4,5+ ★'], [4.8, '4,8+ ★']].map(([v, l]) => html`<button key=${v} className=${minStars === v ? 'on' : ''} aria-pressed=${minStars === v} onClick=${() => setMinStars(v)}>${l}</button>`)}</div></div>
        <p className="note">Beispielprofile: Die echten Coaches folgen zum Start.</p>
        <div className="mc-list">${fitCoaches.length ? fitCoaches.map(c => html`<button key=${c.id} className=${'mini-coach' + (coachId === c.id ? ' on' : '')} aria-pressed=${coachId === c.id} onClick=${() => setCoachId(c.id)}>
          <span className="av"><${Portrait} c=${c} round/></span>
          <span className="mc-t"><b>${c.name}</b><span className="muted">${tierById(c.tier).short} · ${c.license}</span><span className="mc-r"><${Stars} v=${c.rating} size=${12}/>${fmtNum(c.rating)}</span></span>
          <b className="num">${fmtEUR(tierById(c.tier).price)}</b>
        </button>`) : html`<div className="empty">Für diese Auswahl gibt es keinen Coach. Probier einen anderen Filter.</div>`}</div>
        ${coach && html`<button className="btn sm" style=${{justifySelf:'start'}} onClick=${() => go('coach', coach.id)}>Profil von ${coach.name} ansehen</button>`}
      </div>`}
    </div>`}

    ${step === 4 && html`<div className="sum">
      <div className="card pad">
        <div className="sum-h"><span className="tile"><${StrokeIcon} k=${strokeOf(sport, stroke).icon}/></span><div><b>${strokeOf(sport, stroke).name}</b><span className="muted">${s.name}</span></div></div>
        <dl className="rows">
          <div><dt>Video</dt><dd className="wrapany">${file ? file.name : '-'}</dd></div>
          <div><dt>Antwort von</dt><dd>${mode === 'coach' && coach ? coach.name : tierById(tier).name + (minStars ? ` · ab ${fmtNum(minStars)} ★` : '')}</dd></div>
          <div><dt>Format</dt><dd>Video-Antwort</dd></div>
          <div><dt>Lieferzeit</dt><dd>höchstens 72 Std.</dd></div>
          ${note && html`<div><dt>Hinweis</dt><dd className="wrapany">${note}</dd></div>`}
          <div className="total"><dt>Gesamt</dt><dd className="num">${fmtEUR(price)}</dd></div>
        </dl>
        <p className="note">inkl. MwSt.</p>
      </div>
      <div className="card pad order">
        <h3>Bezahlen</h3>
        <div className="pay-list" role="radiogroup" aria-label="Zahlungsart">
          ${[['balance', 'Guthaben'], ...PAY].map(([k, l]) => html`<button key=${k} role="radio" aria-checked=${method === k} className=${'pay' + (method === k ? ' on' : '')} onClick=${() => setMethod(k)}>
            <span className="radio" aria-hidden="true"></span><span className="pay-l">${l}${k === 'balance' && html`<small className="muted">Verfügbar: ${fmtEUR(balance)}</small>`}</span><${PayMark} k=${k}/></button>`)}
        </div>
        ${lowBalance && html`<p className="err" role="alert">Dein Guthaben reicht nicht. <button className="lnk-btn" onClick=${openTopUp}>Guthaben aufladen</button></p>`}
        <button className="btn volt lg" disabled=${lowBalance} onClick=${order}>${fmtEUR(price)} bezahlen und abschicken</button>
        <p className="small"><${Ic} n="shield" size=${16}/>Nimmt innerhalb von 72 Stunden kein Coach deine Anfrage an, bekommst du den vollen Betrag automatisch zurück.</p>
        <p className="ex-banner">Vorschau: Die Bezahlung ist noch nicht aktiv. Du probierst den Ablauf aus, ohne dass etwas berechnet wird.</p>
      </div>
    </div>`}

    <div className="wiz-foot">
      <button className="btn ghost" onClick=${() => step > 1 ? setStep(step - 1) : go('home')}><${Ic} n="back" size=${18}/>${step > 1 ? 'Zurück' : 'Abbrechen'}</button>
      ${step < 4 && html`<div className="wf-r">
        ${step >= 3 && html`<span className="num wf-p">${fmtEUR(price)}</span>`}
        <button className="btn pri lg" disabled=${!canNext} onClick=${() => setStep(step + 1)}>Weiter<${Ic} n="arrow" size=${18}/></button></div>`}
    </div>
  </div>`;
}

/* ---------- Coach-Verzeichnis und Profil ---------- */
function Coaches({go}) {
  const [q, setQ] = useState(''); const [sp, setSp] = useState(''); const [tr, setTr] = useState(''); const [ms, setMs] = useState(0);
  const list = COACHES.filter(c => (!sp || c.sports.includes(sp)) && (!tr || c.tier === tr) && c.rating >= ms && (!q || (c.name + c.club + c.city).toLowerCase().includes(q.toLowerCase())));
  return html`<div className="wrap page">
    <div className="page-h"><div><p className="label">Coaches</p><h1>Finde deinen Coach</h1></div><p className="muted">${list.length} ${list.length === 1 ? 'Profil' : 'Profile'}</p></div>
    <p className="ex-banner">Vorschau: Alle Profile auf dieser Seite sind fiktive Beispiele. Zum Start findest du hier echte, von uns geprüfte Coaches.</p>
    <div className="filters">
      <label className="search"><${Ic} n="search" size=${18}/><input id="q-in" className="inp" placeholder="Name, Verein oder Stadt" aria-label="Suche" value=${q} onChange=${e => setQ(e.target.value)}/></label>
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
    <button className="btn ghost sm back" onClick=${() => go('coaches')}><${Ic} n="back" size=${16}/>Alle Coaches</button>
    <p className="ex-banner">Beispielprofil: ${c.name} ist eine fiktive Person. So wird ein Coach-Profil zum Start aussehen.</p>
    <div className="prof">
      <div className="prof-main">
        <div className="prof-top">
          <div className="prof-ph"><${Portrait} c=${c}/></div>
          <div className="prof-id">
            <div className="pills"><span className="pill">${t.name}</span><span className="pill ok"><${Ic} n="shield" size=${14}/>Lizenz geprüft</span>${c.sports.map(s => html`<span key=${s} className="pill">${sportById(s).name}</span>`)}</div>
            <h1>${c.name}</h1>
            <p className="lic">${c.license}</p>
            <p className="muted where"><${Ic} n="pin" size=${16}/>Heimverein: ${c.club}, ${c.city}</p>
          </div>
        </div>
        <div className="kpis">
          <div><b className="num">${fmtNum(c.rating)}</b><small>${c.reviews} Bewertungen</small></div>
          <div><b className="num">~${c.resp} Std.</b><small>Antwortzeit</small></div>
          <div><b className="num">${c.reviews * 3 + 12}</b><small>Video-Antworten</small></div>
          <div><b className="num">${c.since}</b><small>Coach seit</small></div>
        </div>
        <div className="blk"><h3>Über mich</h3><p>${c.bio}</p><div className="pills">${c.focus.map(f => html`<span key=${f} className="pill">${f}</span>`)}</div></div>
        <div className="blk"><h3>Zertifikate und Lizenzen</h3>${c.certs.map(x => html`<div key=${x} className="cert"><${Ic} n="doc" size=${22}/><span>${x}</span><span className="pill ok"><${Ic} n="check" size=${13}/>geprüft</span></div>`)}</div>
        ${c.awards.length > 0 && html`<div className="blk"><h3>Auszeichnungen</h3>${c.awards.map(a => html`<div key=${a} className="cert"><${Ic} n="award" size=${22}/><span>${a}</span></div>`)}</div>`}
        <div className="blk"><div className="blk-h"><h3>Bewertungen (Beispiele)</h3><span className="rt"><${Stars} v=${c.rating}/><b>${fmtNum(c.rating)}</b></span></div>
          <p className="note">Bewerten können nur Spieler:innen, die bei diesem Coach eine Video-Antwort gekauft haben.</p>
          ${REVIEWS.map((r, i) => html`<div key=${i} className="rev"><div className="rev-h"><span><b>${r.n}</b> <span className="muted">· ${r.st}</span></span><span className="rt"><${Stars} v=${r.s} size=${12}/><span className="muted">${r.d}</span></span></div><p>${r.t}</p></div>`)}
        </div>
      </div>
      <aside className="prof-side">
        <div className="book card pad">
          <p className="label">Video-Antwort</p>
          <p className="price"><b className="num">${fmtEUR(t.price)}</b><span>pro Schlag, inkl. MwSt.</span></p>
          <ul><li><${Ic} n="clock" size=${16}/>Antwort meist in ~${c.resp} Std., höchstens 72 Std.</li><li><${Ic} n="video" size=${16}/>Persönliches Video von ${first}</li></ul>
          <button className="btn volt lg" onClick=${() => go('submit', {coach:c.id})}><${Ic} n="bell" size=${18}/>Vormerken: Video an ${first} ab ${LAUNCH}</button>
        </div>
        <div className="blk"><h3>Sprachen</h3><div className="pills">${c.langs.map(l => html`<span key=${l} className="pill">${l}</span>`)}</div></div>
      </aside>
    </div>
    <div className="sticky-cta"><button className="btn volt lg" onClick=${() => go('submit', {coach:c.id})}><${Ic} n="bell"/>Vormerken · ab ${fmtEUR(t.price)}</button></div>
  </div>`;
}

/* ---------- Meine Videos ---------- */
function StatusPill({s}) {
  if (s === 'done') return html`<span className="pill ok"><${Ic} n="check" size=${13}/>Antwort da</span>`;
  if (s === 'progress') return html`<span className="pill warn"><${Ic} n="clock" size=${13}/>Coach arbeitet</span>`;
  return html`<span className="pill">Wartet auf Coach</span>`;
}
function LoginGate({openLogin}) {
  return html`<div className="wrap page"><div className="empty big">
    <span className="drop-ic"><${Ic} n="lock" size=${26}/></span>
    <b>Bitte einloggen</b>
    <p className="muted">Hier findest du alle Videos, die du eingeschickt hast, und die Video-Antworten deiner Coaches.</p>
    <button className="btn pri" onClick=${openLogin}>Login</button>
  </div></div>`;
}
function Wallet({balance, openTopUp}) {
  return html`<div className="wallet card pad">
    <span className="drop-ic"><${Ic} n="euro" size=${22}/></span>
    <span className="wl-t"><span className="label">Dein Guthaben</span><b className="num">${fmtEUR(balance)}</b></span>
    <button className="btn pri" onClick=${openTopUp}><${Ic} n="plus" size=${18}/>Aufladen</button>
  </div>`;
}
function TopUp({close, done}) {
  const [amt, setAmt] = useState(50); const [m, setM] = useState('paypal');
  return html`<${Modal} label="Guthaben aufladen" close=${close}>
    <h2 className="m-title">Guthaben aufladen</h2>
    <p className="muted">Lade einmal auf und bezahl jede Einschätzung mit einem Klick. Erstattungen landen wieder auf deinem Guthaben.</p>
    <div className="seg amt" role="group" aria-label="Betrag">${[20, 50, 100].map(v => html`<button key=${v} className=${amt === v ? 'on' : ''} aria-pressed=${amt === v} onClick=${() => setAmt(v)}><span className="num">${fmtEUR(v)}</span></button>`)}</div>
    <div className="pay-list" role="radiogroup" aria-label="Zahlungsart">${PAY.map(([k, l]) => html`<button key=${k} role="radio" aria-checked=${m === k} className=${'pay' + (m === k ? ' on' : '')} onClick=${() => setM(k)}><span className="radio" aria-hidden="true"></span><span className="pay-l">${l}</span><${PayMark} k=${k}/></button>`)}</div>
    <button className="btn volt lg" onClick=${() => done(amt)}>${fmtEUR(amt)} aufladen</button>
    <p className="ex-banner">Vorschau: Es wird nichts berechnet. Das Guthaben gilt nur, bis du die Seite neu lädst.</p>
  <//>`;
}
function Mine({requests, go, openReq, balance, openTopUp}) {
  return html`<div className="wrap page">
    <div className="page-h"><div><p className="label">Dein Bereich</p><h1>Meine Videos</h1></div><button className="btn volt" onClick=${() => go('submit')}><${Ic} n="plus" size=${18}/>Neuer Schlag</button></div>
    <${Wallet} balance=${balance} openTopUp=${openTopUp}/>
    <p className="ex-banner">Vorschau: Die ersten beiden Einträge sind Beispiele, damit du siehst, wie eine fertige Video-Antwort aussieht.</p>
    ${requests.length ? html`<div className="rlist">${requests.map(r => {
      const st = strokeOf(r.sport, r.stroke); const c = r.coach && coachById(r.coach);
      return html`<button key=${r.id} className="ritem" onClick=${() => openReq(r)}>
        <span className=${'tile' + (r.status === 'done' ? ' done' : '')}><${StrokeIcon} k=${st.icon}/></span>
        <span className="ri-t"><b>${st.name}</b><span className="sub">${sportById(r.sport).name} · ${c ? c.name : tierById(r.tier).name} · ${r.date}</span></span>
        <span className="ri-r"><${StatusPill} s=${r.status}/><span className="num">${fmtEUR(r.price)}</span></span>
      </button>`; })}</div>`
    : html`<div className="empty"><b>Noch keine Videos.</b><p className="muted">Lade deinen ersten Schlag hoch und bekomm eine Video-Antwort von einem echten Coach.</p><button className="btn volt" onClick=${() => go('submit')}>Ersten Schlag hochladen</button></div>`}
  </div>`;
}
function ReqDetail({r, close, rate, go}) {
  const st = strokeOf(r.sport, r.stroke); const c = r.coach && coachById(r.coach);
  const [stars, setStars] = useState(0); const [txt, setTxt] = useState('');
  return html`<${Modal} label=${st.name} wide close=${close}>
    <p className="label">${sportById(r.sport).name} · ${r.date}</p>
    <h2 className="m-title">${st.name}</h2>
    <div className="m-meta"><${StatusPill} s=${r.status}/>${c && html`<button className="pill link" onClick=${() => { close(); go('coach', c.id); }}>${c.name} · ${c.license}</button>`}</div>
    ${r.status !== 'done' ? html`<div className="stack">
        <${VideoFrame} sport=${r.sport} src=${r.url} label="Dein Video" at="0:00" dur="0:24" progress=${0}/>
        <p className="muted">${r.status === 'progress' ? 'Dein Coach schaut sich dein Video gerade an und nimmt seine Antwort auf. Du bekommst eine E-Mail, sobald sie da ist.' : 'Deine Anfrage ist für passende Coaches sichtbar. Sobald jemand sie übernimmt, siehst du hier, wer es ist.'}</p>
      </div>`
    : html`<div className="stack">
        <${VideoFrame} sport=${r.sport} marks coach=${c} chapters=${r.answer.chapters} dur=${r.answer.dur} label=${'Video-Antwort von ' + (c ? c.name : 'deinem Coach')}/>
        <p className="note">Vorschau: Beispiel einer Video-Antwort. Zum Start spielt hier das echte Video deines Coaches.</p>
        ${r.rated ? html`<div className="pill ok" style=${{justifySelf:'start'}}><${Ic} n="check" size=${14}/>Danke für deine Bewertung</div>`
        : html`<div className="card pad stack sm-gap"><b>Wie hilfreich war die Video-Antwort?</b>
            <div className="rate" role="radiogroup" aria-label="Sterne vergeben">${[1, 2, 3, 4, 5].map(i => html`<button key=${i} role="radio" aria-checked=${stars === i} onClick=${() => setStars(i)} aria-label=${i + (i === 1 ? ' Stern' : ' Sterne')}><svg viewBox="0 0 24 24" fill=${i <= stars ? 'var(--star)' : 'var(--line)'}><path d=${window.MSC.I.star}/></svg></button>`)}</div>
            <textarea id="rev-in" className="inp" maxLength="600" placeholder="Was hat dir geholfen? (optional)" value=${txt} onChange=${e => setTxt(e.target.value)}></textarea>
            <button className="btn pri" disabled=${!stars} style=${{justifySelf:'start'}} onClick=${() => rate(r.id)}>Bewertung abschicken</button></div>`}
      </div>`}
  <//>`;
}

/* ---------- Login (Vorschau: nur im Browser) ---------- */
function Login({close, done}) {
  const [email, setEmail] = useState(''); const [err, setErr] = useState('');
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('Bitte gib eine gültige E-Mail-Adresse ein.'); return; }
    done({name: email.split('@')[0]});
  };
  return html`<${Modal} label="Login" close=${close}>
    <div className="m-logo"><${Logo}/></div>
    <h2 className="m-title center">Einloggen</h2>
    <p className="muted center">Ohne Passwort: Wir schicken dir einen Login-Link per E-Mail.</p>
    <form onSubmit=${submit} noValidate className="form">
      <div className="field"><label htmlFor="mail-in">E-Mail-Adresse</label>
        <input id="mail-in" className="inp" type="email" autoComplete="email" placeholder="du@beispiel.de" value=${email} onChange=${e => { setEmail(e.target.value); setErr(''); }}/></div>
      ${err && html`<p className="err" role="alert">${err}</p>`}
      <button className="btn pri lg" type="submit">Weiter</button>
    </form>
    <p className="ex-banner">Vorschau: Es wird keine E-Mail verschickt und nichts gespeichert. Du bist sofort eingeloggt, bis du die Seite neu lädst.</p>
    <p className="center small">Du bist Coach? <a href="coach/#/login">Zum Coach-Login</a></p>
  <//>`;
}

/* ---------- App ---------- */
/* ---------- Warteliste: Spieler:innen lassen sich bis zum Start vormerken ---------- */
const SB = {url:'https://htibyxvxryraooarkwjg.supabase.co', key:'sb_publishable_Jin5STAwVyaIRaXdqAjZEQ_ttqap1Ro'};
const CONSENT = 'Ich möchte per E-Mail benachrichtigt werden, sobald tennistrainer.app startet. Ich kann mich jederzeit wieder austragen.';
function Waitlist({param}) {
  const [email, setEmail] = useState(''); const [name, setName] = useState(''); const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false); const [err, setErr] = useState(''); const [done, setDone] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, [done]);
  const send = async e => {
    e.preventDefault(); setErr('');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setErr('Bitte gib eine gültige E-Mail-Adresse an.');
    if (!ok) return setErr('Bitte bestätige, dass wir dich benachrichtigen dürfen.');
    setBusy(true);
    try {
      const r = await fetch(SB.url + '/rest/v1/rpc/join_waitlist', {method:'POST', headers:{apikey:SB.key, 'Content-Type':'application/json'},
        body:JSON.stringify({p_email:email.trim(), p_first_name:name.trim(), p_consent:CONSENT, p_source:param && (param.coach || param.tier || param.stroke) || 'web'})});
      if (!r.ok) throw new Error();
      setDone(true);
    } catch (x) { setErr('Das hat nicht geklappt. Bitte versuch es gleich noch einmal.'); }
    setBusy(false);
  };
  if (done) return html`<div className="wrap page narrow"><div className="success">
    <span className="ok-ring"><${Ic} n="check" size=${34} sw=${2.4}/></span>
    <h1>Du bist vorgemerkt</h1>
    <p>Sobald tennistrainer.app im ${LAUNCH} startet, schreiben wir dir an <b>${email.trim()}</b>. Dann kannst du dein erstes Video hochladen.</p>
    <div className="row-btns"><a className="btn pri" href="#/">Zur Startseite</a></div>
  </div></div>`;
  return html`<div className="wrap page narrow">
    <div className="wiz-h"><p className="label">Start im ${LAUNCH}</p><h1>Lass dich vormerken</h1>
      <p className="lead-s">Die App für iPhone und Android startet im ${LAUNCH}. Videos hochladen kannst du ab dem Start. Trag dich ein, dann sagen wir dir Bescheid, sobald es losgeht.</p></div>
    <form className="form card pad" onSubmit=${send} noValidate>
      <div className="field"><label htmlFor="wl-mail">E-Mail-Adresse</label><input id="wl-mail" className="inp" type="email" autoComplete="email" value=${email} onChange=${e => { setEmail(e.target.value); setErr(''); }}/></div>
      <div className="field"><label htmlFor="wl-name">Vorname (optional)</label><input id="wl-name" className="inp" autoComplete="given-name" value=${name} onChange=${e => setName(e.target.value)}/></div>
      <label className="check"><input type="checkbox" checked=${ok} onChange=${e => { setOk(e.target.checked); setErr(''); }}/><span>${CONSENT} Mehr dazu in der <a href="datenschutz/#warteliste">Datenschutzerklärung</a>.</span></label>
      ${err && html`<p className="err" role="alert">${err}</p>`}
      <button className="btn volt lg" type="submit" disabled=${busy}>${busy ? 'Wird eingetragen …' : 'Jetzt vormerken'}</button>
    </form>
    <p className="muted small" style=${{marginTop:'16px'}}>Du bist Trainer:in? <a href="coach/#/registrieren">Registrier dich schon jetzt als Coach.</a></p>
  </div>`;
}
function App() {
  const route = useHashRoute(parseHash);
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [requests, setRequests] = useState(SEED_REQ);
  const [openR, setOpenR] = useState(null);
  const [balance, setBalance] = useState(0);
  const [topUp, setTopUp] = useState(false);
  const openTopUp = () => requireLogin(() => setTopUp(true));
  const pay = (m, amount) => { if (m === 'balance') setBalance(b => Math.round((b - amount) * 100) / 100); };
  const [toast, toastEl] = useToast();
  const {view, param, anchor} = route;
  const go = (v, p) => navigate(toHash(v, p), v === 'home' ? p : null);
  const requireLogin = cb => { if (user) cb(); else setLogin({after:cb}); };
  const openLogin = () => setLogin({});
  const logout = () => { setUser(null); toast('Abgemeldet'); go('home'); };
  const afterLogin = u => { const after = login && login.after; setUser(u); setLogin(null); toast('Eingeloggt als ' + u.name); if (after) setTimeout(after, 0); };
  const rate = id => { setRequests(requests.map(r => r.id === id ? {...r, rated:true} : r)); setOpenR(o => o && {...o, rated:true}); toast('Danke für deine Bewertung'); };

  let page;
  if (view === 'home') page = html`<${Home} go=${go} anchor=${anchor}/>`;
  else if (view === 'submit') page = html`<${Waitlist} param=${param}/>`;
  else if (view === 'coaches') page = html`<${Coaches} go=${go}/>`;
  else if (view === 'coach') page = html`<${CoachProfile} id=${param} go=${go}/>`;
  else if (view === 'mine') page = user ? html`<${Mine} requests=${requests} go=${go} openReq=${setOpenR} balance=${balance} openTopUp=${openTopUp}/>` : html`<${LoginGate} openLogin=${openLogin}/>`;

  return html`<div className="app">
    <${DemoBar}/>
    <${Header} view=${view} go=${go} user=${user} openLogin=${openLogin} logout=${logout}/>
    <main id="main">${page}</main>
    <${Footer} links=${[['#/so-gehts', "So funktioniert's"], ['#/coaches', 'Coaches'], ['#/preise', 'Preise'], ['#/faq', 'Fragen'], ['coach/', 'Für Coaches']]}/>
    <${TabBar} view=${view} go=${go}/>
    ${login && html`<${Login} close=${() => setLogin(null)} done=${afterLogin}/>`}
    ${topUp && html`<${TopUp} close=${() => setTopUp(false)} done=${a => { setBalance(b => b + a); setTopUp(false); toast(fmtEUR(a) + ' aufgeladen (Demo)'); }}/>`}
    ${openR && html`<${ReqDetail} r=${openR} close=${() => setOpenR(null)} rate=${rate} go=${go}/>`}
    ${toastEl}
  </div>`;
}

mount(App);
})();
