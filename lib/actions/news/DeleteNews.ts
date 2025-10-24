"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../db";

export interface DeleteNewsState {
  message?: string;
}

export async function DeleteNews(
  prevState: DeleteNewsState,
  formData: FormData
): Promise<void> {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    // return { message: "شناسه بلاگ نامعتبر است" };
  }
  try {
    await prisma.news.delete({ where: { id: id } });
    revalidatePath("/admin/news");
    // return { message: "بلاگ حذف شد" };
  } catch {
    // return { message: "حذف با خطا مواجه شد" };
  }
}

export async function DeleteNewsAction(formData: FormData) {
  return DeleteNews({}, formData);
}
