"use server";

import { revalidatePath } from "next/cache";
import { BlogDelete } from "../../../server/admin/paneladmin/blog/BlogDelete";

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
    revalidatePath("/admin/blog");
    return { message: "بلاگ حذف شد" };
  } catch {
    return { message: "حذف با خطا مواجه شد" };
  }
}

export async function DeleteBlogAction(formData: FormData) {
  return DeleteBlog({}, formData);
}
