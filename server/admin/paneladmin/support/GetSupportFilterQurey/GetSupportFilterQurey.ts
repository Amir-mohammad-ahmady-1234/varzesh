import { Prisma, Status } from "@prisma/client";
import prisma from "../../../../../lib/db";
type TGetSupportFilterQuery = {
  serch?: string;
  status?: "Blocked" | "Waiting" | "Approved" | "URGENT";
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
      where.status = status as Status;
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
