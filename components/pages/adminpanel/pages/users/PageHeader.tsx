"use client";

import React from "react";
import Button from "../../../../common/Button";
import { MdAdd, MdDownload, MdRefresh } from "react-icons/md";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";
import PageHeader from "../../../../common/ui/PageHeader";

export default function PageTitle() {
  const { filteredUsers, exportSelectedUsers } = useUsersStates();

  return (
    <PageHeader
      title="مدیریت کاربران"
      description={`مدیریت ${filteredUsers.length.toLocaleString(
        "fa-IR"
      )} حساب کاربری، نقش‌ها و دسترسی‌ها`}
      action={
        <div className="flex items-center gap-2">
          <Button
            onClick={() => exportSelectedUsers()}
            variant="outline"
            className="cursor-pointer"
          >
            <MdDownload className="w-4 h-4 ml-2" />
            خروجی CSV
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdRefresh className="w-4 h-4 ml-2" />
            بروزرسانی
          </Button>
          <Button className="cursor-pointer">
            <MdAdd className="w-4 h-4 ml-2" />
            کاربر جدید
          </Button>
        </div>
      }
    />
  );
}
