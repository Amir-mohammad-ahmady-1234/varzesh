import { Prisma } from "@prisma/client";
import prisma from "../../../../../lib/db";
type TGetSupportFilterQuery = {
  serch?: string;
  status?: "Blocked" | "Waiting" | "Approved";
  priority?: "NORMAL" | "URGENT";
  sort?: "asc" | "desc";
};
export async function GetSupportFilterQuery({
  serch,
  status,
  priority,
  sort,
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
      where.status = status;
    }
    if (priority) {
      where.priority = priority;
    }
    const supports = await prisma.ticket.findMany({
      where,
      orderBy: { createdAt: sort || "desc" },
    });
    return supports;
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
