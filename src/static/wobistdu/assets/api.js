/* Wo bist du? – Datenbank-Zugriff ohne Bibliothek.
   Alle Daten laufen über die Funktionen public.wbd_* im Supabase-Projekt (EU, Frankfurt). */
(function () {
  const URL = "https://pkfvbyawkgjdktduqlxb.supabase.co";
  const KEY = "sb_publishable_tkICz06L3PYOb-FI8ogfZg_D0Ernmfz";
  const TOKEN_KEY = "wbd_session";

  const store = {
    get() { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
    set(t) { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch {} },
  };

  async function rpc(fn, args = {}) {
    let res;
    try {
      res = await fetch(`${URL}/rest/v1/rpc/${fn}`, {
        method: "POST",
        headers: { apikey: KEY, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(args),
      });
    } catch {
      const e = new Error("Keine Verbindung. Bitte prüfe dein Internet.");
      e.offline = true;
      throw e;
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const err = new Error((data && (data.message || data.hint)) || "Da ist etwas schiefgelaufen.");
      err.code = data && data.code;
      if (err.code === "28000") { store.set(null); err.auth = true; }
      throw err;
    }
    if (data && typeof data === "object" && !Array.isArray(data) && data.error) {
      const e = new Error(data.error);
      e.key = data.error;
      throw e;
    }
    return data;
  }

  async function sms(body) {
    let res;
    try {
      res = await fetch(`${URL}/functions/v1/wbd-sms`, {
        method: "POST", headers: { apikey: KEY, "Content-Type": "application/json" }, body: JSON.stringify(body),
      });
    } catch { throw new Error("Keine Verbindung. Bitte prüfe dein Internet."); }
    const data = await res.json().catch(() => ({}));
    if (data.error) { const e = new Error(data.error); e.key = data.error; throw e; }
    if (!res.ok) throw new Error("Da ist etwas schiefgelaufen.");
    return data;
  }

  const t = () => store.get();
  window.WBD = {
    loggedIn: () => !!store.get(),
    async register(login, password, name) {
      const r = await rpc("wbd_register", { p_login: login, p_password: password, p_name: name });
      store.set(r.token); return r.account;
    },
    async login(login, password) {
      const r = await rpc("wbd_login", { p_login: login, p_password: password });
      store.set(r.token); return r.account;
    },
    smsStart: (phone) => sms({ action: "start", phone }),
    async smsCheck(phone, code, name) {
      const r = await sms({ action: "check", phone, code, name: name || null });
      store.set(r.token); return r;
    },
    async logout() { try { await rpc("wbd_logout", { p_token: t() }); } finally { store.set(null); } },
    async deleteAccount() { await rpc("wbd_delete_account", { p_token: t() }); store.set(null); },
    sync: (since) => rpc("wbd_sync", { p_token: t(), p_since: since || 0 }),
    addContact: (login) => rpc("wbd_add_contact", { p_token: t(), p_login: login }),
    setContact: (id, f) => rpc("wbd_set_contact", {
      p_token: t(), p_contact: id, p_trusted: f.trusted ?? null, p_muted: f.muted ?? null, p_blocked: f.blocked ?? null,
    }),
    removeContact: (id) => rpc("wbd_remove_contact", { p_token: t(), p_contact: id }),
    read: (id, upto) => rpc("wbd_read", { p_token: t(), p_contact: id, p_upto: upto }),
    send: (to, kind, body = null, replyTo = null) =>
      rpc("wbd_send", { p_token: t(), p_to: to, p_kind: kind, p_body: body, p_reply_to: replyTo }),
    share: (to, pos, mode, minutes, replyTo = null) => rpc("wbd_share", {
      p_token: t(), p_to: to, p_lat: pos.lat, p_lng: pos.lng, p_accuracy: Math.round(pos.acc || 30),
      p_mode: mode, p_minutes: minutes, p_reply_to: replyTo,
    }),
    liveUpdate: (id, pos) => rpc("wbd_live_update", {
      p_token: t(), p_id: id, p_lat: pos.lat, p_lng: pos.lng, p_accuracy: Math.round(pos.acc || 30),
    }),
    stop: (id) => rpc("wbd_stop", { p_token: t(), p_id: id }),
  };
})();
