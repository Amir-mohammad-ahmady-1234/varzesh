import prisma from "../../../../lib/db";
import { uploadFile } from "../../../../utils/uploadFile";

export type BlogProps = {
  id?: number;
  title: string;
  profile: File;
  img: File;
  category: string;
  summary: string;
  description: string;
  author: string;
};

export async function BlogCreate(props: BlogProps) {
  const dbPath = await uploadFile(props.img, "uploads");
  const dbPathprofile = await uploadFile(props.profile, "uploads");

  const blog = await prisma.blog.create({
    data: {
      ...props,
      img: dbPath,
      profile: dbPathprofile,
    },
  });
  return blog;
}
