import React, { SetStateAction } from "react";
import Button from "../../Button";

interface Props {
  priorityFilter: "all" | "urgent" | "high" | "medium" | "low";
  setPriorityFilter: React.Dispatch<
    SetStateAction<"all" | "urgent" | "high" | "medium" | "low">
  >;
  getPriorityText: (priority: string) => string;
}

export default function SortByPriority({
  priorityFilter,
  setPriorityFilter,
  getPriorityText,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        اولویت:
      </span>
      {["all", "urgent", "high", "medium", "low"].map((priority) => (
        <Button
          key={priority}
          variant={priorityFilter === priority ? "primary" : "outline"}
          size="sm"
          onClick={() =>
            setPriorityFilter(
              priority as "all" | "urgent" | "high" | "medium" | "low"
            )
          }
          className="cursor-pointer"
        >
          {priority === "all" ? "همه" : getPriorityText(priority)}
        </Button>
      ))}
    </div>
  );
}
