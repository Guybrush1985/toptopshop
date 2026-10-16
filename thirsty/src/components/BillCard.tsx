"use client";

import { useState } from "react";
import { useStore, type Booking } from "@/lib/store";
import { euro } from "@/lib/format";
import { BILL_STATUS_LABEL, billOf, flagsOf, payBill, tipOf, TIP_OPTIONS } from "@/lib/payments";
import { Notice, useAction } from "./ui";

/** Gast: Rechnung nach dem Essen ansehen und in der App bezahlen (mit Trinkgeld). */
export function BillCard({ booking }: { booking: Booking }) {
  const s = useStore();
  const { error, busy, run } = useAction();
  const [tip, setTip] = useState<number>(10);
  const [info, setInfo] = useState<string>();
  const bill = billOf(s, booking.id);
  const spot = s.spots.find((x) => x.id === booking.spotId)!;
  const accepts = flagsOf(s, spot.restaurantId).acceptsAppPayment;

  if (!bill || bill.status === "CANCELLED") {
    return accepts ? (
      <p className="card text-sm text-cream/70">
        Sobald das Restaurant deine Rechnung einträgt, erscheint sie hier und du kannst direkt in der App bezahlen. Der Firsty-Rabatt ist schon abgezogen.
      </p>
    ) : null;
  }

  const tipCents = tipOf(bill.amountCents, tip);
  const Row = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => (
    <div className={`flex justify-between gap-4 ${strong ? "border-t border-white/10 pt-2 text-lg font-bold text-cream" : "text-cream/75"}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );

  return (
    <section className="card space-y-3" data-testid="bill">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Deine Rechnung</h2>
        <span className="chip">{BILL_STATUS_LABEL[bill.status]}</span>
      </div>
      <Notice error={error} success={info} />
      <div className="space-y-1.5 text-sm">
        <Row label="Summe laut Kasse" value={euro(bill.subtotalCents)} />
        {bill.discountPercent > 0 && <Row label={`Firsty-Rabatt ${bill.discountPercent} %`} value={`−${euro(bill.discountCents)}`} />}
        {bill.status === "OPEN" ? (
          <>
            <Row label="Zu zahlen" value={euro(bill.amountCents)} />
            {accepts && tipCents > 0 && <Row label={`Trinkgeld ${tip} %`} value={euro(tipCents)} />}
            <Row label="Gesamt" value={euro(bill.amountCents + (accepts ? tipCents : 0))} strong />
          </>
        ) : (
          <>
            {bill.tipCents > 0 && <Row label="Trinkgeld" value={euro(bill.tipCents)} />}
            <Row label="Bezahlt" value={euro(bill.amountCents + bill.tipCents)} strong />
          </>
        )}
      </div>
      {bill.note && <p className="text-xs text-cream/50">Hinweis des Restaurants: {bill.note}</p>}

      {bill.status === "OPEN" && accepts && (
        <>
          <fieldset>
            <legend className="label">Trinkgeld (geht komplett ans Team)</legend>
            <div className="flex gap-2">
              {TIP_OPTIONS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTip(t)}
                  aria-pressed={tip === t}
                  className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold ${tip === t ? "border-lime bg-lime text-ink" : "border-white/20 text-cream"}`}
                >
                  {t ? `${t} %` : "Ohne"}
                </button>
              ))}
            </div>
          </fieldset>
          <button
            className="btn w-full py-3 text-lg"
            disabled={busy}
            onClick={async () => {
              const d = await run(() => payBill(bill.id, tip));
              if (d?.message) setInfo(d.message);
            }}
          >
            {euro(bill.amountCents + tipCents)} bezahlen
          </button>
          <p className="text-center text-xs text-cream/50">Sicher über Stripe: Karte, Apple Pay oder Google Pay. Du bekommst einen Beleg per E-Mail.</p>
        </>
      )}
      {bill.status === "OPEN" && !accepts && <p className="text-sm text-cream/70">Bitte bezahl diesen Betrag wie gewohnt im Restaurant.</p>}
      {bill.status === "PAID" && (
        <p className="text-sm text-cream/70">
          Danke! Bezahlt am {new Date(bill.paidAt ?? bill.createdAt).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })}.{" "}
          {bill.receiptUrl && <a href={bill.receiptUrl} target="_blank" rel="noreferrer" className="underline">Beleg ansehen</a>}
        </p>
      )}
    </section>
  );
}
