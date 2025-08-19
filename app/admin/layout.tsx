import "./globals.css";

import type React from "react";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Providers from "./providers";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "پنل مدیریت ورزشی",
  description: "پنل مدیریت سایت خبری و ورزشی...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={vazirmatn.variable}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
