"use client";
import React from "react";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";
import EmptyState from "../../../../../styles/ui/EmptyState";
import Button from "../../../../common/Button";
import Pagination from "./Pagination";

export default function EmptyAndPagination({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    totalPages,
    paginatedTickets,
  } = useSupportStates();

  return (
    <>
      {paginatedTickets.length === 0 ? (
        <EmptyState
          title="تیکت پشتیبانی یافت نشد"
          description="با فیلترهای انتخاب شده تیکت پشتیبانی یافت نشد. فیلترها را تغییر دهید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setPriorityFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : (
        children
      )}

      {totalPages > 0 && <Pagination />}
    </>
  );
}
