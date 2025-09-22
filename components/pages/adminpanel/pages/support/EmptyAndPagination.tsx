"use client";
import React from "react";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";
import EmptyState from "../../../../../styles/ui/EmptyState";
import Button from "../../../../common/Button";
import Pagination from "./Pagination";

interface Props {
  children: React.ReactNode;
  datas: any;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export default function EmptyAndPagination({
  children,
  datas,
  pagination,
}: Props) {
  const { setSearchQuery, setStatusFilter, setPriorityFilter } =
    useSupportStates();
  if (!pagination) return <p>خطا در دریافت اطلاعات</p>;
  const { totalPages } = pagination;

  return (
    <>
      {datas.length === 0 ? (
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

      {totalPages > 1 && <Pagination pagination={pagination} />}
    </>
  );
}
