import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare is serving this app as static assets, so Next's runtime image
    // optimizer endpoint is unavailable there. Serve the prepared local WebP
    // assets and remote originals directly instead of emitting broken /_next/image URLs.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gta6bible.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

