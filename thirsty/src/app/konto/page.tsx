"use client";

import Link from "next/link";
import { useState } from "react";
import { useCurrentUser, useStore } from "@/lib/store";
import { reliabilityOf, TIER_LABEL } from "@/lib/reliability";
import { updateProfile } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { BOOKING_STATUS, day, time } from "@/lib/format";

const TIER_STYLE = {
  RELIABLE: "bg-green-100 text-green-900",
  PROBATION: "bg-amber-100 text-amber-900",
  DEPOSIT: "bg-orange-100 text-orange-900",
  BLOCKED: "bg-red-100 text-red-900",
};

export default function KontoPage() {
  return <RequireUser><Konto /></RequireUser>;
}

function Konto() {
  const s = useStore();
  const user = useCurrentUser()!;
  const [saved, setSaved] = useState(false);
  const { error, run } = useAction();
  const rel = reliabilityOf(s, user.id);
  const bookings = s.bookings
    .filter((b) => b.userId === user.id)
    .map((b) => {
      const spot = s.spots.find((x) => x.id === b.spotId)!;
      return { ...b, spot, restaurant: s.restaurants.find((r) => r.id === spot.restaurantId)! };
    })
    .sort((a, b) => b.spot.startsAt.localeCompare(a.spot.startsAt));
  const upcoming = bookings.filter((b) => b.status === "BOOKED" && new Date(b.spot.endsAt) > new Date()).reverse();
  const past = bookings.filter((b) => !upcoming.includes(b));
  const favorites = s.favorites.filter((f) => f.userId === user.id).map((f) => s.restaurants.find((r) => r.id === f.restaurantId)!).filter(Boolean);

  return (
    <div className="space-y-8">
      <PageTitle sub={user.email}>Hallo {user.name.split(" ")[0]}</PageTitle>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="card">
          <p className="text-sm text-stone-500">Dein Zuverlässigkeitswert</p>
          <p className="mt-1 flex items-center gap-3">
            <span className="display text-6xl text-lime" data-testid="score">{rel.score}</span>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${TIER_STYLE[rel.tier]}`}>{TIER_LABEL[rel.tier]}</span>
          </p>
          <div className="mt-3 h-2 rounded-full bg-stone-100">
            <div className="h-2 rounded-full bg-brand-500" style={{ width: `${rel.score}%` }} />
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Jeder Besuch bringt +3 Punkte. Späte Absagen (unter 2 Stunden) kosten 10, ein No-Show 25 Punkte.
            Ab 80 ist alles frei, unter 60 geht Buchen nur mit Kaution, unter 40 ist das Konto 30 Tage gesperrt.
            Minuspunkte verfallen nach 90 Tagen.
          </p>
          {rel.blockedUntil && <p className="mt-2 text-sm font-medium text-red-700">Gesperrt bis {rel.blockedUntil.toLocaleDateString("de-DE")}.</p>}
        </div>
        <form
          className="card space-y-3"
          onSubmit={async (e) => {
            const f = formValues(e);
            setSaved(false);
            await run(() => updateProfile({ name: f.get("name"), phone: f.get("phone"), dietaryNotes: f.get("dietaryNotes") }));
            setSaved(true);
          }}
        >
          <Notice error={error} success={saved ? "Gespeichert." : undefined} />
          <Field label="Name"><input className="input" name="name" defaultValue={user.name} /></Field>
          <Field label="Telefon" hint="Für Rückfragen des Restaurants. Bestätigung per SMS folgt später.">
            <input className="input" name="phone" type="tel" defaultValue={user.phone ?? ""} />
          </Field>
          <Field label="Ernährung und Allergien" hint="Sieht das Restaurant bei deiner Buchung.">
            <input className="input" name="dietaryNotes" defaultValue={user.dietaryNotes ?? ""} placeholder="z. B. vegetarisch, Nussallergie" />
          </Field>
          <button className="btn-secondary">Profil speichern</button>
        </form>
      </section>

      <section>
        <h2 className="mb-3 display text-3xl text-cream">Anstehend</h2>
        {upcoming.length === 0 ? (
          <p className="card text-stone-600">Keine offenen Buchungen. <Link href="/" className="font-medium text-brand-700 underline">Plätze entdecken</Link></p>
        ) : (
          <ul className="space-y-3">
            {upcoming.map((b) => (
              <li key={b.id}>
                <Link href={`/buchung/?id=${b.id}`} className="card flex items-center justify-between hover:shadow-md">
                  <div>
                    <p className="font-bold">{b.restaurant.name}</p>
                    <p className="text-sm text-stone-600">{day(b.spot.startsAt)}, {time(b.spot.startsAt)} Uhr · {b.partySize} {b.partySize > 1 ? "Personen" : "Person"}</p>
                  </div>
                  <span className="btn py-1.5">QR-Code zeigen</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="mb-3 display text-3xl text-cream">Vergangen</h2>
          <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-ink-2">
            {past.map((b) => (
              <li key={b.id}>
                <Link href={`/buchung/?id=${b.id}`} className="flex items-center justify-between px-4 py-3 hover:bg-stone-50">
                  <span>{b.restaurant.name} · {new Date(b.spot.startsAt).toLocaleDateString("de-DE")}</span>
                  <span className="chip">{BOOKING_STATUS[b.status]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {favorites.length > 0 && (
        <section>
          <h2 className="mb-3 display text-3xl text-cream">Gemerkte Restaurants</h2>
          <div className="flex flex-wrap gap-2">
            {favorites.map((r) => <Link key={r.id} href={`/restaurant/?s=${r.slug}`} className="btn-secondary">{r.name}</Link>)}
          </div>
        </section>
      )}
    </div>
  );
}
