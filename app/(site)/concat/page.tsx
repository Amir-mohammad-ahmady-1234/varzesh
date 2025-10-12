import React from "react";
import Button from "../../../components/common/Button";

export const metadata = {
  title: "تماس با ما",
  description: "ارتباط با تیم ورزش‌سه و ارسال پیام کاربران",
};

function ContactPage() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-600 via-tertiary-200 to-primary-300 py-16 px-4"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

      <div className="relative z-10 shadow-2xl rounded-3xl w-full max-w-6xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 md:flex md:gap-10 p-8 md:p-12">
        <div className="md:w-1/2 text-neutral-100">
          <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-l from-secondary-100 to-primary-400">
            ارتباط با ما
          </h1>
          <p className="text-neutral-300 mb-8 leading-relaxed text-sm md:text-base">
            اگر پیشنهاد، انتقاد یا پیامی برای ما دارید، خوشحال می‌شویم از طریق
            فرم زیر با ما در ارتباط باشید.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold text-neutral-200">
                نام:
              </label>
              <input
                type="text"
                name="name"
                placeholder="نام خود را وارد کنید"
                className="w-full bg-tertiary-300/50 border border-neutral-500/30 text-neutral-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary-100 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-neutral-200">
                شماره تلفن:
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="مثال: 0912xxxxxxx"
                className="w-full bg-tertiary-300/50 border border-neutral-500/30 text-neutral-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary-100 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-neutral-200">
                موضوع:
              </label>
              <input
                type="text"
                name="subject"
                placeholder="موضوع پیام"
                className="w-full bg-tertiary-300/50 border border-neutral-500/30 text-neutral-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary-100 transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-neutral-200">
                پیام شما:
              </label>
              <textarea
                name="message"
                placeholder="پیام خود را اینجا بنویسید..."
                className="w-full bg-tertiary-300/50 border border-neutral-500/30 text-neutral-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary-100 transition-all duration-300"
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full bg-gradient-to-l from-secondary-100 to-primary-200 text-white font-bold p-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              ارسال پیام
            </Button>
          </form>
        </div>

        {/* اطلاعات تماس */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-tertiary-400/60 via-tertiary-500/30 to-primary-400/10 border border-white/10 shadow-lg text-neutral-100">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-secondary-200">
            اطلاعات تماس
          </h2>

          <div className="space-y-4 text-sm md:text-base leading-loose">
            <p>
              <span className="text-secondary-100 font-semibold">تلفن:</span>{" "}
              ۰۲۱-۹۱۰۰۷۶۵۰
            </p>
            <p>
              <span className="text-secondary-100 font-semibold">ایمیل:</span>{" "}
              varzesh3@email.com
            </p>
            <p>
              <span className="text-secondary-100 font-semibold">آدرس:</span>{" "}
              تهران، خیابان ورزش، پلاک ۳
            </p>
          </div>

          <p className="mt-6 text-neutral-300 text-sm leading-relaxed">
            همچنین می‌توانید از طریق فرم سمت چپ، پیام خود را برای ما ارسال کنید.
            تیم پشتیبانی در سریع‌ترین زمان ممکن پاسخ‌گوی شما خواهد بود.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
