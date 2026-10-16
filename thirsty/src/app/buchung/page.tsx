"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useCurrentUser, useStore } from "@/lib/store";
import { cancelBooking, submitReview } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { Notice, OfferBadge, Stars, formValues, useAction } from "@/components/ui";
import { BOOKING_STATUS, day, time } from "@/lib/format";

export default function BuchungPage() {
  return <RequireUser><Buchung /></RequireUser>;
}

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

function Buchung() {
  const params = useSearchParams();
  const id = params.get("id");
  const isNew = params.get("neu");
  const s = useStore();
  const user = useCurrentUser()!;
  const { error, run } = useAction();
  const [qr, setQr] = useState<string>();
  const b = s.bookings.find((x) => x.id === id && x.userId === user.id);
  useEffect(() => {
    if (b) QRCode.toDataURL(`THIRSTY:${b.code}`, { margin: 1, width: 320 }).then(setQr);
  }, [b?.code]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!b) return <p className="card">Buchung nicht gefunden. <Link href="/konto/" className="underline">Zu deinen Buchungen</Link></p>;

  const spot = s.spots.find((x) => x.id === b.spotId)!;
  const r = s.restaurants.find((x) => x.id === spot.restaurantId)!;
  const review = s.reviews.find((v) => v.bookingId === b.id);
  const startsAt = new Date(spot.startsAt);
  const active = b.status === "BOOKED" && new Date(spot.endsAt) > new Date();
  const lateCancel = startsAt.getTime() - Date.now() < 2 * 3600_000;
  const ics = (d: string) => new Date(d).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const calLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Thirsty: ${r.name}`)}&dates=${ics(spot.startsAt)}/${ics(spot.endsAt)}&location=${encodeURIComponent([r.street, r.postalCode, r.city].filter(Boolean).join(", "))}&details=${encodeURIComponent(`Buchungscode ${b.code}`)}`;

  return (
    <div className="mx-auto max-w-md space-y-6">
      <Notice success={isNew && b.status === "BOOKED" ? "Gebucht! Zeig diesen QR-Code im Restaurant." : undefined} error={error} />
      <div className="card text-center">
        <p className="text-sm text-stone-500">{BOOKING_STATUS[b.status]}</p>
        <h1 className="text-2xl font-extrabold">{r.name}</h1>
        <p className="font-semibold">{day(spot.startsAt)}, {time(spot.startsAt)}–{time(spot.endsAt)} Uhr</p>
        <p className="text-sm text-stone-600">{b.partySize} {b.partySize > 1 ? "Personen" : "Person"}</p>
        <div className="my-3"><OfferBadge discount={spot.discountPercent} freebie={spot.freebie} /></div>
        {(b.status === "BOOKED" || b.status === "CHECKED_IN") && (
          <>
            {qr && <img src={qr} alt={`QR-Code für Buchung ${b.code}`} className={`mx-auto w-64 ${b.status === "CHECKED_IN" ? "opacity-30" : ""}`} />}
            <p className="mt-2 font-mono text-3xl font-bold tracking-[0.3em]" data-testid="code">{b.code}</p>
          </>
        )}
        <p className="mt-3 text-sm text-stone-600">
          Bitte bis {time(new Date(startsAt.getTime() + 15 * 60_000))} Uhr da sein. Bezahlt wird im Restaurant.
        </p>
      </div>

      {active && (
        <div className="flex flex-wrap gap-2">
          <a href={calLink} target="_blank" rel="noreferrer" className="btn-secondary flex-1">In Kalender</a>
          {r.lat != null && (
            <a href={`https://www.openstreetmap.org/directions?to=${r.lat}%2C${r.lng}`} target="_blank" rel="noreferrer" className="btn-secondary flex-1">Route</a>
          )}
          <button onClick={() => run(() => cancelBooking(b.id))} className="btn-danger w-full">
            {lateCancel ? "Stornieren (spät, kostet 10 Punkte)" : "Kostenlos stornieren"}
          </button>
        </div>
      )}

      {b.status === "NO_SHOW" && (
        <p className="card text-sm text-stone-700">
          Das Restaurant hat dich als nicht erschienen gemeldet (−25 Punkte). Wenn das nicht stimmt, kannst du im fertigen Produkt innerhalb von 48 Stunden widersprechen.
        </p>
      )}

      {b.status === "CHECKED_IN" &&
        (review ? (
          <div className="card">
            <p className="font-medium">Deine Bewertung</p>
            <Stars value={review.rating} />
            {review.text && <p className="mt-1 text-stone-700">{review.text}</p>}
            {review.reply && <p className="mt-2 border-l-2 border-brand-500 pl-3 text-sm text-stone-600">Antwort: {review.reply}</p>}
          </div>
        ) : (
          <form
            className="card space-y-3"
            onSubmit={(e) => {
              const f = formValues(e);
              const opt = (k: string) => (f.get(k) ? f.num(k) : undefined);
              run(() =>
                submitReview(b.id, {
                  rating: f.num("rating"), food: opt("food"), service: opt("service"), ambience: opt("ambience"),
                  asPromised: f.get("asPromised") !== "no", text: f.get("text"),
                }));
            }}
          >
            <h2 className="font-bold">Wie war&apos;s?</h2>
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
        ))}

      <p className="text-center text-sm">
        <Link href={`/restaurant/?s=${r.slug}`} className="underline">Zum Restaurant</Link> · <Link href="/konto/" className="underline">Alle Buchungen</Link>
      </p>
    </div>
  );
}
