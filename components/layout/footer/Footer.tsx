import Image from "next/image";
import React from "react";
import { ImFacebook, ImInstagram, ImTelegram, ImTwitter } from "react-icons/im";
const footerLinks = [
  {
    title: "سرویس ها",
    links: [
      "گزارش مردمی",
      "اخبار ورزشی",
      "پادکست",
      "لیگ ها و رقابت ها",
      "ویدیو",
    ],
  },
  {
    title: "راهنما",
    links: [
      "صفحه اصلی",
      "درباره ما",
      "ارتباط با ما",
      "فرصت های شغلی",
      "قوانین و مقررات",
    ],
  },
  {
    title: "سرویس ها",
    links: ["روزنامه", "نتایج زنده", "آنتن", "پیش بینی", "پخش زنده"],
  },
  {
    title: "سایر",
    links: [
      "جام ملت های آسیا",
      "بازی های آسیایی ۲۰۲۳",
      "رنکینگ فیفا",
      "نقل و انتقالات",
      "جدول لیگ برتر ایران",
    ],
  },
];
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="bg-primary-100 flex items-center justify-center gap-[215px] p-4">
        <Image
          src={"/img/footer/Union.png"}
          alt="footericons"
          width={60}
          height={60}
        />
        <Image
          src={"/img/footer/Union(1).png"}
          alt="footericons"
          width={60}
          height={60}
        />
        <Image
          src={"/img/footer/Vector(1).png"}
          alt="footericons"
          width={60}
          height={60}
        />
        <Image
          src={"/img/footer/Vector(2).png"}
          alt="footericons"
          width={60}
          height={60}
        />
        <Image
          src={"/img/footer/Vector(3).png"}
          alt="footericons"
          width={60}
          height={60}
        />
      </div>
      <div className="w-full md:w-[1344px] mx-auto">
        <div>
          <div className="flex items-center">
            <div className="w-3/4 flex justify-end items-center">
              {footerLinks.map((section) => (
                <div key={section.title} className="text-right w-full mt-10">
                  <div className="flex justify-end mb-5">
                    <h6>{section.title}</h6>
                    <Image
                      src={"/img/footer/Frame.png"}
                      alt="footer iconss"
                      width={10}
                      height={10}
                    />
                  </div>
                  <ul>
                    {section.links.map((link) => (
                      <div key={link} className="flex justify-end space-y-1.5 ">
                        <li>{link}</li>
                        <MdOutlineKeyboardArrowLeft />
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="w-1/4 text-right flex flex-col p-5">
              <div className="flex justify-end mb-5">
                <Image
                  src={"/img/logo/logo.png"}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <p>
                با ورزش سه از ورزش بیشتر لذت ببر! میتونی اخبار مهم تیم محبوبت رو
                یکجا ببینی، نتایج زنده رو دنبال کنی و ویدئو خلاصه بازی‌ ها رو
                تماشا کنی!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 p-4">
            <div className="bg-primary-100 p-4 rounded-full">
              <ImInstagram />
            </div>
            <div className="bg-primary-100 p-4 rounded-full">
              <ImFacebook />
            </div>
            <div className="bg-primary-100 p-4 rounded-full">
              <ImTelegram />
            </div>
            <div className="bg-primary-100 p-4 rounded-full">
              <ImTwitter />
            </div>
          </div>
        </div>
        <hr className="text-neutral-100  " />
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-center gap-3 p-7">
            <Image
              src={"/img/footer/Union.png"}
              alt="footericons"
              width={30}
              height={30}
            />
            <Image
              src={"/img/footer/Union(1).png"}
              alt="footericons"
              width={30}
              height={30}
            />
            <Image
              src={"/img/footer/Vector(1).png"}
              alt="footericons"
              width={30}
              height={30}
            />
            <Image
              src={"/img/footer/Vector(2).png"}
              alt="footericons"
              width={30}
              height={30}
            />
            <Image
              src={"/img/footer/Vector(3).png"}
              alt="footericons"
              width={30}
              height={30}
            />
          </div>
          <p className="text-sm">
            تمام حقوق مادی و معنوی این سایت متعلق به ورزش سه می باشد. شما می
            توانید از سایت ورزش سه در صورت پذیرش موافقت نامه کاربری استفاده
            نمایید.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
