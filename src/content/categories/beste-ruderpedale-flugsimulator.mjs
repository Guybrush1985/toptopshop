// Kategorie: Ruderpedale für den Flugsimulator
// Aufbau siehe src/content/README.md (Content-Modell).
// Recherche: research/flugsimulator/beste-ruderpedale-flugsimulator/

export default {
  slug: "beste-ruderpedale-flugsimulator",
  area: "gaming-room",
  navLabel: "Ruderpedale",
  published: "2026-10-23",
  updated: "2026-10-23",

  metaTitle: "Die 3 besten Ruderpedale für den Flugsimulator 2026",
  metaDescription:
    "Seitenruder mit Zehenbremsen für MSFS 2024, DCS und Helikopter: Die 3 besten Ruderpedale 2026 im Vergleich – plus Top 5 nach Plattform und Platz.",

  eyebrow: "Gaming-Room · Flugsimulator",
  h1: "Die 3 besten Ruderpedale für den Flugsimulator 2026",
  lead:
    "Mit Ruderpedalen steuerst du das Seitenruder mit den Füßen und bremst beim Rollen links und rechts getrennt – wie im echten Cockpit. Wir zeigen die drei besten Pedale für PC und Konsole und in der Top 5 die passenden Modelle und Sets je Plattform und Einsatz.",
  answer:
    "Unsere beste Gesamtwahl sind die [**Honeycomb Aeronautical Charlie Rudder Pedals**](produkt:1) – laut Hersteller mit Aluminiumgehäuse, Hall-Sensoren und einstellbarer Federspannung, direkt per USB-C am PC. Das beste Preis-Leistungs-Verhältnis bieten die [**Thrustmaster TFRP T.Flight Rudder Pedals**](produkt:2), die als einzige im Vergleich über einen Thrustmaster-Joystick auch an PS5 und Xbox laufen. Premium-Wahl für den PC ist das [**Thrustmaster TPR Pendular Rudder**](produkt:3) mit Pendelmechanik.",

  priceTiers: {
    1: { symbol: "€", label: "unter 150 €" },
    2: { symbol: "€€", label: "150–350 €" },
    3: { symbol: "€€€", label: "über 350 €" },
  },

  top3Title: "Unsere Top 3 Ruderpedale",
  top3Intro:
    "Alle drei steuern das Seitenruder und haben zwei getrennte Zehenbremsen. Der größte Unterschied liegt in der Mechanik – Gleitschiene, Riemen oder Pendel – und darin, an welcher Plattform die Pedale überhaupt funktionieren.",
  comparisonTitle: "Die 3 besten Ruderpedale im Vergleich",

  criteria: [
    { key: "mechanik", label: "Mechanik, Präzision & Stand", weight: 0.35, description: "Bauart, Sensoren, Material, einstellbare Federkraft, Gewicht und Rutschfestigkeit." },
    { key: "bremsen", label: "Zehenbremsen & Einstellbarkeit", weight: 0.2, description: "Getrennte Bremsachsen, Pedalwinkel, Fersenauflage, Platz für große Füße." },
    { key: "kompatibilitaet", label: "Plattform & Anschluss", weight: 0.2, description: "PC, Xbox, PS5 laut Hersteller; direkt per USB oder nur über Joystick, Yoke oder Hub." },
    { key: "preisLeistung", label: "Preis-Leistung", weight: 0.25, description: "Gegenwert für die Preisklasse, Garantie, Verbreitung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Thrustmaster-Support und Handbücher, Honeycomb, Turtle Beach), Händlerangaben auf amazon.de sowie englischsprachige Online-Reviews und Ratgeber. Tests von Stiftung Warentest, Öko-Test oder deutschen Fachmagazinen zu Ruderpedalen haben wir nicht gefunden. Wir haben die Pedale nicht selbst gemessen; die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Honeycomb Aeronautical Charlie Rudder Pedals",
      brand: "Honeycomb Aeronautical",
      variant: "PC/Mac, Xbox mit Xbox Hub",
      visual: { kind: "pedals", tone: "forest" },
      priceTier: 2,
      ratings: { mechanik: 8.5, bremsen: 8.5, kompatibilitaet: 7.5, preisLeistung: 7.5 },
      bestFor: "Zivilflieger in MSFS 2024 und X-Plane am PC",
      verdict:
        "Die solideste Wahl für den Schreibtisch-Simmer: laut Hersteller Aluminiumgehäuse, kontaktlose Hall-Sensoren und einstellbare Federspannung, dazu Gummiflächen und umdrehbare Teppich-Spikes gegen Wegrutschen. Am PC und Mac direkt per USB-C, auf der Xbox nur im Honeycomb-Verbund.",
      features: [
        "Aluminiumgehäuse, Hall-Effekt-Sensoren, einstellbare Federspannung (Herstellerangabe)",
        "Riemenantrieb und verstellbarer Fußwinkel (Händlerangabe)",
        "Gummi-Gleitschutz und umdrehbare Teppich-Spikes (Händlerangabe)",
        "498 × 457 × 210 mm, 7,3 kg, 2 Jahre Garantie (Herstellerangabe)",
      ],
      pros: [
        "Alu-Bauweise und kontaktlose Hall-Sensoren (Herstellerangabe)",
        "Steht dank Gewicht, Gummifüßen und Spikes sicher",
        "Fußwinkel und Federspannung einstellbar",
        "Direkt per USB-C am PC – kein Joystick nötig",
      ],
      cons: [
        "Xbox nur mit Honeycomb Alpha XPC und separatem Xbox Hub",
        "Keine PS5-Unterstützung",
        "Groß und schwer, braucht viel Fußraum",
        "Wenige unabhängige Tests",
      ],
      specs: {
        mechanik: "Riemenantrieb, Hall-Sensoren (Hersteller-/Händlerangabe)",
        bremsen: "2 Zehenbremsen, Fußwinkel verstellbar",
        plattform: "PC, Mac; Xbox nur mit Alpha XPC + Xbox Hub",
        anschluss: "USB-C, direkt am Rechner",
        gewicht: "7,3 kg (Herstellerangabe)",
      },
      asin: "B0B2KFVYPR",
      query: "Honeycomb Aeronautical Charlie Rudder Pedals",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Thrustmaster TFRP T.Flight Rudder Pedals",
      brand: "Thrustmaster",
      variant: "PC; PS5/PS4 und Xbox über Thrustmaster-Joystick",
      visual: { kind: "pedals", tone: "green" },
      priceTier: 1,
      ratings: { mechanik: 6.0, bremsen: 6.5, kompatibilitaet: 9.5, preisLeistung: 9.5 },
      bestFor: "Einsteiger und Konsolenpiloten",
      verdict:
        "Der günstige Einstieg ins Seitenruder – und der Weg auf die Konsole: Laut Thrustmaster-Support laufen die Pedale an PS5 und PS4 über den T.Flight Hotas 5, den T.Flight Hotas 4 oder das TCA Sky Yoke, an der Xbox über den T.Flight Hotas One. Am PC hängen sie über den beiliegenden USB-Adapter direkt am Rechner.",
      features: [
        "PC direkt über den beiliegenden T.RJ12-USB-Adapter (Herstellerangabe)",
        "PS5/PS4 über T.Flight Hotas 5/4 oder TCA Sky Yoke, Xbox über T.Flight Hotas One (Herstellerangabe)",
        "Selbstzentrierende Gleitschienen, zwei Differenzial-Bremspedale (Händlerangabe)",
        "Abnehmbare Fersenauflagen, 25 cm Pedallänge bis Schuhgröße 45 (Händlerangabe)",
      ],
      pros: [
        "Einzige Pedale der Top 3 für PS5 und Xbox",
        "Kompakt und leicht – passt unter fast jeden Schreibtisch",
        "Getrennte Zehenbremsen und abnehmbare Fersenstützen",
        "Sehr verbreitet, viele Kundenbewertungen",
      ],
      cons: [
        "Viel Kunststoff",
        "Auf Konsole nur über einen Thrustmaster-Joystick bzw. -Yoke mit RJ12-Port",
        "PS5: nur in Spielen mit Flight-Stick-Modus",
        "Rutscht auf glattem Boden leichter (geringes Gewicht)",
      ],
      specs: {
        mechanik: "Gleitschienen, selbstzentrierend",
        bremsen: "2 Differenzialbremsen, Fersenstützen abnehmbar",
        plattform: "PC; PS5/PS4 und Xbox nur über Thrustmaster-Joystick",
        anschluss: "RJ12; PC per beiliegendem USB-Adapter",
        gewicht: "leicht (laut CGMagazine)",
      },
      asin: "B01649IVI8",
      query: "Thrustmaster TFRP T.Flight Rudder Pedals",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Thrustmaster TPR Pendular Rudder",
      brand: "Thrustmaster",
      variant: "Profi-Rudersystem, PC",
      visual: { kind: "pedals", tone: "mint" },
      priceTier: 3,
      ratings: { mechanik: 9.5, bremsen: 9.0, kompatibilitaet: 5.0, preisLeistung: 6.5 },
      bestFor: "PC-Simmer mit Cockpit, Kampfjet- und Helikopterfans",
      verdict:
        "Pendel statt Schiene: Die Pedale schwingen wie in vielen echten Flugzeugen an einer Aufhängung. Dazu laut Hersteller 16-Bit-Hall-Sensoren auf allen drei Achsen, einstellbarer Pedalwinkel und Federwiderstand sowie Gewinde für die Montage im Cockpit – allerdings nur für den PC.",
      features: [
        "Pendelmechanik, Metallbasis, ca. 7 kg (Herstellerangabe)",
        "3D-Hall-Sensoren mit 16 Bit auf Ruder und beiden Bremsen (Herstellerangabe)",
        "Bremspedale in 5 Stufen von 35° bis 75°, Widerstand über zwei Federn einstellbar (Herstellerangabe)",
        "Vier M6-Gewinde für die Cockpit-Montage (Herstellerangabe)",
      ],
      pros: [
        "Pendelmechanik mit realistischem Bewegungsablauf",
        "Hall-Sensoren auf allen drei Achsen",
        "Pedalwinkel und Federkraft einstellbar",
        "Für feste Montage im Cockpit vorbereitet",
      ],
      cons: [
        "Nur PC – keine Xbox, keine PS5",
        "Teuerste Pedale im Vergleich",
        "Schwer und hoch, braucht viel Fußraum",
        "Je nach Amazon-Angebot Import über den Global Store",
      ],
      specs: {
        mechanik: "Pendel, Metallbasis, 3D-Hall 16 Bit (Herstellerangabe)",
        bremsen: "2 Differenzialbremsen, Winkel 35–75° in 5 Stufen",
        plattform: "nur PC",
        anschluss: "PC, Software T.A.R.G.E.T",
        gewicht: "ca. 7 kg (Herstellerangabe)",
      },
      asin: "B07DK8N8JG",
      query: "Thrustmaster TPR Pendular Rudder",
    },
  ],

  comparison: [
    { key: "mechanik", label: "Mechanik & Sensoren" },
    { key: "bremsen", label: "Zehenbremsen" },
    { key: "plattform", label: "Plattform" },
    { key: "anschluss", label: "Anschluss" },
    { key: "gewicht", label: "Gewicht" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-ruderpedale-flugsimulator-2026-bewertung.svg",
      title: "Die 3 besten Ruderpedale für den Flugsimulator 2026",
      alt: "Balkendiagramm: Bewertung von Honeycomb Charlie, Thrustmaster TFRP und Thrustmaster TPR in den Kriterien Mechanik, Präzision & Stand, Zehenbremsen & Einstellbarkeit, Plattform & Anschluss und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium für die drei empfohlenen Modelle. Mechanik und Stand wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "ruderpedale-einrichten.svg",
      title: "Ruderpedale einrichten",
      subtitle: "Stand, Sitzposition und Achsen",
      alt: "Infografik: Ruderpedale einrichten – Plattform klären, Fußraum messen, Rutschfest stellen, Sitzabstand anpassen, Kalibrieren, Achsen belegen",
      caption: "Pedale rutschfest stellen, Sitzabstand anpassen und die Bremsen getrennt belegen.",
      steps: [
        { title: "Plattform klären", text: "Prüfen, ob die Pedale für PC, Xbox oder PS5 freigegeben sind und wie sie angeschlossen werden." },
        { title: "Fußraum messen", text: "Platz unter dem Schreibtisch für den vollen Pedalweg und die Knie prüfen." },
        { title: "Rutschfest stellen", text: "Auf Teppich oder Matte stellen oder gegen eine Wand bzw. ein Cockpit abstützen." },
        { title: "Sitzabstand anpassen", text: "Stuhl so stellen, dass die Beine bei voll getretenem Pedal noch leicht gebeugt sind." },
        { title: "Kalibrieren", text: "Im Simulator Seitenruder und beide Zehenbremsen einzeln durchtreten und prüfen." },
        { title: "Achsen belegen", text: "Ruder auf die Gier-Achse, linke und rechte Bremse auf getrennte Achsen legen, Auto-Rudder abschalten." },
      ],
    },
  },

  editorial: {
    title: "Gleitschiene, Riemen oder Pendel?",
    intro: "Wofür Ruderpedale gut sind, welche Mechanik zu dir passt und warum die Plattform-Frage auf der Konsole alles entscheidet.",
    sections: [
      {
        id: "beste-ruderpedale",
        h2: "Welche Ruderpedale für den Flugsimulator sind die besten?",
        blocks: [
          { quick: "Für die meisten PC-Piloten sind die [Honeycomb Charlie Rudder Pedals](produkt:1) die beste Wahl: stabil, laut Hersteller mit Hall-Sensoren, und direkt per USB. Günstig und als einzige im Vergleich auch an PS5 und Xbox nutzbar sind die [Thrustmaster TFRP](produkt:2). Wer ein festes Cockpit am PC hat, bekommt mit dem [Thrustmaster TPR](produkt:3) die aufwendigste Mechanik." },
          { first: "Ein Joystick oder Yoke steuert Querruder und Höhenruder. Das Seitenruder – die Gier-Achse – fehlt dabei oft oder liegt als Drehung im Stick. Ruderpedale holen es dorthin, wo es im echten Flugzeug sitzt: unter die Füße. Dazu kommen zwei Zehenbremsen, mit denen du links und rechts getrennt bremst. Am Boden lenkst du so beim Rollen, in der Luft hältst du bei Seitenwind die Nase auf der Bahn." },
          { p: "Die [Charlie Rudder Pedals](produkt:1) gewinnen, weil sie die wichtigsten Eigenschaften am besten verbinden: Laut Hersteller sind Gehäuse aus Aluminium, Hall-Sensoren und eine einstellbare Federspannung verbaut, die Bodenplatte hat laut Händlerangabe Gummiflächen und umdrehbare Spikes für Teppich. Mit 7,3 kg (Herstellerangabe) bleiben sie auch beim kräftigen Bremsen stehen. Der Haken: Auf der Xbox funktionieren sie nur zusammen mit dem Honeycomb Alpha XPC und dem separat verkauften Xbox Hub, eine PS5-Unterstützung gibt es nicht." },
          { p: "Die [TFRP](produkt:2) sind deutlich einfacher gebaut – Gleitschienen, viel Kunststoff, wenig Gewicht. Das englischsprachige Online-Magazin CGMagazine beschreibt sie in seinem Hardware-Review dennoch als gut verarbeitet, für große Füße einstellbar und auch in intensiven Sessions stabil. Ihr eigentlicher Vorteil ist die Plattform: Sie hängen am RJ12-Port eines Thrustmaster-Steuergeräts – beim T.Flight Hotas 4 laut Thrustmaster-Support am Stick (beim Hotas 5 laut Berichten ebenso), beim T.16000M FCS am Schubregler TWCS – und kommen so auf Konsolen, an die andere Pedale gar nicht angeschlossen werden können." },
          { p: "Das [TPR](produkt:3) ist für Simmer gedacht, die sich ein Cockpit gebaut haben oder bauen wollen. Die Pendelmechanik, 16-Bit-Hall-Sensoren auf allen drei Achsen und M6-Gewinde zur Montage (alles Herstellerangaben) heben es klar von Schreibtisch-Pedalen ab. Für Konsolenspieler ist es keine Option." },
          { figure: "scores" },
        ],
      },
      {
        id: "braucht-man-pedale",
        h2: "Braucht man Ruderpedale für den Flugsimulator?",
        blocks: [
          { quick: "Nicht zwingend – zum Einstieg reicht das Twist-Ruder eines Joysticks oder eine Ruderwippe am Schubregler. Pedale lohnen sich, sobald du realistisch rollen, bei Seitenwind landen oder Helikopter fliegen willst." },
          { p: "Viele Flugsticks haben ein **Twist-Ruder**: Du drehst den Griff, um das Seitenruder zu bewegen. Das funktioniert, verkoppelt aber Ruder und Querruder in einer Hand – eine leichte Drehung beim Kurvenflug löst ungewollt Ruder aus. Mit Pedalen trennst du die Achsen sauber, und die Hände bleiben frei für Stick, Schubhebel und Schalter." },
          { h3: "Wann Pedale den größten Unterschied machen" },
          {
            list: [
              "**Rollen am Boden:** Bugrad und Differenzialbremsen lenken das Flugzeug auf dem Taxiway – mit getrennten Zehenbremsen wie im echten Flugzeug.",
              "**Start und Landung bei Seitenwind:** Mit dem Seitenruder hältst du die Längsachse auf der Mittellinie.",
              "**Propellerflugzeuge:** Beim Start brauchen sie spürbar Seitenruder, um geradeaus zu bleiben.",
              "**Helikopter:** Die Pedale steuern den Heckrotor – ohne sie wird Schweben schwierig.",
              "**Kampfjets und Kunstflug:** Präzise koordinierte Kurven und Manöver.",
            ],
          },
          { p: "Wer nur gelegentlich im Reiseflug über Landschaften gleitet, kommt mit Twist-Ruder oder der Ruder-Assistenz des Simulators gut aus. Wer dagegen von Platz zu Platz fliegt und vom Anlassen bis zum Abstellen alles selbst macht, wird Pedale schnell nicht mehr missen wollen." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf von Ruderpedalen achten?",
        blocks: [
          { quick: "Entscheidend sind die Plattform (PC, Xbox oder PS5 und wie die Pedale angeschlossen werden), die Mechanik mit ihren Sensoren, zwei getrennte Zehenbremsen und der Platz unter deinem Schreibtisch." },
          {
            table: {
              caption: "Bauarten von Ruderpedalen im Vergleich",
              head: ["Bauart", "Beispiel", "Stärken", "Schwächen"],
              rows: [
                ["**Gleitschiene**", "Thrustmaster TFRP, Logitech G Saitek Pro Flight", "Kompakt, leicht, günstig", "Weniger realistischer Bewegungsablauf, oft viel Kunststoff"],
                ["**Riemenantrieb**", "Honeycomb Charlie", "Stabil, ruhiger Lauf, für den Schreibtisch geeignet", "Schwer und groß"],
                ["**Pendel**", "Thrustmaster TPR", "Bewegung wie an einer echten Ruderanlenkung", "Teuer, hoch, braucht viel Fußraum"],
              ],
            },
          },
          { h3: "Sensoren: Potentiometer oder Hall-Effekt" },
          { p: "Klassische Potentiometer messen die Position über einen Schleifkontakt, der mit der Zeit verschleißen kann. **Hall-Sensoren** arbeiten kontaktlos mit einem Magnetfeld. Die Honeycomb Charlie und das TPR nutzen laut Hersteller Hall-Sensoren, beim TPR mit 16 Bit Auflösung auf allen drei Achsen. Für ruhige, präzise Ruderbewegungen bei Seitenwind ist das ein spürbarer Vorteil." },
          { h3: "Zehenbremsen und Einstellbarkeit" },
          { p: "Alle Pedale in dieser Übersicht haben zwei getrennte Bremsachsen. Wichtig ist, dass du sie im Simulator auch getrennt belegst – nur dann lenkst du beim Rollen mit der Bremse. Ein verstellbarer Pedalwinkel (Charlie, TPR) und Fersenauflagen (TFRP, abnehmbar) helfen, die Pedale an Sitzhöhe und Fußgröße anzupassen. Die Federkraft lässt sich laut Hersteller bei Charlie und TPR einstellen." },
          { h3: "Platz und Standfestigkeit" },
          { p: "Miss den Fußraum, bevor du bestellst. Die Charlie misst laut Hersteller 498 × 457 mm bei 210 mm Höhe, das TPR ist ähnlich groß und noch höher (die Herstellerangaben zu den Maßen sind widersprüchlich). Leichte Pedale wie die TFRP passen fast überall, rutschen auf glattem Boden aber leichter weg. Schwere Pedale bleiben stehen, wollen aber dauerhaft ihren Platz." },
          { list: ["Plattform und Anschlussweg prüfen", "Hall-Sensoren, wenn das Budget reicht", "Zwei getrennte Zehenbremsen", "Pedalwinkel und Federkraft einstellbar", "Fußraum und Bodenbelag berücksichtigen"] },
        ],
      },
      {
        id: "plattformen",
        h2: "Welche Ruderpedale funktionieren mit PS5, Xbox und PC?",
        blocks: [
          { quick: "Am PC laufen alle Pedale dieser Seite. Auf PS5 funktionieren nur die [Thrustmaster TFRP](produkt:2) – angeschlossen am T.Flight Hotas 5, Hotas 4 oder TCA Sky Yoke und nur in Spielen mit Flight-Stick-Modus. Auf der Xbox laufen Pedale fast immer nur über einen Stick, ein Yoke oder einen Hub desselben Herstellers." },
          { p: "Auf Konsolen werden Ruderpedale in der Regel nicht direkt erkannt. Die Hersteller lösen das über den Joystick oder das Yoke: Die Pedale hängen dort an einem eigenen Anschluss, und Konsole und Spiel sehen nur ein einziges Gerät. Daraus folgt: Wer auf der Konsole fliegt, kauft Pedale immer passend zum Stick." },
          {
            table: {
              caption: "Plattformen laut Hersteller",
              head: ["Pedale", "PC", "Xbox", "PS5"],
              rows: [
                ["**Honeycomb Charlie**", "direkt per USB-C (auch Mac)", "nur mit Alpha XPC + Honeycomb Xbox Hub", "nein"],
                ["**Thrustmaster TFRP**", "per beiliegendem T.RJ12-USB-Adapter", "über T.Flight Hotas One", "über T.Flight Hotas 5/4 oder TCA Sky Yoke"],
                ["**Thrustmaster TPR**", "ja", "nein", "nein"],
                ["**Turtle Beach VelocityOne Rudder**", "direkt per USB-C", "nur mit VelocityOne Flight", "nicht vorgesehen"],
                ["**Logitech G Saitek Pro Flight**", "direkt per USB", "nein", "nein"],
              ],
            },
          },
          { callout: { title: "PS5: was du wissen musst", text: "Laut Thrustmaster funktioniert der T.Flight Hotas 5 auf PS5 und PS4 nur in Spielen mit „Flight Stick“-Modus; damit gilt das auch für die daran angeschlossenen TFRP-Pedale. Der USB-Adapter für den direkten PC-Anschluss liegt nur den TFRP bei. Cloud- und Streaming-Spiele unterstützen die Thrustmaster-Eingabegeräte in der Regel nicht – das Spiel sollte lokal installiert sein." } },
        ],
      },
      {
        id: "zielgruppen",
        h2: "Welche Ruderpedale passen zu wem?",
        blocks: [
          { quick: "Zivilflieger am PC greifen zur Honeycomb Charlie, Einsteiger und PS5-Spieler zur TFRP, Cockpit-Bauer zum TPR. Xbox-Spieler wählen die Pedale passend zu ihrem Stick oder Yoke." },
          {
            cards: [
              { title: "Zivilflug am PC", text: "MSFS 2024 oder X-Plane, Pedale bleiben am Schreibtisch: Honeycomb Charlie.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Einsteiger & PS5", text: "Günstig, kompakt, auf der PS5 am T.Flight Hotas 5: Thrustmaster TFRP.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Eigenes Cockpit", text: "Pendelmechanik und Gewinde für die feste Montage: Thrustmaster TPR.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Xbox", text: "Komplettset mit Stick oder Pedale passend zum Turtle-Beach-System.", link: { href: "#top5-plattform-einsatz", label: "Zur Top 5" } },
              { title: "Helikopter", text: "Pedale mit wählbarer Nocke ohne Mittenrastung: VIRPIL R1-FALCON (Händlerangabe).", link: { href: "#top5-plattform-einsatz", label: "Zur Top 5" } },
              { title: "Racing und Fliegen", text: "Für Rennspiele braucht es eigene Gas-, Brems- und Kupplungspedale – die gehören ins Racing-Cockpit.", link: { href: "/sim-racing-cockpits/", label: "Sim-Racing-Cockpits" } },
            ],
          },
          { p: "Ein Hinweis für alle, die noch gar kein Steuergerät haben: Ein Set aus Stick, Schubregler und Pedalen ist oft der einfachste Weg, weil alle Teile garantiert zusammenpassen. Am PC bietet das das Thrustmaster T.16000M FCS Flight Pack, auf der Xbox das T.Flight Full Kit X – beide stehen in der Top 5." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-plattform-einsatz",
    h2: "Die 5 besten Ruderpedale und Sets nach Plattform und Einsatz",
    intro: "Jenseits der Top 3: Komplettsets für PC und Xbox, Pedale für das Turtle-Beach-System, kompakte Einsteiger-Pedale und Profi-Pedale für Helikopter. PS5-Spieler finden ihre Lösung auf Platz 2 der Top 3, den TFRP.",
    items: [
      {
        name: "Thrustmaster T.Flight Full Kit X",
        for: "Komplettset für Xbox",
        text: "T.Flight Hotas One mit abnehmbarem Schubregler plus TFRP-Pedale; laut Hersteller kompatibel mit Xbox Series X|S, Xbox One und PC und für den Microsoft Flight Simulator vorkonfiguriert. Auf der Xbox laufen die TFRP ohnehin nur über den Hotas One.",
        asin: "B099XLFW95",
        query: "Thrustmaster T.Flight Full Kit X",
      },
      {
        name: "Turtle Beach VelocityOne Rudder",
        for: "Xbox mit Turtle-Beach-System",
        text: "Laut Hersteller Hall-Sensoren auf allen Achsen, Differenzialbremsen und austauschbare Federn. Am PC direkt per USB-C, auf der Xbox nur zusammen mit dem VelocityOne Flight. Mit dem VelocityOne Flightstick funktionieren die Zehenbremsen im Kompatibilitätsmodus (etwa Star Wars Squadrons, Elite Dangerous, War Thunder) laut Turtle-Beach-Support nicht.",
        asin: "B0B7NTLKF2",
        query: "Turtle Beach VelocityOne Rudder",
      },
      {
        name: "Logitech G Saitek Pro Flight Rudder Pedals",
        for: "Einsteiger am PC, wenig Fußraum",
        text: "Der Klassiker: selbstzentrierend, Differenzial-Zehenbremsen, Spannungsrad für die Dämpfung, USB, abnehmbare Fußstützen. Mit 31 × 40,3 cm und 2,35 kg (Händlerangabe) kompakt genug für enge Schreibtische. Nur PC.",
        asin: "B01MQ0N57Q",
        query: "Logitech G Saitek Pro Flight Rudder Pedals",
      },
      {
        name: "VIRPIL Controls R1-FALCON Rudderpedal",
        for: "Helikopter und Kampfjets am PC",
        text: "Vollmetall, Aluminiumpedale, kontaktlose Sensoren und drei Zentrier-Nocken, darunter eine ohne Mittenrastung, wie Helikopterpiloten sie für die Heckrotorsteuerung bevorzugen (Händlerangabe). Pedalabstand, -winkel und Federspannung einstellbar. Neu auf amazon.de und bislang mit nur sehr wenigen Bewertungen.",
        asin: "B0FJSCV24G",
        query: "VIRPIL Controls R1-FALCON Rudder Pedals",
      },
      {
        name: "Thrustmaster T.16000M FCS Flight Pack",
        for: "Komplettset für PC",
        text: "Stick T.16000M FCS, Schubregler TWCS und TFRP-Pedale in einem Paket. Laut Hersteller Hall-Sensoren mit 16 Bit auf Nick- und Rollachse, beidhändig umbaubarer Stick, Pedale direkt am RJ12-Port des Schubreglers; nur PC (Windows), programmierbar mit T.A.R.G.E.T.",
        asin: "B01HZ2APKU",
        query: "Thrustmaster T16000M FCS Flight Pack",
      },
    ],
  },

  guide: {
    sections: [
      {
        id: "einrichten",
        h2: "Ruderpedale einrichten: Stand, Sitzposition und Achsen",
        blocks: [
          { quick: "Pedale rutschfest auf Teppich oder Matte stellen oder abstützen, den Stuhl so weit zurücksetzen, dass die Beine bei voll getretenem Pedal leicht gebeugt bleiben, und im Simulator Ruder und beide Bremsen auf getrennte Achsen legen." },
          { figure: "steps" },
          { p: "Der häufigste Ärger mit Ruderpedalen ist nicht die Technik, sondern das Wegrutschen. Bürostühle rollen beim kräftigen Bremsen zurück, leichte Pedale wandern nach vorn. Hilfreich sind ein Teppich oder eine Gummimatte, ein Anschlag an Wand oder Schreibtischbein oder – dauerhaft am besten – die Montage auf einem Cockpit-Rahmen. Die Charlie bringt laut Händlerangabe umdrehbare Spikes für Teppich mit, das TPR hat Gewinde für die feste Montage." },
          { p: "Im Simulator kalibrierst du zuerst alle drei Achsen und prüfst, ob die Mitte sauber erkannt wird. Dann belegst du das Seitenruder auf die Gier-Achse und die beiden Zehenbremsen getrennt auf linke und rechte Bremse. Hast du vorher ohne Pedale geflogen, schalte die automatische Ruderhilfe (Auto-Rudder) aus, sonst arbeiten Simulator und Füße gegeneinander. Ist zusätzlich ein Twist-Ruder am Stick belegt, nimm diese Belegung heraus." },
          { callout: { title: "Kauf über Marketplace und Global Store", text: "Die Honeycomb Charlie wird auf amazon.de laut Recherche über einen Marketplace-Händler verkauft, das TPR je nach Angebot auch über den Amazon Global Store – dort kann laut Listing die Herstellergarantie eingeschränkt sein. Vor dem Kauf Verkäufer und Garantiebedingungen prüfen." } },
          { callout: { title: "Gesundheit", warn: true, text: "Lange Sessions mit Pausen unterbrechen, Sitz- und Pedalposition so wählen, dass Knie und Hüfte nicht dauerhaft überstreckt sind. Bei Beschwerden in Knien oder Rücken ärztlichen Rat einholen – unsere Hinweise ersetzen keine Beratung. Rückrufe zu den hier genannten Ruderpedalen haben wir bei unserer Recherche nicht gefunden." } },
          { facts: [{ value: "16 Bit", label: "Hall-Sensoren TPR (Herstellerangabe)" }, { value: "7,3 kg", label: "Honeycomb Charlie (Herstellerangabe)" }, { value: "35–75°", label: "Pedalwinkel TPR (Herstellerangabe)" }] },
        ],
      },
      {
        id: "alternativen",
        h2: "Welche Alternativen gibt es zu den Top 3?",
        blocks: [
          { quick: "Günstiger geht es mit dem Twist-Ruder im Joystick, kompakter mit den Logitech G Saitek Pro Flight, hochwertiger mit Herstellern aus dem Direktvertrieb. Rennspiel-Pedale sind kein Ersatz." },
          { p: "**Twist-Ruder und Ruderwippe:** Fast jeder Flugstick hat eine der beiden Lösungen. Für den Anfang reicht das, und viele Simulatoren bieten eine Ruder-Assistenz. Erst wenn du merkst, dass dich die gekoppelte Hand-Steuerung bremst, lohnt der Aufstieg auf Pedale." },
          { p: "**Rennspiel-Pedale:** Gas, Bremse und Kupplung eines Lenkrad-Sets sind keine Ruderpedale. Das Seitenruder braucht zwei gegenläufig gekoppelte Pedale mit Mittelstellung, Rennpedale arbeiten einzeln. Wer beides will, kauft getrennt – die Racing-Seite findest du unter [Sim-Racing-Cockpits](/sim-racing-cockpits/)." },
          { p: "**Profi-Pedale aus dem Direktvertrieb:** Die MFG Crosswind V3 führt der englischsprachige Ratgeber simulatorhardware.com als Spitzenmodell. Sie wird über den Hersteller vertrieben und ist weder auf amazon.de noch bei unseren Partnerhändlern erhältlich – deshalb verlinken wir sie nicht. Bei Amazon ist das [TPR](produkt:3) die nächstliegende Alternative." },
          { p: "**Mit VR fliegen:** Gerade in der VR-Brille sind Pedale praktisch, weil du keine Taste suchen musst. Welche Brillen sich für Simulationen eignen, steht im Ratgeber [VR-Gaming](/vr-gaming/). Für Stick, Schubregler und Pedale am Schreibtisch braucht es außerdem eine stabile Tischplatte – Ideen dazu unter [Gaming-Tische](/gaming-tische/)." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Ruderpedale für den Flugsimulator sind die besten?", a: "Unsere beste Gesamtwahl sind die Honeycomb Aeronautical Charlie Rudder Pedals für PC und Mac. Das beste Preis-Leistungs-Verhältnis und die einzige PS5-Lösung im Vergleich bieten die Thrustmaster TFRP, Premium-Wahl für den PC ist das Thrustmaster TPR mit Pendelmechanik." },
    { q: "Braucht man Ruderpedale für den Flugsimulator?", a: "Nein, zum Einstieg reicht das Twist-Ruder eines Joysticks. Pedale lohnen sich für realistisches Rollen am Boden, Landungen bei Seitenwind, Propellerflugzeuge und vor allem Helikopter." },
    { q: "Wofür sind die Zehenbremsen an Ruderpedalen?", a: "Mit den Zehenbremsen bremst du linkes und rechtes Hauptfahrwerk getrennt. So lenkst du das Flugzeug beim Rollen und Wenden am Boden. Dafür müssen beide Bremsen im Simulator auf getrennte Achsen gelegt sein." },
    { q: "Welche Ruderpedale funktionieren mit der PS5?", a: "Von den Pedalen auf dieser Seite nur die Thrustmaster TFRP. Laut Thrustmaster werden sie am RJ12-Port des T.Flight Hotas 5, des T.Flight Hotas 4 oder des TCA Sky Yoke angeschlossen und funktionieren auf der PS5 nur in Spielen mit Flight-Stick-Modus." },
    { q: "Welche Ruderpedale funktionieren mit der Xbox?", a: "Nur Pedale, die über einen Stick, ein Yoke oder einen Hub desselben Herstellers angeschlossen werden: TFRP über den T.Flight Hotas One (auch als Set T.Flight Full Kit X), Honeycomb Charlie mit Alpha XPC und Xbox Hub, Turtle Beach VelocityOne Rudder mit dem VelocityOne Flight." },
    { q: "Kann man ohne Ruderpedale im Microsoft Flight Simulator landen?", a: "Ja. Ohne Pedale steuerst du das Seitenruder über Twist-Ruder oder Wippe, oder du nutzt die automatische Ruderhilfe des Simulators. Bei Seitenwind und beim Rollen sind Pedale aber deutlich genauer." },
    { q: "Kann man Ruderpedale auch für Rennspiele nutzen?", a: "Nur eingeschränkt. Ruderpedale sind gegenläufig gekoppelt und haben eine Mittelstellung, Rennspiele erwarten einzelne Gas-, Brems- und Kupplungspedale. Für Sim-Racing empfehlen wir eigene Pedale im Lenkrad-Set." },
    { q: "Wie verhindert man, dass Ruderpedale auf dem Boden rutschen?", a: "Am besten mit Teppich oder Gummimatte, einem Anschlag an Wand oder Schreibtisch oder durch Montage auf einem Cockpit-Rahmen. Schwere Pedale wie die Honeycomb Charlie bringen laut Händlerangabe Gummiflächen und Teppich-Spikes mit." },
    { q: "Sind Ruderpedale für Helikopter wichtig?", a: "Ja, sehr. Im Helikopter steuern die Pedale den Heckrotor und damit die Ausrichtung beim Schweben. Ideal sind Pedale ohne Mittenrastung, wie sie das VIRPIL R1-FALCON mit einer passenden Nocke laut Händlerangabe bietet." },
  ],

  sources: [
    { label: "Honeycomb – Charlie Rudder Pedals (Hersteller)", url: "https://flyhoneycomb.com/products/charlie-rudder-pedals" },
    { label: "Honeycomb – Xbox Hub (Hersteller)", url: "https://flyhoneycomb.com/products/xbox-hub" },
    { label: "Thrustmaster Support – TFRP an PC und Konsole anschließen", url: "https://support.thrustmaster.com/en/kb/1776-en/" },
    { label: "Thrustmaster – T.Flight Hotas 5 Handbuch (PDF)", url: "https://ts.thrustmaster.com/download/accessories/Manuals/TFH5/T.Flight_Hotas_5_user_manual.pdf" },
    { label: "Thrustmaster Support – T.Flight Hotas One", url: "https://support.thrustmaster.com/en/product/t-flight-hotas-one-en/" },
    { label: "Thrustmaster eShop – TPR Pendular Rudder", url: "https://eshop.thrustmaster.com/en_us/tpr-thrustmaster-pendular-rudder.html" },
    { label: "Thrustmaster – TPR Handbuch (PDF)", url: "https://ts.thrustmaster.com/download/accessories/Manuals/TPR/TPR_Rudder_User_Manual.pdf" },
    { label: "Thrustmaster – T.16000M FCS HOTAS", url: "https://www.thrustmaster.com/products/t16000m-fcs-hotas" },
    { label: "Thrustmaster – T.Flight Full Kit X", url: "https://shop.thrustmaster.com/en_gb/t-flight-full-kit-x.html" },
    { label: "Turtle Beach – VelocityOne Rudder (Hersteller)", url: "https://www.turtlebeach.com/products/velocity-one-rudder" },
    { label: "Turtle Beach Support – Flightstick mit VelocityOne Rudder", url: "https://support.turtlebeach.com/s/article/VelocityOne-Flightstick-Compatibility-With-VelocityOne-Rudder?language=en_US" },
    { label: "CGMagazine – Thrustmaster T-Flight Rudder Pedals Review (englisch)", url: "https://www.cgmagonline.com/review/hardware/thrustmaster-t-flight-rudder-pedals-hardware-review/" },
    { label: "simulatorhardware.com – Rudder Pedals für MSFS (englisch)", url: "https://www.simulatorhardware.com/msfs/rudder-pedals/" },
  ],

  related: [
    { slug: "bester-flugsimulator-joystick", text: "Flugsimulator-Joysticks." },
    { slug: "bestes-flugsimulator-yoke", text: "Flugsimulator-Yokes." },
    { slug: "bestes-flugsimulator-cockpit", text: "Flugsimulator-Cockpits." },
    { slug: "sim-racing-cockpits", text: "Sim-Racing-Cockpits." },
    { slug: "vr-gaming", text: "VR-Gaming." },
    { slug: "gaming-tische", text: "Gaming-Tische." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
