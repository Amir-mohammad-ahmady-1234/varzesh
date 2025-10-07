import React from "react";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/common/admin/PageTitle";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import { BiLogIn } from "react-icons/bi";
import { IoSaveSharp } from "react-icons/io5";
import { CgViewCols } from "react-icons/cg";
import { PiDeviceTabletSpeakerDuotone } from "react-icons/pi";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterBlogArray } from "../../../mocks/admin/filters/filterArray";
import Cart from "../../../components/common/admin/rowsList/Cart";
import { GetBlogs } from "../../../lib/actions/blog/GetBlogs";
import { DeleteBlogAction } from "../../../lib/actions/blog/DeleteBlog";
import { UpdateBlogAction } from "../../../lib/actions/blog/UpdateBlog";
type Tblogs = {
  id: number;
  title: string;
  description: string;
  profile: string;
  img: string;

  category: string;
  summary: string;
};
export const metadata = {
  title: "بلاگ",
  description: "مدیریت بلاگ های سایت",
};

export default async function Blogpage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const blogs = await GetBlogs();
  const stats = {
    totalBlogs: blogs.length,
    savedBlogs: 0,
    totalViewedBlogs: 0,
    deletedBlogs: 0,
  };

  const params = await searchParams;

  return (
    <MainLayout>
      <PageTitle
        title="بلاگ"
        desc={`مدیریت ${stats.totalBlogs} بلاگ کاربران و تغییر انها`}
      />

      <UsersActivities
        stats={stats}
        usersCardInfo={[
          {
            id: 1,
            title: "کل بلاگ ها",
            value: "totalBlogs",
            color: "yellow",
            icon: BiLogIn,
          },
          {
            id: 2,
            title: "بلاگ های ذخیره شده",
            value: "savedBlogs",
            color: "green",
            icon: IoSaveSharp,
          },
          {
            id: 3,
            title: "تعدا بازدید",
            value: "totalViewedBlogs",
            color: "purple",
            icon: CgViewCols,
          },
          {
            id: 4,
            title: "بلاگ های حذف شده",
            value: "deletedBlogs",
            color: "red",
            icon: PiDeviceTabletSpeakerDuotone,
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
        {blogs.map((b: Tblogs) => (
          <div key={b.id} className="w-full">
            <Cart
              id={b.id}
              title={b.title}
              description={b.summary}
              date={new Date(Date.now())}
              options={[
                {
                  title: "status",
                  items: { key: "status", value: "OverHundredThousand" },
                },
                {
                  title: "priority",
                  items: { key: "priority", value: "HIGH" },
                },
              ]}
              onDelete={DeleteBlogAction}
              onUpdate={UpdateBlogAction}
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
