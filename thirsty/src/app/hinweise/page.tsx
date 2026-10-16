"use client";

import Link from "next/link";
import { useState } from "react";
import { resetDemo } from "@/lib/store";
import { REMOTE } from "@/lib/config";
import { H2, Legal } from "@/components/Legal";

export default function Hinweise() {
  const [done, setDone] = useState(false);
  if (REMOTE) return <LiveHints />;
  return (
    <Legal title="Hinweise zur Vorschau">
      <p>
        Firsty ist eine Plattform, auf der Restaurants Plätze für die erste Stunde nach Öffnung mit Rabatt ausschreiben, damit die
        Tische früh am Abend voll sind. Gäste buchen, zeigen im Restaurant einen QR-Code und bezahlen vor Ort.
      </p>
      <H2>Was die Vorschau ist</H2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Alle Funktionen laufen nur in deinem Browser. Konten, Restaurants, Buchungen und Fotos sieht niemand außer dir auf diesem Gerät.</li>
        <li>Buchungen werden nicht an echte Restaurants übermittelt. Es werden keine Verträge geschlossen und keine Zahlungen abgewickelt.</li>
        <li>Die als „Beispiel“ gekennzeichneten Restaurants, Angebote und Preise sind erfunden.</li>
        <li>Zum Ausprobieren gibt es zwei Demo-Konten (Passwort „thirsty123“): <code>gast@thirsty.test</code> und <code>wirt@thirsty.test</code>. Auf der Anmeldeseite geht das mit einem Klick.</li>
      </ul>
      <H2>So testest du den Ablauf</H2>
      <ol className="list-decimal space-y-1 pl-5">
        <li>Als Gast anmelden und ein Angebot buchen. Die Trattoria Sole und Pho Viet Kitchen haben eins, das in Kürze beginnt.</li>
        <li>Den sechsstelligen Code notieren, abmelden und als Restaurant anmelden.</li>
        <li>Im Portal unter „Check-in“ den Code eingeben.</li>
        <li>Wieder als Gast anmelden, die Buchung bewerten und den Zuverlässigkeitswert im Konto ansehen.</li>
      </ol>
      <H2>Für Restaurants</H2>
      <p>
        Interesse am Start in deiner Stadt? Schreib an <a className="underline" href="mailto:info@tanmeon.de?subject=Firsty">info@tanmeon.de</a>.
      </p>
      <H2>Vorschau zurücksetzen</H2>
      <p>Löscht alle Daten dieser Vorschau in deinem Browser und lädt die Beispiele neu.</p>
      <button
        className="btn-danger"
        onClick={() => {
          if (confirm("Alle Daten der Vorschau in diesem Browser löschen?")) {
            resetDemo();
            setDone(true);
          }
        }}
      >
        Vorschau zurücksetzen
      </button>
      {done && <p className="text-sm text-green-800">Zurückgesetzt. <Link href="/" className="underline">Zur Startseite</Link></p>}
    </Legal>
  );
}

function LiveHints() {
  return (
    <Legal title="Hinweise zur Testphase">
      <p>
        Firsty ist eine Plattform, auf der Restaurants Plätze für die erste Stunde nach Öffnung mit Rabatt ausschreiben, damit die
        Tische früh am Abend voll sind. Gäste buchen, zeigen im Restaurant einen QR-Code und bezahlen vor Ort.
      </p>
      <H2>Was die Testphase bedeutet</H2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Konten, Restaurants, Buchungen und Bewertungen werden gespeichert und sind auf allen Geräten gleich.</li>
        <li>Über Firsty wird nichts bezahlt. Den Rabatt löst das Restaurant beim Bezahlen vor Ort ein.</li>
        <li>Die als „Beispiel“ gekennzeichneten Restaurants, Angebote und Preise sind erfunden. Buchungen dort erreichen kein Restaurant.</li>
        <li>Funktionen und Regeln können sich in der Testphase noch ändern.</li>
      </ul>
      <H2>So testest du den Ablauf</H2>
      <ol className="list-decimal space-y-1 pl-5">
        <li>Ein Konto als Restaurant anlegen, das Restaurant mit Adresse und Beschreibung veröffentlichen und ein Angebot erstellen.</li>
        <li>Mit einem zweiten Konto (andere E-Mail) als Gast das Angebot buchen und den Code notieren.</li>
        <li>Im Portal unter „Check-in“ den Code eingeben oder den QR-Code mit der Kamera scannen.</li>
        <li>Als Gast die Buchung bewerten und den Zuverlässigkeitswert im Konto ansehen.</li>
      </ol>
      <H2>Für Restaurants</H2>
      <p>
        Interesse am Start in deiner Stadt? Schreib an <a className="underline" href="mailto:info@tanmeon.de?subject=Firsty">info@tanmeon.de</a>.
      </p>
    </Legal>
  );
}
