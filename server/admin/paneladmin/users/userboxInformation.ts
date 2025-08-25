import prisma from "../../../../lib/db";
export async function getUserStatistics() {
  try {
    const [totalUsers, activeUsers, blockedUsers, totalAdmins] =
      await Promise.all([
        prisma.user.count(),
        prisma.user.count({ where: { isVerify: true } }),
        prisma.user.count({ where: { isVerify: false } }),
        prisma.user.count({ where: { role: "ADMIN" } }),
      ]);

    return {
      status: 200,
      totalUsers,
      activeUsers,
      blockedUsers,
      totalAdmins,
    };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}

export async function getAllUsers() {
  try {
    const totalUsers = await prisma.user.count();
    return { status: 200, totalUsers };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
export async function getActiveUsers() {
  try {
    const ActiveUsers = await prisma.user.count({
      where: { isVerify: true },
    });
    return { status: 200, ActiveUsers };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
export async function getBlockedUsers() {
  try {
    const BlockedUsers = await prisma.user.count({
      where: { isVerify: false },
    });
    return { status: 200, BlockedUsers };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
export async function getAdmins() {
  try {
    const totalAdmins = await prisma.user.count({
      where: { role: "ADMIN" },
    });
    return { status: 200, totalAdmins };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
