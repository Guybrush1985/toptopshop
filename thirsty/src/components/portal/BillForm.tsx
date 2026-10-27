"use client";

import { useState } from "react";
import { useStore, type Booking } from "@/lib/store";
import { euro } from "@/lib/format";
import { BILL_STATUS_LABEL, billAmounts, billOf, cancelBill, commissionOf, createBill, flagsOf, settleBillOnSite } from "@/lib/payments";
import { Notice, useAction } from "../ui";

/**
 * Restaurant: Rechnung für einen eingecheckten Gast. Eingetragen wird die Summe laut Kasse vor dem Firsty-Rabatt;
 * der Gast sieht sie sofort in seiner App und kann dort bezahlen. Zahlt er vor Ort, schließt das Team sie hier.
 */
export function BillForm({ booking, compact }: { booking: Booking; compact?: boolean }) {
  const s = useStore();
  const { error, busy, run } = useAction();
  const bill = billOf(s, booking.id);
  const spot = s.spots.find((x) => x.id === booking.spotId)!;
  const [value, setValue] = useState(bill ? (bill.subtotalCents / 100).toFixed(2).replace(".", ",") : "");
  const [editing, setEditing] = useState(!bill && !compact);
  const accepts = flagsOf(s, spot.restaurantId).acceptsAppPayment;
  const cents = Math.round(Number(value.replace(",", ".")) * 100);
  const preview = Number.isFinite(cents) && cents > 0 ? billAmounts(cents, spot.discountPercent) : null;

  if (bill && bill.status !== "OPEN" && bill.status !== "CANCELLED") {
    return (
      <p className="text-sm text-cream/75" data-testid="bill-status">
        Rechnung: {euro(bill.amountCents)}{bill.tipCents > 0 && <> + {euro(bill.tipCents)} Trinkgeld</>} · <strong>{BILL_STATUS_LABEL[bill.status]}</strong>
      </p>
    );
  }
  if (!editing && (!bill || bill.status === "CANCELLED")) {
    return <button className="btn-secondary px-3 py-1.5 text-sm" onClick={() => setEditing(true)}>Rechnung eintragen</button>;
  }
  return (
    <div className="w-full space-y-2 rounded-2xl border border-white/10 p-3 text-left">
      <Notice error={error} />
      {bill?.status === "OPEN" && !editing ? (
        <p className="text-sm text-cream/80">
          Offene Rechnung: {euro(bill.amountCents)} {bill.discountPercent > 0 && <>(Summe {euro(bill.subtotalCents)} − {bill.discountPercent} %)</>}.{" "}
          {accepts ? "Der Gast kann jetzt in der App bezahlen." : "Bitte vor Ort kassieren."}
        </p>
      ) : (
        <form
          className="space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            run(async () => {
              await createBill(booking, value);
              setEditing(false);
            });
          }}
        >
          <label className="block text-sm">
            <span className="label">Summe laut Kasse vor Firsty-Rabatt</span>
            <div className="flex gap-2">
              <input className="input" inputMode="decimal" placeholder="z. B. 46,50" value={value} onChange={(e) => setValue(e.target.value)} required aria-label="Summe laut Kasse" />
              <button className="btn" disabled={busy}>{bill ? "Ändern" : "Senden"}</button>
            </div>
          </label>
          {preview && (
            <p className="text-xs text-cream/60">
              {spot.discountPercent > 0 ? <>−{spot.discountPercent} % = <strong className="text-cream">{euro(preview.amountCents)}</strong> für den Gast. </> : <>Gratis-Beigabe nicht mitberechnen. </>}
              {accepts && <>Zahlt der Gast in der App, behält Firsty {euro(commissionOf(preview.amountCents))} Zahlungsgebühr; Trinkgeld geht ganz an euch.</>}
            </p>
          )}
        </form>
      )}
      {bill?.status === "OPEN" && (
        <div className="flex flex-wrap gap-2">
          <button className="btn-secondary px-3 py-1.5 text-sm" disabled={busy} onClick={() => run(() => settleBillOnSite(bill))}>Vor Ort bezahlt</button>
          {!editing && <button className="btn-secondary px-3 py-1.5 text-sm" onClick={() => setEditing(true)}>Betrag ändern</button>}
          <button className="px-3 py-1.5 text-sm text-cream/50 underline" disabled={busy} onClick={() => run(() => cancelBill(bill))}>Stornieren</button>
        </div>
      )}
    </div>
  );
}
