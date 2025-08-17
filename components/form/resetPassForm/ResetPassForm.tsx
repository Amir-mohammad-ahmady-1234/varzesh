"use client";

import React, { useState } from "react";

import Step1 from "./Step1Form";
import Step2 from "./Step2Form";
import SubmitButton from "../../common/SubmitButton";
import OAuthButtons from "../../common/OAuthButtons";
import Step3 from "./Step3Form";

function ResetPassForm({ children }: { children: React.ReactNode }) {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");

  if (step === 1)
    return (
      <Step1
        phone={phone}
        setPhone={setPhone}
        setOtp={setOtp}
        setStep={setStep}
      >
        {children}
        <OAuthButtons />
      </Step1>
    );

  if (step === 2)
    return (
      <Step2 otp={otp} setOtp={setOtp} setStep={setStep}>
        <SubmitButton page="resetPass_step2" setStep={setStep} />
        <OAuthButtons />
      </Step2>
    );

  if (step === 3)
    return (
      <Step3>
        <SubmitButton page="resetPass_step3" />
      </Step3>
    );
}

export default ResetPassForm;
