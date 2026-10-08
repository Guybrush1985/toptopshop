// Kategorie: Mesh-Funk mit LoRa / Meshtastic (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "mesh-funk-lora",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "Meshtastic & LoRa",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Meshtastic-Geräte 2026 – Funk ohne Netz",
  metaDescription:
    "Die 3 besten Meshtastic-Geräte für LoRa-Mesh-Funk 2026: SenseCAP T1000-E, Heltec V3 und LILYGO T-Deck Plus – plus Reichweite, 868-MHz-Regeln und Einrichtung.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "Die 3 besten Meshtastic-Geräte 2026",
  lead:
    "Meshtastic verwandelt kleine LoRa-Funkgeräte in ein eigenes Textnachrichten-Netz: ohne Mobilfunk, ohne Internet, ohne Abo. Jedes Gerät leitet Nachrichten weiter – so kann die Reichweite mit jedem Teilnehmer wachsen. Mit diesen drei Geräten gelingt nach unserer Einschätzung der Einstieg.",
  answer:
    "Für den Einstieg ist der [**SenseCAP T1000-E**](produkt:1) die beste Wahl: scheckkartengroß, mit GPS, laut Hersteller IP65 und ab Werk für Meshtastic gedacht. Am günstigsten – und mit externer Antenne – ist das [**Heltec WiFi LoRa 32 V3 mit Gehäuse und Akku**](produkt:2); ganz ohne Smartphone funktioniert der [**LILYGO T-Deck Plus**](produkt:3) mit eigener Tastatur und Display.",

  top3Title: "Unsere Top 3 Meshtastic-Geräte",
  top3Intro:
    "Drei Bauformen für unterschiedliche Ansprüche: ein fertiges Gerät im Taschenformat, eine günstige Platine im Gehäuse und ein eigenständiger Messenger mit Tastatur. Alle gibt es in der 868-MHz-Version für das in Europa allgemein zugeteilte SRD-Band (Kurzstreckenfunk), das unter Auflagen ohne Einzelgenehmigung genutzt werden darf.",
  comparisonTitle: "Die 3 besten Meshtastic-Geräte im Vergleich",

  criteria: [
    { key: "einstieg", label: "Einfacher Einstieg", weight: 0.25, description: "Gehäuse, Lieferumfang, Firmware ab Werk, Einrichtung über die App." },
    { key: "reichweite", label: "Funk & Antenne", weight: 0.25, description: "LoRa-Chip, Antenne (intern/extern), Erfahrungen zur Reichweite." },
    { key: "autark", label: "Unabhängigkeit", weight: 0.25, description: "Bedienung ohne Smartphone, Akku, GPS, Robustheit." },
    { key: "preis", label: "Preis", weight: 0.25, description: "Preis pro Gerät – ein Netz braucht mehrere." },
  ],

  method:
    "Grundlage sind die Meshtastic-Dokumentation zu Funkeinstellungen und Regionen, Herstellerangaben zu Chip, Antenne und Akku sowie Erfahrungsberichte von Nutzern. Eigene Tests oder Reichweitenmessungen führen wir nicht durch; die Bewertungen sind redaktionelle Einschätzungen. Wir empfehlen ausschließlich Geräte, die bei Amazon in der 868-MHz-Version erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Bester Einstieg",
      name: "SenseCAP Card Tracker T1000-E for Meshtastic",
      brand: "Seeed Studio",
      variant: "LoRa + GPS, IP65",
      visual: { kind: "handheld", tone: "forest" },
      priceTier: 1,
      ratings: { einstieg: 9.0, reichweite: 7.0, autark: 7.5, preis: 8.5 },
      bestFor: "Jedes Familienmitglied, Schlüsselbund",
      verdict:
        "Aus unserer Sicht das einfachste Meshtastic-Gerät: kaum größer als eine Kreditkarte, laut Hersteller wasser- und staubgeschützt (IP65), mit GPS und ab Werk für Meshtastic vorgesehen. Die Region wird in der App auf EU 868 gestellt – fertig.",
      features: [
        "Semtech LR1110 (863–928 MHz), Nordic nRF52840, GPS-Modul AG3335 (Herstellerangabe)",
        "Laut Nutzerbericht 700-mAh-Akku, rund 85 × 55 × 6,5 mm und 32 g, IP65",
        "Laden und Firmware-Update über magnetische Pogo-Pins (Herstellerangabe)",
      ],
      pros: ["Sehr kompakt, laut Hersteller IP65", "GPS für Positionsteilen", "Einfachster Start mit der App"],
      cons: ["Interne Antenne – weniger Reichweite als externe", "Bedienung nur über Smartphone", "GPS-Updates laut Nutzern eher langsam"],
      specs: { bauform: "Karte, fertig im Gehäuse", antenne: "intern", gps: "ja", bedienung: "Smartphone-App", akku: "ca. 700 mAh" },
      asin: "B0DJ6KGXKB",
      query: "SenseCAP T1000-E Meshtastic",
    },
    {
      rank: 2,
      label: "Günstigste Wahl",
      name: "Heltec WiFi LoRa 32 V3 mit Gehäuse und Akku",
      brand: "Heltec",
      variant: "868 MHz, OLED, 800 mAh",
      visual: { kind: "handheld", tone: "mint" },
      priceTier: 1,
      ratings: { einstieg: 7.0, reichweite: 8.0, autark: 6.5, preis: 9.5 },
      bestFor: "Mehrere Geräte und feste Knoten",
      verdict:
        "In der Meshtastic-Community weit verbreitete Hardware: ESP32-S3 mit SX1262-Funkchip, kleinem OLED-Display und externer Antenne. Im Kunststoffgehäuse mit 800-mAh-Akku (Anbieterangabe) ein günstiges Komplettgerät – gut geeignet, um gleich mehrere Knoten aufzubauen.",
      features: [
        "ESP32-S3 und LoRa-Chip SX1262, OLED-Display, USB-C (Herstellerangabe)",
        "Externe Antenne, laut Anbieter Kunststoffgehäuse und 800-mAh-Akku im Set",
        "Kompatibel mit Meshtastic und LoRaWAN (Firmware ggf. über den Web-Flasher aufspielen)",
      ],
      pros: ["Sehr günstig", "Externe Antenne austauschbar", "Große Community"],
      cons: ["Firmware muss oft selbst aufgespielt werden", "Kein GPS", "Gehäuse nicht wasserdicht"],
      specs: { bauform: "Platine im Gehäuse", antenne: "extern", gps: "nein", bedienung: "Smartphone-App, kleines OLED", akku: "800 mAh" },
      asin: "B0FJXNTH8Y",
      query: "Heltec WiFi LoRa 32 V3 Gehäuse Akku 868",
    },
    {
      rank: 3,
      label: "Ohne Smartphone",
      name: "LILYGO T-Deck Plus 868 MHz",
      brand: "LILYGO",
      variant: "Tastatur, 2,8-Zoll-Display, GPS",
      visual: { kind: "handheld", tone: "green" },
      priceTier: 2,
      ratings: { einstieg: 6.5, reichweite: 8.0, autark: 9.5, preis: 7.0 },
      bestFor: "Wenn das Handy leer ist",
      verdict:
        "Ein eigenständiger Mini-Messenger: laut Hersteller Mini-Tastatur, 2,8-Zoll-Display, GPS und LoRa in einem Gehäuse. Mit passender Firmware lassen sich Nachrichten tippen und lesen, ohne dass ein Smartphone gebraucht wird.",
      features: [
        "ESP32-S3, LoRa-Chip SX1262, GPS, 2,8-Zoll-Display und Tastatur (Herstellerangabe)",
        "Versionen mit integrierter oder externer Antenne; Meshtastic- oder MeshCore-Firmware je nach Angebot",
        "ABS-Gehäuse mit Akku (Herstellerangabe)",
      ],
      pros: ["Ohne Smartphone nutzbar (je nach Firmware)", "Großes Display", "GPS integriert"],
      cons: ["Firmware-Version beim Kauf prüfen", "Kein genauer Akkustand laut Anbieter", "Teurer als einfache Knoten"],
      specs: { bauform: "Handgerät mit Tastatur", antenne: "intern oder extern (je nach Version)", gps: "ja", bedienung: "Tastatur und Display", akku: "integriert" },
      asin: "B0FBGXF4T6",
      query: "LILYGO T-Deck Plus 868MHz",
    },
  ],

  comparison: [
    { key: "bauform", label: "Bauform" },
    { key: "antenne", label: "Antenne" },
    { key: "gps", label: "GPS" },
    { key: "bedienung", label: "Bedienung" },
    { key: "akku", label: "Akku" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-meshtastic-geraete-lora-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Meshtastic-Geräte 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Meshtastic-Geräte 2026 in den Kriterien Einstieg, Funk und Antenne, Unabhängigkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Der T1000-E ist am einfachsten, der T-Deck Plus am unabhängigsten.",
    },
    steps: {
      kind: "steps",
      file: "meshtastic-einrichten-anleitung.svg",
      title: "Meshtastic in fünf Schritten einrichten",
      subtitle: "Vom Auspacken zum eigenen Notfallnetz",
      alt: "Infografik: Meshtastic einrichten – Antenne anschließen, Firmware prüfen, App koppeln, Region EU 868 wählen, privaten Kanal teilen",
      caption: "Ohne angeschlossene Antenne nie senden – das kann den Funkchip beschädigen.",
      steps: [
        { title: "Antenne anschließen", text: "Vor dem ersten Einschalten – Senden ohne Antenne kann den Funkchip beschädigen." },
        { title: "Firmware prüfen", text: "Über den Meshtastic-Web-Flasher die aktuelle Version aufspielen, falls nötig." },
        { title: "App koppeln", text: "Meshtastic-App installieren und per Bluetooth verbinden." },
        { title: "Region EU 868 wählen", text: "Damit Frequenz, Leistung und Sendezeit den europäischen Regeln entsprechen." },
        { title: "Privaten Kanal teilen", text: "Eigenen Kanal mit Schlüssel anlegen und per QR-Code an Familie und Nachbarn geben." },
      ],
    },
  },

  editorial: {
    title: "Meshtastic: Textnachrichten ohne Netz",
    intro:
      "Wie LoRa-Mesh-Funk funktioniert, welche Reichweite realistisch ist und welche Regeln für das 868-MHz-Band gelten.",
    sections: [
      {
        id: "bestes-meshtastic-geraet",
        h2: "Welches Meshtastic-Gerät ist das beste?",
        blocks: [
          { quick: "Für den Einstieg ist der [SenseCAP T1000-E](produkt:1) am einfachsten. Am günstigsten ist der [Heltec V3](produkt:2) mit externer Antenne, ohne Smartphone funktioniert der [LILYGO T-Deck Plus](produkt:3)." },
          { first: "Meshtastic ist eine quelloffene Software für kleine Funkgeräte mit LoRa-Technik. LoRa steht für „Long Range“: Das Funkverfahren überträgt kleine Datenmengen mit sehr wenig Energie über große Entfernungen. Meshtastic nutzt das für Textnachrichten und Positionen – und macht jedes Gerät zu einem Knoten, der Nachrichten anderer Teilnehmer weiterleitet. So entsteht ein Netz, das ohne Mobilfunk, Internet und Strom aus der Steckdose auskommt." },
          { p: "Bedient wird Meshtastic meist über eine App auf dem Smartphone, das per Bluetooth mit dem Funkgerät verbunden ist. Das Smartphone braucht dafür weder SIM-Karte noch Netz. Nachrichten in einem privaten Kanal sind verschlüsselt. In vielen Regionen gibt es bereits öffentliche Netze von Enthusiasten, über die Nachrichten auch weitere Strecken zurücklegen." },
          { p: "Unsere Empfehlung für den Einstieg ist der SenseCAP T1000-E, weil er fertig im robusten Gehäuse kommt, GPS hat und sich in Minuten einrichten lässt. Für ein Familiennetz braucht es mindestens zwei Geräte; ein dritter Knoten, fest an einem erhöhten Punkt mit externer Antenne, kann die Reichweite deutlich verbessern – dafür eignet sich der günstige Heltec V3." },
          { figure: "scores" },
          { callout: { title: "Kein Notrufsystem", warn: true, text: "Meshtastic ist ein Hobby- und Community-Netz. Es gibt keine Leitstelle und keine Garantie, dass eine Nachricht ankommt. Für echte Notrufe ohne Mobilfunk ist ein Satelliten-Messenger mit SOS die richtige Wahl." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Kaufe nur die 868-MHz-Version für Europa, achte auf einen SX1262- oder LR11xx-Funkchip, eine gute Antenne, Gehäuse und Akku – und darauf, ob Meshtastic schon installiert ist." },
          {
            table: {
              caption: "Regeln für Meshtastic in Europa (Region EU 868)",
              head: ["Parameter", "Wert laut Meshtastic-Dokumentation"],
              rows: [
                ["**Frequenzbereich**", "869,40 bis 869,65 MHz (innerhalb des SRD-Bands 863–870 MHz)"],
                ["**Max. Sendeleistung**", "+27 dBm ERP (500 mW)"],
                ["**Sendezeit (Duty Cycle)**", "10 %, gemessen über ein rollierendes Stundenfenster"],
                ["**Lizenz**", "in der Regel keine Einzelzuteilung nötig (Allgemeinzuteilung der Bundesnetzagentur), solange die Grenzen eingehalten werden – verantwortlich ist der Betreiber"],
              ],
            },
          },
          { h3: "Antenne und Standort" },
          { p: "Die Reichweite hängt weniger vom Gerät als von Antenne und Standort ab. Mit Sichtverbindung zwischen zwei erhöhten Punkten sind viele Kilometer möglich; in dichter Bebauung oft nur einige hundert Meter bis wenige Kilometer. Externe Antennen bringen oft deutlich mehr als eingebaute. Ein fester Knoten auf dem Dachboden oder am Balkon verbindet die tragbaren Geräte der Familie." },
          { callout: { title: "Funkrecht: Grenzwerte einhalten", warn: true, text: "Die erlaubte Sendeleistung bezieht sich auf die abgestrahlte Leistung (ERP) – also inklusive Antennengewinn. Antennen mit hohem Gewinn oder zusätzliche Verstärker können die Grenzwerte überschreiten; dann die Sendeleistung in der App senken und keine Verstärker einsetzen. Nur Geräte und Firmware für die Region EU 868 nutzen und auf CE-Kennzeichnung achten; bei Platinen und Selbstbau-Kits liegt die Verantwortung für einen konformen Betrieb beim Betreiber. Die geltenden Regeln stehen in der Allgemeinzuteilung der Bundesnetzagentur – im Zweifel dort nachlesen. Antennen auf Dach oder Balkon sicher befestigen; Arbeiten in der Höhe und Fragen zum Blitzschutz besser Fachleuten überlassen." } },
          { h3: "Firmware" },
          { p: "Manche Geräte kommen mit Meshtastic, andere mit Hersteller-Firmware oder Alternativen wie MeshCore. Über den Web-Flasher auf meshtastic.org lässt sich die passende Firmware im Browser installieren. Prüfe vor dem Kauf, welche Version vorinstalliert ist." },
          { h3: "Strom" },
          { p: "LoRa-Geräte sind in der Regel sehr sparsam. Tragbare Geräte halten je nach Einstellung einen bis mehrere Tage, feste Knoten lassen sich mit einer kleinen Powerbank oder einem Solarpanel dauerhaft betreiben." },
        ],
      },
      {
        id: "welches-passt",
        h2: "Welches Gerät passt zu wem?",
        blocks: [
          { quick: "Für Familienmitglieder ohne Technikinteresse: T1000-E. Für feste Knoten und günstige Netze: Heltec V3. Für alle, die unabhängig vom Smartphone sein wollen: T-Deck Plus." },
          {
            cards: [
              { title: "Einfach & robust", text: "Kartenformat, GPS, IP65: SenseCAP T1000-E.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Günstiges Netz", text: "Mehrere Knoten mit externer Antenne: Heltec V3.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Ohne Handy", text: "Tastatur und Display: LILYGO T-Deck Plus.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Weitere Bauformen", text: "E-Paper, Selbstbau und fertige Knoten in der Top 5.", link: { href: "#top5-bauform", label: "Zur Top 5" } },
              { title: "Weltweit mit SOS", text: "Satelliten-Messenger mit Notfallleitstelle.", link: { href: "/krisenvorsorge/kommunikation-technik/satelliten-kommunikation/", label: "Satelliten-Messenger" } },
              { title: "Sprechen statt tippen", text: "Lizenzfreie PMR-Funkgeräte für die Familie.", link: { href: "/krisenvorsorge/kommunikation-technik/funkgeraete-pmr/", label: "PMR-Funkgeräte" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-bauform",
    h2: "Die 5 besten Alternativen – nach Bauform",
    intro:
      "Meshtastic läuft auf vielen Geräten. Diese fünf bieten E-Paper, starke GPS-Module, Selbstbau-Optionen oder ein besonders günstiges Doppelpack.",
    items: [
      { name: "LILYGO T-Echo 868 MHz", for: "E-Paper, sehr sparsam", text: "nRF52840 mit SX1262, GPS und 1,54-Zoll-E-Paper-Display – gut ablesbar und stromsparend; Nutzer empfehlen eine bessere externe Antenne.", asin: "B0BN3H6GGS", query: "LILYGO T-Echo 868MHz Meshtastic" },
      { name: "LILYGO T-Beam Supreme 868 MHz", for: "Starkes GPS", text: "ESP32-S3 mit u-blox-M10-GPS und OLED – beliebt für Tracking und als mobiler Knoten.", asin: "B0CWRDHBHY", query: "LILYGO T-Beam Supreme 868" },
      { name: "ELECROW ThinkNode M5", for: "Fertiger Knoten mit GPS", text: "LoRa-Funkmodul mit ESP32-S3 und GPS im Gehäuse – eine Alternative zum T1000-E mit mehr Ausstattung.", asin: "B0FPLWZPY1", query: "ELECROW ThinkNode M5 Meshtastic" },
      { name: "Seeed XIAO ESP32S3 + Wio-SX1262 Kit 868 MHz", for: "Selbstbau, winzig", text: "Kleinstes Entwicklungs-Set für eigene Knoten, etwa im Gartenhaus mit Solarpanel.", asin: "B0GCDQPJY6", query: "Seeed XIAO ESP32S3 SX1262 868MHz Meshtastic" },
      { name: "ESP32 LoRa V3 Doppelpack mit Akku und Gehäuse", for: "Zwei Geräte auf einmal", text: "Laut Anbieter zwei V3-Platinen mit 868-MHz-Antenne, 1.100-mAh-Akku und Schutzgehäuse – günstiger Start für zwei Personen; CE-Kennzeichnung im Angebot prüfen.", asin: "B0F1CXG94J", query: "ESP32 LoRa V3 2er Pack Akku Gehäuse 868MHz" },
    ],
  },

  guide: {
    sections: [
      {
        id: "netz-aufbauen",
        h2: "Wie baut man ein Meshtastic-Netz für Familie und Nachbarschaft auf?",
        blocks: [
          { quick: "Starte mit zwei bis drei Geräten, setze einen festen Knoten an einen erhöhten Punkt, lege einen privaten Kanal an und teste regelmäßig, ob Nachrichten zwischen den Wohnungen ankommen." },
          { p: "Ein Mesh-Netz lebt von Knoten. Jedes Gerät leitet Nachrichten anderer weiter – standardmäßig über wenige Sprünge. Ein fester Knoten mit externer Antenne am Dachfenster verbindet tragbare Geräte, die in Kellern oder Innenräumen liegen. In vielen Städten gibt es bereits Community-Netze; über den öffentlichen Standardkanal findest du heraus, ob in deiner Nähe andere Knoten erreichbar sind." },
          { figure: "steps" },
          { h3: "Tipps für den Betrieb" },
          {
            list: [
              "**Privater Kanal für die Familie** – mit eigenem Schlüssel, per QR-Code geteilt.",
              "**Feste Zeiten vereinbaren**, zu denen alle ihre Geräte einschalten, wenn Akku knapp ist.",
              "**Kurze Nachrichten** – die Sendezeit ist begrenzt, und lange Texte belasten das Netz.",
              "**Regelmäßig testen**, etwa einmal im Monat eine Nachricht von Wohnung zu Wohnung.",
              "**Geräte laden** – mit Powerbank oder kleinem Solarpanel auch im Blackout.",
            ],
          },
          {
            facts: [
              { value: "868 MHz", label: "Frequenzbereich für LoRa-Kurzstreckenfunk (SRD) in Europa" },
              { value: "500 mW", label: "maximale Sendeleistung (ERP) in der Region EU 868 laut Meshtastic-Dokumentation" },
              { value: "10 %", label: "erlaubte Sendezeit (Duty Cycle) im Meshtastic-Band laut Dokumentation" },
            ],
          },
          { h3: "Was Meshtastic nicht kann" },
          { p: "Meshtastic überträgt Text und Positionen, keine Sprache und keine Bilder. Nachrichten können verzögert oder gar nicht ankommen, wenn kein Weg durch das Netz besteht. Für Sprache in der Nachbarschaft sind PMR-Funkgeräte besser, für den Notruf ein Satelliten-Messenger." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Was ist Meshtastic?", a: "Meshtastic ist eine quelloffene Software, die kleine LoRa-Funkgeräte zu einem Mesh-Netz für Textnachrichten verbindet. Jedes Gerät leitet Nachrichten weiter. Es braucht weder Mobilfunk noch Internet und kein Abo." },
    { q: "Ist Meshtastic in Deutschland legal?", a: "In der Regel ja: Für das 868-MHz-SRD-Band gilt eine Allgemeinzuteilung der Bundesnetzagentur, sodass keine Einzellizenz nötig ist – solange Frequenz, Sendeleistung und Sendezeit eingehalten werden und die Geräte konform sind. Laut Meshtastic-Dokumentation stellt die Region EU 868 die Werte automatisch ein: bis +27 dBm ERP und 10 Prozent Duty Cycle im Bereich 869,40 bis 869,65 MHz. Verantwortlich für die Einhaltung ist der Betreiber; maßgeblich sind die aktuellen Vorgaben der Bundesnetzagentur. Dies ist keine Rechtsberatung." },
    { q: "Wie weit reicht Meshtastic?", a: "Das hängt stark von Antenne und Standort ab. In der Stadt sind einige hundert Meter bis wenige Kilometer typisch, mit Sichtverbindung zwischen erhöhten Punkten deutlich mehr. Jeder weitere Knoten im Netz kann die Reichweite vergrößern." },
    { q: "Brauche ich für Meshtastic ein Smartphone?", a: "Die meisten Geräte werden per Bluetooth über die Meshtastic-App bedient. Das Smartphone braucht kein Netz. Geräte mit Tastatur wie der LILYGO T-Deck Plus funktionieren mit passender Firmware ganz ohne Smartphone." },
    { q: "Welches Meshtastic-Gerät ist für Anfänger am besten?", a: "Nach unserer Einschätzung der SenseCAP T1000-E: fertig im robusten Gehäuse, mit GPS und Akku, und schnell über die App eingerichtet." },
    { q: "Ist Meshtastic verschlüsselt?", a: "Nachrichten in privaten Kanälen werden mit einem Kanalschlüssel verschlüsselt. Wer den Schlüssel kennt, kann mitlesen – teile ihn nur mit Personen, denen du vertraust." },
  ],

  sources: [
    { label: "Meshtastic: Radio Settings (Regionen, Leistung, Duty Cycle)", url: "https://meshtastic.org/docs/overview/radio-settings/" },
    { label: "openelab: Meshtastic-Anleitung – LoRa-Konfiguration", url: "https://openelab.io/de/blogs/getting-started/meshtastic-guide-meshtastic-lora-configuration-1" },
    { label: "Bundesnetzagentur: Frequenzen und Allgemeinzuteilungen", url: "https://www.bundesnetzagentur.de/" },
  ],

  related: [
    { slug: "satelliten-kommunikation", text: "Weltweit per Satellit mit SOS." },
    { slug: "funkgeraete-pmr", text: "Sprechfunk ohne Lizenz für die Familie." },
    { slug: "handys-powerbanks", text: "Strom für Handy und Funkgeräte." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
