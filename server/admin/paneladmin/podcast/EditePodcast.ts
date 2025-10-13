import { PodcastCategory } from "@prisma/client";
import prisma from "../../../../lib/db";

interface EditPodcastInput {
  id: number;
  title?: string;
  img?: string;
  category?: PodcastCategory;
  summary?: string;
  description?: string;
  audioUrl?: string;
}

export async function editPodcast(data: EditPodcastInput) {
  try {
    const { id, title, img, category, summary, description, audioUrl } = data;

    if (!id) {
      return { status: 400, error: "آیدی پادکست الزامی است" };
    }

    const exist = await prisma.podcast.findUnique({ where: { id } });
    if (!exist) {
      return { status: 404, error: "پادکست مورد نظر یافت نشد" };
    }

    const updatedPodcast = await prisma.podcast.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(img && { img }),
        ...(category && { category }),
        ...(summary && { summary }),
        ...(description && { description }),
        ...(audioUrl && { audioUrl }),
      },
    });

    return { status: 200, success: true, podcast: updatedPodcast };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
