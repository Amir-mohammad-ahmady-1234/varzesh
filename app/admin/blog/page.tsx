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

export const metadata = {
  title: "بلاگ",
  description: "مدیریت بلاگ های سایت",
};

export default function Blogpage() {
  const stats = {
    totalBlogs: 1,
    savedBlogs: 2,
    totalViewedBlogs: 3,
    deletedBlogs: 4,
  };

  return (
    <MainLayout>
      <PageTitle
        title="مدیریت بلاگ ها"
        desc="مدیریت X بلاگ کاربران و تغییر انها"
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
      />
    </MainLayout>
  );
}
