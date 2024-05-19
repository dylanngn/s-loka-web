import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-cdn.s-loka.com',
        pathname: '/s-loka-cms/production/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/en/tuyen-dung',
        destination: '/vi/tuyen-dung',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/vi/tuyen-dung',
        destination: '/vi/career',
      },
      {
        source: '/vi/tuyen-dung/:slug',
        destination: '/vi/career/:slug',
      },
    ];
  },
};

export default nextConfig;
