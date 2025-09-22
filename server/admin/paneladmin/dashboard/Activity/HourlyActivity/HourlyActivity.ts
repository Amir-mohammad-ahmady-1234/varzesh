import prisma from "../../../../../../lib/db";

export async function HourlyActivity() {
  const messages = await prisma.message.findMany({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lt: new Date(new Date().setHours(23, 59, 59, 999)),
      },
    },
    select: { createdAt: true },
  });
  const hourlyActivityData = Array.from({ length: 24 }, (_, i) => ({
    hour: i.toString().padStart(2, "0"),
    activity: 0,
  }));

  messages.forEach((msg) => {
    const hour = msg.createdAt.getHours();
    hourlyActivityData[hour].activity++;
  });

  return {
    status: 200,
    data: hourlyActivityData,
  };
}
