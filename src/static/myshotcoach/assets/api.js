// MyShotCoach – Verbindung zum Backend (Supabase, EU) für echte Coach-Konten.
// Nur für den Coach-Bereich. Die Sitzung lebt im Arbeitsspeicher: kein Cookie, kein Local Storage.
(function () {
'use strict';
const URL_ = 'https://htibyxvxryraooarkwjg.supabase.co';
const KEY = 'sb_publishable_Jin5STAwVyaIRaXdqAjZEQ_ttqap1Ro';
const BUCKET = 'coach-files';

const MSG = {
  'User already registered': 'Mit dieser E-Mail-Adresse gibt es schon ein Konto. Bitte logg dich ein.',
  'Invalid login credentials': 'E-Mail-Adresse oder Passwort stimmen nicht.',
  'Email not confirmed': 'Bitte bestätige zuerst deine E-Mail-Adresse. Den Link haben wir dir geschickt.',
};
async function call(path, {method = 'GET', token, body, headers = {}, raw} = {}) {
  const h = {apikey: KEY, ...headers};
  if (token) h.Authorization = 'Bearer ' + token;
  if (body !== undefined && !raw) h['Content-Type'] = 'application/json';
  let res;
  try { res = await fetch(URL_ + path, {method, headers: h, body: raw ? body : body !== undefined ? JSON.stringify(body) : undefined}); }
  catch (e) { throw new Error('Keine Verbindung zum Server. Bitte versuch es gleich noch einmal.'); }
  const txt = await res.text();
  const data = txt ? (() => { try { return JSON.parse(txt); } catch (e) { return txt; } })() : null;
  if (!res.ok) {
    const m = data && (data.msg || data.message || data.error_description || data.error) || 'Unbekannter Fehler';
    throw new Error(MSG[m] || (/password/i.test(m) ? 'Das Passwort muss mindestens 8 Zeichen haben.' : m));
  }
  return data;
}
const redirect = () => location.origin + location.pathname;

const api = {
  async signUp(email, password, meta) {
    const d = await call('/auth/v1/signup?redirect_to=' + encodeURIComponent(redirect()), {method:'POST', body:{email, password, data:meta}});
    return d && d.access_token ? {session:d} : {session:null, user:d && (d.user || d)};
  },
  signIn: (email, password) => call('/auth/v1/token?grant_type=password', {method:'POST', body:{email, password}}),
  resetPassword: email => call('/auth/v1/recover?redirect_to=' + encodeURIComponent(redirect()), {method:'POST', body:{email}}),
  async user(token) { return call('/auth/v1/user', {token}); },
  async profile(s) {
    const rows = await call('/rest/v1/coaches?select=*&id=eq.' + s.user.id, {token:s.access_token});
    return rows && rows[0];
  },
  async update(s, patch) {
    const rows = await call('/rest/v1/coaches?id=eq.' + s.user.id, {method:'PATCH', token:s.access_token, body:patch, headers:{Prefer:'return=representation'}});
    return rows && rows[0];
  },
  async upload(s, kind, file) {
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5);
    const path = `${s.user.id}/${kind}-${Date.now()}.${ext}`;
    await call(`/storage/v1/object/${BUCKET}/${path}`, {method:'POST', token:s.access_token, body:file, raw:true, headers:{'Content-Type':file.type || 'application/octet-stream', 'x-upsert':'true'}});
    return path;
  },
  // Tennisvereine (Quelle: OpenStreetMap) für die Vereinssuche
  async clubs(q, city) {
    const c = x => (x || '').replace(/[*,()."\\]/g, ' ').trim();
    const parts = [];
    if (c(q)) parts.push(`name.ilike.*${c(q)}*`);
    if (c(city)) parts.push(`or(city.ilike.${c(city)},name.ilike.*${c(city)}*)`);
    if (!parts.length) return [];
    try { return await call('/rest/v1/clubs?select=name,city&order=name&limit=8&and=(' + encodeURIComponent(parts.join(',')) + ')'); } catch (e) { return []; }
  },
  // Automatische Vorprüfung des Nachweises (Server ruft die KI auf, ein Mensch entscheidet über die Freischaltung)
  async checkProof(s) {
    try { return await call('/functions/v1/check-proof', {method:'POST', token:s.access_token, body:{}}); } catch (e) { return null; }
  },
  // Login-Link aus der Bestätigungs-Mail: #access_token=…&refresh_token=…
  async fromHash() {
    const h = location.hash;
    if (!/access_token=/.test(h)) return null;
    const p = new URLSearchParams(h.replace(/^#\/?/, ''));
    history.replaceState(null, '', location.pathname + '#/profil');
    const token = p.get('access_token');
    const user = await api.user(token);
    return {access_token:token, refresh_token:p.get('refresh_token'), user, type:p.get('type')};
  },
};
window.MSC_API = api;
})();
