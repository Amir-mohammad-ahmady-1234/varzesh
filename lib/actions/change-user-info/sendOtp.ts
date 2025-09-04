"use server";

import toast from "react-hot-toast";
import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import PutphoneUser from "../../../server/user/paneluser/profile/PutphoneUser";

export async function sendOtp() {
  try {
    const user = await GetUserById();
    if (!user || !user.userId || typeof user.userId !== "number")
      return { message: { error: "کاربر یافت نشد!" } };

    const { error, message, otpcode, status } = await PutphoneUser(user.userId);

    if (error) {
      toast.error(error);
    } else if (status === 200 && message) {
      return { message: { otpcode, success: message } };
    }
  } catch {
    return { messages: { error: "خطا در ارسال کد otp" } };
  }
}
