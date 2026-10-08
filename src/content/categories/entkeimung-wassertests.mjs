// Kategorie: Entkeimung & Wassertests (Krisenvorsorge › Wasserversorgung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "entkeimung-wassertests",
  area: "krisenvorsorge",
  group: "wasserversorgung",
  navLabel: "Entkeimung & Wassertests",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Wasser entkeimen: Die 3 besten Tabletten & Wassertests 2026",
  metaDescription:
    "Trinkwasser entkeimen und prüfen 2026: Micropur Forte, Aquatabs und Teststreifen mit Bakterientest im Vergleich – plus Dosierung, Einwirkzeit und Grenzen.",

  eyebrow: "Krisenvorsorge · Wasserversorgung",
  h1: "Die 3 besten Produkte zum Entkeimen und Testen von Wasser",
  lead:
    "Ein Filter hält Bakterien und Parasiten zurück, aber keine Viren. Entkeimungstabletten können diese Lücke laut Hersteller schließen – und Teststreifen geben einen groben Hinweis, ob Wasser mit Nitrat, Blei oder Keimen belastet sein könnte. Diese drei Produkte sind nach unserer Einschätzung eine sinnvolle Ergänzung für den Vorrat.",
  answer:
    "Zum Entkeimen ist [**Katadyn Micropur Forte**](produkt:1) die beste Wahl: Chlor und Silberionen wirken laut Hersteller in 30 Minuten gegen Bakterien und Viren und schützen das Wasser danach bis zu 6 Monate vor Wiederverkeimung. Günstiger für größere Mengen sind [**Aquatabs**](produkt:2) mit Chlor-Teststreifen; zum Prüfen empfehlen wir die [**AAwipes 17-in-1-Teststreifen mit Bakterientest**](produkt:3).",

  top3Title: "Unsere Top 3 zum Entkeimen und Testen",
  top3Intro:
    "Zwei Entkeimungsmittel und ein Testset: Damit kannst du klares Wasser aus unsicheren Quellen im Notfall entkeimen und vorher grob prüfen, ob es überhaupt infrage kommt. Eine Garantie für einwandfreies Trinkwasser gibt keines dieser Produkte.",
  comparisonTitle: "Entkeimungstabletten und Wassertests im Vergleich",

  criteria: [
    { key: "wirkung", label: "Wirkung & Aussagekraft", weight: 0.35, description: "Wirkstoff und Wirkspektrum gegen Bakterien, Viren und Parasiten bzw. Aussagekraft des Tests." },
    { key: "anwendung", label: "Anwendung", weight: 0.25, description: "Dosierung, Einwirkzeit, Geschmack, Fehlerrisiko im Ernstfall." },
    { key: "lager", label: "Lagerfähigkeit", weight: 0.15, description: "Haltbarkeit der ungeöffneten Packung, Verpackung, Platzbedarf." },
    { key: "preis", label: "Preis pro Liter", weight: 0.25, description: "Kosten im Verhältnis zur behandelten oder geprüften Wassermenge." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Wirkstoff, Dosierung und Einwirkzeit, die Hinweise des Umweltbundesamts zum Abkochen von Trinkwasser, die Grenzwerte der Trinkwasserverordnung und die Vorsorgeempfehlungen des BBK. Eigene Labor- oder Praxistests führen wir nicht durch; Angaben zu Wirkung und Einwirkzeit sind Herstellerangaben. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Katadyn Micropur Forte MF 1T",
      brand: "Katadyn",
      variant: "100 Tabletten (4 × 25)",
      visual: { kind: "pack", tone: "forest" },
      priceTier: 2,
      ratings: { wirkung: 9.0, anwendung: 8.5, lager: 8.0, preis: 7.5 },
      bestFor: "Ergänzung zum Filter, Notfallrucksack",
      verdict:
        "Ein verbreitetes Mittel zur Entkeimung von klarem Wasser: Eine Tablette pro Liter, Chlor wirkt laut Katadyn in 30 Minuten gegen Bakterien und Viren, Silberionen schützen das Wasser danach bis zu 6 Monate vor neuer Verkeimung.",
      features: [
        "Wirkstoffkombination aus Chlor (Natriumdichlorisocyanurat) und Silberionen (Herstellerangabe)",
        "Laut Hersteller 30 Minuten Einwirkzeit gegen Bakterien und Viren, 2 Stunden gegen Giardien",
        "1 Tablette pro Liter klares Wasser; 100 Tabletten reichen für 100 Liter (Herstellerangabe)",
      ],
      pros: ["Laut Hersteller auch gegen Viren wirksam", "Einzeln verpackt und leicht", "Konserviert das Wasser zusätzlich"],
      cons: ["Nur für klares Wasser – trübes vorher filtern", "Leichter Chlorgeschmack", "Biozid: verursacht schwere Augenreizung, Sicherheitshinweise beachten"],
      specs: { typ: "Entkeimungstablette", wirkstoff: "Chlor + Silber", dosis: "1 Tablette / 1 l", einwirkzeit: "30 min (Giardien 2 h)", spektrum: "Bakterien, Viren, Giardien" },
      asin: "B0824VTYKH",
      query: "Katadyn Micropur Forte MF 1T 100 Tabletten",
    },
    {
      rank: 2,
      label: "Für größere Mengen",
      name: "Aquatabs Wasserentkeimungstabletten",
      brand: "Aquatabs",
      variant: "100 Tabletten + 2 Chlor-Teststreifen",
      visual: { kind: "pack", tone: "green" },
      priceTier: 1,
      ratings: { wirkung: 8.0, anwendung: 8.0, lager: 8.0, preis: 8.5 },
      bestFor: "Kanister, Tanks & Familienvorrat",
      verdict:
        "Chlortabletten für größere Wassermengen in Kanistern und Tanks. Die beiliegenden Teststreifen zeigen, ob genug freies Chlor im Wasser ist – ein wichtiger Kontrollschritt.",
      features: [
        "Wirkstoff Natriumdichlorisocyanurat, laut Anbieter nach rund 30 Minuten Einwirkzeit trinkbar",
        "Laut Anbieter je Tablette für größere Wassermengen dosiert – Packungsangabe genau beachten",
        "Starter-Set mit 2 Chlor-Teststreifen zur Kontrolle",
      ],
      pros: ["Günstig pro Liter", "Mit Chlor-Teststreifen", "Gut für Kanister und Tanks"],
      cons: ["Kein Silber – kein Langzeitschutz", "Dosierung auf große Mengen ausgelegt", "Wirkt kaum gegen Kryptosporidien"],
      specs: { typ: "Entkeimungstablette", wirkstoff: "Chlor (NaDCC)", dosis: "nach Packungsangabe", einwirkzeit: "ca. 30 min", spektrum: "Bakterien, Viren" },
      asin: "B0BSXK2144",
      query: "Aquatabs Wasserentkeimungstabletten 100 Stück Teststreifen",
    },
    {
      rank: 3,
      label: "Zum Prüfen",
      name: "AAwipes 17-in-1-Teststreifen + Bakterientest",
      brand: "AAwipes",
      variant: "50 Streifen + 2 Bakterientests",
      visual: { kind: "pack", tone: "mint" },
      priceTier: 1,
      ratings: { wirkung: 7.0, anwendung: 8.0, lager: 7.0, preis: 8.0 },
      bestFor: "Brunnen, Regentonne, nach Hochwasser",
      verdict:
        "Ein Set für die grobe Einschätzung: 17 chemische Parameter wie Nitrat, Blei, Härte und pH per Teststreifen, dazu zwei Bakterientests. Es ersetzt keine Laboranalyse, zeigt aber, ob Wasser offensichtlich belastet ist.",
      features: [
        "17-in-1-Teststreifen, u. a. für Härte, pH, Nitrat, Nitrit, Blei, Kupfer, Eisen und Chlor (Anbieterangabe)",
        "Zwei separate Bakterientests im Set (Anbieterangabe)",
        "Ergebnis per Farbvergleich in Minuten (Anbieterangabe)",
      ],
      pros: ["Viele Parameter auf einmal", "Mit Bakterientest", "Gut zur Kontrolle von Filtern und Chlorung"],
      cons: ["Nur grobe Orientierung", "Farbskalen lassen Interpretationsspielraum", "Kein Ersatz für ein akkreditiertes Labor"],
      specs: { typ: "Wassertest", wirkstoff: "–", dosis: "1 Streifen je Test", einwirkzeit: "Ergebnis in Minuten", spektrum: "17 Parameter + Bakterien" },
      asin: "B0D2RJ1LTM",
      query: "AAwipes 17 in 1 Trinkwasser Teststreifen Bakterientest",
    },
  ],

  comparison: [
    { key: "typ", label: "Produkt" },
    { key: "wirkstoff", label: "Wirkstoff" },
    { key: "dosis", label: "Anwendung" },
    { key: "einwirkzeit", label: "Zeit" },
    { key: "spektrum", label: "Wirkt gegen / prüft" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "wasser-entkeimen-tabletten-wassertest-bewertung-vergleich.svg",
      title: "Die 3 besten Produkte zum Entkeimen und Testen von Wasser",
      alt: "Balkendiagramm: Bewertung von Micropur Forte, Aquatabs und einem Wassertest-Set in den Kriterien Wirkung, Anwendung, Lagerfähigkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Micropur Forte wirkt am breitesten, Aquatabs sind am günstigsten pro Liter.",
    },
    steps: {
      kind: "steps",
      file: "wasser-entkeimen-tabletten-anleitung.svg",
      title: "Wasser mit Tabletten entkeimen",
      subtitle: "Die richtige Reihenfolge entscheidet",
      alt: "Infografik: Wasser mit Tabletten entkeimen – trübes Wasser filtern, Tablette dosieren, schütteln, Einwirkzeit abwarten, Chlorgehalt prüfen",
      caption: "Tabletten wirken nur in klarem Wasser zuverlässig – deshalb immer erst filtern.",
      steps: [
        { title: "Klar machen", text: "Trübes Wasser absetzen lassen und filtern – Schwebstoffe schützen Keime vor dem Chlor." },
        { title: "Richtig dosieren", text: "Genau nach Packungsangabe: Micropur Forte 1 Tablette pro Liter." },
        { title: "Lösen und schütteln", text: "Tablette auflösen lassen, Behälter verschließen und kräftig schütteln, auch das Gewinde benetzen." },
        { title: "Einwirkzeit abwarten", text: "Mindestens 30 Minuten, bei Verdacht auf Giardien 2 Stunden, bei kaltem Wasser länger." },
        { title: "Kontrollieren", text: "Mit Chlor-Teststreifen prüfen, ob noch freies Chlor nachweisbar ist." },
      ],
    },
  },

  editorial: {
    title: "Wasser entkeimen und prüfen: Was Tabletten und Teststreifen leisten",
    intro:
      "Chlor, Silber, Chlordioxid: welche Mittel wogegen wirken, warum Silber allein nicht entkeimt und was Teststreifen wirklich aussagen.",
    sections: [
      {
        id: "beste-entkeimung",
        h2: "Womit entkeimt man Trinkwasser im Notfall am besten?",
        blocks: [
          { quick: "Gegen Krankheitserreger ist sprudelndes Abkochen am zuverlässigsten. Ohne Energie sind Chlortabletten wie [Katadyn Micropur Forte](produkt:1) nach unserer Einschätzung die beste Wahl, für größere Mengen [Aquatabs](produkt:2). Ein Testset wie [AAwipes 17-in-1](produkt:3) hilft, Wasser vorab grob einzuschätzen." },
          { first: "Krankheitserreger im Wasser lassen sich auf drei Wegen unschädlich machen: durch Hitze, durch Filtration oder durch Chemie. Abkochen wirkt gegen Krankheitserreger – nicht gegen chemische Belastungen –, braucht aber Energie. Hohlfaserfilter arbeiten ohne Energie, halten aber keine Viren zurück. Chemische Entkeimung mit Chlor schließt diese Lücke – und ist leicht, platzsparend und jahrelang lagerfähig." },
          { p: "Micropur Forte kombiniert Chlor mit Silberionen. Das Chlor wirkt laut Katadyn innerhalb von 30 Minuten gegen Bakterien und Viren, gegen Giardien nach 2 Stunden. Das Silber schützt das behandelte Wasser laut Hersteller danach bis zu 6 Monate vor erneuter Verkeimung. Gegen Kryptosporidien wirkt Chlor in üblichen Dosierungen kaum – hier hilft der Filter. Die Kombination aus Filter und Tablette deckt deshalb die wichtigsten Erregergruppen ab – chemische Verunreinigungen entfernt sie nicht." },
          { p: "Wichtig ist der Unterschied zwischen Entkeimen und Konservieren. Micropur Classic enthält nur Silberionen. Laut Hersteller schützt es bereits sauberes Wasser vor Wiederverkeimung – es ist aber nicht dafür gedacht, Wasser aus unsicheren Quellen zu entkeimen. Für den Notfall brauchst du ein chlorhaltiges Produkt." },
          { figure: "scores" },
          { callout: { title: "Biozide sicher verwenden", warn: true, text: "Entkeimungstabletten sind Biozidprodukte. Micropur Forte trägt den Hinweis, dass es schwere Augenreizungen verursacht und giftig für Wasserorganismen ist. Für Kinder unzugänglich aufbewahren, Dosierung genau einhalten und vor Gebrauch Kennzeichnung und Produktinformation lesen." } },
          { callout: { title: "Keine Garantie für Trinkwasserqualität", warn: true, text: "Tabletten, Filter und Teststreifen können das Risiko verringern, garantieren aber kein einwandfreies Trinkwasser. Trinkwasser nur nach Herstellerangaben aufbereiten, im Zweifel sprudelnd abkochen und die Hinweise von Gesundheitsamt, Wasserversorger und Behörden beachten. Für Säuglinge, Schwangere, ältere und immungeschwächte Menschen im Zweifel abgepacktes Trinkwasser verwenden. Bei Beschwerden nach dem Trinken ärztlichen Rat einholen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man bei Tabletten und Tests achten?",
        blocks: [
          { quick: "Bei Tabletten zählen Wirkstoff (Chlor bzw. Chlordioxid statt nur Silber), eine Dosierung, die zu deinen Behältern passt, und die Einwirkzeit. Bei Teststreifen zählen die Parameter, die Ablesbarkeit und ob ein Bakterientest dabei ist." },
          {
            table: {
              caption: "Methoden der Wasserentkeimung im Vergleich",
              head: ["Methode", "Bakterien", "Viren", "Parasiten", "Hinweis"],
              rows: [
                ["**Abkochen**", "ja", "ja", "ja", "braucht Energie"],
                ["**Hohlfaserfilter 0,1 µm**", "ja", "nein", "ja", "keine Energie nötig"],
                ["**Chlor (z. B. Micropur Forte)**", "ja", "ja", "Giardien ja, Kryptosporidien kaum", "nur in klarem Wasser"],
                ["**Silber (Micropur Classic)**", "–", "–", "–", "konserviert nur sauberes Wasser"],
              ],
            },
          },
          { h3: "Dosierung passend zum Behälter" },
          { p: "Tabletten gibt es für 1 Liter, für mehrere Liter oder für große Tanks. Wähle eine Größe, die zu deinen Flaschen und Kanistern passt – eine Tablette für 20 Liter in einer 1-Liter-Flasche wäre eine gefährliche Überdosis, umgekehrt wirkt eine zu geringe Dosis nicht. Für Kanister gibt es Micropur Forte auch als Flüssigkonzentrat." },
          { h3: "Was Teststreifen können" },
          { p: "Teststreifen zeigen per Farbumschlag, ob Werte wie Nitrat, Nitrit, Härte, Chlor oder pH in einem auffälligen Bereich liegen. Sie sind gut geeignet, um eine Chlorung oder einen Filter zu kontrollieren und offensichtlich belastetes Wasser auszusortieren. Für verbindliche Aussagen zu Blei oder Keimen, etwa bei einem eigenen Brunnen, braucht es ein akkreditiertes Labor – Wasserversorger und Gesundheitsämter nennen Ansprechpartner." },
          { h3: "Haltbarkeit" },
          { p: "Ungeöffnete Tabletten sind mehrere Jahre lagerfähig; das Ablaufdatum steht auf der Packung. Einzeln eingeschweißte Tabletten bleiben auch nach dem Anbrechen der Packung geschützt. Teststreifen sind feuchtigkeitsempfindlich – die Dose nach Entnahme sofort schließen." },
        ],
      },
      {
        id: "welches-passt",
        h2: "Was passt zu welcher Situation?",
        blocks: [
          { quick: "Für den Notfallrucksack und Flaschen: Micropur Forte. Für Kanister und Tanks: Aquatabs oder Micropur Forte flüssig. Für Brunnen, Regentonne oder nach Hochwasser: erst testen, dann filtern und entkeimen." },
          {
            cards: [
              { title: "Flaschen & Rucksack", text: "1 Tablette pro Liter, laut Hersteller auch gegen Viren: Micropur Forte.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kanister & Tanks", text: "Günstig für große Mengen, mit Chlor-Teststreifen: Aquatabs.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Wasser prüfen", text: "17 Parameter plus Bakterientest: AAwipes.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Konservieren & Ergänzen", text: "Silber, Flüssigkonzentrat und Einzeltests in der Top 5.", link: { href: "#top5-zweck", label: "Zur Top 5" } },
              { title: "Erst filtern", text: "Hohlfaserfilter gegen Bakterien und Parasiten.", link: { href: "/krisenvorsorge/wasserversorgung/mobile-wasserfilter/", label: "Mobile Wasserfilter" } },
              { title: "Vorrat", text: "Lebensmittelechte Kanister für 20 Liter pro Person.", link: { href: "/krisenvorsorge/wasserversorgung/wasserspeicher/", label: "Wasserspeicher" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-zweck",
    h2: "Die 5 besten Ergänzungen – nach Zweck",
    intro:
      "Konservieren, große Mengen entkeimen, einzelne Werte gezielt messen oder vorab filtern: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "Katadyn Micropur Classic MC 1T", for: "Vorrat konservieren", text: "Silberionen schützen bereits sauberes Wasser laut Katadyn bis zu 6 Monate vor Wiederverkeimung – kein Entkeimungsmittel für Rohwasser.", asin: "B0016HS8CI", query: "Katadyn Micropur Classic MC 1T" },
      { name: "Katadyn Micropur Forte MF 1000F", for: "Flüssig für Kanister", text: "100-ml-Flüssigkonzentrat mit Chlor und Silber (Herstellerangabe) – leichter zu dosieren, wenn ganze Kanister behandelt werden.", asin: "B000S0I64E", query: "Katadyn Micropur Forte MF 1000F 100 ml" },
      { name: "16-in-1-Trinkwasser-Teststreifen (25 Stück)", for: "Günstig nachkaufen", text: "Teststreifen für Härte, Blei, Kupfer, Nitrat und weitere Werte – zur regelmäßigen Kontrolle von Filter und Vorrat.", asin: "B0B2N3F544", query: "16 in 1 Trinkwasser Teststreifen 25 Stück" },
      { name: "Blei-Teststreifen für Trinkwasser", for: "Alte Hausleitungen", text: "Qualitativer Schnelltest auf Blei – sinnvoll in Altbauten, ersetzt aber keine Laboranalyse.", asin: "B0F6C1KJY4", query: "Blei Teststreifen Trinkwasser" },
      { name: "Sawyer Squeeze SP129", for: "Vorher filtern", text: "Hohlfaserfilter, der laut Hersteller Bakterien und Parasiten zurückhält – zusammen mit Chlor deckt er die wichtigsten Erregergruppen ab.", asin: "B00B1OSU4W", query: "Sawyer Squeeze SP129" },
    ],
  },

  guide: {
    sections: [
      {
        id: "anleitung",
        h2: "Wie entkeimt man Wasser richtig?",
        blocks: [
          { quick: "Trübes Wasser erst filtern, dann genau nach Packung dosieren, gut schütteln, die Einwirkzeit abwarten und mit Chlor-Teststreifen kontrollieren. Wenn Energie da ist, ist sprudelndes Abkochen gegen Krankheitserreger die zuverlässigste Methode." },
          { p: "Chlor reagiert mit allem, was im Wasser schwimmt. Schwebstoffe, Laub oder Schlamm verbrauchen einen Teil des Wirkstoffs und können Keime abschirmen. Deshalb gilt: erst klar machen, dann entkeimen. Kaltes Wasser braucht länger, weil die Reaktion langsamer abläuft." },
          { figure: "steps" },
          { h3: "Bei einem Abkochgebot" },
          {
            list: [
              "**Wasser sprudelnd aufkochen** und abkühlen lassen – so empfiehlt es das Umweltbundesamt bei mikrobiologischen Verunreinigungen.",
              "**Auch zum Zähneputzen, für Babynahrung und zum Waschen von Obst** abgekochtes oder abgefülltes Wasser verwenden.",
              "**Tabletten sind die Rückfallebene,** wenn keine Energie zum Kochen da ist.",
              "**Informationen verfolgen:** Wann das Abkochgebot endet, sagen Gesundheitsamt und Wasserversorger über Radio, Warn-App und Website.",
            ],
          },
          {
            facts: [
              { value: "30 min", label: "Einwirkzeit von Micropur Forte gegen Bakterien und Viren (Herstellerangabe)" },
              { value: "6 Monate", label: "Schutz vor Wiederverkeimung durch Silberionen (Katadyn)" },
              { value: "50 mg/l", label: "Grenzwert für Nitrat in der Trinkwasserverordnung" },
            ],
          },
          { h3: "Wenn Wasser nach Chemie riecht" },
          { p: "Kein Entkeimungsmittel entfernt Kraftstoff, Pflanzenschutzmittel oder Schwermetalle. Riecht Wasser nach Öl, Benzin oder Chemikalien oder schillert es, ist es auch nach Filtern und Entkeimen nicht trinkbar. Verwende es höchstens für die Toilettenspülung." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Tabletten machen Wasser trinkbar?", a: "Chlorhaltige Tabletten wie Katadyn Micropur Forte oder Aquatabs können klares Wasser laut Hersteller entkeimen – eine Garantie für einwandfreies Trinkwasser sind sie nicht. Micropur Forte wirkt laut Hersteller in 30 Minuten gegen Bakterien und Viren, gegen Giardien in 2 Stunden. Silbertabletten wie Micropur Classic konservieren nur bereits sauberes Wasser." },
    { q: "Was ist der Unterschied zwischen Micropur Forte und Micropur Classic?", a: "Micropur Forte enthält Chlor und Silber und entkeimt Wasser. Micropur Classic enthält nur Silberionen und schützt bereits sauberes Wasser vor Wiederverkeimung. Für Wasser aus unsicheren Quellen ist Forte die richtige Wahl." },
    { q: "Ersetzen Entkeimungstabletten einen Wasserfilter?", a: "Nein, sie ergänzen ihn. Tabletten wirken nur in klarem Wasser zuverlässig und kaum gegen Kryptosporidien. Ein Hohlfaserfilter entfernt Trübstoffe und Parasiten, die Tablette zusätzlich Viren." },
    { q: "Wie zuverlässig sind Wasser-Teststreifen?", a: "Sie liefern eine grobe Orientierung, etwa ob Nitrat, Härte oder Chlor auffällig sind. Die Farbskalen lassen Spielraum. Für verbindliche Aussagen zu Blei oder Keimen ist eine Laboranalyse nötig." },
    { q: "Wie lange sind Entkeimungstabletten haltbar?", a: "Ungeöffnet in der Regel mehrere Jahre; das Ablaufdatum steht auf der Packung. Lagere sie trocken, kühl und für Kinder unzugänglich." },
    { q: "Ist Abkochen besser als Tabletten?", a: "Abkochen wirkt zuverlässig gegen Krankheitserreger (nicht gegen Chemikalien) und verändert den Geschmack kaum, braucht aber Energie. Tabletten funktionieren überall ohne Energie, schmecken leicht nach Chlor und wirken nur in klarem Wasser. Im Notfall sind beide sinnvoll." },
  ],

  sources: [
    { label: "Umweltbundesamt: Ratgeber „Trinkwasser aus dem Hahn“ (PDF)", url: "https://kreis-soest.de/fileadmin/citko_buerger/Dateien/UBA_Trinkwasser_aus_dem_Hahn.pdf" },
    { label: "Trinkwasserverordnung (gesetze-im-internet.de)", url: "https://www.gesetze-im-internet.de/trinkwv_2023/" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Utopia: Wasser haltbar machen für den Notvorrat", url: "https://utopia.de/ratgeber/wasser-haltbar-machen-fuers-campen-und-den-notvorrat_653422/" },
  ],

  related: [
    { slug: "mobile-wasserfilter", text: "Hohlfaserfilter gegen Bakterien und Parasiten." },
    { slug: "wasserspeicher", text: "Kanister und Tanks für den Vorrat." },
    { slug: "erste-hilfe-brandschutz", text: "Erste-Hilfe-Koffer nach DIN für den Ernstfall." },
    { group: "wasserversorgung", text: "Alle Ratgeber zur Wasserversorgung." },
  ],
};
