import React from "react";
import TicketOptions from "./TicketCard/TicketOptions";
import Card from "../../../../../styles/ui/Card";
import TicketContent from "./TicketCard/TicketContent";
import TicketTitle from "./TicketCard/TicketTitle";
import { useSupportHandlers } from "../../../../../hooks/admin/useSupportHandlers";
import { useSupportStates } from "../../../../../hooks/admin/useSupportStates";

export default function UsersTickets() {
  const {
    handleTicketClick,
    handleQuickReply,
    getStatusColor,
    getStatusText,
    getPriorityColor,
    getPriorityText,
  } = useSupportHandlers();

  const { paginatedTickets } = useSupportStates();

  return (
    <div className="space-y-4">
      {paginatedTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="hover:shadow-lg transition-all duration-200 border-r-4 rounded-xl"
          style={{
            borderRightColor:
              ticket.priority === "urgent"
                ? "#dc2626"
                : ticket.priority === "high"
                ? "#ea580c"
                : ticket.priority === "medium"
                ? "#ca8a04"
                : "#16a34a",
          }}
        >
          <Card>
            <div className="flex items-start justify-between">
              <TicketContent ticket={ticket}>
                <TicketTitle
                  getPriorityColor={getPriorityColor}
                  getPriorityText={getPriorityText}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                  ticket={ticket}
                />
              </TicketContent>

              <TicketOptions
                handleQuickReply={handleQuickReply}
                handleTicketClick={handleTicketClick}
                ticket={ticket}
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
