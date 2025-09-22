"use client";
import React from "react";
import { useSupportHandlers } from "../../../../hooks/admin/support/useSupportHandlers";
import Badge from "../../../../styles/ui/Badge";
import { cn } from "../../../../lib/utils";
import { MdPriorityHigh } from "react-icons/md";
import { Option } from "./Cart";

interface Props {
  title: string;
  options: Option[];
}

export default function CartTitle({ title, options }: Props) {
  const { getStatusColor, getPriorityColor, getPriorityText } =
    useSupportHandlers();

  return (
    <div className="flex items-center gap-2 mb-2 flex-wrap">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          <Badge variant={getStatusColor(option.items.key)} size="sm">
            {option.items.value}
          </Badge>
          <div
            className={cn(
              "flex items-center gap-1",
              getPriorityColor(option.items.value)
            )}
          >
            <MdPriorityHigh className="w-4 h-4" />
            <span className="text-sm font-medium">
              {getPriorityText(option.title === "" ? option.items.value : "")}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
