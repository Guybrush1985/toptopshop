// Angemeldeten Nutzer aus dem Supabase-Token ermitteln. Supabase Auth prüft das Token selbst
// (GET /auth/v1/user), damit die Prüfung auch ohne JWT-Prüfung am Gateway sicher ist.
import { env, UserError } from "./env.ts";

export type AuthUser = { id: string; email: string };

export async function requireUser(req: Request): Promise<AuthUser> {
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!token) throw new UserError("Bitte melde dich an.", 401);
  const res = await fetch(`${env("SUPABASE_URL")}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: env("SUPABASE_ANON_KEY") },
  });
  if (!res.ok) throw new UserError("Bitte melde dich an.", 401);
  const u = await res.json();
  if (!u?.id) throw new UserError("Bitte melde dich an.", 401);
  return { id: u.id, email: u.email ?? "" };
}
