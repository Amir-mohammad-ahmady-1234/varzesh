import prisma from "../../../../lib/db";

export async function BlogGet() {
  const blog = await prisma.blog.findMany({ orderBy: { id: "desc" } });
  return blog;
}
