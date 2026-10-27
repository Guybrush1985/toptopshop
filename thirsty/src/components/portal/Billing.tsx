"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useStore, type Payment } from "@/lib/store";
import { dateKey, euro } from "@/lib/format";
import { APP } from "@/lib/config";
import {
  accountOf, billingPortal, BOOKING_FEE_CAP_BOOKINGS, BOOKING_FEE_CAP_NET_CENTS, BOOKING_FEE_NET_CENTS, BOOKING_FEE_NO_SHOW_HOURS,
  bookingFeeOf, connectDashboard, connectOnboarding, connectStatus, gross, PAYMENT_KIND_LABEL, PLAN_STATUS_LABEL, PLANS, SELLS_DIGITAL,
  sponsor, SPONSOR_DAY_OPTIONS, SPONSOR_MAX_PER_CITY, sponsorPrice, subscribe, SUBSCRIPTIONS_OFFERED, TRIAL_DAYS, COMMISSION_PERCENT,
  NO_SHOW_PLATFORM_PERCENT, type Done, type PlanKey,
} from "@/lib/payments";
import { Field, Notice, useAction } from "../ui";
import type { TabProps } from "./types";

const monthKey = (d: string | Date) => dateKey(d).slice(0, 7);
const monthLabel = (k: string) => new Date(`${k}-15T12:00:00`).toLocaleDateString("de-DE", { month: "long", year: "numeric" });

/** Summen eines Monats für die Abrechnung. Auch von der Monatsabrechnung (Druckansicht) genutzt. */
export function monthTotals(rows: Payment[]) {
  const ok = rows.filter((p) => p.status === "SUCCEEDED" || p.status === "REFUNDED" || p.kind === "REFUND");
  const sum = (f: (p: Payment) => boolean, k: "amountCents" | "feeCents" | "netCents" | "tipCents") => ok.filter(f).reduce((n, p) => n + p[k], 0);
  const guestMoney = (p: Payment) => p.kind === "BILL" || p.kind === "NO_SHOW" || p.kind === "REFUND";
  return {
    appRevenue: sum((p) => p.kind === "BILL", "amountCents"),
    tips: sum((p) => p.kind === "BILL", "tipCents"),
    commission: sum((p) => p.kind === "BILL" || (p.kind === "REFUND" && !!p.billId), "feeCents"),
    noShowNet: sum((p) => p.kind === "NO_SHOW", "netCents"),
    noShowFee: sum((p) => p.kind === "NO_SHOW" || (p.kind === "REFUND" && !p.billId), "feeCents"),
    refunds: sum((p) => p.kind === "REFUND", "amountCents"),
    payout: sum(guestMoney, "netCents"),
    platformFees: sum(guestMoney, "feeCents"),
    subscriptions: sum((p) => p.kind === "SUBSCRIPTION", "amountCents"),
    bookingFees: sum((p) => p.kind === "BOOKING_FEE", "amountCents"),
    ads: sum((p) => p.kind === "SPONSORSHIP", "amountCents"),
  };
}

