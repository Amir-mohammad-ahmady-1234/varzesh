"use server";

import { getOtpStateSchema } from "../../validations/auth";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export interface getOtpState {
  message: {
    phone?: string;
    otherErr?: string;
  };
}

export async function getOtp(prevState: getOtpState, formData: FormData) {
  const data = { phone: formData.get("phone") };

  const validateData = getOtpStateSchema.safeParse(data);

  console.log("Data sent:", data);
  console.log("Validate result:", validateData);

  if (!validateData.success) {
    const fieldErrors: Record<string, string> = {};

    validateData.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });

    return {
      message: { ...fieldErrors },
    };
  }

  try {
    const res = await fetch(`${baseUrl}/api/auth/resereq`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    console.log("Fetch status:", res.status);
    console.log("Result:", result);

    if (!res.ok) {
      return { message: { otherErr: result.message } };
    }

    return { message: result.otp };
  } catch {
    return { message: { otherErr: "خطای غیرمنتظره رخ داد" } };
  }
}
