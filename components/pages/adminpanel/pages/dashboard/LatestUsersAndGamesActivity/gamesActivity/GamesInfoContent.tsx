import React from "react";
import { recentActivities } from "../../../../../../../mocks/admin/dashboardMoocks";
import { CardContent } from "../../../../../../common/ui/Card";

export default function GamesInfoContent() {
  return (
    <CardContent>
      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
          >
            <div
              className={`w-2 h-2 rounded-full mt-2 ${activity.color}`}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}
