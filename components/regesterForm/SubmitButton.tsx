import Link from "next/link";
import React from "react";

function SubmitButton({
  children,
  checked,
  page,
}: {
  children?: React.ReactNode;
  checked?: boolean;
  page: string;
}) {
  return (
    <div className="w-full max-w-[600px] m-3 space-y-7">
      {children}
      <div>
        <button
          disabled={checked}
          className="w-full button button-primary md rounded-xl disabled:bg-neutral-400"
        >
          {page === "regester" ? "ثبت نام" : "ورود"}
        </button>

        <div className="flex items-center justify-between mt-2">
          {page === "login" && (
            <Link href="/forget-password/phone" className="text-secondary-300">
              رمز عبور را فراموش کردید؟
            </Link>
          )}
          <p className="text-sm text-left">
            {page === "regester"
              ? "از قبل ثبت نام کرده اید؟"
              : "اگر عضو سایت نیستید؟"}
            <Link
              href={page === "regester" ? "/login" : "/regester"}
              className="text-lg font-bold text-secondary-100 underline underline-offset-4"
            >
              {page === "regester" ? "ورود" : "ثبت نام"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubmitButton;
