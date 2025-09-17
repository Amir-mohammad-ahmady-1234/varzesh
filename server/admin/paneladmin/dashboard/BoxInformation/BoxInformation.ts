import prisma from "../../../../../lib/db";

export async function BoxInfoDashboardA() {
  await Promise.all([
    prisma.user.count({ where: { isVerify: true } }),
    prisma.user.count(),
    prisma.ticket.count(),
    prisma.message.count(),
  ]);
}
