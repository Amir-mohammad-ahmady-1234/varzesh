"use client";

import React, { Suspense } from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../../CustomTooltip";
import { CardContent } from "../../../../../../common/ui/Card";
import LoadingSpinner from "../../../../../../common/ui/LoadingSpinner";

interface Props {
  data: {
    hour: string;
    activity: number;
  }[];
}

export default function ChartContent({ data }: Props) {
  return (
    <CardContent>
      <div className="h-64">
        <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="hour"
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
              <Line
                type="monotone"
                dataKey="activity"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2 }}
                name="فعالیت"
              />
            </LineChart>
          </ResponsiveContainer>
        </Suspense>
      </div>
    </CardContent>
  );
}
