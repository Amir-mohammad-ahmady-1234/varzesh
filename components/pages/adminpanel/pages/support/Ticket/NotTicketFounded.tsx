import React from "react";
import Button from "../../../../../common/Button";
import { useTicketStates } from "../../../../../../hooks/admin/support/useTicketStates";

export default function NotTicketFounded() {
  const { router } = useTicketStates();

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          تیکت یافت نشد
        </h2>
        <Button onClick={() => router.back()} className="cursor-pointer">
          بازگشت
        </Button>
      </div>
    </div>
  );
}
