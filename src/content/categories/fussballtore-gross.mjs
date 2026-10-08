// Kategorie: Große Fußballtore aus Aluminium
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "fussballtore-gross",
  area: "private-sportanlagen",
  navLabel: "Große Fußballtore",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Große Fußballtore aus Alu: Die 3 besten 2026 (5×2 bis 7,32 m)",
  metaDescription:
    "Aluminium-Fußballtore von 5 × 2 m bis 7,32 × 2,44 m mit Netz: Die 3 besten großen Fußballtore 2026 – plus Hinweise zur Kippsicherung nach DIN EN 748.",

  eyebrow: "Sportanlagen · Fußballtore",
  h1: "Die 3 besten großen Fußballtore 2026",
  lead:
    "Vom Jugendtor bis zur Vereinsgröße: Große Aluminiumtore machen aus dem Garten einen echten Fußballplatz. Wir zeigen die drei besten – und erklären, warum Kippsicherheit nicht verhandelbar ist.",
  answer:
    "Unsere beste Gesamtwahl ist das [**GLA-WEL Jugendtor 5 × 2 m, vollverschweißt**](produkt:1): Ovalprofil, laut Hersteller kippsicher nach DIN EN 748 mit passender Sicherung. Das beste Preis-Leistungs-Verhältnis bieten die [**FORZA Alu60 Fußballtore**](produkt:2) in zehn Größen; für Vereinsmaß ist das [**GLA-WEL Großfeldtor 7,32 × 2,44 m**](produkt:3) mit Stahlgewichten im Bodenrahmen die Premium-Wahl. Jedes Tor muss vor dem ersten Spiel gegen Umkippen gesichert werden.",

  priceTiers: {
    1: { symbol: "€", label: "bis 1.000 €" },
    2: { symbol: "€€", label: "1.000–2.000 €" },
    3: { symbol: "€€€", label: "über 2.000 €" },
  },

  top3Title: "Unsere Top 3 großen Fußballtore",
  top3Intro: "Alle drei sind aus Aluminium, wetterfest und mit Netz. Die Unterschiede liegen in Größe, Profil, Bauweise und der Art, wie sie gegen Umkippen gesichert werden.",
  comparisonTitle: "Die 3 besten großen Fußballtore im Vergleich",

  criteria: [
    { key: "sicherheit", label: "Kippsicherheit", weight: 0.35, description: "Normkonformität (DIN EN 748), Ballast, Verankerung." },
    { key: "qualitaet", label: "Qualität & Bauweise", weight: 0.25, description: "Profil, Verschweißung, Netz, Wetterfestigkeit." },
    { key: "handling", label: "Transport & Aufbau", weight: 0.15, description: "Mobilität, Montage, Netzbefestigung." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Größe und Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Profile, Normen, Ballast), Händlerangaben und die Sicherheitsnorm DIN EN 748 für Fußballtore sowie Hinweise der Unfallversicherungsträger zur Kippsicherheit. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "GLA-WEL Fußballtor, mobiles Jugendtor 5 × 2 m, vollverschweißt",
      brand: "GLA-WEL",
      variant: "Ovalprofil, inkl. Netz",
      visual: { kind: "goal", tone: "forest" },
      priceTier: 2,
      ratings: { sicherheit: 9.0, qualitaet: 9.0, handling: 7.5, preis: 7.5 },
      bestFor: "Großer Garten, Jugendfußball",
      verdict:
        "Ein echtes Vereinstor für den Garten: laut Hersteller vollverschweißtes Aluminium-Ovalprofil, wählbare Tortiefe und kippsicher nach DIN EN 748 in Verbindung mit passender Verankerung oder Zusatzgewicht.",
      features: [
        "5 × 2 m, vollverschweißtes Aluminium-Ovalprofil (Herstellerangabe)",
        "Tortiefe 1,00, 1,50 oder 2,00 m wählbar (Herstellerangabe)",
        "Kippsicher nach DIN EN 748 mit passender Sicherung, inklusive Tornetz (Herstellerangabe)",
      ],
      pros: ["Vereinsqualität", "Laut Hersteller kippsicher nach EN 748", "Stabile, vollverschweißte Bauweise"],
      cons: ["Teuer", "Braucht Platz und Verankerung"],
      specs: { masse: "5 × 2 m", profil: "Alu-Oval, vollverschweißt", sicherung: "Anker/Gewicht nach EN 748", netz: "ja", einsatz: "Jugend" },
      asin: "B07DF5QRLV",
      query: "GLA-WEL Fußballtor mobiles Jugendtor 5 x 2 m vollverschweißt",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "FORZA Alu60 Aluminium-Fußballtore",
      brand: "FORZA",
      variant: "10 Größen bis 7,3 × 2,4 m",
      visual: { kind: "goal", tone: "mint" },
      priceTier: 1,
      ratings: { sicherheit: 7.5, qualitaet: 8.0, handling: 8.5, preis: 9.0 },
      bestFor: "Garten, Training, flexible Größen",
      verdict:
        "Viel Tor fürs Geld: laut Hersteller 60-mm-Aluminiumprofil, 3-mm-Netz und Schnellverschluss-Querlatte – von 1,8 × 1,2 m bis zur Vereinsgröße 7,3 × 2,4 m.",
      features: [
        "60-mm-Aluminium, 3-mm-Netz, Netzclips (Herstellerangabe)",
        "Zehn Größen, darunter 4,9 × 2,1 m, 5,6 × 2 m und 7,3 × 2,4 m (Herstellerangabe)",
        "Freistehend; Verankerung nach Herstellerangabe zwingend einplanen",
      ],
      pros: ["Deutlich günstiger als Vereinstore", "Viele Größen", "Leichter Aufbau"],
      cons: ["Leichteres Profil", "Exakt 5 × 2 m nicht im Programm"],
      specs: { masse: "1,8 × 1,2 bis 7,3 × 2,4 m", profil: "Alu 60 mm", sicherung: "Bodenanker", netz: "ja", einsatz: "Training & Garten" },
      asin: "B09XX6VVHB",
      query: "FORZA Alu60 Fußballtore",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "GLA-WEL Transportables Fußballtor 7,32 × 2,44 m, kippsicher",
      brand: "GLA-WEL",
      variant: "Großfeld, vollverschweißt",
      visual: { kind: "goal", tone: "green" },
      priceTier: 3,
      ratings: { sicherheit: 9.5, qualitaet: 9.0, handling: 6.5, preis: 6.5 },
      bestFor: "Vereinsmaß, große Grundstücke",
      verdict:
        "Das Großfeldtor in Vereinsmaß: Stahlgewichte im Bodenrahmen machen es laut Hersteller auch ohne Bodenanker kippsicher nach DIN EN 748 – TÜV-geprüft.",
      features: [
        "7,32 × 2,44 m, vollverschweißt (Herstellerangabe)",
        "Stahlgewichte im Bodenrahmen, kippsicher nach DIN EN 748, TÜV-geprüft (Herstellerangabe)",
        "Inklusive Tornetz, Tortiefe 1,50 m (Herstellerangabe)",
      ],
      pros: ["Laut Hersteller kippsicher ohne Anker", "Echte Vereinsgröße", "TÜV-Prüfung laut Hersteller"],
      cons: ["Sehr teuer", "Schwer, nur mit mehreren Personen versetzbar"],
      specs: { masse: "7,32 × 2,44 m", profil: "Alu, vollverschweißt", sicherung: "Stahlgewichte im Rahmen", netz: "ja", einsatz: "Großfeld" },
      asin: "B07DF7FNT1",
      query: "GLA-WEL Transportables Fußballtor Kippsicher 7,32 x 2,44",
    },
  ],

  comparison: [
    { key: "masse", label: "Maße" },
    { key: "profil", label: "Profil" },
    { key: "sicherung", label: "Kippsicherung" },
    { key: "netz", label: "Netz" },
    { key: "einsatz", label: "Einsatz" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-grosse-fussballtore-2026-bewertung.svg",
      title: "Die 3 besten großen Fußballtore 2026",
      alt: "Balkendiagramm: Bewertung von GLA-WEL Jugendtor, FORZA Alu60 und GLA-WEL Großfeldtor",
      caption: "Unsere Bewertung je Kriterium. Die Kippsicherheit hat das höchste Gewicht.",
    },
    steps: {
      kind: "steps",
      file: "fussballtor-kippsicher-aufstellen.svg",
      title: "Fußballtor kippsicher aufstellen",
      subtitle: "Fünf Schritte, die Leben retten können",
      alt: "Infografik: Fußballtor kippsicher aufstellen – Untergrund, Verankerung, Gewicht, Kontrolle, Abbau",
      caption: "Nach DIN EN 748 und Hinweisen der Unfallversicherungsträger.",
      steps: [
        { title: "Ebenen Platz wählen", text: "Das Tor muss mit dem ganzen Bodenrahmen aufliegen." },
        { title: "Verankern", text: "Bodenanker, Erdnägel oder Zusatzgewichte nach Herstellerangabe – vor dem ersten Spiel." },
        { title: "Sicherung prüfen", text: "Alle Anker und Gewichte kontrollieren; Kippsicherheit nach Herstelleranleitung prüfen." },
        { title: "Nie an die Latte hängen", text: "Kindern erklären: Klettern und Schaukeln am Tor ist tabu." },
        { title: "Regelmäßig prüfen", text: "Anker und Schrauben nach Sturm und vor jeder Saison kontrollieren." },
      ],
    },
  },

  editorial: {
    title: "Große Tore, große Verantwortung",
    intro: "Welche Größe passt in den Garten, was Aluminium besser kann als Stahl – und warum die Kippsicherheit an erster Stelle steht.",
    sections: [
      {
        id: "bestes-grosses-fussballtor",
        h2: "Welches große Fußballtor ist das beste?",
        blocks: [
          { quick: "Für die meisten großen Gärten ist das [GLA-WEL Jugendtor 5 × 2 m](produkt:1) die beste Wahl. Günstiger und flexibler sind die [FORZA Alu60](produkt:2), für Vereinsmaß das [GLA-WEL Großfeldtor](produkt:3)." },
          { first: "Ein großes Tor verändert den Garten: Statt Mini-Toren gibt es echte Torschüsse, Torwarttraining und Spiele mit vielen Kindern. Das Jugendtor mit 5 × 2 m ist das typische Maß im Jugendfußball, das Großfeldtor mit 7,32 × 2,44 m das Maß der Profis." },
          { p: "Mit der Größe steigt das Risiko: Ein großes Aluminiumtor kann 50 Kilogramm und mehr wiegen. Kippt es nach vorn – etwa, weil sich jemand an die Latte hängt –, kann das schwere oder sogar tödliche Verletzungen verursachen. Die Norm DIN EN 748 stellt deshalb unter anderem Anforderungen an die Standsicherheit von Fußballtoren; im Alltag heißt das: Jedes Tor muss gegen Umkippen gesichert sein." },
          { figure: "scores" },
          { callout: { title: "Sicherheit zuerst", warn: true, text: "Ein Fußballtor darf nie unverankert aufgestellt werden. Unfallversicherungsträger weisen immer wieder auf schwere und tödliche Unfälle mit umkippenden, ungesicherten Toren hin. Auch kleinere Tore immer sichern, Kinder nie an Latte oder Netz klettern lassen und nicht genutzte mobile Tore gesichert abstellen oder umlegen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind die passende Größe, ein stabiles Aluminiumprofil, eine Kippsicherung nach DIN EN 748, ein witterungsbeständiges Netz und genug Platz hinter dem Tor." },
          {
            table: {
              caption: "Torgrößen im Überblick",
              head: ["Größe", "Einsatz", "Platzbedarf"],
              rows: [
                ["**3 × 2 m**", "Kleinfeld, Kinder", "kleiner Garten"],
                ["**5 × 2 m**", "Jugendfußball", "großer Garten"],
                ["**7,32 × 2,44 m**", "Großfeld, Erwachsene", "sehr großes Grundstück"],
              ],
            },
          },
          { h3: "Vollverschweißt oder verschraubt?" },
          { p: "Vollverschweißte Tore sind in der Regel steifer und langlebiger, verschraubte lassen sich leichter zerlegen und transportieren. Für den Dauerbetrieb im Garten sind vollverschweißte Tore nach unserer Einschätzung die robustere Wahl." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen und Zubehör",
    intro: "Weitere Tore in Vereinsmaß, Ersatznetze und Bodenanker.",
    items: [
      { name: "W&H mobiles Großfeldtor 7,32 × 2,44 m", for: "Großfeld, vollverschweißt", text: "Laut Händler Ovalprofil 120/100 mm, Tortiefe 2,00 m und 8 Jahre Garantie.", asin: "B079ZVZ45Q", query: "W&H Fußballtor mobiles Großfeldtor 7,32 x 2,44" },
      { name: "W&H mobiles Jugendtor 5 × 2 m mit Stahlauslage", for: "Jugendtor mit Stahlauslage", text: "Jugendtor mit Stahlauslage, die laut Händler die Standfestigkeit erhöht, inklusive Netz. Zusätzliche Sicherung nach Herstellerangabe.", asin: "B079ZV9TY9", query: "W&H Fußballtor mobiles Jugendtor 5 x 2 m Stahlauslage" },
      { name: "Haspo transportables Fußballtor 7,32 × 2,44 m", for: "Großfeld, teilverschweißt", text: "Transportables Aluminium-Großfeldtor in Teilverschweißung (Händlerangabe).", asin: "B013HS5LIC", query: "Haspo Transportables Fußballtor 7,32 x 2,44" },
      { name: "Sport-Thieme Jugendfußball-Tornetz 515 × 205 cm", for: "Ersatznetz", text: "Knotenloses Netz für 5 × 2 m-Tore nach DIN EN 748, 4 mm PP, 12 cm Maschen (Herstellerangabe).", asin: "B0793M8FTH", query: "Sport-Thieme Jugendfußballtornetz 515 x 205 cm" },
      { name: "Naviable Bodenanker mit Spanngurten", for: "Verankerung", text: "Vier Schraubanker aus Stahl mit XXL-Spanngurten, beworben für Fußballtore und Trampoline (Händlerangabe). Ob sie für dein Tor genügen, entscheidet die Herstelleranleitung des Tors.", asin: "B0DYG1Z3LD", query: "Naviable Bodenanker Trampolin Spanngurte" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, verankern, prüfen",
        blocks: [
          { quick: "Stelle das Tor eben auf, verankere es nach Herstellerangabe, prüfe die Sicherung vor jeder Nutzung und erkläre allen Kindern, dass an der Latte nicht geturnt oder geklettert wird." },
          { figure: "steps" },
          { callout: { title: "Tore immer gegen Umkippen sichern", warn: true, text: "Ungesicherte Tore sind lebensgefährlich. Verankerung oder Ballast nach Herstelleranleitung sind kein optionales Zubehör, sondern Pflicht – auch bei kurzem Spiel, auch auf Rasen. Prüfe Anker nach Sturm, Starkregen oder Frost erneut, denn aufgeweichter Boden kann den Halt verringern. Bei Zweifeln an der Standsicherheit das Tor nicht benutzen." } },
          { callout: { title: "Rücksicht auf Nachbarn", text: "Torschüsse ins Netz und an den Pfosten sind laut. Halte die örtlichen Ruhezeiten (laut Gemeindesatzung) ein und stelle das Tor möglichst so auf, dass Bälle nicht Richtung Nachbargrundstück oder Straße fliegen – ein Ballfangnetz dahinter hilft." } },
          { facts: [{ value: "DIN EN 748", label: "Norm für Fußballtore" }, { value: "5 × 2 m", label: "Jugendtor" }, { value: "7,32 × 2,44 m", label: "Großfeldtor" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches große Fußballtor ist das beste für den Garten?", a: "Unsere beste Gesamtwahl ist das GLA-WEL Jugendtor 5 × 2 m, vollverschweißt. Günstiger sind die FORZA Alu60 in zehn Größen, für Vereinsmaß das GLA-WEL Großfeldtor 7,32 × 2,44 m." },
    { q: "Wie sichert man ein Fußballtor gegen Umkippen?", a: "Mit Bodenankern, Erdnägeln oder Gewichten nach Herstellerangabe. Die Norm DIN EN 748 stellt Anforderungen an die Standsicherheit von Fußballtoren – die Sicherung vor jeder Nutzung prüfen." },
    { q: "Welche Größe hat ein Jugendtor?", a: "Ein Jugendtor misst 5 × 2 m, ein Großfeldtor 7,32 × 2,44 m." },
    { q: "Aluminium oder Stahl?", a: "Aluminium rostet nicht wie Stahl, ist leichter und deshalb für den Garten meist die bessere Wahl. Stahltore sind schwerer und günstiger, müssen aber vor Rost geschützt werden." },
    { q: "Braucht ein großes Fußballtor eine Genehmigung?", a: "Ein mobiles Tor in der Regel nicht. Fest einbetonierte Tore, Ballfangzäune oder Flutlichtmasten können aber je nach Landesbauordnung und Bebauungsplan genehmigungspflichtig sein – im Zweifel vorab beim Bauamt nachfragen." },
  ],

  sources: [
    { label: "DIN EN 748: Fußballtore – Sicherheitstechnische Anforderungen", url: "https://www.dinmedia.de/" },
    { label: "DGUV: Sicherheit bei Fußballtoren", url: "https://www.dguv.de/" },
  ],

  related: [
    { slug: "ballfangnetze-zaeune", text: "Ballfangnetze hinter dem Tor." },
    { slug: "kunstrasen", text: "Kunstrasen für das Spielfeld." },
    { slug: "flutlicht-sportplatz", text: "Flutlicht für Abendspiele." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
