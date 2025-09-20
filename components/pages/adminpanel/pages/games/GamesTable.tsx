import React from "react";
import Button from "../../../../common/Button";
import Table from "../../../../../styles/ui/Table";
import { games } from "../../../../../mocks/admin/games-Moocks";
import Badge from "../../../../../styles/ui/Badge";

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

export default function GamesTable({ Game }: any) {
  return (
    <Table columns={columns}>
      {games.map((game) => (
        <tr
          key={game.id}
          className="border-b border-(--border) hover:bg-(--bg-secondary)"
        >
          <td className="px-4 py-3 text-(--text-primary)">{game.id}</td>
          <td className="px-4 py-3 text-(--text-primary) font-medium">
            {game.teams}
          </td>
          <td className="px-4 py-3 text-(--text-secondary)">{game.league}</td>
          <td className="px-4 py-3 text-(--text-secondary)">{game.date}</td>
          <td className="px-4 py-3 text-(--text-secondary)">{game.time}</td>
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
          <td className="px-4 py-3 text-(--text-secondary)">{game.messages}</td>
          <td className="px-4 py-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                مشاهده
              </Button>

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
  );
}
