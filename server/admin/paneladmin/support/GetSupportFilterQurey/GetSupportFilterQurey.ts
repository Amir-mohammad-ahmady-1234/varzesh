import { Priority, Prisma, Status } from "@prisma/client";
import prisma from "../../../../../lib/db";
type TGetSupportFilterQuery = {
  serch?: string;
  status?: "Blocked" | "Waiting" | "Approved" | "Open";
  priority?: "NORMAL" | "URGENT" | "LOW" | "HIGH";
  sort?: "asc" | "desc";
  page?: number;
  limit?: number;
};
export async function GetSupportFilterQuery({
  serch,
  status,
  priority,
  sort,
  page = 1,
  limit = 10,
}: TGetSupportFilterQuery) {
  try {
    const where = {} as Prisma.TicketWhereInput;
    if (serch) {
      const serchietms = serch?.trim();
      where.OR = [
        { title: { contains: serchietms } },
        { description: { contains: serchietms } },
      ];
    }
    if (status) {
      where.status = status as Status;
    }
    if (priority) {
      where.priority = priority as Priority;
    }
    const skip = (page - 1) * limit;
    const [supports, total] = await Promise.all([
      prisma.ticket.findMany({
        skip,
        take: limit,
        where,
        orderBy: { createdAt: sort || "desc" },
      }),
      prisma.ticket.count({ where }),
    ]);
    return {
      data: supports,
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
