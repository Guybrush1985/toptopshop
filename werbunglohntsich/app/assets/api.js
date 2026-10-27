/* Werbung lohnt sich – Datenbank-Zugriff ohne Bibliothek.
   Alle Daten laufen über die Funktionen public.wls_* im Supabase-Projekt (EU, Frankfurt). */
(function () {
  const URL = "https://pkfvbyawkgjdktduqlxb.supabase.co";
  const KEY = "sb_publishable_tkICz06L3PYOb-FI8ogfZg_D0Ernmfz";
  const TOKEN_KEY = "wls_session";

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
      throw new Error("Keine Verbindung. Bitte prüfe dein Internet.");
    }
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const err = new Error((data && (data.message || data.hint)) || "Da ist etwas schiefgelaufen.");
      err.code = data && data.code;
      if (err.code === "28000") { store.set(null); err.auth = true; }
      throw err;
    }
    if (data && typeof data === "object" && !Array.isArray(data) && data.error) throw new Error(data.error);
    return data;
  }

  const t = () => store.get();
  const api = {
    token: t,
    loggedIn: () => !!store.get(),
    async register(f) {
      const r = await rpc("wls_register", { p_email: f.email, p_password: f.password, p_name: f.name, p_role: f.role, p_company: f.company || null, p_adult: !!f.adult });
      store.set(r.token); return r.account;
    },
    async login(email, password) {
      const r = await rpc("wls_login", { p_email: email, p_password: password });
      store.set(r.token); return r.account;
    },
    async logout() { const tok = t(); store.set(null); if (tok) { try { await rpc("wls_logout", { p_token: tok }); } catch {} } },
    me: () => rpc("wls_me", { p_token: t() }),
    stats: () => rpc("wls_public_stats"),
    feed: () => rpc("wls_feed", { p_token: t() }),
    startView: (id) => rpc("wls_start_view", { p_token: t(), p_campaign: id }),
    quiz: (view) => rpc("wls_view_quiz", { p_token: t(), p_view: view }),
    submit: (view, answers) => rpc("wls_submit_view", { p_token: t(), p_view: view, p_answers: answers }),
    wallet: () => rpc("wls_wallet", { p_token: t() }),
    payout: (kind) => rpc("wls_request_payout", { p_token: t(), p_kind: kind }),
    myCampaigns: () => rpc("wls_my_campaigns", { p_token: t() }),
    saveCampaign: (c) => rpc("wls_save_campaign", { p_token: t(), p: c }),
    pauseCampaign: (id, pause) => rpc("wls_pause_campaign", { p_token: t(), p_id: id, p_pause: pause }),
    admin: () => rpc("wls_admin", { p_token: t() }),
    adminCampaign: (id, status, note) => rpc("wls_admin_campaign", { p_token: t(), p_id: id, p_status: status, p_note: note || null }),
    adminPayout: (id, status) => rpc("wls_admin_payout", { p_token: t(), p_id: id, p_status: status }),
    // Spot hochladen: Edge Function liefert eine signierte Upload-Adresse
    async upload(file, onProgress) {
      const res = await fetch(`${URL}/functions/v1/wls-upload`, {
        method: "POST", headers: { apikey: KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ token: t(), type: file.type }),
      });
      const info = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(info.error || "Upload nicht möglich.");
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", info.signedUrl);
        xhr.setRequestHeader("Content-Type", file.type);
        xhr.setRequestHeader("x-upsert", "false");
        xhr.upload.onprogress = (e) => e.lengthComputable && onProgress && onProgress(e.loaded / e.total);
        xhr.onload = () => (xhr.status < 300 ? resolve() : reject(new Error("Upload fehlgeschlagen (" + xhr.status + ").")));
        xhr.onerror = () => reject(new Error("Upload fehlgeschlagen."));
        xhr.send(file);
      });
      return info.publicUrl;
    },
  };
  window.WLS_API = api;
})();
