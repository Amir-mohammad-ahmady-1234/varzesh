import Image from "next/image";
import React from "react";

function BannerVideo() {
  return (
    <div>
      <Image
        src={"/assets/img/concat/banner.png"}
        alt="بنر سایت "
        width={1500}
        height={1500}
        className="w-full"
      />
    </div>
  );
}

export default BannerVideo;
