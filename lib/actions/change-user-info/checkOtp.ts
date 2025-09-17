"use server";

import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import CheckOtpPhone from "../../../server/user/paneluser/profile/CheckOtpPhone";

export async function checkOtp(otp: string) {
  try {
    const user = await GetUserById();
    if (!user || !user.userId || typeof user.userId !== "number")
      return { message: { error: "کاربر یافت نشد!" } };

    const id = user.userId;

    const { error, message, status } = await CheckOtpPhone({ id, otp });

    if (error) {
      return { message: { error: error } };
    } else if (status === 200 && message) {
      return { message: { success: message } };
    }
  } catch {
    return { messages: { error: "خطا در برسی کد otp" } };
  }
}
 