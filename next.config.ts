import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/adn",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
