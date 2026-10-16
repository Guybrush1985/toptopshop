// Angebotsarten. Ein Angebot ist genau eins davon; gespeichert wird es wie bisher als Rabatt (discountPercent)
// oder als Gratis-Beigabe (freebie), damit alte Angebote weiter angezeigt werden.

export type OfferKind = "DRINK" | "DESSERT" | "PCT25" | "PCT50" | "PCT75";

export const OFFER_KINDS: { kind: OfferKind; label: string; discountPercent: number; freebie?: string }[] = [
  { kind: "PCT50", label: "50 % auf alles", discountPercent: 50 },
  { kind: "DRINK", label: "Gratis-Getränk", discountPercent: 0, freebie: "Gratis-Getränk" },
  { kind: "DESSERT", label: "Gratis-Dessert", discountPercent: 0, freebie: "Gratis-Dessert" },
  { kind: "PCT25", label: "25 % auf alles", discountPercent: 25 },
  { kind: "PCT75", label: "75 % auf alles", discountPercent: 75 },
];

export function offerKind(kind: string) {
  return OFFER_KINDS.find((o) => o.kind === kind) ?? OFFER_KINDS[0];
}

export type OfferView = {
  /** Großer Teil, z. B. „−50 %“ oder „Gratis“ */
  big: string;
  /** Kleiner Teil, z. B. „auf alles“ oder „Drink“ */
  small: string;
  /** Kurz für Kartenpins */
  pin: string;
  /** Ganzer Satz */
  long: string;
  tone: "lime" | "hot" | "pink";
};

export function offerOf(sp: { discountPercent: number; freebie?: string | null }): OfferView {
  const free = sp.freebie?.trim();
  const dessert = !!free && /dessert|nachtisch/i.test(free);
  if (sp.discountPercent > 0) {
    return {
      big: `−${sp.discountPercent} %`,
      small: "auf alles",
      pin: `−${sp.discountPercent}%`,
      long: `${sp.discountPercent} % auf die ganze Rechnung${free ? ` und ${free}` : ""}`,
      tone: sp.discountPercent >= 50 ? "hot" : "lime",
    };
  }
  if (free) {
    return {
      big: "Gratis",
      small: dessert ? "Dessert" : /getränk|drink/i.test(free) ? "Drink" : free,
      pin: dessert ? "Dessert" : "Drink",
      long: dessert ? "Ein Dessert pro Person aufs Haus" : /getränk|drink/i.test(free) ? "Ein Getränk pro Person aufs Haus" : free,
      tone: dessert ? "pink" : "lime",
    };
  }
  return { big: "Early", small: "Bird", pin: "Platz", long: "Früher Platz ohne Rabatt", tone: "lime" };
}

export const TONE_BG: Record<OfferView["tone"], string> = {
  lime: "bg-lime text-ink",
  hot: "bg-hot text-ink",
  pink: "bg-pink text-ink",
};
