"use client";

import { useEffect, useState, type ReactNode } from "react";

/** SHA-256 des Vorschau-Passworts (kein Klartext im Repo). Nur eine Sichtsperre im Browser, kein echter Zugriffsschutz. */
const HASH = "064a261129ba3f816c4394cc63e82abfcd542c8aa90a0d4d404cd523ffc2243b";
const KEY = "firsty-pass";

async function sha256(text: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function PasswordGate({ children }: { children: ReactNode }) {
  const [state, setState] = useState<"check" | "locked" | "open">("check");
  const [error, setError] = useState(false);
  useEffect(() => {
    let ok = false;
    try { ok = localStorage.getItem(KEY) === HASH; } catch {}
    setState(ok ? "open" : "locked");
  }, []);
  if (state === "open") return <>{children}</>;
  if (state === "check") return null;
  return (
    <div className="grain flex min-h-screen items-center justify-center px-5">
      <form
        className="card w-full max-w-sm space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const value = String(new FormData(e.currentTarget).get("pw") ?? "");
          if ((await sha256(value)) === HASH) {
            try { localStorage.setItem(KEY, HASH); } catch {}
            setState("open");
          } else setError(true);
        }}
      >
        <p className="display text-4xl text-cream">Firsty<span className="text-lime">.</span></p>
        <p className="text-sm text-cream/70">Diese Vorschau ist passwortgeschützt.</p>
        <input className="input" type="password" name="pw" placeholder="Passwort" autoFocus required aria-label="Passwort" />
        {error && <p className="text-sm text-red-400">Falsches Passwort.</p>}
        <button className="btn w-full">Weiter</button>
      </form>
    </div>
  );
}
