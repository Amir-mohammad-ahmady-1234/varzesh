import prisma from "../../../../lib/db";

export type BlogProps = {
  id?: number;
  title: string;
  profile: string;
  img: string;
  category: string;
  summary: string;
  description: string;
};

export async function BlogCreate(props: BlogProps) {
  const blog = await prisma.blog.create({
    data: props,
  });
  return blog;
}
