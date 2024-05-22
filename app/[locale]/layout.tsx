import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import clsx from 'clsx';
import '@/styles/tailwind.css';
import { Locale, i18n } from '@/i18n-config';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getDictionary } from '@/server/get-dictionary';
export const runtime = 'edge';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    template: '%s - S-LOKA',
    default: 'S-LOKA your language harmonizes',
  },
  description: 'Giải pháp ngôn ngữ toàn cầu doanh nghiệp',
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dict = (await getDictionary(lang))['Menu'];

  return (
    <html
      lang={lang}
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        <Header
          home={{ label: dict.home.title, href: dict.home.href }}
          about={{ label: dict.about.title, href: dict.about.href }}
          contact={{ label: dict.priceButton, href: dict.priceButton }}
          service={{
            label: dict.service.title,
            href: dict.service.href,
            items: Object.values(dict.service.sub).map((sub) => ({
              label: sub.title,
              href: sub.href,
            })),
          }}
          solution={{
            label: dict.solution.title,
            href: dict.solution.href,
            groups: Object.values(dict.solution.sub).map((item) => ({
              label: item.title,
              items: Object.values(dict.solution.sub).map((sub) => ({
                label: sub.title,
                href: sub.href,
              })),
            })),
          }}
        />
        <main>{children}</main>
        <Footer
          info={{
            address:
              '47 Trương Quyền, Phường Võ Thị Sáu, Quận 03, TP.HCM, Việt Nam',
            phone: '+84 342 445 442',
            email: 'hello@s-loka.com',
          }}
          copyRight="Bản quyền thuộc về CÔNG TY CỔ PHẦN DỊCH VỤ S-LOKA"
          menu1={{
            label: dict.solution.sub.localization.title,
            items: Object.values(dict.solution.sub.localization.sub).map(
              (sub) => ({
                label: sub.title,
                href: sub.href,
              })
            ),
          }}
          menu2={{
            label: dict.solution.sub.translation.title,
            items: Object.values(dict.solution.sub.translation.sub).map(
              (sub) => ({
                label: sub.title,
                href: sub.href,
              })
            ),
          }}
          menu3={{
            label: dict.solution.sub.interpretation.title,
            items: Object.values(dict.solution.sub.interpretation.sub).map(
              (sub) => ({
                label: sub.title,
                href: sub.href,
              })
            ),
          }}
          menu4={{
            label: dict.solution.sub.creativeTranslation.title,
            items: Object.values(dict.solution.sub.creativeTranslation.sub).map(
              (sub) => ({
                label: sub.title,
                href: sub.href,
              })
            ),
          }}
        />
      </body>
    </html>
  );
}
