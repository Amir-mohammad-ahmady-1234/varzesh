"use server";

import { DeletePodcast } from "../../../server/admin/paneladmin/podcast/DeletePodcast";

export interface DeleteBlogState {
  message?: string;
}

export async function DeleteSelectedPodcast(
  prevState: DeleteBlogState,
  formData: FormData
) {
  const idValue = formData.get("id");
  const id = Number(idValue);

  if (!id || Number.isNaN(id)) {
    return { message: "شناسه بلاگ نامعتبر است" };
  }

  try {
    await DeletePodcast(id);
    return { message: "بلاگ حذف شد" };
  } catch {
    return { message: "حذف با خطا مواجه شد" };
  }
}

export async function DeletePodcastAction(formData: FormData) {
  return DeleteSelectedPodcast({}, formData);
}
