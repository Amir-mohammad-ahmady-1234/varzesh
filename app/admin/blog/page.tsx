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
import { DeleteBlogAction } from "../../../lib/actions/blog/DeleteBlog";
import { UpdateBlogAction } from "../../../lib/actions/blog/UpdateBlog";
import { BlogFilter } from "../../../server/admin/paneladmin/blog/BlogFilter";

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
  const params = await searchParams;

  const blogs = await BlogFilter({
    author: params.author,
    category: params.category,
    limit: params.limit ? Number(params.limit) : 5,
    page: params.page ? Number(params.page) : 1,
    search: params.search ?? "",
  });

  if (!blogs.data) return;

  const categories = [...new Set(blogs.data.map((blog) => blog.category))];
  const categoryItems = categories.map((cat) => ({
    name: cat,
    key: "category",
    value: cat,
  }));

  const authors = [...new Set(blogs.data.map((blog) => blog.author))];
  const authorItems = authors.map((author) => ({
    name: author,
    key: "author",
    value: author,
  }));

  const stats = {
    totalBlogs: blogs.data.length,
    savedBlogs: 0,
    totalViewedBlogs: 0,
    deletedBlogs: 0,
  };

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
        itemsbtn={filterBlogArray(categoryItems, authorItems)}
        isfilter={true}
        params={params}
      />

      <div className="grid gap-4">
        {blogs.data.map((b: Tblogs) => (
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
