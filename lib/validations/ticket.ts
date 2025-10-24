import z from "zod";

export const ticketValidation = z.object({
  title: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  description: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),

  priority: z.enum(["LOW", "NORMAL", "HIGH"]).superRefine((value, ctx) => {
    const allowed = ["LOW", "NORMAL", "HIGH"];
    if (!allowed.includes(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "دسته بندی باید یکی از این موارد باشد: LOW, NORMAL, HIGH",
      });
    }
  }),

  status: z
    .enum(["Open", "Waiting", "Approved", "Blocked"])
    .superRefine((value, ctx) => {
      const allowed = ["Open", "Waiting", "Approved", "Blocked"];
      if (!allowed.includes(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "دسته بندی باید یکی از این موارد باشد: Open, Waiting, Approved, Blocked",
        });
      }
    }),
});
