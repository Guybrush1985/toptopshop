import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { replyToReview } from "@/app/actions/portal";
import { Stars } from "@/components/ui";

export default async function ReviewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await requireMember(id, ["OWNER", "MANAGER"]);
  const reviews = await db.review.findMany({
    where: { booking: { spot: { restaurantId: id } } },
    include: { booking: { include: { user: { select: { name: true } }, spot: true } } },
    orderBy: { createdAt: "desc" },
  });
  const bookings = await db.booking.groupBy({ by: ["status"], where: { spot: { restaurantId: id } }, _count: true });
  const count = (s: string) => bookings.find((b) => b.status === s)?._count ?? 0;
  const attended = count("CHECKED_IN"), noShows = count("NO_SHOW");
  const avg = (k: "rating" | "food" | "service" | "ambience") => {
    const xs = reviews.map((r) => r[k]).filter((x): x is number => x != null);
    return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
  };
  return (
    <div className="space-y-6">
      <section className="grid gap-3 sm:grid-cols-4">
        {[
          ["Gesamt", avg("rating")],
          ["Essen", avg("food")],
          ["Service", avg("service")],
          ["Ambiente", avg("ambience")],
        ].map(([label, v]) => (
          <div key={label as string} className="card">
            <p className="text-sm text-stone-500">{label}</p>
            <p className="text-2xl font-bold">{v == null ? "–" : (v as number).toFixed(1)}</p>
          </div>
        ))}
      </section>
      <p className="text-sm text-stone-600">
        {attended} Gäste eingecheckt, {noShows} nicht erschienen
        {attended + noShows > 0 && <> (Erscheinensquote {Math.round((attended / (attended + noShows)) * 100)} %)</>}.
      </p>
      {reviews.length === 0 && <p className="card text-stone-600">Noch keine Bewertungen.</p>}
      <ul className="space-y-3">
        {reviews.map((r) => (
          <li key={r.id} className="card space-y-2">
            <p><Stars value={r.rating} /> <span className="font-medium">{r.booking.user.name}</span> · <span className="text-sm text-stone-500">{r.booking.spot.startsAt.toLocaleDateString("de-DE")}</span></p>
            {r.text && <p>{r.text}</p>}
            {!r.asPromised && <p className="text-sm text-red-700">Gast sagt: Angebot nicht wie versprochen eingelöst.</p>}
            <form action={replyToReview} className="flex gap-2">
              <input type="hidden" name="reviewId" value={r.id} />
              <input className="input" name="reply" defaultValue={r.reply ?? ""} placeholder="Öffentlich antworten" />
              <button className="btn-secondary">Speichern</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
