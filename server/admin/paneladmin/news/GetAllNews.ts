import prisma from "../../../../lib/db";

export async function GetAllNews() {
  try {
    const news = await prisma.news.findMany();
    return news;
  } catch (err) {
    console.error(err);
    return [];
  }
}
