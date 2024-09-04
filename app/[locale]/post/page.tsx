import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PostTabs } from "@/components/PostTabs";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero {...dict.Post.Hero} />

      <Container className="mb-14">
        <PostTabs
          leading={dict.Post.topicLeading}
          topics={dict.Post.topics}
          lang={lang}
          readTimeText={dict.Post.post.minRead}
        />
      </Container>
    </>
  );
}
