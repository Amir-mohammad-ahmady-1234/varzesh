import React from "react";

import Circles from "../../../../components/pages/auth/Circles";
import ResetPassForm from "../../../../components/pages/auth/resetPassForm/ResetPassForm";

export const metadata = {
  title: "تغیر رمز عبور",
  description: "تغییر رمز عبور",
};

function page() {
  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <Circles />

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <ResetPassForm></ResetPassForm>
      </div>
    </>
  );
}

export default page;
