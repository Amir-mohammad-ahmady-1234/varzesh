import Header from "../../components/common/layout/header/Header";
import Footer from "../../components/common/layout/footer/Footer";
import { BtnConditionallyGenerator } from "../../components/common/layout/header/Auth-Or-Profile-btn/BtnConditionallyGenerator";
import { GetUserById } from "../../server/user/getuserbyid/GetUserById";

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
  const user = await GetUserById();

  const isAdmin = user && typeof user !== "boolean" && user.role === "ADMIN";

  return (
    <>
      <Header isAdmin={isAdmin}>
        <BtnConditionallyGenerator />
      </Header>

      <main className="flex-grow ">{children}</main>

      <Footer />
    </>
  );
}
