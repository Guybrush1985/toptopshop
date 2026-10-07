// Static-Site-Generator für toptop.shop – ohne externe Abhängigkeiten.
// Aufruf: node build.mjs   →   Ausgabe in ./dist

import { readdir, readFile, writeFile, mkdir, rm, cp, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { site, areas } from "./src/site.mjs";
import { setCss } from "./src/templates/layout.mjs";
import { categoryPage } from "./src/templates/category.mjs";
import { homePage, areaPage, methodPage, legalPage, notFoundPage } from "./src/templates/pages.mjs";
import { scoresFigure, stepsFigure, svgSize } from "./src/templates/visuals.mjs";
import { overallScore, countWords } from "./src/templates/util.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");

const MIN_WORDS = 1000;
const MIN_FAQS = 5;

const problems = [];
const fail = (msg) => problems.push(msg);

async function write(rel, content) {
  const file = join(DIST, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s*\n\s*/g, "")
    .replace(/\s*([{};,>])\s*/g, "$1")
    .replace(/;}/g, "}");
}

// ---------------------------------------------------------------------------
// Kategorien laden und prüfen
// ---------------------------------------------------------------------------

async function loadCategories() {
  const dir = join(SRC, "content", "categories");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".mjs")).sort();
  const cats = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(join(dir, f)).href);
    const cat = structuredClone(mod.default);
    const id = cat.slug || f;

    if (`${cat.slug}.mjs` !== f) fail(`${f}: Dateiname muss dem slug entsprechen`);
    if (!areas.some((a) => a.slug === cat.area)) fail(`${id}: unbekannter Bereich "${cat.area}"`);
    if (cat.products?.length !== 3) fail(`${id}: genau 3 Top-Produkte erforderlich`);
    if (cat.top5?.items?.length !== 5) fail(`${id}: Top-5-Liste braucht genau 5 Einträge`);
    if ((cat.faqs?.length || 0) < MIN_FAQS) fail(`${id}: mindestens ${MIN_FAQS} FAQs erforderlich`);
    if (Object.keys(cat.figures || {}).length < 2) fail(`${id}: mindestens 2 Bilder erforderlich`);
    if (cat.metaTitle.length > 65) fail(`${id}: metaTitle ist länger als 65 Zeichen`);
    if (cat.metaDescription.length > 165) fail(`${id}: metaDescription ist länger als 165 Zeichen`);

    for (const r of [1, 2, 3]) if (!cat.answer.includes(`(produkt:${r})`)) fail(`${id}: „Kurz gesagt“ verlinkt Produkt ${r} nicht (produkt:${r})`);

    const weightSum = cat.criteria.reduce((s, c) => s + c.weight, 0);
    if (Math.abs(weightSum - 1) > 0.001) fail(`${id}: Gewichte der Kriterien ergeben ${weightSum}, nicht 1`);

    for (const p of cat.products) {
      p.score = overallScore(p.ratings, cat.criteria);
      for (const key of ["name", "brand", "label", "verdict", "bestFor"]) if (!p[key]) fail(`${id}: Produkt ${p.rank} ohne "${key}"`);
      if (!p.query && !p.asin) fail(`${id}: Produkt ${p.rank} ohne Amazon-Ziel (query oder asin)`);
      if (!(p.pros?.length >= 2 && p.cons?.length >= 1)) fail(`${id}: Produkt ${p.rank} braucht Vor- und Nachteile`);
    }
    // Die Gesamtwahl soll auch die höchste Gesamtnote haben.
    const best = Math.max(...cat.products.map((p) => p.score));
    if (cat.products[0].score < best) fail(`${id}: Platz 1 hat nicht die höchste Gesamtnote`);

    // Figuren erzeugen
    for (const [key, f] of Object.entries(cat.figures)) {
      const svg =
        f.kind === "scores"
          ? scoresFigure({ title: f.title, criteria: cat.criteria, products: cat.products })
          : stepsFigure(f);
      Object.assign(f, svgSize(svg), { svg });
      const used = [...cat.editorial.sections, ...cat.guide.sections].some((s) => s.blocks.some((b) => b.figure === key));
      if (!used) fail(`${id}: Bild "${key}" wird im Text nicht verwendet`);
    }

    cats.push(cat);
  }
  return cats;
}

