// Piktogramm „wer fährt mit“: Erwachsene (groß) und Kinder (klein) nebeneinander.

import { esc } from "./util.mjs";

const PALETTE = {
  dark: { adult: "#CFFFDC", kid: "#68BA7F" }, // auf dunklem Grund
  light: { adult: "#253D2C", kid: "#2E6F40" }, // auf hellem Grund
};

function figure(x, h, color) {
  // h = Gesamthöhe der Figur; Kopf ~ 30 %, Körper ~ 70 %
  const r = h * 0.15;
  const bodyH = h * 0.62;
  const bodyW = h * 0.42;
  const top = 48 - h;
  return `<circle cx="${(x + bodyW / 2).toFixed(1)}" cy="${(top + r).toFixed(1)}" r="${r.toFixed(1)}" fill="${color}"/>
  <rect x="${x.toFixed(1)}" y="${(48 - bodyH).toFixed(1)}" width="${bodyW.toFixed(1)}" height="${bodyH.toFixed(1)}" rx="${(bodyW / 2).toFixed(1)}" fill="${color}"/>`;
}

export function ridersIcon({ adults = 1, kids = 0 }, { tone = "light", height = 32 } = {}) {
  const c = PALETTE[tone];
  const parts = [];
  let x = 2;
  for (let i = 0; i < adults; i++) {
    parts.push(figure(x, 46, c.adult));
    x += 46 * 0.42 + 6;
  }
  for (let i = 0; i < kids; i++) {
    parts.push(figure(x, 30, c.kid));
    x += 30 * 0.42 + 5;
  }
  const w = Math.ceil(x - 3);
  return `<svg class="riders-icon" viewBox="0 0 ${w} 48" width="${Math.round((w / 48) * height)}" height="${height}" aria-hidden="true" focusable="false">${parts.join("")}</svg>`;
}

/** Icon mit Beschriftung (z. B. „1 Erwachsener + 1 Kind“). */
export function ridersBadge(riders, opts) {
  return `<span class="riders">${ridersIcon(riders, opts)}<span>${esc(riders.label)}</span></span>`;
}
