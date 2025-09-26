import React from "react";
import { cn } from "../../../../../../../lib/utils";
import { Message } from "../../../../../../../app/admin/chat-rooms/[id]/page";
import Badge from "../../../../../../common/ui/Badge";

export default function MessageContent({ message }: { message: Message }) {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-medium text-foreground">{message.username}</span>
        <span className="text-xs text-muted-foreground">
          {formatTime(message.timestamp)}
        </span>
        {message.isReported && (
          <Badge variant="warning" className="text-xs">
            گزارش شده
          </Badge>
        )}
        {message.isDeleted && (
          <Badge variant="secondary" className="text-xs">
            حذف شده
          </Badge>
        )}
      </div>
      <p
        className={cn(
          "text-sm",
          message.isDeleted
            ? "line-through text-muted-foreground"
            : "text-foreground"
        )}
      >
        {message.content}
      </p>
    </div>
  );
}
