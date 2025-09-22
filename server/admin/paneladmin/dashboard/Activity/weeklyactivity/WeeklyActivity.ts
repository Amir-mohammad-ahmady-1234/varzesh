import prisma from "../../../../../../lib/db";

export async function WeeklyActivity() {
  const [totalUsers, activeUsers] = await Promise.all([
    prisma.user.count({ where: { isVerify: true } }),
    prisma.message.count(),
  ]);
  return {
    status: 200,
    totalUsers,
    activeUsers,
    engagement: activeUsers / totalUsers,
  };
}
