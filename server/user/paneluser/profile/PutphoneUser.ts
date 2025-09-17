import { authenticator } from "otplib";
import prisma from "../../../../lib/db";

export default async function PutphoneUser(id: number) {
  try {
    if (!id) {
      return { error: "اطلاعات ارسالی ناقص است", status: 400 };
    }

    const existUser = await prisma.user.findUnique({ where: { id } });
    if (!existUser) {
      return { error: "کاربر با این اطلاعات وجود ندارد!", status: 404 };
    }
    // قفط یه بار میتونه شماره تلفن تغیر بده
    const secret = authenticator.generateSecret();
    const otp = authenticator.generate(secret);
    await prisma.user.update({
      where: { id },
      data: { changephone: otp },
    });

    return { message: "کد ارسال شد ", otpcode: otp, status: 200 };
  } catch {
    return { error: "مشکلی در سرور رخ داده است", status: 500 };
  }
}
