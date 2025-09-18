'use client'
import React from "react";
import Search from "../../../../common/admin/FilterCard/Search";
import SortByStatus from "../../../../common/admin/FilterCard/SortByStatus";
import SortByPriority from "../../../../common/admin/FilterCard/SortByPriority";
import Sort from "../../../../common/admin/FilterCard/Sort";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";
import { useSupportHandlers } from "../../../../../hooks/admin/support/useSupportHandlers";

export default function CardMainContent() {
  const {
    searchQuery,
    statusFilter,
    priorityFilter,
    sortBy,
    sortOrder,
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
  } = useSupportStates();

  const { handleSort, getStatusText, getPriorityText } = useSupportHandlers();

  return (
    <div className="space-y-4">
      <Search
        searchQuery={searchQuery}
        setPriorityFilter={setPriorityFilter}
        setSearchQuery={setSearchQuery}
        setStatusFilter={setStatusFilter}
        placehlderText="جستجو بر اساس موضوع، نام کاربر یا محتوای تیکت..."
      />

      <div className="flex flex-wrap gap-4">
        <SortByStatus
          getStatusText={getStatusText}
          setStatusFilter={setStatusFilter}
          statusFilter={statusFilter}
        />

        <SortByPriority
          getPriorityText={getPriorityText}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <Sort handleSort={handleSort} sortBy={sortBy} sortOrder={sortOrder} />
      </div>
    </div>
  );
}
