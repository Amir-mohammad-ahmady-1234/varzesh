import React from "react";
import Card, {
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../../../styles/ui/Card";
import Button from "../../../../../../common/Button";

export default function InfoHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>آخرین بازی‌ها</CardTitle>
            <CardDescription>بازی‌های اخیر و وضعیت آنها</CardDescription>
          </div>
          <Button className="text-sm text-primary hover:underline cursor-pointer">
            مشاهده همه
          </Button>
        </div>
      </CardHeader>

      {children}
    </Card>
  );
}
