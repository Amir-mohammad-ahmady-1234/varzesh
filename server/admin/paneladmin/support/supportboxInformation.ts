import prisma from "../../../../lib/db";

export default async function supportboxInformation() {
  try {
    const [
      totalsupport,
      activesupport,
      waitingsupport,
      approvedsupport,
      Immediatesupport,
    ] = await Promise.all([
      prisma.ticket.count(),
      prisma.ticket.count({ where: { status: "Approved" } }),
      prisma.ticket.count({ where: { status: "Blocked" } }),
      prisma.ticket.count({ where: { status: "Waiting" } }),
      prisma.ticket.count({ where: { priority: "URGENT" } }),
    ]);
    return {
      status: 200,
      totalsupport,
      activesupport,
      waitingsupport,
      approvedsupport,
      Immediatesupport,
    };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
