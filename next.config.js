/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig