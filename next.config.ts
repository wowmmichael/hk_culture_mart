import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // We're using the App Router with a modular component structure
  images: {
    // For development purposes - in production these should be optimized
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
};

export default nextConfig;
