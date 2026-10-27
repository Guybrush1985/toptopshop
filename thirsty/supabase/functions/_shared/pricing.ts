// Preise und Gebühren von Firsty. Eine Quelle für App (src/lib/payments.ts) und Server (Edge Functions).
// Alle Beträge in Cent. Werte nach dem Produktkonzept; zum Testen gedacht und jederzeit änderbar.
// Wird ein Wert geändert, der auch in der Datenbank steht (NO_SHOW_FEE_CENTS_PER_PERSON, BASIC_GUEST_LIMIT),
// muss er in supabase/schema.sql mitgeändert werden.

/** Gebühr auf Rechnungen, die Gäste in der App bezahlen (ohne Trinkgeld), inkl. USt. Deckt nur die Kartengebühren. */
export const COMMISSION_PERCENT = 2;

// ---------- Buchungsgebühr (Preismodell ab Start, Dezember 2026) ----------
// Restaurants zahlen pro wahrgenommener Buchung einen festen Betrag, egal wie viele Personen und wie viel Umsatz.
// Wer keine Gäste über Firsty bekommt, zahlt nichts. Abgerechnet wird monatlich über Stripe (Rechnung, Karte oder SEPA).
// Werte auch in supabase/schema.sql (booking_fee_month) ändern.

/** Gebühr pro wahrgenommener Buchung, netto. */
export const BOOKING_FEE_NET_CENTS = 200;
/** Höchstens so viel Buchungsgebühr pro Kalendermonat, netto. */
export const BOOKING_FEE_CAP_NET_CENTS = 9900;
/** Eine Buchung zählt als wahrgenommen, wenn sie eingecheckt ist oder das Restaurant sie bis so viele Stunden nach Ende
 *  des Zeitfensters nicht als No-Show gemeldet hat. */
export const BOOKING_FEE_NO_SHOW_HOURS = 24;
/** Ab diesem Tag (Start von Firsty) fallen Buchungsgebühren an. */
export const BOOKING_FEES_START = "2026-12-01";

/** No-Show-Gebühr pro Person, wenn eine Karte hinterlegt war. */
export const NO_SHOW_FEE_CENTS_PER_PERSON = 1000;
/** Anteil von Firsty an der No-Show-Gebühr; der Rest geht an das Restaurant. */
export const NO_SHOW_PLATFORM_PERCENT = 30;

/** Umsatzsteuer auf Firsty-Leistungen an Restaurants (Buchungsgebühr, Werbung, Gebühren). */
export const VAT_PERCENT = 19;

// ---------- Abos (Basic/Pro): zum Start nicht im Angebot ----------
// Bleiben im Code für eine spätere Flatrate. Solange SUBSCRIPTIONS_OFFERED false ist, kann niemand ein Abo abschließen.
export const SUBSCRIPTIONS_OFFERED = false;

export type PlanKey = "BASIC" | "PRO";
export const PLANS: Record<PlanKey, { name: string; netCents: number; features: string[] }> = {
  BASIC: {
    name: "Basic",
    netCents: 4900,
    features: ["Bis 40 Early-Bird-Gäste im Monat", "Angebote, Check-in, Bewertungen", "Zahlung in der App"],
  },
  PRO: {
    name: "Pro",
    netCents: 9900,
    features: ["Unbegrenzt viele Gäste", "Mehrere Teammitglieder", "Auswertungen und Export"],
  },
};
/** Kostenlose Startzeit: so viele Tage ab Anmeldung des Restaurants (frühestens ab BOOKING_FEES_START) ohne Buchungsgebühr.
 *  Galt früher als Testzeit des Abos. */
export const TRIAL_DAYS = 90;
/** Basic: so viele Early-Bird-Gäste pro Kalendermonat. */
export const BASIC_GUEST_LIMIT = 40;

/** Werbeplatz („Anzeige“, oben in Liste und Karte der Stadt), netto pro Tag. */
export const SPONSOR_NET_CENTS_PER_DAY = 500;
export const SPONSOR_DAY_OPTIONS = [1, 7, 30] as const;
/** Höchstens so viele Werbeplätze gleichzeitig pro Stadt. */
export const SPONSOR_MAX_PER_CITY = 2;

/** Trinkgeld-Vorschläge in Prozent der Rechnung. */
export const TIP_OPTIONS = [0, 5, 10, 15] as const;

export const gross = (netCents: number) => Math.round((netCents * (100 + VAT_PERCENT)) / 100);
export const vatOfGross = (grossCents: number) => grossCents - Math.round((grossCents * 100) / (100 + VAT_PERCENT));

/** Rechnung: Summe laut Kasse vor Firsty-Rabatt → Rabatt, zu zahlender Betrag. */
export function billAmounts(subtotalCents: number, discountPercent: number) {
  const discountCents = Math.round((subtotalCents * discountPercent) / 100);
  return { discountCents, amountCents: subtotalCents - discountCents };
}

/** Provision von Firsty auf einen in der App bezahlten Betrag (Trinkgeld bleibt provisionsfrei). */
export const commissionOf = (amountCents: number) => Math.round((amountCents * COMMISSION_PERCENT) / 100);

export const tipOf = (amountCents: number, tipPercent: number) => Math.round((amountCents * tipPercent) / 100);

export const noShowFee = (partySize: number) => partySize * NO_SHOW_FEE_CENTS_PER_PERSON;
export const noShowPlatformShare = (feeCents: number) => Math.round((feeCents * NO_SHOW_PLATFORM_PERCENT) / 100);

export const sponsorPrice = (days: number) => gross(days * SPONSOR_NET_CENTS_PER_DAY);

/** Buchungsgebühr eines Monats (netto) für so viele wahrgenommene Buchungen, mit Monatsdeckel. */
export const bookingFeeNet = (bookings: number) => Math.min(Math.max(0, bookings) * BOOKING_FEE_NET_CENTS, BOOKING_FEE_CAP_NET_CENTS);

/** Ab hier ist die Buchungsgebühr gedeckelt (jede weitere Buchung im Monat ist frei). */
export const BOOKING_FEE_CAP_BOOKINGS = Math.ceil(BOOKING_FEE_CAP_NET_CENTS / BOOKING_FEE_NET_CENTS);

/** Ende der kostenlosen Startzeit eines Restaurants: TRIAL_DAYS ab Anmeldung, frühestens ab BOOKING_FEES_START. */
export function feeFreeUntil(restaurantCreatedAt: string | Date, override?: string | Date | null) {
  if (override) return new Date(override);
  const start = Math.max(new Date(restaurantCreatedAt).getTime(), new Date(`${BOOKING_FEES_START}T00:00:00+01:00`).getTime());
  return new Date(start + TRIAL_DAYS * 864e5);
}
