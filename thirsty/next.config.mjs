/** @type {import('next').NextConfig} */
// Zwei Ziele aus demselben Code:
// - Website: statischer Export für firsty.toptop.shop (IONOS Deploy Now führt keinen Server aus).
// - App (NEXT_PUBLIC_TARGET=app): statischer Export, den Capacitor in die iOS- und Android-App packt.
// Beide ohne Unterpfad; die Subdomain zeigt per .htaccess auf den Ordner /firsty-site/.
const basePath = "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
