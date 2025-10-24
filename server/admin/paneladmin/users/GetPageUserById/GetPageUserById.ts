import { prisma } from "../../../../../lib/db";

export async function GetPageUserById(userid: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userid },
      select: {
        id: true,
        firstname: true,
        phone: true,
        email: true,
        totalMessage: true,
        report: true,
        status: true,
        profileImage: true,
        ticketsSupport: true,
        isVerify: true,
        userRate: true,
        changephone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return { message: "کاربر وجود نداره !", status: 404 };
    }

    return { user, status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
