import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/db";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const hasGuestCookie = cookieHeader.match(/guest_id=([^;]+)/);

  let guestId = hasGuestCookie?.[1];
  const res = NextResponse.json({ message: "user there were" });

  if (!guestId) {
    guestId = randomUUID();
    await prisma.guest.create({
      data: { guestId },
    });
    res.cookies.set("guest_id", guestId, {
      httpOnly: false,
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
  }
  return res;
}
