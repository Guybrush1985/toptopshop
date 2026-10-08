// Kategorie: Getränkekühlschränke für Gaming-Room und Partykeller
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "getraenke-kuehlschrank",
  area: "gaming-room",
  navLabel: "Getränkekühlschrank",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Getränkekühlschränke 2026",
  metaDescription:
    "Getränkekühlschränke mit Glastür und LED für Gaming-Room und Partykeller: Die 3 besten Modelle von Bomann und Klarstein 2026 im Vergleich – plus Mini-Kühlschränke.",

  eyebrow: "Gaming-Room · Kühlschrank",
  h1: "Die 3 besten Getränkekühlschränke 2026",
  lead:
    "Kalte Getränke in Griffweite, ohne in die Küche zu laufen: Ein Getränkekühlschrank mit Glastür und LED ist der Klassiker im Gaming-Room. Wir zeigen die drei besten Modelle und in der Top 5 Alternativen.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Bomann KSG 7287**](produkt:1) mit 63 Litern, Glastür und Temperaturbereich von 3 bis 10 °C. Das beste Preis-Leistungs-Verhältnis bietet der kompakte [**Bomann KSG 7291**](produkt:2) mit 46 Litern, die Design-Wahl ist der [**Klarstein Beersafe 60 L**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 200 €" },
    2: { symbol: "€€", label: "200–350 €" },
    3: { symbol: "€€€", label: "über 350 €" },
  },

  top3Title: "Unsere Top 3 Getränkekühlschränke",
  top3Intro: "Alle drei haben eine Glastür und Innenbeleuchtung und arbeiten mit Kompressor. Entscheidend sind Volumen, Lautstärke und Energieverbrauch – das Gerät läuft schließlich rund um die Uhr.",
  comparisonTitle: "Die 3 besten Getränkekühlschränke im Vergleich",

  criteria: [
    { key: "kuehlung", label: "Kühlleistung", weight: 0.3, description: "Temperaturbereich, Kompressor, Gleichmäßigkeit." },
    { key: "alltag", label: "Platz & Alltag", weight: 0.25, description: "Volumen, Einlegeböden, Lautstärke." },
    { key: "effizienz", label: "Energie & Verarbeitung", weight: 0.2, description: "Energieeffizienz, Tür, Dichtung." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Volumen und Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Volumen, Temperaturbereich, Energieeffizienzklasse, Lautstärke, Maße) und Händlerangaben. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Bomann KSG 7287",
      brand: "Bomann",
      variant: "63 Liter, Glastür",
      visual: { kind: "fridge", tone: "forest" },
      priceTier: 2,
      ratings: { kuehlung: 9.0, alltag: 8.5, effizienz: 8.0, preis: 8.5 },
      bestFor: "Gaming-Room und Partykeller",
      verdict:
        "Der beste Allrounder: 63 Liter Platz, Temperaturbereich von 3 bis 10 °C, Glastür mit Innenlicht und eine Höhe von rund 74 cm – passt neben den Schreibtisch.",
      features: [
        "63 Liter Volumen (Herstellerangabe)",
        "Temperaturbereich 3 bis 10 °C (Herstellerangabe)",
        "Glastür, Innenbeleuchtung, rund 74 cm hoch",
      ],
      pros: ["Viel Platz", "Kalte Temperaturen möglich", "Kompakte Höhe"],
      cons: ["Glastür isoliert schlechter", "Kompressor hörbar"],
      specs: { volumen: "63 L", temperatur: "3–10 °C", hoehe: "ca. 74 cm", tuer: "Glastür", licht: "Innenbeleuchtung" },
      asin: "B0D6BJD34D",
      query: "Bomann KSG 7287",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Bomann KSG 7291",
      brand: "Bomann",
      variant: "46 Liter, Glastür",
      visual: { kind: "fridge", tone: "mint" },
      priceTier: 1,
      ratings: { kuehlung: 8.5, alltag: 8.0, effizienz: 8.0, preis: 9.0 },
      bestFor: "Kleine Räume, neben dem Schreibtisch",
      verdict:
        "Kompakt und günstig: 46 Liter reichen für Dosen und kleine Flaschen, das Gerät passt unter oder neben den Schreibtisch.",
      features: [
        "46 Liter Volumen (Herstellerangabe)",
        "Glastür mit Innenbeleuchtung",
        "Kompakte Bauform",
      ],
      pros: ["Günstig", "Kompakt", "Glastür"],
      cons: ["Weniger Platz", "Kompressor hörbar"],
      specs: { volumen: "46 L", temperatur: "laut Hersteller", hoehe: "kompakt", tuer: "Glastür", licht: "Innenbeleuchtung" },
      asin: "B0DLGMBZ7R",
      query: "Bomann KSG 7291",
    },
    {
      rank: 3,
      label: "Design-Wahl",
      name: "Klarstein Beersafe 60 L",
      brand: "Klarstein",
      variant: "60 Liter, Glastür, LED",
      visual: { kind: "fridge", tone: "green" },
      priceTier: 2,
      ratings: { kuehlung: 8.5, alltag: 8.5, effizienz: 7.5, preis: 8.0 },
      bestFor: "Partykeller mit Bar-Optik",
      verdict:
        "Bar-Kühlschrank mit Glastür und LED-Beleuchtung: 60 Liter Platz und ein Look wie hinter der Theke – ideal für den Partykeller.",
      features: [
        "60 Liter Volumen (Herstellerangabe)",
        "Glastür mit LED-Beleuchtung",
        "Verstellbare Einlegeböden",
      ],
      pros: ["Bar-Optik", "Viel Platz", "LED-Licht"],
      cons: ["Etwas lauter", "Größer"],
      specs: { volumen: "60 L", temperatur: "laut Hersteller", hoehe: "laut Hersteller", tuer: "Glastür", licht: "LED" },
      asin: "B089VVN4J6",
      query: "Klarstein Beersafe 60 L",
    },
  ],

  comparison: [
    { key: "volumen", label: "Volumen" },
    { key: "temperatur", label: "Temperatur" },
    { key: "hoehe", label: "Höhe" },
    { key: "tuer", label: "Tür" },
    { key: "licht", label: "Licht" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-getraenkekuehlschraenke-2026-bewertung.svg",
      title: "Die 3 besten Getränkekühlschränke 2026",
      alt: "Balkendiagramm: Bewertung von Bomann KSG 7287, Bomann KSG 7291 und Klarstein Beersafe 60 L",
      caption: "Unsere Bewertung je Kriterium. Kühlleistung und Alltag wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "getraenkekuehlschrank-aufstellen.svg",
      title: "Getränkekühlschrank aufstellen",
      subtitle: "Damit er kühlt und leise bleibt",
      alt: "Infografik: Getränkekühlschrank aufstellen – Platz zur Wand, Transport, Wartezeit, Temperatur, Abtauen",
      caption: "Fünf Schritte für eine lange Lebensdauer.",
      steps: [
        { title: "Abstand halten", text: "Einige Zentimeter Luft hinten und an den Seiten." },
        { title: "Aufrecht transportieren", text: "Sonst nach Herstellerangabe warten." },
        { title: "Wartezeit", text: "Nach dem Aufstellen erst nach einigen Stunden einschalten." },
        { title: "Temperatur", text: "Für Getränke reichen meist 5 bis 8 °C." },
        { title: "Abtauen", text: "Bei Eisbildung abtauen und reinigen." },
      ],
    },
  },

  editorial: {
    title: "Kompressor oder Thermoelektrik?",
    intro: "Wie groß der Kühlschrank sein sollte, warum Kompressorgeräte besser kühlen und wie laut sie sind.",
    sections: [
      {
        id: "bester-getraenkekuehlschrank",
        h2: "Welcher Getränkekühlschrank ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [Bomann KSG 7287](produkt:1) die beste Wahl, weil er viel Platz und kalte Temperaturen bietet. Kompakter und günstiger ist der [Bomann KSG 7291](produkt:2), mit Bar-Optik der [Klarstein Beersafe](produkt:3)." },
          { first: "Getränkekühlschränke unterscheiden sich von normalen Kühlschränken vor allem durch die **Glastür** und die Innenbeleuchtung: Man sieht sofort, was drin ist. Dafür isoliert Glas schlechter als eine massive Tür, und der Energieverbrauch ist etwas höher. Für den Gaming-Room ist außerdem die **Lautstärke** wichtig – das Gerät steht schließlich in dem Raum, in dem du mit Headset spielst oder streamst." },
          { p: "Es gibt zwei Kühltechniken: **Kompressor-Kühlschränke** kühlen kräftig und auch bei warmer Umgebung zuverlässig, brummen aber hörbar, wenn der Kompressor anspringt. **Thermoelektrische** Mini-Kühlschränke sind leiser und günstiger, kühlen aber meist nur um eine bestimmte Differenz unter die Raumtemperatur – im warmen Dachzimmer reicht das oft nicht für wirklich kalte Getränke." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf ein passendes Volumen, den Temperaturbereich, die Lautstärke laut Hersteller, die Energieeffizienzklasse und die Maße für den Stellplatz." },
          {
            table: {
              caption: "Volumen und was hineinpasst (grobe Richtwerte)",
              head: ["Volumen", "Für wen", "Platz für"],
              rows: [
                ["**bis 10 L**", "Schreibtisch, Deko", "Einige Dosen"],
                ["**40–50 L**", "Gaming-Room, eine Person", "Rund 40–60 Dosen"],
                ["**60–70 L**", "Partykeller, Gäste", "Dosen und Flaschen"],
                ["**über 100 L**", "Große Feiern", "Kisten-Ersatz"],
              ],
            },
          },
          { p: "Die Angaben in der Tabelle sind grobe Richtwerte – je nach Einlegeböden passt mehr oder weniger hinein. Die meisten Getränkekühlschränke dürfen nicht in Schränke eingebaut werden, weil sie Luft zur Wärmeabgabe brauchen. Prüfe die Herstellerangabe zum Wandabstand." },
          { list: ["Kompressor für zuverlässige Kühlung", "Lautstärke in dB laut Hersteller vergleichen", "Energieeffizienzklasse beachten", "Glastür und Licht für den Überblick", "Wandabstand und Stellplatz prüfen"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: Bar-Kühlschränke und Mini-Kühlschränke",
    intro: "Weitere Klarstein-Modelle und ein Mini-Kühlschrank für den Schreibtisch.",
    items: [
      { name: "Klarstein Getränkekühlschrank 60 L Glastür LED", for: "Klassisch mit LED", text: "60-Liter-Kühlschrank mit Glastür und LED-Beleuchtung.", asin: "B07KGG823C", query: "Klarstein Getränkekühlschrank 60 L Glastür LED" },
      { name: "Klarstein Beersafe XL Onyx 60 L", for: "Dunkles Design", text: "Bar-Kühlschrank in dunkler Optik mit Glastür.", asin: "B07JMVXSVK", query: "Klarstein Beersafe XL Onyx" },
      { name: "Klarstein Coachella 60 mit App", for: "Mit App-Steuerung", text: "Getränkekühlschrank mit App-Steuerung (Herstellerangabe).", asin: "B0BZPPKLJB", query: "Klarstein Coachella 60 App" },
      { name: "Klarstein Coachella 50 Onyx", for: "Etwas kleiner", text: "50-Liter-Variante in dunklem Design.", asin: "B0BKSXK1FB", query: "Klarstein Coachella 50 Onyx" },
      { name: "Canal Toys Mini-Kühlschrank Gamer 4 L", for: "Für den Schreibtisch", text: "Kleiner USB-Kühlschrank für ein paar Dosen – eher Gadget als echter Kühlschrank.", asin: "B0CXG455BS", query: "Canal Toys Mini Fridge Gamer" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Energie und Pflege",
        blocks: [
          { quick: "Mit Abstand zur Wand aufstellen, nach dem Transport einige Stunden warten, auf 5 bis 8 °C einstellen und bei Eisbildung abtauen." },
          { figure: "steps" },
          { p: "Ein Getränkekühlschrank läuft rund um die Uhr. Ein Modell mit besserer Energieeffizienzklasse spart über die Jahre spürbar Strom. Wer den Kühlschrank nur am Wochenende braucht, kann ihn unter der Woche ausschalten – dann aber die Tür einen Spalt offen lassen, damit sich kein Schimmel bildet. Neben dem Kühlschrank machen sich ein [Dartautomat](/dartautomaten/) und ein [Kickertisch](/kickertische/) gut." },
          { callout: { title: "Hinweis", text: "Glastüren lassen Licht hinein. Direkte Sonne auf dem Kühlschrank erhöht den Stromverbrauch – Standort im Schatten wählen." } },
          { facts: [{ value: "63 L", label: "Bomann KSG 7287" }, { value: "3–10 °C", label: "Temperaturbereich KSG 7287" }, { value: "5–8 °C", label: "ideal für Getränke" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Getränkekühlschrank ist der beste?", a: "Unsere beste Gesamtwahl ist der Bomann KSG 7287 mit 63 Litern. Kompakter ist der Bomann KSG 7291, mit Bar-Optik der Klarstein Beersafe 60 L." },
    { q: "Wie laut ist ein Getränkekühlschrank?", a: "Kompressorgeräte brummen hörbar, wenn der Kompressor läuft. Die Hersteller geben die Lautstärke in Dezibel an – zum Vergleich lohnt der Blick ins Datenblatt." },
    { q: "Kompressor oder Thermoelektrik?", a: "Kompressor-Kühlschränke kühlen kräftiger und zuverlässiger. Thermoelektrische Geräte sind leiser, kühlen aber nur begrenzt unter die Raumtemperatur." },
    { q: "Wie viele Dosen passen in 50 Liter?", a: "Als grober Richtwert rund 40 bis 60 Dosen, je nach Einlegeböden." },
    { q: "Kann ich einen Getränkekühlschrank einbauen?", a: "Meist nicht. Freistehende Geräte brauchen Luft zur Wärmeabgabe. Herstellerangaben zum Wandabstand beachten." },
  ],

  sources: [
    { label: "Bomann", url: "https://www.bomann.de/" },
    { label: "Klarstein", url: "https://www.klarstein.de/" },
    { label: "EU-Energielabel", url: "https://energy-efficient-products.ec.europa.eu/" },
  ],

  related: [
    { slug: "dartautomaten", text: "Dartautomaten." },
    { slug: "kickertische", text: "Kickertische." },
    { slug: "sitzsaecke", text: "Sitzsäcke." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
