"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
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
      <div className="flex flex-col w-full max-w-[589px]">
        <label htmlFor="name" className="text-right">
          نام و نام خانوادگی* :
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="نام و نام خانوادگی"
          className="border p-2 rounded"
        />
        {state.message.firstname && (
          <p className="text-error-500 text-sm">{state.message.firstname}</p>
        )}
      </div>

      <div className="flex flex-col w-full max-w-[589px]">
        <label htmlFor="phone" className="text-right">
          شماره موبایل* :
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="شماره موبایل"
          className="border p-2 rounded"
        />
        {state.message.phone && (
          <p className="text-error-500 text-sm">{state.message.phone}</p>
        )}
      </div>

      <div className="flex flex-col w-full max-w-[589px]">
        <label htmlFor="email" className="text-right">
          ایمیل آدرس* :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="border p-2 rounded"
        />
        {state.message.email && (
          <p className="text-error-500 text-sm">{state.message.email}</p>
        )}
      </div>

      <div className="flex flex-col w-full max-w-[589px]">
        <label htmlFor="password" className="text-right">
          رمز عبور* :
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="border p-2 rounded"
        />
        {state.message.password && (
          <p className="text-error-500 text-sm">{state.message.password}</p>
        )}
      </div>

      {children}
    </form>
  );
}

export default RegesterForm;
