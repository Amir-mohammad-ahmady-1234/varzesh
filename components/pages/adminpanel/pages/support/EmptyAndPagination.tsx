"use client";
import React from "react";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";
import EmptyState from "../../../../../styles/ui/EmptyState";
import Button from "../../../../common/Button";
import Pagination from "./Pagination";
import { TicketType } from "../../../../../types/adminPanelTypes";

interface Props {
  children: React.ReactNode;
  tickets: TicketType[];
}

export default function EmptyAndPagination({ children, tickets }: Props) {
  const { setSearchQuery, setStatusFilter, setPriorityFilter, totalPages } =
    useSupportStates();

  return (
    <>
      {tickets.length === 0 ? (
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
