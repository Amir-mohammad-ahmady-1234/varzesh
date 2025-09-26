import React from "react";

import Button from "../../../../../../common/Button";
import { MdMoreVert } from "react-icons/md";
import Card, {
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../../common/ui/Card";
import Badge from "../../../../../../common/ui/Badge";

export default function ChartHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:col-span-2">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>رشد کاربران</CardTitle>
              <CardDescription>
                نمودار رشد کاربران در ۷ ماه گذشته
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="info" size="sm">
                +۲۳٪
              </Badge>
              <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <MdMoreVert className="w-5 h-5 text-gray-500" />
              </Button>
            </div>
          </div>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
}
