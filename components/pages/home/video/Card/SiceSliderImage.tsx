import Image from "next/image";
import React from "react";
interface Card {
  id: number;
  image: string;
  title: string;
  views: number;
  label: string;
  time: string;
  desc: string;
}

interface SiceSliderImageProps {
  card: Card;
}

function SiceSliderImage({ card }: SiceSliderImageProps) {
  return (
    <div className=" border border-primary-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-40">
        <Image
          src={card.image}
          alt={card.title}
          width={400}
          height={160}
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-3 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="border border-primary-100 px-2 ">{card.label}</span>
          <span>{card.time}</span>
        </div>
        <h6 className="text-lg font-semibold mb-1 line-clamp-1">
          {card.title}
        </h6>
        <p>{card.desc}</p>
      </div>
    </div>
  );
}

export default SiceSliderImage;
