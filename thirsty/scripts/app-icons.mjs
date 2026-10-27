// Erzeugt App-Icons und Splash-Screens für iOS und Android aus app-assets/icon.svg und app-assets/splash.svg.
// Braucht Playwright (Chromium) und Python mit Pillow (nur zum Entfernen des Alphakanals, den Apple bei Icons ablehnt).
// Aufruf: npm run app:icons
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  const globalRoot = execFileSync("npm", ["root", "-g"]).toString().trim();
  ({ chromium } = require(path.join(globalRoot, "playwright")));
}

const font = (await readFile(path.join(root, "node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2"))).toString("base64");
const css = `@font-face{font-family:Anton;src:url(data:font/woff2;base64,${font}) format("woff2")}html,body{margin:0;background:transparent}`;
const svg = async (name) => (await readFile(path.join(root, "app-assets", name), "utf8"));

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const page = await browser.newPage();

/** Rendert ein SVG in w×h Pixel. opaque=true entfernt den Alphakanal. */
async function render(svgText, w, h, file, { opaque = false, inner, bg = "transparent" } = {}) {
  await page.setViewportSize({ width: w, height: h });
  const box = inner ?? { w, h };
  await page.setContent(
    `<style>${css}body{background:${bg}}</style><div style="width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center">` +
      `<div style="width:${box.w}px;height:${box.h}px">${svgText.replace("<svg ", '<svg width="100%" height="100%" ')}</div></div>`,
  );
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(root, file);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, await page.screenshot({ omitBackground: !opaque, type: "png" }));
  if (opaque) execFileSync("python3", ["-c", "import sys;from PIL import Image;Image.open(sys.argv[1]).convert('RGB').save(sys.argv[1])", out]);
}

const INK = "#0b0b0d";
const icon = await svg("icon.svg");
const foreground = await svg("icon-foreground.svg");
const splash = await svg("splash.svg");

// iOS: ein 1024er-Icon ohne Transparenz, Splash 2732×2732
// iOS rundet die Ecken selbst ab, darum hier ein volles Quadrat.
await render(icon.replace('rx="224"', 'rx="0"'), 1024, 1024, "ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png", { opaque: true });
for (const f of ["splash-2732x2732.png", "splash-2732x2732-1.png", "splash-2732x2732-2.png"]) {
  await render(splash, 2732, 2732, `ios/App/App/Assets.xcassets/Splash.imageset/${f}`, { opaque: true, bg: INK, inner: { w: 900, h: 900 } });
}

// Android: Launcher-Icons (klassisch, rund, adaptiver Vordergrund) und Splash
const densities = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
for (const [d, k] of Object.entries(densities)) {
  const s = Math.round(48 * k);
  await render(icon, s, s, `android/app/src/main/res/mipmap-${d}/ic_launcher.png`);
  await render(icon.replace('rx="224"', 'rx="512"'), s, s, `android/app/src/main/res/mipmap-${d}/ic_launcher_round.png`);
  await render(foreground, Math.round(108 * k), Math.round(108 * k), `android/app/src/main/res/mipmap-${d}/ic_launcher_foreground.png`);
}
const splashSizes = { mdpi: [320, 480], hdpi: [480, 800], xhdpi: [720, 1280], xxhdpi: [960, 1600], xxxhdpi: [1280, 1920] };
for (const [d, [w, h]] of Object.entries(splashSizes)) {
  const logo = Math.round(Math.min(w, h) * 0.55);
  await render(splash, w, h, `android/app/src/main/res/drawable-port-${d}/splash.png`, { opaque: true, bg: INK, inner: { w: logo, h: logo } });
  await render(splash, h, w, `android/app/src/main/res/drawable-land-${d}/splash.png`, { opaque: true, bg: INK, inner: { w: logo, h: logo } });
}
await render(splash, 480, 320, "android/app/src/main/res/drawable/splash.png", { opaque: true, bg: INK, inner: { w: 176, h: 176 } });

await browser.close();
console.log("App-Icons und Splash-Screens erzeugt.");
