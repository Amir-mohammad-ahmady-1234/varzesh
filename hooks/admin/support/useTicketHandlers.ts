import { useTicketStates } from "./useTicketStates";

export function useTicketHandlers() {
  const {
    replyMessage,
    ticket,
    setReplyMessage,
    internalNote,
    setInternalNote,
    setShowInternalNote,
    setTicket,
  } = useTicketStates();

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
    newStatus: "Open" | "Waiting" | "Approved" | "Blocked"
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
      case "URGENT":
        return "text-red-600";
      case "HIGH":
        return "text-orange-600";
      case "NORMAL":
        return "text-yellow-600";
      case "LOW":
        return "text-green-600";
      default:
        return "text-muted-foreground";
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

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("fa-IR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return {
    handleSendReply,
    handleAddInternalNote,
    handleStatusChange,
    exportConversation,
    getStatusColor,
    getStatusText,
    getPriorityColor,
    getPriorityText,
    formatTime,
  };
}
