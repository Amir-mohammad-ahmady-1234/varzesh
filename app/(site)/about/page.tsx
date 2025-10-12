import Image from "next/image";
import React from "react";
import BoxAboute from "../../../components/pages/home/about/BoxAboute";

const sections = [
  {
    title: "اطلاعات تیم‌ها و بازیکنان",
    context: [
      "صفحات اختصاصی تیم‌ها و بازیکنان",
      "آمار، اخبار، عکس، ویدئو و نمودار عملکرد لحظه‌ای",
    ],
  },
  {
    title: "نتایج زنده",
    context: [
      "پوشش زنده مسابقات ورزشی",
      "نمایش نتایج، رخدادهای مهم، گلزنان و جزئیات بازی‌ها",
    ],
  },
  {
    title: "پوشش ۲۴ ساعته اخبار ورزشی",
    context: [
      "جدیدترین اخبار فوتبال، فوتسال، والیبال، بسکتبال، کشتی و …",
      "اطلاع‌رسانی لحظه‌ای رخدادهای ورزشی",
    ],
  },
  {
    title: "خلاصه بازی‌ها",
    context: [
      "ارائه ویدئوهای خلاصه بازی‌ها",
      "نمایش صحنه‌های حساس مسابقات به صورت لحظه‌ای",
    ],
  },
  {
    title: "نقل و انتقالات",
    context: [
      "گزارش زنده نقل و انتقالات محتمل و انجام‌شده تیم‌های دنیا",
      "آرشیو کامل نقل و انتقالات",
    ],
  },
  {
    title: "روزنامه‌های ورزشی",
    context: [
      "پوشش روزانه روزنامه‌های برتر کشور (خبر ورزشی، ایران ورزشی، شوت، گل و …)",
    ],
  },
  {
    title: "جدول رقابت‌ها و رده‌بندی",
    context: [
      "نمایش جدول رقابت‌های مختلف",
      "رده‌بندی لیگ‌های باشگاهی و ملی به‌صورت لحظه‌ای و به‌روز",
    ],
  },
  {
    title: "ویدئو و تصاویر",
    context: [
      "تماشای تصاویر و ویدئوهای ستاره‌های ورزشی و باشگاه‌های محبوب",
      "آرشیو ویدئویی ۲۴ ساعته تمامی رخدادها بر اساس دسته‌بندی",
    ],
  },
];

export const metadata = {
  title: "درباره ما",
  description: "سایت ورزش یک سایت ورزشی برای اطلاع رسانی اخبار ورزشی جهان",
};

function Page() {
  return (
    <section className="bg-color-bg-primary text-color-neutral-100 font-IRANYekan">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-color-bg-primary z-10" />
        <Image
          src="/assets/img/about/abute.png"
          alt="about image"
          width={1500}
          height={800}
          className="w-full h-[500px] object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-color-primary-100 mb-4">
            درباره <span className="text-color-secondary-100">ورزش سه</span>
          </h1>
          <p className="max-w-3xl text-color-neutral-300 leading-8 text-lg">
            ما در ورزش سه، با تکیه بر تیمی حرفه‌ای از خبرنگاران و تحلیلگران،
            تلاش می‌کنیم تا دقیق‌ترین، سریع‌ترین و معتبرترین اخبار ورزشی را به
            شما ارائه دهیم.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-color-primary-100 mb-2">
              پوشش 24 ساعته و برخط خبرهای ورزشی
            </h2>
            <p className="text-color-neutral-300 leading-9 text-justify text-[1.05rem]">
              ورزش ســه یک پایگاه خبری ورزشـی است که از سال ۱۳۸۹ فعالیت خود را
              آغاز کرد. رسالت ما انتشار سریع، دقیق و بی‌طرفانه‌ی اخبار ورزشی به
              مخاطبان فارسی‌زبان در سراسر جهان است. خبرنگاران ما در نقاط مختلف
              دنیا، روزانه صدها خبر را در دسته‌بندی‌های گوناگون منتشر می‌کنند.
              در حال حاضر، ورزش سه سومین وب‌سایت پربازدید کشور (طبق آمار رسمی
              الکسا) و پربازدیدترین وب‌سایت خبری ایران است.
            </p>
          </div>

          <div className="relative w-full h-[350px] md:h-[420px] rounded-radius-large overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/assets/img/about/abute.png"
              alt="ورزش سه"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl font-bold text-color-primary-200 text-center mb-12">
          خدمات و امکانات ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <BoxAboute
              key={index}
              title={section.title}
              context={section.context}
            />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-color-tertiary-300 py-12 mt-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-color-primary-100 mb-3">
            به جمع میلیون‌ها کاربر ورزش سه بپیوندید
          </h3>
          <p className="text-color-neutral-300 mb-6">
            هر روز با جدیدترین اخبار، ویدئوها و تحلیل‌های ورزشی با ما همراه
            باشید.
          </p>
          <button className="bg-color-primary-100 hover:bg-color-primary-200 text-white font-semibold px-8 py-3 rounded-radius-medium transition-all shadow-md hover:shadow-color-primary-400/40">
            عضویت در خبرنامه
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page;
