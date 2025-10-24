import { prisma } from "../../../../lib/db";

type BlogDeleteProps = {
  id: number;
};

export async function BlogDelete(props: BlogDeleteProps) {
  const blog = await prisma.blog.delete({
    where: { id: props.id },
  });
  return blog;
}
