import React from "react";
import StepRenderer from "../../../../../components/pages/userpanel/pages/user-info/changePhone/StepRenderer";

export default async function page({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;

  const changePhoneStep = step?.[1];

  return <StepRenderer changePhoneStep={changePhoneStep} />;
}
