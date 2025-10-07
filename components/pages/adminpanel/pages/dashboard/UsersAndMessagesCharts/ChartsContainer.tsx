import React from "react";
import ChartHeader from "./user-grow-chart/ChartHeader";
import ChartContent from "./user-grow-chart/ChartContent";

export default function UsersAndMessagesChart() {
  return (
    <div className="w-full mb-10">
      <ChartHeader>
        <ChartContent />
      </ChartHeader>
    </div>
  );
}
