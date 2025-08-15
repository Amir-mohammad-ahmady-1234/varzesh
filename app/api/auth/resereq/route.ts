import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(req: Request) {
  const { phone } = await req.json();
  const existphone = await prisma.user.findUnique({
    where: { phone },
  });

  if (!existphone) {
    return NextResponse.json({ message: "User has already registered " });
  }
}
