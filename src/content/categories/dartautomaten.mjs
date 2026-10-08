// Kategorie: Dartautomaten (E-Dart) und Steeldart-Sets
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "dartautomaten",
  area: "gaming-room",
  navLabel: "Dartautomaten",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Dartautomaten 2026",
  metaDescription:
    "E-Dartautomaten von Karella mit App und Standgehäuse, dazu Steeldart-Boards mit Licht und Autodarts: Die 3 besten Dartautomaten 2026 im Vergleich.",

  eyebrow: "Gaming-Room · Dart",
  h1: "Die 3 besten Dartautomaten 2026",
  lead:
    "Ein Dartautomat zählt die Punkte automatisch und macht jeden Partykeller zur Kneipe. Wir zeigen die drei besten E-Dartautomaten – und in der Top 5 Steeldart-Sets mit Licht und automatischer Erkennung.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Karella CB-Smart**](produkt:1) mit 37 Spielen und Bluetooth-Anbindung an eine App. Das beste Preis-Leistungs-Verhältnis bietet der bewährte [**Karella CB-50**](produkt:2), die Premium-Wahl ist der [**Karella E-Master**](produkt:3) – ein Standautomat wie in der Kneipe.",

  priceTiers: {
    1: { symbol: "€", label: "bis 150 €" },
    2: { symbol: "€€", label: "150–400 €" },
    3: { symbol: "€€€", label: "über 400 €" },
  },

  top3Title: "Unsere Top 3 Dartautomaten",
  top3Intro: "Alle drei sind E-Dartautomaten von Karella mit Soft-Darts und automatischer Punktezählung. Sie unterscheiden sich in Spielen, Vernetzung und Bauform – Wandgerät oder Standautomat.",
  comparisonTitle: "Die 3 besten Dartautomaten im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielgefühl & Segmente", weight: 0.35, description: "Trefferfläche, Segmentgröße, Bounce-outs, Lautstärke." },
    { key: "funktionen", label: "Spiele & Funktionen", weight: 0.25, description: "Spielvarianten, Spieler, App, Anzeige." },
    { key: "bau", label: "Verarbeitung", weight: 0.15, description: "Gehäuse, Catchring, Langlebigkeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Spiele, Spielerzahl, Segmentgröße, Vernetzung), Händlerangaben sowie die gängigen Regelmaße zu Wurfabstand und Höhe. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Karella CB-Smart",
      brand: "Karella",
      variant: "E-Dart, Bluetooth",
      visual: { kind: "dart", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 8.5, funktionen: 9.5, bau: 8.5, preis: 8.0 },
      bestFor: "Vielspieler mit App-Statistik",
      verdict:
        "Der modernste Karella-Automat: 37 Spiele, Bluetooth für App-Anbindung und Statistiken, dazu das bewährte Karella-Board mit gutem Trefferbild.",
      features: [
        "37 Spiele mit Varianten (Herstellerangabe)",
        "Bluetooth zur Verbindung mit einer App (Herstellerangabe)",
        "Wandmontage, Soft-Darts im Lieferumfang",
      ],
      pros: ["Viele Spiele", "App und Statistik", "Bewährte Marke"],
      cons: ["Teurer als CB-50", "App-Funktionen abhängig vom Smartphone"],
      specs: { typ: "E-Dart, Wand", spiele: "37", vernetzung: "Bluetooth", anzeige: "LCD", darts: "Soft-Darts" },
      asin: "B0DK5Q2LB1",
      query: "Karella CB-Smart Dartautomat",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Karella CB-50",
      brand: "Karella",
      variant: "E-Dart",
      visual: { kind: "dart", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 8.0, funktionen: 8.0, bau: 8.5, preis: 9.5 },
      bestFor: "Einstieg und Familien",
      verdict:
        "Der Klassiker seit Jahren: robustes E-Dart-Board mit vielen Spielen, Anzeige für mehrere Spieler und zuverlässiger Punktezählung – ohne App, dafür günstig.",
      features: [
        "Viele Spiele und Varianten (Herstellerangabe)",
        "LCD-Anzeige für mehrere Spieler",
        "Wandmontage, Soft-Darts im Lieferumfang",
      ],
      pros: ["Günstig", "Robust", "Einfach zu bedienen"],
      cons: ["Ohne App", "Recht laut beim Treffer"],
      specs: { typ: "E-Dart, Wand", spiele: "laut Hersteller", vernetzung: "–", anzeige: "LCD", darts: "Soft-Darts" },
      asin: "B00104CPCG",
      query: "Karella CB-50 Dartautomat",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Karella E-Master",
      brand: "Karella",
      variant: "Standautomat",
      visual: { kind: "dart", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 8.5, funktionen: 8.5, bau: 9.0, preis: 7.0 },
      bestFor: "Partykeller mit Kneipen-Gefühl",
      verdict:
        "Der Kneipenautomat für zu Hause: freistehendes Gehäuse, großes Board und Anzeige auf Augenhöhe – ohne Wandmontage und mit echtem Automaten-Look.",
      features: [
        "Freistehender Standautomat (Herstellerangabe)",
        "Automatische Punktezählung, mehrere Spieler",
        "Keine Wandmontage nötig",
      ],
      pros: ["Echter Automaten-Look", "Keine Bohrlöcher", "Stabil"],
      cons: ["Teuer", "Braucht Stellfläche"],
      specs: { typ: "E-Dart, Standgerät", spiele: "laut Hersteller", vernetzung: "laut Hersteller", anzeige: "laut Hersteller", darts: "Soft-Darts" },
      asin: "B094J4KPK3",
      query: "Karella E-Master Dartautomat",
    },
  ],

  comparison: [
    { key: "typ", label: "Typ" },
    { key: "spiele", label: "Spiele" },
    { key: "vernetzung", label: "Vernetzung" },
    { key: "anzeige", label: "Anzeige" },
    { key: "darts", label: "Darts" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-dartautomaten-2026-bewertung.svg",
      title: "Die 3 besten Dartautomaten 2026",
      alt: "Balkendiagramm: Bewertung von Karella CB-Smart, Karella CB-50 und Karella E-Master",
      caption: "Unsere Bewertung je Kriterium. Das Spielgefühl wiegt am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "dartscheibe-richtig-aufhaengen.svg",
      title: "Dartscheibe richtig aufhängen",
      subtitle: "Maße für E-Dart und Steeldart",
      alt: "Infografik: Dartscheibe aufhängen – Höhe Bullseye, Abwurflinie E-Dart, Abwurflinie Steeldart, Wandschutz, Licht",
      caption: "Mit den offiziellen Maßen trainierst du wie im Verein.",
      steps: [
        { title: "Höhe Bullseye", text: "173 cm vom Boden bis zur Mitte des Bulls." },
        { title: "Abwurf E-Dart", text: "244 cm von der Scheibe (laut gängigen E-Dart-Regeln)." },
        { title: "Abwurf Steeldart", text: "237 cm von der Scheibenfront." },
        { title: "Wand schützen", text: "Surround oder Dartschrank gegen Löcher." },
        { title: "Licht", text: "Schattenfreie Ringleuchte für Steeldart." },
      ],
    },
  },

  editorial: {
    title: "E-Dart oder Steeldart?",
    intro: "Was E-Dartautomaten von Steeldart unterscheidet, welche Maße gelten und wann sich automatische Erkennung für Steeldart lohnt.",
    sections: [
      {
        id: "bester-dartautomat",
        h2: "Welcher Dartautomat ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [Karella CB-Smart](produkt:1) die beste Wahl, weil er viele Spiele und App-Statistik bietet. Günstiger ist der [Karella CB-50](produkt:2), mit Kneipen-Gefühl der [Karella E-Master](produkt:3)." },
          { first: "Beim **E-Dart** wirfst du Darts mit Kunststoffspitzen auf eine Scheibe mit tausenden kleinen Löchern. Sensoren erkennen das getroffene Segment und der Automat zählt automatisch – perfekt für Partys, weil niemand rechnen muss. Beim **Steeldart** wirfst du Darts mit Metallspitzen auf eine Sisalscheibe, wie bei den großen Turnieren im Fernsehen. Gezählt wird von Hand oder mit Kamera-Systemen." },
          { p: "E-Dart ist familienfreundlicher, weil Soft-Darts weniger gefährlich sind und weniger Wandschäden verursachen. Steeldart ist präziser und leiser, hat aber den Nachteil, dass Punkte selbst gezählt werden müssen. Systeme wie **Autodarts** schließen diese Lücke: Kameras erkennen die Darts auf einer normalen Steeldart-Scheibe und zählen automatisch." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf die Spielart (E-Dart oder Steeldart), die Segmentgröße, eine gute Anzeige, die Lautstärke und genug Platz für den Abwurfabstand." },
          {
            table: {
              caption: "E-Dart und Steeldart im Vergleich",
              head: ["", "E-Dart", "Steeldart"],
              rows: [
                ["**Spitzen**", "Kunststoff", "Metall"],
                ["**Zählen**", "Automatisch", "Von Hand oder Kamera"],
                ["**Lautstärke**", "Lauter (Elektronik, Treffer)", "Leise"],
                ["**Abwurf**", "244 cm", "237 cm"],
                ["**Für wen**", "Familie, Party", "Training, Vereinsspieler"],
              ],
            },
          },
          { p: "Für beide Varianten gilt die Höhe von 173 cm bis zur Mitte des Bullseyes. Der Abwurfabstand beim Steeldart beträgt 237 cm von der Scheibenfront, beim E-Dart nach den in Deutschland üblichen E-Dart-Regeln 244 cm. Plane rund drei Meter Raumlänge plus Platz zum Ausholen ein." },
          { list: ["Spielart passend zur Zielgruppe", "Größere Segmente bei E-Dart = weniger Bounce-outs", "Anzeige gut lesbar aus dem Abwurfabstand", "Bei Steeldart: Licht und automatische Zählung", "Wandschutz einplanen"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-steeldart",
    h2: "Die 5 besten Alternativen: Steeldart mit Licht und Kamera",
    intro: "Für alle, die lieber mit Steeldarts spielen – mit automatischer Zählung oder schattenfreiem Licht.",
    items: [
      { name: "Autodarts Vantage", for: "Automatisch zählen bei Steeldart", text: "Kamera-System, das Darts auf einer Steeldart-Scheibe erkennt und automatisch zählt.", asin: "B0GY9N3Q7L", query: "Autodarts Vantage" },
      { name: "Winmau Blade 6 mit Surround", for: "Profi-Steeldartscheibe", text: "Sisal-Turnierscheibe von Winmau im Set mit Surround als Wandschutz.", asin: "B0CBBNG62P", query: "Winmau Blade 6 Surround Set" },
      { name: "Target Corona Vision", for: "Schattenfreies Licht", text: "Ringleuchte für Dartscheiben, die Schatten auf der Scheibe vermeidet.", asin: "B0CFBBPLLF", query: "Target Corona Vision Dart Licht" },
      { name: "Winmau Polaris", for: "Licht von Winmau", text: "LED-Ringleuchte für Steeldartscheiben.", asin: "B0CJYLKJXB", query: "Winmau Polaris Dart Licht" },
      { name: "Winmau Plasma Ice", for: "Kompaktes Ringlicht", text: "LED-Beleuchtung für die Dartscheibe in schlankem Design.", asin: "B0CKQK8ST5", query: "Winmau Plasma Ice" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufhaengen",
        h2: "Dartscheibe richtig aufhängen",
        blocks: [
          { quick: "Bullseye auf 173 cm Höhe, Abwurflinie bei 237 cm (Steeldart) oder 244 cm (E-Dart), Wand mit Surround oder Dartschrank schützen." },
          { figure: "steps" },
          { p: "Ein Dartbereich passt gut neben [Kicker](/kickertische/) oder [Billardtisch](/billardtische/) – achte aber darauf, dass niemand durch die Wurfbahn läuft. Ein Teppich oder eine Dartmatte schützt den Boden und die Spitzen herunterfallender Darts." },
          { callout: { title: "Sicherheit", warn: true, text: "Steeldarts haben spitze Metallspitzen. Kinder nur unter Aufsicht spielen lassen, die Wurfbahn freihalten und niemals werfen, wenn jemand vor der Scheibe steht." } },
          { facts: [{ value: "173 cm", label: "Höhe Bullseye" }, { value: "237 cm", label: "Abwurf Steeldart" }, { value: "244 cm", label: "Abwurf E-Dart" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Dartautomat ist der beste?", a: "Unsere beste Gesamtwahl ist der Karella CB-Smart mit 37 Spielen und Bluetooth. Günstiger ist der Karella CB-50, als Standautomat der Karella E-Master." },
    { q: "Wie hoch hängt eine Dartscheibe?", a: "Die Mitte des Bullseyes hängt 173 cm über dem Boden – bei E-Dart und Steeldart." },
    { q: "Wie weit ist der Abwurf beim Darts?", a: "Beim Steeldart 237 cm von der Scheibenfront, beim E-Dart nach üblichen E-Dart-Regeln 244 cm." },
    { q: "Was ist besser: E-Dart oder Steeldart?", a: "E-Dart zählt automatisch und ist familienfreundlich. Steeldart ist präziser und leiser. Mit Systemen wie Autodarts lässt sich auch Steeldart automatisch zählen." },
    { q: "Wie laut ist ein E-Dartautomat?", a: "E-Dartautomaten sind lauter als Steeldart, weil die Darts auf Kunststoff treffen und der Automat Töne ausgibt. Die Lautstärke lässt sich meist einstellen." },
  ],

  sources: [
    { label: "Wikipedia: Darts (Regeln und Maße)", url: "https://de.wikipedia.org/wiki/Darts" },
    { label: "Karella", url: "https://www.karella.de/" },
    { label: "Autodarts", url: "https://autodarts.io/" },
  ],

  related: [
    { slug: "kickertische", text: "Kickertische." },
    { slug: "billardtische", text: "Billardtische." },
    { slug: "getraenke-kuehlschrank", text: "Getränkekühlschrank für den Partykeller." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
