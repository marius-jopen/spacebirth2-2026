import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.spacebirth2.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
