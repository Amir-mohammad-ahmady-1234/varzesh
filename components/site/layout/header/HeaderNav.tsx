"use client";

import Dropdown from "../../../common/Dropdown";

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
  return <Dropdown DropItems={headerItems} />;
}
