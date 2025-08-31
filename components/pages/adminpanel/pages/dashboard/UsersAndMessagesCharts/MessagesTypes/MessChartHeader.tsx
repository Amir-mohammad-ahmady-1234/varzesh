import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../../../../../../../styles/ui/Card";
import Button from "../../../../../../common/Button";
import { MdMoreVert } from "react-icons/md";

export default function MessChartHeader({children}:{children:React.ReactNode}) {
  return (
    <>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>انواع پیام‌ها</CardTitle>
          <CardDescription>توزیع انواع پیام‌ها</CardDescription>
        </div>
        <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <MdMoreVert className="w-5 h-5 text-gray-500" />
        </Button>
      </div>
    </CardHeader>
    {children}
    </>
  );
}
