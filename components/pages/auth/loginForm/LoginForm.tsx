"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Input from "../../../common/Input";
import {
  userLogin,
  userLoginState,
} from "../../../../lib/actions/auth/userLogin";

const initialState: userLoginState = {
  message: {},
};

function LoginForm({ children }: { children?: React.ReactNode }) {
  const [state, formAction] = useActionState<userLoginState, FormData>(
    userLogin,
    initialState
  );

  useEffect(() => {
    if (state.message.success) {
      toast.success(state.message.success);
      redirect("/");
    }

    if (state.message.otherErr) {
      toast.error(state.message.otherErr, { duration: 3000 });
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
      className="flex flex-col items-center space-y-4 w-full max-w-[589px] mx-auto p-4"
    >
      <Input
        name="phone"
        type="text"
        placeholder="شماره موبایل"
        title="شماره موبایل"
        err={state?.message?.phone}
      />
      <Input
        name="password"
        type="password"
        placeholder="رمز عبور"
        title="رمز عبور"
        err={state.message?.password}
      />

      <div className="w-full rounded-[var(--radius-medium)] bg-primary-100/10 border border-primary-200 px-4 py-3 text-sm leading-6 text-[var(--color-neutral-200)]">
        <p className="font-semibold text-primary-100 mb-1">ورود ادمین</p>
        <p>
          برای ورود به عنوان{" "}
          <span className="text-primary-200 font-semibold">ادمین</span> شماره{" "}
          <span className="text-secondary-100 font-bold">09134117901</span> را
          وارد کن. رمز را نمی‌دانی؟{" "}
          <span className="text-primary-300 font-semibold">فراموشی رمز</span> را
          بزن.
        </p>
      </div>

      {children}
    </form>
  );
}

export default LoginForm;
