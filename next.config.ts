import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/en/:path*',
          destination: '/:path*?lang=en',
        },
        {
          source: '/roman/:path*',
          destination: '/:path*?lang=ro',
        },
      ],
    };
  },
};

export default nextConfig;
