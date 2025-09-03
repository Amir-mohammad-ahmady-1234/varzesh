import React from "react";
import Badge from "../../../../../../styles/ui/Badge";
import { MdPriorityHigh } from "react-icons/md";
import { cn } from "../../../../../../lib/utils";
import { SupportTicket } from "../../../../../../types/adminPanelTypes";

interface Props {
  getStatusColor: (
    status: string
  ) => "secondary" | "success" | "warning" | "error";
  getStatusText: (status: string) => string;
  getPriorityColor: (
    priority: string
  ) =>
    | "text-red-600"
    | "text-orange-600"
    | "text-yellow-600"
    | "text-green-600"
    | "text-gray-500";
  getPriorityText: (priority: string) => string;
  ticket: SupportTicket;
}

export default function TicketTitle({
  getStatusColor,
  getStatusText,
  getPriorityColor,
  getPriorityText,
  ticket,
}: Props) {
  return (
    <div className="flex items-center gap-2 mb-2 flex-wrap">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        {ticket.subject}
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
