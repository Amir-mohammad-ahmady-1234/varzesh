import React from "react";
import Card from "../../../../../../styles/ui/Card";
import ConversationHeader from "./conversation/ConversationHeader";
import Messages from "./conversation/messages/Messages";
import InternalNote from "./conversation/InternalNote";
import ReplyInput from "./conversation/ReplyInput";
import TicketInfo from "./ticket_info_and_actions/TicketInfo";
import QuickActions from "./ticket_info_and_actions/QuickActions ";
import UserInfo from "./ticket_info_and_actions/UserInfo";

export default function TicketContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Conversation */}
      <div className="lg:col-span-3">
        <Card className="h-[600px] flex flex-col">
          <ConversationHeader />

          <Messages />

          <InternalNote />

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
