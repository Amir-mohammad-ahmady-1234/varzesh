import React, { Suspense } from "react";

import LoadingSpinner from "../../../../../../../styles/ui/LoadingSpinner";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dailyActivityData } from "../../../../../../../mocks/admin/dashboardMoocks";
import { CustomTooltip } from "../../CustomTooltip";
import { CardContent } from "../../../../../../../styles/ui/Card";

export default function WeaklyChartContent() {
  return (
    <CardContent>
      <div className="h-64">
        <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dailyActivityData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="day"
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
              <Bar
                dataKey="messages"
                fill="#3b82f6"
                name="پیام‌ها"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="users"
                fill="#10b981"
                name="کاربران فعال"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Suspense>
      </div>
    </CardContent>
  );
}
