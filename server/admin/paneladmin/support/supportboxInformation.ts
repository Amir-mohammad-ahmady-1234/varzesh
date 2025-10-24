import { prisma } from "../../../../lib/db";

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
      prisma.ticket.count({ where: { status: "Open" } }),
      prisma.ticket.count({ where: { status: "Waiting" } }),
      prisma.ticket.count({ where: { status: "Approved" } }),
      prisma.ticket.count({ where: { status: "Blocked" } }),
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

export async function getTotalSupportCount() {
  try {
    const totalSupport = await prisma.ticket.count();
    return { status: 200, totalSupport };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}

export async function getApprovedSupportCount() {
  try {
    const approvedSupport = await prisma.ticket.count({
      where: { status: "Approved" },
    });
    return { status: 200, approvedSupport };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}

export async function getBlockedSupportCount() {
  try {
    const blockedSupport = await prisma.ticket.count({
      where: { status: "Open" },
    });
    return { status: 200, blockedSupport };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}

export async function getWaitingSupportCount() {
  try {
    const waitingSupport = await prisma.ticket.count({
      where: { status: "Waiting" },
    });
    return { status: 200, waitingSupport };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}

export async function getUrgentSupportCount() {
  try {
    const urgentSupport = await prisma.ticket.count({
      where: { priority: "URGENT" },
    });
    return { status: 200, urgentSupport };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
