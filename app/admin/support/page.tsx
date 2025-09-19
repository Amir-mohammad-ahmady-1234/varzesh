import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/support/FilterAndSearch";
import { GetSupportFilterQuery } from "../../../server/admin/paneladmin/support/GetSupportFilterQurey/GetSupportFilterQurey";
import supportboxInformation from "../../../server/admin/paneladmin/support/supportboxInformation";
import UsersTickets from "../../../components/pages/adminpanel/pages/support/UsersTickets";
import EmptyState from "../../../styles/ui/EmptyState";
import { redirect } from "next/navigation";

interface Props {
  searchParams: { search?: string };
}

export default async function SupportPage({ searchParams }: Props) {
  const stats = await supportboxInformation();
  const search = (await searchParams).search;

  if (!search) redirect("/admin/support?search=default");
  const tickets = await GetSupportFilterQuery({
    serch: search === "default" ? "" : search,
  });

  if (stats.error) return <p>{stats.error}</p>;
  if (tickets.error) return <p>{tickets.error}</p>;
  if (!tickets.data)
    return <EmptyState title="خطا در دریافت تیکت های پشتیبانی" />;

  return (
    <MainLayout>
      <PageTitle totalsupport={stats.totalsupport ?? 0} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <FilterAndSearch search={search} />

      <EmptyAndPagination tickets={tickets.data}>
        <UsersTickets tickets={tickets.data} />
      </EmptyAndPagination>

      <FastAnswer />
    </MainLayout>
  );
}
