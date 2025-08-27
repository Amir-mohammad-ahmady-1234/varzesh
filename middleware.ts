import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { userId: number; role?: string };
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const payload = await verifyToken(token ?? "");

  const url = req.nextUrl.clone();
  const publicPaths = [
    "/auth/login",
    "/auth/register",
    "/api/auth/login",
    "/api/auth/register",
    "/auth/resetPass",
    "/api/auth/resereq",
    "/api/auth/sentotp",
    "/api/auth/resetpas",
  ];

  if (token && url.pathname.startsWith("/auth")) {
    console.log("yes");
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (publicPaths.includes(url.pathname)) {
    return NextResponse.next();
  }

  if (payload?.role === "USER" && url.pathname.startsWith("/admin")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "/admin") {
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  if (!token || url.pathname === "/auth" || url.pathname === "/admin") {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
