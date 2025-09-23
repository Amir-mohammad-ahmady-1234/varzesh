import prisma from "../../../../../lib/db";

export async function BoxInfoDashboardA() {
  try {
    const [ActiveUsers, Users, OpenTickets, Messages] = await Promise.all([
      prisma.user.count({ where: { isVerify: true } }),
      prisma.user.count(),
      prisma.ticket.count({ where: { status: "Open" } }),
      prisma.message.count(),
    ]);

    return { status: 200, ActiveUsers, Users, OpenTickets, Messages };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
