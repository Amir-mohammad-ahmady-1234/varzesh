"use client";

import React from "react";
import EmptyState from "../../../../common/ui/EmptyState";
import Button from "../../../../common/Button";
import Card from "../../../../common/ui/Card";
import UsersTableList from "./usersTable/UsersTableList";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";
import { PageTitleProps } from "./PageHeader";

export default function ConditionallyRender({ users }: PageTitleProps) {
  const { viewMode } = useUsersStates();

  return (
    <>
      {users.data.length === 0 ? (
        <EmptyState
          title="کاربری یافت نشد"
          description="با فیلترهای انتخاب شده کاربری یافت نشد. فیلترها را تغییر دهید یا کاربر جدید اضافه کنید."
          action={<Button className="cursor-pointer">پاک کردن فیلترها</Button>}
        />
      ) : viewMode === "table" ? (
        <Card>
          <div className="overflow-x-auto">
            <UsersTableList users={users} />
          </div>
        </Card>
      ) : undefined}
    </>
  );
}
