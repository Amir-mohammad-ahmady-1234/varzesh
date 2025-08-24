import z from "zod";

export const createUserSchema = z.object({
  firstname: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  email: z.string().email({ message: "ایمیل وارد شده معتبر نمیباشد" }),
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر داشته باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .regex(/[!@#$%^&*]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});

export const LoginSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const getOtpStateSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن باید معتبر باشد")
    .length(11, "شماره تلفن باید ۱۱ رقم باشد"),
});

export const resetPassSchema = z.object({
  password: z
    .string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .regex(/[!@#$%^&*]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
});
