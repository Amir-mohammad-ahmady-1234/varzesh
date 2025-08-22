"use server";

import { LoginSchema } from "../../validations/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../db";
import { cookies } from "next/headers";

export interface userLoginState {
  message: {
    phone?: string;
    password?: string;
    success?: string;
    otherErr?: string;
  };
}

export async function userLogin(prevState: userLoginState, formData: FormData) {
  try {
    const data = {
      phone: formData.get("phone"),
      password: formData.get("password"),
    };

    const validateData = LoginSchema.safeParse(data);

    if (!validateData.success) {
      const fieldErrors: Record<string, string> = {};

      validateData.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });

      return {
        message: { ...fieldErrors },
      };
    }
    const { phone, password } = validateData.data;

    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (!existUser) {
      return { message: { otherErr: "اطلاعات ورود نادرست است" } };
    }

    const match = await bcrypt.compare(password, existUser.password);
    if (!match) {
      return { message: { otherErr: "اطلاعات ورود نادرست است" } };
    }

    const token = jwt.sign(
      { userId: existUser.id, role: existUser.role },
      process.env.JWT_SECRET!,
      { expiresIn: "30d" }
    );

    const nextcookies = await cookies();
    nextcookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return { message: { success: "ورود موفق" } };
  } catch {
    return { message: { otherErr: "خطای سرور" } };
  }
}
