"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState, type ReactNode } from "react";
import { useCurrentUser, useStore } from "@/lib/store";
import { logout } from "@/lib/actions";
import { REMOTE } from "@/lib/config";
import { startRemote } from "@/lib/remote";
import { Loading } from "./ui";

/** Rahmen der App. Rendert erst im Browser, weil die Daten im Browser geladen werden (Local Storage oder Supabase). */
export function Shell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (REMOTE) startRemote();
    setMounted(true);
  }, []);
  return (
    <>
      <div className="bg-stone-900 px-4 py-1.5 text-center text-xs text-stone-200">
        {REMOTE ? "Testphase: Thirsty startet gerade. Mit „Beispiel“ markierte Restaurants sind erfunden." : "Vorschau: Buchungen und Konten liegen nur in diesem Browser."}{" "}
        <Link href="/hinweise/" className="underline">Mehr erfahren</Link>
      </div>
      {mounted ? <Header /> : <div className="h-[57px] border-b border-stone-200 bg-white" />}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {mounted ? <Ready><Suspense fallback={<Loading />}>{children}</Suspense></Ready> : <Loading />}
      </main>
      <footer className="mx-auto flex max-w-5xl flex-wrap gap-x-3 gap-y-1 px-4 pb-10 text-xs text-stone-500">
        <span>Thirsty · {REMOTE ? "ein Angebot" : "eine Vorschau"} der TanMeOn GmbH</span>
        <Link href="/registrieren/?rolle=restaurant" className="underline">Für Restaurants</Link>
        <Link href="/hinweise/" className="underline">{REMOTE ? "Hinweise zur Testphase" : "Hinweise zur Vorschau"}</Link>
        <Link href="/impressum/" className="underline">Impressum</Link>
        <Link href="/datenschutz/" className="underline">Datenschutz</Link>
      </footer>
    </>
  );
}

/** Im Live-Betrieb erst rendern, wenn die Daten geladen sind. */
function Ready({ children }: { children: ReactNode }) {
  const s = useStore();
  return !s.remote || s.remote.ready ? <>{children}</> : <Loading />;
}

function Header() {
  const user = useCurrentUser();
  const s = useStore();
  const router = useRouter();
  const isMember = !!user && s.members.some((m) => m.userId === user.id);
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-600">Thirsty</Link>
        <div className="ml-auto flex items-center gap-3 text-sm">
          <Link href="/" className="hover:text-brand-700">Entdecken</Link>
          {user && <Link href="/konto/" className="hover:text-brand-700">Meine Buchungen</Link>}
          {(isMember || user?.role === "OWNER") && <Link href="/portal/" className="hover:text-brand-700">Portal</Link>}
          {user ? (
            <button
              onClick={async () => {
                await logout();
                router.push("/");
              }}
              className="text-stone-500 hover:text-stone-800"
            >
              Abmelden
            </button>
          ) : (
            <>
              <Link href="/login/" className="hover:text-brand-700">Anmelden</Link>
              <Link href="/registrieren/" className="btn py-1.5">Registrieren</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

/** Zeigt den Inhalt nur angemeldeten Nutzern, sonst Weiterleitung zum Login. */
export function RequireUser({ children }: { children: ReactNode }) {
  const user = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.replace(`/login/?weiter=${encodeURIComponent(window.location.pathname.replace(/^\/thirsty/, "") + window.location.search)}`);
  }, [user, router]);
  return user ? <>{children}</> : <Loading />;
}
