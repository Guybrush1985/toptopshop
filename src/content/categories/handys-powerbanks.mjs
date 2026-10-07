// Kategorie: Zweithandys & Powerbanks (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "handys-powerbanks",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "Zweithandys & Powerbanks",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Notfall-Handy & Powerbank: Die 3 besten für den Blackout 2026",
  metaDescription:
    "Die 3 besten Geräte für Erreichbarkeit im Blackout 2026: Anker-Powerbank mit 25.000 mAh, Nokia 105 4G und Outdoor-Handy Ulefone Armor 24 – plus Akku-Tipps und Warnkanäle.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "Notfall-Handy und Powerbank: Die 3 besten Geräte 2026",
  lead:
    "Solange das Mobilfunknetz noch läuft, ist das Handy die wichtigste Verbindung nach draußen – für Anrufe, Warnungen per Cell Broadcast und die Warn-App NINA. Entscheidend ist, dass der Akku durchhält. Diese drei Geräte sorgen dafür.",
  answer:
    "Die wichtigste Anschaffung ist eine große Powerbank wie die [**Anker Laptop-Powerbank 25.000 mAh, 165 W**](produkt:1), die Handys mehrfach und sogar Laptops lädt. Als sparsames Zweithandy empfehlen wir das [**Nokia 105 4G**](produkt:2) mit Akkulaufzeit über Tage und eingebautem UKW-Radio; wer ein robustes Smartphone mit Riesenakku will, nimmt das [**Ulefone Armor 24**](produkt:3) mit 22.000 mAh.",

  top3Title: "Unsere Top 3 für Erreichbarkeit im Blackout",
  top3Intro:
    "Eine Powerbank, die alles lädt, ein Tastenhandy, das tagelang durchhält, und ein Outdoor-Smartphone, das selbst eine Powerbank ist: Zusammen halten sie die Familie erreichbar.",
  comparisonTitle: "Powerbank, Zweithandy und Outdoor-Smartphone im Vergleich",

  criteria: [
    { key: "laufzeit", label: "Energie & Laufzeit", weight: 0.35, description: "Akkukapazität, nutzbare Energie, Standby- und Gesprächszeit." },
    { key: "robust", label: "Robustheit", weight: 0.2, description: "Schutzart, Stoßfestigkeit, Verarbeitung." },
    { key: "nutzen", label: "Nutzen im Notfall", weight: 0.2, description: "Anschlüsse, Ladeleistung, Radio, Taschenlampe, Bedienbarkeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Kapazität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Akku, Ladeleistung und Ausstattung, der Powerbank-Test der Stiftung Warentest (Heft 2/2026) und darauf beruhende Berichte, Kundenerfahrungen sowie die Hinweise des BBK zu Warnkanälen. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Anker Laptop-Powerbank 25.000 mAh, 165 W",
      brand: "Anker",
      variant: "2 integrierte USB-C-Kabel",
      visual: { kind: "station", tone: "forest" },
      priceTier: 2,
      ratings: { laufzeit: 9.0, robust: 7.0, nutzen: 9.5, preis: 7.5 },
      bestFor: "Handys, Tablet & Laptop der Familie",
      verdict:
        "Die vielseitigste Powerbank: 25.000 mAh, bis zu 100 W pro USB-C-Port und zwei fest eingebaute Kabel – im Ernstfall muss niemand nach dem passenden Kabel suchen. Laut Käufern rund 90 Wh und damit flugtauglich.",
      features: [
        "25.000 mAh, Gesamtleistung 165 W, jeder USB-C-Port bis 100 W",
        "Zwei integrierte USB-C-Kabel (eines 70 cm ausziehbar), zusätzlich USB-C und USB-A",
        "Laut Anbieter in 20 Minuten auf 30 % geladen (mit 100-W-Netzteil)",
      ],
      pros: ["Lädt auch Laptops", "Kabel immer dabei", "Mehrere Geräte gleichzeitig"],
      cons: ["Relativ schwer", "Netzteil nicht im Lieferumfang", "Mehrere Modellvarianten – Modellnummer A1695 prüfen"],
      specs: { kapazitaet: "25.000 mAh (ca. 90 Wh)", laufzeit: "mehrere Handyladungen", robust: "Standard", extras: "2 integrierte Kabel, 165 W", radio: "–" },
      asin: "B0DMDJBCDP",
      query: "Anker Laptop Powerbank 25000mAh 165W",
    },
    {
      rank: 2,
      label: "Bestes Zweithandy",
      name: "Nokia 105 4G (2023)",
      brand: "Nokia",
      variant: "Dual-SIM, 1.450-mAh-Wechselakku",
      visual: { kind: "handheld", tone: "mint" },
      priceTier: 1,
      ratings: { laufzeit: 8.5, robust: 7.5, nutzen: 6.0, preis: 10.0 },
      bestFor: "Notfall-Handy im Rucksack",
      verdict:
        "Ein Tastenhandy, das tagelang durchhält: Telefonieren und SMS über 4G mit VoLTE, austauschbarer 1.450-mAh-Akku, UKW-Radio und Taschenlampe – für wenig Geld.",
      features: [
        "4G mit VoLTE, Dual-SIM, 1,8-Zoll-Display",
        "Austauschbarer 1.450-mAh-Akku, laut Nutzern mehrere Tage Laufzeit",
        "UKW-Radio, Taschenlampe, Kopfhöreranschluss",
      ],
      pros: ["Sehr lange Akkulaufzeit", "Sehr günstig", "Radio eingebaut"],
      cons: ["Keine Apps wie NINA", "Kleines Display", "Kamera und Internet praktisch nicht nutzbar"],
      specs: { kapazitaet: "1.450 mAh (Wechselakku)", laufzeit: "mehrere Tage", robust: "einfach und unempfindlich", extras: "Taschenlampe, Dual-SIM", radio: "UKW" },
      asin: "B0CBV1HZ1M",
      query: "Nokia 105 4G 2023",
    },
    {
      rank: 3,
      label: "Robustes Smartphone",
      name: "Ulefone Armor 24",
      brand: "Ulefone",
      variant: "22.000 mAh, IP68",
      visual: { kind: "handheld", tone: "green" },
      priceTier: 2,
      ratings: { laufzeit: 10.0, robust: 9.0, nutzen: 8.0, preis: 4.5 },
      bestFor: "Smartphone, das alles übersteht",
      verdict:
        "Ein Outdoor-Smartphone mit gewaltigem 22.000-mAh-Akku, 1.000-Lumen-Lampe und Rückwärtsladen für andere Geräte. Schwer und klobig – aber im Notfall Smartphone, Taschenlampe und Powerbank in einem.",
      features: [
        "22.000-mAh-Akku, 66 W Schnellladen, Rückwärtsladen per OTG",
        "Schutzart IP68, 1.000-Lumen-LED auf der Rückseite",
        "6,78-Zoll-Display, Android, Nachtsichtkamera (Herstellerangaben)",
      ],
      pros: ["Riesiger Akku", "Sehr robust", "Lädt andere Geräte"],
      cons: ["Bis zu 647 g schwer", "Durchwachsene Kundenbewertungen", "Android-Version je nach Angebot unterschiedlich"],
      specs: { kapazitaet: "22.000 mAh", laufzeit: "laut Hersteller 1.300 h Standby", robust: "IP68", extras: "1.000-lm-Lampe, Rückwärtsladen", radio: "–" },
      asin: "B0CL4VX9CZ",
      query: "Ulefone Armor 24",
    },
  ],

  comparison: [
    { key: "kapazitaet", label: "Akku" },
    { key: "laufzeit", label: "Laufzeit" },
    { key: "robust", label: "Robustheit" },
    { key: "extras", label: "Extras" },
    { key: "radio", label: "Radio" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "notfall-handy-powerbank-blackout-2026-bewertung-vergleich.svg",
      title: "Notfall-Handy und Powerbank 2026",
      alt: "Balkendiagramm: Bewertung von Powerbank, Zweithandy und Outdoor-Smartphone in den Kriterien Energie, Robustheit, Nutzen und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Die Powerbank ist am vielseitigsten, das Nokia am günstigsten, das Ulefone am robustesten.",
    },
    steps: {
      kind: "steps",
      file: "handy-akku-sparen-stromausfall-anleitung.svg",
      title: "Handy-Akku im Blackout strecken",
      subtitle: "So hält das Smartphone mehrere Tage",
      alt: "Infografik: Handy-Akku sparen bei Stromausfall – Energiesparmodus, Displayhelligkeit runter, Datenverbindung aus, Warnungen anlassen, gezielt einschalten",
      caption: "Warnungen per Cell Broadcast kommen auch ohne mobile Daten an – solange das Netz läuft.",
      steps: [
        { title: "Energiesparmodus an", text: "Hintergrundaktivität, Animationen und Synchronisierung werden reduziert." },
        { title: "Display dunkel und kurz", text: "Helligkeit runter, Bildschirmzeitlimit auf 30 Sekunden." },
        { title: "Funk gezielt abschalten", text: "WLAN, Bluetooth, GPS aus; mobile Daten nur bei Bedarf." },
        { title: "Warnungen anlassen", text: "Cell Broadcast und NINA-Benachrichtigungen nicht deaktivieren." },
        { title: "Zu festen Zeiten einschalten", text: "Bei sehr knappem Akku das Handy nur zu verabredeten Zeiten anschalten." },
      ],
    },
  },

  editorial: {
    title: "Erreichbar bleiben: Akku ist alles",
    intro:
      "Wie lange Mobilfunk im Blackout funktioniert, welche Warnkanäle aufs Handy kommen und warum ein Tastenhandy eine kluge Ergänzung ist.",
    sections: [
      {
        id: "beste-geraete",
        h2: "Welches Handy und welche Powerbank sind für den Notfall am besten?",
        blocks: [
          { quick: "Die [Anker Laptop-Powerbank 25.000 mAh](produkt:1) ist die beste Wahl, weil sie Handys mehrfach und sogar Laptops lädt. Als Zweithandy empfehlen wir das [Nokia 105 4G](produkt:2), als robustes Smartphone mit Riesenakku das [Ulefone Armor 24](produkt:3)." },
          { first: "Bei einem großflächigen Stromausfall funktionieren Mobilfunkmasten zunächst weiter – viele Standorte haben Batterien oder Notstrom für einige Zeit. In dieser Phase ist das Handy die wichtigste Verbindung: Anrufe, SMS, Warnungen per Cell Broadcast und die Warn-App NINA. Die eigentliche Schwachstelle ist dann der Akku des Geräts, denn die Steckdose zum Laden fehlt." },
          { p: "Eine große Powerbank verlängert die Erreichbarkeit um Tage. Stiftung Warentest hat in Heft 2/2026 insgesamt 24 Powerbanks geprüft; fast alle erhielten die Note „gut“, als beste wurden nach Berichten die Aqiila B20+, die Belkin BoostCharge Pro und die EcoFlow Rapid genannt. Für die Krisenvorsorge zählt vor allem die Kapazität – und dass die Kabel passen. Unsere Gesamtwahl hat beides." },
          { p: "Ein einfaches Tastenhandy ergänzt das Smartphone sinnvoll: Es hält mit einer Ladung tagelang durch, kostet wenig und kann eine zweite SIM-Karte eines anderen Netzbetreibers aufnehmen. Fällt ein Netz aus, ist das andere vielleicht noch da. Das Nokia 105 4G hat dazu ein UKW-Radio – ein kleines Notfallradio in der Hosentasche." },
          { figure: "scores" },
          { callout: { title: "Notruf ohne Netz", warn: true, text: "Fällt das Mobilfunknetz komplett aus, funktioniert auch die 112 übers Handy nicht mehr. Gemeinden richten dann oft Notfall-Anlaufstellen ein, etwa an Feuerwehrhäusern. Informiere dich vorab, wo in deinem Ort solche Stellen geplant sind." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Bei Powerbanks zählen Kapazität, Ladeleistung, Anschlüsse und passende Kabel. Bei Zweithandys zählen 4G mit VoLTE, Akkulaufzeit, Dual-SIM und ein eingebautes Radio. Bei Outdoor-Smartphones Schutzart, Akku und Gewicht." },
          {
            table: {
              caption: "Wie viele Handyladungen eine Powerbank liefert (Richtwerte)",
              head: ["Powerbank", "Energie", "Smartphone-Ladungen (ca. 15 Wh)"],
              rows: [
                ["**10.000 mAh**", "ca. 37 Wh", "rund 2"],
                ["**20.000 mAh**", "ca. 74 Wh", "rund 3–4"],
                ["**25.000 mAh**", "ca. 90 Wh", "rund 4–5"],
                ["**Powerstation 1 kWh**", "ca. 1.000 Wh", "über 50"],
              ],
            },
          },
          { h3: "Nutzbare Energie" },
          { p: "Die mAh-Angabe bezieht sich auf die Zellspannung. Beim Laden über USB gehen durch Spannungswandlung und Wärme spürbar Prozent verloren. Stiftung Warentest prüft deshalb, wie viel Energie tatsächlich ankommt – und stellt immer wieder fest, dass nicht alle Powerbanks liefern, was draufsteht." },
          { h3: "4G statt 2G" },
          { p: "3G ist in Deutschland abgeschaltet, und auch 2G wird nach und nach zurückgebaut. Ein Zweithandy sollte deshalb 4G mit VoLTE unterstützen, damit es auch künftig telefonieren kann. Das Nokia 105 4G erfüllt das." },
          { h3: "Laden ohne Steckdose" },
          { p: "Powerbanks lassen sich über Solarmodule, eine Powerstation oder im Auto nachladen. Wer vorsorgt, hält die Powerbank voll geladen und lädt sie alle paar Monate nach – Lithium-Akkus entladen sich langsam, aber stetig." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Jeder Haushalt braucht mindestens eine große Powerbank. Ein günstiges Tastenhandy mit zweiter SIM ist eine gute Reserve. Ein Outdoor-Smartphone lohnt sich für alle, die viel draußen sind oder ein unverwüstliches Hauptgerät wollen." },
          {
            cards: [
              { title: "Für alle", text: "Lädt Handys und Laptops: Anker 25.000 mAh.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Reserve-Handy", text: "Tagelanger Akku und UKW-Radio: Nokia 105 4G.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Outdoor & Baustelle", text: "22.000 mAh und IP68: Ulefone Armor 24.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Weitere Powerbanks", text: "Kompakte Modelle und Alternativen in der Top 5.", link: { href: "#top5-zweck", label: "Zur Top 5" } },
              { title: "Mehr Strom", text: "Powerstations für mehrere Tage.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
              { title: "Wenn das Netz weg ist", text: "Satelliten-Messenger mit SOS.", link: { href: "/krisenvorsorge/kommunikation-technik/satelliten-kommunikation/", label: "Satelliten-Messenger" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-zweck",
    h2: "Die 5 besten Alternativen – nach Zweck",
    intro:
      "Kleinere Powerbanks für jede Tasche, ein zweites Tastenhandy und Alternativen für Laptops: Diese fünf Geräte ergänzen die Top 3.",
    items: [
      { name: "Belkin BoostCharge 20.000 mAh Laptop-Powerbank", for: "Laptop & drei Geräte", text: "3-Port-Powerbank (2 × USB-C, 1 × USB-A) mit bis zu 65 W – genug für viele Laptops.", asin: "B0DCDWTTSG", query: "Belkin BoostCharge 20000mAh Laptop Powerbank 3 Port" },
      { name: "Aqiila Powerbank 20.000 mAh, 22,5 W", for: "Günstig mit Display", text: "2 × USB-C und 1 × USB-A, LED-Anzeige und Schutzfunktionen, laut Anbieter rund 415 g.", asin: "B0F24KZZJZ", query: "Aqiila Powerbank 20000mAh 22,5W" },
      { name: "Anker PowerCore 20100", for: "Der Klassiker", text: "Bewährte 20.100-mAh-Powerbank mit USB-A – einfach, robust, für Handys und kleine Geräte.", asin: "B00VJT3IUA", query: "Anker PowerCore 20100" },
      { name: "Belkin BoostCharge 26.000 mAh", for: "Mehr Kapazität", text: "26.000-mAh-Powerbank mit mehreren USB-Ports für die ganze Familie.", asin: "B0CRGZQ4MN", query: "Belkin BoostCharge 26000mAh" },
      { name: "Nokia 110 4G", for: "Zweites Tastenhandy", text: "Tastenhandy mit 4G, Kamera, MP3 und UKW-Radio sowie wechselbarem 1.020-mAh-Akku.", asin: "B09T737FCH", query: "Nokia 110 4G" },
    ],
  },

  guide: {
    sections: [
      {
        id: "akku-sparen",
        h2: "Wie hält man Handy und Powerbank im Blackout am Laufen?",
        blocks: [
          { quick: "Aktiviere den Energiesparmodus, dunkle das Display ab, schalte WLAN, Bluetooth und GPS aus und lass Warnungen eingeschaltet. Lade Handys reihum aus der Powerbank und lade sie selbst über Solar oder Powerstation nach." },
          { p: "Mit wenigen Einstellungen hält ein Smartphone ein Vielfaches länger. Am meisten Strom kosten Display, Funkverbindungen und Apps im Hintergrund. Bei schwachem Netz sucht das Handy ständig nach Signal – auch das zehrt am Akku. Ist das Netz ganz weg, kann der Flugmodus helfen; Warnungen per Cell Broadcast kommen dann aber nicht an." },
          { figure: "steps" },
          { h3: "Vorbereitung" },
          {
            list: [
              "**Powerbank voll halten** und alle paar Monate nachladen.",
              "**Kabel für alle Geräte** in einer Tasche: USB-C, Lightning, Micro-USB.",
              "**Wichtige Nummern auf Papier** – das Telefonbuch im Handy hilft nicht, wenn der Akku leer ist.",
              "**Zweite SIM** eines anderen Netzbetreibers im Zweithandy.",
              "**NINA und Cell Broadcast** einrichten und Warnungen für den eigenen Ort aktivieren.",
            ],
          },
          {
            facts: [
              { value: "24", label: "Powerbanks im Test der Stiftung Warentest (Heft 2/2026)" },
              { value: "≈ 90 Wh", label: "Energie der Anker-Powerbank – flugtauglich" },
              { value: "22.000 mAh", label: "Akku des Ulefone Armor 24" },
            ],
          },
          { h3: "Sicher lagern" },
          { p: "Lithium-Akkus mögen weder Hitze noch Frost. Lagere Powerbanks bei Raumtemperatur, nicht in der prallen Sonne oder im Auto im Sommer. Aufgeblähte oder beschädigte Akkus nicht mehr laden und beim Wertstoffhof abgeben." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Powerbank ist für den Notfall am besten?", a: "Unsere Empfehlung ist die Anker Laptop-Powerbank mit 25.000 mAh und 165 W, weil sie mehrere Handys und auch Laptops lädt und zwei Kabel fest eingebaut hat. Stiftung Warentest hat 2026 außerdem die Aqiila B20+, die Belkin BoostCharge Pro und die EcoFlow Rapid besonders gut bewertet." },
    { q: "Wie lange funktioniert das Handynetz bei Stromausfall?", a: "Viele Mobilfunkstandorte haben Batterien oder Notstrom für eine begrenzte Zeit. Danach fallen sie nach und nach aus. Wie lange das dauert, ist von Standort zu Standort verschieden." },
    { q: "Warum ein Tastenhandy als Zweithandy?", a: "Tastenhandys halten mit einer Ladung oft mehrere Tage, sind günstig und unempfindlich. Mit einer SIM-Karte eines anderen Netzbetreibers erhöhst du die Chance, erreichbar zu bleiben. Das Nokia 105 4G hat zudem ein UKW-Radio." },
    { q: "Bekomme ich Warnungen ohne Internet?", a: "Ja, Cell Broadcast schickt Warnungen direkt über das Mobilfunknetz an alle Handys in einer Funkzelle – ohne App und ohne mobile Daten. Voraussetzung ist, dass das Netz noch funktioniert." },
    { q: "Wie viele Handyladungen schafft eine 20.000-mAh-Powerbank?", a: "Je nach Smartphone etwa drei bis vier volle Ladungen. Ein Teil der Energie geht bei der Umwandlung verloren." },
    { q: "Lohnt sich ein Outdoor-Handy?", a: "Für Menschen, die viel draußen sind oder ein unverwüstliches Gerät wollen, ja. Geräte wie das Ulefone Armor 24 haben einen riesigen Akku und laden andere Geräte. Sie sind aber schwer und haben teils durchwachsene Bewertungen." },
  ],

  sources: [
    { label: "Stiftung Warentest: Powerbanks im Test", url: "https://www.test.de/Powerbanks-im-Test-5019032-0/" },
    { label: "produkte-im-test.de: Powerbank-Testsieger der Stiftung Warentest", url: "https://produkte-im-test.de/powerbank-testsieger-stiftung-warentest/" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "notfallradios", text: "Kurbel- und Solarradios für Behördenwarnungen." },
    { slug: "solarmodule", text: "Powerbanks und Powerstations per Solar laden." },
    { slug: "it-sicherheit", text: "Daten und Konten gegen Hacks schützen." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
