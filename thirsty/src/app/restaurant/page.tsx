"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCurrentUser, useStore } from "@/lib/store";
import { bookSpot, memberRole, seatsTaken, toggleFavorite } from "@/lib/actions";
import { Notice, OfferBadge, Stars, useAction } from "@/components/ui";
import { MapEmbed } from "@/components/MapEmbed";
import { FEATURES, WEEKDAYS, day, euro, priceLevel, time } from "@/lib/format";

export default function RestaurantPage() {
  const slug = useSearchParams().get("s");
  const s = useStore();
  const user = useCurrentUser();
  const router = useRouter();
  const { error, busy, run } = useAction();
  const r = s.restaurants.find((x) => x.slug === slug);
  const isMember = !!r && !!memberRole(s, user?.id, r.id);
  if (!r || (r.status !== "ACTIVE" && !isMember)) {
    return <p className="card">Dieses Restaurant gibt es nicht oder es ist gerade nicht online. <Link href="/" className="underline">Zur Übersicht</Link></p>;
  }

  const photos = s.photos.filter((p) => p.restaurantId === r.id).sort((a, b) => a.position - b.position);
  const cover = photos.find((p) => p.kind === "COVER");
  const logo = photos.find((p) => p.kind === "LOGO");
  const gallery = photos.filter((p) => p.kind === "GALLERY");
  const menuPhotos = photos.filter((p) => p.kind === "MENU");
  const hours = s.hours.filter((h) => h.restaurantId === r.id).sort((a, b) => a.opens.localeCompare(b.opens));
  const menu = s.menu.filter((m) => m.restaurantId === r.id).sort((a, b) => a.position - b.position);
  const categories = [...new Set(menu.map((m) => m.category))];
  const spots = s.spots
    .filter((sp) => sp.restaurantId === r.id && sp.status === "OPEN" && new Date(sp.endsAt) > new Date())
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    .slice(0, 10);
  const reviews = s.reviews
    .filter((v) => v.restaurantId === r.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const avg = reviews.length ? reviews.reduce((n, x) => n + x.rating, 0) / reviews.length : 0;
  const fav = !!user && s.favorites.some((f) => f.userId === user.id && f.restaurantId === r.id);
  const bestDiscount = Math.max(0, ...spots.map((sp) => sp.discountPercent));

  const book = async (spotId: string, partySize: number) => {
    if (!user) return router.push(`/login/?weiter=${encodeURIComponent(`/restaurant/?s=${r.slug}`)}`);
    const b = await run(() => bookSpot(spotId, partySize));
    if (b) router.push(`/buchung/?id=${b.id}&neu=1`);
  };

  return (
    <article className="space-y-8">
      {r.status !== "ACTIVE" && <p className="rounded-lg bg-amber-100 px-4 py-2 text-sm text-amber-900">Vorschau: Dieses Restaurant ist noch nicht veröffentlicht.</p>}
      <header>
        <div
          className="h-56 rounded-3xl bg-stone-200 bg-cover bg-center sm:h-72"
          style={{ backgroundImage: cover ? `url(${cover.dataUrl})` : "linear-gradient(135deg,#fde68a,#f59e0b)" }}
        />
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {logo && <img src={logo.dataUrl} alt="" className="h-16 w-16 rounded-2xl border border-stone-200 bg-white object-cover" />}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold">{r.name} {r.demo && <span className="chip align-middle">Beispiel</span>}</h1>
            <p className="text-stone-600">
              {[r.cuisine, priceLevel(r.priceLevel), r.city].filter(Boolean).join(" · ")}
              {reviews.length > 0 && <> · <Stars value={avg} /> {avg.toFixed(1)} ({reviews.length})</>}
            </p>
            {r.tagline && <p className="mt-1 font-medium">{r.tagline}</p>}
          </div>
          {user && <button onClick={() => toggleFavorite(r.id)} className="btn-secondary">{fav ? "♥ Gemerkt" : "♡ Merken"}</button>}
        </div>
      </header>

      <section>
        <h2 className="mb-3 text-xl font-bold">Early-Bird-Plätze</h2>
        <Notice error={error} />
        {spots.length === 0 ? (
          <p className="card text-stone-600">Gerade keine freien Plätze ausgeschrieben.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {spots.map((sp) => {
              const left = sp.seats - seatsTaken(s, sp.id);
              const closed = Date.now() > new Date(sp.startsAt).getTime() - sp.bookingCutoffMin * 60_000;
              return (
                <li key={sp.id} className="card space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">{day(sp.startsAt)}, {time(sp.startsAt)}–{time(sp.endsAt)} Uhr</p>
                    <span className="text-sm text-stone-600">{left > 0 ? `${left} frei` : "ausgebucht"}</span>
                  </div>
                  <OfferBadge discount={sp.discountPercent} freebie={sp.freebie} />
                  <p className="text-sm text-stone-600">
                    Rabatt auf alles, was bis {time(sp.endsAt)} Uhr bestellt wird. Ankunft bis 15 Minuten nach Beginn.
                    Kostenlos stornierbar bis 2 Stunden vorher. Bezahlung im Restaurant.{sp.conditions && <> {sp.conditions}</>}
                  </p>
                  {left > 0 && !closed ? (
                    <form
                      className="flex items-center gap-2"
                      onSubmit={(e) => {
                        e.preventDefault();
                        book(sp.id, Number(new FormData(e.currentTarget).get("partySize")));
                      }}
                    >
                      <select name="partySize" className="input w-auto" aria-label="Personen">
                        {Array.from({ length: Math.min(sp.maxGroupSize, left) }, (_, i) => (
                          <option key={i} value={i + 1}>{i + 1} {i ? "Personen" : "Person"}</option>
                        ))}
                      </select>
                      <button className="btn flex-1" disabled={busy}>{user ? "Platz buchen" : "Anmelden und buchen"}</button>
                    </form>
                  ) : (
                    <p className="text-sm font-medium text-stone-500">{closed ? "Buchungsfrist abgelaufen" : "Ausgebucht"}</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {r.description && (
        <section>
          <h2 className="mb-2 text-xl font-bold">Über uns</h2>
          <p className="whitespace-pre-line text-stone-700">{r.description}</p>
          {r.features.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">{r.features.map((f) => <span key={f} className="chip">{FEATURES[f] ?? f}</span>)}</div>
          )}
        </section>
      )}

      {gallery.length > 0 && (
        <section className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {gallery.map((p) => <img key={p.id} src={p.dataUrl} alt="" className="aspect-square w-full rounded-xl object-cover" />)}
        </section>
      )}

      {(categories.length > 0 || menuPhotos.length > 0) && (
        <section>
          <h2 className="mb-3 text-xl font-bold">Speisekarte</h2>
          {bestDiscount > 0 && <p className="mb-3 text-sm text-stone-600">Rechts der Preis mit {bestDiscount} % Early-Bird-Rabatt.</p>}
          <div className="space-y-6">
            {categories.map((c) => (
              <div key={c}>
                <h3 className="mb-2 font-semibold uppercase tracking-wide text-stone-500">{c}</h3>
                <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
                  {menu.filter((m) => m.category === c).map((m) => (
                    <li key={m.id} className="flex gap-4 px-4 py-3">
                      <div className="flex-1">
                        <p className="font-medium">{m.name} {m.tags.map((t) => <span key={t} className="chip ml-1">{t}</span>)}</p>
                        {m.description && <p className="text-sm text-stone-600">{m.description}</p>}
                        {m.allergens && <p className="text-xs text-stone-400">Allergene: {m.allergens}</p>}
                      </div>
                      <div className="text-right">
                        {bestDiscount > 0 ? (
                          <>
                            <p className="text-sm text-stone-400 line-through">{euro(m.priceCents)}</p>
                            <p className="font-bold text-brand-700">{euro(Math.round((m.priceCents * (100 - bestDiscount)) / 100))}</p>
                          </>
                        ) : (
                          <p className="font-bold">{euro(m.priceCents)}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {menuPhotos.map((p) => <img key={p.id} src={p.dataUrl} alt="Speisekarte" className="w-full rounded-xl border border-stone-200" />)}
          </div>
        </section>
      )}

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Anfahrt und Kontakt</h2>
          <p>{r.street}<br />{r.postalCode} {r.city}</p>
          {r.directions && <p className="text-sm text-stone-600">{r.directions}</p>}
          <p className="text-sm">
            {r.phone && <>Telefon: <a className="underline" href={`tel:${r.phone}`}>{r.phone}</a><br /></>}
            {r.website && <a className="underline" href={r.website} target="_blank" rel="noreferrer">Website</a>}
            {r.instagram && <> · <a className="underline" href={`https://instagram.com/${r.instagram.replace(/^@/, "")}`} target="_blank" rel="noreferrer">Instagram</a></>}
          </p>
          {hours.length > 0 && (
            <table className="mt-2 text-sm">
              <tbody>
                {WEEKDAYS.map((w, i) => {
                  const slots = hours.filter((h) => h.weekday === i);
                  return (
                    <tr key={w}>
                      <td className="pr-4 text-stone-600">{w}</td>
                      <td>{slots.length ? slots.map((h) => `${h.opens}–${h.closes}`).join(", ") : "Ruhetag"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {r.lat != null && r.lng != null && <MapEmbed lat={r.lat} lng={r.lng} title={r.name} />}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">Bewertungen von Thirsty-Gästen</h2>
        {reviews.length === 0 ? (
          <p className="text-stone-600">Noch keine Bewertungen. Bewerten können nur Gäste, die eingecheckt haben.</p>
        ) : (
          <ul className="space-y-3">
            {reviews.map((v) => {
              return (
                <li key={v.id} className="card">
                  <p><Stars value={v.rating} /> <span className="font-medium">{v.authorName}</span></p>
                  {v.text && <p className="mt-1 text-stone-700">{v.text}</p>}
                  {!v.asPromised && <p className="mt-1 text-xs text-red-700">Angebot wurde nicht wie versprochen eingelöst.</p>}
                  {v.reply && <p className="mt-2 border-l-2 border-brand-500 pl-3 text-sm text-stone-600"><span className="font-medium">Antwort des Restaurants:</span> {v.reply}</p>}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </article>
  );
}
