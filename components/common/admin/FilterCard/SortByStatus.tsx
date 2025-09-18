import React, { SetStateAction } from "react";
import Button from "../../Button";

interface Props {
  statusFilter?: "all" | "open" | "in-progress" | "resolved" | "closed";
  setStatusFilter?: React.Dispatch<
    SetStateAction<"all" | "open" | "in-progress" | "resolved" | "closed">
  >;
  getStatusText?: (status: string) => string;
}

export default function SortByStatus({
  statusFilter,
  setStatusFilter,
  getStatusText,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        وضعیت:
      </span>
      {["all", "open", "in-progress", "resolved", "closed"].map((status) => (
        <Button
          key={status}
          variant={statusFilter === status ? "primary" : "outline"}
          size="sm"
          onClick={() =>
            setStatusFilter?.(
              status as "all" | "open" | "in-progress" | "resolved" | "closed"
            )
          }
          className="cursor-pointer"
        >
          {status === "all" ? "همه" : getStatusText?.(status)}
        </Button>
      ))}
    </div>
  );
}
