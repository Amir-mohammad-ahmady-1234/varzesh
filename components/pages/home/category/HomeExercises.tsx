"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import SectionContainer from "../../../common/home/ContentHome";

const exercises = [
  { title: "والیبال ساحلی", img: "/assets/img/home/exp1.png", reverse: true },
  { title: "شنا", img: "/assets/img/home/exp2.png", reverse: false },
  { title: "تنیس", img: "/assets/img/home/exp4.png", reverse: true },
  { title: "بسکتبال", img: "/assets/img/home/exp3.png", reverse: false },
  { title: "تنیس روی میز", img: "/assets/img/home/exp5.png", reverse: true },
  { title: "والیبال ساحلی", img: "/assets/img/home/exp1.png", reverse: false },
];

function HomeExercises() {
  return (
    <SectionContainer title="ورزش ها">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {exercises.map((ex, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`flex flex-col items-center text-center p-2  ${
                ex.reverse ? "flex-col-reverse gap-y-5" : "flex-col gap-y-5"
              }`}
            >
              <Image
                src={ex.img}
                alt={ex.title}
                width={250}
                height={250}
                className=" mb-2"
              />
              <h4 className="text-white text-lg font-bold">{ex.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
}

export default HomeExercises;
