import React from "react";
import Card from "../../../../../styles/ui/Card";
import {
  MdBlock,
  MdCheckBox,
  MdCheckCircle,
  MdDelete,
  MdDownload,
} from "react-icons/md";
import Button from "../../../../common/Button";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";

export default function SelectedCard() {
  const { selectedUsers, handleBulkAction } = useUsersStates();

  return (
    <Card className="mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <MdCheckBox className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-blue-900 dark:text-blue-100">
              {selectedUsers.size.toLocaleString("fa-IR")} کاربر انتخاب شده
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              عملیات دسته‌جمعی را انتخاب کنید
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleBulkAction("export")}
            className="cursor-pointer"
          >
            <MdDownload className="w-4 h-4 ml-1" />
            خروجی CSV
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleBulkAction("activate")}
            className="cursor-pointer"
          >
            <MdCheckCircle className="w-4 h-4 ml-1" />
            فعال‌سازی
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleBulkAction("suspend")}
            className="cursor-pointer"
          >
            <MdBlock className="w-4 h-4 ml-1" />
            مسدودسازی
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleBulkAction("delete")}
            className="cursor-pointer"
          >
            <MdDelete className="w-4 h-4 ml-1" />
            حذف
          </Button>
        </div>
      </div>
    </Card>
  );
}
