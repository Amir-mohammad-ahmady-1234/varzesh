"use client";

import React, { useState } from "react";
import DropdownMenuHeader from "./DropdownMenuHeader";
import Button from "../../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <nav className="md:flex items-center gap-6 ">
      {DropItems?.map((item) => (
        <Link
          key={item.id}
          href={item.dropdown?.[0]?.link ?? item.link ?? "#"}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.id)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.dropdown && (
            <DropdownMenuHeader item={item} isOpen={openDropdown === item.id} />
          )}
          <Button
            variant={usage === "header" ? "ghost" : "primary"}
            size="md"
            className={`px-3 py-2 text-neutral-50 hover:text-primary-500 transition-colors flex items-center gap-2  ${
              item.link && item.link !== "/" && pathname?.startsWith(item.link)
                ? "text-primary-100"
                : ""
            } ${item.link === "/" && pathname === "/" && "text-primary-100"}`}
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </nav>
  );
}

export default Dropdown;
