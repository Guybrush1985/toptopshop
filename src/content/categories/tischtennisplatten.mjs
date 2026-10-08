// Kategorie: Tischtennisplatten (Outdoor, Beton, Indoor)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "tischtennisplatten",
  area: "private-sportanlagen",
  navLabel: "Tischtennisplatten",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Outdoor-Tischtennisplatten 2026",
  metaDescription:
    "Wetterfeste Outdoor-Tischtennisplatten, Betonplatten für die Ewigkeit und Indoor-Turnierplatten: Die 3 besten Tischtennisplatten 2026 im Vergleich.",

  eyebrow: "Sportanlagen · Tischtennis",
  h1: "Die 3 besten Outdoor-Tischtennisplatten 2026",
  lead:
    "Eine Tischtennisplatte im Garten ist Treffpunkt für die ganze Familie. Wir zeigen die drei besten wetterfesten Platten – und in der Top 5 Beton- und Indoor-Modelle.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Cornilleau 500X Outdoor**](produkt:1) mit 6-mm-Melaminharzplatte, TÜV-geprüft und zusammenklappbar. Das beste Preis-Leistungs-Verhältnis bietet die [**Cornilleau 200X Outdoor**](produkt:2) mit 10 Jahren Garantie; die Premium-Wahl ist die [**KETTLER K15 Outdoor**](produkt:3) mit 10-mm-Platte in Turnierqualität.",

  priceTiers: {
    1: { symbol: "€", label: "bis 600 €" },
    2: { symbol: "€€", label: "600–1.000 €" },
    3: { symbol: "€€€", label: "über 1.000 €" },
  },

  top3Title: "Unsere Top 3 Outdoor-Tischtennisplatten",
  top3Intro: "Alle drei sind wetterfest, klappbar und haben Turniermaße (274 × 152,5 cm). Der wichtigste Unterschied ist die Plattenstärke – sie bestimmt den Ballabsprung.",
  comparisonTitle: "Die 3 besten Outdoor-Tischtennisplatten im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielqualität", weight: 0.35, description: "Plattenstärke, Ballabsprung, Ebenheit." },
    { key: "wetter", label: "Wetterfestigkeit & Stabilität", weight: 0.25, description: "Material, Gestell, Garantie, Standfestigkeit." },
    { key: "handling", label: "Handling & Sicherheit", weight: 0.15, description: "Klappmechanismus, Rollen, Sicherungen." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Plattenstärke, Material, Garantie, Prüfungen), Händlerangaben und die Norm DIN EN 14468 für Tischtennisplatten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Cornilleau 500X Outdoor",
      brand: "Cornilleau",
      variant: "6 mm Melaminharz, blau",
      visual: { kind: "pingpong", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 8.5, wetter: 9.0, handling: 9.0, preis: 8.0 },
      bestFor: "Familien und Vielspieler",
      verdict:
        "Der beste Allrounder: 6 mm starke Melaminharzplatte für einen guten Ballabsprung, durchdachte Klappmechanik und TÜV-Prüfung – aus der eigenen Fabrik in Frankreich.",
      features: [
        "6-mm-Melaminharzplatte, Turniermaße (Herstellerangabe)",
        "Wetterfest, klappbar, fahrbar, TÜV-geprüft",
        "Hergestellt in der Cornilleau-Fabrik in Frankreich",
      ],
      pros: ["Guter Ballabsprung", "Sehr gute Klappmechanik", "Robust und wetterfest"],
      cons: ["Teurer als Einstiegsmodelle", "Schwer"],
      specs: { platte: "6 mm Melaminharz", masse: "274 × 152,5 cm", klappbar: "ja", geprueft: "TÜV", garantie: "laut Hersteller" },
      asin: "B08VDMCHPD",
      query: "Cornilleau 500X Outdoor Tischtennisplatte",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Cornilleau 200X Outdoor",
      brand: "Cornilleau",
      variant: "5 mm Melaminharz",
      visual: { kind: "pingpong", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 7.5, wetter: 8.5, handling: 8.5, preis: 9.0 },
      bestFor: "Einstieg, Familien mit Kindern",
      verdict:
        "Der günstige Einstieg in die Markenqualität: wetterfest, klappbar und mit 5-mm-Melaminharzplatte – laut Händler mit 10 Jahren Garantie.",
      features: [
        "5-mm-Melaminharzplatte, Turniermaße (Herstellerangabe)",
        "Wetterfest und klappbar",
        "Laut Händler 10 Jahre Garantie",
      ],
      pros: ["Günstig", "Lange Garantie", "Markenqualität"],
      cons: ["Dünnere Platte, weniger Absprung", "Einfachere Ausstattung"],
      specs: { platte: "5 mm Melaminharz", masse: "274 × 152,5 cm", klappbar: "ja", geprueft: "–", garantie: "10 Jahre (Händlerangabe)" },
      asin: "B08VDC161N",
      query: "Cornilleau 200X Outdoor Tischtennisplatte",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "KETTLER K15 Outdoor",
      brand: "Kettler",
      variant: "10 mm Melaminharz, Overlay",
      visual: { kind: "pingpong", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 9.5, wetter: 9.0, handling: 8.5, preis: 6.5 },
      bestFor: "Ambitionierte Spieler",
      verdict:
        "Turniergefühl im Garten: Die 10 mm starke Melaminharzplatte mit kratzfester Overlay-Schicht liefert den besten Ballabsprung unter den klappbaren Outdoor-Platten.",
      features: [
        "10-mm-Melaminharzplatte mit Overlay-Schicht (Herstellerangabe)",
        "Turnierqualität, wetterfest, klappbar",
        "Made in Germany, TÜV-geprüft (Herstellerangabe für die Serie)",
      ],
      pros: ["Bester Ballabsprung", "Sehr robust", "Hochwertige Verarbeitung"],
      cons: ["Teuer", "Sehr schwer"],
      specs: { platte: "10 mm Melaminharz", masse: "274 × 152,5 cm", klappbar: "ja", geprueft: "TÜV (Serie)", garantie: "laut Hersteller" },
      asin: "B09BNRHLZH",
      query: "KETTLER K15 Outdoor Tischtennisplatte",
    },
  ],

  comparison: [
    { key: "platte", label: "Platte" },
    { key: "masse", label: "Maße" },
    { key: "klappbar", label: "Klappbar" },
    { key: "geprueft", label: "Prüfung" },
    { key: "garantie", label: "Garantie" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-outdoor-tischtennisplatten-2026-bewertung.svg",
      title: "Die 3 besten Outdoor-Tischtennisplatten 2026",
      alt: "Balkendiagramm: Bewertung von Cornilleau 500X, Cornilleau 200X und Kettler K15 Outdoor",
      caption: "Unsere Bewertung je Kriterium. Die Plattenstärke bestimmt den Ballabsprung am stärksten.",
    },
    steps: {
      kind: "steps",
      file: "tischtennisplatte-aufstellen-platzbedarf.svg",
      title: "Tischtennisplatte aufstellen",
      subtitle: "Platzbedarf, Untergrund und Pflege",
      alt: "Infografik: Tischtennisplatte aufstellen – Platzbedarf, Untergrund, Ausrichtung, Abdeckung, Winter",
      caption: "So steht die Platte gerade und hält viele Jahre.",
      steps: [
        { title: "Platz einplanen", text: "Für Freizeitspiel mindestens rund 6 × 3 m, besser 8 × 4 m." },
        { title: "Ebenen Untergrund", text: "Pflaster, Platten oder Beton – auf Rasen sinken Rollen ein." },
        { title: "Gegen die Sonne ausrichten", text: "Längsseite in Nord-Süd-Richtung, damit niemand geblendet wird." },
        { title: "Abdecken", text: "Eine Schutzhülle verlängert die Lebensdauer deutlich." },
        { title: "Im Winter sichern", text: "Zusammengeklappt, abgedeckt und gegen Wind gesichert lagern." },
      ],
    },
  },

  editorial: {
    title: "Outdoor, Beton oder Indoor?",
    intro: "Was Outdoor-Platten von Indoor-Platten unterscheidet, warum die Plattenstärke so wichtig ist und wann sich Beton lohnt.",
    sections: [
      {
        id: "beste-tischtennisplatte",
        h2: "Welche Outdoor-Tischtennisplatte ist die beste?",
        blocks: [
          { quick: "Für die meisten ist die [Cornilleau 500X](produkt:1) die beste Wahl. Günstiger ist die [Cornilleau 200X](produkt:2), für Ambitionierte die [Kettler K15](produkt:3) mit 10-mm-Platte." },
          { first: "Tischtennis ist einer der wenigen Sportarten, bei denen Großeltern gegen Enkel spielen können – und die Platte im Garten wird schnell zum Treffpunkt. Outdoor-Platten müssen Regen, Sonne und Frost aushalten. Deshalb bestehen sie aus Melaminharz oder Aluminium-Verbund statt aus Spanplatte." },
          { p: "Der wichtigste Unterschied zwischen den Modellen ist die Plattenstärke: Je dicker, desto höher und gleichmäßiger springt der Ball. Einstiegsplatten haben 4 bis 5 mm, gute Allrounder 6 mm, Spitzenmodelle 7 bis 10 mm. Indoor-Turnierplatten aus Holz kommen auf 19 bis 25 mm – bei Regen wären sie aber schnell zerstört." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf Plattenstärke und -material, ein stabiles, verzinktes oder beschichtetes Gestell, eine sichere Klappmechanik, große Rollen und die Norm DIN EN 14468." },
          {
            table: {
              caption: "Outdoor, Beton und Indoor im Vergleich",
              head: ["Typ", "Stärken", "Schwächen"],
              rows: [
                ["**Outdoor (Melaminharz)**", "Wetterfest, klappbar, guter Absprung", "Teurer als Indoor"],
                ["**Beton**", "Unverwüstlich, ganzjährig draußen", "Rund 400 kg, fest installiert"],
                ["**Indoor (Holz)**", "Bester Absprung, günstig", "Nicht wetterfest"],
              ],
            },
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-beton-indoor",
    h2: "Die 5 besten Alternativen: Beton, stationär und Indoor",
    intro: "Für den Dauereinsatz draußen, für Schulen und Vereine – oder für den Keller.",
    items: [
      { name: "Beton-Tischtennistisch mit Netz (2. Wahl)", for: "Für die Ewigkeit", text: "Platte aus Acrylbeton (30 mm) mit Untergestell aus stahlarmiertem Beton, rund 400 kg (Händlerangabe) – 2.-Wahl-Ware, Beschreibung der Mängel beachten.", asin: "B01M4HDV95", query: "Beton-Tischtennistisch Netz Outdoor" },
      { name: "Sport-Thieme Metall-Tischtennisnetz für Betonplatten", for: "Netz für Beton", text: "Robustes, wetterfestes Metallnetz zur dauerhaften Montage an Betonplatten, inklusive Befestigungsmaterial.", asin: "B0F5398XGT", query: "Sport-Thieme Metall-Tischtennisnetz Beton" },
      { name: "Cornilleau Pro 510 Outdoor", for: "Stationär, ganzjährig", text: "Nicht klappbar, Gestell aus feuerverzinktem Stahlblech, 7-mm-Platte – für Schulen, Parks und Gärten.", asin: "B01M9HRUF0", query: "Cornilleau Pro 510 Outdoor" },
      { name: "Kettler K5 Indoor", for: "Indoor-Turnierplatte", text: "19-mm-Holzplatte mit kratzfester Overlay-Schicht, Turnierqualität, DIN EN 14468 (Herstellerangabe).", asin: "B088F4HVPP", query: "Kettler K5 Indoor Tischtennisplatte" },
      { name: "JOOLA Inside 13 Indoor", for: "Günstig für den Keller", text: "Indoor-Platte mit 12-mm-MDF, klappbarem Untergestell und Netz, in rund 20 Minuten aufgebaut.", asin: "B0CPHL54QD", query: "JOOLA Inside 13 Tischtennisplatte" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Pflege und Sicherheit",
        blocks: [
          { quick: "Platte auf ebenem, festem Grund aufstellen, Rollen feststellen, nach dem Spielen zusammenklappen und abdecken. Beim Klappen auf Finger achten." },
          { figure: "steps" },
          { callout: { title: "Sicherheit", warn: true, text: "Klappbare Platten können beim Auf- und Zuklappen Finger einklemmen. Kinder nur unter Aufsicht klappen lassen und Sicherungen immer einrasten." } },
          { facts: [{ value: "274 × 152,5 cm", label: "Turniermaß der Platte" }, { value: "76 cm", label: "Höhe der Spielfläche" }, { value: "15,25 cm", label: "Netzhöhe" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Outdoor-Tischtennisplatte ist die beste?", a: "Unsere beste Gesamtwahl ist die Cornilleau 500X mit 6-mm-Platte. Günstiger ist die Cornilleau 200X, die Premium-Wahl die Kettler K15 mit 10-mm-Platte." },
    { q: "Kann eine Outdoor-Tischtennisplatte im Winter draußen bleiben?", a: "Viele Outdoor-Platten sind dafür ausgelegt. Zusammengeklappt, abgedeckt und gegen Wind gesichert halten sie deutlich länger." },
    { q: "Wie viel Platz braucht eine Tischtennisplatte?", a: "Für Freizeitspiel mindestens rund 6 × 3 m, für schnelles Spiel eher 8 × 4 m und mehr." },
    { q: "Lohnt sich eine Betonplatte?", a: "Für öffentliche Plätze, Schulen oder Gärten, in denen die Platte nie bewegt werden soll, ja. Sie ist unverwüstlich, wiegt aber rund 400 kg." },
    { q: "Was ist der Unterschied zwischen Indoor- und Outdoor-Platten?", a: "Indoor-Platten bestehen aus Holz und haben einen besseren Absprung, sind aber nicht wetterfest. Outdoor-Platten sind aus Melaminharz oder Aluminium-Verbund." },
  ],

  sources: [
    { label: "Deutscher Tischtennis-Bund", url: "https://www.tischtennis.de/" },
    { label: "DIN EN 14468: Tischtennis-Ausrüstung", url: "https://www.dinmedia.de/" },
    { label: "Cornilleau: Outdoor-Tische", url: "https://www.cornilleau.com/de/" },
  ],

  related: [
    { slug: "shuffleboard-shufflepuck", text: "Shuffleboard für Garten und Partykeller." },
    { slug: "padel-pickleball", text: "Pickleball und Padel im Garten." },
    { slug: "flutlicht-sportplatz", text: "Licht für Abendspiele." },
    { area: "private-sportanlagen", text: "Alle Ratgeber für den eigenen Sportplatz." },
  ],
};
