import Link from "next/link";
import { H2, Legal } from "@/components/Legal";
import {
  BASIC_GUEST_LIMIT,
  COMMISSION_PERCENT,
  NO_SHOW_FEE_CENTS_PER_PERSON,
  PLANS,
  SPONSOR_MAX_PER_CITY,
  SPONSOR_NET_CENTS_PER_DAY,
  TRIAL_DAYS,
  VAT_PERCENT,
} from "../../../supabase/functions/_shared/pricing";

export const metadata = { title: "AGB" };

const eur = (cents: number) => (cents / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });

export default function Agb() {
  return (
    <Legal title="AGB">
      <p>Allgemeine Geschäftsbedingungen der TanMeOn GmbH, Deichstraße 8, 25826 Sankt Peter-Ording, für Firsty (Website und App). Stand: Oktober 2026.</p>

      <H2>1. Was Firsty ist</H2>
      <p>
        Firsty vermittelt Plätze in Restaurants zu Zeiten, in denen sie wenig Gäste haben, und verbindet sie mit einem Vorteil (zum Beispiel
        ein Getränk oder Dessert gratis oder ein Rabatt). Den Bewirtungsvertrag schließt du direkt mit dem Restaurant. Für Speisen,
        Getränke, Preise und Allergene ist das Restaurant verantwortlich. Firsty ist Vermittler und bei Zahlungen in der App
        Zahlungsempfänger im Auftrag des Restaurants.
      </p>

      <H2>2. Konto</H2>
      <p>
        Für Buchungen brauchst du ein Konto. Deine Angaben müssen stimmen, und du musst mindestens 16 Jahre alt sein. Du kannst dein Konto
        jederzeit unter „Konto“ löschen, sofern keine Zahlung offen ist.
      </p>

      <H2>3. Buchen, Absagen, Check-in</H2>
      <p>
        Die Buchung ist kostenlos. Du kannst bis zwei Stunden vor Beginn ohne Folgen absagen; spätere Absagen senken deinen
        Zuverlässigkeitswert, kosten aber nichts. Für den Vorteil checkst du im Restaurant mit deinem Code oder QR-Code ein, ab 60 Minuten
        vor Beginn bis zum Ende des Zeitfensters. Der Vorteil gilt nur für die gebuchte Personenzahl und lässt sich nicht auszahlen.
      </p>

      <H2>4. No-Show-Gebühr</H2>
      <p>
        Manche Angebote sind nur mit hinterlegter Karte buchbar. Das zeigt Firsty vor der Buchung deutlich an. Erscheinst du ohne Absage
        nicht und meldet das Restaurant frühestens 15 Minuten nach Beginn einen No-Show, belasten wir deine Karte mit{" "}
        {eur(NO_SHOW_FEE_CENTS_PER_PERSON)} je gebuchter Person als pauschalen Ersatz für den freigehaltenen Platz. Dir bleibt der
        Nachweis, dass kein oder ein geringerer Schaden entstanden ist. Ein Teil der Gebühr ist das Entgelt von Firsty, der Rest geht an
        das Restaurant. Warst du doch da oder hast rechtzeitig abgesagt, schreib innerhalb von 14 Tagen an{" "}
        <a className="underline" href="mailto:info@tanmeon.de">info@tanmeon.de</a>. Wir prüfen das mit dem Restaurant und erstatten die
        Gebühr, wenn sie zu Unrecht belastet wurde. Checkt das Restaurant dich nachträglich ein, wird sie automatisch erstattet.
      </p>

      <H2>5. Bezahlen in der App</H2>
      <p>
        Bietet ein Restaurant die Zahlung in der App an, trägt es nach dem Essen den Betrag laut Kasse ein. Firsty zieht den gebuchten
        Rabatt ab und zeigt dir die Rechnung. Du zahlst über unseren Zahlungsdienstleister Stripe per Karte, Apple Pay oder Google Pay.
        Mit der Zahlung an Firsty ist deine Schuld gegenüber dem Restaurant erfüllt. Trinkgeld ist freiwillig und geht vollständig an das
        Restaurant. Die Rechnung im steuerlichen Sinn stellt das Restaurant aus. Du kannst auch wie gewohnt im Restaurant zahlen.
      </p>

      <H2>6. Bedingungen für Restaurants</H2>
      <p>
        Restaurants sind Unternehmer. Für Zahlungen in der App eröffnen sie über Firsty ein Konto bei Stripe (Stripe Connect) und
        akzeptieren dabei den Stripe Connected Account Agreement. Auszahlungen erfolgen durch Stripe auf ihr Bankkonto.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Provision: {COMMISSION_PERCENT} % des in der App gezahlten Rechnungsbetrags (ohne Trinkgeld), inklusive {VAT_PERCENT} % USt. Sie
          wird bei der Zahlung einbehalten.
        </li>
        <li>
          Monatsabo: {PLANS.BASIC.name} {eur(PLANS.BASIC.netCents)} oder {PLANS.PRO.name} {eur(PLANS.PRO.netCents)} netto im Monat zuzüglich
          USt. Die ersten {TRIAL_DAYS} Tage sind kostenlos. {PLANS.BASIC.name} umfasst bis zu {BASIC_GUEST_LIMIT} Gäste pro Monat. Das Abo
          verlängert sich monatlich und ist zum Ende des laufenden Monats kündbar.
        </li>
        <li>
          Werbeplatz: {eur(SPONSOR_NET_CENTS_PER_DAY)} netto pro Tag zuzüglich USt, im Voraus zu zahlen. Je Stadt gibt es höchstens{" "}
          {SPONSOR_MAX_PER_CITY} Werbeplätze. Sie werden als „Anzeige“ gekennzeichnet.
        </li>
        <li>
          No-Show-Gebühren: Das Restaurant erhält 70 % der Gebühr. Es darf einen No-Show nur melden, wenn der Gast tatsächlich nicht
          erschienen ist.
        </li>
      </ul>
      <p>
        Firsty stellt über Abo, Werbung und Provision monatlich eine Rechnung aus, abrufbar im Portal unter „Abrechnung“. Rückerstattungen
        an Gäste gehen anteilig zulasten des Restaurants.
      </p>

      <H2>7. Haftung</H2>
      <p>
        Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit und bei Verletzung von Leben, Körper oder Gesundheit. Bei leichter
        Fahrlässigkeit haften wir nur für die Verletzung wesentlicher Pflichten und begrenzt auf den typischen, vorhersehbaren Schaden.
        Für die Leistungen des Restaurants haften wir nicht.
      </p>

      <H2>8. Schluss</H2>
      <p>
        Es gilt deutsches Recht. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit zwingende Verbraucherschutzvorschriften ihres
        Wohnsitzlandes nicht entgegenstehen. Wie wir deine Daten verarbeiten, steht in der{" "}
        <Link href="/datenschutz/" className="underline">Datenschutzerklärung</Link>.
      </p>
    </Legal>
  );
}
