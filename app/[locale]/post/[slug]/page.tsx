import { Container } from "@/components/Container";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ScrollProgress } from "@/components/clients/ScrollProgress";
import LeftTool from "@/components/LeftTool";
import { calculateReadTime, getPostDetail, getPostsByCategory } from "@/server/get-all-post";
import RelatedPosts from "@/components/RelatedPosts";
import { ShareButtons } from "@/components/ShareButtons";


function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export default async function PostDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const post = await getPostDetail(slug);
  const category = post?.category;
  const relatedPosts = await getPostsByCategory(category)
  const readTime = calculateReadTime(post?.content_text)
  const publishedDate = new Date(post?.date_published)
  const body = post?.content_html;
  const url = `https://www.s-loka.com/vi/bai-doc/${slug}`

  return (
    <article className="relative">
      <ScrollProgress/>
      <div className="flex flex-wrap justify-between pt-11 mb-7 md:px-16 text-[#AEB3BE]">
        <a href="/vi/bai-doc" className="mb-5 lg:mb-0 flex items-center text-xl hover:text-[#0052B4]">
          <ChevronLeftIcon className="inline w-5 mr-2" />
          {dict.Post.Detail.button.back}
        </a>
        <p className="text-xl ml-auto">{formatDate(publishedDate)} <br className="md:hidden" />| {readTime} {dict.Post.Detail.minRead}</p>
      </div>
      <LeftTool category={category}/>
      <Container>
        <div className="border-b-2 mb-12 pb-16 md:px-10 xl:px-6">
          <h1 className="text-3xl text-center mb-9 px-11 py-2 font-bold">
            {post.title}
          </h1>
          <div className="text-xl" dangerouslySetInnerHTML={{__html: body}}/>

          <p className="mb-9 p-5 w-fit mx-auto text-center text-xl font-bold bg-gradient-radial from-yellow-50 to-white">
            {dict.Post.Detail.share}
          </p>
          
          <ShareButtons url={url}/>
        </div>
        <RelatedPosts relatedPosts={relatedPosts} topics={dict.Post.topics} heading={dict.Post.Detail.relatedPosts} minReadText={dict.Post.Detail.minRead}/>
      </Container>
    </article>
  );
}
