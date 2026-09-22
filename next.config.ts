import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  // GitHub Pages repository path
  basePath: "/portfolio",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
