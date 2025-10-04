import Image from "next/image";
import React from "react";
import { GetLastNews } from "../../../../../server/user/paneluser/news/GetLastNews";
import { $Enums } from "@prisma/client";

interface NewsType {
  id: number;
  status: $Enums.NewStatus;
  createdAt: Date;
  title: string;
  description: string;
  img: string;
  summary: string;
}

async function LastNews() {
  const news = (await GetLastNews(3)) as NewsType[];

  return (
    <div className="flex flex-col p-4 md:p-6 space-y-4 bg-tertiary-300 rounded-md">
      {news.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <Image
            className="rounded-md flex-shrink-0"
            width={70}
            height={70}
            src={item.img}
            alt={item.title}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">{item.title}</p>
            <p className="text-sm text-neutral-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LastNews;
