import { prisma } from "../../../../lib/db";

export async function GetNewsById(id: number) {
  try {
    const existingNews = await prisma.news.findUnique({
      where: { id },
    });
    if (!existingNews) {
      return { status: 404, message: "وجود ندارد" };
    }
    const news = await prisma.news.findUnique({
      where: { id },
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
