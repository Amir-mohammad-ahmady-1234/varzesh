"use client";

import React, { startTransition, useEffect, useState } from "react";
import Input from "../../../../../common/Input";
import Button from "../../../../../common/Button";
import { useRouter } from "next/navigation";
import { checkOtp } from "../../../../../../lib/actions/change-user-info/checkOtp";
import toast from "react-hot-toast";

export default function CheckOtp() {
  const [otp, setOtp] = useState(localStorage.getItem("otp"));
  const router = useRouter();

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    if (!otp) router.push("/panel/user-info");
  }, [router]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const otp = formData.get("otp-code") as string;

    startTransition(async () => {
      try {
        const res = await checkOtp(otp);
        if (res?.message?.success !== "اطلاعات صحیح هست") {
          toast.error(res?.message?.error ?? "خطا در برسی کد");
          console.log(res?.message?.success);
          return;
        }

        toast.success(`${res?.message?.success}`, {
          duration: 3000,
        });
        router.push("/panel/user-info/change-phone/set-new-phone");
      } catch (err) {
        console.log(err);
        toast.error("کد وارد شده صحیح نمیباشد");
      }
    });
  }
  return (
    <>
      <form
        className="flex flex-col shadow-2xl items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="otp-code"
            placeholder="کد otp"
            title="کد otp"
            value={otp ?? ""}
            changeFn={(e) => setOtp(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-40 m-4 self-end">
          برسی کد
        </Button>
      </form>
    </>
  );
}
