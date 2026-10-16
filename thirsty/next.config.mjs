/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export für toptop.shop/thirsty/ (IONOS Deploy Now führt keinen Server aus).
  output: "export",
  basePath: "/thirsty",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