// ---------------------------------------------------------------------------
// Interne Links prüfen
// ---------------------------------------------------------------------------

function checkLinks(pages) {
  const known = new Set(pages.map((p) => p.path));
  for (const p of pages) {
    const ids = new Set([...p.html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    for (const [, href] of p.html.matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:|tel:)/.test(href)) continue;
      if (href.startsWith("#")) {
        if (href.length > 1 && !ids.has(href.slice(1))) fail(`${p.path}: Anker ${href} existiert nicht`);
        continue;
      }
      const [path, hash] = href.split("#");
      if (/\.(svg|png|woff2|xml|txt)$/.test(path)) continue;
      if (!known.has(path)) fail(`${p.path}: interner Link auf unbekannte Seite ${href}`);
      if (hash) {
        const target = pages.find((x) => x.path === path);
        if (target && !new RegExp(`\\sid="${hash}"`).test(target.html)) fail(`${p.path}: Anker ${href} existiert nicht`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

async function build() {
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  setCss(minifyCss(await readFile(join(SRC, "styles.css"), "utf8")));

  const cats = await loadCategories();
  const pages = [];

  for (const cat of cats) {
    // Erst rendern, um Wörter zu zählen; dann mit korrekter Lesezeit erneut rendern.
    const draft = categoryPage(cat, cats, 1);
    const main = draft.slice(draft.indexOf("<main"), draft.indexOf("</main>"));
    const words = countWords(main);
    if (words < MIN_WORDS) fail(`${cat.slug}: nur ${words} Wörter (mindestens ${MIN_WORDS})`);
    const html = categoryPage(cat, cats, Math.max(1, Math.round(words / 200)));
    pages.push({ path: `/${cat.slug}/`, html, words, lastmod: cat.updated, priority: "0.9" });
    for (const f of Object.values(cat.figures)) await write(join(cat.slug, f.file), f.svg);
  }

  const latest = cats.map((c) => c.updated).sort().at(-1);
  pages.push({ path: "/", html: homePage(cats), lastmod: latest, priority: "1.0" });
  for (const area of areas) {
    const areaCats = cats.filter((c) => c.area === area.slug);
    pages.push({ path: `/${area.slug}/`, html: areaPage(area, areaCats, cats), lastmod: latest, priority: "0.8" });
  }
  pages.push({ path: "/methodik/", html: methodPage(cats), lastmod: latest, priority: "0.4" });

  const legal = [
    { path: "/impressum/", name: "Impressum", title: "Impressum | toptop.shop", description: "Impressum von toptop.shop – TanMeOn GmbH.", file: "impressum.html" },
    { path: "/datenschutz/", name: "Datenschutz", title: "Datenschutzerklärung | toptop.shop", description: "Datenschutzerklärung von toptop.shop.", file: "datenschutz.html" },
  ];
  for (const l of legal) {
    const html = await readFile(join(SRC, "content", "legal", l.file), "utf8");
    pages.push({ path: l.path, html: legalPage({ ...l, html }, cats), noindex: true });
  }
  const notFound = notFoundPage(cats);

  checkLinks(pages);

  if (problems.length) {
    console.error("\nBuild abgebrochen – bitte beheben:\n" + problems.map((p) => "  • " + p).join("\n"));
    process.exit(1);
  }

  for (const p of pages) await write(p.path === "/" ? "index.html" : join(p.path, "index.html"), p.html);
  await write("404.html", notFound);

  // robots.txt & Sitemap (ohne noindex-Seiten)
  await write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>`)
    .join("\n");
  await write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

  // Statische Dateien (Schriften, Favicon, OG-Bilder, .htaccess)
  await cp(join(SRC, "static"), DIST, { recursive: true });
  for (const p of pages.filter((x) => !x.noindex)) {
    const m = p.html.match(/property="og:image" content="https:\/\/toptop\.shop([^"]+)"/);
    if (m && !(await exists(join(DIST, m[1])))) console.warn(`Hinweis: OG-Bild ${m[1]} fehlt (node scripts/og-images.mjs)`);
  }

  console.log(`✓ ${pages.length + 1} Seiten erzeugt in dist/`);
  for (const p of pages.filter((x) => x.words)) console.log(`  ${p.path.padEnd(32)} ${p.words} Wörter`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
