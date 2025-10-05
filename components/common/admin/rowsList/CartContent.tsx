import React from "react";
import TicketDetails from "./CartDetails";
import { MoreDetails } from "./Cart";

interface Props {
  children: React.ReactNode;
  userid?: number;
  desc: string;
  date: Date;
  details?: MoreDetails[];
}

export default function CartContent({
  children,
  userid,
  desc,
  date,
  details,
}: Props) {
  return (
    <div className="flex items-start gap-4 flex-1 overflow-hidden">
      {/* آواتار / دایره‌ی کاربر */}
      <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
        {userid}
      </div>

      {/* محتوا */}
      <div className="flex-1 min-w-0 overflow-hidden">
        {children}

        <p
          className="
            text-sm text-gray-600 dark:text-gray-400 mb-3 
            break-words break-all whitespace-normal 
            line-clamp-2 overflow-hidden
          "
        >
          {desc}
        </p>

        <TicketDetails date={date} details={details} />
      </div>
    </div>
  );
}
