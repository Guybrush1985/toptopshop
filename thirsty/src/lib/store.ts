"use client";

// Datenhaltung der Vorschau: alles liegt im Local Storage dieses Browsers.
// Die Funktionen in actions.ts sind die einzige Stelle, die Daten ändert. Für den echten Betrieb
// wird diese Datei durch eine Anbindung an eine Datenbank (z. B. Supabase) ersetzt.

import { useSyncExternalStore } from "react";

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
};
export type Booking = {
  id: string; spotId: string; userId: string; partySize: number; code: string; status: BookingStatus;
  createdAt: string; checkedInAt?: string; cancelledAt?: string;
};
export type Review = {
  id: string; bookingId: string; rating: number; food?: number; service?: number; ambience?: number;
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
};

const KEY = "thirsty-preview-v1";
let state: State | null = null;
const listeners = new Set<() => void>();

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw) as State;
      if (s.version === 1) return topUpDemoSpots(s);
    }
  } catch {
    /* Local Storage nicht verfügbar oder beschädigt: neu anfangen */
  }
  return seed();
}

function persist(s: State) {
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
    if (e.key === KEY) {
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
];

function demoSpots(restaurantId: string, fromDay: number, withSoon: boolean): Spot[] {
  const spots: Spot[] = [];
  if (withSoon) {
    // Startet in 45 Minuten, damit Buchung und Check-in sofort ausprobiert werden können.
    spots.push(makeSpot(restaurantId, new Date(Date.now() + 45 * 60_000).toISOString(), new Date(Date.now() + 165 * 60_000).toISOString()));
  }
  for (let d = Math.max(1, fromDay); d <= 4; d++) spots.push(makeSpot(restaurantId, berlinAt(d, "17:30"), berlinAt(d, "19:00")));
  return spots;
}

function makeSpot(restaurantId: string, startsAt: string, endsAt: string): Spot {
  return {
    id: uid(), restaurantId, startsAt, endsAt, seats: 8, maxGroupSize: 4, discountPercent: 50,
    freebie: "1 Getränk pro Person", conditions: "Ein Hauptgericht pro Person.", bookingCutoffMin: 30, status: "OPEN",
  };
}

function seed(): State {
  const now = new Date().toISOString();
  const s: State = {
    version: 1, sessionUserId: null, users: [], restaurants: [], members: [], hours: [], photos: [], menu: [],
    spots: [], bookings: [], reviews: [], feedback: [], events: [], favorites: [],
  };
  // Passwort der Demo-Konten: "thirsty123" (SHA-256 von "thirsty:thirsty123")
  const demoHash = "2ef3e82c4a588abd72284a0e846521dbab5b4e3cb4cf78d59f8819965fea5f12";
  s.users.push(
    { id: "demo-owner", email: "wirt@thirsty.test", name: "Maria Rossi", role: "OWNER", passwordHash: demoHash, createdAt: now },
    { id: "demo-guest", email: "gast@thirsty.test", name: "Jonas Gast", role: "GUEST", passwordHash: demoHash, phone: "0151 0000000", createdAt: now },
  );
  DEMO_RESTAURANTS.forEach(({ menu, ...r }, i) => {
    const id = `demo-${r.slug}`;
    s.restaurants.push({ ...r, id, status: "ACTIVE", demo: true, createdAt: now });
    s.members.push({ id: uid(), userId: "demo-owner", restaurantId: id, role: "OWNER" });
    for (const weekday of [1, 2, 3, 4, 5, 6]) s.hours.push({ restaurantId: id, weekday, opens: "17:00", closes: "23:00" });
    menu.forEach(([category, name, priceCents, tags], position) =>
      s.menu.push({ id: uid(), restaurantId: id, category, name, priceCents, tags, position }));
    s.spots.push(...demoSpots(id, 0, i < 2));
  });
  return s;
}

/** Wer die Vorschau Tage später wieder öffnet, findet weiter Beispielangebote. */
function topUpDemoSpots(s: State): State {
  for (const r of s.restaurants.filter((x) => x.demo)) {
    const upcoming = s.spots.some((sp) => sp.restaurantId === r.id && sp.status === "OPEN" && new Date(sp.endsAt) > new Date());
    if (!upcoming) s.spots.push(...demoSpots(r.id, 1, false));
  }
  return s;
}
