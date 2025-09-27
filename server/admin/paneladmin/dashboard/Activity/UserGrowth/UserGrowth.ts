import prisma from "../../../../../../lib/db";

export async function UserGrowth() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      createdAt: true,
      isVerify: true,
    },
  });

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const monthlyStats = months.map((month, index) => {
    const usersInMonth = users.filter((u) => u.createdAt.getMonth() === index);

    return {
      month,
      users: usersInMonth.length,
      newUsers: usersInMonth.length,
      activeUsers: usersInMonth.filter((u) => u.isVerify).length,
    };
  });

  return {
    status: 200,
    data: monthlyStats,
  };
}
