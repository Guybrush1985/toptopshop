// Tandem Now – Prototyp. Ohne Server: Profil und Status liegen im localStorage,
// alle anderen Nutzer sind Demo-Profile, deren Online-Status simuliert wird.
(() => {
  "use strict";
  const { languages, levels, cities, hobbies: hobbyList, people } = window.TN_DATA;
  const KEY = "tandem-now:v1";
  const LEVEL_INDEX = Object.fromEntries(levels.map((l, i) => [l.code, i]));
  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modal-root");

  // ---------------------------------------------------------------------------
  // Zustand
  // ---------------------------------------------------------------------------

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch {
      return {};
    }
  };
  const state = Object.assign({ profile: null, searching: false, history: [], filters: { lang: "all", dist: "all" } }, load());
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ profile: state.profile, searching: state.searching, history: state.history, filters: state.filters }));
    } catch {
      /* privates Fenster: dann eben nur für diese Sitzung */
    }
  };

  // Simulierter Online-Status der Demo-Nutzer, mit „online seit“.
  const now = Date.now();
  const presence = Object.fromEntries(
    people.map((u) => [u.id, { online: u.online, since: now - Math.round(Math.random() * 25 + 1) * 60000, busy: false }]),
  );
  let view = state.profile ? "match" : "welcome";

  // ---------------------------------------------------------------------------
  // Helfer
  // ---------------------------------------------------------------------------

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const lang = (code) => languages[code] || { name: code, flag: "🏳️" };
  const langLabel = (code) => `${lang(code).flag} ${esc(lang(code).name)}`;
  const minutesAgo = (t) => Math.max(1, Math.round((Date.now() - t) / 60000));

  function distanceKm(a, b) {
    const A = cities[a], B = cities[b];
    if (!A || !B) return null;
    const rad = Math.PI / 180;
    const dLat = (B.lat - A.lat) * rad, dLon = (B.lon - A.lon) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(A.lat * rad) * Math.cos(B.lat * rad) * Math.sin(dLon / 2) ** 2;
    return Math.round(6371 * 2 * Math.asin(Math.sqrt(h)));
  }

  function localTime(cityKey) {
    const c = cities[cityKey];
    if (!c) return "";
    const d = new Date(Date.now() + c.tz * 3600000);
    return `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;
  }

  function nearestCity(lat, lon) {
    let best = null, bestD = Infinity;
    for (const [key, c] of Object.entries(cities)) {
      const d = (c.lat - lat) ** 2 + ((c.lon - lon) * Math.cos((lat * Math.PI) / 180)) ** 2;
      if (d < bestD) (best = key), (bestD = d);
    }
    return best;
  }

  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => (t.hidden = true), 3500);
  }

  // ---------------------------------------------------------------------------
  // Matching
  // ---------------------------------------------------------------------------
  // Ein Tandem passt, wenn beide Richtungen stimmen: Der andere spricht als
  // Muttersprache, was ich lerne, und lernt, was ich als Muttersprache spreche.
  // Halbe Treffer (nur eine Richtung) zeigen wir getrennt als Alternative.

  function evaluate(me, u) {
    const iLearnFromThem = me.learn.filter((l) => u.native.includes(l.lang));
    const theyLearnFromMe = u.learn.filter((l) => me.native.includes(l.lang));
    if (!iLearnFromThem.length) return null;

    const mutual = theyLearnFromMe.length > 0;
    let score = mutual ? 55 : 25;
    const reasons = [];

    // Ausgewogenes Niveau macht das Gespräch fair: beide kommen etwa gleich gut zurecht.
    if (mutual) {
      const mine = Math.max(...iLearnFromThem.map((l) => LEVEL_INDEX[l.level]));
      const theirs = Math.max(...theyLearnFromMe.map((l) => LEVEL_INDEX[l.level]));
      const gap = Math.abs(mine - theirs);
      score += [15, 11, 6, 2, 0, 0][gap];
      if (gap <= 1) reasons.push("ähnliches Sprachniveau");
    }

    const shared = u.hobbies.filter((h) => me.hobbies.includes(h));
    score += Math.min(shared.length, 3) * 7;
    if (shared.length) reasons.push(`${shared.length} gemeinsame${shared.length === 1 ? "s Hobby" : " Hobbys"}`);

    const tzGap = Math.abs((cities[me.city]?.tz ?? 1) - (cities[u.city]?.tz ?? 1));
    if (tzGap <= 2) score += 5;

    const km = distanceKm(me.city, u.city);
    if (km !== null && km < 400) {
      score += 4;
      reasons.push("in deiner Nähe");
    }

    return { user: u, mutual, score: Math.min(score, 99), iLearnFromThem, theyLearnFromMe, shared, km };
  }

  function matches() {
    const me = state.profile;
    const { lang: fl, dist } = state.filters;
    const list = people
      .filter((u) => presence[u.id].online)
      .map((u) => evaluate(me, u))
      .filter(Boolean)
      .filter((m) => fl === "all" || m.iLearnFromThem.some((l) => l.lang === fl))
      .filter((m) => dist === "all" || (m.km !== null && m.km <= Number(dist)))
      .sort((a, b) => b.score - a.score);
    return { full: list.filter((m) => m.mutual), half: list.filter((m) => !m.mutual) };
  }

  // ---------------------------------------------------------------------------
  // Ansichten
  // ---------------------------------------------------------------------------

  function render() {
    document.querySelectorAll(".tabs button").forEach((b) => {
      b.hidden = !state.profile;
      b.toggleAttribute("aria-current", b.dataset.view === view);
    });
    app.innerHTML = { welcome: welcomeView, profile: profileView, match: matchView }[view]();
    if (view === "profile") bindProfileForm();
  }

  function welcomeView() {
    const onlineCount = people.filter((u) => presence[u.id].online).length;
    return `
      <section class="hero">
        <p class="eyebrow"><span class="dot"></span> ${onlineCount} Menschen sind gerade online</p>
        <h1>Sprich jetzt. Mit jemandem, der deine Sprache lernt.</h1>
        <p class="lead">Du sagst, welche Sprache du fließend sprichst und welche du lernen willst. Tandem Now zeigt dir, wer <b>genau jetzt</b> online ist und das Gegenstück sucht. Ein Klick, und ihr redet.</p>
        <button class="btn primary big" data-action="start">Profil anlegen</button>
        <ol class="how">
          <li><b>Profil anlegen</b><span>Muttersprache, Lernsprache mit Niveau, ein paar Hobbys und deine Stadt.</span></li>
          <li><b>Online gehen</b><span>Schalte „Suche Partner“ ein, sobald du Zeit für ein Gespräch hast.</span></li>
          <li><b>Loslegen</b><span>Wir zeigen dir passende Partner, die gerade auch suchen. Halbe Zeit deine Sprache, halbe Zeit ihre.</span></li>
        </ol>
      </section>`;
  }

  function profileView() {
    const p = state.profile || { name: "", age: "", city: "berlin", native: ["de"], learn: [{ lang: "en", level: "B1" }], bio: "", hobbies: [] };
    const langOptions = (sel) => Object.entries(languages).map(([c, l]) => `<option value="${c}"${c === sel ? " selected" : ""}>${l.flag} ${esc(l.name)}</option>`).join("");
    const levelOptions = (sel) => levels.map((l) => `<option value="${l.code}"${l.code === sel ? " selected" : ""}>${esc(l.label)}</option>`).join("");
    const cityOptions = Object.entries(cities)
      .sort((a, b) => a[1].country.localeCompare(b[1].country, "de") || a[1].name.localeCompare(b[1].name, "de"))
      .map(([k, c]) => `<option value="${k}"${k === p.city ? " selected" : ""}>${esc(c.name)}, ${esc(c.country)}</option>`)
      .join("");
    const extraHobbies = p.hobbies.filter((h) => !hobbyList.includes(h));

    return `
      <form class="card form" id="profile-form" novalidate>
        <h1>${state.profile ? "Mein Profil" : "Profil anlegen"}</h1>
        <p class="muted">Das sehen mögliche Tandempartner von dir.</p>

        <fieldset>
          <legend>Über dich</legend>
          <div class="row">
            <label>Vorname<input name="name" required maxlength="40" value="${esc(p.name)}" autocomplete="given-name"></label>
            <label class="narrow">Alter<input name="age" type="number" min="16" max="99" value="${esc(p.age)}"></label>
          </div>
          <label>Ein paar Sätze über dich
            <textarea name="bio" rows="3" maxlength="300" placeholder="Warum lernst du die Sprache? Worüber redest du gern?">${esc(p.bio)}</textarea>
          </label>
        </fieldset>

        <fieldset>
          <legend>Wo bist du?</legend>
          <div class="row">
            <label>Stadt<select name="city">${cityOptions}</select></label>
            <button type="button" class="btn ghost" data-action="locate">📍 Standort verwenden</button>
          </div>
          <p class="hint">Wir zeigen anderen nur deine Stadt, nie deinen genauen Standort. Daraus berechnen wir Entfernung und Ortszeit.</p>
        </fieldset>

        <fieldset>
          <legend>Diese Sprachen sprichst du fließend</legend>
          <div class="chips" data-group="native">
            ${Object.entries(languages).map(([c, l]) => `<label class="chip"><input type="checkbox" name="native" value="${c}"${p.native.includes(c) ? " checked" : ""}><span>${l.flag} ${esc(l.name)}</span></label>`).join("")}
          </div>
        </fieldset>

        <fieldset>
          <legend>Diese Sprachen willst du lernen</legend>
          <div id="learn-rows">
            ${p.learn.map((l) => learnRow(l, langOptions, levelOptions)).join("")}
          </div>
          <button type="button" class="btn ghost small" data-action="add-learn">+ Weitere Sprache</button>
          <template id="learn-template">${learnRow({ lang: "es", level: "A1" }, langOptions, levelOptions)}</template>
        </fieldset>

        <fieldset>
          <legend>Hobbys und Interessen</legend>
          <p class="hint">Gemeinsame Interessen geben euch sofort Gesprächsstoff. Wähle bis zu 8.</p>
          <div class="chips" data-group="hobbies">
            ${[...hobbyList, ...extraHobbies].map((h) => `<label class="chip"><input type="checkbox" name="hobbies" value="${esc(h)}"${p.hobbies.includes(h) ? " checked" : ""}><span>${esc(h)}</span></label>`).join("")}
          </div>
          <div class="row">
            <label>Eigenes Hobby<input name="hobby-new" maxlength="30" placeholder="z. B. Segeln"></label>
            <button type="button" class="btn ghost" data-action="add-hobby">Hinzufügen</button>
          </div>
        </fieldset>

        <p class="error" id="form-error" role="alert" hidden></p>
        <div class="actions">
          <button class="btn primary big" type="submit">${state.profile ? "Speichern" : "Profil speichern und Partner finden"}</button>
        </div>
      </form>`;
  }

  function learnRow(l, langOptions, levelOptions) {
    return `<div class="row learn-row">
      <label>Sprache<select name="learn-lang">${langOptions(l.lang)}</select></label>
      <label>Dein Niveau<select name="learn-level">${levelOptions(l.level)}</select></label>
      <button type="button" class="icon-btn" data-action="remove-learn" aria-label="Sprache entfernen">✕</button>
    </div>`;
  }

  function bindProfileForm() {
    const form = document.getElementById("profile-form");
    const err = document.getElementById("form-error");

    form.addEventListener("change", (e) => {
      if (e.target.name === "hobbies" && form.querySelectorAll('[name="hobbies"]:checked').length > 8) {
        e.target.checked = false;
        toast("Maximal 8 Hobbys");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get("name").trim();
      const native = fd.getAll("native");
      const langs = fd.getAll("learn-lang"), lvls = fd.getAll("learn-level");
      const learn = [];
      langs.forEach((c, i) => {
        if (!learn.some((l) => l.lang === c)) learn.push({ lang: c, level: lvls[i] });
      });

      const problem =
        (!name && "Bitte gib deinen Vornamen an.") ||
        (!native.length && "Wähle mindestens eine Sprache, die du fließend sprichst.") ||
        (!learn.length && "Wähle mindestens eine Sprache, die du lernen willst.") ||
        (learn.some((l) => native.includes(l.lang)) && "Eine Lernsprache kann nicht gleichzeitig deine fließende Sprache sein.");
      if (problem) {
        err.textContent = problem;
        err.hidden = false;
        err.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      const first = !state.profile;
      state.profile = {
        name, native, learn,
        age: fd.get("age") ? Number(fd.get("age")) : "",
        city: fd.get("city"),
        bio: fd.get("bio").trim(),
        hobbies: fd.getAll("hobbies"),
      };
      state.filters.lang = "all";
      save();
      toast(first ? `Willkommen, ${name}!` : "Profil gespeichert");
      go("match");
    });
  }

  function matchView() {
    const me = state.profile;
    const statusCard = `
      <section class="card status ${state.searching ? "on" : ""}">
        <div>
          <h1>${state.searching ? "Du bist online und suchst" : `Hallo ${esc(me.name)}, bereit zum Sprechen?`}</h1>
          <p class="muted">${state.searching
            ? "Andere sehen dich jetzt in ihrer Liste. Schalte aus, wenn du keine Zeit mehr hast."
            : "Schalte ein, sobald du Zeit für ein Gespräch hast. Dann siehst du, wer gerade passt."}</p>
          <p class="me-langs">Du sprichst ${me.native.map(langLabel).join(", ")} · du lernst ${me.learn.map((l) => `${langLabel(l.lang)} <span class="lvl">${l.level}</span>`).join(" · ")}</p>
        </div>
        <button class="switch" role="switch" aria-checked="${state.searching}" data-action="toggle-search">
          <span class="knob"></span><span class="switch-label">${state.searching ? "Online · suche Partner" : "Offline"}</span>
        </button>
      </section>`;

    if (!state.searching) {
      const preview = matches();
      return `${statusCard}
        <section class="empty">
          <p class="big-num">${preview.full.length}</p>
          <p>passende Partner sind gerade online. Geh online, um sie zu sehen und anzufragen.</p>
        </section>
        ${historyView()}`;
    }

    const { full, half } = matches();
    const langFilter = me.learn.length > 1
      ? `<label>Sprache<select data-filter="lang"><option value="all">Alle meine Lernsprachen</option>${me.learn.map((l) => `<option value="${l.lang}"${state.filters.lang === l.lang ? " selected" : ""}>${esc(lang(l.lang).name)}</option>`).join("")}</select></label>`
      : "";
    const distFilter = `<label>Entfernung<select data-filter="dist">
        ${[["all", "Weltweit"], ["2000", "bis 2.000 km"], ["500", "bis 500 km"], ["100", "bis 100 km"]].map(([v, t]) => `<option value="${v}"${state.filters.dist === v ? " selected" : ""}>${t}</option>`).join("")}
      </select></label>`;

    return `${statusCard}
      <section class="list-head">
        <h2>Passt perfekt <span class="count">${full.length} online</span></h2>
        <div class="filters">${langFilter}${distFilter}</div>
      </section>
      <p class="muted small">Ihr ergänzt euch: Sie sprechen deine Lernsprache und lernen deine Sprache.</p>
      <div class="grid">${full.map(matchCard).join("") || `<p class="card empty-card">Gerade ist niemand online, der genau passt. Bleib online, wir sagen dir Bescheid, sobald jemand kommt.</p>`}</div>
      ${half.length ? `
        <section class="list-head"><h2>Auch interessant <span class="count">${half.length}</span></h2></section>
        <p class="muted small">Sprechen deine Lernsprache, lernen aber gerade etwas anderes. Vielleicht helfen sie trotzdem gern.</p>
        <div class="grid">${half.map(matchCard).join("")}</div>` : ""}
      ${historyView()}`;
  }

  function matchCard(m) {
    const u = m.user;
    const c = cities[u.city];
    const busy = presence[u.id].busy;
    return `
      <article class="card match">
        <header>
          <div class="avatar" style="--h:${(u.name.charCodeAt(0) * 37) % 360}">${esc(u.name[0])}</div>
          <div>
            <h3>${esc(u.name)}, ${u.age}</h3>
            <p class="muted small">${esc(c.name)}, ${esc(c.country)}${m.km !== null ? ` · ${m.km.toLocaleString("de-DE")} km` : ""} · dort ${localTime(u.city)} Uhr</p>
          </div>
          <span class="score" title="Wie gut ihr zusammenpasst">${m.score}%</span>
        </header>
        <p class="presence ${busy ? "busy" : ""}"><span class="dot"></span>${busy ? "Gerade im Gespräch" : `Online seit ${minutesAgo(presence[u.id].since)} Min · sucht Partner`}</p>
        <dl class="langs">
          <div><dt>Spricht</dt><dd>${u.native.map(langLabel).join(", ")}</dd></div>
          <div><dt>Lernt</dt><dd>${u.learn.map((l) => `${langLabel(l.lang)} <span class="lvl">${l.level}</span>`).join(" · ")}</dd></div>
        </dl>
        <p class="bio">${esc(u.bio)}</p>
        <ul class="tags">${u.hobbies.map((h) => `<li class="${m.shared.includes(h) ? "shared" : ""}">${esc(h)}</li>`).join("")}</ul>
        <footer>
          <button class="btn primary" data-action="request" data-id="${u.id}"${busy ? " disabled" : ""}>Jetzt sprechen</button>
        </footer>
      </article>`;
  }

  function historyView() {
    if (!state.history.length) return "";
    return `<section class="history">
      <h2>Letzte Gespräche</h2>
      <ul>${state.history.slice(0, 5).map((h) => {
        const u = people.find((x) => x.id === h.id);
        return u ? `<li><b>${esc(u.name)}</b> · ${langLabel(h.lang)} ↔ ${langLabel(h.other)} · ${h.minutes} Min · ${"★".repeat(h.stars || 0)}<span class="muted"> ${new Date(h.at).toLocaleDateString("de-DE")}</span></li>` : "";
      }).join("")}</ul>
    </section>`;
  }

  // ---------------------------------------------------------------------------
  // Anfrage und (simuliertes) Gespräch
  // ---------------------------------------------------------------------------

  function modal(html) {
    modalRoot.innerHTML = `<div class="overlay"><div class="modal card" role="dialog" aria-modal="true">${html}</div></div>`;
    modalRoot.querySelector("button")?.focus();
  }
  const closeModal = () => {
    clearInterval(call.timer);
    clearTimeout(call.wait);
    modalRoot.innerHTML = "";
  };
  const call = { timer: null, wait: null };

  function requestTalk(id) {
    const u = people.find((x) => x.id === id);
    const m = evaluate(state.profile, u);
    modal(`
      <div class="ringing"><div class="avatar xl" style="--h:${(u.name.charCodeAt(0) * 37) % 360}">${esc(u.name[0])}</div></div>
      <h2>Anfrage an ${esc(u.name)} gesendet</h2>
      <p class="muted">${esc(u.name)} bekommt eine Benachrichtigung und kann annehmen oder ablehnen.</p>
      <button class="btn ghost" data-action="close">Abbrechen</button>`);
    // Im Prototyp nimmt die Gegenseite meistens an.
    call.wait = setTimeout(() => {
      if (!state.history.length || Math.random() < 0.85) startCall(u, m);
      else {
        presence[u.id].busy = true;
        modal(`<h2>${esc(u.name)} ist gerade in einem anderen Gespräch</h2><p class="muted">Versuch es mit jemand anderem, wir zeigen dir weitere Partner.</p><button class="btn primary" data-action="close">Okay</button>`);
        render();
      }
    }, 1800 + Math.random() * 1500);
  }

  function startCall(u, m) {
    const mine = m.iLearnFromThem[0].lang;
    const theirs = (m.theyLearnFromMe[0] || { lang: state.profile.native[0] }).lang;
    const topic = m.shared[0] || u.hobbies[0];
    const starters = [
      `Erzähl mal, wie bist du zum Thema „${topic}“ gekommen?`,
      `Wie spät ist es bei dir gerade, und was hast du heute noch vor?`,
      `Warum lernst du ${lang(theirs).name}?`,
    ];
    const start = Date.now();
    const HALF = 15 * 60;

    modal(`
      <div class="call">
        <div class="video">
          <div class="avatar xl" style="--h:${(u.name.charCodeAt(0) * 37) % 360}">${esc(u.name[0])}</div>
          <p class="muted small">Video- und Audioverbindung sind im Prototyp nur angedeutet.</p>
        </div>
        <h2>Du sprichst mit ${esc(u.name)}</h2>
        <p class="timer" id="timer">00:00</p>
        <div class="halves">
          <div class="half active" id="half-1"><b>Teil 1 · ${langLabel(mine)}</b><span>Du übst, ${esc(u.name)} hilft.</span></div>
          <div class="half" id="half-2"><b>Teil 2 · ${langLabel(theirs)}</b><span>${esc(u.name)} übt, du hilfst.</span></div>
        </div>
        <div class="starter">
          <p class="small muted">Gesprächsidee</p>
          <p id="starter">${esc(starters[0])}</p>
          <button class="btn ghost small" data-action="next-starter">Andere Idee</button>
        </div>
        <div class="actions">
          <button class="btn ghost" data-action="switch-half">Sprache wechseln</button>
          <button class="btn danger" data-action="hangup">Beenden</button>
        </div>
      </div>`);

    let starterIdx = 0, half = 1;
    const setHalf = (n) => {
      half = n;
      document.getElementById("half-1")?.classList.toggle("active", n === 1);
      document.getElementById("half-2")?.classList.toggle("active", n === 2);
    };
    call.timer = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      const el = document.getElementById("timer");
      if (el) el.textContent = `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
      if (s === HALF && half === 1) {
        setHalf(2);
        toast(`Halbzeit! Jetzt ist ${lang(theirs).name} dran.`);
      }
    }, 1000);

    call.onAction = (action) => {
      if (action === "next-starter") document.getElementById("starter").textContent = starters[(starterIdx = (starterIdx + 1) % starters.length)];
      if (action === "switch-half") setHalf(half === 1 ? 2 : 1);
      if (action === "hangup") {
        clearInterval(call.timer);
        const minutes = Math.max(1, Math.round((Date.now() - start) / 60000));
        rate(u, { lang: mine, other: theirs, minutes });
      }
    };
  }

  function rate(u, entry) {
    modal(`
      <h2>Wie war das Gespräch mit ${esc(u.name)}?</h2>
      <div class="stars" role="radiogroup" aria-label="Bewertung">
        ${[1, 2, 3, 4, 5].map((n) => `<button class="star" data-action="rate" data-stars="${n}" aria-label="${n} Sterne">★</button>`).join("")}
      </div>
      <button class="btn ghost" data-action="rate" data-stars="0">Überspringen</button>`);
    call.onAction = null;
    call.rate = (stars) => {
      state.history.unshift({ id: u.id, ...entry, stars, at: Date.now() });
      state.history = state.history.slice(0, 20);
      save();
      closeModal();
      toast(stars ? "Danke! Deine Bewertung hilft beim Matching." : "Gespräch gespeichert");
      render();
    };
  }

  // ---------------------------------------------------------------------------
  // Simulation: Demo-Nutzer kommen und gehen
  // ---------------------------------------------------------------------------

  setInterval(() => {
    const u = people[Math.floor(Math.random() * people.length)];
    const p = presence[u.id];
    p.online = !p.online;
    p.busy = false;
    p.since = Date.now();
    if (state.profile && state.searching && p.online) {
      const m = evaluate(state.profile, u);
      if (m?.mutual) toast(`${u.name} ist gerade online gekommen und passt zu dir`);
    }
    if (!modalRoot.innerHTML && view !== "profile") render();
  }, 9000);

  // ---------------------------------------------------------------------------
  // Ereignisse
  // ---------------------------------------------------------------------------

  function go(v) {
    view = v;
    render();
    window.scrollTo({ top: 0 });
    app.focus({ preventScroll: true });
  }

  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".tabs button");
    if (tab) return go(tab.dataset.view);

    if (e.target.id === "reset") {
      e.preventDefault();
      if (confirm("Profil, Status und Gesprächsverlauf in diesem Browser löschen?")) {
        try { localStorage.removeItem(KEY); } catch { /* egal */ }
        location.reload();
      }
      return;
    }

    if (e.target.classList.contains("overlay")) return closeModal();

    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const a = btn.dataset.action;
    if (a === "start") go("profile");
    else if (a === "toggle-search") {
      state.searching = !state.searching;
      save();
      render();
      toast(state.searching ? "Du bist online. Viel Spaß beim Sprechen!" : "Du bist jetzt offline");
    } else if (a === "request") requestTalk(btn.dataset.id);
    else if (a === "close") closeModal();
    else if (a === "rate") call.rate?.(Number(btn.dataset.stars));
    else if (["next-starter", "switch-half", "hangup"].includes(a)) call.onAction?.(a);
    else if (a === "add-learn") {
      const rows = document.getElementById("learn-rows");
      if (rows.children.length >= 3) return toast("Maximal 3 Lernsprachen");
      rows.insertAdjacentHTML("beforeend", document.getElementById("learn-template").innerHTML);
    } else if (a === "remove-learn") {
      const rows = document.getElementById("learn-rows");
      if (rows.children.length > 1) btn.closest(".learn-row").remove();
      else toast("Mindestens eine Lernsprache");
    } else if (a === "add-hobby") {
      const input = document.querySelector('[name="hobby-new"]');
      const h = input.value.trim();
      if (!h) return;
      const group = document.querySelector('[data-group="hobbies"]');
      const existing = [...group.querySelectorAll("input")].find((i) => i.value.toLowerCase() === h.toLowerCase());
      if (existing) existing.checked = true;
      else group.insertAdjacentHTML("beforeend", `<label class="chip"><input type="checkbox" name="hobbies" value="${esc(h)}" checked><span>${esc(h)}</span></label>`);
      input.value = "";
    } else if (a === "locate") {
      if (!navigator.geolocation) return toast("Dein Browser unterstützt keine Standortabfrage");
      btn.disabled = true;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const key = nearestCity(pos.coords.latitude, pos.coords.longitude);
          document.querySelector('[name="city"]').value = key;
          toast(`Nächste Stadt: ${cities[key].name}`);
          btn.disabled = false;
        },
        () => {
          toast("Standort nicht verfügbar, bitte Stadt auswählen");
          btn.disabled = false;
        },
        { timeout: 8000, maximumAge: 600000 },
      );
    }
  });

  document.addEventListener("change", (e) => {
    const f = e.target.dataset?.filter;
    if (!f) return;
    state.filters[f] = e.target.value;
    save();
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalRoot.innerHTML) closeModal();
  });

  render();
})();
