"use client";

// KI-Hilfe über die Supabase Edge Function "ai-fill". Ohne Schlüssel oder in der Vorschau gibt es eine klare Meldung.
import { supabase } from "./supabase";
import { ActionError } from "./errors";
import { CUISINES } from "./format";

export type AiRestaurant = {
  found: boolean; name?: string; street?: string; postalCode?: string; city?: string; phone?: string; website?: string;
  instagram?: string; cuisine?: string; priceLevel?: number; tagline?: string; description?: string;
  hours?: { weekday: number; opens: string; closes: string }[];
};
export type AiMenuItem = { category: string; name: string; description?: string; price: string; allergens?: string };

const OFF = "Die KI-Hilfe ist noch nicht eingerichtet. Bitte trag die Daten vorerst selbst ein.";

async function call<T>(body: object): Promise<T> {
  if (!supabase) throw new ActionError(OFF);
  const { data, error } = await supabase.functions.invoke("ai-fill", { body });
  if (error) {
    const status = (error as { context?: Response }).context?.status;
    if (status === 503 || status === 404) throw new ActionError(OFF);
    let msg = "Die KI-Hilfe hat gerade nicht geantwortet. Bitte später noch einmal versuchen.";
    try { msg = (await (error as { context: Response }).context.json()).error || msg; } catch {}
    throw new ActionError(msg);
  }
  return data as T;
}

export const aiLookup = (name: string, city: string) => call<AiRestaurant>({ mode: "lookup", name, city, cuisines: CUISINES });

export async function aiReadMenu(file: File) {
  if (file.size > 10e6) throw new ActionError("Die Datei ist zu groß (höchstens 10 MB).");
  const data = await new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(",")[1] ?? "");
    r.onerror = () => rej(new ActionError("Datei konnte nicht gelesen werden."));
    r.readAsDataURL(file);
  });
  const out = await call<{ items?: AiMenuItem[] }>({ mode: "menu", mediaType: file.type, data });
  return out.items ?? [];
}

/** Übernimmt KI-Daten, überschreibt aber nichts, was schon eingetragen ist. */
export async function applyAi(id: string, a: AiRestaurant) {
  const { getState } = await import("./store");
  const { updateRestaurant, setOpeningHours, geocode } = await import("./actions");
  const s = getState();
  const r = s.restaurants.find((x) => x.id === id)!;
  const pick = <K extends keyof AiRestaurant>(k: K, cur: unknown) => (cur ? undefined : (a[k] || undefined));
  const patch = {
    street: pick("street", r.street), postalCode: pick("postalCode", r.postalCode), city: pick("city", r.city),
    phone: pick("phone", r.phone), website: pick("website", r.website), instagram: pick("instagram", r.instagram),
    cuisine: CUISINES.includes(a.cuisine ?? "") ? pick("cuisine", r.cuisine) : undefined,
    tagline: pick("tagline", r.tagline)?.toString().slice(0, 120), description: pick("description", r.description),
    priceLevel: a.priceLevel && a.priceLevel >= 1 && a.priceLevel <= 4 ? a.priceLevel : undefined,
  } as Record<string, unknown>;
  if (r.lat == null && (patch.street || r.street)) {
    try { Object.assign(patch, await geocode((patch.street ?? r.street) as string, (patch.postalCode ?? r.postalCode) as string, (patch.city ?? r.city) as string)); } catch {}
  }
  for (const k of Object.keys(patch)) if (patch[k] === undefined) delete patch[k];
  if (Object.keys(patch).length) await updateRestaurant(id, patch);
  const ok = (a.hours ?? []).filter((h) => h.weekday >= 0 && h.weekday <= 6 && /^\d\d:\d\d$/.test(h.opens) && /^\d\d:\d\d$/.test(h.closes));
  if (ok.length && !s.hours.some((h) => h.restaurantId === id)) await setOpeningHours(id, ok);
}
