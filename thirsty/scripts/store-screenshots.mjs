// Store-Screenshots aus dem App-Build in der Vorschau (Demo-Daten).
// 1. NEXT_PUBLIC_SUPABASE_URL= NEXT_PUBLIC_SUPABASE_ANON_KEY= NEXT_PUBLIC_TARGET=app npx next build
// 2. out/ so ausliefern wie Capacitor (Pfade ohne Endung → index.html), z. B. node scripts/store-screenshots.mjs --serve
// Ergebnis: app-assets/store/ios-*.png (1290×2796) und android-*.png (1080×1920)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require(path.join(execFileSync("npm", ["root", "-g"]).toString().trim(), "playwright")));
}

const out = path.join(root, "out");
const types = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".json": "application/json", ".txt": "text/plain" };
const server = http
  .createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const f = path.extname(p) ? path.join(out, p) : path.join(out, "index.html");
    fs.readFile(f, (e, d) => {
      if (e) return res.writeHead(404).end();
      res.writeHead(200, { "content-type": types[path.extname(f)] ?? "application/octet-stream" }).end(d);
    });
  })
  .listen(4610);
const B = "http://localhost:4610";
const dir = path.join(root, "app-assets/store");
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
for (const [prefix, viewport] of [["ios", { width: 430, height: 932 }], ["android", { width: 360, height: 640 }]]) {
  const page = await (await browser.newContext({ viewport, deviceScaleFactor: 3, isMobile: true, hasTouch: true })).newPage();
  const go = async (u) => { await page.goto(B + u); await page.waitForTimeout(900); };
  const shot = (n) => page.screenshot({ path: path.join(dir, `${prefix}-${n}.png`) });
  await go("/");
  await shot("1-start");
  await go("/login/");
  await page.getByRole("button", { name: "Als Gast testen" }).click();
  await page.waitForTimeout(600);
  await go("/restaurant/?s=trattoria-sole");
  await shot("2-restaurant");
  await page.getByRole("button", { name: /buchen/i }).first().click();
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await shot("3-buchung");
  await go("/login/");
  await page.getByRole("button", { name: "Als Restaurant testen" }).click();
  await page.waitForTimeout(600);
  await go("/portal/restaurant/?id=demo-trattoria-sole");
  await shot("4-portal");
  await go("/portal/restaurant/?id=demo-trattoria-sole&tab=abrechnung");
  await shot("5-abrechnung");
}
await browser.close();
server.close();
console.log("Screenshots in app-assets/store/");
