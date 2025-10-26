import Link from "next/link";
import React from "react";
import OtpTimer from "./resetPassForm/OtpTimer";
import Button from "../../common/Button";

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
        <Button
          disabled={!checked}
          type="submit"
          className={`w-full max-w-[600px] h-full max-h-[45px] md rounded-xl !text-2xl ${
            !checked && "!cursor-not-allowed"
          }`}
        >
          {page === "regester" && "ثبت نام"}
          {page === "login" && "ورود"}
          {page === "sendPhone" && "دریافت کد"}
          {page === "sendOtp" && "تایید کد otp"}
          {page === "setNewPass" && "تغییر رمز عبور"}
        </Button>

        {/* 👇 این بخش فقط اصلاح شده برای ریسپانسیو زیبا */}
        <div
          className={`flex flex-col items-center justify-center gap-3 mt-4 text-center sm:flex-row sm:justify-between sm:text-right ${
            (page === "regester" || page === "sendPhone") &&
            "sm:flex-row-reverse"
          }`}
        >
          {(page === "login" || page === "sendOtp") && (
            <Link
              href="/auth/resetPass"
              className="text-secondary-300 text-sm sm:text-base hover:text-secondary-200 transition-colors"
            >
              {page === "login" ? (
                "رمز عبور را فراموش کردید؟"
              ) : (
                <OtpTimer setStep={setStep} />
              )}
            </Link>
          )}

          <p className="text-sm sm:text-base leading-relaxed">
            {page === "regester"
              ? "از قبل ثبت نام کرده‌اید؟"
              : "اگر عضو سایت نیستید؟"}
            <Link
              href={page === "regester" ? "/auth/login" : "/auth/register"}
              className="ml-2 text-secondary-100 font-bold underline underline-offset-4 hover:text-secondary-200 transition-colors"
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
