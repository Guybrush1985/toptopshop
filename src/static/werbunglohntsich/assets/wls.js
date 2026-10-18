/* Werbung lohnt sich – App (Startseite, Zuschauer, Werbetreibende, Admin) */
(function () {
  "use strict";
  const api = window.WLS_API;

  /* ---------- Icons (eigene Strich-Icons, 24er Raster) ---------- */
  const ICONS = {
    play: '<path d="M7 4.5v15l13-7.5z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2A3.2 3.2 0 0 0 12 8c-1.8 0-3 1-3 2.2 0 2.9 6 1.6 6 4.5 0 1.2-1.3 2.3-3 2.3a3.4 3.4 0 0 1-3-1.4M12 6v2m0 9v1.5"/>',
    check: '<path d="M4.5 12.5l5 5L19.5 7"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.3 9.3a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.8v.6"/><circle cx="12" cy="17.2" r=".6" fill="currentColor"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    gift: '<rect x="3.5" y="8.5" width="17" height="12" rx="2"/><path d="M3.5 12.5h17M12 8.5v12M12 8.5S10.5 4 8 4.5 6.5 8.5 12 8.5zm0 0s1.5-4.5 4-4 1.5 4-4 4z"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    eye: '<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/>',
    chart: '<path d="M4 20V10m6 10V4m6 16v-7m4 7H3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5"/>',
    bolt: '<path d="M13 2.5L4.5 14H12l-1 7.5L19.5 10H12z"/>',
    sparkle: '<path d="M12 2.5c.6 4.6 2.9 6.9 7.5 7.5-4.6.6-6.9 2.9-7.5 7.5-.6-4.6-2.9-6.9-7.5-7.5 4.6-.6 6.9-2.9 7.5-7.5z" fill="currentColor"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 16l-4-4 4-4M6 12h10"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    heart: '<path d="M12 20s-8-4.6-8-10.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7C20 15.4 12 20 12 20z"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2.5l2.2 11h10.6L20.5 7H7"/>',
    fuel: '<path d="M4 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M3 20h12M6.5 8h5M14 9l3 0 2 2v6a1.5 1.5 0 0 1-3 0v-3h-2"/>',
    food: '<path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 21V3c-2 0-3.5 2.5-3.5 6S15 13 17 13"/>',
    megaphone: '<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1zM16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/>',
    alert: '<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.3" r=".6" fill="currentColor"/>',
  };
  const icon = (n, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ""}</svg>`;
  const hydrateIcons = (root = document) => root.querySelectorAll("i[data-i]").forEach((el) => { el.outerHTML = icon(el.dataset.i); });

  /* ---------- Helfer ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const num = (n) => Number(n || 0).toLocaleString("de-DE");
  const euro = (cents) => (Number(cents || 0) / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
  const ptsEuro = (p) => euro(Number(p || 0) / 10); // 1 Punkt = 0,1 Cent
  const date = (d) => new Date(d).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const PRICE = { 15: 6, 30: 10, 60: 18 };
  const REWARD = { 15: 25, 30: 40, 60: 70 };
  const STATUS = {
    draft: ["Entwurf", ""], review: ["In Prüfung", "badge-violet"], live: ["Live", "badge-lime"],
    paused: ["Pausiert", "badge-dark"], done: ["Budget verbraucht", "badge-dark"], rejected: ["Abgelehnt", "badge-signal"],
  };
  const statusBadge = (s) => `<span class="badge ${STATUS[s]?.[1] || ""}">${STATUS[s]?.[0] || esc(s)}</span>`;
  const resolveUrl = (u) => (u && !/^https?:/.test(u) ? new URL(u, location.href.split("#")[0]).href : u);

  let toastTimer;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }
  const alertBox = (msg, kind = "err") => `<div class="alert alert-${kind}">${icon(kind === "ok" ? "check" : kind === "info" ? "info" : "alert")}<span>${esc(msg)}</span></div>`;

  /* ---------- Zustand ---------- */
  let me = null;
  async function loadMe() {
    if (!api.loggedIn()) { me = null; return null; }
    try { me = await api.me(); } catch (e) { me = null; if (!e.auth) console.warn(e); }
    return me;
  }

  /* ---------- Navigation ---------- */
  function renderNav(route) {
    const links = $("#nav-links");
    const cur = (r) => (route.startsWith(r) ? ' aria-current="page"' : "");
    let html = "";
    if (!me) {
      html = `<a href="#so-gehts">So geht's</a><a href="#werben">Für Werbetreibende</a><a href="#/login"${cur("#/login")}>Login</a>
        <a class="btn btn-lime btn-sm" href="#/registrieren">Mitmachen ${icon("arrow")}</a>`;
    } else if (me.role === "viewer") {
      html = `<a href="#/spots"${cur("#/spots")}>Spots</a><a href="#/konto"${cur("#/konto")}>Mein Konto</a>
        ${me.admin ? `<a href="#/admin"${cur("#/admin")}>Admin</a>` : ""}
        <a class="nav-pts" href="#/konto" title="Deine Punkte">${icon("coin")}${num(me.points)}${me.demo_points ? ` <small style="opacity:.6">+${num(me.demo_points)} Demo</small>` : ""}</a>
        <a href="#/logout" aria-label="Abmelden">${icon("logout")}</a>`;
    } else {
      html = `<a href="#/kampagnen"${cur("#/kampagne")}>Kampagnen</a><a href="#/kampagne/neu">Neue Kampagne</a>
        ${me.admin ? `<a href="#/admin"${cur("#/admin")}>Admin</a>` : ""}
        <span class="nav-pts">${icon("megaphone")}${esc(me.company || me.name)}</span>
        <a href="#/logout" aria-label="Abmelden">${icon("logout")}</a>`;
    }
    links.innerHTML = html;
  }
  $(".nav-toggle").addEventListener("click", () => {
    const nav = $("#nav"); const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); $(".nav-toggle").setAttribute("aria-expanded", open);
  });
  document.addEventListener("click", (e) => { if (e.target.closest(".nav-links a")) $("#nav").classList.remove("open"); });

  /* ---------- Parallax & Einblenden ---------- */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let mx = 0, my = 0, ticking = false;
  function parallax() {
    ticking = false;
    if ($("#landing").hidden) return;
    const y = scrollY;
    $$("[data-speed]").forEach((el) => {
      if (el.classList.contains("phone") && innerWidth <= 980) { el.style.transform = ""; return; }
      const sp = parseFloat(el.dataset.speed);
      const tilt = parseFloat(el.dataset.tilt || 0);
      const host = el.closest("section") || document.body;
      const rel = y - host.offsetTop;
      const tx = tilt ? mx * tilt : 0, ty = tilt ? my * tilt : 0;
      const base = el.classList.contains("phone") ? "translateY(-46%) rotate(6deg) " : "";
      el.style.transform = `${base}translate3d(${tx}px, ${rel * sp + ty}px, 0)`;
    });
  }
  const queue = () => { if (!ticking && !reduce) { ticking = true; requestAnimationFrame(parallax); } };
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; queue(); }, { passive: true });

  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .14, rootMargin: "0px 0px -6% 0px" }) : null;
  const observe = (root = document) => $$(".reveal:not(.in)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  /* ---------- Router ---------- */
  const app = $("#app");
  const landing = $("#landing");
  const routes = [
    [/^#\/login$/, viewLogin],
    [/^#\/registrieren(?:\/(werben))?$/, viewRegister],
    [/^#\/logout$/, async () => { await api.logout(); me = null; location.hash = "#/"; }],
    [/^#\/spots$/, guard("viewer", viewSpots)],
    [/^#\/konto$/, guard("viewer", viewWallet)],
    [/^#\/kampagnen$/, guard("advertiser", viewCampaigns)],
    [/^#\/kampagne\/neu$/, guard("advertiser", () => viewEditor(null))],
    [/^#\/kampagne\/([0-9a-f-]{36})\/bearbeiten$/, guard("advertiser", (id) => viewEditor(id))],
    [/^#\/kampagne\/([0-9a-f-]{36})$/, guard("advertiser", viewCampaign)],
    [/^#\/admin$/, guard("admin", viewAdmin)],
  ];
  function guard(role, fn) {
    return async (...args) => {
      if (!me) { sessionStorage.setItem("wls_after", location.hash); location.hash = "#/login"; return; }
      if (role === "admin" ? !me.admin : me.role !== role) { location.hash = home(); return; }
      return fn(...args);
    };
  }
  const home = () => (!me ? "#/" : me.role === "viewer" ? "#/spots" : "#/kampagnen");

  async function route() {
    const h = location.hash || "#/";
    closePlayer();
    if (h === "#/" || h === "#" || !h.startsWith("#/")) {
      renderNav(h);
      landing.hidden = false; app.hidden = true;
      document.title = "Werbung lohnt sich – Werbung schauen, Fragen beantworten, Punkte sammeln";
      if (h.startsWith("#") && h.length > 2 && !h.startsWith("#/")) { const t = document.getElementById(h.slice(1)); t && t.scrollIntoView(); }
      queue(); return;
    }
    landing.hidden = true; app.hidden = false;
    scrollTo(0, 0);
    renderNav(h);
    for (const [re, fn] of routes) {
      const m = h.match(re);
      if (m) {
        app.innerHTML = '<div class="spinner" aria-label="Lädt"></div>';
        try { await fn(...m.slice(1)); }
        catch (e) {
          if (e.auth) { me = null; location.hash = "#/login"; return; }
          app.innerHTML = `<section class="app"><div class="wrap">${alertBox(e.message)}</div></section>`;
        }
        renderNav(h); hydrateIcons(app); requestAnimationFrame(() => $$(".reveal", app).forEach((el) => el.classList.add("in")));
        return;
      }
    }
    location.hash = "#/";
  }
  addEventListener("hashchange", route);

  /* ---------- Login & Registrierung ---------- */
  function authArt(title, text, tone = "dark") {
    return `<div class="auth-art ${tone}">
      <div class="hero-grid"></div>
      <span class="kicker" style="color:var(--lime)">Werbung lohnt sich</span>
      <h1 class="huge" style="margin:20px 0 18px">${title}</h1>
      <p class="lead muted">${text}</p></div>`;
  }
  async function viewLogin() {
    if (me) { location.hash = home(); return; }
    document.title = "Login – Werbung lohnt sich";
    app.innerHTML = `<div class="auth">${authArt('Schön, dass du <span class="hl-lime">da bist</span>.', "Melde dich an, um Spots zu schauen oder deine Kampagnen zu verwalten.")}
      <div class="auth-form"><form class="stack" id="f" novalidate>
        <h2 class="big">Login</h2>
        <div id="msg"></div>
        <label class="field"><span>E-Mail</span><input name="email" type="email" autocomplete="email" required></label>
        <label class="field"><span>Passwort</span><input name="password" type="password" autocomplete="current-password" required></label>
        <button class="btn btn-signal btn-xl" type="submit">Einloggen ${icon("arrow")}</button>
        <p class="muted">Noch kein Konto? <a href="#/registrieren">Jetzt mitmachen</a> oder <a href="#/registrieren/werben">als Werbetreibender starten</a>.</p>
      </form></div></div>`;
    $("#f").addEventListener("submit", async (e) => {
      e.preventDefault(); const f = new FormData(e.target); const btn = e.target.querySelector("button");
      btn.disabled = true;
      try {
        me = await api.login(f.get("email"), f.get("password"));
        const after = sessionStorage.getItem("wls_after"); sessionStorage.removeItem("wls_after");
        location.hash = after || home();
      } catch (err) { $("#msg").innerHTML = alertBox(err.message); btn.disabled = false; }
    });
  }

  async function viewRegister(mode) {
    if (me) { location.hash = home(); return; }
    const adv = mode === "werben";
    document.title = (adv ? "Werbetreibende" : "Mitmachen") + " – Werbung lohnt sich";
    app.innerHTML = `<div class="auth">${adv
      ? authArt('Zahl nur für <span class="hl-lime">echte</span> Aufmerksamkeit.', "Leg dein Konto an, lade deinen Spot hoch und hinterlege die Fragen. Abgerechnet wird nur bei 3 von 3 richtigen Antworten.")
      : authArt('Werbung schauen. <span class="hl-lime">Punkte</span> sammeln.', "Konto anlegen und sofort mit den Demo-Spots loslegen. 100 Demo-Punkte gibt's zum Start.")}
      <div class="auth-form"><form class="stack" id="f" novalidate>
        <h2 class="big">${adv ? "Konto für Werbetreibende" : "Konto anlegen"}</h2>
        <div class="seg" style="--n:2">
          <label><input type="radio" name="role" value="viewer" ${adv ? "" : "checked"}><span>${icon("play")} Ich schaue<small>Punkte sammeln</small></span></label>
          <label><input type="radio" name="role" value="advertiser" ${adv ? "checked" : ""}><span>${icon("megaphone")} Ich werbe<small>Kampagnen buchen</small></span></label>
        </div>
        <div id="msg"></div>
        <label class="field"><span>Name</span><input name="name" autocomplete="name" required></label>
        <label class="field" id="company" ${adv ? "" : "hidden"}><span>Firma</span><input name="company" autocomplete="organization"></label>
        <label class="field"><span>E-Mail</span><input name="email" type="email" autocomplete="email" required></label>
        <label class="field"><span>Passwort</span><input name="password" type="password" autocomplete="new-password" minlength="8" required><small>Mindestens 8 Zeichen.</small></label>
        <label class="check" id="adult" ${adv ? "hidden" : ""}><input type="checkbox" name="adult"><span>Ich bin mindestens 18 Jahre alt und habe nur dieses eine Konto.</span></label>
        <label class="check"><input type="checkbox" name="privacy" required><span>Ich habe die <a href="/datenschutz/#werbunglohntsich" target="_blank" rel="noopener">Datenschutzerklärung</a> gelesen.</span></label>
        <button class="btn btn-signal btn-xl" type="submit">Konto anlegen ${icon("arrow")}</button>
        <p class="muted">Schon dabei? <a href="#/login">Einloggen</a></p>
      </form></div></div>`;
    const form = $("#f");
    form.addEventListener("change", () => {
      const isAdv = form.role.value === "advertiser";
      $("#company").hidden = !isAdv; $("#adult").hidden = isAdv;
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); const f = new FormData(form); const btn = form.querySelector("button[type=submit]");
      if (!f.get("privacy")) { $("#msg").innerHTML = alertBox("Bitte bestätige die Datenschutzerklärung."); return; }
      btn.disabled = true;
      try {
        me = await api.register({ email: f.get("email"), password: f.get("password"), name: f.get("name"), role: f.get("role"), company: f.get("company"), adult: !!f.get("adult") });
        toast(me.role === "viewer" ? "Willkommen! 100 Demo-Punkte sind schon drauf." : "Konto angelegt. Leg deine erste Kampagne an.");
        location.hash = me.role === "viewer" ? "#/spots" : "#/kampagne/neu";
      } catch (err) { $("#msg").innerHTML = alertBox(err.message); btn.disabled = false; }
    });
  }

  /* ---------- Zuschauer: Spots ---------- */
  async function viewSpots() {
    document.title = "Spots – Werbung lohnt sich";
    const [feed, acc] = await Promise.all([api.feed(), api.me()]);
    me = acc;
    const left = Math.max(0, me.daily_limit - me.today);
    app.innerHTML = `<section class="app"><div class="wrap">
      <div class="app-head reveal">
        <div><span class="kicker hl">Hallo ${esc(me.name.split(" ")[0])}</span><h1 style="margin-top:16px">Deine Spots</h1></div>
        <div class="grid-2" style="min-width:min(100%,440px)">
          <div class="stat lime"><b>${num(me.points)}</b><span>Punkte · ${ptsEuro(me.points)}</span></div>
          <div class="stat dark"><b>${left}</b><span>Spots heute noch möglich</span></div>
        </div>
      </div>
      ${feed.some((s) => s.demo) ? `<div class="reveal" style="margin-bottom:22px">${alertBox("Pilotphase: Spots mit dem Hinweis „Demo“ sind fiktive Marken. Dafür gibt es Demo-Punkte zum Ausprobieren, keine Auszahlung.", "info")}</div>` : ""}
      ${left === 0 ? alertBox("Tageslimit erreicht. Morgen gibt es neue Spots.", "info") : ""}
      ${feed.length ? `<div class="spot-grid">${feed.map((s, i) => `
        <button class="spot-card reveal ${i % 3 ? "reveal-d" + (i % 3) : ""}" style="--c:${esc(s.color || "#FF4D2E")}" data-id="${esc(s.id)}" ${left === 0 ? "disabled" : ""}>
          <div class="row"><span class="badge badge-dark">${icon("clock")} ${s.duration} Sek.</span>${s.demo ? '<span class="badge">Demo</span>' : '<span class="badge badge-lime">Echte Punkte</span>'}</div>
          <div><div class="brand">${esc(s.brand)}</div><div class="title">${esc(s.title)}</div></div>
          <div class="meta"><span class="pts">+${s.points} <small>Punkte</small></span><span class="play">${icon("play")}</span></div>
        </button>`).join("")}</div>`
      : `<div class="empty reveal">${icon("sparkle")}<h2 class="mid">Alles geschaut!</h2><p class="muted">Gerade gibt es keine neuen Spots für dich. Schau später wieder vorbei.</p></div>`}
    </div></section>`;
    $$(".spot-card", app).forEach((b) => b.addEventListener("click", () => watch(b.dataset.id)));
  }

  /* ---------- Player & Quiz ---------- */
  let player = null;
  function closePlayer() {
    if (!player) return;
    player.cleanup(); player.el.remove(); player = null; document.body.style.overflow = "";
  }
  async function watch(id) {
    let v;
    try { v = await api.startView(id); } catch (e) { toast(e.message); return; }
    const el = document.createElement("div");
    el.className = "player"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Spot von " + v.brand);
    el.innerHTML = `
      <div class="player-top"><span class="brand">${esc(v.brand)}</span><span class="badge badge-dark">${esc(v.title)}</span>${v.demo ? '<span class="badge">Demo</span>' : ""}
        <span class="spacer"></span><span class="badge badge-lime">+${v.points} Punkte</span>
        <button class="icon-btn" style="color:#fff" id="p-close" aria-label="Abbrechen">${icon("x")}</button></div>
      <div class="player-stage">
        <video playsinline preload="auto" disablepictureinpicture controlslist="nodownload noplaybackrate nofullscreen" src="${esc(resolveUrl(v.video_url))}"></video>
        <div class="player-overlay" id="p-ov"><div class="stack" style="justify-items:center">
          <h2 class="big">Bereit?</h2><p class="muted" style="color:#A49DB0">Schau den Spot bis zum Ende. Danach kommen 3 Fragen.</p>
          <button class="btn btn-lime btn-xl" id="p-go">${icon("play")} Spot starten</button></div></div>
      </div>
      <div class="player-bottom"><div class="progress"><i></i></div><span class="timer" id="p-t">${v.duration}</span></div>`;
    document.body.appendChild(el); document.body.style.overflow = "hidden";
    const video = $("video", el), bar = $(".progress i", el), timer = $("#p-t", el), ov = $("#p-ov", el);
    let maxT = 0, ended = false;
    const onVis = () => { if (document.hidden && !video.paused) { video.pause(); showPause(); } };
    const showPause = () => {
      if (ended) return;
      ov.hidden = false;
      ov.innerHTML = `<div class="stack" style="justify-items:center"><h2 class="big">Pausiert</h2><p style="color:#A49DB0">Der Spot läuft weiter, wenn du zurück bist.</p>
        <button class="btn btn-lime btn-xl" id="p-go">${icon("play")} Weiter</button></div>`;
      $("#p-go", el).onclick = play;
    };
    const play = () => { ov.hidden = true; video.play().catch(() => { video.muted = true; video.play(); }); };
    video.addEventListener("timeupdate", () => {
      if (video.currentTime > maxT + 1.2) { video.currentTime = maxT; return; } // kein Vorspulen
      maxT = Math.max(maxT, video.currentTime);
      const d = video.duration || v.duration;
      bar.style.width = Math.min(100, (video.currentTime / d) * 100) + "%";
      timer.textContent = Math.max(0, Math.ceil(d - video.currentTime));
    });
    video.addEventListener("seeking", () => { if (video.currentTime > maxT + 1.2) video.currentTime = maxT; });
    video.addEventListener("pause", () => { if (!ended && video.currentTime < (video.duration || v.duration) - .3) showPause(); });
    video.addEventListener("ended", () => { ended = true; quiz(v, el); });
    video.addEventListener("click", () => (video.paused ? play() : video.pause()));
    video.addEventListener("error", () => { ov.hidden = false; ov.innerHTML = `<div class="stack" style="justify-items:center">${alertBox("Das Video konnte nicht geladen werden.")}<button class="btn btn-lime" id="p-x">Schließen</button></div>`; $("#p-x", el).onclick = () => { closePlayer(); route(); }; });
    document.addEventListener("visibilitychange", onVis);
    $("#p-go", el).onclick = play;
    $("#p-close", el).onclick = () => { if (ended || confirm("Spot abbrechen? Dann gibt es keine Punkte, und du kannst ihn erst morgen wieder schauen.")) { closePlayer(); route(); } };
    player = { el, cleanup: () => { video.pause(); document.removeEventListener("visibilitychange", onVis); } };
  }

  async function quiz(v, el) {
    const stage = $(".player-stage", el); $(".player-bottom", el).remove();
    stage.innerHTML = '<div class="spinner" style="border-color:#2A2533;border-top-color:var(--lime)"></div>';
    let q;
    for (let i = 0; i < 4; i++) {
      try { q = await api.quiz(v.view); break; }
      catch (e) { if (i === 3 || !/Ende/.test(e.message)) { stage.innerHTML = alertBox(e.message); return; } await new Promise((r) => setTimeout(r, 1500)); }
    }
    const answers = [];
    const keys = ["A", "B", "C", "D"];
    const show = (i) => {
      const item = q.questions[i];
      stage.innerHTML = `<div class="quiz">
        <div class="quiz-progress">${q.questions.map((_, j) => `<i class="${j <= i ? "on" : ""}"></i>`).join("")}</div>
        <span class="kicker" style="color:var(--lime)">Frage ${i + 1} von ${q.questions.length}</span>
        <h2 style="margin-top:16px">${esc(item.question)}</h2>
        <div class="answers">${item.answers.map((a, j) => `<button class="answer" data-j="${j}"><span class="key">${keys[j]}</span>${esc(a)}</button>`).join("")}</div></div>`;
      $$(".answer", stage).forEach((b) => b.addEventListener("click", () => {
        b.classList.add("picked"); $$(".answer", stage).forEach((x) => (x.disabled = true));
        answers[i] = Number(b.dataset.j);
        setTimeout(() => (i + 1 < q.questions.length ? show(i + 1) : finish()), 320);
      }));
    };
    const onKey = (e) => { const j = keys.indexOf(e.key.toUpperCase()); const b = $$(".answer", stage)[j]; if (b && !b.disabled) b.click(); };
    document.addEventListener("keydown", onKey);
    const prevCleanup = player.cleanup; player.cleanup = () => { prevCleanup(); document.removeEventListener("keydown", onKey); };
    const finish = async () => {
      stage.innerHTML = '<div class="spinner" style="border-color:#2A2533;border-top-color:var(--lime)"></div>';
      let r;
      try { r = await api.submit(v.view, answers); } catch (e) { stage.innerHTML = alertBox(e.message); return; }
      me = r.account;
      stage.innerHTML = r.verified
        ? `<div class="result"><span class="kicker" style="color:var(--lime)">3 von 3 richtig</span><div class="num">+${r.points}</div>
            <h2 class="mid">${r.demo ? "Demo-Punkte" : "Punkte"} gutgeschrieben!</h2>
            <p style="color:#A49DB0">Guthaben: ${num(me.points)} Punkte${me.demo_points ? ` · ${num(me.demo_points)} Demo-Punkte` : ""}</p>
            <div class="row" style="justify-content:center"><button class="btn btn-lime btn-xl" id="r-next">Nächster Spot ${icon("arrow")}</button><a class="btn btn-ghost btn-xl" href="#/konto" id="r-acc"><span>Zum Konto</span></a></div></div>`
        : `<div class="result fail"><span class="kicker" style="color:var(--signal)">Knapp daneben</span><div class="num">${r.correct}/3</div>
            <h2 class="mid">Diesmal keine Punkte.</h2><p style="color:#A49DB0">Für Punkte müssen alle 3 Antworten stimmen. Probier einen anderen Spot.</p>
            <div class="row" style="justify-content:center"><button class="btn btn-lime btn-xl" id="r-next">Anderer Spot ${icon("arrow")}</button></div></div>`;
      if (r.verified) burst();
      $("#r-next", el).onclick = () => { closePlayer(); route(); };
      const acc = $("#r-acc", el); if (acc) acc.onclick = () => closePlayer();
    };
    show(0);
  }
  function burst() {
    if (reduce) return;
    const b = document.createElement("div"); b.className = "burst";
    for (let i = 0; i < 28; i++) {
      const a = Math.random() * Math.PI * 2, d = 160 + Math.random() * 320;
      const c = document.createElement("i");
      c.style.cssText = `--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;animation-delay:${Math.random() * .12}s;${i % 3 === 0 ? "background:var(--signal)" : ""}`;
      b.appendChild(c);
    }
    document.body.appendChild(b); setTimeout(() => b.remove(), 1600);
  }

  /* ---------- Zuschauer: Konto ---------- */
  const PAYOUTS = [["Amazon-Gutschein", "cart"], ["Lieferando-Gutschein", "food"], ["Tank-Gutschein", "fuel"], ["Spende an Ärzte ohne Grenzen", "heart"]];
  async function viewWallet() {
    document.title = "Mein Konto – Werbung lohnt sich";
    const w = await api.wallet(); me = w.account;
    const goal = me.payout_min, share = Math.min(100, pct(me.points, goal));
    app.innerHTML = `<section class="app"><div class="wrap stack" style="gap:22px">
      <div class="app-head reveal"><div><span class="kicker hl">Mein Konto</span><h1 style="margin-top:16px">${esc(me.name)}</h1></div>
        <a class="btn btn-signal btn-xl" href="#/spots">${icon("play")} Spots schauen</a></div>
      <div class="grid-2">
        <div class="panel panel-dark balance reveal">
          <span class="kicker" style="color:var(--lime)">Guthaben</span>
          <div class="num">${num(me.points)}</div>
          <p class="muted" style="margin:0">Punkte · entspricht ${ptsEuro(me.points)}</p>
          <div class="meter" style="margin-top:14px"><i style="width:${share}%"></i></div>
          <p class="muted" style="margin:0;font-size:.9rem">${me.points >= goal ? "Du kannst einlösen!" : `Noch ${num(goal - me.points)} Punkte bis zur ersten Einlösung (${ptsEuro(goal)}).`}</p>
        </div>
        <div class="grid-2 reveal reveal-d1" style="align-content:start">
          <div class="stat lime"><b>${num(me.demo_points)}</b><span>Demo-Punkte (nicht auszahlbar)</span></div>
          <div class="stat"><b>${num(w.stats.verified)}</b><span>Spots mit 3/3 richtig</span></div>
          <div class="stat"><b>${w.stats.views ? pct(w.stats.verified, w.stats.views) : 0} %</b><span>Trefferquote</span></div>
          <div class="stat dark"><b>${Math.max(0, me.daily_limit - me.today)}</b><span>Spots heute noch</span></div>
        </div>
      </div>
      <div class="panel reveal"><h2 class="mid" style="margin-bottom:18px">Punkte einlösen</h2>
        <div id="pmsg"></div>
        <div class="redeem">${PAYOUTS.map(([k, ic]) => `<button data-k="${esc(k)}" ${me.points < goal ? "disabled" : ""}>${icon(ic)}<span>${esc(k)}</span><small class="muted">${ptsEuro(me.points)}</small></button>`).join("")}</div>
        <p class="muted" style="margin:14px 0 0;font-size:.9rem">Eingelöst wird immer dein ganzes Guthaben. Den Gutschein-Code schicken wir dir nach kurzer Prüfung per E-Mail.</p></div>
      <div class="grid-2">
        <div class="panel reveal"><h2 class="mid" style="margin-bottom:8px">Verlauf</h2><div class="list">${w.ledger.length ? w.ledger.map((l) => `
          <div class="list-item">${icon(l.delta > 0 ? "plus" : "gift")}<div><b>${esc(l.reason)}</b><div class="muted" style="font-size:.85rem">${date(l.at)}${l.demo ? " · Demo" : ""}</div></div>
          <span class="delta ${l.delta > 0 ? "plus" : "minus"}">${l.delta > 0 ? "+" : ""}${num(l.delta)}</span></div>`).join("") : '<p class="muted">Noch nichts passiert.</p>'}</div></div>
        <div class="panel reveal reveal-d1"><h2 class="mid" style="margin-bottom:8px">Einlösungen</h2><div class="list">${w.payouts.length ? w.payouts.map((p) => `
          <div class="list-item">${icon("gift")}<div><b>${esc(p.kind)}</b><div class="muted" style="font-size:.85rem">${date(p.at)} · ${num(p.points)} Punkte</div></div>
          <span class="badge ${p.status === "erledigt" ? "badge-lime" : p.status === "abgelehnt" ? "badge-signal" : ""}" style="margin-left:auto">${esc(p.status)}</span></div>`).join("") : '<p class="muted">Noch keine Einlösung.</p>'}</div></div>
      </div>
    </div></section>`;
    $$(".redeem button", app).forEach((b) => b.addEventListener("click", async () => {
      if (!confirm(`${num(me.points)} Punkte als „${b.dataset.k}“ einlösen?`)) return;
      try { await api.payout(b.dataset.k); toast("Eingelöst! Wir melden uns per E-Mail."); route(); }
      catch (e) { $("#pmsg").innerHTML = alertBox(e.message); }
    }));
  }

  /* ---------- Werbetreibende ---------- */
  async function viewCampaigns() {
    document.title = "Kampagnen – Werbung lohnt sich";
    const list = await api.myCampaigns();
    const tot = list.reduce((a, c) => ({ v: a.v + c.stats.verified, s: a.s + c.spent_cents, f: a.f + c.stats.finished }), { v: 0, s: 0, f: 0 });
    app.innerHTML = `<section class="app"><div class="wrap stack" style="gap:22px">
      <div class="app-head reveal"><div><span class="kicker hl">${esc(me.company || me.name)}</span><h1 style="margin-top:16px">Kampagnen</h1></div>
        <a class="btn btn-signal btn-xl" href="#/kampagne/neu">${icon("plus")} Neue Kampagne</a></div>
      <div class="grid-4 reveal">
        <div class="stat dark"><b>${list.length}</b><span>Kampagnen</span></div>
        <div class="stat lime"><b>${num(tot.v)}</b><span>Verifizierte Views</span></div>
        <div class="stat"><b>${tot.f ? pct(tot.v, tot.f) : 0} %</b><span>Recall-Quote (3/3)</span></div>
        <div class="stat"><b>${euro(tot.s)}</b><span>Ausgegeben</span></div>
      </div>
      ${list.length ? list.map((c) => `
        <a class="panel camp reveal" href="#/kampagne/${esc(c.id)}" style="text-decoration:none">
          <div><div class="row" style="margin-bottom:10px">${statusBadge(c.status)}<span class="badge">${c.duration} Sek.</span><span class="badge">${euro(c.price_cents)} / View</span></div>
            <h3>${esc(c.title)}</h3>
            <div class="budget-bar"><i style="width:${pct(c.spent_cents, c.budget_cents)}%"></i></div>
            <p class="muted" style="margin:8px 0 0;font-size:.92rem">${euro(c.spent_cents)} von ${euro(c.budget_cents)} · ${num(c.stats.verified)} verifizierte Views</p></div>
          <span class="btn btn-ghost btn-sm"><span>Details</span></span>
        </a>`).join("")
      : `<div class="empty reveal">${icon("megaphone")}<h2 class="mid">Noch keine Kampagne</h2><p class="muted">Lade deinen ersten Spot hoch. In wenigen Minuten erledigt.</p><a class="btn btn-signal" href="#/kampagne/neu">${icon("plus")} Kampagne anlegen</a></div>`}
    </div></section>`;
  }

  async function viewCampaign(id) {
    const list = await api.myCampaigns();
    const c = list.find((x) => x.id === id);
    if (!c) throw new Error("Kampagne nicht gefunden.");
    document.title = c.title + " – Werbung lohnt sich";
    const s = c.stats;
    app.innerHTML = `<section class="app"><div class="wrap stack" style="gap:22px">
      <a href="#/kampagnen" class="row muted" style="text-decoration:none;gap:6px">${icon("back")} Alle Kampagnen</a>
      <div class="app-head reveal" style="margin-bottom:10px"><div><div class="row">${statusBadge(c.status)}<span class="badge">${c.duration} Sek.</span></div><h1 style="margin-top:16px">${esc(c.title)}</h1></div>
        <div class="row">
          ${["draft", "rejected", "paused"].includes(c.status) ? `<a class="btn btn-ghost" href="#/kampagne/${esc(c.id)}/bearbeiten"><span>Bearbeiten</span></a>` : ""}
          ${c.status === "live" ? `<button class="btn btn-ghost" id="pause"><span>${icon("pause")} Pausieren</span></button>` : ""}
          ${c.status === "paused" ? `<button class="btn btn-signal" id="resume">${icon("play")} Wieder einreichen</button>` : ""}
        </div></div>
      ${c.note ? alertBox("Hinweis vom Team: " + c.note, "info") : ""}
      ${c.status === "review" ? alertBox("Wir prüfen deinen Spot. Die Rechnung über das Budget kommt per E-Mail; nach Zahlungseingang geht die Kampagne live.", "info") : ""}
      <div class="grid-4 reveal">
        <div class="stat"><b>${num(s.started)}</b><span>Gestartet</span></div>
        <div class="stat"><b>${num(s.finished)}</b><span>Quiz beantwortet</span></div>
        <div class="stat lime"><b>${num(s.verified)}</b><span>Verifizierte Views</span></div>
        <div class="stat dark"><b>${s.finished ? pct(s.verified, s.finished) : 0} %</b><span>3/3-Quote</span></div>
      </div>
      <div class="grid-2">
        <div class="panel reveal"><h2 class="mid" style="margin-bottom:14px">Budget</h2>
          <div class="balance"><div class="num" style="font-size:clamp(3rem,7vw,5rem)">${euro(c.budget_cents - c.spent_cents)}</div><span class="muted">übrig von ${euro(c.budget_cents)}</span></div>
          <div class="budget-bar"><i style="width:${pct(c.spent_cents, c.budget_cents)}%"></i></div>
          <p class="muted">Reicht noch für etwa ${num(Math.floor((c.budget_cents - c.spent_cents) / c.price_cents))} verifizierte Views à ${euro(c.price_cents)}.</p></div>
        <div class="panel reveal reveal-d1"><h2 class="mid" style="margin-bottom:14px">Spot</h2>${c.video_url ? `<video src="${esc(resolveUrl(c.video_url))}" controls playsinline style="width:100%;border-radius:16px;background:#000"></video>` : '<p class="muted">Noch kein Video.</p>'}</div>
      </div>
      <div class="panel reveal"><h2 class="mid">Recall pro Frage</h2><p class="muted">Wie viele haben die Frage richtig beantwortet, wenn sie gestellt wurde?</p>
        ${c.questions.map((q) => `<div class="qrow"><b>${esc(q.question)}</b><span class="muted" style="font-size:.9rem">Richtig: ${esc(q.answers[q.correct])} · ${num(q.asked)}× gestellt</span>
          <div class="recall"><div class="budget-bar"><i style="width:${pct(q.right, q.asked)}%"></i></div><b>${pct(q.right, q.asked)} %</b></div></div>`).join("")}</div>
    </div></section>`;
    const p = $("#pause"), r = $("#resume");
    if (p) p.onclick = async () => { await api.pauseCampaign(c.id, true); toast("Kampagne pausiert."); route(); };
    if (r) r.onclick = async () => { await api.pauseCampaign(c.id, false); toast("Zur Prüfung eingereicht."); route(); };
  }

  async function viewEditor(id) {
    let c = { title: "", claim: "", duration: 30, budget_cents: 50000, color: "#FF4D2E", video_url: "", questions: [] };
    if (id) { const list = await api.myCampaigns(); c = list.find((x) => x.id === id); if (!c) throw new Error("Kampagne nicht gefunden."); }
    while (c.questions.length < 5) c.questions.push({ question: "", answers: ["", "", "", ""], correct: 0 });
    document.title = (id ? "Kampagne bearbeiten" : "Neue Kampagne") + " – Werbung lohnt sich";
    app.innerHTML = `<section class="app"><div class="wrap">
      <a href="#/kampagnen" class="row muted" style="text-decoration:none;gap:6px;margin-bottom:20px">${icon("back")} Alle Kampagnen</a>
      <div class="app-head reveal"><div><span class="kicker hl">${id ? "Bearbeiten" : "Neue Kampagne"}</span><h1 style="margin-top:16px">Dein Spot.<br>Deine Fragen.</h1></div></div>
      <form id="f" class="stack" style="gap:22px" novalidate>
        <div class="grid-2">
          <div class="panel stack reveal">
            <h2 class="mid">1. Eckdaten</h2>
            <label class="field"><span>Titel der Kampagne</span><input name="title" value="${esc(c.title)}" maxlength="80" placeholder="z. B. Herbstaktion 2026" required></label>
            <label class="field"><span>Kurzbeschreibung (optional)</span><input name="claim" value="${esc(c.claim || "")}" maxlength="80" placeholder="z. B. Kaffeerösterei aus Bremen"></label>
            <div class="field"><span>Spotlänge</span><div class="seg" style="--n:3">${[15, 30, 60].map((d) => `<label><input type="radio" name="duration" value="${d}" ${c.duration === d ? "checked" : ""}><span>${d} Sek.<small>${euro(PRICE[d])} / View</small></span></label>`).join("")}</div></div>
            <label class="field"><span>Budget in Euro (netto)</span><input name="budget" type="number" min="50" step="10" value="${c.budget_cents / 100}" required><small id="reach"></small></label>
            <label class="field"><span>Farbe der Spot-Kachel</span><input name="color" type="color" value="${esc(c.color || "#FF4D2E")}" style="width:80px;height:46px;border:2px solid var(--ink);border-radius:12px;padding:2px"></label>
          </div>
          <div class="panel stack reveal reveal-d1">
            <h2 class="mid">2. Spot hochladen</h2>
            <label class="upload" id="drop">${c.video_url ? `<video src="${esc(resolveUrl(c.video_url))}" controls playsinline></video>` : icon("upload")}
              <b id="up-label">${c.video_url ? "Anderes Video wählen" : "Video auswählen"}</b><span class="muted" style="font-size:.9rem">MP4, WebM oder MOV · max. 50 MB · Länge passend zur Spotlänge</span>
              <input type="file" accept="video/mp4,video/webm,video/quicktime" hidden id="file"></label>
            <div class="meter" id="up-meter" hidden><i style="width:0"></i></div>
            <div id="up-msg"></div>
            <input type="hidden" name="video_url" value="${esc(c.video_url || "")}">
            ${alertBox("Tipp: Frag nach Details, die man nur beim Hinschauen mitbekommt (Zahlen, Farben, Orte). Keine Fragen, die man raten kann.", "info")}
          </div>
        </div>
        <div class="panel stack reveal">
          <div class="row"><h2 class="mid">3. Fragen zum Spot</h2><span class="spacer"></span><span class="muted">Mind. 3, besser 5 bis 10. Pro View werden 3 zufällig gestellt.</span></div>
          <div id="qs" class="grid-2"></div>
          <button type="button" class="btn btn-ghost" id="addq" style="justify-self:start"><span>${icon("plus")} Frage hinzufügen</span></button>
        </div>
        <div id="msg"></div>
        <div class="row">
          <button class="btn btn-ghost btn-xl" type="submit" name="save" value="draft"><span>Als Entwurf speichern</span></button>
          <button class="btn btn-signal btn-xl" type="submit" name="save" value="submit">Zur Prüfung einreichen ${icon("arrow")}</button>
        </div>
        <p class="muted" style="font-size:.9rem;margin:0">Nach dem Einreichen prüfen wir den Spot und schicken dir die Rechnung über das Budget. Abgerechnet werden nur verifizierte Views; nicht verbrauchtes Budget bekommst du zurück. Preise zzgl. USt.</p>
      </form></div></section>`;
    const form = $("#f"), qs = $("#qs");
    const renderQs = () => {
      qs.innerHTML = c.questions.map((q, i) => `<div class="q-edit" data-i="${i}">
        <div class="head"><span>Frage ${i + 1}</span>${c.questions.length > 3 ? `<button type="button" class="icon-btn" data-del="${i}" aria-label="Frage löschen">${icon("trash")}</button>` : ""}</div>
        <input class="input" data-q="${i}" value="${esc(q.question)}" placeholder="Was wurde im Spot gezeigt?">
        ${[0, 1, 2, 3].map((j) => `<label class="ans"><input type="radio" name="c${i}" value="${j}" ${q.correct === j ? "checked" : ""} aria-label="Richtige Antwort"><input class="input" data-a="${i}-${j}" value="${esc(q.answers[j] || "")}" placeholder="${j === 0 ? "Antwort" : j === 3 ? "Antwort (optional)" : "Antwort"}"></label>`).join("")}
        <small class="muted">Kreis markiert die richtige Antwort.</small></div>`).join("");
    };
    const sync = () => {
      c.questions = c.questions.map((q, i) => ({
        question: ($(`[data-q="${i}"]`, qs) || {}).value || "",
        answers: [0, 1, 2, 3].map((j) => ($(`[data-a="${i}-${j}"]`, qs) || {}).value || ""),
        correct: Number((form.querySelector(`input[name=c${i}]:checked`) || {}).value || 0),
      }));
    };
    renderQs();
    qs.addEventListener("click", (e) => { const d = e.target.closest("[data-del]"); if (d) { sync(); c.questions.splice(Number(d.dataset.del), 1); renderQs(); } });
    $("#addq").onclick = () => { sync(); if (c.questions.length >= 10) return toast("Höchstens 10 Fragen."); c.questions.push({ question: "", answers: ["", "", "", ""], correct: 0 }); renderQs(); };
    const reach = () => {
      const d = Number(form.duration.value), b = Number(form.budget.value || 0);
      $("#reach").textContent = `≈ ${num(Math.floor((b * 100) / PRICE[d]))} verifizierte Views à ${euro(PRICE[d])} · Zuschauer bekommen ${REWARD[d]} Punkte`;
    };
    form.addEventListener("input", reach); reach();

    $("#file").addEventListener("change", async (e) => {
      const file = e.target.files[0]; if (!file) return;
      const msg = $("#up-msg"); msg.innerHTML = "";
      if (file.size > 50 * 1024 * 1024) { msg.innerHTML = alertBox("Das Video ist größer als 50 MB."); return; }
      const dur = await new Promise((res) => { const v = document.createElement("video"); v.preload = "metadata"; v.onloadedmetadata = () => res(v.duration); v.onerror = () => res(0); v.src = URL.createObjectURL(file); });
      const want = Number(form.duration.value);
      if (dur && Math.abs(dur - want) > 1.5) {
        const fit = [15, 30, 60].find((d) => Math.abs(dur - d) <= 1.5);
        if (fit) { form.duration.value = String(fit); reach(); msg.innerHTML = alertBox(`Spotlänge auf ${fit} Sekunden angepasst.`, "info"); }
        else { msg.innerHTML = alertBox(`Das Video ist ${Math.round(dur)} Sekunden lang. Erlaubt sind 15, 30 oder 60 Sekunden.`); return; }
      }
      const meter = $("#up-meter"); meter.hidden = false;
      try {
        const url = await api.upload(file, (p) => ($("i", meter).style.width = Math.round(p * 100) + "%"));
        form.video_url.value = url;
        $("#drop").firstElementChild.outerHTML = `<video src="${esc(url)}" controls playsinline></video>`;
        $("#up-label").textContent = "Anderes Video wählen";
        msg.innerHTML = alertBox("Video hochgeladen.", "ok");
      } catch (err) { msg.innerHTML = alertBox(err.message); }
      meter.hidden = true;
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); sync();
      const submit = e.submitter && e.submitter.value === "submit";
      const payload = {
        id: id || null, title: form.title.value, claim: form.claim.value, duration: Number(form.duration.value),
        budget_cents: Math.round(Number(form.budget.value || 0) * 100), color: form.color.value, video_url: form.video_url.value,
        questions: c.questions.filter((q) => q.question.trim()).map((q) => {
          const filled = q.answers.map((a, j) => ({ a: a.trim(), j })).filter((x) => x.a);
          return { question: q.question, answers: filled.map((x) => x.a), correct: Math.max(0, filled.findIndex((x) => x.j === q.correct)) };
        }),
        submit,
      };
      const bad = c.questions.filter((q) => q.question.trim()).find((q) => q.answers.filter((a) => a.trim()).length < 3 || !q.answers[q.correct].trim());
      if (bad) { $("#msg").innerHTML = alertBox(`Bei „${bad.question}“ fehlen Antworten oder die richtige Antwort ist leer.`); return; }
      try {
        const saved = await api.saveCampaign(payload);
        toast(submit ? "Eingereicht! Wir prüfen den Spot." : "Entwurf gespeichert.");
        location.hash = "#/kampagne/" + saved.id;
      } catch (err) { $("#msg").innerHTML = alertBox(err.message); }
    });
  }

  /* ---------- Admin ---------- */
  async function viewAdmin(data) {
    document.title = "Admin – Werbung lohnt sich";
    const d = data || (await api.admin());
    const t = d.totals;
    app.innerHTML = `<section class="app"><div class="wrap stack" style="gap:22px">
      <div class="app-head reveal"><div><span class="kicker hl">Team</span><h1 style="margin-top:16px">Admin</h1></div></div>
      <div class="grid-4 reveal">
        <div class="stat dark"><b>${num(t.viewers)}</b><span>Zuschauer</span></div>
        <div class="stat"><b>${num(t.advertisers)}</b><span>Werbetreibende</span></div>
        <div class="stat lime"><b>${num(t.verified)}</b><span>Verifizierte Views (inkl. Demo)</span></div>
        <div class="stat"><b>${euro(t.revenue_cents)}</b><span>Umsatz · offene Punkte ${ptsEuro(t.points_open)}</span></div>
      </div>
      <div class="panel reveal"><h2 class="mid" style="margin-bottom:12px">Kampagnen</h2>${d.campaigns.length ? `<div class="scroll-x"><table class="table">
        <tr><th>Kampagne</th><th>Status</th><th>Budget</th><th>Views</th><th>Spot</th><th></th></tr>
        ${d.campaigns.map((c) => `<tr><td><b>${esc(c.title)}</b><br><span class="muted">${esc(c.company)} · ${esc(c.contact)}</span><br><span class="muted">${c.questions.length} Fragen · ${c.duration} Sek.</span></td>
          <td>${statusBadge(c.status)}</td><td>${euro(c.spent_cents)} / ${euro(c.budget_cents)}</td><td>${num(c.stats.verified)} / ${num(c.stats.finished)}</td>
          <td>${c.video_url ? `<a href="${esc(resolveUrl(c.video_url))}" target="_blank" rel="noopener">ansehen</a>` : "–"}</td>
          <td><div class="row">${c.status !== "live" ? `<button class="btn btn-lime btn-sm" data-c="${esc(c.id)}" data-s="live">Live</button>` : `<button class="btn btn-ghost btn-sm" data-c="${esc(c.id)}" data-s="paused"><span>Pausieren</span></button>`}
            ${c.status === "review" ? `<button class="btn btn-ghost btn-sm" data-c="${esc(c.id)}" data-s="rejected"><span>Ablehnen</span></button>` : ""}</div></td></tr>`).join("")}
      </table></div>` : '<p class="muted">Noch keine Kampagnen von Werbetreibenden.</p>'}</div>
      <div class="panel reveal"><h2 class="mid" style="margin-bottom:12px">Einlösungen</h2>${d.payouts.length ? `<div class="scroll-x"><table class="table">
        <tr><th>Datum</th><th>Person</th><th>Art</th><th>Punkte</th><th>Status</th><th></th></tr>
        ${d.payouts.map((p) => `<tr><td>${date(p.at)}</td><td>${esc(p.name)}<br><span class="muted">${esc(p.email)}</span></td><td>${esc(p.kind)}</td><td>${num(p.points)} (${ptsEuro(p.points)})</td><td>${esc(p.status)}</td>
          <td>${p.status === "offen" ? `<div class="row"><button class="btn btn-lime btn-sm" data-p="${p.id}" data-s="erledigt">Erledigt</button><button class="btn btn-ghost btn-sm" data-p="${p.id}" data-s="abgelehnt"><span>Ablehnen</span></button></div>` : ""}</td></tr>`).join("")}
      </table></div>` : '<p class="muted">Keine Einlösungen.</p>'}</div>
    </div></section>`;
    $$("[data-c]", app).forEach((b) => b.addEventListener("click", async () => {
      const note = b.dataset.s === "rejected" ? prompt("Begründung für den Werbetreibenden:") : null;
      if (b.dataset.s === "rejected" && note === null) return;
      const nd = await api.adminCampaign(b.dataset.c, b.dataset.s, note); toast("Gespeichert."); await viewAdmin(nd); hydrateIcons(app); $$(".reveal", app).forEach((el) => el.classList.add("in"));
    }));
    $$("[data-p]", app).forEach((b) => b.addEventListener("click", async () => {
      if (!confirm(b.dataset.s === "erledigt" ? "Gutschein verschickt?" : "Ablehnen und Punkte zurückbuchen?")) return;
      const nd = await api.adminPayout(Number(b.dataset.p), b.dataset.s); toast("Gespeichert."); await viewAdmin(nd); hydrateIcons(app); $$(".reveal", app).forEach((el) => el.classList.add("in"));
    }));
  }

  /* ---------- Start ---------- */
  hydrateIcons();
  observe();
  loadMe().then(route);
})();
