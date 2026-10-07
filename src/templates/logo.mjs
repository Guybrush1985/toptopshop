// toptop.shop-Logo (Vorlage: src/static/logo.svg).
// Inline eingebunden, damit der Schriftzug die Seitenschrift Inter nutzt.
// onDark: heller Schriftzug für dunkle Flächen (Kopf- und Fußzeile); die Marke bleibt unverändert.

export function logoSvg({ onDark = true, height = 36 } = {}) {
  const word = onDark ? "#FFFFFF" : "#0F172A";
  const suffix = onDark ? "#CBD5E1" : "#64748B";
  const width = Math.round((height * 320) / 96);
  return `<svg viewBox="0 0 320 96" width="${width}" height="${height}" aria-hidden="true" focusable="false">
  <rect x="8" y="16" width="64" height="64" rx="16" fill="#0F172A"/>
  <rect x="24" y="30" width="32" height="8" rx="4" fill="#FFFFFF"/>
  <rect x="36" y="38" width="8" height="26" rx="4" fill="#FFFFFF"/>
  <circle cx="60" cy="26" r="6" fill="#F59E0B"/>
  <text x="92" y="60" font-family="Inter, 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="600" letter-spacing="-0.8" fill="${word}">toptop<tspan font-weight="400" fill="${suffix}">.shop</tspan></text>
</svg>`;
}
