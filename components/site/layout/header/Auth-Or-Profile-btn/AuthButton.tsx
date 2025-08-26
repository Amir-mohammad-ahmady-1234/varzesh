import Link from "next/link";
import React from "react";

export function AuthButton({ children }: { children: React.ReactNode }) {
  return <Link href="/auth/register">{children}</Link>;
}
