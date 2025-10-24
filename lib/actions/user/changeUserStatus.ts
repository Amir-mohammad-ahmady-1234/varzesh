"use server";

import { revalidatePath } from "next/cache";
import { ChangeStatusUserVrify } from "../../../server/admin/paneladmin/users/ChangeStatusUser/ChangeStatusUser";

export interface changeStatusStatus {
  message?: string;
}

export async function ChangeUserStatus(
  prevState: changeStatusStatus,
  formData: FormData
): Promise<void> {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    // return { message: "شناسه کاربر نامعتبر است" };
  }

  try {
    await ChangeStatusUserVrify(id);
    revalidatePath("/admin/users");

    // return { message: "وضعیت کاربر به احراز هویت شده تغییر یافت" };
  } catch {
    // return { message: "تغییر وضعیت با خطا مواجه شد" };
  }
}

export async function ChangeUserStatusAction(formData: FormData) {
  return ChangeUserStatus({}, formData);
}
