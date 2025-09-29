import { Prisma } from "@prisma/client";
import prisma from "../../../../lib/db";

type TCreateNews = Prisma.NewsCreateInput;
export async function CreateNews(params: TCreateNews) {
  try {
    const news = await prisma.news.create({
      data: params,
    });
    return news;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
