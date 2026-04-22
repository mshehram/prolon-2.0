import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Terminal ki instruction ke mutabiq ise yahan hona chahiye
  allowedDevOrigins: ['animal-cytoplasm-showing.ngrok-free.dev'],

  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ngrok-free.dev',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
};

export default nextConfig;