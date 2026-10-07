// Kategorie: PMR-Funkgeräte (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "funkgeraete-pmr",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "PMR-Funkgeräte",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten PMR-Funkgeräte 2026 – lizenzfrei für Familie",
  metaDescription:
    "Die 3 besten lizenzfreien PMR446-Funkgeräte 2026: Motorola T82 Extreme, Motorola T42 und Midland G7 Pro im Vergleich – plus Reichweite, Regeln und Funkplan für den Notfall.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "Die 3 besten PMR-Funkgeräte 2026",
  lead:
    "Wenn das Handynetz ausfällt, funktionieren Walkie-Talkies weiter: PMR446-Funkgeräte sind in ganz Europa lizenzfrei, sofort einsatzbereit und verbinden Familie und Nachbarschaft über einige hundert Meter bis wenige Kilometer. Diese drei sind die beste Wahl.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Motorola Talkabout T82 Extreme**](produkt:1): wetterfest nach IPX4, mit Akkus, Ladeschale und Taschenlampe. Das beste Preis-Leistungs-Verhältnis bietet das [**Motorola Talkabout T42 im 3er-Set**](produkt:2), ideal auch für Kinder; besonders robust und vielseitig ist das [**Midland G7 Pro**](produkt:3) mit PMR und LPD.",

  top3Title: "Unsere Top 3 PMR-Funkgeräte",
  top3Intro:
    "Alle drei funken auf den 16 PMR446-Kanälen, die in Europa ohne Lizenz und Gebühren genutzt werden dürfen, und sind untereinander kompatibel.",
  comparisonTitle: "Die 3 besten PMR-Funkgeräte im Vergleich",

  criteria: [
    { key: "reichweite", label: "Reichweite & Empfang", weight: 0.25, description: "Sendeleistung bis 0,5 W, Empfangsqualität, Erfahrungen zur realen Reichweite." },
    { key: "robust", label: "Robustheit & Strom", weight: 0.25, description: "Wetterschutz, Akku und Batterien, Laufzeit." },
    { key: "bedienung", label: "Bedienung", weight: 0.2, description: "Einfachheit, auch für Kinder und ältere Menschen; VOX, Display, Tasten." },
    { key: "preis", label: "Preis-Leistung", weight: 0.3, description: "Preis pro Gerät – für eine Familie braucht man mehrere." },
  ],

  method:
    "Grundlage sind die Regeln für PMR446 (Allgemeinzuteilung, max. 500 mW, fest eingebaute Antenne), Herstellerangaben zu Kanälen, Laufzeit und Wetterschutz sowie Kundenerfahrungen zu Reichweite und Bedienung. Eigene Reichweitentests führen wir nicht durch. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Motorola Talkabout T82 Extreme (2er-Set)",
      brand: "Motorola",
      variant: "PMR446, IPX4, Akkus + Ladeschale",
      visual: { kind: "handheld", tone: "forest" },
      priceTier: 2,
      ratings: { reichweite: 8.0, robust: 8.5, bedienung: 8.5, preis: 7.5 },
      bestFor: "Familie, Garten, Nachbarschaft",
      verdict:
        "Das ausgewogenste Set: spritzwassergeschützt, mit Akkupacks, Doppelladeschale, Taschenlampe und Headsets – und laut Motorola bis zu 18 Stunden Betriebszeit.",
      features: [
        "16 PMR446-Kanäle, 121 Unterkanäle (Codes), 500 mW",
        "Wetterschutz IPX4, eingebaute LED-Taschenlampe, VOX-Sprachsteuerung",
        "Lieferumfang laut Anbieter: 2 Geräte, NiMH-Akkupacks, Ladegerät, Gürtelclips, Ohrhörer, Tasche",
      ],
      pros: ["Wetterfest", "Komplettes Zubehör", "Taschenlampe integriert"],
      cons: ["Angegebene 10 km nur unter Idealbedingungen", "Akkupacks speziell – Ersatz einplanen"],
      specs: { kanaele: "16 + 121 Codes", leistung: "500 mW", strom: "NiMH-Akkupack (Ladeschale)", schutz: "IPX4", extras: "Taschenlampe, VOX, Headsets" },
      asin: "B078C7TD7Z",
      query: "Motorola Talkabout T82 Extreme PMR",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Motorola Talkabout T42 (3er-Set)",
      brand: "Motorola",
      variant: "PMR446, 3 × AAA",
      visual: { kind: "handheld", tone: "mint" },
      priceTier: 1,
      ratings: { reichweite: 6.0, robust: 6.0, bedienung: 9.5, preis: 9.5 },
      bestFor: "Kinder & einfache Nahbereichs-Funk",
      verdict:
        "Drei leichte, einfache Geräte zum kleinen Preis. Laut Nutzern können schon Sechsjährige sie bedienen – ideal, damit auch die Kinder im Haus oder in der Nachbarschaft erreichbar sind.",
      features: [
        "16 PMR446-Kanäle, laut Motorola bis 4 km Reichweite (gelände­abhängig)",
        "Betrieb mit 3 × AAA je Gerät – Batterien oder Akkus",
        "Drei Geräte, Gürtelclips und Sticker zum Personalisieren",
      ],
      pros: ["Sehr günstig pro Gerät", "Kinderleichte Bedienung", "Standard-AAA-Batterien"],
      cons: ["Geringere Reichweite", "Nicht wetterfest", "Batterien je nach Angebot nicht dabei"],
      specs: { kanaele: "16", leistung: "PMR446", strom: "3 × AAA", schutz: "–", extras: "Sticker, Gürtelclips" },
      asin: "B07DYGD8CH",
      query: "Motorola Talkabout T42 3er Set",
    },
    {
      rank: 3,
      label: "Robust & vielseitig",
      name: "Midland G7 Pro (2er-Set)",
      brand: "Midland",
      variant: "PMR446 + LPD, C1090.13",
      visual: { kind: "handheld", tone: "green" },
      priceTier: 2,
      ratings: { reichweite: 8.5, robust: 8.5, bedienung: 7.0, preis: 7.0 },
      bestFor: "Draußen, Garten, längere Einsätze",
      verdict:
        "Ein robustes Arbeitsgerät mit LCD-Display, Doppelstandlader und zwei Bändern: PMR446 mit 500 mW und zusätzlich 69 LPD-Kanäle. Viele Codes, VOX und Vibrationsalarm.",
      features: [
        "Dualband PMR446 (500 mW) und LPD (10 mW), lizenzfrei",
        "38 CTCSS- und 104 DCS-Codes, VOX in drei Stufen, VibraCall",
        "Set mit zwei Geräten, Doppelstandlader und Gürtelclips",
      ],
      pros: ["Robust", "Zwei Bänder", "Viele Einstellmöglichkeiten"],
      cons: ["Mehr Funktionen – etwas komplexer", "Akku- und Kanalangaben je nach Variante unterschiedlich"],
      specs: { kanaele: "16 PMR + 69 LPD", leistung: "500 mW (PMR)", strom: "Akkus (Standlader)", schutz: "robustes Gehäuse", extras: "VOX, VibraCall, Display" },
      asin: "B083THY9YV",
      query: "Midland G7 Pro C1090.13",
    },
  ],

  comparison: [
    { key: "kanaele", label: "Kanäle" },
    { key: "leistung", label: "Sendeleistung" },
    { key: "strom", label: "Stromversorgung" },
    { key: "schutz", label: "Wetterschutz" },
    { key: "extras", label: "Extras" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-pmr-funkgeraete-2026-bewertung-vergleich.svg",
      title: "Die 3 besten PMR-Funkgeräte 2026",
      alt: "Balkendiagramm: Bewertung der drei besten PMR-Funkgeräte 2026 in den Kriterien Reichweite, Robustheit, Bedienung und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Das T82 Extreme ist am ausgewogensten, das T42 am günstigsten.",
    },
    steps: {
      kind: "steps",
      file: "funkplan-familie-notfall-pmr-anleitung.svg",
      title: "Funkplan für die Familie",
      subtitle: "So findet man sich im Ernstfall auf Kanal",
      alt: "Infografik: Funkplan für den Notfall – Kanal und Code festlegen, Ruf- und Hörzeiten vereinbaren, Namen statt Klarnamen, kurz sprechen, regelmäßig üben",
      caption: "Ein schriftlicher Funkplan im Notfallrucksack spart im Ernstfall Zeit.",
      steps: [
        { title: "Kanal und Code festlegen", text: "Einen Haupt- und einen Ausweichkanal mit Code aufschreiben." },
        { title: "Hörzeiten vereinbaren", text: "Zum Beispiel zur vollen Stunde für fünf Minuten einschalten – das spart Akku." },
        { title: "Rufnamen nutzen", text: "Kurze Rufnamen statt Klarnamen und Adressen – PMR ist öffentlich hörbar." },
        { title: "Kurz und klar sprechen", text: "Taste drücken, eine Sekunde warten, sprechen, „Ende“ sagen." },
        { title: "Regelmäßig üben", text: "Einmal im Monat einen Probefunk mit allen Beteiligten." },
      ],
    },
  },

  editorial: {
    title: "Funk ohne Netz: PMR446 für Familie und Nachbarschaft",
    intro:
      "Was PMR446 ist, wie weit es wirklich reicht und welche Regeln gelten – plus ein Funkplan für den Ernstfall.",
    sections: [
      {
        id: "bestes-pmr",
        h2: "Welches PMR-Funkgerät ist das beste?",
        blocks: [
          { quick: "Das [Motorola T82 Extreme](produkt:1) ist die beste Wahl: wetterfest, mit Akkus und Taschenlampe. Am günstigsten ist das [Motorola T42 im 3er-Set](produkt:2), am robustesten das [Midland G7 Pro](produkt:3)." },
          { first: "PMR446 steht für „Private Mobile Radio“ auf 446 Megahertz. Das Band ist in der EU für jedermann freigegeben: keine Lizenz, keine Gebühren, keine Anmeldung. Die Geräte dürfen höchstens 0,5 Watt abstrahlen und müssen eine fest eingebaute Antenne haben. Damit sind sie einfach, günstig und sofort einsatzbereit – genau das, was man in einem Ausfall braucht." },
          { p: "Im Krisenfall können Funkgeräte überbrücken, was sonst das Handy erledigt: kurz fragen, ob beim Nachbarn alles in Ordnung ist, Kinder auf dem Spielplatz erreichen, sich bei der Wasserausgabe abstimmen. Weil alle PMR-Geräte dieselben Kanäle nutzen, sind Geräte verschiedener Hersteller untereinander kompatibel." },
          { p: "Unsere Gesamtwahl ist das Motorola T82 Extreme, weil es wetterfest ist und ein komplettes Lade- und Zubehörset mitbringt. Die Akkupacks lassen sich über die USB-Ladeschale auch an einer Powerbank laden. Wer mehr Geräte für wenig Geld braucht, ergänzt die T42 – sie sind kompatibel." },
          { figure: "scores" },
          { callout: { title: "Reichweite realistisch sehen", text: "Herstellerangaben wie „bis 10 km“ gelten für freie Sicht, etwa von Berg zu Berg. In der Stadt und durch Gebäude sind einige hundert Meter bis zwei, drei Kilometer realistisch. Höher stehen und am Fenster funken hilft deutlich." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind PMR446-Zulassung, 500 mW Sendeleistung, eine Stromversorgung, die auch ohne Steckdose funktioniert, Wetterschutz und eine einfache Bedienung." },
          {
            table: {
              caption: "Regeln für PMR446 in Europa",
              head: ["Regel", "Was gilt"],
              rows: [
                ["**Frequenz**", "446,0 bis 446,2 MHz, 16 Kanäle"],
                ["**Sendeleistung**", "maximal 0,5 W (500 mW) ERP"],
                ["**Antenne**", "fest eingebaut, nicht austauschbar"],
                ["**Lizenz**", "nicht nötig (Allgemeinzuteilung)"],
                ["**Privatsphäre**", "keine – Gespräche sind für alle hörbar"],
              ],
            },
          },
          { h3: "Strom ohne Steckdose" },
          { p: "Geräte mit Standard-Batterien wie AAA oder AA sind im Blackout am flexibelsten. Bei Geräten mit Akkupack lohnt ein Blick in die Anleitung, ob alternativ AA-Zellen passen – die Angaben der Händler dazu sind nicht einheitlich. Halte Ersatzbatterien oder geladene NiMH-Akkus bereit und lade die Akkupacks bei Bedarf über eine Powerbank oder Powerstation." },
          { h3: "Codes sind keine Verschlüsselung" },
          { p: "Unterkanäle bzw. CTCSS- und DCS-Codes filtern nur, welche Gespräche du hörst. Sie verschlüsseln nichts – jeder auf demselben Kanal kann mithören. Gib deshalb über Funk keine Adressen, Abwesenheiten oder sensiblen Daten durch." },
          { h3: "Bedienung" },
          { p: "Für Kinder und ältere Menschen zählen große Tasten und wenige Funktionen. Die Motorola T42 sind hier vorbildlich. VOX, die Freisprechfunktion per Sprachaktivierung, ist praktisch, wenn man die Hände frei braucht – sie löst aber auch bei Hintergrundgeräuschen aus." },
        ],
      },
      {
        id: "welches-passt",
        h2: "Welches Funkgerät passt zu wem?",
        blocks: [
          { quick: "Für die Familie mit Garten und Nachbarschaft: T82 Extreme. Für Kinder und viele Geräte: T42. Für draußen und längere Einsätze: Midland G7 Pro." },
          {
            cards: [
              { title: "Familie & Garten", text: "Wetterfest mit Zubehör: Motorola T82 Extreme.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kinder", text: "Drei einfache Geräte für wenig Geld: Motorola T42.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Robust draußen", text: "PMR und LPD, viele Codes: Midland G7 Pro.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Mehr Geräte & Akkus", text: "4er-Sets und Ersatzakkus in der Top 5.", link: { href: "#top5-sets", label: "Zur Top 5" } },
              { title: "Text über Kilometer", text: "Meshtastic-Mesh-Funk ohne Netz.", link: { href: "/krisenvorsorge/kommunikation-technik/mesh-funk-lora/", label: "Mesh-Funk" } },
              { title: "Warnungen hören", text: "Kurbel- und Solarradios.", link: { href: "/krisenvorsorge/kommunikation-technik/notfallradios/", label: "Notfallradios" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-sets",
    h2: "Die 5 besten Sets und Ergänzungen",
    intro:
      "Für größere Familien und Hausgemeinschaften lohnen sich 4er-Sets; Ersatzakkus und Batterien halten die Geräte im Ernstfall am Laufen.",
    items: [
      { name: "Motorola Talkabout T82 Extreme (4er-Set)", for: "Große Familie", text: "Vier T82 Extreme mit Zubehör – eines pro Familienmitglied oder Haushalt in der Nachbarschaft.", asin: "B077XTVFHQ", query: "Motorola T82 Extreme Quad" },
      { name: "Midland G7 Pro Kofferset (4 Geräte)", for: "Hausgemeinschaft", text: "Vier G7 Pro mit Doppelstandladern und Headsets im Koffer (C1090.19).", asin: "B09CQ6S93Q", query: "Midland G7 Pro Kofferset C1090.19" },
      { name: "Motorola Talkabout T82 (2er-Set)", for: "Günstiger Allrounder", text: "Die Standardversion des T82 mit Spritzwasserschutz – etwas günstiger als die Extreme-Variante.", asin: "B077T18LQ3", query: "Motorola Talkabout T82" },
      { name: "Ersatzakkus für Motorola T82/T92 (2 Stück)", for: "Akku-Reserve", text: "NiMH-Ersatzakkus 1.650 mAh (PMNN4477AR-kompatibel) – ein Satz in Reserve verdoppelt die Laufzeit.", asin: "B0BJTTNSB7", query: "Ersatzakku Motorola T82 PMNN4477" },
      { name: "Motorola T42 mit 12 AAA-Akkus", for: "Gleich mit Akkus", text: "T42-Set zusammen mit vorgeladenen AAA-Akkus – sofort einsatzbereit.", asin: "B08GR2GCD6", query: "Motorola T42 AAA Akkus" },
    ],
  },

  guide: {
    sections: [
      {
        id: "funkplan",
        h2: "Wie organisiert man Funk im Ernstfall?",
        blocks: [
          { quick: "Lege vorab Kanal, Code, Hörzeiten und Rufnamen fest, schreibe sie auf und übe regelmäßig. Sprich kurz und klar und funke von einem erhöhten Platz am Fenster." },
          { p: "Funk ist ein geteiltes Medium: Während einer spricht, müssen alle anderen zuhören. Kurze, klare Durchsagen und feste Hörzeiten sparen Akku und Nerven. Wer in einer Hausgemeinschaft oder Straße vorsorgt, kann einen gemeinsamen Kanal vereinbaren – etwa für ältere oder pflegebedürftige Nachbarn." },
          { figure: "steps" },
          { h3: "Sprechregeln" },
          {
            list: [
              "**Erst hören, dann senden** – nicht in laufende Gespräche fallen.",
              "**Taste drücken, kurz warten, sprechen** – sonst wird der Anfang abgeschnitten.",
              "**Gerät eine Handbreit vom Mund**, nicht hineinschreien.",
              "**Antenne senkrecht**, nicht in der Tasche funken.",
              "**Bei echtem Notfall 112 anrufen**, wenn ein Telefon funktioniert; Funk ersetzt keinen Notruf.",
            ],
          },
          {
            facts: [
              { value: "0 €", label: "Gebühren oder Lizenz für PMR446" },
              { value: "16", label: "Kanäle im PMR446-Band" },
              { value: "0,5 W", label: "maximale Sendeleistung" },
            ],
          },
          { h3: "Pflege" },
          { p: "Akkus im Abstand von einigen Monaten laden, Batterien aus Geräten nehmen, die lange liegen, und Kontakte sauber halten. Geräte zusammen mit dem Funkplan im Notfallrucksack lagern." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Funkgeräte darf man ohne Lizenz benutzen?", a: "In Deutschland und der EU sind PMR446-Funkgeräte mit höchstens 0,5 Watt und fest eingebauter Antenne lizenz- und gebührenfrei. Zusätzlich gibt es lizenzfreie LPD- und Freenet-Geräte; Amateurfunk braucht eine Prüfung." },
    { q: "Wie weit reichen PMR-Funkgeräte?", a: "In der Stadt meist einige hundert Meter bis zwei, drei Kilometer, im freien Gelände und von erhöhten Punkten deutlich mehr. Herstellerangaben wie 10 km gelten nur unter Idealbedingungen." },
    { q: "Sind PMR-Funkgeräte verschiedener Marken kompatibel?", a: "Ja, alle PMR446-Geräte nutzen dieselben Kanäle. Bei Unterkanälen und Codes kann es Unterschiede geben; der Standardkanal ohne Code funktioniert immer." },
    { q: "Kann man mit PMR-Funk abgehört werden?", a: "Ja. PMR446 ist nicht verschlüsselt, Codes filtern nur. Jeder auf demselben Kanal kann mithören. Gib keine sensiblen Daten durch." },
    { q: "Welches Funkgerät eignet sich für Kinder?", a: "Leichte, einfache Geräte wie das Motorola Talkabout T42. Laut Nutzern können sie schon Sechsjährige bedienen." },
    { q: "Was ist besser: PMR oder Meshtastic?", a: "PMR überträgt Sprache sofort und ist sehr einfach, reicht aber nur einige Kilometer. Meshtastic überträgt Textnachrichten, kann über weitere Knoten deutlich weiter reichen und braucht meist ein Smartphone. Beide ergänzen sich." },
  ],

  sources: [
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Wikipedia: PMR446", url: "https://de.wikipedia.org/wiki/PMR446" },
  ],

  related: [
    { slug: "mesh-funk-lora", text: "Textnachrichten über Kilometer ohne Netz." },
    { slug: "notfallradios", text: "Behördenwarnungen ohne Strom empfangen." },
    { slug: "ausstattung-licht", text: "Notfallrucksack und Licht." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
