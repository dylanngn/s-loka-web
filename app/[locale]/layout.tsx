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
  const dict = await getDictionary(lang);
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
        <Header dictionary={dict.Menu} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
