import Header from "../../components/site/layout/header/Header";
import Footer from "../../components/site/layout/footer/Footer";
import { BtnConditionallyGenerator } from "../../components/site/layout/header/Auth-Or-Profile-btn/BtnConditionallyGenerator";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <BtnConditionallyGenerator />
      </Header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </>
  );
}
