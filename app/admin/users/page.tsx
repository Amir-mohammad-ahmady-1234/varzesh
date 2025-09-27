import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/users/PageHeader";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterUsersArr } from "../../../mocks/admin/filters/filterArray";
import SelectedCard from "../../../components/pages/adminpanel/pages/users/SelectedCard";
import PaginationBtns from "../../../components/pages/adminpanel/pages/users/pagination/PaginationBtns";
import UserModal from "../../../components/pages/adminpanel/pages/users/UserModal";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import {
  PiOrangeBold,
  PiTrolleySuitcaseThin,
  PiUserCircleBold,
} from "react-icons/pi";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import ConditionallyRender from "../../../components/pages/adminpanel/pages/users/ConditionallyRender";

export const metadata = {
  title: "لیست کاربران سایت",
  description:
    "لیست کاربران سایت با قابلیت حذف اپدیت اضافه و خواندن دیتای انها و موارد دیگر ...",
};

export default function UsersPage() {
  const stats = {
    totalUsers: 82,
    activeUser: 22,
    blockUsers: 34,
    admins: 32,
  };

  return (
    <MainLayout>
      <PageTitle />

      <UsersActivities
        stats={stats}
        usersCardInfo={[
          {
            id: 1,
            color: "blue",
            icon: PiTrolleySuitcaseThin,
            title: "تعداد کاربران",
            value: "totalUsers",
          },
          {
            id: 2,
            color: "green",
            icon: PiUserCircleBold,
            title: "کاربران فعال",
            value: "activeUser",
          },
          {
            id: 3,
            color: "orange",
            icon: IoChevronUpCircleOutline,
            title: "کاربران مسدود",
            value: "blockUsers",
          },
          {
            id: 4,
            color: "purple",
            icon: PiOrangeBold,
            title: "ادمین‌ها",
            value: "admins",
          },
        ]}
      />

      <FilterAndSearch
        description="جستجو و فیلتر کاربران بر اساس معیارهای مختلف"
        isfilter={true}
        itemsbtn={filterUsersArr}
      />

      <SelectedCard />

      <ConditionallyRender />

      <PaginationBtns />

      <UserModal />
    </MainLayout>
  );
}
