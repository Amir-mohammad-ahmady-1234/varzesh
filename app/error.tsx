"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiRefreshCw } from "react-icons/fi";

function Error() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-tertiary-200 p-4 text-center">
      <div className="max-w-md w-full bg-neutral-800 shadow-xl rounded-large p-10 flex flex-col items-center gap-6">
        <h3 className="text-5xl md:text-6xl font-extrabold text-error-500 mb-2">
          ⚠️ اتصال برقرار نیست
        </h3>
        <h5 className="text-lg md:text-2xl font-semibold mb-4 text-secondary-100 leading-relaxed">
          خطا در دریافت اطلاعات. اتصال خود را بررسی کرده و دوباره تلاش کنید.
        </h5>
        <span
          onClick={() => router.refresh()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-neutral-100 rounded-medium shadow-lg hover:bg-primary-200 transition cursor-pointer select-none"
        >
          <FiRefreshCw className="text-lg" />
          تلاش مجدد
        </span>
      </div>
    </div>
  );
}

export default Error;
