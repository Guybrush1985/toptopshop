// SVG-Grafiken: Produkt-Symbolbilder und redaktionelle Infografiken.
// Farben stammen ausschließlich aus der Markenpalette.

import { esc, scoreDe } from "./util.mjs";

export const C = {
  forest: "#253D2C",
  green: "#2E6F40",
  leaf: "#68BA7F",
  mint: "#CFFFDC",
  paper: "#F6FBF7",
  ink: "#17251B",
  muted: "#55685B",
  track: "#E3F1E7",
  white: "#FFFFFF",
};

const FONT = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

// ---------------------------------------------------------------------------
// Produkt-Symbolbilder (bis echte Produktfotos hinterlegt sind)
// ---------------------------------------------------------------------------

const TONES = {
  forest: { body: C.forest, cap: C.leaf, label: C.mint, text: C.forest },
  green: { body: C.green, cap: C.forest, label: C.white, text: C.green },
  mint: { body: C.white, cap: C.green, label: C.mint, text: C.forest },
};

function shapes(kind, t) {
  switch (kind) {
    case "foam": // Pumpflasche
      return `
        <rect x="146" y="40" width="28" height="34" rx="4" fill="${t.cap}"/>
        <rect x="126" y="58" width="64" height="14" rx="5" fill="${t.cap}"/>
        <rect x="168" y="44" width="42" height="10" rx="5" fill="${t.cap}"/>
        <rect x="110" y="74" width="100" height="232" rx="30" fill="${t.body}"/>`;
    case "drops": // Pipettenflasche
      return `
        <rect x="140" y="70" width="40" height="66" rx="18" fill="${t.cap}"/>
        <rect x="132" y="128" width="56" height="26" rx="6" fill="${t.cap}"/>
        <rect x="104" y="150" width="112" height="156" rx="24" fill="${t.body}"/>`;
    case "oilspray": // Sprühflasche
      return `
        <rect x="140" y="46" width="44" height="24" rx="6" fill="${t.cap}"/>
        <rect x="180" y="52" width="24" height="8" rx="4" fill="${t.cap}"/>
        <rect x="134" y="68" width="56" height="26" rx="8" fill="${t.cap}"/>
        <path d="M118 112 Q118 94 140 94 H184 Q206 94 206 112 V292 Q206 306 192 306 H132 Q118 306 118 292 Z" fill="${t.body}"/>`;
    case "lotion": // Tube
      return `
        <path d="M104 64 H216 L206 270 Q204 286 188 286 H132 Q116 286 114 270 Z" fill="${t.body}"/>
        <rect x="104" y="56" width="112" height="14" rx="3" fill="${t.body}" opacity=".85"/>
        <rect x="132" y="286" width="56" height="26" rx="6" fill="${t.cap}"/>`;
    case "device": // Standgerät, z. B. Luftreiniger
      return `
        <rect x="100" y="56" width="120" height="250" rx="22" fill="${t.body}"/>
        <rect x="116" y="70" width="88" height="8" rx="4" fill="${t.cap}"/>
        <rect x="116" y="86" width="88" height="8" rx="4" fill="${t.cap}" opacity=".7"/>
        <rect x="116" y="102" width="88" height="8" rx="4" fill="${t.cap}" opacity=".45"/>
        <circle cx="160" cy="150" r="10" fill="${t.cap}"/>
        <rect x="112" y="292" width="96" height="10" rx="5" fill="${t.cap}" opacity=".6"/>`;
    case "station": // Koffer/Akkuspeicher mit Griff
      return `
        <path d="M118 128 V104 Q118 92 130 92 H190 Q202 92 202 104 V128" fill="none" stroke="${t.cap}" stroke-width="12"/>
        <rect x="66" y="124" width="188" height="182" rx="22" fill="${t.body}"/>
        <circle cx="94" cy="270" r="9" fill="${t.cap}"/><circle cx="226" cy="270" r="9" fill="${t.cap}"/>
        <rect x="84" y="144" width="152" height="10" rx="5" fill="${t.cap}" opacity=".6"/>`;
    case "panel": // Solarmodul
      return `
        <path d="M96 300 L124 250 M224 300 L196 250" stroke="${C.forest}" stroke-width="8" stroke-linecap="round"/>
        <rect x="58" y="62" width="204" height="196" rx="10" fill="${t.body}"/>
        <path d="M58 127 H262 M58 192 H262 M126 62 V258 M194 62 V258" stroke="${t.cap}" stroke-width="3" opacity=".8"/>`;
    case "canister": // Wasserkanister
      return `
        <path d="M96 96 Q96 72 120 72 H200 Q224 72 224 96 V290 Q224 306 208 306 H112 Q96 306 96 290 Z" fill="${t.body}"/>
        <rect x="124" y="84" width="72" height="22" rx="11" fill="${C.paper}" opacity=".9"/>
        <rect x="186" y="48" width="30" height="30" rx="6" fill="${t.cap}"/>`;
    case "mask": // Atemschutzmaske
      return `
        <path d="M70 150 Q160 100 250 150" fill="none" stroke="${t.cap}" stroke-width="8"/>
        <path d="M70 260 Q160 300 250 260" fill="none" stroke="${t.cap}" stroke-width="8"/>
        <path d="M110 130 Q160 96 210 130 L228 236 Q160 300 92 236 Z" fill="${t.body}"/>
        <circle cx="160" cy="262" r="14" fill="${t.cap}"/>`;
    case "radio": // Kurbel- und Solarradio
      return `
        <path d="M196 132 L236 58" stroke="${C.forest}" stroke-width="6" stroke-linecap="round"/>
        <rect x="70" y="130" width="180" height="176" rx="20" fill="${t.body}"/>
        <rect x="90" y="146" width="140" height="18" rx="4" fill="${t.cap}" opacity=".7"/>
        <path d="M250 216 H274 V252" stroke="${t.cap}" stroke-width="10" stroke-linecap="round" fill="none"/>
        <circle cx="274" cy="258" r="9" fill="${t.cap}"/>`;
    case "handheld": // Funkgerät, Handy, Satelliten-Messenger, Schlüssel
      return `
        <rect x="186" y="34" width="14" height="46" rx="7" fill="${C.forest}"/>
        <rect x="112" y="70" width="96" height="236" rx="20" fill="${t.body}"/>
        <rect x="124" y="88" width="72" height="72" rx="8" fill="${t.cap}" opacity=".8"/>
        <circle cx="160" cy="270" r="12" fill="${t.cap}"/>`;
    case "pack": // Beutel, Rucksack, Vorratspackung
      return `
        <rect x="98" y="62" width="124" height="26" rx="6" fill="${t.cap}"/>
        <path d="M100 88 H220 L232 290 Q232 306 216 306 H104 Q88 306 88 290 Z" fill="${t.body}"/>
        <path d="M110 76 H210" stroke="${C.paper}" stroke-width="3" stroke-dasharray="6 6" opacity=".7"/>`;
    case "roll": // Klebeband, Dichtband, Folie
      return `
        <circle cx="160" cy="206" r="104" fill="${t.body}"/>
        <circle cx="160" cy="206" r="104" fill="none" stroke="${t.cap}" stroke-width="6" opacity=".6"/>
        <path d="M250 254 L300 300 L280 314 L232 266 Z" fill="${t.body}" opacity=".75"/>`;
    case "lamp": // Laterne, Stirnlampe
      return `
        <path d="M128 70 Q160 30 192 70" fill="none" stroke="${C.forest}" stroke-width="7"/>
        <rect x="116" y="66" width="88" height="28" rx="8" fill="${t.cap}"/>
        <rect x="108" y="94" width="104" height="186" rx="18" fill="${t.body}"/>
        <circle cx="160" cy="132" r="22" fill="${C.mint}"/>
        <rect x="100" y="278" width="120" height="28" rx="8" fill="${t.cap}"/>`;
    case "stove": // Gaskocher mit Kartusche
      return `
        <path d="M92 94 H228 M118 94 L134 128 M202 94 L186 128" stroke="${C.forest}" stroke-width="7" stroke-linecap="round"/>
        <rect x="128" y="124" width="64" height="28" rx="6" fill="${t.cap}"/>
        <path d="M108 172 Q108 152 160 150 Q212 152 212 172 V292 Q212 306 198 306 H122 Q108 306 108 292 Z" fill="${t.body}"/>`;
    case "cylinder": // Feuerlöscher
      return `
        <rect x="140" y="40" width="40" height="24" rx="6" fill="${t.cap}"/>
        <path d="M180 52 Q232 58 228 120 L222 214" fill="none" stroke="${C.forest}" stroke-width="7" stroke-linecap="round"/>
        <rect x="116" y="62" width="88" height="244" rx="34" fill="${t.body}"/>`;
    case "gel": // Spenderflasche
    default:
      return `
        <rect x="142" y="44" width="36" height="22" rx="5" fill="${t.cap}"/>
        <rect x="150" y="30" width="20" height="16" rx="4" fill="${t.cap}"/>
        <rect x="114" y="66" width="92" height="240" rx="18" fill="${t.body}"/>`;
  }
}

