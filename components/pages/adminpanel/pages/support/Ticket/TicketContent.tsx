"use client";

import React from "react";
import ConversationHeader from "./conversation/ConversationHeader";
import Messages from "./conversation/messages/Messages";
import InternalNote from "./conversation/InternalNote";
import ReplyInput from "./conversation/ReplyInput";
import TicketInfo from "./ticket_info_and_actions/TicketInfo";
import QuickActions from "./ticket_info_and_actions/QuickActions ";
import UserInfo from "./ticket_info_and_actions/UserInfo";
import { useTicketStates } from "../../../../../../hooks/admin/support/useTicketStates";
import Card from "../../../../../common/ui/Card";

export default function TicketContent() {
  const { showInternalNote, ticket } = useTicketStates();

  if (!ticket) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Conversation */}
      <div className="lg:col-span-3">
        <Card className="h-[600px] flex flex-col">
          <ConversationHeader />

          <Messages />

          {showInternalNote && <InternalNote />}

          <ReplyInput />
        </Card>
      </div>

      {/* Ticket Info & Actions */}
      <div className="space-y-4">
        <TicketInfo />

        <QuickActions />

        <UserInfo />
      </div>
    </div>
  );
}
