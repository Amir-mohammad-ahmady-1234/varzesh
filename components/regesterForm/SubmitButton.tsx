import Link from "next/link";
import React from "react";

function SubmitButton() {
  return (
    <div className="w-full max-w-[600px]">
      <button className="w-full button button-primary md rounded-xl">
        ثبت نام
      </button>

      <p className="text-sm text-left">
        از قبل ثبت نام کرده اید؟{" "}
        <Link
          href="login"
          className="text-lg font-bold text-secondary-100 underline underline-offset-4"
        >
          ورود
        </Link>
      </p>
    </div>
  );
}

export default SubmitButton;
