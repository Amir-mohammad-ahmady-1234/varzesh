import React from "react";

export default function LastNewsSkeleton() {
  return (
    <div className="flex flex-col p-4 md:p-6 space-y-4 bg-tertiary-300 rounded-md">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-pulse"
        >
          <div className="w-[70px] h-[70px] rounded-md bg-tertiary-500/50 flex-shrink-0" />

          <div className="flex flex-col space-y-2 w-full">
            <div className="w-3/4 h-4 bg-tertiary-500/40 rounded-md" />
            <div className="w-1/2 h-3 bg-tertiary-500/30 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
