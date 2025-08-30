"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "../../../../components/pages/adminpanel/layout/MainLayout";
import PageHeader from "../../../../styles/ui/PageHeader";
import Card from "../../../../styles/ui/Card";
import Badge from "../../../../styles/ui/Badge";
import Input from "../../../../styles/ui/Input";
import { mockUsers } from "../../../../mocks/mock-data";
import {
  MdArrowBack,
  MdEdit,
  MdBlock,
  MdCheckCircle,
  MdDelete,
  MdEmail,
  MdPerson,
  MdAccessTime,
  MdSecurity,
  MdHistory,
} from "react-icons/md";
import Button from "../../../../components/common/Button";

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;

  const [user, setUser] = useState(mockUsers.find((u) => u.id === userId));
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "user",
  });

  const handleSave = () => {
    if (!user) return;

    setUser({
      ...user,
      name: editForm.name,
      email: editForm.email,
      role: editForm.role as "user" | "admin" | "moderator",
    });
    setIsEditing(false);
  };

  const handleStatusChange = (
    newStatus: "active" | "inactive" | "suspended"
  ) => {
    if (!user) return;

    setUser({
      ...user,
      status: newStatus,
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "error";
      case "moderator":
        return "warning";
      case "user":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case "admin":
        return "ادمین";
      case "moderator":
        return "مدیر";
      case "user":
        return "کاربر";
      default:
        return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "inactive":
        return "secondary";
      case "suspended":
        return "error";
      default:
        return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "فعال";
      case "inactive":
        return "غیرفعال";
      case "suspended":
        return "مسدود";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Mock activity data
  const userActivities = [
    {
      id: "1",
      type: "login",
      description: "ورود به سیستم",
      timestamp: "2024-01-20T14:22:00Z",
      ip: "192.168.1.100",
    },
    {
      id: "2",
      type: "message",
      description: "ارسال پیام در چت پرسپولیس vs استقلال",
      timestamp: "2024-01-20T13:45:00Z",
    },
    {
      id: "3",
      type: "profile",
      description: "بروزرسانی پروفایل",
      timestamp: "2024-01-19T16:30:00Z",
    },
    {
      id: "4",
      type: "support",
      description: "ایجاد تیکت پشتیبانی",
      timestamp: "2024-01-18T10:15:00Z",
    },
  ];

  if (!user) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              کاربر یافت نشد
            </h2>
            <Button onClick={() => router.back()} className="cursor-pointer">
              بازگشت
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageHeader
        title={`پروفایل ${user.name}`}
        description={`مدیریت حساب کاربری ${user.email}`}
        action={
          <div className="flex items-center gap-2">
            <Badge variant={getStatusColor(user.status)}>
              {getStatusText(user.status)}
            </Badge>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="cursor-pointer"
            >
              <MdArrowBack className="w-4 h-4 ml-2" />
              بازگشت
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                اطلاعات کاربری
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="cursor-pointer"
              >
                <MdEdit className="w-4 h-4 ml-1" />
                {isEditing ? "لغو" : "ویرایش"}
              </Button>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {user.name.charAt(0)}
              </div>

              <div className="flex-1 space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        نام
                      </label>
                      <Input
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                        placeholder="نام کاربر"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        ایمیل
                      </label>
                      <Input
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        placeholder="ایمیل کاربر"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        نقش
                      </label>
                      <select
                        value={editForm.role}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            role: e.target.value as
                              | "user"
                              | "admin"
                              | "moderator",
                          })
                        }
                        className="w-full p-2 border border-border rounded-lg bg-background text-foreground cursor-pointer"
                      >
                        <option value="user">کاربر</option>
                        <option value="moderator">مدیر</option>
                        <option value="admin">ادمین</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="cursor-pointer">
                        ذخیره
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                        className="cursor-pointer"
                      >
                        لغو
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MdPerson className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">
                        {user.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdEmail className="w-5 h-5 text-muted-foreground" />
                      <span className="text-foreground">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdSecurity className="w-5 h-5 text-muted-foreground" />
                      <Badge variant={getRoleColor(user.role)}>
                        {getRoleText(user.role)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdAccessTime className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        عضویت از {formatDate(user.createdAt)}
                      </span>
                    </div>
                    {user.lastActive && (
                      <div className="flex items-center gap-2">
                        <MdHistory className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          آخرین فعالیت: {formatDate(user.lastActive)}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Activity History */}
          <Card>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              تاریخچه فعالیت
            </h3>
            <div className="space-y-3">
              {userActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDate(activity.timestamp)}
                      {activity.ip && ` • IP: ${activity.ip}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-4">
          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-foreground mb-4">عملیات سریع</h3>
            <div className="space-y-2">
              {user.status === "suspended" ? (
                <Button
                  variant="outline"
                  className="w-full justify-start cursor-pointer bg-transparent"
                  onClick={() => handleStatusChange("active")}
                >
                  <MdCheckCircle className="w-4 h-4 ml-2" />
                  فعال‌سازی حساب
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full justify-start cursor-pointer bg-transparent"
                  onClick={() => handleStatusChange("suspended")}
                >
                  <MdBlock className="w-4 h-4 ml-2" />
                  مسدود کردن حساب
                </Button>
              )}

              {user.status === "active" && (
                <Button
                  variant="outline"
                  className="w-full justify-start cursor-pointer bg-transparent"
                  onClick={() => handleStatusChange("inactive")}
                >
                  <MdBlock className="w-4 h-4 ml-2" />
                  غیرفعال کردن حساب
                </Button>
              )}

              <Button
                variant="destructive"
                className="w-full justify-start cursor-pointer"
                onClick={() => {
                  if (
                    confirm(
                      "آیا مطمئن هستید که می‌خواهید این حساب کاربری را حذف کنید؟"
                    )
                  ) {
                    // Handle delete user
                    router.push("/admin/users");
                  }
                }}
              >
                <MdDelete className="w-4 h-4 ml-2" />
                حذف حساب کاربری
              </Button>
            </div>
          </Card>

          {/* Statistics */}
          <Card>
            <h3 className="font-semibold text-foreground mb-4">آمار کاربر</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  کل پیام‌ها:
                </span>
                <span className="text-sm font-medium">۱۲۳</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  تیکت‌های پشتیبانی:
                </span>
                <span className="text-sm font-medium">۵</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  گزارش‌های دریافتی:
                </span>
                <span className="text-sm font-medium text-red-600">۲</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  امتیاز کاربر:
                </span>
                <span className="text-sm font-medium text-green-600">۸۵٪</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-foreground mb-4">اطلاعات حساب</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">شناسه:</span>
                <span className="text-sm font-mono">{user.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">وضعیت:</span>
                <Badge variant={getStatusColor(user.status)}>
                  {getStatusText(user.status)}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">نقش:</span>
                <Badge variant={getRoleColor(user.role)}>
                  {getRoleText(user.role)}
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
