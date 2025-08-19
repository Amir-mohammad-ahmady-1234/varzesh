import React from "react";

import Circles from "../../../../components/site/auth/Circles";
import LoginForm from "../../../../components/site/auth/loginForm/LoginForm";
import SubmitButton from "../../../../components/site/auth/SubmitButton";
import OAuthButtons from "../../../../components/site/auth/OAuthButtons";

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
