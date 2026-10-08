// Kategorie: Kunstrasen für Sport und Garten
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "kunstrasen",
  area: "private-sportanlagen",
  navLabel: "Kunstrasen",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Kunstrasen für Garten & Bolzplatz: Die 3 besten 2026",
  metaDescription:
    "Kunstrasen für Garten und Bolzplatz: Die 3 besten Rollen 2026 im Vergleich – plus Infill, Nahtband und Unterbau. Und wann sich echter Sportkunstrasen lohnt.",

  eyebrow: "Sportanlagen · Kunstrasen",
  h1: "Der beste Kunstrasen für Garten und Bolzplatz 2026",
  lead:
    "Kunstrasen bleibt grün, braucht keinen Rasenmäher und verträgt Fußball und Toben gut – wenn Belag, Infill und Unterbau stimmen. Wir zeigen die drei besten Rollen und das passende Zubehör.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Floordirekt Premium Kunstrasen (2 × 10 m)**](produkt:1), weil er in großen Bahnen, mehreren Florhöhen und mit Drainage erhältlich ist. Am günstigsten ist der [**Nisorpa Kunstrasen 30 mm (10 × 1 m)**](produkt:2); für Ballspiele eignet sich der dichte [**Sportkunstrasen 30 mm als Rollware**](produkt:3). Echter FIFA-Sportkunstrasen ist bei Amazon nicht erhältlich – dafür nennen wir Fachanbieter.",

  priceTiers: {
    1: { symbol: "€", label: "unter 15 €/m²" },
    2: { symbol: "€€", label: "15–30 €/m²" },
    3: { symbol: "€€€", label: "über 30 €/m²" },
  },

  top3Title: "Unsere Top 3 Kunstrasen",
  top3Intro: "Alle drei sind Rollware für den Außenbereich mit Drainage. Sie unterscheiden sich in Florhöhe, Dichte, Bahnbreite und Preis pro Quadratmeter.",
  comparisonTitle: "Die 3 besten Kunstrasen im Vergleich",

  criteria: [
    { key: "belastung", label: "Belastbarkeit & Spielgefühl", weight: 0.3, description: "Wie gut hält der Rasen Ballspiele, Laufen und Toben aus?" },
    { key: "qualitaet", label: "Material & Drainage", weight: 0.25, description: "Garn, Rücken, UV-Beständigkeit, Wasserdurchlässigkeit, Prüfsiegel." },
    { key: "verlegung", label: "Verlegung", weight: 0.2, description: "Bahnbreite, Zuschnitt, Nahtbild." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis pro Quadratmeter im Verhältnis zur Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Florhöhe, Material, Drainage, Prüfsiegel), Händlerangaben und die Normen für Sportböden (DIN EN 15330-1, DIN 18035-7). Für Garten-Kunstrasen gibt es keine unabhängigen Tests. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Floordirekt Premium Kunstrasen, 200 × 1000 cm",
      brand: "Floordirekt",
      variant: "verschiedene Modelle und Florhöhen",
      visual: { kind: "turf", tone: "forest" },
      priceTier: 2,
      ratings: { belastung: 8.0, qualitaet: 8.5, verlegung: 8.5, preis: 8.0 },
      bestFor: "Garten, Spielfläche, kleiner Bolzplatz",
      verdict:
        "Die vielseitigste Wahl: breite Bahnen mit wenigen Nähten, mehrere Modelle und Florhöhen sowie laut Händler eine Drainage, die Regenwasser schnell ableitet.",
      features: [
        "Bahnen bis 2 × 10 m, verschiedene Modelle und Florhöhen (Händlerangabe)",
        "Drainage: laut Händler bis 60 Liter pro m² und Minute (Modell Windsor)",
        "Mit dem Teppichmesser zuschneidbar, für Balkon, Terrasse und Garten (Händlerangabe)",
      ],
      pros: ["Breite Bahnen, wenige Nähte", "Drainage laut Händler", "Viele Größen"],
      cons: ["Kein zertifizierter Sportbelag", "Ohne Infill weniger standfest bei viel Fußball"],
      specs: { flor: "je nach Modell", groesse: "2 × 10 m (weitere Größen)", ruecken: "mit Drainage", einsatz: "Garten & Spiel", infill: "optional" },
      asin: "B07P7Q774D",
      query: "Floordirekt Premium Kunstrasen 200 x 1000 cm",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Nisorpa Kunstrasen 30 mm, 10 × 1 m",
      brand: "Nisorpa",
      variant: "wasserdurchlässig",
      visual: { kind: "turf", tone: "mint" },
      priceTier: 1,
      ratings: { belastung: 7.0, qualitaet: 7.5, verlegung: 7.5, preis: 9.0 },
      bestFor: "Kleine Flächen, Einstieg",
      verdict:
        "Der günstige Einstieg: laut Händler 30 mm hoher Flor aus UV-stabilisiertem PE/PP-Garn auf einem Gummirücken mit Drainagelöchern – gut für Spielecken und Terrassen.",
      features: [
        "Florhöhe 30 mm, UV-stabilisiertes PE/PP-Garn (Händlerangabe)",
        "Gummirücken mit Drainagelöchern (Händlerangabe)",
        "Bahn 10 × 1 m, zuschneidbar (Händlerangabe)",
      ],
      pros: ["Sehr günstig pro Quadratmeter", "Weicher, hoher Flor", "Einfach zuzuschneiden"],
      cons: ["Nur 1 m breit – viele Nähte bei großen Flächen", "Gemischte Käuferbewertungen"],
      specs: { flor: "30 mm", groesse: "10 × 1 m", ruecken: "Gummi mit Drainage", einsatz: "Garten & Terrasse", infill: "optional" },
      asin: "B09S3HTXQH",
      query: "Nisorpa Kunstrasen 10 x 1 m 30 mm",
    },
    {
      rank: 3,
      label: "Beste Wahl für Ballspiele",
      name: "Sportkunstrasen 30 mm, Rollware (z. B. 100 × 500 cm)",
      brand: "Kunstrasen",
      variant: "hochdicht, schneidbar",
      visual: { kind: "turf", tone: "green" },
      priceTier: 2,
      ratings: { belastung: 8.0, qualitaet: 7.0, verlegung: 7.5, preis: 7.5 },
      bestFor: "Fußball und Toben im Garten",
      verdict:
        "Für Fläche, auf der wirklich gespielt wird: laut Händler hochdichter 30-mm-Flor, als Gartenkunstrasen für Sportaktivitäten beworben und in vielen Längen erhältlich.",
      features: [
        "Florhöhe 30 mm, hohe Dichte (Händlerangabe)",
        "Längen von 100 bis 1000 cm, schneidbar (Händlerangabe)",
        "Wetterfest, für Sport und Garten beworben (Händlerangabe)",
      ],
      pros: ["Dichter Flor für Ballspiele", "Viele Längen", "Günstiger als Vereinsbeläge"],
      cons: ["Wenig bekannter Anbieter, kein Sportzertifikat angegeben", "Angaben nur vom Händler"],
      specs: { flor: "30 mm", groesse: "1 × 1 bis 1 × 10 m", ruecken: "laut Händler", einsatz: "Garten & Ballspiel", infill: "Sand empfohlen" },
      asin: "B0DJVKGW9X",
      query: "Kunstrasen Sportkunstrasen 30 mm Rollrasen",
    },
  ],

  comparison: [
    { key: "flor", label: "Florhöhe" },
    { key: "groesse", label: "Bahnmaß" },
    { key: "ruecken", label: "Rücken" },
    { key: "einsatz", label: "Einsatz" },
    { key: "infill", label: "Infill" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "bester-kunstrasen-garten-2026-bewertung.svg",
      title: "Der beste Kunstrasen für den Garten 2026",
      alt: "Balkendiagramm: Bewertung von Floordirekt Premium, Nisorpa 30 mm und Sportkunstrasen 30 mm",
      caption: "Unsere Bewertung je Kriterium. Floordirekt ist am ausgewogensten, Nisorpa am günstigsten, der Sportkunstrasen nach unserer Einschätzung am besten für Ballspiele geeignet.",
    },
    steps: {
      kind: "steps",
      file: "kunstrasen-verlegen-unterbau-anleitung.svg",
      title: "Kunstrasen richtig verlegen",
      subtitle: "Vom Unterbau bis zum Einsanden",
      alt: "Infografik: Kunstrasen verlegen – Boden ausheben, Schotter, Vlies, Bahnen verlegen, Nahtband, Einsanden",
      caption: "Ein guter Unterbau entscheidet über Ebenheit und Drainage.",
      steps: [
        { title: "Fläche ausheben", text: "Rund 10 cm Mutterboden abtragen, Wurzeln und Steine entfernen." },
        { title: "Tragschicht einbauen", text: "Schotter oder Splitt einbringen, verdichten und mit leichtem Gefälle abziehen." },
        { title: "Unkrautvlies auslegen", text: "Das Vlies verhindert Durchwuchs und stabilisiert die Fläche." },
        { title: "Bahnen verlegen & verkleben", text: "Alle Bahnen in derselben Florrichtung auslegen, Nähte mit Nahtband verbinden." },
        { title: "Einsanden & bürsten", text: "Quarzsand einstreuen und gegen den Strich einbürsten – das hält die Fasern aufrecht." },
      ],
    },
  },

  editorial: {
    title: "Garten-Kunstrasen oder Sportkunstrasen?",
    intro: "Was Kunstrasen im Garten leisten kann, warum Infill so wichtig ist und wann man zum Fachbetrieb gehen sollte.",
    sections: [
      {
        id: "bester-kunstrasen",
        h2: "Welcher Kunstrasen ist der beste?",
        blocks: [
          { quick: "Für die meisten Gärten ist der [Floordirekt Premium](produkt:1) die beste Wahl. Für kleine Flächen reicht der günstige [Nisorpa 30 mm](produkt:2), für intensive Ballspiele der dichte [Sportkunstrasen 30 mm](produkt:3) mit Sand-Infill." },
          { first: "Kunstrasen ist nicht gleich Kunstrasen. Was im Baumarkt als Rollware verkauft wird, ist ein Gartenbelag: weich, grün, pflegeleicht – aber nicht dafür gebaut, jeden Tag mit Stollen bespielt zu werden. Sportkunstrasen für Vereinsplätze ist ein anderes Produkt: Er hat längere, robustere Fasern, wird mit Sand und Granulat verfüllt und nach DIN EN 15330-1 geprüft." },
          { p: "Für den privaten Bolzplatz ist ein guter Garten-Kunstrasen mit Sand-Infill oft ein vernünftiger Kompromiss. Wer eine Fläche für Hockey oder sehr intensive Nutzung plant, sollte sich bei Fachfirmen nach echtem Sportkunstrasen erkundigen – den gibt es bei Amazon nicht." },
          { figure: "scores" },
          { quote: "Der Rasen ist nur so gut wie das, was darunter liegt." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kunstrasenkauf achten?",
        blocks: [
          { quick: "Achte auf Florhöhe (20–40 mm), dichte, UV-stabile Fasern, einen Rücken mit Drainage, möglichst breite Bahnen und Prüfsiegel. Für Ballspiele zusätzlich Sand-Infill einplanen." },
          {
            table: {
              caption: "Kunstrasen-Typen im Vergleich",
              head: ["Typ", "Florhöhe", "Für wen?"],
              rows: [
                ["**Balkon-/Terrassenrasen**", "7–20 mm", "Dekoration, wenig Belastung"],
                ["**Garten-Kunstrasen**", "20–40 mm", "Spielen, Liegen, Haustiere"],
                ["**Sportkunstrasen (Fachhandel)**", "40–60 mm", "Fußball, Hockey, Vereinsnutzung"],
              ],
            },
          },
          { h3: "Infill" },
          { p: "Quarzsand zwischen den Fasern beschwert den Belag, hält die Halme aufrecht und schützt den Rücken vor UV. Sportplätze verwenden teils zusätzlich Gummi- oder Korkgranulat. Die EU hat 2023 eine Beschränkung für absichtlich zugesetztes Mikroplastik beschlossen, die nach einer mehrjährigen Übergangsfrist auch Kunststoffgranulat als Einstreumaterial für Kunstrasenplätze betrifft – Details regelt die EU-Verordnung. Im privaten Garten ist Sand die einfachste und unkritischere Lösung. Beim Einstreuen von trockenem Quarzsand Staub möglichst vermeiden." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-zubehoer",
    h2: "Die 5 wichtigsten Zubehörteile und Anbieter für Sportkunstrasen",
    intro: "Ohne Infill, Nahtband und Vlies hält kein Kunstrasen lange. Für echten Sportkunstrasen helfen Fachanbieter weiter.",
    items: [
      { name: "Kunstrasensand / Quarzsand, 25 kg", for: "Infill", text: "Quarzsand zum Einstreuen in Kunstrasen; beschwert laut Händler den Belag und hält die Fasern aufrecht.", asin: "B0FG36SCRC", query: "Kunstrasensand Quarzsand 25 kg" },
      { name: "BUNDMAN Kunstrasen-Nahtband, 15 cm × 15 m", for: "Nähte verbinden", text: "Selbstklebendes Verbindungsband für die Nähte zwischen zwei Bahnen (Händlerangabe).", asin: "B07H8C62NW", query: "BUNDMAN Kunstrasen Nahtband 15 cm x 15 m" },
      { name: "Unkrautvlies für den Unterbau", for: "Unterbau", text: "Wasserdurchlässiges Vlies unter dem Kunstrasen verhindert Durchwuchs. Wir verlinken auf die Amazon-Suche, weil es viele gleichwertige Angebote gibt.", query: "Unkrautvlies 150 g/m² wasserdurchlässig" },
      { name: "Floordirekt Kunstrasen Windsor 25 mm, nach Maß", for: "Zuschnitt nach Maß", text: "Kunstrasen als Meterware nach Maß mit 25 mm Florhöhe und Drainage (Händlerangabe).", asin: "B07P5MYRYH", query: "Floordirekt Kunstrasen Windsor 25 mm" },
      { name: "Sportkunstrasen nach DIN EN 15330-1", for: "Für Vereinsqualität", text: "Echter Sportkunstrasen mit Infill-System wird von Sportplatzbauern und Fachhändlern verlegt – bei Amazon ist er nicht erhältlich.", where: "Fachhandel / Sportplatzbau" },
    ],
  },

  guide: {
    sections: [
      {
        id: "verlegen-und-pflegen",
        h2: "Verlegen, Pflege und Umwelt",
        blocks: [
          { quick: "Ein tragfähiger, wasserdurchlässiger Unterbau, sauber verklebte Nähte und regelmäßiges Bürsten tragen viel zur Lebensdauer eines Kunstrasens bei." },
          { figure: "steps" },
          {
            list: [
              "**Laub und Schmutz entfernen:** Mit Laubbläser oder Rechen, damit die Drainage frei bleibt.",
              "**Regelmäßig bürsten:** Gegen den Strich, damit die Fasern aufrecht bleiben.",
              "**Infill nachfüllen:** Ausgespielter Sand wird jährlich ergänzt.",
              "**Hitze beachten:** Kunstrasen kann sich im Sommer stark aufheizen – Vorsicht bei Kindern und Haustieren auf nackter Haut oder Pfoten; kurz befeuchten kühlt. Kein Grill, Feuerkorb oder Feuerwerk auf dem Belag.",
            ],
          },
          { callout: { title: "Umwelt & Recht", warn: true, text: "Ob und wo Kunstrasen erlaubt ist, kann je nach Bundesland und Gemeinde unterschiedlich sein: Manche Landesbauordnungen, Naturschutzgesetze, Bebauungspläne oder Gestaltungssatzungen verlangen, dass nicht überbaute Flächen begrünt werden, und schränken Kunstrasen etwa in Vorgärten ein. Kläre das vor größeren Flächen beim Bauamt. Kunstrasen ersetzt Lebensraum für Insekten und Bodenleben, und auch die Kunststofffasern können mit der Zeit Abrieb freisetzen. Für Kunststoffgranulat als Infill gilt die EU-Beschränkung von Mikroplastik mit Übergangsfrist; Sand ist die unkritischere Alternative." } },
          { facts: [{ value: "20–40 mm", label: "Florhöhe für Garten-Kunstrasen" }, { value: "~10 cm", label: "Aushub für den Unterbau" }, { value: "DIN EN 15330-1", label: "Norm für Sportkunstrasen" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Kunstrasen ist der beste für den Garten?", a: "Unsere beste Gesamtwahl ist der Floordirekt Premium Kunstrasen mit breiten Bahnen und Drainage. Günstiger ist der Nisorpa 30 mm, für Ballspiele eignet sich ein dichter Sportkunstrasen mit Sand-Infill." },
    { q: "Kann man auf Garten-Kunstrasen Fußball spielen?", a: "Ja, für Freizeitspiele. Für intensive Nutzung mit Stollenschuhen ist Sportkunstrasen mit Infill-System besser, den Fachfirmen verlegen." },
    { q: "Braucht Kunstrasen Sand?", a: "Für Ballspiele und viel Belastung ja. Quarzsand beschwert den Belag, hält die Fasern aufrecht und schützt den Rücken." },
    { q: "Wie viel kostet ein Kunstrasen-Bolzplatz im Garten?", a: "Als grobe Orientierung kostet Garten-Kunstrasen je nach Qualität etwa 10 bis 30 Euro pro Quadratmeter, dazu kommen Unterbau, Infill und Verlegung. Echter Sportkunstrasen vom Fachbetrieb ist deutlich teurer." },
    { q: "Wie lange hält Kunstrasen?", a: "Je nach Qualität, Pflege und Nutzung mehrere bis viele Jahre. UV-stabile Fasern und regelmäßiges Bürsten verlängern die Lebensdauer." },
  ],

  sources: [
    { label: "DIN EN 15330-1: Sportböden – Kunststoffrasen (Beuth)", url: "https://www.dinmedia.de/" },
    { label: "Europäische Chemikalienagentur: Beschränkung von Mikroplastik", url: "https://echa.europa.eu/de/hot-topics/microplastics" },
  ],

  related: [
    { slug: "fussballtore-gross", text: "Die passenden Tore für den Kunstrasenplatz." },
    { slug: "ballfangnetze-zaeune", text: "Damit der Ball nicht beim Nachbarn landet." },
    { slug: "multisportfeld-bausatz", text: "Vom Rasenstück zum Multisportfeld." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
