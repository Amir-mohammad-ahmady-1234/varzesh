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

interface Props {
  searchParams: { search?: string };
}

export default async function SupportPage({ searchParams }: Props) {
  const stats = await supportboxInformation();
  const search = (await searchParams).search;
  const tickets = await GetSupportFilterQuery({ serch: search?.trim() });

  if (stats.error) return <p>{stats.error}</p>;

  return (
    <MainLayout>
      <PageTitle totalsupport={stats.totalsupport ?? 0} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <FilterAndSearch />

      <EmptyAndPagination>
        <UsersTickets tickets={tickets} />
      </EmptyAndPagination>

      <FastAnswer />
    </MainLayout>
  );
}
