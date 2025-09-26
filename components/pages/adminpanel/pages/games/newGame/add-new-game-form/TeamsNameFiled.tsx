import React from "react";
import InputDesign from "../../../../../../common/ui/Input";
import FormField from "../../../../../../common/ui/FormField";

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
