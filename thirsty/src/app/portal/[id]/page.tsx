import Link from "next/link";
import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { reliabilityOf, TIER_LABEL } from "@/lib/reliability";
import { giveFeedback, markNoShow, setStatus } from "@/app/actions/portal";
import { Notice } from "@/components/ui";
import { BOOKING_STATUS, berlinDate, dateKey, time } from "@/lib/format";

export default async function PortalToday({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string }> }) {
  const { id } = await params;
  const { error } = await searchParams;
  const { member } = await requireMember(id);
  const r = await db.restaurant.findUniqueOrThrow({ where: { id } });
  const start = berlinDate(dateKey(new Date()), "00:00");
  const end = new Date(start.getTime() + 864e5);
  const spots = await db.spot.findMany({
    where: { restaurantId: id, startsAt: { gte: start, lt: end }, status: "OPEN" },
    orderBy: { startsAt: "asc" },
    include: { bookings: { where: { status: { in: ["BOOKED", "CHECKED_IN", "NO_SHOW"] } }, include: { user: true, feedback: true }, orderBy: { createdAt: "asc" } } },
  });
  const tiers = new Map<string, string>();
  for (const s of spots) for (const b of s.bookings) if (!tiers.has(b.userId)) tiers.set(b.userId, TIER_LABEL[(await reliabilityOf(b.userId)).tier]);
  const canEdit = member.role !== "STAFF";

  return (
    <div className="space-y-6">
      <Notice error={error} />
      {canEdit && r.status !== "ACTIVE" && (
        <div className="card flex flex-wrap items-center justify-between gap-3 border-amber-300 bg-amber-50">
          <p className="text-sm">
            {r.status === "DRAFT" ? "Dein Restaurant ist noch ein Entwurf und für Gäste unsichtbar." : "Dein Restaurant ist pausiert."}{" "}
            Ergänze <Link className="underline" href={`/portal/${id}/profil`}>Profil</Link>, <Link className="underline" href={`/portal/${id}/medien`}>Fotos</Link> und <Link className="underline" href={`/portal/${id}/karte`}>Speisekarte</Link>.
          </p>
          <form action={setStatus}>
            <input type="hidden" name="restaurantId" value={id} />
            <input type="hidden" name="status" value="ACTIVE" />
            <button className="btn">Veröffentlichen</button>
          </form>
        </div>
      )}
      {canEdit && r.status === "ACTIVE" && (
        <form action={setStatus} className="text-right">
          <input type="hidden" name="restaurantId" value={id} />
          <input type="hidden" name="status" value="PAUSED" />
          <button className="text-sm text-stone-500 underline">Restaurant pausieren</button>
        </form>
      )}

      <h2 className="text-xl font-bold">Heute</h2>
      {spots.length === 0 ? (
        <p className="card text-stone-600">Heute keine Angebote. <Link href={`/portal/${id}/spots`} className="font-medium text-brand-700 underline">Angebot ausschreiben</Link></p>
      ) : (
        spots.map((s) => {
          const taken = s.bookings.filter((b) => b.status !== "NO_SHOW").reduce((n, b) => n + b.partySize, 0);
          const noShowAllowed = Date.now() > s.startsAt.getTime() + 15 * 60_000;
          return (
            <section key={s.id} className="card">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-lg font-bold">{time(s.startsAt)}–{time(s.endsAt)} Uhr · −{s.discountPercent} %{s.freebie ? ` + ${s.freebie}` : ""}</p>
                <span className="chip">{taken}/{s.seats} Plätze</span>
              </div>
              {s.bookings.length === 0 ? (
                <p className="text-sm text-stone-500">Noch keine Buchungen.</p>
              ) : (
                <ul className="divide-y divide-stone-100">
                  {s.bookings.map((b) => (
                    <li key={b.id} className="flex flex-wrap items-center gap-3 py-2">
                      <div className="flex-1">
                        <p className="font-medium">{b.user.name} · {b.partySize} P.</p>
                        <p className="text-xs text-stone-500">
                          Code {b.code} · {tiers.get(b.userId)}
                          {b.user.dietaryNotes && <> · Hinweis: {b.user.dietaryNotes}</>}
                        </p>
                      </div>
                      <span className="chip">{BOOKING_STATUS[b.status]}</span>
                      {b.status === "BOOKED" && noShowAllowed && (
                        <form action={markNoShow}>
                          <input type="hidden" name="bookingId" value={b.id} />
                          <button className="btn-danger">Nicht erschienen</button>
                        </form>
                      )}
                      {b.status === "CHECKED_IN" && !b.feedback && (
                        <form action={giveFeedback} className="flex items-center gap-1 text-sm">
                          <input type="hidden" name="bookingId" value={b.id} />
                          <label className="flex items-center gap-1"><input type="checkbox" name="tags" value="zu spät" /> zu spät</label>
                          <button name="positive" value="yes" className="btn-secondary px-2 py-1" title="Angenehmer Gast">👍</button>
                          <button name="positive" value="no" className="btn-secondary px-2 py-1" title="Problematischer Gast">👎</button>
                        </form>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })
      )}
      <p className="text-xs text-stone-500">
        „Nicht erschienen“ ist ab 15 Minuten nach Beginn möglich und kostet den Gast 25 Punkte. Kommt der Gast doch noch, einfach einchecken; der Malus wird dann zurückgenommen.
      </p>
    </div>
  );
}
