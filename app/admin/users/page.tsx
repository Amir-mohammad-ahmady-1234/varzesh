"use client";
import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import Button from "../../../components/common/Button";
import { useUsersStates } from "../../../hooks/admin/users/useUsersStates";
import PageTitle from "../../../components/pages/adminpanel/pages/users/PageHeader";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterUsersArr } from "../../../mocks/admin/filters/filterArray";
import SelectedCard from "../../../components/pages/adminpanel/pages/users/SelectedCard";
import UsersTableList from "../../../components/pages/adminpanel/pages/users/usersTable/UsersTableList";
import PaginationBtns from "../../../components/pages/adminpanel/pages/users/pagination/PaginationBtns";
import UserModal from "../../../components/pages/adminpanel/pages/users/UserModal";
import UsersActivities from "../../../components/common/admin/UsersActivities";
import {
  PiOrangeBold,
  PiTrolleySuitcaseThin,
  PiUserCircleBold,
} from "react-icons/pi";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import EmptyState from "../../../components/common/ui/EmptyState";
import Card from "../../../components/common/ui/Card";

export default function UsersPage() {
  const {
    setSearchQuery,
    setRoleFilter,
    setStatusFilter,
    selectedUsers,
    viewMode,
    totalPages,
    paginatedUsers,
    stats,
  } = useUsersStates();

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

      {selectedUsers.size > 0 && <SelectedCard />}

      {paginatedUsers.length === 0 ? (
        <EmptyState
          title="کاربری یافت نشد"
          description="با فیلترهای انتخاب شده کاربری یافت نشد. فیلترها را تغییر دهید یا کاربر جدید اضافه کنید."
          action={
            <Button
              onClick={() => {
                setSearchQuery("");
                setRoleFilter("all");
                setStatusFilter("all");
              }}
              className="cursor-pointer"
            >
              پاک کردن فیلترها
            </Button>
          }
        />
      ) : viewMode === "table" ? (
        <Card>
          <div className="overflow-x-auto">
            <UsersTableList />
          </div>
        </Card>
      ) : undefined}

      {totalPages > 1 && <PaginationBtns />}

      <UserModal />
    </MainLayout>
  );
}
