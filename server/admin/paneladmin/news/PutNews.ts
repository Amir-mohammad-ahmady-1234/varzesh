import { Prisma } from "@prisma/client";
import prisma from "../../../../lib/db";
type TUpdateNews = Prisma.NewsUpdateInput & { id: number };

export async function PutNews(params: TUpdateNews) {
  try {
    const existingNews = await prisma.news.findUnique({
      where: { id: params.id },
    });
    if (!existingNews) {
      return { status: 404, message: "وجود ندارد" };
    }
    const news = await prisma.news.update({
      where: { id: params.id },
      data: params,
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
