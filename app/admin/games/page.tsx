import Sidebar from "../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../components/pages/adminpanel/layout/Topbar";
import PageTitle from "../../../components/pages/adminpanel/pages/games/PageTitle";
import GamesTable from "../../../components/pages/adminpanel/pages/games/GamesTable";
import GamesPagination from "../../../components/pages/adminpanel/pages/games/GamesPagination";
import FilterAndSearch from "../../../components/pages/adminpanel/pages/support/FilterAndSearch";
import { FindGame } from "../../../server/admin/paneladmin/game/FindGame/FindGame";

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
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <PageTitle />

            <FilterAndSearch
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
            <GamesTable />

            <GamesPagination />
          </div>
        </main>
      </div>
    </div>
  );
}
