import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVGs (was missing)
    contentSecurityPolicy:
      "default-src 'self'; img-src *; media-src 'none'; script-src 'none'; sandbox;",
  },
  devIndicators: false,
  output: 'standalone',
};

export default nextConfig;
