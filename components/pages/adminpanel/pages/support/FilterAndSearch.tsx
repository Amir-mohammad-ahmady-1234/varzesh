"use client";

import React from "react";
import { useSupportStates } from "../../../../../hooks/admin/support/useSupportStates";
import CartContainer from "../../../../common/admin/FilterCard/CartContainer";
import CartHeader from "../../../../common/admin/FilterCard/CartHeader";
import { CardContent } from "../../../../../styles/ui/Card";
import CardMainContent from "./CardMainContent";
import { useSupportHandlers } from "../../../../../hooks/admin/support/useSupportHandlers";

export default function FilterAndSearch() {
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
    <CartContainer>
      <CartHeader title="جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف" />
      <CardContent>
        <CardMainContent
          placeHolder="جستجو بر اساس موضوع، نام کاربر یا محتوای تیکت.."
          priorityFilter={priorityFilter}
          searchQuery={searchQuery}
          setPriorityFilter={setPriorityFilter}
          setSearchQuery={setSearchQuery}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          sortOrder={sortOrder}
          statusFilter={statusFilter}
          getPriorityText={getPriorityText}
          getStatusText={getStatusText}
          handleSort={handleSort}
        />
      </CardContent>
    </CartContainer>
  );
}
