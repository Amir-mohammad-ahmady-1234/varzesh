'use client'

import React from "react";
import { useChatRoom } from "../../../../../../hooks/admin/chat-room/useChatRoom";
import EmptyState from "../../../../../common/ui/EmptyState";
import Button from "../../../../../common/Button";
import CartContainer from "./CartContainer";
import PageCount from "../../../../../common/admin/Pagination/PageCount";
import PaginationBtns from "../../../../../common/admin/Pagination/PaginationBtns";

export default function RoomsAndPagination() {
  const {
    currentPage,
    filteredRooms,
    isLiveMode,
    paginatedRooms,
    setCurrentPage,
    setShowRoomModal,
    totalPages,
    itemsPerPage,
  } = useChatRoom();

  return (
    <>
      {paginatedRooms.length === 0 ? (
        <EmptyState
          title="چت روم یافت نشد"
          description="با فیلترهای انتخاب شده چت روم یافت نشد. فیلترها را تغییر دهید یا چت روم جدید ایجاد کنید."
          action={<Button className="cursor-pointer">پاک کردن فیلترها</Button>}
        />
      ) : (
        <CartContainer
          isLiveMode={isLiveMode}
          paginatedRooms={paginatedRooms}
          setShowRoomModal={setShowRoomModal}
        />
      )}

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <PageCount
            currentPage={currentPage}
            count={filteredRooms.length}
            itemsPerPage={itemsPerPage}
            pageName="چت روم"
          />

          <div className="flex items-center gap-2">
            <PaginationBtns
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </>
  );
}
