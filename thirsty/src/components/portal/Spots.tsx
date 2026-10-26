"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { cancelSpot, createSpots, seatsTaken } from "@/lib/actions";
import { Field, Notice, formValues, useAction } from "../ui";
import { dateKey, day, time } from "@/lib/format";
import { offerOf } from "@/lib/offer";
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

      <SpotForm restaurantId={id} onCreated={setCreated} />
    </div>
  );
}

const PCTS = [25, 50, 75];

function SpotForm({ restaurantId: id, onCreated }: { restaurantId: string; onCreated: (n: number | undefined) => void }) {
  const { error, run } = useAction();
  const [kind, setKind] = useState<"PCT" | "DRINK" | "DESSERT">("PCT");
  const [pct, setPct] = useState(1);
  const [start, setStart] = useState("17:30");
  // Heute nur, wenn der Abend noch nicht angefangen hat
  const today = new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" }) < "16:30";
  const tone = kind === "DESSERT" ? "bg-pink" : kind === "DRINK" ? "bg-lime" : PCTS[pct] >= 50 ? "bg-hot" : "bg-lime";
  return (
    <form
      className="card h-fit space-y-3"
      onSubmit={async (e) => {
        const f = formValues(e);
        const [sh, sm] = f.get("start").split(":").map(Number);
        const [ah, am] = f.get("arriveBy").split(":").map(Number);
        onCreated(undefined);
        const n = await run(() =>
          createSpots(id, {
            date: f.get("date"), start: f.get("start"), end: f.get("end"), repeatWeeks: f.num("repeatWeeks"),
            seats: f.num("seats"), maxGroupSize: f.num("maxGroupSize"),
            discountPercent: kind === "PCT" ? PCTS[pct] : 0,
            freebie: kind === "DRINK" ? "Gratis-Getränk" : kind === "DESSERT" ? "Gratis-Dessert" : "",
            conditions: f.get("conditions"), bookingCutoffMin: f.num("bookingCutoffMin"),
            arriveWithinMin: ah * 60 + am - (sh * 60 + sm),
            maxDiscountEuro: kind === "PCT" ? f.num("maxDiscountEuro") : 0,
          }));
        if (n) onCreated(n);
      }}
    >
      <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Neues Angebot</h2>
      <Notice error={error} />
      <Field label="Datum"><input className="input" type="date" name="date" defaultValue={dateKey(new Date(Date.now() + (today ? 0 : 864e5)))} required /></Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Von"><input className="input" type="time" name="start" value={start} onChange={(e) => setStart(e.target.value)} required /></Field>
        <Field label="Bis" hint="Bis dahin gilt das Angebot."><input className="input" type="time" name="end" defaultValue="19:00" required /></Field>
      </div>
      <Field label="Gäste müssen da sein bis" hint="Wer später kommt, bekommt das Angebot nicht.">
        <input className="input" type="time" name="arriveBy" key={start} defaultValue={addMinutes(start, 15)} required />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Plätze"><input className="input" type="number" name="seats" min={1} max={100} defaultValue={8} required /></Field>
        <Field label="Max. pro Buchung"><input className="input" type="number" name="maxGroupSize" min={1} max={8} defaultValue={4} /></Field>
      </div>
      <fieldset>
        <legend className="label">Angebot für die ersten Gäste</legend>
        <div className="grid grid-cols-3 gap-2">
          {([["PCT", "Rabatt"], ["DRINK", "Gratis-Getränk"], ["DESSERT", "Gratis-Dessert"]] as const).map(([k, label]) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
              className={`rounded-2xl border-2 px-2 py-3 text-sm font-semibold transition ${kind === k ? `border-transparent ${tone} text-ink` : "border-white/10 text-cream hover:border-white/30"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>
      {kind === "PCT" && (
        <div className="space-y-3 rounded-2xl border border-white/10 p-4">
          <label className="block">
            <span className="label">Rabatt auf alles</span>
            <span className={`mb-2 inline-block rounded-full px-3 py-1 font-display text-3xl leading-none text-ink ${tone}`}>−{PCTS[pct]} %</span>
            <input type="range" min={0} max={2} step={1} value={pct} onChange={(e) => setPct(Number(e.target.value))} className="w-full accent-[#d4ff3a]" aria-valuetext={`${PCTS[pct]} Prozent`} />
            <span className="flex justify-between text-xs text-cream/50">{PCTS.map((p) => <span key={p}>{p} %</span>)}</span>
          </label>
          <Field label="Höchstrabatt pro Buchung (€)" hint="Leer lassen für ohne Grenze. Höchstens 50 €.">
            <input className="input" type="number" name="maxDiscountEuro" min={1} max={50} step={1} defaultValue={50} />
          </Field>
        </div>
      )}
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
  );
}

function addMinutes(hhmm: string, min: number) {
  const [h, m] = hhmm.split(":").map(Number);
  const t = (h * 60 + m + min) % 1440;
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
