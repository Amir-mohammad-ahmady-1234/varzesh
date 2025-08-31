import React from "react";
import FormField from "../../../../../../../styles/ui/FormField";
import InputDesign from "../../../../../../../styles/ui/Input";

export default function TeamsCategory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField label="لیگ" required>
        <select className="w-full px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
          <option value="">انتخاب لیگ</option>
          <option value="premier">لیگ برتر</option>
          <option value="azadegan">آزادگان</option>
          <option value="cup">جام حذفی</option>
        </select>
      </FormField>

      <FormField label="مرحله">
        <InputDesign placeholder="مثال: هفته 15" />
      </FormField>
    </div>
  );
}
