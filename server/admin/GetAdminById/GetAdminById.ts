import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import prisma from "../../../lib/db";
export default async function GetUserById() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return false;
  try {
    const decodedjwt = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      role: string;
    };
    if (decodedjwt.role === "USER") {
      return false;
    }
    const userid = Number(decodedjwt.userId);
    const existuser = await prisma.user.findUnique({
      where: { id: userid },
    });
    if (!existuser) return false;
    return { message: "ok", id: existuser.id, firstname: existuser.firstname };
  } catch {
    return { message: "ایدی ارسالی ناقص است" };
  }
}
