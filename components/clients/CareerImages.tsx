'use client';
import Image from 'next/image';
import image1 from '@/images/career/image1.jpg';
import image2 from '@/images/career/image2.jpg';
import image3 from '@/images/career/image3.jpg';
import image4 from '@/images/career/image4.jpg';
import image5 from '@/images/career/image5.jpg';
import image6 from '@/images/career/image6.jpg';
import { useEffect, useState } from 'react';
const IMAGES = [image1, image2, image3, image4, image5, image6];

export function CareerImages() {
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={currentImage}
      alt={'career image 1'}
      className="h-64 w-96 transition-all tran grayscale hover:grayscale-0 rounded-2xl shadow-lg shadow-slate-600"
    />
  );
}
