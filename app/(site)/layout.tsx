import Header from "../../components/common/layout/header/Header";
import Footer from "../../components/common/layout/footer/Footer";
import { BtnConditionallyGenerator } from "../../components/common/layout/header/Auth-Or-Profile-btn/BtnConditionallyGenerator";

export const metadata = {
  title: "ورزش 3",
  description:
    "سایت ورزش 3 بزرگترین سایت برای نمایش اخبار فوتبال داخلی و خارجی , نمایش وضعیت لیگ خلیج فارس و اخبار نقل و انتقالات و ....",
};

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

      <main className="flex-grow ">{children}</main>

      <Footer />
    </>
  );
}
