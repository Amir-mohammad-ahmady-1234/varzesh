import prisma from "../../../../../lib/db";

interface CreateTicketInput {
  title: string;
  description?: string;
  userId: number;
  priority?: "LOW" | "NORMAL" | "HIGH";
  status?: "Open" | "Waiting" | "Approved" | "Blocked";
  initialMessage?: string;
}

export async function createTicket({
  title,
  description,
  userId,
  priority,
  status,
  initialMessage,
}: CreateTicketInput) {
  try {
    if (!title.trim()) {
      return { error: "عنوان تیکت الزامی است", status: 400 };
    }
    if (!userId) {
      return { error: "شناسه کاربر معتبر نیست", status: 400 };
    }

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description: description || null,
        userId,
        priority: priority || "NORMAL",
        status: status || "Waiting",
        messages: initialMessage
          ? {
              create: {
                userId,
                content: initialMessage,
              },
            }
          : undefined,
      },
      include: {
        messages: true,
      },
    });

    return { success: true, ticket };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
