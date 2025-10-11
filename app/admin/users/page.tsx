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
import { getUserStatistics } from "../../../server/admin/paneladmin/users/userboxInformation";
import { GetUserFilterQuery } from "../../../server/admin/paneladmin/users/GetUserFilterQurey/GetUserFilterQurey";

export const metadata = {
  title: "لیست کاربران سایت",
  description:
    "لیست کاربران سایت با قابلیت حذف اپدیت اضافه و خواندن دیتای انها و موارد دیگر ...",
};

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const stats = await getUserStatistics();
  const params = await searchParams;

  const users = await GetUserFilterQuery({
    search: params.search ?? "",
    status: params.status as "Blocked" | "Waiting" | "Approved",
    page: params.page ? Number(params.page) : 1,
    limit: params.limit ? Number(params.limit) : 5,
    role: (params.role as "USER" | "ADMIN") ?? "USER",
  });

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
        params={params}
      />

      <SelectedCard />

      <ConditionallyRender users={users} />

      {users.error ? <p>{users.error}</p> : <PaginationBtns users={users} />}

      <UserModal />
    </MainLayout>
  );
}
