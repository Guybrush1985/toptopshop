import { createClient } from '@supabase/supabase-js';
import { storage } from './storage';

// Gleiches Backend wie der Coach-Bereich der Website (Supabase, Frankfurt). Öffentlicher Schlüssel, Zugriff über RLS.
export const SUPABASE_URL = 'https://htibyxvxryraooarkwjg.supabase.co';
const KEY = 'sb_publishable_Jin5STAwVyaIRaXdqAjZEQ_ttqap1Ro';
export const BUCKET = 'coach-files';

export const supabase = createClient(SUPABASE_URL, KEY, {
  auth: { storage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
});

export type CoachRow = {
  id: string; email: string; first_name: string; last_name: string; phone: string | null; tier: 'C' | 'B' | 'A' | 'P';
  pro_tour: 'ATP' | 'WTA' | null; pro_rank: number | null; pro_license: 'C' | 'B' | 'A' | null;
  club: string | null; city: string | null; bio: string | null; langs: string[]; photo_path: string | null; proof_path: string | null;
  status: 'missing_proof' | 'in_review' | 'live' | 'rejected';
};

const MSG: Record<string, string> = {
  'User already registered': 'Mit dieser E-Mail-Adresse gibt es schon ein Konto. Bitte logg dich ein.',
  'Invalid login credentials': 'E-Mail-Adresse oder Passwort stimmen nicht.',
  'Email not confirmed': 'Bitte bestätige zuerst deine E-Mail-Adresse. Den Link haben wir dir geschickt.',
};
export const germanError = (e: unknown) => {
  const m = e instanceof Error ? e.message : String(e);
  if (/fetch|network/i.test(m)) return 'Keine Verbindung zum Server. Bitte versuch es gleich noch einmal.';
  if (/password/i.test(m) && /least|characters/i.test(m)) return 'Das Passwort muss mindestens 8 Zeichen haben.';
  return MSG[m] || m;
};

export const licenseOf = (r: Pick<CoachRow, 'tier' | 'pro_tour' | 'pro_rank' | 'pro_license'>) => r.tier === 'P'
  ? `Ex-Profi · beste ${r.pro_tour || 'ATP'}-Platzierung ${r.pro_rank || '?'}` + (r.pro_license ? ` · DTB ${r.pro_license}-Lizenz` : '')
  : ({ C: 'DTB C-Lizenz / Übungsleiter', B: 'DTB B-Lizenz', A: 'DTB A-Lizenz' } as const)[r.tier];

export async function myProfile(userId: string) {
  const { data, error } = await supabase.from('coaches').select('*').eq('id', userId).maybeSingle();
  if (error) throw error;
  return data as CoachRow | null;
}

// Datei in den privaten Bucket hochladen (Ordner = eigene Nutzer-ID, so verlangen es die Speicherregeln).
export async function uploadFile(userId: string, kind: 'nachweis' | 'foto', file: { uri: string; name?: string | null; mimeType?: string | null }) {
  const ext = ((file.name || file.uri).split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5) || 'bin';
  const path = `${userId}/${kind}-${Date.now()}.${ext}`;
  const body = await (await fetch(file.uri)).arrayBuffer();
  const { error } = await supabase.storage.from(BUCKET).upload(path, body, { contentType: file.mimeType || 'application/octet-stream', upsert: true });
  if (error) throw error;
  return path;
}

export async function searchClubs(q: string) {
  if (q.trim().length < 2) return [];
  const { data } = await supabase.from('clubs').select('name, city').ilike('name', `%${q.trim()}%`).order('name').limit(12);
  return (data || []) as { name: string; city: string }[];
}
