import prisma from "../../../../lib/db";

type BlogCreateProps = {
  title: string;
  profile: string;
  img: string;
  category: string;
  summary: string;
  description: string;
};

export async function BlogCreate(props: BlogCreateProps) {
  const blog = await prisma.blog.create({
    data: props,
  });
  return blog;
}
