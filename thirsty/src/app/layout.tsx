import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: { default: "Thirsty – Sei der erste Gast", template: "%s · Thirsty" },
  description: "Early-Bird-Plätze in Restaurants: zur Öffnung buchen, 50 % sparen, Getränk aufs Haus. Vorschau.",
  robots: { index: false, follow: false },
  icons: { icon: "/thirsty/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#d97706" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
