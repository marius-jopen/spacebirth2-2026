import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.spacebirth2.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "spacebirth2.b-cdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
