'use client'

import React, { useActionState } from "react";
import Input from "../../common/Input";
import { userRegester, userRegesterState } from "../../../lib/action";

const initialState: userRegesterState = { message: null };

function RegesterForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(userRegester, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col items-center space-y-4 w-full max-w-[589px]"
    >
      <p>{state.message}</p>
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
