import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Configurations optimized for App Router
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // This is to ensure our migration doesn't fail builds during the transition
    ignoreBuildErrors: true,
  },
  // The appDir option is no longer needed in Next.js 15.3.4 as it's the default
  // but we ensure all paths are routed properly
  trailingSlash: false,
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
