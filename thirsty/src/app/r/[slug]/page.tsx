import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { bookSpot, toggleFavorite } from "@/app/actions/guest";
import { Notice, OfferBadge, Stars } from "@/components/ui";
import { MapEmbed } from "@/components/MapEmbed";
import { FEATURES, WEEKDAYS, day, euro, features, priceLevel, time } from "@/lib/format";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const r = await db.restaurant.findUnique({ where: { slug: (await params).slug } });
  return { title: r?.name ?? "Restaurant" };
}

export default async function RestaurantPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const { error } = await searchParams;
  const user = await currentUser();
  const r = await db.restaurant.findUnique({
    where: { slug },
    include: {
      photos: { orderBy: { position: "asc" } },
      openingHours: { orderBy: [{ weekday: "asc" }, { opens: "asc" }] },
      menuItems: { orderBy: [{ category: "asc" }, { position: "asc" }] },
      spots: {
        where: { status: "OPEN", endsAt: { gt: new Date() } },
        orderBy: { startsAt: "asc" },
        take: 10,
        include: { bookings: { where: { status: { in: ["BOOKED", "CHECKED_IN"] } }, select: { partySize: true } } },
      },
      members: { select: { userId: true } },
    },
  });
  if (!r) notFound();
  const isMember = !!user && r.members.some((m) => m.userId === user.id);
  if (r.status !== "ACTIVE" && !isMember) notFound();

  const reviews = await db.review.findMany({
    where: { booking: { spot: { restaurantId: r.id } } },
    include: { booking: { include: { user: { select: { name: true } } } } },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  const avg = reviews.length ? reviews.reduce((n, x) => n + x.rating, 0) / reviews.length : 0;
  const fav = user ? await db.favorite.findUnique({ where: { userId_restaurantId: { userId: user.id, restaurantId: r.id } } }) : null;
  const cover = r.photos.find((p) => p.kind === "COVER");
  const logo = r.photos.find((p) => p.kind === "LOGO");
  const gallery = r.photos.filter((p) => p.kind === "GALLERY");
  const menuPhotos = r.photos.filter((p) => p.kind === "MENU");
  const categories = [...new Set(r.menuItems.map((m) => m.category))];
  const bestDiscount = Math.max(0, ...r.spots.map((s) => s.discountPercent));

  return (
    <article className="space-y-8">
      {r.status !== "ACTIVE" && (
        <p className="rounded-lg bg-amber-100 px-4 py-2 text-sm text-amber-900">Vorschau: Dieses Restaurant ist noch nicht veröffentlicht.</p>
      )}
      <header>
        <div
          className="h-56 rounded-3xl bg-stone-200 bg-cover bg-center sm:h-72"
          style={cover ? { backgroundImage: `url(${cover.url})` } : { backgroundImage: "linear-gradient(135deg,#fde68a,#f59e0b)" }}
        />
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {logo && <img src={logo.url} alt="" className="h-16 w-16 rounded-2xl border border-stone-200 bg-white object-cover" />}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold">{r.name}</h1>
            <p className="text-stone-600">
              {[r.cuisine, priceLevel(r.priceLevel), r.city].filter(Boolean).join(" · ")}
              {reviews.length > 0 && (
                <> · <Stars value={avg} /> {avg.toFixed(1)} ({reviews.length})</>
              )}
            </p>
            {r.tagline && <p className="mt-1 font-medium">{r.tagline}</p>}
          </div>
          {user && (
            <form action={toggleFavorite}>
              <input type="hidden" name="restaurantId" value={r.id} />
              <input type="hidden" name="slug" value={r.slug} />
              <button className="btn-secondary">{fav ? "♥ Gemerkt" : "♡ Merken"}</button>
            </form>
          )}
        </div>
      </header>

      <section id="spots">
        <h2 className="mb-3 text-xl font-bold">Early-Bird-Plätze</h2>
        <Notice error={error} />
        {r.spots.length === 0 ? (
          <p className="card text-stone-600">Gerade keine freien Plätze ausgeschrieben.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {r.spots.map((s) => {
              const left = s.seats - s.bookings.reduce((n, b) => n + b.partySize, 0);
              const closed = Date.now() > s.startsAt.getTime() - s.bookingCutoffMin * 60_000;
              return (
                <li key={s.id} id={`spot-${s.id}`} className="card space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">{day(s.startsAt)}, {time(s.startsAt)}–{time(s.endsAt)} Uhr</p>
                    <span className="text-sm text-stone-600">{left > 0 ? `${left} frei` : "ausgebucht"}</span>
                  </div>
                  <OfferBadge discount={s.discountPercent} freebie={s.freebie} />
                  <p className="text-sm text-stone-600">
                    Rabatt auf alles, was bis {time(s.endsAt)} Uhr bestellt wird. Ankunft bis 15 Minuten nach Beginn.
                    Kostenlos stornierbar bis 2 Stunden vorher. Bezahlung im Restaurant.
                    {s.conditions && <> {s.conditions}</>}
                  </p>
                  {left > 0 && !closed ? (
                    <form action={bookSpot} className="flex items-center gap-2">
                      <input type="hidden" name="spotId" value={s.id} />
                      <select name="partySize" className="input w-auto" aria-label="Personen">
                        {Array.from({ length: Math.min(s.maxGroupSize, left) }, (_, i) => (
                          <option key={i} value={i + 1}>{i + 1} {i ? "Personen" : "Person"}</option>
                        ))}
                      </select>
                      <button className="btn flex-1">{user ? "Platz buchen" : "Anmelden und buchen"}</button>
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
          {features(r.features).length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {features(r.features).map((f) => <span key={f} className="chip">{FEATURES[f] ?? f}</span>)}
            </div>
          )}
        </section>
      )}

      {gallery.length > 0 && (
        <section className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {gallery.map((p) => <img key={p.id} src={p.url} alt="" className="aspect-square w-full rounded-xl object-cover" />)}
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
                  {r.menuItems.filter((m) => m.category === c).map((m) => (
                    <li key={m.id} className="flex gap-4 px-4 py-3">
                      <div className="flex-1">
                        <p className="font-medium">
                          {m.name} {features(m.tags).map((t) => <span key={t} className="chip ml-1">{t}</span>)}
                        </p>
                        {m.description && <p className="text-sm text-stone-600">{m.description}</p>}
                        {m.allergens && <p className="text-xs text-stone-400">Allergene: {m.allergens}</p>}
                      </div>
                      <div className="text-right">
                        {bestDiscount > 0 ? (
                          <>
                            <p className="text-sm text-stone-400 line-through">{euro(m.priceCents)}</p>
                            <p className="font-bold text-brand-700">{euro(Math.round(m.priceCents * (100 - bestDiscount) / 100))}</p>
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
            {menuPhotos.map((p) => <img key={p.id} src={p.url} alt="Speisekarte" className="w-full rounded-xl border border-stone-200" />)}
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
          {r.openingHours.length > 0 && (
            <table className="mt-2 text-sm">
              <tbody>
                {WEEKDAYS.map((w, i) => {
                  const slots = r.openingHours.filter((h) => h.weekday === i);
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
            {reviews.map((v) => (
              <li key={v.id} className="card">
                <p><Stars value={v.rating} /> <span className="font-medium">{v.booking.user.name.split(" ")[0]}</span></p>
                {v.text && <p className="mt-1 text-stone-700">{v.text}</p>}
                {!v.asPromised && <p className="mt-1 text-xs text-red-700">Angebot wurde nicht wie versprochen eingelöst.</p>}
                {v.reply && <p className="mt-2 border-l-2 border-brand-500 pl-3 text-sm text-stone-600"><span className="font-medium">Antwort des Restaurants:</span> {v.reply}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
