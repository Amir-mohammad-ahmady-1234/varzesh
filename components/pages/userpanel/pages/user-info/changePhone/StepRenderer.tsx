"use client";

import React from "react";
import GetOtpBtn from "./GetOtpBtn";
import CheckOtp from "./CheckOtp";
import SetNewPhone from "./SetNewPhone";
import OtpTimer from "../../../../auth/resetPassForm/OtpTimer";
import { useRouter } from "next/navigation";

export default function StepRenderer({
  changePhoneStep,
}: {
  changePhoneStep: string;
}) {
  const router = useRouter();

  function handler() {
    localStorage.removeItem("otp");
    router.push("/panel/user-info");
  }

  if (!changePhoneStep) {
    return <GetOtpBtn />;
  }

  return (
    <div className="flex flex-col">
      {changePhoneStep === "check-otp" && <CheckOtp />}
      {changePhoneStep === "set-new-phone" && <SetNewPhone />}
      <OtpTimer handler={handler} />
    </div>
  );
}
