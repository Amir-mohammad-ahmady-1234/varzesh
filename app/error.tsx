"use client";

import React from "react";
import { FiRefreshCw, FiHome } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  const handleRetry = () => {
    try {
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  const handleHome = () => router.push("/");

  return (
    <div
      dir="rtl"
      role="alert"
      aria-live="assertive"
      className="min-h-screen flex items-center justify-center p-6 bg-tertiary-200"
    >
      <div
        className="w-full max-w-2xl rounded-large p-8 md:p-12 shadow-xl"
        style={{
          background:
            "linear-gradient(180deg, var(--color-tertiary-300), var(--color-tertiary-200))",
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div
            className="flex-shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 30%), var(--color-tertiary-400)",
              boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
            }}
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-error-400), var(--color-error-500))",
              }}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-neutral-100">
                ⚠️
              </span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h5 className="text-3xl md:text-4xl font-extrabold leading-tight text-error-500 mb-2">
              اتصال برقرار نیست
            </h5>
            <p className="text-base md:text-lg text-secondary-100 mb-4 leading-relaxed">
              دریافت داده‌ها با مشکل مواجه شد. لطفاً اتصال اینترنت خود را بررسی
              کرده و دوباره تلاش کنید.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-3 mt-2">
              <button
                onClick={handleRetry}
                className="inline-flex items-center cursor-pointer gap-2 px-5 py-3 font-semibold rounded-medium shadow-lg transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: "var(--color-primary-100)",
                  color: "var(--color-neutral-100)",
                  boxShadow: "0 10px 30px rgba(88,47,245,0.12)",
                }}
              >
                <FiRefreshCw className="text-lg" aria-hidden />
                تلاش مجدد
              </button>

              <button
                onClick={handleHome}
                className="inline-flex items-center cursor-pointer gap-2 px-5 py-3 font-semibold rounded-medium shadow-inner transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: "transparent",
                  color: "var(--color-neutral-100)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <FiHome className="text-lg" aria-hidden />
                بازگشت به صفحه اصلی
              </button>
            </div>

            <p className="text-sm mt-4 text-neutral-600 md:text-right text-center max-w-prose mx-auto md:mx-0">
              اگر مشکل ادامه داشت، لطفاً بعداً دوباره تلاش کنید یا با پشتیبانی
              تماس بگیرید.
            </p>
          </div>
        </div>

        <div className="mt-6 text-xs text-neutral-600 text-center md:text-right">
          <span>
            لاگ‌های فنی ثبت شده‌اند — این به ما کمک می‌کند مشکل را سریع‌تر حل
            کنیم.
          </span>
        </div>
      </div>
    </div>
  );
}
