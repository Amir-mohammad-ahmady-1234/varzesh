import { cookies } from "next/headers";

export default async function CheckUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return false;
  }

  return token;
}
