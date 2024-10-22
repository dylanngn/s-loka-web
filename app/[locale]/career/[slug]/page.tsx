import styles from "./style.module.css"
import { BackButton } from '@/components/CareerBackButton';
import { Container } from '@/components/Container';
import { Locale } from '@/i18n-config';
import { getJobDetail } from '@/server/get-all-job';
import { getDictionary } from '@/server/get-dictionary';
import clsx from "clsx";
import Image from 'next/image';

export default async function CareerDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = (await getDictionary(lang))['Career']['Detail'];
  const job = await getJobDetail(slug);
  const header = job?.content_html.split('***')[0];
  const body = job?.content_html.split('***')[1];
  console.log(body)
  return (
    <Container className="text-center">
      <h2 className="text-xl font-semibold text-slate-900">{job?.title}</h2>
      <div className="text-left">
        <BackButton label={dict.button.back} />
      </div>
      <div className="mt-16 flex sm:flex-row flex-col justify-center text-left gap-16">
        <Image
          src={job?.image}
          alt={job?.title}
          className="rounded-lg w-96 h-full"
          width={512}
          height={512}
        />
        <p
          className="flex-1 leading-9 sm:mt-8"
          dangerouslySetInnerHTML={{ __html: header }}
        ></p>
      </div>
      <div className="prose">
        <p
          className={clsx("flex-1 prose leading-9 sm:mt-8 text-left mb-10 sm:mb-14 md:mb-20", styles.custom)}
          dangerouslySetInnerHTML={{ __html: body }}
        ></p>
      </div>
      <hr className="max-w-4xl mx-auto h-0.5 bg-gray-400" />
    </Container>
  );
}
