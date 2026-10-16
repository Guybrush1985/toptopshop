import { createClient } from "@supabase/supabase-js";
import { REMOTE, SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

export { REMOTE };

export const supabase = REMOTE
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true, storageKey: "thirsty-auth" } })
  : null;
