"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useCurrentUser, useStore } from "@/lib/store";
import { cancelBooking, submitReview } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { Notice, OfferBadge, Stars, formValues, useAction } from "@/components/ui";
import { BOOKING_STATUS, day, euro, time } from "@/lib/format";
import { arriveBy } from "@/lib/offer";
import { BillCard } from "@/components/BillCard";
import { flagsOf } from "@/lib/payments";

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
  const [showQr, setShowQr] = useState(true);
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
  const calLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Firsty: ${r.name}`)}&dates=${ics(spot.startsAt)}/${ics(spot.endsAt)}&location=${encodeURIComponent([r.street, r.postalCode, r.city].filter(Boolean).join(", "))}&details=${encodeURIComponent(`Buchungscode ${b.code}`)}`;

  return (
    <div className="mx-auto max-w-md space-y-6">
      <Notice success={isNew && b.status === "BOOKED" ? "Gebucht! Zeig diesen QR-Code im Restaurant." : undefined} error={error} />
      <div className="card text-center">
        <p className="text-sm text-stone-500">{BOOKING_STATUS[b.status]}</p>
        <h1 className="display text-4xl text-cream">{r.name}</h1>
        <p className="font-semibold">{day(spot.startsAt)}, {time(spot.startsAt)}–{time(spot.endsAt)} Uhr</p>
        <p className="text-sm text-stone-600">{b.partySize} {b.partySize > 1 ? "Personen" : "Person"}</p>
        <div className="my-3"><OfferBadge discount={spot.discountPercent} freebie={spot.freebie} /></div>
        {spot.maxDiscountCents && <p className="-mt-1 mb-2 text-xs text-cream/60">höchstens {Math.round(spot.maxDiscountCents / 100)} € Rabatt</p>}
        {(b.status === "BOOKED" || b.status === "CHECKED_IN") && (
          <>
            {qr && showQr && (
              <div className="relative mx-auto w-64">
                <img src={qr} alt={`QR-Code für Buchung ${b.code}`} className={`w-64 rounded-2xl ${b.status === "CHECKED_IN" ? "opacity-30" : ""}`} />
                <button onClick={() => setShowQr(false)} aria-label="QR-Code ausblenden" className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-xl leading-none text-cream ring-2 ring-white/20 hover:bg-ink-3">×</button>
              </div>
            )}
            {qr && !showQr && <button onClick={() => setShowQr(true)} className="btn-secondary">QR-Code anzeigen</button>}
            <p className="mt-2 font-mono text-3xl font-bold tracking-[0.3em]" data-testid="code">{b.code}</p>
            {qr && b.status === "BOOKED" && (
              <a href={qr} download={`firsty-${b.code}.png`} className="mt-2 inline-block text-sm text-cream/70 underline">QR-Code als Bild speichern</a>
            )}
          </>
        )}
        <p className="mt-3 text-sm text-stone-600">
          Bitte bis {arriveBy(spot)} Uhr da sein, sonst verfällt das Angebot.{" "}
          {flagsOf(s, r.id).acceptsAppPayment ? "Bezahlen kannst du nach dem Essen hier in der App oder wie gewohnt vor Ort." : "Bezahlt wird im Restaurant."}
        </p>
        {b.guaranteed && b.status === "BOOKED" && (
          <p className="mt-2 text-xs text-cream/60">
            Mit Karte als Garantie gebucht. Nur wenn du nicht erscheinst, werden {euro(b.noShowFeeCents ?? 0)} belastet.
          </p>
        )}
      </div>

      {active && (
        <div className="flex flex-wrap gap-2">
          <a href={calLink} target="_blank" rel="noreferrer" className="btn-secondary flex-1">In Kalender</a>
          {r.lat != null && (
            <a href={`https://www.openstreetmap.org/directions?to=${r.lat}%2C${r.lng}`} target="_blank" rel="noreferrer" className="btn-secondary flex-1">Route</a>
          )}
          <button
            onClick={() =>
              confirm(lateCancel
                ? "Wirklich stornieren? Weil es weniger als 2 Stunden bis zum Beginn sind, kostet das 10 Punkte."
                : "Buchung wirklich stornieren?") && run(() => cancelBooking(b.id))}
            className="btn-danger w-full"
          >
            {lateCancel ? "Stornieren (spät, kostet 10 Punkte)" : "Kostenlos stornieren"}
          </button>
        </div>
      )}

      {b.status === "NO_SHOW" && (
        <p className="card text-sm text-stone-700">
          Das Restaurant hat dich als nicht erschienen gemeldet (−25 Punkte).
          {s.payments.some((p) => p.bookingId === b.id && p.kind === "NO_SHOW" && p.status === "SUCCEEDED") && <> Von deiner hinterlegten Karte wurde die No-Show-Gebühr von {euro(b.noShowFeeCents ?? 0)} abgebucht.</>}{" "}
          Wenn das nicht stimmt, schreib uns innerhalb von 48 Stunden an{" "}
          <a className="underline" href={`mailto:info@tanmeon.de?subject=${encodeURIComponent(`Widerspruch No-Show ${b.code}`)}`}>info@tanmeon.de</a>.
          Wir prüfen das mit dem Restaurant und erstatten die Gebühr, wenn du da warst.
        </p>
      )}

      {b.status === "CHECKED_IN" && <BillCard booking={b} />}

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
