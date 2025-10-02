"use server";

import { BlogDelete } from "../../../server/admin/paneladmin/blog/BlogDelete";
import { DeleteNewsById } from "../../../server/admin/paneladmin/news/DeleteNewsById";

export interface DeleteBlogState {
  message?: string;
}

export async function DeleteBlog(
  prevState: DeleteBlogState,
  formData: FormData
) {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    return { message: "شناسه بلاگ نامعتبر است" };
  }

  try {
    await BlogDelete({ id });
    return { message: "بلاگ حذف شد" };
  } catch {
    return { message: "حذف با خطا مواجه شد" };
  }
}

// Adapter for form action usage without prevState
export async function DeleteBlogAction(id: number) {
  return DeleteNewsById(id);
}
