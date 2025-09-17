import React from "react";
import Button from "../../Button";
import { MdSort } from "react-icons/md";

interface Props {
  sortBy: "createdAt" | "priority" | "status" | "subject";
  handleSort: (column: "createdAt" | "priority" | "status" | "subject") => void;
  sortOrder: "desc" | "asc";
}

export default function Sort({ sortBy, handleSort, sortOrder }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        مرتب‌سازی:
      </span>
      <Button
        variant={sortBy === "createdAt" ? "primary" : "outline"}
        size="sm"
        onClick={() => handleSort("createdAt")}
        className="cursor-pointer"
      >
        تاریخ
        {sortBy === "createdAt" && (
          <MdSort
            className={`w-4 h-4 mr-1 ${
              sortOrder === "desc" ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>
      <Button
        variant={sortBy === "priority" ? "primary" : "outline"}
        size="sm"
        onClick={() => handleSort("priority")}
        className="cursor-pointer"
      >
        اولویت
        {sortBy === "priority" && (
          <MdSort
            className={`w-4 h-4 mr-1 ${
              sortOrder === "desc" ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>
      <Button
        variant={sortBy === "status" ? "primary" : "outline"}
        size="sm"
        onClick={() => handleSort("status")}
        className="cursor-pointer"
      >
        وضعیت
        {sortBy === "status" && (
          <MdSort
            className={`w-4 h-4 mr-1 ${
              sortOrder === "desc" ? "rotate-180" : ""
            }`}
          />
        )}
      </Button>
    </div>
  );
}
