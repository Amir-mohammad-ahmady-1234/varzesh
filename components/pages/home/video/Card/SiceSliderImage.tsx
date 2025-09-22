import Image from "next/image";
import React from "react";
interface Card {
  id: number;
  image: string;
  title: string;
  views: number;
  time: string;
}

interface SiceSliderImageProps {
  card: Card;
}

function SiceSliderImage({ card }: SiceSliderImageProps) {
  return (
    <div className="bg-primary-500/20 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative w-full h-40">
        <Image
          src={card.image}
          alt={card.title}
          width={400}
          height={160}
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-3">
        <h4 className="text-lg font-semibold mb-1 line-clamp-1">
          {card.title}
        </h4>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{card.views} بازدید</span>
          <span>{card.time}</span>
        </div>
      </div>
    </div>
  );
}

export default SiceSliderImage;
