import { NextResponse } from "next/server";
import { authenticator } from "otplib";
import { prisma } from "../../../../lib/db";

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();
    const existUser = await prisma.user.findUnique({
      where: { phone },
    });

    if (!existUser) {
      return NextResponse.json(
        { message: "کاربری با این شماره یافت نشد" },
        { status: 400 }
      );
    }
    if (
      existUser.otpExpiresAt &&
      new Date() < new Date(existUser.otpExpiresAt)
    ) {
      return NextResponse.json(
        { message: "OTP هنوز معتبر است" },
        { status: 400 }
      );
    }
    const secret = authenticator.generateSecret();
    const otp = authenticator.generate(secret);

    // 5 دقیقه ممد
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await prisma.user.update({
      where: { phone },
      data: {
        otpExpiresAt,
        otpCode: otp,
      },
    });

    return NextResponse.json({ ok: true, otp });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
