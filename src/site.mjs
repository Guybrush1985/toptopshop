// Zentrale Konfiguration für toptop.shop.
// Gilt für alle Seiten; Kategorien liegen in src/content/categories/.

export const site = {
  name: "toptop.shop",
  url: "https://toptop.shop",
  lang: "de-DE",
  locale: "de_DE",
  claim: "Die Abkürzung zu den besten Produkten.",
  description:
    "toptop.shop reduziert jede Kategorie auf die drei besten Produkte – mit nachvollziehbarer Begründung, ausführlicher Kaufberatung und regelmäßiger Aktualisierung.",

  amazon: {
    domain: "www.amazon.de",
    partnerTag: "toptopshop-21",
  },

  // Awin-Partnerprogramme. publisherId = eigene Awin-Publisher-ID (awinaffid).
  // Ohne publisherId verlinken Produkte direkt auf den Shop (ohne Provision).
  awin: {
    publisherId: "3117711",
    merchants: {
      radwelt: { name: "RADWELT-Shop", mid: 15088, domain: "radwelt-shop.de" },
      fahrradlagerverkauf: { name: "Fahrradlagerverkauf", mid: 39644, domain: "fahrradlagerverkauf.com" },
      fahrrad24: { name: "fahrrad24", mid: 13691, domain: "fahrrad24.de" },
    },
  },

  organization: {
    name: "TanMeOn GmbH",
    street: "Deichstraße 8",
    zip: "25826",
    city: "Sankt Peter-Ording",
    country: "DE",
    email: "info@tanmeon.de",
    phone: "+49 40 46993066",
    phoneDisplay: "040 46993066",
    managingDirector: "Jan Rosenbrock",
    register: "Amtsgericht Flensburg, HRB 12499",
    vatId: "DE 284 630 274",
  },

  // Redaktion, die in Artikeln und strukturierten Daten als Autor erscheint.
  editorial: {
    name: "Redaktion toptop.shop",
  },
};

