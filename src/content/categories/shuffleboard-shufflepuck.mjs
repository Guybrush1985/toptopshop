// Kategorie: Shuffleboard und Shufflepuck
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "shuffleboard-shufflepuck",
  area: "private-sportanlagen",
  navLabel: "Shuffleboard",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Shuffleboard & Shufflepuck: Die 3 besten Tische 2026",
  metaDescription:
    "Shuffleboard-Tische in Barlänge und kompakte Shufflepuck-Spiele für Partykeller und Garten: Die 3 besten Modelle 2026 – mit Tipps zu Wachs und Platzbedarf.",

  eyebrow: "Sportanlagen · Shuffleboard",
  h1: "Die 3 besten Shuffleboard-Tische 2026",
  lead:
    "Shuffleboard ist das Kneipenspiel, das jeder nach zwei Minuten versteht – und nach zwei Stunden immer noch spielt. Wir zeigen die drei besten Tische, vom 9-Fuß-Board bis zum Shufflepuck für den Küchentisch.",
  answer:
    "Unsere beste Gesamtwahl ist der [**VEVOR Shuffleboard-Tisch 274 cm mit LED-Beleuchtung**](produkt:1), weil er Barlänge, Beleuchtung und Bowling-Kombi zum fairen Preis bietet. Das beste Preis-Leistungs-Verhältnis bietet das kompakte [**COSTWAY 2-in-1 Shuffleboard & Curling (114 cm)**](produkt:2); die Premium-Wahl ist das [**Pegasi American Shuffleboard 9 ft LED**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 150 €" },
    2: { symbol: "€€", label: "150–900 €" },
    3: { symbol: "€€€", label: "über 900 €" },
  },

  top3Title: "Unsere Top 3 Shuffleboard-Tische",
  top3Intro: "Zwei Tische in Barlänge (rund 2,7 m) und ein Shufflepuck-Brett für den Tisch. Massivholz-Shuffleboards in Kneipenqualität sind bei Amazon kaum erhältlich – die großen Modelle bestehen meist aus MDF.",
  comparisonTitle: "Die 3 besten Shuffleboard-Tische im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielgefühl", weight: 0.35, description: "Länge, Gleitfläche, Pucks, Banden." },
    { key: "qualitaet", label: "Verarbeitung", weight: 0.25, description: "Material, Stabilität, Oberfläche." },
    { key: "extras", label: "Ausstattung", weight: 0.15, description: "Beleuchtung, Zubehör, Zusatzspiele." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Größe und Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Material, Lieferumfang) und Händlerangaben. Unabhängige Tests gibt es nicht. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "VEVOR Shuffleboard-Tisch 274 cm mit LED-Beleuchtung",
      brand: "VEVOR",
      variant: "9 ft, mit Bowling-Set",
      visual: { kind: "shuffle", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 8.0, qualitaet: 7.5, extras: 9.0, preis: 8.5 },
      bestFor: "Partykeller, Gaming-Room",
      verdict:
        "Barlänge zum fairen Preis: laut Hersteller 9 Fuß Spielfläche, LED-Beleuchtung, acht Metallpucks und ein Bowling-Set als Zusatzspiel – ein echter Blickfang.",
      features: [
        "Rund 2,76 × 0,61 × 0,81 m (Herstellerangabe)",
        "LED-Beleuchtung, kratzfeste Spielfläche, 8 Metallpucks (Herstellerangabe)",
        "Bowling-Set, Wachs und Tischbürste inklusive (Herstellerangabe)",
      ],
      pros: ["Echte Barlänge", "Beleuchtung", "Viel Zubehör"],
      cons: ["MDF statt Massivholz", "Rund 84 kg, Aufbau zu zweit"],
      specs: { laenge: "ca. 274 cm", material: "MDF", pucks: "8 Metallpucks", extras: "LED, Bowling", gewicht: "ca. 84 kg" },
      asin: "B0DDX27MV2",
      query: "VEVOR Shuffleboard Tisch LED-Beleuchtung 274 cm",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "COSTWAY 2-in-1 Shuffleboard & Curling, 114 × 32 cm",
      brand: "COSTWAY",
      variant: "Tischspiel aus Holz",
      visual: { kind: "shuffle", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 7.0, qualitaet: 7.5, extras: 7.5, preis: 9.5 },
      bestFor: "Küchentisch, kleine Räume, Kinder",
      verdict:
        "Shufflepuck für jeden Tisch: Das 114 cm lange Holzbrett passt auf Esstisch oder Kücheninsel – die Pucks gleiten laut Hersteller auch ohne Wachs.",
      features: [
        "114 × 32 cm, Holz (Herstellerangabe)",
        "Shuffleboard und Curling in einem, 4 rote und 4 blaue Pucks (Herstellerangabe)",
        "Laut Hersteller ohne zusätzliches Wachs spielbar",
      ],
      pros: ["Sehr günstig", "Passt überall hin", "Zwei Spiele in einem"],
      cons: ["Kein echtes Bar-Shuffleboard", "Kurze Spielfläche"],
      specs: { laenge: "114 cm", material: "Holz", pucks: "8 Pucks", extras: "Curling", gewicht: "leicht" },
      asin: "B0G4TKWSGW",
      query: "COSTWAY 2 in 1 Shuffleboard Curling 114 x 32 cm",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Pegasi American Shuffleboard 9 ft LED",
      brand: "Pegasi",
      variant: "schwarz, indoor",
      visual: { kind: "shuffle", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 8.5, qualitaet: 8.0, extras: 8.5, preis: 6.5 },
      bestFor: "Design-Gaming-Room, Bar",
      verdict:
        "Für den Auftritt: Das schwarze 9-Fuß-Shuffleboard mit LED-Beleuchtung vom niederländischen Spieltischhersteller ist das Designstück im Partyraum.",
      features: [
        "9 Fuß (rund 2,7 m), LED-Beleuchtung, schwarz (Händlerangabe)",
        "Für den Innenbereich (Händlerangabe)",
        "Auch als 7-Fuß-Version erhältlich (Händlerangabe)",
      ],
      pros: ["Edles Design", "Barlänge", "Bekannter Spieltisch-Hersteller"],
      cons: ["Teuer", "Wenige technische Angaben"],
      specs: { laenge: "9 ft (ca. 274 cm)", material: "laut Hersteller", pucks: "laut Hersteller", extras: "LED", gewicht: "–" },
      query: "Pegasi American Shuffleboard 9ft LED",
    },
  ],

  comparison: [
    { key: "laenge", label: "Länge" },
    { key: "material", label: "Material" },
    { key: "pucks", label: "Pucks" },
    { key: "extras", label: "Extras" },
    { key: "gewicht", label: "Gewicht" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-shuffleboard-tische-2026-bewertung.svg",
      title: "Die 3 besten Shuffleboard-Tische 2026",
      alt: "Balkendiagramm: Bewertung von VEVOR Shuffleboard 274 cm, COSTWAY Shufflepuck und Pegasi American Shuffleboard",
      caption: "Unsere Bewertung je Kriterium. VEVOR bietet am meisten fürs Geld, COSTWAY ist am günstigsten, Pegasi am edelsten.",
    },
    steps: {
      kind: "steps",
      file: "shuffleboard-regeln-kurz-erklaert.svg",
      title: "Shuffleboard in fünf Schritten",
      subtitle: "Die Grundregeln für den Tisch",
      alt: "Infografik: Shuffleboard-Regeln – Wachs, Pucks, Schieben, Punkte, Sieg",
      caption: "Die wichtigsten Regeln für Tisch-Shuffleboard; Details variieren je nach Verband und Kneipe.",
      steps: [
        { title: "Wachs streuen", text: "Etwas Shuffleboard-Wachs gleichmäßig auf der Spielfläche verteilen." },
        { title: "Abwechselnd schieben", text: "Jeder Spieler schiebt seine vier Pucks im Wechsel mit dem Gegner." },
        { title: "Gegner wegschießen", text: "Gegnerische Pucks dürfen vom Tisch gestoßen werden." },
        { title: "Punkte zählen", text: "Nur Pucks, die weiter vorn liegen als alle gegnerischen, zählen – je nach Zone 1, 2 oder 3 Punkte." },
        { title: "Bis 15 oder 21", text: "Wer zuerst die vereinbarte Punktzahl erreicht, gewinnt." },
      ],
    },
  },

  editorial: {
    title: "Shuffleboard: das Kneipenspiel für zu Hause",
    intro: "Was Shuffleboard so beliebt macht, wie viel Platz du brauchst und warum Wachs so wichtig ist.",
    sections: [
      {
        id: "bestes-shuffleboard",
        h2: "Welcher Shuffleboard-Tisch ist der beste?",
        blocks: [
          { quick: "Der [VEVOR 274 cm mit LED](produkt:1) ist die beste Wahl für den Partykeller. Für kleine Räume reicht das [COSTWAY-Shufflepuck-Brett](produkt:2), für einen Design-Gaming-Room das [Pegasi American Shuffleboard](produkt:3)." },
          { first: "In amerikanischen Bars steht es seit Jahrzehnten, in Deutschland entdecken es gerade Partykeller und Gaming-Rooms: Shuffleboard. Metallpucks gleiten über eine lange, gewachste Holzbahn, und wer am Ende am weitesten vorn liegt, punktet. Das Spiel ist schnell erklärt, leise und funktioniert auch mit einem Getränk in der Hand." },
          { p: "Klassische Bar-Shuffleboards sind oft rund 3,7 bis 6,7 m lang und meist aus Massivholz. Für Wohnräume haben sich kürzere Tische mit rund 2,7 m (9 Fuß) durchgesetzt. Shufflepuck-Bretter für den Tisch sind die kleinste Variante – ideal zum Ausprobieren." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf die Länge passend zum Raum, eine glatte, harte Spielfläche, schwere Metallpucks, verstellbare Füße zum Ausrichten und passendes Wachs." },
          {
            table: {
              caption: "Größen im Überblick",
              head: ["Typ", "Länge", "Raumbedarf"],
              rows: [
                ["**Tisch-Shufflepuck**", "ca. 1,1–1,2 m", "Esstisch"],
                ["**Home-Shuffleboard**", "ca. 2,1–2,7 m (7–9 ft)", "ca. 4 × 2 m"],
                ["**Bar-Shuffleboard**", "ca. 3,7–6,7 m (12–22 ft)", "Großer Partyraum"],
              ],
            },
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen und Zubehör",
    intro: "Weitere Tische, Tischspiele und das wichtigste Zubehör: Wachs.",
    items: [
      { name: "SereneLife Shuffleboard-Tisch 9 ft", for: "Für kleinere Räume", text: "Rund 274 × 61,5 × 76 cm, Spielfläche 262 × 56 cm, MDF mit PVC (Händlerangabe).", asin: "B0B88GWXXX", query: "SereneLife Shuffleboard Tisch" },
      { name: "VEVOR Shuffleboard 274 cm, 2-in-1 mit Bowling", for: "Ohne LED, günstiger", text: "9-Fuß-Tisch mit Bowling-Kombi aus verstärktem MDF, X-Beine, rund 80 kg (Herstellerangabe).", asin: "B0DDXL72L1", query: "VEVOR Shuffleboard Tisch 274 cm Bowling" },
      { name: "GOPLUS 2-in-1 Shuffleboard & Curling", for: "Tischspiel", text: "114 × 32 cm, 8 Scheiben, rutschfeste Rillen (Herstellerangabe) – aufklappen und losspielen.", asin: "B0G52XL7LK", query: "GOPLUS 2-in-1 Shuffleboard Curling" },
      { name: "AK Sport Sjoelbak 120 cm (20 Scheiben)", for: "Holländischer Klassiker", text: "Das niederländische Schiebespiel Sjoelen – verwandt mit Shufflepuck, für die ganze Familie.", asin: "B00AHAAHEC", query: "Sjoelbak 120 cm 20 Scheiben" },
      { name: "Sun-Glo Speed 6 Shuffleboard-Wachs", for: "Wachs", text: "Mittelschnelles Wachs, laut Hersteller passend für Tische von 2,5 bis 3,6 m.", asin: "B07C8L372D", query: "Sun-Glo Speed 6 Shuffleboard Wachs" },
    ],
  },

  guide: {
    sections: [
      {
        id: "regeln-und-pflege",
        h2: "Regeln, Pflege und Aufstellung",
        blocks: [
          { quick: "Shuffleboard braucht eine waagerechte Aufstellung, regelmäßig etwas Wachs und eine saubere Spielfläche. Die Grundregeln sind in einer Minute erklärt." },
          { figure: "steps" },
          {
            list: [
              "**Waagerecht ausrichten:** Mit der Wasserwaage und den Stellfüßen – sonst laufen die Pucks zur Seite.",
              "**Wachs dosieren:** Lieber wenig und oft; zu viel Wachs macht das Spiel unkontrolliert schnell.",
              "**Fläche sauber halten:** Vor dem Spielen kurz abbürsten, nach dem Spielen abdecken.",
            ],
          },
          { callout: { title: "Aufbau und Sicherheit", warn: true, text: "Große Shuffleboards wiegen laut Herstellern 80 kg und mehr – Aufbau und Transport nur zu zweit oder dritt und nach Anleitung, damit niemand eingeklemmt wird oder sich verhebt. Den Tisch stabil aufstellen, Kinder nicht daran klettern lassen. Pucks und Kleinteile sind nichts für Kleinkinder, und verstreutes Shuffleboard-Wachs macht den Fußboden rutschig: daneben gefallenes Wachs gleich auffegen. Bei LED-Beleuchtung nur das mitgelieferte Netzteil verwenden." } },
          { facts: [{ value: "9 ft", label: "≈ 2,74 m, typische Länge für Wohnräume" }, { value: "8", label: "Pucks pro Spiel (4 je Spieler)" }, { value: "15 / 21", label: "übliche Siegpunktzahl" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Shuffleboard-Tisch ist der beste?", a: "Unsere beste Gesamtwahl ist der VEVOR Shuffleboard-Tisch mit 274 cm und LED. Günstiger ist das COSTWAY-Shufflepuck-Brett, die Premium-Wahl das Pegasi American Shuffleboard 9 ft." },
    { q: "Wie viel Platz braucht ein Shuffleboard?", a: "Ein 9-Fuß-Tisch ist rund 2,7 m lang. Mit Platz zum Spielen an den Enden und Seiten sollte der Raum etwa 4 × 2 m groß sein." },
    { q: "Was ist der Unterschied zwischen Shuffleboard und Shufflepuck?", a: "Shufflepuck bezeichnet meist die kompakte Tischvariante. Das Spielprinzip ist gleich, nur die Bahn ist deutlich kürzer." },
    { q: "Braucht man für Shuffleboard Wachs?", a: "Bei großen Tischen ja – das Wachs lässt die Pucks gleiten. Kleine Tischspiele funktionieren laut Herstellern teils ohne." },
    { q: "Kann ein Shuffleboard draußen stehen?", a: "Die meisten Tische sind laut Herstellern für den Innenbereich gebaut. Draußen nur aufstellen, wenn der Hersteller das ausdrücklich erlaubt – dann überdacht und gut abgedeckt. Beleuchtete Tische gehören wegen der Elektrik nicht ins Freie." },
  ],

  sources: [
    { label: "Pegasi: Spieltische", url: "https://www.pegasi.nl/" },
    { label: "Sun-Glo: Shuffleboard-Wachs", url: "https://www.sunglo.com/" },
  ],

  related: [
    { slug: "tischtennisplatten", text: "Tischtennis für Garten und Keller." },
    { slug: "airhockey-tische", text: "Airhockey-Tische für den Partykeller." },
    { slug: "kickertische", text: "Kickertische." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
