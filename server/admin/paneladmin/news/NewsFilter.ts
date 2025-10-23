import { Prisma } from "@prisma/client";
import { prisma } from "../../../../lib/db";

interface TNewsFilter {
  search?: string;
  status?: "Simple" | "Medium" | "Special";
  page?: number;
  limit?: number;
}

export async function NewsFilter({
  search,
  status,
  page = 1,
  limit = 10,
}: TNewsFilter) {
  try {
    const where: Prisma.NewsWhereInput = {};

    if (search) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: "insensitive" } },
        { summary: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (status) {
      where.status = status;
    }

    const skip = (page - 1) * limit;

    const [newsList, total] = await Promise.all([
      prisma.news.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.news.count({ where }),
    ]);

    return {
      data: newsList,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
