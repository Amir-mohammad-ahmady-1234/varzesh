import React from "react";
import Button from "../../../../../common/Button";
import { MdArrowBack } from "react-icons/md";
import { useTicketStates } from "../../../../../../hooks/admin/support/useTicketStates";
import { useTicketHandlers } from "../../../../../../hooks/admin/support/useTicketHandlers";
import PageHeader from "../../../../../common/ui/PageHeader";
import Badge from "../../../../../common/ui/Badge";

export default function TicketHeader() {
  const { ticket, router } = useTicketStates();
  const { getStatusColor, getStatusText } = useTicketHandlers();

  return (
    <PageHeader
      title={`تیکت #${ticket?.id}`}
      description={ticket?.subject}
      action={
        <div className="flex items-center gap-2">
          <Badge variant={getStatusColor(ticket?.status ?? "مشخص نشده")}>
            {getStatusText(ticket?.status ?? "مشخص نشده")}
          </Badge>
          <Button
            variant="outline"
            onClick={() => router.push("/admin/support")}
            className="cursor-pointer"
          >
            <MdArrowBack className="w-4 h-4 ml-2" />
            بازگشت
          </Button>
        </div>
      }
    />
  );
}
