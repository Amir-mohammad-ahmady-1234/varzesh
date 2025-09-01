import React from "react";
import CardVideo from "../../../components/pages/home/video/CardVideo";
import HeadeImageCard from "../../../components/pages/home/video/Card/HeadeImageCard";
import BannerVideo from "../../../components/pages/home/video/BannerVideo";
import CardSiwper from "../../../components/pages/home/video/Card/CardSiwper";

function page() {
  return (
    <section className="mb-10">
      <BannerVideo />
      <div className="flex items-center justify-center">
        <CardVideo title="پخش زنده">
          <HeadeImageCard />
        </CardVideo>
      </div>
      <div className="space-y-5">
        <CardVideo title="جدیدترین">
          <CardSiwper />
        </CardVideo>
        <div className="bg-primary-500/10 p-2 ">
          <CardVideo title="خلاصه بازی ها">
            <CardSiwper />
          </CardVideo>
        </div>
        <CardVideo title="پربازدیدترین">
          <CardSiwper />
        </CardVideo>
      </div>
    </section>
  );
}
export default page;
