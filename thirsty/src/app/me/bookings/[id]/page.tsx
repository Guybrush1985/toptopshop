import Link from "next/link";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { cancelBooking, submitReview } from "@/app/actions/guest";
import { Notice, OfferBadge, Stars } from "@/components/ui";
import { BOOKING_STATUS, day, time } from "@/lib/format";

export const metadata = { title: "Buchung" };

function StarSelect({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <label className="flex items-center justify-between gap-3 text-sm">
      <span>{label}</span>
      <select name={name} className="input w-auto" required={required} defaultValue="">
        <option value="" disabled={required}>{required ? "Bitte wählen" : "–"}</option>
        {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{"★".repeat(n)}</option>)}
      </select>
    </label>
  );
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ new?: string; error?: string }>;
}) {
  const { id } = await params;
  const { new: isNew, error } = await searchParams;
  const user = await requireUser(`/me/bookings/${id}`);
  const b = await db.booking.findUnique({
    where: { id },
    include: { spot: { include: { restaurant: true } }, review: true },
  });
  if (!b || b.userId !== user.id) notFound();
  const r = b.spot.restaurant;
  const qr = await QRCode.toDataURL(`THIRSTY:${b.code}`, { margin: 1, width: 320, color: { dark: "#1c1917", light: "#ffffff" } });
  const active = b.status === "BOOKED" && b.spot.endsAt > new Date();
  const lateCancel = b.spot.startsAt.getTime() - Date.now() < 2 * 3600_000;
  const calStart = b.spot.startsAt.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const calEnd = b.spot.endsAt.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const calLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Thirsty: ${r.name}`)}&dates=${calStart}/${calEnd}&location=${encodeURIComponent([r.street, r.postalCode, r.city].filter(Boolean).join(", "))}&details=${encodeURIComponent(`Buchungscode ${b.code}`)}`;

  return (
    <div className="mx-auto max-w-md space-y-6">
      <Notice success={isNew ? "Gebucht! Zeig diesen QR-Code im Restaurant." : undefined} error={error} />
      <div className="card text-center">
        <p className="text-sm text-stone-500">{BOOKING_STATUS[b.status]}</p>
        <h1 className="text-2xl font-extrabold">{r.name}</h1>
        <p className="font-semibold">{day(b.spot.startsAt)}, {time(b.spot.startsAt)}–{time(b.spot.endsAt)} Uhr</p>
        <p className="text-sm text-stone-600">{b.partySize} {b.partySize > 1 ? "Personen" : "Person"}</p>
        <div className="my-3"><OfferBadge discount={b.spot.discountPercent} freebie={b.spot.freebie} /></div>
        {(b.status === "BOOKED" || b.status === "CHECKED_IN") && (
          <>
            <img src={qr} alt={`QR-Code für Buchung ${b.code}`} className={`mx-auto w-64 ${b.status === "CHECKED_IN" ? "opacity-30" : ""}`} />
            <p className="mt-2 font-mono text-3xl font-bold tracking-[0.3em]">{b.code}</p>
          </>
        )}
        <p className="mt-3 text-sm text-stone-600">
          Bitte bis {time(new Date(b.spot.startsAt.getTime() + 15 * 60_000))} Uhr da sein. Bezahlt wird im Restaurant.
        </p>
      </div>

      {active && (
        <div className="flex flex-wrap gap-2">
          <a href={calLink} target="_blank" rel="noreferrer" className="btn-secondary flex-1">In Kalender</a>
          {r.lat != null && (
            <a href={`https://www.openstreetmap.org/directions?to=${r.lat}%2C${r.lng}`} target="_blank" rel="noreferrer" className="btn-secondary flex-1">Route</a>
          )}
          <form action={cancelBooking} className="w-full">
            <input type="hidden" name="bookingId" value={b.id} />
            <button className="btn-danger w-full">{lateCancel ? "Stornieren (spät, kostet 10 Punkte)" : "Kostenlos stornieren"}</button>
          </form>
        </div>
      )}

      {b.status === "NO_SHOW" && (
        <p className="card text-sm text-stone-700">
          Das Restaurant hat dich als nicht erschienen gemeldet (−25 Punkte). Wenn das nicht stimmt, melde dich innerhalb von 48 Stunden beim Support.
        </p>
      )}

      {b.status === "CHECKED_IN" && (
        b.review ? (
          <div className="card">
            <p className="font-medium">Deine Bewertung</p>
            <Stars value={b.review.rating} />
            {b.review.text && <p className="mt-1 text-stone-700">{b.review.text}</p>}
            {b.review.reply && <p className="mt-2 border-l-2 border-brand-500 pl-3 text-sm text-stone-600">Antwort: {b.review.reply}</p>}
          </div>
        ) : (
          <form action={submitReview} className="card space-y-3">
            <h2 className="font-bold">Wie war&apos;s?</h2>
            <input type="hidden" name="bookingId" value={b.id} />
            <StarSelect name="rating" label="Gesamt" required />
            <StarSelect name="food" label="Essen" />
            <StarSelect name="service" label="Service" />
            <StarSelect name="ambience" label="Ambiente" />
            <label className="flex items-center justify-between gap-3 text-sm">
              <span>Angebot wie versprochen?</span>
              <select name="asPromised" className="input w-auto"><option value="yes">Ja</option><option value="no">Nein</option></select>
            </label>
            <textarea name="text" className="input" rows={3} placeholder="Was hat dir gefallen?" />
            <button className="btn w-full">Bewertung abschicken</button>
          </form>
        )
      )}

      <p className="text-center text-sm"><Link href={`/r/${r.slug}`} className="underline">Zum Restaurant</Link> · <Link href="/me" className="underline">Alle Buchungen</Link></p>
    </div>
  );
}
