import { redirect } from "next/navigation";

export default function page() {
  redirect("/panel/user-info");

  return null;
}
