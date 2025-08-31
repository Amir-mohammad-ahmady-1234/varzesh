import React from "react";
import FormField from "../../../../../../../styles/ui/FormField";
import InputDesign from "../../../../../../../styles/ui/Input";

export default function GameStatusAndDate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FormField label="تاریخ" required>
        <InputDesign type="date" />
      </FormField>

      <FormField label="ساعت" required>
        <InputDesign type="time" />
      </FormField>

      <FormField label="وضعیت">
        <select className="w-full px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
          <option value="scheduled">برنامه‌ریزی شده</option>
          <option value="live">زنده</option>
          <option value="finished">تمام شده</option>
        </select>
      </FormField>
    </div>
  );
}
