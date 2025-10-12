"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BackToHome() {
  const router = useRouter();

  return (
    <p
      onClick={() => router.back()}
      className="text-color-primary-200 hover:text-color-primary-100 transition-all cursor-pointer"
    >
      بازگشت به لیست بلاگ‌ها
    </p>
  );
}
