import prisma from "../../../../lib/db";
import { Prisma } from "@prisma/client";

type BlogUpdateProps = {
  id: number;
  data: Prisma.BlogUpdateInput;
};

export async function BlogUpdate(props: BlogUpdateProps) {
  const blog = await prisma.blog.update({
    where: { id: props.id },
    data: props.data,
  });
  return blog;
}
