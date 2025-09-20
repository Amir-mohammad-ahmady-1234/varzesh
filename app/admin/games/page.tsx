import Sidebar from "../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../components/pages/adminpanel/layout/Topbar";
import Card from "../../../styles/ui/Card";
import PageTitle from "../../../components/pages/adminpanel/pages/games/PageTitle";
import FilterAndSearchGame from "../../../components/pages/adminpanel/pages/games/FilterAndSearchGame";
import GamesTable from "../../../components/pages/adminpanel/pages/games/GamesTable";
import GamesPagination from "../../../components/pages/adminpanel/pages/games/GamesPagination";

export default function GamesPage() {
  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <PageTitle />

            <Card>
              {/* Filters */}
              <FilterAndSearchGame />

              {/* Games Table */}
              <GamesTable />

              {/* Pagination */}
              <GamesPagination />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
