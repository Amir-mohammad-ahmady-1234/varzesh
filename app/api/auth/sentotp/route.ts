import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json();

    const existUser = await prisma.user.findUnique({
      where: { phone },
    });

    if (!existUser) {
      return NextResponse.json(
        { ok: false, message: "کاربری با این مشخصات پیدا نشد" },
        { status: 400 }
      );
    }

    if (
      !existUser.otpCode ||
      !existUser.otpExpiresAt ||
      new Date() > new Date(existUser.otpExpiresAt)
    ) {
      return NextResponse.json(
        { ok: false, message: "زمان دریافت کد به پابان رسید" },
        { status: 400 }
      );
    }

    if (existUser.otpCode !== otp) {
      return NextResponse.json(
        { ok: false, message: "کد و شماره همخوانی ندارد" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { phone },
      data: {
        otpCode: null,
        otpExpiresAt: null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
