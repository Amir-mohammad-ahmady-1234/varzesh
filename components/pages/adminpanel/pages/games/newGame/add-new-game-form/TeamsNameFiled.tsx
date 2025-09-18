import React from "react";
import FormField from "../../../../../../../styles/ui/FormField";
import InputDesign from "../../../../../../../styles/ui/Input";

type TTeamsNameFiled = {
  firstthem: string;
  secondthem: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

export default function TeamsNameFiled({
  firstthem,
  secondthem,
  handleChange,
}: TTeamsNameFiled) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField label="تیم اول" required>
        <InputDesign
          name="firstthem"
          placeholder="نام تیم اول"
          value={firstthem}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="تیم دوم" required>
        <InputDesign
          name="secondthem"
          placeholder="نام تیم دوم"
          value={secondthem}
          onChange={handleChange}
        />
      </FormField>
    </div>
  );
}
