import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserSchema = z.object({
  firstname: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
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

    const { firstname, phone, password } = result.data;

    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (existUser) {
      return NextResponse.json(
        { success: false, message: "این شماره تلفن قبلاً ثبت شده است" },
        { status: 409 }
      );
    }

    const roleToSet: "ADMIN" | "USER" =
      phone === "09134117901" ? "ADMIN" : "USER";

    const token = jwt.sign({ role: roleToSet }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstname,
        phone,
        password: hashedPassword,
        role: roleToSet,
        jwt: token,
      },
    });

    const res = NextResponse.json({ success: true, message: "ورود موفق" });
    res.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
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
