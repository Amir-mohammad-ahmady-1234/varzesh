import MainLayout from "../../../../components/pages/adminpanel/layout/MainLayout";
import TicketHeader from "../../../../components/pages/adminpanel/pages/support/Ticket/TicketHeader";
import TicketContent from "../../../../components/pages/adminpanel/pages/support/Ticket/TicketContent";

export const metadata = {
  title: "تیکت پشتیبانی",
  description: "مدیریت تیکت پشتیبانی",
};

export default function SupportTicketDetailPage() {
  return (
    <MainLayout>
      <TicketHeader />

      <TicketContent />
    </MainLayout>
  );
}
