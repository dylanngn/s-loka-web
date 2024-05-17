'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  title: string;
  message: string;
  description: string;
};

export function Hero({ title, message, description }: HeroProps) {
  const targetRef = useRef<any>(null);
  const scrollRef = useRef<any>(null);
  useEffect(() => {
    const setDefaultMousePosition = () => {
      targetRef?.current?.style?.setProperty?.(
        '--x',
        `${window.screen.width / 2}px`
      );
      targetRef?.current?.style?.setProperty?.(
        '--y',
        `${window.screen.height / 2}px`
      );
    };

    const updateMousePosition = (ev: any) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      if (clientY < targetRef.current.offsetTop) {
        setDefaultMousePosition();
      } else {
        targetRef?.current?.style?.setProperty?.('--x', `${clientX}px`);
        targetRef?.current?.style?.setProperty?.('--y', `${clientY}px`);
      }
    };

    const updateScrollPosition = () => {
      const { scrollY } = window;

      if (scrollY < 100) {
        window.addEventListener('mousemove', updateMousePosition);
      } else {
        targetRef?.current?.style?.setProperty?.(
          '--x',
          `${window.screen.width / 2}px`
        );
        targetRef?.current?.style?.setProperty?.(
          '--y',
          `-${scrollRef.current}px`
        );
        window.removeEventListener('mousemove', updateMousePosition);
      }
    };

    setDefaultMousePosition();

    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      ref={targetRef}
      className="mx-auto h-fit max-w-7xl select-none px-6 py-32 text-center before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-primary)_0%,_transparent_50%)] before:opacity-35 lg:px-8 lg:py-40"
    >
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        {title}
        <span className="text-primary relative -bottom-8 sm:ml-10 text-3xl">
          {message}
        </span>
      </h1>
      <div className="text-s mt-16 font-light">{description}</div>
    </motion.section>
  );
}
