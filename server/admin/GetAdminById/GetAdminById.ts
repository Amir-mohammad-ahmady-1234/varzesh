import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export default async function GetAdminById() {
  const cookieStore = await cookies();
  const tokenAccess = cookieStore.get("token")?.value;

  if (!tokenAccess || !secret) {
    return false;
  }

  const payload = jwt.verify(tokenAccess, secret) as { role?: string };
  if (payload.role === "USER") {
    return false;
  }
  console.log(payload);

  return true;
}
