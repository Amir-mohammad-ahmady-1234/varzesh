import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import UsersStatistics from "../../../components/pages/adminpanel/pages/dashboard/UsersStatisticsCharts";
import UsersAndMessagesChart from "../../../components/pages/adminpanel/pages/dashboard/UsersAndMessagesCharts/ChartsContainer";

import ChartHeader from "../../../components/pages/adminpanel/pages/dashboard/UsersActivity/HourslyActivity/ChartHeader";
import WeaklyChartHeader from "../../../components/pages/adminpanel/pages/dashboard/UsersActivity/WeaklyActivity/WeaklyChartHeader";
import WeaklyChartContent from "../../../components/pages/adminpanel/pages/dashboard/UsersActivity/WeaklyActivity/WeaklyChartContent";
import InfoHeader from "../../../components/pages/adminpanel/pages/dashboard/LatestUsersAndGamesActivity/latestUsersActivity/InfoHeader";
import InfoContent from "../../../components/pages/adminpanel/pages/dashboard/LatestUsersAndGamesActivity/latestUsersActivity/InfoContent";
import GamesInfotHeader from "../../../components/pages/adminpanel/pages/dashboard/LatestUsersAndGamesActivity/gamesActivity/GamesInfotHeader";
import GamesInfoContent from "../../../components/pages/adminpanel/pages/dashboard/LatestUsersAndGamesActivity/gamesActivity/GamesInfoContent";
import DashPageHeader from "../../../components/pages/adminpanel/pages/dashboard/DashPageHeader";
import ChartContent from "../../../components/pages/adminpanel/pages/dashboard/UsersActivity/HourslyActivity/ChartContent";
import { HourlyActivity } from "../../../server/admin/paneladmin/dashboard/Activity/HourlyActivity/HourlyActivity";
import { WeeklyActivity } from "../../../server/admin/paneladmin/dashboard/Activity/weeklyactivity/WeeklyActivity";

export default async function Dashboard() {
  const { data } = await HourlyActivity();
  const { activeUsers, engagement, totalUsers } = await WeeklyActivity();
  console.log(activeUsers, engagement, totalUsers);

  return (
    <MainLayout>
      <DashPageHeader />
      <UsersStatistics />

      <UsersAndMessagesChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <WeaklyChartHeader>
          <WeaklyChartContent />
        </WeaklyChartHeader>

        <ChartHeader>
          <ChartContent data={data} />
        </ChartHeader>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfoHeader>
          <InfoContent />
        </InfoHeader>

        <GamesInfotHeader>
          <GamesInfoContent />
        </GamesInfotHeader>
      </div>
    </MainLayout>
  );
}
