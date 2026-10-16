"use client";

// Datenhaltung. Zwei Betriebsarten mit derselben Form der Daten (State):
// - Vorschau: alles liegt im Local Storage dieses Browsers.
// - Live (Supabase konfiguriert): remote.ts lädt die Daten aus der Datenbank und setzt sie mit setRemoteState.
// Die Funktionen in actions.ts sind die einzige Stelle, die Daten ändert.

import { useSyncExternalStore } from "react";
import { REMOTE } from "./config";
import type { Tier } from "./reliability";
import { OFFER_KINDS } from "./offer";

export type Role = "GUEST" | "OWNER";
export type MemberRole = "OWNER" | "MANAGER" | "STAFF";
export type BookingStatus = "BOOKED" | "CHECKED_IN" | "CANCELLED" | "LATE_CANCELLED" | "NO_SHOW";
export type EventKind = "ATTENDED" | "LATE_CANCEL" | "LATE_ARRIVAL" | "THUMBS_DOWN" | "NO_SHOW";

export type User = {
  id: string; email: string; passwordHash: string; name: string; phone?: string; role: Role;
  dietaryNotes?: string; createdAt: string;
};
export type Restaurant = {
  id: string; slug: string; name: string; tagline?: string; description?: string; cuisine?: string;
  priceLevel: number; street?: string; postalCode?: string; city?: string; lat?: number; lng?: number;
  directions?: string; phone?: string; email?: string; website?: string; instagram?: string;
  seatsInside: number; seatsOutside: number; features: string[]; legalName?: string; vatId?: string;
  status: "DRAFT" | "ACTIVE" | "PAUSED"; demo?: boolean; createdAt: string;
};
export type Member = { id: string; userId: string; restaurantId: string; role: MemberRole };
export type OpeningHours = { restaurantId: string; weekday: number; opens: string; closes: string };
export type Photo = { id: string; restaurantId: string; dataUrl: string; kind: "LOGO" | "COVER" | "GALLERY" | "MENU"; position: number };
export type MenuItem = {
  id: string; restaurantId: string; category: string; name: string; description?: string;
  priceCents: number; tags: string[]; allergens?: string; position: number;
};
export type Spot = {
  id: string; restaurantId: string; startsAt: string; endsAt: string; seats: number; maxGroupSize: number;
  discountPercent: number; freebie?: string; conditions?: string; bookingCutoffMin: number;
  status: "OPEN" | "CANCELLED";
  /** Gäste müssen eine Karte hinterlegen; bei No-Show wird die Gebühr belastet. */
  noShowProtection?: boolean;
};
export type Booking = {
  id: string; spotId: string; userId: string; partySize: number; code: string; status: BookingStatus;
  createdAt: string; checkedInAt?: string; cancelledAt?: string;
  /** Mit hinterlegter Karte gebucht; bei No-Show wird noShowFeeCents belastet. */
  guaranteed?: boolean; noShowFeeCents?: number;
};

// ---------- Zahlungen ----------

