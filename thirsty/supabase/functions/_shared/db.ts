// Direkte Datenbankverbindung (Rolle postgres). Umgeht Row Level Security; jede Aktion prüft Berechtigungen selbst.
import postgres from "npm:postgres@3.4.9";
import { env } from "./env.ts";

let client: ReturnType<typeof postgres> | null = null;
export function db() {
  client ??= postgres(env("SUPABASE_DB_URL"), { max: 2, prepare: false, idle_timeout: 20, onnotice: () => {} });
  return client;
}
export type Sql = ReturnType<typeof db>;
