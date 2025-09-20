"use client";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import EmptyState from "../../../styles/ui/EmptyState";
import Button from "../../../components/common/Button";
import PageTitle from "../../../components/pages/adminpanel/pages/chat-rooms/PageTitle";
import CartContainer from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/CartContainer";
import PageCount from "../../../components/common/admin/Pagination/PageCount";
import PaginationBtns from "../../../components/common/admin/Pagination/PaginationBtns";
import SettingModal from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/SettingModal";
import { usersCardInfo } from "../../../mocks/admin/chat-roomsMoocks";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { useChatRoom } from "../../../hooks/admin/chat-room/useChatRoom";

import { CardContent } from "../../../styles/ui/Card";
import CartHeader from "../../../components/common/admin/FilterCard/CartHeader";
import FilterCartContainer from "../../../components/common/admin/FilterCard/CartContainer";

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

      <UsersActivities stats={stats} usersCardInfo={usersCardInfo} />

      <FilterCartContainer>
        <CartHeader title="جستجو و فیلتر چت روم‌ها بر اساس معیارهای مختلف" />
        <CardContent>
          <CardMainContent
            placeHolder="جستجو بر اساس نام چت روم، توضیحات یا نوع..."
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </CardContent>
      </FilterCartContainer>

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

      <SettingModal
        setShowRoomModal={setShowRoomModal}
        showRoomModal={showRoomModal}
      />
    </MainLayout>
  );
}
