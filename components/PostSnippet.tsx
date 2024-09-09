import { PostArrow } from "@/components/icons/PostArrow";

type PostSnippetProps = {
  title: string;
  topic: string;
  readTime: string;
  path: string;
};

export function PostSnippet({
  title,
  topic,
  readTime,
  path,
}: PostSnippetProps) {
  return (
    <div className="group border rounded-xl p-5 text-center  hover:border-primary hover:text-[#0052B4]">
      <a href={path} className="block">
        <p className="border-b border-gray-400 h-auto sm:h-[177px] text-xl">
          {title}
        </p>
        <small className="flex justify-center items-center mx-auto mb-4 h-14 w-fit bg-gradient-radial from-yellow-50 to-white text-[10px]">
          {topic}
        </small>
        <div className="flex justify-between items-end">
          <small className="text-gray-500 group-hover:text-[#0052B4] text-[10px]">
            {readTime}
          </small>
          <span className="font-sm flex gap-2 flex-col sm:flex-row items-center font-light text-center mt-2">
            <PostArrow className="w-6 inline-block" />
          </span>
        </div>
      </a>
    </div>
  );
}
