import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { setOpeningHours, updateRestaurant } from "@/app/actions/portal";
import { Field, Notice } from "@/components/ui";
import { MapEmbed } from "@/components/MapEmbed";
import { FEATURES, WEEKDAYS, features } from "@/lib/format";

export default async function ProfilePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string; saved?: string }> }) {
  const { id } = await params;
  const { error, saved } = await searchParams;
  await requireMember(id, ["OWNER", "MANAGER"]);
  const r = await db.restaurant.findUniqueOrThrow({ where: { id }, include: { openingHours: { orderBy: { opens: "asc" } } } });
  const feats = features(r.features);
  const v = (x: string | null | undefined) => x ?? "";

  return (
    <div className="space-y-8">
      <Notice error={error} success={saved ? "Gespeichert." : undefined} />
      <form action={updateRestaurant} className="space-y-6">
        <input type="hidden" name="restaurantId" value={id} />
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
                <label key={k} className="flex items-center gap-2 text-sm"><input type="checkbox" name="features" value={k} defaultChecked={feats.includes(k)} /> {label}</label>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="card grid gap-4 sm:grid-cols-2">
          <legend className="px-1 text-lg font-bold">Standort</legend>
          <div className="sm:col-span-2"><Field label="Straße und Hausnummer"><input className="input" name="street" defaultValue={v(r.street)} /></Field></div>
          <Field label="PLZ"><input className="input" name="postalCode" defaultValue={v(r.postalCode)} /></Field>
          <Field label="Stadt"><input className="input" name="city" defaultValue={v(r.city)} /></Field>
          <Field label="Breitengrad" hint="Wird beim Speichern aus der Adresse ermittelt, wenn leer."><input className="input" name="lat" inputMode="decimal" defaultValue={r.lat ?? ""} /></Field>
          <Field label="Längengrad"><input className="input" name="lng" inputMode="decimal" defaultValue={r.lng ?? ""} /></Field>
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

      <form action={setOpeningHours} id="oeffnungszeiten" className="card space-y-3">
        <h2 className="text-lg font-bold">Öffnungszeiten</h2>
        <p className="text-sm text-stone-600">Bis zu zwei Zeiträume pro Tag. Leer lassen für Ruhetag.</p>
        <input type="hidden" name="restaurantId" value={id} />
        {WEEKDAYS.map((w, d) => {
          const slots = r.openingHours.filter((h) => h.weekday === d);
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
