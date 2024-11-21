'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import './featureSlide.css';
const slideData = [
  { image: '/images/marketing.png', text: '해외 마케팅' },
  { image: '/images/image.png', text: '퍼블리셔' },
  { image: '/images/box.png', text: '캐드원(제도사)' },
  { image: '/images/target.png', text: '해외 세일즈' },
  { image: '/images/call.png', text: '해외 CS' },
];

export default function FeatureSlider() {
  return (
    <div className="hidden sm:block mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
      <Swiper
        slidesPerView={4.3}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="featureSwiper">
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="featureBox">
              <div className="flex items-center">
                <div className="imgContainer flex items-center justify-center mr-3">
                  <Image src={slide.image} width={32} height={32} alt={slide.text} />
                </div>
                <p className="font-poppins text-[16px] font-black leading-[30px] text-white">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
