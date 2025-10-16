import prisma from "../../../../../lib/db";

export async function ChangeStatusUserDelete(id: number) {
  try {
    const exist = await prisma.ticket.findUnique({
      where: { id },
    });
    if (!exist) {
      return { error: "چنین تیکتی وجود ندارد", status: 404 };
    }
    const change = await prisma.user.update({
      where: { id },
      data: {
        status: "Blocked",
      },
    });
    return {
      message: "وضعیت کاربر با موفقیت تغییر کرد",
      user: change,
      status: 200,
    };
  } catch {
    return {
      error: "مشکلی در تغییر وضعیت کاربر رخ داده است",
      status: 500,
    };
  }
}
export async function ChangeStatusUserVrify(id: number) {
  try {
    const exist = await prisma.ticket.findUnique({
      where: { id },
    });
    if (!exist) {
      return { error: "چنین تیکتی وجود ندارد", status: 404 };
    }

    const change = await prisma.user.update({
      where: { id },
      data: {
        status: "Approved",
      },
    });
    return {
      message: "وضعیت کاربر با موفقیت تغییر کرد",
      user: change,
      status: 200,
    };
  } catch {
    return {
      error: "مشکلی در تغییر وضعیت کاربر رخ داده است",
      status: 500,
    };
  }
}
