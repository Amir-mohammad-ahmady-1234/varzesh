import React from "react";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/common/admin/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { GetAllNews } from "../../../server/admin/paneladmin/news/GetAllNews";
import { PiArrowCounterClockwise } from "react-icons/pi";
import { MdAllInbox, MdDeleteSweep } from "react-icons/md";
import { LuSquareChevronDown } from "react-icons/lu";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterBlogArray } from "../../../mocks/admin/filters/filterArray";
import List from "../../../components/pages/adminpanel/pages/news/List";

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
  const news = await GetAllNews();

  const stats = {
    totalNews: news.length,
    savedNews: 0,
    totalViewedNews: 0,
    deletedNews: 0,
  };

  const params = await searchParams;

  return (
    <MainLayout>
      <PageTitle title="اخبار" desc={`مدیریت ${"X"} اخبار سایت و تغییر انها`} />

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
        itemsbtn={filterBlogArray}
        isfilter={true}
        params={params}
      />

      <div className="grid gap-4">
        {news.map((b: TNews) => (
          <List key={b.id} b={b} />
        ))}
      </div>
    </MainLayout>
  );
}
