// Kategorie: Billardtische
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "billardtische",
  area: "gaming-room",
  navLabel: "Billardtische",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Billardtische für zu Hause 2026",
  metaDescription:
    "Pool-Billardtische mit Schieferplatte, Kombitische mit Esstisch-Auflage und günstige Einsteiger: Die 3 besten Billardtische 2026 im Vergleich – mit Platzbedarf.",

  eyebrow: "Gaming-Room · Billard",
  h1: "Die 3 besten Billardtische für zu Hause 2026",
  lead:
    "Ein Billardtisch ist das Herzstück jedes Spielzimmers – und eine Anschaffung für viele Jahre. Wir zeigen die drei besten Pool-Billardtische für zu Hause und in der Top 5 Alternativen mit Esstisch-Funktion.",
  answer:
    "Unsere beste Gesamtwahl ist der [**John West Billardtisch 7 ft mit Schieferplatte**](produkt:1) – echter Schiefer für einen präzisen Lauf. Das beste Preis-Leistungs-Verhältnis bietet der [**Blue Sea Billardtisch 7 ft**](produkt:2), die Premium-Wahl ist der [**John West Denver Dream 7 ft**](produkt:3), der sich mit Abdeckplatte zum Esstisch umbauen lässt.",

  priceTiers: {
    1: { symbol: "€", label: "bis 1.000 €" },
    2: { symbol: "€€", label: "1.000–3.000 €" },
    3: { symbol: "€€€", label: "über 3.000 €" },
  },

  top3Title: "Unsere Top 3 Billardtische",
  top3Intro: "Alle drei sind Pool-Billardtische in 7 Fuß – der häufigsten Größe für Wohnräume. Der wichtigste Unterschied ist die Spielplatte: Schiefer ist präziser und langlebiger als MDF.",
  comparisonTitle: "Die 3 besten Billardtische im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielqualität", weight: 0.35, description: "Spielplatte, Banden, Tuch, Ebenheit." },
    { key: "bau", label: "Verarbeitung & Stabilität", weight: 0.25, description: "Rahmen, Beine, Gewicht, Material." },
    { key: "alltag", label: "Alltag & Ausstattung", weight: 0.15, description: "Zubehör, Abdeckplatte, Ballrücklauf." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Spielplatte, Maße, Gewicht, Zubehör), Händlerangaben und die Tischmaße der Deutschen Billard-Union. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "John West Billardtisch 7 ft Schiefer",
      brand: "John West",
      variant: "7 Fuß, Schieferplatte",
      visual: { kind: "gametable", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 9.0, bau: 8.5, alltag: 8.0, preis: 8.5 },
      bestFor: "Ernsthaftes Spiel zu Hause",
      verdict:
        "Echter Schiefer zu einem fairen Preis: Die Steinplatte sorgt für einen präzisen, gleichmäßigen Lauf, der Tisch steht schwer und stabil und kommt mit Zubehör.",
      features: [
        "Spielplatte aus Schiefer (Herstellerangabe)",
        "7-Fuß-Pool-Billard",
        "Zubehör im Lieferumfang (laut Händler)",
      ],
      pros: ["Präzise Schieferplatte", "Stabil und schwer", "Gutes Preis-Leistungs-Verhältnis"],
      cons: ["Sehr schwer, Aufbau aufwendig", "Ohne Esstisch-Funktion"],
      specs: { groesse: "7 Fuß", platte: "Schiefer", esstisch: "nein", aufbau: "aufwendig (Schiefer)", zubehoer: "laut Händler" },
      asin: "B07CNPQ4L8",
      query: "John West Billardtisch 7 ft Schiefer",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Blue Sea Billardtisch 7 ft",
      brand: "Blue Sea",
      variant: "7 Fuß, MDF-Spielplatte",
      visual: { kind: "gametable", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 7.5, bau: 7.5, alltag: 8.0, preis: 9.5 },
      bestFor: "Einsteiger, Familien",
      verdict:
        "Günstiger Einstieg ins Billard: Die Spielplatte ist aus MDF statt Schiefer, für Freizeitspiele in der Familie reicht das aber völlig – inklusive Queues und Kugeln.",
      features: [
        "7-Fuß-Pool-Billard mit MDF-Platte",
        "Komplettset mit Zubehör (laut Händler)",
        "Deutlich leichter als Schiefertische",
      ],
      pros: ["Günstig", "Leichter Aufbau", "Mit Zubehör"],
      cons: ["MDF verzieht sich eher", "Weniger präzise"],
      specs: { groesse: "7 Fuß", platte: "MDF", esstisch: "nein", aufbau: "einfach", zubehoer: "laut Händler" },
      asin: "B06Y4C929B",
      query: "Blue Sea Billardtisch 7 ft",
    },
    {
      rank: 3,
      label: "Premium-Wahl mit Esstisch",
      name: "John West Denver Dream 7 ft",
      brand: "John West",
      variant: "7 Fuß, Schiefer, mit Abdeckplatte",
      visual: { kind: "gametable", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 9.0, bau: 9.0, alltag: 9.0, preis: 6.5 },
      bestFor: "Wohnzimmer und Esszimmer",
      verdict:
        "Billard und Esstisch in einem: Schieferplatte für präzises Spiel, dazu eine Abdeckplatte, mit der der Tisch im Alltag als Esstisch dient – ideal, wenn kein eigener Spielraum da ist.",
      features: [
        "Schieferplatte, 7 Fuß (Herstellerangabe)",
        "Abdeckplatte zur Nutzung als Esstisch",
        "Möbel-Design für den Wohnbereich",
      ],
      pros: ["Zwei Möbel in einem", "Schieferplatte", "Wohnliches Design"],
      cons: ["Teuer", "Sehr schwer"],
      specs: { groesse: "7 Fuß", platte: "Schiefer", esstisch: "ja, Abdeckplatte", aufbau: "aufwendig (Schiefer)", zubehoer: "laut Händler" },
      asin: "B0CCP21W5H",
      query: "John West Denver Dream 7 ft Billardtisch Abdeckplatte",
    },
  ],

  comparison: [
    { key: "groesse", label: "Größe" },
    { key: "platte", label: "Spielplatte" },
    { key: "esstisch", label: "Esstisch-Funktion" },
    { key: "aufbau", label: "Aufbau" },
    { key: "zubehoer", label: "Zubehör" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-billardtische-2026-bewertung.svg",
      title: "Die 3 besten Billardtische 2026",
      alt: "Balkendiagramm: Bewertung von John West 7 ft Schiefer, Blue Sea 7 ft und John West Denver Dream",
      caption: "Unsere Bewertung je Kriterium. Die Spielplatte bestimmt die Spielqualität am stärksten.",
    },
    steps: {
      kind: "steps",
      file: "billardtisch-platzbedarf.svg",
      title: "Platz für den Billardtisch",
      subtitle: "So rechnest du den Raum aus",
      alt: "Infografik: Platzbedarf Billardtisch – Tischmaß, Queue-Länge, Raumgröße, Untergrund, Licht",
      caption: "Für den Stoß brauchst du an jeder Seite eine Queue-Länge Platz.",
      steps: [
        { title: "Tischmaß messen", text: "Außenmaß des Tischs, nicht nur die Spielfläche." },
        { title: "Queue-Länge addieren", text: "An jeder Seite rund 1,5 m für die Queue." },
        { title: "Raum prüfen", text: "Für 7 Fuß etwa 5 × 4 m, für 8 Fuß mehr." },
        { title: "Boden klären", text: "Schiefertische wiegen mehrere hundert Kilo." },
        { title: "Licht planen", text: "Billardlampe gleichmäßig über der Spielfläche." },
      ],
    },
  },

  editorial: {
    title: "Schiefer oder MDF – und welche Größe?",
    intro: "Was die Spielplatte ausmacht, welche Tischgröße passt und wann ein Kombitisch mit Esstisch-Auflage sinnvoll ist.",
    sections: [
      {
        id: "bester-billardtisch",
        h2: "Welcher Billardtisch ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [John West 7 ft Schiefer](produkt:1) die beste Wahl, weil er echten Schiefer bietet. Günstiger ist der [Blue Sea 7 ft](produkt:2), mit Esstisch-Funktion der [John West Denver Dream](produkt:3)." },
          { first: "Ein Billardtisch ist ein großes, schweres Möbel – deshalb lohnt es sich, vor dem Kauf genau zu überlegen. Die wichtigste Frage ist die Spielplatte: Schiefer ist ein Naturstein, der sich nicht verzieht und die Kugeln präzise und gleichmäßig laufen lässt. MDF- oder Holzplatten sind günstiger und leichter, können sich aber bei Feuchtigkeit verziehen." },
          { p: "In deutschen Wohnräumen ist **Pool-Billard** in 7 Fuß am häufigsten. Turniertische haben 9 Fuß, sind aber für die meisten Räume zu groß. Snooker-Tische sind noch größer und kommen nur für sehr große Räume infrage. Wer keinen eigenen Spielraum hat, sollte einen Kombitisch mit **Abdeckplatte** wählen: tagsüber Esstisch, abends Billardtisch." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf eine Schieferplatte für präzises Spiel, die passende Größe für deinen Raum, die Tragfähigkeit des Bodens und darauf, ob Lieferung und Aufbau inbegriffen sind." },
          {
            table: {
              caption: "Tischgrößen und Raumbedarf (Faustregel)",
              head: ["Größe", "Spielfläche (ca.)", "Raumbedarf (ca.)"],
              rows: [
                ["**6 Fuß**", "rund 1,8 × 0,9 m", "rund 4,6 × 3,8 m"],
                ["**7 Fuß**", "rund 2,0 × 1,0 m", "rund 5,0 × 4,0 m"],
                ["**8 Fuß**", "rund 2,2 × 1,1 m", "rund 5,3 × 4,1 m"],
                ["**9 Fuß (Turnier)**", "rund 2,54 × 1,27 m", "rund 5,6 × 4,3 m"],
              ],
            },
          },
          { p: "Der Raumbedarf ergibt sich aus der Spielfläche plus rund einer Queue-Länge an jeder Seite. Mit kürzeren Queues (z. B. 120 cm) lassen sich engere Stellen im Raum überbrücken. Ein Schiefertisch wiegt mehrere hundert Kilogramm – im Altbau oder auf Holzbalkendecken solltest du die Tragfähigkeit prüfen lassen." },
          { list: ["Schieferplatte für präzises, dauerhaftes Spiel", "Größe passend zum Raum inklusive Queue-Länge", "Tragfähigkeit des Bodens", "Lieferung und Aufbau durch den Händler", "Abdeckplatte, wenn der Tisch auch Esstisch sein soll"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: 8 Fuß, Kombitische und Zubehör",
    intro: "Für mehr Spielfläche, mehrere Spiele oder als Esstisch.",
    items: [
      { name: "Billiard-Royal Orient 8 ft", for: "Mehr Spielfläche", text: "Pool-Billardtisch in 8 Fuß für größere Räume.", asin: "B01JKM3OH4", query: "Billiard-Royal Orient 8 ft" },
      { name: "Black Pool 8 ft", for: "8 Fuß Klassiker", text: "Billardtisch in 8 Fuß mit klassischem Design.", asin: "B00314V1UK", query: "Black Pool Billardtisch 8 ft" },
      { name: "Simba Billardtisch 7 ft mit Tischplatte und Bänken", for: "Ess-Set", text: "Kombitisch mit Abdeckplatte und passenden Bänken – Billard und Esstisch in einem.", asin: "B07K1L8K62", query: "Simba Billardtisch 7 ft Tischplatte Bänke" },
      { name: "Bandito Tischtennis-Auflage", for: "Billard plus Tischtennis", text: "Tischtennis-Auflage für Billardtische – macht aus dem Billardtisch eine Tischtennisplatte.", asin: "B005CV4N4G", query: "Bandito Tischtennisauflage Billardtisch" },
      { name: "Rasson Abdeckplatte", for: "Nachrüsten", text: "Abdeckplatte, mit der ein Billardtisch zum Esstisch wird (Maße prüfen).", asin: "B086PBQSTY", query: "Rasson Abdeckplatte Billardtisch" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Pflege und Licht",
        blocks: [
          { quick: "Schiefertische vom Händler aufbauen und ausrichten lassen, das Tuch regelmäßig bürsten und eine Billardlampe für gleichmäßiges Licht über der Spielfläche aufhängen." },
          { figure: "steps" },
          { p: "Das Tuch ist das Verschleißteil eines Billardtischs. Bürste es regelmäßig in Längsrichtung, decke den Tisch ab, wenn er nicht genutzt wird, und halte Getränke fern. Als Licht eignet sich eine lange Billardlampe in rund 80 bis 100 cm Höhe über der Spielfläche – mehr zu stimmungsvollem Licht im Ratgeber [LED- und Neonbeleuchtung](/led-neon-beleuchtung/)." },
          { callout: { title: "Gewicht", warn: true, text: "Schiefertische wiegen mehrere hundert Kilo. Aufbau nur zu mehreren oder durch den Händler, und bei Holzbalkendecken die Tragfähigkeit prüfen lassen." } },
          { facts: [{ value: "7 Fuß", label: "häufigste Größe zu Hause" }, { value: "ca. 5 × 4 m", label: "Raumbedarf 7 Fuß" }, { value: "Schiefer", label: "beste Spielplatte" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Billardtisch für zu Hause ist der beste?", a: "Unsere beste Gesamtwahl ist der John West 7 ft mit Schieferplatte. Günstiger ist der Blue Sea 7 ft, mit Esstisch-Funktion der John West Denver Dream." },
    { q: "Wie viel Platz braucht ein Billardtisch?", a: "Für einen 7-Fuß-Tisch etwa 5 × 4 m, weil an jeder Seite rund eine Queue-Länge Platz nötig ist. Mit kürzeren Queues geht es etwas enger." },
    { q: "Schiefer oder MDF – was ist besser?", a: "Schiefer ist präziser und verzieht sich nicht, ist aber teurer und viel schwerer. MDF reicht für Gelegenheitsspieler." },
    { q: "Kann man einen Billardtisch als Esstisch nutzen?", a: "Ja, mit einer passenden Abdeckplatte. Einige Modelle werden direkt als Kombitisch verkauft." },
    { q: "Wie schwer ist ein Billardtisch?", a: "Schiefertische wiegen mehrere hundert Kilogramm, MDF-Tische deutlich weniger." },
  ],

  sources: [
    { label: "Deutsche Billard-Union", url: "https://www.billard-union.net/" },
    { label: "WPA: Tischspezifikationen", url: "https://wpapool.com/equipment-specifications/" },
  ],

  related: [
    { slug: "kickertische", text: "Kickertische." },
    { slug: "dartautomaten", text: "Dartautomaten." },
    { slug: "tischtennisplatten", text: "Tischtennisplatten." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
