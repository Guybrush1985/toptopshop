import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { myProfile, supabase, type CoachRow } from './supabase';

// Echte Coach-Konten (gleiche Datenbank wie der Coach-Bereich der Website).
type Ctx = { session: Session | null; profile: CoachRow | null; loading: boolean; refresh: () => Promise<void>; signOut: () => Promise<void> };
const AuthCtx = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<CoachRow | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (s: Session | null) => {
    setSession(s);
    if (!s) { setProfile(null); return; }
    try { setProfile(await myProfile(s.user.id)); } catch { setProfile(null); }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => load(data.session)).finally(() => setLoading(false));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => { load(s); });
    return () => data.subscription.unsubscribe();
  }, [load]);

  const value: Ctx = {
    session, profile, loading,
    refresh: () => load(session),
    signOut: async () => { await supabase.auth.signOut(); },
  };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const c = useContext(AuthCtx);
  if (!c) throw new Error('AuthProvider fehlt');
  return c;
}
