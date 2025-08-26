import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../../../lib/db";
import { LoginSchema } from "../../../../lib/validations/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = LoginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.format() },
        { status: 400 }
      );
    }

    const { phone, password } = result.data;

    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (!existUser) {
      return NextResponse.json(
        { success: false, message: "اطلاعات ورود نادرست است" },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, existUser.password);
    if (!match) {
      return NextResponse.json(
        { success: false, message: "اطلاعات ورود نادرست است" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: existUser.id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    const res = NextResponse.json({ success: true, message: "ورود موفق" });
    res.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
