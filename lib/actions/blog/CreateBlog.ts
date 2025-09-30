"use server";

import { BlogFormState } from "../../../components/pages/adminpanel/pages/blog/NewBlogModal";
import { BlogCreate } from "../../../server/admin/paneladmin/blog/BlogCreate";
import { blogSchema } from "../../validations/blog";

export async function CreateBlog(prevState:BlogFormState, formData: FormData) {
  const data = {
    title: formData.get("title"),
    category: formData.get("category"),
    profile: formData.get("profile"),
    img: formData.get("image"),
    description: formData.get("content"),
    summary: formData.get("summary"),
  };

  const validationData = blogSchema.safeParse(data);

  if (!validationData.success) {
    const fieldErrors: Record<string, string> = {};

    validationData.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });
    return {
      message: { ...fieldErrors },
    };
  }

  try {
    const blog = await BlogCreate(validationData.data);

    return { message: { success: "بلاگ جدید با موفقیت ثبت شد", blog } };
  } catch {
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
