"use client";
import React from "react";
import Button from "../../../../../common/Button";
import { MdMoreVert, MdReply, MdVisibility } from "react-icons/md";
import { TicketType } from "../../../../../../types/adminPanelTypes";
import { useSupportHandlers } from "../../../../../../hooks/admin/support/useSupportHandlers";

interface Props {
  ticket: TicketType;
}

export default function TicketOptions({ ticket }: Props) {
  const { handleTicketClick, handleQuickReply } = useSupportHandlers();

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleQuickReply(ticket.id.toString());
        }}
        className="cursor-pointer"
      >
        <MdReply className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleTicketClick(ticket.id.toString());
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
