/* Wo bist du? – Web-Testversion. Vanilla-JS, ohne Build. */
(function () {
  "use strict";
  const $app = document.getElementById("app");
  const $sheet = document.getElementById("sheet-root");
  const $toast = document.getElementById("toast");
  const APP_URL = "https://toptop.shop/wobistdu/";

  // ---------- Texte ----------
  const QUICK = {
    howlong: "Wie lange brauchst du noch?",
    almost: "Bin gleich da!",
    waiting: "Ich warte auf dich.",
    callme: "Ruf mich kurz an.",
    thanks: "Danke!",
    allgood: "Alles gut bei dir?",
    onmyway: "Bin auf dem Weg zu dir.",
    comehere: "Kommst du zu mir?",
    andyou: "Und du? Wo bist du?",
  };
  const QUICK_ORDER = ["howlong", "almost", "waiting", "onmyway", "callme", "allgood", "thanks"];
  const REACT = { like: "👍", love: "❤️", pray: "🙏", laugh: "😂" };
  const DECLINE = {
    "": "Möchte gerade nicht teilen.",
    callsoon: "Ruf dich gleich an.",
    onroad: "Bin unterwegs, melde mich.",
    later: "Später.",
    stopped: "Freigabe beendet.",
  };
  const ETA = { 5: "5 Min", 10: "10 Min", 15: "15 Min", 30: "30 Min", 60: "1 Std" };
  const etaText = (b) => (b === "60" ? "Noch ca. 1 Stunde" : `Noch ca. ${b} Minuten`);

  // ---------- Zustand ----------
  const S = {
    me: null, contacts: [], msgs: new Map(), maxId: 0,
    view: "home", chatWith: null, selected: new Set(), busy: false,
    now: Date.now(), skew: 0, firstSync: true,
    myPos: null, watchId: null, lastLivePush: {},
    autoAnswered: new Set(), notified: new Set(),
  };
  const maps = new Map();
  const geoCache = new Map();

  // ---------- Hilfen ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (n) => (n || "?").replace(/\(.*?\)/g, "").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const first = (n) => (n || "").replace(/\(.*?\)/g, "").trim().split(/\s+/)[0];
  const now = () => Date.now() + S.skew;
  const ts = (iso) => new Date(iso).getTime();
  const clock = (iso) => new Date(iso).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  function ago(iso) {
    const s = Math.max(0, Math.round((now() - ts(iso)) / 1000));
    if (s < 45) return "gerade eben";
    if (s < 3600) return `vor ${Math.round(s / 60)} Min`;
    if (s < 86400) return clock(iso);
    return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
  }
  function left(iso) {
    const m = Math.ceil((ts(iso) - now()) / 60000);
    return m >= 60 ? `noch ${Math.round(m / 60)} Std` : `noch ${Math.max(m, 1)} Min`;
  }
  function km(a, b) {
    const R = 6371, r = Math.PI / 180;
    const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  const fmtKm = (d) => (d < 1 ? `${Math.round(d * 100) * 10} m` : `${d.toFixed(d < 10 ? 1 : 0).replace(".", ",")} km`);
  const av = (c, cls = "", dot = false) =>
    `<div class="av ${cls}" style="background:${esc(c?.color || "#888")}" aria-hidden="true">${esc(initials(c?.name))}${dot ? '<span class="dot"></span>' : ""}</div>`;
  const contact = (id) => S.contacts.find((c) => c.id === id);

  function toast(text, ms = 2600) {
    $toast.textContent = text; $toast.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => ($toast.hidden = true), ms);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast("Kopiert"); }
    catch { toast("Bitte markieren und kopieren"); }
  }
  async function guard(fn) {
    if (S.busy) return; S.busy = true;
    try { await fn(); } catch (e) {
      if (e.auth) { render(); return; }
      toast(e.message || "Da ist etwas schiefgelaufen.");
    } finally { S.busy = false; }
  }

  const I = {
    pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s7-7.1 7-12.5A7 7 0 0 0 5 9.5C5 14.9 12 22 12 22Z" fill="currentColor"/><circle cx="12" cy="9.5" r="2.7" fill="var(--accent)"/></svg>',
    mark: '<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 30s10-9.6 10-17A10 10 0 0 0 6 13c0 7.4 10 17 10 17Z" fill="var(--accent)"/><text x="16" y="17.5" text-anchor="middle" font-family="Bricolage, sans-serif" font-weight="800" font-size="13" fill="#fff">?</text></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s6.5-6.3 6.5-11.2a6.5 6.5 0 1 0-13 0C5.5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.3"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z"/></svg>',
    me: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    dots: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  };

  // ---------- Nachrichten-Logik ----------
  function thread(cid) {
    return [...S.msgs.values()].filter((m) => m.from === cid || m.to === cid).sort((a, b) => a.id - b.id);
  }
  const answerOf = (ask) => [...S.msgs.values()].find((m) => m.reply_to === ask.id && (m.kind === "share" || m.kind === "decline"));
  // Offene Fragen an mich: unbeantwortet, nicht älter als 30 Minuten
  function openAsks() {
    return [...S.msgs.values()].filter((m) =>
      m.kind === "ask" && m.to === S.me.id && !answerOf(m) && now() - ts(m.at) < 30 * 60000 && contact(m.from) && !contact(m.from).blocked
    ).sort((a, b) => b.id - a.id);
  }
  const shareActive = (m) => m.kind === "share" && !m.ended && m.lat != null && ts(m.expires_at) > now();
  const myLiveShares = () => [...S.msgs.values()].filter((m) => m.from === S.me.id && m.live && shareActive(m));
  function activeShareFrom(cid) {
    return [...S.msgs.values()].filter((m) => m.from === cid && m.to === S.me.id && shareActive(m)).sort((a, b) => b.id - a.id)[0];
  }
  function unread(c) {
    return [...S.msgs.values()].filter((m) => m.from === c.id && m.id > c.last_read && m.kind !== "react").length;
  }
  function summary(m, c) {
    if (!m) return "Noch nichts";
    const mine = m.from === S.me.id;
    const who = mine ? "Du" : first(c.name);
    switch (m.kind) {
      case "ask": return mine ? "Du hast gefragt: Wo bist du?" : `${who} fragt: Wo bist du?`;
      case "share": return `${who} ${mine ? "hast" : "hat"} ${m.mode === "approx" ? "ungefähr " : ""}den Standort geteilt`;
      case "decline": return `${who}: ${DECLINE[m.body || ""]}`;
      case "quick": return `${who}: ${QUICK[m.body]}`;
      case "eta": return `${who}: ${etaText(m.body)}`;
      case "react": return `${who}: ${REACT[m.body]}`;
    }
    return "";
  }
  function statusLine(c) {
    const a = activeShareFrom(c.id);
    if (a) return a.live ? "teilt live" : `geteilt ${ago(a.loc_at || a.at)}`;
    const t = thread(c.id);
    const lastAsk = t.filter((m) => m.kind === "ask" && m.from === S.me.id).pop();
    if (lastAsk && !answerOf(lastAsk) && now() - ts(lastAsk.at) < 10 * 60000) return "gefragt …";
    if (c.bot) return "antwortet sofort";
    if (!c.knows_me) return "hat dich noch nicht";
    return "";
  }

  // ---------- Standort ----------
  function locate() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject(new Error("Dein Browser kann keinen Standort ermitteln."));
      navigator.geolocation.getCurrentPosition(
        (p) => { S.myPos = { lat: p.coords.latitude, lng: p.coords.longitude, acc: p.coords.accuracy, at: Date.now() }; resolve(S.myPos); },
        (e) => reject(new Error(e.code === 1
          ? "Standort ist blockiert. Erlaube den Zugriff in den Browser-Einstellungen für toptop.shop."
          : "Standort gerade nicht verfügbar. Versuch es draußen oder gleich noch mal.")),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 20000 }
      );
    });
  }
  async function geoGranted() {
    try { return (await navigator.permissions.query({ name: "geolocation" })).state === "granted"; } catch { return false; }
  }
  // Live-Freigaben laufen weiter, solange die Seite offen ist
  function ensureWatch() {
    const live = myLiveShares();
    if (live.length && S.watchId == null && navigator.geolocation) {
      S.watchId = navigator.geolocation.watchPosition((p) => {
        S.myPos = { lat: p.coords.latitude, lng: p.coords.longitude, acc: p.coords.accuracy, at: Date.now() };
        for (const m of myLiveShares()) {
          if (Date.now() - (S.lastLivePush[m.id] || 0) < 20000) continue;
          S.lastLivePush[m.id] = Date.now();
          WBD.liveUpdate(m.id, S.myPos).catch(() => {});
        }
      }, () => {}, { enableHighAccuracy: true, maximumAge: 15000 });
    } else if (!live.length && S.watchId != null) {
      navigator.geolocation.clearWatch(S.watchId); S.watchId = null;
    }
  }
  async function address(m) {
    const key = `${m.lat.toFixed(4)},${m.lng.toFixed(4)},${m.mode}`;
    if (geoCache.has(key)) return geoCache.get(key);
    const p = (async () => {
      try {
        const zoom = m.mode === "approx" ? 14 : 18;
        const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${m.lat}&lon=${m.lng}&zoom=${zoom}&accept-language=de`);
        const j = await r.json(); const a = j.address || {};
        if (m.mode === "approx") return [a.suburb || a.city_district || a.quarter || a.neighbourhood, a.city || a.town || a.village].filter(Boolean).join(", ") || "Ungefährer Standort";
        const street = [a.road || a.pedestrian || a.footway || a.square, a.house_number].filter(Boolean).join(" ");
        return [street || a.amenity || a.neighbourhood, a.city || a.town || a.village].filter(Boolean).join(", ") || "Standort";
      } catch { return m.mode === "approx" ? "Ungefährer Standort" : "Standort"; }
    })();
    geoCache.set(key, p);
    return p;
  }

  // ---------- Abgleich ----------
  async function sync() {
    if (!WBD.loggedIn()) return;
    let r;
    try { r = await WBD.sync(S.maxId); } catch (e) { if (e.auth) { S.me = null; render(); } return; }
    S.skew = ts(r.now) - Date.now();
    const wasFirst = S.firstSync;
    S.me = r.me; S.contacts = r.contacts;
    const fresh = [];
    for (const m of r.messages) {
      if (!S.msgs.has(m.id) && !wasFirst) fresh.push(m);
      S.msgs.set(m.id, m);
      if (m.id > S.maxId) S.maxId = m.id;
    }
    // Standorte, deren Freigabe abgelaufen ist, aus dem Speicher nehmen
    for (const m of S.msgs.values()) if (m.kind === "share" && (m.ended || ts(m.expires_at) < now())) { m.lat = null; m.lng = null; }
    S.firstSync = false;
    for (const m of fresh.filter((m) => m.to === S.me.id)) notify(m);
    await autoAnswer();
    ensureWatch();
    if (S.view === "chat" && S.chatWith) markRead(S.chatWith);
    render(true);
  }
  function markRead(cid) {
    const c = contact(cid); if (!c) return;
    const last = thread(cid).filter((m) => m.from === cid).pop();
    if (last && last.id > c.last_read) { c.last_read = last.id; WBD.read(cid, last.id).catch(() => {}); }
  }
  // Vertraute Kontakte bekommen automatisch den genauen Standort (einmalig), wenn die Seite offen ist
  async function autoAnswer() {
    for (const ask of openAsks()) {
      const c = contact(ask.from);
      if (!c || !c.trusted || S.autoAnswered.has(ask.id)) continue;
      S.autoAnswered.add(ask.id);
      if (!(await geoGranted())) continue;
      try {
        const pos = await locate();
        await WBD.share(c.id, pos, "exact", 0, ask.id);
        toast(`Automatisch geantwortet: ${first(c.name)} sieht, wo du bist`);
      } catch {}
    }
  }
  function notify(m) {
    const c = contact(m.from);
    if (!c || c.muted || c.blocked || S.notified.has(m.id)) return;
    S.notified.add(m.id);
    let text = summary(m, c);
    if (m.kind === "react") return;
    if (navigator.vibrate && m.kind === "ask") navigator.vibrate([60, 40, 60]);
    if (document.hidden && "Notification" in window && Notification.permission === "granted") {
      try {
        const n = new Notification(m.kind === "ask" ? `${first(c.name)} fragt: Wo bist du?` : "Wo bist du?", {
          body: m.kind === "ask" ? "Tippen zum Antworten" : text, tag: `wbd-${c.id}`, icon: "assets/icon.svg",
        });
        n.onclick = () => { window.focus(); openChat(c.id); n.close(); };
      } catch {}
    } else if (!(S.view === "chat" && S.chatWith === c.id)) {
      toast(m.kind === "ask" ? `${first(c.name)} fragt: Wo bist du?` : text);
    }
  }
  function updateTitle() {
    const n = openAsks().length + S.contacts.reduce((s, c) => s + (c.muted ? 0 : unread(c)), 0);
    document.title = n ? `(${n}) Wo bist du?` : "Wo bist du?";
    return n;
  }

  // ---------- Aktionen ----------
  async function askSelected() {
    const ids = [...S.selected];
    if (!ids.length) return;
    await guard(async () => {
      let ok = 0, errs = [];
      for (const id of ids) {
        try { await WBD.send(id, "ask"); ok++; } catch (e) { errs.push(`${first(contact(id)?.name)}: ${e.message}`); }
      }
      S.selected.clear();
      if (ok) toast(ok === 1 ? `Gefragt! ${first(contact(ids[0])?.name)} bekommt jetzt Bescheid.` : `Gefragt! ${ok} Freunde bekommen Bescheid.`);
      if (errs.length) setTimeout(() => toast(errs[0], 3500), ok ? 2600 : 0);
      await sync();
      if (ids.length === 1 && ok) openChat(ids[0]);
    });
  }
  async function sendQuick(cid, kind, body, replyTo) {
    await guard(async () => { await WBD.send(cid, kind, body, replyTo); await sync(); });
  }
  async function doShare(cid, mode, minutes, replyTo) {
    await guard(async () => {
      toast("Standort wird ermittelt …", 8000);
      const pos = await locate();
      await WBD.share(cid, pos, mode, minutes, replyTo);
      closeSheet();
      toast(minutes ? `Du teilst live für ${minutes === 60 ? "1 Stunde" : minutes + " Minuten"}` : "Standort geteilt");
      await sync();
    });
  }
  async function doDecline(cid, body, replyTo) {
    await guard(async () => { await WBD.send(cid, "decline", body || null, replyTo); closeSheet(); toast("Abgesagt"); await sync(); });
  }
  async function stopShare(id) {
    await guard(async () => {
      await WBD.stop(id);
      const m = S.msgs.get(id); if (m) { m.ended = true; m.lat = null; }
      toast("Freigabe beendet. Dein Standort ist gelöscht.");
      await sync();
    });
  }
  function openChat(cid) { S.view = "chat"; S.chatWith = cid; closeSheet(); markRead(cid); render(); window.scrollTo(0, document.body.scrollHeight); }
  function go(view) { S.view = view; S.chatWith = null; destroyMaps(); render(); window.scrollTo(0, 0); }

  // ---------- Sheets ----------
  function openSheet(html, onMount) {
    $sheet.innerHTML = `<div class="backdrop" data-close></div><div class="sheet" role="dialog" aria-modal="true"><div class="inner"><div class="grab"></div><button class="sheet-x" data-close aria-label="Schließen">${I.x}</button>${html}</div></div>`;
    onMount && onMount($sheet.querySelector(".sheet"));
    const f = $sheet.querySelector("input, button:not([data-close])"); f && f.focus({ preventScroll: true });
  }
  function closeSheet() { $sheet.innerHTML = ""; }

  function answerSheet(ask) {
    const c = contact(ask.from);
    let dur = 0;
    openSheet(`
      <div class="row">${av(c, "sm")}<div class="grow"><h2>${esc(first(c.name))} fragt: Wo bist du?</h2><div class="muted">${ago(ask.at)} · Du entscheidest.</div></div></div>
      <div class="section-label">Wie lange?</div>
      <div class="chips" role="group" aria-label="Dauer">
        <button class="chip" data-dur="0" aria-pressed="true">Einmalig</button>
        <button class="chip" data-dur="15" aria-pressed="false">Live 15 Min</button>
        <button class="chip" data-dur="60" aria-pressed="false">Live 1 Std</button>
      </div>
      <button class="btn ok" data-do="exact" style="padding:18px;font-size:1.1rem">Standort teilen</button>
      <button class="btn" data-do="approx">Nur ungefähr teilen (Stadtteil)</button>
      <div class="section-label" style="margin-top:6px">Lieber nicht?</div>
      <div class="chips">
        ${["callsoon", "onroad", "later"].map((k) => `<button class="chip" data-decline="${k}">${DECLINE[k]}</button>`).join("")}
        <button class="chip" data-decline="">Ohne Text ablehnen</button>
      </div>
      <p class="fine">Einmalig heißt: ${esc(first(c.name))} sieht deinen Standort von jetzt, eine Stunde lang. Live aktualisiert ihn, solange diese Seite offen ist. Danach wird er gelöscht.</p>
    `, (el) => {
      el.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return;
        if (b.dataset.dur != null) { dur = +b.dataset.dur; el.querySelectorAll("[data-dur]").forEach((x) => x.setAttribute("aria-pressed", x === b)); }
        if (b.dataset.do) doShare(c.id, b.dataset.do, dur, ask.id);
        if (b.dataset.decline != null) doDecline(c.id, b.dataset.decline, ask.id);
      });
    });
  }

  function shareSheet(cid, come) {
    const c = contact(cid);
    let dur = 0;
    openSheet(`
      <h2>${come ? `Damit ${esc(first(c.name))} zu dir findet` : `Standort an ${esc(first(c.name))} senden`}</h2>
      ${come ? `<div class="muted">Deine Frage ist raus. Teil jetzt noch deinen Standort.</div>` : ""}
      <div class="chips" role="group" aria-label="Dauer">
        <button class="chip" data-dur="0" aria-pressed="true">Einmalig</button>
        <button class="chip" data-dur="15" aria-pressed="false">Live 15 Min</button>
        <button class="chip" data-dur="60" aria-pressed="false">Live 1 Std</button>
      </div>
      <button class="btn ok" data-do="exact" style="padding:18px;font-size:1.1rem">Genau teilen</button>
      <button class="btn" data-do="approx">Nur ungefähr teilen</button>
    `, (el) => el.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.dur != null) { dur = +b.dataset.dur; el.querySelectorAll("[data-dur]").forEach((x) => x.setAttribute("aria-pressed", x === b)); }
      if (b.dataset.do) doShare(cid, b.dataset.do, dur, null);
    }));
  }

  function addSheet() {
    openSheet(`
      <h2>Freund hinzufügen</h2>
      <form class="form" id="add-form" novalidate>
        <div class="field"><label for="add-login">Handynummer oder E-Mail</label>
          <input id="add-login" inputmode="email" autocomplete="off" placeholder="0171 2345678" required></div>
        <div class="err" id="add-err"></div>
        <button class="btn primary" type="submit">Hinzufügen</button>
      </form>
      <div id="add-invite" hidden class="card">
        <div class="title">Noch nicht dabei</div>
        <div class="muted">Schick deinem Freund den Link. Sobald er sich mit dieser Nummer oder E-Mail anmeldet, kannst du ihn hinzufügen.</div>
        <div class="copybox"><code>${esc(APP_URL)}</code><button class="btn small primary" data-copy-invite>Einladung kopieren</button></div>
      </div>
      <div class="section-label">So finden dich andere</div>
      <div class="copybox"><code>${esc(S.me.phone || S.me.email)}</code><button class="btn small" data-copy-me>Kopieren</button></div>
    `, (el) => {
      el.querySelector("#add-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const v = el.querySelector("#add-login").value; const err = el.querySelector("#add-err");
        err.textContent = ""; el.querySelector("#add-invite").hidden = true;
        guard(async () => {
          try {
            const r = await WBD.addContact(v);
            await sync(); closeSheet();
            const c = contact(r.id); toast(`${first(c?.name)} ist jetzt in deinen Freunden`);
            if (c) { S.selected.add(c.id); render(); }
          } catch (x) {
            if (x.key === "not_found") el.querySelector("#add-invite").hidden = false;
            else err.textContent = x.message;
          }
        });
      });
      el.addEventListener("click", (e) => {
        if (e.target.closest("[data-copy-invite]")) copy(`Wo bist du? Frag mich einfach hier, statt anzurufen: ${APP_URL}`);
        if (e.target.closest("[data-copy-me]")) copy(S.me.phone || S.me.email);
      });
    });
  }

  function contactSheet(cid) {
    const c = contact(cid);
    openSheet(`
      <div class="row">${av(c, "sm")}<div class="grow"><h2>${esc(c.name)}</h2><div class="muted">${esc(c.phone || (c.bot ? "Antwortet automatisch, zum Ausprobieren" : ""))}</div></div></div>
      <label class="toggle"><div class="grow"><div class="t">Vertraut</div><div class="muted">${esc(first(c.name))} bekommt automatisch deinen genauen Standort, wenn die App offen ist.</div></div><input type="checkbox" id="t-trusted" ${c.trusted ? "checked" : ""}></label>
      <label class="toggle"><div class="grow"><div class="t">Stumm</div><div class="muted">Keine Hinweise bei Nachrichten von ${esc(first(c.name))}.</div></div><input type="checkbox" id="t-muted" ${c.muted ? "checked" : ""}></label>
      <label class="toggle"><div class="grow"><div class="t">Blockieren</div><div class="muted">${esc(first(c.name))} kann dich nicht mehr fragen und merkt davon nichts.</div></div><input type="checkbox" id="t-blocked" ${c.blocked ? "checked" : ""}></label>
      <button class="btn danger" data-remove>Aus Freunden entfernen</button>
    `, (el) => {
      el.addEventListener("change", (e) => {
        const k = e.target.id?.replace("t-", ""); if (!k) return;
        const val = e.target.checked;
        guard(async () => {
          await WBD.setContact(cid, { [k]: val }); c[k] = val;
          toast(k === "trusted" ? (val ? "Vertraut: antwortet automatisch" : "Nicht mehr vertraut") : k === "muted" ? (val ? "Stumm geschaltet" : "Hinweise wieder an") : (val ? "Blockiert" : "Nicht mehr blockiert"));
          await sync();
        });
      });
      const rm = el.querySelector("[data-remove]");
      rm.addEventListener("click", () => {
        if (rm.dataset.confirm) {
          guard(async () => { await WBD.removeContact(cid); closeSheet(); S.selected.delete(cid); go("home"); toast("Entfernt"); await sync(); });
        } else { rm.dataset.confirm = "1"; rm.textContent = "Wirklich entfernen? Noch mal tippen"; }
      });
    });
  }

  // ---------- Karten ----------
  function destroyMaps() { for (const m of maps.values()) m.remove(); maps.clear(); }
  function mountMaps() {
    if (!window.L) return;
    document.querySelectorAll("[data-map]").forEach((el) => {
      const id = +el.dataset.map; const m = S.msgs.get(id);
      if (!m || m.lat == null) return;
      let map = maps.get(id);
      if (map && map.getContainer() !== el) { map.remove(); maps.delete(id); map = null; }
      const ll = [m.lat, m.lng];
      const color = contact(m.from)?.color || (m.from === S.me.id ? S.me.color : "#2B50FF");
      if (!map) {
        map = L.map(el, { zoomControl: false, attributionControl: true, dragging: true, scrollWheelZoom: false, tap: false });
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(map);
        map._wbd = {};
        maps.set(id, map);
        map.setView(ll, m.mode === "approx" ? 13 : 16);
      }
      const st = map._wbd;
      if (m.mode === "approx") {
        st.circle ? st.circle.setLatLng(ll) : (st.circle = L.circle(ll, { radius: 1000, color, weight: 2, dashArray: "6 6", fillOpacity: .15 }).addTo(map));
      } else {
        const icon = L.divIcon({ className: "", html: `<div class="me-pin" style="background:${color}"></div>`, iconSize: [22, 22], iconAnchor: [11, 11] });
        st.marker ? st.marker.setLatLng(ll) : (st.marker = L.marker(ll, { icon, keyboard: false }).addTo(map));
        st.acc ? st.acc.setLatLng(ll).setRadius(m.accuracy || 20) : (st.acc = L.circle(ll, { radius: m.accuracy || 20, color, weight: 0, fillOpacity: .12 }).addTo(map));
        if (m.live) map.panTo(ll, { animate: true });
      }
    });
    document.querySelectorAll("[data-addr]").forEach(async (el) => {
      const m = S.msgs.get(+el.dataset.addr); if (!m || m.lat == null) return;
      el.textContent = await address(m);
    });
    for (const [id, map] of maps) if (!document.body.contains(map.getContainer())) { map.remove(); maps.delete(id); }
  }

  // ---------- Ansichten ----------
  function render(soft) {
    if (!WBD.loggedIn() || !S.me) { if (!WBD.loggedIn()) return renderAuth(); return; }
    if (soft && document.activeElement && document.activeElement.closest && document.activeElement.closest("#sheet-root input")) { updateTitle(); return; }
    updateTitle();
    const y = window.scrollY;
    const nearBottom = window.innerHeight + y >= document.body.scrollHeight - 80;
    if (S.view === "chat" && contact(S.chatWith)) renderChat();
    else if (S.view === "chats") renderChats();
    else if (S.view === "me") renderMe();
    else { S.view = "home"; renderHome(); }
    mountMaps();
    if (S.view === "chat" && (!soft || nearBottom)) window.scrollTo(0, document.body.scrollHeight);
    else if (soft) window.scrollTo(0, y);
  }

  function tabs() {
    const n = S.contacts.reduce((s, c) => s + (c.muted ? 0 : unread(c)), 0);
    const t = (v, label, icon, badge) => `<button class="tab" data-tab="${v}" ${S.view === v ? 'aria-current="page"' : ""}>${icon}${badge ? `<span class="badge">${badge}</span>` : ""}${label}</button>`;
    return `<nav class="tabs" aria-label="Navigation"><div class="inner">${t("home", "Fragen", I.home, openAsks().length || "")}${t("chats", "Chats", I.chat, n || "")}${t("me", "Ich", I.me)}</div></nav>`;
  }

  function incomingCards() {
    return openAsks().map((a) => {
      const c = contact(a.from);
      return `<div class="card incoming">
        <div class="row">${av(c, "sm")}<div class="grow"><div class="title">${esc(first(c.name))} fragt: Wo bist du?</div><div class="muted">${ago(a.at)}</div></div></div>
        <div class="btn-row"><button class="btn white" data-answer="${a.id}">Antworten</button><button class="btn ghost-light" data-quick-decline="${a.id}">Lieber nicht</button></div>
      </div>`;
    }).join("");
  }
  function liveCards() {
    return myLiveShares().map((m) => {
      const c = contact(m.to);
      return `<div class="card live"><div class="row"><span class="pill live">LIVE</span><div class="grow"><b>Du teilst mit ${esc(first(c?.name))}</b> <span class="muted">${left(m.expires_at)}</span></div><button class="btn small" data-stop="${m.id}">Beenden</button></div></div>`;
    }).join("");
  }

  function renderHome() {
    $app.className = "app";
    const sel = [...S.selected].filter((id) => contact(id) && !contact(id).blocked);
    S.selected = new Set(sel);
    const friends = S.contacts.filter((c) => !c.blocked);
    const label = sel.length > 1 ? "Wo seid ihr?" : "Wo bist du?";
    const to = sel.length === 0 ? "Erst Freunde antippen, dann fragen." : sel.length === 1 ? `an ${esc(first(contact(sel[0]).name))}` : `an ${sel.length} Freunde`;
    $app.innerHTML = `
      <header class="top"><div class="brand">${I.mark}<span>Wo bist du<span class="q">?</span></span></div>
        <button class="icon-btn" data-add aria-label="Freund hinzufügen">${I.plus}</button></header>
      ${incomingCards()}
      ${liveCards()}
      <div><div class="hello">Hi ${esc(first(S.me.name))}<span class="q">.</span></div><p class="sub">Wen möchtest du fragen? Tipp deine Freunde an.</p></div>
      <div class="friends">
        ${friends.map((c) => {
          const a = activeShareFrom(c.id);
          return `<button class="friend ${S.selected.has(c.id) ? "sel" : ""}" data-pick="${c.id}" aria-pressed="${S.selected.has(c.id)}">
            <span class="check">${I.check}</span>${av(c, "", !!a)}<span class="nm">${esc(first(c.name))}</span><span class="st">${esc(statusLine(c)) || "&nbsp;"}</span></button>`;
        }).join("")}
        <button class="friend add" data-add><div class="av">${I.plus}</div><span class="nm">Hinzufügen</span><span class="st">&nbsp;</span></button>
      </div>
      ${friends.length <= 1 ? `<p class="fine">Tipp: Toni ist ein Testkontakt und antwortet sofort. Lade echte Freunde über „Hinzufügen“ ein.</p>` : ""}
      <div class="ask-bar"><div class="inner">
        <button class="big-ask" data-ask ${sel.length ? "" : "disabled"} aria-label="${label} ${to}">${I.pin}<span>${label}</span></button>
        <div class="ask-hint">${to}</div>
      </div></div>
      ${tabs()}`;
  }

  function renderChats() {
    $app.className = "app";
    const list = S.contacts.filter((c) => !c.blocked).map((c) => ({ c, last: thread(c.id).filter((m) => m.kind !== "react").pop() }))
      .sort((a, b) => (b.last?.id || 0) - (a.last?.id || 0));
    $app.innerHTML = `
      <header class="top"><h1 style="font-size:2rem">Chats</h1><button class="icon-btn" data-add aria-label="Freund hinzufügen">${I.plus}</button></header>
      ${list.length ? `<div class="list">${list.map(({ c, last }) => {
        const u = c.muted ? 0 : unread(c);
        return `<button class="item" data-open="${c.id}">${av(c, "sm", !!activeShareFrom(c.id))}<div class="grow"><div class="nm">${esc(c.name)}</div><div class="last">${esc(summary(last, c))}</div></div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">${last ? `<span class="time">${ago(last.at)}</span>` : ""}${u ? `<span class="badge">${u}</span>` : ""}</div></button>`;
      }).join("")}</div>` : `<div class="empty">Noch keine Chats. Frag einen Freund, wo er ist.</div>`}
      ${tabs()}`;
  }

  function locCard(m, mine) {
    const c = contact(mine ? m.to : m.from);
    const reacts = reactsFor(m);
    if (!shareActive(m)) {
      return `<div class="loc gone ${mine ? "me" : ""}"><div class="info"><span class="pill gone">Standort abgelaufen</span>
        <div class="meta">${mine ? "Du hast" : esc(first(c?.name)) + " hat"} ${m.mode === "approx" ? "ungefähr " : ""}den Standort geteilt · ${clock(m.at)}</div>${reacts}</div></div>`;
    }
    const dist = !mine && S.myPos ? ` · ${fmtKm(km(S.myPos, m))} von dir` : "";
    const route = `https://www.google.com/maps/dir/?api=1&destination=${m.lat},${m.lng}`;
    return `<div class="loc ${mine ? "me" : ""}">
      <div class="map" data-map="${m.id}" role="img" aria-label="Karte"></div>
      <div class="info">
        <div class="row" style="gap:8px">${m.live ? '<span class="pill live">LIVE</span>' : ""}${m.mode === "approx" ? '<span class="pill approx">Ungefähr</span>' : ""}</div>
        <div class="addr" data-addr="${m.id}">${m.mode === "approx" ? "Ungefährer Standort" : "Standort"}</div>
        <div class="meta">${mine ? "Du teilst" : esc(first(c?.name)) + " teilt"} · aktualisiert ${ago(m.loc_at || m.at)}${dist} · ${left(m.expires_at)}</div>
      </div>
      <div class="acts">
        ${mine ? `<button class="btn small" data-stop="${m.id}">Freigabe beenden</button>` : `<a class="btn small primary" href="${route}" target="_blank" rel="noopener">Route</a>`}
        ${reacts}
      </div></div>`;
  }
  function reactsFor(m) {
    const rs = [...S.msgs.values()].filter((r) => r.kind === "react" && r.reply_to === m.id);
    return rs.length ? `<div class="reacts">${rs.map((r) => REACT[r.body]).join("")}</div>` : "";
  }

  function renderChat() {
    const c = contact(S.chatWith);
    $app.className = "app chat-mode";
    const t = thread(c.id);
    const items = [];
    let lastDay = "";
    for (const m of t) {
      if (m.kind === "react" && m.reply_to && S.msgs.has(m.reply_to)) continue;
      const day = new Date(m.at).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
      if (day !== lastDay) { items.push(`<div class="day">${esc(day)}</div>`); lastDay = day; }
      const mine = m.from === S.me.id;
      const r = reactsFor(m);
      const cls = `bubble ${mine ? "me" : ""} ${r ? "has-react" : ""}`;
      if (m.kind === "share") { items.push(locCard(m, mine)); continue; }
      if (m.kind === "ask") {
        const ans = answerOf(m);
        const state = mine ? (ans ? "" : now() - ts(m.at) > 10 * 60000 ? " · keine Antwort" : " · wartet auf Antwort") : "";
        items.push(`<div class="${cls} ask">Wo bist du?<div class="tm">${clock(m.at)}${state}</div>${r}</div>`);
        if (!mine && !ans && openAsks().some((a) => a.id === m.id)) items.push(`<button class="btn primary" style="align-self:flex-start;width:auto" data-answer="${m.id}">Jetzt antworten</button>`);
        continue;
      }
      const text = m.kind === "quick" ? QUICK[m.body] : m.kind === "eta" ? etaText(m.body) : m.kind === "decline" ? DECLINE[m.body || ""] : REACT[m.body];
      items.push(`<div class="${cls} ${m.kind === "decline" ? "decline" : ""}">${esc(text)}<div class="tm">${clock(m.at)}</div>${r}</div>`);
    }
    const lastIn = t.filter((m) => m.from === c.id && m.kind !== "react").pop();
    const lastMsg = t.filter((m) => m.kind !== "react").pop();
    // Hat der Freund gerade seinen Standort geschickt? Dann eigene Antwortleiste statt „Wo bist du?“
    const locReply = !!(lastIn && lastIn.kind === "share" && lastMsg === lastIn);
    // Reaktionen auf die letzte Nachricht des Freundes anbieten
    if (!locReply && lastIn && lastMsg === lastIn && lastIn.kind !== "ask" && !reactsFor(lastIn).includes(">")) {
      items.push(`<div class="react-row">${Object.entries(REACT).map(([k, e]) => `<button data-react="${k}" data-to="${lastIn.id}" aria-label="Reagieren mit ${e}">${e}</button>`).join("")}</div>`);
    }
    // Passende Schnellantworten zuerst
    let suggest = [];
    if (lastIn && lastIn.kind === "quick" && lastIn.body === "howlong" && lastMsg === lastIn) {
      suggest = Object.keys(ETA).map((k) => `<button class="chip accent" data-eta="${k}" data-to="${lastIn.id}">${ETA[k]}</button>`);
    } else if (lastIn && lastIn.kind === "quick" && lastIn.body === "comehere" && lastMsg === lastIn) {
      suggest = [`<button class="chip accent" data-quick="onmyway">${QUICK.onmyway}</button>`, `<button class="chip accent" data-quick="callme">${QUICK.callme}</button>`];
    } else if (lastIn && lastIn.kind === "quick" && lastIn.body === "onmyway" && lastMsg === lastIn) {
      suggest = [`<button class="chip accent" data-quick="waiting">${QUICK.waiting}</button>`, `<button class="chip accent" data-quick="howlong">${QUICK.howlong}</button>`];
    }
    const chips = [...suggest, ...QUICK_ORDER.map((k) => `<button class="chip" data-quick="${k}">${esc(QUICK[k])}</button>`)].join("");
    // Bin ich gerade unterwegs zu ihm? Dann keine Fragen wie „Wie lange brauchst du noch?“
    const myWay = [...t].reverse().find((m) => m.from === S.me.id && (m.kind === "ask" || (m.kind === "quick" && m.body === "onmyway")));
    const enRoute = !locReply && myWay && myWay.kind === "quick" && now() - ts(myWay.at) < 3 * 3600e3;
    const status = statusLine(c);
    if (locReply) $app.classList.add("loc-mode");
    $app.innerHTML = `
      <header class="chat-head">
        <button class="icon-btn" data-back aria-label="Zurück">${I.back}</button>
        ${av(c, "sm", !!activeShareFrom(c.id))}
        <div class="grow"><div class="nm">${esc(c.name)}</div><div class="muted">${esc(status || (c.trusted ? "vertraut" : ""))}</div></div>
        <button class="icon-btn" data-settings aria-label="Einstellungen für ${esc(first(c.name))}">${I.dots}</button>
      </header>
      ${!c.knows_me && !c.bot ? `<div class="card" style="background:var(--warn-soft);box-shadow:none"><div class="muted" style="color:var(--ink)">${esc(first(c.name))} hat dich noch nicht als Freund gespeichert. Deine Frage kommt trotzdem an.</div></div>` : ""}
      <div class="msgs">${items.join("") || `<div class="empty">Frag ${esc(first(c.name))}, wo er oder sie gerade ist.</div>`}</div>
      ${locReply ? locComposer(c, lastIn, t) : enRoute ? wayComposer(lastIn && lastMsg === lastIn && lastIn.kind === "quick" && lastIn.body === "howlong" ? lastIn.id : null) : `<div class="composer"><div class="inner">
        <div class="scroll" role="group" aria-label="Schnellantworten">${chips}</div>
        <div class="main">
          <button class="btn primary" data-chat-ask>Wo bist du?</button>
          <button class="btn" data-share-to>Standort senden</button>
        </div>
      </div></div>`}`;
  }

  // Antwortleiste, nachdem der Freund seinen Standort geschickt hat:
  // reagieren, sagen „Bin auf dem Weg“, oder „Kommst du zu mir?“ und den eigenen Standort teilen.
  // Leiste für „Ich bin unterwegs“: Ankunft melden statt fragen
  function wayComposer(howlongId) {
    return `<div class="composer loc-reply"><div class="inner">
        <div class="lead"><span>Du bist unterwegs</span></div>
        <div class="scroll" role="group" aria-label="Ankunft">
          ${Object.keys(ETA).map((k) => `<button class="chip accent" data-eta="${k}" ${howlongId ? `data-to="${howlongId}"` : ""}>Noch ${ETA[k]}</button>`).join("")}
        </div>
        <div class="row-replies">
          <button class="chip" data-quick="almost">${esc(QUICK.almost)}</button>
          <button class="chip" data-quick="callme">${esc(QUICK.callme)}</button>
        </div>
        <button class="btn primary share-big" data-share-to>${I.pin}<span>Live-Standort teilen</span></button>
      </div></div>`;
  }

  function locComposer(c, share, t) {
    // Hat der Freund dazu „Kommst du zu mir?“ gefragt, ist die Gegenfrage überflüssig
    const asked = t.some((m) => m.from === c.id && m.kind === "quick" && m.body === "comehere" && m.id < share.id && share.id - m.id <= 3);
    const mine = new Set([...S.msgs.values()].filter((r) => r.kind === "react" && r.reply_to === share.id && r.from === S.me.id).map((r) => r.body));
    const rx = [["like", "Gefällt mir"], ["love", "Herz"]].map(([k, l]) =>
      `<button class="rx" data-react="${k}" data-to="${share.id}" aria-pressed="${mine.has(k)}" aria-label="${l}">${REACT[k]}</button>`).join("");
    return `<div class="composer loc-reply"><div class="inner">
        <div class="lead"><span>Antworte ${esc(first(c.name))}</span><span class="rxs">${rx}</span></div>
        <div class="row-replies">
          <button class="chip accent" data-quick="onmyway">Bin auf dem Weg</button>
          ${asked ? `<button class="chip accent" data-quick="callme">Ruf mich kurz an</button>` : `<button class="chip accent" data-come>Kommst du zu mir?</button>`}
        </div>
        <button class="btn primary share-big" data-share-to>${I.pin}<span>Meinen Standort teilen</span></button>
        <div class="scroll" role="group" aria-label="Weitere Antworten">
          ${asked ? "" : `<button class="chip" data-quick="callme">${esc(QUICK.callme)}</button>`}
          <button class="chip" data-quick="thanks">${esc(QUICK.thanks)}</button>
          <button class="chip" data-quick="howlong">${esc(QUICK.howlong)}</button>
        </div>
      </div></div>`;
  }

  function renderMe() {
    $app.className = "app";
    const notif = "Notification" in window ? Notification.permission : "unsupported";
    $app.innerHTML = `
      <header class="top"><h1 style="font-size:2rem">Ich</h1></header>
      <div class="card"><div class="row">${av(S.me)}<div class="grow"><div class="title">${esc(S.me.name)}</div><div class="muted">${esc(S.me.phone || S.me.email)}</div></div></div>
        <div class="copybox"><code>${esc(S.me.phone || S.me.email)}</code><button class="btn small" data-copy-me>Kopieren</button></div>
        <div class="muted">Mit dieser Nummer bzw. E-Mail finden dich deine Freunde.</div></div>
      <div class="card"><div class="title" style="font-size:1.1rem">Hinweise</div>
        ${notif === "granted" ? `<div class="muted">Hinweise sind an. Du bekommst sie, solange „Wo bist du?“ in einem Tab offen ist.</div>`
          : notif === "denied" ? `<div class="muted">Hinweise sind im Browser blockiert. Du kannst sie in den Website-Einstellungen erlauben.</div>`
          : notif === "unsupported" ? `<div class="muted">Dein Browser unterstützt keine Hinweise. Tipp: „Zum Home-Bildschirm“ hinzufügen.</div>`
          : `<div class="muted">Damit du merkst, wenn jemand fragt, während die Seite im Hintergrund ist.</div><button class="btn primary" data-notif>Hinweise erlauben</button>`}
      </div>
      <div class="card"><div class="title" style="font-size:1.1rem">Datenschutz</div>
        <div class="muted">Dein Standort wird nur ermittelt, wenn du auf „Teilen“ tippst, nie im Hintergrund. Geteilte Standorte verschwinden nach Ablauf und werden gelöscht. Blockierte Personen können dich nicht fragen.</div>
        <a class="muted" href="/datenschutz/#wobistdu">Datenschutzerklärung</a></div>
      <div class="card"><div class="title" style="font-size:1.1rem">Testversion</div>
        <div class="muted">Das ist die Web-Version zum Ausprobieren. In der App für iPhone und Android kommen Anmeldung mit Apple oder Google, echte Push-Nachrichten und Live-Standort im Hintergrund dazu.</div></div>
      <button class="btn" data-logout>Abmelden</button>
      <button class="btn danger" data-delete>Konto löschen</button>
      ${tabs()}`;
  }

  // Anmeldung: Handynummer → SMS-Code (bei neuer Nummer zusätzlich Name). Kein Passwort.
  const A = { step: "phone", phone: "", known: true, smsOff: false, testMode: "register" };
  function signedIn(isNew) {
    S.view = "home"; S.firstSync = true; S.msgs.clear(); S.maxId = 0;
    return sync().then(() => { render(); toast(isNew ? `Willkommen, ${first(S.me.name)}!` : `Hi ${first(S.me.name)}!`); });
  }
  function renderAuth(msg = "") {
    $app.className = "app no-tabs";
    let form;
    if (A.step === "code") {
      form = `
        <form class="form" id="auth-form" novalidate>
          <div class="field"><label for="f-code">Code aus der SMS an ${esc(A.phone)}</label>
            <input id="f-code" name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="8" placeholder="123456" required style="font-size:1.6rem;letter-spacing:.3em;text-align:center"></div>
          ${A.known ? "" : `<div class="field"><label for="f-name">Wie heißt du?</label><input id="f-name" name="name" autocomplete="given-name" placeholder="z. B. Lena" required></div>`}
          <div class="err" id="f-err">${esc(msg)}</div>
          <button class="btn primary" type="submit" style="padding:18px;font-size:1.1rem">${A.known ? "Anmelden" : "Los geht’s"}</button>
          <div class="btn-row"><button class="btn" type="button" data-auth="back">Andere Nummer</button><button class="btn" type="button" data-auth="resend">Code neu senden</button></div>
        </form>`;
    } else if (A.step === "test") {
      const reg = A.testMode === "register";
      form = `
        <div class="card" style="background:var(--warn-soft);box-shadow:none"><div class="muted" style="color:var(--ink)">Die SMS-Anmeldung wird gerade eingerichtet. Bis dahin kannst du mit einem Testzugang per E-Mail ausprobieren.</div></div>
        <div class="seg" role="group" aria-label="Testzugang">
          <button data-test-mode="register" aria-pressed="${reg}">Neu hier</button><button data-test-mode="login" aria-pressed="${!reg}">Anmelden</button>
        </div>
        <form class="form" id="auth-form" novalidate>
          <div class="field"><label for="f-login">E-Mail</label><input id="f-login" name="login" type="email" autocomplete="username" placeholder="du@beispiel.de" required></div>
          ${reg ? `<div class="field"><label for="f-name">Dein Name</label><input id="f-name" name="name" autocomplete="given-name" placeholder="z. B. Lena" required></div>` : ""}
          <div class="field"><label for="f-pw">Passwort</label><input id="f-pw" name="pw" type="password" autocomplete="${reg ? "new-password" : "current-password"}" placeholder="${reg ? "mindestens 8 Zeichen" : ""}" required></div>
          <div class="err" id="f-err">${esc(msg)}</div>
          <button class="btn primary" type="submit" style="padding:18px;font-size:1.1rem">${reg ? "Testzugang erstellen" : "Anmelden"}</button>
          <button class="btn" type="button" data-auth="back">Zurück zur SMS-Anmeldung</button>
        </form>`;
    } else {
      form = `
        <form class="form" id="auth-form" novalidate>
          <div class="field"><label for="f-phone">Deine Handynummer</label>
            <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="0171 2345678" value="${esc(A.phone)}" required style="font-size:1.25rem"></div>
          <div class="err" id="f-err">${esc(msg)}</div>
          <button class="btn primary" type="submit" style="padding:18px;font-size:1.1rem">Code per SMS senden</button>
          <p class="fine" style="text-align:center;margin:0">Kein Passwort nötig. Wir schicken dir einen Code.</p>
        </form>
        ${A.smsOff ? `<button class="btn" type="button" data-auth="test">Testzugang mit E-Mail</button>` : ""}`;
    }
    $app.innerHTML = `
      <div class="auth">
        <div class="hero">Wo bist<br>du<span class="q">?</span></div>
        <p class="lede">Die häufigste Frage am Telefon, ohne Anruf. Freund antippen, fragen, fertig. Er entscheidet, ob er seinen Standort zeigt.</p>
        ${form}
        <p class="fine">Mit der Anmeldung akzeptierst du, dass wir Name, Handynummer und die Standorte, die du aktiv teilst, speichern. Geteilte Standorte werden nach Ablauf gelöscht. <a href="/datenschutz/#wobistdu">Datenschutz</a></p>
      </div>`;
    const f = document.getElementById("auth-form");
    const focus = f.querySelector("input"); focus && focus.focus({ preventScroll: true });
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(f));
      const err = document.getElementById("f-err"); err.textContent = "";
      guard(async () => {
        try {
          if (A.step === "phone") {
            const r = await WBD.smsStart(d.phone);
            A.phone = r.phone; A.known = r.known; A.step = "code"; renderAuth();
          } else if (A.step === "code") {
            if (!A.known && (d.name || "").trim().length < 2) { err.textContent = "Bitte gib deinen Namen ein."; return; }
            const r = await WBD.smsCheck(A.phone, d.code, d.name);
            S.me = r.account; await signedIn(r.new);
          } else {
            const reg = A.testMode === "register";
            S.me = reg ? await WBD.register(d.login, d.pw, d.name) : await WBD.login(d.login, d.pw);
            await signedIn(reg);
          }
        } catch (x) {
          if (x.key === "not_configured") { A.smsOff = true; A.step = "phone"; if (d.phone) A.phone = d.phone; renderAuth("Die SMS-Anmeldung ist noch nicht eingerichtet."); return; }
          err.textContent = x.message;
        }
      });
    });
  }

  // ---------- Klicks ----------
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button, a"); if (!b) return;
    const d = b.dataset;
    if (d.close != null || e.target.classList.contains("backdrop")) return closeSheet();
    if (d.auth === "back") { A.step = "phone"; return renderAuth(); }
    if (d.auth === "test") { A.step = "test"; return renderAuth(); }
    if (d.auth === "resend") {
      return guard(async () => {
        try { await WBD.smsStart(A.phone); toast("Neuer Code ist unterwegs"); } catch (x) { toast(x.message); }
      });
    }
    if (d.testMode) { A.testMode = d.testMode; return renderAuth(); }
    if (d.tab) return go(d.tab);
    if (d.pick) {
      S.selected.has(d.pick) ? S.selected.delete(d.pick) : S.selected.add(d.pick);
      if (navigator.vibrate) navigator.vibrate(8);
      return render(true);
    }
    if (d.ask != null) return askSelected();
    if (d.add != null) return addSheet();
    if (d.open) return openChat(d.open);
    if (d.back != null) return go("chats");
    if (d.settings != null) return contactSheet(S.chatWith);
    if (d.answer) { const a = S.msgs.get(+d.answer); return a && answerSheet(a); }
    if (d.quickDecline) { const a = S.msgs.get(+d.quickDecline); return a && doDecline(a.from, "", a.id); }
    if (d.stop) return stopShare(+d.stop);
    if (d.chatAsk != null) return sendQuick(S.chatWith, "ask");
    if (d.andyou != null) return sendQuick(S.chatWith, "ask");
    if (d.shareTo != null) return shareSheet(S.chatWith);
    if (d.come != null) {
      const cid = S.chatWith;
      return guard(async () => { await WBD.send(cid, "quick", "comehere"); await sync(); }).then(() => shareSheet(cid, true));
    }
    if (d.quick) return sendQuick(S.chatWith, "quick", d.quick);
    if (d.eta) return sendQuick(S.chatWith, "eta", d.eta, d.to ? +d.to : null);
    if (d.react) return sendQuick(S.chatWith, "react", d.react, +d.to);
    if (d.copyMe != null) return copy(S.me.phone || S.me.email);
    if (d.notif != null) {
      return Notification.requestPermission().then(() => render()).catch(() => {});
    }
    if (d.logout != null) return guard(async () => { await WBD.logout(); location.reload(); });
    if (d.delete != null) {
      if (!d.confirm) { d.confirm = "1"; b.textContent = "Wirklich löschen? Alles wird entfernt. Noch mal tippen"; return; }
      return guard(async () => { await WBD.deleteAccount(); location.reload(); });
    }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });

  // ---------- Start ----------
  let timer;
  function loop() {
    clearTimeout(timer);
    timer = setTimeout(async () => { await sync(); loop(); }, document.hidden ? 15000 : 3000);
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) { sync(); } loop(); });
  setInterval(() => { if (WBD.loggedIn() && S.me && !$sheet.innerHTML) render(true); }, 30000);

  (async function start() {
    if (!WBD.loggedIn()) return renderAuth();
    await sync();
    if (!S.me) return renderAuth();
    render();
    if (await geoGranted()) locate().catch(() => {});
    loop();
  })();
  // Nach der Anmeldung den Abgleich starten
  document.addEventListener("submit", () => setTimeout(loop, 1500), true);
})();
