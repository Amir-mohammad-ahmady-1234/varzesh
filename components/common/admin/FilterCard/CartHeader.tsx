import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../../ui/Card";
import { MdFilterList } from "react-icons/md";
import Button from "../../Button";

export default function CartHeader({ title }: { title: string }) {
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <MdFilterList className="w-5 h-5" />
            فیلترها و جستجو
          </CardTitle>
          <CardDescription>{title}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"primary"} size="sm" className="cursor-pointer">
            لیست
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}
