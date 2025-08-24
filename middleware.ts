import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const url = req.nextUrl.clone();
  const publicPaths = [
    "/auth/login",
    "/auth/register",
    "/auth/resetPass",
    "/api/auth/resereq",
    "/api/auth/sentotp",
    "/api/auth/resetpas",
  ];
  if (publicPaths.includes(url.pathname)) {
    return NextResponse.next();
  }
  if (!token) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
