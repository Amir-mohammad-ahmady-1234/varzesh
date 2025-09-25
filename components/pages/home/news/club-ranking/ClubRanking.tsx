import Image from "next/image";
import React from "react";

export default function ClubRanking() {
  return (
    <div className="w-full flex justify-center md:justify-end">
      <Image
        className="rounded-md object-cover w-full max-w-md md:max-w-full"
        src="/assets/img/news/Frame 1000001799.png"
        alt="خودروی فوق لاکچری عابدزاده"
        width={342}
        height={325}
      />
    </div>
  );
}
