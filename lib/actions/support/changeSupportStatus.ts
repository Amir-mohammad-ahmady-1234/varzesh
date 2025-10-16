"use server";

import { revalidatePath } from "next/cache";
import { ApprovedSupport } from "../../../server/admin/paneladmin/support/ApprovedSupport/ApprovedSupport";

export interface changeStatusState {
  message?: string;
}

export async function ChangeSupportStatus(
  prevState: changeStatusState,
  formData: FormData
) {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    return { message: "شناسه تیکت نامعتبر است" };
  }

  try {
    await ApprovedSupport(id);
    revalidatePath("/admin/support");
    return { message: "وضعیت تیکت به حل شده تغییر یافت" };
  } catch {
    return { message: "تغییر وضعیت با خطا مواجه شد" };
  }
}

export async function ChangeSupportStatusAction(formData: FormData) {
  return ChangeSupportStatus({}, formData);
}
