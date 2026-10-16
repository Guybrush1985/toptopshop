export const WEEKDAYS = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

export const FEATURES: Record<string, string> = {
  terrasse: "Terrasse",
  barrierefrei: "Barrierefrei",
  hunde: "Hunde erlaubt",
  vegan: "Vegan-freundlich",
  wlan: "WLAN",
  kinder: "Kinderfreundlich",
};

export const BOOKING_STATUS: Record<string, string> = {
  BOOKED: "Gebucht",
  CHECKED_IN: "Eingecheckt",
  CANCELLED: "Storniert",
  LATE_CANCELLED: "Spät storniert",
  NO_SHOW: "Nicht erschienen",
};

const TZ = "Europe/Berlin";

export function euro(cents: number) {
  return (cents / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}

export function time(d: Date | string) {
  d = new Date(d);
  return d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", timeZone: TZ });
}

export function day(d: Date | string) {
  d = new Date(d);
  const today = new Date();
  const fmt = (x: Date) => x.toLocaleDateString("de-DE", { timeZone: TZ });
  const tomorrow = new Date(today.getTime() + 864e5);
  if (fmt(d) === fmt(today)) return "Heute";
  if (fmt(d) === fmt(tomorrow)) return "Morgen";
  return d.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", timeZone: TZ });
}

export function dateKey(d: Date | string) {
  d = new Date(d);
  return d.toLocaleDateString("sv-SE", { timeZone: TZ });
}

export function priceLevel(n: number) {
  return "€".repeat(Math.max(1, Math.min(4, n)));
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

/** Wandelt "2026-10-15" + "17:30" (Berliner Zeit) in ein Date um. */
export function berlinDate(dateStr: string, timeStr: string) {
  const guess = new Date(`${dateStr}T${timeStr}:00Z`);
  const berlin = new Date(guess.toLocaleString("en-US", { timeZone: TZ }));
  const utc = new Date(guess.toLocaleString("en-US", { timeZone: "UTC" }));
  return new Date(guess.getTime() - (berlin.getTime() - utc.getTime()));
}

