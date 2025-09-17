import "../styles/globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { GuestTracker } from "../lib/GuestTracker";

export const metadata: Metadata = {
  title: "ورزش 3 ",
  description: "سایت ورزش 3 ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl">
        <GuestTracker />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
