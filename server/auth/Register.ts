import { z } from "zod";
import prisma from "../../lib/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const createUserSchema = z.object({
  firstname: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

type CreateUserParams = z.infer<typeof createUserSchema>;

export default async function CreateUsers(data: CreateUserParams) {
  const result = createUserSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.format() };
  }

  const validatedDataRegister = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { phone: validatedDataRegister.phone },
  });

  if (existingUser) {
    return { success: false, message: "این شماره تلفن قبلاً ثبت شده است" };
  }
  const roleToSet: "ADMIN" | "USER" =
    validatedDataRegister.phone === "09134117901" ? "ADMIN" : "USER";
  const token = jwt.sign(
    {
      roleToSet,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "30d" }
  );
  const hashedPassword = await bcrypt.hash(validatedDataRegister.password, 10);
  const user = await prisma.user.create({
    data: {
      firstname: validatedDataRegister.firstname,
      phone: validatedDataRegister.phone,
      password: hashedPassword,
      role: roleToSet,
      jwt: token,
    },
  });

  return { success: true, user };
}
