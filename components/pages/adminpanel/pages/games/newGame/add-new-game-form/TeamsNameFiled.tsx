import React from "react";
import FormField from "../../../../../../../styles/ui/FormField";
import InputDesign from "../../../../../../../styles/ui/Input";

export default function TeamsNameFiled() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField label="تیم اول" required>
        <InputDesign placeholder="نام تیم اول" />
      </FormField>

      <FormField label="تیم دوم" required>
        <InputDesign placeholder="نام تیم دوم" />
      </FormField>
    </div>
  );
}
