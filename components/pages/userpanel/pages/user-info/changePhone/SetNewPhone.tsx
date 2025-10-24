"use client";

import React, { startTransition, useEffect } from "react";
import Input from "../../../../../common/Input";
import Button from "../../../../../common/Button";
import toast from "react-hot-toast";
import { setNewPhone } from "../../../../../../lib/actions/change-user-info/setNewPhone";
import { useRouter } from "next/navigation";

export default function SetNewPhone() {
  const router = useRouter();

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    if (!otp) router.push("/panel/user-info");
  }, [router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const otp = formData.get("change-phone") as string;

    startTransition(async () => {
      try {
        const res = await setNewPhone(otp);

        if (res?.message?.success !== "کاربر آپدیت شد") {
          toast.error(res?.message?.error ?? "خطا در برسی کد");
          return;
        }

        toast.success(`${res?.message?.success}`, {
          duration: 3000,
        });
        router.push("/panel/user-info");
        localStorage.removeItem("otp");
        localStorage.removeItem("duration");
      } catch (err) {
        toast.error("کد وارد شده صحیح نمیباشد");
        console.error(err);
      }
    });
  }

  return (
    <form
      className="flex flex-col shadow-2xl items-center gap-14"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="change-phone"
          placeholder="شماره موبایل جدید"
          title="شماره موبایل"
        />
      </div>

      <Button type="submit" className="w-40 m-4 self-end">
        ثبت شماره جدید
      </Button>
    </form>
  );
}
