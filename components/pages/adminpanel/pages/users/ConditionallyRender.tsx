"use client";

import React from "react";
import EmptyState from "../../../../common/ui/EmptyState";
import Button from "../../../../common/Button";
import Card from "../../../../common/ui/Card";
import UsersTableList from "./usersTable/UsersTableList";
import { useUsersStates } from "../../../../../hooks/admin/users/useUsersStates";

export default function ConditionallyRender() {
  const {
    setSearchQuery,
    setRoleFilter,
    setStatusFilter,
    viewMode,
    paginatedUsers,
  } = useUsersStates();

  return (
    <>
      {paginatedUsers.length === 0 ? (
        <EmptyState
          title="کاربری یافت نشد"
          description="با فیلترهای انتخاب شده کاربری یافت نشد. فیلترها را تغییر دهید یا کاربر جدید اضافه کنید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setRoleFilter("all");
                setStatusFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : viewMode === "table" ? (
        <Card>
          <div className="overflow-x-auto">
            <UsersTableList />
          </div>
        </Card>
      ) : undefined}
    </>
  );
}
