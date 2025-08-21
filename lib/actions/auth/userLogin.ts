"use server";

import { LoginSchema } from "../../../app/api/auth/login/route";
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export interface userLoginState {
  message: {
    phone?: string;
    password?: string;
    otherErr?: string;
  };
}

export async function userLogin(prevState: userLoginState, formData: FormData) {
  const data = {
    phone: formData.get("phone"),
    password: formData.get("password"),
  };

  const validateData = LoginSchema.safeParse(data);

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
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validateData.data),
    });

    const result = await res.json();

    if (!res.ok) return { message: { otherErr: result.message } };

    return { message: result.message };
  } catch {
    return {
      message: { otherErr: "خطای غیرمنتظره رخ داد" },
    };
  }
}
