import React from "react";
import {} from "react-icons/md";
import { SupportTicket } from "../../../../../../types/adminPanelTypes";
import TicketDetails from "./TicketDetails";

interface Props {
  ticket: SupportTicket;
  children: React.ReactNode;
}

export default function TicketContent({ children, ticket }: Props) {
  return (
    <div className="flex items-start gap-4 flex-1">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
        {ticket.user.name.charAt(0)}
      </div>

      <div className="flex-1 min-w-0">
        {children}

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {ticket.content}
        </p>

        <TicketDetails ticket={ticket} />
      </div>
    </div>
  );
}
