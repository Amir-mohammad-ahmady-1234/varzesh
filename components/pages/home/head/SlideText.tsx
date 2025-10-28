import React from "react";
import Button from "../../../common/Button";

export default function SlideText() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center gap-6 md:gap-10 max-w-full md:max-w-lg text-center md:text-left">
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug">
        پوشش 24 ساعته و برخط خبرهای ورزشی
      </h4>
      <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
        با ورزش سه از ورزش بیشتر لذت ببر! میتونی اخبار مهم تیم محبوبت رو یکجا
        ببینی، نتایج زنده رو دنبال کنی و ویدئو خلاصه بازی‌ها رو تماشا کنی!
      </p>
      <Button
        size="lg"
        className="shadow-[0_6px_8px_0_rgba(0,0,0,0.05)] shadow-secondary-500"
      >
        عضویت در خبرنامه
      </Button>
    </div>
  );
}
