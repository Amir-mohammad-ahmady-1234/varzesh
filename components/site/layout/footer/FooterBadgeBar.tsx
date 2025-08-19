import Image from "next/image";
import React from "react";

function FooterBadgeBar() {
  const images = [
    "/img/footer/Union.png",
    "/img/footer/Union(1).png",
    "/img/footer/Vector(1).png",
    "/img/footer/Vector(2).png",
    "/img/footer/Vector(3).png",
  ];

  return (
    <div className="bg-primary-100 flex items-center justify-center gap-6 md:gap-[200px] p-4">
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
