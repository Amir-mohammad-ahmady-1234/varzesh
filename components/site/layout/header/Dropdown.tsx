"use client";

import React, { useState } from "react";
import DropdownMenuHeader from "./DropdownMenuHeader";
import Button from "../../../../styles/ui/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  DropItems: {
    id: number;
    name: string;
    dropdown: {
      id: number;
      name: string;
    }[];
  }[];
  usage?: string;
}

function Dropdown({ DropItems, usage = "header" }: Props) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
      <nav className="md:flex items-center gap-6 ">
        {DropItems?.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setOpenDropdown(item.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <DropdownMenuHeader item={item} isOpen={openDropdown === item.id} />
            <Button
              variant={usage === "header" ? "ghost" : "primary"}
              size="md"
              className="px-3 py-2 text-neutral-50 hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              {item.name}
              <MdOutlineKeyboardArrowDown />
            </Button>
          </div>
        ))}
      </nav>
  );
}

export default Dropdown;
