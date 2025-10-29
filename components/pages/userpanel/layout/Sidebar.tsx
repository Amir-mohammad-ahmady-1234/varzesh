import { FaTicketAlt, FaUserEdit } from "react-icons/fa";
import SidebarClient from "./SidebarClient";
import { MdLogout } from "react-icons/md";

const menuItem = [
  {
    href: "/panel/user-info",
    label: "اطلاعات",
    icon: <FaUserEdit />,
  },
  {
    href: "/panel/ticket",
    label: "پشتیبانی",
    icon: <FaTicketAlt />,
  },
  {
    href: "/",
    label: "بازگشت",
    icon: <MdLogout className="text-error-500" />,
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
        className={`fixed top-10 right-0 z-50 h-screen transition-all duration-300 ease-in-out bg-gradient-to-b from-bg-primary to-bg-secondary border-l border-sidebar-border shadow-2xl backdrop-blur-md
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        lg:translate-x-0 lg:static lg:block w-3/4 sm:w-1/3 lg:w-1/4 px-6 py-10`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-10">
            <div className="flex flex-col items-center text-center">
              {children}
            </div>

            <SidebarClient menuItem={menuItem} />
          </div>

          <div className="mt-10 border-t border-sidebar-border pt-4">
            <div className="text-xs text-sidebar-foreground/60 text-center tracking-wide">
              نسخه{" "}
              <span className="font-semibold text-sidebar-foreground/80">
                {process.env.NEXT_PUBLIC_APP_VERSION ?? "1.0.0"}
              </span>
            </div>
            <div className="text-[10px] text-center mt-2 text-sidebar-foreground/40">
              طراحی شده با ❤️ توسط مهدی و امیر
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
