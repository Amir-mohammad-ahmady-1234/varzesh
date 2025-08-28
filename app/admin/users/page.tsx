"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageHeader from "../../../styles/ui/PageHeader";
import Card, {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../../styles/ui/Card";
import Input from "../../../styles/ui/Input";
import Badge from "../../../styles/ui/Badge";
import EmptyState from "../../../styles/ui/EmptyState";
import { mockUsers } from "../../../mocks/mock-data";
import {
  MdSearch,
  MdDownload,
  MdAdd,
  MdSort,
  MdMoreVert,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDelete,
  MdBlock,
  MdCheckCircle,
  MdFilterList,
  MdRefresh,
  MdPerson,
  MdEmail,
  MdCalendarToday,
  MdAccessTime,
  MdEdit,
  MdVisibility,
} from "react-icons/md";
import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

export default function UsersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<
    "all" | "admin" | "moderator" | "user"
  >("all");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive" | "suspended"
  >("all");
  const [sortBy, setSortBy] = useState<
    "name" | "email" | "role" | "status" | "createdAt"
  >("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkAction, setBulkAction] = useState<
    "delete" | "activate" | "suspend" | null
  >(null);
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const itemsPerPage = 10;

  // Filter and sort users
  const filteredUsers = mockUsers
    .filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    })
    .sort((a, b) => {
      let aValue: string | number = a[sortBy];
      let bValue: string | number = b[sortBy];

      if (sortBy === "createdAt") {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleUserClick = (userId: string) => {
    router.push(`/admin/users/${userId}`);
  };

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const toggleUserSelection = (userId: string) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedUsers.size === paginatedUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(paginatedUsers.map((user) => user.id)));
    }
  };

  const handleBulkAction = (
    action: "delete" | "activate" | "suspend" | "export"
  ) => {
    if (action === "export") {
      exportSelectedUsers();
      return;
    }

    setBulkAction(action);
    setShowBulkModal(true);
  };

  const confirmBulkAction = () => {
    if (!bulkAction) return;

    // Handle the actual bulk action here
    console.log(`Performing ${bulkAction} on ${selectedUsers.size} users`);

    setSelectedUsers(new Set());
    setShowBulkModal(false);
    setBulkAction(null);
  };

  const exportSelectedUsers = () => {
    const usersToExport =
      selectedUsers.size > 0
        ? filteredUsers.filter((user) => selectedUsers.has(user.id))
        : filteredUsers;

    const csvContent = [
      ["نام", "ایمیل", "نقش", "وضعیت", "تاریخ ثبت‌نام", "آخرین فعالیت"].join(
        ","
      ),
      ...usersToExport.map((user) =>
        [
          `"${user.name}"`,
          `"${user.email}"`,
          getRoleText(user.role),
          getStatusText(user.status),
          new Date(user.createdAt).toLocaleDateString("fa-IR"),
          user.lastActive
            ? new Date(user.lastActive).toLocaleDateString("fa-IR")
            : "هرگز",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `users-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
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
      month: "short",
      day: "numeric",
    });
  };

  const getBulkActionText = () => {
    switch (bulkAction) {
      case "delete":
        return "حذف";
      case "activate":
        return "فعال‌سازی";
      case "suspend":
        return "مسدودسازی";
      default:
        return "";
    }
  };

  const getBulkActionDescription = () => {
    const count = selectedUsers.size.toLocaleString("fa-IR");
    switch (bulkAction) {
      case "delete":
        return `آیا مطمئن هستید که می‌خواهید ${count} کاربر را حذف کنید؟ این عمل قابل بازگشت نیست.`;
      case "activate":
        return `آیا مطمئن هستید که می‌خواهید ${count} کاربر را فعال کنید؟`;
      case "suspend":
        return `آیا مطمئن هستید که می‌خواهید ${count} کاربر را مسدود کنید؟`;
      default:
        return "";
    }
  };

  return (
    <MainLayout>
      <PageHeader
        title="مدیریت کاربران"
        description={`مدیریت ${filteredUsers.length.toLocaleString(
          "fa-IR"
        )} حساب کاربری، نقش‌ها و دسترسی‌ها`}
        action={
          <div className="flex items-center gap-2">
            <Button
              onClick={() => exportSelectedUsers()}
              variant="outline"
              className="cursor-pointer"
            >
              <MdDownload className="w-4 h-4 ml-2" />
              خروجی CSV
            </Button>
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdRefresh className="w-4 h-4 ml-2" />
              بروزرسانی
            </Button>
            <Button className="cursor-pointer">
              <MdAdd className="w-4 h-4 ml-2" />
              کاربر جدید
            </Button>
          </div>
        }
      />

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                کل کاربران
              </p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {mockUsers.length.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-blue-600 rounded-lg">
              <MdPerson className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 mb-1">
                کاربران فعال
              </p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                {mockUsers
                  .filter((u) => u.status === "active")
                  .length.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-green-600 rounded-lg">
              <MdCheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">
                کاربران مسدود
              </p>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                {mockUsers
                  .filter((u) => u.status === "suspended")
                  .length.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-orange-600 rounded-lg">
              <MdBlock className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                ادمین‌ها
              </p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {mockUsers
                  .filter((u) => u.role === "admin")
                  .length.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-purple-600 rounded-lg">
              <MdPerson className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Enhanced Filters and Search */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MdFilterList className="w-5 h-5" />
                فیلترها و جستجو
              </CardTitle>
              <CardDescription>
                جستجو و فیلتر کاربران بر اساس معیارهای مختلف
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "table" ? "primary" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="cursor-pointer"
              >
                جدول
              </Button>
              <Button
                variant={viewMode === "grid" ? "primary" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="cursor-pointer"
              >
                کارت
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <MdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="جستجو بر اساس نام، ایمیل یا شماره تلفن..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 h-11"
                  rightIcon={<MdSearch className="w-5 h-5" />}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setRoleFilter("all");
                  setStatusFilter("all");
                }}
                className="cursor-pointer whitespace-nowrap"
              >
                پاک کردن فیلترها
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  نقش:
                </span>
                {["all", "admin", "moderator", "user"].map((role) => (
                  <Button
                    key={role}
                    variant={roleFilter === role ? "primary" : "outline"}
                    size="sm"
                    onClick={() =>
                      setRoleFilter(
                        role as "all" | "admin" | "moderator" | "user"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {role === "all" ? "همه" : getRoleText(role)}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  وضعیت:
                </span>
                {["all", "active", "inactive", "suspended"].map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "primary" : "outline"}
                    size="sm"
                    onClick={() =>
                      setStatusFilter(
                        status as "all" | "active" | "inactive" | "suspended"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {status === "all" ? "همه" : getStatusText(status)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Bulk Actions */}
      {selectedUsers.size > 0 && (
        <Card className="mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <MdCheckBox className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  {selectedUsers.size.toLocaleString("fa-IR")} کاربر انتخاب شده
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  عملیات دسته‌جمعی را انتخاب کنید
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkAction("export")}
                className="cursor-pointer"
              >
                <MdDownload className="w-4 h-4 ml-1" />
                خروجی CSV
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkAction("activate")}
                className="cursor-pointer"
              >
                <MdCheckCircle className="w-4 h-4 ml-1" />
                فعال‌سازی
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkAction("suspend")}
                className="cursor-pointer"
              >
                <MdBlock className="w-4 h-4 ml-1" />
                مسدودسازی
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleBulkAction("delete")}
                className="cursor-pointer"
              >
                <MdDelete className="w-4 h-4 ml-1" />
                حذف
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Enhanced Users Table/Grid */}
      {paginatedUsers.length === 0 ? (
        <EmptyState
          title="کاربری یافت نشد"
          description="با فیلترهای انتخاب شده کاربری یافت نشد. فیلترها را تغییر دهید یا کاربر جدید اضافه کنید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setRoleFilter("all");
                setStatusFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : viewMode === "table" ? (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <th className="text-right py-4 px-6">
                    <button
                      onClick={toggleSelectAll}
                      className="cursor-pointer"
                    >
                      {selectedUsers.size === paginatedUsers.length ? (
                        <MdCheckBox className="w-5 h-5 text-blue-600" />
                      ) : (
                        <MdCheckBoxOutlineBlank className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
                    کاربر
                  </th>
                  <th className="text-right py-4 px-6">
                    <button
                      onClick={() => handleSort("role")}
                      className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      نقش
                      <MdSort
                        className={`w-4 h-4 ${
                          sortBy === "role" ? "text-blue-600" : ""
                        }`}
                      />
                    </button>
                  </th>
                  <th className="text-right py-4 px-6">
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      وضعیت
                      <MdSort
                        className={`w-4 h-4 ${
                          sortBy === "status" ? "text-blue-600" : ""
                        }`}
                      />
                    </button>
                  </th>
                  <th className="text-right py-4 px-6">
                    <button
                      onClick={() => handleSort("createdAt")}
                      className="flex items-center gap-1 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      تاریخ ثبت‌نام
                      <MdSort
                        className={`w-4 h-4 ${
                          sortBy === "createdAt" ? "text-blue-600" : ""
                        }`}
                      />
                    </button>
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
                    آخرین فعالیت
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-gray-100">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50/50 dark:bg-gray-800/50"
                    }`}
                    onClick={() => handleUserClick(user.id)}
                  >
                    <td className="py-4 px-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleUserSelection(user.id);
                        }}
                        className="cursor-pointer"
                      >
                        {selectedUsers.has(user.id) ? (
                          <MdCheckBox className="w-5 h-5 text-blue-600" />
                        ) : (
                          <MdCheckBoxOutlineBlank className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {user.name}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <MdEmail className="w-4 h-4" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge variant={getRoleColor(user.role)} size="md">
                        {getRoleText(user.role)}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge
                        variant={getStatusColor(user.status)}
                        size="md"
                        dot
                      >
                        {getStatusText(user.status)}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <MdCalendarToday className="w-4 h-4" />
                        {formatDate(user.createdAt)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <MdAccessTime className="w-4 h-4" />
                        {user.lastActive ? formatDate(user.lastActive) : "هرگز"}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            handleUserClick(user.id);
                          }}
                          className="cursor-pointer"
                        >
                          <MdVisibility className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            // Handle edit
                          }}
                          className="cursor-pointer"
                        >
                          <MdEdit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            // Handle menu
                          }}
                          className="cursor-pointer"
                        >
                          <MdMoreVert className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedUsers.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200"
              onClick={() => handleUserClick(user.id)}
            >
              <Card>
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleUserSelection(user.id);
                    }}
                    className="absolute top-4 right-4 cursor-pointer z-10"
                  >
                    {selectedUsers.has(user.id) ? (
                      <MdCheckBox className="w-5 h-5 text-blue-600" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mx-auto mb-4">
                      {user.name.charAt(0)}
                    </div>

                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {user.email}
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge variant={getRoleColor(user.role)} size="sm">
                        {getRoleText(user.role)}
                      </Badge>
                      <Badge
                        variant={getStatusColor(user.status)}
                        size="sm"
                        dot
                      >
                        {getStatusText(user.status)}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-center gap-1">
                        <MdCalendarToday className="w-3 h-3" />
                        عضویت: {formatDate(user.createdAt)}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MdAccessTime className="w-3 h-3" />
                        آخرین فعالیت:{" "}
                        {user.lastActive ? formatDate(user.lastActive) : "هرگز"}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            نمایش{" "}
            {((currentPage - 1) * itemsPerPage + 1).toLocaleString("fa-IR")} تا{" "}
            {Math.min(
              currentPage * itemsPerPage,
              filteredUsers.length
            ).toLocaleString("fa-IR")}{" "}
            از {filteredUsers.length.toLocaleString("fa-IR")} کاربر
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer"
            >
              قبلی
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let page = i + 1;
                if (totalPages > 5) {
                  if (currentPage > 3) {
                    page = currentPage - 2 + i;
                  }
                  if (currentPage > totalPages - 2) {
                    page = totalPages - 4 + i;
                  }
                }
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="cursor-pointer w-10"
                  >
                    {page.toLocaleString("fa-IR")}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer"
            >
              بعدی
            </Button>
          </div>
        </div>
      )}

      {/* Bulk Action Confirmation Modal */}
      <Modal
        isOpen={showBulkModal}
        onClose={() => setShowBulkModal(false)}
        title={`تأیید ${getBulkActionText()}`}
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            {getBulkActionDescription()}
          </p>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setShowBulkModal(false)}
              className="cursor-pointer"
            >
              انصراف
            </Button>
            <Button
              variant={bulkAction === "delete" ? "destructive" : "primary"}
              onClick={confirmBulkAction}
              className="cursor-pointer"
            >
              تأیید {getBulkActionText()}
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}
