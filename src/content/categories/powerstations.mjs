// Kategorie: Powerstations (Krisenvorsorge › Energie & Wärme)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "powerstations",
  area: "krisenvorsorge",
  group: "energie-waerme",
  navLabel: "Powerstations",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Powerstations für den Stromausfall 2026",
  metaDescription:
    "Die 3 besten Powerstations für den Stromausfall 2026: EcoFlow Delta 3 Plus, Anker SOLIX C1000, Delta Pro 3 – mit Laufzeiten für Kühlschrank, Router und Licht.",

  eyebrow: "Krisenvorsorge · Energie & Wärme",
  h1: "Die 3 besten Powerstations für den Stromausfall 2026",
  lead:
    "Eine Powerstation ist ein großer Akku mit Steckdosen: Sie hält bei einem Stromausfall Router, Handys, Licht und für einige Zeit sogar den Kühlschrank am Laufen – und lädt sich mit Solarmodulen wieder auf. Diese drei Modelle sind die beste Wahl.",
  answer:
    "Unsere beste Gesamtwahl ist die [**EcoFlow DELTA 3 Plus**](produkt:1): 1.024 Wh LiFePO4-Akku, 1.800 W Dauerleistung, USV-Funktion unter 10 ms und 1.000 W Solareingang. Das beste Preis-Leistungs-Verhältnis bietet die [**Anker SOLIX C1000**](produkt:2); wer mehrere Tage Kühlschrank und Heizungspumpe überbrücken will, nimmt die [**EcoFlow DELTA Pro 3**](produkt:3) mit 4 kWh.",

  top3Title: "Unsere Top 3 Powerstations für den Notfall",
  top3Intro:
    "Alle drei arbeiten mit langlebigen LiFePO4-Akkus und reinem Sinus an 230-Volt-Steckdosen. Sie unterscheiden sich vor allem in Kapazität, Solarleistung und Gewicht.",
  comparisonTitle: "Die 3 besten Powerstations im Vergleich",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 600 €" },
    2: { symbol: "€€", label: "ca. 600–1.000 €" },
    3: { symbol: "€€€", label: "über 1.500 €" },
  },

  criteria: [
    { key: "kapazitaet", label: "Kapazität & Leistung", weight: 0.3, description: "Nutzbare Wattstunden, Dauer- und Spitzenleistung, Erweiterbarkeit." },
    { key: "krise", label: "Krisentauglichkeit", weight: 0.25, description: "USV-Funktion, Solareingang, Akkuchemie und Zyklenfestigkeit, Selbstentladung." },
    { key: "alltag", label: "Alltag & Handhabung", weight: 0.2, description: "Gewicht, Ladezeit, Lautstärke, Anschlüsse, App." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis pro Wattstunde und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Kapazität, Leistung, Solareingang, Zyklen und USV-Umschaltzeit, der Powerstation-Test der Stiftung Warentest (Heft 8/2023, Geräte mit 300 bis 700 Watt) sowie die Vorsorgehinweise des BBK zum Stromausfall. Eigene Messungen führen wir nicht durch. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "EcoFlow DELTA 3 Plus",
      brand: "EcoFlow",
      variant: "1.024 Wh LiFePO4, 1.800 W",
      visual: { kind: "station", tone: "forest" },
      priceTier: 2,
      ratings: { kapazitaet: 8.5, krise: 9.0, alltag: 8.5, preis: 8.0 },
      bestFor: "Router, Kühlschrank & Licht für 1–2 Tage",
      verdict:
        "Die ausgewogenste Notstromlösung: 1 kWh Akku, genug Leistung für fast alle Haushaltsgeräte, eine schnelle USV-Umschaltung und ein großer Solareingang, mit dem sie sich an einem sonnigen Tag vollständig nachladen lässt.",
      features: [
        "1.024 Wh LiFePO4-Akku, laut EcoFlow rund 4.000 Zyklen bis 80 % Restkapazität",
        "1.800 W Dauerleistung (3.600 W Spitze), USV-Umschaltung unter 10 ms",
        "1.000 W Solareingang, Netzladung in etwa 56 Minuten; mit Zusatzakkus auf bis zu 5 kWh erweiterbar",
      ],
      pros: ["Schnelle USV für Router und PC", "Großer Solareingang", "Erweiterbar"],
      cons: ["Rund 12,5 kg schwer", "Modellname genau prüfen – DELTA 3 ohne „Plus“ hat nur 500 W Solareingang"],
      specs: { kapazitaet: "1.024 Wh", leistung: "1.800 W (3.600 W Spitze)", solar: "bis 1.000 W", usv: "< 10 ms", akku: "LiFePO4, ca. 4.000 Zyklen", gewicht: "ca. 12,5 kg" },
      asin: "B0DFPW2Y2C",
      query: "EcoFlow DELTA 3 Plus Powerstation 1024Wh",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Anker SOLIX C1000",
      brand: "Anker",
      variant: "1.056 Wh LiFePO4, 1.800 W",
      visual: { kind: "station", tone: "mint" },
      priceTier: 1,
      ratings: { kapazitaet: 8.5, krise: 8.0, alltag: 8.0, preis: 9.0 },
      bestFor: "Günstiger Einstieg mit voller Leistung",
      verdict:
        "Fast die gleiche Kapazität und Leistung wie die EcoFlow – oft zu einem deutlich niedrigeren Preis. Die richtige Wahl, wenn das Budget zählt.",
      features: [
        "1.056 Wh LiFePO4-Akku, laut Anker rund 3.000 Zyklen",
        "1.800 W Dauerleistung, kurzzeitig bis 2.400 W über SurgePad",
        "600 W Solareingang mit MPPT, Netzladung in rund 58 Minuten; Erweiterungsakku BP1000 verdoppelt die Kapazität",
      ],
      pros: ["Sehr günstig pro Wattstunde", "Volle Leistung für Wasserkocher und Werkzeug", "Erweiterbar mit BP1000"],
      cons: ["Kleinerer Solareingang als die EcoFlow", "Ein Käufer maß unter Last rund 880 Wh nutzbar – Eigenverbrauch einplanen", "Rund 12,9 kg schwer"],
      specs: { kapazitaet: "1.056 Wh", leistung: "1.800 W (2.400 W Spitze)", solar: "bis 600 W", usv: "ja (Herstellerangabe)", akku: "LiFePO4, ca. 3.000 Zyklen", gewicht: "ca. 12,9 kg" },
      asin: "B0CGQZ7XSB",
      query: "Anker SOLIX C1000 Powerstation",
    },
    {
      rank: 3,
      label: "Premium für mehrere Tage",
      name: "EcoFlow DELTA Pro 3",
      brand: "EcoFlow",
      variant: "4.096 Wh LiFePO4, 4.000 W",
      visual: { kind: "station", tone: "green" },
      priceTier: 3,
      ratings: { kapazitaet: 10.0, krise: 9.5, alltag: 6.0, preis: 5.5 },
      bestFor: "Familienhaus, mehrere Tage Blackout",
      verdict:
        "Ein Hausspeicher auf Rollen: 4 kWh, 4.000 W Dauerleistung und erweiterbar auf 12 kWh. Damit laufen Kühlschrank, Gefriertruhe, Router und Licht mehrere Tage – mit Solar auch länger.",
      features: [
        "4.096 Wh LiFePO4, laut EcoFlow über 4.000 Zyklen bis 80 % Restkapazität",
        "4.000 W Dauerleistung an 230 V, mit Zusatzakkus bis 12 kWh",
        "Laut Anbieter unter 30 dB auch unter hoher Last, Akku nach IP65 geschützt",
      ],
      pros: ["Riesige Kapazität", "Treibt auch große Verbraucher an", "Leise"],
      cons: ["Sehr teuer", "Schwer – eher stationär als tragbar", "Einbindung in die Hausinstallation nur durch Elektrofachkraft"],
      specs: { kapazitaet: "4.096 Wh", leistung: "4.000 W", solar: "laut Hersteller mehrere Eingänge", usv: "ja (Herstellerangabe)", akku: "LiFePO4, > 4.000 Zyklen", gewicht: "schwer, mit Rollen" },
      asin: "B0DDKP47PY",
      query: "EcoFlow DELTA Pro 3 Powerstation",
    },
  ],

  comparison: [
    { key: "kapazitaet", label: "Kapazität" },
    { key: "leistung", label: "Leistung" },
    { key: "solar", label: "Solareingang" },
    { key: "usv", label: "USV-Umschaltung" },
    { key: "akku", label: "Akku" },
    { key: "gewicht", label: "Gewicht" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-powerstations-stromausfall-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Powerstations für den Stromausfall 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Powerstations 2026 in den Kriterien Kapazität, Krisentauglichkeit, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Die DELTA 3 Plus ist am ausgewogensten, die DELTA Pro 3 hat die größte Kapazität.",
    },
    steps: {
      kind: "steps",
      file: "powerstation-groesse-berechnen-stromausfall-anleitung.svg",
      title: "Die richtige Größe berechnen",
      subtitle: "So viele Wattstunden brauchst du im Blackout",
      alt: "Infografik: Powerstation-Größe berechnen – Geräte auflisten, Leistung ablesen, Stunden schätzen, Wattstunden addieren, Reserve einplanen",
      caption: "Wattstunden = Watt × Stunden. Plane 15 bis 20 Prozent Verlust für den Wechselrichter ein.",
      steps: [
        { title: "Wichtige Geräte auflisten", text: "Router, Handys, Licht, Kühlschrank, Heizungspumpe, Medizingeräte." },
        { title: "Leistung ablesen", text: "Typenschild oder Datenblatt: z. B. Router 10 W, LED-Lampe 5 W." },
        { title: "Stunden pro Tag schätzen", text: "Router 24 h = 240 Wh; Kühlschrank laut Energielabel oft 0,4–1 kWh pro Tag." },
        { title: "Wattstunden addieren", text: "Summe aller Geräte ergibt den Tagesbedarf." },
        { title: "Reserve einplanen", text: "Wechselrichter-Verluste und Eigenverbrauch: 15–20 % mehr Kapazität wählen." },
      ],
    },
  },

  editorial: {
    title: "Notstrom aus dem Akku: Was eine Powerstation leisten kann",
    intro:
      "Kapazität, Leistung, USV und Solar: welche Powerstation zu deinem Haushalt passt und wie lange sie im Blackout wirklich hält.",
    sections: [
      {
        id: "beste-powerstation",
        h2: "Welche Powerstation ist für den Stromausfall am besten?",
        blocks: [
          { quick: "Für die meisten Haushalte ist die [EcoFlow DELTA 3 Plus](produkt:1) die beste Wahl: 1 kWh, 1.800 W, USV und 1.000 W Solareingang. Günstiger ist die [Anker SOLIX C1000](produkt:2); für mehrere Tage mit Kühlschrank lohnt die [DELTA Pro 3](produkt:3) mit 4 kWh." },
          { first: "Fällt der Strom aus, merkt man schnell, wovon man abhängig ist: Ohne Router kein Internet, ohne Ladegerät bald kein Handy, ohne Licht kein Abend. Im Kühlschrank wird es nach einigen Stunden warm, und viele Gasheizungen stehen still, weil ihre Umwälzpumpe Strom braucht. Eine Powerstation überbrückt genau diese Lücke – leise, ohne Abgase und ohne Kraftstoff im Keller." },
          { p: "Für die Krisenvorsorge ist eine Kapazität um 1 kWh der sinnvolle Einstieg. Damit laufen ein Router einen Tag lang, alle Handys werden mehrfach geladen, und abends brennt Licht – und es bleibt noch etwas für den Kühlschrank. Mit Solarmodulen lädt sie sich bei Sonne wieder auf, sodass auch ein mehrtägiger Ausfall machbar wird." },
          { p: "Unsere Gesamtwahl ist die EcoFlow DELTA 3 Plus, weil sie neben 1 kWh Kapazität zwei Dinge mitbringt, die im Ernstfall zählen: eine USV-Funktion, die bei einem Netzausfall in unter 10 Millisekunden umschaltet, und einen Solareingang mit bis zu 1.000 Watt. Die Anker SOLIX C1000 ist fast gleichwertig, oft aber günstiger. Stiftung Warentest hat zuletzt 2023 kleinere Powerstations mit 300 bis 700 Watt getestet – die heute üblichen 1-kWh-Geräte waren nicht dabei." },
          { figure: "scores" },
          { callout: { title: "Nicht ins Hausnetz einspeisen", warn: true, text: "Schließe eine Powerstation nie über einen Stecker-zu-Stecker-Adapter an eine Steckdose an, um das Hausnetz zu versorgen. Das ist lebensgefährlich für dich und für Netzmonteure. Eine Einbindung in die Hausinstallation, etwa für die Heizungspumpe, darf nur eine Elektrofachkraft mit passender Umschalteinrichtung vornehmen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf einer Powerstation achten?",
        blocks: [
          { quick: "Wichtig sind Kapazität in Wattstunden, Dauerleistung in Watt, ein LiFePO4-Akku, reiner Sinus, eine USV-Funktion, ein ausreichend großer Solareingang und das Gewicht." },
          {
            table: {
              caption: "Typischer Verbrauch im Stromausfall (Richtwerte, Datenblatt des eigenen Geräts prüfen)",
              head: ["Gerät", "Leistung", "Bedarf pro Tag", "mit 1 kWh"],
              rows: [
                ["**WLAN-Router**", "ca. 10 W", "ca. 240 Wh (24 h)", "rund 3 Tage"],
                ["**Smartphone laden**", "–", "ca. 15 Wh je Ladung", "über 50 Ladungen"],
                ["**LED-Lampe**", "ca. 5 W", "ca. 25 Wh (5 h)", "viele Tage"],
                ["**Kühlschrank (A–C)**", "Anlaufstrom höher", "ca. 400–1.000 Wh", "rund 1 Tag"],
                ["**Heizungsumwälzpumpe**", "ca. 20–60 W", "ca. 500–1.400 Wh", "ca. 1 Tag (nur mit Elektrofachkraft)"],
              ],
            },
          },
          { h3: "Kapazität und Leistung" },
          { p: "Die Kapazität in Wattstunden bestimmt, wie lange Geräte laufen. Die Dauerleistung in Watt bestimmt, welche Geräte überhaupt laufen: Ein Wasserkocher braucht rund 2.000 Watt, ein Kühlschrank beim Anlaufen ein Mehrfaches seiner Nennleistung. Mit 1.800 Watt Dauerleistung sind fast alle Haushaltsgeräte abgedeckt – wenn auch nicht lange." },
          { h3: "Akkuchemie" },
          { p: "LiFePO4-Akkus (Lithium-Eisenphosphat) halten mehrere tausend Ladezyklen, gelten als thermisch stabiler als andere Lithium-Akkus und entladen sich in der Lagerung langsam. Alle Geräte in unserer Auswahl nutzen diese Technik. Ältere oder sehr günstige Geräte mit NMC-Akkus sind leichter, halten aber weniger Zyklen." },
          { h3: "USV-Funktion" },
          { p: "Eine USV (unterbrechungsfreie Stromversorgung) hängt zwischen Steckdose und Gerät. Fällt das Netz aus, übernimmt der Akku. Bei kurzen Umschaltzeiten unter 10 bis 20 Millisekunden laufen Router und Computer meist ohne Neustart weiter. Die EcoFlow DELTA 3 Plus gibt unter 10 ms an." },
          { h3: "Solareingang" },
          { p: "Je größer der Solareingang, desto schneller lädt die Powerstation an einem sonnigen Tag. Mit 1.000 Watt Eingang kann die DELTA 3 Plus theoretisch in wenigen Stunden voll werden – vorausgesetzt, es sind genug Module angeschlossen. Achte auf den zulässigen Spannungsbereich und den Stecker (meist XT60)." },
        ],
      },
      {
        id: "welche-passt",
        h2: "Welche Powerstation passt zu wem?",
        blocks: [
          { quick: "Für Wohnungen und kleine Haushalte reicht eine 1-kWh-Powerstation wie die DELTA 3 Plus oder die SOLIX C1000. Familien im Haus, die Kühlschrank und Heizungspumpe mehrere Tage betreiben wollen, brauchen 3 bis 4 kWh oder mehr." },
          {
            cards: [
              { title: "Wohnung & Homeoffice", text: "1 kWh, USV und großer Solareingang: EcoFlow DELTA 3 Plus.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kleines Budget", text: "Volle Leistung für weniger Geld: Anker SOLIX C1000.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Haus & mehrere Tage", text: "4 kWh, erweiterbar auf 12 kWh: EcoFlow DELTA Pro 3.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Leicht & klein", text: "Kompakte Modelle und Erweiterungen in der Top 5.", link: { href: "#top5-groesse", label: "Zur Top 5" } },
              { title: "Autark nachladen", text: "Faltbare und feste Solarmodule für die Powerstation.", link: { href: "/krisenvorsorge/energie-waerme/solarmodule/", label: "Solarmodule" } },
              { title: "Im Alltag sparen", text: "Balkonkraftwerk mit Speicher und Notstromsteckdose.", link: { href: "/krisenvorsorge/energie-waerme/balkonkraftwerk-speicher/", label: "Balkonkraftwerk" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-groesse",
    h2: "Die 5 besten Alternativen – nach Größe",
    intro:
      "Vom handlichen Akku für Handy und Router bis zum Erweiterungsakku: Diese fünf Geräte decken andere Größen und Budgets ab.",
    items: [
      { name: "EcoFlow RIVER 3", for: "Klein: Handy, Router, Licht", text: "245 Wh LFP-Akku, rund 3,5 kg leicht, laut EcoFlow bis zu 600 W Spitzenleistung – genug für den Router und mehrere Handyladungen.", asin: "B0DJY2R42F", query: "EcoFlow RIVER 3 Powerstation 245Wh" },
      { name: "Jackery Explorer 1000 v2", for: "Leichteste 1-kWh-Klasse", text: "1.070 Wh LiFePO4, 1.500 W Dauerleistung, laut Anbieter rund 10,8 kg und USV unter 20 ms.", asin: "B0DB1T34X5", query: "Jackery Explorer 1000 v2" },
      { name: "BLUETTI AC180", for: "Etwas mehr Kapazität", text: "1.152 Wh LiFePO4 und 1.800 W Dauerleistung, laut Anbieter 0–80 % in 45 Minuten am Netz.", asin: "B0C14D9DBB", query: "BLUETTI AC180 Powerstation" },
      { name: "Anker SOLIX BP1000", for: "Kapazität verdoppeln", text: "Erweiterungsakku mit 1.056 Wh für die Anker SOLIX C1000 – laut Anker nur mit dieser kompatibel.", asin: "B0CM95C3ZM", query: "Anker SOLIX BP1000 Erweiterungsakku" },
      { name: "EcoFlow DELTA 3 Plus mit Stream Mikrowechselrichter", for: "Notstrom plus Balkonkraftwerk", text: "Set aus Powerstation und 800-W-Mikrowechselrichter – Solarstrom im Alltag nutzen und im Notfall den Akku verwenden.", asin: "B0FJY66BBQ", query: "EcoFlow DELTA 3 Plus Stream Mikrowechselrichter" },
    ],
  },

  guide: {
    sections: [
      {
        id: "lagern-und-nutzen",
        h2: "Wie nutzt und lagert man eine Powerstation richtig?",
        blocks: [
          { quick: "Lagere die Powerstation teilgeladen, kühl und trocken, lade sie alle paar Monate nach und teste sie regelmäßig mit den Geräten, die du im Ernstfall betreiben willst. Bei einer Vorwarnung vollständig laden." },
          { p: "Eine Powerstation, die erst im Blackout aus dem Karton kommt, enttäuscht oft: Der Akku ist leer, das Ladekabel fehlt, der Stecker des Solarmoduls passt nicht. Plane deshalb einen Probelauf: Schalte die Sicherung für einen Abend aus und versorge Router, Licht und Kühlschrank mit der Powerstation. So weißt du, wie lange sie wirklich hält." },
          { figure: "steps" },
          { h3: "Sicher betreiben" },
          {
            list: [
              "**Nicht abdecken:** Lüftungsöffnungen frei lassen, nicht im Bett, Schrank oder neben Heizkörpern betreiben.",
              "**Nicht im Regen** und nicht bei Frost laden – Herstellerangaben zum Temperaturbereich beachten.",
              "**Keine Mehrfachsteckdosen-Ketten:** Die Dauerleistung nicht dauerhaft ausreizen.",
              "**Kühlschrank geschlossen halten:** Ein voller Kühlschrank hält die Kälte einige Stunden, auch ohne Strom.",
              "**Medizinische Geräte:** Wer auf Beatmung, Sauerstoffkonzentrator oder ähnliche Geräte angewiesen ist, klärt die Notstromversorgung mit Arzt und Hersteller.",
            ],
          },
          {
            facts: [
              { value: "1 kWh", label: "sinnvolle Einstiegsgröße für Router, Handys und Licht" },
              { value: "< 10 ms", label: "USV-Umschaltzeit der EcoFlow DELTA 3 Plus laut Hersteller" },
              { value: "4.000", label: "Ladezyklen bis 80 % Restkapazität (EcoFlow)" },
            ],
          },
          { h3: "Laden ohne Netz" },
          { p: "Im Blackout gibt es drei Wege zum Nachladen: Solarmodule, das Auto über den 12-Volt-Anschluss (langsam, und nur bei laufendem Motor sinnvoll) oder ein Generator. Solar ist leise, abgasfrei und funktioniert auch im Winter – wenn auch mit deutlich weniger Ertrag. Rechne im Dezember mit einem Bruchteil der Sommerleistung." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Powerstation ist für den Stromausfall am besten?", a: "Unsere beste Gesamtwahl ist die EcoFlow DELTA 3 Plus mit 1.024 Wh, 1.800 W, USV unter 10 ms und 1.000 W Solareingang. Das beste Preis-Leistungs-Verhältnis bietet die Anker SOLIX C1000, für mehrere Tage mit Kühlschrank empfehlen wir die EcoFlow DELTA Pro 3." },
    { q: "Wie lange läuft ein Kühlschrank an einer Powerstation?", a: "Das hängt vom Verbrauch ab, den das Energielabel angibt. Viele Kühlschränke brauchen 0,4 bis 1 kWh pro Tag. Eine 1-kWh-Powerstation hält einen sparsamen Kühlschrank also rund einen Tag, mit Solar-Nachladung länger." },
    { q: "Kann ich mit einer Powerstation meine Heizung betreiben?", a: "Die Umwälzpumpe und Steuerung einer Gas- oder Ölheizung brauchen oft nur 20 bis 60 Watt. Der Anschluss muss aber von einer Elektrofachkraft vorbereitet werden, etwa mit einem Umschalter oder einem Schukostecker an der Heizung. Nie über einen Stecker-zu-Stecker-Adapter ins Hausnetz einspeisen." },
    { q: "Wie viel Kapazität brauche ich?", a: "Liste die Geräte auf, die du betreiben willst, multipliziere ihre Leistung mit den Stunden pro Tag und addiere 15 bis 20 Prozent Reserve. Für Router, Handys und Licht reichen 300 bis 500 Wh pro Tag, mit Kühlschrank eher 1 bis 1,5 kWh." },
    { q: "Hat Stiftung Warentest Powerstations getestet?", a: "Ja, zuletzt in Heft 8/2023: elf Geräte mit 300 bis 700 Watt Leistung, fünf davon mit „gut“. Die heute üblichen Geräte um 1 kWh waren nicht Teil dieses Tests." },
    { q: "Wie lagert man eine Powerstation?", a: "Kühl, trocken und teilgeladen, mit regelmäßiger Nachladung nach Herstellerangabe. LiFePO4-Akkus entladen sich langsam, ein jährlicher Blick reicht aber nicht – prüfe den Ladestand alle paar Monate." },
  ],

  sources: [
    { label: "Stiftung Warentest: Powerstations im Test", url: "https://www.test.de/Powerstation-Test-6023127-0/" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Stadt Karlsbad: Vorsorge für den Stromausfall (PDF)", url: "https://www.karlsbad.de/resources/ecics_8051_uyys2n.pdf" },
  ],

  related: [
    { slug: "solarmodule", text: "Faltbare und feste Panels zum Nachladen." },
    { slug: "balkonkraftwerk-speicher", text: "Solarstrom mit Speicher und Notstromsteckdose." },
    { slug: "waerme-kochen-sicherheit", text: "Kochen, Wärme und CO-Melder ohne Strom." },
    { group: "energie-waerme", text: "Alle Ratgeber zu Energie & Wärme." },
  ],
};
