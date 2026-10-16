"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { seatsTaken } from "@/lib/actions";
import { OfferBadge } from "@/components/ui";
import { day, priceLevel, time } from "@/lib/format";

export default function Discover() {
  const s = useStore();
  const [when, setWhen] = useState("");
  const [city, setCity] = useState("");
  const [cuisine, setCuisine] = useState("");
  const now = Date.now();
  const horizon = now + (when === "today" ? 1 : 7) * 864e5;
  const active = s.restaurants.filter((r) => r.status === "ACTIVE");
  const spots = s.spots
    .filter((sp) => {
      const r = active.find((x) => x.id === sp.restaurantId);
      return (
        r && sp.status === "OPEN" &&
        new Date(sp.startsAt).getTime() < horizon &&
        now < new Date(sp.startsAt).getTime() - sp.bookingCutoffMin * 60_000 &&
        (!city || r.city === city) && (!cuisine || r.cuisine === cuisine)
      );
    })
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  const cities = [...new Set(active.map((r) => r.city).filter(Boolean))] as string[];
  const cuisines = [...new Set(active.map((r) => r.cuisine).filter(Boolean))] as string[];

  return (
    <div>
      <section className="mb-8 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 px-6 py-10 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">Sei der erste Gast</p>
        <h1 className="mt-2 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Zur Öffnung essen gehen, 50&nbsp;% sparen, Getränk aufs Haus.
        </h1>
        <p className="mt-3 max-w-xl text-brand-50">
          Restaurants schreiben Plätze für die erste Stunde des Abends aus. Du buchst, zeigst deinen QR-Code und zahlst vor Ort.
        </p>
      </section>

      <div className="mb-6 flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="label">Wann</span>
          <select value={when} onChange={(e) => setWhen(e.target.value)} className="input w-auto">
            <option value="">Nächste 7 Tage</option>
            <option value="today">Nächste 24 Stunden</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="label">Stadt</span>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="input w-auto">
            <option value="">Alle</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="text-sm">
          <span className="label">Küche</span>
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="input w-auto">
            <option value="">Alle</option>
            {cuisines.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>

      {spots.length === 0 ? (
        <p className="card text-stone-600">Gerade sind keine freien Plätze ausgeschrieben. Schau später wieder vorbei.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((sp) => {
            const r = active.find((x) => x.id === sp.restaurantId)!;
            const left = sp.seats - seatsTaken(s, sp.id);
            const cover = s.photos.find((p) => p.restaurantId === r.id && p.kind === "COVER")?.dataUrl;
            return (
              <li key={sp.id}>
                <Link href={`/restaurant/?s=${r.slug}`} className="card block h-full overflow-hidden p-0 transition hover:shadow-md">
                  <div
                    className="h-36 bg-stone-200 bg-cover bg-center"
                    style={{ backgroundImage: cover ? `url(${cover})` : "linear-gradient(135deg,#fde68a,#f59e0b)" }}
                  />
                  <div className="space-y-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-bold">{r.name}</h2>
                      <span className="text-sm text-stone-500">{priceLevel(r.priceLevel)}</span>
                    </div>
                    <p className="text-sm text-stone-600">
                      {[r.cuisine, r.city].filter(Boolean).join(" · ")}
                      {r.demo && <span className="chip ml-2">Beispiel</span>}
                    </p>
                    <p className="font-semibold">{day(sp.startsAt)}, {time(sp.startsAt)}–{time(sp.endsAt)} Uhr</p>
                    <OfferBadge discount={sp.discountPercent} freebie={sp.freebie} />
                    <p className={`text-sm font-medium ${left <= 2 ? "text-red-700" : "text-stone-600"}`}>
                      {left > 0 ? `Noch ${left} von ${sp.seats} Plätzen frei` : "Ausgebucht"}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
