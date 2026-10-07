// Erzeugt die Open-Graph-Vorschaubilder (1200 × 630 PNG) in src/static/og/.
// Nur lokal nötig, wenn Kategorien hinzukommen oder sich Titel ändern:
//   npm i --no-save playwright && node scripts/og-images.mjs
// Die PNGs werden eingecheckt; der normale Build braucht kein Playwright.

import { readdir, mkdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";
import { site } from "../src/site.mjs";
import { logoSvg } from "../src/templates/logo.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src", "static", "og");
const font = async (f) => "data:font/woff2;base64," + (await readFile(join(ROOT, "src", "static", "fonts", f))).toString("base64");
const SERIF = await font("fraunces-latin-wght.woff2");
const SANS = await font("inter-latin-wght.woff2");

function html({ kicker, title, sub }) {
  return `<!doctype html><html><head><style>
@font-face{font-family:F;src:url(${SERIF});font-weight:300 900}
@font-face{font-family:I;src:url(${SANS});font-weight:300 800}
@font-face{font-family:Inter;src:url(${SANS});font-weight:300 800}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#253D2C;color:#fff;font-family:I;padding:72px 80px;position:relative;overflow:hidden}
body::after{content:"";position:absolute;right:-180px;top:-220px;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle,rgba(104,186,127,.45),transparent 65%)}
.logo{margin-left:-10px}.logo svg{display:block}
.k{margin-top:72px;font-weight:700;font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:#68BA7F}
h1{margin-top:18px;font:500 76px/1.02 F;letter-spacing:-.035em;max-width:900px}
p{position:absolute;left:80px;bottom:64px;font-size:26px;color:#CFFFDC}
.dots{position:absolute;right:80px;bottom:64px;display:flex;gap:14px}
.dots span{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;font:500 30px F;background:#CFFFDC;color:#253D2C}
</style></head><body><div class="logo">${logoSvg({ height: 60 })}</div><div class="k">${kicker}</div><h1>${title}</h1><p>${sub}</p>
<div class="dots"><span>1</span><span>2</span><span>3</span></div></body></html>`;
}

const jobs = [{ file: "toptop-shop.png", kicker: "Kuratierte Empfehlungen", title: "Die Abkürzung zu den besten Produkten.", sub: "Drei Empfehlungen pro Kategorie – ausführlich begründet." }];
const dir = join(ROOT, "src", "content", "categories");
for (const f of (await readdir(dir)).filter((x) => x.endsWith(".mjs"))) {
  const cat = (await import(pathToFileURL(join(dir, f)).href)).default;
  jobs.push({ file: `${cat.slug}.png`, kicker: cat.eyebrow, title: cat.h1, sub: `${site.name} · Top 3, Vergleich & Kaufberatung` });
}

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const j of jobs) {
  await page.setContent(html(j), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(OUT, j.file), type: "png" });
  console.log("✓", j.file);
}
await browser.close();
