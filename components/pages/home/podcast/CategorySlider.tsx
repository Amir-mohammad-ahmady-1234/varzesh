"use client";
import Image from "next/image";
import React from "react";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

export default function CategorySlider() {
  return (
    <Swiper slidesPerView={4}>
      <SwiperSlide>
        <Image
          src={"/assets/img/podcast/Frame 1000001889.png"}
          alt="category slide image"
          width={301}
          height={216}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/img/podcast/Frame 1000001890.png"}
          alt="category slide image"
          width={301}
          height={216}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/img/podcast/Frame 1000001891.png"}
          alt="category slide image"
          width={301}
          height={216}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/img/podcast/Frame 1000001894.png"}
          alt="category slide image"
          width={301}
          height={216}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/assets/img/podcast/Frame 1000001890.png"}
          alt="category slide image"
          width={301}
          height={216}
        />
      </SwiperSlide>
    </Swiper>
  );
}
