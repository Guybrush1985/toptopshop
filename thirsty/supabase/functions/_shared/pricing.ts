// Preise und Gebühren von Firsty. Eine Quelle für App (src/lib/payments.ts) und Server (Edge Functions).
// Alle Beträge in Cent. Werte nach dem Produktkonzept; zum Testen gedacht und jederzeit änderbar.
// Wird ein Wert geändert, der auch in der Datenbank steht (NO_SHOW_FEE_CENTS_PER_PERSON, BASIC_GUEST_LIMIT),
// muss er in supabase/schema.sql mitgeändert werden.

/** Provision auf Rechnungen, die Gäste in der App bezahlen (ohne Trinkgeld), inkl. USt. */
export const COMMISSION_PERCENT = 5;

/** No-Show-Gebühr pro Person, wenn eine Karte hinterlegt war. */
export const NO_SHOW_FEE_CENTS_PER_PERSON = 1000;
/** Anteil von Firsty an der No-Show-Gebühr; der Rest geht an das Restaurant. */
export const NO_SHOW_PLATFORM_PERCENT = 30;

/** Umsatzsteuer auf Firsty-Leistungen an Restaurants (Abo, Werbung, Provision). */
export const VAT_PERCENT = 19;

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
/** Kostenlose Testzeit beim ersten Abo eines Restaurants. */
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
