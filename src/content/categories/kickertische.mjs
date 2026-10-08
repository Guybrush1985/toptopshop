// Kategorie: Kickertische
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "kickertische",
  area: "gaming-room",
  navLabel: "Kickertische",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Kickertische 2026",
  metaDescription:
    "Turnierkicker von Ullrich, Garlando und günstige Einsteigermodelle: Die 3 besten Kickertische 2026 für Partykeller, Büro und Gaming-Room im Vergleich.",

  eyebrow: "Gaming-Room · Kicker",
  h1: "Die 3 besten Kickertische 2026",
  lead:
    "Ein guter Kicker steht bombenfest, die Stangen laufen leicht und der Ball rollt sauber. Wir zeigen die drei besten Tische – vom Turnierkicker bis zum günstigen Einstieg – und in der Top 5 weitere Alternativen.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Ullrich-Sport P4P DTFB Turnierkicker**](produkt:1) – ein schwerer Turniertisch aus deutscher Fertigung. Das beste Preis-Leistungs-Verhältnis bietet der [**Pegasi Elite**](produkt:2), die Wahl für Fans italienischer Kicker ist der [**Garlando Master Cup**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 500 €" },
    2: { symbol: "€€", label: "500–1.200 €" },
    3: { symbol: "€€€", label: "über 1.200 €" },
  },

  top3Title: "Unsere Top 3 Kickertische",
  top3Intro: "Alle drei sind stabile Standkicker mit durchgehenden Stangen. Der Unterschied liegt im Gewicht, in der Spielfläche und im Ballgefühl – Turniertische sind deutlich schwerer und präziser.",
  comparisonTitle: "Die 3 besten Kickertische im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielgefühl", weight: 0.35, description: "Stangenlauf, Spielfläche, Ballkontrolle." },
    { key: "stabil", label: "Stabilität & Material", weight: 0.25, description: "Gewicht, Korpus, Beine, Figuren." },
    { key: "ausstattung", label: "Ausstattung", weight: 0.15, description: "Stangen, Griffe, Torzähler, Ballrückführung." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Gewicht, Stangen, Spielfläche), Händlerangaben und die Turnierregeln von DTFB (Deutscher Tischfußballbund) und ITSF. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Ullrich-Sport P4P DTFB Turnierkicker",
      brand: "Ullrich-Sport",
      variant: "Turniertisch, 120 × 68 cm Spielfeld",
      visual: { kind: "gametable", tone: "forest" },
      priceTier: 3,
      ratings: { spiel: 9.5, stabil: 9.5, ausstattung: 8.5, preis: 7.5 },
      bestFor: "Ambitionierte Spieler, Vereine, Büros",
      verdict:
        "Ein echter Turniertisch für zu Hause: sehr schwer, kein Wackeln, präziser Stangenlauf und ein Spielfeld nach Turniermaß – gebaut, um Jahrzehnte zu halten.",
      features: [
        "Spielfeld rund 120 × 68 cm (Herstellerangabe)",
        "Turnierkicker nach DTFB-Vorgaben (Herstellerangabe)",
        "Rund 130 kg schwer, dadurch sehr standfest (Herstellerangabe)",
      ],
      pros: ["Turnierqualität", "Extrem stabil", "Langlebig"],
      cons: ["Teuer", "Sehr schwer zu transportieren"],
      specs: { spielfeld: "ca. 120 × 68 cm", gewicht: "ca. 130 kg", stangen: "durchgehend", figuren: "laut Hersteller", turnier: "DTFB" },
      asin: "B06W5675WQ",
      query: "Ullrich Sport P4P DTFB Tournament Kicker",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Pegasi Elite Kicker",
      brand: "Pegasi",
      variant: "Standkicker",
      visual: { kind: "gametable", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 8.0, stabil: 8.0, ausstattung: 8.0, preis: 9.5 },
      bestFor: "Familien, Partykeller",
      verdict:
        "Solider Kicker zum fairen Preis: stabiler Korpus, durchgehende Stangen und Torzähler – kein Turniertisch, aber deutlich besser als Baumarkt-Kicker.",
      features: [
        "Durchgehende Stangen, Torzähler",
        "Stabiler Korpus mit verstellbaren Füßen (Herstellerangabe)",
        "Für Familie und Freizeit",
      ],
      pros: ["Günstig", "Ordentlich stabil", "Gutes Einstiegsmodell"],
      cons: ["Leichter als Turniertische", "Einfachere Figuren"],
      specs: { spielfeld: "laut Hersteller", gewicht: "laut Hersteller", stangen: "durchgehend", figuren: "Kunststoff", turnier: "–" },
      asin: "B0BFDB1HMT",
      query: "Pegasi Elite Kicker",
    },
    {
      rank: 3,
      label: "Italienischer Klassiker",
      name: "Garlando Master Cup",
      brand: "Garlando",
      variant: "Standkicker",
      visual: { kind: "gametable", tone: "green" },
      priceTier: 2,
      ratings: { spiel: 8.5, stabil: 8.5, ausstattung: 8.5, preis: 8.0 },
      bestFor: "Fans italienischer Kicker",
      verdict:
        "Der Garlando Master Cup ist ein bewährter Kicker aus Italien mit schnellem Spielfeld, stabilem Korpus und guter Verarbeitung – ein Klassiker für Partykeller und Büro.",
      features: [
        "Kicker aus italienischer Produktion (Herstellerangabe)",
        "Durchgehende Stangen, Torzähler",
        "Stabiler Korpus",
      ],
      pros: ["Bewährte Marke", "Gute Verarbeitung", "Schnelles Spiel"],
      cons: ["Teurer als Einstiegsmodelle", "Kein DTFB-Turniertisch"],
      specs: { spielfeld: "laut Hersteller", gewicht: "laut Hersteller", stangen: "durchgehend", figuren: "laut Hersteller", turnier: "–" },
      asin: "B000WIXDDQ",
      query: "Garlando Master Cup Kicker",
    },
  ],

  comparison: [
    { key: "spielfeld", label: "Spielfeld" },
    { key: "gewicht", label: "Gewicht" },
    { key: "stangen", label: "Stangen" },
    { key: "figuren", label: "Figuren" },
    { key: "turnier", label: "Turnier" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-kickertische-2026-bewertung.svg",
      title: "Die 3 besten Kickertische 2026",
      alt: "Balkendiagramm: Bewertung von Ullrich P4P, Pegasi Elite und Garlando Master Cup",
      caption: "Unsere Bewertung je Kriterium. Spielgefühl und Stabilität wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "kickertisch-aufstellen-pflegen.svg",
      title: "Kickertisch aufstellen und pflegen",
      subtitle: "Damit der Ball sauber rollt",
      alt: "Infografik: Kickertisch aufstellen – Platz, ausrichten, Stangen schmieren, Spielfläche reinigen, Bälle",
      caption: "Ein waagerechter Tisch ist die Grundlage für faires Spiel.",
      steps: [
        { title: "Platz einplanen", text: "Rund 1 m an den Längsseiten für die Stangen." },
        { title: "Ausrichten", text: "Mit Wasserwaage und Stellfüßen waagerecht stellen." },
        { title: "Stangen pflegen", text: "Mit Silikonspray nach Herstellerangabe." },
        { title: "Spielfläche reinigen", text: "Feucht abwischen, nicht nass." },
        { title: "Passende Bälle", text: "Ballart passend zum Spielfeld wählen." },
      ],
    },
  },

  editorial: {
    title: "Turnierkicker oder Freizeitkicker?",
    intro: "Was einen guten Kicker ausmacht, welche Stangen besser sind und warum das Gewicht so wichtig ist.",
    sections: [
      {
        id: "bester-kickertisch",
        h2: "Welcher Kickertisch ist der beste?",
        blocks: [
          { quick: "Für ambitionierte Spieler ist der [Ullrich P4P](produkt:1) die beste Wahl. Günstiger und für Familien ideal ist der [Pegasi Elite](produkt:2), der [Garlando Master Cup](produkt:3) ist der italienische Klassiker." },
          { first: "Tischfußball ist in Deutschland ein Vereinssport mit eigenem Verband, dem Deutschen Tischfußballbund (DTFB). Im Partykeller zählt vor allem: Der Tisch darf nicht wackeln, die Stangen müssen leicht laufen und der Ball sollte sich kontrollieren lassen. Genau hier unterscheiden sich günstige Kicker aus dem Baumarkt und echte Turniertische." },
          { p: "Das wichtigste Qualitätsmerkmal ist das **Gewicht**: Turniertische wiegen weit über 100 kg und bewegen sich auch bei harten Schüssen nicht. Leichte Kicker unter 40 kg rutschen dagegen weg und kippeln. Wichtig sind außerdem **durchgehende Stangen** – sie sind stabiler als teleskopierende, ragen aber an der Gegenseite heraus. Für Kinder gibt es deshalb auch Modelle mit Teleskopstangen." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf ein hohes Gewicht, durchgehende Stangen mit Kugellagern, eine glatte Spielfläche, verstellbare Füße und eine passende Ballart." },
          {
            table: {
              caption: "Kickertypen im Vergleich",
              head: ["Typ", "Stärken", "Schwächen"],
              rows: [
                ["**Turnierkicker**", "Sehr stabil, präzise", "Teuer, sehr schwer"],
                ["**Freizeitkicker**", "Günstig, solide", "Leichter, weniger präzise"],
                ["**Klappbarer Kicker**", "Platzsparend", "Weniger stabil"],
                ["**Outdoor-Kicker**", "Wetterfest", "Teuer, schwer"],
              ],
            },
          },
          { h3: "Durchgehende oder Teleskopstangen?" },
          { p: "Durchgehende Stangen sind Standard bei Turniertischen und laufen präziser. Sie ragen aber auf der anderen Seite heraus – Vorsicht bei kleinen Kindern auf Kopfhöhe. Teleskopstangen sind sicherer für Kinder, aber meist weniger stabil." },
          { list: ["Gewicht: je schwerer, desto besser", "Durchgehende Stangen mit Lagern", "Ebene, glatte Spielfläche", "Verstellbare Füße", "Bei Kindern: Teleskopstangen oder Stangenschutz"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen",
    intro: "Weitere Turnier- und Freizeitkicker sowie Zubehör.",
    items: [
      { name: "Ullrich-Sport ProSport Kicker", for: "Robuster Vereinskicker", text: "Stabiler Profikicker von Ullrich-Sport, etwas einfacher ausgestattet als der P4P.", asin: "B06VVPFBGJ", query: "Ullrich Sport ProSport Kicker" },
      { name: "Garlando Olympic Silver", for: "Garlando-Einstieg", text: "Günstigerer Garlando-Kicker für Freizeit und Familie.", asin: "B0G2X7NYH4", query: "Garlando Olympic Silver" },
      { name: "Pegasi Foldy", for: "Klappbar", text: "Klappbarer Kicker, der sich nach dem Spielen platzsparend verstauen lässt.", asin: "B0B7K7W22T", query: "Pegasi Foldy Kicker" },
      { name: "Leonhart ITSF Kickerbälle", for: "Zubehör", text: "Kickerbälle für Turniertische – für mehr Ballkontrolle.", asin: "B07DWXML7H", query: "Leonhart Kickerbälle ITSF" },
      { name: "Sportime Airhockey Blizzard 7 ft", for: "Lieber Airhockey?", text: "Stabiler Airhockey-Tisch – mehr im Ratgeber Airhockey.", asin: "B0F9Y157H3", query: "Sportime Airhockey Blizzard" },
    ],
  },

  guide: {
    sections: [
      {
        id: "pflege",
        h2: "Aufstellen, Pflege und Sicherheit",
        blocks: [
          { quick: "Kicker waagerecht ausrichten, Stangen regelmäßig mit Silikonspray nach Herstellerangabe pflegen und die Spielfläche nur feucht abwischen." },
          { figure: "steps" },
          { p: "Für einen Kicker brauchst du mehr Platz, als die Tischmaße vermuten lassen: Die Stangen ragen seitlich heraus, und die Spieler stehen davor. Als Faustregel gilt rund ein Meter an jeder Längsseite. Daneben passen ein [Dartautomat](/dartautomaten/) oder ein [Getränkekühlschrank](/getraenke-kuehlschrank/) gut in den Partykeller." },
          { callout: { title: "Sicherheit", warn: true, text: "Durchgehende Stangen ragen auf der Gegenseite heraus. Kleine Kinder nicht auf Kopfhöhe neben dem Tisch stehen lassen oder Modelle mit Teleskopstangen wählen." } },
          { facts: [{ value: "120 × 68 cm", label: "Spielfeld Ullrich P4P" }, { value: "ca. 130 kg", label: "Gewicht Turnierkicker" }, { value: "1 m", label: "Platz an jeder Längsseite" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Kickertisch ist der beste?", a: "Unsere beste Gesamtwahl ist der Ullrich-Sport P4P DTFB Turnierkicker. Günstiger ist der Pegasi Elite, der Garlando Master Cup ist der italienische Klassiker." },
    { q: "Wie schwer sollte ein Kickertisch sein?", a: "Je schwerer, desto stabiler. Gute Freizeitkicker wiegen über 50 kg, Turniertische weit über 100 kg." },
    { q: "Wie viel Platz braucht ein Kicker?", a: "Neben den Tischmaßen rund einen Meter an jeder Längsseite für Stangen und Spieler." },
    { q: "Was ist besser: durchgehende oder Teleskopstangen?", a: "Durchgehende Stangen sind stabiler und präziser. Teleskopstangen sind sicherer für kleine Kinder." },
    { q: "Wie pflegt man einen Kicker?", a: "Stangen mit Silikonspray nach Herstellerangabe pflegen, Spielfläche feucht abwischen und den Tisch waagerecht halten." },
  ],

  sources: [
    { label: "Deutscher Tischfußballbund (DTFB)", url: "https://www.dtfb.de/" },
    { label: "Ullrich-Sport", url: "https://www.ullrich-sport.de/" },
    { label: "Garlando", url: "https://www.garlando.it/" },
  ],

  related: [
    { slug: "airhockey-tische", text: "Airhockey-Tische." },
    { slug: "billardtische", text: "Billardtische." },
    { slug: "dartautomaten", text: "Dartautomaten." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
