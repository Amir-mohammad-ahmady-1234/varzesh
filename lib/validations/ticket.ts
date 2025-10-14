import z from "zod";

export const ticketValidation = z.object({
  title: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  description: z.string().min(3, "حداقل 3 کاراکتر اجباری میباشد"),
  priority: z.enum(["LOW", "NORMAL", "HIGH"], {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "دسته بندی باید یکی از این موارد باشد: LOW, NORMAL, HIGH",
        };
      }
      if (issue.code === "invalid_type") {
        return { message: "انتخاب دسته بندی الزامی است" };
      }
      return { message: "مقدار وارد شده برای دسته‌بندی نامعتبر است" };
    },
  }),
  status: z.enum(["Open", "Waiting", "Approved", "Blocked"], {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message:
            "دسته بندی باید یکی از این موارد باشد: Open, Waiting, Approved , Blocked",
        };
      }
      if (issue.code === "invalid_type") {
        return { message: "انتخاب دسته بندی الزامی است" };
      }
      return { message: "مقدار وارد شده برای دسته‌بندی نامعتبر است" };
    },
  }),
});
