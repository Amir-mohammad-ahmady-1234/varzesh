"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Items from "./Items";

import { FaComment } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import MobileHeader from "./MobileHeader";
import UserProfile from "./UserProfile";

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`${
          !isSidebarOpen && "hidden"
        } lg:block w-2/4 sm:w-1/3 lg:w-1/4 h-[100vh] px-8 py-10 border-l`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-8">
            <UserProfile />
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
    </>
  );
}
