import prisma from "../../../../lib/db";

export async function GetSpecialNews(limit: number) {
  try {
    const news = await prisma.news.findMany({
      where: { status: "Special" },
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
