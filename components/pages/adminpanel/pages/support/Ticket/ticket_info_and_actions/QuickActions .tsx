import React from "react";
import Card from "../../../../../../../styles/ui/Card";
import Button from "../../../../../../common/Button";
import { MdAssignment, MdCheck, MdClose } from "react-icons/md";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";

export default function QuickActions() {
  const { ticket } = useTicketStates();
  const { handleStatusChange } = useTicketHandlers();

  return (
    <Card>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
        عملیات سریع
      </h3>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start cursor-pointer bg-transparent"
          onClick={() => handleStatusChange("in-progress")}
          disabled={ticket?.status === "in-progress"}
        >
          <MdAssignment className="w-4 h-4 ml-2" />
          شروع بررسی
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start cursor-pointer bg-transparent"
          onClick={() => handleStatusChange("resolved")}
          disabled={
            ticket?.status === "resolved" || ticket?.status === "closed"
          }
        >
          <MdCheck className="w-4 h-4 ml-2" />
          علامت‌گذاری به عنوان حل شده
        </Button>
        <Button
          variant="destructive"
          className="w-full justify-start cursor-pointer"
          onClick={() => handleStatusChange("closed")}
          disabled={ticket?.status === "closed"}
        >
          <MdClose className="w-4 h-4 ml-2" />
          بستن تیکت
        </Button>
      </div>
    </Card>
  );
}
