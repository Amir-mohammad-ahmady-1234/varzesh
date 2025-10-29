"use client";

import React, { useState } from "react";
import DropdownMenuHeader from "./DropdownMenuHeader";
import Button from "../../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiDotsVertical } from "react-icons/hi";

interface DropItem {
  id: number;
  name: string;
  link?: string;
  dropdown?: {
    id: number;
    name: string;
    link: string;
  }[];
}

interface Props {
  DropItems?: DropItem[];
  usage?: string;
}

function Dropdown({ DropItems, usage = "header" }: Props) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative">
      {/* --- دسکتاپ --- */}
      <div className="hidden md:flex items-center gap-6">
        {DropItems?.map((item) => (
          <Link
            key={item.id}
            href={item.dropdown?.[0]?.link ?? item.link ?? "#"}
            className="relative"
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.dropdown && (
              <DropdownMenuHeader
                item={item}
                isOpen={openDropdown === item.id}
              />
            )}
            <Button
              variant={usage === "header" ? "ghost" : "primary"}
              size="md"
              className={`px-3 py-2 text-neutral-50 hover:text-primary-500 transition-colors flex items-center gap-2 ${
                item.link &&
                item.link !== "/" &&
                pathname?.startsWith(item.link)
                  ? "text-primary-100"
                  : ""
              } ${item.link === "/" && pathname === "/" && "text-primary-100"}`}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </div>

      {/* --- موبایل --- */}
      <div className="md:hidden relative">
        {/* دکمه اصلی (اسم + سه نقطه) */}
        <Button
          onClick={() => setMobileOpen((prev) => !prev)}
          variant="primary"
          size="md"
          className="flex items-center justify-between w-full gap-2 px-4 py-2 text-sm font-medium rounded-xl"
        >
          <span>{DropItems?.[0]?.name ?? "منو"}</span>
          <HiDotsVertical size={18} className="opacity-80" />
        </Button>

        {/* منو */}
        {mobileOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-full bg-neutral-900 border border-neutral-800 
                       rounded-2xl shadow-xl z-50 origin-top animate-slideDown overflow-hidden"
          >
            {DropItems?.[0]?.dropdown?.map((sub) => (
              <Link
                key={sub.id}
                href={sub.link}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-neutral-200 
                           hover:bg-neutral-800/70 hover:text-primary-400 transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Dropdown;
