"use client";

import React, { useState } from "react";
import RegesterForm from "../../components/regesterForm/RegesterForm";
import OAuthButtons from "../../components/regesterForm/OAuthButtons";
import SubmitButton from "../../components/regesterForm/SubmitButton";

function Page() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* دایره های پراکنده برای مهدی */}
      <div className="hidden md:block">
        <div className="absolute top-36 -left-10 size-52 bg-neutral-600 rounded-full opacity-10"></div>
        <div className="absolute top-28 left-12 size-36 bg-neutral-600 rounded-full opacity-10"></div>
        <div className="absolute top-3/6 -right-30 size-60 bg-neutral-600 rounded-full opacity-10"></div>
      </div>

      {/* main content */}
      <div className="flex flex-col items-center px-4 space-y-6 relative z-10">
        {/* form */}
        <RegesterForm />

        {/* accept rules */}
        <div className="flex items-center space-x-2 self-auto w-full max-w-[589px]">
          <input
            type="checkbox"
            className="cursor-pointer appearance-none size-7 border-2 border-primary-100 rounded-md transition duration-400 checked:bg-primary-200 checked:border-neutral-800"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label>شرایط و قوانین استفاده از سایت را میپذیرم</label>
        </div>

        {/* submit regester */}
        <SubmitButton />

        {/* regester with OAuth ( OAuth: regster with google or email ) */}
        <OAuthButtons />
      </div>
    </>
  );
}

export default Page;
