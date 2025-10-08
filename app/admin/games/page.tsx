/* eslint-disable @typescript-eslint/no-explicit-any */

import Sidebar from "../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../components/pages/adminpanel/layout/Topbar";
import PageTitle from "../../../components/pages/adminpanel/pages/games/PageTitle";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { FindGame } from "../../../server/admin/paneladmin/game/FindGame/FindGame";
import { filterGameArray } from "../../../mocks/admin/filters/filterArray";
import Cart from "../../../components/common/admin/rowsList/Cart";
import Pagination from "../../../components/pages/adminpanel/pages/support/Pagination";
import EmptyAndPagination from "../../../components/pages/adminpanel/pages/support/EmptyAndPagination";
import { normalizeSearchParams } from "../../../utils/normalizeSearchParams";

export const metadata = {
  title: "بازی ها",
  description: "مدیریت بازی های سایت",
};

interface Props {
  searchParams: Promise<{
    search?: string;
    status?: string;
    League?: string;
    page?: number;
    limit?: number;
  }>;
}

export default async function GamesPage({ searchParams }: Props) {
  const { search, status, League, page, limit } = await searchParams;

  const Game = await FindGame({
    serch: search ?? "",
    status: status as "Scheduled" | "down" | "live",
    League: League as "Acup" | "Tcup" | "Dcup",
    page: page ? page : 1,
    limit: limit ? limit : 10,
  });

  if (Game.error || !Game.data) return <p>{Game.error}</p>;

  const params = await searchParams;

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
              itemsbtn={filterGameArray}
              params={normalizeSearchParams(await searchParams)}
            />
            <EmptyAndPagination
              params={params as Promise<{ [key: string]: string | undefined }>}
              datas={Game.data}
              pagination={Game.pagination}
            >
              {Game.data.map((data) => (
                <Cart
                  key={data.id}
                  id={data.id}
                  title={data.firstthem + " VS " + data.secondthem}
                  description={data.description}
                  date={data.time}
                  options={[
                    {
                      title: "status",
                      items: { key: "status", value: data.status },
                    },
                  ]}
                  moreDetails={[
                    {
                      title: "league",
                      items: {
                        key: "league",
                        value: data.League,
                      },
                    },
                    {
                      title: "step",
                      items: {
                        key: "step",
                        value: data.step,
                      },
                    },
                  ]}
                />
              ))}
            </EmptyAndPagination>

            {Game.pagination.totalPages > 1 && (
              <Pagination
                pagination={Game.pagination}
                params={
                  params as Promise<{ [key: string]: string | undefined }>
                }
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
