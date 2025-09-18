import React from "react";
import {
  MdAccessTime,
  MdMessage,
  MdPerson,
} from "react-icons/md";
import { $Enums } from "@prisma/client";

export default function TicketDetails({
  ticket,
}: {
  ticket: {
    createdAt: Date;
    priority: $Enums.Priority;
    status: $Enums.Status;
    id: number;
    title: string;
    updatedAt: Date;
    description: string | null;
    userId: number;
  };
}) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <MdPerson className="w-4 h-4" />
        {/* <span>{ticket.user.name}</span> */}
      </div>
      <div className="flex items-center gap-1">
        <MdAccessTime className="w-4 h-4" />
        <span>
          {new Date(ticket.createdAt).toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      {/* {ticket.assignedTo && (
        <div className="flex items-center gap-1">
          <MdCheckCircle className="w-4 h-4" />
          <span>واگذار شده</span>
        </div>
      )} */}
      <div className="flex items-center gap-1">
        <MdMessage className="w-4 h-4" />
        {/* <span>{ticket.messages.length} پاسخ</span> */}
      </div>
    </div>
  );
}
