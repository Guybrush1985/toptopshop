"use client";

import { useCallback, useState } from "react";
import { useStore } from "@/lib/store";
import { checkIn } from "@/lib/actions";
import { Notice, OfferBadge, useAction } from "../ui";
import { QrScanner } from "../QrScanner";
import { time } from "@/lib/format";
import type { TabProps } from "./types";

export function CheckIn({ restaurantId: id }: TabProps) {
  const s = useStore();
  const { error, run } = useAction();
  const [result, setResult] = useState<{ bookingId: string; again: boolean }>();
  const submit = useCallback(
    async (code: string) => {
      setResult(undefined);
      const r = await run(() => checkIn(id, code));
      if (r) setResult(r);
    },
    [id, run],
  );
  const b = result && s.bookings.find((x) => x.id === result.bookingId);
  const guest = b && s.users.find((u) => u.id === b.userId);
  const spot = b && s.spots.find((x) => x.id === b.spotId);
  return (
    <div className="mx-auto max-w-md space-y-4">
      <Notice error={error} />
      {b && guest && spot && (
        <div className="card border-green-300 bg-green-50 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">{result!.again ? "Bereits eingecheckt" : "Eingecheckt"}</p>
          <p className="mt-1 display text-4xl text-cream" data-testid="checked-in">{guest.name}</p>
          <p>{b.partySize} {b.partySize > 1 ? "Personen" : "Person"}</p>
          <div className="my-2"><OfferBadge discount={spot.discountPercent} freebie={spot.freebie} /></div>
          <p className="text-sm">Rabatt gilt für Bestellungen bis {time(spot.endsAt)} Uhr.</p>
          {guest.dietaryNotes && <p className="mt-2 text-sm font-medium">Hinweis: {guest.dietaryNotes}</p>}
        </div>
      )}
      <div className="card space-y-4">
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">QR-Code scannen</h2>
        <QrScanner onCode={submit} />
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.elements.namedItem("code") as HTMLInputElement;
            submit(input.value);
            input.value = "";
          }}
        >
          <input className="input font-mono tracking-widest" name="code" inputMode="numeric" pattern="[0-9]{6}" placeholder="6-stelliger Code" required aria-label="Buchungscode" />
          <button className="btn">Einchecken</button>
        </form>
      </div>
    </div>
  );
}
