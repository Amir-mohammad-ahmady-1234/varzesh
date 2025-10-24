"use client";

import React from "react";
import Cart from "../../../../common/admin/rowsList/Cart";
import { UpdateNewsAction } from "../../../../../lib/actions/news/UpdateNews";
import { News } from "@prisma/client";
import { DeleteNewsAction } from "../../../../../lib/actions/news/DeleteNews";

export default function List({ b }: { b: News }) {
  return (
    <div key={b.id} className="w-full">
      <Cart
        id={b.id}
        title={b.title}
        description={b.summary}
        date={new Date(b.createdAt ?? Date.now())}
        options={[
          {
            title: "status",
            items: { key: "status", value: b.status },
          },
        ]}
        onDelete={DeleteNewsAction}
        onUpdate={UpdateNewsAction}
      />
    </div>
  );
}
