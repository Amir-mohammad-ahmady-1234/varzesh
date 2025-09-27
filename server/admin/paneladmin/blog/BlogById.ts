import prisma from "../../../../lib/db";

export async function BlogById(id: number) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  return blog;
}
