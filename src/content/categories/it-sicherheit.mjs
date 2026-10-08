// Kategorie: IT-Sicherheit für den Krisenfall (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "it-sicherheit",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "IT-Sicherheit & Backups",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "IT-Sicherheit privat: Die 3 besten Produkte gegen Hacks 2026",
  metaDescription:
    "Konten und Daten gegen KI-gestützte Angriffe schützen: YubiKey, Offline-Backup auf SSD und Faraday-Tasche im Vergleich – plus VPN, Passkeys und Backup-Strategie.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "IT-Sicherheit privat: Die 3 besten Produkte gegen Hacks 2026",
  lead:
    "Krisen beginnen zunehmend digital: mit Phishing, Kontoübernahmen und Erpressungstrojanern, die durch KI schneller und überzeugender werden. Drei Produkte können Privathaushalte nach unserer Einschätzung besonders wirksam vor dem Verlust von Konten, Daten und Kontrolle schützen – absolute Sicherheit gibt es allerdings nicht.",
  answer:
    "Unsere beste Gesamtwahl ist der Sicherheitsschlüssel [**YubiKey 5C NFC**](produkt:1): Mit FIDO2 und Passkeys gilt er als sehr widerstandsfähig auch gegen gut gemachtes Phishing. Für ein Offline-Backup, das ein Trojaner nicht erreichen kann, solange es getrennt ist, empfehlen wir die robuste [**Samsung Portable SSD T7 Shield 2 TB**](produkt:2); die [**Mission Darkness Faraday-Tasche**](produkt:3) schirmt Handy und Schlüssel laut Hersteller weitgehend ab.",

  top3Title: "Unsere Top 3 für IT-Sicherheit zu Hause",
  top3Intro:
    "Ein Schlüssel für die Konten, ein Speicher für die Daten und eine Tasche, die Geräte vom Funk trennt: Damit lassen sich die drei wichtigsten Risiken – Kontoübernahme, Datenverlust und Fernzugriff – deutlich verringern.",
  comparisonTitle: "Sicherheitsschlüssel, Backup-SSD und Faraday-Tasche im Vergleich",

  criteria: [
    { key: "schutz", label: "Schutzwirkung", weight: 0.35, description: "Wie wirksam das Produkt typische Angriffe oder Datenverlust verhindert." },
    { key: "alltag", label: "Alltagstauglichkeit", weight: 0.25, description: "Einrichtung, Kompatibilität, Bedienung im Alltag." },
    { key: "krise", label: "Krisentauglichkeit", weight: 0.2, description: "Funktion ohne Internet und Strom, Robustheit, Unabhängigkeit von Clouddiensten." },
    { key: "preis", label: "Preis-Leistung", weight: 0.2, description: "Preis im Verhältnis zum Schutz." },
  ],

  method:
    "Grundlage sind die Analysen des BSI zum Einfluss von KI auf die Cyberbedrohungslage, die Empfehlungen des BSI für Bürgerinnen und Bürger zu Zwei-Faktor-Authentisierung und Datensicherung, Herstellerangaben zu Standards (FIDO2, AES-256, Abschirmung) sowie Kundenerfahrungen. Eigene Sicherheits- oder Praxistests führen wir nicht durch. Kein Produkt bietet absolute Sicherheit. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Yubico YubiKey 5C NFC",
      brand: "Yubico",
      variant: "USB-C + NFC, FIDO2",
      visual: { kind: "handheld", tone: "forest" },
      priceTier: 2,
      ratings: { schutz: 9.5, alltag: 8.5, krise: 8.0, preis: 7.5 },
      bestFor: "E-Mail, Cloud, Passwortmanager, Bank",
      verdict:
        "Nach unserer Einschätzung eine der wirksamsten Schutzmaßnahmen gegen Kontoübernahme: Ein Hardware-Schlüssel mit FIDO2 und Passkeys ist an die echte Webadresse gebunden – eine täuschend echte, KI-generierte Phishing-Seite bekommt so in der Regel keinen nutzbaren Code.",
      features: [
        "FIDO2/WebAuthn, FIDO U2F, Passkeys, OTP, Smartcard (PIV) und OpenPGP (Herstellerangabe)",
        "USB-C und NFC – laut Hersteller mit Computer und Smartphone nutzbar",
        "IP68, ohne Batterie und bewegliche Teile (Herstellerangabe)",
      ],
      pros: ["Hohe Phishing-Resistenz", "Kein Akku, kein Netz nötig", "Unterstützt von vielen großen Diensten"],
      cons: ["Zweiten Schlüssel als Reserve einplanen", "Nicht jeder Dienst unterstützt FIDO2", "Bei Verlust Wiederherstellung vorher regeln"],
      specs: { schutz: "Kontoübernahme, Phishing", standard: "FIDO2, U2F, PIV, OpenPGP", offline: "ja, ohne Akku", robust: "IP68", hinweis: "zwei Schlüssel einrichten" },
      asin: "B08DHL1YDL",
      query: "YubiKey 5C NFC",
    },
    {
      rank: 2,
      label: "Bestes Offline-Backup",
      name: "Samsung Portable SSD T7 Shield 2 TB",
      brand: "Samsung",
      variant: "USB 3.2 Gen 2, IP65",
      visual: { kind: "handheld", tone: "mint" },
      priceTier: 2,
      ratings: { schutz: 8.5, alltag: 8.5, krise: 9.0, preis: 7.0 },
      bestFor: "Fotos, Dokumente, Passwort-Datenbank",
      verdict:
        "Ein Backup, das nach dem Sichern vom Computer getrennt im Schrank liegt, kann ein Erpressungstrojaner nicht verschlüsseln. Die T7 Shield ist laut Samsung schnell, gegen Wasser, Staub und Stürze geschützt und verschlüsselt auf Wunsch per Passwort.",
      features: [
        "2 TB, USB 3.2 Gen 2, laut Samsung bis 1.050 MB/s lesen (Herstellerangabe)",
        "Schutzart IP65, stoßfest bis 3 m (Herstellerangabe)",
        "Optionaler Passwortschutz mit AES-256-Hardwareverschlüsselung, USB-C- und USB-A-Kabel (Herstellerangabe)",
      ],
      pros: ["Robust und schnell", "Klein genug für den Notfallrucksack", "Hardwareverschlüsselung"],
      cons: ["Ein Backup ist keins – zweite Kopie einplanen", "Passwort nicht vergessen", "SSDs ohne Strom nicht jahrzehntelang lagern"],
      specs: { schutz: "Datenverlust, Erpressung", standard: "AES-256 (optional)", offline: "ja, nach dem Backup abziehen", robust: "IP65, 3 m Fall", hinweis: "zweite Kopie außer Haus" },
      asin: "B09S9N4T6K",
      query: "Samsung Portable SSD T7 Shield 2TB",
    },
    {
      rank: 3,
      label: "Funk abschirmen",
      name: "Mission Darkness Faraday-Tasche für Handys",
      brand: "Mission Darkness",
      variant: "ohne Fenster",
      visual: { kind: "pack", tone: "green" },
      priceTier: 1,
      ratings: { schutz: 7.0, alltag: 6.5, krise: 8.5, preis: 8.0 },
      bestFor: "Ersatzhandy, Autoschlüssel, Reise",
      verdict:
        "Die Tasche soll laut Hersteller Mobilfunk, WLAN, Bluetooth, GPS, RFID und NFC mit durchschnittlich 90 dB Dämpfung abschirmen. Bei intakter Abschirmung ist ein Gerät darin weder per Funk ortbar noch erreichbar, und Funkschlüssel sind vor Relay-Angriffen besser geschützt – prüfe die Dichtheit selbst.",
      features: [
        "Zwei Lagen TitanRF-Faradaygewebe an allen Seiten, Doppelnaht (Herstellerangabe)",
        "Abschirmung von niedrigen MHz bis 40 GHz inklusive 5G, laut Hersteller durchschnittlich 90 dB",
        "Hersteller-App zum Selbsttest der Abschirmung (Herstellerangabe)",
      ],
      pros: ["Erschwert Relay-Angriffe auf Funkschlüssel", "Kann Ortung und Fernzugriff per Funk unterbinden", "Testbar mit eigenem Handy"],
      cons: ["Kundenberichte zur Dichtheit gemischt – selbst testen", "Gerät ist in der Tasche nicht erreichbar", "Schutz vor EMP nicht unabhängig belegt"],
      specs: { schutz: "Ortung, Fernzugriff, Relay-Angriffe", standard: "Abschirmung bis 40 GHz (Hersteller)", offline: "ja", robust: "Nylon", hinweis: "nach dem Kauf mit Anruf testen" },
      asin: "B0C8HSYTL4",
      query: "Mission Darkness Faraday Tasche Handy ohne Fenster",
    },
  ],

  comparison: [
    { key: "schutz", label: "Schützt vor" },
    { key: "standard", label: "Technik" },
    { key: "offline", label: "Ohne Internet" },
    { key: "robust", label: "Robustheit" },
    { key: "hinweis", label: "Wichtig" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "it-sicherheit-yubikey-backup-faraday-bewertung-vergleich.svg",
      title: "IT-Sicherheit zu Hause: Die 3 besten Produkte",
      alt: "Balkendiagramm: Bewertung von YubiKey, Backup-SSD und Faraday-Tasche in den Kriterien Schutzwirkung, Alltagstauglichkeit, Krisentauglichkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Der YubiKey schneidet bei der Schutzwirkung am besten ab, die SSD bei der Krisentauglichkeit.",
    },
    steps: {
      kind: "steps",
      file: "backup-strategie-3-2-1-offline-anleitung.svg",
      title: "Backup-Strategie für zu Hause",
      subtitle: "Die 3-2-1-Regel einfach umgesetzt",
      alt: "Infografik: Backup-Strategie – drei Kopien, zwei Medien, eine außer Haus, Backup offline lagern, Wiederherstellung testen",
      caption: "Ein Backup, das getrennt vom Computer liegt, hat die besten Chancen, einen Erpressungstrojaner zu überstehen.",
      steps: [
        { title: "Drei Kopien", text: "Original auf dem Gerät plus zwei Sicherungen." },
        { title: "Zwei Medien", text: "Zum Beispiel externe SSD und Cloud oder zweite Festplatte." },
        { title: "Eine Kopie außer Haus", text: "Bei Verwandten, im Büro oder Bankschließfach – gegen Brand und Wasser." },
        { title: "Offline lagern", text: "Nach dem Backup abziehen – was nicht verbunden ist, kann ein Trojaner nicht verschlüsseln." },
        { title: "Wiederherstellen üben", text: "Einmal im Quartal eine Datei zurückholen und prüfen, ob es klappt." },
      ],
    },
  },

  editorial: {
    title: "Digitale Krisenvorsorge: Konten, Daten und Geräte schützen",
    intro:
      "Warum KI Phishing gefährlicher macht, welche Zwei-Faktor-Methode am besten schützt und wie ein Backup aussieht, das einen Angriff übersteht.",
    sections: [
      {
        id: "beste-it-sicherheit",
        h2: "Welche Produkte schützen privat am besten vor Hackern?",
        blocks: [
          { quick: "Nach unserer Einschätzung am wirksamsten ist ein Sicherheitsschlüssel wie der [YubiKey 5C NFC](produkt:1) für die wichtigsten Konten. Dazu gehört ein Offline-Backup, etwa auf der [Samsung T7 Shield](produkt:2). Eine [Faraday-Tasche](produkt:3) schützt Funkschlüssel und Ersatzhandy." },
          { first: "Das BSI stellt fest, dass generative KI die Einstiegshürden für Cyberangriffe senkt und Umfang und Tempo erhöht – vor allem beim Social Engineering. Phishing-Mails kommen heute ohne Rechtschreibfehler und in perfektem Deutsch, gefälschte Login-Seiten sehen aus wie das Original, und Betrugsanrufe können Stimmen nachahmen. Klassische Warnzeichen wie Rechtschreibfehler taugen deshalb immer weniger zur Erkennung." },
          { p: "Die Folgen reichen weit: Wer die Kontrolle über sein E-Mail-Konto verliert, verliert meist auch Zugang zu Bank, Cloud und sozialen Netzwerken. Erpressungstrojaner verschlüsseln Fotos und Dokumente. Und wenn kritische Infrastruktur angegriffen wird, kann es Tage dauern, bis Dienste wieder laufen – dann zählt, was man selbst offline gesichert hat." },
          { p: "Unsere Gesamtwahl ist der YubiKey 5C NFC, weil er das größte Risiko – die Übernahme von Konten durch Phishing – stark verringert. Ein FIDO2-Schlüssel prüft die Adresse der Webseite selbst; auf einer gefälschten Seite funktioniert er in der Regel nicht. Gegen Schadsoftware auf dem eigenen Gerät oder unsichere Wiederherstellungswege hilft er allein aber nicht. Dazu kommt ein Backup, das nach dem Sichern vom Computer getrennt wird." },
          { figure: "scores" },
          { callout: { title: "Immer zwei Schlüssel", warn: true, text: "Richte bei jedem Dienst mindestens zwei Sicherheitsschlüssel ein – einen für den Alltag, einen als Reserve an einem sicheren Ort. Geht der einzige Schlüssel verloren, ohne dass eine Wiederherstellung geregelt ist, kann man sich selbst aussperren. Wiederherstellungscodes auf Papier sicher aufbewahren." } },
          { callout: { title: "Keine absolute Sicherheit", text: "Kein Produkt und keine Methode schützt vollständig vor Angriffen. Sicherheitsschlüssel, Backups und Abschirmung verringern Risiken deutlich, ersetzen aber nicht Updates, sorgfältiges Verhalten und die Empfehlungen des BSI. Bei einem Vorfall Bank, betroffene Dienste und Polizei informieren." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Bei Sicherheitsschlüsseln zählen FIDO2-Unterstützung, Anschluss (USB-C, NFC) und ein zweiter Schlüssel. Beim Backup zählen Kapazität, Robustheit, Verschlüsselung und dass das Medium offline gelagert wird. Bei Faraday-Taschen die nachprüfbare Abschirmung." },
          {
            table: {
              caption: "Zwei-Faktor-Methoden im Vergleich",
              head: ["Methode", "Schutz vor Phishing", "Hinweis"],
              rows: [
                ["**SMS-Code**", "gering", "Abfangbar, SIM-Tausch-Betrug möglich"],
                ["**App-Code (TOTP)**", "mittel", "Code kann auf Phishing-Seite eingegeben werden"],
                ["**Push-Bestätigung**", "mittel", "Anfällig für Ermüdungsangriffe"],
                ["**Passkey / FIDO2-Schlüssel**", "hoch", "Prüft die echte Webadresse – klassisches Phishing läuft ins Leere"],
              ],
            },
          },
          { h3: "Backup: Offline schlägt Cloud" },
          { p: "Cloud-Speicher sind bequem, aber nicht immer erreichbar – und ein Angreifer mit Zugriff auf dein Konto kann auch dort Daten löschen. Ein externes Laufwerk, das nach dem Backup abgezogen wird, ist für Angreifer aus dem Netz dagegen nicht erreichbar. Ideal ist die Kombination: Cloud für den Alltag, Offline-Kopie für den Ernstfall. SSDs sind schneller und stoßunempfindlicher als Festplatten, sollten aber regelmäßig angeschlossen werden." },
          { h3: "VPN realistisch einordnen" },
          { p: "Ein VPN verschlüsselt den Datenverkehr zwischen deinem Gerät und dem VPN-Server – sinnvoll in öffentlichen WLANs, etwa in Notunterkünften. Gegen Phishing, Schadsoftware oder schwache Passwörter hilft es nicht, und es macht nicht anonym. Wähle einen Anbieter mit unabhängig geprüfter No-Log-Richtlinie." },
          { h3: "Faraday-Taschen" },
          { p: "Faraday-Taschen sperren Funksignale aus. Nützlich sind sie für Autoschlüssel mit Keyless-Funktion, die sonst per Relay-Angriff verlängert werden können, für ein Ersatzhandy, das nicht ortbar sein soll, oder für Geräte, die man vor Fernzugriff schützen will. Teste die Tasche nach dem Kauf: Handy hineinlegen und anrufen – es sollte nicht klingeln. Ein bestandener Test ist eine Momentaufnahme, keine Garantie." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Jeder sollte E-Mail, Passwortmanager und Bank mit Passkeys oder einem Sicherheitsschlüssel schützen und ein Offline-Backup haben. Eine Faraday-Tasche lohnt sich für Keyless-Autos und für Menschen mit erhöhtem Schutzbedarf." },
          {
            cards: [
              { title: "Konten schützen", text: "Hohe Phishing-Resistenz mit FIDO2: YubiKey 5C NFC.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Daten sichern", text: "Robustes Offline-Backup: Samsung T7 Shield.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Funk aussperren", text: "Für Schlüssel und Ersatzhandy: Mission Darkness.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "VPN & Reserve", text: "VPN, Zweitschlüssel und Alternativen in der Top 5.", link: { href: "#top5-ergaenzung", label: "Zur Top 5" } },
              { title: "Erreichbar bleiben", text: "Zweithandy und Powerbank für den Blackout.", link: { href: "/krisenvorsorge/kommunikation-technik/handys-powerbanks/", label: "Handys & Powerbanks" } },
              { title: "Strom für Router", text: "USV und Powerstation halten das Netz am Laufen.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-ergaenzung",
    h2: "Die 5 besten Ergänzungen – Reserve, VPN, Alternativen",
    intro:
      "Ein zweiter Schlüssel, ein VPN für unterwegs, ein günstigeres Backup-Laufwerk und Alternativen zur Faraday-Tasche: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "Yubico Security Key NFC", for: "Günstiger Zweitschlüssel", text: "Reiner FIDO2/U2F-Schlüssel mit USB-A und NFC (Herstellerangabe) – gut geeignet als Reserve für die wichtigsten Konten.", asin: "B07M8YBWQZ", query: "Yubico Security Key NFC USB-A" },
      { name: "Yubico YubiKey 5C Nano", for: "Bleibt im Laptop", text: "Winziger Schlüssel, der dauerhaft im USB-C-Port bleiben kann – bequem für den Arbeitsrechner.", asin: "B07HBTBJ5S", query: "YubiKey 5C Nano" },
      { name: "Samsung Portable SSD T7 2 TB", for: "Günstigere Backup-SSD", text: "Die Standardversion ohne IP65-Schutz, laut Hersteller mit AES-256-Verschlüsselung und rund 58 g.", asin: "B087DFFJRD", query: "Samsung T7 Portable SSD 2TB" },
      { name: "NordVPN Standard, 1 Jahr, 10 Geräte", for: "Öffentliches WLAN", text: "VPN-Abo als digitaler Code – verschlüsselt den Datenverkehr in fremden WLANs bis zum VPN-Server, schützt nicht vor Phishing.", asin: "B09KTY85B1", query: "NordVPN Standard 1 Jahr Code" },
      { name: "Silent Pocket Faraday-Tasche für Smartphones", for: "Alltagstauglich", text: "Schmale Faraday-Hülle mit nicht abgeschirmter Außentasche, laut Hersteller gegen Mobilfunk bis 5G, WLAN, Bluetooth, GPS und NFC.", asin: "B0B9VVMG8W", query: "Silent Pocket Faraday Tasche Smartphone" },
    ],
  },

  guide: {
    sections: [
      {
        id: "schritt-fuer-schritt",
        h2: "Wie schützt man sich Schritt für Schritt?",
        blocks: [
          { quick: "Sichere zuerst das E-Mail-Konto mit Passkey oder Sicherheitsschlüssel, dann Passwortmanager, Bank und Cloud. Richte ein Offline-Backup nach der 3-2-1-Regel ein und lege Wiederherstellungscodes auf Papier ab." },
          { p: "Das E-Mail-Konto ist der Generalschlüssel zu fast allen anderen Diensten: Wer es kontrolliert, kann Passwörter zurücksetzen. Deshalb kommt es zuerst. Danach folgen der Passwortmanager, Onlinebanking, Cloud-Speicher und soziale Netzwerke. Viele große Anbieter unterstützen inzwischen Passkeys und FIDO2-Schlüssel." },
          { figure: "steps" },
          { h3: "Checkliste für den Ernstfall" },
          {
            list: [
              "**Wiederherstellungscodes ausdrucken** und mit dem Reserveschlüssel sicher lagern.",
              "**Wichtige Dokumente offline** auf der Backup-SSD: Ausweise, Versicherungen, Verträge, Medikationsplan.",
              "**Notfallkontakte auf Papier**, falls Handy und Cloud nicht erreichbar sind.",
              "**Bargeld-Reserve** – bei Ausfällen von Zahlungssystemen funktioniert die Karte womöglich nicht.",
              "**Updates einspielen** – viele Angriffe nutzen bekannte Lücken.",
              "**Bei Verdacht** Konto sperren lassen, Passwörter ändern, Polizei und Bank informieren.",
            ],
          },
          {
            facts: [
              { value: "2", label: "Sicherheitsschlüssel pro Person – einer als Reserve" },
              { value: "3-2-1", label: "drei Kopien, zwei Medien, eine außer Haus" },
              { value: "90 dB", label: "Abschirmung der Mission-Darkness-Tasche laut Hersteller" },
            ],
          },
          { h3: "Vorsicht bei Anrufen und Nachrichten in der Krise" },
          { p: "Krisen sind Hochkonjunktur für Betrug: angebliche Hilfsangebote, falsche Spendenaufrufe, Anrufe von vermeintlichen Behörden oder Angehörigen mit nachgeahmter Stimme. Vereinbare in der Familie ein Codewort für Notfälle, rufe bei ungewöhnlichen Bitten über eine bekannte Nummer zurück und gib keine Zugangsdaten oder TANs weiter." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Was ist der beste Schutz gegen Phishing?", a: "Nach unserer Einschätzung Passkeys oder ein FIDO2-Sicherheitsschlüssel wie der YubiKey 5C NFC. Sie prüfen die echte Webadresse, sodass gefälschte Seiten in der Regel keinen nutzbaren Code bekommen. Einen hundertprozentigen Schutz gibt es nicht. SMS- und App-Codes können dagegen auf Phishing-Seiten eingegeben werden." },
    { q: "Macht KI Cyberangriffe gefährlicher?", a: "Ja. Laut BSI senkt generative KI die Einstiegshürden und erhöht Umfang und Tempo von Angriffen, vor allem beim Social Engineering. Phishing-Nachrichten sind kaum noch an Fehlern zu erkennen." },
    { q: "Wie oft sollte man ein Backup machen?", a: "So oft, wie du Daten verlieren könntest, ohne dass es wehtut – für viele Haushalte wöchentlich oder monatlich. Wichtig ist, das Laufwerk danach vom Computer zu trennen und regelmäßig zu testen, ob die Wiederherstellung klappt." },
    { q: "Brauche ich ein VPN?", a: "Ein VPN ist sinnvoll in öffentlichen WLANs. Gegen Phishing, Schadsoftware oder schwache Passwörter schützt es nicht und es macht nicht anonym. Wichtiger sind Sicherheitsschlüssel, Updates und Backups." },
    { q: "Funktionieren Faraday-Taschen wirklich?", a: "Gute Taschen schirmen Funksignale weitgehend ab, Kundenberichte zeigen aber Qualitätsunterschiede. Teste die Tasche selbst: Handy hineinlegen, verschließen und anrufen – es sollte nicht klingeln." },
    { q: "Was passiert, wenn ich meinen YubiKey verliere?", a: "Wenn du einen zweiten Schlüssel oder Wiederherstellungscodes eingerichtet hast, meldest du dich damit an und entfernst den verlorenen Schlüssel aus deinen Konten. Ohne Reserve kann die Wiederherstellung schwierig werden." },
  ],

  sources: [
    { label: "BSI: Einfluss von KI auf die Cyberbedrohungslandschaft (PDF)", url: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/Einfluss_KI_auf_Cyberbedrohungslage.pdf?__blob=publicationFile&v=2" },
    { label: "BSI: Wie KI die Cyberbedrohungslandschaft verändert (Pressemitteilung)", url: "https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2024/240430_Paper_Einfluss_KI_Cyberbedrohungslage.html" },
    { label: "BSI: Informationen für Bürgerinnen und Bürger (u. a. Newsletter „Einfach • Cybersicher“)", url: "https://www.bsi.bund.de/" },
  ],

  related: [
    { slug: "handys-powerbanks", text: "Zweithandy und Powerbank für den Blackout." },
    { slug: "satelliten-kommunikation", text: "Kommunikation ohne Mobilfunk und Internet." },
    { slug: "powerstations", text: "Strom für Router und Computer." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
