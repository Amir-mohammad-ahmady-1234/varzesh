import React, { SetStateAction } from "react";
import { cn } from "../../../../../../../lib/utils";
import { Message } from "../../../../../../../app/admin/chat-rooms/[id]/page";

interface Props {
  children: React.ReactNode;
  message: Message;
  setSelectedMessages: React.Dispatch<SetStateAction<Set<string>>>;
  selectedMessages: Set<string>;
}

export default function ChatMessages({
  children,
  message,
  setSelectedMessages,
  selectedMessages,
}: Props) {
  const toggleMessageSelection = (messageId: string) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(messageId)) {
      newSelected.delete(messageId);
    } else {
      newSelected.add(messageId);
    }
    setSelectedMessages(newSelected);
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg transition-colors",
        message.isDeleted && "opacity-50",
        message.isReported && "bg-red-50 dark:bg-red-950/20",
        selectedMessages.has(message.id) && "bg-primary/10"
      )}
    >
      <input
        type="checkbox"
        checked={selectedMessages.has(message.id)}
        onChange={() => toggleMessageSelection(message.id)}
        className="mt-1 cursor-pointer"
      />

      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
        {message.username.charAt(0)}
      </div>

      {children}
    </div>
  );
}
