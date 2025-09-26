import React from "react";
import { cn } from "../../../../../../../lib/utils";
import { MdPriorityHigh } from "react-icons/md";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../../hooks/admin/support/useTicketHandlers";
import Card from "../../../../../../common/ui/Card";
import Badge from "../../../../../../common/ui/Badge";

export default function TicketInfo() {
  const { ticket } = useTicketStates();
  const {
    getStatusColor,
    getStatusText,
    getPriorityText,
    formatTime,
    getPriorityColor,
  } = useTicketHandlers();

  return (
    <Card>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
        اطلاعات تیکت
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            وضعیت:
          </span>
          <Badge variant={getStatusColor(ticket?.status ?? "مشخص نشده")}>
            {getStatusText(ticket?.status ?? "مشخص نشده")}
          </Badge>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            اولویت:
          </span>
          <div
            className={cn(
              "flex items-center gap-1",
              getPriorityColor(ticket?.priority ?? "مشخص نشده")
            )}
          >
            <MdPriorityHigh className="w-4 h-4" />
            <span className="text-sm font-medium">
              {getPriorityText(ticket?.priority ?? "مشخص نشده")}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ایجاد:
          </span>
          <span className="text-sm">
            {formatTime(ticket?.createdAt ?? "مشخص نشده")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            آخرین بروزرسانی:
          </span>
          <span className="text-sm">
            {formatTime(ticket?.updatedAt ?? "مشخص نشده")}
          </span>
        </div>
        {ticket?.assignedTo && (
          <div className="flex justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              واگذار شده به:
            </span>
            <span className="text-sm">{ticket?.assignedTo}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
