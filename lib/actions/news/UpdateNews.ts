"use server";

import { PutNews } from "../../../server/admin/paneladmin/news/PutNews";

export interface UpdateNewsState {
  message?: string;
}

export async function UpdateNews(
  prevState: UpdateNewsState,
  formData: FormData
) {
  const idValue = formData.get("id");
  const title = formData.get("title");
  const summary = formData.get("summary");
  const status = formData.get("status");
  const description = formData.get("description");

  const id = Number(idValue);
  if (!id || Number.isNaN(id)) {
    return { message: "شناسه خبر نامعتبر است" };
  }

  try {
    await PutNews({
      id,
      data: {
        ...(title ? { title: String(title) } : {}),
        ...(summary ? { summary: String(summary) } : {}),
        ...(status ? { status: String(status) } : {}),
        ...(description ? { description: String(description) } : {}),
      },
    });
    return { message: "بروزرسانی موفق بود" };
  } catch {
    return { message: "بروزرسانی با خطا مواجه شد" };
  }
}

// Adapter for form action usage without prevState
export async function UpdateNewsAction(formData: FormData) {
  return UpdateNews({}, formData);
}
