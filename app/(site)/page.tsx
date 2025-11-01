import React, { Suspense } from "react";
import Container from "../../components/common/Container";
import HomeDeepSearch from "../../components/pages/home/head/HomeDeepSearch";
import LiveViideo from "../../components/common/LiveViideo";
import HomeImageSlider from "../../components/pages/home/head/HomeImageSlider";
import HomeLiveresults from "../../components/pages/home/head/HomeLiveresults";
import HomeExercises from "../../components/pages/home/category/HomeExercises";
import HomeNews from "../../components/pages/home/news/HomeNews";
import ChatButton from "../../components/pages/home/ai/ChatButton";
import HomeLiveresultsSkeleton from "../../components/skeletons/HomeLiveresultsSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورزش 3 | اخبار و پادکست‌های ورزشی",
  description:
    "در ورزش 3 می‌توانید جدیدترین اخبار، بلاگ‌ها و پادکست‌های ورزشی را دنبال کنید؛ از فوتبال تا بوکس و بدنسازی.",
  keywords: [
    "فوتبال",
    "بوکس",
    "شنا",
    "تیراندازی",
    "بدنسازی",
    "پادکست ورزشی",
    "اخبار ورزش",
  ],
  openGraph: {
    title: "ورزش 3 | اخبار و پادکست‌های ورزشی",
    description:
      "در ورزش 3 می‌توانید جدیدترین اخبار، بلاگ‌ها و پادکست‌های ورزشی را دنبال کنید.",
    siteName: "ورزش 3",
    url: "https://varzesh-frg6.vercel.app/",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "/assets/img/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "لوگوی سایت ورزش 3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ورزش 3 | اخبار و پادکست‌های ورزشی",
    description:
      "در ورزش 3 می‌توانید جدیدترین اخبار، بلاگ‌ها و پادکست‌های ورزشی را دنبال کنید؛ از فوتبال تا بوکس و بدنسازی.",
    creator: "@amirMohammad",
    images: ["/assets/img/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://varzesh-frg6.vercel.app/",
  },
};

function HomePage() {
  return (
    <Container className="flex flex-col space-y-8">
      <section className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/3 h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <HomeImageSlider />
        </div>

        <div className="w-full md:w-1/3">
          <Suspense fallback={<HomeLiveresultsSkeleton />}>
            <HomeLiveresults />
          </Suspense>
        </div>
      </section>

      <HomeDeepSearch />
      <HomeExercises />
      <LiveViideo />
      <HomeNews />

      <ChatButton />
    </Container>
  );
}

export default HomePage;
