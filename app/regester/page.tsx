"use client";

import React, { useState } from "react";
import RegesterForm from "../../components/form/regesterForm/RegesterForm";
import OAuthButtons from "../../components/form/regesterForm/OAuthButtons";
import SubmitButton from "../../components/common/SubmitButton";
import RulesAccept from "../../components/form/regesterForm/RulesAccept";
import Circles from "../../components/form/ui/Circles";

function Page() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <Circles />

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <RegesterForm>
          <SubmitButton checked={checked} page="regester">
            <RulesAccept
              checked={checked}
              setChecked={setChecked}
            ></RulesAccept>
          </SubmitButton>
        </RegesterForm>

        {/* regester with OAuth ( OAuth: regster with google or email ) */}
        <OAuthButtons />
      </div>
    </>
  );
}

export default Page;