export type BillStatus = "OPEN" | "PAID" | "PAID_ON_SITE" | "CANCELLED" | "REFUNDED";
/** Rechnung nach dem Essen: Restaurant trägt die Summe ein, Gast zahlt in der App oder vor Ort. */
export type Bill = {
  id: string; bookingId?: string; restaurantId: string; userId?: string; subtotalCents: number; discountPercent: number;
  discountCents: number; amountCents: number; tipCents: number; feeCents: number; status: BillStatus; note?: string;
  receiptUrl?: string; createdAt: string; paidAt?: string;
};
export type PaymentKind = "BILL" | "NO_SHOW" | "SUBSCRIPTION" | "SPONSORSHIP" | "REFUND";
/** Eintrag im Kassenbuch (Grundlage der Abrechnung). */
export type Payment = {
  id: string; kind: PaymentKind; restaurantId?: string; userId?: string; bookingId?: string; billId?: string;
  amountCents: number; feeCents: number; netCents: number; tipCents: number; status: "PENDING" | "SUCCEEDED" | "FAILED" | "REFUNDED";
  description?: string; receiptUrl?: string; invoiceUrl?: string; invoicePdf?: string; createdAt: string;
};
/** Hinterlegte Karte (Anzeige-Daten). */
export type Card = { userId: string; brand?: string; last4?: string; expMonth?: number; expYear?: number };
export type PlanStatus = "none" | "trialing" | "active" | "past_due" | "unpaid" | "canceled" | "incomplete" | "incomplete_expired" | "paused";
/** Auszahlungskonto und Abo eines Restaurants. */
export type RestaurantAccount = {
  restaurantId: string; connected: boolean; chargesEnabled: boolean; payoutsEnabled: boolean; detailsSubmitted: boolean;
  plan: "NONE" | "BASIC" | "PRO"; planStatus: PlanStatus; trialUsed: boolean; trialEnd?: string; periodEnd?: string;
  cancelAtPeriodEnd: boolean; hasCustomer: boolean;
};
export type Sponsorship = {
  id: string; restaurantId: string; city: string; startsAt: string; endsAt: string; days: number; amountCents: number;
  status: "PENDING" | "PAID" | "CANCELLED"; createdAt: string;
};
export type Review = {
  id: string; bookingId: string; restaurantId: string; authorName: string; rating: number; food?: number; service?: number; ambience?: number;
  asPromised: boolean; text?: string; reply?: string; createdAt: string;
};
export type Feedback = { bookingId: string; positive: boolean; tags: string[] };
export type ReliabilityEvent = { id: string; userId: string; bookingId?: string; kind: EventKind; points: number; createdAt: string };
export type Favorite = { userId: string; restaurantId: string };

export type State = {
  version: 1;
  sessionUserId: string | null;
  users: User[];
  restaurants: Restaurant[];
  members: Member[];
  hours: OpeningHours[];
  photos: Photo[];
  menu: MenuItem[];
  spots: Spot[];
  bookings: Booking[];
  reviews: Review[];
  feedback: Feedback[];
  events: ReliabilityEvent[];
  favorites: Favorite[];
  bills: Bill[];
  payments: Payment[];
  cards: Card[];
  accounts: RestaurantAccount[];
  sponsorships: Sponsorship[];
  /** Öffentlich: Restaurants mit Zahlung in der App bzw. aktivem Werbeplatz (Live: aus payment_flags()). */
  flags?: Record<string, { acceptsAppPayment: boolean; sponsored: boolean }>;
  /** Nur im Live-Betrieb: Daten, die der Browser nicht selbst aus Buchungen und Ereignissen berechnen kann. */
  remote?: {
    ready: boolean;
    /** Belegte Plätze pro Angebot */
    taken: Record<string, number>;
    /** Zuverlässigkeit: eigener Wert und Stufen der Gäste in den eigenen Restaurants */
    reliability: Record<string, { score: number; tier: Tier; blockedUntil: Date | null }>;
  };
};

const KEY = "thirsty-preview-v1";
let state: State | null = null;
const listeners = new Set<() => void>();

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export function emptyState(): State {
  return {
    version: 1, sessionUserId: null, users: [], restaurants: [], members: [], hours: [], photos: [], menu: [],
    spots: [], bookings: [], reviews: [], feedback: [], events: [], favorites: [],
    bills: [], payments: [], cards: [], accounts: [], sponsorships: [],
  };
}

function load(): State {
  if (REMOTE) return { ...emptyState(), remote: { ready: false, taken: {}, reliability: {} } };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw) as State;
      if (s.version === 1) return migrate(topUpDemoSpots(addDemoRestaurants(s)));
    }
  } catch {
    /* Local Storage nicht verfügbar oder beschädigt: neu anfangen */
  }
  return seed();
}

function persist(s: State) {
  if (REMOTE) return true;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    return true;
  } catch {
    return false;
  }
}

export function getState(): State {
  if (!state) {
    state = load();
    persist(state);
  }
  return state;
}

/** Ändert den Zustand. Gibt false zurück, wenn der Speicher voll ist (z. B. zu viele Fotos). */
export function update(fn: (draft: State) => void): boolean {
  const draft = structuredClone(getState());
  fn(draft);
  if (!persist(draft)) return false;
  state = draft;
  listeners.forEach((l) => l());
  return true;
}

/** Live-Betrieb: frisch geladene Daten übernehmen. */
export function setRemoteState(next: State) {
  state = next;
  listeners.forEach((l) => l());
}

