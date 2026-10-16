import { H2, Legal } from "@/components/Legal";
import { REMOTE } from "@/lib/config";

export const metadata = { title: "Datenschutz" };

export default function Datenschutz() {
  return (
    <Legal title="Datenschutzerklärung">
      <H2>Verantwortlicher</H2>
      <p>TanMeOn GmbH, Deichstraße 8, 25826 Sankt Peter-Ording, E-Mail: info@tanmeon.de</p>

      {REMOTE ? <LiveData /> : <>
      <H2>Speicherung in deinem Browser</H2>
      <p>
        In der Vorschau speichert Firsty alle Eingaben (Konto, Profil, Restaurantdaten, Fotos, Buchungen, Bewertungen) ausschließlich
        im Local Storage deines Browsers. Diese Daten werden nicht an uns oder Dritte übertragen und sind nur auf diesem Gerät in diesem
        Browser sichtbar. Passwörter werden dort nur als Prüfsumme abgelegt. Du kannst die Daten jederzeit löschen, indem du in den
        Hinweisen zur Vorschau auf „Vorschau zurücksetzen“ klickst oder die Websitedaten in deinem Browser entfernst. Rechtsgrundlage
        ist § 25 Abs. 2 Nr. 2 TDDDG, weil die Speicherung für die von dir gewünschte Funktion unbedingt erforderlich ist.
      </p>
      </>}

      <H2>Hosting und Server-Logfiles</H2>
      <p>
        Die Website wird bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, gehostet. Beim Aufruf verarbeitet der Hoster technisch
        notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browser in Server-Logfiles (Art. 6 Abs. 1 lit. f DSGVO,
        berechtigtes Interesse am sicheren Betrieb). Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung.
      </p>

      <H2>Karten und Adresssuche (OpenStreetMap)</H2>
      <p>
        Karten werden erst geladen, wenn du auf der Startseite eine Stadt auswählst oder auf einer Restaurantseite auf „Karte anzeigen“ klickst. Die Adresssuche im Restaurant-Portal wird erst ausgeführt,
        wenn du auf „Koordinaten aus Adresse ermitteln“ klickst. Dann wird deine IP-Adresse und bei der Suche die eingegebene Adresse
        an die OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich,
        übertragen (Art. 6 Abs. 1 lit. a DSGVO, Einwilligung durch Klick). Für das Vereinigte Königreich besteht ein
        Angemessenheitsbeschluss der EU-Kommission.
      </p>

      <H2>Kamera beim Check-in</H2>
      <p>
        Wenn Restaurants im Portal „Kamera öffnen“ wählen, fragt der Browser oder die App nach Zugriff auf die Kamera. Das Bild wird nur
        auf dem Gerät auf einen QR-Code geprüft und weder gespeichert noch übertragen.
      </p>

      <H2>Firsty-App für iOS und Android</H2>
      <p>
        Die App zeigt dieselben Inhalte wie die Website und verarbeitet dieselben Daten. Sie enthält keine Werbe- oder Analyse-SDKs und
        erstellt kein Tracking-Profil. Die Kamera wird nur für den Check-in-Scanner genutzt. Für Zahlungen öffnet die App die Bezahlseite
        von Stripe in einem sicheren Browserfenster. Apple und Google erhalten beim Herunterladen und bei Updates Daten nach ihren eigenen
        Datenschutzhinweisen.
      </p>

      <H2>Externe Links</H2>
      <p>Links zu Google Kalender, OpenStreetMap-Routen, Websites und Instagram-Profilen von Restaurants öffnen fremde Angebote erst nach Klick.</p>

      <H2>Deine Rechte</H2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
        sowie das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Eine erteilte Einwilligung kannst du jederzeit für
        die Zukunft widerrufen.{" "}
        {REMOTE
          ? "Dein Konto kannst du unter „Konto“ selbst löschen. Für Auskunft genügt eine E-Mail an info@tanmeon.de von der Adresse, mit der du registriert bist."
          : "Da wir in der Vorschau keine Konto- oder Buchungsdaten erhalten, betrifft eine Auskunft nur die Server-Logfiles."}
      </p>
    </Legal>
  );
}

