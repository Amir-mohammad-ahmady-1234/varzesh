import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import { CardContent } from "../../../styles/ui/Card";
import PageTitle from "../../../components/pages/adminpanel/pages/support/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { userTicketInfo } from "../../../mocks/admin/chat-roomsMoocks";
import CartContainer from "../../../components/common/admin/FilterCard/CartContainer";
import CartHeader from "../../../components/common/admin/FilterCard/CartHeader";
import FastAnswer from "../../../components/pages/adminpanel/pages/support/FastAnswer";
import CardMainContent from "../../../components/pages/adminpanel/pages/support/CardMainContent";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import { getStats } from "../../../lib/getStats";

export default async function SupportPage() {
  const stats = await getStats();

  if (stats.error) return <p>{stats.error}</p>;

  return (
    <MainLayout>
      <PageTitle totalsupport={stats.totalsupport ?? 0} />

      <UsersActivities stats={stats} usersCardInfo={userTicketInfo} />

      <CartContainer>
        <CartHeader title="جستجو و فیلتر تیکت‌های پشتیبانی بر اساس معیارهای مختلف" />
        <CardContent>
          <CardMainContent />
        </CardContent>
      </CartContainer>

      <EmptyAndPagination />

      <FastAnswer />
    </MainLayout>
  );
}