export function resetDemo() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* egal */
  }
  state = seed();
  persist(state);
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  const onStorage = (e: StorageEvent) => {
    if (!REMOTE && e.key === KEY) {
      state = null;
      l();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(l);
    window.removeEventListener("storage", onStorage);
  };
}

export function useStore(): State {
  return useSyncExternalStore(subscribe, getState, getState);
}

export function useCurrentUser(): User | null {
  const s = useStore();
  return s.users.find((u) => u.id === s.sessionUserId) ?? null;
}

export async function hashPassword(pw: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`thirsty:${pw}`));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ---------- Beispieldaten ----------

/** Berliner Ortszeit: Tag in X Tagen um hh:mm als ISO-String. */
export function berlinAt(daysAhead: number, hhmm: string) {
  const day = new Date(Date.now() + daysAhead * 864e5).toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
  const guess = new Date(`${day}T${hhmm}:00Z`);
  const offset =
    new Date(guess.toLocaleString("en-US", { timeZone: "Europe/Berlin" })).getTime() -
    new Date(guess.toLocaleString("en-US", { timeZone: "UTC" })).getTime();
  return new Date(guess.getTime() - offset).toISOString();
}

export const DEMO_LOGINS = [
  { email: "gast@thirsty.test", label: "Als Gast testen" },
  { email: "wirt@thirsty.test", label: "Als Restaurant testen" },
];

type DemoRestaurant = Omit<Restaurant, "id" | "createdAt" | "status" | "demo"> & { menu: [string, string, number, string[]][] };

