"use client"
import "./ShareButtons.css"
import { FacebookShare, LinkedinShare, TwitterShare } from "react-share-kit";
import { Link as LinkIcon } from "@/components/icons/Link";
import { useRef } from "react";

export function ShareButtons({ url }: { url: string}) {
  const copyNoti = useRef<HTMLDivElement>(null)
  const copyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        copyNoti.current?.classList.remove("hidden")
        setTimeout(() => copyNoti.current?.classList.add("hidden"), 3000)
      })
  }
  return (
    <div className="flex items-center w-fit gap-12 mx-auto">
      <div id="facebook" className="flex justify-center items-center">
        <FacebookShare size={42} round={true} url={url} />
      </div>
      <div id="linkedIn" className="flex justify-center items-center">
        <LinkedinShare size={42} borderRadius={5} url={url} />
      </div>
      <div id="twitter" className="flex justify-center items-center">
        <TwitterShare size={79} bgColor="transparent" url={url} />
      </div>
      <button onClick={copyLink} className="group relative">
        <LinkIcon
          width="42"
          height="42"
          className="fill-[#98A2B3] group-hover:fill-[#0052B4]"
        />
        <small ref={copyNoti} className="hidden absolute -top-8 md:top-2 right-0 md:-right-40 rounded w-max py-1 px-2 bg-black text-white">Đã copy đường link</small>
      </button>
    </div>
  );
}
