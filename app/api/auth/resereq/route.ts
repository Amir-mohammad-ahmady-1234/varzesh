import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { authenticator } from "otplib";

export async function POST(req: Request) {
  const { phone } = await req.json();
  const existphone = await prisma.user.findUnique({
    where: { phone },
  });

  if (!existphone) {
    return NextResponse.json({ message: "User has already registered " });
  }
  if (
    existphone.otpExpiresAt &&
    new Date() < new Date(existphone.otpExpiresAt)
  ) {
    return NextResponse.json({ message: "OTP هنوز معتبر است" });
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

  return NextResponse.json({ ok: true });
}
