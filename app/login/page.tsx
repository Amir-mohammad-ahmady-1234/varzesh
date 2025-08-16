import React from "react";
import OAuthButtons from "../../components/form/regesterForm/OAuthButtons";
import SubmitButton from "../../components/form/regesterForm/SubmitButton";
import LoginForm from "../../components/form/loginForm/LoginForm";
import Circles from "../../components/form/ui/Circles";

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

        {/* regester with OAuth ( OAuth: regster with google or email ) */}
        <OAuthButtons />
      </div>
    </>
  );
}

export default page;
