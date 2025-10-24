"use client";

import Dropdown from "./Dropdown";

export const headerItems: {
  id: number;
  name: string;
  link: string;
  dropdown?: { name: string;  link: string; id: number }[];
}[] = [
  {
    id: 1,
    name: "خانه",
    link: "/",
  },
  {
    id: 2,
    name: "پادکست",
    link: "/podcast",
  },
  {
    id: 3,
    name: "ودیو",
    link: "/video",
  },
  {
    id: 4,
    name: "درباره ما",
    link: "/about",
  },
  {
    id: 5,
    name: "تماس با ما",
    link: "/concat",
  },
];

export function HeaderNav() {
  return <Dropdown DropItems={headerItems} />;
}
