"use client";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import { CardContent } from "../../../styles/ui/Card";
import EmptyState from "../../../styles/ui/EmptyState";
import Button from "../../../components/common/Button";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import CartContainer from "../../../components/common/admin/FilterCard/CartContainer";
import CartHeader from "../../../components/common/admin/FilterCard/CartHeader";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import { useSupportStates } from "../../../hooks/admin/useSupportStates";
import { useSupportHandlers } from "../../../hooks/admin/useSupportHandlers";
import CardMainContent from "../../../components/pages/adminpanel/pages/support/CardMainContent";
import UsersTickets from "../../../components/pages/adminpanel/pages/support/UsersTickets";
import Pagination from "../../../components/pages/adminpanel/pages/support/Pagination";

export default function SupportPage() {
  const {
    setSearchQuery,
    setStatusFilter,
    setPriorityFilter,
    totalPages,
    paginatedTickets,
    stats,
  } = useSupportStates();

  const { exportToCSV } = useSupportHandlers();

  return (
    <MainLayout>
      <PageTitle stats={stats} exportToCSV={exportToCSV} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <CartContainer>
        <CartHeader title="جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف" />
        <CardContent>
          <CardMainContent />
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
        <UsersTickets />
      )}

      {totalPages > 0 && <Pagination />}

      <FastAnswer />
    </MainLayout>
  );
}
