"use client";
import React from "react";
import { MdMoreVert, MdReply, MdVisibility } from "react-icons/md";
import { useSupportHandlers } from "../../../../hooks/admin/support/useSupportHandlers";
import Button from "../../Button";

interface Props {
  id: number;
}

export default function CartOptions({ id }: Props) {
  const { handleTicketClick, handleQuickReply } = useSupportHandlers();

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleQuickReply(id.toString());
        }}
        className="cursor-pointer"
      >
        <MdReply className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleTicketClick(id.toString());
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
