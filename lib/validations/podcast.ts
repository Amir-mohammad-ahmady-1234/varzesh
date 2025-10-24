import z from "zod";

const categoryEnum = z
  .enum(["FOOTBALL", "BOXING", "BASKETBALL"])
  .superRefine((value, ctx) => {
    const allowed = ["FOOTBALL", "BOXING", "BASKETBALL"];
    if (!allowed.includes(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "دسته بندی باید یکی از این موارد باشد: FOOTBALL, BOXING, BASKETBALL",
      });
    }
  });

export const podcastSchema = z.object({
  title: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  category: categoryEnum,
  img: z
    .instanceof(File, { message: "فایل وارد شده معتبر نمی‌باشد" })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "حجم فایل نباید بیشتر از 1 مگابایت باشد",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { message: "فرمت فایل فقط باید PNG, JPG یا WEBP باشد" }
    ),
  audio: z
    .instanceof(File, { message: "فایل وارد شده معتبر نمی‌باشد" })
    .refine((file) => file.size <= 30 * 1024 * 1024, {
      message: "حجم فایل صوتی نباید بیشتر از 30 مگابایت باشد",
    })
    .refine(
      (file) =>
        ["audio/mpeg", "audio/mp3", "audio/wav", "audio/webm"].includes(
          file.type
        ),
      { message: "فرمت فایل صوتی فقط باید MP3, WAV یا WEBM باشد" }
    ),
  description: z.string().min(20, "حداقل 20 کاراکتر اجباری میباشد"),
  summary: z.string().min(5, "حداقل 5 کاراکتر اجباری میباشد"),
});
