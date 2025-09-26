import Header from "../../components/common/layout/header/Header";
import Footer from "../../components/common/layout/footer/Footer";
import { BtnConditionallyGenerator } from "../../components/common/layout/header/Auth-Or-Profile-btn/BtnConditionallyGenerator";
import { Suspense } from "react";

export const metadata = {
  title: "ورزش 3",
  description:
    "سایت ورزش 3 بزرگترین سایت برای نمایش اخبار فوتبال داخلی و خارجی , نمایش وضعیت لیگ خلیج فارس و اخبار نقل و انتقالات و ....",
};

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
      <Suspense>
        <Header>
          <BtnConditionallyGenerator />
        </Header>
      </Suspense>

      <Suspense>
        <main className="flex-grow ">{children}</main>
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
