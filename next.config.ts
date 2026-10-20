import type { NextConfig } from "next";

// Site 100% estático: `next build` gera a pasta `out/`, publicada no Netlify.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
