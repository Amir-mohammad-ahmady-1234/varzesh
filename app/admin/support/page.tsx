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
import { mockSupportTickets } from "../../../mocks/mock-data";
import {
  MdSearch,
  MdDownload,
  MdPerson,
  MdAccessTime,
  MdPriorityHigh,
  MdCheckCircle,
  MdMoreVert,
  MdRefresh,
  MdAssignment,
  MdSupport,
  MdMessage,
  MdFilterList,
  MdSort,
  MdReply,
  MdVisibility,
  MdSchedule,
} from "react-icons/md";
import { cn } from "../../../lib/utils";
import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

export default function SupportPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "open" | "in-progress" | "resolved" | "closed"
  >("all");
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "low" | "medium" | "high" | "urgent"
  >("all");
  const [sortBy, setSortBy] = useState<
    "createdAt" | "priority" | "status" | "subject"
  >("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showQuickReply, setShowQuickReply] = useState(false);
  const [quickReplyText, setQuickReplyText] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const itemsPerPage = 12;

  const filteredTickets = mockSupportTickets
    .filter((ticket) => {
      const matchesSearch =
        ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || ticket.status === statusFilter;
      const matchesPriority =
        priorityFilter === "all" || ticket.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      if (sortBy === "createdAt") {
        aValue = new Date(a.createdAt).getTime();
        bValue = new Date(b.createdAt).getTime();
      } else if (sortBy === "priority") {
        const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
        aValue = priorityOrder[a.priority as keyof typeof priorityOrder] || 0;
        bValue = priorityOrder[b.priority as keyof typeof priorityOrder] || 0;
      } else if (sortBy === "status") {
        const statusOrder = {
          open: 1,
          "in-progress": 2,
          resolved: 3,
          closed: 4,
        };
        aValue = statusOrder[a.status as keyof typeof statusOrder] || 0;
        bValue = statusOrder[b.status as keyof typeof statusOrder] || 0;
      } else {
        // sortBy === "subject"
        aValue = a.subject.toLowerCase();
        bValue = b.subject.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTickets = filteredTickets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleTicketClick = (ticketId: string) => {
    router.push(`/admin/support/${ticketId}`);
  };

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const handleQuickReply = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setShowQuickReply(true);
  };

  const submitQuickReply = () => {
    if (quickReplyText.trim()) {
      // Handle quick reply submission
      console.log(
        `[v0] Quick reply for ticket ${selectedTicket}: ${quickReplyText}`
      );
      setQuickReplyText("");
      setShowQuickReply(false);
      setSelectedTicket(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "error";
      case "in-progress":
        return "warning";
      case "resolved":
        return "success";
      case "closed":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "باز";
      case "in-progress":
        return "در حال بررسی";
      case "resolved":
        return "حل شده";
      case "closed":
        return "بسته";
      default:
        return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600";
      case "high":
        return "text-orange-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-500";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "فوری";
      case "high":
        return "بالا";
      case "medium":
        return "متوسط";
      case "low":
        return "پایین";
      default:
        return priority;
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      [
        "شناسه",
        "موضوع",
        "کاربر",
        "وضعیت",
        "اولویت",
        "تاریخ ایجاد",
        "تعداد پاسخ",
      ].join(","),
      ...filteredTickets.map((ticket) =>
        [
          ticket.id,
          `"${ticket.subject}"`,
          `"${ticket.user.name}"`,
          getStatusText(ticket.status),
          getPriorityText(ticket.priority),
          new Date(ticket.createdAt).toLocaleDateString("fa-IR"),
          ticket.messages.length,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `support-tickets-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    link.click();
  };

  const stats = {
    total: mockSupportTickets.length,
    open: mockSupportTickets.filter((t) => t.status === "open").length,
    inProgress: mockSupportTickets.filter((t) => t.status === "in-progress")
      .length,
    resolved: mockSupportTickets.filter((t) => t.status === "resolved").length,
    urgent: mockSupportTickets.filter((t) => t.priority === "urgent").length,
  };

  return (
    <MainLayout>
      <PageHeader
        title="مدیریت پشتیبانی"
        description={`مدیریت ${stats.total.toLocaleString(
          "fa-IR"
        )} تیکت پشتیبانی و درخواست‌های کاربران`}
        action={
          <div className="flex items-center gap-2">
            <Button
              onClick={exportToCSV}
              variant="outline"
              className="cursor-pointer bg-transparent"
            >
              <MdDownload className="w-4 h-4 ml-2" />
              خروجی CSV
            </Button>
            <Button variant="outline" className="cursor-pointer bg-transparent">
              <MdRefresh className="w-4 h-4 ml-2" />
              بروزرسانی
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                کل تیکت‌ها
              </p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {stats.total.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-blue-600 rounded-lg">
              <MdSupport className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 dark:text-red-400 mb-1">
                تیکت‌های باز
              </p>
              <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                {stats.open.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-red-600 rounded-lg">
              <MdAssignment className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-1">
                در حال بررسی
              </p>
              <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
                {stats.inProgress.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-yellow-600 rounded-lg">
              <MdSchedule className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 mb-1">
                حل شده
              </p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                {stats.resolved.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-green-600 rounded-lg">
              <MdCheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                فوری
              </p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                {stats.urgent.toLocaleString("fa-IR")}
              </p>
            </div>
            <div className="p-3 bg-purple-600 rounded-lg">
              <MdPriorityHigh className="w-6 h-6 text-white" />
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
                جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف
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
                  placeholder="جستجو بر اساس موضوع، نام کاربر یا محتوای تیکت..."
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
                  setPriorityFilter("all");
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
                {["all", "open", "in-progress", "resolved", "closed"].map(
                  (status) => (
                    <Button
                      key={status}
                      variant={statusFilter === status ? "primary" : "outline"}
                      size="sm"
                      onClick={() =>
                        setStatusFilter(
                          status as
                            | "all"
                            | "open"
                            | "in-progress"
                            | "resolved"
                            | "closed"
                        )
                      }
                      className="cursor-pointer"
                    >
                      {status === "all" ? "همه" : getStatusText(status)}
                    </Button>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  اولویت:
                </span>
                {["all", "urgent", "high", "medium", "low"].map((priority) => (
                  <Button
                    key={priority}
                    variant={
                      priorityFilter === priority ? "primary" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                      setPriorityFilter(
                        priority as "all" | "urgent" | "high" | "medium" | "low"
                      )
                    }
                    className="cursor-pointer"
                  >
                    {priority === "all" ? "همه" : getPriorityText(priority)}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  مرتب‌سازی:
                </span>
                <Button
                  variant={sortBy === "createdAt" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("createdAt")}
                  className="cursor-pointer"
                >
                  تاریخ
                  {sortBy === "createdAt" && (
                    <MdSort
                      className={`w-4 h-4 mr-1 ${
                        sortOrder === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>
                <Button
                  variant={sortBy === "priority" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("priority")}
                  className="cursor-pointer"
                >
                  اولویت
                  {sortBy === "priority" && (
                    <MdSort
                      className={`w-4 h-4 mr-1 ${
                        sortOrder === "desc" ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Button>
                <Button
                  variant={sortBy === "status" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => handleSort("status")}
                  className="cursor-pointer"
                >
                  وضعیت
                  {sortBy === "status" && (
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

      {paginatedTickets.length === 0 ? (
        <EmptyState
          title="تیکت پشتیبانی یافت نشد"
          description="با فیلترهای انتخاب شده تیکت پشتیبانی یافت نشد. فیلترها را تغییر دهید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setPriorityFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : viewMode === "list" ? (
        <div className="space-y-4">
          {paginatedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="hover:shadow-lg transition-all duration-200 cursor-pointer border-r-4 rounded-xl"
              style={{
                borderRightColor:
                  ticket.priority === "urgent"
                    ? "#dc2626"
                    : ticket.priority === "high"
                    ? "#ea580c"
                    : ticket.priority === "medium"
                    ? "#ca8a04"
                    : "#16a34a",
              }}
              onClick={() => handleTicketClick(ticket.id)}
            >
              <Card>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      {ticket.user.name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {ticket.subject}
                        </h3>
                        <Badge
                          variant={getStatusColor(ticket.status)}
                          size="sm"
                        >
                          {getStatusText(ticket.status)}
                        </Badge>
                        <div
                          className={cn(
                            "flex items-center gap-1",
                            getPriorityColor(ticket.priority)
                          )}
                        >
                          <MdPriorityHigh className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {getPriorityText(ticket.priority)}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {ticket.content}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MdPerson className="w-4 h-4" />
                          <span>{ticket.user.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdAccessTime className="w-4 h-4" />
                          <span>
                            {new Date(ticket.createdAt).toLocaleDateString(
                              "fa-IR",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </div>
                        {ticket.assignedTo && (
                          <div className="flex items-center gap-1">
                            <MdCheckCircle className="w-4 h-4" />
                            <span>واگذار شده</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <MdMessage className="w-4 h-4" />
                          <span>{ticket.messages.length} پاسخ</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        handleQuickReply(ticket.id);
                      }}
                      className="cursor-pointer"
                    >
                      <MdReply className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        handleTicketClick(ticket.id);
                      }}
                      className="cursor-pointer"
                    >
                      <MdVisibility className="w-4 h-4" />
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
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200"
              onClick={() => handleTicketClick(ticket.id)}
            >
              <Card>
                <div className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg mx-auto mb-4">
                      {ticket.user.name.charAt(0)}
                    </div>

                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 line-clamp-1">
                      {ticket.subject}
                    </h3>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Badge variant={getStatusColor(ticket.status)} size="sm">
                        {getStatusText(ticket.status)}
                      </Badge>
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          getPriorityColor(ticket.priority)
                        )}
                      >
                        <MdPriorityHigh className="w-3 h-3" />
                        <span className="text-xs font-medium">
                          {getPriorityText(ticket.priority)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {ticket.content}
                    </p>

                    <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center justify-center gap-1">
                        <MdPerson className="w-3 h-3" />
                        <span>{ticket.user.name}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MdMessage className="w-3 h-3" />
                        <span>{ticket.messages.length} پاسخ</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MdAccessTime className="w-3 h-3" />
                        <span>
                          {new Date(ticket.createdAt).toLocaleDateString(
                            "fa-IR",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            نمایش{" "}
            {((currentPage - 1) * itemsPerPage + 1).toLocaleString("fa-IR")} تا{" "}
            {Math.min(
              currentPage * itemsPerPage,
              filteredTickets.length
            ).toLocaleString("fa-IR")}{" "}
            از {filteredTickets.length.toLocaleString("fa-IR")} تیکت
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
        isOpen={showQuickReply}
        onClose={() => setShowQuickReply(false)}
        title="پاسخ سریع"
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              پاسخ شما:
            </label>
            <textarea
              value={quickReplyText}
              onChange={(e) => setQuickReplyText(e.target.value)}
              placeholder="پاسخ خود را اینجا بنویسید..."
              className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setShowQuickReply(false)}
              className="cursor-pointer"
            >
              انصراف
            </Button>
            <Button
              onClick={submitQuickReply}
              disabled={!quickReplyText.trim()}
              className="cursor-pointer"
            >
              ارسال پاسخ
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}