// Fahrräder: Rückgabe { svg, label: [x, y, w, h] } für das Markenschild.
function wheel(cx, cy, r, t) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${C.forest}" stroke-width="7"/><circle cx="${cx}" cy="${cy}" r="5" fill="${t.cap}"/>`;
}

function bike(kind, t) {
  const frame = t.body === C.white ? C.green : t.body;
  const line = (pts) => `<polyline points="${pts}" fill="none" stroke="${frame}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
  const seat = (x, y) => `<rect x="${x - 18}" y="${y - 6}" width="36" height="10" rx="5" fill="${C.forest}"/>`;
  const bars = (x, y) => `<path d="M${x - 14} ${y} H${x + 14}" stroke="${C.forest}" stroke-width="7" stroke-linecap="round"/>`;
  if (kind === "longtail") {
    return {
      svg: `${wheel(84, 270, 36, t)}${wheel(246, 270, 36, t)}
        ${line("84,270 130,214 214,214 246,270")}${line("214,214 226,160")}${line("130,214 124,176")}
        ${seat(124, 172)}${bars(226, 158)}
        <rect x="44" y="200" width="104" height="10" rx="5" fill="${frame}"/>
        <rect x="58" y="146" width="56" height="54" rx="14" fill="${t.cap}"/>
        <rect x="60" y="214" width="40" height="34" rx="6" fill="${t.body}" opacity=".5"/>`,
      label: [140, 226, 70, 0],
    };
  }
  if (kind === "trike") {
    return {
      svg: `${wheel(72, 284, 26, t)}${wheel(100, 288, 26, t)}${wheel(258, 272, 34, t)}
        <rect x="28" y="172" width="138" height="88" rx="16" fill="${t.body}" stroke="${frame}" stroke-width="${t.body === C.white ? 3 : 0}"/>
        ${line("166,240 258,272")}${line("166,240 222,186")}${line("200,206 180,150")}
        ${seat(222, 182)}${bars(180, 148)}`,
      label: [56, 198, 82, 40],
    };
  }
  // Frontlader (Long John)
  return {
    svg: `${wheel(70, 282, 26, t)}${wheel(258, 272, 34, t)}
      <rect x="36" y="186" width="122" height="74" rx="16" fill="${t.body}" stroke="${frame}" stroke-width="${t.body === C.white ? 3 : 0}"/>
      ${line("70,282 70,262")}${line("158,244 258,272")}${line("158,244 222,190")}${line("192,214 176,154")}
      ${seat(222, 186)}${bars(176, 152)}`,
    label: [56, 204, 82, 40],
  };
}

const BIKES = new Set(["longtail", "box", "trike"]);

/** Gibt ein inline-SVG zurück (dekorativ, aria-hidden). */
export function productVisual(product, uid) {
  if (BIKES.has(product.visual?.kind)) return bikeVisual(product, uid);
  const t = TONES[product.visual?.tone || "forest"];
  const kind = product.visual?.kind || "gel";
  const brand = esc(product.brand).toUpperCase();
  const labelY = { drops: 196, station: 196, radio: 200, stove: 200, panel: 128, roll: 176, canister: 176 }[kind] || 176;
  return `<svg class="pv" viewBox="0 0 320 360" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="g${uid}" cx="50%" cy="40%" r="65%">
      <stop offset="0" stop-color="${C.white}"/>
      <stop offset="1" stop-color="${C.mint}"/>
    </radialGradient>
  </defs>
  <rect width="320" height="360" rx="28" fill="url(#g${uid})"/>
  <circle cx="262" cy="252" r="34" fill="${C.leaf}" opacity=".16"/>
  <ellipse cx="160" cy="318" rx="88" ry="12" fill="${C.forest}" opacity=".12"/>
  ${shapes(kind, t)}
  <rect x="118" y="${labelY}" width="84" height="62" rx="8" fill="${t.label}"/>
  <text x="160" y="${labelY + 27}" text-anchor="middle" font-family="${FONT}" font-size="${Math.min(11, 108 / brand.length).toFixed(1)}" font-weight="700" letter-spacing=".4" fill="${t.text}">${brand}</text>
  <rect x="140" y="${labelY + 38}" width="40" height="3" rx="1.5" fill="${t.text}" opacity=".5"/>
  <rect x="146" y="${labelY + 46}" width="28" height="3" rx="1.5" fill="${t.text}" opacity=".35"/>
</svg>`;
}

function bikeVisual(product, uid) {
  const t = TONES[product.visual?.tone || "forest"];
  const { svg, label } = bike(product.visual.kind, t);
  const brand = esc(product.brand).toUpperCase();
  const [x, y, w, h] = label;
  const plate = h
    ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${t.label}"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" font-family="${FONT}" font-size="${Math.min(11, (w + 10) / brand.length).toFixed(1)}" font-weight="700" letter-spacing=".4" fill="${t.text}">${brand}</text>`
    : `<text x="${x + w / 2}" y="${y}" text-anchor="middle" font-family="${FONT}" font-size="${Math.min(11, (w + 20) / brand.length).toFixed(1)}" font-weight="700" letter-spacing=".4" fill="${C.forest}">${brand}</text>`;
  return `<svg class="pv" viewBox="0 0 320 360" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="g${uid}" cx="50%" cy="40%" r="65%">
      <stop offset="0" stop-color="${C.white}"/>
      <stop offset="1" stop-color="${C.mint}"/>
    </radialGradient>
  </defs>
  <rect width="320" height="360" rx="28" fill="url(#g${uid})"/>
  <circle cx="262" cy="92" r="30" fill="${C.leaf}" opacity=".16"/>
  <ellipse cx="160" cy="318" rx="128" ry="10" fill="${C.forest}" opacity=".12"/>
  ${svg}
  ${plate}
</svg>`;
}

