"use client";

import { Suspense } from "react";

import {
  MdPeople,
  MdSportsFootball,
  MdChat,
  MdSupport,
  MdTrendingUp,
  MdTrendingDown,
  MdMoreVert,
  MdRefresh,
  MdDownload,
} from "react-icons/md";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts";

import CardTitle from "../../../styles/ui/CardTitle";
import { mockDashboardStats } from "../../../mocks/mock-data";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageHeader from "../../../styles/ui/PageHeader";
import Badge from "../../../styles/ui/Badge";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
} from "../../../styles/ui/Card";
import LoadingSpinner from "../../../styles/ui/LoadingSpinner";
import Button from "../../../styles/ui/Button";

export default function Dashboard() {
  const stats = [
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

  const userGrowthData = [
    { month: "فروردین", users: 1200, newUsers: 200, activeUsers: 800 },
    { month: "اردیبهشت", users: 1900, newUsers: 700, activeUsers: 1200 },
    { month: "خرداد", users: 3000, newUsers: 1100, activeUsers: 2100 },
    { month: "تیر", users: 5000, newUsers: 2000, activeUsers: 3500 },
    { month: "مرداد", users: 8000, newUsers: 3000, activeUsers: 5600 },
    { month: "شهریور", users: 12000, newUsers: 4000, activeUsers: 8400 },
    { month: "مهر", users: 15420, newUsers: 3420, activeUsers: 10794 },
  ];

  const dailyActivityData = [
    { day: "شنبه", messages: 2400, users: 400, engagement: 85 },
    { day: "یکشنبه", messages: 1398, users: 300, engagement: 72 },
    { day: "دوشنبه", messages: 9800, users: 200, engagement: 95 },
    { day: "سه‌شنبه", messages: 3908, users: 278, engagement: 88 },
    { day: "چهارشنبه", messages: 4800, users: 189, engagement: 91 },
    { day: "پنج‌شنبه", messages: 3800, users: 239, engagement: 76 },
    { day: "جمعه", messages: 4300, users: 349, engagement: 82 },
  ];

  const messageTypesData = [
    { name: "متن", value: 65, color: "#3b82f6", count: 12500 },
    { name: "تصویر", value: 20, color: "#10b981", count: 3800 },
    { name: "ویدیو", value: 10, color: "#f59e0b", count: 1900 },
    { name: "سایر", value: 5, color: "#ef4444", count: 950 },
  ];

  const hourlyActivityData = [
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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            {label}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value?.toLocaleString("fa-IR")}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const recentGames = [
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

  const recentActivities = [
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

  return (
    <MainLayout>
      <PageHeader
        title="داشبورد"
        description="نمای کلی از عملکرد سیستم و آمار کلیدی"
        action={
          <div className="flex items-center gap-2">
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <MdRefresh className="w-4 h-4" />
              بروزرسانی
            </Button>
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <MdDownload className="w-4 h-4" />
              گزارش
            </Button>
            <Badge variant="secondary" dot>
              آخرین بروزرسانی: الان
            </Badge>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-200"
              hover
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    {stat.trend === "up" ? (
                      <MdTrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <MdTrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${stat.bgColor} shadow-sm`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>رشد کاربران</CardTitle>
                  <CardDescription>
                    نمودار رشد کاربران در ۷ ماه گذشته
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="info" size="sm">
                    +۲۳٪
                  </Badge>
                  <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <MdMoreVert className="w-5 h-5 text-gray-500" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={userGrowthData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorUsers"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorNewUsers"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#10b981"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#10b981"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="opacity-30"
                      />
                      <XAxis
                        dataKey="month"
                        className="text-xs"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        className="text-xs"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorUsers)"
                        name="کل کاربران"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="newUsers"
                        stroke="#10b981"
                        fillOpacity={1}
                        fill="url(#colorNewUsers)"
                        name="کاربران جدید"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Suspense>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>انواع پیام‌ها</CardTitle>
                <CardDescription>توزیع انواع پیام‌ها</CardDescription>
              </div>
              <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <MdMoreVert className="w-5 h-5 text-gray-500" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={messageTypesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {messageTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
            <div className="mt-4 space-y-2">
              {messageTypesData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {item.count.toLocaleString("fa-IR")}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 mr-1">
                      ({item.value}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>فعالیت هفتگی</CardTitle>
                <CardDescription>
                  پیام‌ها و کاربران فعال در هفته
                </CardDescription>
              </div>
              <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <MdMoreVert className="w-5 h-5 text-gray-500" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dailyActivityData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="opacity-30"
                    />
                    <XAxis
                      dataKey="day"
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      dataKey="messages"
                      fill="#3b82f6"
                      name="پیام‌ها"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="users"
                      fill="#10b981"
                      name="کاربران فعال"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>فعالیت ساعتی</CardTitle>
                <CardDescription>میزان فعالیت در طول روز</CardDescription>
              </div>
              <Button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <MdMoreVert className="w-5 h-5 text-gray-500" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={hourlyActivityData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="opacity-30"
                    />
                    <XAxis
                      dataKey="hour"
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="activity"
                      stroke="#8b5cf6"
                      strokeWidth={3}
                      dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2 }}
                      name="فعالیت"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>آخرین بازی‌ها</CardTitle>
                <CardDescription>بازی‌های اخیر و وضعیت آنها</CardDescription>
              </div>
              <Button className="text-sm text-primary hover:underline cursor-pointer">
                مشاهده همه
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentGames.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{game.teams}</p>
                    <p className="text-sm text-muted-foreground">
                      {game.league}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">
                        {game.messages.toLocaleString("fa-IR")} پیام
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {game.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        game.status === "live"
                          ? "info"
                          : game.status === "finished"
                          ? "secondary"
                          : "success"
                      }
                    >
                      {game.status === "live"
                        ? "زنده"
                        : game.status === "finished"
                        ? "تمام شده"
                        : "برنامه‌ریزی شده"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>فعالیت‌های اخیر</CardTitle>
                <CardDescription>
                  فعالیت‌های اخیر و توضیحات آنها
                </CardDescription>
              </div>
              <Button className="text-sm text-primary hover:underline cursor-pointer">
                مشاهده همه
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${activity.color}`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
