// Live-Betrieb, sobald beide Werte beim Build gesetzt sind (thirsty/.env.production).
// Der anon-Schlüssel ist öffentlich; geschützt wird über Row Level Security in supabase/schema.sql.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const REMOTE = !!(SUPABASE_URL && SUPABASE_ANON_KEY);
