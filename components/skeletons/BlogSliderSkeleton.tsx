"use client";
import React from "react";

export default function BlogSliderSkeleton() {
  return (
    <div className="relative">
      <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/20 text-white p-3 rounded-full opacity-30">
        ◀
      </div>
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/20 text-white p-3 rounded-full opacity-30">
        ▶
      </div>

      <div className="flex gap-4 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full sm:w-[300px] md:w-[350px] bg-tertiary-300 rounded-xl p-3 animate-pulse"
          >
            <div className="w-full h-40 bg-tertiary-500/40 rounded-lg mb-3" />
            <div className="h-4 bg-tertiary-500/30 rounded w-3/4 mb-2" />
            <div className="h-3 bg-tertiary-500/20 rounded w-1/2 mb-4" />
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-tertiary-500/30" />
              <div className="h-3 bg-tertiary-500/30 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
