import prisma from "../../../../../lib/db";

export async function DeleteSupport(id: number) {
  try {
    const existsuppurtid = await prisma.ticket.findUnique({
      where: { id },
    });
    if (!existsuppurtid) {
      return { error: "چنین تیکتی وجود ندارد", status: 404 };
    }
    await prisma.ticket.update({
      where: { id },
      data: { status: "Blocked" },
    });
  } catch {}
}
