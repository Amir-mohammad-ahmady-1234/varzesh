import prisma from "../../../../lib/db";

export async function BlogGetUser() {
  const blog = await prisma.blog.findMany();
  return blog;
}
