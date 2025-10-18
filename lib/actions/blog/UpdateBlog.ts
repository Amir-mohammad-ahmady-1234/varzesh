"use server";

import { revalidatePath } from "next/cache";
import { BlogUpdate } from "../../../server/admin/paneladmin/blog/BlogEdite";

export interface UpdateBlogState {
  message?: string;
}

export async function UpdateBlog(
  prevState: UpdateBlogState,
  formData: FormData
) {
  const idValue = formData.get("id");
  const title = formData.get("title");
  const summary = formData.get("summary");
  const category = formData.get("category");
  const description = formData.get("description");

  const id = Number(idValue);
  if (!id || Number.isNaN(id)) {
    return { message: "شناسه بلاگ نامعتبر است" };
  }

  try {
    await BlogUpdate({
      id,
      data: {
        ...(title ? { title: String(title) } : {}),
        ...(summary ? { summary: String(summary) } : {}),
        ...(category ? { category: String(category) } : {}),
        ...(description ? { description: String(description) } : {}),
      },
    });
    revalidatePath("/admin/blog");
    return { message: "بروزرسانی موفق بود" };
  } catch {
    return { message: "بروزرسانی با خطا مواجه شد" };
  }
}

// Adapter for form action usage without prevState
export async function UpdateBlogAction(formData: FormData) {
  return UpdateBlog({}, formData);
}
