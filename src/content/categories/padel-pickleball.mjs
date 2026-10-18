// Kategorie: Padel und Pickleball im Garten
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "padel-pickleball",
  area: "private-sportanlagen",
  navLabel: "Padel & Pickleball",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Pickleball & Padel im Garten: Netze, Linien und Courts 2026",
  metaDescription:
    "Pickleball-Netze, Linienmarkierungen und Padel-Courts für den eigenen Garten: Die 3 besten Produkte 2026 – plus Kosten, Platzbedarf und Genehmigung für Padel.",

  eyebrow: "Sportanlagen · Padel & Pickleball",
  h1: "Pickleball und Padel im Garten: die 3 besten Produkte 2026",
  lead:
    "Pickleball und Padel sind die Trendsportarten der Stunde. Pickleball lässt sich mit Netz und Linien in jeder Einfahrt spielen, ein Padel-Court ist ein Bauprojekt. Wir zeigen die drei besten Produkte für den Start – und was ein eigener Padel-Court kostet.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Wilson Pickleball-Netzsystem (6,7 m)**](produkt:1) mit Stahlrahmen und Tragetasche. Das beste Preis-Leistungs-Verhältnis bietet das [**Lineslife Pickleball-Netzsystem**](produkt:2); für die Linien ist das [**CORTABLE Pickleball-Court-Linienset**](produkt:3) die praktischste Lösung. Padel-Courts gibt es nicht bei Amazon – sie kommen vom Fachbetrieb.",

  top3Title: "Unsere Top 3 für Pickleball im Garten",
  top3Intro: "Ein Netz in Turniermaß, eine günstige Alternative und ein Linienset, das in Minuten aus jeder Fläche einen Court macht.",
  comparisonTitle: "Die 3 besten Pickleball-Produkte im Vergleich",

  criteria: [
    { key: "spiel", label: "Spieltauglichkeit", weight: 0.35, description: "Regelmaße, Netzspannung, Linien." },
    { key: "qualitaet", label: "Qualität", weight: 0.25, description: "Rahmen, Netz, Material, Wetterfestigkeit." },
    { key: "mobil", label: "Aufbau & Transport", weight: 0.15, description: "Gewicht, Tasche, Aufbauzeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Material, Gewicht), Händlerangaben und die Regeln von USA Pickleball sowie des Padel-Weltverbands FIP zu Spielfeldmaßen. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Wilson Pickleball-Netzsystem, 6,7 m × 90 cm",
      brand: "Wilson",
      variant: "Stahlrahmen, gebogene Füße",
      visual: { kind: "net", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 9.0, qualitaet: 8.5, mobil: 8.0, preis: 7.5 },
      bestFor: "Einfahrt, Garten, Verein",
      verdict:
        "Das solide Markennetz: laut Hersteller Stahlrahmen in Regelbreite, gebogene Füße gegen Stolperfallen und eine Tragetasche für den Transport.",
      features: [
        "6,7 m breit, 0,9 m hoch, Stahlrahmen (Herstellerangabe)",
        "Gebogene Beine gegen Stolperfallen (Herstellerangabe)",
        "Tragetasche inklusive (Herstellerangabe)",
      ],
      pros: ["Regelbreite", "Stabiler Stahlrahmen", "Bekannte Marke"],
      cons: ["Teurer als Netze wenig bekannter Anbieter", "Mittelhöhe nicht ausgewiesen"],
      specs: { breite: "6,7 m", hoehe: "0,9 m", rahmen: "Stahl", tasche: "ja", art: "Netzsystem" },
      asin: "B0172E3KP8",
      query: "Wilson Pickleball Net System",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Lineslife tragbares Pickleball-Netzsystem, 6,7 m",
      brand: "Lineslife",
      variant: "Metallrahmen, PE-Netz",
      visual: { kind: "net", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 8.0, qualitaet: 7.5, mobil: 8.5, preis: 9.0 },
      bestFor: "Einsteiger, Familien",
      verdict:
        "Der günstige Einstieg: laut Händler 6,7 m Netz mit Metallrahmen und PE-Netz, rund 7,8 kg leicht und schnell aufgebaut.",
      features: [
        "6,7 m Netz, Metallrahmen, PE-Netz (Händlerangabe)",
        "Gewicht rund 7,8 kg, inklusive Tragetasche (Händlerangabe)",
        "Für Hinterhof und Einfahrt beworben",
      ],
      pros: ["Günstig", "Leicht", "Schnell aufgebaut"],
      cons: ["Wenig bekannter Hersteller", "Angaben zur Netzqualität nur vom Händler"],
      specs: { breite: "6,7 m", hoehe: "laut Händler", rahmen: "Metall", tasche: "ja", art: "Netzsystem" },
      asin: "B0B4ZN2QXW",
      query: "Lineslife tragbares Pickleball-Netzsystem 6,7 m",
    },
    {
      rank: 3,
      label: "Beste Linienmarkierung",
      name: "CORTABLE temporäre Pickleball-Court-Linien",
      brand: "CORTABLE",
      variant: "ohne Ausmessen",
      visual: { kind: "tiles", tone: "green" },
      priceTier: 1,
      ratings: { spiel: 8.5, qualitaet: 7.5, mobil: 8.5, preis: 7.5 },
      bestFor: "Wechselnde Spielorte",
      verdict:
        "Aus jeder ebenen Fläche ein Court: Das einteilige Gurtsystem wird laut Hersteller ausgelegt und gespannt – ohne Messen, ohne Kreide, wiederverwendbar.",
      features: [
        "Einteiliges Gurtsystem für ein komplettes Pickleball-Feld (Herstellerangabe)",
        "Kein Ausmessen nötig, wiederverwendbar (Herstellerangabe)",
        "Netz nicht im Lieferumfang",
      ],
      pros: ["Kein Ausmessen", "Schnell ausgelegt", "Wiederverwendbar"],
      cons: ["Gemischte Bewertungen", "Teurer als Eckmarker"],
      specs: { breite: "Feld 6,10 × 13,41 m", hoehe: "–", rahmen: "–", tasche: "ja", art: "Linienset" },
      asin: "B0BRSGBB2K",
      query: "CORTABLE Temporäre Pickleball Court Lines",
    },
  ],

  comparison: [
    { key: "art", label: "Art" },
    { key: "breite", label: "Breite / Feld" },
    { key: "hoehe", label: "Höhe" },
    { key: "rahmen", label: "Rahmen" },
    { key: "tasche", label: "Tasche" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "pickleball-garten-netz-linien-2026-bewertung.svg",
      title: "Pickleball im Garten: die 3 besten Produkte 2026",
      alt: "Balkendiagramm: Bewertung von Wilson Pickleball-Netz, Lineslife-Netz und CORTABLE-Linienset",
      caption: "Unsere Bewertung je Kriterium. Wilson ist am solidesten, Lineslife am günstigsten, CORTABLE am praktischsten für Linien.",
    },
    steps: {
      kind: "steps",
      file: "padel-court-garten-planen.svg",
      title: "Padel-Court im Garten planen",
      subtitle: "Vom Platzbedarf bis zur Genehmigung",
      alt: "Infografik: Padel-Court planen – Fläche, Bauamt, Fundament, Court, Nachbarn",
      caption: "Ein Padel-Court ist ein Bauprojekt – frühzeitig planen.",
      steps: [
        { title: "Fläche prüfen", text: "Spielfeld 10 × 20 m, mit Umlauf rund 11 × 21 m – über 230 m²." },
        { title: "Bauamt fragen", text: "Glaswände bis 4 m Höhe und Flutlicht sind oft genehmigungspflichtig." },
        { title: "Fundament planen", text: "Betonplatte mit Gefälle und Drainage als Basis." },
        { title: "Anbieter vergleichen", text: "Mehrere Angebote für Court, Kunstrasen und Montage einholen." },
        { title: "Nachbarn einbeziehen", text: "Padel ist laut – das Ploppen trägt weit. Früh das Gespräch suchen." },
      ],
    },
  },

  editorial: {
    title: "Pickleball sofort, Padel mit Planung",
    intro: "Warum Pickleball in jede Einfahrt passt, was ein Padel-Court wirklich bedeutet und wo du anfangen solltest.",
    sections: [
      {
        id: "pickleball-padel-garten",
        h2: "Was brauche ich für Pickleball oder Padel im Garten?",
        blocks: [
          { quick: "Für Pickleball genügen ein Netz wie das [Wilson-Netzsystem](produkt:1) oder das günstige [Lineslife-Netz](produkt:2), Linien wie das [CORTABLE-Set](produkt:3), Schläger und Bälle. Für Padel braucht es einen fest gebauten Court vom Fachbetrieb." },
          { first: "Pickleball ist eine Mischung aus Tennis, Badminton und Tischtennis: gespielt mit Paddeln und einem gelochten Plastikball auf einem Feld so groß wie ein Badmintonfeld. Das macht es ideal für Einfahrten, Hofflächen und Garagenvorplätze – ein mobiles Netz und Linien reichen." },
          { p: "Padel ist anspruchsvoller: Gespielt wird auf einem 10 × 20 m großen Court mit Glas- und Gitterwänden, an denen der Ball abprallt. Ein privater Padel-Court ist ein Bauprojekt mit Fundament, Kunstrasen und Wänden. Anbieterseiten nennen dafür als grobe Orientierung Preise von rund 20.000 bis über 40.000 Euro, je nach Ausstattung und Untergrund." },
          { figure: "scores" },
          { quote: "Pickleball passt in jede Einfahrt – Padel braucht ein Fundament." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Beim Pickleball-Netz auf Regelbreite (6,7 m), Netzhöhe (91,4 cm am Rand, 86,4 cm in der Mitte) und einen stabilen Rahmen achten. Beim Padel-Court auf Fundament, Glasqualität, Kunstrasen und Genehmigung." },
          {
            table: {
              caption: "Pickleball und Padel im Vergleich",
              head: ["", "Pickleball", "Padel"],
              rows: [
                ["**Spielfeld**", "6,10 × 13,41 m", "10 × 20 m mit Wänden"],
                ["**Ausrüstung im Garten**", "Mobiles Netz, Linien", "Fester Court vom Fachbetrieb"],
                ["**Kosten (grob)**", "überschaubar: mobiles Netz und Linien", "laut Anbietern rund 20.000–40.000 € und mehr"],
                ["**Genehmigung**", "für mobile Netze in der Regel nicht nötig", "häufig nötig – Bauamt fragen"],
              ],
            },
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-padel-und-zubehoer",
    h2: "Die 5 besten Ergänzungen: Netze, Linien, Schläger und Padel-Anbieter",
    intro: "Weitere Netze und Linien für Pickleball, ein Padel-Starterset – und wo es den Court gibt.",
    items: [
      { name: "Rally Deluxe Pickleball-Netzsystem", for: "Netz mit Regelmaßen", text: "Ovale Metallpfosten, 91,4 cm Randhöhe und 86,4 cm Mittelhöhe nach US-Regelmaß (Herstellerangabe).", asin: "B08M2P59TD", query: "Rally Deluxe Portable Pickleball Net System" },
      { name: "Eco Walker Court-Markierungsset", for: "Flache Marker", text: "Linien- und Eckmarker für Pickleball, Tennis und Badminton, laut Hersteller rutschfest.", asin: "B08HRPBQ98", query: "Eco Walker Court Marker Set" },
      { name: "PiBa Sports Pickleball-Linien zum Kleben", for: "Linien für glatte Böden", text: "Laut Händler selbstklebende, wieder entfernbare Linienbänder in Gelb für das Pickleballfeld.", asin: "B0D14LM2KH", query: "PiBa Sports Pickleball Court Linien" },
      { name: "Padel-Starterset: 2 Schläger und 3 Dosen Bälle", for: "Padel-Einstieg", text: "Zwei Padelschläger und Bälle für den Start – zum Beispiel auf einem gemieteten Court.", asin: "B0DXVWYQT9", query: "Padel Tennis Starter Set 2 Padelschläger 3 Dosen Bälle" },
      { name: "Padel-Courts vom Fachbetrieb", for: "Eigener Padel-Court", text: "Courts werden von spezialisierten Herstellern geplant und montiert; Ansprechpartner findest du über Padel-Fachhändler und den Deutschen Padel Verband.", where: "Fachbetrieb" },
    ],
  },

  guide: {
    sections: [
      {
        id: "padel-planung",
        h2: "Padel-Court im Garten: Platz, Kosten und Genehmigung",
        blocks: [
          { quick: "Ein Padel-Court braucht mit Umlauf rund 11 × 21 m, ein tragfähiges Fundament und oft eine Baugenehmigung. Die Kosten liegen je nach Ausstattung grob zwischen 20.000 und über 40.000 Euro." },
          { p: "Glaswände bis 4 m Höhe, ein Stahlgerüst und eventuell Flutlicht machen den Padel-Court zu einer baulichen Anlage. Ob eine Genehmigung nötig ist, entscheiden Landesbauordnung und Bebauungsplan. Hinzu kommt der Lärm: Das Ploppen der Bälle und der Aufprall an den Wänden tragen weit – in dicht bebauten Wohngebieten kann das zu Konflikten führen. Auch Pickleball ist durch den harten Plastikball deutlich hörbar." },
          { figure: "steps" },
          { callout: { title: "Vor dem Bau klären", warn: true, text: "Ob ein Padel-Court genehmigungspflichtig ist, hängt von Landesbauordnung, Bebauungsplan, Höhe und Abstand zur Grundstücksgrenze ab – kläre das vor der Bestellung beim Bauamt. Fundament, Stahlgerüst und Glaswände sollten von einem Fachbetrieb nach dessen Statik montiert werden, Flutlicht und Stromanschluss von einer Elektrofachkraft. Achte auf Blendung von Nachbarn und Straße und halte die Ruhezeiten der Gemeinde ein; für den Spielbetrieb können je nach Lage weitere Lärmschutzvorgaben gelten." } },
          { facts: [{ value: "10 × 20 m", label: "Padel-Spielfeld" }, { value: "6,10 × 13,41 m", label: "Pickleball-Spielfeld" }, { value: "4 m", label: "Höhe der Padel-Wände" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Was brauche ich für Pickleball im Garten?", a: "Ein mobiles Netz in Regelbreite, Linienmarkierungen, Paddel und Bälle. Unsere beste Gesamtwahl beim Netz ist das Wilson Pickleball-Netzsystem." },
    { q: "Wie groß ist ein Pickleballfeld?", a: "Das Spielfeld misst 6,10 × 13,41 m (20 × 44 Fuß) – so groß wie ein Doppel-Badmintonfeld." },
    { q: "Was kostet ein Padel-Court im Garten?", a: "Anbieter nennen als grobe Orientierung 20.000 bis über 40.000 Euro, abhängig von Ausstattung, Untergrund und Montage. Dazu kommen Fundament und eventuell Flutlicht." },
    { q: "Brauche ich für einen Padel-Court eine Baugenehmigung?", a: "Häufig ja, weil Wände bis 4 m Höhe und ein Stahlgerüst in der Regel als bauliche Anlage gelten. Die Regeln unterscheiden sich je nach Bundesland und Gemeinde – frag vorab beim Bauamt nach." },
    { q: "Kann man Padel-Courts bei Amazon kaufen?", a: "Nein. Padel-Courts werden von Fachbetrieben geplant und montiert. Bei Amazon gibt es Schläger, Bälle und Zubehör." },
  ],

  sources: [
    { label: "USA Pickleball: Court-Maße", url: "https://usapickleball.org/" },
    { label: "International Padel Federation (FIP): Regeln", url: "https://www.padelfip.com/" },
    { label: "My Padel Life", url: "https://mypadellife.com/" },
  ],

  related: [
    { area: "pickleball", text: "Pickleball-Schläger, Bälle und Netze im Überblick." },
    { slug: "court-fliesen-multisport", text: "Court-Fliesen für die Pickleball-Fläche." },
    { slug: "ballmaschinen", text: "Ballmaschinen – manche eignen sich auch für Padel." },
    { slug: "flutlicht-sportplatz", text: "Flutlicht für Abendspiele." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
