import '@/styles/tailwind.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { getDictionary } from '@/server/get-dictionary';
import { PageLoader } from '@/components/clients/PageLoader';
export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const dict = dictionary['Menu'];
  const contactFormDict = dictionary['ContactForm'];
  const footerDict = dictionary['Footer'];

  return (
    <>
      <PageLoader />
      <Header
        home={{ label: dict.home.title, href: dict.home.href }}
        about={{
          label: dict.about.title,
          href: dict.about.href,
          items: Object.values(dict.about.sub).map((sub) => ({
            label: sub.title,
            href: sub.href,
          })),
        }}
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
            items: Object.values(item.sub).map((sub) => ({
              label: sub.title,
              href: sub.href,
            })),
          })),
        }}
      />
      <main>{children}</main>
      <ContactForm {...contactFormDict} />
      <Footer
        info={{
          address: footerDict.address,
          phone: '+84 342 445 442',
          email: 'hello@s-loka.com',
        }}
        copyRight={footerDict.copyright}
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
          label: `${dict.solution.sub.translation.title}`,
          items: Object.values(dict.solution.sub.translation.sub)
            .map((sub) => ({
              label: sub.title,
              href: sub.href,
            })),
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
          label: `${dict.solution.sub.creativeTranslation.title} `,
          items: Object.values(dict.solution.sub.creativeTranslation.sub).map(
            (sub) => ({
              label: sub.title,
              href: sub.href,
            })
          ),
        }}
        menu5={{
          label: `${dict.solution.sub.BPO.title}`,
          items: Object.values(dict.solution.sub.BPO.sub)
            .map((sub) => ({
              label: sub.title,
              href: sub.href,
            })),
        }}
      />
    </>
  );
}
