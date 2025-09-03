import React from "react";
import Button from "../../../../../common/Button";
import { MdMoreVert, MdReply, MdVisibility } from "react-icons/md";
import { SupportTicket } from "../../../../../../types/adminPanelTypes";

interface Props {
  handleQuickReply: (ticketId: string) => void;
  handleTicketClick: (ticketId: string) => void;
  ticket: SupportTicket;
}

export default function TicketOptions({
  handleQuickReply,
  handleTicketClick,
  ticket,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleQuickReply(ticket.id);
        }}
        className="cursor-pointer"
      >
        <MdReply className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleTicketClick(ticket.id);
        }}
        className="cursor-pointer"
      >
        <MdVisibility className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          // Handle more options
        }}
        className="cursor-pointer"
      >
        <MdMoreVert className="w-4 h-4" />
      </Button>
    </div>
  );
}
