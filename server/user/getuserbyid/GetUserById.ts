import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export default async function GetUserById() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return false;
  try {
    const decodedjwt = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      role: string;
    };
    return decodedjwt.userId;
  } catch {
    return false;
  }
}
