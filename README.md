# toptop.shop

Zentrale Affiliate-Website unter **https://toptop.shop** – statisches HTML/CSS/JavaScript ohne Build-Schritt.
Jede Kategorie liegt in einem eigenen Ordner und hat eigene Produkte und einen Ratgeber.

## Struktur

```
/                     Startseite toptop.shop (Kategorie-Übersicht)
/impressum.html       Impressum (für die ganze Seite)
/datenschutz.html     Datenschutz (für die ganze Seite)
/css/style.css        gemeinsames Design
/js/config.js         Amazon-Partner-Tag & Seitenname (gilt für alle Kategorien)
/js/main.js           gemeinsame Logik (Produktkarten, Filter, Suche, Amazon-Links)
/braeunung/           Kategorie „Bräunung & Tanning“
  index.html          Produktübersicht
  ratgeber.html       Ratgeber
  products.js         Themen und Produktdaten der Kategorie
/.github/workflows/    Deploy-Now-Workflows (automatisch angelegt)
```

## Amazon-Partner-Tag

Steht zentral in `js/config.js` (`toptopshop-21`) und wird automatisch an alle Amazon-Links angehängt.

## Produkte pflegen

Die Produkte einer Kategorie stehen in `<kategorie>/products.js`. Jedes Produkt verlinkt standardmäßig
auf eine Amazon-Suche (`query`). Für einen Direktlink die ASIN ergänzen (steht in der Amazon-URL nach `/dp/`):

```js
{ category: "oele", name: "Hawaiian Tropic Bräunungsöl",
  text: "…", query: "Hawaiian Tropic Bräunungsöl", asin: "B0XXXXXXXX" },
```

## Neue Kategorie anlegen

1. Ordner `braeunung/` kopieren, z. B. nach `fitness/`.
2. In `fitness/products.js` Themen (`CATEGORIES`) und Produkte (`PRODUCTS`) anpassen.
3. Texte in `fitness/index.html` und `fitness/ratgeber.html` anpassen.
4. Auf der Startseite `index.html` eine Kachel für die neue Kategorie ergänzen.

## Lokal ansehen

```sh
python3 -m http.server 8000
```

Dann http://localhost:8000 öffnen.

## Veröffentlichung (IONOS Deploy Now)

Die Seite wird über **IONOS Deploy Now** veröffentlicht. Jeder Push auf `main` startet automatisch
die Workflows in `.github/workflows/` (von Deploy Now angelegt – bitte nicht bearbeiten):
Build-Schritt `echo …` (kein Build nötig), Output path `./`.
Die Domain `toptop.shop` ist im Deploy-Now-Projekt verbunden.

Die Datei `CNAME` wird nur von GitHub Pages genutzt und ist für Deploy Now ohne Bedeutung.

## Vor dem Livegang

- [x] Partner-Tag in `js/config.js` eintragen (`toptopshop-21`)
- [x] Impressum und Datenschutzerklärung (TanMeOn GmbH)
- [ ] Bei Amazon PartnerNet die Website `https://toptop.shop` hinterlegen
- [ ] Optional: ASINs für konkrete Produkte ergänzen

Hinweis zu den Amazon-Richtlinien: Preise und Produktbilder von Amazon dürfen nur über die
offiziellen Tools (SiteStripe/Product Advertising API) eingebunden werden. Deshalb zeigt die
Seite keine fest eingetragenen Preise, sondern verweist für aktuelle Preise auf Amazon.
