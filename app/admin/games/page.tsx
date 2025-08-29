/** Games management page with table and filters */
import Sidebar from "../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../components/pages/adminpanel/layout/Topbar";
import Card from "../../../styles/ui/Card";
import Input from "../../../styles/ui/Input";
import Badge from "../../../styles/ui/Badge";
import Table from "../../../styles/ui/Table";
import Link from "next/link";
import Button from "../../../components/common/Button";

export default function GamesPage() {
  // Mock data
  const games = [
    {
      id: 1,
      teams: "پرسپولیس vs استقلال",
      league: "لیگ برتر",
      date: "1403/01/15",
      time: "19:30",
      status: "live",
      messages: 234,
    },
    {
      id: 2,
      teams: "سپاهان vs تراکتور",
      league: "لیگ برتر",
      date: "1403/01/14",
      time: "17:00",
      status: "finished",
      messages: 156,
    },
    {
      id: 3,
      teams: "فولاد vs گل‌گهر",
      league: "لیگ برتر",
      date: "1403/01/16",
      time: "20:00",
      status: "scheduled",
      messages: 0,
    },
  ];

  const columns = [
    { key: "id", label: "شناسه" },
    { key: "teams", label: "تیم‌ها" },
    { key: "league", label: "لیگ" },
    { key: "date", label: "تاریخ" },
    { key: "time", label: "ساعت" },
    { key: "status", label: "وضعیت" },
    { key: "messages", label: "پیام‌ها" },
    { key: "actions", label: "عملیات" },
  ];

  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-(--text-primary)">
                مدیریت بازی‌ها
              </h1>
              <Link href="/admin/games/new">
                <Button>بازی جدید</Button>
              </Link>
            </div>

            <Card>
              {/* Filters */}
              <div className="flex items-center gap-4 mb-6">
                <Input placeholder="جستجو در بازی‌ها..." className="max-w-sm" />
                <select className="px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
                  <option value="">همه لیگ‌ها</option>
                  <option value="premier">لیگ برتر</option>
                  <option value="azadegan">آزادگان</option>
                </select>
                <select className="px-3 py-2 border border-(--border) rounded-(--radius) bg-(--bg-primary) text-(--text-primary)">
                  <option value="">همه وضعیت‌ها</option>
                  <option value="live">زنده</option>
                  <option value="finished">تمام شده</option>
                  <option value="scheduled">برنامه‌ریزی شده</option>
                </select>
              </div>

              {/* Games Table */}
              <Table columns={columns}>
                {games.map((game) => (
                  <tr
                    key={game.id}
                    className="border-b border-(--border) hover:bg-(--bg-secondary)"
                  >
                    <td className="px-4 py-3 text-(--text-primary)">
                      {game.id}
                    </td>
                    <td className="px-4 py-3 text-(--text-primary) font-medium">
                      {game.teams}
                    </td>
                    <td className="px-4 py-3 text-(--text-secondary)">
                      {game.league}
                    </td>
                    <td className="px-4 py-3 text-(--text-secondary)">
                      {game.date}
                    </td>
                    <td className="px-4 py-3 text-(--text-secondary)">
                      {game.time}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={
                          game.status === "live"
                            ? "success"
                            : game.status === "finished"
                            ? "secondary"
                            : "warning"
                        }
                      >
                        {game.status === "live"
                          ? "زنده"
                          : game.status === "finished"
                          ? "تمام شده"
                          : "برنامه‌ریزی شده"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-(--text-secondary)">
                      {game.messages}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* <Link href={`/admin/games/${game.id}`}> */}
                        <Button variant="ghost" size="sm">
                          مشاهده
                        </Button>
                        {/* </Link> */}
                        <Button variant="ghost" size="sm">
                          ویرایش
                        </Button>
                        <Button variant="destructive" size="sm">
                          حذف
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-(--text-secondary)">
                  نمایش 1 تا 3 از 3 بازی
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" disabled>
                    قبلی
                  </Button>
                  <Button variant="primary" size="sm">
                    1
                  </Button>
                  <Button variant="ghost" size="sm" disabled>
                    بعدی
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
