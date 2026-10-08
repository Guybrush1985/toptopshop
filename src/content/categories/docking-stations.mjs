// Kategorie: Docking-Stations
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "docking-stations",
  area: "home-office",
  navLabel: "Docking-Stations",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Docking-Stations 2026 – USB-C & Thunderbolt",
  metaDescription:
    "Laptop andocken, und Monitore, LAN und Strom hängen dran: Die 3 besten Docking-Stations 2026 für USB-C und Thunderbolt – mit Tipps für Mac und Windows.",

  eyebrow: "Home-Office · Dock",
  h1: "Die 3 besten Docking-Stations 2026",
  lead:
    "Ein Kabel rein, und der Laptop hängt an Monitoren, Netzwerk, Tastatur und Netzteil. Wir zeigen die drei Docks, die das am zuverlässigsten erledigen – für Mac und Windows.",
  answer:
    "Unsere beste Gesamtwahl ist das [**CalDigit TS4**](produkt:1): Thunderbolt 4, 98 W Ladeleistung, 2,5-Gbit-LAN und 18 Anschlüsse für Mac und Windows. Das beste Preis-Leistungs-Verhältnis bietet das [**UGREEN Revodok Pro Triple Display Dock**](produkt:2); für Firmen-Laptops mit USB-C ist das [**Lenovo ThinkPad Universal USB-C Dock**](produkt:3) die beste Wahl.",

  priceTiers: {
    1: { symbol: "€", label: "bis 100 €" },
    2: { symbol: "€€", label: "100–250 €" },
    3: { symbol: "€€€", label: "über 250 €" },
  },

  top3Title: "Unsere Top 3 Docking-Stations",
  top3Intro: "Ein Thunderbolt-Dock für höchste Ansprüche, ein günstiges USB-C-Dock für drei Monitore unter Windows und ein Business-Dock, das sich in Firmen bewährt hat.",
  comparisonTitle: "Die 3 besten Docking-Stations im Vergleich",

  criteria: [
    { key: "anschluss", label: "Anschlüsse & Monitore", weight: 0.3, description: "Anzahl und Art der Ports, unterstützte Monitore, LAN." },
    { key: "laden", label: "Laden & Leistung", weight: 0.25, description: "Ladeleistung für den Laptop, Datenrate, Netzteil." },
    { key: "kompat", label: "Kompatibilität", weight: 0.2, description: "Mac, Windows, Thunderbolt/USB4, Firmware-Updates." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung und Zuverlässigkeit." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Anschlüsse, Ladeleistung, Monitorunterstützung), Händlerangaben und Erfahrungsberichte von Käufern. Unabhängige Labortests von Dockingstations gibt es kaum. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "CalDigit TS4 Thunderbolt 4 Dock",
      brand: "CalDigit",
      variant: "18 Ports, 98 W",
      visual: { kind: "dock", tone: "forest" },
      priceTier: 3,
      ratings: { anschluss: 9.5, laden: 9.0, kompat: 9.5, preis: 7.0 },
      bestFor: "MacBook, Thunderbolt-Laptops, Kreative",
      verdict:
        "Das Dock, das alles kann: 18 Anschlüsse, 98 W für den Laptop, 2,5-Gbit-LAN und Kartenleser – und es funktioniert gleichermaßen mit Mac, Windows und Chrome OS.",
      features: [
        "3 × Thunderbolt 4, 5 × USB-A, 3 × USB-C, DisplayPort 1.4, 2,5GbE, SD/microSD (Herstellerangabe)",
        "Bis zu 98 W Ladeleistung, 230-W-Netzteil im Lieferumfang",
        "Windows: ein Monitor bis 8K; macOS: ein Monitor bis 6K 60 Hz, mit Apple-Silicon-Pro/Max mehr",
      ],
      pros: ["Enorme Anschlussvielfalt", "Sehr hohe Ladeleistung", "Mac und Windows"],
      cons: ["Teuer", "Für drei Monitore unter Windows ist ein USB-C-MST-Dock günstiger"],
      specs: { anschluss: "Thunderbolt 4", laden: "98 W", monitore: "1–2 (je nach Rechner)", lan: "2,5 Gbit/s", mac: "ja" },
      asin: "B09GFT334R",
      query: "CalDigit TS4 Thunderbolt 4 Dock",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "UGREEN Revodok Pro Triple Display Dock",
      brand: "UGREEN",
      variant: "2 × HDMI, 1 × DP, 100 W",
      visual: { kind: "dock", tone: "mint" },
      priceTier: 1,
      ratings: { anschluss: 8.0, laden: 8.0, kompat: 7.0, preis: 9.5 },
      bestFor: "Windows-Laptops mit drei Monitoren",
      verdict:
        "Für wenig Geld drei Monitore: Unter Windows liefert das Revodok Pro über USB-C Bild an bis zu drei Bildschirme und lädt den Laptop mit bis zu 100 W durch.",
      features: [
        "2 × HDMI und 1 × DisplayPort, je bis 4K 60 Hz (Herstellerangabe)",
        "4 × USB mit 10 Gbit/s (2 × USB-A, 2 × USB-C), Power Delivery bis 100 W",
        "Unter macOS nur gespiegelte Darstellung mehrerer Monitore (Händlerangabe)",
      ],
      pros: ["Sehr günstig", "Drei Monitore unter Windows", "Kompakt"],
      cons: ["Am Mac nur ein erweiterter Monitor", "Kein Thunderbolt"],
      specs: { anschluss: "USB-C", laden: "bis 100 W (Durchleitung)", monitore: "bis 3 (Windows)", lan: "je nach Variante", mac: "eingeschränkt" },
      asin: "B0CR6J2HCK",
      query: "UGREEN Revodok Pro Triple Display Dock 2 HDMI DP",
    },
    {
      rank: 3,
      label: "Beste Wahl für Firmen-Laptops",
      name: "Lenovo ThinkPad Universal USB-C Dock (40AY0090EU)",
      brand: "Lenovo",
      variant: "90-W-Netzteil",
      visual: { kind: "dock", tone: "green" },
      priceTier: 2,
      ratings: { anschluss: 8.5, laden: 8.0, kompat: 8.0, preis: 8.0 },
      bestFor: "Business-Laptops, IT-verwaltete Geräte",
      verdict:
        "Das bewährte Firmen-Dock: drei Monitore unter Windows, automatische Firmware-Updates und breite Kompatibilität – nicht nur mit ThinkPads.",
      features: [
        "Bis zu drei externe Monitore (2 × DisplayPort, 1 × HDMI) bis 4K 60 Hz (Händlerangabe)",
        "Laptop-Ladung, Netzteil mit 90 W im Lieferumfang",
        "Automatische Firmware-Updates, LAN, mehrere USB-Ports",
      ],
      pros: ["Zuverlässig im Büroalltag", "Drei Monitore", "Mit vielen USB-C-Laptops kompatibel"],
      cons: ["Ladeleistung je nach Angabe 90–100 W", "Am Mac nur ein erweiterter Monitor"],
      specs: { anschluss: "USB-C", laden: "90–100 W (je nach Angabe)", monitore: "bis 3 (Windows)", lan: "1 Gbit/s", mac: "eingeschränkt" },
      asin: "B09BDB266K",
      query: "Lenovo ThinkPad Universal USB-C Dock 40AY0090EU",
    },
  ],

  comparison: [
    { key: "anschluss", label: "Verbindung" },
    { key: "laden", label: "Laden" },
    { key: "monitore", label: "Monitore" },
    { key: "lan", label: "LAN" },
    { key: "mac", label: "Mac-tauglich" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-docking-stations-2026-bewertung.svg",
      title: "Die 3 besten Docking-Stations 2026",
      alt: "Balkendiagramm: Bewertung von CalDigit TS4, UGREEN Revodok Pro und Lenovo ThinkPad Universal USB-C Dock",
      caption: "Unsere Bewertung je Kriterium. Das CalDigit TS4 ist am vielseitigsten, UGREEN am günstigsten.",
    },
    steps: {
      kind: "steps",
      file: "docking-station-auswaehlen-checkliste.svg",
      title: "Die passende Dockingstation finden",
      subtitle: "Fünf Fragen vor dem Kauf",
      alt: "Infografik: Checkliste zur Auswahl einer Dockingstation – Anschluss, Monitore, Ladeleistung, Betriebssystem, Ports",
      caption: "Mit diesen fünf Fragen findest du das passende Dock.",
      steps: [
        { title: "Welcher Anschluss?", text: "Thunderbolt/USB4 oder nur USB-C? Am Laptop am Blitz- oder USB4-Symbol erkennbar." },
        { title: "Wie viele Monitore?", text: "Ein Monitor geht fast immer. Zwei oder drei hängen vom Betriebssystem und Chip ab." },
        { title: "Wie viel Watt?", text: "Ladeleistung des Docks mindestens so hoch wie das Laptop-Netzteil." },
        { title: "Mac oder Windows?", text: "MacBooks unterstützen kein MST – für mehrere Monitore Thunderbolt oder DisplayLink nötig." },
        { title: "Welche Ports?", text: "LAN, Kartenleser, Audio, USB-A – lieber eine Reserve einplanen." },
      ],
    },
  },

  editorial: {
    title: "Docking-Station: ein Kabel für alles",
    intro: "Wann ein Monitor mit USB-C reicht, wann es ein Dock braucht und warum MacBooks bei mehreren Monitoren besonders sind.",
    sections: [
      {
        id: "beste-docking-station",
        h2: "Welche Docking-Station ist die beste?",
        blocks: [
          { quick: "Das [CalDigit TS4](produkt:1) ist das beste Dock für Mac und Thunderbolt-Laptops. Für drei Monitore unter Windows reicht das günstige [UGREEN Revodok Pro](produkt:2), für Firmen-Laptops ist das [Lenovo Universal USB-C Dock](produkt:3) eine sichere Wahl." },
          { first: "Laptops werden immer dünner – und haben immer weniger Anschlüsse. Eine Docking-Station löst das Problem: Ein einziges Kabel verbindet den Laptop mit Monitoren, Netzwerk, Tastatur, Maus, Lautsprechern und Netzteil. Morgens einstecken, abends abziehen, fertig." },
          { p: "Die wichtigste Frage ist die Schnittstelle. Thunderbolt 4 und USB4 bieten 40 Gbit/s und unterstützen mehrere Monitore zuverlässig. Einfache USB-C-Docks sind günstiger, teilen die Bandbreite aber stärker und bieten unter macOS oft nur einen erweiterten Bildschirm." },
          { figure: "scores" },
          { quote: "Das beste Dock ist eines, das man morgens einsteckt und dann vergisst." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf einer Docking-Station achten?",
        blocks: [
          { quick: "Achte auf die passende Schnittstelle (Thunderbolt oder USB-C), die Zahl unterstützter Monitore für dein Betriebssystem, ausreichende Ladeleistung und die benötigten Ports wie LAN und Kartenleser." },
          {
            table: {
              caption: "Dock-Typen im Vergleich",
              head: ["Typ", "Stärken", "Schwächen"],
              rows: [
                ["**Thunderbolt 4 / USB4**", "Hohe Bandbreite, Mac und Windows, viele Ports", "Teuer"],
                ["**USB-C mit MST**", "Günstig, mehrere Monitore unter Windows", "Am Mac nur gespiegelt"],
                ["**DisplayLink**", "Mehrere Monitore auch am Mac", "Treiber nötig, nicht für Spiele"],
                ["**Monitor mit USB-C-Hub**", "Kein extra Gerät", "Weniger Ports"],
              ],
            },
          },
          { h3: "Ladeleistung" },
          { p: "Die Ladeleistung sollte mindestens der Leistung des Original-Netzteils entsprechen. Liegt sie darunter, lädt der Laptop langsamer oder entlädt sich unter Last." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: von kompakt bis Dell-Dock",
    intro: "Ob kompaktes USB-C-Dock, Dell-spezifisches Dock oder Thunderbolt-Hub: Diese fünf Modelle decken weitere Einsatzzwecke ab.",
    items: [
      { name: "Anker 575 USB-C Docking Station (13-in-1)", for: "Viele Ports, Windows", text: "85 W für den Laptop, 18 W für das Smartphone, 2 × HDMI, DisplayPort, LAN, Kartenleser und Audio (Herstellerangabe).", asin: "B08GM4GRLL", query: "Anker 575 USB-C Docking Station 13-in-1" },
      { name: "Dell WD19S 130W", for: "Dell-Laptops mit USB-C", text: "2 × DisplayPort 1.4, HDMI, USB-C, LAN; Dell-Laptops erhalten mit dem 130-W-Netzteil bis zu 90 W.", asin: "B08XNH3BR6", query: "Dell WD19S 130W Docking Station" },
      { name: "Dell WD22TB4 Thunderbolt Dock", for: "Dell mit Thunderbolt", text: "Bis zu vier 4K-Monitore, bis zu 130 W für kompatible Dell-Laptops, 180-W-Netzteil (Herstellerangabe).", asin: "B09XN6BG19", query: "Dell WD22TB4 Docking Station" },
      { name: "CalDigit Thunderbolt 4 Element Hub", for: "Kompakter Thunderbolt-Hub", text: "Thunderbolt-4-Hub mit zusätzlichen Thunderbolt- und USB-Ports, inklusive 0,8-m-Kabel.", asin: "B08FQWXQCN", query: "CalDigit Thunderbolt 4 Element Hub" },
      { name: "UGREEN Revodok Pro 2101 für macOS", for: "MacBook, zwei HDMI", text: "2 × HDMI 4K, USB-C und USB-A mit 10 Gbit/s, LAN, SD/TF, 100 W PD; am Mac abhängig vom Chip.", asin: "B0C857NJKX", query: "UGREEN Revodok Pro 2101 Docking Station" },
    ],
  },

  guide: {
    sections: [
      {
        id: "mac-und-monitore",
        h2: "MacBook und mehrere Monitore: was geht?",
        blocks: [
          { quick: "MacBooks mit M-Chip in der Basisversion unterstützen je nach Generation nur einen oder zwei externe Monitore; Pro- und Max-Chips mehr. Über einfache USB-C-Docks mit MST zeigen MacBooks auf mehreren Monitoren nur dasselbe Bild." },
          { p: "Apple unterstützt kein Multi-Stream-Transport (MST). Wer mehrere Monitore mit unterschiedlichen Inhalten an einem MacBook betreiben will, braucht einen Chip, der das nativ kann, und ein Thunderbolt-Dock – oder ein DisplayLink-Dock mit Treiber." },
          { figure: "steps" },
          { callout: { title: "Tipp", text: "Schau in den technischen Daten deines Laptops nach, wie viele externe Monitore er unterstützt. Das Dock kann diese Grenze nicht aufheben." } },
          { facts: [{ value: "40 Gbit/s", label: "Bandbreite bei Thunderbolt 4 und USB4" }, { value: "98 W", label: "Ladeleistung beim CalDigit TS4" }, { value: "3", label: "Monitore unter Windows mit MST-Docks" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Docking-Station ist die beste?", a: "Unsere beste Gesamtwahl ist das CalDigit TS4 mit Thunderbolt 4, 98 W und 18 Anschlüssen. Günstiger ist das UGREEN Revodok Pro, für Firmen-Laptops eignet sich das Lenovo ThinkPad Universal USB-C Dock." },
    { q: "Brauche ich eine Docking-Station, wenn mein Monitor USB-C hat?", a: "Nicht unbedingt. Ein USB-C-Monitor mit Hub ersetzt ein einfaches Dock. Ein Dock lohnt sich, wenn du mehr Ports, LAN oder mehrere Monitore brauchst." },
    { q: "Funktioniert jede Dockingstation mit dem MacBook?", a: "Grundsätzlich ja, aber MacBooks unterstützen kein MST. Mit einfachen USB-C-Docks werden mehrere Monitore nur gespiegelt. Thunderbolt- oder DisplayLink-Docks sind die bessere Wahl." },
    { q: "Thunderbolt oder USB-C – was ist der Unterschied?", a: "Thunderbolt 4 und USB4 bieten 40 Gbit/s und stabile Mehrmonitor-Unterstützung. Einfache USB-C-Anschlüsse haben weniger Bandbreite. Thunderbolt-Docks funktionieren meist auch an USB-C, dann aber mit Einschränkungen." },
    { q: "Wie viel Watt muss eine Dockingstation liefern?", a: "Mindestens so viel wie das Netzteil deines Laptops. Für viele Ultrabooks reichen 65 W, für leistungsstarke Laptops sind 90 W und mehr nötig." },
  ],

  sources: [
    { label: "CalDigit: TS4", url: "https://www.caldigit.com/" },
    { label: "Lenovo: ThinkPad Universal USB-C Dock", url: "https://www.lenovo.com/de/de/" },
    { label: "Apple: Externe Displays an Mac-Computern", url: "https://support.apple.com/de-de" },
  ],

  related: [
    { slug: "monitore", text: "Monitore mit USB-C – manchmal ersetzt der Monitor das Dock." },
    { slug: "tastaturen", text: "Die passende Tastatur für den Laptop-Arbeitsplatz." },
    { slug: "webcams", text: "4K-Webcams für Videocalls." },
    { area: "home-office", text: "Alle Home-Office-Ratgeber im Überblick." },
  ],
};