const DEMO_RESTAURANTS: DemoRestaurant[] = [
  {
    slug: "trattoria-sole", name: "Trattoria Sole", cuisine: "Italienisch", priceLevel: 2,
    tagline: "Hausgemachte Pasta und Terrasse in der Abendsonne",
    description: "Familiengeführte Trattoria mit frischer Pasta, Holzofenpizza und einer großen Terrasse zur Westseite.",
    street: "Schanzenstraße 12", postalCode: "20357", city: "Hamburg", lat: 53.5627, lng: 9.9629,
    phone: "040 0000000", seatsInside: 40, seatsOutside: 24, features: ["terrasse", "kinder", "wlan"],
    menu: [
      ["Vorspeisen", "Bruschetta al pomodoro", 790, ["vegetarisch"]],
      ["Vorspeisen", "Vitello tonnato", 1290, []],
      ["Hauptgerichte", "Tagliatelle al ragù", 1590, []],
      ["Hauptgerichte", "Pizza Margherita", 1190, ["vegetarisch"]],
      ["Desserts", "Tiramisù", 750, ["vegetarisch"]],
    ],
  },
  {
    slug: "pho-viet-kitchen", name: "Pho Viet Kitchen", cuisine: "Vietnamesisch", priceLevel: 1,
    tagline: "Pho, Bánh mì und frische Sommerrollen",
    description: "Kleine vietnamesische Küche mit Brühen, die zwölf Stunden ziehen.",
    street: "Bahrenfelder Straße 80", postalCode: "22765", city: "Hamburg", lat: 53.5552, lng: 9.9306,
    seatsInside: 28, seatsOutside: 8, features: ["vegan"],
    menu: [
      ["Vorspeisen", "Sommerrollen mit Tofu", 650, ["vegan"]],
      ["Hauptgerichte", "Pho Bo", 1390, ["scharf"]],
      ["Hauptgerichte", "Bún chay", 1290, ["vegan"]],
    ],
  },
  {
    slug: "fischhalle-kai", name: "Fischhalle am Kai", cuisine: "Fisch", priceLevel: 3,
    tagline: "Fangfrischer Fisch mit Blick auf den Hafen",
    description: "Fischrestaurant mit Außenplätzen direkt am Wasser. Mittags voll, abends ab 17 Uhr noch Platz.",
    street: "Große Elbstraße 150", postalCode: "22767", city: "Hamburg", lat: 53.5449, lng: 9.9419,
    seatsInside: 60, seatsOutside: 30, features: ["terrasse", "barrierefrei"],
    menu: [
      ["Vorspeisen", "Krabbensuppe", 990, []],
      ["Hauptgerichte", "Scholle Finkenwerder Art", 2690, []],
      ["Hauptgerichte", "Matjes mit Bratkartoffeln", 1890, []],
    ],
  },
  {
    slug: "kiezkantine", name: "Kiezkantine", cuisine: "Deutsch-modern", priceLevel: 2,
    tagline: "Schmorgerichte und Naturwein mitten in Kreuzberg",
    description: "Offene Küche, lange Tafeln, wechselnde Wochenkarte mit Zutaten aus Brandenburg.",
    street: "Oranienstraße 180", postalCode: "10999", city: "Berlin", lat: 52.5003, lng: 13.4205,
    seatsInside: 36, seatsOutside: 16, features: ["terrasse", "vegan"],
    menu: [
      ["Vorspeisen", "Rote Bete mit Meerrettich", 850, ["vegan"]],
      ["Hauptgerichte", "Geschmorte Ochsenbacke", 2290, []],
      ["Desserts", "Quarkkeulchen", 750, ["vegetarisch"]],
    ],
  },
  {
    slug: "zaatar-zitrone", name: "Zaatar & Zitrone", cuisine: "Levantinisch", priceLevel: 2,
    tagline: "Mezze zum Teilen in Mitte",
    description: "Kleine Teller, Holzkohlegrill und hausgebackenes Fladenbrot.",
    street: "Torstraße 140", postalCode: "10119", city: "Berlin", lat: 52.5293, lng: 13.401,
    seatsInside: 40, seatsOutside: 12, features: ["vegan", "wlan"],
    menu: [
      ["Mezze", "Hummus mit Kichererbsen", 690, ["vegan"]],
      ["Mezze", "Baba Ghanoush", 720, ["vegan"]],
      ["Grill", "Lammkofta", 1690, []],
    ],
  },
  {
    slug: "nudelwerk-ost", name: "Nudelwerk Ost", cuisine: "Japanisch", priceLevel: 1,
    tagline: "Ramen mit 18-Stunden-Brühe",
    description: "Kleiner Ramen-Laden mit Tresenplätzen und hausgemachten Nudeln.",
    street: "Kastanienallee 50", postalCode: "10119", city: "Berlin", lat: 52.5333, lng: 13.4078,
    seatsInside: 24, seatsOutside: 0, features: [],
    menu: [
      ["Ramen", "Tonkotsu Ramen", 1450, []],
      ["Ramen", "Miso Ramen mit Tofu", 1350, ["vegan"]],
      ["Beilagen", "Gyoza", 650, []],
    ],
  },
  {
    slug: "spreegold", name: "Spreegold", cuisine: "Französisch", priceLevel: 3,
    tagline: "Bistroküche mit Blick aufs Wasser",
    description: "Französisches Bistro am Schiffbauerdamm, abends mit Kerzenlicht und Weinkarte.",
    street: "Schiffbauerdamm 20", postalCode: "10117", city: "Berlin", lat: 52.5206, lng: 13.3858,
    seatsInside: 50, seatsOutside: 30, features: ["terrasse", "barrierefrei"],
    menu: [
      ["Vorspeisen", "Zwiebelsuppe", 890, ["vegetarisch"]],
      ["Hauptgerichte", "Entrecôte mit Frites", 2890, []],
      ["Desserts", "Crème brûlée", 850, ["vegetarisch"]],
    ],
  },
  {
    slug: "weserkind", name: "Weserkind", cuisine: "Norddeutsch", priceLevel: 2,
    tagline: "Labskaus, Knipp und Bremer Klassiker",
    description: "Gemütliche Stube im Schnoor mit regionaler Küche.",
    street: "Schnoor 22", postalCode: "28195", city: "Bremen", lat: 53.0727, lng: 8.8104,
    seatsInside: 32, seatsOutside: 10, features: ["kinder"],
    menu: [
      ["Hauptgerichte", "Labskaus mit Spiegelei", 1690, []],
      ["Hauptgerichte", "Knipp mit Bratkartoffeln", 1590, []],
      ["Desserts", "Rote Grütze", 650, ["vegetarisch"]],
    ],
  },
  {
    slug: "moewe-mandel", name: "Möwe & Mandel", cuisine: "Spanisch", priceLevel: 2,
    tagline: "Tapas und Vermut im Viertel",
    description: "Lebhafte Tapasbar im Ostertor, ab 17 Uhr mit Happy Hour.",
    street: "Ostertorsteinweg 60", postalCode: "28203", city: "Bremen", lat: 53.0736, lng: 8.824,
    seatsInside: 30, seatsOutside: 14, features: ["terrasse"],
    menu: [
      ["Tapas", "Patatas bravas", 590, ["vegan"]],
      ["Tapas", "Gambas al ajillo", 1190, []],
      ["Tapas", "Tortilla española", 690, ["vegetarisch"]],
    ],
  },
  {
    slug: "schlachte-sieben", name: "Schlachte Sieben", cuisine: "Fisch", priceLevel: 3,
    tagline: "Fisch und Weserblick an der Schlachte",
    description: "Fischküche direkt an der Weserpromenade mit großer Außenterrasse.",
    street: "Schlachte 30", postalCode: "28195", city: "Bremen", lat: 53.0757, lng: 8.8022,
    seatsInside: 55, seatsOutside: 40, features: ["terrasse", "barrierefrei"],
    menu: [
      ["Vorspeisen", "Fischsuppe", 990, []],
      ["Hauptgerichte", "Zanderfilet auf Linsen", 2490, []],
      ["Hauptgerichte", "Backfisch mit Remoulade", 1790, []],
    ],
  },
  {
    slug: "grantlhuber", name: "Grantlhuber", cuisine: "Bayerisch", priceLevel: 2,
    tagline: "Wirtshaus im Glockenbachviertel",
    description: "Bayerische Klassiker, Schweinsbraten aus dem Rohr und Bier vom Holzfass.",
    street: "Müllerstraße 40", postalCode: "80469", city: "München", lat: 48.131, lng: 11.57,
    seatsInside: 60, seatsOutside: 40, features: ["terrasse", "kinder"],
    menu: [
      ["Hauptgerichte", "Schweinsbraten mit Knödel", 1790, []],
      ["Hauptgerichte", "Kässpatzn", 1490, ["vegetarisch"]],
      ["Desserts", "Kaiserschmarrn", 1190, ["vegetarisch"]],
    ],
  },
  {
    slug: "lupo-nero", name: "Lupo Nero", cuisine: "Italienisch", priceLevel: 2,
    tagline: "Pasta fresca in Schwabing",
    description: "Kleine Osteria mit täglich frischer Pasta und offener Weinbar.",
    street: "Leopoldstraße 60", postalCode: "80802", city: "München", lat: 48.16, lng: 11.5856,
    seatsInside: 38, seatsOutside: 20, features: ["terrasse", "wlan"],
    menu: [
      ["Primi", "Cacio e pepe", 1390, ["vegetarisch"]],
      ["Primi", "Pappardelle al cinghiale", 1790, []],
      ["Dolci", "Panna cotta", 690, ["vegetarisch"]],
    ],
  },
  {
    slug: "masala-moon", name: "Masala Moon", cuisine: "Indisch", priceLevel: 1,
    tagline: "Currys aus dem Tandoor im Westend",
    description: "Indische Küche mit eigenem Tandoor-Ofen und vielen veganen Gerichten.",
    street: "Schwanthalerstraße 130", postalCode: "80339", city: "München", lat: 48.136, lng: 11.542,
    seatsInside: 44, seatsOutside: 0, features: ["vegan"],
    menu: [
      ["Vorspeisen", "Samosas", 590, ["vegan"]],
      ["Hauptgerichte", "Butter Chicken", 1590, []],
      ["Hauptgerichte", "Chana Masala", 1290, ["vegan"]],
    ],
  },
  {
    slug: "koelsch-kohl", name: "Kölsch & Kohl", cuisine: "Rheinisch", priceLevel: 2,
    tagline: "Brauhausküche in Ehrenfeld",
    description: "Rheinische Klassiker, frisch gezapftes Kölsch und lange Holztische.",
    street: "Venloer Straße 300", postalCode: "50823", city: "Köln", lat: 50.9496, lng: 6.92,
    seatsInside: 80, seatsOutside: 30, features: ["kinder", "barrierefrei"],
    menu: [
      ["Hauptgerichte", "Himmel un Ääd", 1490, []],
      ["Hauptgerichte", "Rheinischer Sauerbraten", 1890, []],
      ["Kleinigkeiten", "Halve Hahn", 690, ["vegetarisch"]],
    ],
  },
  {
    slug: "petit-bruxelles", name: "Petit Bruxelles", cuisine: "Belgisch", priceLevel: 2,
    tagline: "Moules-frites im Belgischen Viertel",
    description: "Belgisches Bistro mit Muscheln, Frites und über 40 Biersorten.",
    street: "Brüsseler Straße 50", postalCode: "50674", city: "Köln", lat: 50.9365, lng: 6.933,
    seatsInside: 34, seatsOutside: 18, features: ["terrasse"],
    menu: [
      ["Hauptgerichte", "Moules-frites", 2190, []],
      ["Hauptgerichte", "Carbonade flamande", 1890, []],
      ["Desserts", "Belgische Waffel", 690, ["vegetarisch"]],
    ],
  },
  {
    slug: "umami-sued", name: "Umami Süd", cuisine: "Japanisch", priceLevel: 3,
    tagline: "Sushi und Izakaya in der Südstadt",
    description: "Sushi-Theke und warme Izakaya-Gerichte in der Kölner Südstadt.",
    street: "Severinstraße 100", postalCode: "50678", city: "Köln", lat: 50.9273, lng: 6.959,
    seatsInside: 32, seatsOutside: 8, features: [],
    menu: [
      ["Sushi", "Sake Nigiri (2 Stück)", 590, []],
      ["Sushi", "Avocado Maki", 690, ["vegan"]],
      ["Warm", "Karaage", 990, []],
    ],
  },
  {
    slug: "ebbelwoi-engel", name: "Ebbelwoi Engel", cuisine: "Hessisch", priceLevel: 2,
    tagline: "Apfelwein und Grüne Soße in Sachsenhausen",
    description: "Traditionelle Apfelweinwirtschaft mit Hof und langen Bänken.",
    street: "Schweizer Straße 50", postalCode: "60594", city: "Frankfurt am Main", lat: 50.101, lng: 8.683,
    seatsInside: 70, seatsOutside: 50, features: ["terrasse", "kinder"],
    menu: [
      ["Hauptgerichte", "Grüne Soße mit Eiern", 1390, ["vegetarisch"]],
      ["Hauptgerichte", "Schnitzel mit Bratkartoffeln", 1790, []],
      ["Kleinigkeiten", "Handkäs mit Musik", 690, ["vegetarisch"]],
    ],
  },
  {
    slug: "taverna-thalassa", name: "Taverna Thalassa", cuisine: "Griechisch", priceLevel: 2,
    tagline: "Griechische Taverne auf der Berger Straße",
    description: "Grill, Ofengerichte und Meze in familiärer Atmosphäre.",
    street: "Berger Straße 200", postalCode: "60385", city: "Frankfurt am Main", lat: 50.126, lng: 8.708,
    seatsInside: 48, seatsOutside: 24, features: ["terrasse", "kinder"],
    menu: [
      ["Meze", "Tzatziki", 590, ["vegetarisch"]],
      ["Hauptgerichte", "Gyros mit Pita", 1590, []],
      ["Hauptgerichte", "Moussaka", 1690, []],
    ],
  },
  {
    slug: "gruenzeug-bowls", name: "Grünzeug", cuisine: "Bowls", priceLevel: 1,
    tagline: "Bunte Bowls im Nordend",
    description: "Frische Bowls und Säfte, fast alles vegan.",
    street: "Oeder Weg 40", postalCode: "60318", city: "Frankfurt am Main", lat: 50.122, lng: 8.681,
    seatsInside: 26, seatsOutside: 10, features: ["vegan", "wlan"],
    menu: [
      ["Bowls", "Falafel Bowl", 1290, ["vegan"]],
      ["Bowls", "Teriyaki Lachs Bowl", 1490, []],
      ["Desserts", "Chia-Pudding", 590, ["vegan"]],
    ],
  },
  {
    slug: "radschlaeger", name: "Radschläger", cuisine: "Rheinisch", priceLevel: 2,
    tagline: "Altbier und Rheinküche in der Altstadt",
    description: "Urige Altstadtkneipe mit Küche bis spät.",
    street: "Bolkerstraße 40", postalCode: "40213", city: "Düsseldorf", lat: 51.2265, lng: 6.774,
    seatsInside: 60, seatsOutside: 20, features: ["kinder"],
    menu: [
      ["Hauptgerichte", "Rheinischer Sauerbraten", 1890, []],
      ["Hauptgerichte", "Reibekuchen mit Apfelmus", 1190, ["vegetarisch"]],
      ["Kleinigkeiten", "Mettbrötchen", 490, []],
    ],
  },
  {
    slug: "udon-ichi", name: "Udon Ichi", cuisine: "Japanisch", priceLevel: 1,
    tagline: "Handgezogene Udon im Japanviertel",
    description: "Schneller Nudelladen mit frischen Udon und Tempura.",
    street: "Immermannstraße 30", postalCode: "40210", city: "Düsseldorf", lat: 51.225, lng: 6.788,
    seatsInside: 30, seatsOutside: 0, features: [],
    menu: [
      ["Udon", "Kake Udon", 1090, ["vegan"]],
      ["Udon", "Tempura Udon", 1390, []],
      ["Beilagen", "Onigiri", 390, ["vegan"]],
    ],
  },
  {
    slug: "bohnenbesen", name: "Bohnenbesen", cuisine: "Schwäbisch", priceLevel: 2,
    tagline: "Maultaschen und Trollinger im Bohnenviertel",
    description: "Schwäbische Weinstube mit hausgemachten Spätzle.",
    street: "Weberstraße 50", postalCode: "70182", city: "Stuttgart", lat: 48.772, lng: 9.183,
    seatsInside: 40, seatsOutside: 16, features: ["terrasse"],
    menu: [
      ["Hauptgerichte", "Maultaschen geschmälzt", 1490, []],
      ["Hauptgerichte", "Käsespätzle", 1390, ["vegetarisch"]],
      ["Hauptgerichte", "Zwiebelrostbraten", 2490, []],
    ],
  },
  {
    slug: "forno-rosso", name: "Forno Rosso", cuisine: "Italienisch", priceLevel: 1,
    tagline: "Neapolitanische Pizza am Marienplatz",
    description: "Pizza aus dem Holzofen, 48 Stunden gereifter Teig.",
    street: "Tübinger Straße 90", postalCode: "70178", city: "Stuttgart", lat: 48.766, lng: 9.169,
    seatsInside: 45, seatsOutside: 25, features: ["terrasse", "kinder"],
    menu: [
      ["Pizza", "Margherita", 990, ["vegetarisch"]],
      ["Pizza", "Diavola", 1290, ["scharf"]],
      ["Dolci", "Tiramisù", 650, ["vegetarisch"]],
    ],
  },
  {
    slug: "gemuesegarten-sued", name: "Gemüsegarten Süd", cuisine: "Vegetarisch", priceLevel: 1,
    tagline: "Vegetarische Küche in der Südvorstadt",
    description: "Saisonale, vegetarische und vegane Gerichte auf der Karli.",
    street: "Karl-Liebknecht-Straße 90", postalCode: "04275", city: "Leipzig", lat: 51.32, lng: 12.374,
    seatsInside: 34, seatsOutside: 20, features: ["vegan", "terrasse"],
    menu: [
      ["Hauptgerichte", "Kürbis-Curry", 1290, ["vegan"]],
      ["Hauptgerichte", "Spinatknödel", 1350, ["vegetarisch"]],
      ["Desserts", "Apfelstrudel", 590, ["vegetarisch"]],
    ],
  },
  {
    slug: "kanalkantine", name: "Kanalkantine", cuisine: "Deutsch-modern", priceLevel: 2,
    tagline: "Abendküche am Karl-Heine-Kanal",
    description: "Ehemalige Fabrikhalle in Plagwitz mit Terrasse am Wasser.",
    street: "Karl-Heine-Straße 50", postalCode: "04229", city: "Leipzig", lat: 51.33, lng: 12.337,
    seatsInside: 70, seatsOutside: 40, features: ["terrasse", "barrierefrei"],
    menu: [
      ["Vorspeisen", "Leipziger Allerlei", 890, ["vegetarisch"]],
      ["Hauptgerichte", "Rinderroulade", 2190, []],
      ["Desserts", "Leipziger Lerche", 450, ["vegetarisch"]],
    ],
  },
];

