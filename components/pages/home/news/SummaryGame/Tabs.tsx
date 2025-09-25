import React from "react";

const categories = [1, 2, 3, 4, 5];

interface Props {
  categori: number | null;
  setCategori: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Tabs({ categori, setCategori }: Props) {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-neutral-400 pb-2">
      {categories.map((item) => (
        <button
          onClick={() => setCategori((prev) => (prev === item ? null : item))}
          key={item}
          className={`pb-1 whitespace-nowrap text-sm md:text-base transition-colors duration-200 ${
            categori === item
              ? "border-b-2 border-white text-white font-bold"
              : "border-b-2 border-transparent text-neutral-200 hover:text-white"
          }`}
        >
          دسته بندی {item}
        </button>
      ))}
    </div>
  );
}
