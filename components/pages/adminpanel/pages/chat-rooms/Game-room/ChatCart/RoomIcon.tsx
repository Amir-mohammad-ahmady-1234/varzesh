import React from "react";
import { cn } from "../../../../../../../lib/utils";
import { MdChat, MdPeople, MdSportsFootball } from "react-icons/md";
import { ChatRoom } from "../../../../../../../types/adminPanelTypes";

const getTypeIcon = (type: string) => {
  switch (type) {
    case "game":
      return MdSportsFootball;
    case "general":
      return MdChat;
    case "private":
      return MdPeople;
    default:
      return MdChat;
  }
};

interface Props {
  room: ChatRoom;
  isLiveMode: boolean;
}

export default function RoomIcon({ room, isLiveMode }: Props) {
  const TypeIcon = getTypeIcon(room.type || "general");

  return (
    <div className="relative">
      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-sm">
        <TypeIcon className="w-6 h-6 text-white" />
      </div>
      <div
        className={cn(
          "absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
          room.status === "active" ? "bg-green-500" : "bg-gray-400"
        )}
      >
        {isLiveMode && room.status === "active" && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
        )}
      </div>
    </div>
  );
}
