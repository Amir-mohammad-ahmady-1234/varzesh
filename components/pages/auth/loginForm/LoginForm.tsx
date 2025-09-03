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
  const [state, formAction] = useActionState(userLogin, initialState);

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

      {children}
    </form>
  );
}

export default LoginForm;
