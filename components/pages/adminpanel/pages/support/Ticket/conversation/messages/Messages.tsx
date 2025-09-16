import React from "react";
import InitialTicketMessage from "./InitialTicketMessage";
import Conversationmessages from "./Conversationmessages";
import { useTicketStates } from "../../../../../../../../hooks/admin/support/useTicketStates";

export default function Messages() {
  const { messagesEndRef } = useTicketStates();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <InitialTicketMessage />

      {/* Conversation messages */}
      <Conversationmessages />
      <div ref={messagesEndRef} />
    </div>
  );
}
