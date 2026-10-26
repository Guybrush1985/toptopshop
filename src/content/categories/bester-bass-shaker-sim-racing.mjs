// Kategorie: Bass-Shaker für Sim-Racing
// Aufbau siehe src/content/README.md (Content-Modell).
// Recherche: research/sim-racing/bester-bass-shaker-sim-racing/ (produkte.json, bilder.json)

export default {
  slug: "bester-bass-shaker-sim-racing",
  area: "gaming-room",
  navLabel: "Bass-Shaker",
  published: "2026-10-24",
  updated: "2026-10-26",

  metaTitle: "Die 3 besten Bass-Shaker für Sim-Racing 2026",
  metaDescription:
    "ButtKicker, Dayton und Reckhorn: Die 3 besten Bass-Shaker für Sim-Racing 2026 – Vibration für Sitz und Pedale, mit Tipps zu Verstärker, SimHub und Nachbarn.",

  eyebrow: "Gaming-Room · Sim-Racing",
  h1: "Die 3 besten Bass-Shaker für Sim-Racing 2026",
  lead:
    "Motor, Schaltschläge, ABS und Curbs spüren statt nur hören: Ein Bass-Shaker überträgt tiefe Frequenzen direkt in Sitz oder Pedalplatte. Wir zeigen ein Komplett-Kit und zwei Einzel-Shaker – und sagen klar, wo ein Verstärker dazugehört.",
  answer:
    "Unsere beste Gesamtwahl ist das Komplett-Kit [**ButtKicker Gamer Plus**](produkt:1): Shaker, 90-W-Verstärker und Klemme für Rohre bis 45 mm in einem Paket, am PC mit Telemetrie-Effekten. Das beste Preis-Leistungs-Verhältnis bietet der flache [**Dayton Audio BST-2 35 Watt Tactile Bass Shaker**](produkt:2) für Pedalplatte oder Sitz; die beste Wahl für ein festes Rig ist der kräftige [**Reckhorn BS-200 Bassshaker**](produkt:3). Platz 2 und 3 brauchen einen eigenen Verstärker.",

  priceTiers: {
    1: { symbol: "€", label: "unter 100 € (ohne Verstärker)" },
    2: { symbol: "€€", label: "100–250 €" },
    3: { symbol: "€€€", label: "über 250 €" },
  },

  top3Title: "Unsere Top 3 Bass-Shaker für Sim-Racing",
  top3Intro:
    "Wir ordnen nach Bauform: ein Komplett-Kit mit Verstärker für den Stuhl oder ein kleines Rig, ein günstiger Einzel-Shaker für Pedale und Sitzplatte und ein kräftiger Einzel-Shaker für die Sitzschale im Cockpit. Nur Platz 1 funktioniert ohne Zukauf – für Platz 2 und 3 brauchst du einen separaten Verstärker.",
  comparisonTitle: "Die 3 besten Bass-Shaker im Vergleich",

  criteria: [
    { key: "wirkung", label: "Wirkung & Leistung", weight: 0.3, description: "Spürbarkeit an Sitz bzw. Pedalen: Belastbarkeit (Watt), Frequenzbereich, bewegte Masse; reicht ein Gerät für Sitzschale und Rig oder nur für Pedalplatte bzw. Stuhl." },
    { key: "lieferumfang", label: "Lieferumfang & Montage", weight: 0.25, description: "Komplett-Kit mit Verstärker und Klemme oder Einzel-Wandler; mitgeliefertes Montagematerial, Montageort und Aufwand bis zum ersten Rütteln." },
    { key: "ansteuerung", label: "Software & Ansteuerung", weight: 0.2, description: "Telemetrie-Effekte per HaptiConnect oder SimHub am PC oder reines Audio-Signal; Mehrkanal-Fähigkeit; Weg an PS5 und Xbox (nur Audio)." },
    { key: "preisleistung", label: "Preis-Leistung", weight: 0.25, description: "Gegenwert in der Preisklasse – inklusive des Verstärkers, den man bei Einzel-Shakern zusätzlich kaufen muss." },
  ],

  method:
    "Wir testen die Bass-Shaker nicht selbst. Grundlage sind Herstellerangaben von ButtKicker, Dayton Audio, Reckhorn, AuraSound und Sinuslive (Leistung, Impedanz, Frequenzbereich, Lieferumfang, Einstell-Empfehlungen), Händlerangaben von amazon.de, Aerosoft, Thomann, Parts Express und audiophonics, die Bass-Shaker-Anleitung des SimHub-Wikis sowie Kundenberichte, die wir als solche kennzeichnen. Die einzige Fach-Review, die wir gefunden haben, ist die englischsprachige Besprechung des ButtKicker Gamer Plus auf traxion.gg (ca. 2022), die wir nur aus Suchauszügen kennen. Tests von Stiftung Warentest, PCGH, GameStar oder ComputerBase zu Bass-Shakern haben wir nicht gefunden. Auf amazon.de ist derzeit nur ein Komplett-Kit mit Verstärker sicher lieferbar, der ButtKicker Gamer Plus. Die ursprünglich für das Rig vorgesehenen Modelle Dayton Audio BST-300EX und ButtKicker Gamer Pro sowie die Reckhorn-Sets aus Verstärker und mehreren Shakern waren bei unserer Recherche nicht verfügbar; deshalb steht auf Platz 3 der Einzel-Shaker Reckhorn BS-200, und den passenden Verstärker (Reckhorn A-410) nennen wir in der Top 5. Bei der Aktualisierung am 26.10.2026 waren der Verstärker A-409 und der Dayton BST-1 auf amazon.de nicht mehr lieferbar; wir haben sie durch den Nachfolger A-410 und den AuraSound AST-2B-4 ersetzt. Jedes Produkt wird in vier gewichteten Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert. Platz 2 und 3 sind nach Rolle sortiert, nicht nach Note. Verfügbarkeiten können sich schnell ändern. Keine Rückrufe oder Safety-Gate-Meldungen zu den empfohlenen Produkten gefunden (Stand 26.10.2026).",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl (Komplett-Kit)",
      name: "ButtKicker Gamer Plus",
      brand: "ButtKicker",
      variant: "BK-GR-PLUS – Shaker mit Universal-Klemme und 90-W-Verstärker BKA-PLUS mit Fernbedienung",
      visual: { kind: "bassshaker", tone: "forest" },
      priceTier: 3,
      ratings: { wirkung: 8.0, lieferumfang: 9.5, ansteuerung: 8.5, preisleistung: 6.5 },
      bestFor: "Vibration am Gaming-Stuhl oder kleinen bis mittleren Rig ohne Bastelei, Telemetrie-Effekte am PC",
      verdict:
        "Das einzige Komplett-Kit, das wir auf amazon.de sicher lieferbar gefunden haben: Shaker, Verstärker, Klemme und Kabel aus einer Hand, dazu die Software HaptiConnect, die Effekte aus Spiel-Telemetrie erzeugt. Teuer und mit nur einem Shaker – Sitz und Pedale lassen sich nicht getrennt ansteuern.",
      features: [
        "Verstärker BKA-PLUS mit 90 W RMS an 2 Ohm, 10–300 Hz, Netzteil 100–240 V (Herstellerangabe)",
        "Shaker mit 5–200 Hz, Belastbarkeit 75 W min. / 250 W max., bewegte Masse ca. 170 g (Herstellerangabe)",
        "Universal-Klemme für Rohre bis 45 mm Durchmesser (Händlerangabe Aerosoft)",
        "HaptiConnect nutzt Telemetrie oder Audio; Standard-Version laut Hersteller nach Registrierung kostenlos",
      ],
      pros: [
        "Komplett-Kit: Shaker, Verstärker, Klemme und Kabel",
        "Klemme passt an Stuhl- und Rig-Rohre bis 45 mm – kein Cockpit nötig",
        "Telemetrie-Effekte mit HaptiConnect, Verstärker per USB am PC",
        "Netzteil für 100–240 V",
      ],
      cons: [
        "Teuerste Lösung im Vergleich",
        "Software und Einrichtung laut Review und Nutzerberichten teils hakelig",
        "Nur ein Shaker – Pedale werden nicht separat angesteuert",
        "An PS5/Xbox nur über Audio, HDMI- oder Optik-Extraktor separat kaufen",
      ],
      specs: {
        bauform: "Komplett-Kit: Shaker mit Klemme + Verstärker",
        verstaerker: "enthalten (90 W RMS an 2 Ω, Fernbedienung)",
        leistung: "75 W min. / 250 W max. (Shaker, Herstellerangabe)",
        frequenz: "5–200 Hz (Herstellerangabe)",
        montage: "Klemme für Rohre bis 45 mm (Stuhl, Rig-Rohr)",
        ansteuerung: "Telemetrie per HaptiConnect oder SimHub (PC) oder Audio",
        konsole: "nur Audio über HDMI-/Optik-Extraktor (nicht enthalten), kein Telemetrie-Feedback",
      },
      asin: "B09XPB7THZ",
      query: "ButtKicker Gamer Plus",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Dayton Audio BST-2 35 Watt Tactile Bass Shaker",
      brand: "Dayton Audio",
      variant: "BST-2, 35 W RMS, 4 Ohm – Einzel-Shaker ohne Verstärker",
      visual: { kind: "bassshaker", tone: "green" },
      priceTier: 1,
      ratings: { wirkung: 6.5, lieferumfang: 5.0, ansteuerung: 7.5, preisleistung: 9.0 },
      bestFor: "Pedalplatte oder Sitz eines Rigs günstig nachrüsten, auch als zweiter Shaker für die Pedale",
      verdict:
        "Ein flacher Marken-Shaker zum Verschrauben, der sich besonders für die Pedalplatte eignet und in SimHub-Mehrkanal-Setups oft als zweiter Kanal neben dem Sitz dient. Günstig – aber ohne Verstärker, und mit 35 W unter einer schweren Sitzschale eher dezent.",
      features: [
        "35 W RMS, 4 Ohm, 10–80 Hz, Resonanz 30 Hz, Aluminiumgehäuse, Ø 130,8 × 54,9 mm, 1,18 kg (Herstellerdaten laut Händler-Datenblatt)",
        "Dayton empfiehlt einen Tiefpass von 80 Hz oder weniger (Herstellerangabe laut Händler)",
        "Vier Befestigungslöcher, Schaumstoff-Dichtung gegen Klappern, Kabel und Montagematerial (Händlerangabe)",
        "Kein Verstärker im Lieferumfang – 4-Ohm-fähiger Verstärker nötig",
      ],
      pros: [
        "Günstiger Marken-Shaker mit vielen guten Bewertungen auf amazon.de",
        "Flach genug für Pedalplatte und unter der Sitzplatte",
        "Montagematerial und Anti-Klapper-Dichtung dabei",
        "Gut für Mehrkanal-Setups mit SimHub (Sitz + Pedale)",
      ],
      cons: [
        "Kein Verstärker im Lieferumfang – Zusatzkosten und Kabel",
        "35 W: am schweren Rig-Sitz eher dezent",
        "Keine Klemme für Gaming-Stühle",
        "Telemetrie nur am PC mit SimHub und eigenem Audio-Ausgang",
      ],
      specs: {
        bauform: "Einzel-Shaker zum Verschrauben",
        verstaerker: "nicht enthalten – Verstärker für 4 Ω nötig",
        leistung: "35 W RMS, 4 Ω (Herstellerangabe)",
        frequenz: "10–80 Hz (Herstellerangabe)",
        montage: "4 Schraublöcher: Pedalplatte, Sitz oder Sitzplatte",
        ansteuerung: "Audio oder SimHub-Telemetrie (PC)",
        konsole: "nur Audio über den Verstärker, kein Telemetrie-Feedback",
      },
      asin: "B08NN5V62G",
      query: "Dayton Audio BST-2 35 Watt Tactile Bass Shaker",
    },
    {
      rank: 3,
      label: "Beste Wahl fürs Rig",
      name: "Reckhorn BS-200 Bassshaker",
      brand: "Reckhorn",
      variant: "BS-200, max. 200 W, 4 Ohm, 75-mm-Schwingspule – Einzel-Shaker ohne Verstärker",
      visual: { kind: "bassshaker", tone: "mint" },
      priceTier: 1,
      ratings: { wirkung: 8.5, lieferumfang: 5.0, ansteuerung: 7.0, preisleistung: 8.5 },
      bestFor: "Festes Cockpit mit Sitzschale, kräftige Vibration unter dem Sitz – einzeln oder paarweise am Verstärker",
      verdict:
        "Deutlich kräftiger als kleine Shaker und trotzdem günstig: Der BS-200 wird unter Sitzschale oder Sitzplatte geschraubt und passt damit zu einem festen Rig. Ohne passenden Verstärker läuft er nicht, er wird warm und erzeugt viel Körperschall – Entkopplung zum Boden gehört dazu.",
      features: [
        "Max. 200 W, 4 Ohm, Resonanzfrequenz ca. 35 Hz, 75-mm-Schwingspule bis 250 °C, Aluminiumgehäuse (Herstellerangabe)",
        "Tiefpass laut Reckhorn 100–150 Hz für Spiele und Autorennen, 50–80 Hz für Filme",
        "Braucht Verstärker oder aktives Subwoofer-Modul; Reckhorn empfiehlt A-409 (inzwischen Nachfolger A-410), A-800 oder A-803i (bis 6 Shaker)",
        "Montage auf Holz oder Metall, hitzeempfindliche Materialien fernhalten, Belüftung frei lassen (Herstellerangabe)",
      ],
      pros: [
        "Kräftig genug für Sitzschale und Rig-Rahmen",
        "Konkrete Einstell-Empfehlungen des Herstellers für Rennspiele",
        "Günstig, viele gute Bewertungen auf amazon.de",
        "Mehrere Shaker an einem Reckhorn-Verstärker kombinierbar",
      ],
      cons: [
        "Verstärker nötig (z. B. Reckhorn A-410, Nachfolger des empfohlenen A-409, kostet extra)",
        "Keine Klemme – nur zum Verschrauben",
        "Wird warm: hitzefeste Montagefläche und Belüftung beachten",
        "Viel Körperschall – Entkopplung zum Boden einplanen",
      ],
      specs: {
        bauform: "Einzel-Shaker zum Verschrauben",
        verstaerker: "nicht enthalten – z. B. Reckhorn A-410 (Nachfolger des A-409) oder A-803i",
        leistung: "200 W max., 4 Ω (Herstellerangabe)",
        frequenz: "Resonanz ca. 35 Hz (Herstellerangabe)",
        montage: "verschraubt unter Sitzschale oder Sitzplatte (Holz/Metall)",
        ansteuerung: "Audio oder SimHub-Telemetrie (PC)",
        konsole: "nur Audio über den Verstärker, kein Telemetrie-Feedback",
      },
      asin: "B00AMH17GC",
      query: "Reckhorn BS-200 Bassshaker",
    },
  ],

  comparison: [
    { key: "bauform", label: "Bauform" },
    { key: "verstaerker", label: "Verstärker" },
    { key: "leistung", label: "Leistung" },
    { key: "frequenz", label: "Frequenz" },
    { key: "montage", label: "Montage" },
    { key: "ansteuerung", label: "Ansteuerung" },
    { key: "konsole", label: "PS5 / Xbox" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-bass-shaker-sim-racing-2026-bewertung.svg",
      title: "Die 3 besten Bass-Shaker für Sim-Racing 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Bass-Shaker in den Kriterien Wirkung & Leistung, Lieferumfang & Montage, Software & Ansteuerung und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Das Komplett-Kit punktet beim Lieferumfang, die Einzel-Shaker beim Preis – den Verstärker muss man dort extra kaufen.",
    },
    steps: {
      kind: "steps",
      file: "bass-shaker-einbauen.svg",
      title: "Bass-Shaker einbauen",
      subtitle: "Vibrationen spüren statt nur hören",
      alt: "Infografik: Bass-Shaker einbauen – Einsatzort wählen, Kit oder Einzelteile, Montieren, Verstärker anschließen, Ansteuerung einrichten, Feinjustieren",
      caption: "Ein Bass-Shaker wirkt am besten fest verschraubt am Sitz oder an der Pedalplatte – und über Telemetrie statt nur über Ton.",
      steps: [
        { title: "Einsatzort wählen", text: "Bürostuhl, Cockpit-Sitz oder Pedalplatte – davon hängen Klemme, Schraubbild und Anzahl ab." },
        { title: "Kit oder Einzelteile", text: "Komplett-Kit mit Verstärker oder einzelne Shaker – dann auf genug Verstärkerkanäle achten." },
        { title: "Montieren", text: "Shaker fest an Stuhlrohr, Sitzschiene oder unter die Platte schrauben, damit die Vibration übertragen wird." },
        { title: "Verstärker anschließen", text: "Shaker mit dem Verstärker verkabeln und diesen an Audio-Ausgang oder zweite Soundkarte hängen." },
        { title: "Ansteuerung einrichten", text: "Per Spielton oder gezielter über Telemetrie-Software wie SimHub Effekte für Motor, Schaltung und Curbs zuweisen." },
        { title: "Feinjustieren", text: "Pegel langsam erhöhen und den Boden entkoppeln, damit Körperschall Nachbarn nicht stört." },
      ],
    },
  },

  editorial: {
    title: "Komplett-Kit, Einzel-Shaker oder Mehrkanal?",
    intro:
      "Was ein Bass-Shaker im Rennsimulator bringt, warum der Verstärker die eigentliche Kaufentscheidung ist und welcher Shaker an Stuhl, Sitzschale oder Pedale gehört.",
    sections: [
      {
        id: "bester-bass-shaker",
        h2: "Welcher Bass-Shaker ist der beste für Sim-Racing?",
        blocks: [
          { quick: "Für die meisten ist der [ButtKicker Gamer Plus](produkt:1) die beste Wahl, weil Shaker, Verstärker und Klemme zusammen kommen und er am PC Telemetrie-Effekte ausgibt. Wer ein Rig hat und selbst verkabelt, bekommt mit dem [Dayton Audio BST-2](produkt:2) für die Pedale oder dem kräftigeren [Reckhorn BS-200](produkt:3) für den Sitz mehr Vibration fürs Geld – plus Verstärker." },
          { first: "Ein Bass-Shaker – auf Englisch Tactile Transducer, auf Deutsch Körperschallwandler – ist im Prinzip ein Lautsprecher ohne Membran. Statt Luft bewegt er eine Masse im Gehäuse und überträgt die Schwingung in das, woran er festgeschraubt oder geklemmt ist. Im Rennsimulator heißt das: Du spürst Drehzahl, Schaltvorgänge, Curbs und das Rattern beim Bremsen im Sitz oder in den Pedalen, statt es nur zu hören. Lenkrad und Pedale melden Kräfte, der Shaker liefert das Gefühl für das Auto drumherum." },
          { p: "Der wichtigste Unterschied zwischen unseren drei Empfehlungen ist nicht die Wattzahl, sondern der Lieferumfang. Der [ButtKicker Gamer Plus](produkt:1) ist ein Kit: Der Shaker sitzt an einer Klemme für Rohre bis 45 mm (Händlerangabe Aerosoft), der Verstärker BKA-PLUS liefert laut Hersteller 90 W an 2 Ohm und lässt sich per Funk bedienen. Damit funktioniert er auch am Bürostuhl oder Gaming-Stuhl ohne Cockpit. Laut Hersteller ist er für kleine und mittelgroße Stühle und Rigs gedacht." },
          { figure: "scores" },
          { p: "Der [Dayton Audio BST-2](produkt:2) und der [Reckhorn BS-200](produkt:3) sind Einzel-Shaker zum Verschrauben. Sie kosten einzeln deutlich weniger, laufen aber erst mit einem separaten Verstärker. Der BST-2 ist mit 35 W RMS (Herstellerangabe) eher für die Pedalplatte oder eine leichte Sitzplatte gedacht, der BS-200 mit 200 W maximaler Belastbarkeit und 75-mm-Schwingspule (Herstellerangabe) für die Sitzschale eines festen Cockpits. Reckhorn nennt sogar eigene Tiefpass-Empfehlungen für Rennspiele." },
          { quote: "Beim Bass-Shaker entscheidet zuerst der Verstärker, dann die Wattzahl." },
          { p: "Unabhängige Tests sind rar. Stiftung Warentest und deutsche Gaming-Magazine haben Bass-Shaker nach unserer Recherche nicht verglichen. Das englischsprachige Sim-Racing-Portal traxion.gg hat den Gamer Plus besprochen und laut Suchauszug mehr Immersion festgestellt, aber Software und schwankende Leistung kritisiert („muddled potential“). Unsere Einordnung beruht daher auf Herstellerangaben, Händlerdaten und Kundenberichten." },
        ],
      },
      {
        id: "lohnt-sich",
        h2: "Lohnt sich ein Bass-Shaker für Sim-Racing?",
        blocks: [
          { quick: "Ja, wenn Lenkrad und Pedale schon passen und du mehr Gefühl für das Auto willst: Ein Shaker macht Drehzahl, Schaltschläge und Curbs spürbar. Für die Rundenzeit sind gute Pedale wichtiger – und in einer Mietwohnung muss der Körperschall mitgedacht werden." },
          { p: "Ein Shaker ist ein Komfort- und Immersions-Upgrade, kein Werkzeug für schnellere Runden. Deshalb gehört er in der Ausbau-Reihenfolge meist hinter ein stabiles [Sim-Racing-Cockpit](/sim-racing-cockpits/), ein Lenkrad mit ordentlichem Force Feedback – etwa ein [Direct-Drive-Lenkrad](/bestes-direct-drive-lenkrad/) – und [Pedale](/beste-sim-racing-pedale/), die sich gut dosieren lassen. Wer diese Basis hat, merkt den Unterschied sofort: Die Vibration kündigt das Blockieren der Räder an, Curbs fühlen sich nach Curbs an, und ein Gangwechsel bekommt einen kurzen Schlag in den Sitz." },
          { p: "Alternativen ohne Körperschallwandler gibt es: Haptik-Pads mit Vibrationsmotoren für den Sitz und kleine Rumble-Motoren, die direkt an einzelne Pedale geschraubt werden. Sie sind meist an das Ökosystem eines Herstellers gebunden; auf amazon.de haben wir dazu keine Modelle gefunden, die wir empfehlen könnten. Ein Subwoofer ist keine Alternative – er bringt Luftschall in den Raum, der Shaker die Schwingung in den Körper." },
          { p: "Gleiches gilt außerhalb des Rennspiels: Im [Flugsimulator-Cockpit](/bestes-flugsimulator-cockpit/) machen Shaker Triebwerk, Fahrwerk und Turbulenzen spürbar, im Heimkino-Sessel den Tieftonanteil von Filmen. Reckhorn nennt für Filme einen niedrigeren Tiefpass von 50–80 Hz (Herstellerangabe)." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Bass-Shakers achten?",
        blocks: [
          { quick: "Prüfe zuerst, ob ein Verstärker dabei ist, dann den Montageort (Klemme am Stuhl oder Verschrauben am Rig), die Leistung passend zur Masse von Sitz oder Pedalplatte und die Ansteuerung: Telemetrie am PC oder nur Spielton an der Konsole." },
          {
            table: {
              caption: "Alle empfohlenen Bass-Shaker: Lieferumfang, Montage und Ansteuerung",
              head: ["Produkt", "Verstärker", "Montage", "Ansteuerung"],
              rows: [
                ["**ButtKicker Gamer Plus**", "enthalten (90 W)", "Klemme bis 45 mm, Stuhl oder Rig", "HaptiConnect/SimHub (PC) oder Audio"],
                ["**Dayton Audio BST-2**", "nötig (4 Ω)", "verschraubt, Pedalplatte oder Sitz", "SimHub (PC) oder Audio"],
                ["**Reckhorn BS-200**", "nötig (z. B. Reckhorn A-410)", "verschraubt unter Sitzschale", "SimHub (PC) oder Audio"],
                ["**Dayton Audio TT25-16 (4er-Pack)**", "nötig (Stereo/Mehrkanal)", "verschraubt, Sitz und Pedale", "SimHub mit Mehrkanal-Soundkarte (PC)"],
                ["**ButtKicker Mini LFE**", "nötig (50–250 W, 4 Ω)", "verschraubt am Rahmen", "HaptiConnect/SimHub (PC) oder Audio"],
                ["**AuraSound AST-2B-4 Pro**", "nötig (4 Ω)", "verschraubt unter Sitzschale oder Sessel", "SimHub (PC) oder Audio"],
                ["**Sinuslive bassPUMP III (4 Ω)**", "nötig (4 Ω)", "verschraubt unter Sitz", "SimHub (PC) oder Audio"],
              ],
            },
          },
          { h3: "Verstärker: dabei oder extra?" },
          { p: "Ein Shaker ohne Verstärker bleibt stumm – ein normaler PC-Lautsprecherausgang reicht nicht. Bei Einzel-Shakern brauchst du einen Verstärker, der die Impedanz des Shakers verträgt (BST-2 und BS-200: 4 Ohm), idealerweise mit einstellbarem Tiefpass und Subsonic-Filter. Reckhorn empfiehlt für den BS-200 die eigenen Modelle A-409, A-800 oder A-803i – der A-409 ist inzwischen durch den A-410 ersetzt, der laut Listing in Bedienung und Daten dem A-409 entspricht; Dayton für seine größeren Shaker den SA70 für einen und den SPA250 für zwei bis vier Shaker (Herstellerangaben). Rechne die Kosten dafür in den Preis ein: Erst mit Verstärker ist ein Einzel-Shaker mit dem Komplett-Kit vergleichbar." },
          { h3: "Leistung und Montageort" },
          { p: "Je schwerer die Fläche, desto mehr Leistung braucht der Shaker. Eine Pedalplatte oder ein Bürostuhl lässt sich mit kleineren Shakern beleben; eine Sitzschale mit Fahrer im Stahlrahmen braucht mehr. Klemmen sind praktisch für Stühle und Rig-Rohre, verschraubte Shaker sitzen fester und übertragen die Vibration direkter. Vorher den Rohrdurchmesser bzw. das Schraubbild am Sitz prüfen." },
          { h3: "Ansteuerung: Telemetrie oder Ton" },
          { p: "Am PC kann Software wie HaptiConnect (ButtKicker) oder SimHub (PC, Windows) die Telemetrie des Spiels auswerten und daraus gezielte Effekte erzeugen: Drehzahl, Schaltschlag, ABS, Curbs. Das wirkt präziser als reiner Spielton, bei dem auch Musik oder Explosionen den Sitz zum Beben bringen. Mehrere Shaker – etwa Sitz und Pedale getrennt – brauchen dafür eigene Audio-Ausgänge und Verstärkerkanäle; mehr dazu im Abschnitt [PS5, Xbox und SimHub](#konsole-simhub)." },
          { list: ["Verstärker enthalten oder passend dazu eingeplant", "Impedanz von Shaker und Verstärker passen zusammen", "Klemme oder Schraubbild passt zu Stuhl, Sitzschale oder Pedalplatte", "Leistung passend zur Masse der Fläche", "Telemetrie am PC oder nur Audio an der Konsole", "Netzteil für 230 V – keine reinen 120-V-Altmodelle"] },
        ],
      },
      {
        id: "welcher-shaker-passt",
        h2: "Welcher Bass-Shaker passt zu welchem Setup?",
        blocks: [
          { quick: "Am Gaming- oder Bürostuhl ohne Cockpit nimmst du ein Klemm-Kit wie den ButtKicker Gamer Plus, für die Sitzschale eines festen Rigs einen kräftigen Einzel-Shaker wie den Reckhorn BS-200, für die Pedale einen flachen Dayton BST-2 – und wer Sitz und Pedale getrennt spüren will, baut ein Mehrkanal-Setup mit SimHub." },
          { p: "Der häufigste Einstieg ist der Stuhl, auf dem du ohnehin sitzt. Hier spielt die Klemme des [ButtKicker Gamer Plus](produkt:1) ihre Stärke aus, weil nichts gebohrt oder geschraubt werden muss. Wer schon ein [Cockpit](/sim-racing-cockpits/) hat, schraubt lieber: unter die Sitzschale für Motor und Fahrbahn, an die Pedalplatte für ABS und Blockieren. Wer beides will, kombiniert zwei Shaker an einem Verstärker mit zwei Kanälen." },
          {
            cards: [
              { title: "Gaming- oder Bürostuhl", text: "Klemme ans Rohr, Verstärker dabei: ButtKicker Gamer Plus.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Sitzschale im Cockpit", text: "Kräftiger Einzel-Shaker unter den Sitz: Reckhorn BS-200 plus Verstärker.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Pedalplatte", text: "Flacher Shaker für ABS und Blockieren: Dayton Audio BST-2.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Sitz und Pedale getrennt", text: "Vier Pucks oder zwei Shaker, Mehrkanal-Verstärker und SimHub.", link: { href: "#top5-nach-montageort", label: "Zur Top 5" } },
              { title: "Flugsimulator", text: "Shaker am Rahmen des Flugsim-Cockpits für Triebwerk und Fahrwerk.", link: { href: "/bestes-flugsimulator-cockpit/", label: "Flugsimulator-Cockpits" } },
              { title: "Konsole", text: "Läuft nur über den Spielton – was das bedeutet, steht unten.", link: { href: "#konsole-simhub", label: "PS5 & Xbox" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-nach-montageort",
    h2: "Die 5 besten Bass-Shaker und Verstärker nach Montageort und Setup",
    intro:
      "Hier ordnen wir nach dem Ort, an dem der Shaker sitzen soll – und ergänzen den Verstärker, ohne den Einzel-Shaker nicht laufen. Alle fünf brauchen einen separaten Verstärker oder sind selbst einer.",
    items: [
      {
        name: "Dayton Audio TT25-16 PUCK Tactile Transducer Mini Bass Shaker (4er-Pack)",
        for: "Bestes 4-Kanal-Setup unter Sitz und Pedalen",
        text: "Vier flache Pucks mit je 15 W RMS (30 W max.) an 16 Ohm, nutzbar ca. 20–80 Hz (Herstellerdaten laut Händler) – für ortsgenaue Effekte vorne/hinten oder links/rechts mit SimHub und Mehrkanal-Soundkarte. Als Stereo (2 × 8 Ω) oder einkanalig (4 Ω) verdrahtbar. Verstärker nötig; ein einzelner Puck ist laut einem Käufer eher schwach, Dayton empfiehlt die Pucks im Verbund.",
        asin: "B0073IXASQ",
        query: "Dayton Audio TT25-16 PUCK 4er-Pack",
      },
      {
        name: "Fischer Amps ButtKicker Mini LFE",
        for: "Bester Einzel-Shaker für Flugsim-Cockpit und Heimkino-Sessel",
        text: "Kompakter ButtKicker-Shaker zum Verschrauben am Rahmen, 4 Ohm, für Verstärker mit mindestens 50 W und höchstens 250 W (Herstellerangabe), 5–200 Hz (Händlerangabe Thomann). Kräftiger als der BST-2, aber ohne Verstärker im Lieferumfang. Am PC mit HaptiConnect oder SimHub nutzbar.",
        asin: "B0052AXFKK",
        query: "ButtKicker Mini LFE",
      },
      {
        name: "AuraSound AST-2B-4 Pro Bass Shaker",
        for: "Bewährter Einzel-Shaker für Sitzschale und Sessel",
        text: "Verschraubter Einzel-Shaker der US-Marke AuraSound: laut amazon.de-Listing 4 Ohm, 50 W, Frequenzangabe 40 Hz, Metallgehäuse, auf amazon.de mit rund 500 Kundenbewertungen (Snapshot) – eine breite Basis an Erfahrungswerten. Einige Listing-Angaben (Bluetooth, wasserdicht, 5.1) passen nicht zu einem Shaker – verlass dich auf Impedanz und Leistung. Verstärker nötig; Rig-Halterungen wie die von Trak Racer nennen den AST-2B-4 als kompatibel (Händlerangabe), das Lochbild trotzdem vorher prüfen.",
        asin: "B0002ZPTBI",
        query: "AuraSound AST-2B-4 Pro Bass Shaker",
      },
      {
        name: "Reckhorn A-410 Verstärker",
        for: "Verstärker-Tipp für Einzel-Shaker",
        text: "Nachfolger des A-409, den Reckhorn für den [BS-200](#platz-3) empfiehlt: Mono-Verstärker mit 400 W (Listing-Titel), stabil an 2 Ohm, also auch für zwei 4-Ohm-Shaker parallel; das Gehäuse dient als Kühlkörper. Laut Listing entspricht der A-410 in Bedienung und Daten dem A-409 – für den gibt Reckhorn 280 W RMS an 4 Ohm, 375 W RMS an 2 Ohm und einen Subsonic-Filter an, den der Hersteller auch für Shaker dringend empfiehlt (Herstellerangaben). Das A-410-Listing nennt Bass-Shaker nicht ausdrücklich. Mono heißt: Alle angeschlossenen Shaker bekommen dasselbe Signal, für getrennte Sitz- und Pedal-Effekte braucht es mehrere Kanäle.",
        asin: "B0DNN2FSQP",
        query: "Reckhorn A-410 Verstärker",
      },
      {
        name: "Sinuslive bassPUMP III 4 Ohm",
        for: "Günstigster Einstieg unter dem Sitz",
        text: "Einfacher Körperschallwandler des deutschen Car-Hifi-Anbieters Sinuslive: laut Bedienungsanleitung 50 W Sinus, 20–80 Hz, ca. 13 cm Durchmesser und gut 4 cm hoch (Herstellerangabe); das amazon.de-Listing nennt 4 Ohm und 50 W als ideale Verstärkerleistung. Käufer berichten von der Montage unter dem Sitz und der Ansteuerung per SimHub, einige bemängeln die Verarbeitung. Schwächer als BS-200 oder AST-2B-4 und klar ein Budget-Shaker – dafür der günstigste Weg, Vibration am Sitz auszuprobieren. Verstärker nötig; die 8-Ohm-Version nicht mit der 4-Ohm-Version verwechseln.",
        asin: "B0000WR4F2",
        query: "Sinuslive bassPUMP III 4 Ohm",
      },
    ],
  },

  guide: {
    sections: [
      {
        id: "einbauen",
        h2: "Wie baut man einen Bass-Shaker ein?",
        blocks: [
          { quick: "Einsatzort festlegen, den Shaker fest an Stuhlrohr, Sitzschale oder Pedalplatte klemmen bzw. schrauben, mit dem Verstärker verbinden, diesen an einen Audio-Ausgang hängen und den Pegel von unten langsam hochregeln – erst dann Effekte in der Software feinjustieren." },
          { figure: "steps" },
          { p: "Entscheidend ist eine feste Verbindung: Je direkter der Shaker mit der Fläche verbunden ist, auf der du sitzt, desto mehr kommt an. Der BST-2 hat laut Händler eine Schaumstoff-Dichtung gegen Klappern, der BS-200 gehört laut Reckhorn auf Holz oder Metall. Beim ButtKicker-Kit sitzt die Klemme an einem Rohr bis 45 mm – also vorher messen, ob Stuhl oder Rig ein passendes Rohr haben." },
          { h3: "Sitz, Pedale oder beides?" },
          { p: "Ein Shaker unter dem Sitz vermittelt Motor, Fahrbahn und Curbs, einer an der Pedalplatte vor allem Bremse, ABS und blockierende Räder. Wer mit einem Shaker beginnt, setzt ihn unter den Sitz. Ein zweiter für die Pedale lohnt sich, wenn du am PC mit Telemetrie fährst – dann lassen sich beide Orte getrennt ansteuern. Mit dem 4er-Pack der Dayton-Pucks aus der [Top 5](#top5-nach-montageort) geht das noch feiner." },
          { h3: "Tiefpass, Pegel und Wärme" },
          { p: "Ein Tiefpass am Verstärker sorgt dafür, dass nur tiefe Frequenzen beim Shaker ankommen. Dayton empfiehlt für den BST-2 80 Hz oder weniger, Reckhorn für den BS-200 bei Rennspielen 100–150 Hz und bei Filmen 50–80 Hz (Herstellerangaben). Starte mit niedrigem Pegel und erhöhe langsam: Zu viel Vibration ermüdet, übertönt die Details und belastet den Shaker." },
          { callout: { title: "Wärme, Strom und Sicherheit", warn: true, text: "Shaker nicht mit einem deutlich stärkeren Verstärker voll aufdrehen – ein Käufer berichtet, dass ein 50-W-Shaker an 100 W sehr heiß wurde. Reckhorn verlangt für den BS-200 eine hitzefeste Montagefläche, keine hitzeempfindlichen Materialien in der Nähe und freie Belüftung (Herstellerangabe). Nur Geräte mit Netzteil für das 230-V-Netz verwenden: Der ältere ButtKicker Gamer 2 hat einen 120-V-Verstärker, der Gamer Plus ein Netzteil für 100–240 V (Herstellerangabe). Kabel so verlegen, dass sie beim Verstellen von Sitz und Pedalen nicht scheuern. Lange Sessions mit Pausen unterbrechen; wer gesundheitliche Bedenken gegenüber starken Vibrationen hat, fragt vorher ärztlich nach." } },
          { facts: [{ value: "90 W", label: "Verstärker ButtKicker Gamer Plus (Herstellerangabe)" }, { value: "≤ 45 mm", label: "Rohrdurchmesser der Klemme (Händlerangabe)" }, { value: "100–150 Hz", label: "Tiefpass für Rennspiele laut Reckhorn" }] },
        ],
      },
      {
        id: "konsole-simhub",
        h2: "Funktioniert ein Bass-Shaker an PS5, Xbox und mit SimHub?",
        blocks: [
          { quick: "An PS5 und Xbox funktionieren Bass-Shaker nur über den Spielton: Ein HDMI- oder optischer Audio-Extraktor zweigt das Signal zum Verstärker ab, Telemetrie-Effekte gibt es dort nicht. Gezielte Effekte für Drehzahl, Schaltung und Curbs bekommst du nur am PC mit Software wie HaptiConnect oder SimHub." },
          { p: "Am PC hast du zwei Wege. ButtKicker liefert mit HaptiConnect eine eigene Software, die laut Hersteller Telemetrie oder Audio nutzt, mit allen ButtKicker-Generationen funktioniert und in der Standard-Version nach Registrierung kostenlos ist. SimHub (PC, Windows) bietet mit dem Modul ShakeIt eine herstellerunabhängige Lösung: Laut SimHub-Wiki lassen sich bis zu acht Kanäle je Audio-Gerät ansteuern; jeder Shaker braucht einen eigenen Audio-Ausgang – oft eine zusätzliche USB-Soundkarte – und einen Verstärkerkanal. Dayton Audio hat dafür eine eigene ShakeIt-Anleitung veröffentlicht." },
          { p: "An der Konsole fehlt dieser Weg. PS5 und Xbox geben kein Telemetrie-Signal an Shaker-Ausgänge; der Shaker folgt dann dem Tieftonanteil des Spieltons. Das funktioniert, ist aber weniger präzise – Musik und Effekte rütteln mit. Beim ButtKicker Gamer Plus sind HDMI-Kabel und Audio-Extraktoren laut Hersteller ausdrücklich nicht im Lieferumfang. Bei Einzel-Shakern wie dem [BST-2](produkt:2) oder [BS-200](produkt:3) kommt das Signal vom Extraktor zum Verstärker." },
          { callout: { title: "Kurz gesagt", text: "PC: Telemetrie mit HaptiConnect oder SimHub, mehrere Shaker getrennt ansteuerbar. PS5 und Xbox: nur Spielton über HDMI- oder Optik-Extraktor (separat kaufen), kein Telemetrie-Feedback." } },
        ],
      },
      {
        id: "nachbarn-entkopplung",
        h2: "Stört ein Bass-Shaker die Nachbarn?",
        blocks: [
          { quick: "Das kann passieren: Ein Shaker erzeugt Körperschall, der sich über Boden und Wände ausbreitet – leise im Raum, aber unter Umständen deutlich in der Nachbarwohnung. Entkopple Stuhl oder Rig mit Gummipuffern oder einer Matte vom Boden und halte den Pegel moderat; Akustikpaneele helfen dagegen nicht." },
          { p: "Der Unterschied zum Lautsprecher: Ein Shaker macht kaum Luftschall, bringt aber den Gegenstand zum Schwingen, an dem er befestigt ist – und über Stuhlrollen oder Rig-Füße den Boden. Gerade in Mietwohnungen kann das unten oder nebenan ankommen. Ein Käufer des Gamer Plus berichtet auf amazon.de, dass sich die Vibration in seiner Mietwohnung durch die Wände überträgt; ein anderer Nutzer rät, die Wohnsituation vor dem Kauf zu bedenken." },
          { p: "Akustikpaneele an der Wand dämpfen Hall und Luftschall, gegen Körperschall durch den Boden sind sie wirkungslos. Wirksam ist, den Weg in den Boden zu unterbrechen: Das Rig steht auf Gummipuffern oder einer dicken Matte, der Stuhl auf einer Unterlage. Hilfreich sind außerdem ein Tiefpass, der nicht unnötig hoch eingestellt ist, und Telemetrie statt Spielton – dann rüttelt der Sitz nur bei Fahrereignissen und nicht bei jeder Explosion." },
          { list: ["Rig oder Stuhl mit Gummipuffern bzw. Matte vom Boden entkoppeln", "Pegel moderat halten und Tiefpass passend einstellen", "Telemetrie statt Spielton nutzen, wo es geht", "Nicht spät abends oder nachts mit voller Stärke fahren", "Bei Bedarf kurz mit den Nachbarn testen, was ankommt"] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Bass-Shaker ist der beste für Sim-Racing?", a: "Für die meisten der ButtKicker Gamer Plus, weil Shaker, Verstärker und Klemme zusammen geliefert werden und er am PC Telemetrie-Effekte ausgibt. Günstiger sind der Dayton Audio BST-2 für die Pedale und der Reckhorn BS-200 für die Sitzschale – beide brauchen einen separaten Verstärker." },
    { q: "Was ist ein Bass-Shaker und wie funktioniert er?", a: "Ein Bass-Shaker ist ein Körperschallwandler: ein Lautsprecher ohne Membran, der eine Masse bewegt und die Schwingung in Sitz, Stuhl oder Pedalplatte überträgt. So spürst du Motor, Schaltvorgänge und Curbs, statt sie nur zu hören." },
    { q: "Braucht man für einen Bass-Shaker einen Verstärker?", a: "Ja, immer. Beim ButtKicker Gamer Plus ist er dabei, bei Einzel-Shakern wie Dayton BST-2 oder Reckhorn BS-200 musst du ihn separat kaufen – passend zur Impedanz von 4 Ohm und am besten mit Tiefpass und Subsonic-Filter." },
    { q: "Wo montiert man Bass-Shaker am besten – Sitz oder Pedale?", a: "Für den Anfang unter dem Sitz, weil dort Motor, Fahrbahn und Curbs am stärksten wirken. Ein zweiter Shaker an der Pedalplatte bringt ABS und blockierende Räder ins Gefühl und lohnt sich vor allem am PC mit getrennter Ansteuerung." },
    { q: "Funktioniert ein ButtKicker auch an der PS5 oder Xbox?", a: "Ja, aber nur über den Spielton. Du brauchst einen HDMI- oder optischen Audio-Extraktor, der beim ButtKicker Gamer Plus laut Hersteller nicht enthalten ist. Telemetrie-Effekte wie am PC gibt es an der Konsole nicht." },
    { q: "Was ist SimHub und braucht man es für Bass-Shaker?", a: "SimHub ist eine PC-Software für Windows, die mit dem Modul ShakeIt Telemetrie aus Rennspielen in Shaker-Effekte übersetzt. Nötig ist sie nicht – Shaker laufen auch über den Spielton –, aber für präzise und getrennte Effekte an Sitz und Pedalen ist sie der übliche Weg; ButtKicker bietet alternativ die eigene Software HaptiConnect." },
    { q: "Stört ein Bass-Shaker die Nachbarn?", a: "Möglicherweise, denn der Körperschall wandert über Boden und Wände. Entkopple Rig oder Stuhl mit Gummipuffern oder einer Matte, halte den Pegel moderat und nutze Telemetrie statt Spielton. Akustikpaneele helfen gegen Körperschall nicht." },
    { q: "Kann man einen Bass-Shaker am Gaming-Stuhl befestigen?", a: "Ja, mit einem Klemm-Kit wie dem ButtKicker Gamer Plus, dessen Klemme laut Händler an Rohre bis 45 mm Durchmesser passt. Vorher am Stuhl messen; Einzel-Shaker zum Verschrauben sind eher für Cockpits gedacht." },
  ],

  sources: [
    { label: "ButtKicker: Gamer PLUS (Hersteller)", url: "https://thebuttkicker.com/products/buttkicker-gamer-plus/" },
    { label: "Aerosoft: ButtKicker Gamer PLUS (Händlerangaben)", url: "https://www.aerosoft.com/en/shop/move/hardware/3871/buttkicker-gamer-plus?c=2347" },
    { label: "traxion.gg: ButtKicker Gamer Plus Review – Muddled Potential (ca. 2022)", url: "https://traxion.gg/buttkicker-gamer-plus-review-muddled-potential/" },
    { label: "Dayton Audio: BST-2 Tactile Bass Shaker", url: "https://daytonaudio.com/product/1750/bst-2-tactile-bass-shaker-35-watt" },
    { label: "audiophonics: Dayton Audio BST-2 Datenblatt", url: "https://audiophonics.fr/en/exciter/dayton-audio-bst-2-t-speaker-driver-exciter-bass-shaker-35w-4ohm-10hz-80hz-p-14972.html" },
    { label: "amazon.de: Reckhorn BS-200 Bassshaker (Herstellerangaben im Listing)", url: "https://www.amazon.de/Bassshaker-K%C3%B6rperschallwandler-Heimkino-Playseats-Reckhorn/dp/B00AMH17GC" },
    { label: "amazon.de: Reckhorn A-409 Verstärker (Herstellerdaten des Vorgängers)", url: "https://www.amazon.de/-/en/A-409-RECKHORN-Amplifier/dp/B01GPOCO08" },
    { label: "amazon.de: Reckhorn A-410 Verstärker", url: "https://www.amazon.de/Reckhorn-Elektronisches-Verst%C3%A4rker-Metallgeh%C3%A4use-Subwoofer/dp/B0DNN2FSQP" },
    { label: "amazon.de: AuraSound AST-2B-4 Pro Bass Shaker (Listing)", url: "https://www.amazon.de/AuraSound-AST-2B-4-Shaker-Tactile-Transducer/dp/B0002ZPTBI" },
    { label: "amazon.de: Sinuslive bassPUMP III 4 Ohm (Listing)", url: "https://www.amazon.de/-/en/Sine-Live-Bass-Pump-III-Ohm-black/dp/B0000WR4F2" },
    { label: "Conrad: Sinuslive bassPUMP – Bedienungsanleitung (PDF)", url: "https://asset.conrad.com/media10/add/160267/c1/-/cs/000376287ML01/upute-za-rukovanje-376287-sinuslive-basspump-vibracijski-zvucnik-130-mm-70-w-4.pdf" },
    { label: "amazon.de: Trak Racer Halterung für Bass-Shaker (Kompatibilitätsangaben)", url: "https://www.amazon.de/Trak-Universelle-Buttkicker-Transducer-Halterung/dp/B0DJ89K9YV" },
    { label: "Dayton Audio: TT25-16 PUCK 4er-Pack", url: "https://daytonaudio.com/product/1037/tt25-16-puck-tactile-transducer-mini-bass-shaker-4-pk" },
    { label: "Parts Express: Dayton Audio TT25-16 Daten", url: "https://parts-express.com/Dayton-Audio-TT25-16-PUCK-Tactile-Transducer-Mini-Bass-Shake-300-388" },
    { label: "ButtKicker: Mini LFE (Hersteller)", url: "https://thebuttkicker.com/products/buttkicker-mini-lfe-haptic-transducer" },
    { label: "Thomann: ButtKicker Mini LFE", url: "https://www.thomann.de/be/fischer_amps_buttkicker_mini_lfe.htm" },
    { label: "amazon.de: Dayton Audio BST-1 (Dayton-Verstärkerempfehlungen im Listing)", url: "https://www.amazon.de/Dayton-Audio-BST-1-Tactile-Shaker/dp/B01CDDPJTI" },
    { label: "SimHub-Wiki: Shake It for bass shakers", url: "https://github.com/zegreatclan/SimHub/wiki/Shake-It-for-bass-shakers" },
    { label: "Dayton Audio: SimHub ShakeIt Bass Shaker Guide (PDF)", url: "https://www.daytonaudio.com/images/resources/325-510--SAB-1060-SimHub-ShakeIt-Bass-Shaker-Guide.pdf" },
    { label: "Safety Gate – EU-Schnellwarnsystem für gefährliche Produkte", url: "https://ec.europa.eu/safety-gate-alerts/screen/search" },
  ],

  related: [
    { slug: "sim-racing-cockpits", text: "Rennsitze und Rigs, an deren Sitzschale und Pedalplatte Shaker verschraubt werden." },
    { slug: "beste-sim-racing-pedale", text: "Sim-Racing-Pedale – die Pedalplatte ist der zweite Montageort für einen Shaker." },
    { slug: "bestes-flugsimulator-cockpit", text: "Flugsimulator-Cockpits – Bass-Shaker machen auch Triebwerk und Fahrwerk spürbar." },
    { slug: "gaming-stuehle", text: "Gaming-Stühle für Setups ohne Cockpit." },
    { slug: "bestes-direct-drive-lenkrad", text: "Direct-Drive-Lenkräder mit starkem Force Feedback." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
