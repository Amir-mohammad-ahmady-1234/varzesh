import prisma from "../../../../../lib/db";

export async function SendMessage(
  ticketId: number,
  userId: number,
  content: string
) {
  try {
    const message = await prisma.message.create({
      data: { ticketId, userId, content },
    });
    return { success: true, message };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
