// Kategorie: HEPA-Luftreiniger (Krisenvorsorge › Luftfiltration)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "luftreiniger-hepa",
  area: "krisenvorsorge",
  group: "luftfiltration",
  navLabel: "HEPA-Luftreiniger",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten HEPA-Luftreiniger 2026 – H13-Filter im Vergleich",
  metaDescription:
    "Die 3 besten Luftreiniger mit H13-HEPA-Filter 2026: Testsieger, Raumgröße, CADR, Lautstärke und Filterkosten – plus richtig einsetzen bei Rauch und Feinstaub.",

  eyebrow: "Krisenvorsorge · Luftfiltration",
  h1: "Die 3 besten HEPA-Luftreiniger 2026",
  lead:
    "Rauch von einem Großbrand, Feinstaub, Pollen oder Viren in der Raumluft: Ein Luftreiniger mit H13-Filter holt Partikel zuverlässig aus der Luft – wenn er zur Raumgröße passt. Diese drei Geräte überzeugen am meisten.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Bosch Air 4000**](produkt:1): H13-Filter, 300 m³/h saubere Luft und Testsieger bei Stiftung Warentest. Eine fast gleichwertige Alternative mit Lasersensor ist der [**Kärcher AF 30**](produkt:2); für große Wohnräume bis 125 m² ist der [**Bosch Air 6000**](produkt:3) die stärkste Wahl.",

  top3Title: "Unsere Top 3 HEPA-Luftreiniger",
  top3Intro:
    "Alle drei Geräte arbeiten mit einem Filter der Klasse H13 und einem Aktivkohleanteil gegen Gerüche. Sie unterscheiden sich vor allem in der Luftleistung – und damit in der Raumgröße, die sie schaffen.",
  comparisonTitle: "Die 3 besten HEPA-Luftreiniger im Vergleich",

  criteria: [
    { key: "filter", label: "Filterleistung", weight: 0.35, description: "Filterklasse, Abscheidegrad bei 0,3 µm, Aktivkohle gegen Gerüche und Gase, Ergebnisse unabhängiger Tests." },
    { key: "raum", label: "Raumleistung", weight: 0.25, description: "Clean Air Delivery Rate (CADR) bzw. Luftdurchsatz und die daraus folgende Raumgröße." },
    { key: "betrieb", label: "Betrieb & Folgekosten", weight: 0.2, description: "Lautstärke, Automatik und Sensor, Stromverbrauch, Preis und Verfügbarkeit der Ersatzfilter." },
    { key: "preis", label: "Preis-Leistung", weight: 0.2, description: "Anschaffungspreis im Verhältnis zur Leistung." },
  ],

  method:
    "Grundlage sind die Luftreiniger-Tests der Stiftung Warentest (zuletzt Heft 5/2026) und darauf beruhende Testberichte, Herstellerangaben zu Filterklasse, CADR und Lautstärke sowie die Hinweise des Umweltbundesamts und des BBK zum Verhalten bei Rauch und Schadstoffen. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Bosch Air 4000",
      brand: "Bosch",
      variant: "H13, CADR 300 m³/h",
      visual: { kind: "device", tone: "forest" },
      priceTier: 2,
      ratings: { filter: 9.0, raum: 8.0, betrieb: 8.0, preis: 8.5 },
      bestFor: "Wohn- und Schlafzimmer bis ca. 60 m²",
      verdict:
        "Der beste Luftreiniger für die meisten Haushalte: H13-Filter, genug Leistung für ein großes Wohnzimmer und laut Bosch seit Heft 3/2024 Testsieger der Stiftung Warentest.",
      features: [
        "Dreistufiger Filter aus Vorfilter, Aktivkohle und HEPA 13 (Herstellerangabe)",
        "Clean Air Delivery Rate von 300 m³/h, laut Bosch für Räume bis 62,5 m²",
        "Luftqualitätssensor mit Farbring, Automatik- und Schlafmodus unter 25 dB(A)",
      ],
      pros: ["Testsieger der Stiftung Warentest", "Hohe Luftleistung für die Gerätegröße", "Leiser Schlafmodus"],
      cons: ["Keine App-Steuerung (dafür gibt es den Air 4000i)", "Ersatzfilter regelmäßig nötig – Folgekosten einplanen"],
      specs: { filter: "HEPA 13 + Aktivkohle", cadr: "300 m³/h (CADR)", raum: "bis 62,5 m²", leise: "unter 25 dB(A) im Schlafmodus", sensor: "Luftqualitätssensor, Automatik", test: "Testsieger Stiftung Warentest (laut Bosch)" },
      asin: "B0B5D7H7VP",
      query: "Bosch Air 4000 Luftreiniger",
    },
    {
      rank: 2,
      label: "Beste Alternative",
      name: "Kärcher Luftreiniger AF 30",
      brand: "Kärcher",
      variant: "H13, 320 m³/h",
      visual: { kind: "device", tone: "mint" },
      priceTier: 2,
      ratings: { filter: 8.5, raum: 8.0, betrieb: 8.5, preis: 8.0 },
      bestFor: "Allergiker & Schlafzimmer",
      verdict:
        "Fast gleichauf mit dem Bosch: H13-Filter mit Aktivkohle, präziser Lasersensor und ein besonders leiser Nachtbetrieb. In Berichten zum Test 5/2026 ebenfalls mit „gut“ bewertet.",
      features: [
        "HEPA-13-Filter mit antibakterieller Aktivkohleschicht, laut Kärcher über 99,95 % der Partikel ab 0,3 µm",
        "Luftdurchsatz 320 m³/h, laut Hersteller für Räume bis 60 m²",
        "Lasersensor, Display mit Luftqualität, Temperatur und Luftfeuchte; Lautstärke 29 bis 53 dB",
      ],
      pros: ["Sehr leiser Nachtmodus", "Übersichtliches Display mit Filteranzeige", "Kompakt (rund 26 × 26 × 48 cm)"],
      cons: ["Kärcher nennt den Luftdurchsatz, keinen CADR-Wert – schwerer vergleichbar", "Ersatzfilter vergleichsweise teuer"],
      specs: { filter: "HEPA 13 + Aktivkohle", cadr: "320 m³/h Luftdurchsatz", raum: "bis 60 m²", leise: "29–53 dB", sensor: "Lasersensor, Automatik", test: "„gut“ (Berichte zu Heft 5/2026)" },
      asin: "B0BJ66LVXD",
      query: "Kärcher Luftreiniger AF 30",
    },
    {
      rank: 3,
      label: "Für große Räume",
      name: "Bosch Air 6000",
      brand: "Bosch",
      variant: "H13, CADR 600 m³/h",
      visual: { kind: "device", tone: "green" },
      priceTier: 3,
      ratings: { filter: 9.0, raum: 9.5, betrieb: 7.0, preis: 6.5 },
      bestFor: "offene Wohnküchen bis 125 m²",
      verdict:
        "Die doppelte Leistung des Air 4000: Mit 600 m³/h reinigt er auch große, offene Wohnbereiche schnell – etwa, wenn Rauch von außen eindringt.",
      features: [
        "4-in-1-Filter aus Vorfilter, HEPA (H13 laut Händler), Aktivkohle und antibakterieller Lage",
        "CADR 600 m³/h, laut Bosch für Räume bis 125 m²",
        "Automatik mit Sensor, Schlafmodus unter 25 dB(A); App-Version Air 6000i erhältlich",
      ],
      pros: ["Sehr hohe Luftleistung", "Ein Gerät statt zwei für große Räume", "Gleiches Bedienkonzept wie der Testsieger"],
      cons: ["Groß und rund 11 kg schwer", "Teuer in Anschaffung und Ersatzfilter", "Für kleine Räume überdimensioniert"],
      specs: { filter: "HEPA 13 + Aktivkohle", cadr: "600 m³/h (CADR)", raum: "bis 125 m²", leise: "unter 25 dB(A) im Schlafmodus", sensor: "Sensor, Automatik", test: "–" },
      asin: "B0B5DGLPTY",
      query: "Bosch Air 6000 Luftreiniger",
    },
  ],

  comparison: [
    { key: "filter", label: "Filter" },
    { key: "cadr", label: "Luftleistung" },
    { key: "raum", label: "Raumgröße (Hersteller)" },
    { key: "leise", label: "Lautstärke" },
    { key: "sensor", label: "Steuerung" },
    { key: "test", label: "Unabhängiger Test" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-hepa-luftreiniger-2026-bewertung-vergleich.svg",
      title: "Die 3 besten HEPA-Luftreiniger 2026",
      alt: "Balkendiagramm: Bewertung der drei besten HEPA-Luftreiniger 2026 in den Kriterien Filterleistung, Raumleistung, Betrieb und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Der Bosch Air 4000 ist am ausgewogensten, der Air 6000 hat die größte Raumleistung.",
    },
    steps: {
      kind: "steps",
      file: "luftreiniger-bei-rauch-richtig-einsetzen-anleitung.svg",
      title: "Luftreiniger bei Rauch richtig einsetzen",
      subtitle: "So bleibt die Luft in einem Raum sauber",
      alt: "Infografik: Luftreiniger bei Rauch einsetzen – Fenster schließen, Lüftung aus, einen Raum wählen, Gerät auf höchste Stufe, Filter danach prüfen",
      caption: "Ein Luftreiniger wirkt am besten in einem geschlossenen Raum, nicht in der ganzen Wohnung.",
      steps: [
        { title: "Fenster und Türen schließen", text: "Lüftung, Dunstabzug und Klimaanlage ausschalten, Lüftungsschlitze der Fenster schließen." },
        { title: "Einen Raum auswählen", text: "Am besten einen Innenraum ohne Außenfenster, in dem sich alle aufhalten." },
        { title: "Gerät mittig aufstellen", text: "Mit Abstand zu Wand und Möbeln, damit es frei ansaugen und ausblasen kann." },
        { title: "Höchste Stufe wählen", text: "Erst wenn die Anzeige wieder gute Luft meldet, auf Automatik zurückschalten." },
        { title: "Filter danach prüfen", text: "Nach starkem Rauch ist der Filter oft verbraucht – Ersatzfilter auf Vorrat halten." },
      ],
    },
  },

  editorial: {
    title: "Saubere Raumluft: Was ein HEPA-Luftreiniger leisten kann",
    intro:
      "Filterklasse, CADR und Raumgröße – und warum ein Luftreiniger bei Rauch hilft, gegen Gase aber nur begrenzt.",
    sections: [
      {
        id: "bester-luftreiniger",
        h2: "Welcher HEPA-Luftreiniger ist der beste?",
        blocks: [
          { quick: "Für die meisten Haushalte ist der [Bosch Air 4000](produkt:1) die beste Wahl: H13-Filter, CADR 300 m³/h und Testsieger bei Stiftung Warentest. Der [Kärcher AF 30](produkt:2) ist eine leise Alternative, der [Bosch Air 6000](produkt:3) schafft große Räume bis 125 m²." },
          { first: "Ein Luftreiniger saugt Raumluft an, drückt sie durch mehrere Filterschichten und gibt sie gereinigt wieder ab. Entscheidend ist die HEPA-Stufe: Ein Filter der Klasse H13 hält nach der Norm EN 1822 mindestens 99,95 Prozent der Partikel in der am schwersten zu filternden Größe zurück, H14 sogar 99,995 Prozent. Damit landen Feinstaub, Rußpartikel aus Rauch, Pollen sowie Viren und Bakterien, die an Aerosolen haften, im Filter." },
          { p: "Für die Krisenvorsorge ist vor allem ein Szenario wichtig: Rauch von einem Großbrand, einem Wald- oder Industriebrand. Behörden raten dann, im Haus zu bleiben und Fenster und Türen zu schließen. Trotzdem dringt Rauch über Ritzen und Lüftungen ein – ein Luftreiniger holt diese Partikel wieder aus der Luft. Gegen Gase wie Kohlenmonoxid hilft er dagegen nicht, gegen Gerüche und manche Schadstoffe nur so weit, wie die Aktivkohle reicht." },
          { p: "Unsere Gesamtwahl ist der Bosch Air 4000, weil er Filterleistung, Luftleistung und Preis am besten ausbalanciert. Laut Bosch hält er seit Heft 3/2024 den Titel als Testsieger der Stiftung Warentest – auch nach der Aktualisierung des Tests in Heft 5/2026, in der nach Berichten nur wenige Geräte die Note „gut“ erreichten. Der Kärcher AF 30 gehört nach diesen Berichten ebenfalls dazu." },
          { figure: "scores" },
          { callout: { title: "Wichtig", warn: true, text: "Ein Luftreiniger ersetzt keine Evakuierung und keinen Rauchwarnmelder. Bei Brandrauch in der eigenen Wohnung gilt: raus, Tür schließen, 112 rufen. Kohlenmonoxid filtert kein Luftreiniger – dafür braucht es einen CO-Melder." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Luftreinigers achten?",
        blocks: [
          { quick: "Achte auf einen echten H13- oder H14-Filter, einen CADR-Wert, der zur Raumgröße passt, einen leisen Nachtmodus und die Kosten der Ersatzfilter. Ein Aktivkohleanteil hilft gegen Gerüche." },
          { h3: "Filterklasse: H13 oder H14" },
          { p: "Die HEPA-Klassen sind in der EN 1822 genormt. Für Wohnräume ist H13 der sinnvolle Standard; H14 filtert noch etwas mehr, die Geräte sind aber seltener und teurer, und der höhere Luftwiderstand kostet Leistung. Vorsicht bei Angaben wie „HEPA-Typ“ oder „HEPA-ähnlich“: Sie sind keine Filterklasse. Seriöse Hersteller nennen die Klasse ausdrücklich." },
          { h3: "CADR und Raumgröße" },
          { p: "Die Clean Air Delivery Rate gibt an, wie viel gereinigte Luft ein Gerät pro Stunde liefert. Als Faustregel sollte die Raumluft mehrmals pro Stunde umgewälzt werden: Ein 25-Quadratmeter-Raum mit 2,5 Metern Deckenhöhe hat rund 62 Kubikmeter Luft; ein Gerät mit 300 m³/h wälzt sie theoretisch fast fünfmal pro Stunde um. Die Raumangaben der Hersteller sind oft großzügig gerechnet – wähle lieber eine Stufe größer und lasse das Gerät dafür leiser laufen." },
          {
            table: {
              caption: "Luftleistung und sinnvolle Raumgröße",
              head: ["Luftleistung", "Sinnvolle Raumgröße", "Beispiel"],
              rows: [
                ["**bis 150 m³/h**", "Kinder- oder kleines Schlafzimmer bis ca. 20 m²", "Kompaktgeräte"],
                ["**um 300 m³/h**", "Wohn- oder Schlafzimmer bis ca. 40–60 m²", "Bosch Air 4000, Kärcher AF 30"],
                ["**um 600 m³/h**", "offene Wohnküche bis ca. 100–125 m²", "Bosch Air 6000"],
              ],
            },
          },
          { h3: "Lautstärke, Sensor und Folgekosten" },
          { p: "Luftreiniger laufen am besten dauerhaft. Ein Schlafmodus unter 30 dB(A) und eine Automatik mit Partikelsensor sind deshalb wichtiger als App-Funktionen. Rechne die Ersatzfilter mit ein: Stiftung Warentest hat für die Geräte im Test jährliche Betriebskosten aus Strom und Filtern von rund 65 bis 175 Euro ermittelt. Nach starkem Rauch kann ein Filter schneller verbraucht sein – ein Ersatzfilter gehört deshalb in den Vorrat." },
        ],
      },
      {
        id: "welcher-passt",
        h2: "Welcher Luftreiniger passt zu wem?",
        blocks: [
          { quick: "Für ein Wohn- oder Schlafzimmer reicht der Bosch Air 4000 oder der Kärcher AF 30. Für große, offene Räume lohnt der Bosch Air 6000; wer wenig Platz hat, nimmt ein kleineres Gerät für den Schutzraum." },
          {
            cards: [
              { title: "Wohnzimmer & Familie", text: "Ausgewogen, leistungsstark und Testsieger: Bosch Air 4000.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Allergiker & Schlafzimmer", text: "Sehr leise und mit Lasersensor: Kärcher AF 30.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Offene Wohnküche", text: "600 m³/h für bis zu 125 m²: Bosch Air 6000.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Kleiner Schutzraum", text: "Ein kompaktes Gerät reicht für einen kleinen Innenraum.", link: { href: "#top5-raumgroesse", label: "Zur Top 5" } },
              { title: "Ohne Strom", text: "Luftreiniger brauchen Strom – eine Powerstation hält sie im Blackout am Laufen.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
              { title: "Raum abdichten", text: "Weniger Außenluft heißt weniger Arbeit für den Filter.", link: { href: "/krisenvorsorge/luftfiltration/abdichtung/", label: "Abdichtung" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-raumgroesse",
    h2: "Die 5 besten Luftreiniger nach Raumgröße",
    intro:
      "Nicht jeder Raum braucht dasselbe Gerät. Diese fünf Luftreiniger decken vom kleinen Schutzraum bis zum großen Wohnbereich alle Größen ab.",
    items: [
      { name: "Bosch Air 1000", for: "Kleine Räume bis ca. 23 m²", text: "CADR 100 m³/h laut Hersteller – genug für ein Kinderzimmer oder einen kleinen, innenliegenden Schutzraum.", asin: "B0F9FFGZR8", query: "Bosch Air 1000 Luftreiniger" },
      { name: "Levoit Core 300S", for: "Schlafzimmer mit App", text: "Kompaktes Gerät mit H13-Filter (Ersatzfilter Core 300-RF), Laser-Sensor und App-Steuerung – günstig, aber mit weniger Luftleistung als die Top 3.", asin: "B08L73QL1V", query: "Levoit Core 300S Luftreiniger" },
      { name: "Bosch Air 4000i", for: "Wohnzimmer mit Smart Home", text: "Technik des Testsiegers, zusätzlich mit App- und Sprachsteuerung – sinnvoll, wenn du die Luftqualität aus der Ferne sehen willst.", asin: "B0DLKXZRQH", query: "Bosch Air 4000i Luftreiniger" },
      { name: "Kärcher Luftreiniger AF 50", for: "Große Räume bis ca. 100 m²", text: "Größerer Bruder des AF 30 mit 520 m³/h Luftdurchsatz und H13-Filter – eine Alternative zum Bosch Air 6000.", asin: "B0BJ67PGJX", query: "Kärcher Luftreiniger AF 50" },
      { name: "Bosch Ersatzfilter Air 4000(i)", for: "Vorrat für den Ernstfall", text: "Nach starkem Rauch ist der Filter schnell verbraucht. Ein originaler Ersatzfilter im Schrank hält den Luftreiniger einsatzbereit.", asin: "B0B7BV1YDS", query: "Bosch Air 4000 Ersatzfilter original" },
    ],
  },

  guide: {
    sections: [
      {
        id: "rauch-und-feinstaub",
        h2: "Wie setzt man einen Luftreiniger bei Rauch richtig ein?",
        blocks: [
          { quick: "Schließe Fenster und Türen, schalte Lüftungen aus, ziehe dich in einen Raum zurück und lass den Luftreiniger dort auf höchster Stufe laufen. Erst wenn die Luft wieder gut ist, auf Automatik umstellen." },
          { p: "Das BBK rät bei einer Gefahrstofffreisetzung, im Gebäude zu bleiben, Fenster und Türen zu schließen, Ventilatoren und Klimaanlagen abzuschalten und einen Innenraum möglichst ohne Außenfenster aufzusuchen. Genau dort wirkt ein Luftreiniger am besten: In einem geschlossenen Raum kann er die Luft mehrmals pro Stunde umwälzen – in einer offenen Wohnung verteilt sich seine Leistung." },
          { figure: "steps" },
          { h3: "Was ein Luftreiniger nicht kann" },
          {
            list: [
              "**Kein Schutz vor Kohlenmonoxid.** CO ist ein Gas, kein Partikel – nur ein CO-Melder warnt davor.",
              "**Begrenzter Schutz vor Gasen.** Aktivkohle bindet Gerüche und manche Gase, ist aber schnell gesättigt. Bei einer Chemiewolke zählen geschlossene Fenster und die Anweisungen der Behörden.",
              "**Keine Wirkung ohne Strom.** Im Blackout läuft ein Luftreiniger nur mit Powerstation; ein 300-m³/h-Gerät braucht dafür meist weniger Leistung als ein Kühlschrank.",
              "**Kein Ersatz für Frischluft.** In einem dicht verschlossenen Raum steigt der CO₂-Gehalt. Nach der Entwarnung gründlich lüften.",
            ],
          },
          {
            facts: [
              { value: "99,95 %", label: "Mindestabscheidung eines H13-Filters nach EN 1822" },
              { value: "300 m³/h", label: "CADR des Testsiegers Bosch Air 4000" },
              { value: "65–175 €", label: "jährliche Betriebskosten im Test der Stiftung Warentest" },
            ],
          },
          { h3: "Pflege und Filterwechsel" },
          { p: "Den Vorfilter regelmäßig absaugen, den HEPA-Filter nach Herstellerangabe oder Filteranzeige wechseln – bei Kärcher sind das je nach Nutzung etwa 8 bis 12 Monate. Den alten Filter nach starker Rauchbelastung in einem Beutel verschlossen im Restmüll entsorgen und nicht ausklopfen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Luftreiniger ist der beste?", a: "Unsere beste Gesamtwahl ist der Bosch Air 4000 mit H13-Filter und 300 m³/h CADR; laut Bosch ist er Testsieger der Stiftung Warentest. Als Alternative empfehlen wir den Kärcher AF 30, für große Räume den Bosch Air 6000." },
    { q: "Was ist der Unterschied zwischen H13 und H14?", a: "Beide sind HEPA-Klassen nach EN 1822. Ein H13-Filter hält mindestens 99,95 Prozent der am schwersten filterbaren Partikel zurück, ein H14-Filter mindestens 99,995 Prozent. Für Wohnräume reicht H13; wichtiger ist, dass die Luftleistung zur Raumgröße passt." },
    { q: "Hilft ein Luftreiniger gegen Rauch?", a: "Ja, gegen Rauchpartikel und Ruß hilft ein HEPA-Luftreiniger gut, gegen Gerüche teilweise über die Aktivkohle. Gegen Kohlenmonoxid und andere Gase schützt er nicht. Bei einem Brand in der eigenen Wohnung gilt immer: Wohnung verlassen und 112 rufen." },
    { q: "Filtert ein Luftreiniger Viren?", a: "Ein H13-Filter hält auch sehr kleine Aerosolpartikel zurück, an denen Viren haften, und kann ihre Konzentration in der Raumluft senken. Er ersetzt aber kein Lüften und keine anderen Schutzmaßnahmen." },
    { q: "Wie groß muss ein Luftreiniger sein?", a: "Die Luft sollte mehrmals pro Stunde umgewälzt werden. Rechne Raumfläche mal Deckenhöhe und multipliziere mit fünf: Für 25 m² bei 2,5 m Höhe sind etwa 300 m³/h sinnvoll. Herstellerangaben zur Raumgröße sind oft großzügig." },
    { q: "Wie viel Strom braucht ein Luftreiniger?", a: "Auf niedriger Stufe meist nur wenige Watt, auf höchster Stufe einige Dutzend Watt. Das ist wenig genug, um ihn im Stromausfall mit einer Powerstation zu betreiben. Genaue Werte stehen im Datenblatt des Herstellers." },
  ],

  sources: [
    { label: "Stiftung Warentest: Luftreiniger im Test", url: "https://www.test.de/Luftreiniger-im-Test-5579439-0/" },
    { label: "BBK: Verhalten im Haus bei Gefahrstofffreisetzung", url: "https://www.bbk.bund.de/DE/Warnung-Vorsorge/Vorsorge/Schutz-suchen/Gefahrstoff-Freisetzung/_documents/gefahrstoff-im-haus_dossier2.html" },
    { label: "Bosch: Luftreiniger Air 6000", url: "https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/air-6000-19287221-p/" },
  ],

  related: [
    { slug: "atemschutz", text: "FFP3- und Vollmasken für draußen." },
    { slug: "abdichtung", text: "Einen Raum schnell gegen Außenluft abdichten." },
    { slug: "powerstations", text: "Strom für den Luftreiniger im Blackout." },
    { group: "luftfiltration", text: "Alle Ratgeber zur Luftfiltration." },
  ],
};
