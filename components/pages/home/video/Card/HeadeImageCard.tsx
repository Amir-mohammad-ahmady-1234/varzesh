import Image from "next/image";
import React from "react";

function HeadeImageCard() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5">
      <div className="w-full lg:w-3/3">
        <Image
          src="/assets/img/concat/side3.png"
          alt="side3"
          width={900}
          height={900}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        <Image
          src="/assets/img/concat/side1.png"
          alt="side1"
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-2xl"
        />
        <Image
          src="/assets/img/concat/side2.png"
          alt="side2"
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default HeadeImageCard;
