"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { $Enums } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CiPlay1 } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaStop } from "react-icons/fa";

interface PodcastType {
  id: number;
  createdAt: Date;
  title: string;
  description: string;
  img: string;
  category: $Enums.PodcastCategory;
  summary: string;
  audioUrl: string;
}

export default function PodcastsListSlider({
  podcasts,
}: {
  podcasts: PodcastType[];
}) {
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});
  const [musicId, setMusicId] = useState<null | number>(null);

  const handleMusic = (id: number) => {
    const currentAudio = audioRefs.current[id];

    if (musicId === id) {
      currentAudio?.pause();
      setMusicId(null);
    } else {
      Object.values(audioRefs.current).forEach((audio) => {
        audio?.pause();
        audio!.currentTime = 0;
      });

      currentAudio?.play();
      setMusicId(id);
    }
  };

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {podcasts.map((podcast) => {
        return (
          <SwiperSlide key={podcast.id}>
            <div className="flex flex-col bg-tertiary-300 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all h-full max-w-sm mx-auto">
              <div className="relative w-full aspect-square">
                <Image
                  src={podcast.img}
                  alt={podcast.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <button
                  onClick={() => handleMusic(podcast.id)}
                  className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 text-neutral-100 text-4xl opacity-0 hover:opacity-100 transition"
                >
                  <CiPlay1 />
                </button>
              </div>

              <div className="flex flex-col flex-1 w-full p-3 gap-2">
                <h6 className="text-base font-semibold text-primary-100 line-clamp-1">
                  {podcast.title}
                </h6>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {podcast.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <button
                    onClick={() => handleMusic(podcast.id)}
                    className="flex cursor-pointer items-center gap-2 text-xs bg-primary-100 text-neutral-100 px-3 py-1.5 rounded-full hover:bg-primary-200 transition"
                  >
                    {musicId === podcast.id ? (
                      <>
                        <FaStop /> توقف
                      </>
                    ) : (
                      <>
                        <CiPlay1 className="text-sm" /> پخش
                      </>
                    )}
                  </button>
                  <FcLike className="text-lg cursor-pointer hover:scale-110 transition" />
                </div>
              </div>

              <audio
                ref={(el) => {
                  audioRefs.current[podcast.id] = el;
                }}
                src={podcast.audioUrl}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
