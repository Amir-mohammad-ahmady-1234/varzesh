import React from "react";
import FormField from "../../../../../../../styles/ui/FormField";
import InputDesign from "../../../../../../../styles/ui/Input";

type TTeamsCategory = {
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  step: string;
  League: "Dcup" | "Tcup" | "Acup";
};

export default function TeamsCategory({
  handleChange,
  step,
  League,
}: TTeamsCategory) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField label="لیگ" required>
        <select
          name="League"
          value={League}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-primary-100  rounded-xl bg-bg-primary "
        >
          <option value="">انتخاب لیگ</option>
          <option value="Tcup">لیگ برتر</option>
          <option value="Acup">آزادگان</option>
          <option value="Dcup">جام حذفی</option>
        </select>
      </FormField>

      <FormField label="مرحله">
        <InputDesign
          name="step"
          placeholder="مثال: هفته 15"
          onChange={handleChange}
          value={step}
        />
      </FormField>
    </div>
  );
}
