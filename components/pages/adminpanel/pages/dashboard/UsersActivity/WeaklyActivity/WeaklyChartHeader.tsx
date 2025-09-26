import React from "react";
import Button from "../../../../../../common/Button";
import { MdMoreVert } from "react-icons/md";
import Card, { CardDescription, CardHeader, CardTitle } from "../../../../../../common/ui/Card";

export default function WeaklyChartHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>فعالیت هفتگی</CardTitle>
            <CardDescription>پیام‌ها و کاربران فعال در هفته</CardDescription>
          </div>
          <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <MdMoreVert className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
      </CardHeader>

      {children}
    </Card>
  );
}
