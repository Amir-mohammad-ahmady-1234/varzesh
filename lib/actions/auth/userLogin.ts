"use server";

import { LoginSchema } from "../../../app/api/auth/login/route";

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
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validateData.data),
    });
    console.log(res);

    const result = await res.json();
    console.log(result);

    if (!res.ok) return { message: { otherErr: result.message } };

    return { message: result.message };
  } catch {
    return {
      message: { otherErr: "خطای غیرمنتظره رخ داد" },
    };
  }
}
