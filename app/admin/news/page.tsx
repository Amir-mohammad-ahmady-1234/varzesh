import React from "react";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/common/admin/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { PiArrowCounterClockwise } from "react-icons/pi";
import { MdAllInbox, MdDeleteSweep } from "react-icons/md";
import { LuSquareChevronDown } from "react-icons/lu";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterNewsArray } from "../../../mocks/admin/filters/filterArray";
import List from "../../../components/pages/adminpanel/pages/news/List";
import { NewsFilter } from "../../../server/admin/paneladmin/news/NewsFilter";
import { News } from "@prisma/client";

export const metadata = {
  title: "اخبار",
  description: "مدیریت خبر های سایت",
};

export interface TNews {
  id: number;
  title: string;
  summary: string;
  firstthem: string;
  secondthem: string;
  League: "Acup" | "Tcup" | "Dcup";
  step: string;
  createdAt: string | null;
  status: "Scheduled" | "down" | "live";
  description: string;
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const news = await NewsFilter({
    search: params.search ?? "",
    limit: +(params.limit ?? 5),
    page: +(params.page ?? 1),
    status: params.status as "Simple" | "Medium" | "Special",
  });

  if (news.error || !news.data) return <p>{news.error}</p>;

  const stats = {
    totalNews: news.data.length,
    savedNews: 0,
    totalViewedNews: 0,
    deletedNews: 0,
  };

  return (
    <MainLayout>
      <PageTitle
        title="اخبار"
        desc={`مدیریت ${news.data.length} اخبار سایت و تغییر انها`}
      />

      <UsersActivities
        stats={stats}
        usersCardInfo={[
          {
            id: 1,
            title: "کل  خبر ها",
            value: "totalNews",
            color: "yellow",
            icon: MdAllInbox,
          },
          {
            id: 2,
            title: "خبر های ذخیره شده",
            value: "savedNews",
            color: "green",
            icon: LuSquareChevronDown,
          },
          {
            id: 3,
            title: "تعدا بازدید",
            value: "totalViewedNews",
            color: "purple",
            icon: PiArrowCounterClockwise,
          },
          {
            id: 4,
            title: "خبر های حذف شده",
            value: "deletedNews",
            color: "red",
            icon: MdDeleteSweep,
          },
        ]}
      />

      <FilterAndSearch
        description="جستجو و فیلتر بلاگ ها با معیار های مختلف"
        itemsbtn={filterNewsArray}
        isfilter={true}
        params={params}
      />

      <div className="grid gap-4">
        {news.data.length > 0 ? (
          news.data.map((b: News) => <List key={b.id} b={b} />)
        ) : (
          <p className="text-red-500">هیچ خبری برای نمایش وجود ندارد</p>
        )}
      </div>
    </MainLayout>
  );
}
