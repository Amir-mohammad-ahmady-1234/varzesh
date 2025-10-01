import React from "react";
import { MdAccessTime, MdPerson } from "react-icons/md";
import { MoreDetails } from "./Cart";

interface Props {
  date: Date;
  details?: MoreDetails[];
}

export default function CartDetails({ date, details }: Props) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <MdPerson className="w-4 h-4" />
        {/* <span>{ticket.user.name}</span> */}
      </div>
      <div className="flex items-center gap-1">
        <MdAccessTime className="w-4 h-4" />
        <span suppressHydrationWarning>
          {new Date(date).toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div>
        <div>
          {details?.map((detail) => (
            <span className="px-4" key={detail.items.key}>
              {detail.title === "league" && "لیگ: " + detail.items.value}
              {detail.title === "step" && "مرحله: " + detail.items.value}
            </span>
          ))}
        </div>
      </div>
      {/* {ticket.assignedTo && (
        <div className="flex items-center gap-1">
          <MdCheckCircle className="w-4 h-4" />
          <span>واگذار شده</span>
        </div>
      )} */}
      <div className="flex items-center gap-1">
        {/* <MdMessage className="w-4 h-4" /> */}
        {/* <span>{ticket.messages.length} پاسخ</span> */}
      </div>
    </div>
  );
}
