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
/CNAME                eigene Domain für GitHub Pages (toptop.shop)
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

## Veröffentlichen mit GitHub Pages unter toptop.shop

1. Repository → Settings → Pages → Branch auswählen → Ordner `/ (root)`.
2. Unter „Custom domain“ `toptop.shop` eintragen (die Datei `CNAME` ist bereits vorhanden).
3. Beim Domain-Anbieter die DNS-Einträge für GitHub Pages setzen
   (A-Records für `toptop.shop` auf die GitHub-Pages-IPs, CNAME für `www` auf `guybrush1985.github.io`).
4. „Enforce HTTPS“ aktivieren, sobald das Zertifikat bereit ist.

## Vor dem Livegang

- [x] Partner-Tag in `js/config.js` eintragen (`toptopshop-21`)
- [ ] Impressum: Geschäftsführung, Registergericht, HRB-Nr., USt-IdNr. und V.i.S.d. § 18 MStV ergänzen
- [ ] Bei Amazon PartnerNet die Website `https://toptop.shop` hinterlegen
- [ ] Optional: ASINs für konkrete Produkte ergänzen

Hinweis zu den Amazon-Richtlinien: Preise und Produktbilder von Amazon dürfen nur über die
offiziellen Tools (SiteStripe/Product Advertising API) eingebunden werden. Deshalb zeigt die
Seite keine fest eingetragenen Preise, sondern verweist für aktuelle Preise auf Amazon.
