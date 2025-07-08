// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export

  images: {
    unoptimized: true, // Disable Image Optimization for static export
    domains: ['i.ytimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**', // All YouTube thumbnails
      },
    ],
  },

  basePath: '', // No basePath needed for username.github.io
  assetPrefix: '/', // Use relative paths for GitHub Pages
};

export default nextConfig;
