// Kategorie: Beleuchtung fürs Home-Office (Lightbars, Lampen, Key-Lights)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "beleuchtung",
  area: "home-office",
  navLabel: "Beleuchtung",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Lampen fürs Home-Office 2026 – Licht & Calls",
  metaDescription:
    "Monitor-Lightbar, Schreibtischlampe oder Key-Light für Videocalls: Die 3 besten Leuchten fürs Home-Office 2026 im Vergleich – mit Tipps zu Lux und Farbtemperatur.",

  eyebrow: "Home-Office · Licht",
  h1: "Die 3 besten Lampen fürs Home-Office 2026",
  lead:
    "Gutes Licht hat zwei Aufgaben: den Schreibtisch blendfrei ausleuchten und dein Gesicht im Videocall gut aussehen lassen. Wir zeigen die drei besten Lösungen dafür.",
  answer:
    "Unsere beste Gesamtwahl ist die [**BenQ ScreenBar Halo 2**](produkt:1): eine Monitorleuchte, die den Tisch laut Hersteller blendfrei ausleuchtet und mit Rücklicht harte Hell-Dunkel-Kontraste mildern soll. Das beste Preis-Leistungs-Verhältnis bietet die [**Xiaomi Mi Computer Monitor Light Bar**](produkt:2); für Videocalls ist das [**Elgato Key Light Air**](produkt:3) die beste Wahl.",

  top3Title: "Unsere Top 3 Leuchten fürs Home-Office",
  top3Intro: "Zwei Monitor-Lightbars für den Arbeitsplatz und ein Key-Light, das dein Gesicht im Videocall gleichmäßig ausleuchtet.",
  comparisonTitle: "Die 3 besten Home-Office-Leuchten im Vergleich",

  criteria: [
    { key: "licht", label: "Lichtqualität", weight: 0.35, description: "Helligkeit, Gleichmäßigkeit, Farbwiedergabe, Blend- und Flimmerfreiheit." },
    { key: "bedienung", label: "Bedienung & Automatik", weight: 0.2, description: "Fernbedienung, App, Sensor, Farbtemperatur." },
    { key: "montage", label: "Montage & Platz", weight: 0.2, description: "Befestigung, Kompatibilität, Platzbedarf." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Qualität und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Lichtstrom, Beleuchtungsstärke, Farbwiedergabe, Farbtemperatur) und die Hinweise der Arbeitsstättenregel ASR A3.4 zur Beleuchtung von Arbeitsplätzen. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "BenQ ScreenBar Halo 2",
      brand: "BenQ",
      variant: "Front- & Rücklicht",
      visual: { kind: "lamp", tone: "forest" },
      priceTier: 3,
      ratings: { licht: 9.5, bedienung: 9.0, montage: 8.5, preis: 7.0 },
      bestFor: "Lange Abende am Bildschirm",
      verdict:
        "Unsere Top-Wahl unter den Monitorleuchten: laut Hersteller asymmetrisches Licht ohne Spiegelung auf dem Bildschirm, ein separat regelbares Rücklicht gegen harte Kontraste und ein kabelloser Controller.",
      features: [
        "Front- und Rücklicht getrennt regelbar, 2700–6500 K (Herstellerangabe)",
        "Bewegungssensor schaltet automatisch, Helligkeit passt sich der Umgebung an (Herstellerangabe)",
        "Kabelloser Controller mit Display, Clip für 0,43–6 cm dicke Monitore, auch Curved bis 1000R (Herstellerangabe)",
      ],
      pros: ["Kein Platzbedarf auf dem Tisch", "Keine Spiegelung auf dem Monitor", "Sehr komfortable Bedienung"],
      cons: ["Teuer", "Nur für den Tisch, nicht fürs Gesicht"],
      specs: { art: "Monitor-Lightbar", farbtemp: "2700–6500 K", steuerung: "Funk-Controller, Sensor", montage: "Monitor-Clip", strom: "USB" },
      asin: "B0DK59YKRS",
      query: "BenQ ScreenBar Halo 2",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Xiaomi Mi Computer Monitor Light Bar",
      brand: "Xiaomi",
      variant: "Funkfernbedienung",
      visual: { kind: "lamp", tone: "mint" },
      priceTier: 1,
      ratings: { licht: 8.0, bedienung: 8.0, montage: 8.0, preis: 9.5 },
      bestFor: "Günstiger Einstieg",
      verdict:
        "Das Prinzip der Monitorleuchte zum kleinen Preis: Metallgehäuse, Funkfernbedienung, laut Händler hohe Farbwiedergabe und flimmerfreies Licht – für einen Bruchteil der Premium-Modelle.",
      features: [
        "Metallgehäuse, Ra 95 Farbwiedergabe, flimmerfrei (Händlerangabe)",
        "2,4-GHz-Funkfernbedienung, USB-C-Strom (Händlerangabe)",
        "Clip-Befestigung auf dem Monitor",
      ],
      pros: ["Sehr günstig", "Laut Händler hohe Farbwiedergabe", "Spart Platz auf dem Tisch"],
      cons: ["Kein Rücklicht, keine Automatik", "Angaben je nach Listing uneinheitlich"],
      specs: { art: "Monitor-Lightbar", farbtemp: "einstellbar", steuerung: "Funkfernbedienung", montage: "Monitor-Clip", strom: "USB-C" },
      asin: "B0BTVY9MBM",
      query: "Xiaomi Mi Computer Monitor Light Bar",
    },
    {
      rank: 3,
      label: "Beste Wahl für Videocalls",
      name: "Elgato Key Light Air",
      brand: "Elgato",
      variant: "1400 Lumen, WLAN",
      visual: { kind: "lamp", tone: "green" },
      priceTier: 2,
      ratings: { licht: 9.0, bedienung: 8.5, montage: 7.5, preis: 7.5 },
      bestFor: "Videocalls, Streaming, Kundentermine",
      verdict:
        "Für das Gesicht statt den Tisch: Das Flächenlicht leuchtet dich weich und gleichmäßig aus – im Videocall werden harte Schatten deutlich reduziert, und das Bild kann professioneller wirken.",
      features: [
        "1400 Lumen, 2900–7000 K, 80 OSRAM-LEDs, bis 25 W (Herstellerangabe)",
        "Steuerung per App über WLAN, Mac, Windows, iPhone, Android (Herstellerangabe)",
        "Tischklemme mit Teleskopstange; Nachfolger MK.2 laut Hersteller mit 2100 Lumen erhältlich",
      ],
      pros: ["Weiches, gleichmäßiges Gesichtslicht", "Per App steuerbar", "Meist deutlich besseres Kamerabild"],
      cons: ["Braucht Platz am Tischrand", "Für die Tischbeleuchtung ungeeignet"],
      specs: { art: "Key-Light (Flächenlicht)", farbtemp: "2900–7000 K", steuerung: "App (WLAN)", montage: "Tischklemme", strom: "Netzteil" },
      asin: "B082QHRZFW",
      query: "Elgato Key Light Air",
    },
  ],

  comparison: [
    { key: "art", label: "Art" },
    { key: "farbtemp", label: "Farbtemperatur" },
    { key: "steuerung", label: "Steuerung" },
    { key: "montage", label: "Montage" },
    { key: "strom", label: "Strom" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-lampen-home-office-2026-bewertung.svg",
      title: "Die 3 besten Lampen fürs Home-Office 2026",
      alt: "Balkendiagramm: Bewertung von BenQ ScreenBar Halo 2, Xiaomi Light Bar und Elgato Key Light Air",
      caption: "Unsere Bewertung je Kriterium. BenQ leuchtet den Tisch am besten aus, Xiaomi ist am günstigsten, Elgato macht im Videocall die beste Figur.",
    },
    steps: {
      kind: "steps",
      file: "licht-fuer-videocalls-einrichten.svg",
      title: "Licht für Videocalls einrichten",
      subtitle: "In fünf Schritten zu einem guten Kamerabild",
      alt: "Infografik: Beleuchtung für Videocalls – Fenster, Hauptlicht, Höhe, Farbtemperatur, Hintergrund",
      caption: "So wirkt dein Gesicht im Call natürlich und gut ausgeleuchtet.",
      steps: [
        { title: "Fenster nicht im Rücken", text: "Gegenlicht macht dein Gesicht dunkel. Am besten seitlich oder vor dir." },
        { title: "Hauptlicht schräg vorn", text: "Key-Light etwa 45 Grad seitlich, leicht über Augenhöhe." },
        { title: "Weich statt hart", text: "Flächenlicht oder diffuses Licht vermeidet harte Schatten." },
        { title: "Farbtemperatur angleichen", text: "Tageslicht rund 5000–6500 K, abends wärmer – alle Lampen gleich einstellen." },
        { title: "Hintergrund aufhellen", text: "Ein etwas hellerer Hintergrund trennt dich vom Raum." },
      ],
    },
  },

  editorial: {
    title: "Gutes Licht im Home-Office: Tisch und Gesicht",
    intro: "Warum eine Monitorleuchte die Bildschirmarbeit angenehmer machen kann und wie ein Key-Light dein Kamerabild verbessert.",
    sections: [
      {
        id: "beste-beleuchtung",
        h2: "Welche Beleuchtung ist die beste fürs Home-Office?",
        blocks: [
          { quick: "Für den Schreibtisch ist die [BenQ ScreenBar Halo 2](produkt:1) die beste Wahl, günstiger die [Xiaomi Light Bar](produkt:2). Für Videocalls lohnt sich zusätzlich ein Key-Light wie das [Elgato Key Light Air](produkt:3)." },
          { first: "Licht am Arbeitsplatz wird oft unterschätzt. Die Arbeitsstättenregel ASR A3.4 nennt für Büroarbeitsplätze in Arbeitsstätten eine Beleuchtungsstärke von mindestens 500 Lux; fürs private Home-Office ist das eine sinnvolle Orientierung. Im Wohnzimmer erreicht eine Deckenleuchte das selten. Eine Monitorleuchte bringt das Licht genau dorthin, wo es gebraucht wird, ohne den Bildschirm zu spiegeln." },
          { p: "Für Videocalls zählt etwas anderes: Das Gesicht soll gleichmäßig und von vorn beleuchtet sein. Eine Lightbar über dem Monitor leuchtet nach unten auf den Tisch und hilft dabei kaum. Ein Key-Light oder ein kleines Streaming-Licht dagegen macht das Kamerabild in der Regel deutlich besser." },
          { figure: "scores" },
          { quote: "Die beste Webcam nützt wenig, wenn das Licht von hinten kommt." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man bei der Beleuchtung achten?",
        blocks: [
          { quick: "Achte auf blendfreies, flimmerfreies Licht, eine hohe Farbwiedergabe (Ra/CRI über 90), einstellbare Farbtemperatur und eine Befestigung, die zu Monitor oder Tisch passt." },
          { p: "Angaben wie „flimmerfrei“, „blendfrei“ oder „augenschonend“ sind Herstellerangaben, die wir nicht selbst nachgemessen haben. Unabhängige Prüfzeichen oder Messwerte im Datenblatt geben mehr Sicherheit als Werbebegriffe." },
          {
            table: {
              caption: "Leuchtentypen im Home-Office",
              head: ["Typ", "Wofür?", "Grenzen"],
              rows: [
                ["**Monitor-Lightbar**", "Tisch, Tastatur, Dokumente", "Leuchtet das Gesicht nicht aus"],
                ["**Schreibtischlampe**", "Großflächiges Arbeitslicht", "Braucht Platz, kann spiegeln"],
                ["**Key-Light / Flächenlicht**", "Gesicht im Videocall", "Nicht für die Tischbeleuchtung"],
                ["**Kleines Streaming-Licht**", "Kompakt fürs Gesicht", "Weniger Leistung"],
              ],
            },
          },
          { h3: "Monitor prüfen" },
          { p: "Monitor-Lightbars werden auf den oberen Rand geklemmt. Prüfe Dicke und – bei Curved-Monitoren – den Krümmungsradius in den Herstellerangaben." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-calls-und-schreibtisch",
    h2: "Die 5 besten Alternativen: Streaming-Licht und Schreibtischlampen",
    intro: "Kleiner, größer oder klassisch: fünf weitere Leuchten für Videocalls und Arbeitsplatz.",
    items: [
      { name: "Logitech Litra Glow", for: "Kompaktes Gesichtslicht", text: "Streaming-Licht mit 250 Lumen, CRI 93 und 2700–6500 K, mit USB-Strom und Monitorhalterung (Herstellerangabe).", asin: "B07W4DHXC8", query: "Logitech Litra Glow" },
      { name: "Elgato Key Light Mini", for: "Mit Akku", text: "Tragbares LED-Panel mit 800 Lumen und Akku, magnetisch oder per Gewinde montierbar (Herstellerangabe).", asin: "B09PRNHLM7", query: "Elgato Key Light Mini" },
      { name: "BenQ ScreenBar Plus", for: "Lightbar mit Drehregler", text: "Monitorleuchte mit Tisch-Drehregler, automatischer Dimmung und 2700–6500 K (Herstellerangabe).", asin: "B07DP7RYXV", query: "BenQ ScreenBar Plus" },
      { name: "BenQ e-Reading LED Schreibtischlampe", for: "Große Arbeitsfläche", text: "Schreibtischlampe mit breitem Lichtkopf für Monitor-Arbeitsplätze, dimmbar, Warm- bis Kaltweiß (Herstellerangabe).", asin: "B017NOD2PU", query: "BenQ e-Reading LED Schreibtischlampe" },
      { name: "Dyson Solarcycle Morph Schreibtischleuchte", for: "Tageslicht-Automatik", text: "Passt Farbtemperatur und Helligkeit dem lokalen Tageslicht an, Steuerung per App (Herstellerangabe).", asin: "B0C4KMDNWF", query: "Dyson Solarcycle Morph Schreibtischleuchte" },
    ],
  },

  guide: {
    sections: [
      {
        id: "licht-einrichten",
        h2: "So richtest du das Licht für Arbeit und Videocalls ein",
        blocks: [
          { quick: "Stelle den Schreibtisch seitlich zum Fenster, nutze eine Monitorleuchte für den Tisch und ein weiches Licht schräg vor dir für das Gesicht. Alle Lichtquellen auf ähnliche Farbtemperatur einstellen." },
          { figure: "steps" },
          { facts: [{ value: "500 lx", label: "Beleuchtungsstärke für Büroarbeit (ASR A3.4)" }, { value: "> 90", label: "Farbwiedergabeindex (CRI/Ra) für natürliche Farben" }, { value: "45°", label: "Winkel für das Hauptlicht im Videocall" }] },
          { callout: { title: "Augen entlasten", text: "Ein großer Helligkeitsunterschied zwischen Bildschirm und Raum kann die Augen ermüden. Deshalb abends nicht nur mit dem Monitor im dunklen Zimmer arbeiten. Eine Leuchte ersetzt keine augenärztliche Untersuchung: Bei anhaltenden Augenbeschwerden, Kopfschmerzen oder verschwommenem Sehen lass das ärztlich abklären." } },
          { callout: { title: "Sicherheit", warn: true, text: "Nur das mitgelieferte oder vom Hersteller empfohlene Netzteil verwenden, Leuchten nicht abdecken und Gebrauchsanweisung beachten. Klemmen und Stative fest montieren, damit nichts kippt – Kabel so führen, dass niemand darüber stolpert. Nicht direkt in helle LED-Panels blicken." } },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Lampe ist die beste fürs Home-Office?", a: "Für den Schreibtisch ist die BenQ ScreenBar Halo 2 unsere beste Gesamtwahl. Günstiger ist die Xiaomi Mi Computer Monitor Light Bar, für Videocalls das Elgato Key Light Air." },
    { q: "Lohnt sich eine Monitorleuchte?", a: "Ja, wenn der Tisch zu dunkel ist oder eine Schreibtischlampe auf dem Bildschirm spiegelt. Sie spart Platz und beleuchtet gezielt Tastatur und Unterlagen." },
    { q: "Welches Licht brauche ich für Videocalls?", a: "Ein weiches Licht schräg vor dir auf Gesichtshöhe, etwa ein Key-Light oder ein kleines Streaming-Licht. Gegenlicht vom Fenster sollte vermieden werden." },
    { q: "Wie hell sollte ein Arbeitsplatz sein?", a: "Die Arbeitsstättenregel ASR A3.4 nennt für Büroarbeitsplätze in Arbeitsstätten mindestens 500 Lux. Für das private Home-Office ist das keine Pflicht, aber eine gute Orientierung." },
    { q: "Welche Farbtemperatur ist am besten?", a: "Tagsüber neutral bis kühl (rund 4000–6500 K), abends wärmer. Im Videocall sollten alle Lichtquellen ähnlich eingestellt sein." },
  ],

  sources: [
    { label: "BAuA: ASR A3.4 Beleuchtung", url: "https://www.baua.de/DE/Angebote/Regelwerk/ASR/ASR-A3-4.html" },
    { label: "BenQ: ScreenBar Halo 2", url: "https://www.benq.eu/de-de/lighting.html" },
    { label: "Elgato: Key Light Air", url: "https://www.elgato.com/de/de" },
  ],

  related: [
    { slug: "webcams", text: "Die passende 4K-Webcam zum guten Licht." },
    { slug: "green-screens-hintergruende", text: "Green Screens und Hintergründe für Videocalls." },
    { slug: "tischmikrofone", text: "Gut klingen im Call: USB-Mikrofone." },
    { area: "home-office", text: "Alle Home-Office-Ratgeber im Überblick." },
  ],
};
