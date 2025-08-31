import prisma from "../../../../../lib/db";

export async function GetPageSuppurtById(id: number) {
  try {
    const existsuppurtid = await prisma.ticket.findUnique({
      where: { id },
      include: {
        user: true,
        messages: {
          include: { user: true },
          orderBy: { createdAt: "asc" },
        },
      },
    });
    if (!existsuppurtid) {
      return { error: "چنین تیکتی وجود ندارد", status: 404 };
    }
    return { success: true, ticket: existsuppurtid };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
