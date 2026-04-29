/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // If you want to do a static export for Netlify (matching your other Site Sauce deploys),
  // uncomment the next line. Leaving it off uses Netlify's Next.js adapter.
  // output: 'export',
};

module.exports = nextConfig;