function demoSpots(restaurantId: string, fromDay: number, withSoon: boolean, variant = 0): Spot[] {
  const spots: Spot[] = [];
  if (withSoon) {
    // Startet in 45 Minuten, damit Buchung und Check-in sofort ausprobiert werden können.
    spots.push(makeSpot(restaurantId, new Date(Date.now() + 45 * 60_000).toISOString(), new Date(Date.now() + 165 * 60_000).toISOString(), variant));
  }
  for (let d = Math.max(1, fromDay); d <= 4; d++) spots.push(makeSpot(restaurantId, berlinAt(d, "17:30"), berlinAt(d, "19:00"), variant + d));
  return spots;
}

/** Beispielangebote wechseln die Angebotsart, damit alle Varianten zu sehen sind. */
function makeSpot(restaurantId: string, startsAt: string, endsAt: string, variant: number): Spot {
  const offer = OFFER_KINDS[variant % OFFER_KINDS.length];
  return {
    id: uid(), restaurantId, startsAt, endsAt, seats: 8, maxGroupSize: 4, discountPercent: offer.discountPercent,
    freebie: offer.freebie, conditions: "Ein Hauptgericht pro Person.", bookingCutoffMin: 30, status: "OPEN",
  };
}

function seed(): State {
  const now = new Date().toISOString();
  const s = emptyState();
  // Passwort der Demo-Konten: "thirsty123" (SHA-256 von "thirsty:thirsty123")
  const demoHash = "2ef3e82c4a588abd72284a0e846521dbab5b4e3cb4cf78d59f8819965fea5f12";
  s.users.push(
    { id: "demo-owner", email: "wirt@thirsty.test", name: "Maria Rossi", role: "OWNER", passwordHash: demoHash, createdAt: now },
    { id: "demo-guest", email: "gast@thirsty.test", name: "Jonas Gast", role: "GUEST", passwordHash: demoHash, phone: "0151 0000000", createdAt: now },
  );
  addDemoRestaurants(s);
  return s;
}

