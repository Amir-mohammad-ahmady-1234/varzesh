"use client";

import React, { Suspense } from "react";
import { CardContent } from "../../../../../../../styles/ui/Card";
import LoadingSpinner from "../../../../../../../styles/ui/LoadingSpinner";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { messageTypesData } from "../../../../../../../mocks/admin/dashboardMoocks";
import { CustomTooltip } from "../../CustomTooltip";

export default function MessChartContent() {
  return (
    <CardContent>
      <div className="h-80">
        <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={messageTypesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {messageTypesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Suspense>
      </div>
      <div className="mt-4 space-y-2">
        {messageTypesData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>
            <div className="text-left">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {item.count.toLocaleString("fa-IR")}
              </span>
              <span className="text-gray-500 dark:text-gray-400 mr-1">
                ({item.value}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}
