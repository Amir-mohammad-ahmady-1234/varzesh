"use client";

import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import Input from "../../common/Input";
import { resetPassState, ResetPassword } from "../../../lib/actions/resetPass";
import toast from "react-hot-toast";

const initialState: resetPassState = { message: {} };

function ResetPassForm({ children }: { children: React.ReactNode }) {
  const [state, formAction] = useActionState(ResetPassword, initialState);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (typeof state.message === "string") {
      toast.success(`کد ورود شما: ${state.message}`);
      setOtp(state.message);
    }
    if (typeof state.message === "object" && state.message.otherErr) {
      toast.error(state.message.otherErr, { duration: 3000 });
    }
  }, [state.message]);

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
      className="flex flex-col items-center space-y-4 w-full max-w-[589px]"
    >
      <Input
        name="phone"
        type="text"
        placeholder="شماره موبایل"
        title="شماره موبایل"
        err={typeof state.message === "object" ? state.message.phone ?? "" : ""}
      />
      {children}
    </form>
  );
}

export default ResetPassForm;
