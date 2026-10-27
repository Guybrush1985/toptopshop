"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore, type User } from "@/lib/store";
import { euro } from "@/lib/format";
import { brandLabel, cardOf, deleteAccount, NO_SHOW_FEE_CENTS_PER_PERSON, PAYMENT_KIND_LABEL, removeCard, startCardSetup } from "@/lib/payments";
import { Notice, useAction } from "./ui";
import { safeUrl } from "@/lib/url";

/** Konto: hinterlegte Karte und Belege des Gastes. */
export function GuestPayments({ user }: { user: User }) {
  const s = useStore();
  const { error, busy, run } = useAction();
  const [info, setInfo] = useState<string>();
  const card = cardOf(s, user.id);
  const receipts = s.payments
    .filter((p) => p.userId === user.id && ["BILL", "NO_SHOW", "REFUND"].includes(p.kind))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (
    <section className="grid gap-4 sm:grid-cols-2" id="zahlungsmittel">
      <div className="card space-y-3">
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Zahlungsmittel</h2>
        <Notice error={error} success={info} />
        {card ? (
          <p className="flex items-center gap-3">
            <span className="rounded-lg bg-white/10 px-3 py-2 font-mono text-cream" data-testid="card">
              {brandLabel(card.brand)} •••• {card.last4}
            </span>
            {card.expMonth && <span className="text-sm text-cream/60">gültig bis {String(card.expMonth).padStart(2, "0")}/{String(card.expYear).slice(-2)}</span>}
          </p>
        ) : (
          <p className="text-sm text-cream/70">Keine Karte hinterlegt.</p>
        )}
        <p className="text-sm text-cream/60">
          Manche Restaurants schützen ihre Plätze gegen No-Shows, und mit niedrigem Zuverlässigkeitswert brauchst du eine Karte als
          Garantie. Belastet wird sie nur, wenn du nicht erscheinst ({euro(NO_SHOW_FEE_CENTS_PER_PERSON)} pro Person). Gespeichert wird die
          Karte bei unserem Zahlungsdienstleister Stripe, nicht bei Firsty.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            className="btn"
            disabled={busy}
            onClick={async () => {
              const d = await run(() => startCardSetup("/konto/"));
              if (d?.message) setInfo(d.message);
            }}
          >
            {card ? "Andere Karte hinterlegen" : "Karte hinterlegen"}
          </button>
          {card && (
            <button className="btn-secondary" disabled={busy} onClick={() => run(async () => { await removeCard(); setInfo("Karte entfernt."); })}>
              Entfernen
            </button>
          )}
        </div>
      </div>
      <div className="card">
        <h2 className="mb-3 font-display text-2xl uppercase tracking-wide text-cream">Belege</h2>
        {receipts.length === 0 ? (
          <p className="text-sm text-cream/60">Noch keine Zahlungen über Firsty.</p>
        ) : (
          <ul className="divide-y divide-white/10 text-sm" data-testid="receipts">
            {receipts.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-3 py-2">
                <span>
                  <span className="block text-cream">{p.description ?? PAYMENT_KIND_LABEL[p.kind]}</span>
                  <span className="text-xs text-cream/50">
                    {new Date(p.createdAt).toLocaleDateString("de-DE")} · {PAYMENT_KIND_LABEL[p.kind]}
                    {p.status === "FAILED" && " · fehlgeschlagen"}
                    {p.status === "REFUNDED" && " · erstattet"}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="tabular-nums text-cream">{euro(p.amountCents)}</span>
                  {safeUrl(p.receiptUrl) && <a href={safeUrl(p.receiptUrl)} target="_blank" rel="noreferrer" className="underline">Beleg</a>}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** Konto löschen (Pflicht in App Store und Google Play). */
export function DeleteAccount() {
  const { error, busy, run } = useAction();
  const [ask, setAsk] = useState(false);
  const router = useRouter();
  return (
    <section className="card border-hot/30">
      <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Konto löschen</h2>
      <Notice error={error} />
      <p className="mt-2 text-sm text-cream/70">
        Löscht dein Konto mit Profil, Buchungen, Bewertungen und hinterlegter Karte endgültig. Belege über Zahlungen bewahren wir ohne
        deinen Namen auf, weil das Steuerrecht es verlangt.
      </p>
      {ask ? (
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="btn-danger"
            disabled={busy}
            onClick={() => run(async () => {
              await deleteAccount();
              router.replace("/?geloescht=1");
            })}
          >
            Ja, Konto endgültig löschen
          </button>
          <button className="btn-secondary" onClick={() => setAsk(false)}>Abbrechen</button>
        </div>
      ) : (
        <button className="btn-secondary mt-3" onClick={() => setAsk(true)}>Konto löschen …</button>
      )}
    </section>
  );
}
