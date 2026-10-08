// Kategorie: Umkehrosmose-Hausfilter (Krisenvorsorge › Wasserversorgung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "umkehrosmose-hausfilter",
  area: "krisenvorsorge",
  group: "wasserversorgung",
  navLabel: "Umkehrosmose-Anlagen",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Umkehrosmose-Anlagen 2026 – auch ohne Strom",
  metaDescription:
    "Die 3 besten Umkehrosmose-Anlagen für die Küche 2026: ohne Strom, tanklos und ohne Wasseranschluss im Vergleich – plus Hygiene, Filterwechsel und Grenzen im Notfall.",

  eyebrow: "Krisenvorsorge · Wasserversorgung",
  h1: "Die 3 besten Umkehrosmose-Anlagen 2026",
  lead:
    "Eine Umkehrosmose-Anlage drückt Wasser durch eine extrem feine Membran und kann dabei laut Herstellern Kalk, Schwermetalle, viele Rückstände und Keime weitgehend zurückhalten. Für die Krisenvorsorge zählt außerdem: Funktioniert sie auch ohne Strom – oder ganz ohne Wasseranschluss?",
  answer:
    "Für die Krisenvorsorge ist die [**Aquaphor RO-101S Morion**](produkt:1) unsere beste Gesamtwahl, weil sie mit Tank und schon ab 2 bar Leitungsdruck ohne Strom arbeitet. Mehr Komfort und Leistung bietet die tanklose [**Waterdrop G3P600**](produkt:2); die [**Waterdrop K19-H**](produkt:3) braucht keinen Wasseranschluss und lässt sich von Hand befüllen.",

  top3Title: "Unsere Top 3 Umkehrosmose-Anlagen",
  top3Intro:
    "Drei Bauarten mit unterschiedlichen Stärken im Ernstfall: eine Untertischanlage mit Tank, die ohne Strom läuft, eine tanklose Anlage mit hoher Leistung und ein Tischgerät, das ohne Festinstallation auskommt.",
  comparisonTitle: "Die 3 besten Umkehrosmose-Anlagen im Vergleich",

  criteria: [
    { key: "rein", label: "Reinigungsleistung", weight: 0.3, description: "Membran und Filterstufen, Rückhalt von Kalk, Schwermetallen und Rückständen, unabhängige Zertifizierungen." },
    { key: "krise", label: "Krisentauglichkeit", weight: 0.25, description: "Betrieb ohne Strom oder ohne Wasseranschluss, Mindestdruck, Bedarf an Ersatzteilen." },
    { key: "alltag", label: "Alltag & Installation", weight: 0.25, description: "Einbau, Platzbedarf, Leistung pro Tag, Verhältnis von Rein- zu Abwasser." },
    { key: "kosten", label: "Kosten", weight: 0.2, description: "Anschaffung und Folgekosten für Filter und Membran." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Membran, Filterstufen, Mindestdruck und Leistung, Angaben zu Zertifizierungen nach NSF/ANSI 58, die Ratgeber des Umweltbundesamts zu Trinkwasser und Trinkwasser-Installationen sowie die Hinweise des BBK zur Notfallvorsorge. Unabhängige Tests von Stiftung Warentest oder Öko-Test zu Umkehrosmose-Anlagen haben wir nicht gefunden. Eigene Tests oder Wasseranalysen führen wir nicht durch; die Bewertungen sind redaktionelle Einschätzungen. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Aquaphor RO-101S Morion",
      brand: "Aquaphor",
      variant: "Untertisch mit Tank, 50 GPD",
      visual: { kind: "device", tone: "forest" },
      priceTier: 2,
      ratings: { rein: 8.5, krise: 9.0, alltag: 7.0, kosten: 8.0 },
      bestFor: "Vorsorge ohne Stromabhängigkeit",
      verdict:
        "Aus unserer Sicht die krisenfesteste Wahl: Die Anlage arbeitet laut Aquaphor schon ab 2 bar Leitungsdruck ohne Strom und speichert gefiltertes Wasser in einem Tank – solange noch Druck auf der Leitung ist, liefert sie Wasser.",
      features: [
        "Umkehrosmose mit 50-GPD-Membran, laut Anbieter rund 190 Liter am Tag bzw. 7,8 Liter pro Stunde",
        "Wasser-auf-Wasser-Tank, der laut Hersteller nur halb so viel Platz braucht wie klassische Tanks",
        "Laut Aquaphor Betrieb ab 2 bar Leitungsdruck ohne Pumpe und ohne Strom; Vorfilter K2 und K5 spätestens alle 6 Monate wechseln",
      ],
      pros: ["Laut Hersteller kein Strom nötig", "Gefiltertes Wasser im Tank als kleiner Puffer", "Vergleichsweise günstige Ersatzfilter"],
      cons: ["Geringere Leistung als tanklose Anlagen", "Einbau unter der Spüle nötig", "Amazon-Angaben zur Stromversorgung widersprechen sich – Anleitung prüfen"],
      specs: { bauart: "Untertisch mit Tank", strom: "nein (ab 2 bar)", anschluss: "Kaltwasser unter der Spüle", leistung: "ca. 190 l/Tag", filterwechsel: "Vorfilter alle 6 Monate" },
      asin: "B0C8ZCT5HR",
      query: "Aquaphor RO-101S Umkehrosmoseanlage",
    },
    {
      rank: 2,
      label: "Mehr Komfort",
      name: "Waterdrop G3P600",
      brand: "Waterdrop",
      variant: "tanklos, 600 GPD",
      visual: { kind: "device", tone: "mint" },
      priceTier: 3,
      ratings: { rein: 9.0, krise: 6.5, alltag: 9.0, kosten: 6.5 },
      bestFor: "Familien mit hohem Wasserbedarf",
      verdict:
        "Aus unserer Sicht die komfortabelste Anlage: tanklos, laut Hersteller sehr schnell und mit Display am Wasserhahn, das TDS-Wert und Filterlaufzeit anzeigt. Im Blackout braucht sie allerdings Strom für ihre Pumpe.",
      features: [
        "Tanklose Umkehrosmose mit 600 GPD, laut Anbieter rund 2.271 Liter am Tag",
        "Laut Hersteller nach NSF/ANSI 58 (TDS-Reduktion) und NSF/ANSI 372 (bleifreie Materialien) zertifiziert",
        "Verhältnis Reinwasser zu Abwasser 2:1, Smart-Wasserhahn mit TDS-Anzeige (Herstellerangabe)",
      ],
      pros: ["Laut Hersteller sehr hohe Leistung ohne Wartezeit", "Vergleichsweise wenig Abwasser", "Kompakt, kein Tank unter der Spüle"],
      cons: ["Braucht Strom – im Blackout nur mit Powerstation", "Teurer in Anschaffung", "Ersatzfilter genau nach Modell wählen"],
      specs: { bauart: "Untertisch, tanklos", strom: "ja (Pumpe)", anschluss: "Kaltwasser + Steckdose", leistung: "ca. 2.271 l/Tag", filterwechsel: "laut Hersteller je Stufe 6–24 Monate" },
      asin: "B0BKP8LNR3",
      query: "Waterdrop G3P600 Umkehrosmoseanlage",
    },
    {
      rank: 3,
      label: "Ohne Wasseranschluss",
      name: "Waterdrop K19-H",
      brand: "Waterdrop",
      variant: "Tischgerät mit Heißwasser",
      visual: { kind: "device", tone: "green" },
      priceTier: 3,
      ratings: { rein: 8.0, krise: 7.5, alltag: 7.5, kosten: 6.5 },
      bestFor: "Mietwohnung & Wasser aus Kanistern",
      verdict:
        "Das Tischgerät braucht keinen Wasseranschluss: Der 5-Liter-Tank wird von Hand befüllt. Damit lässt sich auch Wasser aus Kanistern aufbereiten – solange Strom da ist, etwa aus einer Powerstation.",
      features: [
        "Auftisch-Umkehrosmose ohne Installation, laut Hersteller mit 5-Liter-Vorratstank",
        "Sofortheizung für heißes Wasser in mehreren Temperaturstufen (Herstellerangabe)",
        "Laut Waterdrop Filterlebensdauer rund 12 Monate",
      ],
      pros: ["Keine Bohrung, kein Installateur", "Unabhängig vom Leitungsdruck", "Heißwasserfunktion kann den Wasserkocher ersetzen"],
      cons: ["Braucht Strom", "Kleine Tankmenge pro Durchgang", "Nur für Wasser in Trinkwasserqualität ausgelegt, nicht für Bachwasser"],
      specs: { bauart: "Tischgerät", strom: "ja", anschluss: "keiner (Tank von Hand befüllen)", leistung: "Tank 5 l je Füllung", filterwechsel: "ca. 12 Monate (Hersteller)" },
      asin: "B0BRMWKJ19",
      query: "Waterdrop K19-H Auftisch Umkehrosmoseanlage",
    },
  ],

  comparison: [
    { key: "bauart", label: "Bauart" },
    { key: "strom", label: "Strom nötig" },
    { key: "anschluss", label: "Anschluss" },
    { key: "leistung", label: "Leistung" },
    { key: "filterwechsel", label: "Filterwechsel" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-umkehrosmoseanlagen-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Umkehrosmose-Anlagen 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Umkehrosmose-Anlagen 2026 in den Kriterien Reinigungsleistung, Krisentauglichkeit, Alltag und Kosten",
      caption: "Unsere Bewertung je Kriterium. Aquaphor ist am krisenfestesten, Waterdrop G3P600 am komfortabelsten.",
    },
    steps: {
      kind: "steps",
      file: "umkehrosmose-anlage-hygiene-filterwechsel-anleitung.svg",
      title: "Umkehrosmose hygienisch betreiben",
      subtitle: "Damit die Anlage nicht selbst zur Keimquelle wird",
      alt: "Infografik: Umkehrosmose-Anlage hygienisch betreiben – fachgerecht anschließen, Filter rechtzeitig wechseln, nach Stillstand spülen, Tank reinigen, im Notfall abkochen",
      caption: "Der größte Fehler ist ein zu spät gewechselter Filter.",
      steps: [
        { title: "Fachgerecht anschließen", text: "Mit Rückflussverhinderer und am Kaltwasser – im Zweifel durch einen Installateur." },
        { title: "Filter pünktlich wechseln", text: "Nach Herstellerangabe, auch wenn wenig Wasser gezapft wurde." },
        { title: "Nach Stillstand spülen", text: "Nach Urlaub oder längerer Pause die ersten Liter verwerfen." },
        { title: "Tank und Hahn sauber halten", text: "Tank nach Anleitung desinfizieren, Auslauf nicht mit Händen berühren." },
        { title: "Im Notfall abkochen", text: "Bei Abkochgebot des Gesundheitsamts auch gefiltertes Wasser abkochen." },
      ],
    },
  },

  editorial: {
    title: "Umkehrosmose in der Küche: Was sie kann – und was im Notfall zählt",
    intro:
      "Wie eine Umkehrosmose-Anlage funktioniert, warum Leitungswasser in Deutschland meist keine braucht und welche Bauart in einer Versorgungskrise wirklich hilft.",
    sections: [
      {
        id: "beste-umkehrosmose",
        h2: "Welche Umkehrosmose-Anlage ist die beste?",
        blocks: [
          { quick: "Für die Krisenvorsorge ist die [Aquaphor RO-101S Morion](produkt:1) die beste Wahl, weil sie ohne Strom mit Leitungsdruck arbeitet. Die [Waterdrop G3P600](produkt:2) ist im Alltag komfortabler, die [Waterdrop K19-H](produkt:3) braucht keinen Wasseranschluss." },
          { first: "Bei der Umkehrosmose wird Wasser mit Druck durch eine halbdurchlässige Membran gepresst. Wassermoleküle passieren die Membran, gelöste Salze, Kalk, viele Schwermetalle, Rückstände und auch Keime werden weitgehend zurückgehalten und mit dem Abwasser weggespült – wie gut, hängt von Anlage, Membranzustand und Wartung ab. Vorfilter aus Sediment und Aktivkohle schützen die Membran und binden Chlor und organische Stoffe." },
          { p: "Wichtig zur Einordnung: Leitungswasser gilt in Deutschland als eines der am besten kontrollierten Lebensmittel; es unterliegt der Trinkwasserverordnung. Das Umweltbundesamt hält eine zusätzliche Behandlung in der Regel nicht für notwendig und weist darauf hin, dass Geräte in der Trinkwasser-Installation regelmäßig gewartet werden müssen, um nicht selbst zum Hygieneproblem zu werden. Wer eine Anlage kauft, tut das meist wegen Kalk, Geschmack oder alter Hausleitungen – und sollte die Wartung ernst nehmen." },
          { p: "Für die Krisenvorsorge ist die Bauart entscheidend. Fällt der Strom aus, stehen tanklose Anlagen mit Pumpe still. Anlagen mit Tank, die mit dem Leitungsdruck arbeiten, liefern weiter, solange Druck auf der Leitung ist. Und Tischgeräte mit Handbefüllung können Wasser aus Kanistern aufbereiten – brauchen dafür aber Strom. Keine dieser Anlagen ersetzt den Wasservorrat: Ohne Wasser im Haus gibt es auch nichts zu filtern." },
          { figure: "scores" },
          { callout: { title: "Nicht für Bach- oder Regenwasser", warn: true, text: "Haushalts-Umkehrosmose-Anlagen sind laut Herstellern für Wasser in Trinkwasserqualität ausgelegt. Für Wasser aus Bach, Teich oder Regentonne nutze einen mobilen Wasserfilter und entkeime das Wasser zusätzlich." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind die Bauart (mit Tank oder tanklos), der Mindestdruck, ob Strom nötig ist, das Verhältnis von Rein- zu Abwasser, eine Zertifizierung nach NSF/ANSI 58 und die Kosten der Ersatzfilter." },
          {
            table: {
              caption: "Bauarten von Umkehrosmose-Anlagen im Vergleich",
              head: ["Bauart", "Vorteil", "Nachteil im Notfall"],
              rows: [
                ["**Untertisch mit Tank**", "Läuft oft ohne Strom, gefilterter Vorrat im Tank", "Braucht Leitungsdruck"],
                ["**Untertisch tanklos**", "Hohe Leistung, kompakt, wenig Abwasser", "Pumpe braucht Strom"],
                ["**Tischgerät**", "Kein Anschluss, Tank von Hand befüllbar", "Braucht Strom, kleine Mengen"],
              ],
            },
          },
          { h3: "Mindestdruck und Strom" },
          { p: "Klassische Anlagen ohne Pumpe brauchen einen Mindestdruck auf der Leitung – bei der Aquaphor RO-101S laut Hersteller 2 bar. Tanklose Anlagen erhöhen den Druck mit einer Pumpe und sind deshalb auf Strom angewiesen. Wer eine tanklose Anlage hat, kann sie im Blackout mit einer Powerstation betreiben; die Leistungsaufnahme steht im Datenblatt." },
          { h3: "Abwasser und Leistung" },
          { p: "Jede Umkehrosmose erzeugt Abwasser, das die zurückgehaltenen Stoffe wegspült. Moderne Anlagen kommen mit deutlich weniger aus als ältere Modelle: Waterdrop gibt für die G3P600 ein Verhältnis von 2:1 an. In einer Krise mit knappem Wasser ist das relevant – das Abwasser lässt sich aber für Toilettenspülung oder Putzen auffangen." },
          { h3: "Zertifizierung und Ersatzfilter" },
          { p: "Achte auf eine Zertifizierung nach NSF/ANSI 58 für Umkehrosmose und auf gut verfügbare Originalfilter. Lege für die Vorsorge einen Satz Vorfilter auf Vorrat. Ersatzfilter müssen genau zum Modell passen – bei Waterdrop sind die Filter der verschiedenen Serien laut Hersteller in der Regel nicht untereinander kompatibel." },
          { h3: "Mineralien" },
          { p: "Umkehrosmose entfernt auch Mineralien wie Calcium und Magnesium. Wer sich ausgewogen ernährt, nimmt sie in der Regel ausreichend über die Nahrung auf; bei Fragen zur eigenen Ernährung hilft ärztlicher Rat. Einige Anlagen haben eine Remineralisierungsstufe, etwa die Morion-Varianten von Aquaphor mit Mineralisierer K7M." },
        ],
      },
      {
        id: "welche-passt",
        h2: "Welche Anlage passt zu wem?",
        blocks: [
          { quick: "Wer vor allem krisenfest sein will, nimmt die Aquaphor mit Tank. Wer viel Wasser braucht und eine Powerstation hat, die Waterdrop G3P600. Wer nicht bohren darf oder Wasser aus Kanistern aufbereiten will, das Tischgerät K19-H." },
          {
            cards: [
              { title: "Krisenfest", text: "Läuft ohne Strom mit Leitungsdruck: Aquaphor RO-101S.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Großer Haushalt", text: "Schnell, tanklos, mit Display: Waterdrop G3P600.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Mietwohnung", text: "Ohne Installation und von Hand befüllbar: Waterdrop K19-H.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Wasser aus der Natur", text: "Für Bach und Regentonne braucht es mobile Filter.", link: { href: "/krisenvorsorge/wasserversorgung/mobile-wasserfilter/", label: "Mobile Wasserfilter" } },
              { title: "Vorrat zuerst", text: "20 Liter pro Person sind die Basis jeder Wasservorsorge.", link: { href: "/krisenvorsorge/wasserversorgung/wasserspeicher/", label: "Wasserspeicher" } },
              { title: "Strom im Blackout", text: "Pumpe und Tischgerät laufen mit einer Powerstation weiter.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-ersatz",
    h2: "Die 5 besten Ergänzungen – Ersatzfilter und Alternativen",
    intro:
      "Eine Anlage ist nur so gut wie ihr Wartungszustand. Diese fünf Produkte halten sie im Ernstfall einsatzbereit oder ergänzen sie sinnvoll.",
    items: [
      { name: "Aquaphor Ersatzfilter-Set Morion K2, K5, K7M, K50", for: "Kompletter Filtersatz", text: "Vorfilter, Mineralisierer und Membran für die Morion-Anlagen – ein Satz auf Vorrat ersetzt alle Stufen.", asin: "B01DN2YT6C", query: "Aquaphor Ersatzfilter Morion K2 K5 K7M K50" },
      { name: "Aquaphor RO-101S Small Service (K2 + K5)", for: "Halbjährlicher Wechsel", text: "Sediment- und Aktivkohleblockfilter, die laut Aquaphor spätestens alle 6 Monate getauscht werden sollen.", asin: "B086XFFPN3", query: "Aquaphor RO-101S Small Service" },
      { name: "Waterdrop G3P600 Remineralisierung", for: "Mit Mineralisierung", text: "Variante der G3P600 mit Remineralisierungsstufe für Wasser mit mehr Mineralien.", asin: "B0BS3M8L73", query: "Waterdrop G3P600 Remineralisierung" },
      { name: "Waterdrop A1 Auftisch-Osmose", for: "Heiß und kalt ohne Anschluss", text: "Tischgerät mit 4-Liter-Tank und sechs Temperaturstufen von 5 bis 95 °C (Herstellerangabe).", asin: "B0CZ454SN2", query: "Waterdrop A1 Auftisch Umkehrosmose" },
      { name: "Katadyn Gravity BeFree 3 L", for: "Ohne Strom und Leitung", text: "Schwerkraftfilter, der laut Hersteller Bakterien und Protozoen aus Wasser aus Kanister, Regentonne oder Bach zurückhält (keine Viren) – die stromlose Ergänzung zur Küchenanlage.", asin: "B09DLL2DFW", query: "Katadyn BeFree Gravity 3 L" },
    ],
  },

  guide: {
    sections: [
      {
        id: "hygiene-und-notfall",
        h2: "Wie betreibt man eine Umkehrosmose-Anlage hygienisch – auch im Notfall?",
        blocks: [
          { quick: "Wechsle Filter pünktlich, spüle die Anlage nach längerem Stillstand, halte Tank und Hahn sauber und koche Wasser ab, wenn das Gesundheitsamt dazu aufruft – auch wenn es durch die Anlage gelaufen ist." },
          { p: "Filter halten nicht nur Stoffe zurück, sie bieten auch Keimen eine Oberfläche. Werden sie zu spät gewechselt oder steht die Anlage lange, können sich Bakterien ansiedeln. Das Umweltbundesamt betont, dass Geräte in der Trinkwasser-Installation regelmäßig gewartet werden müssen. Aquaphor nennt für die Vorfilter einen Wechsel spätestens alle 6 Monate – unabhängig von der gefilterten Menge." },
          { figure: "steps" },
          { h3: "Wenn die Wasserversorgung gestört ist" },
          {
            list: [
              "**Abkochgebot beachten:** Ruft das Gesundheitsamt zum Abkochen auf, gilt das auch für gefiltertes Wasser. Die Membran ist kein zugelassenes Desinfektionsverfahren.",
              "**Druck fällt ab:** Sinkt der Leitungsdruck unter den Mindestwert, liefert eine Tankanlage nur noch, was im Tank ist. Fülle in Krisenlagen frühzeitig Kanister.",
              "**Strom fällt aus:** Tanklose Anlagen und Tischgeräte laufen mit einer Powerstation weiter.",
              "**Nach der Störung:** Wenn die Versorgung zurück ist, die Anlage einige Minuten spülen und bei Verunreinigung der Leitung die Vorfilter tauschen.",
            ],
          },
          {
            facts: [
              { value: "2 bar", label: "Mindestdruck der Aquaphor RO-101S laut Hersteller" },
              { value: "6 Monate", label: "spätester Vorfilterwechsel bei Aquaphor laut Hersteller" },
              { value: "2:1", label: "Rein- zu Abwasser bei der Waterdrop G3P600 laut Hersteller" },
            ],
          },
          { h3: "Einbau" },
          { p: "Untertischanlagen werden am Kaltwasser-Eckventil angeschlossen und brauchen einen Abwasseranschluss am Siphon sowie meist eine Bohrung für den eigenen Wasserhahn. Wer unsicher ist, lässt den Einbau von einem Installateur erledigen – eine undichte Verbindung unter der Spüle richtet schnell großen Schaden an." },
          { callout: { title: "Anschluss an die Trinkwasser-Installation", warn: true, text: "Geräte, die fest an die Trinkwasser-Installation angeschlossen werden, müssen nach den anerkannten Regeln der Technik eingebaut werden, unter anderem mit Schutz gegen Rückfließen. Im Zweifel einen eingetragenen Installateur beauftragen und in Mietwohnungen vorher den Vermieter fragen. Keine Anlage garantiert dauerhaft einwandfreies Wasser: Wartung und Filterwechsel nach Herstellerangabe sind Voraussetzung, und Hinweise von Wasserversorger und Gesundheitsamt gehen immer vor." } },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Umkehrosmose-Anlage funktioniert ohne Strom?", a: "Anlagen mit Tank, die mit dem Leitungsdruck arbeiten, brauchen keinen Strom. Unsere Empfehlung ist die Aquaphor RO-101S Morion, die laut Hersteller schon ab 2 bar arbeitet. Tanklose Anlagen und Tischgeräte brauchen Strom für Pumpe bzw. Heizung." },
    { q: "Ist Umkehrosmose-Wasser gesund?", a: "Bei hygienischem Betrieb lässt es sich als Trinkwasser nutzen; einen gesundheitlichen Vorteil gegenüber Leitungswasser belegen wir damit nicht. Umkehrosmose entfernt auch Mineralien, die man bei ausgewogener Ernährung in der Regel ausreichend über das Essen aufnimmt. Leitungswasser in Deutschland braucht laut Umweltbundesamt in der Regel keine zusätzliche Behandlung." },
    { q: "Filtert Umkehrosmose Bakterien und Viren?", a: "Die Membran kann Keime weitgehend zurückhalten, Haushaltsanlagen sind aber nicht als Desinfektionsverfahren zugelassen. Bei einem Abkochgebot des Gesundheitsamts muss auch gefiltertes Wasser abgekocht werden." },
    { q: "Kann ich mit einer Umkehrosmose-Anlage Regenwasser trinkbar machen?", a: "Haushaltsanlagen sind für Wasser in Trinkwasserqualität ausgelegt, nicht für Regen- oder Bachwasser. Dafür eignen sich mobile Wasserfilter gegen Keime, kombiniert mit Entkeimung." },
    { q: "Wie oft muss man die Filter wechseln?", a: "Je nach Hersteller und Stufe zwischen 6 und 24 Monaten. Aquaphor nennt für die Vorfilter spätestens 6 Monate, Waterdrop für die Membran der G3-Serie bis zu 24 Monate. Zu spät gewechselte Filter können verkeimen." },
    { q: "Wie viel Abwasser erzeugt eine Umkehrosmose-Anlage?", a: "Moderne tanklose Anlagen erzeugen deutlich weniger Abwasser als ältere Modelle; Waterdrop gibt für die G3P600 ein Verhältnis von 2:1 an. Das Abwasser kann für Toilette oder Putzen genutzt werden." },
  ],

  sources: [
    { label: "Umweltbundesamt: Ratgeber „Trinkwasser aus dem Hahn“ (PDF)", url: "https://kreis-soest.de/fileadmin/citko_buerger/Dateien/UBA_Trinkwasser_aus_dem_Hahn.pdf" },
    { label: "Umweltbundesamt: Empfehlungen und Stellungnahmen zu Trinkwasser", url: "https://www.umweltbundesamt.de/print/12120" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "mobile-wasserfilter", text: "Filter für Bach, Regentonne und unterwegs." },
    { slug: "wasserspeicher", text: "Kanister und Tanks für 20 Liter pro Person." },
    { slug: "entkeimung-wassertests", text: "Tabletten zur Entkeimung und Wassertests." },
    { group: "wasserversorgung", text: "Alle Ratgeber zur Wasserversorgung." },
  ],
};
