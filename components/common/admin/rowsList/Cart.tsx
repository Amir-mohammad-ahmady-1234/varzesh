import React from "react";

import ChartContent from "./CartContent";
import CartTitle from "./CartTitle";
import CartOptions from "./CartOptions";
import { getCartColor } from "../../../../utils/getCartColor";
import Card from "../../ui/Card";

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
  onDelete?: (formData: FormData) => Promise<any>;
  onUpdate?: (formData: FormData) => Promise<any>;
}

export default function Cart({
  title,
  description,
  date,
  options,
  moreDetails,
  id,
  onDelete,
  onUpdate,
}: Props) {
  return (
    <div
      className="hover:shadow-lg transition-all duration-200 border-r-4 rounded-xl mb-4"
      style={{
        borderRightColor: getCartColor(options) as unknown as string,
      }}
    >
      <Card className="w-full">
        <div className="flex items-start justify-between w-full">
          <ChartContent desc={description} date={date} details={moreDetails}>
            <CartTitle title={title} options={options} />
          </ChartContent>

          <CartOptions id={id} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
      </Card>
    </div>
  );
}
