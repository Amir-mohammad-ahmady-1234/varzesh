import React from "react";
import InputDesign from "../../../../../styles/ui/Input";

export default function FilterAndSearchGame() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <InputDesign
        placeholder="جستجو در بازی‌ها.."
        name="search-games"
        title="جستجو بازی ها"
        className="max-w-sm"
      />
      <select className="px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
        <option value="">همه لیگ‌ها</option>
        <option value="premier">لیگ برتر</option>
        <option value="azadegan">آزادگان</option>
      </select>
      <select className="px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
        <option value="">همه وضعیت‌ها</option>
        <option value="live">زنده</option>
        <option value="finished">تمام شده</option>
        <option value="scheduled">برنامه‌ریزی شده</option>
      </select>
    </div>
  );
}
