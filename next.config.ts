import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  // Download portfolio media on demand instead of precaching the whole gallery.
  publicExcludes: ['!noprecache/**/*', '!image/**/*', '!Project image/**/*', '!**/*.pdf', '!og-image.png'],
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  // This small static site benefits from avoiding a render-blocking CSS request.
  experimental: { inlineCss: true },
  images: {
    formats: ['image/avif', 'image/webp'],
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

export default withPWA(nextConfig);
