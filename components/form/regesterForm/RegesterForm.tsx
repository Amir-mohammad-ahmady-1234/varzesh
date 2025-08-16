import React from "react";
import Input from "../../common/Input";

function RegesterForm({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex flex-col items-center space-y-4 w-full max-w-[589px]">
      <Input
        name="name"
        type="text"
        placeholder="نام و نام خوانوادگی"
        title="نام و نام خوانوادگی"
      />

      <Input
        name="phone"
        type="text"
        placeholder="شماره موبایل"
        title="شماره موبایل"
      />

      <Input
        name="password"
        type="password"
        placeholder="رمز عبور"
        title="رمز عبور"
      />

      <Input
        name="repeat-password"
        type="password"
        placeholder="تکرار رمز عبور"
        title="تکرار رمز عبور"
      />
      {children}
    </form>
  );
}

export default RegesterForm;
