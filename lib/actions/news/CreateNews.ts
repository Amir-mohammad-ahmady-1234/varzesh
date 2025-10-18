"use server";

export interface BlogFormState {
  message: {
    title: string;
    img: string;
    status: $Enums.NewStatus;
    summary: string;
    description: string;
    createdAt?: Date | string;
  };
}
import { $Enums } from "@prisma/client";
import { newsSchema } from "../../validations/news";
import { CreateNews } from "../../../server/admin/paneladmin/news/CreateNews";
import { revalidatePath } from "next/cache";

export async function CreateNewsCart(
  prevState: BlogFormState,
  formData: FormData
) {
  const data = {
    title: formData.get("title"),
    img: formData.get("image"),
    status: formData.get("status"),
    summary: formData.get("summary"),
    description: formData.get("content"),
  };

  const validationData = newsSchema.safeParse(data);

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
    const news = await CreateNews(validationData.data);
    revalidatePath("/admin/news");
    return { message: { success: "خبر جدید با موفقیت ثبت شد", news } };
  } catch (err) {
    console.log(err);
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
