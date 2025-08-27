import React from "react";
import { HeaderItemHeader } from "../site/layout/header/Header";
import Link from "next/link";
function DropdownMenuHeader({
  item,
  isOpen,
}: {
  item: HeaderItemHeader;
  isOpen: boolean;
}) {
  if (!isOpen || !item.dropdown) return null;

  return (
    <div className="absolute top-full left-0 min-w-[180px] bg-bg-secondary text-center shadow-lg rounded-md overflow-hidden z-50 ">
      {item.dropdown.map((subItem) => (
        <Link
          key={subItem.id}
          href="#"
          className="block px-4 py-2 hover:bg-secondary-100 transition-colors"
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  );
}

export default DropdownMenuHeader;
