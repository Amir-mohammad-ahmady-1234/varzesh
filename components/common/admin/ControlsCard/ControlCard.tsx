import React from "react";
import Button from "../../Button";
import { MdBlock, MdDelete, MdPeople } from "react-icons/md";
import Card from "../../ui/Card";

export default function ControlCard() {
  return (
    <Card>
      <h3 className="font-semibold text-foreground mb-4">کنترل‌های روم</h3>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start cursor-pointer bg-transparent"
        >
          <MdBlock className="w-4 h-4 ml-2" />
          مسدود کردن روم
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start cursor-pointer bg-transparent"
        >
          <MdPeople className="w-4 h-4 ml-2" />
          مدیریت کاربران
        </Button>
        <Button
          variant="destructive"
          className="w-full justify-start cursor-pointer"
        >
          <MdDelete className="w-4 h-4 ml-2" />
          حذف روم
        </Button>
      </div>
    </Card>
  );
}
