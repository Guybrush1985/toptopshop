"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { APP, APP_SCHEME, REMOTE } from "@/lib/config";
import { connectStatus, syncCheckout } from "@/lib/payments";
import { useCurrentUser } from "@/lib/store";
import { Loading } from "@/components/ui";

const TEXT: Record<string, [ok: string, abbruch: string]> = {
  karte: ["Deine Karte ist hinterlegt.", "Es wurde keine Karte hinterlegt."],
  rechnung: ["Danke, deine Rechnung ist bezahlt. Den Beleg bekommst du per E-Mail.", "Die Zahlung wurde abgebrochen. Du kannst es noch einmal versuchen oder vor Ort zahlen."],
  abo: ["Dein Abo läuft. Die Rechnungen kommen per E-Mail.", "Das Abo wurde nicht abgeschlossen."],
  werbung: ["Dein Werbeplatz ist gebucht. Die Rechnung kommt per E-Mail.", "Der Werbeplatz wurde nicht gebucht."],
  connect: ["Danke! Stripe prüft deine Angaben, das dauert meist nur wenige Minuten.", "Die Einrichtung ist noch nicht fertig. Du kannst sie jederzeit fortsetzen."],
  portal: ["Änderungen am Abo sind gespeichert.", ""],
};

/**
 * Rücksprung von Stripe (Checkout, Onboarding, Kundenportal).
 * Website im In-App-Browser der App (Parameter app=1): Ergebnis übernehmen und die App über firsty:// wieder öffnen.
 * Website oder App selbst: Ergebnis übernehmen, Daten neu laden und zur passenden Seite weiter.
 */
export default function PaymentReturn() {
  const p = useSearchParams();
  const router = useRouter();
  const user = useCurrentUser();
  const art = p.get("art") ?? "";
  const ok = p.get("status") === "ok";
  const toApp = p.get("app") === "1" && !APP;
  const [ready, setReady] = useState(false);

  const target =
    art === "rechnung" && p.get("b") ? `/buchung/?id=${p.get("b")}`
    : art === "karte" ? (p.get("weiter")?.startsWith("/") ? p.get("weiter")! : "/konto/")
    : p.get("r") ? `/portal/restaurant/?id=${p.get("r")}&tab=abrechnung`
    : "/konto/";
  const appLink = (() => {
    const q = new URLSearchParams(p.toString());
    q.delete("app");
    return `${APP_SCHEME}://zahlung?${q.toString()}`;
  })();

  useEffect(() => {
    let stop = false;
    (async () => {
      if (ok) await syncCheckout(p.get("session"));
      if (!toApp && REMOTE && art === "connect" && p.get("r") && user) await connectStatus(p.get("r")!).catch(() => undefined);
      if (!toApp && REMOTE) {
        const { refresh } = await import("@/lib/remote");
        await refresh().catch(() => undefined);
      }
      if (stop) return;
      setReady(true);
      if (toApp) window.location.href = appLink;
    })();
    return () => {
      stop = true;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!ready) return <Loading />;
  const msg = TEXT[art]?.[ok ? 0 : 1] || (ok ? "Erledigt." : "Abgebrochen.");
  return (
    <div className="mx-auto max-w-md space-y-6 text-center">
      <p className={`display text-6xl ${ok ? "text-lime" : "text-hot"}`}>{ok ? "Erledigt" : "Abgebrochen"}</p>
      <p className="text-lg text-cream/85" data-testid="payment-result">{msg}</p>
      {toApp ? (
        <a href={appLink} className="btn w-full py-3 text-lg">Zurück zur Firsty-App</a>
      ) : (
        <button className="btn w-full py-3 text-lg" onClick={() => router.replace(target)}>Weiter</button>
      )}
      {!toApp && <p className="text-sm"><Link href="/" className="underline">Zur Startseite</Link></p>}
    </div>
  );
}
