import React from "react";
import { MdMessage, MdPeople } from "react-icons/md";
import { ChatRoom } from "../../../../../../../types/adminPanelTypes";

interface Props {
  children: React.ReactNode;
  room: ChatRoom;
}

export default function ChatHeader({ children, room }: Props) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MdPeople className="w-4 h-4" />
          <span>
            {room.participantCount.toLocaleString("fa-IR")} شرکت‌کننده
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MdMessage className="w-4 h-4" />
          <span>{room.messageCount.toLocaleString("fa-IR")} پیام</span>
        </div>
      </div>

      {children}
    </div>
  );
}
