'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import '@/styles/embla.css';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex items-center">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((children, index) => (
              <div className="embla__slide" key={index}>
                {children}
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default Carousel;
