"use client";

import React, { startTransition, useEffect } from "react";
import Button from "../../../../../common/Button";
import { sendOtp } from "../../../../../../lib/actions/change-user-info/sendOtp";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function GetOtpBtn() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("otp");
  }, []);

  function handleSubmit() {
    startTransition(async () => {
      try {
        const res = await sendOtp();
        if (res?.message?.error) {
          toast.error(res.message.error);
          return;
        }

        toast.success(`${res?.message?.success}:${res?.message?.otpcode}`, {
          duration: 3000,
        });
        localStorage.setItem("otp", res?.message?.otpcode ?? "");
        router.push("/panel/user-info/change-phone/check-otp");
      } catch (err) {
        toast.error("خطا در دریافت کد otp");
        console.error(err);
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <form action={handleSubmit}>
        <Button type="submit">تغییر شماره تلفن</Button>
      </form>
      <p className="text-sm">
        توجه: تغییر شماره تلفن تنها برای یکبار امکان پذیر میباشید.
      </p>
    </div>
  );
}
