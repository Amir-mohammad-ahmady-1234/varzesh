"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Items from "./Items";

import { FaComment } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";

const menuItem = [
  {
    href: "/panel/user-info",
    lable: "اطلاعات",
    icon: FaUserEdit,
  },
  { href: "/panel/settings", lable: "تنظیمات", icon: IoSettingsOutline },
  { href: "/panel/rooms", lable: "روم ها", icon: IoIosChatboxes },
  { href: "/panel/messages", lable: "پیام ها", icon: FaComment },
  { href: "/panel/article", lable: "مقالات ذخیره شده", icon: MdOutlineArticle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-1/5 h-[100vh] px-8 py-10 border-l">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div>
              <Image
                src={"/img/footer/union.png"}
                alt="user profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p>Amir</p>
              <p>09059796518</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {menuItem.map((item) => (
              <Items item={item} pathname={pathname} key={item.href} />
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 text-center">
            نسخه ۱.۰.۰
          </div>
        </div>
      </div>
    </div>
  );
}
