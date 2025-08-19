"use server";

import { createUserSchema } from "../../../app/api/auth/register/route";

export interface userRegesterState {
  message: {
    firstname?: string;
    phone?: string;
    password?: string;
    repeatPass?: string;
    otherErr?: string;
  };
}

export async function userRegester(
  prevState: userRegesterState,
  formData: FormData
) {
  const data = {
    firstname: formData.get("name"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    repeatPass: formData.get("repeat-password"),
  };

  const validateData = createUserSchema.safeParse(data);

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

  if (
    (typeof data.repeatPass === "string" && !data.repeatPass.trim()) ||
    data.repeatPass !== data.password
  )
    return {
      message: { repeatPass: "تکرار رمز باید با رمز مطاقبت داشته باشد" },
    };

  try {
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
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
