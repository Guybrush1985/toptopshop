import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { checkIn } from "@/app/actions/portal";
import { Notice, OfferBadge } from "@/components/ui";
import { QrScanner } from "@/components/QrScanner";
import { time } from "@/lib/format";

export default async function CheckinPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string; ok?: string; again?: string }> }) {
  const { id } = await params;
  const { error, ok, again } = await searchParams;
  await requireMember(id);
  const booking = ok ? await db.booking.findUnique({ where: { id: ok }, include: { user: true, spot: true } }) : null;
  const valid = booking && booking.spot.restaurantId === id ? booking : null;
  return (
    <div className="mx-auto max-w-md space-y-4">
      <Notice error={error} />
      {valid && (
        <div className="card border-green-300 bg-green-50 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">{again ? "Bereits eingecheckt" : "Eingecheckt"}</p>
          <p className="mt-1 text-2xl font-extrabold">{valid.user.name}</p>
          <p>{valid.partySize} {valid.partySize > 1 ? "Personen" : "Person"}</p>
          <div className="my-2"><OfferBadge discount={valid.spot.discountPercent} freebie={valid.spot.freebie} /></div>
          <p className="text-sm">Rabatt gilt für Bestellungen bis {time(valid.spot.endsAt)} Uhr.</p>
          {valid.user.dietaryNotes && <p className="mt-2 text-sm font-medium">Hinweis: {valid.user.dietaryNotes}</p>}
        </div>
      )}
      <div className="card space-y-4">
        <h2 className="text-lg font-bold">QR-Code scannen</h2>
        <QrScanner restaurantId={id} action={checkIn} />
        <form action={checkIn} className="flex gap-2">
          <input type="hidden" name="restaurantId" value={id} />
          <input className="input font-mono tracking-widest" name="code" inputMode="numeric" pattern="[0-9]{6}" placeholder="6-stelliger Code" required aria-label="Buchungscode" />
          <button className="btn">Einchecken</button>
        </form>
      </div>
    </div>
  );
}
