import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CheckUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  return token;
}
