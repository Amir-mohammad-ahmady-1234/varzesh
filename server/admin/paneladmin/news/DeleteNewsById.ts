import prisma from "../../../../lib/db";

export async function DeleteNewsById(id: number) {
  try {
    const dosnotid = await prisma.news.findUnique({ where: { id } });
    if (!dosnotid) {
      return { status: 404, meg: "وجود ندارد" };
    }
    const news = await prisma.news.delete({
      where: { id },
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
