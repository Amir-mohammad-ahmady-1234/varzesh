import { prisma } from "../../../../../lib/db";

export async function getTicketsByUserId(userId: number) {
  try {
    if (!userId) {
      return { error: "شناسه کاربر معتبر نیست", status: 400 };
    }

    const tickets = await prisma.ticket.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    if (tickets.length === 0) {
      return { message: "هیچ تیکتی برای این کاربر یافت نشد", tickets: [] };
    }

    return { success: true, tickets };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
