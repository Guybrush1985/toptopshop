/** @type {import('next').NextConfig} */
// Zwei Ziele aus demselben Code:
// - Website: statischer Export für firsty.toptop.shop (IONOS Deploy Now führt keinen Server aus).
// - App (NEXT_PUBLIC_TARGET=app): statischer Export, den Capacitor in die iOS- und Android-App packt.
// Beide ohne Unterpfad; die Subdomain zeigt per .htaccess auf den Ordner /firsty-site/.
const basePath = "";
const app = process.env.NEXT_PUBLIC_TARGET === "app";
// Dateien (JS, CSS, Bilder) direkt aus dem echten Ordner laden, damit sie auch ohne Umschreiben der Adresse gefunden werden.
const assetPrefix = app ? "" : "/firsty-site";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: assetPrefix || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_ASSET_PREFIX: assetPrefix },
};
export default nextConfig;
