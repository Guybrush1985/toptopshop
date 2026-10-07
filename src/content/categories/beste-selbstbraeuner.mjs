// Kategorie: Selbstbräuner
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "beste-selbstbraeuner",
  area: "braeunung",
  navLabel: "Selbstbräuner",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Selbstbräuner 2026 – Vergleich & Kaufberatung",
  metaDescription:
    "Die 3 besten Selbstbräuner 2026: unsere Gesamtwahl, der Preis-Leistungs-Tipp und die Premium-Wahl – plus Top 5 fürs Gesicht, Anleitung und FAQ.",

  eyebrow: "Bräunung · Selbstbräuner",
  h1: "Die 3 besten Selbstbräuner 2026",
  lead:
    "Bräune ohne UV-Strahlung – aber ohne Streifen und Orangestich. Wir haben die bekanntesten Selbstbräuner verglichen und auf drei Empfehlungen reduziert.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Bondi Sands Self Tanning Foam**](produkt:1), weil er natürlich wirkende Farbe, einfache Anwendung und einen fairen Preis verbindet. Wer sparen möchte, greift zur [**St. Moriz Professional Mousse**](produkt:2); wer das bestmögliche Ergebnis will, zur [**St. Tropez Classic Bronzing Mousse**](produkt:3).",

  top3Title: "Unsere Top 3 Selbstbräuner",
  top3Intro:
    "Drei Empfehlungen für drei Bedürfnisse: die beste Wahl für die meisten, das beste Preis-Leistungs-Verhältnis und die Wahl ohne Kompromisse.",
  comparisonTitle: "Die 3 besten Selbstbräuner im Vergleich",

  criteria: [
    { key: "ergebnis", label: "Farbergebnis", weight: 0.35, description: "Wie natürlich, gleichmäßig und streifenfrei wirkt die Bräune laut Testberichten und Kundenfeedback?" },
    { key: "anwendung", label: "Anwendung", weight: 0.25, description: "Verteilbarkeit, Trocknungszeit, Farbführung und Fehlertoleranz." },
    { key: "pflege", label: "Pflege & Duft", weight: 0.15, description: "Pflegende Inhaltsstoffe, Hautgefühl und der typische Selbstbräuner-Geruch." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis pro Anwendung im Verhältnis zum Ergebnis." },
  ],

  method:
    "Grundlage sind Herstellerangaben, veröffentlichte Testergebnisse unabhängiger Prüfinstitute (u. a. Stiftung Warentest, Selbstbräuner-Test in Heft 04/2023), Inhaltsstofflisten sowie die Auswertung von Kundenbewertungen. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Bondi Sands Self Tanning Foam",
      brand: "Bondi Sands",
      variant: "Light/Medium, Dark und weitere Farbtiefen",
      visual: { kind: "foam", tone: "forest" },
      priceTier: 2,
      ratings: { ergebnis: 9.0, anwendung: 9.0, pflege: 8.5, preis: 8.5 },
      bestFor: "die meisten Hauttypen",
      verdict:
        "Die beste Wahl für die meisten: leichte Mousse, natürlich wirkende Farbe und eine große Auswahl an Farbtiefen zu einem fairen Preis.",
      features: [
        "Leichter Schaum, der sich mit Handschuh schnell und gleichmäßig verteilen lässt",
        "Mehrere Farbtiefen – von hell bis sehr dunkel – sowie eine **1 Hour Express**-Variante",
        "Laut Hersteller mit Aloe Vera und typischem Kokosduft",
      ],
      pros: ["Natürlich wirkender Farbton ohne starken Orangestich", "Zieht schnell ein, klebt kaum", "Breit erhältlich, faires Preisniveau"],
      cons: ["Kokosduft ist Geschmackssache", "Dunkle Varianten verzeihen weniger Auftragsfehler"],
      specs: {
        typ: "Mousse (Schaum)",
        farbfuehrung: "Ja, leichte Sofortfarbe",
        farbtiefen: "Light/Medium bis Dark, plus Express",
        besonderheit: "Express-Variante für schnelle Ergebnisse",
      },
      asin: "B013WVAHJ2",
      query: "Bondi Sands Self Tanning Foam",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "St. Moriz Professional Mousse",
      brand: "St. Moriz",
      variant: "Medium, Dark",
      visual: { kind: "foam", tone: "mint" },
      priceTier: 1,
      ratings: { ergebnis: 8.0, anwendung: 9.0, pflege: 7.5, preis: 9.5 },
      bestFor: "Preisbewusste & Vielnutzer",
      verdict:
        "Das beste Preis-Leistungs-Verhältnis: eine einfach aufzutragende Mousse, die bei Stiftung Warentest vor allem in der Anwendung überzeugt hat.",
      features: [
        "Mousse mit Farbführung – du siehst sofort, wo du schon aufgetragen hast",
        "Laut Stiftung Warentest (Selbstbräuner-Test, Heft 04/2023) besonders stark beim Auftragen",
        "Günstiger Preis pro Anwendung, gut für regelmäßiges Bräunen",
      ],
      pros: ["Sehr günstig", "Einfach und fehlertolerant in der Anwendung", "Gut für große Flächen"],
      cons: ["Farbergebnis etwas weniger fein als bei Premium-Produkten", "Weniger pflegende Zusätze"],
      specs: {
        typ: "Mousse (Schaum)",
        farbfuehrung: "Ja",
        farbtiefen: "Medium, Dark",
        besonderheit: "Sehr niedriger Preis pro Anwendung",
      },
      asin: "B0B34XB786",
      query: "St. Moriz Professional Mousse Selbstbräuner",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "St. Tropez Self Tan Classic Bronzing Mousse",
      brand: "St. Tropez",
      variant: "Classic",
      visual: { kind: "foam", tone: "green" },
      priceTier: 3,
      ratings: { ergebnis: 9.5, anwendung: 9.0, pflege: 9.0, preis: 7.0 },
      bestFor: "anspruchsvolle Anwender",
      verdict:
        "Für alle, die keine Kompromisse eingehen wollen: der Klassiker unter den Premium-Selbstbräunern mit besonders feinem, gleichmäßigem Ergebnis.",
      features: [
        "Bronzierende Farbführung zeigt beim Auftragen jede Stelle",
        "Gleichmäßige, natürlich wirkende Bräune – auch bei Einsteigern beliebt",
        "Feine Textur, die sich gut ausstreichen lässt",
      ],
      pros: ["Sehr ebenmäßiges Ergebnis", "Angenehmes Hautgefühl", "Etablierte Marke mit großem Sortiment"],
      cons: ["Deutlich teurer als Drogerie-Alternativen", "Farbführung kann auf heller Kleidung abfärben, bis sie abgewaschen ist"],
      specs: {
        typ: "Mousse (Schaum)",
        farbfuehrung: "Ja, deutlich",
        farbtiefen: "Classic, weitere Varianten im Sortiment",
        besonderheit: "Besonders gleichmäßiges Ergebnis",
      },
      asin: "B0027UY3IG",
      query: "St. Tropez Self Tan Classic Bronzing Mousse",
    },
  ],

  comparison: [
    { key: "typ", label: "Textur" },
    { key: "farbfuehrung", label: "Farbführung" },
    { key: "farbtiefen", label: "Farbtiefen" },
    { key: "besonderheit", label: "Besonderheit" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-selbstbraeuner-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Selbstbräuner 2026 im Vergleich",
      alt: "Balkendiagramm: Bewertung der drei besten Selbstbräuner 2026 in den Kriterien Farbergebnis, Anwendung, Pflege und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Bondi Sands punktet in der Breite, St. Tropez beim Ergebnis, St. Moriz beim Preis.",
    },
    steps: {
      kind: "steps",
      file: "selbstbraeuner-richtig-auftragen-anleitung.svg",
      title: "Selbstbräuner richtig auftragen",
      subtitle: "In fünf Schritten zur streifenfreien Bräune",
      alt: "Infografik: Selbstbräuner in fünf Schritten richtig auftragen – peelen, trockene Stellen eincremen, mit Handschuh auftragen, Hände reinigen, einwirken lassen",
      caption: "So gelingt die Anwendung – vom Peeling am Vortag bis zur Einwirkzeit.",
      steps: [
        { title: "Am Vortag peelen", text: "Ein Körperpeeling entfernt lose Hautschüppchen, damit die Farbe später nicht fleckig wird." },
        { title: "Trockene Stellen vorbereiten", text: "Ellenbogen, Knie, Knöchel und Hände dünn mit Feuchtigkeitscreme eincremen – dort nimmt die Haut sonst zu viel Farbe auf." },
        { title: "Mit Handschuh auftragen", text: "In kreisenden Bewegungen von unten nach oben arbeiten, Bein für Bein, Arm für Arm." },
        { title: "Übergänge verblenden", text: "Hand- und Fußrücken, Haaransatz und Gelenke nur mit dem Rest auf dem Handschuh ausstreichen." },
        { title: "Einwirken lassen", text: "Lockere, dunkle Kleidung tragen und erst nach der angegebenen Einwirkzeit duschen oder Sport machen." },
      ],
    },
  },

  editorial: {
    title: "Alles, was du vor dem Kauf eines Selbstbräuners wissen solltest",
    intro:
      "Wie Selbstbräuner funktionieren, worauf es beim Kauf ankommt und welches Produkt zu welchem Hauttyp passt – kompakt erklärt.",
    sections: [
      {
        id: "beste-selbstbraeuner",
        h2: "Welche Selbstbräuner sind aktuell die besten?",
        blocks: [
          { quick: "Der beste Selbstbräuner für die meisten Menschen ist der **Bondi Sands Self Tanning Foam**: Er liefert eine natürlich wirkende Bräune, lässt sich auch von Einsteigern gut auftragen und ist in vielen Farbtiefen erhältlich. Die günstigste gute Alternative ist die **St. Moriz Professional Mousse**, die Premium-Wahl die **St. Tropez Classic Bronzing Mousse**." },
          { first: "Fast alle Selbstbräuner arbeiten mit demselben Wirkstoff: Dihydroxyaceton, kurz DHA. Der Zuckerabkömmling reagiert mit Eiweißbausteinen in der obersten Hornschicht der Haut und bildet dort braune Farbstoffe. Chemisch ist das eine Maillard-Reaktion – derselbe Prozess, der Brotkruste braun färbt. Viele Produkte kombinieren DHA mit Erythrulose, die langsamer reagiert und die Bräune gleichmäßiger und etwas langlebiger machen kann." },
          { p: "Weil nur die abgestorbenen Zellen der obersten Hautschicht gefärbt werden, verblasst die Bräune mit der natürlichen Hauterneuerung. Je nach Hauttyp, Pflege und Duschgewohnheiten hält das Ergebnis meist einige Tage. Der große Vorteil: Es ist keine UV-Strahlung nötig – und damit auch kein Sonnenbrand und keine zusätzliche Hautalterung durch die Bräune selbst." },
          { p: "Die Unterschiede zwischen guten und mittelmäßigen Produkten liegen deshalb weniger im Wirkstoff als in der Rezeptur: Wie gut lässt sich das Produkt verteilen? Wie natürlich wirkt der Farbton? Wie stark ist der typische Geruch? Genau an diesen Punkten setzt unser Vergleich an." },
          { figure: "scores" },
          { quote: "Gute Selbstbräuner unterscheiden sich weniger im Wirkstoff als in der Rezeptur – und die entscheidet über Streifen, Farbton und Geruch." },
          { callout: { title: "Wichtig", warn: true, text: "Selbstbräuner schützen **nicht** vor UV-Strahlung. Auch mit künstlicher Bräune brauchst du in der Sonne ein Sonnenschutzmittel mit ausreichendem Lichtschutzfaktor. Darauf weist auch die Stiftung Warentest ausdrücklich hin." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Selbstbräuners achten?",
        blocks: [
          { quick: "Entscheidend sind fünf Punkte: die passende Textur, die richtige Farbtiefe für deinen Hauttyp, eine Farbführung für Einsteiger, die Einwirkzeit und der Preis pro Anwendung." },
          { h3: "Textur: Mousse, Lotion, Tropfen oder Spray?" },
          { p: "Die Textur bestimmt, wie leicht dir das Auftragen fällt. Für den Körper sind Mousses am beliebtesten, weil sie schnell trocknen und sich mit einem Handschuh gleichmäßig verteilen lassen. Lotionen pflegen mehr, brauchen aber länger zum Einziehen. Tropfen mischt man in die eigene Creme – ideal fürs Gesicht. Sprays erreichen den Rücken leichter, verlangen aber mehr Übung." },
          {
            table: {
              caption: "Selbstbräuner-Texturen im Vergleich",
              head: ["Textur", "Stärken", "Ideal für"],
              rows: [
                ["**Mousse**", "Trocknet schnell, leicht zu verteilen, meist mit Farbführung", "Körper, Einsteiger"],
                ["**Lotion / graduell**", "Pflegt, Bräune baut sich langsam auf, sehr fehlertolerant", "Helle Haut, tägliche Anwendung"],
                ["**Tropfen**", "Individuell dosierbar, in die eigene Pflege mischbar", "Gesicht, Hals, Dekolleté"],
                ["**Spray**", "Erreicht schwierige Stellen wie den Rücken", "Geübte Anwender"],
                ["**Tücher**", "Praktisch für unterwegs, keine Hilfsmittel nötig", "Reise, Nachbessern"],
              ],
            },
          },
          { h3: "Farbtiefe passend zum Hauttyp wählen" },
          { p: "Die häufigste Ursache für einen unnatürlichen Look ist eine zu dunkle Nuance. Als Faustregel gilt: lieber eine Stufe heller beginnen und bei Bedarf eine zweite Schicht auftragen. Sehr helle Haut profitiert von graduellen Lotionen oder Light-Varianten, gebräunte oder dunklere Haut von Dark- oder Ultra-Dark-Produkten." },
          { h3: "Farbführung: sehen, wo man schon war" },
          { p: "Viele Mousses enthalten eine sogenannte Farbführung (Guide Color) – eine sofort sichtbare, abwaschbare Tönung. Sie zeigt, wo bereits Produkt aufgetragen wurde, und verhindert so Lücken und Streifen. Für Einsteiger ist das der wichtigste Komfortfaktor. Nachteil: Bis zur ersten Dusche kann die Farbführung auf helle Textilien abfärben." },
          { h3: "Einwirkzeit, Duft und Preis" },
          { p: "Klassische Produkte entwickeln ihre Farbe über mehrere Stunden und werden oft abends aufgetragen. Express-Varianten wie der Bondi Sands 1 Hour Express lassen dich die Intensität über die Einwirkzeit steuern. Den typischen leicht süßlichen Geruch verursacht die DHA-Reaktion selbst – Parfüm kann ihn überdecken, aber nicht ganz verhindern. Beim Preis lohnt der Blick auf die Kosten pro Anwendung: Eine günstige Mousse, die für viele Anwendungen reicht, kann am Ende deutlich günstiger sein als ein kleines Premium-Produkt." },
        ],
      },
      {
        id: "welcher-selbstbraeuner-passt",
        h2: "Welcher Selbstbräuner passt zu wem?",
        blocks: [
          { quick: "Einsteiger fahren mit einer Mousse mit Farbführung am besten, sehr helle Haut mit einer graduellen Lotion, und fürs Gesicht sind Tropfen die flexibelste Lösung." },
          {
            cards: [
              { title: "Einsteiger", text: "Eine Mousse mit Farbführung verzeiht Fehler und zeigt sofort, wo noch Produkt fehlt. Unsere Wahl: Bondi Sands Self Tanning Foam.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Sehr helle Haut", text: "Graduelle Lotionen bauen die Farbe über mehrere Tage auf – so bleibt das Ergebnis natürlich und kontrollierbar.", link: { href: "#top5-gesicht", label: "Zur Top 5" } },
              { title: "Kleines Budget", text: "Die St. Moriz Professional Mousse liefert gute Ergebnisse zu einem sehr niedrigen Preis pro Anwendung.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Besonderer Anlass", text: "Für Hochzeit, Urlaub oder Shooting lohnt sich die Premium-Mousse von St. Tropez – am besten zwei Tage vorher testen.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Gesicht", text: "Selbstbräunungstropfen in der Tagescreme erlauben eine fein dosierbare, tägliche Anpassung.", link: { href: "#top5-gesicht", label: "Zur Top 5" } },
              { title: "Sonnenbad geplant", text: "Selbstbräuner ersetzen keinen Sonnenschutz. Für das Sonnenbad brauchst du zusätzlich ein Produkt mit LSF.", link: { href: "/beste-braeunungsoele/", label: "Bräunungsöle mit LSF" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-gesicht",
    h2: "Die 5 besten Selbstbräuner fürs Gesicht",
    intro:
      "Die Gesichtshaut ist dünner, empfindlicher und oft zu Unreinheiten geneigt. Diese fünf Produkte sind speziell für das Gesicht gemacht oder lassen sich dort besonders fein dosieren.",
    items: [
      { name: "Tan-Luxe The Face Illuminating Self-Tan Drops", for: "Fein dosierbar", text: "Tropfen zum Mischen mit der eigenen Pflege. Laut Hersteller mit Himbeersamenöl, Vitamin E und Aloe Vera; die Farbe entwickelt sich innerhalb weniger Stunden. Enthält Alkohol und Parfüm – bei sehr empfindlicher Haut vorher testen.", query: "Tan-Luxe The Face Self-Tan Drops", asin: "B01F487V5Y" },
      { name: "Isle of Paradise Self-Tanning Drops", for: "Gegen Rötungen & Fahlheit", text: "Die Farbtöne sind farbkorrigierend aufgebaut: Grün-, Violett- und Pfirsichbasen sollen Rötungen, fahle oder orange Töne ausgleichen. Die Intensität steuerst du über die Anzahl der Tropfen.", query: "Isle of Paradise Self Tanning Drops", asin: "B07D7XDHWD" },
      { name: "Bondi Sands Gradual Tan Face Lotion", for: "Sanft & täglich", text: "Feuchtigkeitscreme mit leichtem Bräunungseffekt, die sich über mehrere Anwendungen aufbaut. Ideal für helle Haut und alle, die eine kaum merkliche Veränderung wollen.", query: "Bondi Sands Gradual Tan Face Lotion", asin: "B0BN426GYQ" },
      { name: "Clarins Self Tanning Addition Concentré Éclat", for: "Premium-Pflege", text: "Selbstbräunungskonzentrat, das tropfenweise in die gewohnte Gesichtspflege gegeben wird – für alle, die ihre Routine nicht umstellen möchten. Käufer loben vor allem, dass der typische Selbstbräuner-Geruch kaum auffällt.", query: "Clarins Addition Concentré Eclat Selbstbräuner", asin: "B00J9UR64U" },
      { name: "Bondi Sands Gradual Tanning Lotion Tinted Skin Perfector", for: "Gesicht & Körper", text: "Getönte, graduelle Lotion mit Sofort-Effekt für einen gleichmäßigen Glow – gut geeignet, wenn Gesicht und Körper denselben Ton bekommen sollen.", query: "Bondi Sands Gradual Tanning Lotion Tinted Skin Perfector", asin: "B0BGMRJRTQ" },
    ],
  },

  guide: {
    sections: [
      {
        id: "anleitung",
        h2: "So trägst du Selbstbräuner streifenfrei auf",
        blocks: [
          { quick: "Am Vortag peelen, trockene Stellen eincremen, mit Handschuh in kreisenden Bewegungen auftragen, Übergänge verblenden und die Einwirkzeit einhalten – so gelingt ein gleichmäßiges Ergebnis." },
          { p: "Die meisten Streifen und Flecken entstehen nicht durch das Produkt, sondern durch die Vorbereitung. Wer sich an die folgende Reihenfolge hält, erreicht auch mit günstigen Selbstbräunern ein sehr natürliches Ergebnis." },
          { figure: "steps" },
          { h3: "Die häufigsten Fehler – und wie du sie vermeidest" },
          {
            list: [
              "**Dunkle Handflächen:** Immer mit Applikationshandschuh arbeiten oder die Hände sofort gründlich waschen.",
              "**Dunkle Knie und Knöchel:** Trockene Haut nimmt mehr Farbe auf. Vorher dünn eincremen und dort nur wenig Produkt verwenden.",
              "**Orangestich:** Meist ist die Nuance zu dunkel oder es wurde zu viel aufgetragen. Lieber eine hellere Variante wählen und in zwei dünnen Schichten arbeiten.",
              "**Streifen an den Handgelenken:** Übergänge mit dem fast leeren Handschuh ausstreichen.",
              "**Flecken nach dem Sport:** Während der Einwirkzeit Schwitzen, Wasser und eng anliegende Kleidung vermeiden.",
            ],
          },
          {
            facts: [
              { value: "1 Tag", label: "vorher peelen, damit die Farbe gleichmäßig wird" },
              { value: "2 Schichten", label: "dünn statt einmal dick – für einen natürlichen Ton" },
              { value: "0 LSF", label: "Selbstbräuner ersetzen keinen Sonnenschutz" },
            ],
          },
          { h3: "Bräune pflegen und gleichmäßig verblassen lassen" },
          { p: "Damit die Bräune gleichmäßig nachlässt, hilft tägliche Feuchtigkeitspflege. Ölhaltige Duschgele und Peelings beschleunigen das Verblassen – praktisch, wenn du nachbessern oder neu starten möchtest. Für unschöne Ränder gibt es spezielle Entferner, etwa den Self Tan Eraser von Bondi Sands." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Selbstbräuner ist aktuell der beste?", a: "Unsere beste Gesamtwahl ist der Bondi Sands Self Tanning Foam, weil er eine natürlich wirkende Farbe, eine einfache Anwendung und einen fairen Preis verbindet. Die günstigste gute Alternative ist die St. Moriz Professional Mousse, die Premium-Wahl die St. Tropez Classic Bronzing Mousse." },
    { q: "Wie lange hält die Bräune von Selbstbräuner?", a: "Meist einige Tage. Selbstbräuner färben nur die oberste Hornschicht, die sich laufend erneuert. Wie lange die Farbe sichtbar bleibt, hängt von Hauttyp, Pflege, Peelings und Duschgewohnheiten ab. Tägliches Eincremen sorgt dafür, dass sie gleichmäßig verblasst." },
    { q: "Schützt Selbstbräuner vor Sonnenbrand?", a: "Nein. Die durch Selbstbräuner erzeugte Farbe bietet keinen nennenswerten Schutz vor UV-Strahlung. In der Sonne brauchst du zusätzlich ein Sonnenschutzmittel mit passendem Lichtschutzfaktor." },
    { q: "Ist Selbstbräuner schädlich für die Haut?", a: "Selbstbräuner auf DHA-Basis gelten bei bestimmungsgemäßer Anwendung als gut verträglich; DHA ist in der EU als kosmetischer Inhaltsstoff zugelassen. Wer empfindliche Haut hat oder zu Allergien neigt, sollte ein neues Produkt zuerst an einer kleinen Stelle testen. Sprays solltest du nicht einatmen und von Augen und Lippen fernhalten." },
    { q: "Warum riecht Selbstbräuner so typisch?", a: "Der leicht süßliche Geruch entsteht bei der Reaktion von DHA mit den Eiweißen der Haut – er ist also ein Zeichen dafür, dass das Produkt wirkt. Parfümierte Rezepturen überdecken ihn teilweise, nach dem ersten Duschen ist er meist verschwunden." },
    { q: "Wie bekomme ich Flecken von Selbstbräuner weg?", a: "Ein Körperpeeling, ein warmes Bad und ölhaltige Pflege beschleunigen das Verblassen. Für hartnäckige Stellen gibt es spezielle Selbstbräuner-Entferner. Kleine dunkle Ränder kannst du auch kaschieren, indem du die hellere Umgebung vorsichtig nachbräunst." },
    { q: "Mousse oder Lotion – was ist besser?", a: "Für den Körper und für Einsteiger ist eine Mousse meist die bessere Wahl: Sie trocknet schnell und zeigt mit Farbführung, wo du schon warst. Graduelle Lotionen eignen sich für sehr helle Haut und alle, die die Bräune langsam aufbauen möchten." },
  ],

  sources: [
    { label: "Stiftung Warentest: Selbstbräuner im Test", url: "https://www.test.de/Selbstbraeuner-im-Test-5749861-0/" },
  ],

  related: [
    { slug: "beste-braeunungsoele", text: "Bräune in der Sonne – mit Lichtschutzfaktor statt ohne Schutz." },
    { slug: "beste-after-sun-produkte", text: "Pflege nach dem Sonnenbad, damit die Bräune länger hält." },
    { area: "braeunung", text: "Alle Ratgeber rund um Bräune, Sonne und Pflege." },
  ],
};
