// Kategorie: Erste Hilfe & Brandschutz (Krisenvorsorge › Schutzraum & Ausstattung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "erste-hilfe-brandschutz",
  area: "krisenvorsorge",
  group: "schutzraum-ausstattung",
  navLabel: "Erste Hilfe & Brandschutz",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Erste Hilfe & Brandschutz: Die 3 besten Produkte 2026",
  metaDescription:
    "Erste-Hilfe-Koffer nach DIN 13157, 6-Liter-Schaumlöscher und Löschspray im Vergleich – plus Fettbrand, Löschdecke, Rauchmelder und Hausapotheke für den Ernstfall.",

  eyebrow: "Krisenvorsorge · Schutzraum & Ausstattung",
  h1: "Erste Hilfe und Brandschutz: Die 3 besten Produkte 2026",
  lead:
    "In einer Krise ist der Rettungsdienst oft überlastet oder nicht erreichbar, und mit Kerzen, Kochern und Notstrom steigt das Brandrisiko. Ein vollständiger Erste-Hilfe-Koffer und ein richtiger Feuerlöscher gehören deshalb in jeden Haushalt.",
  answer:
    "Unsere beste Gesamtwahl ist der [**LEINA-WERKE Erste-Hilfe-Koffer SAN nach DIN 13157**](produkt:1): vollständig bestückt, robust und wandmontierbar. Zum Löschen empfehlen wir einen 6-Liter-Schaumlöscher wie den [**Jockel S6JX Green E 21**](produkt:2) – die Geräteklasse, die Stiftung Warentest für den Haushalt empfiehlt; für Küche und Auto ergänzt das Löschspray [**ABUS Feuerstopp AFS625**](produkt:3).",

  top3Title: "Unsere Top 3 für Erste Hilfe und Brandschutz",
  top3Intro:
    "Ein Erste-Hilfe-Koffer mit genormtem Inhalt, ein Feuerlöscher mit genug Löschmittel für einen Zimmerbrand im Entstehen und ein handliches Spray für schnelle Einsätze in Küche, Auto und Wohnmobil.",
  comparisonTitle: "Erste-Hilfe-Koffer, Schaumlöscher und Löschspray im Vergleich",

  criteria: [
    { key: "wirkung", label: "Wirkung im Ernstfall", weight: 0.35, description: "Inhalt nach Norm bzw. Löschleistung und Brandklassen, Testergebnisse." },
    { key: "bedienung", label: "Bedienung für Laien", weight: 0.25, description: "Wie einfach das Produkt unter Stress richtig benutzt wird." },
    { key: "ausstattung", label: "Ausstattung & Norm", weight: 0.15, description: "DIN-Norm, Prüfplakette, Halterung, Haltbarkeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Anschaffung und Folgekosten (Wartung, Nachfüllen)." },
  ],

  method:
    "Grundlage sind die DIN 13157 für Erste-Hilfe-Material, der Test von Feuerlöschern und Löschsprays der Stiftung Warentest und deren Ratgeber „Feuer löschen“, die Vorsorgeempfehlungen des BBK zur Hausapotheke sowie Herstellerangaben zu Brandklassen und Löschleistung. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "LEINA-WERKE Erste-Hilfe-Koffer SAN, DIN 13157",
      brand: "LEINA-WERKE",
      variant: "REF 21032, orange",
      visual: { kind: "station", tone: "forest" },
      priceTier: 1,
      ratings: { wirkung: 9.0, bedienung: 9.0, ausstattung: 9.5, preis: 8.5 },
      bestFor: "Jeder Haushalt, Keller, Werkstatt",
      verdict:
        "Der Standard für Betriebe – und eine hervorragende Basis für zu Hause: Der Inhalt nach DIN 13157 deckt Wunden, Blutungen, Verbrennungen und Verstauchungen ab. Der robuste Koffer lässt sich an der Wand montieren.",
      features: [
        "Inhalt nach DIN 13157 (Verbandkasten für Betriebe, „klein“)",
        "Koffer ca. 310 × 210 × 130 mm mit Wandhalterung (Anbieterangabe)",
        "Hersteller LEINA-WERKE, Windeck (Deutschland); Variante nach DIN 13169 (groß) erhältlich",
      ],
      pros: ["Vollständiger, genormter Inhalt", "Robust und übersichtlich", "Ersatzteile einzeln nachkaufbar"],
      cons: ["Keine Medikamente – Hausapotheke separat", "Sterile Materialien haben ein Verfallsdatum"],
      specs: { produkt: "Erste-Hilfe-Koffer", norm: "DIN 13157", einsatz: "Wunden, Blutungen, Verbrennungen", haltbarkeit: "Steriles Material mit Verfallsdatum", extra: "Wandhalterung" },
      asin: "B0039WXOR2",
      query: "LEINA-WERKE Erste-Hilfe-Koffer SAN DIN 13157",
    },
    {
      rank: 2,
      label: "Bester Feuerlöscher",
      name: "Jockel S6JX Green E 21 Schaumlöscher 6 l",
      brand: "Jockel",
      variant: "Brandklassen A, B · fluorfrei",
      visual: { kind: "cylinder", tone: "mint" },
      priceTier: 3,
      ratings: { wirkung: 9.5, bedienung: 7.5, ausstattung: 8.5, preis: 7.0 },
      bestFor: "Wohnung, Haus, Keller",
      verdict:
        "Stiftung Warentest empfiehlt für den Haushalt vor allem Schaum- und Wasserlöscher mit 6 Litern – im Test löschte der Prüfer damit ein Feuer in höchstens 12 Sekunden. Der Jockel S6JX ist so ein Gerät: fluorfrei, nachfüllbar, mit Prüfplakette.",
      features: [
        "6 Liter Schaum, Löschleistung 21 A / 113 B (6 Löschmitteleinheiten)",
        "Fluor- und lösungsmittelfrei, laut Anbieter an elektrischen Anlagen bis 1.000 V einsetzbar (Mindestabstand beachten)",
        "Aufladelöscher mit absperrbarer Löschpistole, Einsatz von +5 bis +60 °C, Made in Germany",
      ],
      pros: ["Viel Löschmittel – Reserve für einen zweiten Versuch", "Nachfüllbar und wartbar", "Fluorfrei"],
      cons: ["Rund 10,5 kg schwer", "Nicht frostsicher (ab +5 °C)", "Nicht für Fettbrände (Klasse F)"],
      specs: { produkt: "Schaumfeuerlöscher", norm: "EN 3, 21 A / 113 B", einsatz: "Feststoffe, Flüssigkeiten", haltbarkeit: "Wartung alle 2 Jahre empfohlen", extra: "Prüfplakette" },
      asin: "B092LYQT7Z",
      query: "Jockel S6JX Green E 21 Schaumlöscher 6 l",
    },
    {
      rank: 3,
      label: "Für Küche & Auto",
      name: "ABUS Feuerstopp AFS625 Löschspray",
      brand: "ABUS",
      variant: "fluorfrei, 5A / 5F",
      visual: { kind: "oilspray", tone: "green" },
      priceTier: 1,
      ratings: { wirkung: 7.0, bedienung: 9.5, ausstattung: 8.0, preis: 8.5 },
      bestFor: "Küche, Grill, Wohnmobil, Auto",
      verdict:
        "Klein, leicht, sofort einsatzbereit: Das Löschspray löscht laut ABUS Brände der Klassen A und F – also auch kleine Fettbrände. Stiftung Warentest empfahl in ihrem Test die größeren Sprays von Abus und Prymos.",
      features: [
        "Brandklassen 5A und 5F, laut Anbieter bis 1.000 V mit 1 m Abstand",
        "Reichweite rund 3 m, Sprühzeit etwa 25 Sekunden, PFAS- und fluorfrei",
        "Laut ABUS 10 Jahre ab Herstellung einsatzbereit, Made in Germany",
      ],
      pros: ["Auch für kleine Fettbrände", "Leicht und einfach", "Lange haltbar"],
      cons: ["Wenig Löschmittel – nur für Entstehungsbrände", "Ab +5 °C einsatzbereit", "Ersetzt keinen 6-l-Löscher"],
      specs: { produkt: "Löschspray", norm: "5A / 5F", einsatz: "Kleine Brände, Fettbrand in der Pfanne", haltbarkeit: "10 Jahre ab Herstellung (Anbieter)", extra: "Halterung optional" },
      asin: "B0F4DQ4V6V",
      query: "ABUS Feuerstopp AFS625",
    },
  ],

  comparison: [
    { key: "produkt", label: "Produkt" },
    { key: "norm", label: "Norm / Klasse" },
    { key: "einsatz", label: "Einsatz" },
    { key: "haltbarkeit", label: "Haltbarkeit" },
    { key: "extra", label: "Extra" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "erste-hilfe-koffer-feuerloescher-bewertung-vergleich.svg",
      title: "Erste Hilfe und Brandschutz: Die 3 besten Produkte",
      alt: "Balkendiagramm: Bewertung von Erste-Hilfe-Koffer, Schaumlöscher und Löschspray in den Kriterien Wirkung, Bedienung, Ausstattung und Preis",
      caption: "Unsere Bewertung je Kriterium. Der Erste-Hilfe-Koffer ist Pflicht, der 6-l-Löscher hat die größte Löschwirkung.",
    },
    steps: {
      kind: "steps",
      file: "entstehungsbrand-loeschen-anleitung.svg",
      title: "Einen Entstehungsbrand löschen",
      subtitle: "Nur wenn es gefahrlos möglich ist",
      alt: "Infografik: Entstehungsbrand löschen – alarmieren, Fluchtweg sichern, mit Wind und von unten löschen, Fettbrand nie mit Wasser, Raum verlassen und Tür schließen",
      caption: "Eigene Sicherheit geht vor: Wenn der Brand nicht in Sekunden aus ist, raus und Tür zu.",
      steps: [
        { title: "Alarmieren", text: "Mitbewohner warnen, 112 rufen – oder jemand anderen rufen lassen." },
        { title: "Fluchtweg im Rücken", text: "Immer so stehen, dass die Tür hinter dir frei bleibt." },
        { title: "Gezielt löschen", text: "Stoßweise auf die Glut, von vorn nach hinten, von unten nach oben." },
        { title: "Fett nie mit Wasser", text: "Fettbrand: Herd aus, Deckel drauf oder Löscher der Klasse F." },
        { title: "Rückzug", text: "Klappt es nicht sofort: Raum verlassen, Tür schließen, Feuerwehr einweisen." },
      ],
    },
  },

  editorial: {
    title: "Erste Hilfe und Brandschutz: Wenn Hilfe länger braucht",
    intro:
      "Welcher Erste-Hilfe-Koffer sinnvoll ist, welche Feuerlöscher zu Hause empfohlen werden und warum die Löschdecke umstritten ist.",
    sections: [
      {
        id: "beste-ausstattung",
        h2: "Welcher Erste-Hilfe-Koffer und welcher Feuerlöscher sind die besten?",
        blocks: [
          { quick: "Der [LEINA-WERKE Erste-Hilfe-Koffer nach DIN 13157](produkt:1) ist die beste Basis. Als Feuerlöscher empfehlen wir einen 6-Liter-Schaumlöscher wie den [Jockel S6JX](produkt:2), für Küche und Auto zusätzlich das Löschspray [ABUS AFS625](produkt:3)." },
          { first: "In einer großflächigen Krise sind Rettungsdienst und Feuerwehr stark gefordert, Notrufe kommen bei Netzausfall womöglich gar nicht durch. Gleichzeitig steigt das Risiko: Kerzen, Gaskocher, provisorische Heizungen und Notstrom verursachen mehr Brände, Unfälle beim Improvisieren mehr Verletzungen. Wer selbst Erste Hilfe leisten und einen Entstehungsbrand löschen kann, gewinnt entscheidende Minuten." },
          { p: "Für die Erste Hilfe empfehlen wir einen Koffer nach DIN 13157 – das ist die Norm für Verbandkästen in Betrieben. Der Inhalt ist umfangreicher als ein Kfz-Verbandkasten und deckt typische Verletzungen ab. Medikamente sind nicht enthalten; dafür braucht es eine Hausapotheke, wie sie auch das BBK empfiehlt." },
          { p: "Beim Brandschutz ist die Empfehlung der Stiftung Warentest eindeutig: Für den Haushalt eignen sich vor allem Schaum- und Wasserlöscher mit 6 Litern Inhalt; damit gelang das Löschen im Test in höchstens 12 Sekunden, mit Löschsprays dauerte es bis zu 26 Sekunden. Sprays sind eine gute Ergänzung für Küche und Auto, ersetzen den großen Löscher aber nicht." },
          { figure: "scores" },
          { callout: { title: "Fettbrand nie mit Wasser", warn: true, text: "Brennendes Fett oder Öl explodiert förmlich, wenn Wasser darauf trifft. Herd ausschalten, Deckel auflegen oder einen Löscher der Brandklasse F verwenden. Ein normaler Schaumlöscher der Klassen A und B ist für Fettbrände nicht zugelassen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Beim Erste-Hilfe-Koffer zählen die Norm (DIN 13157 oder 13169), Übersichtlichkeit und das Verfallsdatum steriler Materialien. Beim Feuerlöscher zählen Brandklassen, Löschmittelmenge, Prüfplakette und Wartbarkeit." },
          {
            table: {
              caption: "Brandklassen und passende Löschmittel",
              head: ["Klasse", "Brennstoff", "Geeignet"],
              rows: [
                ["**A**", "Feste Stoffe: Holz, Papier, Textilien", "Schaum, Wasser, Pulver"],
                ["**B**", "Flüssigkeiten: Benzin, Lacke", "Schaum, Pulver, CO₂"],
                ["**C**", "Gase", "Pulver – Gaszufuhr stoppen"],
                ["**F**", "Speisefette und -öle", "Fettbrandlöscher, Spray mit F-Zulassung"],
              ],
            },
          },
          { h3: "Warum kein Pulverlöscher für die Wohnung?" },
          { p: "Pulverlöscher löschen viele Brandklassen, hinterlassen aber feinen, ätzenden Staub, der sich in der ganzen Wohnung verteilt und Elektronik zerstört. Für Wohnräume sind Schaum- und Wasserlöscher die bessere Wahl." },
          { h3: "Die Löschdecke" },
          { p: "Löschdecken nach DIN EN 1869 werden für Fettbrände angeboten. Verbraucherratgeber sehen sie für den Haushalt kritisch, weil unter der Decke das Feuer weiterbrennen kann und die Anwendung Übung erfordert. Wer eine Löschdecke hat, sollte sie sicher handhaben können – oder für die Küche lieber ein Löschspray mit F-Zulassung bereithalten." },
          { h3: "Wartung" },
          { p: "Feuerlöscher sollten regelmäßig geprüft werden, in Betrieben alle zwei Jahre. Auch privat ist das sinnvoll. Löschsprays sind Einweggeräte mit Verfallsdatum. Beim Erste-Hilfe-Koffer verbrauchtes Material sofort nachkaufen und Verfallsdaten jährlich prüfen." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Jeder Haushalt braucht einen Erste-Hilfe-Koffer, einen 6-Liter-Löscher pro Etage und Rauchmelder. Ein Löschspray ergänzt Küche, Auto und Wohnmobil." },
          {
            cards: [
              { title: "Erste Hilfe", text: "Genormt und komplett: LEINA-WERKE DIN 13157.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Wohnung & Haus", text: "6 Liter Schaum, fluorfrei: Jockel S6JX.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Küche & Auto", text: "Klein, mit Fettbrand-Zulassung: ABUS AFS625.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Fettbrand & Löschdecke", text: "Fettbrandlöscher, Löschdecke, Rauchmelder in der Top 5.", link: { href: "#top5-ergaenzung", label: "Zur Top 5" } },
              { title: "CO-Warnung", text: "CO-Melder für Kocher und Heizung.", link: { href: "/krisenvorsorge/energie-waerme/waerme-kochen-sicherheit/", label: "Wärme & Kochen" } },
              { title: "Hygiene", text: "Händedesinfektion und Notfall-WC.", link: { href: "/krisenvorsorge/schutzraum-ausstattung/hygiene-sanitaer/", label: "Hygiene & Sanitär" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-ergaenzung",
    h2: "Die 5 besten Ergänzungen – Fettbrand, Löschdecke, Melder",
    intro:
      "Ein Fettbrandlöscher für die Küche, eine Löschdecke, ein Rauchmelder, eine zweite Erste-Hilfe-Ausstattung und ein Dauerdrucklöscher ergänzen die Top 3.",
    items: [
      { name: "Gloria FB6EASY Fettbrandlöscher 6 l", for: "Küche mit Fettbrand", text: "Schaumlöscher mit Klasse F (21 A / 113 B / 75 F), laut Anbieter frostsicher von −30 bis +60 °C.", asin: "B007CM1YE0", query: "Gloria FB6EASY Fettbrand Feuerlöscher" },
      { name: "mumbi Löschdecke 120 × 180 cm", for: "Löschdecke nach DIN EN 1869", text: "Glasfaser-Löschdecke mit Wandbefestigung – nur einsetzen, wenn man die Anwendung beherrscht.", asin: "B007KLSM5C", query: "mumbi Löschdecke 120 x 180" },
      { name: "Ei Electronics Ei650 Rauchwarnmelder", for: "Früh warnen", text: "Rauchmelder mit 10-Jahres-Batterie – Pflicht in allen Bundesländern und im Blackout besonders wichtig.", asin: "B007IGQ5SK", query: "Ei Electronics Ei650" },
      { name: "LEINA-WERKE SAN DRK-Edition DIN 13157:2021", for: "Aktuelle Normfassung", text: "Erste-Hilfe-Koffer in Kooperation mit dem DRK, laut Anbieter nach DIN 13157:2021-11.", asin: "B07ZJJFXHB", query: "LEINA-WERKE 82102 SAN DRK DIN 13157" },
      { name: "Jockel S6LJM Bio34 Plus", for: "Dauerdrucklöscher", text: "6-Liter-Schaum-Dauerdrucklöscher mit Manometer – der Druck lässt sich auf einen Blick prüfen.", asin: "B001EXJLUM", query: "Jockel S6LJM Bio34 Plus" },
    ],
  },

  guide: {
    sections: [
      {
        id: "im-ernstfall",
        h2: "Wie handelt man bei Verletzung oder Brand richtig?",
        blocks: [
          { quick: "Eigenschutz geht vor: Bei Brand warnen, 112 rufen, nur löschen, wenn es gefahrlos möglich ist, sonst raus und Tür schließen. Bei Verletzungen Ruhe bewahren, Notruf absetzen und Erste Hilfe leisten, so gut es geht." },
          { p: "Ein Erste-Hilfe-Kurs ist die beste Vorsorge – er dauert einen Tag, wird von Hilfsorganisationen wie DRK, ASB, Johanniter und Malteser angeboten und sollte alle paar Jahre aufgefrischt werden. Der beste Verbandkasten nützt wenig, wenn man im Ernstfall nicht weiß, was zu tun ist." },
          { figure: "steps" },
          { h3: "Hausapotheke ergänzen" },
          {
            list: [
              "**Persönliche Medikamente** für mindestens zehn Tage, Medikationsplan auf Papier.",
              "**Schmerz- und Fiebermittel**, Mittel gegen Durchfall und Elektrolyte.",
              "**Fieberthermometer**, Pinzette, Zeckenkarte.",
              "**Desinfektionsmittel** für Haut und Wunden.",
              "**Rettungsdecke und Einmalhandschuhe** – im Koffer nach DIN enthalten, aber gut, Reserve zu haben.",
            ],
          },
          {
            facts: [
              { value: "6 l", label: "Löschmittel – von Stiftung Warentest für den Haushalt empfohlen" },
              { value: "12 s", label: "maximale Löschzeit mit 6-l-Löschern im Test" },
              { value: "26 s", label: "maximale Löschzeit mit Löschsprays im Test" },
            ],
          },
          { h3: "Wo der Feuerlöscher hingehört" },
          { p: "Gut sichtbar und erreichbar im Flur, nahe der Küche – nicht direkt neben dem Herd, damit man im Brandfall nicht durch das Feuer greifen muss. In mehrstöckigen Häusern einen Löscher pro Etage. Alle Bewohner sollten wissen, wo er hängt und wie er funktioniert." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Erste-Hilfe-Koffer ist für zu Hause am besten?", a: "Ein Koffer nach DIN 13157 – unsere Empfehlung ist der LEINA-WERKE SAN. Er enthält mehr Material als ein Kfz-Verbandkasten. Medikamente gehören zusätzlich in eine Hausapotheke." },
    { q: "Welcher Feuerlöscher ist für die Wohnung am besten?", a: "Stiftung Warentest empfiehlt Schaum- oder Wasserlöscher mit 6 Litern Inhalt. Unsere Empfehlung ist der Jockel S6JX Green E 21. Für die Küche ist ein Gerät mit Brandklasse F sinnvoll, etwa der Gloria FB6EASY oder ein Löschspray mit F-Zulassung." },
    { q: "Reicht ein Feuerlöschspray?", a: "Für kleine Entstehungsbrände in Küche oder Auto ja. Für einen größeren Brand ist die Löschmittelmenge zu gering. Ein 6-Liter-Löscher bietet deutlich mehr Reserve." },
    { q: "Ist eine Löschdecke sinnvoll?", a: "Löschdecken nach DIN EN 1869 können kleine Fettbrände ersticken, gelten bei Verbraucherratgebern aber als schwierig in der Anwendung, weil das Feuer darunter weiterbrennen kann. Ein Topfdeckel oder ein Löscher der Klasse F ist oft einfacher." },
    { q: "Wie oft muss ein Feuerlöscher gewartet werden?", a: "In Betrieben alle zwei Jahre; für Privathaushalte ist das ebenfalls empfehlenswert. Wartungsfirmen prüfen Druck, Löschmittel und Dichtungen und erneuern die Prüfplakette." },
    { q: "Ist ein Pulverlöscher für die Wohnung geeignet?", a: "Eher nicht. Pulver verteilt sich in der ganzen Wohnung und kann Elektronik und Einrichtung stark beschädigen. Schaum- oder Wasserlöscher sind für Wohnräume besser geeignet." },
  ],

  sources: [
    { label: "Stiftung Warentest: Feuer löschen – Brände bekämpfen, ohne sich zu gefährden", url: "https://www.test.de/Feuer-loeschen-So-bekaempfen-Sie-Braende-ohne-sich-zu-gefaehrden-5264899-5264906/" },
    { label: "t-online: Feuerlöscher für zu Hause – was die Feuerwehr empfiehlt", url: "https://www.t-online.de/heim-garten/wohnen/id_76335134/feuerloescher-fuer-zu-hause-was-die-feuerwehr-empfiehlt.html" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "ausstattung-licht", text: "Licht und gepackter Notfallrucksack." },
    { slug: "waerme-kochen-sicherheit", text: "CO-Melder und sicheres Kochen." },
    { slug: "atemschutz", text: "FFP3- und Vollmasken." },
    { group: "schutzraum-ausstattung", text: "Alle Ratgeber zu Schutzraum & Ausstattung." },
  ],
};
