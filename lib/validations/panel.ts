import z from "zod";

export const changeInfoSchema = z.object({
  profile: z
    .instanceof(File, { message: "فایل وارد شده معتبر نمی‌باشد" })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "حجم فایل نباید بیشتر از 2 مگابایت باشد",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { message: "فرمت فایل فقط باید PNG, JPG یا WEBP باشد" }
    ),
  email: z.string().email({ message: "ایمیل وارد شده معتبر نمیباشد" }),
});

export const updateInfoSchema = z.object({
  name: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  email: z.string().email({ message: "ایمیل وارد شده معتبر نمیباشد" }),
});
