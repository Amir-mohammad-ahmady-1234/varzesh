"use server";

import { revalidatePath } from "next/cache";
import { editPodcast } from "../../../server/admin/paneladmin/podcast/EditePodcast";
import { PodcastCategory } from "@prisma/client";

export interface UpdatePodcastState {
  message?: string;
}

export async function UpdatePodcast(
  prevState: UpdatePodcastState,
  formData: FormData
): Promise<void> {
  const idValue = formData.get("id");
  const title = formData.get("title") as string | null;
  const img = formData.get("img") as string | null;
  const category = formData.get("category") as PodcastCategory | null;
  const summary = formData.get("summary") as string | null;
  const description = formData.get("description") as string | null;
  const audioUrl = formData.get("audioUrl") as string | null;

  const id = Number(idValue);
  if (!id || Number.isNaN(id)) {
    // return { message: "شناسه پادکست نامعتبر است" };
  }

  try {
    const res = await editPodcast({
      id,
      title: title ?? undefined,
      img: img ?? undefined,
      category: category ?? undefined,
      summary: summary ?? undefined,
      description: description ?? undefined,
      audioUrl: audioUrl ?? undefined,
    });

    if (res.status !== 200) {
      // return { message: res.error || "خطا در بروزرسانی پادکست" };
    }
    revalidatePath("/admin/podcast");
    // return { message: "بروزرسانی پادکست با موفقیت انجام شد ✅" };
  } catch (err) {
    console.error(err);
    // return { message: "خطای سرور در هنگام بروزرسانی پادکست" };
  }
}

export async function UpdatePodcastAction(formData: FormData) {
  return UpdatePodcast({}, formData);
}
