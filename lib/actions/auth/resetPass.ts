const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
import z from "zod";

export interface resetPassState {
  message: {
    password?: string;
    newPassword?: string;
    otherErr?: string;
  };
}

const resetPassSchema = z.object({
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .regex(/[!@#$%^&*]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});

export async function restPass(prevState: resetPassState, formData: FormData) {
  const data = {
    phone: localStorage.getItem("phone"),
    password: formData.get("password"),
    newPassword: formData.get("new-password"),
  };

  const validateData = resetPassSchema.safeParse(data);

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
    (typeof data.newPassword === "string" && !data.newPassword.trim()) ||
    data.newPassword !== data.password
  )
    return {
      message: { newPassword: "تکرار رمز باید با رمز مطاقبت داشته باشد" },
    };

  try {
    const res = await fetch(`${baseUrl}/api/auth/resetpas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: data.phone,
        password: data.password,
      }),
    });

    const result = await res.json();

    if (!res.ok) return { message: { otherErr: result.message } };

    return { message: result.ok };
  } catch {
    return {
      message: { otherErr: "خطای غیرمنتظره رخ داد" },
    };
  }
}
