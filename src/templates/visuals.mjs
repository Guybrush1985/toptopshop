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

// Gegenstände (Sport, Büro, Gaming): Rückgabe als SVG-Fragment im 320×360-Raster.
function object(kind, t) {
  const F = C.forest;
  const b = t.body === C.white ? C.green : t.body;
  const a = t.cap;
  const k = a === b ? C.leaf : a; // Akzent mit Kontrast zum Körper (Ton mint: cap = body)
  const r = (x, y, w, h, rx = 6, fill = b, extra = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${extra}/>`;
  const l = (x1, y1, x2, y2, w = 7, col = F) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  const c = (cx, cy, rr, fill = a, extra = "") => `<circle cx="${cx}" cy="${cy}" r="${rr}" fill="${fill}"${extra}/>`;
  const grid = (x, y, w, h, n, col = C.white) => {
    let g = "";
    for (let i = 1; i < n; i++) g += l(x + (w * i) / n, y, x + (w * i) / n, y + h, 2, col) + l(x, y + (h * i) / n, x + w, y + (h * i) / n, 2, col);
    return g;
  };
  switch (kind) {
    case "net": return `${r(70, 60, 180, 190, 10, b)}${grid(78, 68, 164, 174, 6)}${l(70, 250, 40, 296)}${l(250, 250, 280, 296)}${l(160, 250, 160, 296)}${c(222, 120, 12, C.leaf)}`;
    case "wall": return `${r(56, 52, 208, 240, 8, b)}${[0, 1, 2, 3, 4].map((i) => l(56, 92 + i * 40, 264, 92 + i * 40, 3, a)).join("")}${l(56, 132, 264, 132, 4, C.white)}${c(200, 200, 22, "none", ` stroke="${C.white}" stroke-width="5"`)}`;
    case "trainer": return `${r(60, 268, 120, 26, 10, b)}<path d="M120 268 Q170 150 236 118" stroke="${F}" stroke-width="4" fill="none" stroke-dasharray="6 6"/>${c(240, 112, 22, C.leaf)}<path d="M222 104 Q240 116 258 104" stroke="${C.white}" stroke-width="3" fill="none"/>`;
    case "machine": return `${r(84, 150, 152, 120, 18, b)}${r(136, 70, 48, 90, 10, a)}${c(160, 92, 14, C.leaf)}${c(108, 284, 16, F)}${c(212, 284, 16, F)}${c(228, 120, 12, C.leaf)}${c(256, 96, 10, C.leaf)}`;
    case "balls": return `${c(112, 230, 46, C.leaf)}${c(206, 230, 46, b)}${c(160, 150, 46, a)}<path d="M76 210 Q112 236 148 210" stroke="${C.white}" stroke-width="4" fill="none"/><path d="M124 130 Q160 156 196 130" stroke="${C.white}" stroke-width="4" fill="none"/>`;
    case "desk": return `${r(46, 130, 228, 20, 6, b)}${r(70, 150, 18, 120, 4, F)}${r(232, 150, 18, 120, 4, F)}${r(48, 266, 62, 12, 5, F)}${r(210, 266, 62, 12, 5, F)}${r(126, 76, 76, 50, 6, a)}${r(156, 126, 16, 6, 2, F)}`;
    case "monitor": return `${r(36, 70, 248, 150, 12, F)}${r(46, 80, 228, 130, 6, b)}${r(150, 220, 20, 46, 4, F)}${r(110, 262, 100, 14, 7, F)}<path d="M60 190 L110 140 L150 175 L200 120 L260 190 Z" fill="${C.leaf}" opacity=".5"/>`;
    case "dock": return `${r(70, 150, 180, 92, 18, b)}${[0, 1, 2, 3].map((i) => r(92 + i * 38, 220, 24, 10, 3, C.white)).join("")}${c(220, 176, 8, C.leaf)}${l(160, 150, 160, 100, 6)}${r(140, 82, 40, 22, 6, F)}`;
    case "keyboard": { let k = ""; for (let y = 0; y < 4; y++) for (let x = 0; x < 9; x++) k += r(58 + x * 23, 150 + y * 23, 18, 18, 4, C.white, ' opacity=".9"'); return `${r(44, 136, 232, 112, 14, b)}${k}${r(104, 222, 112, 14, 4, a)}`; }
    case "mouse": return `<path d="M160 96 C222 96 230 160 230 206 C230 262 198 290 160 290 C122 290 90 262 90 206 C90 160 98 96 160 96 Z" fill="${b}"/>${l(160, 100, 160, 168, 4, C.white)}${r(152, 122, 16, 30, 8, a)}`;
    case "lamp": return `${r(60, 96, 200, 22, 10, b)}<path d="M80 118 L60 230 H260 L240 118 Z" fill="${C.leaf}" opacity=".25"/>${r(140, 118, 40, 10, 4, F)}${r(150, 128, 20, 140, 6, F)}${r(110, 266, 100, 16, 8, F)}`;
    case "webcam": return `${r(84, 110, 152, 90, 40, b)}${c(160, 155, 32, F)}${c(160, 155, 18, a)}${c(214, 132, 6, C.leaf)}${r(130, 200, 60, 12, 4, F)}${r(110, 210, 100, 70, 8, F, ' opacity=".25"')}`;
    case "screen": return `${r(78, 44, 164, 20, 10, F)}${r(86, 64, 148, 200, 4, C.leaf)}${l(160, 264, 160, 296, 6)}${r(110, 290, 100, 12, 6, F)}`;
    case "mic": return `${l(70, 290, 70, 170, 8)}${l(70, 170, 150, 110, 8)}${r(146, 64, 52, 110, 26, b)}${grid(154, 72, 36, 70, 4)}${r(40, 286, 70, 12, 6, F)}`;
    case "mug": return `${r(96, 120, 110, 140, 16, b)}<path d="M206 150 h20 a26 26 0 0 1 0 52 h-20" stroke="${b}" stroke-width="14" fill="none"/>${r(72, 260, 176, 16, 8, a)}<path d="M130 100 q10 -20 0 -40 M160 100 q10 -20 0 -40" stroke="${C.leaf}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    case "turf": { let g = ""; for (let i = 0; i < 26; i++) g += l(52 + i * 8.6, 238, 48 + i * 8.6 + (i % 3) * 3, 200 + (i % 4) * 8, 4, i % 2 ? C.leaf : C.green); return `${r(40, 236, 240, 50, 6, F)}${g}${r(40, 280, 240, 10, 4, a)}`; }
    case "tiles": { let g = ""; for (let y = 0; y < 3; y++) for (let x = 0; x < 4; x++) g += r(48 + x * 58, 120 + y * 58, 52, 52, 4, (x + y) % 2 ? b : C.leaf); return `${g}${l(48, 207, 278, 207, 4, C.white)}${l(163, 120, 163, 294, 4, C.white)}`; }
    case "cage": return `${r(30, 120, 260, 160, 8, "none", ` stroke="${F}" stroke-width="7"`)}${grid(30, 120, 260, 160, 8, C.leaf)}${r(30, 236, 260, 44, 4, b)}${r(130, 190, 60, 46, 4, "none", ` stroke="${C.white}" stroke-width="5"`)}`;
    case "hoop": return `${r(146, 110, 16, 190, 4, F)}${r(84, 60, 140, 92, 8, C.white, ` stroke="${b}" stroke-width="6" opacity=".95"`)}${r(130, 96, 48, 34, 3, "none", ` stroke="${b}" stroke-width="4"`)}<path d="M128 152 h52 l-8 40 h-36 Z" fill="none" stroke="${F}" stroke-width="3"/>${l(122, 152, 186, 152, 6, a)}${r(110, 294, 88, 14, 6, F)}`;
    case "goal": return `<path d="M40 280 V100 H280 V280" fill="none" stroke="${b}" stroke-width="12" stroke-linejoin="round"/>${grid(46, 106, 228, 174, 9, C.leaf)}${c(160, 286, 14, C.white, ` stroke="${F}" stroke-width="3"`)}`;
    case "fence": return `${[40, 120, 200, 280].map((x) => l(x, 70, x, 296, 8)).join("")}${r(40, 70, 240, 200, 2, "none", ` stroke="${b}" stroke-width="4"`)}${grid(40, 70, 240, 200, 10, b)}`;
    case "flood": return `${l(160, 130, 160, 300, 10)}${r(78, 56, 164, 80, 10, b)}${[0, 1, 2].map((i) => r(92 + i * 50, 70, 38, 52, 6, C.mint)).join("")}<path d="M80 136 L30 230 H290 L240 136 Z" fill="${C.leaf}" opacity=".18"/>`;
    case "pingpong": return `<path d="M60 150 H260 L290 210 H30 Z" fill="${b}"/>${l(160, 150, 160, 210, 3, C.white)}${r(150, 128, 20, 32, 2, a)}${l(60, 210, 60, 290)}${l(260, 210, 260, 290)}${l(100, 210, 100, 290)}${l(220, 210, 220, 290)}`;
    case "shuffle": return `${r(20, 160, 280, 36, 8, b)}${r(30, 168, 260, 20, 4, a, ' opacity=".6"')}${l(50, 196, 50, 292)}${l(270, 196, 270, 292)}${l(160, 196, 160, 292)}${c(250, 178, 7, C.white)}${c(232, 178, 7, F)}`;
    case "paddle": return `${r(70, 70, 120, 150, 54, b)}${r(116, 210, 28, 80, 8, F)}${c(220, 230, 22, C.leaf)}${[0, 1, 2].map((y) => [0, 1, 2].map((x) => c(108 + x * 22, 116 + y * 30, 5, C.white)).join("")).join("")}`;
    case "beanbag": return `<path d="M70 290 C40 290 40 200 80 160 C110 130 140 90 190 100 C250 112 280 200 270 260 C266 286 250 290 230 290 Z" fill="${b}"/><path d="M110 210 C150 190 200 196 236 222" stroke="${a}" stroke-width="6" fill="none"/>`;
    case "chair": return `${r(108, 46, 104, 150, 30, b)}${r(132, 60, 56, 40, 12, a)}${r(96, 188, 128, 30, 12, b)}${r(84, 160, 16, 48, 6, F)}${r(220, 160, 16, 48, 6, F)}${r(152, 218, 16, 52, 4, F)}${l(100, 290, 220, 290, 8)}${c(100, 294, 8, F)}${c(220, 294, 8, F)}${c(160, 294, 8, F)}`;
    case "arcade": return `<path d="M96 40 H224 V120 L238 170 V300 H82 V170 L96 120 Z" fill="${b}"/>${r(108, 80, 104, 70, 6, F)}${r(116, 88, 88, 54, 4, C.leaf, ' opacity=".7"')}${r(96, 170, 128, 26, 4, a)}${c(130, 183, 6, C.white)}${c(176, 183, 6, C.white)}${c(194, 183, 6, C.white)}${r(108, 50, 104, 18, 4, C.mint)}`;
    case "pinball": return `${r(60, 66, 200, 46, 6, b)}<path d="M64 120 H256 L276 200 H44 Z" fill="${a}"/>${c(130, 158, 10, C.white)}${c(190, 168, 10, C.white)}${l(70, 200, 70, 300)}${l(250, 200, 250, 300)}${l(100, 200, 100, 296)}${l(220, 200, 220, 296)}`;
    case "gametable": return `${r(36, 140, 248, 70, 10, b)}${r(50, 152, 220, 46, 6, a)}${l(160, 152, 160, 198, 3, C.white)}${c(160, 175, 12, "none", ` stroke="${C.white}" stroke-width="3"`)}${l(60, 210, 60, 296)}${l(260, 210, 260, 296)}${l(100, 210, 100, 290)}${l(220, 210, 220, 290)}`;
    case "dart": return `${c(160, 170, 110, F)}${c(160, 170, 92, b)}${c(160, 170, 64, a)}${c(160, 170, 36, b)}${c(160, 170, 10, C.leaf)}${l(160, 60, 160, 280, 2, C.white)}${l(50, 170, 270, 170, 2, C.white)}`;
    case "wheel": return `${c(160, 170, 100, "none", ` stroke="${b}" stroke-width="22"`)}${r(80, 154, 160, 34, 12, b)}${c(160, 170, 28, a)}${r(110, 286, 100, 14, 6, F)}${l(160, 198, 160, 286, 10)}`;
    case "vr": return `${r(50, 120, 220, 110, 40, b)}${r(70, 140, 80, 66, 26, F)}${r(170, 140, 80, 66, 26, F)}<path d="M50 160 Q20 160 24 200 M270 160 Q300 160 296 200" stroke="${a}" stroke-width="10" fill="none"/>`;
    case "projector": return `${r(56, 160, 208, 96, 18, b)}${c(110, 208, 32, F)}${c(110, 208, 18, a)}${r(170, 184, 70, 8, 4, C.white)}${r(170, 204, 50, 8, 4, C.white)}<path d="M80 176 L20 70 H140 Z" fill="${C.leaf}" opacity=".22"/>${r(76, 256, 20, 14, 4, F)}${r(224, 256, 20, 14, 4, F)}`;
    case "neon": return `<path d="M70 230 C70 120 110 90 140 140 C170 190 190 80 250 120" stroke="${C.leaf}" stroke-width="18" fill="none" stroke-linecap="round" opacity=".35"/><path d="M70 230 C70 120 110 90 140 140 C170 190 190 80 250 120" stroke="${b}" stroke-width="8" fill="none" stroke-linecap="round"/>${r(40, 260, 240, 18, 9, a)}`;
    case "panel": { const hex = (cx, cy, f) => `<path d="M${cx - 36} ${cy} L${cx - 18} ${cy - 31} H${cx + 18} L${cx + 36} ${cy} L${cx + 18} ${cy + 31} H${cx - 18} Z" fill="${f}"/>`; return `${hex(110, 120, b)}${hex(166, 152, a)}${hex(222, 120, b)}${hex(110, 184, C.leaf)}${hex(222, 184, b)}${hex(166, 216, b)}${hex(166, 88, C.leaf)}`; }
    case "console": return `<path d="M70 150 C40 150 30 230 50 270 C66 296 96 280 114 248 H206 C224 280 254 296 270 270 C290 230 280 150 250 150 Z" fill="${b}"/>${l(96, 196, 96, 228, 9, C.white)}${l(80, 212, 112, 212, 9, C.white)}${c(222, 200, 9, a)}${c(244, 220, 9, C.leaf)}${c(200, 220, 9, C.leaf)}${c(222, 240, 9, a)}`;
    case "fridge": return `${r(86, 50, 148, 248, 14, b)}${r(100, 66, 120, 216, 8, C.mint, ' opacity=".55"')}${[0, 1, 2].map((i) => l(104, 120 + i * 56, 216, 120 + i * 56, 4, F)).join("")}${[0, 1, 2].map((i) => r(112 + i * 34, 86 + 0, 18, 32, 4, a)).join("")}${r(206, 140, 8, 60, 4, F)}`;
    case "triangle": return `<path d="M60 290 L160 70 L260 290" fill="none" stroke="${b}" stroke-width="14" stroke-linejoin="round"/>${[0, 1, 2, 3, 4].map((i) => l(84 + i * 10, 250 - i * 40, 236 - i * 10, 250 - i * 40, 6, a)).join("")}${l(40, 296, 280, 296, 6)}`;
    case "slide": return `${l(70, 120, 70, 296, 10)}${l(110, 120, 110, 296, 10)}${[0, 1, 2, 3].map((i) => l(70, 150 + i * 38, 110, 150 + i * 38, 6, a)).join("")}<path d="M104 120 C170 130 200 260 286 284" stroke="${b}" stroke-width="22" fill="none" stroke-linecap="round"/>${r(56, 112, 70, 14, 6, F)}`;
    case "climbwall": { const holds = [[110, 100], [190, 120], [140, 160], [210, 190], [100, 210], [170, 240], [130, 270], [220, 260]]; return `${r(60, 50, 200, 250, 12, b)}${holds.map(([x, y], i) => c(x, y, 11, i % 2 ? C.leaf : k)).join("")}${l(40, 300, 280, 300, 6)}`; }
    case "ladder": return `${l(90, 50, 90, 300, 12)}${l(230, 50, 230, 300, 12)}${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => l(90, 70 + i * 30, 230, 70 + i * 30, 7, i % 3 ? b : a)).join("")}`;
    case "swing": return `${l(60, 40, 260, 40, 10)}${l(110, 40, 110, 220, 4, a)}${l(210, 40, 210, 220, 4, a)}<path d="M96 220 Q160 290 224 220 Z" fill="${b}"/>${c(160, 236, 10, C.leaf)}`;
    case "tent": return `<path d="M160 60 L40 290 H280 Z" fill="${b}"/><path d="M160 150 L118 290 H202 Z" fill="${k}"/>${l(160, 60, 160, 40, 6)}<path d="M160 40 l26 10 l-26 10 Z" fill="${C.leaf}"/>`;
    case "mat": { let g = ""; for (let i = 0; i < 4; i++) g += r(40 + i * 62, 210, 56, 56, 6, i % 2 ? b : k); return `${g}${r(40, 266, 242, 14, 4, F)}${c(100, 180, 14, C.leaf)}`; }
    case "tower": return `${l(80, 120, 80, 296, 10)}${l(170, 120, 170, 296, 10)}<path d="M66 124 L125 60 L184 124 Z" fill="${a}"/>${r(76, 196, 98, 14, 4, b)}<path d="M170 200 C220 210 240 270 290 288" stroke="${b}" stroke-width="18" fill="none" stroke-linecap="round"/>${l(30, 140, 80, 140, 8)}${l(42, 140, 42, 250, 3, a)}${r(30, 250, 26, 8, 3, C.leaf)}`;
    case "sandbox": return `<path d="M40 220 L80 180 H240 L280 220 Z" fill="${C.leaf}" opacity=".5"/>${r(36, 216, 248, 60, 8, b)}${r(36, 216, 248, 12, 4, k)}${c(120, 200, 14, a)}${l(200, 150, 220, 204, 6)}${r(190, 140, 24, 16, 4, C.leaf)}`;
    case "zipline": return `${l(40, 80, 40, 296, 10)}${l(280, 150, 280, 296, 10)}${l(40, 90, 280, 160, 4)}${l(150, 122, 150, 200, 4, a)}${r(118, 196, 64, 16, 8, b)}${c(150, 124, 9, C.leaf)}`;
    case "bouncy": return `${r(40, 200, 240, 90, 20, b)}${r(52, 110, 40, 110, 20, k)}${r(228, 110, 40, 110, 20, k)}${r(140, 90, 40, 120, 20, C.leaf)}${r(80, 220, 160, 50, 14, k, ' opacity=".6"')}`;
    case "waterslide": return `${r(40, 120, 90, 170, 24, k)}<path d="M120 130 C200 140 230 250 290 270 V296 H120 Z" fill="${b}"/>${[0, 1, 2].map((i) => `<path d="M${150 + i * 40} ${200 + i * 20} q10 -12 20 0" stroke="${C.white}" stroke-width="4" fill="none"/>`).join("")}`;
    case "shelf": return `${r(70, 60, 180, 236, 8, b)}${[0, 1, 2].map((i) => r(84, 76 + i * 72, 152, 58, 4, C.white, ' opacity=".9"')).join("")}${[0, 1, 2, 3].map((i) => r(92 + i * 18, 92, 12, 42, 2, i % 2 ? a : C.leaf)).join("")}${r(170, 168, 40, 50, 3, a)}`;
    case "wardrobe": return `${r(70, 46, 180, 250, 10, b)}${l(160, 56, 160, 286, 3, C.white)}${c(146, 170, 6, k)}${c(174, 170, 6, k)}${r(76, 296, 16, 8, 2, F)}${r(228, 296, 16, 8, 2, F)}${r(84, 60, 66, 40, 6, C.leaf, ' opacity=".5"')}`;
    case "kidtable": return `${r(90, 170, 140, 16, 6, b)}${l(104, 186, 104, 270, 8)}${l(216, 186, 216, 270, 8)}${r(30, 200, 50, 10, 4, a)}${r(30, 140, 10, 70, 4, a)}${l(36, 210, 36, 270, 6)}${l(74, 210, 74, 270, 6)}${r(240, 200, 50, 10, 4, a)}${r(280, 140, 10, 70, 4, a)}${l(246, 210, 246, 270, 6)}${l(284, 210, 284, 270, 6)}`;
    case "rug": return `<path d="M40 240 L100 150 H280 L220 240 Z" fill="${b}"/><path d="M80 220 L118 166 H250 L212 220 Z" fill="none" stroke="${C.white}" stroke-width="4" stroke-dasharray="10 8"/>${r(150, 180, 30, 16, 6, k)}${c(156, 198, 5, F)}${c(176, 198, 5, F)}`;
    case "sideboard": return `${r(40, 150, 240, 110, 10, b)}${l(120, 160, 120, 250, 3, C.white)}${l(200, 160, 200, 250, 3, C.white)}${c(108, 205, 5, k)}${c(132, 205, 5, k)}${r(210, 170, 60, 70, 4, C.leaf, ' opacity=".5"')}${l(60, 260, 60, 290)}${l(260, 260, 260, 290)}${r(70, 120, 40, 30, 4, a)}`;
    case "cloth": return `${l(90, 40, 230, 40, 8)}${c(160, 52, 8, a)}<path d="M160 58 C118 112 72 186 82 252 Q160 304 238 252 C248 186 202 112 160 58 Z" fill="${b}"/><path d="M114 236 C118 188 202 188 206 236 Q160 258 114 236 Z" fill="${C.mint}" opacity=".85"/><path d="M160 70 C140 120 124 160 118 200 M160 70 C180 120 196 160 202 200" stroke="${C.white}" stroke-width="3" fill="none" opacity=".6"/>${c(160, 286, 6, C.leaf)}`; // Schaukeltuch/Hängehöhle an einem Deckenpunkt
    case "snowblower": return `${l(214, 214, 276, 84, 9)}${l(262, 84, 292, 84, 9)}${r(150, 196, 84, 70, 14, a)}<path d="M40 288 V206 Q40 184 62 184 H160 V288 Z" fill="${b}"/>${r(50, 202, 100, 76, 8, F)}${[0, 1, 2, 3].map((i) => l(62 + i * 24, 270, 82 + i * 24, 210, 5, C.white)).join("")}<path d="M96 186 V126 Q96 104 118 104 H146" stroke="${b}" stroke-width="20" fill="none" stroke-linecap="round"/>${c(172, 92, 7, C.leaf)}${c(194, 80, 5, C.leaf)}${c(190, 104, 5, C.leaf)}${c(212, 92, 4, C.leaf)}${c(206, 286, 18, F)}${c(206, 286, 7, C.mint)}${r(30, 288, 140, 8, 4, C.leaf)}`; // Schneefräse/Akku-Schneeschieber
    default: return `${r(80, 90, 160, 200, 18, b)}`;
  }
}

