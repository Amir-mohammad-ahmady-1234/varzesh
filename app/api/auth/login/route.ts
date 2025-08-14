import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import prisma from "../../../../lib/db";

const LoginSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

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

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "اطلاعات ورود نادرست است" },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json(
        { success: false, message: "اطلاعات ورود نادرست است" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
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
      { success: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
