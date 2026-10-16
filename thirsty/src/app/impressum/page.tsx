import Link from "next/link";
import { H2, Legal } from "@/components/Legal";
import { REMOTE } from "@/lib/config";

export const metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <Legal title="Impressum">
      <H2>Angaben gemäß § 5 DDG</H2>
      <p>TanMeOn GmbH<br />Deichstraße 8<br />25826 Sankt Peter-Ording<br />Deutschland</p>
      <p>Vertreten durch den Geschäftsführer: Jan Rosenbrock</p>
      <p>Registereintrag: Amtsgericht Flensburg, HRB 12499<br />Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE 284 630 274</p>
      <p>E-Mail: <a className="underline" href="mailto:info@tanmeon.de">info@tanmeon.de</a><br />Telefon: 040 46993066</p>
      <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
      <p>Jan Rosenbrock, Deichstraße 8, 25826 Sankt Peter-Ording</p>
      <H2>Verbraucherstreitbeilegung</H2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      {REMOTE ? (
        <>
          <H2>Hinweis zur Testphase</H2>
          <p>
            Firsty befindet sich in einer Testphase. Solange Zahlungen nicht freigeschaltet sind, wird im Restaurant bezahlt. Zahlungen
            in der App wickelt die Stripe Payments Europe Ltd. ab; es gelten unsere <Link href="/agb/" className="underline">AGB</Link>.
            Die als „Beispiel“ gekennzeichneten Restaurants und Angebote sind fiktiv. Details in den{" "}
            <Link href="/hinweise/" className="underline">Hinweisen zur Testphase</Link>.
          </p>
        </>
      ) : (
        <>
          <H2>Hinweis zur Vorschau</H2>
          <p>
            Firsty befindet sich in einer Vorschau-Phase. Über diese Website werden keine Verträge geschlossen, keine Reservierungen an
            Restaurants übermittelt und keine Zahlungen abgewickelt. Die als „Beispiel“ gekennzeichneten Restaurants und Angebote sind
            fiktiv. Details in den <Link href="/hinweise/" className="underline">Hinweisen zur Vorschau</Link>.
          </p>
        </>
      )}
    </Legal>
  );
}
