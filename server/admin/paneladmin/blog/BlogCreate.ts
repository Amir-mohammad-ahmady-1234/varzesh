import { uploadImage } from "../../../../lib/cloudinary";
import prisma from "../../../../lib/db";

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
  const dbPath = await uploadImage(props.img);
  const dbPathprofile = await uploadImage(props.profile);

  const blog = await prisma.blog.create({
    data: {
      ...props,
      img: dbPath,
      profile: dbPathprofile,
    },
  });
  return blog;
}
