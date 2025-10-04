"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import SlideText from "./SlideText";

function HomeImageSlider() {
  return (
    <div className="w-full max-w-[1344px] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/assets/img/home/IMG_3645.png"
              alt="slide-1"
              width={1344}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />

            <SlideText />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/assets/img/home/IMG_36452.avif"
            alt="slide-2"
            width={1344}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/img/home/soccer-ball-goal.webp"
            alt="slide-2"
            width={1344}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeImageSlider;
