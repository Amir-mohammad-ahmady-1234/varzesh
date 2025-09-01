import React from "react";
import Badge from "../../../../../../../styles/ui/Badge";
import { ChatRoom } from "../../../../../../../types/adminPanelTypes";

interface Props {
  room: ChatRoom;
}

const getStatusText = (status: string) => {
  return status === "active" ? "فعال" : "غیرفعال";
};

const getTypeText = (type: string) => {
  switch (type) {
    case "game":
      return "بازی";
    case "general":
      return "عمومی";
    case "private":
      return "خصوصی";
    default:
      return type;
  }
};

export default function RoomTitle({ room }: Props) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        {room.name}
      </h3>
      <Badge
        variant={room.status === "active" ? "success" : "secondary"}
        size="sm"
      >
        {getStatusText(room.status)}
      </Badge>
      <Badge variant="secondary" size="sm">
        {getTypeText(room.type || "general")}
      </Badge>
    </div>
  );
}
