import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import { GetSupportFilterQuery } from "../../../server/admin/paneladmin/support/GetSupportFilterQurey/GetSupportFilterQurey";
import supportboxInformation from "../../../server/admin/paneladmin/support/supportboxInformation";
import UsersTickets from "../../../components/pages/adminpanel/pages/support/UsersTickets";
import EmptyState from "../../../styles/ui/EmptyState";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/support/FilterAndSearch";

interface Props {
  searchParams: {
    search?: string;
    status?: string;
    priority?: string;
    sort?: "asc" | "desc";
    page?: number;
    limit?: number;
  };
}

export default async function SupportPage({ searchParams }: Props) {
  const stats = await supportboxInformation();
  const { search, status, priority, sort, page, limit } = searchParams;

  const tickets = await GetSupportFilterQuery({
    serch: search ?? "",
    status: status as "Blocked" | "Waiting" | "Approved" | "Open",
    priority: priority as "NORMAL" | "URGENT" | "LOW" | "HIGH",
    sort: sort as "asc" | "desc",
    page: page ? page : 1,
    limit: limit ? limit : 10,
  });
  console.log(tickets);
  console.log(page);
  console.log(limit);

  if (stats.error) return <p>{stats.error}</p>;
  if (tickets.error) return <p>{tickets.error}</p>;
  if (!tickets.data)
    return <EmptyState title="خطا در دریافت تیکت های پشتیبانی" />;

  return (
    <MainLayout>
      <PageTitle totalsupport={stats.totalsupport ?? 0} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />
      <FilterAndSearch
        description="جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف"
        isfilter={true}
        itemsbtn={[
          {
            title: "مرتب‌ سازی",
            items: [
              { name: "نزولی", key: "sort", value: "desc" },
              { name: "صعودی", key: "sort", value: "asc" },
            ],
          },
          {
            title: "وضعیت",
            items: [
              { name: "بلاک شده", key: "status", value: "Blocked" },
              { name: "درحال تایید", key: "status", value: "Waiting" },
              { name: "تایید شده", key: "status", value: "Approved" },
              { name: "باز", key: "status", value: "Open" },
            ],
          },
          {
            title: "اولویت",
            items: [
              { name: "پاین", key: "priority", value: "LOW" },
              { name: "عادی", key: "priority", value: "NORMAL" },
              { name: "بالا", key: "priority", value: "HIGH" },
              { name: "فوری !", key: "priority", value: "URGENT" },
            ],
          },
        ]}
      />

      <EmptyAndPagination tickets={tickets.data}>
        <UsersTickets tickets={tickets.data} />
      </EmptyAndPagination>

      <FastAnswer />
    </MainLayout>
  );
}
