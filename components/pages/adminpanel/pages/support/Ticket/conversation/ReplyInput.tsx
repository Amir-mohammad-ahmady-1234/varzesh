import React from "react";
import Input from "../../../../../../common/Input";
import Button from "../../../../../../common/Button";
import { MdSend } from "react-icons/md";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";

export default function ReplyInput() {
  const { handleSendReply } = useTicketHandlers();
  const { replyMessage, setReplyMessage } = useTicketStates();

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="پاسخ به کاربر..."
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter" && replyMessage.trim()) {
              handleSendReply();
            }
          }}
        />
        <Button
          onClick={handleSendReply}
          disabled={!replyMessage.trim()}
          className="cursor-pointer"
        >
          <MdSend className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
