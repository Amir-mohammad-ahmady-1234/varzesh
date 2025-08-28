"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "../../../../components/pages/adminpanel/layout/MainLayout";
import PageHeader from "../../../../styles/ui/PageHeader";
import Card from "../../../../styles/ui/Card";
import Button from "../../../../styles/ui/Button";
import Badge from "../../../../styles/ui/Badge";
import Input from "../../../../styles/ui/Input";
import { mockSupportTickets } from "../../../../mocks/mock-data";
import {
  MdArrowBack,
  MdSend,
  MdDownload,
  MdAssignment,
  MdClose,
  MdCheck,
  MdNote,
  MdPerson,
  MdEmail,
  MdPriorityHigh,
} from "react-icons/md";
import { cn } from "../../../../lib/utils";
import { SupportTicket } from "../../../../types/adminPanelTypes";

export default function SupportTicketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const ticketId = params.id as string;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ticket, setTicket] = useState<SupportTicket | null>(
    mockSupportTickets.find((t) => t.id === ticketId) ?? null
  );

  //   const [loading, setLoading] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [internalNote, setInternalNote] = useState("");
  const [showInternalNote, setShowInternalNote] = useState(false);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ticket?.messages]);

  const handleSendReply = () => {
    if (!replyMessage.trim() || !ticket) return;

    const newMessage = {
      id: Date.now().toString(),
      ticketId: ticket.id,
      userId: "admin",
      user: { id: "admin", name: "پشتیبانی", avatar: "" },
      content: replyMessage,
      isInternal: false,
      createdAt: new Date().toISOString(),
    };

    setTicket((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, newMessage],
            updatedAt: new Date().toISOString(),
          }
        : null
    );

    setReplyMessage("");
  };

  const handleAddInternalNote = () => {
    if (!internalNote.trim() || !ticket) return;

    const newNote = {
      id: Date.now().toString(),
      ticketId: ticket.id,
      userId: "admin",
      user: { id: "admin", name: "ادمین سیستم", avatar: "" },
      content: internalNote,
      isInternal: true,
      createdAt: new Date().toISOString(),
    };

    setTicket((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, newNote],
            updatedAt: new Date().toISOString(),
          }
        : null
    );

    setInternalNote("");
    setShowInternalNote(false);
  };

  const handleStatusChange = (
    newStatus: "open" | "in-progress" | "resolved" | "closed"
  ) => {
    if (!ticket) return;

    setTicket((prev) =>
      prev
        ? {
            ...prev,
            status: newStatus,
            updatedAt: new Date().toISOString(),
          }
        : null
    );
  };

  const exportConversation = () => {
    if (!ticket) return;

    const csvContent = [
      ["تاریخ", "فرستنده", "نوع", "پیام"].join(","),
      ...ticket.messages.map((message) =>
        [
          new Date(message.createdAt).toLocaleString("fa-IR"),
          `"${message.user.name}"`,
          message.isInternal ? "یادداشت داخلی" : "پیام عمومی",
          `"${message.content}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `ticket-${ticket.id}-conversation.csv`;
    link.click();
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
        return "text-muted-foreground";
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

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("fa-IR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!ticket) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              تیکت یافت نشد
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
        title={`تیکت #${ticket.id}`}
        description={ticket.subject}
        action={
          <div className="flex items-center gap-2">
            <Badge variant={getStatusColor(ticket.status)}>
              {getStatusText(ticket.status)}
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Conversation */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            {/* Conversation Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {ticket.user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {ticket.user.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ticket.user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={exportConversation}
                  className="cursor-pointer bg-transparent"
                >
                  <MdDownload className="w-4 h-4 ml-1" />
                  خروجی
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowInternalNote(!showInternalNote)}
                  className="cursor-pointer"
                >
                  <MdNote className="w-4 h-4 ml-1" />
                  یادداشت
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Initial ticket message */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {ticket.user.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {ticket.user.name}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {formatTime(ticket.createdAt)}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      تیکت اولیه
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    {ticket.content}
                  </p>
                </div>
              </div>

              {/* Conversation messages */}
              {ticket.messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-lg",
                    message.isInternal
                      ? "bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800"
                      : message.userId === "admin"
                      ? "bg-blue-50 dark:bg-blue-950/20"
                      : "bg-gray-50 dark:bg-gray-800"
                  )}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {message.user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {message.user.name}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {formatTime(message.createdAt)}
                      </span>
                      {message.isInternal && (
                        <Badge variant="warning" className="text-xs">
                          یادداشت داخلی
                        </Badge>
                      )}
                      {message.userId === "admin" && !message.isInternal && (
                        <Badge variant="primary" className="text-xs">
                          پشتیبانی
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-900 dark:text-gray-100">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Internal Note Input */}
            {showInternalNote && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-yellow-50 dark:bg-yellow-950/20">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="یادداشت داخلی (فقط برای تیم پشتیبانی قابل مشاهده است)..."
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && internalNote.trim()) {
                        handleAddInternalNote();
                      }
                    }}
                  />
                  <Button
                    onClick={handleAddInternalNote}
                    disabled={!internalNote.trim()}
                    className="cursor-pointer"
                  >
                    <MdNote className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Reply Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="پاسخ به کاربر..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && replyMessage.trim()) {
                      handleSendReply();
                    }
                  }}
                />
                <Button
                  onClick={handleSendReply}
                  disabled={!replyMessage.trim()}
                  className="cursor-pointer"
                >
                  <MdSend className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ticket Info & Actions */}
        <div className="space-y-4">
          {/* Ticket Info */}
          <Card>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              اطلاعات تیکت
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  وضعیت:
                </span>
                <Badge variant={getStatusColor(ticket.status)}>
                  {getStatusText(ticket.status)}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  اولویت:
                </span>
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
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ایجاد:
                </span>
                <span className="text-sm">{formatTime(ticket.createdAt)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  آخرین بروزرسانی:
                </span>
                <span className="text-sm">{formatTime(ticket.updatedAt)}</span>
              </div>
              {ticket.assignedTo && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    واگذار شده به:
                  </span>
                  <span className="text-sm">{ticket.assignedTo}</span>
                </div>
              )}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              عملیات سریع
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer bg-transparent"
                onClick={() => handleStatusChange("in-progress")}
                disabled={ticket.status === "in-progress"}
              >
                <MdAssignment className="w-4 h-4 ml-2" />
                شروع بررسی
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer bg-transparent"
                onClick={() => handleStatusChange("resolved")}
                disabled={
                  ticket.status === "resolved" || ticket.status === "closed"
                }
              >
                <MdCheck className="w-4 h-4 ml-2" />
                علامت‌گذاری به عنوان حل شده
              </Button>
              <Button
                variant="destructive"
                className="w-full justify-start cursor-pointer"
                onClick={() => handleStatusChange("closed")}
                disabled={ticket.status === "closed"}
              >
                <MdClose className="w-4 h-4 ml-2" />
                بستن تیکت
              </Button>
            </div>
          </Card>

          {/* User Info */}
          <Card>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              اطلاعات کاربر
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MdPerson className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{ticket.user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{ticket.user.email}</span>
              </div>
              <Button
                variant="outline"
                className="w-full cursor-pointer bg-transparent"
              >
                مشاهده پروفایل کاربر
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
