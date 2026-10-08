// Kategorie: Laubbläser (Akku) für Garten, Einfahrt und Terrasse
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "laubblaeser",
  area: "garten-grundstueck",
  navLabel: "Laubbläser",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Laubbläser 2026: Akku-Modelle im Vergleich",
  metaDescription:
    "Akku-Laubbläser von Makita, Bosch und STIHL im Vergleich: Die 3 besten Laubbläser 2026 für Terrasse, Einfahrt und große Grundstücke – plus Laubsauger mit Häcksler.",

  eyebrow: "Garten & Grundstück · Laubbläser",
  h1: "Die 3 besten Laubbläser 2026",
  lead:
    "Laub von Wegen, Einfahrt und Terrasse pusten statt kehren: Ein Akku-Laubbläser schafft in Minuten, wofür man mit dem Besen eine Stunde braucht. Wir zeigen die drei besten Modelle, erklären Akkusysteme, Lautstärke und Ruhezeiten und nennen in der Top 5 Laubsauger mit Häcksler.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Makita DUB184Z**](produkt:1): bürstenloser 18-V-Laubbläser mit laut Hersteller bis zu 13 m³ Luft pro Minute für das große Makita-LXT-Akkusystem. Das beste Preis-Leistungs-Verhältnis bietet der leichte [**Bosch UniversalLeafBlower 18V-130**](produkt:2) im Set mit Akku, die Premium-Wahl für große Grundstücke ist der [**STIHL BGA 60**](produkt:3) mit 36-V-Akku.",

  priceTiers: {
    1: { symbol: "€", label: "bis 150 €" },
    2: { symbol: "€€", label: "150–300 €" },
    3: { symbol: "€€€", label: "über 300 €" },
  },

  top3Title: "Unsere Top 3 Laubbläser",
  top3Intro:
    "Alle drei arbeiten mit Akku – leiser als Benziner, ohne Abgase und ohne Kabel durch den Garten. Sie unterscheiden sich vor allem in Blasleistung, Gewicht und Akkusystem. Wer schon Akkus einer Marke besitzt, spart beim Kauf des Sologeräts deutlich.",
  comparisonTitle: "Die 3 besten Laubbläser im Vergleich",

  criteria: [
    { key: "leistung", label: "Blasleistung", weight: 0.3, description: "Luftmenge und Luftgeschwindigkeit, auch für nasses Laub." },
    { key: "handling", label: "Gewicht & Handhabung", weight: 0.25, description: "Gewicht mit Akku, Balance, Regelung der Leistung." },
    { key: "akku", label: "Akku & Laufzeit", weight: 0.2, description: "Laufzeit, Größe und Verbreitung des Akkusystems." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Leistung und Lieferumfang." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Luftgeschwindigkeit, Luftmenge, Gewicht, Schallleistungspegel, Akkusystem) und die Angaben auf den Amazon-Produktseiten. Einen aktuellen, frei zugänglichen Test von Stiftung Warentest zu Akku-Laubbläsern konnten wir nicht bestätigen, daher nennen wir keine Testnoten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10; Laborwerte behaupten wir nicht.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Makita DUB184Z",
      brand: "Makita",
      variant: "18 V LXT, Sologerät ohne Akku",
      visual: { kind: "blower", tone: "forest" },
      priceTier: 2,
      ratings: { leistung: 8.5, handling: 8.5, akku: 8.5, preis: 8.5 },
      bestFor: "Garten, Einfahrt und Terrasse – für alle mit Makita-18-V-Akkus",
      verdict:
        "Der ausgewogenste Laubbläser: bürstenloser Motor, laut Hersteller bis zu 13 m³ Luft pro Minute und 52 m/s Luftgeschwindigkeit, stufenlos regelbar – bei nur rund 2,1 kg. Er läuft mit einem einzigen Akku aus dem großen Makita-LXT-System.",
      features: [
        "Luftmenge bis 13,0 m³/min, Luftgeschwindigkeit bis 52,1 m/s (Herstellerangabe)",
        "Bürstenloser Motor, stufenlose Regelung plus 3-Stufen-Rad (Herstellerangabe)",
        "Rund 2,1 kg, Schallleistungspegel 96 dB(A) (Händler-/Herstellerangabe)",
      ],
      pros: ["Viel Luft für die Größe", "Feinfühlig regelbar", "Riesiges 18-V-Akkusystem"],
      cons: ["Akku und Ladegerät extra", "Für sehr große Flächen ein Akku zu wenig"],
      specs: {
        akku: "18 V (1 Akku, LXT)",
        luft: "bis 52 m/s",
        volumen: "bis 13 m³/min",
        gewicht: "ca. 2,1 kg",
        laerm: "96 dB(A) LWA",
        lieferumfang: "ohne Akku/Ladegerät",
      },
      asin: "B081H8MQ46",
      query: "Makita DUB184Z Akku-Gebläse 18V",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Bosch UniversalLeafBlower 18V-130",
      brand: "Bosch",
      variant: "Set mit 2,5-Ah-Akku und Ladegerät",
      visual: { kind: "blower", tone: "green" },
      priceTier: 1,
      ratings: { leistung: 6.5, handling: 9.5, akku: 7.0, preis: 9.5 },
      bestFor: "Terrasse, Hof, Gehweg und kleine Gärten",
      verdict:
        "Leicht, günstig und sofort startklar: Im Set liegen Akku und Ladegerät bei, das Gerät wiegt laut Bosch mit Akku nur 1,6 kg. Für trockenes Laub auf Terrasse und Wegen reicht das gut, bei nassem Laub auf dem Rasen stößt er an Grenzen.",
      features: [
        "Luftgeschwindigkeit 185–245 km/h, 2 Stufen (Herstellerangabe)",
        "1,6 kg mit Akku, bis zu 18 Minuten Laufzeit (Herstellerangabe)",
        "18-V-Akku der Power-for-All-Allianz (Herstellerangabe)",
      ],
      pros: ["Sehr leicht", "Komplett mit Akku", "Akku passt in viele Bosch-Gartengeräte"],
      cons: ["Weniger Luftmenge", "Kurze Laufzeit mit 2,5-Ah-Akku"],
      specs: {
        akku: "18 V (Power for All)",
        luft: "185–245 km/h (bis 68 m/s)",
        volumen: "laut Hersteller",
        gewicht: "1,6 kg mit Akku",
        laerm: "94 dB(A) LWA",
        lieferumfang: "mit Akku und Ladegerät",
      },
      asin: "B0C3B1GQJC",
      query: "Bosch UniversalLeafBlower 18V-130 mit Akku",
    },
    {
      rank: 3,
      label: "Premium-Wahl für große Grundstücke",
      name: "STIHL BGA 60 Set",
      brand: "STIHL",
      variant: "36 V AK-System, mit Akku und Ladegerät",
      visual: { kind: "blower", tone: "mint" },
      priceTier: 3,
      ratings: { leistung: 9.0, handling: 8.0, akku: 8.0, preis: 7.0 },
      bestFor: "Große Gärten, lange Einfahrten, nasses Laub",
      verdict:
        "Die meiste Kraft im Trio: Laut STIHL bis zu 15 Newton Blaskraft und bis zu 780 m³ Luft pro Stunde aus dem 36-V-AK-System – genug, um auch feuchtes Laub vom Rasen zu bewegen. Teurer, dafür mit robuster Profi-Herkunft.",
      features: [
        "Blaskraft bis 15 N, Luftdurchsatz bis 780 m³/h (Herstellerangabe)",
        "36-V-Akku aus dem STIHL AK-System (Herstellerangabe)",
        "Rund 2,3 kg ohne Akku (Herstellerangabe)",
      ],
      pros: ["Kräftigster Bläser im Vergleich", "Robust verarbeitet", "Set mit Akku und Ladegerät"],
      cons: ["Teuer", "Ersatzakkus kosten extra"],
      specs: {
        akku: "36 V (STIHL AK)",
        luft: "laut Hersteller",
        volumen: "bis 780 m³/h",
        gewicht: "ca. 2,3 kg ohne Akku",
        laerm: "laut Datenblatt",
        lieferumfang: "mit Akku und Ladegerät",
      },
      asin: "B0CLYBVZ6S",
      query: "STIHL BGA 60 Set Akku-Laubbläser",
    },
  ],

  comparison: [
    { key: "akku", label: "Akku" },
    { key: "luft", label: "Luftgeschwindigkeit" },
    { key: "volumen", label: "Luftmenge" },
    { key: "gewicht", label: "Gewicht" },
    { key: "laerm", label: "Schallleistung" },
    { key: "lieferumfang", label: "Lieferumfang" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-laubblaeser-2026-bewertung.svg",
      title: "Die 3 besten Laubbläser 2026",
      alt: "Balkendiagramm: Bewertung von Makita DUB184Z, Bosch UniversalLeafBlower 18V-130 und STIHL BGA 60 nach Blasleistung, Handhabung, Akku und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Blasleistung wiegt am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "laubblaeser-richtig-benutzen.svg",
      title: "Laubbläser richtig benutzen",
      subtitle: "Schnell fertig, leise und tierfreundlich",
      alt: "Infografik: Laubbläser richtig benutzen – Ruhezeiten prüfen, Schutz tragen, mit dem Wind arbeiten, Haufen bilden, Laub sinnvoll verwerten",
      caption: "Fünf Schritte vom ersten Einschalten bis zum Laubhaufen.",
      steps: [
        { title: "Zeiten prüfen", text: "Im Wohngebiet werktags 9–13 und 15–17 Uhr, nie sonntags." },
        { title: "Schutz tragen", text: "Gehörschutz und Schutzbrille, feste Schuhe." },
        { title: "Mit dem Wind", text: "In Windrichtung blasen, Düse flach über den Boden." },
        { title: "Haufen bilden", text: "Laub in Etappen zu einem Haufen zusammentreiben." },
        { title: "Laub verwerten", text: "Unter Hecken liegen lassen oder kompostieren." },
      ],
    },
  },

  editorial: {
    title: "Welcher Laubbläser passt zu welchem Grundstück?",
    intro: "Wie viel Leistung du brauchst, warum das Akkusystem wichtiger ist als das Gerät und wann ein Laubsauger die bessere Wahl ist.",
    sections: [
      {
        id: "bester-laubblaeser",
        h2: "Welcher Laubbläser ist der beste?",
        blocks: [
          { quick: "Für die meisten Gärten ist der [Makita DUB184Z](produkt:1) die beste Wahl, weil er viel Luft bei geringem Gewicht liefert und mit einem verbreiteten 18-V-Akku läuft. Für Terrasse und Gehweg reicht der günstige [Bosch UniversalLeafBlower 18V-130](produkt:2), für große Grundstücke und nasses Laub lohnt der [STIHL BGA 60](produkt:3)." },
          { first: "Laubbläser gibt es mit Benzinmotor, mit Kabel und mit Akku. Für Privatgärten sind **Akku-Laubbläser** heute die naheliegende Wahl: Sie starten auf Knopfdruck, stoßen keine Abgase aus, sind deutlich leiser als Benziner und brauchen kein Kabel quer über den Rasen. Ihre Grenze ist die Laufzeit – je nach Akku und Stufe sind es 10 bis 30 Minuten, was für Einfahrt, Terrasse und einen normalen Garten meist reicht." },
          { p: "Die wichtigste Kennzahl für die Leistung ist die **Luftmenge** (m³ pro Minute oder Stunde): Sie entscheidet, wie viel Laub sich auf einmal bewegt. Die **Luftgeschwindigkeit** (m/s oder km/h) sagt, wie gut der Strahl festsitzendes Laub löst. Ein hoher km/h-Wert allein sagt wenig aus – ein schmales Rohr mit wenig Luft ist schnell, schiebt aber kaum etwas. Der Makita kombiniert beides gut, der STIHL liefert laut Hersteller außerdem bis zu 15 Newton Blaskraft, ein Wert, der Luftmenge und Geschwindigkeit zusammenfasst." },
          { figure: "scores" },
          { p: "Der Bosch liegt in der Wertung hinten, weil er weniger Luft bewegt. Dafür ist er der leichteste und im Set mit Akku am günstigsten. Wer nur Terrasse, Carport und Hauseingang freihält, braucht nicht mehr." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf Luftmenge und Luftgeschwindigkeit, das Gewicht mit Akku, das Akkusystem, die Laufzeit und den Schallleistungspegel. Wer schon Akkus einer Marke besitzt, kauft das Sologerät dazu." },
          {
            table: {
              caption: "Welche Leistungsklasse für welche Fläche (grobe Richtwerte)",
              head: ["Fläche", "Typisches Laub", "Empfehlung"],
              rows: [
                ["**Terrasse, Balkon, Hof**", "Trocken, wenig", "Leichter 18-V-Bläser, ein Akku"],
                ["**Garten bis ca. 500 m²**", "Trocken bis feucht", "Kräftiger 18-V-Bläser, zweiter Akku"],
                ["**Großer Garten, lange Einfahrt**", "Viel, auch nass", "36-V- oder 2×18-V-Bläser"],
                ["**Parkähnliches Grundstück**", "Sehr viel", "Rückentragbarer Profi-Bläser"],
              ],
            },
          },
          { h3: "Das Akkusystem zuerst" },
          { p: "Der Akku ist oft teurer als das Gerät selbst. Deshalb lohnt es sich, bei einer Marke zu bleiben: Makita-18-V-Akkus (LXT) passen in Hunderte Werkzeuge, Bosch nutzt im Garten die 18-V-Akkus der Power-for-All-Allianz, STIHL sein 36-V-AK-System für Heckenschere, Motorsäge und Rasenmäher. Wer schon Akkus besitzt, kauft das Sologerät; wer neu einsteigt, nimmt ein Set mit Akku und Ladegerät." },
          { h3: "Gewicht und Lautstärke" },
          { p: "Ein Laubbläser wird mit ausgestrecktem Arm geführt. Schon ein halbes Kilo mehr merkt man nach zehn Minuten. Der **Schallleistungspegel** (L<sub>WA</sub>) im Datenblatt ist der beste Vergleichswert für die Lautstärke; er liegt bei Akku-Bläsern typischerweise um 90 bis 100 dB(A). Achtung: Manche Händler geben stattdessen den niedrigeren Schalldruckpegel (L<sub>pA</sub>) an – die Werte sind nicht direkt vergleichbar." },
          { list: ["Luftmenge und Luftgeschwindigkeit vergleichen", "Gewicht mit Akku prüfen", "Akkusystem passend zu vorhandenen Geräten wählen", "Laufzeit und zweiten Akku einplanen", "Schallleistungspegel LWA vergleichen", "Flachdüse für nasses Laub und Ritzen"] },
        ],
      },
      {
        id: "zielgruppen",
        h2: "Welcher Laubbläser passt zu wem?",
        blocks: [
          { quick: "Makita für Heimwerker mit Akku-Werkzeug und normale Gärten, Bosch für kleine Flächen und schmales Budget, STIHL für große Grundstücke." },
          {
            cards: [
              { title: "Heimwerker mit Makita-Akkus", text: "Der [Makita DUB184Z](produkt:1) kostet als Sologerät wenig und nutzt die vorhandenen 18-V-Akkus." },
              { title: "Terrasse und Gehweg", text: "Der [Bosch UniversalLeafBlower 18V-130](produkt:2) ist leicht, kommt mit Akku und reicht für trockenes Laub auf festen Flächen." },
              { title: "Großes Grundstück", text: "Der [STIHL BGA 60](produkt:3) bewegt auch feuchtes Laub auf dem Rasen und läuft mit den AK-Akkus anderer STIHL-Gartengeräte." },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-laubsauger",
    h2: "Die 5 besten Laubsauger mit Häcksler",
    intro:
      "Saugen statt blasen: Laubsauger ziehen das Laub in einen Fangsack und zerkleinern es dabei. Das spart Säcke in der Biotonne, ist aber für Kleintiere riskanter als ein Bläser (siehe Kaufberatung). Alle fünf Geräte können auch blasen.",
    items: [
      { name: "Bosch UniversalGardenTidy 3000", for: "Kabel, beste Ausstattung", text: "Elektrischer Laubsauger und -bläser mit 3000 W, 50-Liter-Fangsack, stufenloser Drehzahl und Häcksler (Herstellerangabe).", asin: "B08SBG9D8Z", query: "Bosch UniversalGardenTidy 3000" },
      { name: "Makita DUB363ZV", for: "Akku, Bläser und Sauger", text: "Bürstenloser 2×18-V-Akku-Bläser, der sich mit dem beiliegenden Saugset zum Laubsauger umbauen lässt; Sologerät ohne Akkus.", asin: "B086LGTSM1", query: "Makita DUB363ZV" },
      { name: "GARDENA ErgoJet 3000", for: "Kabel, hohe Blasleistung", text: "Laubsauger und -bläser mit 3000 W, 45-Liter-Fangsack und Häcksler (Herstellerangabe).", asin: "B006MWDJS0", query: "Gardena ErgoJet 3000" },
      { name: "Einhell GC-EL 3024 E", for: "Günstiger Einstieg", text: "Elektro-Laubsauger mit 3000 W, 40-Liter-Fangsack, Häcksler 10:1 und Drehzahlregelung (Herstellerangabe); sehr laut.", asin: "B099S6TNTZ", query: "Einhell GC-EL 3024 E" },
      { name: "Einhell GE-CL 36/230 Li E-Solo", for: "Akku, 2×18 V", text: "Akku-Laubsauger und -bläser für zwei 18-V-Akkus aus dem Power-X-Change-System; Sologerät ohne Akkus.", asin: "B0873NCMFJ", query: "Einhell GE-CL 36/230 Li E-Solo" },
    ],
  },

  guide: {
    sections: [
      {
        id: "ruhezeiten",
        h2: "Wann darf man einen Laubbläser benutzen?",
        blocks: [
          { quick: "In Wohngebieten werktags (auch samstags) nur von 9 bis 13 und von 15 bis 17 Uhr, an Sonn- und Feiertagen gar nicht. So regelt es § 7 der Geräte- und Maschinenlärmschutzverordnung (32. BImSchV); Gemeinden können strengere Regeln haben." },
          { p: "Die 32. BImSchV nennt Laubbläser und Laubsammler ausdrücklich. Für sie gelten in reinen, allgemeinen und besonderen Wohngebieten, Kleinsiedlungsgebieten sowie Kur- und Klinikgebieten engere Zeiten als für andere Gartengeräte. Eine Ausnahme gibt es nur für Geräte mit dem **EU-Umweltzeichen**: Sie dürfen werktags von 7 bis 20 Uhr laufen. Das Sonn- und Feiertagsverbot gilt für alle. Viele Städte und Gemeinden ergänzen die Bundesregel durch eigene Satzungen oder Polizeiverordnungen – im Zweifel beim Ordnungsamt nachfragen." },
          { callout: { title: "Rechtlicher Hinweis", text: "Diese Übersicht ersetzt keine Rechtsberatung. Maßgeblich sind der Verordnungstext und die Regeln deiner Gemeinde. In Misch- und Gewerbegebieten gelten die Zeitfenster des § 7 nicht, wohl aber der allgemeine Lärmschutz." } },
        ],
      },
      {
        id: "richtig-benutzen",
        h2: "Laubbläser richtig und tierfreundlich benutzen",
        blocks: [
          { quick: "Mit Gehör- und Augenschutz arbeiten, in Windrichtung blasen, Laub zu Haufen zusammentreiben und es unter Hecken und auf Beeten liegen lassen, wo es Tieren als Winterquartier dient." },
          { figure: "steps" },
          { p: "Naturschutzverbände wie der NABU raten grundsätzlich zu Besen und Rechen: Der Luftstrom wirbelt Insekten, Spinnen und andere Bodentiere auf, und Laubsauger mit Häcksler können Kleintiere einsaugen und zerkleinern. Der NABU Baden-Württemberg bewertet einen Bläser als das kleinere Übel, weil er das Laub nur zusammenschiebt. Unsere Empfehlung: Den Bläser gezielt auf **Wegen, Einfahrt und Terrasse** einsetzen, wo nasses Laub zur Rutschgefahr wird, und auf Beeten und unter Sträuchern das Laub liegen lassen. Ein Laubhaufen in einer ruhigen Ecke ist ein willkommenes Winterquartier für Igel." },
          { p: "Für die Gesundheit gilt: Gehörschutz tragen, auch bei Akku-Geräten – Schallleistungspegel um 95 dB(A) sind über längere Zeit belastend. Eine Schutzbrille hält aufgewirbelten Staub und Splitt fern. Nicht in Richtung von Menschen, Tieren, offenen Fenstern oder parkenden Autos blasen. Wer im Winter auch die Einfahrt freihalten muss, findet im Bereich [Garten & Grundstück](/garten-grundstueck/) passende Geräte." },
          { callout: { title: "Sicherheit", warn: true, text: "Akkus nur mit dem Original-Ladegerät laden, nicht in der prallen Sonne oder bei Frost lagern und beschädigte Akkus nicht weiter verwenden. Vor dem Wechseln der Düse oder dem Entleeren eines Fangsacks Akku entnehmen bzw. Stecker ziehen." } },
          { facts: [{ value: "9–13 & 15–17 Uhr", label: "Betriebszeiten werktags im Wohngebiet (32. BImSchV)" }, { value: "13 m³/min", label: "Luftmenge Makita DUB184Z (Herstellerangabe)" }, { value: "1,6 kg", label: "Bosch UniversalLeafBlower mit Akku (Herstellerangabe)" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Akku-Laubbläser ist der beste?", a: "Unsere beste Gesamtwahl ist der Makita DUB184Z mit laut Hersteller bis zu 13 m³ Luft pro Minute bei rund 2,1 kg. Günstiger und leichter ist der Bosch UniversalLeafBlower 18V-130, am kräftigsten der STIHL BGA 60." },
    { q: "Wann darf man in Deutschland einen Laubbläser benutzen?", a: "In Wohngebieten werktags von 9 bis 13 und von 15 bis 17 Uhr, sonn- und feiertags nie (§ 7 der 32. BImSchV). Geräte mit EU-Umweltzeichen dürfen werktags von 7 bis 20 Uhr laufen. Gemeinden können strengere Regeln haben." },
    { q: "Laubbläser oder Laubsauger – was ist besser?", a: "Für Wege, Einfahrt und Terrasse ist ein Bläser meist praktischer und für Kleintiere weniger gefährlich. Ein Laubsauger mit Häcksler lohnt sich, wenn viel Laub entsorgt werden muss, weil er das Volumen stark reduziert." },
    { q: "Wie lange hält der Akku eines Laubbläsers?", a: "Je nach Akku und Stufe meist 10 bis 30 Minuten. Bosch gibt für den UniversalLeafBlower 18V-130 bis zu 18 Minuten an. Für größere Gärten lohnt ein zweiter Akku." },
    { q: "Wie laut ist ein Akku-Laubbläser?", a: "Die Hersteller geben Schallleistungspegel um 90 bis 100 dB(A) an, beim Makita DUB184Z 96 dB(A). Akku-Geräte sind leiser als Benziner, Gehörschutz ist trotzdem sinnvoll." },
    { q: "Lohnt sich ein Laubbläser ohne Akku?", a: "Ja, wenn du schon Akkus derselben Marke besitzt. Sologeräte sind deutlich günstiger. Ohne vorhandene Akkus ist ein Set mit Akku und Ladegerät meist günstiger als die Einzelteile." },
  ],

  sources: [
    { label: "§ 7 der 32. BImSchV (Geräte- und Maschinenlärmschutzverordnung)", url: "https://www.gesetze-im-internet.de/bimschv_32/__7.html" },
    { label: "Bosch: UniversalLeafBlower 18V-130 (technische Daten)", url: "https://www.bosch-diy.com/de/de/p/universalleafblower-18v-130-06008a0601" },
    { label: "Makita Deutschland", url: "https://www.makita.de/" },
    { label: "STIHL: BGA 60", url: "https://www.stihl.de/" },
    { label: "NABU: Laub liegen lassen und Gutes tun", url: "https://www.nabu.de/umwelt-und-ressourcen/oekologisch-leben/balkon-und-garten/pflege/saisonal/herbst/25120.html" },
    { label: "NABU Baden-Württemberg: Laubsauger", url: "https://baden-wuerttemberg.nabu.de/umwelt-und-leben/umweltbewusst-leben/naturgarten/12936.html" },
  ],

  related: [
    { slug: "elektrische-schneefraese", text: "Elektrische Schneefräsen für Einfahrt und Gehweg im Winter." },
    { slug: "kunstrasen", text: "Kunstrasen für den Garten – auch dort hält ein Laubbläser die Fläche sauber." },
    { area: "garten-grundstueck", text: "Alle Ratgeber für Garten & Grundstück." },
    { area: "private-sportanlagen", text: "Sportanlagen im eigenen Garten." },
  ],
};
