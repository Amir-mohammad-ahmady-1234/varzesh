import React from "react";

import Circles from "../../../../components/pages/auth/Circles";
import LoginForm from "../../../../components/pages/auth/loginForm/LoginForm";
import SubmitButton from "../../../../components/pages/auth/SubmitButton";

export const metadata = {
  title: "ثبت نام",
  description: "ثبت نام در سایت ورزش",
};

function page() {
  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <Circles />

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <LoginForm>
          <SubmitButton page="login" />
        </LoginForm>
      </div>
    </>
  );
}

export default page;
