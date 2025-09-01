import React from "react";

const filterSortTitle = ["وضعیت:", "نوع:", "مرتب سازی:"];

export default function FilterSortBy() {
  return (
    <div className="flex flex-wrap gap-4">
      {filterSortTitle.map((title) => (
        <div key={title} className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
