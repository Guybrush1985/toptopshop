# toptop.shop

**Die Abkürzung zu den besten Produkten.** Kuratierte Empfehlungsplattform: In jeder Kategorie
werden die Top 3 Produkte vorgestellt – mit ausführlicher, SEO- und GEO-optimierter Kaufberatung.

## Technik

- **Static-Site-Generator ohne Abhängigkeiten** (`build.mjs`, Node ≥ 18). Alle Seiten werden
  vorgerendert – kein JavaScript im Browser, kein Tracking, keine Cookies.
- **Content-Modell:** Jede Kategorie ist eine Datei in `src/content/categories/`. Anleitung:
  [`src/content/README.md`](src/content/README.md).
- **Design:** Markenpalette `#253D2C` · `#2E6F40` · `#68BA7F` · `#CFFFDC`, Schriften Fraunces + Inter
  (selbst gehostet, OFL-Lizenz). CSS wird pro Seite eingebettet (Critical CSS).
- **SEO/GEO:** Canonicals, Open Graph, XML-Sitemap, robots.txt, Breadcrumbs, JSON-LD
  (`Organization`, `WebSite`, `Article`, `ItemList` mit `Product`/`Review`, `FAQPage`, `BreadcrumbList`),
  „Kurz gesagt“-Antworten, direkte Antworten unter jeder Zwischenüberschrift, sichtbares Aktualisierungsdatum.
- **Qualitätsprüfung im Build:** ≥ 1.000 Wörter, ≥ 5 FAQs, Top 5, 2 Bilder, gültige interne Links und
  Anker, Länge von Title/Description, Gewichtung der Kriterien.

## Struktur

```
build.mjs                     Generator → dist/
src/site.mjs                  Domain, Partner-Tag, Firma, Bereiche
src/content/categories/       eine Datei pro Kategorie (Top 3, Ratgeber, FAQ …)
src/content/legal/            Impressum, Datenschutz (HTML-Fragmente)
src/templates/                Layout, Kategorie-Seite, Startseite, Grafiken
src/styles.css                Design-System
src/static/                   Schriften, Favicon, OG-Bilder, .htaccess
scripts/og-images.mjs         erzeugt Social-Media-Vorschaubilder (lokal, optional)
```

## Lokal

```sh
node build.mjs
cd dist && python3 -m http.server 8000
```

## Veröffentlichung (IONOS Deploy Now)

Jeder Push auf `main` startet den Workflow `.github/workflows/toptopshop-build.yaml`:
`node build.mjs`, veröffentlicht wird der Ordner `dist/`.

## Amazon-Partnerprogramm

Partner-Tag `toptopshop-21` in `src/site.mjs`. Links verweisen auf eine Amazon-Suche oder – wenn eine
`asin` hinterlegt ist – direkt auf das Produkt. Feste Preise und Amazon-Produktbilder werden gemäß den
Programmrichtlinien nicht angezeigt; bis eigene Produktfotos vorliegen, zeigen die Seiten gekennzeichnete
Symbolbilder.
