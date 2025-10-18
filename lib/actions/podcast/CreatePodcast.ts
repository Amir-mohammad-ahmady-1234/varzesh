"use server";

import { revalidatePath } from "next/cache";
import { PodcastCreate } from "../../../server/admin/paneladmin/podcast/CreatePodcast";
import { podcastSchema } from "../../validations/podcast";

export interface Podcast {
  id: string;
  title: string;
  category: string;
  img: string;
  audio: string;
  description: string;
  summary: string;
  createdAt: Date;
}
export interface PodcastFormState {
  message: {
    title?: string;
    category?: string;
    img?: string;
    audio?: string;
    summary?: string;
    description?: string;
    otherErr?: string;
    success?: string;
    podcast?: Podcast;
  };
}
export interface PodcastFormData {
  title: string;
  category: string;
  img: string;
  audio: string;
  description: string;
  summary: string;
}
export async function CreatePodcast(
  prevState: PodcastFormState,
  formData: FormData
) {
  const data = {
    title: formData.get("title"),
    category: formData.get("category"),
    img: formData.get("image"),
    audio: formData.get("audio"),
    description: formData.get("content"),
    summary: formData.get("summary"),
  };

  const validationResult = podcastSchema.safeParse(data);

  if (!validationResult.success) {
    const fieldErrors: Record<string, string> = {};
    validationResult.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      fieldErrors[field] = err.message;
    });
    return { message: { ...fieldErrors } };
  }

  try {
    const podcast = await PodcastCreate(validationResult.data);

    if ("error" in podcast) {
      return { message: { otherErr: podcast.error } };
    }
    revalidatePath("/admin/podcast");
    return { message: { success: "پادکست جدید با موفقیت ثبت شد", podcast } };
  } catch {
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
