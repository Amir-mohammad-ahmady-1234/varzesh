import React from "react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../../styles/ui/Card";
import { MdFilterList } from "react-icons/md";

export default function CardHeadTitle() {
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <MdFilterList className="w-5 h-5" />
            فیلترها و جستجو
          </CardTitle>
          <CardDescription>
            جستجو و فیلتر چت روم‌ها بر اساس معیارهای مختلف
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  );
}
