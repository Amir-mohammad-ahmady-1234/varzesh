"use server";

import { GetUserById } from "../../../server/user/getuserbyid/GetUserById";
import PutProfileUser from "../../../server/user/paneluser/profile/PutProfileUser";
import { updateInfoSchema } from "../../validations/panel";

export type postProfileInfoState =
  | { message?: { otherErr?: string } }
  | { message?: { success?: string } }
  | { message?: { name?: string; email?: string } };

export async function postProfileInfo(
  prevState: postProfileInfoState,
  formData: FormData
) {
  const data = {
    name: formData.get("change-name"),
    email: formData.get("change-email"),
  };

  const validateData = updateInfoSchema.safeParse(data);

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

  const { email, name } = validateData.data;
  try {
    const userID = await GetUserById();

    if (!userID || typeof userID.userId !== "number")
      return { message: { otherErr: "کاربر یافت نشد" } };

    const { status, message, error } = await PutProfileUser({
      id: userID.userId,
      email,
      firstname: name,
    });

    if (status !== 200 || error) return { message: { email: error } };

    return { message: { success: message } };
  } catch {
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
