// Kategorie: Basketballanlagen – fest einbetoniert und mobil
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "basketballkorb-fest",
  area: "private-sportanlagen",
  navLabel: "Basketballkorb",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Basketballkörbe für den Garten 2026",
  metaDescription:
    "Einbetonierte Basketballanlagen und mobile Körbe mit Glas- oder Acrylboard: Die 3 besten Basketballkörbe 2026 für Garten und Einfahrt – höhenverstellbar.",

  eyebrow: "Sportanlagen · Basketball",
  h1: "Die 3 besten Basketballkörbe für den Garten 2026",
  lead:
    "Ein fest einbetonierter Korb steht wie in der Halle, ein mobiler zieht mit um. Wir zeigen die drei besten Basketballanlagen – vom In-Ground-System bis zum mobilen Korb mit Glasboard.",
  answer:
    "Unsere beste Gesamtwahl ist der fest einbetonierte [**Spalding Silver In-Ground (44 Zoll)**](produkt:1) mit Acrylboard und – laut Hersteller – Höhenverstellung von 2,28 bis 3,05 m. Das beste Preis-Leistungs-Verhältnis bietet der mobile [**Lifetime UV100**](produkt:2); die Premium-Wahl ist der [**Spalding The Beast (60 Zoll)**](produkt:3) mit großem Glasboard und stufenloser Kurbelverstellung.",

  priceTiers: {
    1: { symbol: "€", label: "bis 400 €" },
    2: { symbol: "€€", label: "400–1.000 €" },
    3: { symbol: "€€€", label: "über 1.000 €" },
  },

  top3Title: "Unsere Top 3 Basketballanlagen",
  top3Intro: "Ein fest einbetoniertes System, ein robuster mobiler Korb und ein mobiles Premium-Modell mit Glasboard. Alle drei erreichen laut Hersteller die Wettkampfhöhe von 3,05 m.",
  comparisonTitle: "Die 3 besten Basketballkörbe im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielgefühl & Board", weight: 0.3, description: "Boardmaterial und -größe, Rebound, Stabilität beim Dunking." },
    { key: "stabil", label: "Stabilität & Sicherheit", weight: 0.25, description: "Standfestigkeit, Verankerung, Polsterung." },
    { key: "verstellung", label: "Höhenverstellung", weight: 0.2, description: "Bereich und Bequemlichkeit der Verstellung." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Boardgröße und -material, Höhenbereich, Basisvolumen), Händlerangaben und Käufererfahrungen. Unabhängige Tests gibt es für private Basketballanlagen nicht. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Spalding Silver In-Ground Hoop, 44 Zoll",
      brand: "Spalding",
      variant: "Acrylboard, einbetoniert",
      visual: { kind: "hoop", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 8.5, stabil: 9.0, verstellung: 8.5, preis: 7.5 },
      bestFor: "Fester Platz im Garten oder an der Einfahrt",
      verdict:
        "Fast wie in der Halle: Ein einbetonierter Pfosten wackelt nach unserer Einschätzung deutlich weniger als ein mobiler Korb, das 44-Zoll-Acrylboard hat einen Stahlrahmen, und die Höhe wächst mit den Kindern.",
      features: [
        "44-Zoll-Acrylboard mit Stahlrahmen und Polsterung (Händlerangabe)",
        "Höhenverstellung von 2,28 bis 3,05 m (Händlerangabe)",
        "Pfosten mit 9 cm Durchmesser zum Einbetonieren, Pro-Slam-Ring (Händlerangabe)",
      ],
      pros: ["Sehr stabil", "Mitwachsende Höhe", "Kein Sandsack, kein Wasser"],
      cons: ["Fundament nötig, nicht mehr versetzbar", "Kein Glasboard"],
      specs: { typ: "In-Ground (Beton)", board: "Acryl, 44 Zoll", hoehe: "2,28–3,05 m", basis: "Fundament", ring: "Pro Slam" },
      asin: "B09TWF1R77",
      query: "Spalding Silver In-Ground Basketballkorb 44 Zoll",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "LIFETIME UV100 Basketballanlage",
      brand: "Lifetime",
      variant: "mobil, 229–305 cm",
      visual: { kind: "hoop", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 7.5, stabil: 7.5, verstellung: 8.0, preis: 9.0 },
      bestFor: "Familien, Mietgärten",
      verdict:
        "Der robuste Allrounder zum fairen Preis: laut Hersteller großes 122-cm-Board, Edelstahlring und eine Basis für rund 45 Liter Wasser oder Sand – mit Rollen versetzbar.",
      features: [
        "Höhe 229–305 cm, Board 122 × 67,5 cm aus HDPE mit UV-Schutz (Herstellerangabe)",
        "Basis aus doppelwandigem HDPE für rund 45 l Wasser oder Sand, zwei Rollen (Herstellerangabe)",
        "Ring aus Edelstahl, Gewicht rund 26,5 kg (Herstellerangabe)",
      ],
      pros: ["Günstig", "Großes Board", "Versetzbar"],
      cons: ["Kunststoffboard statt Acryl/Glas", "Wackelt mehr als einbetonierte Anlagen"],
      specs: { typ: "Mobil", board: "HDPE, 122 × 67,5 cm", hoehe: "2,29–3,05 m", basis: "ca. 45 l", ring: "Edelstahl" },
      asin: "B096VFLCNR",
      query: "LIFETIME UV100 Basketballkorb",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Spalding The Beast, 60 Zoll Glasboard",
      brand: "Spalding",
      variant: "mobil, Kurbelverstellung",
      visual: { kind: "hoop", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 9.5, stabil: 8.0, verstellung: 9.0, preis: 6.0 },
      bestFor: "Ambitionierte Spieler ohne Fundament",
      verdict:
        "Hallengefühl ohne Beton: Das 60-Zoll-Glasboard liefert einen hallenähnlichen Rebound, die stufenlose Kurbel verstellt die Höhe laut Hersteller schnell und bequem.",
      features: [
        "60-Zoll-Glasboard (Händlerangabe)",
        "Stufenlose Höhenverstellung per Kurbel (Screw Jack) von 2,3 bis 3,05 m (Händlerangabe)",
        "Mobil, drinnen und draußen nutzbar; Abreißring (Pro Image) inklusive (Händlerangabe)",
      ],
      pros: ["Echtes Glasboard", "Bequemste Verstellung", "Sehr großes Board"],
      cons: ["Teuer", "Sehr schwer, braucht viel Ballast"],
      specs: { typ: "Mobil", board: "Glas, 60 Zoll", hoehe: "2,3–3,05 m", basis: "Ballastbasis", ring: "Abreißring" },
      asin: "B09MTRFSDT",
      query: "Spalding The Beast 60 Zoll Basketballkorb",
    },
  ],

  comparison: [
    { key: "typ", label: "Typ" },
    { key: "board", label: "Board" },
    { key: "hoehe", label: "Höhe" },
    { key: "basis", label: "Basis" },
    { key: "ring", label: "Ring" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-basketballkoerbe-garten-2026-bewertung.svg",
      title: "Die 3 besten Basketballkörbe für den Garten 2026",
      alt: "Balkendiagramm: Bewertung von Spalding Silver In-Ground, Lifetime UV100 und Spalding The Beast",
      caption: "Unsere Bewertung je Kriterium. Die In-Ground-Anlage steht am stabilsten, Lifetime ist am günstigsten, The Beast spielt sich am besten.",
    },
    steps: {
      kind: "steps",
      file: "basketballkorb-einbetonieren-anleitung.svg",
      title: "Basketballkorb einbetonieren",
      subtitle: "Fünf Schritte zu einer festen Anlage",
      alt: "Infografik: Basketballkorb einbetonieren – Standort, Loch, Bodenhülse, Beton, Aushärten",
      caption: "Maße und Betonmenge immer nach Herstelleranleitung.",
      steps: [
        { title: "Standort wählen", text: "Ebene Spielfläche vor dem Korb, Abstand zu Fenstern, Straße und Grenze." },
        { title: "Loch ausheben", text: "Tiefe und Durchmesser nach Anleitung – frostfrei gründen." },
        { title: "Bodenhülse setzen", text: "Hülse oder Anker lotrecht ausrichten, Board-Richtung beachten." },
        { title: "Betonieren", text: "Beton einfüllen, verdichten, Ausrichtung noch einmal prüfen." },
        { title: "Aushärten lassen", text: "Erst nach der vom Hersteller genannten Zeit Pfosten und Board montieren." },
      ],
    },
  },

  editorial: {
    title: "Fest oder mobil? So findest du den richtigen Korb",
    intro: "Warum einbetonierte Anlagen besser spielen, wann ein mobiler Korb die klügere Wahl ist und welches Board zu dir passt.",
    sections: [
      {
        id: "bester-basketballkorb",
        h2: "Welcher Basketballkorb ist der beste für den Garten?",
        blocks: [
          { quick: "Wer einen festen Platz hat, nimmt den einbetonierten [Spalding Silver In-Ground](produkt:1). Für Mietgärten und kleines Budget ist der mobile [Lifetime UV100](produkt:2) die beste Wahl, für ambitionierte Spieler der [Spalding The Beast](produkt:3) mit Glasboard." },
          { first: "Ein Basketballkorb im Garten wird in vielen Familien sehr häufig genutzt: Ein paar Würfe nach der Schule, ein schnelles 1-gegen-1 am Abend. Entscheidend für den Spaß ist die Stabilität – ein Korb, der bei jedem Wurf wackelt, frustriert schnell." },
          { p: "Fest einbetonierte Anlagen (In-Ground) stehen in der Regel am stabilsten und brauchen keinen Ballast. Mobile Körbe werden mit Wasser oder Sand beschwert und lassen sich versetzen – praktisch für Mietwohnungen und wechselnde Spielorte. Beim Board gilt: Glas spielt sich am besten, Acryl ist ein guter Kompromiss, Kunststoff (HDPE) ist robust und günstig." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf die Bauform (fest oder mobil), das Boardmaterial und die -größe, die Höhenverstellung bis 3,05 m, einen stabilen Ring und – bei mobilen Körben – ein großes Basisvolumen." },
          {
            table: {
              caption: "Boardmaterialien im Vergleich",
              head: ["Material", "Rebound", "Für wen?"],
              rows: [
                ["**Glas (gehärtet)**", "Wie in der Halle", "Ambitionierte Spieler"],
                ["**Acryl / Polycarbonat**", "Gut", "Familien, Allround"],
                ["**HDPE (Kunststoff)**", "Weicher", "Einsteiger, Kinder"],
              ],
            },
          },
          { h3: "Höhe" },
          { p: "Die Wettkampfhöhe des Rings beträgt 3,05 m. Für Kinder sind verstellbare Anlagen sinnvoll, die bei rund 2,30 m beginnen." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-mobil",
    h2: "Die 5 besten mobilen Basketballkörbe",
    intro: "Für Mietgärten, Einfahrten und alle, die nicht betonieren wollen: fünf mobile Körbe vom Kinderkorb bis zum Glasboard.",
    items: [
      { name: "Spalding 54\" Portable mit Glasboard", for: "Glas zum mittleren Preis", text: "Mobiles System mit 54-Zoll-Glasboard und Kurbelverstellung von 2,3 bis 3 m (Händlerangabe).", asin: "B000Q5R57K", query: "Spalding 54 Portable Basketball System Glass" },
      { name: "HUDORA Basketball-Ständer 305 Competition Pro", for: "Robuster Klassiker", text: "Höhe in sechs Stufen von 230 bis 305 cm, Board 110 × 70 cm, Ballast über drei Säcke mit 93 l (Herstellerangabe).", asin: "B01NCNB7IM", query: "HUDORA Basketball-Ständer 305 Competition Pro" },
      { name: "Spalding NBA Highlight Acrylic Portable", for: "Acryl mobil", text: "Mobile Anlage mit Acrylboard aus der NBA-Linie von Spalding (Händlerangabe).", asin: "B0025T4W3K", query: "Spalding NBA Highlight Acrylic Portable" },
      { name: "CAPRISPORTS Basketballkorb 135–305 cm", for: "Mitwachsend ab Kleinkind", text: "Großer Höhenbereich ab 135 cm, Board 110 × 75 cm, Rollen und Sandsack (Händlerangabe).", asin: "B0CLS2Y772", query: "CAPRISPORTS Basketballkorb 135-305 cm" },
      { name: "Salta Guard Basketballständer 230–305 cm", for: "Mit Dunkring", text: "Mobiler Basketballständer mit federndem Ring und Rollen für Kinder und Erwachsene (Händlerangabe).", asin: "B0CVN2PGFB", query: "Salta Guard Basketballständer" },
    ],
  },

  guide: {
    sections: [
      {
        id: "sicherheit",
        h2: "Sicherheit und Aufbau",
        blocks: [
          { quick: "Feste Anlagen nach Herstelleranleitung einbetonieren, mobile Körbe immer voll mit Sand oder Wasser befüllen. Niemand sollte sich an den Ring hängen, wenn die Anlage dafür nicht ausgelegt ist." },
          { figure: "steps" },
          { callout: { title: "Kippgefahr: Anlage immer sichern", warn: true, text: "Umkippende oder unzureichend verankerte Basketballanlagen können schwere, im Extremfall tödliche Verletzungen verursachen. Mobile Körbe nur mit vollständig befüllter Basis nutzen, regelmäßig auf Risse und Undichtigkeiten prüfen, bei Sturm sichern oder nach Herstellerangabe umlegen und Polster am Pfosten anbringen. Nicht an den Ring hängen oder am Board klettern, sofern der Hersteller das nicht ausdrücklich erlaubt – und Kinder nie unbeaufsichtigt an der Anlage turnen lassen. Fundament, Montage und Höhenverstellung exakt nach Herstelleranleitung; bei Unsicherheit einen Fachbetrieb beauftragen." } },
          { callout: { title: "Nachbarn und Bauamt", warn: true, text: "Das Prellen und Aufschlagen des Balls am Board ist deutlich hörbar. Halte die örtlichen Ruhezeiten (etwa Mittags- und Nachtruhe laut Gemeindesatzung oder Hausordnung) ein und plane den Standort mit Abstand zu Nachbarfenstern. Ob für eine fest einbetonierte Anlage eine Genehmigung nötig ist, hängt von Landesbauordnung, Bebauungsplan und Lage ab – meist ist sie verfahrensfrei, im Zweifel vorab beim Bauamt nachfragen. Auf öffentlichen Gehwegen und Straßen haben Körbe nichts zu suchen." } },
          { facts: [{ value: "3,05 m", label: "Wettkampfhöhe des Rings" }, { value: "45 cm", label: "Ringdurchmesser (innen)" }, { value: "≈ 45–93 l", label: "Ballastvolumen mobiler Körbe" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Basketballkorb ist der beste für den Garten?", a: "Unsere beste Gesamtwahl ist der einbetonierte Spalding Silver In-Ground. Mobil und günstig ist der Lifetime UV100, die Premium-Wahl der Spalding The Beast mit Glasboard." },
    { q: "Fest einbetonieren oder mobil?", a: "Einbetonierte Anlagen sind stabiler und spielen sich besser. Mobile Körbe lassen sich versetzen und sind ideal für Mietgärten." },
    { q: "Wie hoch hängt ein Basketballkorb?", a: "Die offizielle Höhe des Rings beträgt 3,05 m. Für Kinder sind verstellbare Anlagen ab etwa 2,30 m sinnvoll." },
    { q: "Glas oder Acryl?", a: "Glas bietet den besten Rebound und gilt als sehr langlebig, ist aber teuer und schwer. Acryl ist ein guter Kompromiss für Familien." },
    { q: "Womit beschwert man einen mobilen Basketballkorb?", a: "Mit Sand oder Wasser – je nach Herstellerangabe. Sand ist schwerer und friert nicht; Wasser kann im Winter gefrieren und die Basis beschädigen. Die Basis muss in jedem Fall vollständig befüllt sein, sonst droht Kippgefahr." },
  ],

  sources: [
    { label: "Spalding: Basketballanlagen", url: "https://www.spalding.com/" },
    { label: "Deutscher Basketball Bund", url: "https://www.basketball-bund.de/" },
  ],

  related: [
    { slug: "court-fliesen-multisport", text: "Court-Fliesen für die Fläche vor dem Korb." },
    { slug: "multisportfeld-bausatz", text: "Korb, Tore und Bande: das Multisportfeld." },
    { slug: "flutlicht-sportplatz", text: "Flutlicht für Würfe nach Sonnenuntergang." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
