import Link from "next/link";
import React from "react";
import OtpTimer from "./resetPassForm/OtpTimer";

function SubmitButton({
  children,
  checked = true,
  page,
  setStep,
}: {
  children?: React.ReactNode;
  checked?: boolean;
  page: string;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
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
          {page === "regester" && "ثبت نام"}
          {page === "login" && "ورود"}
          {page === "sendPhone" && "دریافت کد"}
          {page === "sendOtp" && "تایید کد otp"}
          {page === "setNewPass" && "تغییر رمز عبور"}
        </button>

        <div
          className={`flex ${
            (page === "regester" || page === "sendPhone") && "flex-row-reverse"
          } items-center justify-between mt-2`}
        >
          {(page === "login" || page === "sendOtp") && (
            <Link href="/auth/resetPass" className="text-secondary-300">
              {page === "login" ? (
                "رمز عبور را فراموش کردید؟"
              ) : (
                <OtpTimer setStep={setStep} />
              )}
            </Link>
          )}
          <p className="text-sm text-lef ">
            {page === "regester"
              ? "از قبل ثبت نام کرده اید؟"
              : "اگر عضو سایت نیستید؟"}
            <Link
              href={page === "regester" ? "/auth/login" : "/auth/register"}
              className="text-lg font-bold text-secondary-100 underline underline-offset-4 "
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
