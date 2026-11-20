import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/status-maker',
        destination: '/duain',
        permanent: true,
      },
      {
        source: '/:lang(ur|roman|en)/status-maker',
        destination: '/:lang/duain',
        permanent: true,
      },
    ];
  },
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
