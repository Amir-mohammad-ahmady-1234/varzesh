import React from "react";
import Image from "next/image";

import { ImFacebook, ImInstagram, ImTelegram, ImTwitter } from "react-icons/im";
import { footerLinks } from "../../../mocks/footerLinks";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
function FooterContent() {
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="md:w-1/4 w-full text-right flex flex-col p-5">
          <div className="flex  mb-5">
            <Image
              src={"/img/logo/logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <p>
            با ورزش سه از ورزش بیشتر لذت ببر! میتونی اخبار مهم تیم محبوبت رو
            یکجا ببینی، نتایج زنده رو دنبال کنی و ویدئو خلاصه بازی‌ ها رو تماشا
            کنی!
          </p>
        </div>
        <div className="w-3/4 grid grid-cols-2 md:grid-cols-4  items-center">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-right w-full mt-10 ">
              <div className="flex  mb-5">
                <Image
                  src={"/img/footer/Frame.png"}
                  alt="footer iconss"
                  width={10}
                  height={10}
                />
                <h6>{section.title}</h6>
              </div>
              <ul>
                {section.links.map((link) => (
                  <div key={link} className="flex  space-y-4.5 ">
                    <MdOutlineKeyboardArrowLeft />
                    <li>{link}</li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center  gap-4 p-4">
        <div className="bg-primary-100 p-3 md:p-4 rounded-full">
          <ImInstagram />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full">
          <ImFacebook />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full">
          <ImTelegram />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full">
          <ImTwitter />
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
