import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://s-loka.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          vi: 'https://s-loka.com/vi',
          en: 'https://s-loka.com/en',
        },
      },
    },
    {
      url: 'https://s-loka.com/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          vi: 'https://s-loka.com/vi/about',
          en: 'https://s-loka.com/en/about',
        },
      },
    },
    {
      url: 'https://s-loka.com/career',
      lastModified: new Date(),
      alternates: {
        languages: {
          vi: 'https://s-loka.com/vi/career',
          en: 'https://s-loka.com/vi/career',
        },
      },
    },
    {
      url: 'https://s-loka.com/solution',
      lastModified: new Date(),
      alternates: {
        languages: {
          vi: 'https://s-loka.com/vi/solution',
          en: 'https://s-loka.com/vi/solution',
        },
      },
    },
  ];
}
