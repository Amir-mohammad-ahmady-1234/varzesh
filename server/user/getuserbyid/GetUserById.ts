import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function GetUserById() {
  const cookieStore = await cookies();
  const tokenAccess = cookieStore.get("token")?.value;

  if (!tokenAccess || !secret) {
    return false;
  }

  try {
    const { payload } = await jwtVerify(tokenAccess, secret);
    return payload as { userId: number; role?: string };
  } catch {
    return null;
  }
}
