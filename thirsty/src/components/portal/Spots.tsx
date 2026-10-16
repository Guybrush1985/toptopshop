"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { cancelSpot, createSpots, seatsTaken } from "@/lib/actions";
import { Field, Notice, formValues, useAction } from "../ui";
import { dateKey, day, time } from "@/lib/format";
import { OFFER_KINDS, offerKind, offerOf } from "@/lib/offer";
import type { TabProps } from "./types";

export function Spots({ restaurantId: id }: TabProps) {
  const s = useStore();
  const { error, run } = useAction();
  const [created, setCreated] = useState<number>();
  const spots = s.spots
    .filter((sp) => sp.restaurantId === id && new Date(sp.endsAt) > new Date())
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
      <section className="space-y-3">
        <h2 className="display text-3xl text-cream">Kommende Angebote</h2>
        <Notice success={created ? `${created} ${created === 1 ? "Angebot" : "Angebote"} ausgeschrieben.` : undefined} />
        {spots.length === 0 && <p className="card text-stone-600">Noch nichts ausgeschrieben.</p>}
        <ul className="space-y-2">
          {spots.map((sp) => {
            const taken = seatsTaken(s, sp.id);
            return (
              <li key={sp.id} className={`card flex flex-wrap items-center gap-3 py-3 ${sp.status === "CANCELLED" ? "opacity-50" : ""}`}>
                <div className="flex-1">
                  <p className="font-semibold">{day(sp.startsAt)}, {time(sp.startsAt)}–{time(sp.endsAt)} Uhr</p>
                  <p className="text-sm text-stone-600">{offerOf(sp).long} · max. {sp.maxGroupSize} pro Buchung</p>
                </div>
                <span className="chip">{sp.status === "CANCELLED" ? "Abgesagt" : `${taken}/${sp.seats} gebucht`}</span>
                {sp.status === "OPEN" && (
                  <button
                    className="btn-danger"
                    onClick={() => (!taken || confirm("Gebuchte Gäste werden storniert. Trotzdem absagen?")) && run(() => cancelSpot(sp.id))}
                  >
                    Absagen
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <p className="text-xs text-stone-500">Absagen kurz vor Beginn verärgern gebuchte Gäste und senken später dein Ranking. Lieber das Kontingent knapp planen.</p>
      </section>

      <form
        className="card h-fit space-y-3"
        onSubmit={async (e) => {
          const f = formValues(e);
          const o = offerKind(f.get("offer"));
          setCreated(undefined);
          const n = await run(() =>
            createSpots(id, {
              date: f.get("date"), start: f.get("start"), end: f.get("end"), repeatWeeks: f.num("repeatWeeks"),
              seats: f.num("seats"), maxGroupSize: f.num("maxGroupSize"), discountPercent: o.discountPercent,
              freebie: o.freebie ?? "", conditions: f.get("conditions"), bookingCutoffMin: f.num("bookingCutoffMin"),
            }));
          if (n) setCreated(n);
        }}
      >
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Neues Angebot</h2>
        <Notice error={error} />
        <Field label="Datum"><input className="input" type="date" name="date" defaultValue={dateKey(new Date())} required /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Von"><input className="input" type="time" name="start" defaultValue="17:30" required /></Field>
          <Field label="Bis" hint="Bis dahin gilt der Rabatt."><input className="input" type="time" name="end" defaultValue="19:00" required /></Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Plätze"><input className="input" type="number" name="seats" min={1} max={100} defaultValue={8} required /></Field>
          <Field label="Max. pro Buchung"><input className="input" type="number" name="maxGroupSize" min={1} max={8} defaultValue={4} /></Field>
        </div>
        <fieldset>
          <legend className="label">Angebot für die ersten Gäste</legend>
          <div className="grid grid-cols-2 gap-2">
            {OFFER_KINDS.map((o, i) => {
              const v = offerOf(o);
              return (
                <label key={o.kind} className={`cursor-pointer ${i === 0 ? "col-span-2" : ""}`}>
                  <input type="radio" name="offer" value={o.kind} defaultChecked={i === 0} className="peer sr-only" />
                  <span className={`flex items-baseline gap-2 rounded-2xl border-2 border-white/10 px-4 py-3 text-cream transition peer-checked:border-transparent peer-focus-visible:ring-2 peer-focus-visible:ring-lime ${v.tone === "hot" ? "peer-checked:bg-hot" : v.tone === "pink" ? "peer-checked:bg-pink" : "peer-checked:bg-lime"} peer-checked:text-ink hover:border-white/30`}>
                    <span className="font-display text-2xl uppercase leading-none">{v.big}</span>
                    <span className="text-sm font-semibold">{v.small}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <Field label="Bedingungen" hint="z. B. ein Hauptgericht pro Person, Spirituosen ausgenommen"><input className="input" name="conditions" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Wiederholen" hint="Gleicher Wochentag">
            <select className="input" name="repeatWeeks" defaultValue={1}>
              {[1, 2, 4, 8, 12].map((w) => <option key={w} value={w}>{w === 1 ? "einmalig" : `${w} Wochen`}</option>)}
            </select>
          </Field>
          <Field label="Buchbar bis" hint="Minuten vor Beginn"><input className="input" type="number" name="bookingCutoffMin" min={0} defaultValue={30} /></Field>
        </div>
        <button className="btn w-full">Ausschreiben</button>
      </form>
    </div>
  );
}
