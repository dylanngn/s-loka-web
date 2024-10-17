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
        source: '/en/giai-phap/ban-dia-hoa/tro-choi',
        destination: '/vi/giai-phap/ban-dia-hoa/tro-choi',
        permanent: true,
      },
      {
        source: '/en/giai-phap/ban-dia-hoa/website',
        destination: '/vi/giai-phap/ban-dia-hoa/website',
        permanent: true,
      },
      {
        source: '/en/giai-phap/ban-dia-hoa/mobile-app',
        destination: '/vi/giai-phap/ban-dia-hoa/mobile-app',
        permanent: true,
      },
      {
        source: '/en/giai-phap/ban-dia-hoa/an-pham-media',
        destination: '/vi/giai-phap/ban-dia-hoa/an-pham-media',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-thuat/dich-thuat-chuyen-nganh',
        destination: '/vi/giai-phap/dich-thuat/dich-thuat-chuyen-nganh',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-thuat/dich-thuat-cong-chung',
        destination: '/vi/giai-phap/dich-thuat/dich-thuat-cong-chung',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-thap-tung',
        destination: '/vi/giai-phap/phien-dich/phien-dich-thap-tung',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-lu-hanh',
        destination: '/vi/giai-phap/phien-dich/phien-dich-lu-hanh',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-du-lich',
        destination: '/vi/giai-phap/phien-dich/phien-dich-du-lich',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-kinh-doanh',
        destination: '/vi/giai-phap/phien-dich/phien-dich-kinh-doanh',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-trien-lam-thuong-mai',
        destination: '/vi/giai-phap/phien-dich/phien-dich-trien-lam-thuong-mai',
        permanent: true,
      },
      {
        source: '/en/giai-phap/phien-dich/phien-dich-song-song',
        destination: '/vi/giai-phap/phien-dich/phien-dich-song-song',
        permanent: true,
      },
      {
        source: '/en/giai-phap/bpo/so-hoa-tai-lieu',
        destination: '/vi/giai-phap/bpo/so-hoa-tai-lieu',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/dich-sang-tao-la-gi',
        destination: '/vi/giai-phap/dich-sang-tao/dich-sang-tao-la-gi',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/quy-trinh-dich-sang-tao',
        destination: '/vi/giai-phap/dich-sang-tao/quy-trinh-dich-sang-tao',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/ban-dia-hoa-marketing',
        destination: '/vi/giai-phap/dich-sang-tao/ban-dia-hoa-marketing',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/ban-dia-hoa-game',
        destination: '/vi/giai-phap/dich-sang-tao/ban-dia-hoa-game',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/ban-dia-hoa-ui-ux-app',
        destination: '/vi/giai-phap/dich-sang-tao/ban-dia-hoa-ui-ux-app',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/copy-writing',
        destination: '/vi/giai-phap/dich-sang-tao/copy-writing',
        permanent: true,
      },
      {
        source: '/en/giai-phap/dich-sang-tao/content-writing',
        destination: '/vi/giai-phap/dich-sang-tao/content-writing',
        permanent: true,
      },
      {
        source: '/en/chuyen-nganh',
        destination: '/vi/chuyen-nganh',
        permanent: true,
      },
      {
        source: '/en/chuyen-nganh/:slug',
        destination: '/vi/chuyen-nganh/:slug',
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
        source: '/vi/bai-doc',
        destination: '/vi/post',
      },
      {
        source: '/vi/bai-doc/:slug',
        destination: '/vi/post/:slug',
      },
      {
        source: '/vi/chuyen-nganh',
        destination: '/vi/service',
      },
      {
        source: '/vi/chuyen-nganh/:slug',
        destination: '/vi/service/:slug',
      },
      {
        source: '/vi/giai-phap',
        destination: '/vi/solution',
      },
      {
        source: '/vi/giai-phap/:slug',
        destination: '/vi/solution/:slug',
      },
      {
        source: '/vi/giai-phap/ban-dia-hoa/:slug',
        destination: '/vi/solution/localization/:slug',
      },
      {
        source: '/vi/giai-phap/dich-thuat/:slug',
        destination: '/vi/solution/translation/:slug',
      },
      {
        source: '/vi/giai-phap/phien-dich/:slug',
        destination: '/vi/solution/interpretation/:slug',
      },
      {
        source: '/vi/giai-phap/dich-sang-tao/:slug',
        destination: '/vi/solution/creativeTranslation/:slug',
      },
      {
        source: '/vi/giai-phap/bpo/:slug',
        destination: '/vi/solution/bpo/:slug',
      },
    ];
  },
};

export default nextConfig;
