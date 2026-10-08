// Kategorie: Flipper für zu Hause (virtuell und echt)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "flipper",
  area: "gaming-room",
  navLabel: "Flipper",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Flipper für zu Hause 2026",
  metaDescription:
    "Virtuelle Flipper mit lizenzierten Tischen, kompakte Modelle und echte Flipperautomaten vom Fachhändler: Die 3 besten Flipper für zu Hause 2026 im Vergleich.",

  eyebrow: "Gaming-Room · Flipper",
  h1: "Die 3 besten Flipper für zu Hause 2026",
  lead:
    "Ein Flipper ist der Star jedes Spielkellers. Wir zeigen die drei besten virtuellen Flipper für zu Hause – und erklären, wann sich ein echter Flipperautomat vom Fachhändler lohnt.",
  answer:
    "Unsere beste Gesamtwahl ist der [**AtGames Legends Pinball**](produkt:1) mit großem Spielfeld-Bildschirm und lizenzierten Tischen. Das beste Preis-Leistungs-Verhältnis bietet der kompakte [**AtGames Legends Pinball Micro**](produkt:2); die Wahl für Williams- und Bally-Fans ist der [**Arcade1Up Williams Bally Pinball**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 400 €" },
    2: { symbol: "€€", label: "400–900 €" },
    3: { symbol: "€€€", label: "über 900 €" },
  },

  top3Title: "Unsere Top 3 Flipper für zu Hause",
  top3Intro: "Alle drei sind virtuelle Flipper: Das Spielfeld ist ein Bildschirm, die Tische sind laut Hersteller offiziell lizenziert. Echte Flipperautomaten kosten ein Vielfaches – mehr dazu unten.",
  comparisonTitle: "Die 3 besten Flipper im Vergleich",

  criteria: [
    { key: "spielgefuehl", label: "Spielgefühl", weight: 0.35, description: "Bildschirmgröße, Physik, Flipperknöpfe, Rückmeldung." },
    { key: "tische", label: "Tische & Lizenzen", weight: 0.25, description: "Anzahl und Qualität der lizenzierten Tische." },
    { key: "bau", label: "Bau & Platzbedarf", weight: 0.15, description: "Gehäuse, Größe, Stabilität." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Spielgefühl und Tischen." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Bildschirm, Tische, Maße), Händlerangaben und Informationen von Flipper-Fachhändlern zu echten Automaten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "AtGames Legends Pinball",
      brand: "AtGames",
      variant: "32-Zoll-Spielfeld, Standgerät",
      visual: { kind: "pinball", tone: "forest" },
      priceTier: 3,
      ratings: { spielgefuehl: 9.0, tische: 9.0, bau: 8.0, preis: 8.0 },
      bestFor: "Fast echtes Flipper-Gefühl",
      verdict:
        "Aus unserer Sicht der beste virtuelle Flipper im Vergleich: großes Spielfeld-Display, Rückwand-Bildschirm, Kick-Rückmeldung und lizenzierte Tische von Williams, Bally und Gottlieb.",
      features: [
        "Spielfeld-Bildschirm mit 32 Zoll, dazu Backglass-Display (Herstellerangabe)",
        "22 vorinstallierte lizenzierte Tische, weitere per WLAN (Herstellerangabe)",
        "Haptische Rückmeldung und Nudge-Funktion (Herstellerangabe)",
      ],
      pros: ["Großes Spielfeld", "Viele lizenzierte Tische", "Erweiterbar"],
      cons: ["Groß und schwer", "Kein echter Ball"],
      specs: { spielfeld: "32 Zoll", tische: "22 + Downloads", rueckmeldung: "Haptik/Nudge", groesse: "Standgerät", strom: "Steckdose" },
      asin: "B09YHKM36H",
      query: "AtGames Legends Pinball",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "AtGames Legends Pinball Micro",
      brand: "AtGames",
      variant: "Tischgerät",
      visual: { kind: "pinball", tone: "mint" },
      priceTier: 1,
      ratings: { spielgefuehl: 7.0, tische: 8.5, bau: 8.5, preis: 9.0 },
      bestFor: "Kleine Räume, Einstieg",
      verdict:
        "Flipper für den Schreibtisch: kompakt, günstig und mit lizenzierten Tischen – das Spielfeld ist klein, aber für zwischendurch erstaunlich unterhaltsam.",
      features: [
        "Kompaktes Tischgerät (Herstellerangabe)",
        "Lizenzierte Flippertische vorinstalliert (Herstellerangabe)",
        "Passt auf viele Schreib- und Couchtische",
      ],
      pros: ["Günstig", "Kaum Platzbedarf", "Lizenzierte Tische"],
      cons: ["Kleines Spielfeld", "Weniger Flipper-Gefühl"],
      specs: { spielfeld: "klein (Tischgerät)", tische: "laut Hersteller", rueckmeldung: "Knöpfe", groesse: "Tischgerät", strom: "Netzteil" },
      asin: "B0BPZY7674",
      query: "AtGames Legends Pinball Micro",
    },
    {
      rank: 3,
      label: "Für Williams- und Bally-Fans",
      name: "Arcade1Up Williams Bally Pinball",
      brand: "Arcade1Up",
      variant: "Digital Pinball, Williams/Bally",
      visual: { kind: "pinball", tone: "green" },
      priceTier: 2,
      ratings: { spielgefuehl: 8.0, tische: 8.0, bau: 8.0, preis: 8.0 },
      bestFor: "Klassische Williams- und Bally-Tische",
      verdict:
        "Virtueller Flipper mit Spielfeld-Bildschirm und Backglass im Retro-Gehäuse, bestückt mit Klassikern von Williams und Bally – etwas kleiner als der AtGames.",
      features: [
        "Lizenzierte Williams- und Bally-Tische (Herstellerangabe)",
        "Spielfeld- und Backglass-Bildschirm (Herstellerangabe)",
        "Gehäuse im Flipper-Design",
      ],
      pros: ["Klassische Tische", "Retro-Optik", "Günstiger als AtGames"],
      cons: ["Feste Tischauswahl", "Kleineres Spielfeld"],
      specs: { spielfeld: "laut Hersteller", tische: "Williams/Bally", rueckmeldung: "laut Hersteller", groesse: "kompakter als Original", strom: "Steckdose" },
      asin: "B08GYSL1NV",
      query: "Arcade1Up Williams Bally Pinball",
    },
  ],

  comparison: [
    { key: "spielfeld", label: "Spielfeld" },
    { key: "tische", label: "Tische" },
    { key: "rueckmeldung", label: "Rückmeldung" },
    { key: "groesse", label: "Größe" },
    { key: "strom", label: "Strom" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-flipper-fuer-zuhause-2026-bewertung.svg",
      title: "Die 3 besten Flipper für zu Hause 2026",
      alt: "Balkendiagramm: Bewertung von AtGames Legends Pinball, Legends Pinball Micro und Arcade1Up Williams Bally Pinball",
      caption: "Unsere Bewertung je Kriterium. Das Spielgefühl wiegt am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "echten-flipper-kaufen.svg",
      title: "Echten Flipper kaufen",
      subtitle: "Was du vor dem Kauf wissen solltest",
      alt: "Infografik: echten Flipper kaufen – Budget, Fachhändler, Probespielen, Transport, Wartung",
      caption: "Ein echter Flipper ist eine Anschaffung für viele Jahre.",
      steps: [
        { title: "Budget klären", text: "Neue Geräte kosten meist deutlich über 7.000 €." },
        { title: "Fachhändler wählen", text: "Mit Werkstatt, Garantie und Ersatzteilen." },
        { title: "Probespielen", text: "Viele Händler haben Ausstellungsräume." },
        { title: "Transport planen", text: "Über 100 kg, Treppen und Türbreiten prüfen." },
        { title: "Wartung", text: "Gummis, Lampen und Spielfeld regelmäßig pflegen." },
      ],
    },
  },

  editorial: {
    title: "Virtuell oder echt?",
    intro: "Was virtuelle Flipper können, wann sich ein echter Automat lohnt und wo du ihn kaufst.",
    sections: [
      {
        id: "bester-flipper",
        h2: "Welcher Flipper für zu Hause ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [AtGames Legends Pinball](produkt:1) die beste Wahl, weil er Spielgefühl und Preis am besten verbindet. Für kleine Räume ist der [Legends Pinball Micro](produkt:2) ideal, für Williams-Klassiker der [Arcade1Up Williams Bally](produkt:3)." },
          { first: "Echte Flipperautomaten mit Stahlkugel, Spulen und mechanischen Zielen sind faszinierend – und teuer. Neue Geräte von Herstellern wie Stern Pinball kosten bei deutschen Fachhändlern meist deutlich über 7.000 Euro, Limited Editions noch mehr. Dazu kommen Gewicht von weit über 100 kg und regelmäßige Wartung." },
          { p: "**Virtuelle Flipper** simulieren das Spiel auf einem großen Bildschirm, der wie ein Spielfeld im Gehäuse liegt. Ein zweiter Bildschirm ersetzt das Backglass, Vibrationen imitieren die Kugel. Das Gefühl ist nicht identisch, aber erstaunlich nah – und du hast Dutzende Tische statt einem. Für Familien und Einsteiger ist das aus unserer Sicht die vernünftigere Wahl." },
          { figure: "scores" },
        ],
      },
      {
        id: "echter-flipper",
        h2: "Wann lohnt sich ein echter Flipperautomat?",
        blocks: [
          { quick: "Wenn du das echte Kugelgefühl willst, Platz und Budget hast und bereit bist, dich um Wartung zu kümmern. Echte Flipper kaufst du am besten beim Fachhändler mit Werkstatt." },
          {
            table: {
              caption: "Virtueller und echter Flipper im Vergleich",
              head: ["", "Virtueller Flipper", "Echter Flipper"],
              rows: [
                ["**Preis**", "Einige hundert bis gut tausend Euro", "Neu meist über 7.000 €"],
                ["**Tische**", "Viele, oft erweiterbar", "Ein Tisch"],
                ["**Spielgefühl**", "Gut, aber simuliert", "Echte Kugel, Mechanik"],
                ["**Gewicht**", "Deutlich leichter", "Weit über 100 kg"],
                ["**Wartung**", "Kaum", "Regelmäßig"],
              ],
            },
          },
          { p: "Echte Flipper werden in der Regel über spezialisierte Fachhändler verkauft. Sie verkaufen neue und gebrauchte Geräte, liefern, stellen auf und bieten Service. Gebrauchte, überholte Automaten aus den 80er und 90er Jahren sind ein günstigerer Einstieg, brauchen aber mehr Pflege." },
          { list: ["Neu: Fachhändler mit Ausstellung und Werkstatt", "Gebraucht: überholte Geräte mit Gewährleistung bevorzugen", "Transportweg prüfen: Türbreiten, Treppen", "Stromanschluss und Platz für das geöffnete Spielfeld einplanen"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: Echte Flipper und Zubehör",
    intro: "Für echtes Kugelgefühl, Erweiterungen und Fans bestimmter Lizenzen.",
    items: [
      { name: "Echter Flipper (z. B. Stern Pinball)", for: "Das Original", text: "Neue und überholte Flipperautomaten mit Lieferung und Service gibt es bei spezialisierten Fachhändlern – meist deutlich über 7.000 Euro.", where: "Flipper-Fachhändler" },
      { name: "Arcade1Up Marvel Pinball", for: "Für Marvel-Fans", text: "Virtueller Flipper mit Marvel-Tischen – zuletzt nicht durchgehend lieferbar.", asin: "B0BH58QPS5", query: "Arcade1Up Marvel Pinball" },
      { name: "Arcade1Up Star Wars Pinball", for: "Für Star-Wars-Fans", text: "Virtueller Flipper mit Star-Wars-Tischen – zuletzt nicht durchgehend lieferbar.", asin: "B0CNPL7RRN", query: "Arcade1Up Star Wars Pinball" },
      { name: "AtGames Legends Ultimate Arcade", for: "Lieber Spielhalle?", text: "Arcade-Automat mit rund 300 lizenzierten Spielen – mehr im Ratgeber Arcade-Automaten.", asin: "B097PMZS82", query: "AtGames Legends Ultimate" },
      { name: "AtGames Legends VIBS Board", for: "Zubehör für AtGames", text: "Erweiterung für mehr Vibrations-Rückmeldung bei AtGames-Flippern (Herstellerangabe zur Kompatibilität beachten).", asin: "B09ZPRGD13", query: "AtGames Legends VIBS" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Pflege und Sicherheit",
        blocks: [
          { quick: "Flipper waagerecht ausrichten (mit leichter Neigung zum Spieler bei echten Geräten), zu zweit transportieren und bei Kindern gegen Kippen sichern." },
          { figure: "steps" },
          { p: "Virtuelle Flipper brauchen kaum Pflege: Bildschirm trocken abwischen, Software-Updates einspielen. Echte Flipper brauchen regelmäßig neue Gummis, das Spielfeld wird gereinigt und gewachst, und Spulen sowie Schalter müssen ab und zu justiert werden – das übernimmt der Fachhändler oder ein Flipper-Techniker." },
          { callout: { title: "Gewicht und Kippgefahr", warn: true, text: "Echte Flipper wiegen weit über 100 kg und sind mit aufgestelltem Kopfteil kopflastig. Für Transport und Aufbau Profis oder genug Helfer einplanen, Beine fest verschrauben und das Kopfteil nach Anleitung sichern. Auch virtuelle Standgeräte können kippen – Kinder nicht daran hochklettern oder sich daran hochziehen lassen. Im Inneren echter Flipper liegen teils hohe Spannungen an: Gehäuse und Elektronik nur von Fachleuten öffnen lassen." } },
          { callout: { title: "Gesundheitshinweis", warn: true, text: "Blinkende Licht- und Bildschirmeffekte können bei Menschen mit fotosensibler Epilepsie Anfälle auslösen. Warnhinweise in der Bedienungsanleitung beachten und bei Beschwerden sofort aufhören." } },
          { facts: [{ value: "32 Zoll", label: "Spielfeld AtGames Legends Pinball (Herstellerangabe)" }, { value: "22", label: "vorinstallierte Tische (Herstellerangabe)" }, { value: "> 7.000 €", label: "grobe Orientierung Neupreis echter Flipper" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Flipper für zu Hause ist der beste?", a: "Unsere beste Gesamtwahl ist der virtuelle AtGames Legends Pinball. Kompakt und günstig ist der Legends Pinball Micro, für Williams-Klassiker der Arcade1Up Williams Bally Pinball." },
    { q: "Was kostet ein echter Flipperautomat?", a: "Neue Flipper kosten bei deutschen Fachhändlern meist deutlich über 7.000 Euro. Überholte Gebrauchtgeräte gibt es günstiger." },
    { q: "Wo kauft man einen echten Flipper?", a: "Am besten bei einem spezialisierten Flipper-Fachhändler mit Ausstellung, Werkstatt und Lieferservice." },
    { q: "Fühlt sich ein virtueller Flipper echt an?", a: "Erstaunlich nah, aber nicht identisch. Vibrationen imitieren die Kugel, die Physik ist simuliert." },
    { q: "Wie viel Platz braucht ein Flipper?", a: "Ein Standardflipper braucht etwa die Fläche eines kleinen Tischs plus Platz zum Stehen davor und zum Öffnen des Spielfelds bei Wartung." },
  ],

  sources: [
    { label: "AtGames: Legends Pinball", url: "https://www.atgames.net/" },
    { label: "Arcade1Up: Pinball", url: "https://arcade1up.com/" },
    { label: "Stern Pinball", url: "https://sternpinball.com/" },
  ],

  related: [
    { slug: "arcade-spielautomaten", text: "Arcade-Automaten für zu Hause." },
    { slug: "airhockey-tische", text: "Airhockey-Tische." },
    { slug: "kickertische", text: "Kickertische." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
