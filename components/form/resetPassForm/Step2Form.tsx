import React, { startTransition, useActionState, useEffect } from "react";
import Input from "../../common/Input";
import toast from "react-hot-toast";
import { VerifyOtp, VerifyOtpState } from "../../../lib/actions/VerifyOtp";

interface Props {
  children: React.ReactNode;
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: VerifyOtpState = {
  message: {},
};

function Step2({ children, otp, setOtp, setStep }: Props) {
  const [state, formAction] = useActionState(VerifyOtp, initialState);

  useEffect(() => {
    if (state.message === true) {
      setStep(3);
    }
    if (state.message.otherErr) {
      toast.error(state.message.otherErr, { duration: 3000 });
    }
  }, [state.message, setStep]);

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
        name="otp"
        type="otp"
        placeholder="کد otp"
        title="کد otp"
        value={otp}
        changeFn={(e) => setOtp(e.target.value)}
        err={state.message.otp}
      />
      {children}
    </form>
  );
}

export default Step2;
