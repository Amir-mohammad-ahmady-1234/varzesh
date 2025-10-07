import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/chat-rooms/PageTitle";
import SettingModal from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/SettingModal";
import { usersCardInfo } from "../../../mocks/admin/chat-roomsMoocks";
import UsersActivities from "../../../components/common/admin/UsersActivities";

import RoomsAndPagination from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/RoomsAndPagination";
import { mockChatRooms } from "../../../mocks/mock-data";
import FilterAndSearch from "../../../components/common/admin/FilterCard/FilterAndSearch";
import { filterChatRoomArray } from "../../../mocks/admin/filters/filterArray";

export const metadata = {
  title: "چت روم",
  description: "مدیریت روم های سایت",
};

export default async function ChatRoomsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const stats = {
    total: mockChatRooms.length,
    active: mockChatRooms.filter((r) => r.status === "active").length,
    totalParticipants: mockChatRooms.reduce(
      (sum, r) => sum + r.participantCount,
      0
    ),
    totalMessages: mockChatRooms.reduce((sum, r) => sum + r.messageCount, 0),
  };

  const params = await searchParams;

  return (
    <MainLayout>
      <PageTitle />

      <UsersActivities stats={stats} usersCardInfo={usersCardInfo} />

      <FilterAndSearch
        description="جستجو و فیلتر چت روم ها بر اساس معیارهای مختلف"
        isfilter={true}
        itemsbtn={filterChatRoomArray}
        params={params}
      />

      <RoomsAndPagination params={searchParams} />

      <SettingModal />
    </MainLayout>
  );
}
