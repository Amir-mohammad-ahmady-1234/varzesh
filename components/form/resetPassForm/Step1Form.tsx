"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import Input from "../../common/Input";
import toast from "react-hot-toast";
import { getOtp, getOtpState } from "../../../lib/actions/getOtp";

interface Props {
  children: React.ReactNode;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: getOtpState = { message: {} };

function Step1({ children, phone, setPhone, setOtp, setStep }: Props) {
  const [state, formAction] = useActionState(getOtp, initialState);

  useEffect(() => {
    if (typeof state.message === "string") {
      toast.success(`کد ورود شما: ${state.message}`);
      setOtp(state.message);
      localStorage.setItem("phone", phone);
      setStep(2);
    }
    if (typeof state.message === "object" && state.message.otherErr) {
      toast.error(state.message.otherErr, { duration: 3000 });
    }
  }, [state.message, setStep, setOtp]);

  return (
    <form
      // action={formAction}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get("phone") as string;

        setPhone(phone);

        startTransition(() => {
          formAction(formData);
        });
      }}
      className="flex flex-col items-center space-y-4 w-full max-w-[589px]"
    >
      <Input
        name="phone"
        type="text"
        placeholder="شماره موبایل"
        title="شماره موبایل"
        err={typeof state.message === "object" ? state.message.phone ?? "" : ""}
        value={phone}
        changeFn={(e) => setPhone(e.target.value)}
      />

      {children}
    </form>
  );
}

export default Step1;
