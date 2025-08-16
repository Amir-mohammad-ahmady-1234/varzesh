import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "log out", ok: true });

  res.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res;
}
