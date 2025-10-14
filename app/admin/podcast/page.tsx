import React from "react";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitlePodcast from "../../../components/common/admin/PageTitlePodcast";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { BiLogIn } from "react-icons/bi";
import { IoSaveSharp } from "react-icons/io5";
import { CgViewCols } from "react-icons/cg";
import { PiDeviceTabletSpeakerDuotone } from "react-icons/pi";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterBlogArray } from "../../../mocks/admin/filters/filterArray";
import Cart from "../../../components/common/admin/rowsList/Cart";
import { GetPodcasts } from "../../../lib/actions/podcast/GetPodcasts";

export const metadata = {
  title: "پادکست",
  description: "مدیریت پادکست های سایت",
};

export default async function PodcastPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const podcasts = await GetPodcasts();
  const stats = {
    total: podcasts.length,
    saved: 0,
    viewed: 0,
    deleted: 0,
  } as const;

  const params = await searchParams;

  return (
    <MainLayout>
      <PageTitlePodcast
        title="پادکست"
        desc={`مدیریت ${stats.total} پادکست کاربران و تغییر آنها`}
      />

      <UsersActivities
        stats={{
          totalBlogs: stats.total,
          savedBlogs: stats.saved,
          totalViewedBlogs: stats.viewed,
          deletedBlogs: stats.deleted,
        }}
        usersCardInfo={[
          {
            id: 1,
            title: "کل پادکست ها",
            value: "totalBlogs",
            color: "yellow",
            icon: BiLogIn,
          },
          {
            id: 2,
            title: "پادکست های ذخیره شده",
            value: "savedBlogs",
            color: "green",
            icon: IoSaveSharp,
          },
          {
            id: 3,
            title: "تعداد بازدید",
            value: "totalViewedBlogs",
            color: "purple",
            icon: CgViewCols,
          },
          {
            id: 4,
            title: "پادکست های حذف شده",
            value: "deletedBlogs",
            color: "red",
            icon: PiDeviceTabletSpeakerDuotone,
          },
        ]}
      />

      <FilterAndSearch
        description="جستجو و فیلتر پادکست ها با معیار های مختلف"
        itemsbtn={filterBlogArray}
        isfilter={true}
        params={params}
      />

      <div className="grid gap-4">
        {podcasts.map((p) => (
          <div key={p.id} className="w-full">
            <Cart
              id={p.id}
              title={p.title}
              description={p.summary}
              date={new Date(p.createdAt ?? Date.now())}
              options={[
                {
                  title: "category",
                  items: { key: "category", value: String(p.category) },
                },
              ]}
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
