import { Prisma } from "@prisma/client";
import prisma from "../../../../lib/db";
import { uploadFile } from "../../../../utils/uploadFile";

type TCreateNews = Prisma.NewsCreateInput;
export async function CreateNews(params: TCreateNews) {
  const imgPath = await uploadFile(params.img, "uploads");

  try {
    const news = await prisma.news.create({
      data: {
        ...params,
        img: imgPath,
      },
    });
    return news;
  } catch (err) {
    console.log(err);
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
