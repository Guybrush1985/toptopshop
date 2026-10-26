// Kategorie: Sim-Racing-Pedale (eigenständige Renn-Pedalsets)
// Aufbau siehe src/content/README.md (Content-Modell).
// Recherche: research/sim-racing/beste-sim-racing-pedale/

export default {
  slug: "beste-sim-racing-pedale",
  area: "gaming-room",
  navLabel: "Sim-Racing-Pedale",
  published: "2026-10-24",
  updated: "2026-10-26",

  metaTitle: "Die 3 besten Sim-Racing-Pedale 2026 (Loadcell im Vergleich)",
  metaDescription:
    "Loadcell-Pedale von Fanatec, Logitech, MOZA und Thrustmaster: Die 3 besten Sim-Racing-Pedale 2026 im Vergleich – plus Top 5 nach Lenkrad-Basis und Budget.",

  eyebrow: "Gaming-Room · Sim-Racing",
  h1: "Die 3 besten Sim-Racing-Pedale 2026",
  lead:
    "Nach dem Lenkrad bringen bessere Pedale den größten Sprung: Eine Loadcell-Bremse misst, wie fest du trittst, statt wie weit – das macht Bremspunkte wiederholbar. Wir zeigen die drei besten eigenständigen Pedalsets und in der Top 5 die passenden Pedale je Lenkrad-Basis und Budget.",
  answer:
    "Unsere beste Gesamtwahl sind die [**Fanatec CSL Elite Pedals V2**](produkt:1) – drei Pedale mit Loadcell-Bremse bis 90 kg (Herstellerangabe), am PC per USB mit jedem Lenkrad nutzbar. Das beste Preis-Leistungs-Verhältnis bieten die [**Logitech G RS Pedals**](produkt:2) mit 75-kg-Loadcell in der günstigsten Preisklasse. Beste Wahl für die Konsole sind die [**Logitech G PRO Racing Pedals**](produkt:3), die über ein Logitech-Lenkrad an PS5 und Xbox laufen.",

  priceTiers: {
    1: { symbol: "€", label: "bis 150 €" },
    2: { symbol: "€€", label: "150–320 €" },
    3: { symbol: "€€€", label: "über 320 €" },
  },

  top3Title: "Unsere Top 3 Sim-Racing-Pedale",
  top3Intro:
    "Alle drei haben eine Loadcell-Bremse und laufen am PC direkt per USB – auch mit einem Lenkrad einer anderen Marke. Auf PS5 und Xbox entscheidet dagegen die Lenkrad-Basis, welche Pedale überhaupt funktionieren.",
  comparisonTitle: "Die 3 besten Sim-Racing-Pedale im Vergleich",

  criteria: [
    { key: "bremse", label: "Bremse & Sensorik", weight: 0.35, description: "Loadcell oder Weg-Sensor, maximale Bremskraft in kg laut Hersteller, Einstellbarkeit über Elastomere, Federn und Software, Sensoren an Gas und Kupplung." },
    { key: "kompatibilitaet", label: "Kompatibilität & Anschluss", weight: 0.25, description: "PC direkt per USB oder über die Lenkrad-Basis; an welchen Basen PS5 und Xbox funktionieren; Kupplung enthalten oder nachrüstbar." },
    { key: "verarbeitung", label: "Verarbeitung, Verstellbarkeit & Stand", weight: 0.2, description: "Material, verstellbarer Pedalabstand und -winkel, Fersenauflage, Schutz gegen Wegrutschen, Cockpit-Montage." },
    { key: "preisLeistung", label: "Preis-Leistung", weight: 0.2, description: "Gegenwert in der Preisklasse, Verbreitung, Nachrüst- und Upgrade-Möglichkeiten." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Produktseiten, Handbücher und Support-Artikel von Fanatec, Logitech, Thrustmaster und MOZA), Händlerangaben auf amazon.de sowie englischsprachige Online-Reviews (PC Gamer, CGMagazine, racinggames.gg, Traxion). Tests von Stiftung Warentest, Öko-Test oder einen deutschsprachigen Pedal-Einzeltest haben wir nicht gefunden; PC Games Hardware hat die Logitech PRO Pedals nur im Rahmen eines Lenkrad-Systemtests geprüft. Wir haben die Pedale nicht selbst gemessen – die Noten sind eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10. Kompatibilitätsangaben ändern sich mit Firmware und Zubehör; wo Herstellerquellen sich widersprechen, weisen wir darauf hin.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Fanatec CSL Elite Pedals V2",
      brand: "Fanatec",
      variant: "3 Pedale: Kupplung, Loadcell-Bremse, Gas",
      visual: { kind: "racepedals", tone: "forest" },
      priceTier: 2,
      ratings: { bremse: 8.5, kompatibilitaet: 7.5, verarbeitung: 8.5, preisLeistung: 8.5 },
      bestFor: "Komplettes 3-Pedal-Set am PC oder an einer Fanatec-Basis",
      verdict:
        "Das rundeste Paket zum Mittelklasse-Preis: Loadcell-Bremse bis 90 kg, Hall-Sensoren an Gas und Kupplung und Pedalarme aus Aluminium – und als einziges Top-3-Set mit Kupplung ab Werk zu diesem Preis. Am PC per USB mit jedem Lenkrad, auf der Konsole nur im Fanatec-Verbund.",
      features: [
        "Loadcell-Bremse bis 90 kg Fußkraft, Empfindlichkeit über Basis-Menü oder Fanatec Control Panel (Herstellerangabe)",
        "Gas und Kupplung mit kontaktlosen Hall-Sensoren, Pedale aus gegossenem und gefrästem Aluminium (laut racinggames.gg)",
        "Anschluss per RJ12 an eine Fanatec-Basis oder per USB am PC – nicht beides gleichzeitig (Herstellerangabe)",
        "Bremshärte über Elastomere einstellbar, zusätzliche Metallfeder liegt bei, vormontiert (Händlerangabe)",
      ],
      pros: [
        "Drei Pedale inklusive Kupplung",
        "Loadcell bis 90 kg, Hall-Sensoren an Gas und Kupplung (Herstellerangabe)",
        "Am PC per USB auch mit MOZA-, Logitech- oder Thrustmaster-Lenkrad nutzbar",
        "Aluminium-Pedalarme, vormontiert geliefert",
      ],
      cons: [
        "Auf Konsole nur an einer Fanatec-Basis (Xbox zusätzlich mit Xbox-lizenziertem Fanatec-Lenkrad)",
        "Pedalpositionen umzubauen ist laut racinggames.gg fummelig",
        "Ohne Cockpit oder Anschlag kann das Set auf Hartboden rutschen",
      ],
      specs: {
        bremse: "Loadcell, bis 90 kg (Herstellerangabe)",
        pedale: "3 (Kupplung, Bremse, Gas)",
        pc: "ja, USB direkt – mit jeder Lenkrad-Marke",
        ps5: "nur an PlayStation-lizenzierter Fanatec-Basis",
        xbox: "nur an Fanatec-Basis mit Xbox-lizenziertem Fanatec-Lenkrad",
        anschluss: "RJ12 an Fanatec-Basis oder USB am PC",
      },
      asin: "B0F94F27XV",
      query: "Fanatec CSL Elite Pedals V2",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Logitech G RS Pedals",
      brand: "Logitech G",
      variant: "Gas + Loadcell-Bremse, Kupplungsmodul optional",
      visual: { kind: "racepedals", tone: "green" },
      priceTier: 1,
      ratings: { bremse: 7.5, kompatibilitaet: 8.0, verarbeitung: 7.5, preisLeistung: 9.5 },
      bestFor: "Günstiger Einstieg in die Loadcell, auch für G29/G920/G923-Besitzer",
      verdict:
        "Der günstigste Weg zu einer echten Loadcell-Bremse von einer großen Marke: 75 kg Messbereich, Hall-Gaspedal und ein Stahlrahmen mit Verlängerungen und Teppichgreifern. Die Kupplung kostet extra, dafür passen die Pedale auf PS5 und Xbox an die Logitech-Lenkräder – an die ältere G-Serie über den Racing Adapter.",
      features: [
        "Loadcell-Bremse bis 75 kg, Hall-Effect-Gaspedal (Herstellerangabe)",
        "Bremsgefühl werkzeuglos über Dämpfer und Abstandhalter, Bremskraft in G HUB einstellbar (Herstellerangabe)",
        "Rahmenverlängerungen für Schreibtisch oder Rig, Teppichgreifer, auch als Wandstrebe nutzbar (Herstellerangabe)",
        "Optionales RS-Kupplungsmodul wird links an der Fersenplatte montiert (Herstellerangabe)",
      ],
      pros: [
        "Loadcell-Bremse in der günstigsten Preisklasse",
        "Stahlrahmen mit Verlängerungen und Teppichgreifern",
        "Rettet G29/G920/G923-Besitzern den Umstieg (mit Racing Adapter)",
        "Kupplung nachrüstbar",
      ],
      cons: [
        "Nur zwei Pedale ab Werk",
        "75 kg statt 90–100 kg bei den teureren Sets",
        "Auf Konsole nur über ein Logitech-Lenkrad, G-Serie nur mit separatem Racing Adapter",
        "Einzelne Kundenberichte nennen eine sehr harte Bremse und Rutschen auf glattem Boden",
      ],
      specs: {
        bremse: "Loadcell, bis 75 kg (Herstellerangabe)",
        pedale: "2 (Gas, Bremse), Kupplung optional",
        pc: "ja, USB direkt – mit jeder Lenkrad-Marke",
        ps5: "über RS50/PRO-Basis (PS-Version) oder G29/G923 + Racing Adapter",
        xbox: "über RS50/PRO-Basis (Xbox-Version) oder G920/G923 + Racing Adapter",
        anschluss: "USB – am PC direkt, auf Konsole am Logitech-Lenkrad",
      },
      asin: "B0FKGWRQ29",
      query: "Logitech G RS Pedals",
    },
    {
      rank: 3,
      label: "Beste Wahl für Konsole",
      name: "Logitech G PRO Racing Pedals",
      brand: "Logitech G",
      variant: "3 Pedale: Kupplung, Loadcell-Bremse, Gas",
      visual: { kind: "racepedals", tone: "mint" },
      priceTier: 3,
      ratings: { bremse: 8.5, kompatibilitaet: 8.5, verarbeitung: 8.5, preisLeistung: 6.5 },
      bestFor: "PS5- und Xbox-Fahrer mit Logitech-Lenkrad",
      verdict:
        "Die stärkste Loadcell im Vergleich (100 kg laut Hersteller), drei Pedale mit Hall-Sensoren und ein modularer Aufbau mit tauschbaren Federn und Elastomeren. Auf der Konsole decken sie die meisten Logitech-Lenkräder ab – das kostet allerdings am meisten.",
      features: [
        "Loadcell-Bremse mit bis zu 100 kg Kraftmessung, Gas und Kupplung mit Hall-Sensoren (Herstellerangabe)",
        "PC direkt per USB; am PRO Racing Wheel auch auf PS5, PS4, Xbox Series X|S und Xbox One (Herstellerangabe)",
        "Für G923, G29 oder G920 ist der Logitech G Racing Adapter nötig (Händlerangabe)",
        "Federn und Elastomere austauschbar, jedes Pedal versetz- oder abnehmbar (Händlerangabe)",
      ],
      pros: [
        "Höchste Loadcell-Kraft im Vergleich (100 kg, Herstellerangabe)",
        "Drei Pedale inklusive Kupplung, Hall-Sensoren",
        "Breiteste Konsolen-Abdeckung im Logitech-Ökosystem",
        "Modular: Pedale versetzbar, Federn und Elastomere tauschbar",
      ],
      cons: [
        "Teuerstes Set der Top 3",
        "Auf Konsole nur an Logitech-Lenkrädern",
        "Für die G-Serie zusätzlich Racing Adapter nötig",
        "Vergleichsweise wenige Kundenbewertungen auf amazon.de",
      ],
      specs: {
        bremse: "Loadcell, bis 100 kg (Herstellerangabe)",
        pedale: "3 (Kupplung, Bremse, Gas)",
        pc: "ja, USB direkt (Windows 10/11)",
        ps5: "über G PRO/RS50 (PS-Version) oder G29/G923 + Racing Adapter",
        xbox: "über G PRO/RS50 (Xbox-Version) oder G920/G923 + Racing Adapter",
        anschluss: "USB – am PC direkt, auf Konsole am Logitech-Lenkrad",
      },
      asin: "B07W5JKTTH",
      query: "Logitech G PRO Racing Pedals",
    },
  ],

  comparison: [
    { key: "bremse", label: "Loadcell" },
    { key: "pedale", label: "Pedale / Kupplung" },
    { key: "pc", label: "PC" },
    { key: "ps5", label: "PS5" },
    { key: "xbox", label: "Xbox" },
    { key: "anschluss", label: "Anschluss / Basis" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-sim-racing-pedale-2026-bewertung.svg",
      title: "Die 3 besten Sim-Racing-Pedale 2026",
      alt: "Balkendiagramm: Bewertung von Fanatec CSL Elite Pedals V2, Logitech G RS Pedals und Logitech G PRO Racing Pedals in den Kriterien Bremse & Sensorik, Kompatibilität & Anschluss, Verarbeitung, Verstellbarkeit & Stand und Preis-Leistung",
      caption: "Unsere redaktionelle Bewertung je Kriterium für die drei empfohlenen Pedalsets. Bremse und Sensorik wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "sim-racing-pedale-nachruesten.svg",
      title: "Sim-Racing-Pedale nachrüsten",
      subtitle: "Passend anschließen, rutschfest aufstellen",
      alt: "Infografik: Sim-Racing-Pedale nachrüsten – Anschluss prüfen, Bremse wählen, Aufstellen, Anschließen, Kalibrieren, Bremsgefühl einstellen",
      caption: "Bei Pedalen zählt zuerst der Anschluss an PC oder Lenkrad-Basis, dann ein fester Stand unter Last.",
      steps: [
        { title: "Anschluss prüfen", text: "USB direkt am PC oder über die Lenkrad-Basis? An PS5 und Xbox laufen Pedale nur über die Basis." },
        { title: "Bremse wählen", text: "Loadcell misst den Druck statt des Wegs – auf die maximale Bremskraft in kg achten." },
        { title: "Aufstellen", text: "Auf Cockpit-Platte verschrauben oder am Boden gegen Wegrutschen sichern, etwa mit Fersenplatte oder Stand." },
        { title: "Anschließen", text: "Kabel an PC oder Basis stecken, Firmware aktualisieren und Pedale in der Software erkennen lassen." },
        { title: "Kalibrieren", text: "Gas, Bremse und Kupplung durch den vollen Weg treten und Totzonen festlegen." },
        { title: "Bremsgefühl einstellen", text: "Federn oder Elastomere tauschen und die Bremskraft so wählen, dass sie fest, aber dosierbar ist." },
      ],
    },
  },

  editorial: {
    title: "Loadcell, Kompatibilität, Stand",
    intro: "Warum die Bremse das wichtigste Pedal ist, welche Pedale an welcher Lenkrad-Basis laufen und woran man bei der Wahl nicht sparen sollte.",
    sections: [
      {
        id: "beste-sim-racing-pedale",
        h2: "Welche Sim-Racing-Pedale sind die besten?",
        blocks: [
          { quick: "Für die meisten Fahrer sind die [Fanatec CSL Elite Pedals V2](produkt:1) die beste Wahl: drei Pedale, Loadcell bis 90 kg (Herstellerangabe), am PC mit jedem Lenkrad. Wer sparen will, nimmt die [Logitech G RS Pedals](produkt:2) mit 75-kg-Loadcell. Auf PS5 und Xbox mit Logitech-Lenkrad sind die [Logitech G PRO Racing Pedals](produkt:3) die stärkste Wahl." },
          { first: "Die Pedale, die vielen Lenkrad-Sets beiliegen, messen bei der Bremse nur den Weg: Je weiter du trittst, desto stärker bremst das Auto. Im echten Rennwagen ist es umgekehrt – das Bremspedal bewegt sich kaum, entscheidend ist der Druck. Eine **Loadcell** (Kraftsensor) bildet genau das nach. Du bremst mit dem Muskelgedächtnis statt mit dem Fußweg, und das macht Bremspunkte Runde für Runde wiederholbar. Deshalb gelten Loadcell-Pedale unter Sim-Racern als das wichtigste Upgrade nach dem Lenkrad." },
          { p: "Die [CSL Elite Pedals V2](produkt:1) gewinnen, weil sie alles mitbringen, was ein Pedalset braucht: Laut Fanatec misst die Loadcell bis zu 90 kg Fußkraft, Gas und Kupplung arbeiten mit kontaktlosen Hall-Sensoren, die Pedalarme sind laut racinggames.gg aus gegossenem und gefrästem Aluminium. Das Online-Magazin lobt in seinem Review Verarbeitung und das gleichmäßige Gaspedal, kritisiert aber, dass das Umsetzen der Pedale fummeliger ist als gedacht. Am PC hängt das Set per USB direkt am Rechner – damit funktioniert es mit jeder Lenkrad-Basis, auch von MOZA, Logitech oder Thrustmaster. Auf PS5 und Xbox laufen die Pedale dagegen nur an einer Fanatec-Basis." },
          { p: "Die [RS Pedals](produkt:2) sind das Gegenmodell: nur Gas und Bremse ab Werk, dafür eine Loadcell bis 75 kg (Herstellerangabe) in der günstigsten Preisklasse. Logitech liefert Rahmenverlängerungen und Teppichgreifer mit und beschreibt im Setup-Guide, dass die Pedale auch als Wandstrebe genutzt werden können – praktisch ohne Cockpit. Die volle Bremskraft ist laut Logitech vor allem für Rigs und Sim-Stühle gedacht. Das Kupplungsmodul lässt sich nachrüsten." },
          { p: "Die [PRO Racing Pedals](produkt:3) haben mit 100 kg die höchste Loadcell-Kraft im Vergleich (Herstellerangabe), drei Pedale mit Hall-Sensoren und tauschbare Federn und Elastomere. Das englischsprachige Magazin PC Gamer nennt die Pedale in seinem Review den „Star“ des Logitech-PRO-Systems mit hervorragender Loadcell-Bremse. Ihre Stärke ist die Konsole: Am G PRO Racing Wheel und am RS50 laufen sie direkt auf PS5 und Xbox, an der älteren G-Serie über den Racing Adapter. In der Gesamtnote liegen sie knapp vor den RS Pedals, die Rolle „Preis-Leistung“ geht wegen des deutlichen Preisabstands trotzdem an die RS Pedals." },
          { figure: "scores" },
        ],
      },
      {
        id: "loadcell-lohnt-sich",
        h2: "Lohnen sich Loadcell-Pedale?",
        blocks: [
          { quick: "Ja – für fast jeden, der regelmäßig fährt. Eine Loadcell-Bremse misst die Kraft statt des Wegs, dadurch wird Bremsen über den Druck des Fußes dosierbar und wiederholbar. Wer nur gelegentlich Arcade-Rennspiele fährt, kommt mit Standardpedalen aus." },
          { p: "Bei einer Potentiometer- oder Hall-Bremse ohne Loadcell wird der Pedalweg gemessen. Das funktioniert, aber der Fuß muss sich eine Position merken – und die verschiebt sich, sobald du mit mehr oder weniger Schwung trittst. Bei einer Loadcell spannst du gegen einen Widerstand aus Elastomeren oder Federn. Wie fest du drückst, merkt sich das Bein viel zuverlässiger als einen Weg." },
          { h3: "Wie viel Bremskraft braucht man?" },
          { p: "Die Angaben der Hersteller – 75 kg bei den RS Pedals, 90 kg bei den CSL Elite V2, 100 kg bei den PRO Pedals – beschreiben den Messbereich, nicht die Kraft, die du treten solltest. In der Software stellst du ein, bei welcher Kraft die Bremse voll anspricht. Am Schreibtisch mit Bürostuhl reicht meist ein deutlich niedrigerer Wert, weil der Stuhl sonst wegrollt; im Cockpit mit festem Sitz kannst du die Bremse härter einstellen. Mehr Messbereich ist also vor allem Reserve für ein festes Rig." },
          { h3: "Sind Pedale wichtiger als das Lenkrad?" },
          { p: "Nicht wichtiger, aber oft das bessere nächste Upgrade. Wer schon ein Force-Feedback-Lenkrad hat, gewinnt mit einer Loadcell-Bremse meist mehr Konstanz als mit ein paar Newtonmetern mehr am Lenkrad. Wer noch mit einem Einsteiger-Lenkrad fährt und plant, später auf Direct Drive umzusteigen, sollte die Pedale passend zum künftigen Ökosystem wählen – dazu mehr im nächsten Abschnitt." },
        ],
      },
      {
        id: "kompatibilitaet",
        h2: "Welche Sim-Racing-Pedale funktionieren mit PS5, Xbox und PC?",
        blocks: [
          { quick: "Am PC laufen alle Pedale dieser Seite per USB mit jedem Lenkrad. Auf PS5 und Xbox werden Pedale nie direkt an die Konsole angeschlossen, sondern nur an eine Lenkrad-Basis desselben Herstellers – Fanatec an Fanatec, Logitech an Logitech, Thrustmaster an Thrustmaster. MOZA-SR-P-Pedale sind laut MOZA nicht für die Konsole vorgesehen." },
          { p: "Das ist die wichtigste Kauffrage überhaupt. Die Konsole erkennt nur ein Gerät – das Lenkrad. Die Pedale hängen an dessen Basis und werden darüber mitgemeldet. Wer auf der PS5 mit einem Logitech G923 fährt, kann deshalb keine Fanatec-Pedale anschließen, egal wie gut sie sind. Am PC dagegen meldet sich jedes USB-Pedalset als eigenes Gerät, und du kombinierst frei." },
          {
            table: {
              caption: "Kompatibilität laut Hersteller (Stand Oktober 2026, vor dem Kauf prüfen)",
              head: ["Pedale", "PC", "PS5", "Xbox", "Anschluss / Basis", "Loadcell", "Kupplung"],
              rows: [
                ["**Fanatec CSL Elite Pedals V2**", "USB, jede Basis", "an PlayStation-lizenzierter Fanatec-Basis", "an Fanatec-Basis + Xbox-lizenziertem Fanatec-Lenkrad", "RJ12 an Fanatec-Basis oder USB", "ja, 90 kg", "ja"],
                ["**Logitech G RS Pedals**", "USB, jede Basis", "über RS50/PRO; G29/G923 mit Racing Adapter", "über RS50/PRO; G920/G923 mit Racing Adapter", "USB am PC bzw. am Logitech-Lenkrad", "ja, 75 kg", "optional"],
                ["**Logitech G PRO Racing Pedals**", "USB, jede Basis", "über G PRO/RS50; G29/G923 mit Racing Adapter", "über G PRO/RS50; G920/G923 mit Racing Adapter", "USB am PC bzw. am Logitech-Lenkrad", "ja, 100 kg", "ja"],
                ["**Thrustmaster Raceline Pedals III**", "USB, jede Basis", "an Thrustmaster-FFB-Basen (laut Shop außer T500)", "an Thrustmaster-FFB-Basen (laut Shop)", "RJ12/RJ45 an Thrustmaster-Basis oder USB", "nein (Upgrade möglich)", "ja"],
                ["**Thrustmaster Raceline LC Upgrade**", "USB, jede Basis", "an Thrustmaster-FFB-Basen außer T500", "an Thrustmaster-FFB-Basen außer T500", "wie Raceline Pedals III / LTE", "ja, 100 kg", "ja (mit Raceline-Set)"],
                ["**MOZA SR-P Load Cell Pedals**", "USB, jede Basis", "nein", "laut MOZA nicht vorgesehen (dafür SR-P Lite)", "USB direkt am PC", "ja, 100 kg Kapazität", "separat"],
              ],
            },
          },
          { callout: { title: "Widersprüchliche Herstellerangaben", text: "Für die Thrustmaster Raceline Pedals III nennt der Thrustmaster-Shop alle Force-Feedback-Basen außer T500, eine Support-Liste dagegen teils nur T598 und T818. Bei Logitech hängt die Konsolen-Freigabe der älteren G-Serie vom Racing Adapter ab, den Logitech für G25, G27, G29, G920 und G923 angibt. Prüfe die Kombination aus Basis, Pedalen und Konsole vor dem Kauf auf der Support-Seite des Herstellers." } },
          { p: "Für die Kaufentscheidung heißt das: **Konsolenfahrer kaufen Pedale passend zur Basis.** PC-Fahrer haben freie Wahl und können zum Beispiel ein MOZA-Lenkrad mit Fanatec-Pedalen kombinieren. Wer heute am PC fährt, aber vielleicht einmal auf die Konsole wechselt, ist mit Pedalen aus dem Ökosystem seiner Lenkrad-Basis auf der sicheren Seite." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf von Sim-Racing-Pedalen achten?",
        blocks: [
          { quick: "Achte zuerst auf die Kompatibilität mit deiner Lenkrad-Basis und Plattform, dann auf eine Loadcell-Bremse mit einstellbarem Widerstand, auf ein drittes Pedal, wenn du manuell schaltest, und auf einen Stand, der unter Last nicht wegrutscht." },
          {
            table: {
              caption: "Brems-Sensorik im Überblick",
              head: ["Sensor", "Misst", "Beispiel", "Für wen"],
              rows: [
                ["**Potentiometer**", "Weg, mit Schleifkontakt", "Pedale vieler Einsteiger-Lenkradsets", "Gelegenheitsfahrer"],
                ["**Hall-Sensor (magnetisch)**", "Weg, kontaktlos", "Thrustmaster Raceline Pedals III", "Einsteiger mit Upgrade-Plan"],
                ["**Loadcell**", "Kraft auf das Pedal", "Fanatec CSL Elite V2, Logitech RS/PRO, MOZA SR-P", "Regelmäßige Fahrer"],
              ],
            },
          },
          { h3: "Bremse und Einstellbarkeit" },
          { p: "Eine Loadcell ist nur so gut wie ihr Widerstand. Elastomere (Gummipuffer) und Federn bestimmen, wie sich das Pedal anfühlt – weich mit langem Weg oder fest wie im Rennwagen. Fanatec legt laut Händlerangabe eine Metallfeder für ein festeres Gefühl bei, Logitech setzt bei den RS Pedals auf werkzeuglos tauschbare Dämpfer und Abstandhalter, bei den PRO Pedals auf austauschbare Federn und Elastomere. In der Software stellst du zusätzlich ein, bei welcher Kraft die Bremse voll anspricht." },
          { h3: "Zwei oder drei Pedale" },
          { p: "Eine Kupplung brauchst du nur, wenn du mit H-Schaltung fährst – etwa in Rallye-, Oldtimer- oder Truck-Simulationen. Moderne GT- und Formelautos schalten mit Wippen am Lenkrad. Passende Schaltknüppel stehen im Ratgeber [Sim-Racing-Shifter](/bester-sim-racing-shifter/). Die RS Pedals und die MOZA SR-P sind deshalb zweiteilig, eine Kupplung gibt es separat. Wer die Kupplung sicher will, nimmt gleich ein 3-Pedal-Set wie die CSL Elite V2 oder die PRO Pedals." },
          { h3: "Verarbeitung und Stand" },
          { p: "Bei 75 bis 100 kg Messbereich wirkt viel Kraft auf Rahmen und Boden. Metallrahmen, verstellbare Pedalabstände und eine breite Fersenauflage sind deshalb kein Luxus. Auf Teppich helfen Spikes oder Teppichgreifer, auf Hartboden eine Gummimatte, ein Anschlag an der Wand oder – am besten – die Montage auf der Pedalplatte eines [Sim-Racing-Cockpits](/sim-racing-cockpits/)." },
          { list: ["Kompatibilität mit Basis und Plattform prüfen", "Loadcell-Bremse mit einstellbarem Widerstand", "Kupplung nur bei H-Schaltung nötig", "Metallrahmen, Fersenauflage, Schutz gegen Rutschen", "Upgrade-Pfad: Kupplung oder Loadcell nachrüstbar?"] },
        ],
      },
      {
        id: "zielgruppen",
        h2: "Welche Sim-Racing-Pedale passen zu wem?",
        blocks: [
          { quick: "PC-Fahrer mit beliebigem Lenkrad greifen zu den Fanatec CSL Elite V2, Sparfüchse und G29/G923-Besitzer zu den Logitech RS Pedals, Konsolenfahrer mit Logitech-Lenkrad zu den PRO Pedals. Thrustmaster-Fahrer bleiben bei Raceline, reine PC-Rigs mit MOZA nehmen die SR-P." },
          {
            cards: [
              { title: "PC, beliebiges Lenkrad", text: "Komplettes 3-Pedal-Set mit 90-kg-Loadcell per USB: Fanatec CSL Elite Pedals V2.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Fanatec-Basis auf PS5", text: "Gran Turismo DD Pro oder CSL DD an der PS5: ebenfalls die CSL Elite Pedals V2 per RJ12.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Günstig zur Loadcell", text: "75-kg-Loadcell in der günstigsten Klasse, Kupplung später: Logitech G RS Pedals.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "PS5/Xbox mit Logitech", text: "Drei Pedale, 100-kg-Loadcell, an G PRO, RS50 oder mit Adapter an der G-Serie: Logitech G PRO Racing Pedals.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Thrustmaster-Basis", text: "Raceline Pedals III, später mit dem Raceline-LC-Upgrade zur Loadcell.", link: { href: "#top5-nach-basis", label: "Zur Top 5" } },
              { title: "MOZA und reines PC-Rig", text: "Günstigste Loadcell im Vergleich, nur PC: MOZA SR-P Load Cell Pedals.", link: { href: "#top5-nach-basis", label: "Zur Top 5" } },
            ],
          },
          { p: "Ruderpedale für den Flugsimulator sind übrigens etwas ganz anderes: zwei gegenläufig gekoppelte Pedale für das Seitenruder mit Zehenbremsen. Die passenden Modelle stehen im Ratgeber [Ruderpedale für den Flugsimulator](/beste-ruderpedale-flugsimulator/)." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-nach-basis",
    h2: "Die 5 besten Sim-Racing-Pedale nach Lenkrad-Basis und Budget",
    intro: "Jenseits der Top 3: der günstige Einstieg ohne Loadcell, der Thrustmaster-Weg zur Loadcell, die günstigste Loadcell für MOZA- und PC-Rigs und zwei Logitech-Pakete für G-Serie-Besitzer und Fahrer mit H-Schaltung.",
    items: [
      {
        name: "Thrustmaster Raceline Pedals III",
        for: "Einstieg ohne Loadcell, Thrustmaster-Basen",
        text: "Drei Metallpedale mit magnetischen H.E.A.R.T.-Sensoren, Höhe je Pedal in vier Positionen, Druck über Rasten und beiliegende Federn einstellbar (Herstellerangabe). Laut Thrustmaster-Shop auf PS5, PS4, Xbox und PC an allen Thrustmaster-Force-Feedback-Basen außer T500; eine Support-Liste nennt teils nur T598 und T818 – vor dem Kauf prüfen. Nachfolger des T3PM und mit dem Raceline-LC-Set zur Loadcell aufrüstbar.",
        asin: "B0DPXFT28V",
        query: "Thrustmaster Raceline Pedals III",
      },
      {
        name: "Logitech G RS Pedals mit Racing Adapter",
        for: "Besitzer von G29, G920 oder G923",
        text: "Die RS Pedals mit 75-kg-Loadcell plus der Racing Adapter, den Logitech für G25, G27, G29, G920 und G923 auf der Konsole verlangt. Das alte Lenkrad bleibt, nur die Bremse wird besser. Laut amazon.de-Listing besteht das Paket aus zwei Artikeln – RS Pedals und Racing Adapter –, die getrennt geliefert werden können.",
        asin: "B0FMYGNT2F",
        query: "Logitech G RS Pedals mit Racing Adapter",
      },
      {
        name: "Thrustmaster Raceline LC Load Cell-Bremse Upgrade-Set",
        for: "Loadcell für Thrustmaster-Basen",
        text: "Macht Raceline Pedals III oder LTE zur Loadcell-Bremse: Bremspedal mit Loadcell, 3-Pedal-Platte, Metall-Pedalköpfe, Zusatzfeder und Elastomer-Puffer (Herstellerangabe). Laut Thrustmaster bis 100 kg, maximale Bremskraft zwischen 25 und 100 kg einstellbar; auf Konsole an allen Thrustmaster-Force-Feedback-Basen außer T500. Der Ersatz für die T-LCM, die auf amazon.de derzeit nicht lieferbar ist.",
        asin: "B0G3PZ8KGW",
        query: "Thrustmaster Raceline LC Load Cell Upgrade",
      },
      {
        name: "MOZA SR-P Load Cell Pedals",
        for: "MOZA-Fahrer und reine PC-Rigs",
        text: "Die günstigste Loadcell im Vergleich: Winkelsensor im ersten Teil des Wegs, danach Drucksensor mit 100 kg Kapazität, USB direkt am PC (Herstellerangabe) – damit mit jeder Basis nutzbar, aber nicht an der Konsole. Traxion beschreibt das Bremsgefühl im Review als federlastig; Kupplung separat erhältlich.",
        asin: "B0B73X6N4K",
        query: "MOZA SR-P Load Cell Pedals",
      },
      {
        name: "Logitech G RS Pedals mit RS Kupplungsmodul",
        for: "Günstiges 3-Pedal-Set für H-Schaltung",
        text: "RS Pedals mit 75-kg-Loadcell plus Kupplungsmodul, das links an der Fersenplatte montiert wird (Herstellerangabe) – für Rallye, Oldtimer und Truck-Sims mit H-Shifter. Konsole wie bei den RS Pedals nur über ein Logitech-Lenkrad. amazon.de führt das Paket im Titel mit Kupplungsmodul, die Listing-Beschreibung nennt das Modul an anderer Stelle aber als optional – Lieferumfang und Lieferstatus vor dem Kauf prüfen.",
        asin: "B0FMYH5936",
        query: "Logitech G RS Pedals mit RS Kupplungsmodul",
      },
    ],
  },

  guide: {
    sections: [
      {
        id: "nachruesten",
        h2: "Sim-Racing-Pedale nachrüsten: Anschluss, Stand und Kalibrierung",
        blocks: [
          { quick: "Erst klären, ob die Pedale an den PC oder an die Lenkrad-Basis kommen, dann rutschfest aufstellen oder auf ein Cockpit schrauben, Firmware aktualisieren, alle Achsen kalibrieren und zuletzt den Bremswiderstand mit Elastomeren, Federn und Software einstellen." },
          { figure: "steps" },
          { p: "Bei den Fanatec CSL Elite V2 entscheidest du dich für einen Weg: Laut Handbuch hängen sie entweder per RJ12 an der Fanatec-Basis oder per USB am PC – nicht beides gleichzeitig. Die Logitech-Pedale stecken am PC direkt per USB, auf der Konsole am USB-Port des Logitech-Lenkrads oder über den Racing Adapter. Thrustmaster-Pedale werden per RJ12 bzw. RJ45 an die Basis angeschlossen; die T598 erkennt das Raceline-LC-Set laut Thrustmaster-Support in einem eigenen Modus." },
          { p: "Der häufigste Ärger ist nicht die Technik, sondern das Wegrutschen. Mit Loadcell drückst du die Pedale kräftig nach vorn und den Stuhl nach hinten. Logitech liefert für die RS Pedals Rahmenverlängerungen und Teppichgreifer und empfiehlt die volle Bremskraft vor allem für Rigs. Wer am Schreibtisch fährt, stellt die Maximalkraft niedriger ein oder stützt die Pedale gegen die Wand ab. Dauerhaft am besten ist eine verschraubte Pedalplatte im [Cockpit](/sim-racing-cockpits/)." },
          { p: "Nach dem Kalibrieren lohnt sich etwas Geduld beim Bremsgefühl: Starte mit einem mittleren Widerstand, fahre ein paar Runden auf einer bekannten Strecke und passe dann Elastomere oder Federn an. Ziel ist eine Bremse, die du fest, aber noch fein dosieren kannst, ohne dass das Bein ermüdet." },
          { callout: { title: "Kauf und Verfügbarkeit", text: "Die Fanatec CSL Elite Pedals V2 sind auf amazon.de als „Amazon Exclusive“ gelistet, die MOZA SR-P waren bei unserer Recherche teils nur in geringer Stückzahl, teils als „derzeit nicht verfügbar“ gelistet. Prüfe vor dem Kauf Verkäufer und Lieferstatus. Die Thrustmaster T-LCM sind auf amazon.de derzeit nicht lieferbar – die Raceline-Kombination aus Top 5 ersetzt sie." } },
          { callout: { title: "Gesundheit und Sicherheit", warn: true, text: "Hohe Bremskräfte belasten Knie, Hüfte und Rücken. Stell Sitz und Pedale so ein, dass das Knie bei voll getretener Bremse leicht gebeugt bleibt, und mach bei langen Sessions Pausen. Bei Beschwerden ärztlichen Rat einholen – unsere Hinweise ersetzen keine Beratung. Rückrufe zu den hier genannten Pedalen haben wir bei unserer Recherche nicht gefunden." } },
          { facts: [{ value: "100 kg", label: "Loadcell Logitech PRO (Herstellerangabe)" }, { value: "90 kg", label: "Loadcell Fanatec CSL Elite V2 (Herstellerangabe)" }, { value: "75 kg", label: "Loadcell Logitech RS (Herstellerangabe)" }] },
        ],
      },
      {
        id: "alternativen",
        h2: "Welche Alternativen gibt es zu den Top 3?",
        blocks: [
          { quick: "Günstiger geht es mit Hall-Pedalen ohne Loadcell oder einem Loadcell-Upgrade für vorhandene Pedale, hochwertiger mit Hydraulik-Pedalen aus dem Direktvertrieb. Pedale aus Lenkrad-Bundles sind eine Alternative, wenn du ohnehin ein neues Lenkrad kaufst." },
          { p: "**Pedale aus dem Lenkrad-Bundle:** Viele Direct-Drive-Sets bringen Pedale mit, oft ohne Loadcell. Wer ohnehin ein neues Lenkrad kauft, sollte prüfen, ob ein Bundle günstiger ist als Basis plus separates Pedalset. Diese Seite behandelt nur eigenständig verkaufte Pedalsets – Basen und Bundles vergleichen wir im Ratgeber [Direct-Drive-Lenkräder](/bestes-direct-drive-lenkrad/)." },
          { p: "**Upgrade statt Neukauf:** Thrustmaster-Fahrer müssen nicht alles ersetzen – das Raceline-LC-Set baut Raceline Pedals III oder LTE zur Loadcell um. Für die Fanatec CSL Elite V2 ist ein solches Kit unnötig: Laut Fanatec passt das CSL Pedals Load Cell Kit nicht zu ihnen, weil die V2 die Loadcell bereits enthält." },
          { p: "**High-End und Hydraulik:** Über dem Mittelklasse-Rahmen dieser Seite gibt es Pedale von Herstellern wie Heusinkveld, Simucube oder Asetek sowie die MOZA CRP2. Sie werden überwiegend außerhalb von Amazon verkauft bzw. sind dort kaum verfügbar – deshalb verlinken wir sie nicht. Fanatecs neue Podium Pedals gibt es bisher nur ohne Kupplung: Die 3-Pedal-Konfiguration wurde wegen Fertigungsproblemen am Kupplungspedal mehrfach verschoben und ist laut GTPlanet (16. Oktober 2026) nun für das vierte Quartal 2026 angekündigt. Die CSL Elite V2 betrifft das nicht." },
          { p: "**Rund ums Rig:** Feste Pedale brauchen einen festen Sitz – Rahmen mit Pedalplatte findest du bei den [Sim-Racing-Cockpits](/sim-racing-cockpits/), wer am Schreibtisch fährt, braucht einen stabilen [Gaming-Stuhl](/gaming-stuehle/), der beim Bremsen nicht wegrollt. Und wer in der Brille fährt, findet die passenden Headsets unter [VR-Gaming](/vr-gaming/)." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Sim-Racing-Pedale sind die besten?", a: "Unsere beste Gesamtwahl sind die Fanatec CSL Elite Pedals V2 mit drei Pedalen und Loadcell bis 90 kg (Herstellerangabe). Das beste Preis-Leistungs-Verhältnis bieten die Logitech G RS Pedals mit 75-kg-Loadcell, beste Wahl für die Konsole mit Logitech-Lenkrad sind die Logitech G PRO Racing Pedals." },
    { q: "Was sind Loadcell-Pedale und lohnen sie sich?", a: "Loadcell-Pedale messen beim Bremsen die Kraft statt des Pedalwegs. Für regelmäßige Fahrer lohnen sie sich, weil sich Bremsdruck mit dem Bein viel genauer und wiederholbarer dosieren lässt als ein Weg." },
    { q: "Sind Pedale wichtiger als das Lenkrad?", a: "Nicht wichtiger, aber oft das wirkungsvollere nächste Upgrade. Wer bereits ein Force-Feedback-Lenkrad hat, gewinnt mit einer Loadcell-Bremse meist mehr Konstanz als mit einem stärkeren Lenkrad." },
    { q: "Kann man Loadcell-Pedale mit dem Logitech G29 oder G923 nutzen?", a: "Ja. Am PC laufen alle Pedale dieser Seite per USB parallel zum G29 oder G923. Auf der Konsole funktionieren nur Logitech-Pedale wie die RS oder PRO Pedals – laut Logitech über den separat erhältlichen Racing Adapter, der für G25, G27, G29, G920 und G923 angegeben ist." },
    { q: "Funktionieren Fanatec- oder MOZA-Pedale an der PS5?", a: "Fanatec-Pedale ja, aber nur an einer PlayStation-lizenzierten Fanatec-Basis, nicht direkt an der Konsole. Die MOZA SR-P sind laut MOZA nicht für die Konsole vorgesehen; MOZA-Basen laufen nur mit Xbox-lizenziertem Lenkrad an der Xbox." },
    { q: "Wie verhindert man, dass Pedale auf dem Boden wegrutschen?", a: "Am zuverlässigsten mit einem Cockpit, auf dessen Pedalplatte die Pedale verschraubt werden. Ohne Cockpit helfen Teppichgreifer, Rahmenverlängerungen, eine Gummimatte oder ein Anschlag an der Wand – Logitech liefert für die RS Pedals Verlängerungen und Teppichgreifer mit." },
    { q: "Wie viel Bremskraft sollte eine Loadcell haben?", a: "75 bis 100 kg Messbereich, wie bei den Sets auf dieser Seite, reichen für Schreibtisch und Cockpit. Entscheidend ist, dass du in der Software einstellen kannst, bei welcher Kraft die Bremse voll anspricht; am Bürostuhl wählst du einen niedrigeren Wert als im festen Rig." },
    { q: "Brauche ich ein Kupplungspedal?", a: "Nur wenn du mit H-Schaltung fährst, etwa in Rallye-, Oldtimer- oder Truck-Simulationen. GT- und Formelautos schalten mit Wippen; dafür reichen Gas und Bremse, eine Kupplung lässt sich bei RS Pedals oder MOZA SR-P nachrüsten." },
    { q: "Kann man Rennpedale als Ruderpedale im Flugsimulator nutzen?", a: "Nur eingeschränkt. Ruderpedale sind gegenläufig gekoppelt, haben eine Mittelstellung und Zehenbremsen; Rennpedale arbeiten einzeln. Für den Flugsimulator empfehlen wir eigene Ruderpedale." },
  ],

  sources: [
    { label: "Fanatec – CSL Elite Pedals V2 (Hersteller)", url: "https://www.fanatec.com/ca/en/p/pedals/csl_ep_v2/csl-elite-pedals-v2" },
    { label: "Fanatec – CSL Elite Pedals V2 Handbuch (PDF)", url: "https://assets.fanatec.com/image/upload/v1741630127/downloads-prod/pdfs/CSL-EP-V2-Manual-EN.pdf" },
    { label: "Fanatec – Kabel und Kompatibilität (Hersteller)", url: "https://www.fanatec.com/us/en/explorer/products/racing-wheels-wheel-bases/cables-for-fanatec-hardware/" },
    { label: "Fanatec Support – CSL Pedals Load Cell Kit und CSL Elite Pedals V2", url: "https://help.fanatec.com/hc/en-us/articles/30312135561105-Is-the-CSL-Pedals-Load-Cell-Kit-compatible-with-the-CSL-Elite-Pedals-V2" },
    { label: "Logitech G – RS Pedals (Hersteller)", url: "https://www.logitechg.com/en-us/shop/p/rs-pedals" },
    { label: "Logitech – RS Pedals Setup-Guide (PDF)", url: "https://www.logitech.com/content/dam/support/simulation/rs-pedals/rs-pedals-setup-guide-emea.pdf" },
    { label: "Logitech – Blog zu RS50 und RS Pedals", url: "https://www.logitech.com/blog/2025/09/17/the-breakthrough-every-racer-deserves-the-logitech-g-rs50-and-rs-pedals/" },
    { label: "Logitech G – Racing Adapter (Hersteller)", url: "https://www.logitechg.com/en-us/shop/p/racing-adapter" },
    { label: "Logitech G – PRO Racing Pedals (Hersteller)", url: "https://www.logitechg.com/en-us/shop/p/pro-racing-pedals" },
    { label: "Logitech – Pressemitteilung PRO Racing Wheel und Pedals (2022)", url: "https://ir.logitech.com/press-releases/press-release-details/2022/Logitech-G-Launches-Professional-Grade-PRO-Racing-Wheel-and-Pedals/default.aspx" },
    { label: "Thrustmaster – Raceline Pedals III (eShop)", url: "https://eshop.thrustmaster.com/en_us/raceline-pedals-iii.html" },
    { label: "Thrustmaster – Raceline Pedals III Handbuch (PDF)", url: "https://ts.thrustmaster.com/download/accessories/Manuals/Raceline_Pedals/III/Raceline_Pedals_III_User-Manual.pdf" },
    { label: "Thrustmaster – Raceline LC Upgrade (Hersteller)", url: "https://www.thrustmaster.com/products/raceline-lc-upgrade/" },
    { label: "Thrustmaster Support – Raceline LC anschließen", url: "https://support.thrustmaster.com/en/kb/1888-en/" },
    { label: "Thrustmaster – Raceline Pedals III LC (eShop)", url: "https://eshop.thrustmaster.com/en_us/raceline-pedals-iii-lc.html" },
    { label: "MOZA Racing – SR-P Pedals (Hersteller)", url: "https://mozaracing.com/pages/srp-pedals" },
    { label: "MOZA Support – Wheel Base FAQs", url: "https://support.mozaracing.com/en/support/solutions/articles/70000627811-wheel-base-faqs" },
    { label: "PC Gamer – Logitech G PRO Racing Wheel und Pedals Review (englisch)", url: "https://pcgamer.com/logitech-g-pro-racing-wheel-pedals-review" },
    { label: "PC Games Hardware – Logitech G Pro DD11 Wheel Base + Racing Pedals (online, 2025)", url: "https://www.pcgameshardware.de/Lenkraeder-Hardware-255542/Tests/Logitech-G-Pro-DD11-Wheel-Base-Racing-Pedals-Nordschleife-1483260/" },
    { label: "CGMagazine – Logitech RS50 System und RS Pedals Review (englisch)", url: "https://www.cgmagonline.com/review/hardware/logitech-rs50-system-and-rs-pedals/" },
    { label: "racinggames.gg – Fanatec CSL Elite Pedals V2 Review (englisch)", url: "https://racinggames.gg/article/fanatec-csl-elite-pedals-v2-review-precision-under-your-feet" },
    { label: "Traxion – MOZA SR-P Pedals Review (englisch)", url: "https://traxion.gg/moza-sr-p-pedals-review-range-extenders/" },
    { label: "GTPlanet – Fanatec Podium Pedals Sport Now Available (16.10.2026, englisch)", url: "https://www.gtplanet.net/fanatec-podium-pedals-sport-now-available-5-off-with-gtplanet-code-20261016/" },
  ],

  related: [
    { slug: "bestes-direct-drive-lenkrad", text: "Direct-Drive-Lenkräder." },
    { slug: "sim-racing-cockpits", text: "Sim-Racing-Cockpits." },
    { slug: "bester-sim-racing-shifter", text: "Sim-Racing-Shifter." },
    { slug: "gaming-stuehle", text: "Gaming-Stühle." },
    { slug: "vr-gaming", text: "VR-Gaming." },
    { slug: "beste-ruderpedale-flugsimulator", text: "Ruderpedale für den Flugsimulator." },
    { slug: "bester-bass-shaker-sim-racing", text: "Bass-Shaker für die Pedalplatte." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
