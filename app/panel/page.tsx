import { redirect } from "next/navigation";

export const metadata = {
  title: "پنل کاربری",
  description: "پنل کاربر",
};

export default function page() {
  redirect("/panel/user-info");
}
