import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/db";

interface IUserFilter {
  status?: "Blocked" | "Waiting" | "Approved";
  role?: "USER" | "ADMIN";
  search?: string;
  page?: number;
  limit?: number;
}

export async function GetUserFilterQuery({
  status,
  role,
  page = 1,
  limit = 10,
  search,
}: IUserFilter) {
  try {
    const where = {} as Prisma.UserWhereInput;
    if (status) {
      where.status = status;
    }
    if (role) {
      where.role = role;
    }
    if (search) {
      const serchietms = search.trim();
      where.OR = [
        { firstname: { contains: serchietms } },
        { email: { contains: serchietms } },
        { phone: { contains: serchietms } },
      ];
    }
    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      await prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (err) {
    console.error(err);
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
