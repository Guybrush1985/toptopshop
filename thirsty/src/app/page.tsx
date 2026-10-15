import Link from "next/link";
import { db } from "@/lib/db";
import { OfferBadge } from "@/components/ui";
import { day, priceLevel, time } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function Discover({ searchParams }: { searchParams: Promise<{ city?: string; cuisine?: string; when?: string }> }) {
  const { city, cuisine, when } = await searchParams;
  const now = new Date();
  const horizon = new Date(now.getTime() + (when === "today" ? 1 : 7) * 864e5);
  const spots = await db.spot.findMany({
    where: {
      status: "OPEN",
      startsAt: { lt: horizon },
      endsAt: { gt: now },
      restaurant: {
        status: "ACTIVE",
        ...(city ? { city } : {}),
        ...(cuisine ? { cuisine } : {}),
      },
    },
    include: {
      restaurant: { include: { photos: { where: { kind: "COVER" }, take: 1 } } },
      bookings: { where: { status: { in: ["BOOKED", "CHECKED_IN"] } }, select: { partySize: true } },
    },
    orderBy: { startsAt: "asc" },
    take: 60,
  });
  const visible = spots.filter((s) => Date.now() < s.startsAt.getTime() - s.bookingCutoffMin * 60_000);
  const cities = await db.restaurant.findMany({ where: { status: "ACTIVE" }, distinct: ["city"], select: { city: true } });
  const cuisines = await db.restaurant.findMany({ where: { status: "ACTIVE" }, distinct: ["cuisine"], select: { cuisine: true } });

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

      <form className="mb-6 flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="label">Wann</span>
          <select name="when" defaultValue={when ?? ""} className="input w-auto">
            <option value="">Nächste 7 Tage</option>
            <option value="today">Heute</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="label">Stadt</span>
          <select name="city" defaultValue={city ?? ""} className="input w-auto">
            <option value="">Alle</option>
            {cities.map((c) => c.city && <option key={c.city}>{c.city}</option>)}
          </select>
        </label>
        <label className="text-sm">
          <span className="label">Küche</span>
          <select name="cuisine" defaultValue={cuisine ?? ""} className="input w-auto">
            <option value="">Alle</option>
            {cuisines.map((c) => c.cuisine && <option key={c.cuisine}>{c.cuisine}</option>)}
          </select>
        </label>
        <button className="btn-secondary">Filtern</button>
      </form>

      {visible.length === 0 ? (
        <p className="card text-stone-600">Gerade sind keine freien Plätze ausgeschrieben. Schau später wieder vorbei.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => {
            const left = s.seats - s.bookings.reduce((n, b) => n + b.partySize, 0);
            const cover = s.restaurant.photos[0]?.url;
            return (
              <li key={s.id}>
                <Link href={`/r/${s.restaurant.slug}#spot-${s.id}`} className="card block h-full overflow-hidden p-0 transition hover:shadow-md">
                  <div
                    className="h-36 bg-stone-200 bg-cover bg-center"
                    style={cover ? { backgroundImage: `url(${cover})` } : { backgroundImage: "linear-gradient(135deg,#fde68a,#f59e0b)" }}
                  />
                  <div className="space-y-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-bold">{s.restaurant.name}</h2>
                      <span className="text-sm text-stone-500">{priceLevel(s.restaurant.priceLevel)}</span>
                    </div>
                    <p className="text-sm text-stone-600">
                      {[s.restaurant.cuisine, s.restaurant.city].filter(Boolean).join(" · ")}
                    </p>
                    <p className="font-semibold">
                      {day(s.startsAt)}, {time(s.startsAt)}–{time(s.endsAt)} Uhr
                    </p>
                    <OfferBadge discount={s.discountPercent} freebie={s.freebie} />
                    <p className={`text-sm font-medium ${left <= 2 ? "text-red-700" : "text-stone-600"}`}>
                      {left > 0 ? `Noch ${left} von ${s.seats} Plätzen frei` : "Ausgebucht"}
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
