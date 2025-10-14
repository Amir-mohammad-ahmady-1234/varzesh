"use server";

import { createTicket } from "../../../server/user/paneluser/support/createTicket/createTicket";

export async function createTicketAction(data: {
  title: string;
  description: string;
  priority: "LOW" | "NORMAL" | "HIGH";
  status: "Open" | "Waiting" | "Approved" | "Blocked";
  userId: number;
}) {
  return await createTicket(data);
}
