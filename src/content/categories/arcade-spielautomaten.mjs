// Kategorie: Arcade-Spielautomaten für zu Hause
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "arcade-spielautomaten",
  area: "gaming-room",
  navLabel: "Arcade-Automaten",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Arcade-Automaten für zu Hause 2026",
  metaDescription:
    "Arcade-Automaten mit lizenzierten Spielen für den Gaming-Room: AtGames Legends Ultimate, Arcade1Up und mehr – die 3 besten Arcade-Automaten 2026 im Vergleich.",

  eyebrow: "Gaming-Room · Arcade-Automaten",
  h1: "Die 3 besten Arcade-Automaten für zu Hause 2026",
  lead:
    "Ein Arcade-Automat bringt das Spielhallen-Gefühl der 80er und 90er in den Keller. Wir zeigen die drei besten Automaten mit lizenzierten Spielen – und in der Top 5 Modelle für Sammler, Kinder und Shooter-Fans.",
  answer:
    "Unsere beste Gesamtwahl ist der [**AtGames Legends Ultimate**](produkt:1) mit 24-Zoll-Bildschirm und rund 300 lizenzierten Spielen. Das beste Preis-Leistungs-Verhältnis bietet der [**Arcade1Up Ms. PAC-MAN Classic Special Edition**](produkt:2), die Wahl für Fans klassischer Prügelspiele ist der [**Arcade1Up Capcom Legacy**](produkt:3).",

  priceTiers: {
    1: { symbol: "€", label: "bis 400 €" },
    2: { symbol: "€€", label: "400–700 €" },
    3: { symbol: "€€€", label: "über 700 €" },
  },

  top3Title: "Unsere Top 3 Arcade-Automaten",
  top3Intro: "Alle drei sind Automaten im Originalstil mit Joysticks, Knöpfen und laut Hersteller offiziell lizenzierten Spielen – keine Geräte, bei denen die Herkunft der vorinstallierten Spiele unklar ist.",
  comparisonTitle: "Die 3 besten Arcade-Automaten im Vergleich",

  criteria: [
    { key: "spiele", label: "Spiele & Lizenzen", weight: 0.3, description: "Anzahl und Qualität der lizenzierten Spiele." },
    { key: "steuerung", label: "Steuerung & Bild", weight: 0.3, description: "Joysticks, Knöpfe, Bildschirmgröße, Bildqualität." },
    { key: "bau", label: "Bauqualität & Größe", weight: 0.15, description: "Gehäuse, Stabilität, Platzbedarf." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Spielen und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Spieleliste, Bildschirmgröße, Steuerung, Maße), Händlerangaben und die Lizenzangaben der Hersteller. Geräte, bei denen die Lizenzierung der vorinstallierten Spiele nicht nachvollziehbar ist, haben wir bewusst nicht aufgenommen. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "AtGames Legends Ultimate Arcade",
      brand: "AtGames",
      variant: "24 Zoll, rund 300 lizenzierte Spiele",
      visual: { kind: "arcade", tone: "forest" },
      priceTier: 3,
      ratings: { spiele: 9.5, steuerung: 8.5, bau: 8.0, preis: 8.0 },
      bestFor: "Große Spielesammlung, mehrere Genres",
      verdict:
        "Aus unserer Sicht der vielseitigste Heimautomat im Vergleich: laut Hersteller rund 300 lizenzierte Klassiker von Atari bis Capcom, 24-Zoll-Bildschirm, Zwei-Spieler-Bedienfeld mit Trackball und WLAN für weitere Inhalte.",
      features: [
        "Rund 300 lizenzierte Spiele vorinstalliert (Herstellerangabe)",
        "24-Zoll-Bildschirm, Bedienfeld für zwei Spieler mit Trackball (Herstellerangabe)",
        "WLAN für Spiele-Downloads und Streaming (Herstellerangabe)",
      ],
      pros: ["Sehr viele Spiele", "Trackball und zwei Spieler", "Erweiterbar"],
      cons: ["Groß und schwer", "Joysticks nicht auf Spielhallen-Niveau"],
      specs: { spiele: "ca. 300 lizenziert", bildschirm: "24 Zoll", spieler: "2", steuerung: "2 Joysticks, Trackball", extras: "WLAN, Downloads" },
      asin: "B097PMZS82",
      query: "AtGames Legends Ultimate Arcade 300 Spiele",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Arcade1Up Ms. PAC-MAN Classic Special Edition",
      brand: "Arcade1Up",
      variant: "Classic SE, Originaldesign",
      visual: { kind: "arcade", tone: "mint" },
      priceTier: 2,
      ratings: { spiele: 7.5, steuerung: 8.5, bau: 8.5, preis: 8.5 },
      bestFor: "Retro-Fans, Familien",
      verdict:
        "Der Automat für Puristen: originalgetreues Ms.-PAC-MAN-Design mit weiteren Namco-Klassikern, kompakter als ein Spielhallengerät.",
      features: [
        "Ms. PAC-MAN und weitere Namco-Klassiker (Spieleliste laut Hersteller)",
        "Originalgetreues Gehäusedesign",
        "Kompakter als ein Spielhallen-Automat",
      ],
      pros: ["Originalgetreue Optik", "Familientauglich", "Kompakt"],
      cons: ["Wenige Spiele", "Für Erwachsene leicht klein ohne Erhöhung"],
      specs: { spiele: "Namco-Klassiker", bildschirm: "laut Hersteller", spieler: "1–2", steuerung: "Joystick, Knöpfe", extras: "Originaldesign" },
      asin: "B0F4DL12SL",
      query: "Arcade1Up Ms. PAC-MAN Classic Special Edition",
    },
    {
      rank: 3,
      label: "Für Prügelspiel-Fans",
      name: "Arcade1Up Capcom Legacy",
      brand: "Arcade1Up",
      variant: "mit Erhöhung und Leuchtschild",
      visual: { kind: "arcade", tone: "green" },
      priceTier: 3,
      ratings: { spiele: 8.5, steuerung: 8.5, bau: 8.0, preis: 7.5 },
      bestFor: "Street-Fighter-Fans, zwei Spieler",
      verdict:
        "Street Fighter II und weitere Capcom-Klassiker im Zwei-Spieler-Gehäuse – mit Erhöhung und Leuchtschild für Stehhöhe wie in der Spielhalle.",
      features: [
        "Capcom-Klassiker wie Street Fighter II (Herstellerangabe)",
        "Zwei-Spieler-Bedienfeld, Erhöhung, Leuchtschild (Herstellerangabe)",
        "Gehäuse im Capcom-Design",
      ],
      pros: ["Starke Spieleauswahl", "Zwei Spieler", "Stehhöhe dank Erhöhung"],
      cons: ["Teurer", "Nur ein Hersteller-Katalog"],
      specs: { spiele: "Capcom-Klassiker", bildschirm: "laut Hersteller", spieler: "2", steuerung: "2 Joysticks, 6 Knöpfe je Spieler", extras: "Erhöhung, Leuchtschild" },
      asin: "B098XBN9F9",
      query: "Arcade1Up Capcom Legacy",
    },
  ],

  comparison: [
    { key: "spiele", label: "Spiele" },
    { key: "bildschirm", label: "Bildschirm" },
    { key: "spieler", label: "Spieler" },
    { key: "steuerung", label: "Steuerung" },
    { key: "extras", label: "Extras" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-arcade-automaten-2026-bewertung.svg",
      title: "Die 3 besten Arcade-Automaten 2026",
      alt: "Balkendiagramm: Bewertung von AtGames Legends Ultimate, Arcade1Up Ms. PAC-MAN und Arcade1Up Capcom Legacy",
      caption: "Unsere Bewertung je Kriterium. Spiele und Steuerung wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "arcade-automat-aufstellen.svg",
      title: "Arcade-Automat aufstellen",
      subtitle: "Platz, Strom und Feinschliff",
      alt: "Infografik: Arcade-Automat aufstellen – Platz messen, Transport, Aufbau, Höhe, Pflege",
      caption: "So steht der Automat sicher und spielt sich gut.",
      steps: [
        { title: "Platz messen", text: "Grundfläche plus rund 1 m Spielraum vor dem Automaten." },
        { title: "Transport planen", text: "Kartons sind groß und schwer – zu zweit tragen." },
        { title: "Aufbauen", text: "Anleitung folgen, Schrauben nicht zu fest anziehen." },
        { title: "Höhe anpassen", text: "Erhöhung oder Sockel für Erwachsene einplanen." },
        { title: "Pflegen", text: "Bildschirm trocken abwischen, Joysticks bei Bedarf tauschen." },
      ],
    },
  },

  editorial: {
    title: "Welcher Arcade-Automat passt zu dir?",
    intro: "Was Heimautomaten können, warum lizenzierte Spiele wichtig sind und wie viel Platz du einplanen solltest.",
    sections: [
      {
        id: "bester-arcade-automat",
        h2: "Welcher Arcade-Automat ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [AtGames Legends Ultimate](produkt:1) die beste Wahl, weil er die meisten Spiele bietet. Günstiger und originalgetreu ist der [Arcade1Up Ms. PAC-MAN](produkt:2), für Prügelspiele der [Arcade1Up Capcom Legacy](produkt:3)." },
          { first: "Heimautomaten sind eine Mischung aus Möbel und Spielkonsole. Sie sehen aus wie die großen Kästen aus der Spielhalle, sind aber kleiner, leichter und günstiger. Innen steckt meist ein Flachbildschirm und ein kleiner Computer, der die Spiele emuliert. Die großen Anbieter Arcade1Up und AtGames lizenzieren die Spiele nach eigenen Angaben von den Rechteinhabern wie Namco, Capcom oder Atari." },
          { p: "Das ist ein wichtiger Unterschied zu manchen günstigen Automaten und Retro-Boxen, die mit tausenden vorinstallierten Spielen werben: Dort sind die Spiele in der Regel nicht lizenziert, die Rechtelage ist für Käufer kaum nachvollziehbar, und Qualität der Emulation sowie Updates lassen sich schwer einschätzen. Wir empfehlen deshalb nur Geräte, deren Spiele laut Hersteller offiziell lizenziert sind. Mehr zu kleinen Retro-Geräten findest du im Ratgeber zu [Retro-Konsolen](/retro-konsolen/)." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf die Spieleliste, die Zahl der Spieler, die Gehäusegröße, eine Erhöhung für Erwachsene und darauf, ob die Spiele offiziell lizenziert sind." },
          {
            table: {
              caption: "Automatentypen im Vergleich",
              head: ["Typ", "Stärken", "Schwächen"],
              rows: [
                ["**Sammel-Automat (AtGames)**", "Hunderte Spiele, Trackball", "Weniger Originaloptik"],
                ["**Themen-Automat (Arcade1Up)**", "Originaldesign, ein Thema", "Wenige Spiele"],
                ["**Countercade/Tischgerät**", "Klein, günstig", "Kein Automaten-Gefühl"],
                ["**Lightgun-Automat**", "Shooter wie Time Crisis", "Sehr groß"],
              ],
            },
          },
          { h3: "Wie viel Platz braucht ein Arcade-Automat?" },
          { p: "Arcade1Up-Automaten sind kleiner als echte Spielhallengeräte und brauchen grob eine Grundfläche wie ein schmaler Schrank. Mit Erhöhung sind sie laut Herstellerangaben rund 1,5 bis 1,7 m hoch. Vor dem Automaten solltest du rund einen Meter Platz lassen, bei Zwei-Spieler-Geräten etwas Breite für zwei Personen. AtGames-Automaten sind etwas größer." },
          { list: ["Offiziell lizenzierte Spiele", "Ein- oder Zwei-Spieler-Bedienfeld", "Erhöhung für Erwachsene", "WLAN für Updates oder Online-Spiel", "Platz und Transportweg zum Aufstellort prüfen"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen",
    intro: "Für Lightgun-Fans, Kinder und Sammler bestimmter Hersteller.",
    items: [
      { name: "Arcade1Up Bandai Namco Legacy", for: "Namco-Sammlung", text: "Zwei-Spieler-Automat mit Namco-Klassikern wie PAC-MAN und Galaga, mit Erhöhung (Herstellerangabe).", asin: "B098XF1R9R", query: "Arcade1Up Bandai Namco Legacy" },
      { name: "Arcade1Up Time Crisis", for: "Lightgun-Shooter", text: "Automat mit Lightguns für die Time-Crisis-Reihe – Shooter-Spaß zu zweit.", asin: "B0CJ7X1799", query: "Arcade1Up Time Crisis" },
      { name: "Arcade1Up Mortal Kombat Legacy", for: "Prügelspiel-Klassiker", text: "Mortal-Kombat-Reihe im Zwei-Spieler-Gehäuse mit Erhöhung.", asin: "B0B8F3CC56", query: "Arcade1Up Mortal Kombat Legacy" },
      { name: "Arcade1Up Jr. PAC-MAN", for: "Für Kinder", text: "Kleiner Automat in Kinderhöhe mit PAC-MAN-Spielen.", asin: "B09V26HV2C", query: "Arcade1Up PAC-MAN Jr" },
      { name: "AtGames Legends Pinball", for: "Lieber Flipper?", text: "Virtueller Flipper mit lizenzierten Tischen – mehr im Ratgeber Flipper.", asin: "B09YHKM36H", query: "AtGames Legends Pinball" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Pflege und Sicherheit",
        blocks: [
          { quick: "Automat zu zweit aufbauen, auf ebenem Boden aufstellen, bei Kindern gegen Kippen sichern und den Bildschirm nur trocken reinigen." },
          { figure: "steps" },
          { p: "Wer basteln mag, kann Arcade1Up-Automaten aufrüsten: Es gibt Ersatz-Joysticks und Knöpfe im Spielhallen-Standard, Lautsprecher-Upgrades und Leuchtschilder. Dabei kann aber die Herstellergarantie erlöschen – vorher die Garantiebedingungen prüfen. Arbeiten am Netzteil oder an der 230-Volt-Verkabelung gehören in die Hände von Fachleuten. Ein passender [Getränkekühlschrank](/getraenke-kuehlschrank/) und [Neonlicht](/led-neon-beleuchtung/) machen die Spielhalle im Keller komplett." },
          { callout: { title: "Kippgefahr", warn: true, text: "Automaten sind hoch, schwer und kopflastig. Zu zweit nach Anleitung des Herstellers aufbauen, auf ebenem Boden aufstellen, bei Kindern im Haus mit einem Kippschutz an der Wand sichern und nicht daran hochklettern lassen." } },
          { callout: { title: "Jugendschutz und Gesundheit", warn: true, text: "Einige Klassiker – etwa Prügelspiele und Lightgun-Shooter – enthalten Gewaltdarstellungen. Achte auf die Alterskennzeichnung des Herstellers bzw. die USK-Freigabe einzelner Spiele, soweit vorhanden, und entscheide bei Kindern selbst, welche Spiele passen. Blinkende Bildschirmeffekte können bei Menschen mit fotosensibler Epilepsie Anfälle auslösen; Warnhinweise in der Bedienungsanleitung beachten und regelmäßig Pausen einlegen." } },
          { facts: [{ value: "ca. 300", label: "Spiele im AtGames Legends Ultimate (Herstellerangabe)" }, { value: "24 Zoll", label: "Bildschirm Legends Ultimate" }, { value: "1 m", label: "Freiraum vor dem Automaten" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Arcade-Automat für zu Hause ist der beste?", a: "Unsere beste Gesamtwahl ist der AtGames Legends Ultimate mit rund 300 lizenzierten Spielen. Günstiger ist der Arcade1Up Ms. PAC-MAN, für Prügelspiele der Arcade1Up Capcom Legacy." },
    { q: "Sind die Spiele auf Arcade1Up-Automaten lizenziert?", a: "Ja, Arcade1Up und AtGames lizenzieren die Spiele nach eigenen Angaben von den Rechteinhabern. Bei Geräten, die mit tausenden vorinstallierten Spielen werben, ist das in der Regel nicht der Fall." },
    { q: "Wie groß ist ein Arcade1Up-Automat?", a: "Arcade1Up-Automaten sind kleiner als Spielhallengeräte und mit Erhöhung meist rund 1,5 bis 1,7 m hoch – genaue Maße stehen beim jeweiligen Modell." },
    { q: "Kann man auf Heimautomaten neue Spiele installieren?", a: "Beim AtGames Legends Ultimate lassen sich laut Hersteller weitere lizenzierte Spiele herunterladen. Arcade1Up-Automaten haben meist eine feste Spieleauswahl." },
    { q: "Brauchen Arcade-Automaten viel Strom?", a: "In der Regel nicht viel: Sie haben einen Flachbildschirm und einen kleinen Rechner und laufen an einer normalen Steckdose. Die genaue Leistungsaufnahme steht in den Herstellerangaben. Nach dem Spielen ganz ausschalten statt im Standby zu lassen." },
  ],

  sources: [
    { label: "Arcade1Up", url: "https://arcade1up.com/" },
    { label: "AtGames: Legends Ultimate", url: "https://www.atgames.net/" },
    { label: "USK: Altersfreigaben", url: "https://usk.de/" },
  ],

  related: [
    { slug: "flipper", text: "Flipper für zu Hause." },
    { slug: "retro-konsolen", text: "Retro-Konsolen mit lizenzierten Spielen." },
    { slug: "dartautomaten", text: "Dartautomaten für den Partykeller." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
