import z from "zod";

const statusEnum = z.enum(["Simple", "Medium", "Special"], {
  errorMap: (issue) => {
    if (issue.code === "invalid_enum_value") {
      return {
        message: "وضعیت باید بین این ها باشد :  Simple, Medium, Special",
      };
    }
    if (issue.code === "invalid_type") {
      return { message: "انتخاب دسته بندی الزامی است" };
    }
    return { message: "مقدار وارد شده برای دسته‌بندی نامعتبر است" };
  },
});

export const newsSchema = z.object({
  title: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  status: statusEnum,
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
});
