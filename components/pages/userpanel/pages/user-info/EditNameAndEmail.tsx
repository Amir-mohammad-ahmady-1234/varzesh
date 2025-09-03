"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import Input from "../../../../common/Input";
import Button from "../../../../common/Button";
import toast from "react-hot-toast";
import {
  postProfileInfo,
  postProfileInfoState,
} from "../../../../../lib/actions/change-user-info/postProfileInfo";

const initialState: postProfileInfoState = {
  message: {},
};

export default function EditNameAndEmail() {
  const [state, formAction] = useActionState(postProfileInfo, initialState);

  useEffect(
    function () {
      if (state.message && "success" in state.message) {
        toast.success("تغییرات با موفقیت اعمال شد");
      }
    },
    [state.message]
  );

  return (
    <form
      className="flex flex-col items-center gap-14 shadow-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(() => {
          formAction(formData);
        });
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="change-name"
          placeholder="نام جدید"
          title="تغییر نام"
          err={
            state.message && "name" in state.message
              ? state.message.name
              : undefined
          }
        />
        <Input
          name="change-email"
          placeholder="ایمیل جدید"
          title="تغییر ایمیل"
          err={
            state.message && "email" in state.message
              ? state.message.email
              : undefined
          }
        />
      </div>

      <Button type="submit" className="w-40 self-end">
        ثبت تغییرات
      </Button>
    </form>
  );
}
