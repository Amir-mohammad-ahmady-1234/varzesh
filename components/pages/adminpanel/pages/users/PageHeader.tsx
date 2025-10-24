"use client";

import React from "react";
import Button from "../../../../common/Button";
import { MdAdd, MdDownload, MdRefresh } from "react-icons/md";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";
import PageHeader from "../../../../common/ui/PageHeader";
import EmptyState from "../../../../common/ui/EmptyState";
import { UserData } from "./pagination/PaginationBtns";

export type UsersResponse = {
  data: UserData[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export interface PageTitleProps {
  users: UsersResponse;
}

export default function PageTitle(users: PageTitleProps) {
  const { exportSelectedUsers } = useUsersStates();

  return (
    <>
      {users.users.data && users.users.data.length < 1 ? (
        <EmptyState title="کاربر یافت نشد" />
      ) : (
        <PageHeader
          title="مدیریت کاربران"
          description={`مدیریت ${users.users.data.length.toLocaleString(
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
              <Button
                variant="outline"
                className="cursor-pointer bg-transparent"
              >
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
      )}
    </>
  );
}
