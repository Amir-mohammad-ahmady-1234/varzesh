import prisma from "../../../../lib/db";
import { TPostProfileUser } from "../../../../types/user/profile/type";
import { uploadFile } from "../../../../utils/uploadFile";

export async function PostProfileUser({ id, email, file }: TPostProfileUser) {
  try {
    if (!id || !email || !file) {
      return { error: "اطلاعات ارسالی ناقص است", status: 400 };
    }

    const existUser = await prisma.user.findUnique({ where: { id } });
    if (!existUser) {
      return { error: "کاربر با این اطلاعات وجود ندارد!", status: 404 };
    }
    if (email) {
      const emailExist = await prisma.user.findUnique({ where: { email } });
      if (emailExist && emailExist.id !== id) {
        return { error: "این ایمیل قبلاً استفاده شده است!", status: 400 };
      }
    }

    const dbPath = await uploadFile(file, "uploads");
    await prisma.user.update({
      where: { id },
      data: { email, profileImage: dbPath },
    });

    return { message: "کاربر آپدیت شد", path: dbPath, status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
