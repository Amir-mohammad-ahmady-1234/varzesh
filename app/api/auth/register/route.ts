import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserSchema = z.object({
  firstname: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .regex(/[!@#$%^&*]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = createUserSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.format() },
        { status: 400 }
      );
    }

    const { firstname, phone, password, email } = result.data;

    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (existUser) {
      return NextResponse.json(
        { success: false, message: "این شماره تلفن قبلاً ثبت شده است" },
        { status: 409 }
      );
    }
    console.log("USER EXISTS:", existUser);
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
    const res = NextResponse.json({ success: true, message: "ثبت‌ نام موفق" });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
    return res;
  } catch {
    return NextResponse.json(
      { ok: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
