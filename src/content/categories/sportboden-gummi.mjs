// Kategorie: Sportboden aus Gummi, EPDM und Fallschutzplatten
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "sportboden-gummi",
  area: "private-sportanlagen",
  navLabel: "Sportboden aus Gummi",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Gummi-Sportboden & Fallschutz: Die 3 besten Platten 2026",
  metaDescription:
    "Gummimatten, EPDM-Beläge und Fallschutzplatten für Fußball, Basketball und Fitness: Die 3 besten Sportböden aus Gummi 2026 – wetterfest und gelenkschonend.",

  eyebrow: "Sportanlagen · Gummiboden",
  h1: "Die 3 besten Sportböden aus Gummi 2026",
  lead:
    "Gummiboden dämpft Sprünge, schont Gelenke, verzeiht Stürze und hält jedes Wetter aus. Wir zeigen die drei besten Platten für Sport- und Fitnessflächen – und die passenden Fallschutzplatten.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Sport-Thieme Sportboden Connect**](produkt:1) aus recyceltem Gummi mit Stecksystem. Das beste Preis-Leistungs-Verhältnis bietet die [**Vivol Bodenschutzmatte 100 × 100 cm, 20 mm**](produkt:2); die Premium-Wahl ist der [**EPDM-Sportboden 100 × 100 cm, 15 mm**](produkt:3) mit farbiger, griffiger Oberfläche.",

  top3Title: "Unsere Top 3 Gummi-Sportböden",
  top3Intro: "Gummigranulat-Platten sind die Basis vieler Sportflächen. Sie unterscheiden sich in Dicke, Oberfläche (SBR oder EPDM), Verbindung und Eignung für draußen.",
  comparisonTitle: "Die 3 besten Gummi-Sportböden im Vergleich",

  criteria: [
    { key: "daempfung", label: "Dämpfung & Sicherheit", weight: 0.3, description: "Stoßdämpfung, Rutschfestigkeit, Fallschutz." },
    { key: "haltbar", label: "Haltbarkeit & Wetter", weight: 0.25, description: "Abrieb, UV- und Frostbeständigkeit, Wasserdurchlässigkeit." },
    { key: "verlegung", label: "Verlegung", weight: 0.2, description: "Format, Gewicht, Verbindungssystem." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis pro Quadratmeter im Verhältnis zur Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Material, Dicke, Shore-Härte, Fallhöhe nach EN 1177), Händlerangaben und die Normen DIN EN 1176/1177 für Spielplatzböden. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Sport-Thieme Sportboden Connect",
      brand: "Sport-Thieme",
      variant: "recycelter Gummi, Stecksystem",
      visual: { kind: "tiles", tone: "forest" },
      priceTier: 2,
      ratings: { daempfung: 8.5, haltbar: 8.5, verlegung: 9.0, preis: 7.5 },
      bestFor: "Fitnessbereiche, Trainingsflächen",
      verdict:
        "Vom Schulsportausstatter: robuste Platten aus recyceltem Gummi mit Stoßdämpfung, die über ein Stecksystem ohne Kleber zu einer festen Fläche verbunden werden.",
      features: [
        "Recycelter Gummi mit Stoßdämpfung (Herstellerangabe)",
        "Stecksystem für eine verschiebefeste Fläche ohne Kleber",
        "Für Fitnessstudio, Trainingsraum und Funktionsbereiche",
      ],
      pros: ["Durchdachtes Verbindungssystem", "Bewährter Fachhändler", "Robust"],
      cons: ["Für draußen Herstellerangaben prüfen", "Teurer als einfache Matten"],
      specs: { material: "Recyceltes Gummi", dicke: "laut Hersteller", format: "Steckplatten", einsatz: "Fitness & Training", draussen: "Herstellerangabe prüfen" },
      asin: "B0F539L8JH",
      query: "Sport-Thieme Sportboden Connect",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Vivol Bodenschutzmatte 100 × 100 cm, 20 mm",
      brand: "Vivol",
      variant: "feine Körnung, schwarz",
      visual: { kind: "tiles", tone: "mint" },
      priceTier: 1,
      ratings: { daempfung: 8.5, haltbar: 8.0, verlegung: 7.5, preis: 9.0 },
      bestFor: "Home-Gym, Hantelbereich",
      verdict:
        "Viel Gummi fürs Geld: 20 mm starke Platten aus recyceltem SBR-Granulat dämpfen auch fallende Hanteln und liegen dank rund 20 kg Gewicht fest.",
      features: [
        "100 × 100 cm, 20 mm, recyceltes SBR-Gummigranulat (Herstellerangabe)",
        "Shore-Härte 60° A ± 5, Gewicht rund 20 kg je Platte",
        "Auch in 15 mm erhältlich, nach DIBt-Grundsätzen geprüft (Herstellerangabe)",
      ],
      pros: ["Sehr gute Dämpfung", "Schwer, verrutscht kaum", "Günstig pro m²"],
      cons: ["Für den Innenbereich ausgewiesen", "Gummigeruch in den ersten Wochen"],
      specs: { material: "SBR-Granulat", dicke: "20 mm", format: "100 × 100 cm", einsatz: "Fitness, Home-Gym", draussen: "innen" },
      asin: "B07JHFR2VH",
      query: "Vivol Bodenschutzmatte 100 x 100 cm 20 mm",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "EPDM-Sportboden grau, 100 × 100 cm, 15 mm",
      brand: "EPDM-Sportboden",
      variant: "farbige EPDM-Oberfläche",
      visual: { kind: "tiles", tone: "green" },
      priceTier: 3,
      ratings: { daempfung: 8.5, haltbar: 9.0, verlegung: 7.5, preis: 7.0 },
      bestFor: "Sichtbare Sportflächen, draußen",
      verdict:
        "Die hochwertigere Oberfläche: Eine Deckschicht aus EPDM ist farbstabiler und griffiger als reines SBR – ideal für Flächen, die gut aussehen sollen.",
      features: [
        "100 × 100 cm, 15 mm, EPDM-Oberfläche (Händlerangabe)",
        "Farbig statt schwarz, UV-beständiger als SBR",
        "Für Sport- und Freizeitflächen",
      ],
      pros: ["Farbstabil und griffig", "Hochwertige Optik", "Witterungsbeständig"],
      cons: ["Teurer", "Wenige Detailangaben des Händlers"],
      specs: { material: "EPDM-Oberfläche", dicke: "15 mm", format: "100 × 100 cm", einsatz: "Sport & Freizeit", draussen: "ja" },
      asin: "B0DRFKQ96Z",
      query: "Sportboden grau 100 x 100 cm 15 mm EPDM",
    },
  ],

  comparison: [
    { key: "material", label: "Material" },
    { key: "dicke", label: "Dicke" },
    { key: "format", label: "Format" },
    { key: "einsatz", label: "Einsatz" },
    { key: "draussen", label: "Draußen" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "bester-sportboden-gummi-2026-bewertung.svg",
      title: "Die 3 besten Sportböden aus Gummi 2026",
      alt: "Balkendiagramm: Bewertung von Sport-Thieme Sportboden Connect, Vivol 20 mm und EPDM-Sportboden",
      caption: "Unsere Bewertung je Kriterium. Sport-Thieme punktet bei der Verlegung, Vivol beim Preis, EPDM bei Haltbarkeit und Optik.",
    },
    steps: {
      kind: "steps",
      file: "fallschutz-gummiboden-dicke-nach-fallhoehe.svg",
      title: "Welche Dicke brauche ich?",
      subtitle: "Gummiboden nach Einsatz und Fallhöhe",
      alt: "Infografik: Dicke von Gummiboden nach Einsatz – Fitness, Hanteln, Spielgeräte bis 1 m, bis 1,5 m, Untergrund",
      caption: "Für Spielgeräte gelten die Fallhöhen-Angaben nach EN 1177 des jeweiligen Herstellers.",
      steps: [
        { title: "Fitnessgeräte: 10–15 mm", text: "Laufband, Rad und Bank stehen sicher, der Boden ist geschützt." },
        { title: "Hantelbereich: 20 mm und mehr", text: "Dämpft fallende Gewichte und Lärm." },
        { title: "Spielgerät bis ca. 1 m: 25–30 mm", text: "Nur mit geprüfter Fallhöhe nach EN 1177 laut Hersteller." },
        { title: "Spielgerät bis ca. 1,5 m: 40–45 mm", text: "Dickere Fallschutzplatten mit Prüfzeugnis wählen." },
        { title: "Untergrund vorbereiten", text: "Eben, tragfähig und – draußen – wasserdurchlässig, z. B. verdichteter Splitt." },
      ],
    },
  },

  editorial: {
    title: "Gummiboden: Dämpfung für Sport, Spiel und Training",
    intro: "Was SBR und EPDM unterscheidet, welche Dicke du brauchst und worauf es beim Fallschutz ankommt.",
    sections: [
      {
        id: "bester-gummiboden",
        h2: "Welcher Sportboden aus Gummi ist der beste?",
        blocks: [
          { quick: "Für Trainingsflächen ist der [Sport-Thieme Sportboden Connect](produkt:1) die beste Wahl. Am günstigsten dämpft die [Vivol-Matte mit 20 mm](produkt:2); für sichtbare Flächen draußen lohnt der [EPDM-Sportboden](produkt:3)." },
          { first: "Gummiboden ist überall dort im Einsatz, wo Menschen springen, fallen oder schwere Gewichte abstellen: im Home-Gym, unter Spielgeräten, auf Laufbahnen und Multisportflächen. Die meisten Platten bestehen aus recyceltem Altreifengranulat (SBR), das mit Polyurethan gebunden wird. Hochwertigere Beläge haben eine Deckschicht aus EPDM, einem farbstabilen Synthesekautschuk." },
          { p: "Für draußen zählen Frost- und UV-Beständigkeit sowie Wasserdurchlässigkeit. Für Spielgeräte ist der Fallschutz entscheidend: Die Norm EN 1177 beschreibt, bis zu welcher Fallhöhe ein Belag schützt – der Hersteller muss das für sein Produkt nachweisen." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind Dicke passend zum Einsatz, Material (SBR oder EPDM), Eignung für draußen, Verbindungssystem und – bei Spielgeräten – eine geprüfte Fallhöhe nach EN 1177." },
          {
            table: {
              caption: "Gummiböden im Überblick",
              head: ["Belag", "Stärken", "Schwächen"],
              rows: [
                ["**SBR-Platten (schwarz)**", "Günstig, robust, gute Dämpfung", "Geruch, nicht farbstabil"],
                ["**EPDM-Oberfläche**", "Farbig, UV-stabil, griffig", "Teurer"],
                ["**Fallschutzplatten 25–45 mm**", "Geprüfte Fallhöhe möglich", "Nur mit Prüfzeugnis sinnvoll"],
                ["**Fugenloser EPDM-Belag (Fachbetrieb)**", "Nahtlos, frei formbar", "Nur vom Fachbetrieb, teuer"],
              ],
            },
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-fallschutz",
    h2: "Die 5 besten Fallschutzplatten für Spielgeräte",
    intro: "Unter Schaukel, Reck und Klettergerüst zählt die geprüfte Fallhöhe. Diese fünf Platten sind für Spiel- und Sportflächen gedacht.",
    items: [
      { name: "Fallschutzmatte 500 × 500 × 45 mm, Made in Germany", for: "Bis ca. 1,5 m Fallhöhe", text: "Gummigranulat-Platte, laut Händler TÜV-geprüft nach DIN EN 1176-1 – Fallhöhe im Prüfzeugnis kontrollieren.", asin: "B00GMGXXP0", query: "Fallschutzmatte 500x500x45 mm Gummigranulat Made in Germany" },
      { name: "Floordirekt Play Protect, 40 mm", for: "Spielplatz & Garten", text: "Fallschutzmatte 50 × 50 cm in 25 oder 40 mm, wetterfest und rutschfest (Händlerangabe).", asin: "B08YZ7WPH9", query: "Floordirekt Play Protect Fallschutzmatte 40 mm" },
      { name: "Fallschutzmatte 500 × 500 × 40 mm, schwarz", for: "Klassisch schwarz", text: "Gummigranulat-Platte mit 40 mm Stärke für Spielgeräte und Sportflächen.", asin: "B00GMJI2KS", query: "Fallschutzmatte 500x500x40 mm Gummigranulat schwarz" },
      { name: "LANDGRID Fallschutzmatten 50 × 50 × 4 cm (24 Stück)", for: "Größere Flächen, grün", text: "24 grüne Platten für rund 6 m² – grün fügt sich besser in den Garten ein.", asin: "B09XVKVLV1", query: "LANDGRID 24x Fallschutzmatten 50x50x4cm Grün" },
      { name: "ATLETICA SolidProtect, 20 mm", for: "Fitness draußen & drinnen", text: "Bodenschutzmatten 50 × 50 cm mit 20 mm für Trainingsflächen.", asin: "B0BD8Z4BMQ", query: "ATLETICA SolidProtect Bodenschutzmatte 20 mm" },
    ],
  },

  guide: {
    sections: [
      {
        id: "verlegen",
        h2: "Gummiboden verlegen: drinnen und draußen",
        blocks: [
          { quick: "Drinnen genügt ein ebener, sauberer Boden. Draußen braucht Gummiboden einen tragfähigen, wasserdurchlässigen Unterbau aus verdichtetem Schotter und Splitt oder eine Betonplatte mit Gefälle." },
          { figure: "steps" },
          { callout: { title: "Sicherheit", warn: true, text: "Unter Spielgeräten nur Beläge mit nachgewiesener Fallhöhe nach EN 1177 verwenden und die Herstellerangaben zur Verlegung genau einhalten. Ab 60 cm freier Fallhöhe ist ein stoßdämpfender Boden nötig." } },
          { facts: [{ value: "EN 1177", label: "Norm für Fallschutzböden" }, { value: "20 mm", label: "Mindeststärke für den Hantelbereich" }, { value: "60 cm", label: "Fallhöhe, ab der Fallschutz nötig ist" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Gummiboden ist der beste für eine Sportfläche?", a: "Unsere beste Gesamtwahl ist der Sport-Thieme Sportboden Connect. Günstiger ist die Vivol-Matte mit 20 mm, hochwertiger der EPDM-Sportboden mit farbiger Oberfläche." },
    { q: "Was ist der Unterschied zwischen SBR und EPDM?", a: "SBR ist recyceltes Reifengranulat – günstig, robust, schwarz. EPDM ist ein Synthesekautschuk, der farbstabiler und UV-beständiger ist und meist als Deckschicht verwendet wird." },
    { q: "Wie dick muss Fallschutz unter einer Schaukel sein?", a: "Das hängt von der Fallhöhe des Geräts ab. Maßgeblich ist die vom Hersteller nach EN 1177 geprüfte Fallhöhe der Platte – häufig sind es 40 bis 45 mm für Fallhöhen bis etwa 1,5 m." },
    { q: "Kann Gummiboden draußen liegen?", a: "Ja, wenn er dafür ausgewiesen ist und auf einem wasserdurchlässigen Unterbau liegt. EPDM-Oberflächen halten UV-Strahlung besser aus als reines SBR." },
    { q: "Riecht Gummiboden?", a: "Recyceltes Gummigranulat riecht anfangs oft. Der Geruch lässt meist nach einigen Wochen nach, draußen schneller als drinnen." },
  ],

  sources: [
    { label: "DIN EN 1177: Stoßdämpfende Spielplatzböden", url: "https://www.dinmedia.de/" },
    { label: "Sport-Thieme: Sportböden", url: "https://www.sport-thieme.de/" },
  ],

  related: [
    { slug: "court-fliesen-multisport", text: "Klickfliesen für Basketball- und Multicourts." },
    { slug: "basketballkorb-fest", text: "Der Korb für die neue Fläche." },
    { slug: "kunstrasen", text: "Kunstrasen für Garten und Bolzplatz." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
