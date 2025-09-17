import React from "react";
import Badge from "../../../../../../../../styles/ui/Badge";
import { useTicketHandlers } from "../../../../../../../../hooks/admin/support/useTicketHandlers";
import { useTicketStates } from "../../../../../../../../hooks/admin/support/useTicketStates";

export default function InitialTicketMessage() {
  const { ticket } = useTicketStates();
  const { formatTime } = useTicketHandlers();

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
        {ticket?.user.name.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {ticket?.user.name}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {formatTime(ticket?.createdAt ?? "مشخص نشده")}
          </span>
          <Badge variant="secondary" className="text-xs">
            تیکت اولیه
          </Badge>
        </div>
        <p className="text-sm text-gray-900 dark:text-gray-100">
          {ticket?.content}
        </p>
      </div>
    </div>
  );
}
