"use client";

import { useStore } from "@/lib/store";
import { replyToReview } from "@/lib/actions";
import { Notice, Stars, useAction } from "../ui";
import type { TabProps } from "./types";

export function Reviews({ restaurantId: id }: TabProps) {
  const s = useStore();
  const { error, run } = useAction();
  const spotIds = new Set(s.spots.filter((sp) => sp.restaurantId === id).map((sp) => sp.id));
  const bookings = s.bookings.filter((b) => spotIds.has(b.spotId));
  const reviews = s.reviews.filter((r) => r.restaurantId === id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const attended = bookings.filter((b) => b.status === "CHECKED_IN").length;
  const noShows = bookings.filter((b) => b.status === "NO_SHOW").length;
  const avg = (k: "rating" | "food" | "service" | "ambience") => {
    const xs = reviews.map((r) => r[k]).filter((x): x is number => x != null);
    return xs.length ? (xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(1) : "–";
  };
  return (
    <div className="space-y-6">
      <Notice error={error} />
      <section className="grid gap-3 sm:grid-cols-4">
        {([["Gesamt", "rating"], ["Essen", "food"], ["Service", "service"], ["Ambiente", "ambience"]] as const).map(([label, k]) => (
          <div key={k} className="card">
            <p className="text-sm text-stone-500">{label}</p>
            <p className="text-2xl font-bold">{avg(k)}</p>
          </div>
        ))}
      </section>
      <p className="text-sm text-stone-600">
        {attended} Gäste eingecheckt, {noShows} nicht erschienen
        {attended + noShows > 0 && <> (Erscheinensquote {Math.round((attended / (attended + noShows)) * 100)} %)</>}.
      </p>
      {reviews.length === 0 && <p className="card text-stone-600">Noch keine Bewertungen.</p>}
      <ul className="space-y-3">
        {reviews.map((r) => {
          return (
            <li key={r.id} className="card space-y-2">
              <p><Stars value={r.rating} /> <span className="font-medium">{r.authorName}</span> · <span className="text-sm text-stone-500">{new Date(r.createdAt).toLocaleDateString("de-DE")}</span></p>
              {r.text && <p>{r.text}</p>}
              {!r.asPromised && <p className="text-sm text-red-700">Gast sagt: Angebot nicht wie versprochen eingelöst.</p>}
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const v = (e.currentTarget.elements.namedItem("reply") as HTMLInputElement).value;
                  run(() => replyToReview(r.id, v));
                }}
              >
                <input className="input" name="reply" defaultValue={r.reply ?? ""} placeholder="Öffentlich antworten" />
                <button className="btn-secondary">Speichern</button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
