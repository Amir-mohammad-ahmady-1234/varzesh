"use client";
import { useState } from "react";
import { mockUsers } from "../../../mocks/mock-data";
import { getRoleText, getStatusText } from "./usersHandlers";
import { useRouter } from "next/navigation";

export function useUsersStates() {
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

  return {
    searchQuery,
    setSearchQuery,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    selectedUsers,
    setSelectedUsers,
    showBulkModal,
    setShowBulkModal,
    bulkAction,
    setBulkAction,
    viewMode,
    setViewMode,
    filteredUsers,
    totalPages,
    startIndex,
    paginatedUsers,
    getBulkActionText,
    getBulkActionDescription,
    handleUserClick,
    handleSort,
    toggleUserSelection,
    toggleSelectAll,
    handleBulkAction,
    confirmBulkAction,
    exportSelectedUsers,
    itemsPerPage,
  };
}
