"use client";

import { useCallback, useState, type FormEvent, type ReactNode } from "react";

export function Notice({ error, success }: { error?: string; success?: string }) {
  if (error) return <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>;
  if (success) return <p className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{success}</p>;
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
    <span className="text-brand-500" aria-label={`${value.toFixed(1)} von 5 Sternen`}>
      {"★".repeat(full)}
      <span className="text-stone-300">{"★".repeat(5 - full)}</span>
    </span>
  );
}

export function OfferBadge({ discount, freebie }: { discount: number; freebie?: string | null }) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {discount > 0 && <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-sm font-bold text-white">−{discount} %</span>}
      {freebie && <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-sm font-medium text-brand-900">+ {freebie}</span>}
    </span>
  );
}

export function PageTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">{children}</h1>
      {sub && <p className="mt-1 text-stone-600">{sub}</p>}
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
  return <p className="py-10 text-center text-stone-500">Lädt …</p>;
}
