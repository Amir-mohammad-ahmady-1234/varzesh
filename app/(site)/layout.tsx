import Header from "../../components/common/layout/header/Header";
import Footer from "../../components/common/layout/footer/Footer";
import { BtnConditionallyGenerator } from "../../components/common/layout/header/Auth-Or-Profile-btn/BtnConditionallyGenerator";

function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await fakeDelay(1000);

  return (
    <>
      <Header>
        <BtnConditionallyGenerator />
      </Header>

      <main className="flex-grow ">{children}</main>

      <Footer />
    </>
  );
}