const OBJECTS = new Set(["net", "wall", "trainer", "machine", "balls", "desk", "monitor", "dock", "keyboard", "mouse", "lamp", "webcam", "screen", "mic", "mug", "turf", "tiles", "cage", "hoop", "goal", "fence", "flood", "pingpong", "shuffle", "paddle", "beanbag", "chair", "arcade", "pinball", "gametable", "dart", "wheel", "vr", "projector", "neon", "panel", "console", "fridge", "triangle", "slide", "climbwall", "ladder", "swing", "tent", "mat", "tower", "sandbox", "zipline", "bouncy", "waterslide", "shelf", "wardrobe", "kidtable", "rug", "sideboard", "cloth", "snowblower"]);

function objectVisual(product, uid) {
  const t = TONES[product.visual?.tone || "forest"];
  const brand = esc(product.brand).toUpperCase();
  const w = Math.min(200, Math.max(84, brand.length * 8.4 + 28));
  return `<svg class="pv" viewBox="0 0 320 360" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="g${uid}" cx="50%" cy="40%" r="65%">
      <stop offset="0" stop-color="${C.white}"/>
      <stop offset="1" stop-color="${C.mint}"/>
    </radialGradient>
  </defs>
  <rect width="320" height="360" rx="28" fill="url(#g${uid})"/>
  ${object(product.visual.kind, t)}
  <rect x="${160 - w / 2}" y="318" width="${w}" height="26" rx="13" fill="${C.forest}"/>
  <text x="160" y="335.5" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="700" letter-spacing=".4" fill="${C.mint}">${brand}</text>
</svg>`;
}

const BIKES = new Set(["longtail", "box", "trike"]);

/** Gibt ein inline-SVG zurück (dekorativ, aria-hidden). */
export function productVisual(product, uid) {
  if (BIKES.has(product.visual?.kind)) return bikeVisual(product, uid);
  if (OBJECTS.has(product.visual?.kind)) return objectVisual(product, uid);
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
