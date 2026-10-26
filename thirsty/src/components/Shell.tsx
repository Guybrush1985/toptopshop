"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, type ReactNode } from "react";
import { useCurrentUser, useStore } from "@/lib/store";
import { logout } from "@/lib/actions";
import { REMOTE } from "@/lib/config";
import { startRemote } from "@/lib/remote";
import { Loading } from "./ui";

/** Seiten, die selbst randlos gestalten (Hero, Karte). Alle anderen bekommen den Standard-Rahmen. */
const FULL_BLEED = ["/", "/restaurant/"];

/** Rahmen der App. Rendert erst im Browser, weil die Daten im Browser geladen werden (Local Storage oder Supabase). */
export function Shell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [banner, setBanner] = useState(true);
  const path = usePathname();
  const bleed = FULL_BLEED.includes(path.endsWith("/") ? path : path + "/");
  useEffect(() => {
    if (REMOTE) startRemote();
    try {
      if (localStorage.getItem("firsty-banner") === "zu") setBanner(false);
    } catch {}
    setMounted(true);
  }, []);
  return (
    <div className="grain relative min-h-screen overflow-x-clip">
      {banner && <div className="relative z-30 bg-lime py-1.5 pl-4 pr-10 text-center text-[11px] font-semibold uppercase tracking-[.18em] text-ink">
        {REMOTE ? "Firsty geht im Dezember 2026 live · Bis dahin Testphase, mit „Beispiel“ markierte Restaurants sind erfunden" : "Firsty geht im Dezember 2026 live · Vorschau, Daten liegen nur in diesem Browser"}{" "}
        <Link href="/hinweise/" className="underline decoration-2 underline-offset-2">Mehr</Link>
        <button
          aria-label="Hinweis schließen"
          onClick={() => {
            setBanner(false);
            try {
              localStorage.setItem("firsty-banner", "zu");
            } catch {}
          }}
          className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-base leading-none hover:bg-ink/10"
        >
          ×
        </button>
      </div>}
      {mounted ? <Suspense fallback={<div className="h-[68px]" />}><Header /></Suspense> : <div className="h-[68px]" />}
      <main className={bleed ? "" : "mx-auto max-w-5xl px-5 pb-20 pt-10"}>
        {mounted ? <Ready><Suspense fallback={<Loading />}>{children}</Suspense></Ready> : <Loading />}
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 pt-10 text-sm text-cream/60">
        <span>Firsty · {REMOTE ? "ein Angebot" : "eine Vorschau"} der TanMeOn GmbH</span>
        <Link href="/registrieren/?rolle=restaurant" className="hover:text-lime">Für Restaurants</Link>
        <Link href="/hinweise/" className="hover:text-lime">{REMOTE ? "Hinweise zur Testphase" : "Hinweise zur Vorschau"}</Link>
        <Link href="/impressum/" className="hover:text-lime">Impressum</Link>
        <Link href="/datenschutz/" className="hover:text-lime">Datenschutz</Link>
      </div>
      <p aria-hidden className="display pointer-events-none select-none whitespace-nowrap px-3 pb-2 pt-6 text-center text-[22vw] leading-[.8] text-white/[.04]">
        Firsty
      </p>
    </footer>
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
  const path = usePathname();
  const params = useSearchParams();
  const isMember = !!user && s.members.some((m) => m.userId === user.id);
  const isGuest = !!user && user.role !== "OWNER" && !isMember;
  // Nach Anmeldung oder Registrierung zurück dorthin, wo man war
  const here = path + (params.toString() ? `?${params}` : "");
  const back = ["/login/", "/registrieren/"].includes(path) ? "" : `?weiter=${encodeURIComponent(here)}`;
  const link = "rounded-full px-3 py-1.5 text-cream/80 transition hover:bg-white/10 hover:text-cream";
  return (
    <header className="sticky top-0 z-20 border-b border-white/[.06] bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3">
        <Link href="/" className="group flex items-baseline gap-1 font-display text-3xl uppercase leading-none tracking-wide text-cream">
          Firsty<span className="inline-block h-2.5 w-2.5 rounded-full bg-lime transition group-hover:scale-150" />
        </Link>
        <div className="ml-auto flex flex-wrap items-center justify-end gap-1 text-sm font-medium">
          {!(user && !isGuest) && <Link href="/" className={`${link} hidden sm:inline-block`}>Entdecken</Link>}
          {(isMember || user?.role === "OWNER") && <Link href="/portal/" className={link}>Portal</Link>}
          {user ? (
            <>
              <Link href={isGuest ? "/konto/" : "/portal/"} className="ml-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] py-1 pl-1 pr-3 text-cream hover:border-lime/60" title="Dein Profil">
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-lime font-display text-lg uppercase text-ink">
                  {user.name.trim()[0] ?? "?"}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-[#22c55e]" aria-label="angemeldet" />
                </span>
                <span className="hidden sm:inline">{user.name.split(" ")[0]}</span>
              </Link>
              <button
                onClick={async () => {
                  await logout();
                  router.push("/");
                }}
                className={`${link} text-cream/50`}
              >
                Abmelden
              </button>
            </>
          ) : (
            <>
              <Link href={`/login/${back}`} className={link}>Anmelden</Link>
              <Link href={`/registrieren/${back}`} className="btn ml-1 px-4 py-2">Registrieren</Link>
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
    if (!user) router.replace(`/login/?weiter=${encodeURIComponent(window.location.pathname.replace(/^\/firsty/, "") + window.location.search)}`);
  }, [user, router]);
  return user ? <>{children}</> : <Loading />;
}
