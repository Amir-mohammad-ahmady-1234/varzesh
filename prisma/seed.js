import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // await prisma.ticket.createMany({
  //   data: [
  //     {
  //       title: "مشکل ورود به سیستم",
  //       description: "کاربر نمی‌تواند وارد حساب کاربری شود",
  //       userId: 10,
  //       status: "URGENT",
  //       priority: "NORMAL",
  //       createdAt: new Date("2025-09-01T08:15:00Z"),
  //       updatedAt: new Date("2025-09-01T08:15:00Z"),
  //     },
  //     {
  //       title: "پرداخت ناموفق",
  //       description: "کاربر می‌گوید تراکنش انجام شده ولی سیستم خطا می‌دهد",
  //       userId: 11,
  //       status: "Approved",
  //       priority: "URGENT",
  //       createdAt: new Date("2025-09-02T09:30:00Z"),
  //       updatedAt: new Date("2025-09-03T10:00:00Z"),
  //     },
  //     {
  //       title: "باگ در گزارش مالی",
  //       description: "گزارش ماهانه اعداد اشتباه نشان می‌دهد",
  //       userId: 12,
  //       status: "Waiting",
  //       priority: "URGENT",
  //       createdAt: new Date("2025-09-04T12:00:00Z"),
  //       updatedAt: new Date("2025-09-04T12:00:00Z"),
  //     },
  //     {
  //       title: "ایمیل تایید ارسال نمی‌شود",
  //       description: "کاربر ایمیل تایید حساب را دریافت نکرده است",
  //       userId: 13,
  //       status: "URGENT",
  //       priority: "NORMAL",
  //       createdAt: new Date("2025-09-05T07:45:00Z"),
  //       updatedAt: new Date("2025-09-06T09:10:00Z"),
  //     },
  //     {
  //       title: "کندی در داشبورد",
  //       description: "صفحه داشبورد دیر بارگذاری می‌شود",
  //       userId: 15,
  //       status: "Waiting",
  //       priority: "NORMAL",
  //       createdAt: new Date("2025-09-06T14:20:00Z"),
  //       updatedAt: new Date("2025-09-06T14:20:00Z"),
  //     },
  //     {
  //       title: "مشکل در بارگذاری فایل",
  //       description: "کاربر نمی‌تواند فایل PDF آپلود کند",
  //       userId: 17,
  //       status: "Approved",
  //       priority: "URGENT",
  //       createdAt: new Date("2025-09-07T11:05:00Z"),
  //       updatedAt: new Date("2025-09-07T11:45:00Z"),
  //     },
  //     {
  //       title: "عدم نمایش نوتیفیکیشن",
  //       description: "اعلان‌های سیستم به کاربر نمی‌رسد",
  //       userId: 3,
  //       status: "Waiting",
  //       priority: "NORMAL",
  //       createdAt: new Date("2025-09-08T16:00:00Z"),
  //       updatedAt: new Date("2025-09-08T16:00:00Z"),
  //     },
  //     {
  //       title: "خطای 500 در پروفایل",
  //       description: "وقتی کاربر روی صفحه پروفایل می‌رود، خطای 500 رخ می‌دهد",
  //       userId: 5,
  //       status: "Open",
  //       priority: "URGENT",
  //       createdAt: new Date("2025-09-09T09:50:00Z"),
  //       updatedAt: new Date("2025-09-09T09:55:00Z"),
  //     },
  //     {
  //       title: "ریست پسورد کار نمی‌کند",
  //       description: "لینک ریست پسورد منقضی یا بی‌اعتبار است",
  //       userId: 6,
  //       status: "Waiting",
  //       priority: "URGENT",
  //       createdAt: new Date("2025-09-10T13:10:00Z"),
  //       updatedAt: new Date("2025-09-10T13:10:00Z"),
  //     },
  //     {
  //       title: "مشکل در ثبت نام",
  //       description: "کاربر می‌گوید فرم ثبت‌نام بعد از کلیک چیزی ارسال نمی‌کند",
  //       userId: 7,
  //       status: "Approved",
  //       priority: "NORMAL",
  //       createdAt: new Date("2025-09-11T15:30:00Z"),
  //       updatedAt: new Date("2025-09-12T08:00:00Z"),
  //     },
  //   ],
  // });

  await prisma.message.createMany({
    data: [
      {
        ticketId: 51,
        content: "سلام، من نمی‌تونم وارد سیستم بشم.",
        userId: 8,
        createdAt: new Date("2025-09-01T08:16:00Z"),
      },
      {
        ticketId: 52,
        content: "سلام، لطفاً مرورگر خودتون رو ریست کنید و دوباره تست کنید.",
        userId: 16,
        createdAt: new Date("2025-09-01T09:00:00Z"),
      },
      {
        ticketId: 53,
        content: "پرداخت کردم ولی رسید برام نیومد.",
        userId: 3,
        createdAt: new Date("2025-09-02T09:35:00Z"),
      },
      {
        ticketId: 54,
        content: "سلام، تراکنش شما ثبت نشده. لطفاً شماره تراکنش رو ارسال کنید.",
        userId: 16,
        createdAt: new Date("2025-09-02T09:40:00Z"),
      },
      {
        ticketId: 55,
        content: "گزارش مالی ماه قبل با اعداد اشتباه نشون داده میشه.",
        userId: 15,
        createdAt: new Date("2025-09-04T12:05:00Z"),
      },
      {
        ticketId: 56,
        content: "من ایمیل تایید دریافت نکردم.",
        userId: 11,
        createdAt: new Date("2025-09-05T08:00:00Z"),
      },
      {
        ticketId: 57,
        content: "داشبورد خیلی کند بالا میاد.",
        userId: 10,
        createdAt: new Date("2025-09-06T14:25:00Z"),
      },
      {
        ticketId: 58,
        content: "هنگام آپلود PDF خطا میگیرم.",
        userId: 9,
        createdAt: new Date("2025-09-07T11:10:00Z"),
      },
      {
        ticketId: 59,
        content: "نوتیفیکیشن‌های سیستم برام نمیاد.",
        userId: 12,
        createdAt: new Date("2025-09-08T16:05:00Z"),
      },
      {
        ticketId: 60,
        content: "وقتی وارد پروفایل میشم خطای 500 میده.",
        userId: 3,
        createdAt: new Date("2025-09-09T09:52:00Z"),
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