function LiveData() {
  return (
    <>
      <H2>Konto, Buchungen und Restaurantdaten</H2>
      <p>
        Wenn du ein Konto anlegst, speichern wir E-Mail-Adresse, Name, Passwort (nur als Prüfsumme) und freiwillig Telefonnummer und
        Hinweise zu Allergien oder Unverträglichkeiten. Zu Buchungen speichern wir Angebot, Personenzahl, Buchungscode, Status
        (gebucht, eingecheckt, storniert, nicht erschienen) und Zeitpunkte. Aus Check-ins, späten Absagen und No-Shows ergibt sich dein
        Zuverlässigkeitswert. Bewertungen erscheinen öffentlich mit deinem Vornamen. Restaurantbetreiber speichern Angaben zum Restaurant,
        Fotos, Speisekarte, Rechnungsdaten und die Mitglieder ihres Teams. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Nutzung von
        Firsty und Durchführung der Buchung).
      </p>
      <H2>Was das Restaurant sieht</H2>
      <p>
        Das Restaurant, bei dem du buchst, sieht deinen Namen, deine Hinweise zu Allergien, Personenzahl, Buchungscode und die Stufe deines
        Zuverlässigkeitswerts (zum Beispiel „Zuverlässig“), aber nicht deine E-Mail-Adresse, Telefonnummer oder einzelne Ereignisse.
        Andere Gäste sehen nur die Zahl der freien Plätze.
      </p>
      <H2>Supabase als Auftragsverarbeiter</H2>
      <p>
        Datenbank, Anmeldung und Fotospeicher betreibt für uns die Supabase Inc. Die Daten liegen in einem Rechenzentrum in Frankfurt am
        Main (Region eu-central-1). Mit Supabase besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Soweit Supabase oder
        seine Unterauftragnehmer Daten aus Drittländern abrufen können, ist dies durch EU-Standardvertragsklauseln abgesichert. Für
        Bestätigungs- und Passwort-Mails verarbeitet Supabase deine E-Mail-Adresse.
      </p>
      <H2>Zahlungen über Stripe</H2>
      <p>
        Zahlungen in Firsty (Rechnung im Restaurant, No-Show-Gebühr, Restaurant-Abos und Werbeplätze) wickelt die Stripe Payments Europe
        Ltd., 1 Grand Canal Street Lower, Dublin 2, Irland, ab. Kartendaten gibst du direkt bei Stripe ein; wir sehen nur Kartenmarke,
        die letzten vier Ziffern und das Ablaufdatum. Wir speichern Betrag, Zeitpunkt, Status und die Stripe-Kennungen der Zahlung.
        Restaurants, die Zahlungen empfangen, schließen mit Stripe einen eigenen Vertrag und übermitteln Stripe die für die
        Identitätsprüfung nötigen Angaben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, für Betrugsprävention durch Stripe Art. 6 Abs. 1
        lit. f DSGVO. Stripe ist für die Zahlungsabwicklung teils eigener Verantwortlicher; Übermittlungen in die USA sind durch das
        EU-US Data Privacy Framework und Standardvertragsklauseln abgesichert. Mehr unter stripe.com/de/privacy.
      </p>
      <H2>Speicherdauer</H2>
      <p>
        Wir speichern deine Daten, solange dein Konto besteht. Ereignisse für den Zuverlässigkeitswert zählen nur bis zu 90 Tage negativ.
        Du kannst dein Konto jederzeit unter „Konto“ selbst löschen. Dann werden Profil, Buchungen, Ereignisse und hinterlegte Karten
        gelöscht. Rechnungen und Zahlungsbelege bewahren wir ohne Bezug zu deinem Konto auf, solange Handels- und Steuerrecht es verlangen
        (bis zu zehn Jahre, § 147 AO, § 257 HGB).
      </p>
      <H2>Speicherung in deinem Browser</H2>
      <p>
        Damit du angemeldet bleibst, legt Firsty im Local Storage deines Browsers einen Anmeldeschlüssel ab. Er wird beim Abmelden gelöscht.
        Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, weil die Speicherung für die von dir gewünschte Anmeldung unbedingt erforderlich ist.
        Cookies zu Werbe- oder Analysezwecken verwenden wir nicht.
      </p>
    </>
  );
}
