import Image from "next/image";
import React from "react";

function FooterBadgeBar() {
  const images = [
    "/assets/img/footer/dart.png",
    "/assets/img/footer/ball.png",
    "/assets/img/footer/basketball.png",
    "/assets/img/footer/box.png",
    "/assets/img/footer/valiball.png",
  ];

  return (
    <div className="bg-primary-100 flex items-center justify-center gap-6 md:gap-[200px] p-4 ">
      {images.map((src, i) => (
        <div key={i} className="w-10 h-10 md:w-16 md:h-16 relative">
          <Image
            src={src}
            alt="footericons"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}

export default FooterBadgeBar;
