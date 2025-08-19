import Header from "../../components/site/layout/header/Header";
import Footer from "../../components/site/layout/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </>
  );
}
