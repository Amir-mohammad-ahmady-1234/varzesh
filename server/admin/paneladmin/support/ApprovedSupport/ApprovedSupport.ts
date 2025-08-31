import prisma from "../../../../../lib/db";

export async function ApprovedSupport(id: number) {
  try {
    const existsuppurtid = await prisma.ticket.findUnique({
      where: { id },
    });
    if (!existsuppurtid) {
      return { error: "چنین تیکتی وجود ندارد", status: 404 };
    }
    const update = await prisma.ticket.update({
      where: { id },
      data: { status: "Approved" },
    });
    return { success: true, ticket: update };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
