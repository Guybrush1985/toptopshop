/**
 * Nur http(s)-Adressen als Link ausgeben. Restaurants (und die KI-Hilfe) können Websites frei eintragen;
 * eine Adresse wie „javascript:…“ würde beim Klick Code auf toptop.shop ausführen.
 */
export function safeUrl(u?: string | null): string | undefined {
  if (!u) return undefined;
  try {
    const url = new URL(u.trim());
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

/** Instagram-Namen auf erlaubte Zeichen kürzen (Buchstaben, Ziffern, Punkt, Unterstrich). */
export function instagramHandle(h?: string | null): string | undefined {
  const m = (h ?? "").trim().replace(/^@/, "").match(/^[A-Za-z0-9._]{1,30}$/);
  return m ? m[0] : undefined;
}

/**
 * Rücksprungziel aus ?weiter=… nur innerhalb von Firsty zulassen. „//andere-seite.de“ beginnt auch mit „/“,
 * würde aber auf eine fremde Seite führen (Phishing direkt nach der Anmeldung).
 */
export function localPath(p?: string | null): string | undefined {
  return p && p.startsWith("/") && !p.startsWith("//") && !p.startsWith("/\\") ? p : undefined;
}
