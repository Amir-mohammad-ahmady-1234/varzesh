import MainLayout from "../../../components/pages/adminpanel/layout/MainLayout";
import PageTitle from "../../../components/pages/adminpanel/pages/chat-rooms/PageTitle";
import SettingModal from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/SettingModal";
import { usersCardInfo } from "../../../mocks/admin/chat-roomsMoocks";
import UsersActivities from "../../../components/common/admin/UsersActivities";

import CartHeader from "../../../components/common/admin/FilterCard/CartHeader";
import FilterCartContainer from "../../../components/common/admin/FilterCard/CartContainer";
import { CardContent } from "../../../components/common/ui/Card";
import RoomsAndPagination from "../../../components/pages/adminpanel/pages/chat-rooms/Game-room/RoomsAndPagination";
import { mockChatRooms } from "../../../mocks/mock-data";

export const metadata = {
  title: "چت روم",
  description: "مدیریت روم های سایت",
};

export default function ChatRoomsPage() {
  const stats = {
    total: mockChatRooms.length,
    active: mockChatRooms.filter((r) => r.status === "active").length,
    totalParticipants: mockChatRooms.reduce(
      (sum, r) => sum + r.participantCount,
      0
    ),
    totalMessages: mockChatRooms.reduce((sum, r) => sum + r.messageCount, 0),
  };

  return (
    <MainLayout>
      <PageTitle />

      <UsersActivities stats={stats} usersCardInfo={usersCardInfo} />

      <FilterCartContainer>
        <CartHeader title="جستجو و فیلتر چت روم‌ها بر اساس معیارهای مختلف" />
        <CardContent>
          {""}
          {/* <CardMainContent
            placeHolder="جستجو بر اساس نام چت روم، توضیحات یا نوع..."
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          /> */}
        </CardContent>
      </FilterCartContainer>

      <RoomsAndPagination />

      <SettingModal />
    </MainLayout>
  );
}
