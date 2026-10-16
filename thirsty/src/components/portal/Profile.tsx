"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { geocode, setOpeningHours, updateRestaurant } from "@/lib/actions";
import { Field, Notice, formValues, useAction } from "../ui";
import { MapEmbed } from "../MapEmbed";
import { FEATURES, WEEKDAYS } from "@/lib/format";
import type { TabProps } from "./types";

export function Profile({ restaurantId: id }: TabProps) {
  const s = useStore();
  const r = s.restaurants.find((x) => x.id === id)!;
  const hours = s.hours.filter((h) => h.restaurantId === id).sort((a, b) => a.opens.localeCompare(b.opens));
  const { error, run, busy } = useAction();
  const [saved, setSaved] = useState<string>();
  const [coords, setCoords] = useState({ lat: r.lat?.toString() ?? "", lng: r.lng?.toString() ?? "" });
  const v = (x?: string) => x ?? "";
  const opt = (x: string) => x.trim() || undefined;

  return (
    <div className="space-y-8">
      <Notice error={error} success={saved} />
      <form
        className="space-y-6"
        onSubmit={async (e) => {
          const f = formValues(e);
          setSaved(undefined);
          const lat = coords.lat ? Number(coords.lat.replace(",", ".")) : undefined;
          const lng = coords.lng ? Number(coords.lng.replace(",", ".")) : undefined;
          const ok = await run(async () => {
            await updateRestaurant(id, {
              name: f.get("name"), tagline: opt(f.get("tagline")), description: opt(f.get("description")), cuisine: opt(f.get("cuisine")),
              priceLevel: Math.min(4, Math.max(1, f.num("priceLevel") || 2)),
              street: opt(f.get("street")), postalCode: opt(f.get("postalCode")), city: opt(f.get("city")),
              lat: Number.isFinite(lat) ? lat : undefined, lng: Number.isFinite(lng) ? lng : undefined,
              directions: opt(f.get("directions")), phone: opt(f.get("phone")), email: opt(f.get("email")),
              website: opt(f.get("website")), instagram: opt(f.get("instagram")),
              seatsInside: Math.max(0, f.num("seatsInside") || 0), seatsOutside: Math.max(0, f.num("seatsOutside") || 0),
              features: f.all("features"), legalName: opt(f.get("legalName")), vatId: opt(f.get("vatId")),
            });
            return true;
          });
          if (ok) setSaved("Profil gespeichert.");
        }}
      >
        <fieldset className="card grid gap-4 sm:grid-cols-2">
          <legend className="px-1 text-lg font-bold">Allgemein</legend>
          <Field label="Name"><input className="input" name="name" defaultValue={r.name} required /></Field>
          <Field label="Küche" hint="z. B. Italienisch, Vietnamesisch, Deutsch"><input className="input" name="cuisine" defaultValue={v(r.cuisine)} /></Field>
          <div className="sm:col-span-2"><Field label="Kurzbeschreibung" hint="Ein Satz, der in der Liste erscheint."><input className="input" name="tagline" maxLength={120} defaultValue={v(r.tagline)} /></Field></div>
          <div className="sm:col-span-2"><Field label="Beschreibung"><textarea className="input" name="description" rows={5} defaultValue={v(r.description)} /></Field></div>
          <Field label="Preisniveau">
            <select className="input" name="priceLevel" defaultValue={r.priceLevel}>
              <option value={1}>€ – günstig</option><option value={2}>€€ – mittel</option><option value={3}>€€€ – gehoben</option><option value={4}>€€€€ – fein</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Plätze innen"><input className="input" type="number" min={0} name="seatsInside" defaultValue={r.seatsInside} /></Field>
            <Field label="Plätze außen"><input className="input" type="number" min={0} name="seatsOutside" defaultValue={r.seatsOutside} /></Field>
          </div>
          <div className="sm:col-span-2">
            <span className="label">Merkmale</span>
            <div className="flex flex-wrap gap-3">
              {Object.entries(FEATURES).map(([k, label]) => (
                <label key={k} className="flex items-center gap-2 text-sm"><input type="checkbox" name="features" value={k} defaultChecked={r.features.includes(k)} /> {label}</label>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="card grid gap-4 sm:grid-cols-2">
          <legend className="px-1 text-lg font-bold">Standort</legend>
          <div className="sm:col-span-2"><Field label="Straße und Hausnummer"><input className="input" name="street" defaultValue={v(r.street)} /></Field></div>
          <Field label="PLZ"><input className="input" name="postalCode" defaultValue={v(r.postalCode)} /></Field>
          <Field label="Stadt"><input className="input" name="city" defaultValue={v(r.city)} /></Field>
          <Field label="Breitengrad"><input className="input" inputMode="decimal" value={coords.lat} onChange={(e) => setCoords({ ...coords, lat: e.target.value })} /></Field>
          <Field label="Längengrad"><input className="input" inputMode="decimal" value={coords.lng} onChange={(e) => setCoords({ ...coords, lng: e.target.value })} /></Field>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="btn-secondary"
              disabled={busy}
              onClick={async (e) => {
                const form = e.currentTarget.form!;
                const val = (n: string) => (form.elements.namedItem(n) as HTMLInputElement).value;
                const geo = await run(() => geocode(val("street"), val("postalCode"), val("city")));
                if (geo) setCoords({ lat: geo.lat.toFixed(6), lng: geo.lng.toFixed(6) });
              }}
            >
              Koordinaten aus Adresse ermitteln
            </button>
            <span className="text-xs text-stone-500">Fragt OpenStreetMap (Nominatim) nach der Adresse.</span>
          </div>
          <div className="sm:col-span-2"><Field label="Anfahrt" hint="ÖPNV, Parken, Eingang"><input className="input" name="directions" defaultValue={v(r.directions)} /></Field></div>
          {r.lat != null && r.lng != null && <div className="sm:col-span-2"><MapEmbed lat={r.lat} lng={r.lng} title={r.name} /></div>}
        </fieldset>

        <fieldset className="card grid gap-4 sm:grid-cols-2">
          <legend className="px-1 text-lg font-bold">Kontakt</legend>
          <Field label="Telefon"><input className="input" name="phone" type="tel" defaultValue={v(r.phone)} /></Field>
          <Field label="E-Mail"><input className="input" name="email" type="email" defaultValue={v(r.email)} /></Field>
          <Field label="Website"><input className="input" name="website" type="url" placeholder="https://" defaultValue={v(r.website)} /></Field>
          <Field label="Instagram"><input className="input" name="instagram" placeholder="@deinrestaurant" defaultValue={v(r.instagram)} /></Field>
        </fieldset>

        <fieldset className="card grid gap-4 sm:grid-cols-2">
          <legend className="px-1 text-lg font-bold">Rechnungsdaten</legend>
          <Field label="Firmenname"><input className="input" name="legalName" defaultValue={v(r.legalName)} /></Field>
          <Field label="USt-IdNr."><input className="input" name="vatId" defaultValue={v(r.vatId)} /></Field>
        </fieldset>
        <button className="btn">Profil speichern</button>
      </form>

      <form
        className="card space-y-3"
        onSubmit={async (e) => {
          const f = formValues(e);
          const rows: { weekday: number; opens: string; closes: string }[] = [];
          for (let d = 0; d < 7; d++) {
            for (const i of [0, 1]) {
              const opens = f.get(`opens-${d}-${i}`), closes = f.get(`closes-${d}-${i}`);
              if (opens && closes) rows.push({ weekday: d, opens, closes });
            }
          }
          setSaved(undefined);
          const ok = await run(async () => (await setOpeningHours(id, rows), true));
          if (ok) setSaved("Öffnungszeiten gespeichert.");
        }}
      >
        <h2 className="text-lg font-bold">Öffnungszeiten</h2>
        <p className="text-sm text-stone-600">Bis zu zwei Zeiträume pro Tag. Leer lassen für Ruhetag.</p>
        {WEEKDAYS.map((w, d) => {
          const slots = hours.filter((h) => h.weekday === d);
          return (
            <div key={w} className="grid grid-cols-[7rem_1fr] items-center gap-2 text-sm sm:grid-cols-[7rem_1fr_1fr]">
              <span className="font-medium">{w}</span>
              {[0, 1].map((i) => (
                <div key={i} className={`flex items-center gap-1 ${i ? "col-start-2 sm:col-start-auto" : ""}`}>
                  <input className="input" type="time" name={`opens-${d}-${i}`} defaultValue={slots[i]?.opens ?? ""} aria-label={`${w} öffnet`} />
                  <span>–</span>
                  <input className="input" type="time" name={`closes-${d}-${i}`} defaultValue={slots[i]?.closes ?? ""} aria-label={`${w} schließt`} />
                </div>
              ))}
            </div>
          );
        })}
        <button className="btn-secondary">Öffnungszeiten speichern</button>
      </form>
    </div>
  );
}
