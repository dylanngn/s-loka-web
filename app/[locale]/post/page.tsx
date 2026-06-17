import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PostTabs } from "@/components/PostTabs";
import { getCategorizedPosts } from "@/server/get-all-post";
import { getDictionary } from "@/server/get-dictionary";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const posts = await getCategorizedPosts()
  return (
    <>
      <Hero {...dict.Post.Hero} />

      <Container className="mb-14">
        <PostTabs
          posts={posts}
          leading={dict.Post.topicLeading}
          topics={dict.Post.topics}
          lang={locale}
          readTimeText={dict.Post.Detail.minRead}
        />
      </Container>
    </>
  );
}
