"use client";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropdownMenuHeader from "./DropdownMenuHeader";

export const headerItems = [
  {
    id: 1,
    name: "بیشتر",
    dropdown: [
      { id: 11, name: "درباره ما" },
      { id: 12, name: "تماس با ما" },
      { id: 13, name: "سوالات متداول" },
    ],
  },
  {
    id: 2,
    name: "مقالات",
    dropdown: [
      { id: 21, name: "مقالات آموزشی" },
      { id: 22, name: "تازه‌ها" },
      { id: 23, name: "مقالات برتر" },
    ],
  },
  {
    id: 3,
    name: "رده بندی باشگاه ها",
    dropdown: [
      { id: 31, name: "باشگاه های تهران" },
      { id: 32, name: "باشگاه های شهرستان" },
      { id: 33, name: "باشگاه های برتر" },
    ],
  },
  {
    id: 4,
    name: "اخبار دسته بندی",
    dropdown: [
      { id: 41, name: "اخبار ورزشی" },
      { id: 42, name: "اخبار علمی" },
      { id: 43, name: "اخبار فناوری" },
    ],
  },
];

export function HeaderNav() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-6">
      {headerItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="px-3 py-2 text-neutral-50 hover:text-primary-500 transition-colors flex items-center gap-2">
            <MdOutlineKeyboardArrowDown />
            {item.name}
          </button>
          <DropdownMenuHeader item={item} isOpen={openDropdown === item.id} />
        </div>
      ))}
    </nav>
  );
}
