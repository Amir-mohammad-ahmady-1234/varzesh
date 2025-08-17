import z from "zod";

export interface resetPassState {
  message: {
    phone?: string;
    otherErr?: string;
  };
}

const resetPassSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
});

export async function ResetPassword(
  prevState: resetPassState,
  formData: FormData
) {
  const data = { phone: formData.get("phone") };

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

  try {
    const res = await fetch("http://localhost:3000/api/auth/resereq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      console.log(result.message);
      return { message: { otherErr: result.message } };
    }

    return { message: result.otp };
  } catch {
    return { message: { otherErr: "خطای غیرمنتظره رخ داد" } };
  }
}
