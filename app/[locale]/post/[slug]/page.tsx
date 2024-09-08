import { Container } from "@/components/Container";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/server/get-dictionary";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import image1 from "@/images/posts/image1.jpg";
import image2 from "@/images/posts/image2.jpg";

import { Facebook as FacebookIcon } from "@/components/icons/Facebook";
import { LinkedIn as LinkedinIcon } from "@/components/icons/LinkedIn";
import { X as XIcon } from "@/components/icons/X";
import { Link as LinkIcon } from "@/components/icons/Link";
import Link from "next/link";
import { PostSnippet } from "@/components/PostSnippet";
import { Pagination } from "@/components/Pagination";
import { ScrollProgress } from "@/components/clients/ScrollProgress";

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

export default async function PostDetailPage({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <article>
      <ScrollProgress/>
      <div className="flex flex-wrap justify-between pt-11 mb-7 md:px-16 text-[#AEB3BE]">
        <a href="/vi/bai-doc" className="mb-5 lg:mb-0 flex items-center text-xl hover:text-[#0052B4]">
          <ChevronLeftIcon className="inline w-5 mr-2" />
          {dict.Post.Detail.button.back}
        </a>
        <p className="text-xl ml-auto">Ngày 05 tháng 04 năm 2024 <br className="md:hidden" />| 10 phút đọc</p>
      </div>
      <Container>
        <div className="border-b-2 mb-12 pb-16 md:px-6">
          <h1 className="text-3xl text-center mb-9 px-11 py-2 font-bold">
            10 tố chất của một thông dịch viên tương lai
          </h1>
          <p className="mb-14 text-xl">
            Ngành thông dịch viên đang ngày càng trở nên quan trọng trong thế
            giới toàn cầu hóa hiện nay. Để trở thành một thông dịch viên giỏi
            không chỉ cần khả năng ngôn ngữ tốt mà còn đòi hỏi nhiều tố chất
            khác. Dưới đây là 10 tố chất quan trọng của một thông dịch viên
            tương lai.
          </p>

          <p className="mb-14 text-xl">
            <strong>1. Khả năng ngôn ngữ xuất sắc</strong> <br />
            Điều đầu tiên và quan trọng nhất là thông dịch viên cần phải thông
            thạo ít nhất hai ngôn ngữ. Không chỉ dừng lại ở việc biết nhiều từ
            vựng, mà còn phải hiểu sâu sắc cấu trúc ngữ pháp, sắc thái ngữ
            nghĩa, và các biến thể ngôn ngữ của từng quốc gia.
          </p>
          <p className="mb-14 text-xl">
            <strong>2. Khả năng lắng nghe chủ động</strong> <br />
            Thông dịch viên phải có khả năng lắng nghe chủ động, nghĩa là không
            chỉ nghe mà còn hiểu và phân tích ngay lập tức những gì người nói
            muốn truyền đạt. Khả năng này giúp họ chuyển tải thông tin một cách
            chính xác và trôi chảy.
          </p>
          <p className="mb-14 text-xl">
            <strong>3. Khả năng tư duy nhanh</strong> <br />
            Trong nhiều tình huống, thông dịch viên phải đưa ra quyết định ngôn
            ngữ nhanh chóng. Khả năng tư duy nhanh và đưa ra giải pháp ngôn ngữ
            kịp thời là yếu tố then chốt để đảm bảo quá trình thông dịch không
            bị gián đoạn.
          </p>
          <p className="mb-14 text-xl">
            <strong>4. Kỹ năng giao tiếp tốt</strong> <br />
            Thông dịch viên cần có kỹ năng giao tiếp tốt, bao gồm cả ngôn ngữ
            lời nói và ngôn ngữ cơ thể. Họ phải biết cách truyền đạt thông tin
            một cách rõ ràng, chính xác và dễ hiểu để tránh những hiểu lầm không
            đáng có.
          </p>

          <Image src={image1} alt={"image1"} className="mb-16 w-full h-full" />

          <p className="mb-14 text-xl">
            <strong>5. Kiến thức văn hóa sâu rộng</strong> <br />
            Hiểu biết về văn hóa của cả hai ngôn ngữ là điều rất quan trọng. Một
            thông dịch viên giỏi cần phải biết cách điều chỉnh cách diễn đạt để
            phù hợp với bối cảnh văn hóa của người nghe, từ đó tránh được những
            hiểu lầm văn hóa có thể xảy ra.
          </p>
          <p className="mb-14 text-xl">
            <strong>6. Khả năng tự học</strong> <br />
            Ngành thông dịch yêu cầu sự cập nhật liên tục về ngôn ngữ và kiến
            thức. Một thông dịch viên giỏi phải có khả năng tự học cao, luôn cập
            nhật những thay đổi và xu hướng mới trong cả hai ngôn ngữ mà họ sử
            dụng.
          </p>
          <p className="mb-14 text-xl">
            <strong>7. Tính kiên trì và chịu đựng áp lực</strong> <br />
            Công việc thông dịch không phải lúc nào cũng dễ dàng. Thông dịch
            viên phải đối mặt với nhiều áp lực từ thời gian, yêu cầu của khách
            hàng, và tính chất công việc. Tính kiên trì và khả năng chịu đựng áp
            lực cao sẽ giúp họ vượt qua những thử thách này.
          </p>
          <p className="mb-14 text-xl">
            <strong>8. Khả năng làm việc độc lập và theo nhóm</strong> <br />
            Thông dịch viên cần phải biết cách làm việc độc lập trong các nhiệm
            vụ cá nhân nhưng cũng phải có khả năng làm việc nhóm khi cần thiết.
            Sự linh hoạt này giúp họ thích ứng với nhiều tình huống công việc
            khác nhau.
          </p>
          <p className="mb-14 text-xl">
            <strong>9. Đạo đức nghề nghiệp</strong> <br />
            Đạo đức nghề nghiệp là yếu tố không thể thiếu. Thông dịch viên cần
            phải trung thực, giữ bí mật thông tin & tôn trọng tất cả các bên
            liên quan. Đạo đức nghề nghiệp giúp họ xây dựng uy tín và niềm tin
            từ khách hàng.
          </p>

          <Image src={image2} alt={"image2"} className="mb-16 w-full h-full" />

          <p className="mb-14 text-xl">
            <strong>10. Kỹ năng sử dụng công nghệ</strong> <br />
            Trong thời đại số hóa, thông dịch viên cần biết sử dụng các công cụ
            và <a className="text-[#0052B4] hover:underline" href="#">các phần mềm hỗ trợ dịch thuật</a>. Khả năng này giúp họ làm việc
            hiệu quả hơn và giảm bớt gánh nặng công việc thủ công.
          </p>

          <p className="mb-14 text-xl">
            Trở thành một thông dịch viên giỏi không phải là điều dễ dàng, nhưng
            với những tố chất trên, bất kỳ ai cũng có thể phát triển và thành
            công trong ngành này. Bằng cách không ngừng rèn luyện và hoàn thiện
            các kỹ năng của mình, các thông dịch viên tương lai sẽ góp phần quan
            trọng vào sự kết nối và giao tiếp giữa các nền văn hóa trên toàn thế
            giới.
          </p>

          <p className="mb-9 p-5 w-fit mx-auto text-center text-xl font-bold bg-gradient-radial from-yellow-50 to-white">
            Hãy chia sẻ bài đọc này nếu bạn thấy hay
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
                readTime={`10 ${dict.Post.post.minRead}`}
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
