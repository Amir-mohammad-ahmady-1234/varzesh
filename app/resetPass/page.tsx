import React from "react";

import Circles from "../../components/common/Circles";
import SubmitButton from "../../components/common/SubmitButton";
import ResetPassForm from "../../components/form/resetPassForm/ResetPassForm";

function page() {
  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <Circles />

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <ResetPassForm>
          <SubmitButton page="resetPass" />
        </ResetPassForm>
      </div>
    </>
  );
}

export default page;
