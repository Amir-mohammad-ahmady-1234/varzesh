import React from "react";
import SubmitButton from "./SubmitButton";

const classes = {
  inputClass: "input input-md input-primary",
  inputAndLabelContainer:
    "flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0 w-full max-w-[589px]",
  labelClass: "md:w-52 text-right",
};

function RegesterForm({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <form className="flex flex-col items-center space-y-4 w-full max-w-[589px]">
      <div className={classes.inputAndLabelContainer}>
        <label className={classes.labelClass} htmlFor="name">
          *نام و نام خوانوادگی
        </label>
        <input
          className={classes.inputClass}
          id="name"
          name="name"
          type="text"
          placeholder="نام و نام خوانوادگی"
        />
      </div>
      <div className={classes.inputAndLabelContainer}>
        <label className={classes.labelClass} htmlFor="phone">
          *شماره موبایل
        </label>
        <input
          className={classes.inputClass}
          id="phone"
          name="phone"
          type="text"
          placeholder="شماره موبایل"
        />
      </div>
      <div className={classes.inputAndLabelContainer}>
        <label className={classes.labelClass} htmlFor="password">
          *رمز عبور
        </label>
        <input
          className={classes.inputClass}
          id="password"
          name="password"
          type="password"
          placeholder="رمز عبور"
        />
      </div>
      <div className={classes.inputAndLabelContainer}>
        <label className={classes.labelClass} htmlFor="repeat-password">
          *تکرار رمز عبور
        </label>
        <input
          className={classes.inputClass}
          id="repeat-password"
          name="repeat-password"
          type="password"
          placeholder="تکرار رمز عبور"
        />
      </div>
      <SubmitButton checked={checked} setChecked={setChecked} />
    </form>
  );
}

export default RegesterForm;
