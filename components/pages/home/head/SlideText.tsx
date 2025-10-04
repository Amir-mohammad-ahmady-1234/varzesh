import React from "react";
import Button from "../../../common/Button";

export default function SlideText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-14 w-1/2">
      <div className="mr-10 space-y-10">
        <h4>پوشش 24 ساعته و برخط خبرهای ورزشی</h4>
        <p>
          با ورزش سه از ورزش بیشتر لذت ببر! میتونی اخبار مهم تیم محبوبت رو یکجا
          ببینی, نتایج زنده رو دنبال کنی و ویدئو خلاصه بازی ها رو تماشا کنی!
        </p>
      </div>
      <Button
        size="lg"
        className="shadow-[0_6px_8px_0_rgba(0,0,0,0.05)] shadow-secondary-500"
      >
        عضویت در خبرنامه
      </Button>
    </div>
  );
}
