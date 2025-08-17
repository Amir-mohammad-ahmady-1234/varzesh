import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  try {
    const { phone, password } = await req.json();

    const existUser = await prisma.user.findUnique({
      where: { phone },
    });

    if (!existUser) {
      return NextResponse.json(
        { ok: false, message: "کاربری با این مشخصات یافت نشد" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { phone },
      data: {
        password: hashedPassword,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
