/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export für toptop.shop/firsty/ (IONOS Deploy Now führt keinen Server aus).
  output: "export",
  basePath: "/firsty",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
