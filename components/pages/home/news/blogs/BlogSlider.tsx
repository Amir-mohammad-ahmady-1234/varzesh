"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
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
