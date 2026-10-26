// Kategorie: Tischtennis-Sets (Schläger + Bälle + Tasche)
// Aufbau siehe src/content/README.md (Content-Modell).
// Recherche: research/tischtennis/bestes-tischtennis-set/

export default {
  slug: "bestes-tischtennis-set",
  area: "tischtennis",
  navLabel: "Tischtennis-Sets",
  published: "2026-10-26",
  updated: "2026-10-26",

  metaTitle: "Die 3 besten Tischtennis-Sets 2026 für Familie & Einstieg",
  metaDescription:
    "Tischtennis-Sets mit Schlägern, Bällen und Tasche im Vergleich: Beläge, Griff und Lieferumfang – die 3 besten Sets für Familie, Einsteiger und Hobbyspieler.",

  eyebrow: "Tischtennis · Schläger-Sets",
  h1: "Die 3 besten Tischtennis-Sets 2026",
  lead:
    "Ein gutes Set macht aus der Platte im Keller oder Garten einen Treffpunkt: Schläger, Bälle und Tasche in einem Kauf. Wir zeigen drei Sets für Familie, kleines Budget und ambitionierte Hobbyspieler – und erklären, woran man gute Schläger erkennt.",
  answer:
    "Unsere beste Gesamtwahl ist das [**JOOLA Tischtennis-Set Family Advanced**](produkt:1) mit vier Schlägern mit ITTF-zugelassenen Belägen, sechs 3-Stern-Bällen und Tasche. Am günstigsten ist das [**Schildkröt Tischtennis-Set 4-Player Hobby**](produkt:2); wer zu zweit mehr Tempo und Spin will, nimmt das [**JOOLA Tischtennis-Set Duo Carbon**](produkt:3).",

  top3Title: "Unsere Top 3 Tischtennis-Sets",
  top3Intro:
    "Zwei Vierer-Sets für Familie und Rundlauf und ein Zweier-Set mit Carbon-Schlägern. Sie unterscheiden sich vor allem darin, wie schnell die Schläger sind, wie gut die Bälle sind und ob die Beläge geschützt verpackt werden.",
  comparisonTitle: "Die 3 besten Tischtennis-Sets im Vergleich",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 25 €" },
    2: { symbol: "€€", label: "ca. 25–50 €" },
    3: { symbol: "€€€", label: "über ca. 50 €" },
  },

  criteria: [
    { key: "belag", label: "Beläge & Schwamm", weight: 0.3, description: "ITTF-Zulassung der Beläge, Schwammstärke und -härte und das daraus folgende Verhältnis von Kontrolle zu Tempo und Spin – für Hobbyspieler zählt vor allem Kontrolle mit etwas Spin." },
    { key: "holz", label: "Holz, Griff & Verarbeitung", weight: 0.2, description: "Holzaufbau (Lagen, Carbon), Griffform, Gewicht und Markenqualität, etwa beim Schutz der Belagkanten." },
    { key: "lieferumfang", label: "Lieferumfang", weight: 0.25, description: "Anzahl Schläger, Anzahl und Qualität der Bälle, Tasche oder Hüllen – reicht das Set ohne Nachkauf?" },
    { key: "einsteiger", label: "Eignung für Familie & Einsteiger", weight: 0.25, description: "Fehlerverzeihende Schläger, gemischte Spielstärken, Kinderhände und Belastbarkeit im Familienalltag." },
  ],

  method:
    "Wir testen die Sets nicht selbst. Grundlage sind Hersteller- und Händlerangaben (Lieferumfang, Belag, Schwamm, Holz, Griff, Bälle), die Produktseiten bei Amazon und die Regeln des Weltverbands ITTF zu Belägen und Bällen. Einen Test von Tischtennisschlägern oder -Sets durch Stiftung Warentest oder Öko-Test haben wir nicht gefunden (Stand Oktober 2026), ebenso keine Rückrufe zu den empfohlenen Marken. Jedes Set wird in vier gewichteten Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert und eine redaktionelle Einschätzung.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl für die Familie",
      name: "JOOLA Tischtennis-Set Family Advanced – 4 Schläger, 6 Bälle 3-Stern, Tragetasche",
      brand: "JOOLA",
      variant: "4 Schläger, 6 Bälle, Tasche (Art.-Nr. 54823)",
      visual: { kind: "ttbats", tone: "forest" },
      priceTier: 2,
      ratings: { belag: 8.0, holz: 7.5, lieferumfang: 9.0, einsteiger: 8.5 },
      bestFor: "Familien und Freundesgruppen für Doppel und Rundlauf",
      verdict:
        "Das rundeste Paket für vier: Schläger mit ITTF-zugelassenen Belägen statt reiner Spaßschläger, dazu sechs 3-Stern-Bälle und eine Tasche. Der weiche Schwamm und der konkave Griff machen die Schläger laut Hersteller kontrolliert – gut für gemischte Spielstärken.",
      features: [
        "4 Schläger, 6 weiße 40-mm-Bälle mit 3 Sternen, Tragetasche (Händlerangabe)",
        "ITTF-zugelassene JOOLA-VIZON-Beläge, Schwammhärte „soft“ (Herstellerangabe)",
        "7-lagiges Holz, konkaver Griff, als Kontrollschläger eingestuft (Herstellerangabe)",
      ],
      pros: [
        "Vier Schläger mit ITTF-zugelassenen Belägen",
        "3-Stern-Bälle statt einfacher Freizeitbälle",
        "Kontrolliert und fehlerverzeihend (Herstellerangabe)",
        "Eine Tasche für alles",
      ],
      cons: [
        "Schwammstärke in Millimetern nicht angegeben",
        "Keine Einzelhüllen – Beläge in der Sammeltasche weniger geschützt",
        "Kein kleinerer Schläger für jüngere Kinder",
      ],
      specs: {
        schlaeger: "4",
        baelle: "6 × weiß, 40 mm, 3 Sterne",
        belag: "JOOLA VIZON, ITTF-zugelassen, Schwamm „soft“",
        holz: "7 Lagen, konkaver Griff",
        tasche: "Tragetasche",
      },
      asin: "B0BLTRFHMS",
      query: "JOOLA Family Advanced Tischtennis Set",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Schildkröt Tischtennis-Set 4-Player Hobby – 4 Schläger, 5 Bälle, Tragetasche",
      brand: "Donic-Schildkröt",
      variant: "4 Schläger, 5 Bälle, Tasche (Art.-Nr. 788603)",
      visual: { kind: "ttbats", tone: "green" },
      priceTier: 1,
      ratings: { belag: 6.5, holz: 6.5, lieferumfang: 8.0, einsteiger: 8.5 },
      bestFor: "Gelegenheitsspieler, Ferienhaus, Garage, Zweitset",
      verdict:
        "Vier Schläger, fünf Bälle und eine Reißverschlusstasche zum kleinsten Preis der Top 3 – von einem deutschen Traditionshersteller statt einer No-Name-Marke. Der dünne 1,5-mm-Schwamm bremst den Ball und macht das Spiel für Anfänger und Kinder ruhig.",
      features: [
        "4 Schläger mit 1,5 mm Schwamm, Noppen innen (Händlerangabe)",
        "5 Bälle 40 mm (3 weiß, 2 orange) in Freizeitqualität (Händlerangabe)",
        "Tragetasche mit Reißverschluss (Händlerangabe)",
      ],
      pros: [
        "Komplett für vier zum kleinen Preis",
        "1,5 mm Schwamm: viel Kontrolle für Anfänger",
        "Weiße und orange Bälle für unterschiedliche Hintergründe",
        "Bekannte Marke",
      ],
      cons: [
        "Bälle nur in Freizeitqualität",
        "Wenig Spin und Tempo – ambitionierte Spieler stoßen schnell an Grenzen",
        "ITTF-Zulassung der Beläge nur laut Händlerangabe",
      ],
      specs: {
        schlaeger: "4",
        baelle: "5 × 40 mm (3 weiß, 2 orange), Freizeitqualität",
        belag: "Noppen innen, 1,5 mm Schwamm",
        holz: "laut Hersteller nicht näher angegeben",
        tasche: "Tragetasche mit Reißverschluss",
      },
      asin: "B07DPSXKWV",
      query: "Schildkröt Tischtennis-Set 4-Player Hobby",
    },
    {
      rank: 3,
      label: "Beste Wahl für ambitionierte Hobbyspieler",
      name: "JOOLA Tischtennis-Set Duo Carbon – 2 Schläger, 3 Bälle, Schlägerhülle",
      brand: "JOOLA",
      variant: "2 Carbon-Speed-Schläger, 3 Tournament-Bälle, Doppelhülle (Art.-Nr. 54822)",
      visual: { kind: "ttbats", tone: "mint" },
      priceTier: 2,
      ratings: { belag: 8.5, holz: 8.5, lieferumfang: 7.0, einsteiger: 6.5 },
      bestFor: "Paare und Jugendliche, die regelmäßig spielen",
      verdict:
        "Das schnellste Set im Vergleich: Carbon-Holz mit 5+2-Aufbau und ITTF-zugelassenen Belägen bringen spürbar mehr Tempo als jeder Familienschläger. Dafür gibt es nur zwei Schläger und drei Bälle – ideal für zwei, die über einen Vereinseinstieg nachdenken.",
      features: [
        "Carbon-Speed-Holz mit 5+2-Aufbau, konkaver Griff (Herstellerangabe)",
        "ITTF-zugelassene VIZON-Beläge, Schwammhärte „soft“ (Herstellerangabe)",
        "Speed 112, Spin 104, Kontrolle 99 auf einer Skala bis 120 (Herstellerangabe)",
      ],
      pros: [
        "Deutlich mehr Tempo durch Carbon-Holz",
        "3-Stern-Turnierbälle im Set",
        "Doppelhülle schützt die Beläge",
      ],
      cons: [
        "Nur 2 Schläger und 3 Bälle – für Familien zu wenig",
        "Verzeiht weniger: für kleine Kinder und reine Anfänger nicht ideal",
        "Schwammstärke in Millimetern nicht angegeben",
      ],
      specs: {
        schlaeger: "2 × JOOLA Carbon Speed",
        baelle: "3 × JOOLA Tournament, 3 Sterne, 40+",
        belag: "JOOLA VIZON, ITTF-zugelassen, Schwamm „soft“",
        holz: "5+2 Lagen mit Carbon, konkaver Griff",
        tasche: "Doppelhülle",
      },
      asin: "B09YLMY3G4",
      query: "JOOLA Tischtennis Set Duo Carbon",
    },
  ],

  comparison: [
    { key: "schlaeger", label: "Schläger" },
    { key: "baelle", label: "Bälle" },
    { key: "belag", label: "Belag & Schwamm" },
    { key: "holz", label: "Holz & Griff" },
    { key: "tasche", label: "Tasche/Hülle" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-tischtennis-sets-2026-bewertung.svg",
      title: "Die 3 besten Tischtennis-Sets 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Tischtennis-Sets 2026 in den Kriterien Beläge und Schwamm, Holz, Griff und Verarbeitung, Lieferumfang sowie Eignung für Familie und Einsteiger",
      caption: "Unsere Bewertung je Kriterium. JOOLA Family Advanced ist am ausgewogensten, Schildkröt Hobby am günstigsten, JOOLA Duo Carbon am stärksten bei Belag und Holz.",
    },
    steps: {
      kind: "steps",
      file: "tischtennis-set-auswaehlen-anleitung.svg",
      title: "Das passende Tischtennis-Set wählen",
      subtitle: "In fünf Schritten zum richtigen Set",
      alt: "Infografik: Das passende Tischtennis-Set wählen – Spieler zählen, Niveau einschätzen, Griff wählen, Bälle prüfen, richtig aufbewahren",
      caption: "Für Einsteiger zählt Kontrolle mehr als Tempo.",
      steps: [
        { title: "Spieler zählen", text: "Zwei Schläger reichen fürs Einzel; für Doppel oder Rundlauf lohnen vier." },
        { title: "Niveau einschätzen", text: "Einsteiger und Kinder spielen mit kontrollierten, weniger schnellen Belägen leichter." },
        { title: "Griff wählen", text: "Konkav, gerade oder anatomisch – am besten in die Hand nehmen und ausprobieren." },
        { title: "Bälle prüfen", text: "Auf 40+-Plastikbälle achten; mehr Sterne stehen für höhere Qualitätsstufe." },
        { title: "Richtig aufbewahren", text: "Schläger in Hülle oder Tasche lagern, Beläge vor Sonne und Hitze schützen." },
      ],
    },
  },

  editorial: {
    title: "Welches Set passt an eure Platte?",
    intro:
      "Was gute Familienschläger von Spaßschlägern unterscheidet, worauf es bei Belag, Griff und Bällen ankommt und welches Set zu wem passt.",
    sections: [
      {
        id: "bestes-tischtennis-set",
        h2: "Welches Tischtennis-Set ist das beste?",
        blocks: [
          { quick: "Für die meisten Familien ist das [JOOLA Family Advanced](produkt:1) die beste Wahl: vier kontrollierte Schläger mit ITTF-zugelassenen Belägen, sechs 3-Stern-Bälle und eine Tasche. Wer nur gelegentlich spielt, spart mit dem [Schildkröt Hobby](produkt:2); wer zu zweit regelmäßig trainiert, greift zum [JOOLA Duo Carbon](produkt:3)." },
          { first: "Ein Tischtennisschläger besteht aus drei Teilen: dem Holz mit Griff, dem Schwamm und dem Obergummi. Bei einfachen Sets entscheidet vor allem das Gummi, ob der Ball nur zurückprallt oder ob man ihm Schnitt mitgeben kann. Glatte, griffige Noppen-innen-Beläge, wie sie in allen drei Sets stecken, sind dafür die Grundlage. Der Schwamm darunter regelt das Tempo: dünn und weich heißt langsam und kontrolliert, dick und hart heißt schnell." },
          { p: "Das [JOOLA Family Advanced](produkt:1) trifft für gemischte Runden den besten Punkt. Laut Hersteller sind die VIZON-Beläge ITTF-zugelassen und sitzen auf einem weichen Schwamm und einem 7-lagigen Holz; JOOLA stuft die Schläger als Kontrollschläger ein. Das heißt: Kinder und Einsteiger bekommen den Ball leichter auf den Tisch, geübte Spieler können trotzdem Unterschnitt und Topspin üben. Dazu kommen sechs 3-Stern-Bälle – die Qualitätsstufe, die auch im Wettkampf üblich ist." },
          { p: "Das [Schildkröt Hobby](produkt:2) ist ehrlicher Freizeitbedarf: vier Schläger mit 1,5 mm Schwamm, fünf Bälle und eine Reißverschlusstasche (Händlerangabe). Der dünne Schwamm bremst den Ball – für Kinder und Gelegenheitsspieler ein Vorteil, für alle, die schärfer spielen wollen, eine Grenze. Die Bälle sind laut Listing in Freizeitqualität; wer öfter spielt, kauft später [bessere Bälle](/beste-tischtennisbaelle/) nach." },
          { figure: "scores" },
          { quote: "Für die Familie zählt Kontrolle mehr als Tempo – ein zu schneller Schläger macht Anfängern keinen Spaß." },
          { p: "Das [JOOLA Duo Carbon](produkt:3) spielt in einer anderen Liga. Das Holz mit 5+2-Aufbau enthält Carbonlagen, die laut Hersteller für mehr Tempo sorgen; JOOLA gibt Speed 112, Spin 104 und Kontrolle 99 auf einer Skala bis 120 an. Dazu kommen drei Tournament-Bälle, die laut Hersteller den aktuellen ITTF-Wettkampfanforderungen entsprechen, und eine Doppelhülle. Für zwei ambitionierte Hobbyspieler ist das ein guter Zwischenschritt, bevor man im Verein einen eigenen Schläger zusammenstellt." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Tischtennis-Sets achten?",
        blocks: [
          { quick: "Achte auf vier Dinge: Beläge (am besten ITTF-zugelassen, Schwamm eher dünn oder weich für Einsteiger), Griffform, Bälle (40 mm, aus Plastik, für ernsthaftes Spiel 3 Sterne) und eine Tasche oder Hülle, die die Beläge schützt. Die Zahl der Schläger richtet sich danach, ob ihr Einzel, Doppel oder Rundlauf spielt." },
          {
            table: {
              caption: "Die wichtigsten Merkmale eines Tischtennis-Sets",
              head: ["Merkmal", "Was es bewirkt", "Unsere Empfehlung"],
              rows: [
                ["**Belag**", "Griffiges Obergummi erlaubt Spin, glattes Billiggummi kaum.", "ITTF-zugelassene Beläge, auch im Hobbybereich"],
                ["**Schwamm**", "Dünn/weich bremst und kontrolliert, dick/hart beschleunigt.", "Einsteiger um 1,5 mm oder „soft“, Fortgeschrittene dicker"],
                ["**Holz**", "Mehr Lagen und Carbon machen den Schläger steifer und schneller.", "Reines Holz für Familien, Carbon für Ambitionierte"],
                ["**Griff**", "Konkav sitzt fest, gerade lässt sich leicht umgreifen, anatomisch füllt die Hand.", "Probieren; konkav ist der verbreitetste Allrounder"],
                ["**Bälle**", "Sterne stehen für die Qualitätsstufe; 3 Sterne ist Wettkampfniveau.", "40+-Plastikbälle, für Training 1–3 Sterne"],
                ["**Aufbewahrung**", "Hüllen schützen die Beläge vor Staub, Licht und Kratzern.", "Einzel- oder Doppelhülle, sonst eine Tasche"],
              ],
            },
          },
          { h3: "Beläge und ITTF-Zulassung" },
          { p: "Wer im Verein spielt, braucht Beläge, die vom Weltverband ITTF zugelassen sind. Steht in einem Listing „ITTF“, bezieht sich das auf den Belag – nicht auf das ganze Set und nicht auf die Bälle. Für das Spiel zu Hause ist die Zulassung kein Muss, sie ist aber ein brauchbarer Hinweis darauf, dass das Gummi griffig ist und nicht nach wenigen Wochen glatt wird. Beim Schildkröt Hobby stammt die Angabe nur aus dem Händler-Listing; bei den JOOLA-Sets bestätigt sie der Hersteller." },
          { h3: "Schwamm: dünn, weich oder dick?" },
          { p: "Dünne Schwämme um 1,5 mm, wie bei Schildkröt Hobby, dem Butterfly Bronze oder Donic-Schildkröt Champs Line, lassen den Ball langsamer abspringen. Das ist für Anfänger und Kinder genau richtig. JOOLA nennt für Family Advanced und Duo Carbon keine Millimeter, sondern nur die Härte „soft“; ein weicher Schwamm hält den Ball etwas länger auf dem Belag und verzeiht Fehler. Härter und dicker wird es erst bei Wettkampfschlägern." },
          { h3: "Bälle: Sterne und 40+" },
          { p: "Seit dem Wechsel von Zelluloid zu Plastik tragen Wettkampfbälle die Kennzeichnung „40+“. Die Sterne auf der Packung zeigen die Qualitätsstufe: 3 Sterne ist das Niveau, das im Wettkampf gespielt wird, 1 Stern und „Freizeitqualität“ sind Trainings- und Spaßbälle. Mehr dazu im Ratgeber zu [Tischtennisbällen](/beste-tischtennisbaelle/)." },
        ],
      },
      {
        id: "welches-set-passt",
        h2: "Welches Tischtennis-Set passt zu wem?",
        blocks: [
          { quick: "Familien mit gemischten Spielstärken nehmen ein Vierer-Set mit kontrollierten Schlägern, Gelegenheitsspieler ein günstiges Markenset, Paare und Jugendliche mit Ehrgeiz ein Zweier-Set mit Carbon- oder Markenschlägern und Hüllen." },
          {
            cards: [
              { title: "Familie & Rundlauf", text: "Vier kontrollierte Schläger und 3-Stern-Bälle: [JOOLA Family Advanced](produkt:1).", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Garage, Ferienhaus, Zweitset", text: "Günstig, komplett, von einer bekannten Marke: [Schildkröt Hobby](produkt:2).", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Zwei mit Ehrgeiz", text: "Carbon-Holz, Turnierbälle, Hülle: [JOOLA Duo Carbon](produkt:3).", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Kinder & Schule", text: "Robuste Schläger mit 1,5 mm Schwamm und viele Bälle – siehe Top 5.", link: { href: "#top5-tischtennis-sets-nach-anlass", label: "Zur Top 5" } },
              { title: "Ohne Platte", text: "Ein Set mit ausziehbarem Netz macht den Esstisch zur Platte – siehe Top 5.", link: { href: "#top5-tischtennis-sets-nach-anlass", label: "Zur Top 5" } },
              { title: "Noch keine Platte?", text: "Wetterfeste Outdoor-Platten und Indoor-Modelle im Vergleich.", link: { href: "/tischtennisplatten/", label: "Tischtennisplatten" } },
            ],
          },
          { p: "Ein typischer Fehler ist, das schnellste Set für die ganze Familie zu kaufen. Mit einem Carbon-Schläger fliegen Bälle von Kindern und Einsteigern häufiger über die Platte hinaus, und das Spiel wird mühsam. Umgekehrt ist ein Vierer-Set mit dünnem Schwamm für zwei Jugendliche, die schon Topspin spielen, schnell zu langsam. Wer beides abdecken will, kombiniert ein Familienset mit zwei besseren Einzelschlägern." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-tischtennis-sets-nach-anlass",
    h2: "Die 5 besten Tischtennis-Sets nach Anlass und Spielerzahl",
    intro:
      "Zweier-Set für Paare, Vierer-Set für den Rundlauf, Set für Kinder und Schule, Set mit Netz für den Esstisch und ein Set aus FSC-zertifiziertem Holz.",
    items: [
      { name: "Butterfly Timo Boll Bronze – 2 Schläger, 2 Hüllen Drive Case, 3-Stern-Bälle", for: "2er-Set für Paare", text: "Zwei Markenschläger von Butterfly mit ITTF-zugelassenem Addoy-Belag und 1,5 mm Schwamm, je eine eigene Hülle und 3-Stern-Bälle (Händlerangabe) – kontrollierter als das Duo Carbon.", asin: "B08Y91GMZM", query: "Butterfly Timo Boll Bronze 2 Tischtennisschläger Drive Case Set" },
      { name: "JOOLA Tischtennis-Set NEON – 4 Schläger, 8 Bälle, Tragetasche", for: "4er-Set für Rundlauf mit Freunden", text: "Vier Schläger mit Kantenbändern in Orange, Pink, Blau und Grün, damit jeder seinen erkennt, und acht weiße Bälle als Reserve (Händlerangabe).", asin: "B0F9L29PYB", query: "JOOLA Tischtennis Set NEON 4 Schläger" },
      { name: "JOOLA Tischtennis-Set Team School – 4 Schläger, 8 Bälle, Tasche", for: "Kinder, Schule und Team", text: "Robuste Einsteigerschläger mit 1,5 mm Schwamm, vier weiße und vier orange Bälle, laut Händler für Indoor- und Outdoor-Platten (Art.-Nr. 54825).", asin: "B0HCV49VS2", query: "JOOLA Team School Tischtennis Set" },
      { name: "Schildkröt Tischtennis-Set Spin 788660 mit ausziehbarem Netz", for: "Esstisch, Urlaub, Garten", text: "Zwei Schläger aus FSC-zertifiziertem Holz, zwei Bälle und ein ausziehbares Netz für Tische bis 170 cm Breite und 4 cm Plattenstärke (Herstellerangabe). Die Netzhöhe von rund 15 cm liegt knapp unter dem Regelmaß – für Freizeit unkritisch.", asin: "B09YJ4CPLK", query: "Schildkröt Spin 788660 Tischtennis Set Netz" },
      { name: "Donic-Schildkröt Tischtennis-Set Champs Line 400 – 2 Schläger aus FSC-Holz, 4 Bälle, 2 Hüllen", for: "Nachhaltigeres 2er-Set", text: "Schläger aus FSC-zertifiziertem Holz mit ITTF-zugelassenem Jade-Belag und 1,5 mm Schwamm, vier 1-Stern-Bälle und zwei Einzelhüllen; laut Listing 2 Jahre Garantie.", asin: "B089YV2YXB", query: "Donic-Schildkröt Champs Line 400 Tischtennis Set FSC" },
    ],
  },

  guide: {
    sections: [
      {
        id: "set-auswaehlen-pflegen",
        h2: "So wählst und pflegst du dein Tischtennis-Set",
        blocks: [
          { quick: "Zähle zuerst die Spieler, schätze dann das Niveau ein, nimm die Schläger möglichst in die Hand und prüfe die Bälle. Nach dem Spiel gehören die Schläger in Hülle oder Tasche – Sonne, Hitze und Staub machen Beläge schneller glatt." },
          { p: "Zwei Schläger reichen für ein Einzel, für Doppel und Rundlauf braucht ihr vier. Rundlauf mit Freunden oder auf Familienfeiern lebt davon, dass genug Bälle da sind: Ein Set mit sechs oder acht Bällen erspart die Suche unter dem Sofa. Wer die Platte draußen stehen hat, sollte zusätzlich an ein [stabiles Netz](/bestes-tischtennisnetz/) denken – die Klemmnetze vieler Platten lockern sich mit der Zeit." },
          { figure: "steps" },
          { h3: "Griff: konkav, gerade oder anatomisch" },
          { p: "Alle drei Top-Sets haben einen konkaven Griff, der zum Ende hin breiter wird und so beim Ausholen nicht aus der Hand rutscht. Gerade Griffe lassen sich leichter umgreifen und sind bei Spielern beliebt, die viel mit der Rückhand blocken. Anatomische Griffe sind in der Mitte bauchig und füllen eine große Hand gut aus. Eine allgemeingültige Antwort gibt es nicht – im Zweifel ist konkav der verbreitetste Allrounder." },
          { h3: "Beläge pflegen" },
          {
            list: [
              "**Nach dem Spiel abwischen:** Staub und Handschweiß mit einem leicht feuchten Tuch oder Belagreiniger entfernen.",
              "**Geschützt lagern:** Hülle oder Tasche schützt vor Licht und Kratzern; Schläger nicht im heißen Auto liegen lassen.",
              "**Kanten im Blick:** Sich lösende Belagkanten früh nachkleben oder den Schläger ersetzen, bevor der Belag reißt.",
              "**Draußen trocken halten:** Feuchte Beläge und aufquellendes Holz verlieren an Griff – nach dem Spiel im Garten mit ins Haus nehmen.",
            ],
          },
          { callout: { title: "Kinder & Schadstoffe", warn: true, text: "Unabhängige Schadstoffprüfungen von Tischtennisbelägen und -griffen sind uns nicht bekannt. Stiftung Warentest rät allgemein, stark riechende Gummi- und Kunststoffprodukte zu meiden – riecht ein neuer Schläger auffällig stechend, lieber reklamieren. Kleine Kinder nur unter Aufsicht spielen lassen und Bälle nicht als Spielzeug herumliegen lassen." } },
          {
            facts: [
              { value: "40 mm", label: "Balldurchmesser nach ITTF-Regeln" },
              { value: "15,25 cm", label: "Netzhöhe nach ITTF-Regeln" },
              { value: "1,5 mm", label: "typischer Schwamm in Einsteigersets" },
            ],
          },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Tischtennis-Set ist das beste für Anfänger?", a: "Für Anfänger und Familien das JOOLA Family Advanced: vier kontrollierte Schläger mit weichem Schwamm und ITTF-zugelassenen Belägen, sechs 3-Stern-Bälle und eine Tasche. Mit kleinerem Budget reicht das Schildkröt Hobby mit 1,5 mm Schwamm." },
    { q: "Was ist der Unterschied zwischen günstigen und teuren Tischtennisschlägern?", a: "Vor allem Belag, Schwamm und Holz. Günstige Schläger haben dünne Schwämme und einfachere Gummis – langsam, kontrolliert, wenig Spin. Teurere Schläger nutzen griffigere, ITTF-zugelassene Beläge, dickere Schwämme und teils Carbonlagen im Holz; sie sind schneller und erlauben mehr Schnitt, verzeihen aber weniger." },
    { q: "Welche Schwammstärke ist für Hobbyspieler richtig?", a: "Ein dünner oder weicher Schwamm, typischerweise um 1,5 mm. Er bremst den Ball und macht das Spiel kontrollierbar. Dickere, härtere Schwämme lohnen sich erst, wenn man regelmäßig Topspin spielt." },
    { q: "Welcher Griff ist der richtige: konkav, gerade oder anatomisch?", a: "Für die meisten ist konkav der beste Start, weil der Schläger beim Ausholen fest in der Hand sitzt. Gerade Griffe erleichtern das Umgreifen, anatomische füllen große Hände aus. Am besten ausprobieren." },
    { q: "Darf man mit einem Schläger aus dem Hobby-Set im Verein spielen?", a: "Ja, wenn die Beläge ITTF-zugelassen sind und die Regeln zu Belagfarben eingehalten werden – das ist bei den JOOLA-Sets laut Hersteller der Fall. Für den Wettkampf wechseln die meisten Spieler aber bald zu einem eigenen, schnelleren Schläger. Die Bälle aus Freizeitsets sind keine Wettkampfbälle." },
    { q: "Wie lange halten Tischtennisbeläge?", a: "Das hängt stark davon ab, wie oft und wie gepflegt gespielt wird. Ein Zeichen für Verschleiß ist, wenn der Belag glatt wird und kaum noch Schnitt annimmt oder sich die Kanten lösen. Wer die Schläger in Hülle oder Tasche lagert und die Beläge reinigt, verlängert ihre Lebensdauer." },
    { q: "Wie viele Bälle sollte ein Tischtennis-Set haben?", a: "Für zwei Spieler reichen drei Bälle, für Rundlauf mit vier oder mehr Spielern sind sechs bis acht sinnvoll. Bälle gehen leicht kaputt oder verloren; Nachschub in 3-Stern- oder Trainingsqualität gibt es günstig im Mehrfachpack." },
  ],

  sources: [
    { label: "JOOLA: Tischtennis-Set Family Advanced (Herstellerseite)", url: "https://joola.de/en-eu/products/joola-table-tennis-set-joola-family-advanced" },
    { label: "JOOLA: Tischtennis-Set Duo Carbon (Herstellerseite)", url: "https://joola.de/en/products/joola-table-tennis-set-duo-carbon" },
    { label: "JOOLA: Belag VIZON", url: "https://joola.de/en/products/joola-belag-vizon" },
    { label: "fitshop: Schildkröt Hobby 4-Player 788603 (Händlerangaben)", url: "https://www.fitshop.com/no/schildkroet-table-tennis-set-hobby-4-player-dsk-788603" },
    { label: "Tabletennis365: Butterfly Timo Boll Bronze (Händlerangaben)", url: "https://www.tabletennis365.com/Shop/Product/timo-boll-bronze/6056" },
    { label: "ITTF: Handbook (Regeln zu Ball, Netz und Belägen)", url: "https://www.ittf.com/handbook/" },
    { label: "Stiftung Warentest: Schadstoffe in Alltagsgegenständen", url: "https://www.test.de/Schadstoffe-in-Alltagsgegenstaenden-Was-stinkt-ist-oft-gefaehrlich-5197739-0/" },
  ],

  related: [
    { slug: "beste-tischtennisbaelle", text: "3-Stern- und Trainingsbälle für Wettkampf und Familie." },
    { slug: "tischtennisplatten", text: "Wetterfeste Outdoor-Platten, Beton- und Indoor-Modelle." },
    { slug: "bestes-tischtennisnetz", text: "Stabile Netzgarnituren statt wackeliger Klemmnetze." },
    { slug: "beste-pickleball-schlaeger", text: "Paddel für den Trendsport zwischen Tennis und Tischtennis." },
    { area: "tischtennis", text: "Alle Ratgeber für Tischtennis zu Hause." },
  ],
};
