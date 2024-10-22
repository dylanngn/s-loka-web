"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  message?: string;
  description: string;
};

export function Hero({ title, message, description }: HeroProps) {
  const targetRef = useRef<HTMLElement>(null);
  // const scrollRef = useRef<any>(null);
  useEffect(() => {
    const setDefaultMousePosition = () => {
      targetRef?.current?.style?.setProperty?.(
        "--x",
        `${targetRef.current.clientWidth / 2}px`
      );
      targetRef?.current?.style?.setProperty?.(
        "--y",
        `${(targetRef.current.offsetHeight + targetRef.current.clientHeight / 2) / 2}px`
      );
    };

    const updateMousePosition = (ev: any) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      if (clientY < targetRef.current.offsetTop) {
        setDefaultMousePosition();
      } else {
        targetRef?.current?.style?.setProperty?.("--x", `${clientX}px`);
        targetRef?.current?.style?.setProperty?.("--y", `${clientY}px`);
        targetRef.current?.classList.remove("relative", "before:absolute")
        targetRef.current?.classList.add("before:fixed")
      }
    };

    const updateScrollPosition = () => {
      const { scrollY } = window;

      if (scrollY < 100) {
        window.addEventListener("mousemove", updateMousePosition);
      } else {
        targetRef?.current?.style?.setProperty?.(
          "--x",
          `${targetRef.current.clientWidth / 2}px`
        );
        targetRef?.current?.style?.setProperty?.(
          "--y",
          `${(targetRef.current.clientHeight - 150) / 2}px`
        );
        targetRef.current?.classList.remove("before:fixed")
        targetRef.current?.classList.add("relative", "before:absolute")
        window.removeEventListener("mousemove", updateMousePosition);
      }
    };

    setDefaultMousePosition();

    window.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      ref={targetRef}
      className="h-fit select-none px-6 py-32 text-center lg:px-8 lg:py-40
      before:z-10 before:absolute before:h-screen before:pointer-events-none before:inset-0 before:bg-[radial-gradient(ellipse_farthest-side_at_var(--x,0px)_var(--y,_0px),_var(--color-primary)_0%,_transparent_50%)] before:opacity-40"
    >
      <div className="relative z-10">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          {title}
          <span className="text-primary relative -bottom-8 sm:ml-10 text-3xl">
            {message}
          </span>
        </h1>
        <p className="mt-16 text-lg font-light">{description}</p>
      </div>
    </motion.section>
  );
}
