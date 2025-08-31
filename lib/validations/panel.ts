import z from "zod";

export const changeInfoSchema = z.object({
  profile: z.file({ message: "فایل وارد شده معتبر نمیباشد" }),
  email: z.string().email({ message: "ایمیل وارد شده معتبر نمیباشد" }),
});
