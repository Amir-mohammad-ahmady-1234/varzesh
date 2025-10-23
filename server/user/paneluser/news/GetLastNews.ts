import { prisma } from "../../../../lib/db";

export async function GetLastNews(limit: number) {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
