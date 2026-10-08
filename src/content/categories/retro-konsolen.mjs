// Kategorie: Retro-Konsolen mit lizenzierten Spielen
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "retro-konsolen",
  area: "gaming-room",
  navLabel: "Retro-Konsolen",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Retro-Konsolen 2026",
  metaDescription:
    "Evercade, Atari 2600+ und Retro-Handhelds: Die 3 besten Retro-Konsolen 2026 im Vergleich – nur Geräte mit laut Hersteller lizenzierten Spielen.",

  eyebrow: "Gaming-Room · Retro",
  h1: "Die 3 besten Retro-Konsolen 2026",
  lead:
    "Klassiker aus den 80ern und 90ern auf dem großen Fernseher – mit echten Modulen und offiziell lizenzierten Spielen. Wir zeigen die drei besten Retro-Konsolen und in der Top 5 Controller und weitere Systeme.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Evercade VS-R**](produkt:1) mit lizenzierten Spielemodulen und Platz für bis zu vier Spieler. Das beste Preis-Leistungs-Verhältnis bietet der [**Atari 2600+**](produkt:2), der auch originale Atari-Module abspielt; die Wahl für unterwegs ist der Handheld [**Evercade EXP-R**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 100 €" },
    2: { symbol: "€€", label: "100–150 €" },
    3: { symbol: "€€€", label: "über 150 €" },
  },

  top3Title: "Unsere Top 3 Retro-Konsolen",
  top3Intro: "Alle drei nutzen laut Hersteller offiziell lizenzierte Spiele auf Modulen. Damit unterstützt du die Rechteinhaber – anders als bei Geräten mit tausenden vorinstallierten Spielen, die in der Regel nicht lizenziert sind.",
  comparisonTitle: "Die 3 besten Retro-Konsolen im Vergleich",

  criteria: [
    { key: "spiele", label: "Spiele & Lizenzen", weight: 0.35, description: "Auswahl, Qualität, Lizenzierung." },
    { key: "technik", label: "Technik & Bild", weight: 0.25, description: "HDMI, Auflösung, Emulation, Controller." },
    { key: "alltag", label: "Bedienung & Alltag", weight: 0.15, description: "Menüs, Speicherstände, Spieler." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Spielen." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Spiele, Module, Anschlüsse, Spieler), Händlerangaben und die Lizenzangaben der Hersteller. Geräte, bei denen die Lizenzierung der vorinstallierten Spiele nicht nachvollziehbar ist, haben wir bewusst nicht aufgenommen. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Evercade VS-R",
      brand: "Evercade",
      variant: "Solo (1 Controller)",
      visual: { kind: "console", tone: "forest" },
      priceTier: 2,
      ratings: { spiele: 9.5, technik: 8.5, alltag: 9.0, preis: 8.5 },
      bestFor: "Retro-Sammler und Familien",
      verdict:
        "Aus unserer Sicht die beste Retro-Konsole für den Fernseher: laut Hersteller Spielemodule mit lizenzierten Sammlungen von Atari, Namco, Data East und vielen mehr – mit Speicherständen und bis zu vier Spielern.",
      features: [
        "Lizenzierte Spielemodule (Evercade-Cartridges, Herstellerangabe)",
        "Bis zu vier Spieler (Herstellerangabe)",
        "HDMI-Ausgang, Speicherstände (Herstellerangabe)",
      ],
      pros: ["Große lizenzierte Bibliothek", "Echte Module zum Sammeln", "Vier Spieler"],
      cons: ["Module kosten extra", "Weitere Controller extra"],
      specs: { spiele: "Evercade-Module", anschluss: "HDMI", spieler: "bis 4", typ: "Heimkonsole", module: "ja" },
      asin: "B0FG2F49SR",
      query: "Evercade VS-R Solo",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Atari 2600+",
      brand: "Atari",
      variant: "mit CX40+ Joystick",
      visual: { kind: "console", tone: "mint" },
      priceTier: 1,
      ratings: { spiele: 8.5, technik: 8.5, alltag: 8.0, preis: 9.0 },
      bestFor: "Atari-Fans mit alten Modulen",
      verdict:
        "Der Klassiker neu aufgelegt: Optik wie das Original, HDMI-Ausgang und laut Hersteller kompatibel mit den meisten originalen 2600- und 7800-Modulen – ein 10-in-1-Modul liegt bei.",
      features: [
        "Kompatibel mit den meisten 2600- und 7800-Modulen (Herstellerangabe)",
        "HDMI-Ausgang, Breitbild-Modus (Herstellerangabe)",
        "Mit CX40+ Joystick und 10-in-1-Modul (Herstellerangabe)",
      ],
      pros: ["Spielt Originalmodule", "Authentische Optik", "Günstig"],
      cons: ["Nur Atari-Spiele", "Grafik sehr einfach"],
      specs: { spiele: "Atari 2600/7800-Module", anschluss: "HDMI", spieler: "1–2", typ: "Heimkonsole", module: "ja, original" },
      asin: "B0CG9SVRJY",
      query: "Atari 2600+",
    },
    {
      rank: 3,
      label: "Für unterwegs",
      name: "Evercade EXP-R",
      brand: "Evercade",
      variant: "Handheld, Solo",
      visual: { kind: "console", tone: "green" },
      priceTier: 2,
      ratings: { spiele: 9.0, technik: 8.0, alltag: 8.5, preis: 8.0 },
      bestFor: "Retro für unterwegs",
      verdict:
        "Der Handheld zur Evercade-Familie: nutzt dieselben lizenzierten Module wie die VS-R, lässt sich laut Hersteller an den Fernseher anschließen und hat vorinstallierte Spiele.",
      features: [
        "Kompatibel mit allen Evercade-Modulen (Herstellerangabe)",
        "Handheld mit eingebautem Bildschirm und Akku (Herstellerangabe)",
        "Anschluss an den Fernseher möglich (Herstellerangabe)",
      ],
      pros: ["Mobil", "Gleiche Module wie VS-R", "Lizenzierte Spiele"],
      cons: ["Kleiner Bildschirm", "Module kosten extra"],
      specs: { spiele: "Evercade-Module", anschluss: "HDMI (laut Hersteller)", spieler: "1 (Handheld)", typ: "Handheld", module: "ja" },
      asin: "B0FG28P3FM",
      query: "Evercade EXP-R Solo",
    },
  ],

  comparison: [
    { key: "typ", label: "Typ" },
    { key: "spiele", label: "Spiele" },
    { key: "anschluss", label: "Anschluss" },
    { key: "spieler", label: "Spieler" },
    { key: "module", label: "Module" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-retro-konsolen-2026-bewertung.svg",
      title: "Die 3 besten Retro-Konsolen 2026",
      alt: "Balkendiagramm: Bewertung von Evercade VS-R, Atari 2600+ und Evercade EXP-R",
      caption: "Unsere Bewertung je Kriterium. Spiele und Lizenzen wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "retro-ecke-einrichten.svg",
      title: "Retro-Ecke einrichten",
      subtitle: "Vom Fernseher bis zum Controller",
      alt: "Infografik: Retro-Ecke einrichten – Konsole wählen, Fernseher einstellen, Controller, Module sammeln, Altgeräte",
      caption: "So spielen sich Klassiker am besten.",
      steps: [
        { title: "Konsole wählen", text: "Lizenzierte Geräte mit Modulen oder Originalhardware." },
        { title: "Spielmodus am TV", text: "Game-Modus aktivieren für wenig Verzögerung." },
        { title: "Controller", text: "Kabellose Retro-Controller für mehr Spieler." },
        { title: "Module sammeln", text: "Spielesammlungen nach Lieblingsherstellern." },
        { title: "Altgeräte", text: "Alte Konsolen brauchen oft Adapter für HDMI." },
      ],
    },
  },

  editorial: {
    title: "Warum lizenzierte Spiele?",
    intro: "Warum wir nur Retro-Konsolen mit lizenzierten Spielen empfehlen und welche Möglichkeiten es gibt.",
    sections: [
      {
        id: "beste-retro-konsole",
        h2: "Welche Retro-Konsole ist die beste?",
        blocks: [
          { quick: "Für die meisten ist die [Evercade VS-R](produkt:1) die beste Wahl, weil sie viele lizenzierte Spielesammlungen bietet. Günstiger und für Atari-Fans ideal ist der [Atari 2600+](produkt:2), für unterwegs der [Evercade EXP-R](produkt:3)." },
          { first: "Retro-Gaming ist beliebt – und mit ihm gibt es einen Markt für günstige Geräte, die mit tausenden vorinstallierten Spielen werben. Diese Spiele sind in der Regel nicht lizenziert: Für Käufer ist kaum nachvollziehbar, ob die Rechteinhaber zugestimmt haben, und Qualität der Emulation, Updates und Support lassen sich schwer einschätzen. Wir empfehlen deshalb nur Konsolen, deren Spiele laut Hersteller **offiziell lizenziert** sind." },
          { p: "**Evercade** setzt auf Spielemodule mit Sammlungen einzelner Hersteller – von Atari und Namco bis zu Indie-Entwicklern. **Atari** bringt mit dem 2600+ und 7800+ seine Klassiker als Neuauflage, die originale Module abspielen. Größere Automaten-Erlebnisse findest du im Ratgeber [Arcade-Automaten](/arcade-spielautomaten/)." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf lizenzierte Spiele, einen HDMI-Ausgang, die Zahl der Spieler, Speicherstände und darauf, ob du alte Originalmodule nutzen möchtest." },
          {
            table: {
              caption: "Retro-Optionen im Vergleich",
              head: ["Option", "Stärken", "Schwächen"],
              rows: [
                ["**Evercade**", "Viele lizenzierte Sammlungen", "Module kosten extra"],
                ["**Atari 2600+/7800+**", "Spielt Originalmodule", "Nur Atari"],
                ["**Mini-Konsolen der Hersteller**", "Offiziell, fertig bestückt", "Oft nur noch gebraucht"],
                ["**Originalhardware**", "Echtes Erlebnis", "Teuer, Adapter nötig"],
              ],
            },
          },
          { p: "Wer noch alte Konsolen im Keller hat, kann sie über Adapter an moderne Fernseher anschließen. Das Bild ist ohne Aufbereitung aber oft unscharf. Neuauflagen mit HDMI sind deutlich bequemer. Für Couch-Runden lohnen sich kabellose Controller wie die von 8BitDo, die laut Hersteller mit vielen Systemen funktionieren." },
          { list: ["Lizenzierte Spiele statt Sammlungen unklarer Herkunft", "HDMI-Ausgang für moderne Fernseher", "Anzahl der Spieler und Controller", "Speicherstände für lange Spiele", "Kompatibilität mit Originalmodulen, falls vorhanden"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen und Controller",
    intro: "Für Atari-Fans, mehr Spieler und bessere Controller.",
    items: [
      { name: "Atari 7800+", for: "Der Nachfolger", text: "Neuauflage des Atari 7800 mit HDMI, kompatibel mit vielen 2600- und 7800-Modulen (Herstellerangabe).", asin: "B0DDLGC7YX", query: "Atari 7800+" },
      { name: "Evercade Wireless Controller", for: "Mehr Spieler", text: "Kabelloser Controller für die Evercade VS-R.", asin: "B0GPFGK4YX", query: "Evercade Wireless Controller" },
      { name: "8BitDo SN30 Pro", for: "Retro-Controller", text: "Kabelloser Controller im SNES-Stil für PC, Switch und Android.", asin: "B07CQKTWD8", query: "8BitDo SN30 Pro" },
      { name: "8BitDo Ultimate Bluetooth Controller", for: "Mit Ladestation", text: "Kabelloser Controller mit Ladestation, unter anderem für Switch und PC.", asin: "B0BGLQWW8F", query: "8BitDo Ultimate Bluetooth Controller" },
      { name: "AtGames Legends Pinball Micro", for: "Retro-Flipper", text: "Kompakter virtueller Flipper mit lizenzierten Tischen – mehr im Ratgeber Flipper.", asin: "B0BPZY7674", query: "AtGames Legends Pinball Micro" },
    ],
  },

  guide: {
    sections: [
      {
        id: "einrichten",
        h2: "Retro-Ecke einrichten",
        blocks: [
          { quick: "Retro-Konsole per HDMI anschließen, am Fernseher den Spielmodus aktivieren und für Mehrspieler-Runden kabellose Controller ergänzen." },
          { figure: "steps" },
          { p: "Viele Retro-Konsolen bieten Bildfilter, die alte Röhrenfernseher nachahmen (Scanlines). Probier sie aus – viele Spiele wurden für Röhrenbildschirme gestaltet und wirken damit stimmiger. Für die passende Atmosphäre sorgen [LED- und Neonlicht](/led-neon-beleuchtung/) und ein [Sitzsack](/sitzsaecke/) vor dem Fernseher." },
          { callout: { title: "Hinweis zu Geräten mit tausenden Spielen", warn: true, text: "Bei Geräten mit tausenden vorinstallierten Spielen sind diese in der Regel nicht lizenziert. Wir empfehlen solche Geräte deshalb nicht – auch weil Emulationsqualität, Updates und Support schwer einzuschätzen sind." } },
          { callout: { title: "Jugendschutz und Gesundheit", warn: true, text: "Achte auf die Alterskennzeichnung auf Verpackung oder Modul (USK, bei importierter Ware teils PEGI), soweit vorhanden. Viele Klassiker sind harmlos, einzelne Spiele enthalten aber Gewaltdarstellungen. Blinkende Bildeffekte können bei Menschen mit fotosensibler Epilepsie Anfälle auslösen – Warnhinweise des Herstellers beachten und Pausen einlegen. Handhelds nur mit geeignetem Ladegerät laden; Module und Kleinteile von Kleinkindern fernhalten." } },
          { facts: [{ value: "bis 4", label: "Spieler an der Evercade VS-R (Herstellerangabe)" }, { value: "10-in-1", label: "Modul beim Atari 2600+ (Herstellerangabe)" }, { value: "HDMI", label: "bei allen drei (Herstellerangabe)" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Retro-Konsole ist die beste?", a: "Unsere beste Gesamtwahl ist die Evercade VS-R mit lizenzierten Spielemodulen. Günstiger ist der Atari 2600+, für unterwegs der Evercade EXP-R." },
    { q: "Sind die Spiele auf Retro-Konsolen mit tausenden Spielen lizenziert?", a: "Die vorinstallierten Spiele sind in der Regel nicht lizenziert, und für Käufer ist die Rechtelage kaum nachvollziehbar. Wir empfehlen daher nur Geräte, deren Spiele laut Hersteller offiziell lizenziert sind." },
    { q: "Kann der Atari 2600+ alte Module abspielen?", a: "Ja, laut Hersteller ist er mit den meisten originalen Atari-2600- und 7800-Modulen kompatibel." },
    { q: "Was sind Evercade-Module?", a: "Spielemodule mit lizenzierten Sammlungen einzelner Hersteller, die laut Evercade in allen Evercade-Konsolen funktionieren." },
    { q: "Kann ich alte Konsolen an einen modernen Fernseher anschließen?", a: "Ja, mit passenden Adaptern oder Upscalern. Das Bild ist ohne Aufbereitung aber oft unscharf." },
  ],

  sources: [
    { label: "Evercade", url: "https://evercade.co.uk/" },
    { label: "Atari: 2600+", url: "https://atari.com/" },
    { label: "USK: Altersfreigaben", url: "https://usk.de/" },
  ],

  related: [
    { slug: "arcade-spielautomaten", text: "Arcade-Automaten." },
    { slug: "flipper", text: "Flipper." },
    { slug: "beamer-leinwand", text: "Beamer und Leinwand." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
