import React from "react";

const classes = {
  inputClass: "input input-md input-primary",
  inputAndLabelContainer:
    "flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0 w-full max-w-[589px]",
  labelClass: "md:w-52 text-right",
};

function LoginForm({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex flex-col items-center space-y-4 w-full max-w-[589px]">
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
      {children}
    </form>
  );
}

export default LoginForm;
