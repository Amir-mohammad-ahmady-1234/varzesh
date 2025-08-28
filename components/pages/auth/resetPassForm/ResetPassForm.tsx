"use client";

import React, { useState } from "react";

import Step1 from "./SendPhone";
import Step2 from "./SendOtp";
import Step3 from "./SetNewPass";

import OAuthButtons from "../OAuthButtons";
import SubmitButton from "../SubmitButton";

function ResetPassForm() {
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
        <SubmitButton page="sendPhone" />
        <OAuthButtons />
      </Step1>
    );

  if (step === 2)
    return (
      <Step2 otp={otp} setOtp={setOtp} setStep={setStep}>
        <SubmitButton page="sendOtp" setStep={setStep} />
        <OAuthButtons />
      </Step2>
    );

  if (step === 3)
    return (
      <Step3>
        <SubmitButton page="setNewPass" />
      </Step3>
    );
}

export default ResetPassForm;
