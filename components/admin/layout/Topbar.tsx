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
import { cn } from "../../../lib/utils";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useClickOutside } from "../../../hooks/use-click-outside";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [isRTL, setIsRTL] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notificationRef = useClickOutside<HTMLDivElement>(() =>
    setShowNotifications(false)
  );
  const userMenuRef = useClickOutside<HTMLDivElement>(() =>
    setShowUserMenu(false)
  );

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
    <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md relative">
          <MdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="جستجو در پنل مدیریت..."
            className="w-full pr-10"
            aria-label="جستجو"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 cursor-pointer"
            aria-label={
              theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
            }
          >
            {theme === "dark" ? (
              <MdLightMode className="w-5 h-5" />
            ) : (
              <MdDarkMode className="w-5 h-5" />
            )}
          </Button>

          {/* RTL/LTR Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDirection}
            className="p-2 cursor-pointer"
            aria-label={isRTL ? "تغییر به انگلیسی" : "تغییر به فارسی"}
          >
            <MdLanguage className="w-5 h-5" />
          </Button>

          <div className="relative" ref={notificationRef}>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 relative cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label={`اعلان‌ها ${
                unreadCount > 0 ? `(${unreadCount} خوانده نشده)` : ""
              }`}
            >
              <MdNotifications className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-medium">
                  {unreadCount}
                </span>
              )}
            </Button>

            {showNotifications && (
              <div className="absolute left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-popover-foreground">
                    اعلان‌ها
                  </h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-4 border-b border-border last:border-b-0 hover:bg-accent cursor-pointer",
                        notification.unread && "bg-accent/50"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-popover-foreground">
                            {notification.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full cursor-pointer"
                  >
                    مشاهده همه اعلان‌ها
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-ring"
              aria-label="منوی کاربری"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                ا
              </div>
              <span className="text-sm text-foreground font-medium">
                ادمین سیستم
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                <div className="p-2">
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer">
                    <MdAccountCircle className="w-4 h-4" />
                    <span className="text-sm">پروفایل</span>
                  </button>
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer">
                    <MdSettings className="w-4 h-4" />
                    <span className="text-sm">تنظیمات</span>
                  </button>
                  <hr className="my-2 border-border" />
                  <button className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer text-destructive">
                    <MdLogout className="w-4 h-4" />
                    <span className="text-sm">خروج</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
