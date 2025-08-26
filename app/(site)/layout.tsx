import Header from "../../components/site/layout/header/Header";
import Footer from "../../components/site/layout/footer/Footer";
import CheckUser from "../../lib/check/Check";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await CheckUser();

  return (
    <>
      <Header token={token} />

      <main className="flex-grow">{children}</main>

      <Footer />
    </>
  );
}