// ---------------------------------------------------------------------------
// Infografik 1: Bewertungen je Kriterium (Small Multiples, ein Farbton)
// ---------------------------------------------------------------------------

export function scoresFigure({ title, criteria, products }) {
  const W = 600;
  const padX = 28;
  const labelW = 200;
  const valueW = 52;
  const trackX = padX + labelW;
  const trackW = W - trackX - padX - valueW;
  const rowH = 34;
  const panelHead = 62;
  const panelGap = 22;
  const titleLines = wrap(title, 40);
  const top = 92 + (titleLines.length - 1) * 28;
  const panelH = panelHead + criteria.length * rowH;
  const H = top + products.length * (panelH + panelGap) + 4;

  let y = top;
  const panels = products
    .map((p) => {
      const rows = criteria
        .map((c, i) => {
          const v = p.ratings[c.key];
          const ry = y + panelHead + i * rowH;
          const w = Math.max(4, (v / 10) * trackW);
          return `
    <text x="${padX}" y="${ry + 15}" font-size="15" fill="${C.muted}">${esc(c.label)}</text>
    <rect x="${trackX}" y="${ry + 4}" width="${trackW}" height="14" rx="4" fill="${C.track}"/>
    <rect x="${trackX}" y="${ry + 4}" width="${w.toFixed(1)}" height="14" rx="4" fill="${C.green}"/>
    <text x="${W - padX}" y="${ry + 16}" text-anchor="end" font-size="15" font-weight="600" fill="${C.ink}">${scoreDe(v)}</text>`;
        })
        .join("");
      const block = `
  <g>
    <rect x="12" y="${y - 6}" width="${W - 24}" height="${panelH + 4}" rx="16" fill="${C.white}"/>
    <text x="${padX}" y="${y + 24}" font-size="13" font-weight="700" letter-spacing="1.4" fill="${C.green}">${String(p.rank).padStart(2, "0")} · ${esc(p.label.toUpperCase())}</text>
    <text x="${padX}" y="${y + 43}" font-size="17" font-weight="700" fill="${C.ink}">${esc(p.name)}</text>
    <text x="${W - padX}" y="${y + 43}" text-anchor="end" font-size="17" font-weight="700" fill="${C.ink}">${scoreDe(p.score)}</text>
    ${rows}
  </g>`;
      y += panelH + panelGap;
      return block;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${FONT}">
  <title>${esc(title)}</title>
  <rect width="${W}" height="${H}" rx="24" fill="${C.paper}"/>
  ${titleLines.map((l, i) => `<text x="${padX}" y="${44 + i * 28}" font-size="22" font-weight="700" fill="${C.ink}">${esc(l)}</text>`).join("")}
  <text x="${padX}" y="${top - 22}" font-size="14" fill="${C.muted}">Redaktionelle Bewertung je Kriterium, Skala 0–10 · toptop.shop</text>
  ${panels}
</svg>`;
}

// ---------------------------------------------------------------------------
// Infografik 2: Schritt-für-Schritt (vertikale Zeitleiste)
// ---------------------------------------------------------------------------

function wrap(text, max) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max) {
      lines.push(line.trim());
      line = w;
    } else {
      line += " " + w;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

export function stepsFigure({ title, subtitle, steps }) {
  const W = 600;
  const padX = 28;
  const textX = 104;
  const top = 100;
  let y = top;
  const items = steps
    .map((s, i) => {
      const lines = wrap(s.text, 50);
      const h = 34 + lines.length * 21 + 26;
      const last = i === steps.length - 1;
      const block = `
  ${last ? "" : `<rect x="${padX + 25}" y="${y + 52}" width="2" height="${h - 44}" fill="${C.leaf}" opacity=".5"/>`}
  <circle cx="${padX + 26}" cy="${y + 26}" r="24" fill="${C.forest}"/>
  <text x="${padX + 26}" y="${y + 32}" text-anchor="middle" font-size="17" font-weight="700" fill="${C.mint}">${i + 1}</text>
  <text x="${textX}" y="${y + 22}" font-size="18" font-weight="700" fill="${C.ink}">${esc(s.title)}</text>
  ${lines
    .map((l, j) => `<text x="${textX}" y="${y + 48 + j * 21}" font-size="15" fill="${C.muted}">${esc(l)}</text>`)
    .join("\n  ")}`;
      y += h;
      return block;
    })
    .join("");
  const H = y + 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${FONT}">
  <title>${esc(title)}</title>
  <rect width="${W}" height="${H}" rx="24" fill="${C.mint}"/>
  <text x="${padX}" y="48" font-size="22" font-weight="700" fill="${C.forest}">${esc(title)}</text>
  <text x="${padX}" y="74" font-size="14" fill="${C.green}">${esc(subtitle || "toptop.shop")}</text>
  ${items}
</svg>`;
}

/** Größe aus dem viewBox-Attribut lesen (für width/height am <img>). */
export function svgSize(svg) {
  const m = svg.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  return { width: Math.round(+m[1]), height: Math.round(+m[2]) };
}
