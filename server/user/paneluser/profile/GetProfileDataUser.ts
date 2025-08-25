import prisma from "../../../../lib/db";

export default async function GetProfileDataUser(id: number) {
  try {
    const existuser = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstname: true,
        email: true,
        phone: true,
        profileImage: true,
        totalMessage: true,
        report: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!existuser) {
      return { error: "کاربر با این اطلاعات وجود ندارد!", status: 404 };
    }

    return { message: "ok", user: existuser };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
