"use client";
import { useSupportStates } from "./useSupportStates";
import { redirect } from "next/navigation";

export function useSupportHandlers() {
  const {
    setSelectedTicket,
    setShowQuickReply,
    quickReplyText,
    selectedTicket,
    setQuickReplyText,
    setSortBy,
    setSortOrder,
    sortBy,
    filteredTickets,
    sortOrder,
  } = useSupportStates();

  const handleTicketClick = (ticketId: string) => {
    redirect(`/admin/support/${ticketId}`);
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
      case "Open":
        return "error";
      case "Waiting":
        return "warning";
      case "Approved":
        return "success";
      case "URGENT":
        return "primary";
      default:
        return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Open":
        return "باز";
      case "Waiting":
        return "در حال بررسی";
      case "Approved":
        return "حل شده";
      case "URGENT":
        return "فوری";
      default:
        return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "URGENT":
        return "text-red-600";
      case "HIGH":
        return "text-orange-600";
      case "NORMAL":
        return "text-yellow-600";
      case "LOW":
        return "text-green-600";
      default:
        return "text-gray-500";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "URGENT":
        return "فوری";
      case "HIGH":
        return "بالا";
      case "NORMAL":
        return "متوسط";
      case "LOW":
        return "پایین";
      default:
        return priority;
    }
  };

  const handleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
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

  return {
    handleTicketClick,
    handleQuickReply,
    submitQuickReply,
    getStatusColor,
    getStatusText,
    getPriorityColor,
    getPriorityText,
    handleSort,
    exportToCSV,
  };
}
