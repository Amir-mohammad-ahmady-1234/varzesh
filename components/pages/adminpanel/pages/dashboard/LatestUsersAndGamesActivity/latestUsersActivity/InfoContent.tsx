import React from "react";
import { CardContent } from "../../../../../../../styles/ui/Card";
import { recentGames } from "../../../../../../../mocks/dashboardMoocks";
import Badge from "../../../../../../../styles/ui/Badge";

export default function InfoContent() {
  return (
    <CardContent>
      <div className="space-y-3">
        {recentGames.map((game) => (
          <div
            key={game.id}
            className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <p className="font-medium text-foreground">{game.teams}</p>
              <p className="text-sm text-muted-foreground">{game.league}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {game.messages.toLocaleString("fa-IR")} پیام
                </p>
                <p className="text-xs text-muted-foreground">{game.time}</p>
              </div>
              <Badge
                variant={
                  game.status === "live"
                    ? "info"
                    : game.status === "finished"
                    ? "secondary"
                    : "success"
                }
              >
                {game.status === "live"
                  ? "زنده"
                  : game.status === "finished"
                  ? "تمام شده"
                  : "برنامه‌ریزی شده"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}
