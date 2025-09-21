import React from "react";
import Card from "../../../../styles/ui/Card";

import ChartContent from "./CartContent";
import CartTitle from "./CartTitle";
import CartOptions from "./CartOptions";

type Item = {
  value: string;
  key: string;
};

export interface Option {
  title: string;
  items: Item;
}

export interface MoreDetails {
  title: string;
  items: Item;
}

interface Props {
  title: string;
  description: string;
  date: Date;
  options: Option[];
  moreDetails?: MoreDetails[];
  id: number;
}

export default function Cart({
  title,
  description,
  date,
  options,
  moreDetails,
  id,
}: Props) {
  async function getCartColor() {
    "use server";
    options.map((option) => {
      const priority = option.items.value;
      switch (priority) {
        case "URGENT":
        case "live":
          return "#dc2626";
        case "HIGH":
        case "down":
          return "#ea580c";
        case "LOW":
        case "Scheduled":
          return "#ca8a04";
        default:
          return "#16a34a";
      }
    });
  }
  return (
    <div
      className="hover:shadow-lg transition-all duration-200 border-r-4 rounded-xl"
      style={{
        borderRightColor: getCartColor as unknown as string,
      }}
    >
      <Card>
        <div className="flex items-start justify-between">
          <ChartContent desc={description} date={date} details={moreDetails}>
            <CartTitle title={title} options={options} />
          </ChartContent>

          <CartOptions id={id} />
        </div>
      </Card>
    </div>
  );
}
