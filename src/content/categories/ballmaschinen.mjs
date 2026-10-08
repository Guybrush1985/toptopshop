// Kategorie: Tennis-Ballmaschinen (Akku und Netzbetrieb)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "ballmaschinen",
  area: "tennis-ballwand",
  navLabel: "Ballmaschinen",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Tennis-Ballmaschinen 2026 – Akku & Strom",
  metaDescription:
    "Tennis-Ballmaschinen mit Akku oder Netzbetrieb im Vergleich: Die 3 besten Modelle 2026 – mit Tipps zu Tempo, Spin, Ballkapazität, App und Akkulaufzeit.",

  eyebrow: "Tennis solo · Ballmaschine",
  h1: "Die 3 besten Tennis-Ballmaschinen 2026",
  lead:
    "Eine Ballmaschine spielt dir den Ball zu – mit Tempo, Spin und wechselnden Richtungen. So trainierst du Laufwege und Schläge wie im echten Ballwechsel. Wir zeigen drei Empfehlungen nach unserer Einschätzung.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Spinshot Plus-2**](produkt:1): bewährte Technik, 120 Bälle, Top- und Backspin und wahlweise Akku oder Netzbetrieb. Am günstigsten ist die [**VEVOR Tennisballmaschine mit 150-Ball-Behälter**](produkt:2); die Premium-Wahl ist die [**Spinshot Player**](produkt:3), bei der sich jeder Ball per App programmieren lässt.",

  priceTiers: {
    1: { symbol: "€", label: "bis 500 €" },
    2: { symbol: "€€", label: "500–1.200 €" },
    3: { symbol: "€€€", label: "über 1.200 €" },
  },

  top3Title: "Unsere Top 3 Tennis-Ballmaschinen",
  top3Intro: "Alle drei sind transportabel und laufen mit Akku. Sie unterscheiden sich vor allem in Spin-Möglichkeiten, Programmierbarkeit, Zuverlässigkeit und Preis.",
  comparisonTitle: "Die 3 besten Tennis-Ballmaschinen im Vergleich",

  criteria: [
    { key: "spiel", label: "Ballqualität & Programme", weight: 0.35, description: "Tempo, Spin, Oszillation, Drills und wie gleichmäßig die Maschine wirft." },
    { key: "akku", label: "Akku & Stromversorgung", weight: 0.2, description: "Akkulaufzeit, Ladezeit, Netzbetrieb und ob der Akku im Lieferumfang ist." },
    { key: "handling", label: "Transport & Bedienung", weight: 0.2, description: "Gewicht, Rollen, Fernbedienung oder App, Ballkapazität." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Funktionen und Verarbeitung." },
  ],

  method:
    "Wir testen die Maschinen nicht selbst. Grundlage sind Herstellerangaben, Bedienungsanleitungen, Händlerangaben bei Amazon sowie Testberichte englischsprachiger Tennis-Fachportale (z. B. Tennis Pro Guru, Tennis Warehouse). Deutsche Labortests von Ballmaschinen sind uns nicht bekannt. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Spinshot Plus-2 Tennisball-Maschine",
      brand: "Spinshot",
      variant: "Akku oder Netzbetrieb",
      visual: { kind: "machine", tone: "forest" },
      priceTier: 3,
      ratings: { spiel: 9.0, akku: 7.5, handling: 8.5, preis: 7.5 },
      bestFor: "Ambitionierte Spieler, Vereinstraining",
      verdict:
        "Nach unserer Einschätzung die ausgewogenste Ballmaschine: laut Hersteller 18 Spin-Stufen, horizontale und vertikale Oszillation und 12 programmierbare Drills – in einem Gerät, das seit Jahren verbreitet ist.",
      features: [
        "Tempo laut Testbericht von Tennis Pro Guru rund 30–110 km/h in 20 Stufen, 9 Stufen Top- und 9 Stufen Backspin",
        "Ballkorb für 120 Bälle, Intervall 2–10 Sekunden (Herstellerangabe)",
        "Als Akku- oder Netzversion; Akkulaufzeit laut Hersteller 2–3 Stunden, Akku je nach Angebot separat",
      ],
      pros: ["Sehr vielseitige Drills und Oszillation", "Fernbedienung und App", "Ersatzteile und Service laut Hersteller verfügbar"],
      cons: ["Akku teils separat zu kaufen", "Ladezeit 8–15 Stunden (Herstellerangabe)"],
      specs: { tempo: "ca. 30–110 km/h", spin: "Top & Back, 18 Stufen", baelle: "120", strom: "Akku oder Netz", steuerung: "Fernbedienung & App" },
      asin: "B01JXI1I8W",
      query: "Spinshot Plus-2 Tennisball-Maschine",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "VEVOR Tennisballmaschine, 150 Bälle, Akku",
      brand: "VEVOR",
      variant: "App-Steuerung",
      visual: { kind: "machine", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 7.0, akku: 8.0, handling: 7.5, preis: 9.0 },
      bestFor: "Hobbyspieler mit kleinem Budget",
      verdict:
        "Nach unserer Einschätzung der günstigste ernsthafte Einstieg: großer Ballbehälter, Akku im Lieferumfang und App-Steuerung – für einen Bruchteil des Preises der Markenmaschinen.",
      features: [
        "Ballbehälter für 150 Bälle, wiederaufladbarer Akku (Händlerangabe)",
        "Mehrere Übungsmodi, Steuerung per App über Bluetooth (Händlerangabe)",
        "Akkulaufzeit laut Händler über 2 Stunden",
      ],
      pros: ["Sehr günstig", "Großer Ballvorrat", "Akku inklusive"],
      cons: ["Bedienung nur per App – keine Tasten", "Wenig Erfahrungen zur Langlebigkeit"],
      specs: { tempo: "laut Händler bis ca. 125 km/h", spin: "laut Händler wählbar", baelle: "150", strom: "Akku", steuerung: "App" },
      asin: "B0DCHVXL3W",
      query: "VEVOR Tennisballmaschine 150 Bälle wiederaufladbarer Akku",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Spinshot Player Tennisball-Maschine",
      brand: "Spinshot",
      variant: "App-Programmierung",
      visual: { kind: "machine", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 9.5, akku: 7.0, handling: 8.0, preis: 6.5 },
      bestFor: "Turnierspieler, Trainer",
      verdict:
        "Für alle, die jeden Ball selbst bestimmen wollen: Richtung, Höhe, Tempo, Spin und Takt lassen sich für jeden einzelnen Schlag in der App programmieren.",
      features: [
        "12 Drills mit je 6 Schlägen, jeder Ball einzeln programmierbar (Herstellerangabe)",
        "Steuerung per App über WLAN, Android und iPhone (laut Testbericht von Tennis Pro Guru)",
        "120 Bälle, Tempo rund 30–110 km/h, Akku 2–3 Stunden (laut Testbericht von Tennis Pro Guru)",
      ],
      pros: ["Sehr detaillierte Programmierung (Herstellerangabe)", "Echte Spielsituationen simulierbar", "Bewährter Hersteller"],
      cons: ["Am Gerät nur Drill-Tasten, vieles nur per App", "Teuer, Akku separat"],
      specs: { tempo: "ca. 30–110 km/h", spin: "Top & Back, je Ball", baelle: "120", strom: "Akku", steuerung: "App (WLAN)" },
      asin: "B0GL81CZ2F",
      query: "SPINSHOT PLAYER Tennisball-Maschine",
    },
  ],

  comparison: [
    { key: "tempo", label: "Tempo" },
    { key: "spin", label: "Spin" },
    { key: "baelle", label: "Ballkapazität" },
    { key: "strom", label: "Stromversorgung" },
    { key: "steuerung", label: "Steuerung" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-tennis-ballmaschinen-2026-bewertung.svg",
      title: "Die 3 besten Tennis-Ballmaschinen 2026",
      alt: "Balkendiagramm: Bewertung von Spinshot Plus-2, VEVOR und Spinshot Player in Ballqualität, Akku, Bedienung und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Spinshot Plus-2 ist am ausgewogensten, VEVOR am günstigsten, der Spinshot Player am präzisesten.",
    },
    steps: {
      kind: "steps",
      file: "ballmaschine-training-aufbau-anleitung.svg",
      title: "Training mit der Ballmaschine",
      subtitle: "So baust du eine Einheit sinnvoll auf",
      alt: "Infografik: Trainingseinheit mit Tennis-Ballmaschine – Akku laden, Position, langsam starten, Drills, Bälle sammeln",
      caption: "Ein Ablauf, der Technik und Fitness verbindet.",
      steps: [
        { title: "Akku laden", text: "Am Vorabend vollständig laden – viele Akkus brauchen 8 Stunden und mehr." },
        { title: "Maschine positionieren", text: "Mittig hinter der Grundlinie, leicht erhöht in Richtung Netz ausgerichtet." },
        { title: "Langsam einspielen", text: "Mit niedrigem Tempo und langem Intervall starten, bis Treffpunkt und Rhythmus stimmen." },
        { title: "Drills steigern", text: "Oszillation und Spin zuschalten, Intervalle verkürzen, Laufwege einbauen." },
        { title: "Bälle sammeln & pausieren", text: "Nach jedem Korb Pause machen und Bälle einsammeln – mit Ballsammler deutlich schneller." },
      ],
    },
  },

  editorial: {
    title: "Ballmaschine: der Trainingspartner, der nie absagt",
    intro: "Was eine Ballmaschine besser kann als jede Wand, warum der Akku die wichtigste Frage ist und wo günstige Modelle an Grenzen stoßen.",
    sections: [
      {
        id: "beste-ballmaschine",
        h2: "Welche Tennis-Ballmaschine ist die beste?",
        blocks: [
          { quick: "Nach unserer Einschätzung ist die beste Ballmaschine für die meisten die [Spinshot Plus-2](produkt:1). Wer wenig ausgeben will, nimmt die [VEVOR-Ballmaschine](produkt:2). Wer jeden Schlag selbst programmieren will, greift zur [Spinshot Player](produkt:3)." },
          { first: "Eine Ballwand gibt zurück, was du schlägst. Eine Ballmaschine dagegen bestimmt, was kommt: hoch oder flach, mit Topspin oder Slice, kurz cross oder lang in die Rückhand. Genau das macht sie zu einem sehr guten Werkzeug für Laufwege, Ballannahme und Wiederholungen unter Druck." },
          { p: "Der Markt teilt sich in zwei Lager: etablierte Marken wie Spinshot oder Lobster, die seit Jahren auf Plätzen stehen und Ersatzteile liefern, und günstige Neulinge mit großem Ballbehälter und App, deren Langlebigkeit sich erst noch zeigen muss. Lobster-Modelle waren bei Amazon zum Recherchezeitpunkt nicht verfügbar und deshalb nicht in unserer Auswahl." },
          { figure: "scores" },
          { quote: "Eine Wand gibt zurück, was du schlägst – eine Ballmaschine entscheidet, was kommt." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf einer Ballmaschine achten?",
        blocks: [
          { quick: "Achte auf Stromversorgung (Akku, Netz oder beides), Akkulaufzeit, Ballkapazität (mindestens 100 Bälle), Top- und Backspin, Oszillation und eine Fernbedienung oder App." },
          {
            table: {
              caption: "Akku oder Netzbetrieb?",
              head: ["Stromversorgung", "Vorteile", "Nachteile"],
              rows: [
                ["**Akku**", "Auf jedem Platz einsetzbar, kein Kabel", "Laufzeit begrenzt, lange Ladezeit, Akku teils separat"],
                ["**Netzbetrieb (230 V)**", "Unbegrenzte Laufzeit, leichter", "Steckdose am Platz nötig, Kabel stört"],
                ["**Batterien (Mini-Maschinen)**", "Günstig, sehr leicht", "Nur langsame Bälle, für Kinder und Einsteiger"],
              ],
            },
          },
          { h3: "Spin und Oszillation" },
          { p: "Einfache Maschinen werfen nur geradeaus und ohne Spin. Für ernsthaftes Training sind Topspin, Backspin und eine seitliche Oszillation entscheidend – sie zwingen dich zu laufen und den Ball unterschiedlich anzunehmen." },
          { h3: "Bälle" },
          { p: "Gebrauchte Bälle sind oft sinnvoller als neue, weil neuer Filz die Wurfräder anfangs stärker verschmutzen kann – maßgeblich sind die Hinweise in der Anleitung deines Modells. Drucklose Bälle halten lange und werfen meist gleichmäßiger." },
        ],
      },
      {
        id: "welche-maschine-passt",
        h2: "Welche Ballmaschine passt zu wem?",
        blocks: [
          { quick: "Turnier- und Vereinsspieler fahren mit Spinshot am besten, Hobbyspieler mit einer günstigen Akku-Maschine, Kinder und Einsteiger mit einer Mini-Ballmaschine." },
          {
            cards: [
              { title: "Ambitioniert", text: "Bewährt und vielseitig: Spinshot Plus-2.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Hobby & Budget", text: "150 Bälle, Akku, App: VEVOR.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Trainer & Turnier", text: "Jeder Ball programmierbar: Spinshot Player.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Kinder & Einsteiger", text: "Kleine Maschinen mit Batterie oder Netzteil – Kinder nur unter Aufsicht.", link: { href: "#top5-einsteiger", label: "Zur Top 5" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-einsteiger",
    h2: "Die 5 besten Ballmaschinen für Einsteiger, Kinder und Padel",
    intro: "Nicht jeder braucht 110 km/h und 18 Spin-Stufen. Diese fünf Maschinen sind kleiner, günstiger oder vielseitiger – vom Kindertraining bis zum Padel-Court.",
    items: [
      { name: "PONGBOT PACE S Tennisball-Maschine", for: "Lange Akkulaufzeit", text: "150 Bälle, Doppelmotor für Top- und Backspin, App und Fernbedienung; laut Händler über 8 Stunden Laufzeit mit wechselbarem Akku (Akku separat).", asin: "B0FTWZT7LC", query: "PONGBOT PACE S Tennisball-Maschine" },
      { name: "PUSUN PT-MINIPro Tennisballmaschine", for: "Leicht & für drinnen", text: "Kompakte Maschine mit App-Steuerung und über 65 Bällen Kapazität; laut Händler 3–5 Stunden Akku und auch für Schulen geeignet.", asin: "B0F3X2FKVZ", query: "PUSUN PT-MINIPro Tennisballmaschine" },
      { name: "Teknigoo Tennisballmaschine (max. 30 Bälle)", for: "Kinder, Netz oder Batterie", text: "Kleine Ballmaschine mit Netzteil, Batteriebetrieb oder USB – für Kinder, Einsteiger und das Training zu Hause (Händlerangabe).", asin: "B08YJ1XPHL", query: "Teknigoo Tennisballmaschine 30 Bälle" },
      { name: "hzexun Tennisballmaschine, Netz & Batterie", for: "Günstigster Einstieg", text: "Kunststoffmaschine mit 30 Bällen Kapazität und einem Ball alle paar Sekunden, betrieben mit Netzteil oder Batterien (Händlerangabe).", asin: "B08FG2LGQV", query: "hzexun Tennisball-Maschine tragbar AC Batterie" },
      { name: "Spinshot Pro Tennisball-Maschine", for: "Robuster Spinshot-Klassiker", text: "Das einfachere Spinshot-Modell mit Akkubetrieb; Akku je nach Angebot nicht im Lieferumfang – vor dem Kauf prüfen.", asin: "B00U5I1646", query: "SPINSHOT-PRO Tennisball-Maschine" },
    ],
  },

  guide: {
    sections: [
      {
        id: "akku-und-pflege",
        h2: "Akku, Pflege und Sicherheit",
        blocks: [
          { quick: "Lade den Akku nach jedem Training vollständig und lagere ihn im Winter frostfrei und halb geladen. Halte Abstand zur Maschine, wenn sie läuft, und schalte sie aus, bevor du Bälle nachfüllst." },
          { p: "Bleiakkus, wie sie in vielen Ballmaschinen stecken, mögen keine Tiefentladung. Wer die Maschine monatelang mit leerem Akku im Keller stehen lässt, braucht im Frühjahr oft einen neuen. Lithium-Akkus sind leichter und unempfindlicher, aber teurer. Lade jeden Akku nur mit dem mitgelieferten Ladegerät, nicht unbeaufsichtigt und nicht in der Nähe brennbarer Materialien; beschädigte Akkus nicht weiterverwenden." },
          { figure: "steps" },
          { callout: { title: "Sicherheit", warn: true, text: "Ballmaschinen werfen Bälle mit hohem Tempo – ein Treffer im Gesicht oder am Auge kann ernsthaft verletzen. Nie vor die laufende Maschine treten, um Bälle aufzuheben, nie in die Auswurföffnung greifen oder schauen und mit niedrigem Tempo beginnen. Kinder nur unter Aufsicht trainieren lassen und Unbeteiligte fernhalten. Bei Arbeiten an Wurfrädern oder Ballzuführung immer zuerst ausschalten. Netzgeräte draußen nur an geeigneten, abgesicherten Außensteckdosen betreiben und vor Nässe schützen. Beachte die Sicherheitshinweise in der Bedienungsanleitung." } },
          { facts: [{ value: "2–8 h", label: "Akkulaufzeit je nach Modell (Herstellerangaben)" }, { value: "100–150", label: "Bälle passen in große Maschinen" }, { value: "8–15 h", label: "Ladezeit bei Spinshot (Herstellerangabe)" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Tennis-Ballmaschine ist die beste?", a: "Unsere beste Gesamtwahl ist die Spinshot Plus-2 mit 120 Bällen, 18 Spin-Stufen und wahlweise Akku oder Netzbetrieb. Günstiger ist die VEVOR-Ballmaschine, die Premium-Wahl die Spinshot Player." },
    { q: "Was kostet eine gute Tennis-Ballmaschine?", a: "Einfache Maschinen für Kinder liegen in der untersten Preisklasse, ernsthafte Akku-Maschinen beginnen in der unteren Preisklasse. Bewährte Markenmodelle wie Spinshot gehören in die oberste Preisklasse, teils kommt der Akku hinzu. Die Preisklassen findest du in der Vergleichstabelle; aktuelle Preise zeigt der Händler." },
    { q: "Ist bei Ballmaschinen der Akku dabei?", a: "Nicht immer. Bei mehreren Spinshot- und PONGBOT-Angeboten ist der Akku laut Händler separat zu kaufen. Prüfe den Lieferumfang vor der Bestellung." },
    { q: "Akku oder Netzbetrieb – was ist besser?", a: "Akku, wenn du auf verschiedenen Plätzen ohne Steckdose trainierst. Netzbetrieb, wenn die Maschine an einem festen Ort mit Strom steht – dann gibt es keine Laufzeitgrenze." },
    { q: "Welche Bälle nimmt man für die Ballmaschine?", a: "Am besten gebrauchte oder drucklose Bälle. Neue Bälle können die Wurfräder verschmutzen, nasse Bälle führen zu ungleichmäßigen Würfen." },
    { q: "Darf ich eine Ballmaschine auf dem Vereinsplatz nutzen?", a: "Das regelt der Verein. Viele erlauben Ballmaschinen außerhalb der Stoßzeiten oder auf bestimmten Plätzen – frag vorher nach." },
  ],

  sources: [
    { label: "Spinshot: Herstellerseite mit Produktinformationen", url: "https://www.spinshot-sports.com/" },
    { label: "Tennis Pro Guru: Spinshot Player Review", url: "https://tennisproguru.com/spinshot-player-tennis-ball-machine-review/" },
    { label: "Tennis Pro Guru: Spinshot Plus-2 Review", url: "https://tennisproguru.com/spinshot-plus-2-tennis-ball-machine-review/" },
  ],

  related: [
    { slug: "zubehoer-ballwand", text: "Ballsammler und drucklose Bälle – unverzichtbar für die Ballmaschine." },
    { slug: "mobile-tenniswand-rebounder", text: "Günstiger und ohne Akku: freistehende Rebounder." },
    { slug: "tennistrainer-ball-an-schnur", text: "Training auf kleinstem Raum: Ball an der Schnur." },
    { slug: "padel-ballmaschinen", text: "Für den Padel-Court: Ballmaschinen mit eigenen Padel-Modi." },
    { slug: "tennis-trainingshilfen", text: "Technik gezielt verbessern: Topspin-, Sweet-Spot- und Aufschlagtrainer." },
    { area: "tennis-ballwand", text: "Alle Ratgeber rund um das Tennistraining ohne Partner." },
  ],
};
