import React from "react";
import Input from "../../common/Input";

function LoginForm({ children }: { children: React.ReactNode }) {
  return (
    <form className="flex flex-col items-center space-y-4 w-full max-w-[589px]">
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
      {children}
    </form>
  );
}

export default LoginForm;
