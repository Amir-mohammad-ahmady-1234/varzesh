"use client";
import MainLayout from "../../../../components/pages/adminpanel/layout/MainLayout";
import TicketHeader from "../../../../components/pages/adminpanel/pages/support/Ticket/TicketHeader";
import NotTicketFounded from "../../../../components/pages/adminpanel/pages/support/Ticket/NotTicketFounded";
import { useTicketStates } from "../../../../hooks/admin/support/useTicketStates";
import TicketContent from "../../../../components/pages/adminpanel/pages/support/Ticket/TicketContent";

export default function SupportTicketDetailPage() {
  const { ticket } = useTicketStates();

  if (!ticket) {
    return <NotTicketFounded />;
  }

  return (
    <MainLayout>
      <TicketHeader />

      <TicketContent />
    </MainLayout>
  );
}
