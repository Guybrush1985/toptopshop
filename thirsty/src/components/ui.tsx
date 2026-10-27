"use client";

import { useCallback, useState, type FormEvent, type ReactNode } from "react";
import { offerOf, TONE_BG, type OfferView } from "@/lib/offer";

export function Notice({ error, success }: { error?: string; success?: string }) {
  if (error) return <p role="alert" className="mb-4 rounded-2xl border border-hot/40 bg-hot/10 px-4 py-3 text-sm font-medium text-red-800">{error}</p>;
  if (success) return <p className="mb-4 rounded-2xl border border-lime/40 bg-lime/10 px-4 py-3 text-sm font-medium text-green-800">{success}</p>;
  return null;
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-stone-500">{hint}</span>}
    </label>
  );
}

export function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="tracking-[.15em] text-lime" aria-label={`${value.toFixed(1)} von 5 Sternen`}>
      {"★".repeat(full)}
      <span className="text-stone-300">{"★".repeat(5 - full)}</span>
    </span>
  );
}

/** Angebot als knalliges Etikett, z. B. „−50 % auf alles“ oder „Gratis Drink“. */
export function OfferBadge({ discount, freebie, size = "md" }: { discount: number; freebie?: string | null; size?: "md" | "lg" }) {
  const o = offerOf({ discountPercent: discount, freebie });
  return (
    <span className={`inline-flex items-baseline gap-1.5 rounded-full px-3 py-1 ${TONE_BG[o.tone]} ${size === "lg" ? "px-4 py-1.5" : ""}`}>
      <span className={`font-display uppercase leading-none ${size === "lg" ? "text-3xl" : "text-xl"}`}>{o.big}</span>
      <span className={`font-semibold leading-none ${size === "lg" ? "text-base" : "text-sm"}`}>{o.small}</span>
    </span>
  );
}

export const ART_BG: Record<OfferView["tone"], string> = {
  lime: "from-lime via-lime-deep to-[#5d7a00]",
  hot: "from-hot via-[#ff2e4d] to-[#7a1030]",
  pink: "from-pink via-[#c42aff] to-[#3b0f6b]",
};

/**
 * Laute Bildfläche für ein Angebot: Verlauf in der Angebotsfarbe, riesige Schrift.
 * Steht überall dort, wo (noch) kein Foto des Restaurants vorliegt.
 */
export function OfferArt({ discount, freebie, label, photo, className = "" }: { discount: number; freebie?: string | null; label?: string; photo?: string; className?: string }) {
  const o = offerOf({ discountPercent: discount, freebie });
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-br ${ART_BG[o.tone]} ${className}`}>
      {photo ? (
        <>
          <img src={photo} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        </>
      ) : (
        <div className="absolute -right-1/4 -top-1/3 -z-10 aspect-square w-[90%] rounded-full bg-white/25 blur-3xl" />
      )}
      {label && <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-cream backdrop-blur">{label}</span>}
      {/* Angebot vollständig sichtbar, unten links */}
      <div className={`absolute bottom-4 left-4 right-4 ${photo ? "" : "text-ink"}`}>
        {photo ? (
          <span className={`inline-flex items-baseline gap-2 rounded-2xl px-4 py-2 ${TONE_BG[o.tone]}`}>
            <span className="display text-4xl">{o.big}</span>
            <span className="font-display text-lg uppercase leading-none">{o.small}</span>
          </span>
        ) : (
          <>
            <span className="display block text-6xl transition duration-500 group-hover:-translate-y-1">{o.big}</span>
            <span className="display block text-2xl">{o.small}</span>
          </>
        )}
      </div>
    </div>
  );
}

export function PageTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-8">
      <h1 className="display text-5xl text-cream sm:text-6xl">{children}</h1>
      {sub && <p className="mt-3 text-cream/60">{sub}</p>}
    </div>
  );
}

/** Führt eine Aktion aus und fängt Fehlermeldungen für die Anzeige ab. */
export function useAction() {
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);
  const run = useCallback(async <T,>(fn: () => T | Promise<T>): Promise<T | undefined> => {
    setError(undefined);
    setBusy(true);
    try {
      return await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Etwas ist schiefgelaufen.");
      return undefined;
    } finally {
      setBusy(false);
    }
  }, []);
  return { error, setError, busy, run };
}

/** Liest die Felder eines Formulars als Objekt. */
export function formValues(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  return {
    get: (k: string) => String(f.get(k) ?? ""),
    num: (k: string) => Number(f.get(k)),
    all: (k: string) => f.getAll(k).map(String),
    files: (k: string) => f.getAll(k).filter((x): x is File => x instanceof File && x.size > 0),
    form: e.currentTarget,
  };
}

export function Loading() {
  // Sektglas, das sich leert, solange geladen wird
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-16 text-cream/50">
      <svg viewBox="0 0 40 80" width="40" height="80" aria-hidden className="sekt">
        <defs>
          <clipPath id="sekt-kelch"><path d="M10 4 H30 L27 34 Q20 42 13 34 Z" /></clipPath>
        </defs>
        <g clipPath="url(#sekt-kelch)">
          <g className="sekt-fill">
          <rect x="0" y="4" width="40" height="40" fill="#e9c46a" />
          <circle className="sekt-bubble" cx="17" cy="32" r="1.2" fill="#fff8dc" />
          <circle className="sekt-bubble sekt-b2" cx="23" cy="30" r="1" fill="#fff8dc" />
          <circle className="sekt-bubble sekt-b3" cx="20" cy="34" r="0.8" fill="#fff8dc" />
          </g>
        </g>
        <path d="M10 4 H30 L27 34 Q20 42 13 34 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 39 V70 M12 74 Q20 69 28 74" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="text-sm">Lädt …</span>
    </div>
  );
}
