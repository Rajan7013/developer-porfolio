import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow Pinggy tunnel and other dev origins
  allowedDevOrigins: [
    '*.pinggy.link',
    '*.a.free.pinggy.link',
  ],
};

export default nextConfig;
