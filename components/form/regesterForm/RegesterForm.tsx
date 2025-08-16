"use client";

import React, { startTransition, useActionState } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

import { userRegester, userRegesterState } from "../../../lib/action";
import Input from "../../common/Input";

const initialState: userRegesterState = {
  message: {},
};

function RegesterForm({ children }: { children: React.ReactNode }) {
  const [state, formAction] = useActionState(userRegester, initialState);

  if (state.message === "ورود موفق") {
    toast.success("ورود موفق");
    redirect("/");
  }

  if (state.message.otherErr)
    toast.error(state.message.otherErr, { duration: 3000 });

  return (
    <form
      // action={formAction}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(() => {
          formAction(formData);
        });
      }}
      className="flex flex-col items-center space-y-2 w-full max-w-[589px]"
    >
      <Input
        name="name"
        type="text"
        placeholder="نام و نام خوانوادگی"
        title="نام و نام خوانوادگی"
        err={state.message.firstname}
      />

      <Input
        name="phone"
        type="text"
        placeholder="شماره موبایل"
        title="شماره موبایل"
        err={state.message.phone}
      />

      <Input
        name="password"
        type="password"
        placeholder="رمز عبور"
        title="رمز عبور"
        err={state.message.password}
      />

      <Input
        name="repeat-password"
        type="password"
        placeholder="تکرار رمز عبور"
        title="تکرار رمز عبور"
        err={state.message.repeatPass}
      />

      {children}
    </form>
  );
}

export default RegesterForm;
