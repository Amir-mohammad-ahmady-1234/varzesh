"use client";
import React from "react";
import { MdPriorityHigh } from "react-icons/md";
import { cn } from "../../../../../../lib/utils";
import { TicketType } from "../../../../../../types/adminPanelTypes";
import { useSupportHandlers } from "../../../../../../hooks/admin/support/useSupportHandlers";
import Badge from "../../../../../common/ui/Badge";

interface Props {
  ticket: TicketType;
}

export default function TicketTitle({ ticket }: Props) {
  const { getStatusColor, getStatusText, getPriorityColor, getPriorityText } =
    useSupportHandlers();

  return (
    <div className="flex items-center gap-2 mb-2 flex-wrap">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        {ticket.title}
      </h3>
      <Badge variant={getStatusColor(ticket.status)} size="sm">
        {getStatusText(ticket.status)}
      </Badge>
      <div
        className={cn(
          "flex items-center gap-1",
          getPriorityColor(ticket.priority)
        )}
      >
        <MdPriorityHigh className="w-4 h-4" />
        <span className="text-sm font-medium">
          {getPriorityText(ticket.priority)}
        </span>
      </div>
    </div>
  );
}
