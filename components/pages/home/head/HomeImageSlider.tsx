"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "../../../common/Button";
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

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-14 w-1/2">
              <div className="mr-10 space-y-10">
                <h4>پوشش 24 ساعته و برخط خبرهای ورزشی</h4>
                <p>
                  با ورزش سه از ورزش بیشتر لذت ببر! میتونی اخبار مهم تیم محبوبت
                  رو یکجا ببینی, نتایج زنده رو دنبال کنی و ویدئو خلاصه بازی ها
                  رو تماشا کنی!
                </p>
              </div>
              <Button
                size="lg"
                className="shadow-[0_6px_8px_0_rgba(0,0,0,0.05)] shadow-secondary-500"
              >
                عضویت در خبرنامه
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/assets/img/home/IMG_3645.png"
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
