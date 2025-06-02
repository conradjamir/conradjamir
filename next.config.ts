import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/surprise-birthday',
        destination: '/surprise-birthday/index.html',
      },
    ];
  },
};

export default nextConfig;
