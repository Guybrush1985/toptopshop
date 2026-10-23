// Kategorie: Flugsimulator-Joysticks (HOTAS)
// Aufbau siehe src/content/README.md (Content-Modell).
// Recherche: research/flugsimulator/bester-flugsimulator-joystick/

export default {
  slug: "bester-flugsimulator-joystick",
  area: "gaming-room",
  navLabel: "Flugsimulator-Joysticks",
  published: "2026-10-23",
  updated: "2026-10-23",

  metaTitle: "Die 3 besten Flugsimulator-Joysticks 2026 (PC, PS5, Xbox)",
  metaDescription:
    "HOTAS für MSFS 2024, DCS und War Thunder: Die 3 besten Flugsimulator-Joysticks 2026 im Vergleich – plus Top 5 nach Plattform von PS5 bis Weltraum-Sim.",

  eyebrow: "Gaming-Room · Flugsimulator",
  h1: "Die 3 besten Flugsimulator-Joysticks 2026",
  lead:
    "Mit Maus und Gamepad fliegt man, mit einem Joystick steuert man. Ein HOTAS – Stick plus Schubregler – ist für die meisten das erste echte Steuergerät für Microsoft Flight Simulator 2024, DCS oder War Thunder. Wir zeigen die drei besten und in der Top 5 die passenden Sticks für PS5, Xbox und Weltraum-Sims.",
  answer:
    "Unsere beste Gesamtwahl für den PC ist das [**Thrustmaster T16000M FCS HOTAS**](produkt:1) – Hall-Sensoren auf den Hauptachsen, beidhändig nutzbar und mit Pedalen ausbaubar. Das beste Preis-Leistungs-Verhältnis und zugleich die Wahl für die PS5 ist das [**Thrustmaster T.Flight Hotas 5 Microsoft Flight Simulator Edition**](produkt:2). Premium für Kampfjet-Fans ist das [**Thrustmaster Hotas Warthog MKII**](produkt:3) aus Metall.",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 150 €" },
    2: { symbol: "€€", label: "ca. 150–350 €" },
    3: { symbol: "€€€", label: "über 350 €" },
  },

  top3Title: "Unsere Top 3 Flugsimulator-Joysticks",
  top3Intro:
    "Alle drei sind HOTAS-Sets aus Stick und Schubregler. Der wichtigste Unterschied ist die Plattform: Zwei laufen nur am PC, eines auch an der PS5 – kein Stick funktioniert plattformübergreifend auf jeder Konsole.",
  comparisonTitle: "Die 3 besten Flugsimulator-Joysticks im Vergleich",

  criteria: [
    { key: "praezision", label: "Präzision & Sensorik", weight: 0.3, description: "Hall-Effekt- statt Potentiometer-Sensoren auf den Hauptachsen, Auflösung laut Hersteller, Zentrierung, Verschleiß laut Tests und Berichten." },
    { key: "ausstattung", label: "Tasten, Achsen & Verarbeitung", weight: 0.25, description: "Achsen, Tasten und Hats, Twist-Ruder, Schubregler, Material, Ergonomie, Linkshänder-Tauglichkeit." },
    { key: "plattform", label: "Plattform-Kompatibilität", weight: 0.2, description: "PC, PS5 oder Xbox laut Hersteller, offizielle Lizenz, Plug & Play, Ausbau mit Ruderpedalen." },
    { key: "preisleistung", label: "Preis-Leistung", weight: 0.25, description: "Präzision und Ausstattung im Verhältnis zur Preisklasse." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Sensoren, Achsen, Tasten, Plattformen), die Joystick-Kaufberatung von PC Games Hardware sowie Online-Tests von TweakTown, Windows Central und SlashGear. Nutzerberichte aus Foren sind als solche gekennzeichnet. Eigene Labortests haben wir nicht durchgeführt; Stiftung Warentest und Öko-Test haben Flugsimulator-Joysticks bisher nicht getestet. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Thrustmaster T16000M FCS HOTAS",
      brand: "Thrustmaster",
      variant: "Joystick + Schubregler TWCS, PC",
      visual: { kind: "joystick", tone: "forest" },
      priceTier: 1,
      ratings: { praezision: 8.5, ausstattung: 8.0, plattform: 6.0, preisleistung: 9.0 },
      bestFor: "PC-Pilot:innen, die ein präzises, ausbaufähiges HOTAS suchen – auch Linkshänder",
      verdict:
        "Das HOTAS, das für die meisten PC-Pilot:innen am meisten Sinn ergibt: Hall-Sensoren auf Nick- und Rollachse, ein Stick für Rechts- und Linkshänder und ein Schubregler mit Ruderwippe. Laut PCGH-Kaufberatung eine der Empfehlungen für Flugsimulatoren.",
      features: [
        "Hall-Sensoren (H.E.A.R.T) mit 16 Bit auf Nick- und Rollachse (Herstellerangabe)",
        "Stick: 4 Achsen inkl. Twist-Ruder, 16 Tasten, beidhändig umbaubar (Herstellerangabe)",
        "Schubregler TWCS: 5 Achsen, 14 Tasten, Anschluss für TFRP-Ruderpedale (Herstellerangabe)",
      ],
      pros: ["Präzise Hauptachsen mit Hall-Sensoren", "Für Linkshänder umbaubar", "Pedale direkt am Schubregler nachrüstbar"],
      cons: ["Nur PC", "Twist-Achse und Schubregler mit Potentiometern", "Viel Kunststoff, leichter Standfuß"],
      specs: {
        plattform: "PC (Windows)",
        sensoren: "Hall (Nick/Roll), Potis (Twist, Schub)",
        eingaben: "9 Achsen, 30 Tasten (Herstellerangabe)",
        schubregler: "TWCS, separat",
        ruder: "Twist + Wippe am Schubregler",
        linkshaender: "ja",
      },
      asin: "B01H6KXGDY",
      query: "Thrustmaster T16000M FCS HOTAS",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Thrustmaster T.Flight Hotas 5 Microsoft Flight Simulator Edition",
      brand: "Thrustmaster",
      variant: "PS5, PS4 & PC",
      visual: { kind: "joystick", tone: "green" },
      priceTier: 1,
      ratings: { praezision: 6.0, ausstattung: 7.0, plattform: 9.5, preisleistung: 8.5 },
      bestFor: "Einsteiger:innen und PS5-Besitzer:innen",
      verdict:
        "Der unkomplizierte Einstieg: offiziell für Microsoft Flight Simulator 2024 und von Sony lizenziert, Plug & Play an PS5, PS4 und PC. TweakTown vergibt 88 % und nennt ihn erschwinglich für Einsteiger – technisch ist er laut FSElite aber weitgehend ein Hotas 4.",
      features: [
        "Offizielle Lizenz für MSFS 2024 und PlayStation (Herstellerangabe)",
        "5 Achsen, 14 Tasten, abnehmbarer Schubregler (Herstellerangabe)",
        "Ruder per Stick-Drehung oder Wippe, TFRP-Pedale nachrüstbar (Herstellerangabe)",
      ],
      pros: ["Einer der wenigen Flugsticks für die PS5", "Plug & Play", "Schubregler abnehmbar"],
      cons: ["Potentiometer statt Hall-Sensoren", "Kunststoff, Einstiegsniveau", "Nicht für die Xbox"],
      specs: {
        plattform: "PS5, PS4, PC",
        sensoren: "Potentiometer",
        eingaben: "5 Achsen, 14 Tasten (Herstellerangabe)",
        schubregler: "abnehmbar",
        ruder: "Twist + Wippe",
        linkshaender: "nein",
      },
      asin: "B0GJSZ4YV1",
      query: "Thrustmaster T.Flight Hotas 5 Microsoft Flight Simulator Edition",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Thrustmaster Hotas Warthog MKII",
      brand: "Thrustmaster",
      variant: "Stick + Dual-Throttle, U.S.-Air-Force-Replika, PC",
      visual: { kind: "joystick", tone: "mint" },
      priceTier: 3,
      ratings: { praezision: 9.5, ausstattung: 8.5, plattform: 5.0, preisleistung: 5.5 },
      bestFor: "DCS- und Militärflug-Fans, die Metall-Hardware für viele Jahre suchen",
      verdict:
        "Die Replika der A-10C-Steuerung ist seit September 2026 in zweiter Generation erhältlich: Metall, Hall-Sensoren, Dual-Throttle. Windows Central nennt sie die authentischste Hardware für Militär-Sims – der Stick hat aber keine Twist-Achse, Ruderpedale gehören praktisch dazu.",
      features: [
        "Hall-Sensoren (H.E.A.R.T) mit 16 Bit, Basis mit Kugellagern (Herstellerangabe)",
        "Dual-Throttle für zweistrahlige Jets, Metallbauweise (Herstellerangabe)",
        "Basis nimmt andere Thrustmaster-Griffe auf (Herstellerangabe)",
      ],
      pros: ["Sehr langlebige Metall-Replika", "Dual-Throttle", "Referenz-HOTAS für DCS"],
      cons: ["Nur PC", "Keine Twist-Achse – Pedale nötig", "Groß und schwer, nicht Plug & Play"],
      specs: {
        plattform: "PC (Windows)",
        sensoren: "Hall, 16 Bit (Herstellerangabe)",
        eingaben: "Stick + Dual-Throttle, Metall",
        schubregler: "Dual-Throttle",
        ruder: "keine Twist-Achse",
        linkshaender: "nein",
      },
      asin: "B0H3PW546V",
      query: "Thrustmaster Hotas Warthog MKII",
    },
  ],

  comparison: [
    { key: "plattform", label: "Plattform" },
    { key: "sensoren", label: "Sensoren" },
    { key: "eingaben", label: "Achsen & Tasten" },
    { key: "schubregler", label: "Schubregler" },
    { key: "ruder", label: "Seitenruder" },
    { key: "linkshaender", label: "Linkshänder" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-flugsimulator-joysticks-2026-bewertung.svg",
      title: "Die 3 besten Flugsimulator-Joysticks 2026",
      alt: "Balkendiagramm: Bewertung von Thrustmaster T16000M FCS HOTAS, T.Flight Hotas 5 MSFS Edition und Hotas Warthog MKII in den Kriterien Präzision & Sensorik, Tasten, Achsen & Verarbeitung, Plattform-Kompatibilität und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Präzision und Sensorik wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "flugsimulator-joystick-einrichten.svg",
      title: "Flugsimulator-Joystick einrichten",
      subtitle: "Von der Plattform bis zur Achsbelegung",
      alt: "Infografik: Flugsimulator-Joystick einrichten – Plattform klären, Platz am Tisch, Anschließen, Kalibrieren, Achsen und Tasten belegen, Profil sichern",
      caption: "Erst Plattform prüfen, dann im Simulator kalibrieren und Achsen sauber belegen.",
      steps: [
        { title: "Plattform klären", text: "Prüfen, ob der Stick für PC, PS5 oder Xbox freigegeben ist – Konsolen erkennen nur zertifizierte Geräte." },
        { title: "Platz am Tisch", text: "Stick vor die Schreibhand, Schubregler auf die andere Seite – Ellbogen locker aufgelegt." },
        { title: "Anschließen", text: "Per USB direkt am PC oder an der Konsole anschließen, ggf. Treiber oder Firmware des Herstellers installieren." },
        { title: "Kalibrieren", text: "Im Simulator die Achsen prüfen und bei Bedarf Totzone und Empfindlichkeit anpassen." },
        { title: "Achsen und Tasten belegen", text: "Querruder, Höhenruder, Schub und Ruder zuweisen, wichtige Funktionen auf Hütchen und Abzug legen." },
        { title: "Profil sichern", text: "Belegung als eigenes Profil speichern, damit sie Updates und Gerätewechsel übersteht." },
      ],
    },
  },

  editorial: {
    title: "HOTAS, Hall-Sensoren und die Plattformfrage",
    intro:
      "Welcher Stick zu deiner Konsole oder deinem PC passt, warum die Sensoren über die Lebensdauer entscheiden und wann ein Yoke die bessere Wahl ist.",
    sections: [
      {
        id: "bester-joystick",
        h2: "Welcher Flugsimulator-Joystick ist der beste?",
        blocks: [
          { quick: "Am PC ist das [Thrustmaster T16000M FCS HOTAS](produkt:1) für die meisten die beste Wahl: Hall-Sensoren, beidhändig, ausbaufähig. Wer auf der PS5 fliegt, nimmt das [T.Flight Hotas 5 MSFS Edition](produkt:2); für DCS und Kampfjets ist das [Hotas Warthog MKII](produkt:3) die Premium-Wahl." },
          { first: "Ein Flugsimulator lässt sich mit Maus, Tastatur oder Gamepad bedienen – aber feinfühlig fliegen lässt er sich so kaum. Ein Joystick überträgt kleine Bewegungen der Hand direkt auf Quer- und Höhenruder, der Schubregler gibt der zweiten Hand einen festen Platz für die Leistung. Diese Aufteilung heißt **HOTAS**: „Hands on Throttle and Stick“. Wichtige Funktionen liegen auf Tasten an Stick und Schubregler, sodass beide Hände während des Flugs an den Steuergeräten bleiben." },
          { p: "Die erste Frage beim Kauf ist nicht die Ausstattung, sondern die **Plattform**. Am PC funktioniert praktisch jeder USB-Stick. PS5 und Xbox dagegen erkennen nur Geräte mit offizieller Lizenz – und die gelten jeweils nur für eine Konsolenfamilie. Das [T.Flight Hotas 5](produkt:2) läuft an PS5, PS4 und PC, aber nicht an der Xbox. Das [T16000M FCS](produkt:1) und der [Warthog MKII](produkt:3) sind reine PC-Geräte." },
          { figure: "scores" },
          { p: "Der zweite große Unterschied steckt in den **Sensoren**. Das T16000M FCS und der Warthog MKII messen die Hauptachsen laut Hersteller berührungslos mit Hall-Sensoren. Das Hotas 5 nutzt Potentiometer – Schleifkontakte, die mit der Zeit verschleißen und dann zu Zittern oder Sprüngen in der Achse führen können. Für Einsteiger ist das kein Ausschlusskriterium, für Vielflieger aber ein Grund, eine Stufe höher zu greifen." },
          { quote: "Erst die Plattform, dann die Sensoren, dann die Tastenzahl – in dieser Reihenfolge fällt die Wahl leicht." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Flugsimulator-Joysticks achten?",
        blocks: [
          { quick: "Achte zuerst auf die Freigabe für deine Plattform (PC, PS5 oder Xbox), dann auf Hall-Sensoren auf den Hauptachsen, ein Seitenruder per Twist-Achse oder Pedalanschluss und genügend Tasten für deine Simulation." },
          {
            table: {
              caption: "Bauarten im Vergleich",
              head: ["Bauart", "Stärken", "Schwächen"],
              rows: [
                ["**HOTAS (Stick + Schubregler)**", "Universell für zivile und militärische Flugzeuge, viele Tasten", "Braucht Platz für zwei Geräte"],
                ["**Einzelner Stick mit Schubrad**", "Kompakt, günstig", "Schub nur grob regelbar"],
                ["**HOSAS (zwei Sticks)**", "Ideal für Weltraum-Sims mit sechs Freiheitsgraden", "Für Flugzeuge ungewohnt"],
                ["**Yoke**", "Realistisch für Verkehrs- und Propellerflugzeuge", "Für Kampfjets und Helikopter ungeeignet"],
              ],
            },
          },
          { h3: "Sensoren und Präzision" },
          { p: "Hall-Sensoren arbeiten mit Magneten und ohne Schleifkontakt. Sie gelten deshalb als verschleißarm und behalten ihre Präzision länger. Bei vielen Sticks stecken sie nur in Nick- und Rollachse: Beim [T16000M FCS](produkt:1) arbeiten Twist-Achse und Schubregler laut Hersteller mit Potentiometern, die laut Nutzerberichten mit der Zeit verschleißen können. Die Auflösung (z. B. 16 Bit) ist eine Herstellerangabe – im Alltag entscheidender sind eine saubere Mittelstellung und eine gleichmäßige Federkraft." },
          { h3: "Seitenruder: Twist-Achse oder Pedale" },
          { p: "Das Seitenruder brauchst du zum Rollen am Boden, für Seitenwind-Landungen und bei Helikoptern. Viele Sticks haben dafür eine **Twist-Achse** (Drehung des Griffs) oder eine Wippe am Schubregler. Der [Warthog MKII](produkt:3) hat keine Twist-Achse – wie im Original-Jet. Wer ihn kauft, sollte gleich [Ruderpedale](/beste-ruderpedale-flugsimulator/) einplanen. Das T16000M FCS lässt sich laut Hersteller mit den Thrustmaster-TFRP-Pedalen erweitern, die direkt am Schubregler TWCS angeschlossen werden. Auch beim Hotas 5 sind die TFRP-Pedale laut Thrustmaster anschließbar – laut Berichten über eine Buchse an der Joystick-Basis." },
          { h3: "Tasten, Ergonomie und Linkshänder" },
          { p: "Für zivile Flugzeuge im Microsoft Flight Simulator genügt nach unserer Einschätzung meist ein Einsteiger-HOTAS; in DCS mit komplexen Kampfjets zahlt sich jede zusätzliche Taste und jedes Hütchen aus. Linkshänder haben es schwer: Die meisten Sticks sind für die rechte Hand geformt. Das T16000M FCS lässt sich laut Hersteller vollständig auf links umbauen – ein seltener Vorteil in dieser Preisklasse." },
          { list: ["Plattform-Freigabe (PC, PS5 oder Xbox) prüfen", "Hall-Sensoren mindestens auf Nick- und Rollachse", "Seitenruder per Twist-Achse, Wippe oder Pedalanschluss", "Schubregler abnehmbar oder separat, Reibung einstellbar", "Stabiler Stand oder Tischhalterung bei schweren Geräten"] },
        ],
      },
      {
        id: "welcher-joystick-passt",
        h2: "Welcher Joystick passt zu wem?",
        blocks: [
          { quick: "PC-Einsteiger und Allrounder greifen zum T16000M FCS, PS5-Spieler zum Hotas 5, Kampfjet-Fans mit großem Budget zum Warthog MKII. Für die Xbox und für Weltraum-Sims gibt es eigene Empfehlungen in der Top 5." },
          {
            cards: [
              { title: "PC-Allrounder", text: "MSFS, DCS, War Thunder und Star Citizen mit einem Gerät: T16000M FCS HOTAS.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "PS5 & Einsteiger", text: "Plug & Play mit offizieller Lizenz: T.Flight Hotas 5 MSFS Edition.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "DCS & Kampfjets", text: "Metall, Hall-Sensoren, Dual-Throttle: Hotas Warthog MKII.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Xbox", text: "Konsolen-Sticks sind nicht übertragbar – die Xbox-Wahl steht in der Top 5.", link: { href: "#top5-nach-plattform", label: "Zur Top 5" } },
              { title: "In VR fliegen", text: "Mit VR-Brille sieht man die Tastatur nicht – ein HOTAS mit vielen Tasten hilft.", link: { href: "/vr-gaming/", label: "VR-Gaming" } },
              { title: "Platz am Schreibtisch", text: "Stick und Schubregler brauchen Fläche links und rechts der Tastatur.", link: { href: "/gaming-tische/", label: "Gaming-Tische" } },
            ],
          },
          { p: "Wer vor allem Verkehrsflugzeuge und Cessnas im Microsoft Flight Simulator fliegt, sollte auch über ein [Yoke](/bestes-flugsimulator-yoke/) nachdenken: Das Steuerhorn bildet die zivile Bedienung realistischer ab. Ein Joystick ist dagegen die vielseitigere Wahl – er passt zu Airbus-Sidestick, Kampfjet, Helikopter und Weltraumschiff gleichermaßen. Wer vom [Sim-Racing](/sim-racing-cockpits/) kommt, kann ein vorhandenes Cockpit mit passender Halterung oft auch zum Fliegen nutzen." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-nach-plattform",
    h2: "Die 5 besten Joysticks nach Plattform und Spielstil",
    intro:
      "Konsolen-Sticks funktionieren nur auf ihrer Plattform, Weltraum-Sims verlangen eine andere Bauart. Diese fünf decken PS5, Xbox, PC, Kampfjet-Sims und HOSAS ab.",
    items: [
      { name: "Thrustmaster T.Flight Hotas Neo Ace Combat 8 Flight Stick für PS5, PS4, PC", for: "PS5 & Action", text: "Für PS5, PS4 und PC mit 7 Achsen, 16 Tasten, Mini-Stick, Vibration (laut Hersteller nur an PS5 und PC) und Hall-Sensor auf der Z-Achse, Schubregler abnehmbar (Herstellerangabe) – für Ace Combat 8 und War Thunder auf der Konsole.", asin: "B0H2ZC5TTB", query: "Thrustmaster T.Flight Hotas Neo Ace Combat 8 PS5" },
      { name: "Turtle Beach VelocityOne H.O.T.A.S. Flugsimulator-Steuerung, XBOX, PC", for: "Xbox", text: "Flightstick II mit 16-Bit-Hall-Sensoren, drei Federstärken und Dual-Throttle mit austauschbaren Rastungen, laut Berichten mit offizieller Xbox-Lizenz. SlashGear nennt es nach einer Woche Test „Xbox/PC's Best Flight Sim System Yet“. Ältere VelocityOne-Produkte erhielten gemischte Rezensionen.", asin: "B0H8PZH1P3", query: "Turtle Beach VelocityOne H.O.T.A.S. Xbox PC" },
      { name: "Logitech G X56 H.O.T.A.S.", for: "PC mit Dual-Throttle", text: "Viele programmierbare Eingaben, Dual-Throttle, vier tauschbare Federn und kontaktlose Magnetsensoren (Herstellerangabe) – für Flug- und Weltraum-Sims am PC. Laut Berichten treten am Schubregler mitunter ungewollte Eingaben auf, oft im Zusammenhang mit der USB-Stromversorgung.", asin: "B079Z3DSBK", query: "Logitech G X56 H.O.T.A.S." },
      { name: "Thrustmaster AVA FA18 Super Hornet Flight Stick", for: "DCS & Kampfjets (Stick-Upgrade)", text: "Von Boeing lizenzierte F/A-18C-Griff-Replika mit 19 Tasten auf der modularen AVA-Basis, deren Achskurve, Widerstand, Ausschlag und Dämpfung sich einstellen lassen; nur PC (Händlerangabe). Wichtig: **Ein Schubregler gehört nicht dazu** – als Ergänzung bietet sich etwa der TWCS-Schubregler aus dem T16000M-System an.", asin: "B0CGRW7R81", query: "Thrustmaster AVA FA18 Super Hornet Flight Stick" },
      { name: "Thrustmaster Sol-R 2 HOSAS Space Sim Duo", for: "Weltraum-Sims (HOSAS)", text: "Zwei beidhändige Sticks mit Hall-Sensoren auf allen Achsen und je einem Schubhebel in der Basis, insgesamt 88 Tasten, nur PC (Herstellerangabe) – für Star Citizen, Elite Dangerous und Star Wars: Squadrons.", asin: "B0DMSTP1YG", query: "Thrustmaster Sol-R 2 HOSAS Space Sim Duo" },
    ],
  },

  guide: {
    sections: [
      {
        id: "einrichten",
        h2: "Joystick einrichten und ausbauen",
        blocks: [
          { quick: "Stick und Schubregler per USB anschließen, im Simulator kalibrieren, Achsen und wichtige Tasten belegen und die Belegung als Profil sichern. Später lässt sich das Setup mit Ruderpedalen, Schubhebel oder einem Cockpit erweitern." },
          { figure: "steps" },
          { p: "Den Stick stellst du vor die Hand, mit der du schreibst, den Schubregler auf die andere Seite – so wie im Cockpit eines Kampfjets. Der Unterarm sollte locker auf dem Tisch oder einer Armauflage liegen, damit kleine Bewegungen aus dem Handgelenk kommen. Schwere Geräte wie der Warthog MKII stehen zwar sicher, brauchen aber viel Fläche; leichte Sticks wie das T16000M FCS rutschen bei heftigen Manövern eher, eine Tischhalterung hilft." },
          { p: "Im Microsoft Flight Simulator 2024 erkennt das Spiel viele Geräte automatisch und lädt ein Standardprofil. Beim Hotas 5 meldete ein Nutzer im offiziellen MSFS-Forum ein fehlendes Profil; der Thrustmaster-Support empfahl laut diesem Bericht, den Kompatibilitätsmodus auf „Blau“ zu stellen, damit der Stick als Hotas 4 erkannt wird. In DCS lohnt es sich, für jedes Flugzeug ein eigenes Profil anzulegen. Für PC-Sticks von Thrustmaster gibt es zusätzlich die kostenlose Software T.A.R.G.E.T." },
          { h3: "Nächste Ausbaustufen" },
          { list: ["[**Ruderpedale**](/beste-ruderpedale-flugsimulator/) für Rollen, Seitenwind und Helikopter – beim Warthog MKII praktisch Pflicht", "[**Eigener Schubhebel-Quadrant**](/bester-flugsimulator-schubhebel/) für Airbus, Boeing oder Propellerflugzeuge", "[**Cockpit oder Halterung**](/bestes-flugsimulator-cockpit/), wenn der Schreibtisch zu klein wird", "**VR-Brille** für den Blick aus dem Cockpit"] },
          { callout: { title: "Gesundheit und Sicherheit", warn: true, text: "Lange Flüge mit Pausen unterbrechen und Handgelenk sowie Schultern locker halten; die Hinweise hier ersetzen keine ärztliche Beratung. Beim Fliegen in VR kann Bewegungsübelkeit auftreten – dann sofort pausieren. Blinkende Bildeffekte können bei Menschen mit fotosensibler Epilepsie Anfälle auslösen; Warnhinweise der Spiele beachten. Schwere Geräte sicher aufstellen, damit sie nicht vom Tisch fallen." } },
          { facts: [{ value: "16 Bit", label: "Hall-Sensoren T16000M FCS & Warthog MKII (Herstellerangabe)" }, { value: "88 %", label: "TweakTown-Test, T.Flight Hotas 5 MSFS" }, { value: "16.09.2026", label: "Marktstart Warthog MKII (laut Windows Central)" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Joystick ist der beste für den Microsoft Flight Simulator 2024?", a: "Am PC ist das Thrustmaster T16000M FCS HOTAS für die meisten die beste Wahl. Auf der PS5 empfehlen wir das T.Flight Hotas 5 Microsoft Flight Simulator Edition, das offiziell für MSFS 2024 lizenziert ist; für die Xbox das Turtle Beach VelocityOne H.O.T.A.S." },
    { q: "Joystick oder Yoke – was ist besser für den Flugsimulator?", a: "Für Kampfjets, Helikopter, Airbus und Weltraum-Sims ist ein Joystick besser, für Verkehrs- und Propellerflugzeuge ein Yoke. Wer viele verschiedene Spiele fliegt, fährt mit einem HOTAS vielseitiger." },
    { q: "Was bedeutet HOTAS?", a: "HOTAS steht für „Hands on Throttle and Stick“: Stick und Schubregler sind getrennt, und die wichtigsten Funktionen liegen als Tasten direkt auf beiden Geräten. So bleiben beide Hände während des Flugs an der Steuerung." },
    { q: "Welcher Flight Stick funktioniert mit der PS5?", a: "Das T.Flight Hotas 5 Microsoft Flight Simulator Edition und das T.Flight Hotas Neo Ace Combat 8 von Thrustmaster laufen laut Hersteller an PS5, PS4 und PC. PC- und Xbox-Sticks werden von der PS5 nicht erkannt." },
    { q: "Kann man den Flight Simulator auf der Xbox mit Joystick spielen?", a: "Ja, aber nur mit Sticks mit Xbox-Lizenz, etwa dem Turtle Beach VelocityOne H.O.T.A.S. oder dem T.Flight Hotas One. Die drei Modelle unserer Top 3 funktionieren an der Xbox nicht." },
    { q: "Braucht man zum Joystick zusätzlich Ruderpedale?", a: "Nicht zwingend, wenn der Stick eine Twist-Achse oder eine Ruderwippe hat. Pedale sind aber präziser beim Rollen und bei Seitenwind – beim Warthog MKII ohne Twist-Achse sind sie praktisch Pflicht." },
    { q: "Was sind Hall-Sensoren und warum sind sie besser?", a: "Hall-Sensoren messen die Stick-Position berührungslos über Magnetfelder. Weil kein Schleifkontakt verschleißt, bleiben sie in der Regel länger präzise als Potentiometer, die mit der Zeit zu Zittern neigen können." },
    { q: "Kann man einen Joystick auch für War Thunder, DCS und Star Citizen nutzen?", a: "Ja, ein HOTAS wie das T16000M FCS lässt sich am PC in allen gängigen Flug- und Weltraum-Sims belegen. Für Star Citizen und Elite Dangerous bevorzugen viele allerdings zwei Sticks (HOSAS), etwa das Thrustmaster Sol-R 2." },
  ],

  sources: [
    { label: "Thrustmaster: T.16000M FCS HOTAS", url: "https://www.thrustmaster.com/products/t16000m-fcs-hotas" },
    { label: "PC Games Hardware: Joystick-Kaufberatung Flugsimulator", url: "https://www.pcgameshardware.de/Eingabegeraet-Hardware-154122/Specials/Joystick-kaufen-Flugsimulator-Kaufberatung-PS5-1495978/" },
    { label: "PC Games Hardware: T.Flight Hotas 5 MSFS Edition vorgestellt", url: "https://www.pcgameshardware.de/Eingabegeraet-Hardware-154122/News/Thrustmaster-T-Flight-Hotas-5-MSFS-Edition-Neuer-Flugstick-fuer-PC-und-PS5-vorgestellt-1545186/" },
    { label: "PC Games: Joysticks Kaufberatung und Marktübersicht", url: "https://www.pcgames.de/Hardware-Thema-130320/Specials/Joytick-Flugsimulationen-kaufberatung-Marktuebersicht-1488341/" },
    { label: "FSElite: Thrustmaster T.Flight Hotas 5 MSFS Edition", url: "https://fselite.net/content/thrustmaster-announces-t-flight-hotas-5-msfs-edition/" },
    { label: "TweakTown: Test T.Flight Hotas 5 MSFS Edition", url: "https://www.tweaktown.com/reviews/11541/thrustmaster-t-flight-hotas-5-msfs-edition/index.html" },
    { label: "Windows Central: Test Hotas Warthog MKII", url: "https://www.windowscentral.com/gaming/pc-gaming/thrustmaster-hotas-warthog-mk-ii-review" },
    { label: "TweakTown: Test Hotas Warthog MKII", url: "https://www.tweaktown.com/reviews/11618/thrustmaster-hotas-warthog-mkii/index.html" },
    { label: "Thrustmaster: T.Flight Hotas Neo Ace Combat 8 (PlayStation/PC)", url: "https://www.thrustmaster.com/en-us/products/t-flight-hotas-neo-ace-combat-8-wings-of-theve-edition-ps/" },
    { label: "FSElite: Turtle Beach VelocityOne H.O.T.A.S.", url: "https://fselite.net/content/turtle-beach-reveals-release-and-pricing-details-for-its-velocityone-h-o-t-a-s-lineup/" },
    { label: "SlashGear: Test VelocityOne H.O.T.A.S.", url: "https://www.slashgear.com/2285444/turtle-beach-velocityone-hotas-review/" },
    { label: "MSFS-Forum: Hotas 5 Standardprofil", url: "https://forums.flightsimulator.com/t/t-flight-hotas-5-msfs-edition-missing-default-profile-stuck-on-none-in-msfs-2024/768636" },
    { label: "MSFS-Forum: X56 ungewollte Eingaben", url: "https://forums.flightsimulator.com/t/solved-hotas-x56-throttle-causes-ghost-inputs/193896" },
  ],

  related: [
    { slug: "beste-ruderpedale-flugsimulator", text: "Ruderpedale für den Flugsimulator." },
    { slug: "bestes-flugsimulator-yoke", text: "Flugsimulator-Yokes." },
    { slug: "bestes-flugsimulator-cockpit", text: "Flugsimulator-Cockpits." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
