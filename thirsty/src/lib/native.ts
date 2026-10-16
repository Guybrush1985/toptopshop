"use client";

// Nur in der iOS- und Android-App (APP): Verbindung zu den nativen Funktionen über Capacitor.
// - firsty://-Links (Rücksprung nach Stripe) öffnen die passende Seite
// - nach dem Schließen des In-App-Browsers Zahlungsstand übernehmen
// - Zurück-Taste unter Android, Statusleiste, Startbildschirm, Haptik

import { APP } from "./config";

export const ROUTE_KEY = "firsty-route";

/**
 * Capacitor liefert bei einem Neuladen jeder Adresse ohne Dateiendung die Startseite aus.
 * Ein kleines Skript im <head> merkt sich dann den gewünschten Pfad und lädt "/";
 * hier wird anschließend clientseitig dorthin navigiert.
 */
export const SPA_FALLBACK_SCRIPT = `(function(){try{var p=location.pathname;if(p!=="/"&&p!=="/index.html"){sessionStorage.setItem("${ROUTE_KEY}",p+location.search);location.replace("/");}}catch(e){}})();`;

export async function startNative(navigate: (path: string) => void) {
  if (!APP) return;
  const [{ App }, { Browser }, { StatusBar, Style }, { SplashScreen }] = await Promise.all([
    import("@capacitor/app"),
    import("@capacitor/browser"),
    import("@capacitor/status-bar"),
    import("@capacitor/splash-screen"),
  ]);
  try {
    const pending = sessionStorage.getItem(ROUTE_KEY);
    if (pending) {
      sessionStorage.removeItem(ROUTE_KEY);
      navigate(pending);
    }
  } catch {
    /* egal */
  }
  App.addListener("appUrlOpen", ({ url }) => {
    // firsty://zahlung?art=…  →  /zahlung/?art=…
    const m = /^[a-z]+:\/\/([^?#]*)(\?[^#]*)?/i.exec(url);
    if (!m) return;
    Browser.close().catch(() => undefined);
    const path = `/${m[1].replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
    if (/[?&]status=ok\b/.test(m[2] ?? "")) haptic();
    navigate(path + (m[2] ?? ""));
  });
  Browser.addListener("browserFinished", async () => {
    const { syncCheckout } = await import("./payments");
    await syncCheckout();
    const { REMOTE } = await import("./config");
    if (REMOTE) (await import("./remote")).refresh().catch(() => undefined);
  });
  App.addListener("backButton", ({ canGoBack }) => {
    if (canGoBack) window.history.back();
    else App.exitApp();
  });
  StatusBar.setStyle({ style: Style.Dark }).catch(() => undefined);
  StatusBar.setBackgroundColor?.({ color: "#0b0b0d" }).catch(() => undefined);
  SplashScreen.hide().catch(() => undefined);
}

/** Kurzes Vibrieren bei Erfolg (Buchung, Check-in, Zahlung). */
export async function haptic() {
  if (!APP) return;
  const { Haptics, NotificationType } = await import("@capacitor/haptics");
  Haptics.notification({ type: NotificationType.Success }).catch(() => undefined);
}

/** Natives Teilen (App) bzw. Web Share API / Zwischenablage (Website). */
export async function share(title: string, url: string) {
  if (APP) {
    const { Share } = await import("@capacitor/share");
    await Share.share({ title, url, dialogTitle: "Teilen" }).catch(() => undefined);
    return;
  }
  if (navigator.share) await navigator.share({ title, url }).catch(() => undefined);
  else await navigator.clipboard?.writeText(url);
}
