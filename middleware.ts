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
    "/auth/resereq",
    "/auth/sentotp",
    "/auth/resetpas",
  ];

  const isPublicPath = publicPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  if (token && isPublicPath) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (isPublicPath) {
    return NextResponse.next();
  }

  // if (!token || url.pathname === "/auth") {
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
