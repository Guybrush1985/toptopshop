// Kategorie: Mäuse fürs Home-Office
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "maeuse",
  area: "home-office",
  navLabel: "Mäuse",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Mäuse fürs Home-Office 2026 – auch vertikal",
  metaDescription:
    "Ergonomische, vertikale und Präzisionsmäuse für lange Arbeitstage: Die 3 besten Mäuse fürs Home-Office 2026 im Vergleich – plus Trackball und Reisemaus.",

  eyebrow: "Home-Office · Maus",
  h1: "Die 3 besten Mäuse fürs Home-Office 2026",
  lead:
    "Eine gute Maus merkt man nicht – eine schlechte spätestens am Abend im Handgelenk. Wir zeigen die drei besten Mäuse für lange Arbeitstage, darunter zwei vertikale Modelle.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Logitech MX Master 3S**](produkt:1): ergonomisch geformt, leise, mit MagSpeed-Scrollrad und 8000-DPI-Sensor. Das beste Preis-Leistungs-Verhältnis bietet die vertikale [**Logitech Lift**](produkt:2) für kleine und mittlere Hände; für große Hände ist die [**Logitech MX Vertical**](produkt:3) die beste vertikale Maus.",

  top3Title: "Unsere Top 3 Mäuse",
  top3Intro: "Eine klassisch geformte Ergonomie-Maus und zwei vertikale Mäuse, die das Handgelenk in eine natürliche Handschlag-Position bringen.",
  comparisonTitle: "Die 3 besten Mäuse im Vergleich",

  criteria: [
    { key: "ergonomie", label: "Ergonomie & Komfort", weight: 0.35, description: "Form, Handhaltung, Gewicht, Passform für verschiedene Handgrößen." },
    { key: "praezision", label: "Präzision & Scrollen", weight: 0.25, description: "Sensor, Scrollrad, Tasten, Software." },
    { key: "alltag", label: "Alltag & Akku", weight: 0.15, description: "Akku oder Batterie, Multi-Device, Lautstärke." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Sensor, Akku, Handgrößen-Empfehlungen), Händlerangaben und Hinweise der DGUV zu Eingabegeräten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Logitech MX Master 3S",
      brand: "Logitech",
      variant: "Graphit",
      visual: { kind: "mouse", tone: "forest" },
      priceTier: 2,
      ratings: { ergonomie: 8.5, praezision: 9.5, alltag: 9.0, preis: 8.0 },
      bestFor: "Vielnutzer, Tabellen, Kreativarbeit",
      verdict:
        "Die Büromaus, an der sich alle messen: daumenfreundliche Form, extrem schnelles MagSpeed-Scrollrad, Daumenrad für horizontales Scrollen und leise Klicks.",
      features: [
        "8000-DPI-Sensor, funktioniert laut Hersteller auch auf Glas",
        "MagSpeed-Scrollrad mit bis zu 1.000 Zeilen pro Sekunde, Daumenrad, leise Klicks",
        "Bis zu 70 Tage Akku, 1 Minute Laden für 3 Stunden (Herstellerangabe), drei Geräte",
      ],
      pros: ["Bestes Scrollrad", "Sehr vielseitig programmierbar", "Leise Klicks"],
      cons: ["Groß und schwer (141 g)", "Nicht für Linkshänder"],
      specs: { form: "ergonomisch, rechts", sensor: "8000 DPI", akku: "Akku, bis 70 Tage", geraete: "3", haende: "mittel bis groß" },
      asin: "B07W4DGFSM",
      query: "Logitech MX Master 3S Graphit",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Logitech Lift Vertical Ergonomic Mouse",
      brand: "Logitech",
      variant: "Graphit, rechts",
      visual: { kind: "mouse", tone: "mint" },
      priceTier: 1,
      ratings: { ergonomie: 9.0, praezision: 7.5, alltag: 8.0, preis: 9.0 },
      bestFor: "Kleine und mittlere Hände, Handgelenkbeschwerden",
      verdict:
        "Der günstigste Einstieg in die vertikale Maus: Die Hand liegt in Handschlag-Position, das Handgelenk wird weniger verdreht – ideal für kleine und mittlere Hände.",
      features: [
        "Vertikale Form für kleine bis mittlere Hände (Herstellerangabe), auch als Linkshänder-Version",
        "Leise Klicks, SmartWheel, vier Tasten",
        "Bluetooth oder Logi Bolt, Batterie laut Hersteller bis 2 Jahre",
      ],
      pros: ["Spürbar entspanntere Handhaltung", "Günstig", "Linkshänder-Version verfügbar"],
      cons: ["Für große Hände zu klein", "Weniger präzise als MX Master"],
      specs: { form: "vertikal (57°)", sensor: "–", akku: "AA-Batterie", geraete: "3", haende: "klein bis mittel" },
      asin: "B07W4DGC27",
      query: "Logitech Lift Vertical Ergonomic Mouse",
    },
    {
      rank: 3,
      label: "Beste vertikale Maus für große Hände",
      name: "Logitech MX Vertical",
      brand: "Logitech",
      variant: "Schwarz",
      visual: { kind: "mouse", tone: "green" },
      priceTier: 2,
      ratings: { ergonomie: 8.5, praezision: 8.0, alltag: 8.5, preis: 7.5 },
      bestFor: "Große Hände, lange Tage",
      verdict:
        "Die größere Schwester der Lift: 57 Grad Neigung, 4000-DPI-Sensor und Akku – Logitech selbst empfiehlt sie für größere Hände.",
      features: [
        "Vertikaler Winkel von 57°, 4000-DPI-Sensor (Herstellerangabe)",
        "Akku, laut Hersteller bis zu vier Monate pro Ladung",
        "Bluetooth und Unifying-Empfänger, drei Geräte",
      ],
      pros: ["Komfortabel für große Hände", "Akku statt Batterie", "Multi-Device"],
      cons: ["Kein horizontales Scrollen", "Teils nur eingeschränkt verfügbar"],
      specs: { form: "vertikal (57°)", sensor: "4000 DPI", akku: "Akku, bis 4 Monate", geraete: "3", haende: "groß" },
      asin: "B07FNHV4MW",
      query: "Logitech MX Vertical",
    },
  ],

  comparison: [
    { key: "form", label: "Form" },
    { key: "sensor", label: "Sensor" },
    { key: "akku", label: "Strom" },
    { key: "geraete", label: "Geräte" },
    { key: "haende", label: "Handgröße" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-maeuse-home-office-2026-bewertung.svg",
      title: "Die 3 besten Mäuse fürs Home-Office 2026",
      alt: "Balkendiagramm: Bewertung von Logitech MX Master 3S, Lift und MX Vertical in Ergonomie, Präzision, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Die MX Master 3S überzeugt in der Summe, die Lift bei Ergonomie und Preis.",
    },
    steps: {
      kind: "steps",
      file: "maus-handgroesse-messen-anleitung.svg",
      title: "Welche Maus passt zu meiner Hand?",
      subtitle: "In fünf Schritten zur richtigen Größe",
      alt: "Infografik: Handgröße messen und passende Maus wählen – messen, Griffart, Form, vertikal testen, Eingewöhnung",
      caption: "Die Handlänge ist der wichtigste Anhaltspunkt bei der Mausgröße.",
      steps: [
        { title: "Hand messen", text: "Vom Handgelenk bis zur Spitze des Mittelfingers – unter etwa 18 cm gilt als klein, über 19 cm als groß." },
        { title: "Griffart prüfen", text: "Liegt die ganze Hand auf (Palm) oder nur die Fingerspitzen (Fingertip)?" },
        { title: "Form wählen", text: "Klassisch-ergonomisch für Präzision, vertikal für entspannte Handgelenke." },
        { title: "Vertikal testen", text: "Mit einer günstigen vertikalen Maus ausprobieren, ob die Haltung angenehm ist." },
        { title: "Eingewöhnen", text: "Eine vertikale Maus braucht einige Tage, bis sie sich natürlich anfühlt." },
      ],
    },
  },

  editorial: {
    title: "Klassisch oder vertikal: die richtige Maus für lange Tage",
    intro: "Warum die Handgröße wichtiger ist als die Marke und wann sich eine vertikale Maus lohnt.",
    sections: [
      {
        id: "beste-maus",
        h2: "Welche Maus ist die beste fürs Home-Office?",
        blocks: [
          { quick: "Die beste Maus für die meisten ist die [Logitech MX Master 3S](produkt:1). Wer das Handgelenk entlasten will, nimmt eine vertikale Maus: die [Logitech Lift](produkt:2) für kleine bis mittlere, die [MX Vertical](produkt:3) für große Hände." },
          { first: "Bei einer normalen Maus liegt die Hand flach, der Unterarm ist nach innen gedreht. Über Stunden kann das Handgelenk und Unterarm belasten. Ergonomische Mäuse stützen die Hand besser, vertikale Mäuse drehen sie in eine Haltung wie beim Händeschütteln." },
          { p: "Wichtiger als jede Technik ist die Passform: Eine zu große Maus zwingt zum Strecken, eine zu kleine zum Verkrampfen. Logitech gibt für die Lift ausdrücklich kleine bis mittlere Hände an und verweist für große Hände auf die MX Vertical." },
          { figure: "scores" },
          { quote: "Die beste ergonomische Maus ist die, die zur eigenen Hand passt." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Mauskauf achten?",
        blocks: [
          { quick: "Achte auf die Handgröße, die passende Form (klassisch oder vertikal), ein gutes Scrollrad, leise Klicks und Multi-Device, wenn du mehrere Rechner nutzt." },
          {
            table: {
              caption: "Mausformen im Überblick",
              head: ["Form", "Stärken", "Schwächen"],
              rows: [
                ["**Ergonomisch (rechts)**", "Präzise, viele Tasten, vertraut", "Unterarm bleibt gedreht"],
                ["**Vertikal**", "Natürliche Handhaltung", "Eingewöhnung, etwas weniger präzise"],
                ["**Trackball**", "Kein Bewegen des Arms, wenig Platz", "Ungewohnt, Kugel reinigen"],
                ["**Kompakt (Reise)**", "Klein, leicht", "Weniger Halt für lange Tage"],
              ],
            },
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: Trackball, Reisemaus und Linkshänder",
    intro: "Für unterwegs, wenig Platz, die linke Hand oder das kleine Budget: fünf Mäuse für besondere Ansprüche.",
    items: [
      { name: "Logitech ERGO M575 Trackball", for: "Trackball", text: "Bedienung mit dem Daumen, der Arm bleibt ruhig – für wenig Platz und entspannte Schultern.", asin: "B07W6HKMCN", query: "Logitech ERGO M575 Trackball" },
      { name: "Logitech MX Anywhere 3S", for: "Kompakt & unterwegs", text: "Kleine Maus mit 8000-DPI-Sensor, MagSpeed-Scrollrad und bis zu 70 Tagen Akku (Herstellerangabe).", asin: "B07W4DGLY6", query: "Logitech MX Anywhere 3S" },
      { name: "Logitech Signature M650", for: "Günstig & leise", text: "Leise Klicks, SmartWheel, AA-Batterie mit bis zu 24 Monaten Laufzeit (Herstellerangabe); auch als Version für große Hände.", asin: "B07W6G822T", query: "Logitech Signature M650" },
      { name: "Logitech Lift Left", for: "Vertikal für Linkshänder", text: "Die Lift in Linkshänder-Ausführung für kleine bis mittlere Hände.", asin: "B07W8P4PDD", query: "Logitech Lift Left Vertical Ergonomic Mouse" },
      { name: "Keychron M5 Wireless Vertical Mouse", for: "Vertikal & präzise", text: "Vertikale Maus mit PAW3950-Sensor, 8K-Polling, drei Verbindungsarten und bis zu 140 Stunden Akku (Herstellerangabe).", asin: "B0FBW16HC6", query: "Keychron M5 Wireless Vertical Mouse" },
    ],
  },

  guide: {
    sections: [
      {
        id: "maus-ergonomie",
        h2: "So nutzt du die Maus ergonomisch",
        blocks: [
          { quick: "Halte die Maus nah an der Tastatur, den Unterarm aufgelegt und das Handgelenk gerade. Eine schnellere Zeigergeschwindigkeit reduziert große Armbewegungen." },
          { figure: "steps" },
          {
            list: [
              "**Nah an die Tastatur:** Je näher die Maus, desto weniger muss der Arm abspreizen.",
              "**Geschwindigkeit anpassen:** Ein etwas schnellerer Zeiger spart Wege.",
              "**Tastenkürzel nutzen:** Programmierbare Tasten ersetzen viele Klicks.",
              "**Hand wechseln:** Wer kann, nutzt zwischendurch die andere Hand.",
            ],
          },
          { callout: { title: "Gesundheit", text: "Bei anhaltenden Schmerzen oder Kribbeln in Hand und Arm solltest du ärztlichen Rat einholen. Eine Maus ist kein Medizinprodukt." } },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Maus ist die beste fürs Home-Office?", a: "Unsere beste Gesamtwahl ist die Logitech MX Master 3S. Vertikale Alternativen sind die Logitech Lift für kleine bis mittlere und die MX Vertical für große Hände." },
    { q: "Hilft eine vertikale Maus gegen Handgelenkschmerzen?", a: "Viele Nutzer empfinden die Handschlag-Position als angenehmer, weil der Unterarm weniger verdreht wird. Bei Beschwerden sollte man trotzdem ärztlichen Rat einholen." },
    { q: "Wie lange dauert die Umgewöhnung auf eine vertikale Maus?", a: "Meist einige Tage bis zwei Wochen. Am Anfang fühlt sich die Präzision ungewohnt an." },
    { q: "Welche Maus für große Hände?", a: "Die MX Master 3S und die MX Vertical sind für mittlere bis große Hände gedacht. Die Logitech Signature M650 gibt es zusätzlich in einer L-Version." },
    { q: "Trackball oder Maus?", a: "Ein Trackball spart Platz und hält den Arm ruhig, braucht aber Eingewöhnung. Für präzise Arbeit bevorzugen viele weiterhin eine Maus." },
  ],

  sources: [
    { label: "Logitech: Lift – Hinweise zur Handgröße", url: "https://www.logitech.com/de-de" },
    { label: "DGUV: Bildschirmarbeit", url: "https://www.dguv.de/" },
  ],

  related: [
    { slug: "tastaturen", text: "Die passende Tastatur zur Maus." },
    { slug: "office-gadgets", text: "Desk-Pads für Maus und Tastatur." },
    { slug: "hoehenverstellbare-schreibtische", text: "Die richtige Tischhöhe entlastet Schultern und Arme." },
    { area: "home-office", text: "Alle Home-Office-Ratgeber im Überblick." },
  ],
};
