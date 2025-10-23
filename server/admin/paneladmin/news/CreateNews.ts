import { Prisma } from "@prisma/client";
import { uploadImage } from "../../../../lib/cloudinary";
import { prisma } from "../../../../lib/db";

type TCreateNews = Prisma.NewsCreateInput;
export async function CreateNews(params: TCreateNews) {
  const imgPath = await uploadImage(params.img);

  try {
    const news = await prisma.news.create({
      data: {
        ...params,
        img: imgPath,
      },
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
