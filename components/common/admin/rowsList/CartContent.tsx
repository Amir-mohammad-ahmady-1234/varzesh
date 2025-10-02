import React from "react";
import TicketDetails from "./CartDetails";
import GetProfileDataUser from "../../../../server/user/paneluser/profile/GetProfileDataUser";
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
    <div className="flex items-start gap-4 flex-1">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
        {/* {user?.firstname.charAt(0)} */}
        {userid}
      </div>

      <div className="flex-1 min-w-0">
        {children}

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {desc}
        </p>

        <TicketDetails date={date} details={details} />
      </div>
    </div>
  );
}
