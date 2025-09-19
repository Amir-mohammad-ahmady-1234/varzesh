"use client";

import React from "react";
import Search from "../../../../common/admin/FilterCard/Search";
import SortByStatus from "../../../../common/admin/FilterCard/SortByStatus";
import SortByPriority from "../../../../common/admin/FilterCard/SortByPriority";
import Sort from "../../../../common/admin/FilterCard/Sort";

interface Props {
  placeHolder?: string;
  searchQuery?: string;
  statusFilter?: "all" | "Open" | "Waiting" | "Approved" | "URGENT";
  priorityFilter?: "all" | "URGENT" | "HIGH" | "NORMAL" | "LOW";
  sortBy?: "createdAt" | "priority" | "status" | "subject";
  sortOrder?: "asc" | "desc";
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  setStatusFilter?: React.Dispatch<
    React.SetStateAction<"all" | "Open" | "Waiting" | "Approved" | "URGENT">
  >;
  setPriorityFilter?: React.Dispatch<
    React.SetStateAction<"all" | "URGENT" | "HIGH" | "NORMAL" | "LOW">
  >;
  getStatusText?: (status: string) => string;
  getPriorityText?: (priority: string) => string;
  handleSort?: (
    column: "createdAt" | "priority" | "status" | "subject"
  ) => void;
}

export default function CardMainContent({
  placeHolder,
  searchQuery,
  statusFilter,
  priorityFilter,
  sortBy,
  sortOrder,
  setSearchQuery,
  setStatusFilter,
  setPriorityFilter,
  getStatusText,
  getPriorityText,
  handleSort,
}: Props) {
  return (
    <div className="space-y-4">
      <Search
        searchQuery={searchQuery}
        setPriorityFilter={setPriorityFilter}
        setSearchQuery={setSearchQuery}
        setStatusFilter={setStatusFilter}
        placehlderText={placeHolder}
      />

      <div className="flex flex-wrap gap-4">
        {statusFilter && (
          <SortByStatus
            getStatusText={getStatusText}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
          />
        )}

        {priorityFilter && (
          <SortByPriority
            getPriorityText={getPriorityText}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
        )}

        {sortBy && (
          <Sort handleSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
        )}
      </div>
    </div>
  );
}
