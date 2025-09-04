"use server";

import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import { ChngePhone } from "../../../server/user/paneluser/profile/ChngePhone";
import { getOtpStateSchema } from "../../validations/auth";

export async function setNewPhone(Newphone: string) {
  try {
    const user = await GetUserById();
    if (!user || !user.userId || typeof user.userId !== "number")
      return { message: { error: "کاربر یافت نشد!" } };
    const id = user.userId;

    const parsed = getOtpStateSchema.safeParse({ phone: Newphone });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};

      parsed.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });


      return {
        message: { error: fieldErrors.phone },
      };
    }

    const { error, message, status } = await ChngePhone({
      id,
      phone: Newphone,
    });

    if (error) {
      return { message: { error: error } };
    } else if (status === 200 && message) {
      return { message: { success: message } };
    }
  } catch {
    return { messages: { error: "خطا در برسی کد otp" } };
  }
}
