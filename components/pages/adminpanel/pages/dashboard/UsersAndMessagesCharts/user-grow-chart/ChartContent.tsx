import React, { Suspense } from "react";

import LoadingSpinner from "../../../../../../../styles/ui/LoadingSpinner";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { userGrowthData } from "../../../../../../../mocks/dashboardMoocks";
import { CustomTooltip } from "../../CustomTooltip";
import { CardContent } from "../../../../../../../styles/ui/Card";

export default function ChartContent() {
  return (
    <CardContent>
      <div className="h-80">
        <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={userGrowthData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="month"
                className="text-xs"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                className="text-xs"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorUsers)"
                name="کل کاربران"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="newUsers"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorNewUsers)"
                name="کاربران جدید"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Suspense>
      </div>
    </CardContent>
  );
}
