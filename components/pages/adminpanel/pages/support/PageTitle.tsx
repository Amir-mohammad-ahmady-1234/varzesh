'use client'
import React from "react";
import PageHeader from "../../../../../styles/ui/PageHeader";
import Button from "../../../../common/Button";
import { MdDownload, MdRefresh } from "react-icons/md";
import { useSupportHandlers } from "../../../../../hooks/admin/support/useSupportHandlers";

export default function PageTitle({ totalsupport }: { totalsupport: number }) {
  const { exportToCSV } = useSupportHandlers();

  return (
    <PageHeader
      title="مدیریت پشتیبانی"
      description={`مدیریت ${totalsupport?.toLocaleString(
        "fa-IR"
      )} تیکت پشتیبانی و درخواست‌های کاربران`}
      action={
        <div className="flex items-center gap-2">
          <Button
            onClick={exportToCSV}
            variant="outline"
            className="cursor-pointer bg-transparent"
          >
            <MdDownload className="w-4 h-4 ml-2" />
            خروجی CSV
          </Button>
          <Button variant="outline" className="cursor-pointer bg-transparent">
            <MdRefresh className="w-4 h-4 ml-2" />
            بروزرسانی
          </Button>
        </div>
      }
    />
  );
}
