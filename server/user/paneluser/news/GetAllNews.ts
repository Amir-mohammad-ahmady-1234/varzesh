import { prisma } from "../../../../lib/db";

export async function GetAllNews() {
  try {
    const news = await prisma.news.findMany({ orderBy: { createdAt: "desc" } });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
