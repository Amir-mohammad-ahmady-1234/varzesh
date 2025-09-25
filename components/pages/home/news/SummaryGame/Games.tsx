import Image from "next/image";
import React from "react";
import { games } from "../../../../../mocks/home/games-summary/GameSummary";

export default function Games({ categori }: { categori: number | null }) {
  if (!categori) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {games
        .filter((game) => game.categori === +categori)
        .map((game) => (
          <article
            key={game.id}
            className="border gap-4 rounded-lg text-neutral-100 shadow hover:shadow-lg transition overflow-hidden flex flex-col w-full"
          >
            <div className="relative w-full h-40">
              <Image
                src={game.src}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-3">
              <div className="flex items-center justify-between mb-2 text-xs md:text-sm">
                <span className="px-2 py-0.5 border border-gray-300 rounded font-medium">
                  {game.league}
                </span>
                <div className="flex items-center gap-2">
                  <span>{game.time}</span>
                  <span>{game.views} بازدید</span>
                </div>
              </div>

              <p className="font-semibold text-sm md:text-base  line-clamp-2 text-right">
                {game.title}
              </p>
            </div>
          </article>
        ))}
    </div>
  );
}
