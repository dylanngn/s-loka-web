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
      {
        source: '/en/giai-phap',
        destination: '/vi/giai-phap',
        permanent: true,
      },
      {
        source: '/en/ve-chung-toi',
        destination: '/vi/ve-chung-toi',
        permanent: true,
      },
      {
        source: '/en/ve-chung-toi',
        destination: '/vi/ve-chung-toi',
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
      {
        source: '/vi/ve-chung-toi',
        destination: '/vi/about',
      },
      {
        source: '/vi/chuyen-nganh',
        destination: '/vi/service',
      },
      {
        source: '/vi/giai-phap',
        destination: '/vi/solution',
      },
      {
        source: '/vi/giai-phap/:slug',
        destination: '/vi/solution/:slug',
      },
    ];
  },
};

export default nextConfig;
