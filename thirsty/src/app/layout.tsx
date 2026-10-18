import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: { default: "Firsty – Sei der erste Gast", template: "%s · Firsty" },
  description: "Early-Bird-Plätze in Restaurants: zur Öffnung buchen, 50 % sparen, Getränk aufs Haus. Vorschau.",
  robots: { index: false, follow: false },
  icons: { icon: "/firsty/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0b0b0d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-ink font-sans text-cream antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
