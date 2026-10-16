import type { EventKind, ReliabilityEvent, State } from "./store";

/** Punkte laut Konzept (Abschnitt „Bewertungen und No-Show-Malus“). */
export const POINTS: Record<EventKind, number> = {
  ATTENDED: 3,
  LATE_CANCEL: -10,
  LATE_ARRIVAL: -5,
  THUMBS_DOWN: -3,
  NO_SHOW: -25,
};

export const START_SCORE = 80;
const DECAY_DAYS = 90;
const BLOCK_DAYS = 30;
const DAY = 24 * 60 * 60 * 1000;

export type Tier = "RELIABLE" | "PROBATION" | "DEPOSIT" | "BLOCKED";

export const TIER_LABEL: Record<Tier, string> = {
  RELIABLE: "Zuverlässig",
  PROBATION: "Auf Bewährung",
  DEPOSIT: "Nur mit Kaution",
  BLOCKED: "Gesperrt",
};

/**
 * Berechnet den Zuverlässigkeitswert aus den Ereignissen.
 * Negative Ereignisse älter als 90 Tage verfallen. Nach einer Sperre (unter 40)
 * startet der Gast nach 30 Tagen wieder bei 50.
 */
export function computeScore(events: Pick<ReliabilityEvent, "points" | "createdAt">[], now = new Date()) {
  const sorted = [...events].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  let score = START_SCORE;
  let blockedUntil: Date | null = null;
  for (const e of sorted) {
    const at = new Date(e.createdAt);
    if (blockedUntil && at >= blockedUntil) {
      score = Math.max(score, 50);
      blockedUntil = null;
    }
    if (e.points < 0 && now.getTime() - at.getTime() > DECAY_DAYS * DAY) continue;
    score = Math.min(100, Math.max(0, score + e.points));
    if (score < 40) blockedUntil = new Date(at.getTime() + BLOCK_DAYS * DAY);
  }
  if (blockedUntil && now >= blockedUntil) {
    score = Math.max(score, 50);
    blockedUntil = null;
  }
  return { score, blockedUntil };
}

export function tierFor(score: number, blockedUntil: Date | null): Tier {
  if (blockedUntil || score < 40) return "BLOCKED";
  if (score < 60) return "DEPOSIT";
  if (score < 80) return "PROBATION";
  return "RELIABLE";
}

export function reliabilityOf(s: State, userId: string) {
  const { score, blockedUntil } = computeScore(s.events.filter((e) => e.userId === userId));
  return { score, blockedUntil, tier: tierFor(score, blockedUntil) };
}
