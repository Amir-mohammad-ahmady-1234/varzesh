import React from "react";
import Table from "../../../common/ui/Table";
import prisma from "../../../../lib/db";

async function HomeLiveresults() {
  const games = await prisma.game.findMany({
    orderBy: { data: "desc" },
  });

  return (
    <div className="p-4">
      <Table
        columns={[
          { key: "teams", label: "تیم‌ها", sortable: true },
          { key: "league", label: "لیگ", sortable: true },
          { key: "step", label: "مرحله", sortable: false },
          { key: "status", label: "وضعیت بازی", sortable: true },
          { key: "date", label: "تاریخ", sortable: true },
          { key: "time", label: "ساعت", sortable: true },
          { key: "description", label: "توضیحات", sortable: false },
        ]}
      >
        {games.map((game) => (
          <tr
            key={game.id}
            className="border-b border-(--border) hover:bg-(--bg-hover) transition-colors"
          >
            <td className="px-4 py-3 text-sm font-medium text-(--text-primary)">
              {game.firstthem} <span className="text-(--text-muted)">vs</span>{" "}
              {game.secondthem}
            </td>

            <td className="px-4 py-3 text-sm text-(--text-secondary)">
              {game.League}
            </td>

            <td className="px-4 py-3 text-sm text-(--text-secondary)">
              {game.step}
            </td>

            <td
              className={`px-4 py-3 text-sm font-semibold ${
                game.status === "live"
                  ? "text-green-500"
                  : game.status === "down"
                  ? "text-red-500"
                  : "text-(--text-secondary)"
              }`}
            >
              {game.status === "live"
                ? "زنده"
                : game.status === "down"
                ? "پایان یافته"
                : "زمان‌بندی‌شده"}
            </td>

            <td className="px-4 py-3 text-sm text-(--text-secondary)">
              {new Date(game.data).toLocaleDateString("fa-IR")}
            </td>

            <td className="px-4 py-3 text-sm text-(--text-secondary)">
              {new Date(game.time).toLocaleTimeString("fa-IR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>

            <td className="px-4 py-3 text-sm text-(--text-secondary)">
              {game.description}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default HomeLiveresults;
