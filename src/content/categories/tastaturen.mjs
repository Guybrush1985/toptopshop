// Kategorie: Tastaturen fürs Home-Office
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "tastaturen",
  area: "home-office",
  navLabel: "Tastaturen",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Tastaturen fürs Home-Office 2026",
  metaDescription:
    "Flach, ergonomisch oder mechanisch: Die 3 besten Tastaturen fürs Home-Office 2026 mit deutschem QWERTZ-Layout – plus geteilte Ergo-Tastaturen in der Top 5.",

  eyebrow: "Home-Office · Tastatur",
  h1: "Die 3 besten Tastaturen fürs Home-Office 2026",
  lead:
    "Auf keiner anderen Oberfläche verbringen die Finger so viel Zeit. Wir zeigen die drei besten Tastaturen für lange Arbeitstage – flach, ergonomisch und mechanisch, alle mit deutschem Layout.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Logitech MX Keys S**](produkt:1): flach, leise, beleuchtet und mit drei Geräten koppelbar. Das beste Preis-Leistungs-Verhältnis bietet die ergonomische [**Logitech Wave Keys**](produkt:2) mit Wellenform und Handballenauflage; die Premium-Wahl ist die mechanische [**Keychron Q1 Max**](produkt:3) im Vollmetallgehäuse.",

  top3Title: "Unsere Top 3 Tastaturen",
  top3Intro: "Drei Philosophien: die flache Premium-Tastatur, die sanft ergonomische Welle und die mechanische Tastatur für Vielschreiber. Alle drei gibt es mit deutschem QWERTZ-Layout.",
  comparisonTitle: "Die 3 besten Tastaturen im Vergleich",

  criteria: [
    { key: "tippen", label: "Tippgefühl", weight: 0.3, description: "Anschlag, Präzision, Lautstärke und Ermüdung bei langen Texten." },
    { key: "ergonomie", label: "Ergonomie", weight: 0.25, description: "Handhaltung, Handballenauflage, Neigung." },
    { key: "ausstattung", label: "Ausstattung", weight: 0.2, description: "Funk, Multi-Device, Beleuchtung, Akku, Software." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben, Händlerangaben (Layout, Verbindungen, Akku) sowie Hinweise der DGUV zu Eingabegeräten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Logitech MX Keys S",
      brand: "Logitech",
      variant: "QWERTZ, Graphit",
      visual: { kind: "keyboard", tone: "forest" },
      priceTier: 2,
      ratings: { tippen: 8.5, ergonomie: 8.0, ausstattung: 9.5, preis: 8.0 },
      bestFor: "Die meisten Büroarbeiter",
      verdict:
        "Die Referenz unter den flachen Tastaturen: muldenförmige Tasten, leiser Anschlag, Hintergrundbeleuchtung mit Annäherungssensor und Easy-Switch für drei Geräte.",
      features: [
        "Flache, leise Tasten mit Mulde, programmierbare Tasten, Hintergrundbeleuchtung (Herstellerangabe)",
        "Bluetooth und Logi-Bolt-Empfänger, bis zu drei Geräte, USB-C-Akku",
        "Akku laut Hersteller bis 10 Tage mit, bis 5 Monate ohne Beleuchtung",
      ],
      pros: ["Präzises, leises Tippen", "Drei Geräte per Knopfdruck", "Windows, macOS, Linux"],
      cons: ["Keine Handballenauflage im Basispaket", "Flach – für Ergo-Bedarf nicht ideal"],
      specs: { bauform: "Flach, Vollformat", schalter: "Scherenmechanik", verbindung: "Bluetooth, Logi Bolt", akku: "Akku, USB-C", layout: "QWERTZ" },
      asin: "B07W8Q8VY6",
      query: "Logitech MX Keys S QWERTZ",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Logitech Wave Keys",
      brand: "Logitech",
      variant: "QWERTZ, Weiß",
      visual: { kind: "keyboard", tone: "mint" },
      priceTier: 1,
      ratings: { tippen: 7.5, ergonomie: 9.0, ausstattung: 7.5, preis: 9.0 },
      bestFor: "Einstieg in die Ergonomie",
      verdict:
        "Ergonomie ohne Umgewöhnung: Die sanfte Welle und die gepolsterte Handballenauflage entlasten die Handgelenke – das Layout bleibt vertraut.",
      features: [
        "Gewellte Tastenanordnung mit gepolsterter Handballenauflage aus Memory-Schaum (Herstellerangabe)",
        "Bluetooth und Logi-Bolt-Empfänger, Easy-Switch",
        "Zwei AAA-Batterien, laut Händler bis zu 3 Jahre Laufzeit",
      ],
      pros: ["Spürbar entspanntere Handhaltung", "Kaum Umgewöhnung", "Günstig"],
      cons: ["Keine Beleuchtung", "Batterien statt Akku"],
      specs: { bauform: "Wellenform mit Auflage", schalter: "Membran", verbindung: "Bluetooth, Logi Bolt", akku: "2 × AAA", layout: "QWERTZ" },
      asin: "B07W6JPVQC",
      query: "Logitech Wave Keys QWERTZ Weiß",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Keychron Q1 Max (DE-ISO)",
      brand: "Keychron",
      variant: "Gateron Jupiter Brown",
      visual: { kind: "keyboard", tone: "green" },
      priceTier: 3,
      ratings: { tippen: 9.5, ergonomie: 7.0, ausstattung: 9.0, preis: 6.5 },
      bestFor: "Vielschreiber, Programmierer",
      verdict:
        "Für alle, die beim Tippen etwas spüren wollen: Vollaluminium-Gehäuse, Hot-Swap-Schalter, QMK/VIA-Programmierung und kabellos per 2,4 GHz oder Bluetooth.",
      features: [
        "75-%-Layout DE-ISO, CNC-gefrästes Aluminiumgehäuse (Herstellerangabe)",
        "Hot-Swap-Schalter (Gateron Jupiter), Drehregler, QMK/VIA",
        "2,4 GHz, Bluetooth 5.1 für drei Geräte und USB-C, 4000-mAh-Akku",
      ],
      pros: ["Hervorragendes Tippgefühl", "Frei programmierbar", "Schalter tauschbar"],
      cons: ["Schwer (rund 1,7 kg)", "Hoch – Handballenauflage empfehlenswert"],
      specs: { bauform: "75 %, mechanisch", schalter: "Gateron Jupiter, Hot-Swap", verbindung: "2,4 GHz, Bluetooth, USB-C", akku: "4000 mAh", layout: "DE-ISO" },
      asin: "B0DFM5HZ8L",
      query: "Keychron Q1 Max DE-ISO Gateron Brown",
    },
  ],

  comparison: [
    { key: "bauform", label: "Bauform" },
    { key: "schalter", label: "Tasten" },
    { key: "verbindung", label: "Verbindung" },
    { key: "akku", label: "Strom" },
    { key: "layout", label: "Layout" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-tastaturen-home-office-2026-bewertung.svg",
      title: "Die 3 besten Tastaturen fürs Home-Office 2026",
      alt: "Balkendiagramm: Bewertung von Logitech MX Keys S, Wave Keys und Keychron Q1 Max in Tippgefühl, Ergonomie, Ausstattung und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. MX Keys S ist am vielseitigsten, Wave Keys am ergonomischsten, Q1 Max tippt sich am besten.",
    },
    steps: {
      kind: "steps",
      file: "tastatur-ergonomisch-einrichten.svg",
      title: "Tastatur ergonomisch einrichten",
      subtitle: "Fünf Schritte gegen müde Handgelenke",
      alt: "Infografik: Tastatur ergonomisch einrichten – Position, Höhe, Neigung, Handballen, Pausen",
      caption: "Orientierung nach den Hinweisen der DGUV zu Eingabegeräten.",
      steps: [
        { title: "Vor dem Körper", text: "Die Tastatur mittig vor dir, 10 bis 15 cm vom Tischrand entfernt." },
        { title: "Ellbogen im rechten Winkel", text: "Unterarme liegen locker, Schultern entspannt." },
        { title: "Flach statt steil", text: "Ausklappfüße eher einklappen – das hält die Handgelenke gerade." },
        { title: "Handballen ablegen", text: "Eine Auflage hilft bei hohen Tastaturen, in Tipp-Pausen abzulegen." },
        { title: "Pausen machen", text: "Kurze Unterbrechungen und Dehnübungen beugen Beschwerden vor." },
      ],
    },
  },

  editorial: {
    title: "Flach, ergonomisch oder mechanisch?",
    intro: "Welche Tastatur zu dir passt, hängt davon ab, wie viel du schreibst und wo es zwickt.",
    sections: [
      {
        id: "beste-tastatur",
        h2: "Welche Tastatur ist die beste fürs Home-Office?",
        blocks: [
          { quick: "Für die meisten ist die [Logitech MX Keys S](produkt:1) die beste Wahl. Wer seine Handgelenke entlasten will, greift zur [Logitech Wave Keys](produkt:2); wer mechanisches Tippen liebt, zur [Keychron Q1 Max](produkt:3)." },
          { first: "Die Laptop-Tastatur ist ein Kompromiss: flach, eng und oft zu tief, wenn der Laptop erhöht steht. Eine externe Tastatur macht den Arbeitsplatz ergonomischer, weil Bildschirm und Hände nicht mehr an derselben Stelle sein müssen." },
          { p: "Drei Bauformen haben sich durchgesetzt: flache Tastaturen mit Scherenmechanik, die sich wie ein gutes Notebook anfühlen; ergonomische Tastaturen, die die Hände leicht drehen oder trennen; und mechanische Tastaturen mit einzelnen Schaltern für ein deutliches, präzises Tippgefühl." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Tastaturkauf achten?",
        blocks: [
          { quick: "Achte auf das deutsche QWERTZ-Layout, die passende Bauform, eine Funkverbindung mit mehreren Geräten und – bei Beschwerden – auf ergonomische Formen." },
          {
            table: {
              caption: "Bauformen im Überblick",
              head: ["Bauform", "Stärken", "Schwächen"],
              rows: [
                ["**Flach (Scherenmechanik)**", "Leise, präzise, platzsparend", "Wenig Hub"],
                ["**Wellenform**", "Entspanntere Handgelenke, kaum Umgewöhnung", "Größer"],
                ["**Geteilt (Split)**", "Natürliche Schulterhaltung", "Umgewöhnung nötig"],
                ["**Mechanisch**", "Präzises Tippgefühl, langlebig", "Lauter, höher, teurer"],
              ],
            },
          },
          { h3: "Layout prüfen" },
          { p: "Viele Angebote existieren in mehreren Layouts. Achte im Titel auf „QWERTZ“ oder „DE“ – sonst landet eine skandinavische oder US-Variante auf dem Tisch." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-ergonomisch",
    h2: "Die 5 besten ergonomischen und geteilten Tastaturen",
    intro: "Wenn Handgelenke, Unterarme oder Schultern Beschwerden machen, lohnt sich ein Blick auf diese fünf Alternativen – von der geteilten Tastatur bis zur flachen Mechanik.",
    items: [
      { name: "Logitech ERGO K860", for: "Geteilt & gewölbt", text: "Geteilte, gewölbte Tastenanordnung mit Handballenauflage; laut Hersteller 25 % weniger Handgelenkbeugung als ohne Auflage.", asin: "B07W6JPVP3", query: "Logitech ERGO K860 QWERTZ" },
      { name: "Kinesis Freestyle2 (QWERTZ)", for: "Komplett geteilt", text: "Zwei getrennte Hälften mit verstellbarem Abstand – für eine schulterbreite Haltung.", asin: "B00OWW82PM", query: "Kinesis Freestyle2 QWERTZ" },
      { name: "Logitech MX Mechanical (QWERTZ)", for: "Flach & mechanisch", text: "Kabellose, flache mechanische Tastatur mit taktilen, leisen Schaltern und Beleuchtung.", asin: "B07W7L3Y5N", query: "Logitech MX Mechanical QWERTZ" },
      { name: "CHERRY KW 9100 Slim (QWERTZ)", for: "Flach & günstig", text: "Flache Funktastatur mit Bluetooth oder 2,4 GHz, Akku, Metallplatte und sechs Zusatztasten.", asin: "B0BG2GZJ1Z", query: "CHERRY KW 9100 Slim QWERTZ" },
      { name: "Logitech MX Keys S for Mac (QWERTZ)", for: "Für den Mac", text: "Die MX Keys S mit Mac-Tastenbelegung – für MacBook, iMac und iPad.", asin: "B0D2P8WFLH", query: "Logitech MX Keys S for Mac QWERTZ" },
    ],
  },

  guide: {
    sections: [
      {
        id: "ergonomie-tastatur",
        h2: "So vermeidest du Beschwerden beim Tippen",
        blocks: [
          { quick: "Stelle Stuhl und Tisch so ein, dass die Ellbogen im rechten Winkel liegen, halte die Handgelenke gerade und mach regelmäßig Pausen. Bei anhaltenden Beschwerden ärztlichen Rat einholen." },
          { figure: "steps" },
          { p: "Ergonomische Tastaturen können helfen, ersetzen aber keine gute Arbeitshaltung. Wer eine geteilte Tastatur ausprobiert, sollte einige Tage Eingewöhnung einplanen – anfangs sinkt die Tippgeschwindigkeit." },
          { callout: { title: "Gesundheit", text: "Bei Schmerzen, Kribbeln oder Taubheit in Händen und Armen sprich mit einer Ärztin oder einem Arzt. Eine Tastatur ist kein Medizinprodukt." } },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Tastatur ist die beste fürs Home-Office?", a: "Unsere beste Gesamtwahl ist die Logitech MX Keys S. Ergonomischer und günstiger ist die Logitech Wave Keys, die Premium-Wahl die mechanische Keychron Q1 Max." },
    { q: "Ist eine mechanische Tastatur besser zum Schreiben?", a: "Viele Vielschreiber empfinden mechanische Tastaturen als präziser und weniger ermüdend. Sie sind aber lauter und höher als flache Tastaturen." },
    { q: "Hilft eine ergonomische Tastatur gegen Handgelenkschmerzen?", a: "Sie kann die Handhaltung verbessern. Bei Beschwerden sollte man aber auch die Arbeitshaltung prüfen und ärztlichen Rat einholen." },
    { q: "Woran erkenne ich das deutsche Layout?", a: "Am Zusatz QWERTZ oder DE im Produkttitel. Viele Tastaturen werden auch mit US-, UK- oder skandinavischem Layout angeboten." },
    { q: "Kann ich eine Tastatur mit Laptop und PC gleichzeitig nutzen?", a: "Ja, Tastaturen mit Multi-Device-Funktion wie die MX Keys S wechseln per Tastendruck zwischen bis zu drei Geräten." },
  ],

  sources: [
    { label: "Logitech: MX Keys S", url: "https://www.logitech.com/de-de" },
    { label: "Keychron: Q1 Max", url: "https://www.keychron.de/" },
    { label: "DGUV: Bildschirmarbeit", url: "https://www.dguv.de/" },
  ],

  related: [
    { slug: "maeuse", text: "Die passende Maus zur Tastatur." },
    { slug: "hoehenverstellbare-schreibtische", text: "Die richtige Tischhöhe für entspanntes Tippen." },
    { slug: "office-gadgets", text: "Desk-Pads und Kabelmanagement." },
    { area: "home-office", text: "Alle Home-Office-Ratgeber im Überblick." },
  ],
};
