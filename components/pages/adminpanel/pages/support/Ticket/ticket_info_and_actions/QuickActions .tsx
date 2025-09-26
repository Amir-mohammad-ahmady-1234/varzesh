import React from "react";
import Button from "../../../../../../common/Button";
import { MdAssignment, MdCheck, MdClose } from "react-icons/md";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";
import Card from "../../../../../../common/ui/Card";

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
          onClick={() => handleStatusChange("Waiting")}
          disabled={ticket?.status === "Waiting"}
        >
          <MdAssignment className="w-4 h-4 ml-2" />
          شروع بررسی
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start cursor-pointer bg-transparent"
          onClick={() => handleStatusChange("Approved")}
          disabled={
            ticket?.status === "Approved" || ticket?.status === "Blocked"
          }
        >
          <MdCheck className="w-4 h-4 ml-2" />
          علامت‌گذاری به عنوان حل شده
        </Button>
        <Button
          variant="destructive"
          className="w-full justify-start cursor-pointer"
          onClick={() => handleStatusChange("Blocked")}
          disabled={ticket?.status === "Blocked"}
        >
          <MdClose className="w-4 h-4 ml-2" />
          بستن تیکت
        </Button>
      </div>
    </Card>
  );
}
