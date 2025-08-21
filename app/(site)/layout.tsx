"use client";

import Header from "../../components/site/layout/header/Header";
import Footer from "../../components/site/layout/footer/Footer";
import Loading from "../loading";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loader, setLoader] = useState(2);

  setTimeout(() => {
    setLoader(3);
  }, 1000);

  if (loader === 2) return <Loading />;
  return (
    <>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </>
  );
}
