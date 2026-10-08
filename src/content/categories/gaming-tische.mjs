// Kategorie: Gaming-Tische
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "gaming-tische",
  area: "gaming-room",
  navLabel: "Gaming-Tische",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Gaming-Tische 2026",
  metaDescription:
    "Breite Gaming-Tische mit Mauspad-Oberfläche, elektrisch höhenverstellbare Modelle und Eck-Schreibtische: Die 3 besten Gaming-Tische 2026 im Vergleich.",

  eyebrow: "Gaming-Room · Gaming-Tische",
  h1: "Die 3 besten Gaming-Tische 2026",
  lead:
    "Ein Gaming-Tisch braucht Platz für zwei Monitore, eine große Mausfläche und ordentliches Kabelmanagement. Wir zeigen die drei besten Modelle – fest, elektrisch und günstig – und in der Top 5 Eck- und RGB-Varianten.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Desktopia GG**](produkt:1) – elektrisch höhenverstellbar, mit Memory-Funktion und 180 × 80 cm Fläche. Das beste Preis-Leistungs-Verhältnis bietet der [**Arozzi Arena**](produkt:2) mit Mauspad über die ganze Tischfläche; die Wahl für kleine Zimmer ist der [**Eureka Ergonomic 148 cm RGB**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 250 €" },
    2: { symbol: "€€", label: "250–500 €" },
    3: { symbol: "€€€", label: "über 500 €" },
  },

  top3Title: "Unsere Top 3 Gaming-Tische",
  top3Intro: "Alle drei bieten Platz für mindestens zwei Monitore und haben Lösungen für Kabel. Der größte Unterschied: feste Höhe oder elektrische Höhenverstellung.",
  comparisonTitle: "Die 3 besten Gaming-Tische im Vergleich",

  criteria: [
    { key: "flaeche", label: "Fläche & Stabilität", weight: 0.3, description: "Tischgröße, Tiefe, Wackelfreiheit, Belastbarkeit." },
    { key: "ergonomie", label: "Ergonomie", weight: 0.25, description: "Höhenverstellung, Tischhöhe, Beinfreiheit." },
    { key: "ausstattung", label: "Ausstattung & Kabel", weight: 0.2, description: "Kabelmanagement, Oberfläche, Extras." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Größe und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Höhenbereich, Belastbarkeit, Garantie), Händlerangaben und die Empfehlungen der DGUV zur Tischhöhe bei Bildschirmarbeit. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Desktopia GG Gaming-Tisch",
      brand: "Ergotopia",
      variant: "180 × 80 cm, elektrisch",
      visual: { kind: "desk", tone: "forest" },
      priceTier: 3,
      ratings: { flaeche: 9.0, ergonomie: 9.5, ausstattung: 8.5, preis: 7.5 },
      bestFor: "Lange Sessions, Sitzen und Stehen",
      verdict:
        "Der beste Allrounder: große, tiefe Fläche, elektrische Höhenverstellung mit Memory-Tasten und eine lange Garantie – damit spielst und arbeitest du auch mal im Stehen.",
      features: [
        "Elektrisch höhenverstellbar, rund 63–128 cm (Herstellerangabe)",
        "Tischplatte 180 × 80 cm, belastbar bis 125 kg (Herstellerangabe)",
        "Memory-Funktion, 7 Jahre Garantie (Herstellerangabe)",
      ],
      pros: ["Große, tiefe Fläche", "Sitzen und Stehen", "Lange Garantie"],
      cons: ["Teuer", "Montage dauert länger"],
      specs: { masse: "180 × 80 cm", hoehe: "ca. 63–128 cm, elektrisch", belastbar: "125 kg", kabel: "laut Hersteller", extras: "Memory-Funktion" },
      asin: "B0BXF1HZH5",
      query: "Desktopia GG Gaming Tisch höhenverstellbar",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Arozzi Arena Gaming Desk",
      brand: "Arozzi",
      variant: "160 × 82 cm, schwarz",
      visual: { kind: "desk", tone: "mint" },
      priceTier: 2,
      ratings: { flaeche: 8.5, ergonomie: 7.0, ausstattung: 9.0, preis: 8.5 },
      bestFor: "Low-Sens-Spieler mit großer Mausfläche",
      verdict:
        "Der Klassiker: Die ganze Tischplatte ist mit einer wasserabweisenden Mauspad-Oberfläche bezogen, Kabel verschwinden durch drei Durchlässe in einem Netz unter dem Tisch.",
      features: [
        "Tischplatte rund 160 × 82 cm mit Mauspad-Bezug (Herstellerangabe)",
        "Drei Kabeldurchlässe mit Kabelnetz",
        "Höhe in Stufen einstellbar (Herstellerangabe)",
      ],
      pros: ["Riesige Mausfläche", "Gutes Kabelmanagement", "Abgerundete Front"],
      cons: ["Keine elektrische Höhenverstellung", "Mauspad-Bezug nutzt sich ab"],
      specs: { masse: "ca. 160 × 82 cm", hoehe: "feste Stufen", belastbar: "laut Hersteller", kabel: "3 Durchlässe, Netz", extras: "Vollflächen-Mauspad" },
      asin: "B01K1JW1L0",
      query: "Arozzi Arena Gaming Desk",
    },
    {
      rank: 3,
      label: "Für kleine Zimmer",
      name: "Eureka Ergonomic Gaming-Tisch 148 cm RGB",
      brand: "Eureka Ergonomic",
      variant: "148 × 60 cm, RGB",
      visual: { kind: "desk", tone: "green" },
      priceTier: 1,
      ratings: { flaeche: 7.0, ergonomie: 7.0, ausstattung: 8.5, preis: 9.0 },
      bestFor: "Jugendzimmer und kleine Räume",
      verdict:
        "Kompakt und günstig: 148 cm Breite reichen für zwei Monitore, die RGB-Beleuchtung und Halterungen für Becher und Kopfhörer machen ihn zum typischen Gamer-Tisch.",
      features: [
        "Rund 148 × 60 cm (Herstellerangabe)",
        "RGB-Beleuchtung, Becher- und Kopfhörerhalter",
        "Kabelmanagement integriert",
      ],
      pros: ["Günstig", "Passt in kleine Räume", "Viele Extras"],
      cons: ["Geringe Tiefe", "Feste Höhe"],
      specs: { masse: "ca. 148 × 60 cm", hoehe: "fest", belastbar: "laut Hersteller", kabel: "integriert", extras: "RGB, Halter" },
      asin: "B0873158GG",
      query: "Eureka Ergonomic Gaming Tisch 148 RGB",
    },
  ],

  comparison: [
    { key: "masse", label: "Maße" },
    { key: "hoehe", label: "Höhe" },
    { key: "belastbar", label: "Belastbarkeit" },
    { key: "kabel", label: "Kabelmanagement" },
    { key: "extras", label: "Extras" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-gaming-tische-2026-bewertung.svg",
      title: "Die 3 besten Gaming-Tische 2026",
      alt: "Balkendiagramm: Bewertung von Desktopia GG, Arozzi Arena und Eureka Ergonomic 148 cm",
      caption: "Unsere Bewertung je Kriterium. Fläche und Ergonomie wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "gaming-setup-tisch-einrichten.svg",
      title: "Gaming-Tisch einrichten",
      subtitle: "Höhe, Monitore und Kabel",
      alt: "Infografik: Gaming-Tisch einrichten – Höhe, Monitorabstand, Monitorarm, Kabel, Licht",
      caption: "In fünf Schritten zum aufgeräumten Setup.",
      steps: [
        { title: "Tischhöhe", text: "Unterarme liegen bei entspannten Schultern waagerecht auf." },
        { title: "Monitorabstand", text: "Etwa eine Armlänge, Oberkante auf oder unter Augenhöhe." },
        { title: "Monitorarm", text: "Schafft Fläche und erleichtert die Ausrichtung." },
        { title: "Kabel bündeln", text: "Kabelwanne oder Netz unter der Platte, Steckdosenleiste dazu." },
        { title: "Licht", text: "Kein Fenster im Rücken, Bias-Light hinter dem Monitor." },
      ],
    },
  },

  editorial: {
    title: "Fester Tisch oder höhenverstellbar?",
    intro: "Wie groß ein Gaming-Tisch sein sollte, wann sich die elektrische Höhenverstellung lohnt und warum die Tiefe oft wichtiger ist als die Breite.",
    sections: [
      {
        id: "bester-gaming-tisch",
        h2: "Welcher Gaming-Tisch ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [Desktopia GG](produkt:1) die beste Wahl, weil er groß und elektrisch höhenverstellbar ist. Günstiger mit riesiger Mausfläche ist der [Arozzi Arena](produkt:2), für kleine Zimmer der [Eureka 148 cm](produkt:3)." },
          { first: "Ein Gaming-Tisch unterscheidet sich von einem normalen Schreibtisch vor allem in drei Punkten: Er ist breiter und tiefer, damit zwei Monitore und eine große Mausbewegung Platz haben. Er hat ein Kabelmanagement für PC, Lautsprecher und Beleuchtung. Und er ist stabil genug, dass der Monitor nicht wackelt, wenn du die Maus schnell bewegst." },
          { p: "Die **Tiefe** wird oft unterschätzt: Bei nur 60 cm sitzt du sehr nah am Monitor. Ab 70 bis 80 cm Tiefe kannst du einen großen [Gaming-Monitor](/monitore/) in angenehmem Abstand aufstellen. Wer lange spielt, profitiert zudem von einer **elektrischen Höhenverstellung** – zwischendurch im Stehen zu spielen entlastet den Rücken. Mehr dazu in unserem Ratgeber zu [höhenverstellbaren Schreibtischen](/hoehenverstellbare-schreibtische/)." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf mindestens 140 cm Breite und 70 cm Tiefe für zwei Monitore, eine passende Tischhöhe, Stabilität ohne Wackeln und ein durchdachtes Kabelmanagement." },
          {
            table: {
              caption: "Tischtypen im Vergleich",
              head: ["Typ", "Stärken", "Schwächen"],
              rows: [
                ["**Fester Gaming-Tisch**", "Günstig, stabil, viele Extras", "Höhe nicht anpassbar"],
                ["**Elektrisch höhenverstellbar**", "Sitzen und Stehen, ergonomisch", "Teurer, schwerer"],
                ["**Eck-Schreibtisch (L-Form)**", "Sehr viel Fläche, zwei Arbeitsbereiche", "Braucht eine Raumecke"],
              ],
            },
          },
          { h3: "Mauspad-Oberfläche: Sinnvoll oder Gimmick?" },
          { p: "Ein Tisch mit vollflächigem Mauspad wie der Arozzi Arena ist praktisch für Spieler mit niedriger Mausempfindlichkeit, die große Armbewegungen machen. Der Stoffbezug nutzt sich aber mit der Zeit ab und lässt sich nicht so leicht reinigen wie ein separates Mauspad. Alternativ legst du ein XXL-Mauspad auf eine glatte Tischplatte." },
          { list: ["Mindestens 140 × 70 cm für zwei Monitore", "Belastbarkeit für Monitore, PC und Monitorarm", "Stabile Beine oder Querstreben gegen Wackeln", "Kabeldurchlässe, Kabelwanne oder Netz", "Bei langen Sessions: elektrische Höhenverstellung"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: Eck-Tische, elektrisch und RGB",
    intro: "Für mehr Fläche, mehr Komfort oder ein kleines Budget.",
    items: [
      { name: "Arozzi Arena Moto", for: "Arozzi elektrisch", text: "Die Arena-Platte mit Mauspad-Bezug auf einem elektrisch höhenverstellbaren Gestell (Herstellerangabe).", asin: "B08LMMY62T", query: "Arozzi Arena Moto" },
      { name: "ODK Eckschreibtisch 167 × 120 cm", for: "L-Form für viel Fläche", text: "Großer Eckschreibtisch mit Platz für PC, Monitore und Konsole.", asin: "B0B91TG2MM", query: "ODK Eckschreibtisch 167x120" },
      { name: "SONNI Gaming-Tisch RGB", for: "Günstig mit LED", text: "Einfacher Gaming-Tisch mit LED-Beleuchtung und Halterungen.", asin: "B08JV1Y5QL", query: "SONNI Gaming Tisch RGB" },
      { name: "Ergotopia Desktopia Pro X, 160 × 80 cm", for: "Höhenverstellbarer Schreibtisch", text: "Unser Tipp aus dem Home-Office: elektrisch höhenverstellbarer Schreibtisch mit 160 × 80 cm, der auch als Gaming-Tisch genug Platz bietet.", asin: "B09ZYFXYDK", query: "Ergotopia Desktopia Pro X 160 x 80 cm" },
      { name: "Ergotron LX Monitorarm, Tischhalterung", for: "Mehr Fläche auf dem Tisch", text: "Monitorarm, der den Bildschirm frei positioniert und die Tischfläche frei macht.", asin: "B00358RIRC", query: "Ergotron LX Monitorarm" },
    ],
  },

  guide: {
    sections: [
      {
        id: "einrichten",
        h2: "Gaming-Tisch richtig einrichten",
        blocks: [
          { quick: "Tischhöhe so einstellen, dass die Unterarme waagerecht aufliegen, Monitore eine Armlänge entfernt aufstellen und Kabel unter der Platte bündeln." },
          { figure: "steps" },
          { p: "Für die richtige Tischhöhe gibt es eine einfache Faustregel: Setz dich auf deinen [Gaming-Stuhl](/gaming-stuehle/), stell die Sitzhöhe ein und lass die Arme locker hängen. Die Tischoberfläche sollte dann etwa auf Höhe deiner Ellenbogen liegen. Bei festen Tischen mit rund 72–75 cm Höhe gleichst du kleine Unterschiede über den Stuhl und eine Fußstütze aus." },
          { callout: { title: "Tipp", text: "Eine Steckdosenleiste mit Schalter, an der Unterseite der Tischplatte montiert, sorgt für Ordnung und schaltet das ganze Setup auf einmal aus." } },
          { facts: [{ value: "140 × 70 cm", label: "Mindestmaß für zwei Monitore" }, { value: "72–75 cm", label: "übliche feste Tischhöhe" }, { value: "125 kg", label: "Belastbarkeit Desktopia GG" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Gaming-Tisch ist der beste?", a: "Unsere beste Gesamtwahl ist der elektrisch höhenverstellbare Desktopia GG. Günstiger mit Mauspad-Oberfläche ist der Arozzi Arena, für kleine Zimmer der Eureka 148 cm RGB." },
    { q: "Wie groß sollte ein Gaming-Tisch sein?", a: "Für zwei Monitore mindestens 140 cm breit und 70 cm tief. Für Ultrawide-Monitore oder viel Mausbewegung eher 160 cm und mehr." },
    { q: "Lohnt sich ein höhenverstellbarer Gaming-Tisch?", a: "Ja, wenn du viele Stunden am Tisch verbringst. Zwischendurch im Stehen zu spielen oder zu arbeiten entlastet den Rücken." },
    { q: "Wie hoch sollte ein Gaming-Tisch sein?", a: "Die Tischoberfläche sollte etwa auf Ellenbogenhöhe liegen, wenn du aufrecht sitzt. Feste Tische sind meist 72 bis 75 cm hoch." },
    { q: "Was bringt eine Mauspad-Oberfläche?", a: "Viel Platz für große Mausbewegungen ohne Kante. Der Stoff nutzt sich aber ab und ist schwerer zu reinigen als ein separates Mauspad." },
  ],

  sources: [
    { label: "Arozzi: Arena Gaming Desk", url: "https://www.arozzi.com/" },
    { label: "Desktopia: Gaming-Tische", url: "https://desktopia.de/" },
    { label: "DGUV: Bildschirm- und Büroarbeitsplätze", url: "https://www.dguv.de/" },
  ],

  related: [
    { slug: "gaming-stuehle", text: "Der passende Gaming-Stuhl." },
    { slug: "monitore", text: "Monitore für Arbeit und Gaming." },
    { slug: "led-neon-beleuchtung", text: "LED-Beleuchtung für das Setup." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
