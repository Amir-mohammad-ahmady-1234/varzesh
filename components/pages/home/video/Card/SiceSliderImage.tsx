"use client";
import Image from "next/image";
import React from "react";

interface Card {
  id: number;
  image: string;
  title: string;
  views: number;
  label?: string;
  time: string;
  desc?: string;
}

interface SiceSliderImageProps {
  card: Card;
}

export default function SiceSliderImage({ card }: SiceSliderImageProps) {
  return (
    <div className="group relative border border-primary-100 rounded-3xl shadow-md overflow-hidden bg-tertiary-200 hover:shadow-xl transition-all duration-300 cursor-pointer mb-10">
      <div className="relative w-full h-44 sm:h-48 md:h-40 lg:h-44">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
        />
        {card.label && (
          <span className="absolute top-3 left-3 bg-primary-100 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
            {card.label}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-primary-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6v12h4l5 5V1L8 6H4z"
              />
            </svg>
            {card.views}
          </span>
          <span className="text-neutral-500">{card.time}</span>
        </div>

        <h6 className="text-sm sm:text-md font-bold line-clamp-2 text-neutral-50">
          {card.title}
        </h6>

        {card.desc && (
          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3">
            {card.desc}
          </p>
        )}
      </div>
    </div>
  );
}
