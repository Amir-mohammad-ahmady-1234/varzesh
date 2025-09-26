import React from "react";
import ChartHeader from "./user-grow-chart/ChartHeader";
import ChartContent from "./user-grow-chart/ChartContent";
import MessChartHeader from "./MessagesTypes/MessChartHeader";
import MessChartContent from "./MessagesTypes/MessChartContent";
import Card from "../../../../../common/ui/Card";

export default function UsersAndMessagesChart() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
      <ChartHeader>
        <ChartContent />
      </ChartHeader>

      <Card>
        <MessChartHeader>
          <MessChartContent />
        </MessChartHeader>
      </Card>
    </div>
  );
}
