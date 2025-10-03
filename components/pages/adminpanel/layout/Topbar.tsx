"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
  MdSearch,
  MdLightMode,
  MdDarkMode,
  MdNotifications,
  MdAccountCircle,
  MdSettings,
  MdLogout,
  MdLanguage,
} from "react-icons/md";
import { cn } from "../../../../lib/utils";
import Button from "../../../common/Button";
import Input from "../../../common/Input";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [isRTL, setIsRTL] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleDirection = () => {
    const newIsRTL = !isRTL;
    setIsRTL(newIsRTL);
    document.documentElement.dir = newIsRTL ? "rtl" : "ltr";
    document.documentElement.lang = newIsRTL ? "fa" : "en";
  };

  const notifications = [
    { id: 1, title: "پیام جدید گزارش شده", time: "۵ دقیقه پیش", unread: true },
    { id: 2, title: "تیکت پشتیبانی جدید", time: "۱۰ دقیقه پیش", unread: true },
    { id: 3, title: "بازی جدید اضافه شد", time: "۱ ساعت پیش", unread: false },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-card/80 backdrop-blur border-b border-border px-4 md:px-6 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between gap-4">
        <div className="hidden md:flex flex-1 max-w-md relative">
          <MdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="جستجو در پنل مدیریت..."
            className="w-full pr-10"
            aria-label="جستجو"
          />
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSearch(!showSearch)}
          >
            <MdSearch className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
            }
            className="rounded-full"
          >
            {theme === "dark" ? (
              <MdLightMode className="w-5 h-5" />
            ) : (
              <MdDarkMode className="w-5 h-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDirection}
            aria-label={isRTL ? "تغییر به انگلیسی" : "تغییر به فارسی"}
            className="rounded-full"
          >
            <MdLanguage className="w-5 h-5" />
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <MdNotifications className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -left-1 w-4 h-4 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>

            {showNotifications && (
              <div className="absolute left-0 mt-2 w-72 sm:w-80 bg-popover border border-border rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-popover-foreground">
                    اعلان‌ها
                  </h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={cn(
                        "p-4 border-b border-border last:border-b-0 hover:bg-accent cursor-pointer transition-colors",
                        n.unread && "bg-accent/50"
                      )}
                    >
                      <p className="text-sm font-medium">{n.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {n.time}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-border">
                  <Button variant="secondary" size="sm" className="w-full">
                    مشاهده همه اعلان‌ها
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-full transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-semibold">
                ا
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                ادمین سیستم
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg">
                    <MdAccountCircle className="w-4 h-4" />
                    <span className="text-sm">پروفایل</span>
                  </button>
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg">
                    <MdSettings className="w-4 h-4" />
                    <span className="text-sm">تنظیمات</span>
                  </button>
                  <hr className="my-2 border-border" />
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg text-destructive">
                    <MdLogout className="w-4 h-4" />
                    <span className="text-sm">خروج</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="mt-3 md:hidden transition-all">
          <Input
            type="text"
            placeholder="جستجو..."
            className="w-full"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}
