import { MdChat, MdPeople, MdSportsFootball, MdSupport } from "react-icons/md";
import { mockDashboardStats } from "../mock-data";

export const stats = [
  {
    title: "کل کاربران",
    value: mockDashboardStats.totalUsers.toLocaleString("fa-IR"),
    change: "+12%",
    trend: "up" as const,
    icon: MdPeople,
    color: "text-blue-600",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
    description: "رشد ۱۲٪ نسبت به ماه گذشته",
  },
  {
    title: "کاربران فعال",
    value: mockDashboardStats.activeUsers.toLocaleString("fa-IR"),
    change: "+5%",
    trend: "up" as const,
    icon: MdSportsFootball,
    color: "text-green-600",
    bgColor:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
    description: "کاربران فعال در ۲۴ ساعت گذشته",
  },
  {
    title: "پیام‌های امروز",
    value: mockDashboardStats.todayMessages.toLocaleString("fa-IR"),
    change: "+23%",
    trend: "up" as const,
    icon: MdChat,
    color: "text-purple-600",
    bgColor:
      "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
    description: "افزایش ۲۳٪ فعالیت چت",
  },
  {
    title: "تیکت‌های باز",
    value: mockDashboardStats.openTickets.toLocaleString("fa-IR"),
    change: "-8%",
    trend: "down" as const,
    icon: MdSupport,
    color: "text-orange-600",
    bgColor:
      "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900",
    description: "کاهش ۸٪ تیکت‌های باز",
  },
];

export const userGrowthData = [
  { month: "فروردین", users: 1200, newUsers: 200, activeUsers: 800 },
  { month: "اردیبهشت", users: 1900, newUsers: 700, activeUsers: 1200 },
  { month: "خرداد", users: 3000, newUsers: 1100, activeUsers: 2100 },
  { month: "تیر", users: 5000, newUsers: 2000, activeUsers: 3500 },
  { month: "مرداد", users: 8000, newUsers: 3000, activeUsers: 5600 },
  { month: "شهریور", users: 12000, newUsers: 4000, activeUsers: 8400 },
  { month: "مهر", users: 15420, newUsers: 3420, activeUsers: 10794 },
];

export const dailyActivityData = [
  { day: "شنبه", messages: 2400, users: 400, engagement: 85 },
  { day: "یکشنبه", messages: 1398, users: 300, engagement: 72 },
  { day: "دوشنبه", messages: 9800, users: 200, engagement: 95 },
  { day: "سه‌شنبه", messages: 3908, users: 278, engagement: 88 },
  { day: "چهارشنبه", messages: 4800, users: 189, engagement: 91 },
  { day: "پنج‌شنبه", messages: 3800, users: 239, engagement: 76 },
  { day: "جمعه", messages: 4300, users: 349, engagement: 82 },
];

export const messageTypesData = [
  { name: "متن", value: 65, color: "#3b82f6", count: 12500 },
  { name: "تصویر", value: 20, color: "#10b981", count: 3800 },
  { name: "ویدیو", value: 10, color: "#f59e0b", count: 1900 },
  { name: "سایر", value: 5, color: "#ef4444", count: 950 },
];

export const hourlyActivityData = [
  { hour: "۰۰", activity: 12 },
  { hour: "۰۲", activity: 8 },
  { hour: "۰۴", activity: 5 },
  { hour: "۰۶", activity: 15 },
  { hour: "۰۸", activity: 45 },
  { hour: "۱۰", activity: 78 },
  { hour: "۱۲", activity: 95 },
  { hour: "۱۴", activity: 88 },
  { hour: "۱۶", activity: 92 },
  { hour: "۱۸", activity: 85 },
  { hour: "۲۰", activity: 98 },
  { hour: "۲۲", activity: 65 },
];

export const recentGames = [
  {
    id: 1,
    teams: "پرسپولیس vs استقلال",
    league: "لیگ برتر ایران",
    status: "live" as const,
    messages: 2340,
    time: "۲۰:۳۰",
  },
  {
    id: 2,
    teams: "سپاهان vs تراکتور",
    league: "لیگ برتر ایران",
    status: "finished" as const,
    messages: 1890,
    time: "تمام شده",
  },
  {
    id: 3,
    teams: "فولاد vs گل‌گهر",
    league: "لیگ برتر ایران",
    status: "scheduled" as const,
    messages: 0,
    time: "فردا ۱۶:۰۰",
  },
];

export const recentActivities = [
  {
    id: 1,
    type: "game",
    title: "بازی جدید اضافه شد",
    description: "پرسپولیس vs استقلال",
    time: "۵ دقیقه پیش",
    color: "bg-green-500",
  },
  {
    id: 2,
    type: "report",
    title: "پیام گزارش شده",
    description: "در چت بازی سپاهان vs تراکتور",
    time: "۱۰ دقیقه پیش",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    type: "user",
    title: "کاربر جدید ثبت‌نام کرد",
    description: "محمد احمدی",
    time: "۱۵ دقیقه پیش",
    color: "bg-blue-500",
  },
  {
    id: 4,
    type: "ticket",
    title: "تیکت پشتیبانی جدید",
    description: "مشکل در ورود به سیستم",
    time: "۳۰ دقیقه پیش",
    color: "bg-purple-500",
  },
];
