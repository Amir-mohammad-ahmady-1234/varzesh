"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { HeaderItemHeader } from "./Header";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function DropdownMenuHeader({
  item,
  isOpen,
}: {
  item: HeaderItemHeader;
  isOpen: boolean;
}) {
  const [islogout, setIslogout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function handleLogout() {
      if (!islogout) return;
      try {
        const res = await fetch("http://localhost:3000/api/auth/logout", {
          method: "POST",
        });
        const data = await res.json();
        toast.success("با موفقیت خارج شدید");
        console.log("Guest Api:", data);

        router.push("/auth/login");
      } catch (err) {
        toast.error("خطا در خروج");
        console.log(err);
      }
    }

    handleLogout();
  }, [islogout, router]);

  if (!isOpen || !item.dropdown) return null;

  return (
    <div className="absolute top-full left-0 min-w-[180px] bg-bg-secondary text-center shadow-lg rounded-md overflow-hidden z-50 ">
      {item.dropdown.map((subItem) => (
        <Link
          key={subItem.id}
          href={subItem.name === "پروفایل کاربری" ? "/panel/settings" : ""}
          className="block px-4 py-2 hover:bg-primary-100 transition-colors"
          onClick={
            subItem.name === "خروح"
              ? (e) => {
                  e.preventDefault();
                  setIslogout(true);
                }
              : undefined
          }
        >
          <span>{subItem.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default DropdownMenuHeader;
