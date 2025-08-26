import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export async function GetUserById() {
  const cookieStore = await cookies();
  const tokenAccess = cookieStore.get("token")?.value;

  if (!tokenAccess || !secret) {
    return false;
  }

  const payload = jwt.verify(tokenAccess, secret) as { role?: string };
  console.log(payload);

  return payload;
}
