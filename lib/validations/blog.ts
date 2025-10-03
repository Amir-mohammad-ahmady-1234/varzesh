import z from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  category: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  profile: z
    .instanceof(File, { message: "فایل وارد شده معتبر نمی‌باشد" })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "حجم فایل نباید بیشتر از 2 مگابایت باشد",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { message: "فرمت فایل فقط باید PNG, JPG یا WEBP باشد" }
    ),
  img: z
    .instanceof(File, { message: "فایل وارد شده معتبر نمی‌باشد" })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "حجم فایل نباید بیشتر از 1 مگابایت باشد",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { message: "فرمت فایل فقط باید PNG, JPG یا WEBP باشد" }
    ),
  description: z.string().min(20, "حداقل 20 کاراکتر اجباری میباشد"),
  summary: z.string().min(5, "حداقل 5 کاراکتر اجباری میباشد"),
  author: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
});
