import { redirect } from "next/navigation";

export const metadata = {
  title: "پنل ادمین",
  description: "پنل ادمین برای مدیریت سایت در دسترس ادمین های سایت",
};

function page() {
  redirect("/admin/dashboard");
}

export default page;
