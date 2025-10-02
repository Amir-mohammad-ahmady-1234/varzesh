"use server";

import { PodcastCreate } from "../../../server/admin/paneladmin/podcast/CreatePodcast";
import { podcastSchema } from "../../validations/podcast";

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
    podcast?: any;
  };
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
  } as any;

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
    const podcast = await PodcastCreate(validationResult.data as any);
    if ((podcast as any)?.error) {
      return { message: { otherErr: (podcast as any).error } };
    }
    return { message: { success: "پادکست جدید با موفقیت ثبت شد", podcast } };
  } catch {
    return { message: { otherErr: "خطای غیر منتظره" } };
  }
}
