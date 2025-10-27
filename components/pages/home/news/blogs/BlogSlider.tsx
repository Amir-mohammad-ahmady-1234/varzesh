"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Blog from "./Blog";

export interface BlogType {
  id: number;
  title: string;
  description: string;
  profile: string;
  img: string;
  category: string;
  summary: string;
  author: string;
}

export default function BlogSlider({ blogs }: { blogs: BlogType[] }) {
  return (
    <div className="relative">
      <div className="custom-next absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer transition">
        <FaChevronLeft className="text-lg" />
      </div>

      <div className="custom-prev absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full cursor-pointer transition">
        <FaChevronRight className="text-lg" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Blog blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
