"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SiceSliderImage from "./SiceSliderImage";

interface Props {
  cards: {
    id: number;
    image: string;
    title: string;
    views: number;
    label?: string;
    time: string;
    desc?: string;
  }[];
}

export default function CardSwiper({ cards }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      loop={cards.length > 8}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="p-5"
      breakpoints={{
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2.5, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <SiceSliderImage card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
