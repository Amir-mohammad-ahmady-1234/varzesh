"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdSportsFootball,
  MdChat,
  MdSupport,
  MdPalette,
  MdPeople,
  MdMenu,
  MdChevronLeft,
} from "react-icons/md";
import { cn } from "../../../lib/utils";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/admin", label: "داشبورد", icon: MdDashboard },
    { href: "/admin/games", label: "مدیریت بازی‌ها", icon: MdSportsFootball },
    { href: "/admin/chat-rooms", label: "چت روم‌ها", icon: MdChat },
    { href: "/admin/support", label: "پشتیبانی", icon: MdSupport },
    { href: "/admin/design-system", label: "سیستم طراحی", icon: MdPalette },
    { href: "/admin/users", label: "کاربران", icon: MdPeople },
  ];

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col border-l border-sidebar-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <MdSportsFootball className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <h5 className="text-lg font-bold">پنل مدیریت</h5>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-sidebar-ring"
            aria-label={collapsed ? "باز کردن منو" : "بستن منو"}
          >
            {collapsed ? (
              <MdMenu className="w-5 h-5" />
            ) : (
              <MdChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4" role="navigation" aria-label="منوی اصلی">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer group",
                    "focus-visible:outline-2 focus-visible:outline-sidebar-ring",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="font-medium truncate">{item.label}</span>
                  )}
                  {collapsed && <span className="sr-only">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 text-center">
            نسخه ۱.۰.۰
          </div>
        </div>
      )}
    </div>
  );
}
