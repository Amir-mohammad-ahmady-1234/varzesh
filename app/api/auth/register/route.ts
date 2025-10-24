import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../lib/db";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstname, phone, password, email } = body;

    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (existUser) {
      return NextResponse.json(
        { success: false, message: "این شماره تلفن قبلاً ثبت شده است" },
        { status: 409 }
      );
    }

    const existingEmail = email
      ? await prisma.user.findUnique({ where: { email } })
      : null;

    if (existingEmail) {
      return NextResponse.json(
        { success: false, message: "این ایمیل قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    const roleToSet: "ADMIN" | "USER" =
      phone === "09134117901" ? "ADMIN" : "USER";
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstname,
        phone,
        password: hashedPassword,
        role: roleToSet,
        email,
      },
    });

    const token = jwt.sign(
      { role: roleToSet, userId: newUser.id },
      process.env.JWT_SECRET!,
      { expiresIn: "30d" }
    );

    const res = NextResponse.json({
      success: true,
      message: "ثبت‌ نام موفق",
    });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