export function Billing({ restaurantId: id, role }: TabProps) {
  const s = useStore();
  const { error, busy, run } = useAction();
  const [info, setInfo] = useState<string>();
  const r = s.restaurants.find((x) => x.id === id)!;
  const a = accountOf(s, id);
  const owner = role === "OWNER";
  const done = (d?: Done) => d?.message && setInfo(d.message);

  // Nach Rückkehr aus dem Stripe-Onboarding den Stand nachladen
  useEffect(() => {
    if (a.connected && !a.chargesEnabled) void connectStatus(id);
  }, [id, a.connected, a.chargesEnabled]);

  const payments = s.payments.filter((p) => p.restaurantId === id);
  const months = useMemo(() => [...new Set([monthKey(new Date()), ...payments.map((p) => monthKey(p.createdAt))])].sort().reverse(), [payments]);
  const [month, setMonth] = useState(months[0]);
  const rows = payments.filter((p) => monthKey(p.createdAt) === month).sort((x, y) => y.createdAt.localeCompare(x.createdAt));
  const t = monthTotals(rows);
  const onSite = s.bills.filter((b) => b.restaurantId === id && b.status === "PAID_ON_SITE" && monthKey(b.paidAt ?? b.createdAt) === month);
  const ads = s.sponsorships.filter((x) => x.restaurantId === id && x.status === "PAID" && new Date(x.endsAt) > new Date());
  const fee = bookingFeeOf(s, id, month);
  const freeNow = fee.freeUntil.getTime() > Date.now();

  return (
    <div className="space-y-8">
      <Notice error={error} success={info} />

      {/* ---------- Auszahlungen ---------- */}
      <section className="card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Auszahlungen</h2>
          <span className="chip" data-testid="connect-status">
            {a.chargesEnabled ? (a.payoutsEnabled ? "Eingerichtet" : "Zahlungen aktiv, Auszahlung in Prüfung") : a.connected ? "Einrichtung offen" : "Nicht eingerichtet"}
          </span>
        </div>
        <p className="text-sm text-cream/70">
          Damit Gäste ihre Rechnung in der App zahlen können und No-Show-Gebühren bei dir ankommen, braucht dein Restaurant ein
          Auszahlungskonto bei unserem Zahlungspartner Stripe. Stripe prüft dabei Firma, Inhaber und Bankverbindung (gesetzlich
          vorgeschrieben). Auszahlungen kommen wöchentlich montags auf dein Konto. Firsty behält {COMMISSION_PERCENT} % Zahlungsgebühr auf in der
          App bezahlte Rechnungen (deckt die Kartengebühren) und {NO_SHOW_PLATFORM_PERCENT} % der No-Show-Gebühren; Trinkgeld geht vollständig an euch.
        </p>
        {owner ? (
          <div className="flex flex-wrap gap-2">
            {!a.chargesEnabled && (
              <button className="btn" disabled={busy} onClick={async () => done(await run(() => connectOnboarding(id)))}>
                {a.connected ? "Einrichtung fortsetzen" : "Auszahlungen einrichten"}
              </button>
            )}
            {a.connected && a.chargesEnabled && (
              <button className="btn-secondary" disabled={busy} onClick={() => run(() => connectDashboard(id))}>Auszahlungen und Umsätze bei Stripe</button>
            )}
            {a.connected && <button className="btn-secondary" disabled={busy} onClick={() => run(() => connectStatus(id))}>Stand aktualisieren</button>}
          </div>
        ) : (
          <p className="text-sm text-cream/50">Einrichten kann nur der Inhaber.</p>
        )}
      </section>

      {/* ---------- Buchungsgebühr ---------- */}
      <section className="card space-y-3" data-testid="booking-fee">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Buchungsgebühr</h2>
          <span className="chip">{freeNow ? `Kostenlos bis ${fee.freeUntil.toLocaleDateString("de-DE")}` : "Aktiv"}</span>
        </div>
        <p className="text-sm text-cream/70">
          Du zahlst nur für Gäste, die wirklich kommen: {euro(BOOKING_FEE_NET_CENTS)} netto pro Buchung, egal wie viele Personen und wie viel
          Umsatz. Höchstens {euro(BOOKING_FEE_CAP_NET_CENTS)} netto im Monat, ab der {BOOKING_FEE_CAP_BOOKINGS}. Buchung ist jede weitere frei.
          Die ersten {TRIAL_DAYS} Tage sind kostenlos. Kein Abo, keine Laufzeit.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label={`Buchungen ${monthLabel(month)}`} value={String(fee.attended)} sub={fee.pending ? `${fee.pending} noch offen` : undefined} />
          <Stat label="Davon berechnet" value={String(fee.billable)} sub={fee.billable < fee.attended ? "Rest in der kostenlosen Startzeit" : undefined} />
          <Stat label="Buchungsgebühr" value={euro(fee.netCents)} sub={`netto, ${euro(gross(fee.netCents))} brutto`} strong />
        </div>
        <p className="text-xs text-cream/50">
          Eine Buchung zählt, wenn ihr sie eingecheckt habt oder sie nicht bis {BOOKING_FEE_NO_SHOW_HOURS} Stunden nach Ende des Angebots als
          „nicht erschienen“ meldet. Stornierte Buchungen und No-Shows kosten nichts. Die Rechnung kommt Anfang des Folgemonats per E-Mail
          und ist per Karte oder SEPA-Lastschrift zahlbar; sie steht dann auch unten in der Abrechnung.
        </p>
      </section>

      {/* ---------- Abo (zum Start nicht im Angebot) ---------- */}
      {(SUBSCRIPTIONS_OFFERED || a.plan !== "NONE") && <section className="card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Abo</h2>
          <span className="chip" data-testid="plan-status">
            {a.plan !== "NONE" ? `${PLANS[a.plan].name} · ${PLAN_STATUS_LABEL[a.planStatus]}` : PLAN_STATUS_LABEL.none}
          </span>
        </div>
        {a.plan !== "NONE" && (
          <p className="text-sm text-cream/70">
            {a.planStatus === "trialing" && a.trialEnd && <>Kostenlos bis {new Date(a.trialEnd).toLocaleDateString("de-DE")}. </>}
            {a.periodEnd && <>{a.cancelAtPeriodEnd ? "Endet am" : "Nächste Abrechnung am"} {new Date(a.periodEnd).toLocaleDateString("de-DE")}. </>}
            {a.planStatus === "past_due" && <strong className="text-hot-soft">Die letzte Abbuchung ist fehlgeschlagen. Bitte Zahlungsart prüfen. </strong>}
          </p>
        )}
        {SELLS_DIGITAL ? (
          <>
            {SUBSCRIPTIONS_OFFERED && (a.plan === "NONE" || ["canceled", "incomplete_expired"].includes(a.planStatus)) && (
              <div className="grid gap-3 sm:grid-cols-2">
                {(Object.keys(PLANS) as PlanKey[]).map((k) => (
                  <div key={k} className="rounded-2xl border border-white/10 p-4">
                    <p className="font-display text-3xl uppercase text-cream">{PLANS[k].name}</p>
                    <p className="text-cream">
                      <span className="text-2xl font-bold">{euro(PLANS[k].netCents)}</span> / Monat zzgl. USt. ({euro(gross(PLANS[k].netCents))} brutto)
                    </p>
                    <ul className="my-3 list-disc pl-5 text-sm text-cream/70">{PLANS[k].features.map((f) => <li key={f}>{f}</li>)}</ul>
                    {owner && (
                      <button className="btn w-full" disabled={busy} onClick={async () => done(await run(() => subscribe(id, k)))}>
                        {a.trialUsed ? `${PLANS[k].name} abschließen` : `${TRIAL_DAYS} Tage gratis testen`}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
            {a.hasCustomer && owner && a.plan !== "NONE" && (
              <button className="btn-secondary" disabled={busy} onClick={async () => done(await run(() => billingPortal(id)))}>
                Abo verwalten, Rechnungen, Zahlungsart
              </button>
            )}
            <p className="text-xs text-cream/50">Monatlich kündbar zum Ende des Abrechnungszeitraums. Zahlung per Karte oder SEPA-Lastschrift, Rechnung kommt per E-Mail.</p>
          </>
        ) : (
          <p className="text-sm text-cream/60">Abo und Rechnungen verwaltest du im Restaurant-Portal auf toptop.shop.</p>
        )}
      </section>}

      {/* ---------- Werbung ---------- */}
      <section className="card space-y-3">
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Werbeplatz</h2>
        <p className="text-sm text-cream/70">
          Dein Restaurant erscheint als „Anzeige“ ganz oben in Liste und Karte von {r.city ?? "deiner Stadt"}. Pro Stadt gibt es höchstens{" "}
          {SPONSOR_MAX_PER_CITY} Werbeplätze gleichzeitig, und nur für Restaurants ab 4,0 Sternen.
        </p>
        {ads.length > 0 && (
          <ul className="space-y-1 text-sm" data-testid="ads">
            {ads.map((x) => (
              <li key={x.id} className="text-cream">
                Gebucht: {new Date(x.startsAt).toLocaleDateString("de-DE")} bis {new Date(new Date(x.endsAt).getTime() - 1).toLocaleDateString("de-DE")} ({x.days} {x.days === 1 ? "Tag" : "Tage"})
              </li>
            ))}
          </ul>
        )}
        {SELLS_DIGITAL ? <SponsorForm restaurantId={id} onDone={done} /> : <p className="text-sm text-cream/60">Werbeplätze buchst du im Restaurant-Portal auf toptop.shop.</p>}
      </section>

      {/* ---------- Umsätze und Abrechnung ---------- */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="display text-3xl text-cream">Abrechnung</h2>
          <select className="input w-auto" value={month} onChange={(e) => setMonth(e.target.value)} aria-label="Monat">
            {months.map((m) => <option key={m} value={m}>{monthLabel(m)}</option>)}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-4" data-testid="totals">
          <Stat label="In der App bezahlt" value={euro(t.appRevenue)} sub={t.tips ? `davon ${euro(t.tips)} Trinkgeld` : undefined} />
          <Stat label="No-Show-Gebühren für euch" value={euro(t.noShowNet)} />
          <Stat label="Firsty-Gebühren" value={euro(t.platformFees)} sub={`${euro(t.commission)} Zahlungsgebühr, ${euro(t.noShowFee)} No-Show-Anteil`} />
          <Stat label="Auszahlung an euch" value={euro(t.payout)} strong />
        </div>
        {onSite.length > 0 && (
          <p className="text-sm text-cream/60">
            Außerdem {onSite.length} {onSite.length === 1 ? "Rechnung" : "Rechnungen"} vor Ort bezahlt ({euro(onSite.reduce((n, b) => n + b.amountCents, 0))}), ohne Zahlungsgebühr.
          </p>
        )}
        {rows.length === 0 ? (
          <p className="card text-sm text-cream/60">In diesem Monat gab es keine Zahlungen über Firsty.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm" data-testid="ledger">
              <thead className="bg-white/5 text-left text-cream/60">
                <tr><th className="p-2">Datum</th><th className="p-2">Art</th><th className="p-2">Beschreibung</th><th className="p-2 text-right">Betrag</th><th className="p-2 text-right">Firsty</th><th className="p-2 text-right">An euch</th><th className="p-2"></th></tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((p) => {
                  const toPlatform = p.kind === "SUBSCRIPTION" || p.kind === "SPONSORSHIP" || p.kind === "BOOKING_FEE";
                  return (
                    <tr key={p.id} className={p.status === "FAILED" ? "opacity-50" : ""}>
                      <td className="whitespace-nowrap p-2">{new Date(p.createdAt).toLocaleDateString("de-DE")}</td>
                      <td className="p-2">{PAYMENT_KIND_LABEL[p.kind]}{p.status === "FAILED" && " (fehlgeschlagen)"}{p.status === "REFUNDED" && " (erstattet)"}</td>
                      <td className="p-2">{p.description}</td>
                      <td className="p-2 text-right tabular-nums">{euro(p.amountCents)}</td>
                      <td className="p-2 text-right tabular-nums">{toPlatform ? "–" : euro(p.feeCents)}</td>
                      <td className="p-2 text-right tabular-nums">{toPlatform ? "–" : euro(p.netCents)}</td>
                      <td className="p-2">{(p.invoicePdf || p.invoiceUrl) && <a className="underline" href={p.invoicePdf ?? p.invoiceUrl} target="_blank" rel="noreferrer">Rechnung</a>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Link href={`/portal/abrechnung/?id=${id}&monat=${month}`} className="btn-secondary">Monatsabrechnung {monthLabel(month)}</Link>
          <button className="btn-secondary" onClick={() => exportCsv(r.name, month, rows)}>Als CSV exportieren</button>
        </div>
        <p className="text-xs text-cream/50">
          Buchungsgebühr und Werbeplätze stellt Firsty mit eigener Rechnung (Link in der Tabelle). Zahlungsgebühr und No-Show-Anteil weist
          die Monatsabrechnung aus. Einzelne Zahlungen und Auszahlungen siehst du auch im Stripe-Dashboard.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value, sub, strong }: { label: string; value: string; sub?: string; strong?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${strong ? "border-lime/40 bg-lime/10" : "border-white/10"}`}>
      <p className="text-xs uppercase tracking-wider text-cream/50">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums text-cream">{value}</p>
      {sub && <p className="text-xs text-cream/50">{sub}</p>}
    </div>
  );
}

function SponsorForm({ restaurantId, onDone }: { restaurantId: string; onDone: (d?: Done) => void }) {
  const { error, busy, run } = useAction();
  const [days, setDays] = useState<number>(7);
  const [start, setStart] = useState(dateKey(new Date()));
  return (
    <form
      className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
      onSubmit={async (e) => {
        e.preventDefault();
        onDone(await run(() => sponsor(restaurantId, days, start)));
      }}
    >
      <div className="sm:col-span-3"><Notice error={error} /></div>
      <Field label="Dauer">
        <select className="input" value={days} onChange={(e) => setDays(Number(e.target.value))}>
          {SPONSOR_DAY_OPTIONS.map((d) => <option key={d} value={d}>{d} {d === 1 ? "Tag" : "Tage"} · {euro(sponsorPrice(d))}</option>)}
        </select>
      </Field>
      <Field label="Ab"><input className="input" type="date" value={start} min={dateKey(new Date())} onChange={(e) => setStart(e.target.value)} required /></Field>
      <button className="btn" disabled={busy}>Für {euro(sponsorPrice(days))} buchen</button>
      <p className="text-xs text-cream/50 sm:col-span-3">Preise inkl. 19 % USt. Rechnung kommt per E-Mail.</p>
    </form>
  );
}

async function exportCsv(name: string, month: string, rows: Payment[]) {
  const head = ["Datum", "Art", "Beschreibung", "Betrag", "Firsty", "An Restaurant", "Trinkgeld", "Status", "Stripe-Referenz"];
  const cell = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const money = (c: number) => (c / 100).toFixed(2).replace(".", ",");
  const lines = [head, ...rows.map((p) => [
    new Date(p.createdAt).toLocaleString("de-DE"), PAYMENT_KIND_LABEL[p.kind], p.description ?? "", money(p.amountCents), money(p.feeCents),
    money(p.netCents), money(p.tipCents), p.status, p.id,
  ])].map((l) => l.map((v) => cell(String(v))).join(";"));
  const csv = "﻿" + lines.join("\r\n");
  const file = `Firsty-${name.replace(/[^\wäöüÄÖÜß-]+/g, "-")}-${month}.csv`;
  if (APP) {
    const { Share } = await import("@capacitor/share");
    await Share.share({ title: file, text: csv, dialogTitle: "Abrechnung teilen" });
    return;
  }
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  a.download = file;
  a.click();
  URL.revokeObjectURL(a.href);
}
