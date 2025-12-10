import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://34.138.181.78/api/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
