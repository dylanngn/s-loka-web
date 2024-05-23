import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'S-LOKA your language harmonizes',
    short_name: 'S-LOKA',
    description: 'Gỉai pháp ngôn ngữ toàn cầu cho doanh nghiệp',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}