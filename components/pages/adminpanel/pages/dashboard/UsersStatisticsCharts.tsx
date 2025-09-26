import React from "react";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { SiteStatistics } from "../../../../../mocks/admin/dashboardMoocks";
import Card from "../../../../common/ui/Card";

export default async function UsersStatistics() {
  const stats = await SiteStatistics();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="relative overflow-hidden hover:shadow-lg transition-all duration-200"
            hover
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1 mb-1">
                  {stat.trend === "up" ? (
                    <MdTrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <MdTrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${stat.bgColor} shadow-sm`}>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
