import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { currentUser } from "@/lib/auth";
import { logout } from "./actions/auth";

export const metadata: Metadata = {
  title: { default: "Thirsty – Sei der erste Gast", template: "%s · Thirsty" },
  description: "Early-Bird-Plätze in Restaurants: zur Öffnung buchen, 50 % sparen, Getränk aufs Haus.",
};

export const viewport: Viewport = { themeColor: "#d97706" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  return (
    <html lang="de">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-600">
              Thirsty
            </Link>
            <div className="ml-auto flex items-center gap-3 text-sm">
              <Link href="/" className="hover:text-brand-700">Entdecken</Link>
              {user && <Link href="/me" className="hover:text-brand-700">Meine Buchungen</Link>}
              {user?.role === "OWNER" && <Link href="/portal" className="hover:text-brand-700">Portal</Link>}
              {user ? (
                <form action={logout}>
                  <button className="text-stone-500 hover:text-stone-800">Abmelden</button>
                </form>
              ) : (
                <>
                  <Link href="/login" className="hover:text-brand-700">Anmelden</Link>
                  <Link href="/register" className="btn py-1.5">Registrieren</Link>
                </>
              )}
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs text-stone-500">
          Thirsty · Prototyp ·{" "}
          <Link href="/register?role=OWNER" className="underline">Für Restaurants</Link>
        </footer>
      </body>
    </html>
  );
}
