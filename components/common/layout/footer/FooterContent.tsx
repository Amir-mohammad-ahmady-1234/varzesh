import React from "react";
import Image from "next/image";

import { ImFacebook, ImInstagram, ImTelegram, ImTwitter } from "react-icons/im";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { footerLinks } from "../../../../mocks/footerLinks";
function FooterContent() {
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="md:w-1/4 w-full text-right flex flex-col p-5">
          <div className="flex mb-5">
            <Image
              src={"/assets/img/logo/logo.png"}
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
            <div key={section.id} className="text-right w-full mt-10 ">
              <div className="flex mb-5">
                <Image
                  src={"/assets/img/footer/Frame.png"}
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
                    <li className="hover:text-primary-100 cursor-pointer">
                      {link}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="bg-primary-100 p-3 md:p-4 rounded-full cursor-pointer hover:rotate-360 hover:bg-tertiary-300 duration-1000">
          <ImInstagram />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full cursor-pointer hover:rotate-360 hover:bg-tertiary-300 duration-1000">
          <ImFacebook />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full cursor-pointer hover:rotate-360 hover:bg-tertiary-300 duration-1000">
          <ImTelegram />
        </div>
        <div className="bg-primary-100 p-3 md:p-4 rounded-full cursor-pointer hover:rotate-360 hover:bg-tertiary-300 duration-1000">
          <ImTwitter />
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
