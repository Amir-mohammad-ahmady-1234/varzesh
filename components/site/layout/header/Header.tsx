"use client";

import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export type DropdownItemHeader = { id: number; name: string };
export type HeaderItemHeader = {
  id: number;
  name: string;
  dropdown?: DropdownItemHeader[];
};

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full md:w-[1344px] mx-auto p-4">
        {/* mobile  */}
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />

        {/* desktop */}
        <DesktopHeader />
      </header>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}
