# BronzeGuide – Affiliate-Website rund ums Braunwerden

Statische Affiliate-Website (HTML/CSS/JavaScript, kein Build-Schritt) mit Amazon-Produkten zu:

- Bräunungsölen & Beschleunigern
- Selbstbräunern
- durchbräunender Kleidung (Tan-Through-Bademode)
- Sonnenbänken & Heimsolarien
- Solariumkosmetik, Sonnenschutz, After-Sun und Zubehör

Dazu gibt es einen Ratgeber sowie Vorlagen für Impressum und Datenschutz.

## Amazon-Partner-Tag eintragen

In `js/config.js` den Platzhalter ersetzen:

```js
AMAZON_PARTNER_TAG: "deinname-21",
```

Der Tag wird automatisch an **alle** Amazon-Links angehängt.

## Produkte pflegen

Alle Produkte stehen in `js/products.js`. Jedes Produkt verlinkt standardmäßig auf eine
Amazon-Suche (`query`). Für einen Direktlink auf ein bestimmtes Produkt die ASIN ergänzen
(steht in der Amazon-URL nach `/dp/`):

```js
{ category: "oele", name: "Hawaiian Tropic Bräunungsöl",
  text: "…", query: "Hawaiian Tropic Bräunungsöl", asin: "B0XXXXXXXX" },
```

Neue Kategorien werden in `CATEGORIES` in derselben Datei angelegt.

## Lokal ansehen

`index.html` im Browser öffnen oder einen kleinen Server starten:

```sh
python3 -m http.server 8000
```

## Veröffentlichen (z. B. GitHub Pages)

Repository → Settings → Pages → Branch auswählen → Ordner `/ (root)`.

## Vor dem Livegang

- [ ] Partner-Tag in `js/config.js` eintragen
- [ ] Platzhalter in `impressum.html` und `datenschutz.html` ausfüllen
- [ ] Optional: ASINs für konkrete Produkte ergänzen
- [ ] Bei Amazon PartnerNet die Website-URL hinterlegen

Hinweis zu den Amazon-Richtlinien: Preise und Produktbilder von Amazon dürfen nur über die
offiziellen Tools (SiteStripe/Product Advertising API) eingebunden werden. Deshalb zeigt die
Seite keine fest eingetragenen Preise, sondern verweist für aktuelle Preise auf Amazon.
