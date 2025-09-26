import React from "react";
import { $Enums } from "@prisma/client";
import { CardContent } from "../../../../../../common/ui/Card";
import Badge from "../../../../../../common/ui/Badge";

interface Props {
  games: {
    data: Date;
    time: Date;
    id: number;
    status: $Enums.GameStatus;
    description: string;
    firstthem: string;
    secondthem: string;
    League: $Enums.League;
    step: string;
  }[];
}

export default function InfoContent({ games }: Props) {
  return (
    <CardContent>
      <div className="space-y-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex items-center justify-between p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <span className="font-medium text-foreground">
                {`${game.firstthem} VS ${game.secondthem}`}
              </span>
              <p className="text-sm text-muted-foreground">{game.League}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {game.step}
                </p>
                <p className="text-xs text-muted-foreground">
                  {game.description.toString()}
                </p>
              </div>
              <Badge
                variant={
                  game.status === "live"
                    ? "info"
                    : game.status === "Scheduled"
                    ? "secondary"
                    : "success"
                }
              >
                {game.status === "live"
                  ? "زنده"
                  : game.status === "Scheduled"
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
