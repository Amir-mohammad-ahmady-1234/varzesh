import { z } from "zod";
import prisma from "../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const LoginSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

type LoginParams = z.infer<typeof LoginSchema>;

export default async function Login(data: LoginParams) {
  const result = LoginSchema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.format() };
  }
  const datauser = result.data;
  const finduser = await prisma.user.findUnique({
    where: { phone: datauser.phone },
  });
  if (!finduser) {
    return { success: false, message: "اطلاعات ورود نادرست است" };
  }

  const match = await bcrypt.compare(datauser.password, finduser.password);

  if (!match) {
    return { success: false, message: "اطلاعات ورود نادرست است" };
  }
  const token = jwt.sign({ userId: finduser.id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
  cookies().set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return { success: true };
}
