"use client";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import EmptyState from "../../../styles/ui/EmptyState";
import Button from "../../../components/common/Button";
import PageTitle from "../../../components/pages/adminpanel/pages/chat-rooms/PageTitle";
import UsersActivities from "../../../components/pages/adminpanel/pages/chat-rooms/UsersActivities";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/chat-rooms/FilterAndSearch/FilterAndSearchContainer";
import SubmitingInputs from "../../../components/pages/adminpanel/pages/chat-rooms/FilterAndSearch/SubmitingInputs";
import CartContainer from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/CartContainer";
import PageCount from "../../../components/pages/adminpanel/pages/chat-rooms/Pagination/PageCount";
import PaginationBtns from "../../../components/pages/adminpanel/pages/chat-rooms/Pagination/PaginationBtns";
import SettingModal from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/SettingModal";
import { useChatRoom } from "../../../hooks/useChatRoom";

export default function ChatRoomsPage() {
  const {
    currentPage,
    filteredRooms,
    isLiveMode,
    paginatedRooms,
    searchQuery,
    setCurrentPage,
    setIsLiveMode,
    setSearchQuery,
    setShowRoomModal,
    showRoomModal,
    stats,
    totalPages,
    itemsPerPage,
  } = useChatRoom();

  return (
    <MainLayout>
      <PageTitle
        stats={stats}
        isLiveMode={isLiveMode}
        setIsLiveMode={setIsLiveMode}
      />

      <UsersActivities stats={stats} />

      <FilterAndSearch>
        <SubmitingInputs
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </FilterAndSearch>

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
            filteredRooms={filteredRooms}
            itemsPerPage={itemsPerPage}
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

      <SettingModal
        setShowRoomModal={setShowRoomModal}
        showRoomModal={showRoomModal}
      />
    </MainLayout>
  );
}
