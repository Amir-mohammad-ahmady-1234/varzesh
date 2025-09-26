import React from "react";
import { MdEmail, MdPerson } from "react-icons/md";
import Button from "../../../../../../common/Button";
import { useTicketStates } from "../../../../../../../hooks/admin/support/useTicketStates";
import Card from "../../../../../../common/ui/Card";

export default function UserInfo() {
  const { ticket } = useTicketStates();

  return (
    <Card>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
        اطلاعات کاربر
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MdPerson className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm">{ticket?.user.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm">{ticket?.user.email}</span>
        </div>
        <Button
          variant="outline"
          className="w-full cursor-pointer bg-transparent"
        >
          مشاهده پروفایل کاربر
        </Button>
      </div>
    </Card>
  );
}
