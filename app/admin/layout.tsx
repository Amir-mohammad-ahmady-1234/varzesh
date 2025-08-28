import "./globals.css";

import type React from "react";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { GetUserById } from "../../server/user/getuserbyid/GetUserById";
import { redirect } from "next/navigation";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "پنل مدیریت ورزشی",
  description: "پنل مدیریت سایت خبری و ورزشی...",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenId = await GetUserById();

  if (tokenId && tokenId.role === "USER") return redirect("/");

  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={vazirmatn.variable}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
