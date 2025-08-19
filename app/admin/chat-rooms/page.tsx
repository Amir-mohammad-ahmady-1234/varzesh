"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../../../components/admin/layout/MainLayout";
import PageHeader from "../../../components/admin/ui/PageHeader";
import Card, {
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../../components/admin/ui/Card";
import Button from "../../../components/admin/ui/Button";
import Input from "../../../components/admin/ui/Input";
import Badge from "../../../components/admin/ui/Badge";
import EmptyState from "../../../components/admin/ui/EmptyState";
import Modal from "../../../components/admin/ui/Modal";
import { mockChatRooms } from "../../../mocks/mock-data";
import {
  MdSearch,
  MdAdd,
  MdPeople,
  MdMessage,
  MdCircle,
  MdAccessTime,
  MdMoreVert,
  MdRefresh,
  MdSettings,
  MdVisibility,
  MdBlock,
  MdDelete,
  MdEdit,
  MdFilterList,
  MdSort,
  MdLiveTv,
  MdSportsFootball,
  MdChat,
} from "react-icons/md";
import { cn } from "../../../lib/utils";

export default function ChatRoomsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");
  const [typeFilter, setTypeFilter] = useState<
    "all" | "game" | "general" | "private"
  >("all");
  const [sortBy, setSortBy] = useState<
    "name" | "participants" | "messages" | "lastActivity"
  >("lastActivity");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [isLiveMode, setIsLiveMode] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    if (isLiveMode) {
      const interval = setInterval(() => {
        // Simulate real-time updates
        console.log("[v0] Simulating real-time chat room updates");
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLiveMode]);

  const filteredRooms = mockChatRooms
    .filter((room) => {
      const matchesSearch =
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || room.status === statusFilter;
      const matchesType = typeFilter === "all" || room.type === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    })
    .sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      if (sortBy === "lastActivity") {
        aValue = new Date(a.lastActivity || a.createdAt).getTime();
        bValue = new Date(b.lastActivity || b.createdAt).getTime();
      } else if (sortBy === "participants") {
        aValue = a.participantCount;
        bValue = b.participantCount;
      } else if (sortBy === "messages") {
        aValue = a.messageCount;
        bValue = b.messageCount;
      } else {
        // sortBy === "name"
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRooms = filteredRooms.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleRoomClick = (roomId: string) => {
    router.push(`/admin/chat-rooms/${roomId}`);
  };

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const getStatusText = (status: string) => {
    return status === "active" ? "فعال" : "غیرفعال";
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case "game":
        return "بازی";
      case "general":
        return "عمومی";
      case "private":
        return "خصوصی";
      default:
        return type;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "game":
        return MdSportsFootball;
      case "general":
        return MdChat;
      case "private":
        return MdPeople;
      default:
        return MdChat;
    }
  };

  const stats = {
    total: mockChatRooms.length,
    active: mockChatRooms.filter((r) => r.status === "active").length,
    totalParticipants: mockChatRooms.reduce(
      (sum, r) => sum + r.participantCount,
      0
    ),
    totalMessages: mockChatRooms.reduce((sum, r) => sum + r.messageCount, 0),
  };

  return (
    <MainLayout>
      <PageHeader
        title="مدیریت چت روم‌ها"
        description={`مدیریت و نظارت بر ${stats.total.toLocaleString(
          "fa-IR"
        )} چت روم با ${stats.totalParticipants.toLocaleString(
          "fa-IR"
        )} شرکت‌کننده`}
        action={
          <div className="flex items-center gap-2">
            <Button
              variant={isLiveMode ? "destructive" : "outline"}
              onClick={() => setIsLiveMode(!isLiveMode)}
              className="cursor-pointer"
            >
              <MdLiveTv className="w-4 h-4 ml-2" />
              {isLiveMode ? "توقف نظارت زنده" : "نظارت زنده"}
            </Button>
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdRefresh className="w-4 h-4 ml-2" />
              بروزرسانی
            </Button>
            <Button className="cursor-pointer">
              <MdAdd className="w-4 h-4 ml-2" />
              چت روم جدید
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                کل چت روم‌ها
              </p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {stats.total.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-blue-600 rounded-lg">
              <MdChat className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 mb-1">
                روم‌های فعال
              </p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                {stats.active.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-green-600 rounded-lg">
              <MdCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                کل شرکت‌کنندگان
              </p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {stats.totalParticipants.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-purple-600 rounded-lg">
              <MdPeople className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">
                کل پیام‌ها
              </p>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                {stats.totalMessages.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-orange-600 rounded-lg">
              <MdMessage className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MdFilterList className="w-5 h-5" />
                فیلترها و جستجو
              </CardTitle>
              <CardDescription>
                جستجو و فیلتر چت روم‌ها بر اساس معیارهای مختلف
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "primary" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="cursor-pointer"
              >
                لیست
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
                <Input
                  type="text"
                  placeholder="جستجو بر اساس نام چت روم، توضیحات یا نوع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-11"
                  rightIcon={<MdSearch className="w-5 h-5" />}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setTypeFilter("all");
                }}
                className="cursor-pointer whitespace-nowrap"
              >
                پاک کردن فیلترها
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  وضعیت:
                </span>
                {["all", "active", "inactive"].map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "primary" : "outline"}
                    size="sm"
                    onClick={() =>
                      setStatusFilter(status as "all" | "active" | "inactive")
                    }
                    className="cursor-pointer"
                  >
                    {status === "all" ? "همه" : getStatusText(status)}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  نوع:
                </span>
                {["all", "game", "general", "private"].map((type) => (
                  <Button
                    key={type}
                    variant={typeFilter === type ? "primary" : "outline"}
                    size="sm"
                    onClick={() =>
                      setTypeFilter(
                        type as "all" | "game" | "general" | "private"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {type === "all" ? "همه" : getTypeText(type)}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  مرتب‌سازی:
                </span>
                <Button
                  variant={sortBy === "name" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("name")}
                  className="cursor-pointer"
                >
                  نام
                  {sortBy === "name" && (
                    <MdSort
                      className={`w-4 h-4 mr-1 ${
                        sortOrder === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>
                <Button
                  variant={sortBy === "participants" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("participants")}
                  className="cursor-pointer"
                >
                  شرکت‌کنندگان
                  {sortBy === "participants" && (
                    <MdSort
                      className={`w-4 h-4 mr-1 ${
                        sortOrder === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>
                <Button
                  variant={sortBy === "lastActivity" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("lastActivity")}
                  className="cursor-pointer"
                >
                  آخرین فعالیت
                  {sortBy === "lastActivity" && (
                    <MdSort
                      className={`w-4 h-4 mr-1 ${
                        sortOrder === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {paginatedRooms.length === 0 ? (
        <EmptyState
          title="چت روم یافت نشد"
          description="با فیلترهای انتخاب شده چت روم یافت نشد. فیلترها را تغییر دهید یا چت روم جدید ایجاد کنید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setTypeFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : viewMode === "list" ? (
        <div className="space-y-4">
          {paginatedRooms.map((room) => {
            const TypeIcon = getTypeIcon(room.type || "general");
            return (
              <div
                key={room.id}
                className="hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 rounded-xl"
                style={{
                  borderLeftColor:
                    room.status === "active" ? "#10b981" : "#6b7280",
                }}
                onClick={() => handleRoomClick(room.id)}
              >
                <Card>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-sm">
                            <TypeIcon className="w-6 h-6 text-white" />
                          </div>
                          <div
                            className={cn(
                              "absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
                              room.status === "active"
                                ? "bg-green-500"
                                : "bg-gray-400"
                            )}
                          >
                            {isLiveMode && room.status === "active" && (
                              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                              {room.name}
                            </h3>
                            <Badge
                              variant={
                                room.status === "active"
                                  ? "success"
                                  : "secondary"
                              }
                              size="sm"
                            >
                              {getStatusText(room.status)}
                            </Badge>
                            <Badge variant="secondary" size="sm">
                              {getTypeText(room.type || "general")}
                            </Badge>
                          </div>
                          {room.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {room.description}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <MdPeople className="w-4 h-4" />
                              <span>
                                {room.participantCount.toLocaleString("fa-IR")}{" "}
                                شرکت‌کننده
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MdMessage className="w-4 h-4" />
                              <span>
                                {room.messageCount.toLocaleString("fa-IR")} پیام
                              </span>
                            </div>
                            {room.lastActivity && (
                              <div className="flex items-center gap-1">
                                <MdAccessTime className="w-4 h-4" />
                                <span>
                                  آخرین فعالیت:{" "}
                                  {new Date(
                                    room.lastActivity
                                  ).toLocaleDateString("fa-IR", {
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          handleRoomClick(room.id);
                        }}
                        className="cursor-pointer"
                      >
                        <MdVisibility className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          // setSelectedRoom(room.id); // Removed
                          setShowRoomModal(true);
                        }}
                        className="cursor-pointer"
                      >
                        <MdSettings className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          // Handle more options
                        }}
                        className="cursor-pointer"
                      >
                        <MdMoreVert className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedRooms.map((room) => {
            const TypeIcon = getTypeIcon(room.type || "general");
            return (
              <div
                key={room.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200"
                onClick={() => handleRoomClick(room.id)}
              >
                <Card>
                  <div className="relative">
                    <div className="text-center">
                      <div className="relative mx-auto mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mx-auto">
                          <TypeIcon className="w-8 h-8 text-white" />
                        </div>
                        <div
                          className={cn(
                            "absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white",
                            room.status === "active"
                              ? "bg-green-500"
                              : "bg-gray-400"
                          )}
                        >
                          {isLiveMode && room.status === "active" && (
                            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
                          )}
                        </div>
                      </div>

                      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                        {room.name}
                      </h3>

                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Badge
                          variant={
                            room.status === "active" ? "success" : "secondary"
                          }
                          size="sm"
                        >
                          {getStatusText(room.status)}
                        </Badge>
                        <Badge variant="secondary" size="sm">
                          {getTypeText(room.type || "general")}
                        </Badge>
                      </div>

                      {room.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {room.description}
                        </p>
                      )}

                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center justify-center gap-1">
                          <MdPeople className="w-4 h-4" />
                          <span>
                            {room.participantCount.toLocaleString("fa-IR")}{" "}
                            شرکت‌کننده
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <MdMessage className="w-4 h-4" />
                          <span>
                            {room.messageCount.toLocaleString("fa-IR")} پیام
                          </span>
                        </div>
                        {room.lastActivity && (
                          <div className="flex items-center justify-center gap-1">
                            <MdAccessTime className="w-4 h-4" />
                            <span className="text-xs">
                              {new Date(room.lastActivity).toLocaleDateString(
                                "fa-IR",
                                {
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
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
              filteredRooms.length
            ).toLocaleString("fa-IR")}{" "}
            از {filteredRooms.length.toLocaleString("fa-IR")} چت روم
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

      <Modal
        isOpen={showRoomModal}
        onClose={() => setShowRoomModal(false)}
        title="مدیریت چت روم"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            عملیات مدیریتی برای چت روم انتخاب شده
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdEdit className="w-4 h-4 ml-2" />
              ویرایش
            </Button>
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdSettings className="w-4 h-4 ml-2" />
              تنظیمات
            </Button>
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdBlock className="w-4 h-4 ml-2" />
              مسدودسازی
            </Button>
            <Button variant="destructive" className="cursor-pointer">
              <MdDelete className="w-4 h-4 ml-2" />
              حذف
            </Button>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setShowRoomModal(false)}
              className="cursor-pointer"
            >
              انصراف
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}