/** Legt fehlende Beispiel-Restaurants an (auch in älteren Vorschau-Daten, wenn neue Städte dazukommen). */
function addDemoRestaurants(s: State): State {
  const now = new Date().toISOString();
  DEMO_RESTAURANTS.forEach(({ menu, ...r }, i) => {
    const id = `demo-${r.slug}`;
    if (s.restaurants.some((x) => x.id === id)) return;
    s.restaurants.push({ ...r, id, status: "ACTIVE", demo: true, createdAt: now });
    // Das Demo-Wirtskonto verwaltet nur die Hamburger Beispiele, damit das Portal übersichtlich bleibt.
    if (r.city === "Hamburg" && s.users.some((u) => u.id === "demo-owner")) s.members.push({ id: uid(), userId: "demo-owner", restaurantId: id, role: "OWNER" });
    for (const weekday of [1, 2, 3, 4, 5, 6]) s.hours.push({ restaurantId: id, weekday, opens: "17:00", closes: "23:00" });
    menu.forEach(([category, name, priceCents, tags], position) =>
      s.menu.push({ id: uid(), restaurantId: id, category, name, priceCents, tags, position }));
    s.spots.push(...demoSpots(id, 0, i < 2, i));
  });
  return s;
}

/** Wer die Vorschau Tage später wieder öffnet, findet weiter Beispielangebote. */
function topUpDemoSpots(s: State): State {
  for (const [i, r] of s.restaurants.filter((x) => x.demo).entries()) {
    const upcoming = s.spots.some((sp) => sp.restaurantId === r.id && sp.status === "OPEN" && new Date(sp.endsAt) > new Date());
    if (!upcoming) s.spots.push(...demoSpots(r.id, 1, false, i));
  }
  return s;
}

/** Ältere Vorschau-Daten: Bewertungen bekamen später Restaurant und Namen direkt mitgespeichert. */
function migrate(s: State): State {
  // Zahlungen kamen später dazu
  s.bills ??= [];
  s.payments ??= [];
  s.cards ??= [];
  s.accounts ??= [];
  s.sponsorships ??= [];
  for (const r of s.reviews) {
    if (r.restaurantId && r.authorName) continue;
    const b = s.bookings.find((x) => x.id === r.bookingId);
    r.restaurantId = s.spots.find((x) => x.id === b?.spotId)?.restaurantId ?? "";
    r.authorName = s.users.find((u) => u.id === b?.userId)?.name.split(" ")[0] ?? "Gast";
  }
  return s;
}
