import { useState } from "react";
import { mockSupportTickets } from "../../../mocks/mock-data";

export function useSupportStates() {
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

  const stats = {
    total: mockSupportTickets.length,
    open: mockSupportTickets.filter((t) => t.status === "open").length,
    inProgress: mockSupportTickets.filter((t) => t.status === "in-progress")
      .length,
    resolved: mockSupportTickets.filter((t) => t.status === "resolved").length,
    urgent: mockSupportTickets.filter((t) => t.priority === "urgent").length,
  };

  return {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    selectedTicket,
    setSelectedTicket,
    showQuickReply,
    setShowQuickReply,
    quickReplyText,
    setQuickReplyText,
    filteredTickets,
    totalPages,
    startIndex,
    paginatedTickets,
    stats,
    itemsPerPage,
  };
}
