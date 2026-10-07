// Kategorie: Satelliten-Kommunikation (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "satelliten-kommunikation",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "Satelliten-Messenger",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Satelliten-Messenger mit SOS 2026",
  metaDescription:
    "Die 3 besten Satelliten-Messenger und SOS-Geräte 2026: Garmin inReach Messenger Plus, ZOLEO und inReach Mini 3 Plus – plus Abokosten, Iridium-Netz und Notruf ohne Mobilfunk.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "Die 3 besten Satelliten-Messenger mit SOS 2026",
  lead:
    "Wenn Mobilfunk und Internet ausfallen, bleibt der Himmel: Satelliten-Messenger senden Textnachrichten und Notrufe über das Iridium-Netz – weltweit und unabhängig von Funkmasten. Diese drei Geräte sind die beste Wahl.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Garmin inReach Messenger Plus**](produkt:1): SOS an eine rund um die Uhr besetzte Rettungsleitstelle, Text-, Foto- und Sprachnachrichten und bis zu 25 Tage Akku. Günstiger in Gerät und Abo ist der [**ZOLEO**](produkt:2); der [**Garmin inReach Mini 3 Plus**](produkt:3) bietet ein Farb-Touchdisplay und funktioniert auch ohne Handy.",

  top3Title: "Unsere Top 3 Satelliten-Messenger",
  top3Intro:
    "Alle drei nutzen das Iridium-Satellitennetz, das die ganze Erde abdeckt, und schicken einen SOS-Notruf an eine rund um die Uhr besetzte Leitstelle. Für Nachrichten und SOS ist bei allen ein Abo nötig.",
  comparisonTitle: "Die 3 besten Satelliten-Messenger im Vergleich",

  criteria: [
    { key: "notruf", label: "Notruf & Zuverlässigkeit", weight: 0.35, description: "SOS-Funktion, Leitstelle, Satellitennetz, Robustheit des Geräts." },
    { key: "kommunikation", label: "Kommunikation", weight: 0.25, description: "Nachrichtenlänge, Fotos, Sprache, Bedienung mit und ohne Smartphone." },
    { key: "alltag", label: "Akku & Alltag", weight: 0.2, description: "Akkulaufzeit, Gewicht, Schutzart, Laden." },
    { key: "kosten", label: "Kosten", weight: 0.2, description: "Gerätepreis und laufende Abokosten." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Satellitennetz, SOS-Leitstelle, Akkulaufzeit und Funktionen, Angaben zu Abomodellen sowie Kundenerfahrungen. Unabhängige Tests deutscher Prüfinstitute zu Satelliten-Messengern haben wir nicht gefunden. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Garmin inReach Messenger Plus",
      brand: "Garmin",
      variant: "Iridium, Foto- und Sprachnachrichten",
      visual: { kind: "handheld", tone: "forest" },
      priceTier: 3,
      ratings: { notruf: 9.5, kommunikation: 9.0, alltag: 9.0, kosten: 6.5 },
      bestFor: "Familien-Notfallkontakt ohne Netz",
      verdict:
        "Der vielseitigste Messenger: SOS an die Garmin-Leitstelle IERCC, Nachrichten bis 1.600 Zeichen, Fotos und 30-Sekunden-Sprachnachrichten – mit einer Akkulaufzeit von bis zu 25 Tagen.",
      features: [
        "Satellitenkommunikation über das Iridium-Netz, SOS an die rund um die Uhr besetzte Garmin IERCC",
        "Text bis 1.600 Zeichen, Fotos und 30-Sekunden-Sprachnachrichten über die Garmin-Messenger-App",
        "Bis zu 25 Tage Akkulaufzeit laut Anbieter",
      ],
      pros: ["Fotos und Sprache per Satellit", "Sehr lange Akkulaufzeit", "Etablierte Notfall-Leitstelle"],
      cons: ["Abo nötig", "Volle Funktionen nur, wenn Empfänger die Garmin-App nutzt", "Teurer als ZOLEO"],
      specs: { netz: "Iridium", sos: "Garmin IERCC, 24/7", nachrichten: "Text, Foto, Sprache", akku: "bis 25 Tage", bedienung: "mit Smartphone-App, Basisfunktionen am Gerät" },
      asin: "B0DFHNGDGM",
      query: "Garmin inReach Messenger Plus",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "ZOLEO Satelliten-Kommunikator",
      brand: "ZOLEO",
      variant: "Iridium, eigene Nummer",
      visual: { kind: "handheld", tone: "mint" },
      priceTier: 2,
      ratings: { notruf: 9.0, kommunikation: 8.0, alltag: 8.5, kosten: 8.0 },
      bestFor: "Günstiger Einstieg mit eigener SMS-Nummer",
      verdict:
        "Robust, günstig und mit eigener SMS-Nummer und E-Mail-Adresse: ZOLEO wählt automatisch das günstigste Netz – WLAN, Mobilfunk oder Satellit – und schickt im Notfall einen SOS mit Position.",
      features: [
        "Iridium-Satellitennetz, automatische Wahl zwischen Satellit, Mobilfunk und WLAN",
        "Eigene SMS-Nummer und E-Mail-Adresse, Nachrichten über 900 Zeichen (App zu App)",
        "IP68, MIL-STD 810G, laut Hersteller über 200 Stunden Akku, 150 g",
      ],
      pros: ["Günstig in Gerät und Abo", "Sehr robust", "Eigene Rufnummer für SMS"],
      cons: ["Ohne Smartphone nur Check-in und SOS", "App laut Kundenberichten nicht ganz intuitiv", "Automatische Standortfreigabe kostet extra"],
      specs: { netz: "Iridium", sos: "24/7-Notfalldienst", nachrichten: "Text, E-Mail, Check-in", akku: "über 200 Stunden", bedienung: "mit Smartphone-App" },
      asin: "B07X59RH7T",
      query: "ZOLEO Satelliten-Kommunikator",
    },
    {
      rank: 3,
      label: "Ohne Handy nutzbar",
      name: "Garmin inReach Mini 3 Plus",
      brand: "Garmin",
      variant: "Farb-Touchdisplay, Sprachnachrichten",
      visual: { kind: "handheld", tone: "green" },
      priceTier: 3,
      ratings: { notruf: 9.5, kommunikation: 8.5, alltag: 8.5, kosten: 5.5 },
      bestFor: "Wenn das Handy ausfällt",
      verdict:
        "Das kompakteste Gerät mit eigenem Farb-Touchdisplay: Nachrichten und SOS funktionieren auch, wenn das Smartphone leer oder kaputt ist. Ideal als unabhängiges Notfallgerät.",
      features: [
        "1,9-Zoll-Farb-Touchdisplay, Bedienung ohne Smartphone",
        "SOS rund um die Uhr, Sprachnachrichten ohne Mobilfunk (Abo nötig)",
        "Laut Garmin bis zu 350 Stunden Akku bei 10-Minuten-Tracking, Schutzart IP67; Fotos über die Messenger-App",
      ],
      pros: ["Unabhängig vom Smartphone", "Sehr kompakt", "Sprachnachrichten"],
      cons: ["Teuerstes Gerät im Vergleich", "Kürzere Akkulaufzeit als der Messenger Plus (laut Anbieter)", "Abo nötig"],
      specs: { netz: "Iridium", sos: "Garmin IERCC, 24/7", nachrichten: "Text, Sprache", akku: "bis 350 h (10-min-Tracking)", bedienung: "eigenes Touchdisplay" },
      asin: "B0G4RST8LV",
      query: "Garmin inReach Mini 3 Plus",
    },
  ],

  comparison: [
    { key: "netz", label: "Satellitennetz" },
    { key: "sos", label: "SOS" },
    { key: "nachrichten", label: "Nachrichten" },
    { key: "akku", label: "Akku" },
    { key: "bedienung", label: "Bedienung" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-satelliten-messenger-sos-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Satelliten-Messenger mit SOS 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Satelliten-Messenger 2026 in den Kriterien Notruf, Kommunikation, Akku und Kosten",
      caption: "Unsere Bewertung je Kriterium. Der Messenger Plus ist am vielseitigsten, ZOLEO am günstigsten.",
    },
    steps: {
      kind: "steps",
      file: "satelliten-messenger-einrichten-notfallplan-anleitung.svg",
      title: "Satelliten-Messenger einrichten",
      subtitle: "Damit er im Ernstfall sofort funktioniert",
      alt: "Infografik: Satelliten-Messenger einrichten – Abo wählen, Notfallkontakte hinterlegen, Vorlagen anlegen, unter freiem Himmel testen, geladen griffbereit lagern",
      caption: "Ein Messenger ohne aktives Abo und ohne Test ist im Ernstfall nutzlos.",
      steps: [
        { title: "Passendes Abo wählen", text: "Viele Anbieter haben flexible Monatstarife – vor einer Krise oder Reise aktivieren." },
        { title: "Notfallkontakte hinterlegen", text: "Familie, Nachbarn und eine Person außerhalb der Region." },
        { title: "Vorlagen anlegen", text: "„Alles gut, wir sind zu Hause“ oder „Brauchen Hilfe“ – mit einem Klick gesendet." },
        { title: "Unter freiem Himmel testen", text: "Satelliten brauchen freie Sicht; in Gebäuden klappt es selten." },
        { title: "Geladen und griffbereit lagern", text: "Mit Ladekabel und Powerbank im Notfallrucksack." },
      ],
    },
  },

  editorial: {
    title: "Kommunikation über Satellit: Notruf ohne Funkmast",
    intro:
      "Wie Satelliten-Messenger funktionieren, was sie kosten und wie sie sich von Smartphones mit Satelliten-SOS unterscheiden.",
    sections: [
      {
        id: "bester-messenger",
        h2: "Welcher Satelliten-Messenger ist der beste?",
        blocks: [
          { quick: "Der [Garmin inReach Messenger Plus](produkt:1) ist die beste Wahl: SOS, Text, Fotos, Sprache und bis zu 25 Tage Akku. Günstiger ist der [ZOLEO](produkt:2); ohne Smartphone bedienbar ist der [Garmin inReach Mini 3 Plus](produkt:3)." },
          { first: "Mobilfunkmasten haben bei einem Stromausfall meist nur für kurze Zeit Notstrom. Danach fallen Telefon, SMS und mobiles Internet aus – und mit ihnen der Notruf 112 übers Handy. Satelliten-Messenger umgehen dieses Problem: Sie senden direkt zu Satelliten im Orbit, die die Nachricht zu einer Bodenstation weiterleiten. Das funktioniert überall, wo das Gerät freie Sicht zum Himmel hat." },
          { p: "Alle drei Geräte in unserer Auswahl nutzen das Iridium-Netz, das die gesamte Erde abdeckt. Ein SOS-Notruf geht an eine rund um die Uhr besetzte Leitstelle, die Rettungsdienste vor Ort alarmiert, die GPS-Position weitergibt und mit dir in Kontakt bleibt. Bei Garmin ist das die IERCC, bei ZOLEO ein eigener Notfall-Überwachungsdienst." },
          { p: "Unsere Gesamtwahl ist der Garmin inReach Messenger Plus, weil er neben Text auch Fotos und Sprachnachrichten überträgt und mit bis zu 25 Tagen die längste Akkulaufzeit hat. Für Familien heißt das: Auch wenn die Mobilfunknetze tagelang ausfallen, kann man sich gegenseitig auf dem Laufenden halten – vorausgesetzt, beide Seiten haben ein Gerät oder die Gegenseite noch Internet." },
          { figure: "scores" },
          { callout: { title: "Abo nicht vergessen", warn: true, text: "Ohne aktives Satellitenabo funktionieren weder Nachrichten noch SOS. Viele Anbieter haben flexible Monatstarife, die man nur bei Bedarf aktiviert – in einer plötzlichen Krise ist dafür aber oft keine Zeit mehr. Wer das Gerät zur Vorsorge kauft, sollte einen günstigen Dauertarif wählen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind das Satellitennetz (Iridium deckt die ganze Erde ab), eine 24/7-Notfallleitstelle, die Bedienung ohne Smartphone, die Akkulaufzeit und die Kosten für das Abo." },
          {
            table: {
              caption: "Satelliten-Messenger, PLB und Smartphone mit Satelliten-SOS",
              head: ["Gerät", "Nachrichten", "SOS", "Laufende Kosten"],
              rows: [
                ["**Satelliten-Messenger**", "Zwei-Wege-Text, teils Foto und Sprache", "an private Leitstelle", "Abo"],
                ["**Smartphone mit Satelliten-SOS**", "eingeschränkt, je nach Modell", "ja, je nach Land und Modell", "teils inklusive"],
                ["**Satellitentelefon**", "Telefonie und SMS", "über Notrufnummern", "Prepaid oder Vertrag"],
                ["**Mesh-Funk (Meshtastic)**", "Text in der Nachbarschaft", "nein", "keine"],
              ],
            },
          },
          { h3: "Bedienung mit und ohne Smartphone" },
          { p: "ZOLEO und der inReach Messenger Plus werden vor allem über eine App auf dem Smartphone bedient. Ist das Handy leer oder kaputt, bleiben nur Basisfunktionen am Gerät wie SOS und vordefinierte Nachrichten. Der inReach Mini 3 Plus hat ein eigenes Touchdisplay und funktioniert vollständig ohne Handy – im Notfall ein echter Vorteil." },
          { h3: "Abokosten" },
          { p: "Die Abos unterscheiden sich in Preis, Nachrichtenkontingent und Laufzeit. ZOLEO nennt Tarife ab rund 18 bis 20 Euro im Monat; die automatische Standortfreigabe kostet bei ZOLEO extra. Vergleiche vor dem Kauf die aktuellen Tarife beim Hersteller und rechne aus, ob ein Jahres- oder ein flexibles Monatsabo besser passt." },
          { h3: "Smartphone mit Satelliten-SOS" },
          { p: "Neuere iPhones und einige Android-Geräte können in manchen Ländern einen Notruf per Satellit absetzen. Das ist ein großer Fortschritt, ersetzt aber keinen Messenger: Der Funktionsumfang ist begrenzter, und das Smartphone-Akku ist in einer Krise oft das Erste, was leer wird." },
        ],
      },
      {
        id: "welcher-passt",
        h2: "Welcher Messenger passt zu wem?",
        blocks: [
          { quick: "Für Familien, die sich in einer Krise austauschen wollen, ist der Messenger Plus ideal. Wer günstig einsteigen will, nimmt ZOLEO. Wer ein vom Handy unabhängiges Notfallgerät sucht, den inReach Mini 3 Plus." },
          {
            cards: [
              { title: "Familie in Kontakt", text: "Text, Foto und Sprache per Satellit: inReach Messenger Plus.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kleines Budget", text: "Robust, eigene SMS-Nummer, günstiges Abo: ZOLEO.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Unabhängig vom Handy", text: "Eigenes Touchdisplay: inReach Mini 3 Plus.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Telefonieren per Satellit", text: "Satellitentelefone und Hotspots in der Top 5.", link: { href: "#top5-alternativen", label: "Zur Top 5" } },
              { title: "Ohne Abo, lokal", text: "Textnachrichten über Kilometer mit Meshtastic.", link: { href: "/krisenvorsorge/kommunikation-technik/mesh-funk-lora/", label: "Mesh-Funk" } },
              { title: "Informiert bleiben", text: "Behördenwarnungen über Kurbel- und Solarradio.", link: { href: "/krisenvorsorge/kommunikation-technik/notfallradios/", label: "Notfallradios" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen – von günstig bis Satellitentelefon",
    intro:
      "Wer günstiger einsteigen oder per Satellit telefonieren will, findet hier Alternativen mit anderem Schwerpunkt.",
    items: [
      { name: "Garmin inReach Messenger", for: "Günstigerer Garmin", text: "Vorgänger des Plus ohne Foto- und Sprachnachrichten, laut Anbieter bis zu 28 Tage Akku.", asin: "B0BGM2Q9QP", query: "Garmin inReach Messenger" },
      { name: "Garmin inReach Mini 2", for: "Kompakt mit Navigation", text: "Kleiner Messenger mit TracBack-Navigation, laut Anbieter bis zu 14 Tage Akku im 10-Minuten-Tracking.", asin: "B09RQZPQ1T", query: "Garmin inReach Mini 2" },
      { name: "SPOT X", for: "Globalstar-Netz mit Tastatur", text: "Zwei-Wege-Messenger mit eigener Tastatur über das Globalstar-Netz – Abdeckung vor dem Kauf prüfen.", asin: "B0F8PLVLGQ", query: "SPOT X Satelliten-Messenger" },
      { name: "Iridium Extreme mit Prepaid-SIM", for: "Telefonieren per Satellit", text: "Robustes Satellitentelefon mit 200-Minuten-Prepaid-SIM – Sprechen statt Tippen, weltweit.", asin: "B091B63T89", query: "Iridium Extreme Satellitentelefon Prepaid" },
      { name: "Iridium GO!", for: "Satelliten-Hotspot", text: "Macht das eigene Smartphone per WLAN zum Satellitentelefon und -messenger; SIM und Guthaben separat.", asin: "B01C2FW7RE", query: "Iridium GO Satelliten Hotspot" },
    ],
  },

  guide: {
    sections: [
      {
        id: "im-ernstfall",
        h2: "Wie nutzt man einen Satelliten-Messenger im Ernstfall?",
        blocks: [
          { quick: "Geh ins Freie oder an ein Fenster mit freier Sicht zum Himmel, sende vorbereitete Nachrichten, spare Akku mit längeren Tracking-Intervallen und nutze SOS nur bei echter Lebensgefahr." },
          { p: "Satellitensignale gehen schlecht durch Dächer und Wände. Für eine Nachricht reicht es meist, das Gerät einige Minuten auf ein Fensterbrett oder in den Garten zu legen. In engen Häuserschluchten oder Wäldern dauert es länger. Plane deshalb feste Zeiten, zu denen die Familie Nachrichten abruft – etwa morgens und abends." },
          { figure: "steps" },
          { h3: "Wann SOS – und wann nicht" },
          {
            list: [
              "**SOS bei Lebensgefahr:** schwere Verletzung, akute Erkrankung, eingeschlossen, Feuer – wenn 112 nicht erreichbar ist.",
              "**Kein SOS bei allgemeiner Krisenlage:** Für Informationen zur Lage sind Radio und Behördenmeldungen da.",
              "**Nach dem SOS:** Gerät eingeschaltet lassen, auf Rückfragen der Leitstelle antworten, Position nicht verlassen, wenn möglich.",
              "**Fehlalarm sofort abbrechen** und die Leitstelle informieren.",
            ],
          },
          {
            facts: [
              { value: "100 %", label: "Erdabdeckung des Iridium-Netzes" },
              { value: "25 Tage", label: "Akkulaufzeit des inReach Messenger Plus laut Anbieter" },
              { value: "1.600", label: "Zeichen pro Nachricht beim Messenger Plus" },
            ],
          },
          { h3: "Rechtliches" },
          { p: "In Deutschland ist die Nutzung von Satelliten-Messengern erlaubt. In einigen Ländern ist sie eingeschränkt oder verboten – vor Reisen die Regeln des Ziellands prüfen, wie es auch die Hersteller empfehlen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Satelliten-Messenger ist der beste?", a: "Unsere beste Gesamtwahl ist der Garmin inReach Messenger Plus mit SOS, Text-, Foto- und Sprachnachrichten und bis zu 25 Tagen Akku. Günstiger ist ZOLEO, ohne Smartphone bedienbar der Garmin inReach Mini 3 Plus." },
    { q: "Brauche ich für einen Satelliten-Messenger ein Abo?", a: "Ja. Für Nachrichten und SOS ist bei allen Geräten in unserer Auswahl ein Satellitenabo nötig. Es gibt Monats- und Jahrestarife; für die Krisenvorsorge ist ein dauerhaft aktiver Tarif sinnvoll." },
    { q: "Funktioniert ein Satelliten-Messenger im Haus?", a: "Meist nur eingeschränkt. Satelliten brauchen freie Sicht zum Himmel. Am Fenster, auf dem Balkon oder im Garten klappt es in der Regel." },
    { q: "Kann mein Smartphone per Satellit einen Notruf senden?", a: "Neuere iPhones und einige Android-Modelle bieten in bestimmten Ländern einen Notruf per Satellit an. Der Funktionsumfang ist kleiner als bei einem Messenger, und der Handy-Akku ist in einer Krise begrenzt." },
    { q: "Was passiert nach einem SOS?", a: "Die Leitstelle erhält deine Position, versucht Kontakt aufzunehmen und alarmiert die zuständigen Rettungsdienste. Sie hält bis zum Eintreffen der Hilfe den Kontakt." },
    { q: "Was ist der Unterschied zu Meshtastic?", a: "Meshtastic funkt lokal über einige Kilometer von Gerät zu Gerät, ohne Abo und ohne Satellit. Ein Satelliten-Messenger erreicht jeden Ort der Welt und eine Notfallleitstelle, kostet aber Abogebühren." },
  ],

  sources: [
    { label: "Garmin-Blog: Was macht inReach-Geräte aus?", url: "https://www.garmin.com/de-DE/blog/was-macht-inreach-geraete-von-garmin-aus/" },
    { label: "Garmin: Pressemitteilung inReach Mini 3 Plus", url: "https://www.garmin.com/de-DE/newsroom//pressreleases/garmin-inreach-mini-3-plus-kompaktes-satelliten-kommunikationsgeraet-3418259" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "mesh-funk-lora", text: "Textnachrichten ohne Netz in der Nachbarschaft." },
    { slug: "handys-powerbanks", text: "Strom für Handy und Messenger." },
    { slug: "funkgeraete-pmr", text: "Lizenzfreie Walkie-Talkies für die Familie." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
