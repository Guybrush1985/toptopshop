"use client";

import Link from "next/link";
import {
  BOOKING_FEE_CAP_BOOKINGS, BOOKING_FEE_CAP_NET_CENTS, BOOKING_FEE_NET_CENTS, COMMISSION_PERCENT, NO_SHOW_FEE_CENTS_PER_PERSON,
  NO_SHOW_PLATFORM_PERCENT, TRIAL_DAYS,
} from "@/lib/payments";
import { euro } from "@/lib/format";

const SIGNUP = "/registrieren/?rolle=restaurant";

export default function FuerRestaurants() {
  return (
    <div className="pb-24">
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[.3em] text-lime">Für Restaurants · Start im Dezember 2026</p>
          <h1 className="display mt-4 text-6xl leading-[.9] text-cream sm:text-8xl">
            Volle Tische<br />ab der <span className="text-lime">ersten</span> Minute.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl italic text-cream/80 sm:text-3xl">
            Belohne die ersten Gäste nach Öffnung mit einem Rabatt oder einem Gratis-Getränk. Firsty bringt sie zu dir, wenn sonst noch nichts los ist.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={SIGNUP} className="btn px-8 py-4 text-xl">Restaurant anmelden</Link>
            <span className="text-sm text-cream/60">{TRIAL_DAYS} Tage kostenlos, danach {euro(BOOKING_FEE_NET_CENTS)} pro Buchung. Kein Abo.</span>
          </div>
        </div>
      </section>

      {/* ---------- Social Proof ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="display text-4xl text-cream sm:text-6xl">Wo würdest du dich hinsetzen<span className="text-lime">?</span></h2>
        <figure className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ""}/zwei-restaurants.webp`}
            alt="Zwei Restaurants nebeneinander: links leere Tische, rechts sitzen schon Gäste"
            width={1400}
            height={933}
            loading="lazy"
            className="block h-auto w-full saturate-[.85]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
          <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-[.2em] text-cream/70 backdrop-blur sm:bottom-6 sm:left-6 sm:text-sm">Leer</span>
          <span className="absolute bottom-4 right-4 rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-[.2em] text-ink sm:bottom-6 sm:right-6 sm:text-sm">Schon Gäste da</span>
        </figure>
        <p className="mt-6 max-w-3xl font-serif text-2xl italic text-cream/85 sm:text-3xl">
          Instinktiv zieht es uns nach rechts: Wo schon Gäste sitzen, muss es gut sein, und als Erster ein leeres Restaurant zu betreten,
          ist eine echte Hürde. Firsty nimmt diese Hürde den ersten Gästen ab, und dann füllt sich dein Restaurant von selbst.
        </p>
        <p className="mt-3 text-xs text-cream/45">
          Bekannt als Social Proof bzw. Herdenverhalten: Cialdini, „Influence“ (1984); Banerjee, Quarterly Journal of Economics (1992);
          Becker, Journal of Political Economy (1991); Cai, Chen &amp; Fang, American Economic Review (2009).
        </p>
      </section>

      {/* ---------- Nutzen ---------- */}
      <section className="mx-auto max-w-6xl px-5">
        <ul className="grid gap-3 sm:grid-cols-3">
          {[
            ["Die erste Stunde füllen", "Leere Tische direkt nach Öffnung werden zu Umsatz. Volle Tische locken weitere Gäste an."],
            ["Du bestimmst alles", "Tag, Uhrzeit, Anzahl der Plätze, Angebot, Höchstrabatt und bis wann die Gäste da sein müssen."],
            ["Zuverlässige Gäste", "Gäste mit vielen No-Shows können nicht mehr frei buchen. Auf Wunsch hinterlegen sie eine Karte."],
          ].map(([t, x]) => (
            <li key={t} className="card">
              <p className="display text-2xl text-cream">{t}</p>
              <p className="mt-2 text-sm text-cream/70">{x}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Ablauf ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="display text-4xl text-cream sm:text-6xl">So läuft&apos;s<span className="text-lime">.</span></h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Anmelden", "Name und Stadt eingeben. Auf Wunsch füllt die KI dein Profil vor, die Speisekarte liest sie aus PDF oder Foto."],
            ["Angebot einstellen", "25, 50 oder 75 % Rabatt, Gratis-Getränk oder Gratis-Dessert. Einmalig oder jede Woche."],
            ["Gäste empfangen", "Gäste zeigen ihren QR-Code, du checkst sie mit der Kamera oder per Code ein."],
            ["Abrechnen", "Gäste zahlen in der App oder vor Ort. Du zahlst nur für Buchungen, die wirklich gekommen sind."],
          ].map(([t, x], i) => (
            <li key={t} className="flex gap-3">
              <span className="display text-4xl leading-none text-lime">{i + 1}</span>
              <span><span className="block font-semibold text-cream">{t}</span><span className="text-sm text-cream/60">{x}</span></span>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Preise ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="display text-4xl text-cream sm:text-6xl">Preise<span className="text-lime">.</span></h2>
        <p className="mt-2 text-cream/70">Du zahlst nur für Gäste, die wirklich kommen. Kein Abo, keine Laufzeit. Alle Preise zzgl. 19 % MwSt.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="card">
            <p className="display text-3xl text-cream">Pro Buchung</p>
            <p className="mt-1"><span className="display text-5xl text-lime">{euro(BOOKING_FEE_NET_CENTS)}</span></p>
            <p className="mt-3 text-sm text-cream/80">Egal ob 1 oder 8 Personen, egal wie viel Umsatz. Stornierungen und No-Shows kosten nichts.</p>
          </div>
          <div className="card">
            <p className="display text-3xl text-cream">Monatsdeckel</p>
            <p className="mt-1"><span className="display text-5xl text-lime">{euro(BOOKING_FEE_CAP_NET_CENTS)}</span> <span className="text-cream/60">höchstens</span></p>
            <p className="mt-3 text-sm text-cream/80">Ab der {BOOKING_FEE_CAP_BOOKINGS}. Buchung im Monat ist jede weitere frei.</p>
          </div>
          <div className="card">
            <p className="display text-3xl text-cream">Start</p>
            <p className="mt-1"><span className="display text-5xl text-lime">{TRIAL_DAYS} Tage</span> <span className="text-cream/60">kostenlos</span></p>
            <p className="mt-3 text-sm text-cream/80">Ab Anmeldung. Danach monatliche Rechnung, zahlbar per Karte oder SEPA-Lastschrift.</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-cream/60">
          Bei Zahlung in der App fallen {COMMISSION_PERCENT} % Zahlungsgebühr an (deckt die Kartengebühren). Bei No-Show-Schutz zahlen fehlende
          Gäste {euro(NO_SHOW_FEE_CENTS_PER_PERSON)} pro Person, davon gehen {100 - NO_SHOW_PLATFORM_PERCENT} % an dich.
        </p>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[2rem] bg-lime p-8 text-ink sm:p-12">
          <p className="display text-4xl sm:text-6xl">Bereit für die erste Stunde?</p>
          <Link href={SIGNUP} className="display rounded-full bg-ink px-7 py-4 text-2xl text-lime">Jetzt anmelden →</Link>
        </div>
        <p className="mt-6 text-center text-sm text-cream/60">
          Schon dabei? <Link href="/login/" className="underline">Einloggen</Link> · Du suchst ein Schnäppchen? <Link href="/" className="underline">Zur Gäste-Seite</Link>
        </p>
      </section>
    </div>
  );
}
