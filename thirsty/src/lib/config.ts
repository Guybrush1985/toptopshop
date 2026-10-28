// Live-Betrieb, sobald beide Werte beim Build gesetzt sind (thirsty/.env.production).
// Der anon-Schlüssel ist öffentlich; geschützt wird über Row Level Security in supabase/schema.sql.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const REMOTE = !!(SUPABASE_URL && SUPABASE_ANON_KEY);

/** true im Build für die iOS- und Android-App (npm run app). */
export const APP = process.env.NEXT_PUBLIC_TARGET === "app";
/** Unterpfad der Seite; seit der Subdomain firsty.toptop.shop überall "". */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** Öffentliche Adresse der Website, z. B. für Links in E-Mails und Rücksprünge nach einer Zahlung. */
export const SITE_URL = "https://firsty.toptop.shop";
/** URL-Schema der App, über das Stripe-Rücksprünge die App wieder öffnen (siehe /zahlung/). */
export const APP_SCHEME = "firsty";
