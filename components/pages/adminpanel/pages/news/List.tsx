"use client";

import React from "react";
import Cart from "../../../../common/admin/rowsList/Cart";
import { DeleteBlogAction } from "../../../../../lib/actions/blog/DeleteBlog";
import { UpdateNewsAction } from "../../../../../lib/actions/news/UpdateNews";

export default function List({ b }: { b: any }) {
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
            items: { key: "status", value: "Simple" },
          },
        ]}
        onDelete={() => DeleteBlogAction(b.id)}
        onUpdate={UpdateNewsAction}
      />
    </div>
  );
}
