import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Shell } from "@/components/Shell";
import { APP, BASE_PATH } from "@/lib/config";
import { SPA_FALLBACK_SCRIPT } from "@/lib/native";

export const metadata: Metadata = {
  title: { default: "Firsty – Sei der erste Gast", template: "%s · Firsty" },
  description: "Early-Bird-Plätze in Restaurants: zur Öffnung buchen, 50 % sparen, Getränk aufs Haus. Vorschau.",
  robots: { index: false, follow: false },
  icons: { icon: `${BASE_PATH}/favicon.svg` },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  // App: randlos bis unter Notch und Home-Leiste; Abstände über env(safe-area-inset-*)
  ...(APP ? { viewportFit: "cover", width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      {APP && <head><script dangerouslySetInnerHTML={{ __html: SPA_FALLBACK_SCRIPT }} /></head>}
      <body className="min-h-screen bg-ink font-sans text-cream antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
