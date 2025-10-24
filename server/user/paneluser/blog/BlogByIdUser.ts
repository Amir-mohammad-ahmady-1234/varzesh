import { prisma } from "../../../../lib/db";

export async function BlogByIdUser(id: number) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  return blog;
}
