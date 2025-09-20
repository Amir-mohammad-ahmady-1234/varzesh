import Sidebar from "../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../components/pages/adminpanel/layout/Topbar";
import PageTitle from "../../../components/pages/adminpanel/pages/games/PageTitle";
import GamesPagination from "../../../components/pages/adminpanel/pages/games/GamesPagination";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/support/FilterAndSearch";
import { FindGame } from "../../../server/admin/paneladmin/game/FindGame/FindGame";
import { supportFilters } from "../../../mocks/admin/filters/support-filters";

interface Props {
  searchParams: {
    search?: string;
    status?: string;
    League?: string;
    page?: number;
    limit?: number;
  };
}
export default async function GamesPage({ searchParams }: Props) {
  const { search, status, League, page, limit } = searchParams;

  const Game = await FindGame({
    serch: search ?? "",
    status: status as "Scheduled" | "down" | "live",
    League: League as "Acup" | "Tcup" | "Dcup",
    page: page ? page : 1,
    limit: limit ? limit : 10,
  });
  console.log(Game);
  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <section className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <PageTitle />

            <FilterAndSearch
              description="جستجو و فیلتر بازی بر اساس معیارهای مختلف"
              isfilter={true}
              itemsbtn={supportFilters}
            />

            <GamesPagination />
          </div>
        </section>
      </div>
    </div>
  );
}
