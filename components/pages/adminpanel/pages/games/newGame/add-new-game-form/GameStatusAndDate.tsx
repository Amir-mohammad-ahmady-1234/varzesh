import React from "react";
import FormField from "../../../../../../common/ui/FormField";
import InputDesign from "../../../../../../common/ui/Input";

type TGameStatusAndDate = {
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  data: string;
  time: string;
  status: "Scheduled" | "down" | "live";
};

export default function GameStatusAndDate({
  handleChange,
  data,
  time,
  status,
}: TGameStatusAndDate) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FormField label="تاریخ" required>
        <InputDesign
          type="date"
          name="data"
          value={data}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="ساعت" required>
        <InputDesign
          type="time"
          name="time"
          value={time}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="وضعیت">
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-primary-100 rounded-xl bg-bg-primary"
        >
          <option value="Scheduled">برنامه‌ریزی شده</option>
          <option value="live">زنده</option>
          <option value="down">تمام شده</option>
        </select>
      </FormField>
    </div>
  );
}
