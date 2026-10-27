/** @type {import('next').NextConfig} */
// Zwei Ziele aus demselben Code:
// - Website: statischer Export für toptop.shop/firsty/ (IONOS Deploy Now führt keinen Server aus).
// - App (NEXT_PUBLIC_TARGET=app): statischer Export ohne Unterpfad, den Capacitor in die iOS- und Android-App packt.
const app = process.env.NEXT_PUBLIC_TARGET === "app";
const basePath = app ? "" : "/firsty";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
