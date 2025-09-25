import prisma from "../../../../../../lib/db";

export async function WeeklyActivity() {
  const now = new Date();

  // شروع هفته از شنبه
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - ((now.getDay() + 1) % 7));
  startOfWeek.setHours(0, 0, 0, 0);

  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];
  const weeklyActivityData = days.map((day) => ({
    day,
    messages: 0,
    users: 0,
    engagement: 0,
  }));

  // گرفتن کاربران تاییدشده این هفته
  const users = await prisma.user.findMany({
    where: {
      isVerify: true,
      createdAt: { gte: startOfWeek, lte: now },
    },
    select: { createdAt: true },
  });

  // گرفتن پیام‌های این هفته
  const messages = await prisma.message.findMany({
    where: {
      createdAt: { gte: startOfWeek, lte: now },
    },
    select: { createdAt: true },
  });

  // شمارش کاربران
  users.forEach(({ createdAt }) => {
    const dayIndex = Math.floor(
      (createdAt.getTime() - startOfWeek.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (dayIndex >= 0 && dayIndex < 7) weeklyActivityData[dayIndex].users++;
  });

  // شمارش پیام‌ها
  messages.forEach(({ createdAt }) => {
    const dayIndex = Math.floor(
      (createdAt.getTime() - startOfWeek.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (dayIndex >= 0 && dayIndex < 7) weeklyActivityData[dayIndex].messages++;
  });

  // محاسبه engagement
  weeklyActivityData.forEach((d) => {
    d.engagement = d.users ? Math.round(d.messages / d.users) : 0;
  });

  return {
    status: 200,
    data: weeklyActivityData,
  };
}
