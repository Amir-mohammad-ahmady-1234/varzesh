"use server";

import { revalidatePath } from "next/cache";
import { ChangeStatusUserDelete } from "../../../server/admin/paneladmin/users/ChangeStatusUser/ChangeStatusUser";

export interface changeStatusStatus {
  message?: string;
}

export async function ChangeUserStatusToBlock(
  prevState: changeStatusStatus,
  formData: FormData
) {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    return { message: "شناسه کاربر نامعتبر است" };
  }

  try {
    await ChangeStatusUserDelete(id);
    revalidatePath("/admin/users");

    return { message: "وضعیت کاربر به مسدود شده تغییر یافت" };
  } catch {
    return { message: "تغییر وضعیت با خطا مواجه شد" };
  }
}

export async function ChangeStatusToBlock(formData: FormData) {
  return ChangeUserStatusToBlock({}, formData);
}
