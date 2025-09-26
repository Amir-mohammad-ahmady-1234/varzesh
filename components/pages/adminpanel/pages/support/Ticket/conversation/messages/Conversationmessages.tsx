import React from "react";
import { cn } from "../../../../../../../../lib/utils";
import { useTicketStates } from "../../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../../hooks/admin/support/useTicketHandlers";
import Badge from "../../../../../../../common/ui/Badge";

export default function Conversationmessages() {
  const { ticket } = useTicketStates();
  const { formatTime } = useTicketHandlers();

  return (
    <>
      {ticket?.messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex items-start gap-3 p-4 rounded-lg",
            message.isInternal
              ? "bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800"
              : message.userId === "admin"
              ? "bg-blue-50 dark:bg-blue-950/20"
              : "bg-gray-50 dark:bg-gray-800"
          )}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {message.user.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {message.user.name}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {formatTime(message.createdAt)}
              </span>
              {message.isInternal && (
                <Badge variant="warning" className="text-xs">
                  یادداشت داخلی
                </Badge>
              )}
              {message.userId === "admin" && !message.isInternal && (
                <Badge variant="primary" className="text-xs">
                  پشتیبانی
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              {message.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
