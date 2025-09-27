import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import { GetSupportFilterQuery } from "../../../server/admin/paneladmin/support/GetSupportFilterQurey/GetSupportFilterQurey";
import supportboxInformation from "../../../server/admin/paneladmin/support/supportboxInformation";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import Cart from "../../../components/common/admin/rowsList/Cart";
import { filterArray } from "../../../mocks/admin/filters/filterArray";
import { Priority, Status } from "@prisma/client";
import EmptyState from "../../../components/common/ui/EmptyState";

export const metadata = {
  title: "پشتیبانی پنل ادمین",
  description: "رسیدگی به تیکت های پشتیبانی کاربران",
};

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
  const { search, status, priority, sort, page, limit } = await searchParams;

  const tickets = await GetSupportFilterQuery({
    serch: search ?? "",
    status: status as Status,
    priority: priority as Priority,
    sort: sort as "asc" | "desc",
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 5,
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
        itemsbtn={filterArray}
      />

      <EmptyAndPagination datas={tickets.data} pagination={tickets.pagination}>
        {tickets.data.map((data) => (
          <Cart
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description as string}
            date={data.updatedAt}
            options={[
              {
                title: "status",
                items: { key: "status", value: data.status },
              },
              {
                title: "priority",
                items: { key: "priority", value: data.priority },
              },
            ]}
          />
        ))}
      </EmptyAndPagination>

      <FastAnswer />
    </MainLayout>
  );
}
