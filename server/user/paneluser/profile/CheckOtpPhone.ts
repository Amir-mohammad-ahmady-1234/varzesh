import prisma from "../../../../lib/db";
import { TPostProfileUser } from "../../../../types/user/profile/type";

export default async function CheckOtpPhone({ id, otp }: TPostProfileUser) {
  try {
    if (!id || !otp) {
      return { error: "اطلاعات ارسالی ناقص است", status: 400 };
    }

    const existUser = await prisma.user.findUnique({ where: { id } });
    if (!existUser) {
      return { error: "کاربر با این اطلاعات وجود ندارد!", status: 404 };
    }

    if (existUser.changephone !== otp) {
      return { error: "کد وارد شده اشتباه هست!", status: 400 };
    }

    return { message: "اطلاعات صحیح هست", status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
