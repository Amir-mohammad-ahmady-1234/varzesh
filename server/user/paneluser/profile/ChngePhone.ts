import prisma from "../../../../lib/db";
import { TPostProfileUser } from "../../../../types/user/profile/type";

export async function ChngePhone({ id, phone }: TPostProfileUser) {
  try {
    if (!id || !phone) {
      return { error: "اطلاعات ارسالی ناقص است", status: 400 };
    }

    const existUser = await prisma.user.findUnique({ where: { id } });
    if (!existUser) {
      return { error: "کاربر با این اطلاعات وجود ندارد!", status: 404 };
    }
    if (phone) {
      const phoneExist = await prisma.user.findUnique({ where: { phone } });
      if (phoneExist && phoneExist.id !== id) {
        return { error: "این شماره قبلاً استفاده شده است!", status: 400 };
      }
    }
    await prisma.user.update({
      where: { id },
      data: { phone, changephone: null },
    });

    return { message: "کاربر آپدیت شد", status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
