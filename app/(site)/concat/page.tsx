import React from "react";
import Button from "../../../components/common/Button";

export const metadata = {
  title: "تماس با ما",
  description: "تماس با ما",
};

function ContactPage() {
  return (
    <div className="flex items-center justify-center " dir="rtl">
      <div className=" shadow-md rounded-lg w-full max-w-6xl p-6 md:flex md:gap-8">
        <div className="md:w-1/2 text-white">
          <h1 className="text-2xl font-bold mb-4 text-white">ارتباط با ما</h1>
          <p className="text-gray-600 mb-6">
            چنانچـه پیشنهـاد و انتقـادی دارید، پیـام خـود را از طریق فرم موجود
            در این صفحه برای ما ارسال کنید.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">نام:</label>
              <input
                type="text"
                name="name"
                placeholder="نام خود را وارد کنید"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">شماره تلفن:</label>
              <input
                type="tel"
                name="phone"
                placeholder="مثال: 0912xxxxxxx"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">موضوع:</label>
              <input
                type="text"
                name="subject"
                placeholder="موضوع پیام"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">پیام شما:</label>
              <textarea
                name="message"
                placeholder="پیام خود را اینجا برای ما بنویسید ..."
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              ارسال
            </Button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center p-4 rounded-lg text-white">
          <h2 className="text-xl font-bold mb-4">اطلاعات تماس</h2>
          <p className="mb-2">تلفن: 021-91007650</p>
          <p className="mb-2">ایمیل: varzesh3@email.com</p>
          <p className="mb-2">آدرس: تهران، خیابان ورزش، پلاک ۳</p>
          <p className="text-gray-700 mt-4">
            چنانچـه پیشنهـاد و انتقـادی دارید، می‌توانید از طریق فرم سمت چپ یا
            با استفاده از اطلاعات تماس با ما ارتباط برقرار کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
