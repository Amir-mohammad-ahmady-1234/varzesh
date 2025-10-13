import prisma from "../../../../lib/db";

export async function DeletePodcast(id: number) {
  try {
    const exist = prisma.podcast.findUnique({ where: { id } });
    if (!exist) {
      return { status: 400, error: "ایدی وحود ندارد" };
    }
    const tiket = await prisma.podcast.delete({ where: { id } });
    return { status: 200, tiket };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
