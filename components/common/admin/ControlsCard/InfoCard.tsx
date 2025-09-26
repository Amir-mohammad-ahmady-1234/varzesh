import React from "react";
import { ChatRoom } from "../../../../types/adminPanelTypes";
import { Message } from "../../../../app/admin/chat-rooms/[id]/page";
import Card from "../../ui/Card";

interface Props {
  room: ChatRoom;
  messages: Message[];
}

export default function InfoCard({ room, messages }: Props) {
  return (
    <Card>
      <h3 className="font-semibold text-foreground mb-4">آمار روم</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">شرکت‌کنندگان:</span>
          <span className="text-sm font-medium">
            {room.participantCount.toLocaleString("fa-IR")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">کل پیام‌ها:</span>
          <span className="text-sm font-medium">
            {room.messageCount.toLocaleString("fa-IR")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            پیام‌های گزارش شده:
          </span>
          <span className="text-sm font-medium text-red-600">
            {messages
              .filter((m) => m.isReported)
              .length.toLocaleString("fa-IR")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            پیام‌های حذف شده:
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {messages.filter((m) => m.isDeleted).length.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </Card>
  );
}
