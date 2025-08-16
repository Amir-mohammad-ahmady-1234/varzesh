import Link from "next/link";
import React from "react";

function SubmitButton({
  children,
  checked = true,
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
          disabled={!checked}
          className={`w-full max-w-[600px] h-full max-h-[45px] button button-primary md rounded-xl !text-2xl ${
            !checked && "!cursor-not-allowed"
          }`}
        >
          {page === "regester" ? "ثبت نام" : "ورود"}
        </button>

        <div
          className={`flex ${
            page === "regester" && "flex-row-reverse"
          } items-center justify-between mt-2`}
        >
          {page === "login" && (
            <Link href="/forget-password/phone" className="text-secondary-300">
              رمز عبور را فراموش کردید؟
            </Link>
          )}
          <p className="text-sm text-lef">
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
