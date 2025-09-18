"use server";

import prisma from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { createUserSchema } from "../../validations/auth";
export interface userRegesterState {
  message: {
    firstname?: string;
    email?: string;
    phone?: string;
    password?: string;
    otherErr?: string;
    success?: string;
  };
}

export async function userRegester(
  prevState: userRegesterState,
  formData: FormData
) {
  try {
    const data = {
      firstname: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validateData = createUserSchema.safeParse(data);

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
    const { firstname, phone, password, email } = validateData.data;
    const existUser = await prisma.user.findUnique({ where: { phone } });
    if (existUser)
      return { message: { otherErr: "این شماره تلفن قبلاً ثبت شده است" } };

    const existingEmail = email
      ? await prisma.user.findUnique({ where: { email } })
      : null;
    if (existingEmail)
      return { message: { otherErr: "این ایمیل قبلاً ثبت شده است" } };
    const hashedPassword = await bcrypt.hash(password, 10);
    const roleToSet: "ADMIN" | "USER" =
      phone === "09134117901" ? "ADMIN" : "USER";

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
    const nextcookies = await cookies();
    nextcookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return { message: { success: "ورود موفق" } };
  } catch (err) {
    console.error(err);
    return { message: { otherErr: "خطای سرور" } };
  }
}
