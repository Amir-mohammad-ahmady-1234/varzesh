"use client";

import { usePathname } from "next/navigation";
import Items from "./Items";
import { JSX } from "react";

interface Props {
  menuItem: {
    href: string;
    label: string;
    icon: JSX.Element;
  }[];
}

export default function SidebarClient({ menuItem }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {menuItem.map((item) => (
        <Items item={item} pathname={pathname} key={item.href} />
      ))}
    </div>
  );
}
