import React, { startTransition, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Input from "../../../common/Input";
import { resetPassState, restPass } from "../../../../lib/actions/auth/resetPass";

interface Props {
  children: React.ReactNode;
}

const initialState: resetPassState = { message: {} };

function Step3({ children }: Props) {
  const [state, formAction] = useActionState(restPass, initialState);

  useEffect(() => {
    if (state.message === true) {
      toast.success("رمز جدید با موفقیت ثبت شد", { duration: 3000 });
      localStorage.removeItem("phone");
      redirect("/auth/login");
    }

    if (state.message.otherErr) {
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
        name="password"
        type="password"
        placeholder="رمز جدید"
        title="رمز جدید"
        err={state.message.password}
      />

      <Input
        name="new-password"
        type="password"
        placeholder="تکرار رمز"
        title="تکرار رمز"
        err={state.message.newPassword}
      />
      {children}
    </form>
  );
}

export default Step3;
