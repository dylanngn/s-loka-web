import { Container } from "@/components/Container";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { Facebook as FacebookIcon } from "@/components/icons/Facebook";
import { LinkedIn as LinkedinIcon } from "@/components/icons/LinkedIn";
import { X as XIcon } from "@/components/icons/X";
import { Link as LinkIcon } from "@/components/icons/Link";
import Link from "next/link";
import { PostSnippet } from "@/components/PostSnippet";
import { Pagination } from "@/components/Pagination";
import { ScrollProgress } from "@/components/clients/ScrollProgress";
import LeftTool from "@/components/LeftTool";
import { getPostDetail } from "@/server/get-all-post";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sloka.vn",
    icon: FacebookIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/sloka-vn",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://www.x.com/company/sloka-vn",
    icon: XIcon,
  },
  {
    name: "link",
    href: "https://www.s-loka.com/vi",
    icon: LinkIcon,
  },
];

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function calculateReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const readTime = Math.ceil(words / wordsPerMinute);
  return readTime;
}

export default async function PostDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const post = await getPostDetail(slug);
  const category = post?.category;
  const readTime = calculateReadTime(post?.content_text)
  const publishedDate = new Date(post?.date_published)
  const body = post?.content_html;
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
          <div className="flex w-fit gap-12 mx-auto">
            {SOCIAL_LINKS.map((link) => (
              <Link className="group" key={link.name} href={link.href}>
                <link.icon
                  width="42"
                  height="42"
                  className="fill-[#98A2B3] group-hover:fill-[#0052B4]"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-14 text-center text-3xl font-bold">
            Danh sách các bài viết cùng chủ đề
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 gap-5 lg:gap-14">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
              <PostSnippet
                key={e}
                path="#"
                readTime={`10 ${dict.Post.Detail.minRead}`}
                title="Bạn có đang xây dựng lối sống lành mạnh?"
                topic="Công việc"
              />
            ))}
          </div>
            <div className="mx-auto md:w-fit">
              <Pagination />
            </div>
        </div>
      </Container>
    </article>
  );
}
