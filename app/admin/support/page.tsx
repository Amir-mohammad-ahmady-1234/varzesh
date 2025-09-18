import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import { getStats } from "../../../lib/getStats";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/support/FilterAndSearch";

export default async function SupportPage() {
  const stats = await getStats();

  if (stats.error) return <p>{stats.error}</p>;

  return (
    <MainLayout>
      <PageTitle totalsupport={stats.totalsupport ?? 0} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <FilterAndSearch />

      <EmptyAndPagination />

      <FastAnswer />
    </MainLayout>
  );
}
