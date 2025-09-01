import React, { SetStateAction } from "react";
import { Message } from "../../../../../../../app/admin/chat-rooms/[id]/page";
import { MdDelete, MdMoreVert, MdReport } from "react-icons/md";

interface Props {
  message: Message;
  setMessages: React.Dispatch<SetStateAction<Message[]>>;
}

export default function MessageOptions({ message, setMessages }: Props) {
  const handleDeleteMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isDeleted: true } : msg
      )
    );
  };

  const handleReportMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isReported: true } : msg
      )
    );
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleReportMessage(message.id)}
        className="p-1 hover:bg-accent rounded cursor-pointer"
        title="گزارش پیام"
      >
        <MdReport className="w-4 h-4 text-muted-foreground" />
      </button>
      <button
        onClick={() => handleDeleteMessage(message.id)}
        className="p-1 hover:bg-accent rounded cursor-pointer"
        title="حذف پیام"
      >
        <MdDelete className="w-4 h-4 text-muted-foreground" />
      </button>
      <button className="p-1 hover:bg-accent rounded cursor-pointer">
        <MdMoreVert className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
}
