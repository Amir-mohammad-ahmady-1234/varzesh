import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/db";

interface IUserFilter {
  status?: "Blocked" | "Waiting" | "Approved";
  role?: "USER" | "ADMIN";
  search?: string;
}

export async function GetUserFilterQuery({
  status,
  role,
  search,
}: IUserFilter) {
  try {
    const where: Prisma.UserWhereInput = {};

    if (status) where.status = status;
    if (role) where.role = role;
    if (search) {
      const searchLower = search.toLowerCase();
      where.OR = [
        { firstname: { contains: searchLower } },
        { email: { contains: searchLower } },
        { phone: { contains: searchLower } },
      ];
    }
    const users = await prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return { data: users, status: 200 };
  } catch (err) {
    console.error(err);
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
