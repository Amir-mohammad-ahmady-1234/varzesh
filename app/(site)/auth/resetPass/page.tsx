import React from "react";

import Circles from "../../../../components/site/auth/Circles";
import ResetPassForm from "../../../../components/site/auth/resetPassForm/ResetPassForm";
import SubmitButton from "../../../../components/site/auth/SubmitButton";

function page() {
  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <Circles />

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <ResetPassForm>
          <SubmitButton page="sendPhone" />
        </ResetPassForm>
      </div>
    </>
  );
}

export default page;
