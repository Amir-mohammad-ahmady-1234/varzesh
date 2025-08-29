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
    const users = await prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    return { status: 200, users };
  } catch (err) {
    console.error(err);
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
