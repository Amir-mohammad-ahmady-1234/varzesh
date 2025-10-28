"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function HomeImageSlider() {
  const slides = [
    "/assets/img/home/IMG_3645.png",
    "/assets/img/home/IMG_36452.avif",
    "/assets/img/home/soccer-ball-goal.webp",
  ];

  return (
    <div className="w-full max-w-[1344px] mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] flex items-center justify-center">
              <Image
                src={src}
                alt={`slide-${index + 1}`}
                fill
                className="object-center w-full h-full"
              />

              <div className="absolute inset-0 bg-black/25 rounded-2xl"></div>

              {/* {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10">
                  <SlideText />
                </div>
              )} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeImageSlider;
