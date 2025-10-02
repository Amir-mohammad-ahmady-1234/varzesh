"use server";

import { DeleteNewsById } from "../../../server/admin/paneladmin/news/DeleteNewsById";

export interface DeleteNewsState {
  message?: string;
}

export async function DeleteNews(id: number) {
  if (!id || Number.isNaN(id)) {
    return { message: "شناسه خبر نامعتبر است" };
  }

  try {
    await DeleteNewsById(id);
    return { message: "خبر حذف شد" };
  } catch {
    return { message: "حذف با خطا مواجه شد" };
  }
}

// Adapter for form action usage without prevState
export async function DeleteNewsAction(id: number) {
  return DeleteNewsById(id);
}
