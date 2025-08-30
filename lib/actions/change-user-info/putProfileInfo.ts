"use server";

import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import { PostProfileUser } from "../../../server/user/paneluser/profile/PostProfileUser";
import { changeInfoSchema } from "../../validations/panel";

export type putProfileInfoState =
  | { message?: { otherErr?: string } }
  | { message?: { success?: string; path?: string } }
  | { message?: { profile?: string; email?: string } };

export async function putProfileInfo(
  prevState: putProfileInfoState,
  formData: FormData
) {
  const data = {
    profile: formData.get("change-profile"),
    email: formData.get("change-email"),
  };

  const validateData = changeInfoSchema.safeParse(data);

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

  const { email, profile } = validateData.data;
  try {
    const userID = await GetUserById();

    if (!userID || typeof userID.userId !== "number")
      return { message: { otherErr: "کاربر یافت نشد" } };

    const { status, message, error, path } = await PostProfileUser({
      id: 3,
      email,
      file: profile,
    });

    if (status !== 200 || error) return { message: { otherErr: error } };

    return { message: { success: message, path } };
  } catch {
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
