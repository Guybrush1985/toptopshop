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
        In der Vorschau speichert Thirsty alle Eingaben (Konto, Profil, Restaurantdaten, Fotos, Buchungen, Bewertungen) ausschließlich
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
        Karten werden erst geladen, wenn du auf „Karte anzeigen“ klickst. Die Adresssuche im Restaurant-Portal wird erst ausgeführt,
        wenn du auf „Koordinaten aus Adresse ermitteln“ klickst. Dann wird deine IP-Adresse und bei der Suche die eingegebene Adresse
        an die OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich,
        übertragen (Art. 6 Abs. 1 lit. a DSGVO, Einwilligung durch Klick). Für das Vereinigte Königreich besteht ein
        Angemessenheitsbeschluss der EU-Kommission.
      </p>

      <H2>Kamera beim Check-in</H2>
      <p>
        Wenn Restaurants im Portal „Kamera öffnen“ wählen, fragt der Browser nach Zugriff auf die Kamera. Das Bild wird nur im Browser
        auf einen QR-Code geprüft und weder gespeichert noch übertragen.
      </p>

      <H2>Externe Links</H2>
      <p>Links zu Google Kalender, OpenStreetMap-Routen, Websites und Instagram-Profilen von Restaurants öffnen fremde Angebote erst nach Klick.</p>

      <H2>Deine Rechte</H2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
        sowie das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Eine erteilte Einwilligung kannst du jederzeit für
        die Zukunft widerrufen.{" "}
        {REMOTE
          ? "Für Auskunft oder die Löschung deines Kontos genügt eine E-Mail an info@tanmeon.de von der Adresse, mit der du registriert bist."
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
        Thirsty und Durchführung der Buchung).
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
      <H2>Speicherdauer</H2>
      <p>
        Wir speichern deine Daten, solange dein Konto besteht. Ereignisse für den Zuverlässigkeitswert zählen nur bis zu 90 Tage negativ.
        Wenn du dein Konto löschen lässt, werden Profil, Buchungen und Ereignisse gelöscht; gesetzliche Aufbewahrungspflichten bleiben
        unberührt.
      </p>
      <H2>Speicherung in deinem Browser</H2>
      <p>
        Damit du angemeldet bleibst, legt Thirsty im Local Storage deines Browsers einen Anmeldeschlüssel ab. Er wird beim Abmelden gelöscht.
        Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, weil die Speicherung für die von dir gewünschte Anmeldung unbedingt erforderlich ist.
        Cookies zu Werbe- oder Analysezwecken verwenden wir nicht.
      </p>
    </>
  );
}
