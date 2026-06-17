'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Quote } from '@/components/icons/Quote';
import Image from "next/image";
import maleImg from "@/images/avatars/male.png";
import femaleImg from "@/images/avatars/female.jpg";

type Testimonial = {
    name: string;
    gender: string;
    position: string;
    message: string;
};

export function MobileTestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="md:hidden w-full mb-20">
            <div className="overflow-hidden py-8" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {testimonials.map((item, index) => (
                        <div className="flex-[0_0_100%] min-w-0 px-4" key={index}>
                            <div className={clsx("relative rounded-2xl pt-9 pb-6 px-8 h-full flex flex-col bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]",
                                "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_60%)] before:opacity-20"
                            )}>
                                <Quote className="absolute top-5 left-5 w-10 text-[#D9D9D980]" />
                                <div className="flex justify-center items-center mx-auto mb-3 p-1 h-16 w-16 rounded-full border border-blue-700 overflow-hidden shrink-0">
                                    <Image
                                        className={clsx("", item.gender === "male" && "scale-150")}
                                        alt="avatar"
                                        src={item.gender === "female" ? femaleImg : maleImg}
                                    />
                                </div>
                                <p className="mb-3 text-center font-semibold text-slate-900">{item.name}</p>
                                <p className="mb-8 text-center font-semibold text-blue-800">{item.position}</p>
                                <p className="text-start font-light text-slate-900 flex-grow">{item.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation: Arrows & Dots */}
            <div className="flex items-center justify-center gap-4 mt-8 px-4">
                {/* Prev Arrow */}
                <button
                    onClick={scrollPrev}
                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                    aria-label="Previous slide"
                >
                    <ArrowLongLeftIcon className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={clsx(
                                "h-0.5 rounded-full transition-all duration-300",
                                index === selectedIndex ? "w-5 bg-slate-900" : "w-2 bg-slate-300"
                            )}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Next Arrow */}
                <button
                    onClick={scrollNext}
                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                    aria-label="Next slide"
                >
                    <ArrowLongRightIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
