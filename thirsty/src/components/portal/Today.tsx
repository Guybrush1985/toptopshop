"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { reliabilityOf, TIER_LABEL } from "@/lib/reliability";
import { giveFeedback, markNoShow, setStatus } from "@/lib/actions";
import { Notice, useAction } from "../ui";
import { BOOKING_STATUS, berlinDate, dateKey, time } from "@/lib/format";
import type { TabProps } from "./types";

export function Today({ restaurantId: id, role }: TabProps) {
  const s = useStore();
  const { error, run } = useAction();
  const r = s.restaurants.find((x) => x.id === id)!;
  const start = berlinDate(dateKey(new Date()), "00:00").getTime();
  const end = start + 864e5;
  const spots = s.spots
    .filter((sp) => sp.restaurantId === id && sp.status === "OPEN" && new Date(sp.startsAt).getTime() >= start && new Date(sp.startsAt).getTime() < end)
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  const canEdit = role !== "STAFF";
  const base = `/portal/restaurant/?id=${id}`;

  return (
    <div className="space-y-6">
      <Notice error={error} />
      {canEdit && r.status !== "ACTIVE" && (
        <div className="card flex flex-wrap items-center justify-between gap-3 border-amber-300 bg-amber-50">
          <p className="text-sm">
            {r.status === "DRAFT" ? "Dein Restaurant ist noch ein Entwurf und für Gäste unsichtbar." : "Dein Restaurant ist pausiert."}{" "}
            Ergänze <Link className="underline" href={`${base}&tab=profil`}>Profil</Link>, <Link className="underline" href={`${base}&tab=fotos`}>Fotos</Link> und{" "}
            <Link className="underline" href={`${base}&tab=karte`}>Speisekarte</Link>.
          </p>
          <button className="btn" onClick={() => run(() => setStatus(id, "ACTIVE"))}>Veröffentlichen</button>
        </div>
      )}
      {canEdit && r.status === "ACTIVE" && (
        <p className="text-right">
          <button className="text-sm text-stone-500 underline" onClick={() => run(() => setStatus(id, "PAUSED"))}>Restaurant pausieren</button>
        </p>
      )}

      <h2 className="text-xl font-bold">Heute</h2>
      {spots.length === 0 ? (
        <p className="card text-stone-600">
          Heute keine Angebote. {canEdit && <Link href={`${base}&tab=angebote`} className="font-medium text-brand-700 underline">Angebot ausschreiben</Link>}
        </p>
      ) : (
        spots.map((sp) => {
          const bookings = s.bookings.filter((b) => b.spotId === sp.id && ["BOOKED", "CHECKED_IN", "NO_SHOW"].includes(b.status));
          const taken = bookings.filter((b) => b.status !== "NO_SHOW").reduce((n, b) => n + b.partySize, 0);
          const noShowAllowed = Date.now() > new Date(sp.startsAt).getTime() + 15 * 60_000;
          return (
            <section key={sp.id} className="card">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-lg font-bold">{time(sp.startsAt)}–{time(sp.endsAt)} Uhr · −{sp.discountPercent} %{sp.freebie ? ` + ${sp.freebie}` : ""}</p>
                <span className="chip">{taken}/{sp.seats} Plätze</span>
              </div>
              {bookings.length === 0 ? (
                <p className="text-sm text-stone-500">Noch keine Buchungen.</p>
              ) : (
                <ul className="divide-y divide-stone-100">
                  {bookings.map((b) => {
                    const guest = s.users.find((u) => u.id === b.userId)!;
                    const fb = s.feedback.find((f) => f.bookingId === b.id);
                    return (
                      <li key={b.id} className="flex flex-wrap items-center gap-3 py-2">
                        <div className="flex-1">
                          <p className="font-medium">{guest.name} · {b.partySize} P.</p>
                          <p className="text-xs text-stone-500">
                            Code {b.code} · {TIER_LABEL[reliabilityOf(s, guest.id).tier]}
                            {guest.dietaryNotes && <> · Hinweis: {guest.dietaryNotes}</>}
                          </p>
                        </div>
                        <span className="chip">{BOOKING_STATUS[b.status]}</span>
                        {b.status === "BOOKED" && noShowAllowed && (
                          <button className="btn-danger" onClick={() => run(() => markNoShow(b.id))}>Nicht erschienen</button>
                        )}
                        {b.status === "CHECKED_IN" && !fb && <FeedbackButtons onGive={(pos, tags) => run(() => giveFeedback(b.id, pos, tags))} />}
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })
      )}
      <p className="text-xs text-stone-500">
        „Nicht erschienen“ ist ab 15 Minuten nach Beginn möglich und kostet den Gast 25 Punkte. Kommt der Gast doch noch, einfach
        einchecken; der Malus wird dann zurückgenommen.
      </p>
    </div>
  );
}

function FeedbackButtons({ onGive }: { onGive: (positive: boolean, tags: string[]) => void }) {
  return (
    <form
      className="flex items-center gap-1 text-sm"
      onSubmit={(e) => {
        e.preventDefault();
        const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
        const late = (e.currentTarget.elements.namedItem("late") as HTMLInputElement).checked;
        onGive(submitter?.value === "yes", late ? ["zu spät"] : []);
      }}
    >
      <label className="flex items-center gap-1"><input type="checkbox" name="late" /> zu spät</label>
      <button value="yes" className="btn-secondary px-2 py-1" title="Angenehmer Gast">👍</button>
      <button value="no" className="btn-secondary px-2 py-1" title="Problematischer Gast">👎</button>
    </form>
  );
}
