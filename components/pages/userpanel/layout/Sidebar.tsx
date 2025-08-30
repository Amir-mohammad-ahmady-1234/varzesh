import { FaComment } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import SidebarClient from "./SidebarClient";

const menuItem = [
  {
    href: "/panel/user-info",
    label: "اطلاعات",
    icon: <FaUserEdit />,
  },
  { href: "/panel/settings", label: "تنظیمات", icon: <IoSettingsOutline /> },
  { href: "/panel/rooms", label: "روم ها", icon: <IoIosChatboxes /> },
  { href: "/panel/messages", label: "پیام ها", icon: <FaComment /> },
  {
    href: "/panel/article",
    label: "مقالات ذخیره شده",
    icon: <MdOutlineArticle />,
  },
];

interface Props {
  isSidebarOpen: boolean;
  children: React.ReactNode;
}

export default function Sidebar({ isSidebarOpen, children }: Props) {
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "block fixed top-10 right-0 z-50" : "hidden"
        }  bg-bg-primary lg:block w-2/4 sm:w-1/3 lg:w-1/4 h-fit px-8 py-10 border-l`}
      >
        <div className="flex flex-col z-1 h-[35rem] justify-between">
          <div className="space-y-8">
            {children}
            <SidebarClient menuItem={menuItem} />
          </div>

          <div className="p-4 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/60 text-center ">
              نسخه {process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
