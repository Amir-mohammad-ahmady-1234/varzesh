import { NextResponse } from "next/server";
import prisma from "../../../../../lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const userId = Number(id);
  if (isNaN(userId)) {
    return NextResponse.json({ ok: false, message: "ID نامعتبر است" });
  }
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    return NextResponse.json({ ok: false, message: "User not found" });
  }
  return NextResponse.json({ ok: true, user });
}
