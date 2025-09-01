import React from "react";
import { MdAccessTime, MdMessage, MdPeople } from "react-icons/md";
import { ChatRoom } from "../../../../../../../types/adminPanelTypes";

export default function RoomInfo({ room }: { room: ChatRoom }) {
  return (
    <>
      {room.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {room.description}
        </p>
      )}
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <MdPeople className="w-4 h-4" />
          <span>
            {room.participantCount.toLocaleString("fa-IR")} شرکت‌کننده
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MdMessage className="w-4 h-4" />
          <span>{room.messageCount.toLocaleString("fa-IR")} پیام</span>
        </div>
        {room.lastActivity && (
          <div className="flex items-center gap-1">
            <MdAccessTime className="w-4 h-4" />
            <span>
              آخرین فعالیت:{" "}
              {new Date(room.lastActivity).toLocaleDateString("fa-IR", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
