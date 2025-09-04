import React from "react";
import GetOtpBtn from "./GetOtpBtn";
import CheckOtp from "./CheckOtp";
import SetNewPhone from "./SetNewPhone";

export default async function StepRenderer({
  changePhoneStep,
}: {
  changePhoneStep: string;
}) {
  if (!changePhoneStep) {
    return <GetOtpBtn />;
  }

  if (changePhoneStep === "check-otp") {
    return <CheckOtp />;
  }

  if (changePhoneStep === "set-new-phone") {
    return <SetNewPhone />;
  }
}
