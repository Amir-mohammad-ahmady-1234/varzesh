import React from "react";
import TicketDetails from "./TicketDetails";
import { TicketType } from "../../../../../../types/adminPanelTypes";
import GetProfileDataUser from "../../../../../../server/user/paneluser/profile/GetProfileDataUser";

interface Props {
  ticket: TicketType;
  children: React.ReactNode;
}

export default async function TicketContent({ children, ticket }: Props) {
  const { user } = await GetProfileDataUser(ticket.userId);

  return (
    <div className="flex items-start gap-4 flex-1">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
        {user?.firstname.charAt(0)}
      </div>

      <div className="flex-1 min-w-0">
        {children}

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {ticket.description}
        </p>

        <TicketDetails ticket={ticket} />
      </div>
    </div>
  );
}
