"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Input from "../../../common/Input";
import {
  userRegester,
  userRegesterState,
} from "../../../../lib/actions/auth/userRegester";

const initialState: userRegesterState = {
  message: {},
};

function RegesterForm({ children }: { children: React.ReactNode }) {
  const [state, formAction] = useActionState<userRegesterState, FormData>(
    userRegester,
    initialState
  );
  console.log(state);

  useEffect(() => {
    if (state.message === "ثبت‌ نام موفق") {
      toast.success("ثبت‌ نام موفق");
      redirect("/");
    }

    if (state.message.otherErr) {
      toast.error(state.message.otherErr);
    }
  }, [state.message]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(() => {
          formAction(formData);
        });
      }}
      className="flex flex-col items-center space-y-4 w-full max-w-[589px]"
    >
      <Input
        name="name"
        type="text"
        placeholder="نام و نام خانوادگی"
        title="نام و نام خانوادگی"
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
        name="email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        title="ایمیل آدرس"
        err={state.message.email}
      />

      <Input
        name="password"
        type="password"
        placeholder="رمز عبور"
        title="رمز عبور"
        err={state.message.password}
      />

      {children}
    </form>
  );
}

export default RegesterForm;
