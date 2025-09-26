import React from "react";
import TicketOptions from "./TicketCard/TicketOptions";
import TicketContent from "./TicketCard/TicketContent";
import TicketTitle from "./TicketCard/TicketTitle";
import { TicketType } from "../../../../../types/adminPanelTypes";
import Card from "../../../../common/ui/Card";

interface Props {
  tickets:
    | TicketType[]
    | {
        error: string;
        status: number;
      };
}

export default async function UsersTickets({ tickets }: Props) {
  if (!Array.isArray(tickets)) return <p>{tickets.error}</p>;

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="hover:shadow-lg transition-all duration-200 border-r-4 rounded-xl"
          style={{
            borderRightColor:
              ticket.priority === "URGENT"
                ? "#dc2626"
                : ticket.priority === "HIGH"
                ? "#ea580c"
                : ticket.priority === "LOW"
                ? "#ca8a04"
                : "#16a34a",
          }}
        >
          <Card>
            <div className="flex items-start justify-between">
              <TicketContent ticket={ticket}>
                <TicketTitle ticket={ticket} />
              </TicketContent>

              <TicketOptions ticket={ticket} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
