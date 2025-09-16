import React from "react";
import Button from "../../../../../../common/Button";
import { MdDownload, MdNote } from "react-icons/md";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";

export default function ConversationHeader() {
  const { ticket, setShowInternalNote, showInternalNote } = useTicketStates();
  const { exportConversation } = useTicketHandlers();

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
          {ticket?.user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {ticket?.user.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {ticket?.user.email}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={exportConversation}
          className="cursor-pointer bg-transparent"
        >
          <MdDownload className="w-4 h-4 ml-1" />
          خروجی
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowInternalNote(!showInternalNote)}
          className="cursor-pointer"
        >
          <MdNote className="w-4 h-4 ml-1" />
          یادداشت
        </Button>
      </div>
    </div>
  );
}
