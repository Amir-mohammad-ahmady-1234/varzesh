import { Prisma } from "@prisma/client";
import { prisma } from "../../../../lib/db";

interface TBlogFilter {
  search?: string;
  category?: string;
  author?: string;
  page?: number;
  limit?: number;
}

export async function BlogFilter({
  search,
  category,
  author,
  page = 1,
  limit = 10,
}: TBlogFilter) {
  try {
    const where: Prisma.BlogWhereInput = {};

    if (search) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: "insensitive" } },
        { summary: { contains: searchTerm, mode: "insensitive" } },
        { description: { contains: searchTerm, mode: "insensitive" } },
        { author: { contains: searchTerm, mode: "insensitive" } },
      ];
    }

    if (category) {
      where.category = { equals: category, mode: "insensitive" };
    }

    if (author) {
      where.author = { equals: author, mode: "insensitive" };
    }

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "desc" },
      }),
      prisma.blog.count({ where }),
    ]);

    return {
      data: blogs,
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
