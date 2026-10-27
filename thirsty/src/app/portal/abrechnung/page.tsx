"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCurrentUser, useStore } from "@/lib/store";
import { memberRole } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { monthTotals } from "@/components/portal/Billing";
import { dateKey, euro } from "@/lib/format";
import { APP } from "@/lib/config";
import { COMMISSION_PERCENT, NO_SHOW_PLATFORM_PERCENT, vatOfGross, VAT_PERCENT } from "@/lib/payments";

export default function StatementPage() {
  return <RequireUser><Statement /></RequireUser>;
}

/** Monatsabrechnung als Rechnung über die Firsty-Gebühren (Zahlungsgebühr und No-Show-Anteil), druckbar. */
function Statement() {
  const p = useSearchParams();
  const id = p.get("id") ?? "";
  const month = /^\d{4}-\d{2}$/.test(p.get("monat") ?? "") ? p.get("monat")! : dateKey(new Date()).slice(0, 7);
  const s = useStore();
  const user = useCurrentUser()!;
  const role = memberRole(s, user.id, id);
  const r = s.restaurants.find((x) => x.id === id);
  if (!r || !role || role === "STAFF") return <p className="card">Kein Zugriff. <Link className="underline" href="/portal/">Zum Portal</Link></p>;

  const rows = s.payments.filter((x) => x.restaurantId === id && dateKey(x.createdAt).slice(0, 7) === month);
  const t = monthTotals(rows);
  const [y, m] = month.split("-").map(Number);
  const last = new Date(y, m, 0).getDate();
  const number = `FIRSTY-${month.replace("-", "")}-${id.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
  const fees = t.platformFees;
  const vat = vatOfGross(fees);
  const Row = ({ a, b, strong }: { a: string; b: string; strong?: boolean }) => (
    <tr className={strong ? "font-bold" : ""}><td className="py-1 pr-4">{a}</td><td className="py-1 text-right tabular-nums">{b}</td></tr>
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap gap-2 print:hidden">
        <Link href={`/portal/restaurant/?id=${id}&tab=abrechnung`} className="btn-secondary">Zurück</Link>
        {!APP && <button className="btn" onClick={() => window.print()}>Drucken oder als PDF speichern</button>}
      </div>
      <article className="rounded-2xl bg-white p-8 text-[#111] print:p-0" data-testid="statement">
        <header className="flex flex-wrap justify-between gap-6 text-sm">
          <div>
            <p className="font-bold">TanMeOn GmbH · Firsty</p>
            <p>Deichstraße 8, 25826 Sankt Peter-Ording</p>
            <p>USt-IdNr. DE 284 630 274 · HRB 12499 Amtsgericht Flensburg</p>
          </div>
          <div className="text-right">
            <p>Rechnungsnummer: <strong>{number}</strong></p>
            <p>Rechnungsdatum: {new Date(Math.min(Date.now(), new Date(y, m, 1).getTime())).toLocaleDateString("de-DE")}</p>
            <p>Leistungszeitraum: 01.{String(m).padStart(2, "0")}.{y} bis {last}.{String(m).padStart(2, "0")}.{y}</p>
          </div>
        </header>
        <div className="mt-8 text-sm">
          <p className="font-bold">{r.legalName ?? r.name}</p>
          {r.street && <p>{r.street}</p>}
          {(r.postalCode || r.city) && <p>{[r.postalCode, r.city].filter(Boolean).join(" ")}</p>}
          {r.vatId && <p>USt-IdNr. {r.vatId}</p>}
        </div>
        <h1 className="mt-8 text-2xl font-bold">Monatsabrechnung Firsty</h1>
        <table className="mt-4 w-full text-sm">
          <tbody>
            <Row a={`In der App bezahlte Rechnungen (inkl. ${euro(t.tips)} Trinkgeld)`} b={euro(t.appRevenue)} />
            <Row a="Erstattungen" b={euro(t.refunds)} />
            <Row a="No-Show-Gebühren (euer Anteil)" b={euro(t.noShowNet)} />
          </tbody>
        </table>
        <h2 className="mt-6 font-bold">Firsty-Gebühren</h2>
        <table className="mt-2 w-full text-sm">
          <tbody>
            <Row a={`Zahlungsgebühr ${COMMISSION_PERCENT} % auf in der App bezahlte Rechnungen (ohne Trinkgeld)`} b={euro(t.commission)} />
            <Row a={`Anteil ${NO_SHOW_PLATFORM_PERCENT} % an No-Show-Gebühren`} b={euro(t.noShowFee)} />
            <Row a="Nettobetrag" b={euro(fees - vat)} />
            <Row a={`Umsatzsteuer ${VAT_PERCENT} %`} b={euro(vat)} />
            <Row a="Gebühren gesamt (brutto)" b={euro(fees)} strong />
          </tbody>
        </table>
        <p className="mt-4 text-sm">
          Die Gebühren wurden bei den einzelnen Zahlungen über Stripe einbehalten und mit den Auszahlungen verrechnet. Es ist nichts zu
          überweisen. Ausgezahlt an euch in diesem Zeitraum: <strong>{euro(t.payout)}</strong>.
        </p>
        <p className="mt-2 text-xs text-[#555]">
          Buchungsgebühr ({euro(t.bookingFees)}), Werbeplätze ({euro(t.ads)}){t.subscriptions ? <> und Abo ({euro(t.subscriptions)})</> : null} sind in
          dieser Abrechnung nicht enthalten; dafür gibt es eigene Rechnungen.
        </p>
        <h2 className="mt-6 font-bold">Einzelaufstellung</h2>
        <table className="mt-2 w-full text-xs">
          <thead><tr className="border-b text-left"><th className="py-1">Datum</th><th>Beschreibung</th><th className="text-right">Betrag</th><th className="text-right">Firsty</th><th className="text-right">An euch</th></tr></thead>
          <tbody>
            {rows.filter((x) => ["BILL", "NO_SHOW", "REFUND"].includes(x.kind) && x.status !== "FAILED").map((x) => (
              <tr key={x.id} className="border-b border-[#eee]">
                <td className="py-1">{new Date(x.createdAt).toLocaleDateString("de-DE")}</td>
                <td>{x.description}</td>
                <td className="text-right tabular-nums">{euro(x.amountCents)}</td>
                <td className="text-right tabular-nums">{euro(x.feeCents)}</td>
                <td className="text-right tabular-nums">{euro(x.netCents)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
}