// Bereiche (oberste Ebene der Informationsarchitektur). Jede Kategorie-Datei
// verweist über `area` auf einen dieser Bereiche.
export const areas = [
  {
    slug: "braeunung",
    name: "Bräunung & Sonne",
    short: "Bräunung",
    intro:
      "Selbstbräuner, Sonnenöle mit Lichtschutzfaktor und After-Sun-Pflege: Für jedes Thema zeigen wir die drei Produkte, die sich für die meisten Menschen lohnen – und erklären, worauf es ankommt.",
    metaTitle: "Bräunung & Sonne: Die besten Produkte im Überblick",
    metaDescription:
      "Die besten Selbstbräuner, Bräunungsöle mit LSF und After-Sun-Produkte – je Kategorie auf drei Empfehlungen reduziert, mit Kaufberatung und FAQ.",
    // Redaktioneller Text unter den Ratgeber-Kacheln (HTML).
    article: `
  <h2>Schön braun – mit Verstand</h2>
  <p class="quick">Bräune entsteht entweder durch UV-Strahlung oder durch Selbstbräuner. Wer in die Sonne geht, braucht ausreichenden Lichtschutz und gute Pflege danach; wer UV-Strahlung meiden will, setzt auf Selbstbräuner.</p>
  <p>Die Haut bildet unter UV-Strahlung den Farbstoff Melanin, um sich zu schützen. Diese natürliche Bräune braucht Zeit – und ein Sonnenbrand bringt sie nicht schneller, sondern schadet der Haut dauerhaft. Deshalb empfehlen wir für das Sonnenbad ausschließlich Produkte mit Lichtschutzfaktor und raten zu einer langsamen Steigerung.</p>
  <p>Selbstbräuner funktionieren völlig anders: Der Wirkstoff DHA färbt die oberste Hautschicht, ganz ohne UV-Strahlung. Das Ergebnis hält einige Tage und lässt sich gezielt steuern – schützt aber nicht vor der Sonne.</p>
  <aside class="callout warn"><p class="ct">Hinweis</p><p>UV-Strahlung – durch die Sonne wie durch Solarien – kann die Haut schädigen und das Hautkrebsrisiko erhöhen. In Deutschland ist die Nutzung von Solarien für Minderjährige gesetzlich verboten. Bei Fragen zu deiner Haut hilft eine Hautärztin oder ein Hautarzt.</p></aside>`,
  },
  {
    slug: "lastenraeder",
    name: "Lastenräder für Familien",
    short: "Lastenräder",
    intro:
      "E-Lastenräder für den Kindertransport – sortiert nach der Zahl der Kinder. Für ein, zwei oder drei Kinder zeigen wir die drei Modelle, die sich am meisten lohnen, und erklären Bauformen, Sicherheit und Rechtslage.",
    metaTitle: "Lastenräder für Kinder: Die besten Modelle für 1, 2 und 3 Kinder",
    metaDescription:
      "Die besten E-Lastenräder für den Kindertransport – je drei Empfehlungen für ein, zwei und drei Kinder, mit Kaufberatung, Sicherheit und Rechtslage.",
    article: `
  <h2>Das richtige Lastenrad für deine Familie</h2>
  <p class="quick">Die wichtigste Frage beim Lastenradkauf ist: Wie viele Kinder sollen mitfahren – heute und in ein paar Jahren? Danach richten sich Bauform, Zuladung und Preis.</p>
  <p>Für ein Kind reichen meist kompakte Longtails, die kaum größer als ein normales Fahrrad sind. Für zwei Kinder kommen Frontlader mit Sitzbank und Regenverdeck oder längere Longtails infrage. Für drei Kinder braucht es eine große Box mit ausdrücklicher Herstellerfreigabe oder ein Dreirad.</p>
  <p>Wir empfehlen ausschließlich Räder, die bei Amazon oder bei Fahrradhändlern aus dem Awin-Partnernetzwerk erhältlich sind, und berücksichtigen die Sicherheitshinweise von Stiftung Warentest, ADAC und DGUV.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Nimm nur Kinder mit, die selbstständig sitzen und den Kopf halten können. Jedes Kind braucht einen eigenen Sitzplatz mit Gurt und einen Helm. Wer Kinder unter sieben Jahren transportiert, muss mindestens 16 Jahre alt sein.</p></aside>`,
  },
  {
    slug: "tennis-ballwand",
    name: "Tennis-Ballwand & Solo-Training",
    short: "Tennis solo",
    intro:
      "Allein trainieren, ohne Partner und ohne gebuchten Platz: mobile Rebounder, feste Prallwände, Ballwände für Kinder, Tennistrainer mit Ball an der Schnur, Ballmaschinen und das passende Zubehör.",
    metaTitle: "Tennis allein trainieren: Ballwand, Rebounder & Ballmaschine",
    metaDescription:
      "Die besten Tenniswände, Rebounder, Ballmaschinen und Tennistrainer für das Training ohne Partner – je Kategorie drei Empfehlungen mit Kaufberatung.",
    article: `
  <h2>Tennis ohne Partner: Was wirklich hilft</h2>
  <p class="quick">Für Schlagtechnik und Wiederholungen reicht eine Ballwand oder ein Rebounder. Wer Laufwege, Tempo und Spin trainieren will, braucht eine Ballmaschine. Auf kleinstem Raum hilft ein Tennistrainer mit Ball an der Schnur.</p>
  <p>Die klassische Trainingswand im Verein war für viele Generationen der erste Sparringspartner. Heute gibt es dieselbe Idee in vielen Größen: als freistehendes Netz für den Garten, als feste Prallwand an Garage oder Hauswand, als kleiner Rebounder für Kinder oder als Bodenplatte mit Gummiseil, die in jeden Kofferraum passt.</p>
  <p>Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind, und kennzeichnen Herstellerangaben als solche. Unabhängige Tests von Stiftung Warentest oder ähnlichen Instituten gibt es für diese Produktgruppen bislang nicht – umso wichtiger sind nachvollziehbare Kriterien.</p>
  <aside class="callout"><p class="ct">Tipp</p><p>Ein Rebounder ersetzt keinen Trainer. Wer gerade erst anfängt, holt sich am besten ein paar Stunden Unterricht und übt die Technik danach allein an der Wand.</p></aside>`,
  },
  {
    slug: "home-office",
    name: "Home-Office",
    short: "Home-Office",
    intro:
      "Ergonomisch arbeiten, im Call gut aussehen und gut klingen: höhenverstellbare Schreibtische, Monitore, Docking-Stations, Tastaturen, Mäuse, Licht, Webcams, Mikrofone und Gadgets.",
    metaTitle: "Home-Office einrichten: Die besten Produkte im Überblick",
    metaDescription:
      "Steh-Sitz-Tische, Monitore, Docks, Tastaturen, Mäuse, Webcams, Licht und Mikrofone fürs Home-Office – je Kategorie drei Empfehlungen mit Kaufberatung.",
    article: `
  <h2>Ein Arbeitsplatz, an dem man gern sitzt – und steht</h2>
  <p class="quick">Am meisten bringen im Home-Office drei Dinge: ein Tisch in der richtigen Höhe, ein Bildschirm auf Augenhöhe und gutes Licht. Danach folgen Eingabegeräte, Kamera und Mikrofon für Videocalls.</p>
  <p>Wer acht Stunden am Tag zu Hause arbeitet, merkt schnell, dass Küchentisch und Laptop keine Dauerlösung sind. Die Deutsche Gesetzliche Unfallversicherung (DGUV) und die Arbeitsstättenverordnung beschreiben, worauf es am Bildschirmarbeitsplatz ankommt: ausreichend Platz, ein Bildschirm, der sich in Höhe und Neigung anpassen lässt, getrennte Tastatur und Maus sowie blendfreies Licht.</p>
  <p>Unsere Ratgeber übersetzen diese Grundsätze in konkrete Produktempfehlungen – vom elektrischen Steh-Sitz-Tisch bis zur Webcam für den nächsten Kundentermin.</p>
  <aside class="callout"><p class="ct">Gut zu wissen</p><p>Wer überwiegend zu Hause arbeitet, kann die Ausstattung je nach Situation steuerlich geltend machen. Ob und in welchem Umfang, klärst du am besten mit deiner Steuerberatung.</p></aside>`,
  },
  {
    slug: "private-sportanlagen",
    name: "Private Sportanlagen",
    short: "Sportanlagen",
    intro:
      "Ein eigener Platz im Garten, vom Bolzplatz bis zum Multisportfeld: Kunstrasen, Sportböden, Court-Fliesen, Soccer-Cages, Basketballanlagen, Tore, Ballfangzäune, Flutlicht, Tischtennis, Shuffleboard und Pickleball.",
    metaTitle: "Sportplatz im Garten: Die beste Ausstattung im Überblick",
    metaDescription:
      "Kunstrasen, Court-Fliesen, Basketballanlagen, Tore, Ballfangnetze und Flutlicht für den eigenen Sportplatz im Garten – mit Kaufberatung und Planungstipps.",
    article: `
  <h2>Vom Rasenstück zum eigenen Sportplatz</h2>
  <p class="quick">Am Anfang steht die Fläche: Untergrund, Belag und Ballfang entscheiden, was später möglich ist. Tore, Körbe und Licht kommen danach – und sollten zur Fläche passen, nicht umgekehrt.</p>
  <p>Ein privater Sportplatz muss kein Vereinsgelände sein. Schon ein ebenes Stück Garten mit Kunstrasen oder Court-Fliesen, ein kippsicheres Tor und ein Ballfangnetz machen aus dem Garten einen Ort, an dem Kinder und Erwachsene stundenlang spielen. Wer mehr will, plant ein komplettes Multisportfeld mit Bande, Toren und Körben.</p>
  <p>Wir zeigen je Kategorie vor allem Premium-Ausstattung und dazu günstige Einstiegsvarianten. Für große Anlagen wie Soccer-Cages oder Padel-Courts gibt es kaum Angebote bei Amazon; dort nennen wir die Anbieter und erklären, worauf es bei Planung, Genehmigung und Nachbarschaft ankommt.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Tore und Basketballanlagen müssen gegen Umkippen gesichert sein. Nicht verankerte Tore haben schon zu schweren Unfällen geführt. Feste Bauten, Zäune und Flutlicht können außerdem genehmigungspflichtig sein – frag vorab bei deiner Gemeinde nach.</p></aside>`,
  },
  {
    slug: "gaming-room",
    name: "Gaming-Room",
    short: "Gaming-Room",
    intro:
      "Ein Raum zum Zocken, Chillen und Feiern, mit Retro-Charme und High-End-Technik: Sitzsäcke, Gaming-Stühle und -Tische, Arcade-Automaten, Flipper, Airhockey, Kicker, Billard, Dart, Sim-Racing, VR, Beamer, Licht, Akustik, Retro-Konsolen und Kühlschrank.",
    metaTitle: "Gaming-Room einrichten: Die besten Produkte im Überblick",
    metaDescription:
      "Gaming-Stühle, Arcade-Automaten, Kicker, Billard, Sim-Racing, Beamer, LED-Licht und mehr für den eigenen Gaming-Room – je Kategorie drei Empfehlungen.",
    article: `
  <h2>Ein Raum, viele Spiele</h2>
  <p class="quick">Ein guter Gaming-Room verbindet drei Welten: bequemes Sitzen für lange Sessions, Spielgeräte für Freunde und Familie und Technik, die Bild und Ton auf ein neues Niveau hebt.</p>
  <p>Ob Partykeller, Dachboden oder ausgebaute Garage: Ein Gaming-Room lebt vom Mix. Neben Konsole und PC sorgen Kicker, Airhockey oder Dartautomat dafür, dass auch Gäste mitspielen, die keinen Controller in die Hand nehmen wollen. Retro-Automaten und Flipper bringen Spielhallen-Gefühl, Beamer und Sim-Racing-Cockpit das große Kino.</p>
  <p>Für jede Kategorie zeigen wir drei Empfehlungen und erklären, worauf es ankommt: Maße und Gewicht, Lautstärke, Strombedarf und was im Alltag wirklich Spaß macht.</p>
  <aside class="callout"><p class="ct">Planungstipp</p><p>Miss den Raum, bevor du kaufst: Billardtische, Kicker und Airhockey brauchen rundherum Platz zum Spielen – oft mehr als doppelt so viel wie das Gerät selbst.</p></aside>`,
  },
];
