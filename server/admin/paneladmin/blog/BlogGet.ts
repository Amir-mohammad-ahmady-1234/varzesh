import prisma from "../../../../lib/db";

export async function BlogGet() {
  const blog = await prisma.blog.findMany();
  return blog;
}
