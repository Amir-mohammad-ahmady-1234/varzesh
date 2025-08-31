import React from "react";
import PageHeader from "../../../../../styles/ui/PageHeader";
import Button from "../../../../common/Button";
import { MdDownload, MdRefresh } from "react-icons/md";
import Badge from "../../../../../styles/ui/Badge";

export default function DashPageHeader() {
  return (
    <PageHeader
      title="داشبورد"
      description="نمای کلی از عملکرد سیستم و آمار کلیدی"
      action={
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <MdRefresh className="w-4 h-4" />
            بروزرسانی
          </Button>
          <Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <MdDownload className="w-4 h-4" />
            گزارش
          </Button>
          <Badge variant="secondary" dot>
            آخرین بروزرسانی: الان
          </Badge>
        </div>
      }
    />
  );
}
