"use client";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import Card, { CardContent } from "../../../styles/ui/Card";
import EmptyState from "../../../styles/ui/EmptyState";
import Button from "../../../components/common/Button";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import Search from "../../../components/common/admin/FilterCard/Search";
import SortByStatus from "../../../components/common/admin/FilterCard/SortByStatus";
import SortByPriority from "../../../components/common/admin/FilterCard/SortByPriority";
import Sort from "../../../components/common/admin/FilterCard/Sort";
import CartContainer from "../../../components/common/admin/FilterCard/CartContainer";
import CartHeader from "../../../components/common/admin/FilterCard/CartHeader";
import TicketContent from "../../../components/pages/adminpanel/pages/support/TicketCard/TicketContent";
import TicketTitle from "../../../components/pages/adminpanel/pages/support/TicketCard/TicketTitle";
import TicketOptions from "../../../components/pages/adminpanel/pages/support/TicketCard/TicketOptions";
import PageCount from "../../../components/common/admin/Pagination/PageCount";
import PaginationBtns from "../../../components/common/admin/Pagination/PaginationBtns";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import { useSupportStates } from "../../../hooks/admin/useSupportStates";
import { useSupportHandlers } from "../../../hooks/admin/useSupportHandlers";

export default function SupportPage() {
  const {
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortBy,
    sortOrder,
    currentPage,
    setCurrentPage,
    showQuickReply,
    setShowQuickReply,
    quickReplyText,
    setQuickReplyText,
    filteredTickets,
    totalPages,
    paginatedTickets,
    stats,
    itemsPerPage,
  } = useSupportStates();

  const {
    handleTicketClick,
    handleQuickReply,
    submitQuickReply,
    getStatusColor,
    getStatusText,
    getPriorityColor,
    getPriorityText,
    handleSort,
    exportToCSV,
  } = useSupportHandlers();

  return (
    <MainLayout>
      <PageTitle stats={stats} exportToCSV={exportToCSV} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <CartContainer>
        <CartHeader title="جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف" />
        <CardContent>
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

              <Sort
                handleSort={handleSort}
                sortBy={sortBy}
                sortOrder={sortOrder}
              />
            </div>
          </div>
        </CardContent>
      </CartContainer>

      {paginatedTickets.length === 0 ? (
        <EmptyState
          title="تیکت پشتیبانی یافت نشد"
          description="با فیلترهای انتخاب شده تیکت پشتیبانی یافت نشد. فیلترها را تغییر دهید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setPriorityFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : (
        <div className="space-y-4">
          {paginatedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="hover:shadow-lg transition-all duration-200 border-r-4 rounded-xl"
              style={{
                borderRightColor:
                  ticket.priority === "urgent"
                    ? "#dc2626"
                    : ticket.priority === "high"
                    ? "#ea580c"
                    : ticket.priority === "medium"
                    ? "#ca8a04"
                    : "#16a34a",
              }}
            >
              <Card>
                <div className="flex items-start justify-between">
                  <TicketContent ticket={ticket}>
                    <TicketTitle
                      getPriorityColor={getPriorityColor}
                      getPriorityText={getPriorityText}
                      getStatusColor={getStatusColor}
                      getStatusText={getStatusText}
                      ticket={ticket}
                    />
                  </TicketContent>

                  <TicketOptions
                    handleQuickReply={handleQuickReply}
                    handleTicketClick={handleTicketClick}
                    ticket={ticket}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {totalPages > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <PageCount
            currentPage={currentPage}
            count={filteredTickets.length}
            itemsPerPage={itemsPerPage}
            pageName="تیکت"
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

      <FastAnswer
        showQuickReply={showQuickReply}
        quickReplyText={quickReplyText}
        setQuickReplyText={setQuickReplyText}
        setShowQuickReply={setShowQuickReply}
        submitQuickReply={submitQuickReply}
      />
    </MainLayout>
  );
}
