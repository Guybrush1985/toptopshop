"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCurrentUser, useStore } from "@/lib/store";
import { bookSpot, isRestaurantAccount, memberRole, seatsTaken, toggleFavorite } from "@/lib/actions";
import { ART_BG, Notice, Stars, useAction } from "@/components/ui";
import { useParallax } from "@/components/Parallax";
import { arriveBy, offerOf, TONE_BG } from "@/lib/offer";
import { useState } from "react";
import { MapEmbed } from "@/components/MapEmbed";
import { FEATURES, WEEKDAYS, day, euro, priceLevel, time } from "@/lib/format";
import { cardOf, flagsOf, needsCard, noShowFee, startCardSetup, NO_SHOW_FEE_CENTS_PER_PERSON } from "@/lib/payments";
import { haptic } from "@/lib/native";

export default function RestaurantPage() {
  const slug = useSearchParams().get("s");
  const s = useStore();
  const user = useCurrentUser();
  const router = useRouter();
  const { error, busy, run } = useAction();
  const [info, setInfo] = useState<string>();
  useParallax([slug]);
  const [dayFilter, setDayFilter] = useState("");
  const [kindFilter, setKindFilter] = useState("");
  const r = s.restaurants.find((x) => x.slug === slug);
  const isMember = !!r && !!memberRole(s, user?.id, r.id);
  if (!r || (r.status !== "ACTIVE" && !isMember)) {
    return <p className="card mx-auto mt-10 max-w-5xl">Dieses Restaurant gibt es nicht oder es ist gerade nicht online. <Link href="/" className="underline">Zur Übersicht</Link></p>;
  }

  const photos = s.photos.filter((p) => p.restaurantId === r.id).sort((a, b) => a.position - b.position);
  const cover = photos.find((p) => p.kind === "COVER");
  const logo = photos.find((p) => p.kind === "LOGO");
  const gallery = photos.filter((p) => p.kind === "GALLERY");
  const menuPhotos = photos.filter((p) => p.kind === "MENU");
  const hours = s.hours.filter((h) => h.restaurantId === r.id).sort((a, b) => a.opens.localeCompare(b.opens));
  const menu = s.menu.filter((m) => m.restaurantId === r.id).sort((a, b) => a.position - b.position);
  const categories = [...new Set(menu.map((m) => m.category))];
  // Restaurant-Konten sehen nur die Angebote ihrer eigenen Restaurants
  const hidden = isRestaurantAccount(s, user) && !isMember;
  const allSpots = hidden ? [] : s.spots
    .filter((sp) => sp.restaurantId === r.id && sp.status === "OPEN" && new Date(sp.endsAt) > new Date())
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    .slice(0, 14);
  const kindOf = (sp: (typeof allSpots)[number]) => (sp.discountPercent ? "PCT" : offerOf(sp).pin === "Dessert" ? "DESSERT" : "DRINK");
  const days = [...new Set(allSpots.map((sp) => day(sp.startsAt)))];
  const spots = allSpots.filter((sp) => (!dayFilter || day(sp.startsAt) === dayFilter) && (!kindFilter || kindOf(sp) === kindFilter));
  const reviews = s.reviews
    .filter((v) => v.restaurantId === r.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const avg = reviews.length ? reviews.reduce((n, x) => n + x.rating, 0) / reviews.length : 0;
  const fav = !!user && s.favorites.some((f) => f.userId === user.id && f.restaurantId === r.id);
  const next = allSpots.find((sp) => sp.status === "OPEN");
  // Speisekarte zeigt die Preise mit dem Rabatt des nächsten Angebots (Rabatte unterscheiden sich je Termin)
  const bestDiscount = next?.discountPercent ?? 0;

  const book = async (spotId: string, partySize: number) => {
    if (!user) return router.push(`/login/?weiter=${encodeURIComponent(`/restaurant/?s=${r.slug}`)}`);
    const b = await run(() => bookSpot(spotId, partySize));
    if (b) {
      haptic();
      router.push(`/buchung/?id=${b.id}&neu=1`);
    }
  };

  const tone = next ? offerOf(next).tone : "lime";

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div data-parallax="0.3" className={`absolute -inset-y-24 inset-x-0 bg-gradient-to-br ${ART_BG[tone]}`}>
            {cover ? (
              <img src={cover.dataUrl} alt="" className="h-full w-full object-cover" />
            ) : (
              <>
                <div className="absolute -right-[10%] top-0 aspect-square w-[60%] rounded-full bg-white/25 blur-3xl" />
                {next && <span className="display absolute -right-[2%] bottom-[8%] whitespace-nowrap text-[34vw] text-ink/85 sm:text-[22rem]">{offerOf(next).big}</span>}
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-10 sm:pt-16">
          {r.status !== "ACTIVE" && <p className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm text-amber-900">Vorschau: Dieses Restaurant ist noch nicht veröffentlicht.</p>}
          <div className="flex flex-wrap items-center gap-2">
            {[r.cuisine, priceLevel(r.priceLevel), r.city].filter(Boolean).map((x) => <span key={x} className="chip bg-ink/60 backdrop-blur">{x}</span>)}
            {r.demo && <span className="chip border-lime/50 bg-ink/60 text-lime backdrop-blur">Beispiel</span>}
          </div>
          <div className="mt-4 flex flex-wrap items-end gap-6">
            {logo && <img src={logo.dataUrl} alt="" className="h-20 w-20 rounded-3xl border border-white/20 object-cover" />}
            <h1 className="display min-w-0 flex-1 break-words text-[15vw] text-cream sm:text-8xl lg:text-9xl">{r.name}</h1>
          </div>
          {r.tagline && <p className="mt-4 max-w-2xl font-serif text-3xl italic leading-tight text-cream/90">{r.tagline}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {reviews.length > 0 && <p className="text-cream/80"><Stars value={avg} /> {avg.toFixed(1)} ({reviews.length})</p>}
            {user && !isRestaurantAccount(s, user) && <button onClick={() => run(() => toggleFavorite(r.id))} className="btn-secondary">{fav ? "♥ Gemerkt" : "♡ Merken"}</button>}
            {next && <a href="#plaetze" className="btn px-6 py-3 text-lg">Platz sichern ↓</a>}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-16 px-5 pb-10 pt-12">
      <section id="plaetze" className="scroll-mt-24">
        <h2 className="display mb-4 text-5xl text-cream sm:text-6xl">Early-Bird-Plätze<span className="text-lime">.</span></h2>
        <Notice error={error} success={info} />
        {allSpots.length > 1 && (
          <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Angebote filtern">
            <select value={dayFilter} onChange={(e) => setDayFilter(e.target.value)} className="input w-auto py-2" aria-label="Tag">
              <option value="">Alle Tage</option>
              {days.map((d) => <option key={d}>{d}</option>)}
            </select>
            {([["", "Alle Angebote"], ["PCT", "Rabatt"], ["DRINK", "Gratis-Getränk"], ["DESSERT", "Gratis-Dessert"]] as const).map(([k, label]) => (
              <button key={k} onClick={() => setKindFilter(k)} aria-pressed={kindFilter === k} className={`chip px-3 py-1.5 text-sm ${kindFilter === k ? "border-lime bg-lime text-ink" : ""}`}>{label}</button>
            ))}
          </div>
        )}
        {hidden ? (
          <p className="card text-stone-600">Du bist mit einem Restaurant-Konto angemeldet. Angebote anderer Restaurants siehst und buchst du nur als Gast.</p>
        ) : spots.length === 0 ? (
          <p className="card text-stone-600">{allSpots.length ? "Kein Angebot passt zu diesem Filter." : "Gerade keine freien Plätze ausgeschrieben."}</p>
        ) : (
          <ul className="space-y-4">
            {spots.map((sp) => {
              const left = sp.seats - seatsTaken(s, sp.id);
              const closed = Date.now() > new Date(sp.startsAt).getTime() - sp.bookingCutoffMin * 60_000;
              const o = offerOf(sp);
              const cardNeeded = !!user && needsCard(s, user.id, sp) && !cardOf(s, user.id);
              const pay = flagsOf(s, r.id).acceptsAppPayment ? "Bezahlen in der App oder vor Ort." : "Bezahlung im Restaurant.";
              return (
                <li key={sp.id} className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-2 sm:grid-cols-[15rem_1fr]">
                  <div className={`relative flex flex-col justify-center px-6 py-5 ${TONE_BG[o.tone]}`}>
                    <span className="display text-6xl">{o.big}</span>
                    <span className="display text-2xl">{o.small}</span>
                    <span aria-hidden className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-ink sm:block" />
                  </div>
                  <div className="space-y-3 border-t-2 border-dashed border-white/15 p-5 sm:border-l-2 sm:border-t-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-display text-3xl uppercase leading-none text-cream">{day(sp.startsAt)} · {time(sp.startsAt)}–{time(sp.endsAt)}</p>
                      <span className={`rounded-full px-3 py-1 text-sm font-semibold ${left <= 0 ? "bg-white/10 text-cream/60" : left <= 2 ? "bg-hot/20 text-hot-soft" : "bg-lime/15 text-lime"}`}>{left > 0 ? `noch ${left} frei` : "ausgebucht"}</span>
                    </div>
                    <p className="text-sm text-stone-600">
                      {o.long}, gilt für alles, was bis {time(sp.endsAt)} Uhr bestellt wird. Bitte sei spätestens um {arriveBy(sp)} Uhr da, sonst verfällt das Angebot.
                      Kostenlos stornierbar bis 2 Stunden vorher. {pay}{sp.conditions && <> {sp.conditions}</>}
                    </p>
                    {sp.noShowProtection && (
                      <p className="text-xs text-cream/60">
                        No-Show-Schutz: Du hinterlegst eine Karte. Belastet werden {euro(NO_SHOW_FEE_CENTS_PER_PERSON)} pro Person nur, wenn du nicht erscheinst.
                      </p>
                    )}
                    {left > 0 && !closed && cardNeeded ? (
                      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-lime/30 bg-lime/10 p-3">
                        <p className="flex-1 text-sm text-cream/85">
                          Für diesen Platz brauchst du eine hinterlegte Karte. Sie wird nur bei einem No-Show belastet (z. B. {euro(noShowFee(2))} für 2 Personen).
                        </p>
                        <button
                          className="btn"
                          disabled={busy}
                          onClick={async () => {
                            const d = await run(() => startCardSetup(`/restaurant/?s=${r.slug}`));
                            if (d?.message) setInfo(d.message);
                          }}
                        >
                          Karte hinterlegen
                        </button>
                      </div>
                    ) : left > 0 && !closed ? (
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
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {r.description && (
        <section>
          <h2 className="mb-2 display text-3xl text-cream">Über uns</h2>
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
          <h2 className="mb-3 display text-3xl text-cream">Speisekarte</h2>
          {bestDiscount > 0 && <p className="mb-3 text-sm text-stone-600">Rechts der Preis beim nächsten Angebot ({next && day(next.startsAt)}, −{bestDiscount} %).</p>}
          <div className="space-y-6">
            {categories.map((c) => (
              <div key={c}>
                <h3 className="mb-2 font-semibold uppercase tracking-wide text-stone-500">{c}</h3>
                <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-ink-2">
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
                            <p className="font-bold text-lime">{euro(Math.round((m.priceCents * (100 - bestDiscount)) / 100))}</p>
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
          <h2 className="display text-3xl text-cream">Anfahrt und Kontakt</h2>
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
        <h2 className="mb-3 display text-3xl text-cream">Bewertungen von Firsty-Gästen</h2>
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
      </div>
    </article>
  );
}
